import { translations } from '../data/translations.js';

const STORAGE_KEY = 'theme';
const THEMES = ['dark', 'light'];

function getMetaThemeColor() {
  let meta = document.querySelector('meta[name="theme-color"]');
  if (!meta) {
    meta = document.createElement('meta');
    meta.name = 'theme-color';
    document.head.appendChild(meta);
  }
  return meta;
}

function getThemeLabelKey(theme) {
  return theme === 'light' ? 'theme.toDark' : 'theme.toLight';
}

function getNestedValue(obj, path) {
  return path.split('.').reduce((acc, key) => acc?.[key], obj);
}

export function getTheme() {
  const current = document.documentElement.dataset.theme;
  return current === 'light' ? 'light' : 'dark';
}

export function setTheme(theme, { persist = true } = {}) {
  const resolved = THEMES.includes(theme) ? theme : 'dark';
  document.documentElement.dataset.theme = resolved === 'light' ? 'light' : '';
  document.documentElement.style.colorScheme = resolved;

  if (persist) {
    localStorage.setItem(STORAGE_KEY, resolved);
  }

  getMetaThemeColor().setAttribute(
    'content',
    getComputedStyle(document.documentElement).getPropertyValue('--color-theme-meta').trim() ||
      (resolved === 'light' ? '#f5f3ef' : '#121315')
  );

  document.querySelectorAll('[data-theme-toggle]').forEach((btn) => {
    const isLight = resolved === 'light';
    btn.setAttribute('aria-pressed', isLight ? 'true' : 'false');
  });

  refreshThemeToggleLabels();
}

export function refreshThemeToggleLabels(lang = document.documentElement.lang) {
  const t = translations[lang];
  if (!t?.theme) return;

  const key = getThemeLabelKey(getTheme());
  const label = getNestedValue(t, key);
  if (!label) return;

  document.querySelectorAll('[data-theme-toggle]').forEach((btn) => {
    btn.setAttribute('aria-label', label);
    btn.dataset.i18nAria = key;
  });
}

export function initTheme() {
  const stored = localStorage.getItem(STORAGE_KEY);
  const initial = stored === 'light' ? 'light' : 'dark';
  setTheme(initial, { persist: false });

  document.addEventListener('click', (event) => {
    const btn = event.target.closest('[data-theme-toggle]');
    if (!btn) return;

    const next = getTheme() === 'dark' ? 'light' : 'dark';
    setTheme(next);
    document.dispatchEvent(new CustomEvent('themechange', { detail: { theme: next } }));
  });
}
