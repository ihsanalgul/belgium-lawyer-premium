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

async function copyIban(iban, button) {
  const t = getT();
  try {
    await navigator.clipboard.writeText(iban);
    const original = t.copyIban || 'Copy IBAN';
    button.textContent = t.copiedIban || 'Copied';
    window.setTimeout(() => {
      button.textContent = original;
    }, 2000);
  } catch {
    /* ignore clipboard failures */
  }
}

function renderPayment() {
  const el = document.getElementById('appt-payment');
  if (!el) return;

  const bank = siteConfig.bank;
  if (!bank?.iban) {
    el.innerHTML = '';
    el.hidden = true;
    return;
  }

  el.hidden = false;
  const t = getT();

  el.innerHTML = `
    <h3 class="appt-payment__title">${t.paymentTitle || ''}</h3>
    <p class="appt-payment__note">${t.paymentNote || ''}</p>
    <dl class="appt-payment__details">
      <div class="appt-payment__row">
        <dt>${t.paymentIbanLabel || 'IBAN'}</dt>
        <dd>
          <span class="appt-payment__iban" id="appt-iban-value">${bank.iban}</span>
          <button type="button" class="appt-payment__copy" id="appt-copy-iban">${t.copyIban || 'Copy IBAN'}</button>
        </dd>
      </div>
      <div class="appt-payment__row">
        <dt>${t.paymentNameLabel || ''}</dt>
        <dd>${bank.accountName}</dd>
      </div>
      <div class="appt-payment__row">
        <dt>${t.paymentBankLabel || ''}</dt>
        <dd>${bank.bankName}</dd>
      </div>
    </dl>
  `;

  document.getElementById('appt-copy-iban')?.addEventListener('click', (e) => {
    copyIban(bank.iban, e.currentTarget);
  });
}

export function refreshAppointmentsLocale() {
  renderAppointmentIntro();
  renderFees();
  renderPayment();
  loadCalendarEmbed();
}

export function initAppointments() {
  renderAppointmentIntro();
  renderFees();
  renderPayment();
  loadCalendarEmbed();
  document.addEventListener('cookie-consent-change', () => loadCalendarEmbed());
}
