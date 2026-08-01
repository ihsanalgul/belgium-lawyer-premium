import { translations, supportedLanguages, defaultLanguage } from '../data/translations.js';
import { refreshAppointmentsLocale } from './appointments.js';
import { detectGeoLanguage } from './geo-lang.js';
import { refreshThemeToggleLabels } from './theme.js';
import { renderExpertiseItems } from './expertise.js';
import { initScrollReveal } from './scroll-reveal.js';
import { updateFooterBarSicil } from './site-init.js';

const STORAGE_KEY = 'lang';
const MANUAL_KEY = 'lang-manual';

function getNestedValue(obj, path) {
  return path.split('.').reduce((acc, key) => acc?.[key], obj);
}

function detectBrowserLanguage() {
  const languages = navigator.languages?.length
    ? navigator.languages
    : [navigator.language];

  for (const lang of languages) {
    if (!lang) continue;
    const normalized = lang.toLowerCase();
    if (normalized.startsWith('tr')) return 'tr';
    if (normalized.startsWith('fr')) return 'fr';
    if (normalized.startsWith('nl')) return 'nl';
    if (normalized.startsWith('en')) return 'en';
  }

  return defaultLanguage;
}

async function resolveInitialLanguage() {
  const params = new URLSearchParams(window.location.search);
  const urlLang = params.get('lang');
  if (urlLang && supportedLanguages.includes(urlLang)) {
    return urlLang;
  }

  const stored = localStorage.getItem(STORAGE_KEY);
  const isManual = localStorage.getItem(MANUAL_KEY) === 'true';
  if (stored && supportedLanguages.includes(stored) && isManual) {
    return stored;
  }

  const geoLang = await detectGeoLanguage();
  if (geoLang) return geoLang;

  return detectBrowserLanguage();
}

function updateMeta(lang) {
  const t = translations[lang];
  document.title = t.meta.title;

  const desc = document.querySelector('meta[name="description"]');
  if (desc) desc.setAttribute('content', t.meta.description);

  const ogTitle = document.querySelector('meta[property="og:title"]');
  if (ogTitle) ogTitle.setAttribute('content', t.meta.title);

  const ogDesc = document.querySelector('meta[property="og:description"]');
  if (ogDesc) ogDesc.setAttribute('content', t.meta.description);
}

function syncLanguageSelects(lang) {
  document.querySelectorAll('.lang-select').forEach((select) => {
    select.value = lang;
  });
}

export function setLanguage(lang, { manual = false } = {}) {
  if (!supportedLanguages.includes(lang)) return;

  const t = translations[lang];
  document.documentElement.lang = lang;
  localStorage.setItem(STORAGE_KEY, lang);
  if (manual) {
    localStorage.setItem(MANUAL_KEY, 'true');
  }

  document.querySelectorAll('[data-i18n]').forEach((el) => {
    const key = el.dataset.i18n;
    const value = getNestedValue(t, key);
    if (value === undefined) return;

    if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
      if (el.type !== 'checkbox') {
        el.placeholder = value;
      }
    } else if (el.tagName === 'OPTION') {
      el.textContent = value;
    } else {
      el.textContent = value;
    }
  });

  document.querySelectorAll('[data-i18n-aria]').forEach((el) => {
    const key = el.dataset.i18nAria;
    const value = getNestedValue(t, key);
    if (value) el.setAttribute('aria-label', value);
  });

  document.querySelectorAll('[data-i18n-alt]').forEach((el) => {
    const key = el.dataset.i18nAlt;
    const value = getNestedValue(t, key);
    if (value) el.setAttribute('alt', value);
  });

  renderExpertiseItems(lang);
  refreshAppointmentsLocale();
  updateFooterBarSicil(t.footer?.barSicilPrefix ?? '');
  updateMeta(lang);
  refreshThemeToggleLabels(lang);
  syncLanguageSelects(lang);
  initScrollReveal();

  document.documentElement.classList.add('lang-ready');
}

export async function initI18n() {
  const lang = await resolveInitialLanguage();
  setLanguage(lang);

  document.querySelectorAll('.lang-select').forEach((select) => {
    select.addEventListener('change', () => {
      setLanguage(select.value, { manual: true });
    });
  });
}
