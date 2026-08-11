import { translations } from '../data/translations.js';

function getLang() {
  return document.documentElement.lang || 'tr';
}

export function initContactForm() {
  const params = new URLSearchParams(window.location.search);
  if (params.get('form') !== 'ok') return;

  const banner = document.getElementById('contact-form-success');
  if (!banner) return;

  const msg = translations[getLang()]?.contact?.form?.success;
  if (msg) banner.textContent = msg;
  banner.hidden = false;

  const clean = window.location.pathname + window.location.hash;
  window.history.replaceState({}, '', clean || '/');
}

export function refreshContactFormLocale() {
  const banner = document.getElementById('contact-form-success');
  if (!banner || banner.hidden) return;
  const msg = translations[getLang()]?.contact?.form?.success;
  if (msg) banner.textContent = msg;
}
