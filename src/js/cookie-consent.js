import { translations } from '../data/translations.js';

export const COOKIE_KEY = 'cookie-consent';

function getLang() {
  return document.documentElement.lang || 'tr';
}

export function getCookieConsent() {
  try {
    return localStorage.getItem(COOKIE_KEY);
  } catch {
    return null;
  }
}

export function allowsFunctionalCookies() {
  return getCookieConsent() === 'all';
}

function tCookies() {
  return translations[getLang()]?.cookies ?? {};
}

function applyConsentToPage() {
  const allowed = allowsFunctionalCookies();
  document.documentElement.dataset.cookieConsent = allowed ? 'all' : 'essential';

  document.dispatchEvent(
    new CustomEvent('cookie-consent-change', {
      detail: { consent: allowed ? 'all' : 'essential' },
    })
  );
}

function hideBanner(banner) {
  if (banner) {
    banner.hidden = true;
    banner.setAttribute('aria-hidden', 'true');
  }
}

function setConsent(value) {
  try {
    localStorage.setItem(COOKIE_KEY, value);
  } catch {
    /* ignore */
  }
  applyConsentToPage();
  hideBanner(document.getElementById('cookie-banner'));
}

function buildBanner() {
  const c = tCookies();
  const banner = document.createElement('div');
  banner.id = 'cookie-banner';
  banner.className = 'cookie-banner';
  banner.setAttribute('role', 'dialog');
  banner.setAttribute('aria-live', 'polite');
  banner.setAttribute('aria-label', c.title || 'Cookie notice');

  banner.innerHTML = `
    <div class="cookie-banner__inner site-container">
      <div class="cookie-banner__copy">
        <p class="cookie-banner__title">${c.title || ''}</p>
        <p class="cookie-banner__text">
          ${c.text || ''}
          <a href="/gizlilik.html#cerezler" class="cookie-banner__link">${c.privacyLink || ''}</a>
          ·
          <a href="/kvkk.html" class="cookie-banner__link">${c.kvkkLink || ''}</a>
        </p>
      </div>
      <div class="cookie-banner__actions">
        <button type="button" class="btn-outline cookie-banner__btn" data-cookie-choice="essential">
          ${c.essential || ''}
        </button>
        <button type="button" class="btn-primary cookie-banner__btn" data-cookie-choice="all">
          ${c.accept || ''}
        </button>
      </div>
    </div>
  `;

  banner.querySelectorAll('[data-cookie-choice]').forEach((btn) => {
    btn.addEventListener('click', () => setConsent(btn.dataset.cookieChoice));
  });

  return banner;
}

export function refreshCookieBannerLocale() {
  const existing = document.getElementById('cookie-banner');
  if (!existing || existing.hidden) return;
  const c = tCookies();
  const title = existing.querySelector('.cookie-banner__title');
  const text = existing.querySelector('.cookie-banner__text');
  const essential = existing.querySelector('[data-cookie-choice="essential"]');
  const accept = existing.querySelector('[data-cookie-choice="all"]');
  if (title) title.textContent = c.title || '';
  if (text) {
    text.innerHTML = `${c.text || ''}
      <a href="/gizlilik.html#cerezler" class="cookie-banner__link">${c.privacyLink || ''}</a>
      ·
      <a href="/kvkk.html" class="cookie-banner__link">${c.kvkkLink || ''}</a>`;
  }
  if (essential) essential.textContent = c.essential || '';
  if (accept) accept.textContent = c.accept || '';
  existing.setAttribute('aria-label', c.title || 'Cookie notice');
}

export function initCookieConsent() {
  const stored = getCookieConsent();
  if (stored === 'all' || stored === 'essential') {
    applyConsentToPage();
    return;
  }

  document.documentElement.dataset.cookieConsent = 'pending';
  const banner = buildBanner();
  document.body.appendChild(banner);
}
