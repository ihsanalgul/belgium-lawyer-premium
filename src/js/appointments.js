import { siteConfig } from '../data/site-config.js';
import { translations } from '../data/translations.js';

const APPT_ID = 'online-appointment';

function getLang() {
  return document.documentElement.lang || 'tr';
}

function getT() {
  return translations[getLang()].appointments;
}

function getCalendarUrl() {
  const cfg = siteConfig.googleCalendar;
  if (!cfg) return '';
  return cfg.byPackage?.[APPT_ID] || cfg.default || '';
}

function loadCalendarEmbed() {
  const url = getCalendarUrl();
  const iframe = document.getElementById('calendar-embed');
  const fallback = document.getElementById('calendar-fallback-link');
  const wrap = document.getElementById('calendar-embed-wrap');
  const empty = document.getElementById('calendar-embed-empty');

  if (!url) {
    if (wrap) wrap.hidden = true;
    if (fallback) fallback.hidden = true;
    if (iframe) iframe.removeAttribute('src');
    if (empty) empty.hidden = false;
    return;
  }

  const embedUrl = url.includes('?') ? `${url}&gv=true` : `${url}?gv=true`;

  if (iframe) iframe.src = embedUrl;
  if (fallback) {
    fallback.href = url;
    fallback.hidden = false;
  }
  if (wrap) wrap.hidden = false;
  if (empty) empty.hidden = true;
}

function renderAppointmentIntro() {
  const el = document.getElementById('appt-intro');
  if (!el) return;

  const t = getT();
  const appt = t.appointment;
  if (!appt) {
    el.innerHTML = '';
    return;
  }

  el.innerHTML = `
    <p class="appt-intro__duration">${appt.duration}</p>
    <h3 class="appt-intro__title">${appt.title}</h3>
    <p class="appt-intro__desc">${appt.desc}</p>
  `;
}

function renderFees() {
  const list = document.getElementById('appt-fees-list');
  const titleEl = document.getElementById('appt-fees-title');
  if (!list) return;

  const t = getT();
  if (titleEl) titleEl.textContent = t.feesTitle || '';

  const fees = t.fees || [];
  list.innerHTML = fees
    .map(
      (fee) => `
    <article class="appt-fee-card">
      <h4 class="appt-fee-card__title">${fee.title}</h4>
      <p class="appt-fee-card__price">
        ${fee.price}${fee.priceNote ? `<span class="appt-fee-card__price-note"> ${fee.priceNote}</span>` : ''}
      </p>
      ${
        fee.items?.length
          ? `<ul class="appt-fee-card__items">${fee.items.map((item) => `<li>${item}</li>`).join('')}</ul>`
          : ''
      }
    </article>`
    )
    .join('');
}

export function refreshAppointmentsLocale() {
  renderAppointmentIntro();
  renderFees();
  loadCalendarEmbed();
}

export function initAppointments() {
  renderAppointmentIntro();
  renderFees();
  loadCalendarEmbed();
}
