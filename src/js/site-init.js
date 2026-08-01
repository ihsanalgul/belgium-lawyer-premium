import { siteConfig } from '../data/site-config.js';

export function updateFooterBarSicil(prefix) {
  const el = document.getElementById('footer-bar-sicil');
  if (!el || !siteConfig.barSicilNo) return;
  el.textContent = `${prefix} ${siteConfig.barSicilNo}`;
  el.hidden = false;
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

  const mapFrame = document.getElementById('contact-map');
  if (mapFrame && siteConfig.maps?.ankaraEmbedUrl) {
    mapFrame.src = siteConfig.maps.ankaraEmbedUrl;
  }
}
