import { translations, supportedLanguages, defaultLanguage } from '../data/translations.js';
import { refreshHeroSliderAlts } from './hero-slider.js';
import { renderInsights } from './insights.js';
import { refreshCalendarLocale } from './calendar.js';

const STORAGE_KEY = 'lang';

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
    if (normalized.startsWith('tr') || normalized.includes('tr')) {
      return 'tr';
    }
  }

  return defaultLanguage;
}

function getInitialLanguage() {
  const params = new URLSearchParams(window.location.search);
  const urlLang = params.get('lang');
  if (urlLang && supportedLanguages.includes(urlLang)) {
    return urlLang;
  }

  const stored = localStorage.getItem(STORAGE_KEY);
  if (stored && supportedLanguages.includes(stored)) {
    return stored;
  }

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

function updateExpertiseItems(lang) {
  const items = translations[lang].expertise.items;
  document.querySelectorAll('[data-i18n-expertise]').forEach((el) => {
    const index = parseInt(el.dataset.i18nExpertise, 10);
    const field = el.dataset.i18nField;
    if (items[index] && field) {
      el.textContent = items[index][field];
    }
  });
}

export function setLanguage(lang) {
  if (!supportedLanguages.includes(lang)) return;

  const t = translations[lang];
  document.documentElement.lang = lang;
  localStorage.setItem(STORAGE_KEY, lang);

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

  updateExpertiseItems(lang);
  refreshHeroSliderAlts(lang);
  renderInsights(lang);
  refreshCalendarLocale(lang);
  updateMeta(lang);

  document.querySelectorAll('.lang-btn').forEach((btn) => {
    btn.classList.toggle('is-active', btn.dataset.lang === lang);
    btn.setAttribute('aria-pressed', btn.dataset.lang === lang ? 'true' : 'false');
  });
}

export function initI18n() {
  const lang = getInitialLanguage();
  setLanguage(lang);

  document.addEventListener('click', (e) => {
    const btn = e.target.closest('.lang-btn');
    if (btn?.dataset.lang) {
      setLanguage(btn.dataset.lang);
    }
  });
}
