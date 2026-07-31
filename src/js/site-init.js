import { siteConfig } from '../data/site-config.js';

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

  const insightsProfile = document.getElementById('insights-profile');
  if (insightsProfile) {
    insightsProfile.href = siteConfig.x.profileUrl;
  }

  const footerCopy = document.getElementById('footer-copy');
  if (footerCopy) {
    footerCopy.textContent = `© ${new Date().getFullYear()} ${siteConfig.name}. `;
  }
}
