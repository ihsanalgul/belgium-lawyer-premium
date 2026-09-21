import { siteConfig } from '../data/site-config.js';
import { translations } from '../data/translations.js';
import { allowsFunctionalCookies, fillEmbedBlockedNote } from './cookie-consent.js';

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

function ensureCalendarBlockedNote() {
  let note = document.getElementById('calendar-consent-note');
  if (note) return note;
  const panel = document.querySelector('.booker-panel');
  if (!panel) return null;
  note = document.createElement('div');
  note.id = 'calendar-consent-note';
  note.className = 'embed-consent-note';
  note.hidden = true;
  const title = panel.querySelector('.booker-panel__title');
  if (title) title.insertAdjacentElement('afterend', note);
  else panel.prepend(note);
  return note;
}

function loadCalendarEmbed() {
  const url = getCalendarUrl();
  const iframe = document.getElementById('calendar-embed');
  const fallback = document.getElementById('calendar-fallback-link');
  const wrap = document.getElementById('calendar-embed-wrap');
  const empty = document.getElementById('calendar-embed-empty');
  const blocked = ensureCalendarBlockedNote();

  if (!allowsFunctionalCookies()) {
    if (iframe) iframe.removeAttribute('src');
    if (wrap) wrap.hidden = true;
    if (fallback) fallback.hidden = true;
    if (empty) empty.hidden = true;
    if (blocked) {
      fillEmbedBlockedNote(blocked);
      blocked.hidden = false;
    }
    return;
  }

  if (blocked) blocked.hidden = true;

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

export function refreshAppointmentsLocale() {
  renderAppointmentIntro();
  loadCalendarEmbed();
}

export function initAppointments() {
  renderAppointmentIntro();
  loadCalendarEmbed();
  document.addEventListener('cookie-consent-change', () => loadCalendarEmbed());
}
