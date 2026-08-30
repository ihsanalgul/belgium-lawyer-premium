import { siteConfig } from '../data/site-config.js';
import { allowsFunctionalCookies, fillEmbedBlockedNote } from './cookie-consent.js';
import { translations } from '../data/translations.js';

export function updateFooterBarSicil(prefix) {
  const el = document.getElementById('footer-bar-sicil');
  if (!el || !siteConfig.barSicilNo) return;
  el.textContent = `${prefix} ${siteConfig.barSicilNo}`;
  el.hidden = false;
}

function getLang() {
  return document.documentElement.lang || 'tr';
}

export function loadContactMap() {
  const mapFrame = document.getElementById('contact-map');
  const wrap = document.querySelector('.contact-map-wrap');
  if (!mapFrame || !wrap) return;

  let note = document.getElementById('map-consent-note');
  if (!note) {
    note = document.createElement('div');
    note.id = 'map-consent-note';
    note.className = 'embed-consent-note';
    wrap.appendChild(note);
  }

  if (!allowsFunctionalCookies()) {
    mapFrame.removeAttribute('src');
    mapFrame.hidden = true;
    fillEmbedBlockedNote(note);
    note.hidden = false;
    return;
  }

  note.hidden = true;
  mapFrame.hidden = false;
  if (siteConfig.maps?.ankaraEmbedUrl) {
    mapFrame.src = siteConfig.maps.ankaraEmbedUrl;
  }
}

export function syncFormRecaptchaConsent() {
  const recaptcha = document.querySelector('.form-recaptcha');
  const blocked = document.getElementById('form-recaptcha-blocked');
  const submit = document.querySelector('.contact-form-submit');
  const allowed = allowsFunctionalCookies();

  if (recaptcha) recaptcha.hidden = !allowed;
  if (blocked) {
    blocked.hidden = allowed;
    blocked.textContent = translations[getLang()]?.cookies?.formBlocked || '';
  }
  if (submit) {
    submit.disabled = !allowed;
  }
}

export function initSiteConfig() {
  const logo = document.querySelector('.logo-wordmark');
  if (logo) {
    logo.setAttribute('aria-label', siteConfig.name);
    logo.innerHTML = `${siteConfig.nameShort.first} <span>${siteConfig.nameShort.last}</span>`;
  }

  const waFab = document.querySelector('.whatsapp-fab');
  if (waFab) {
    waFab.href = siteConfig.whatsapp.url;
  }

  const contactWa = document.getElementById('contact-whatsapp');
  if (contactWa) {
    contactWa.href = siteConfig.whatsapp.url;
  }

  const footerWa = document.getElementById('footer-whatsapp');
  if (footerWa) {
    footerWa.href = siteConfig.whatsapp.url;
    footerWa.textContent = siteConfig.whatsapp.display;
  }

  const contactEmail = document.getElementById('contact-email');
  if (contactEmail && siteConfig.email) {
    contactEmail.href = `mailto:${siteConfig.email}`;
    const valueEl = contactEmail.querySelector('.contact-info-link__value');
    if (valueEl) valueEl.textContent = siteConfig.email;
  }

  const footerBrand = document.getElementById('footer-brand-name');
  if (footerBrand) {
    footerBrand.textContent = `${siteConfig.nameShort.first} ${siteConfig.nameShort.last}`;
  }

  const footerCopy = document.getElementById('footer-copy');
  if (footerCopy) {
    footerCopy.textContent = `© ${new Date().getFullYear()} ${siteConfig.name}. `;
  }

  const barSicil = document.getElementById('footer-bar-sicil');
  if (barSicil && siteConfig.barSicilNo) {
    barSicil.dataset.sicilNo = siteConfig.barSicilNo;
  }

  const socialWa = document.getElementById('social-whatsapp');
  if (socialWa) socialWa.href = siteConfig.whatsapp.url;

  const socialX = document.getElementById('social-x');
  if (socialX && siteConfig.x?.profileUrl) socialX.href = siteConfig.x.profileUrl;

  const kvkkLink = document.getElementById('footer-kvkk');
  if (kvkkLink) {
    kvkkLink.href = siteConfig.kvkkUrl;
  }

  const privacyLink = document.getElementById('footer-privacy');
  if (privacyLink) {
    privacyLink.href = siteConfig.privacyUrl;
  }

  const cookiesLink = document.getElementById('footer-cookies');
  if (cookiesLink) {
    cookiesLink.href = `${siteConfig.privacyUrl}#cerezler`;
  }

  const calendarUrl = siteConfig.googleCalendar?.default;
  const contactCalendar = document.getElementById('contact-calendar');
  if (contactCalendar && calendarUrl) {
    contactCalendar.hidden = false;
  }

  loadContactMap();
  syncFormRecaptchaConsent();
  document.addEventListener('cookie-consent-change', () => {
    loadContactMap();
    syncFormRecaptchaConsent();
  });
}
