import { translations } from '../data/translations.js';

const TRUST_ICONS = [
  '<svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true"><circle cx="8" cy="8" r="7" stroke="currentColor"/><path d="M8 4v4l3 2" stroke="currentColor" stroke-linecap="round"/></svg>',
  '<svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true"><path d="M8 1l6 2.5v4c0 4-2.6 6.7-6 7.5-3.4-.8-6-3.5-6-7.5v-4L8 1z" stroke="currentColor"/></svg>',
  '<svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true"><path d="M2 8h12M9 3l5 5-5 5" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/></svg>',
];

function highlightBold(text, bold) {
  if (!bold || !text.includes(bold)) return text;
  const idx = text.indexOf(bold);
  return `${text.slice(0, idx)}<strong>${bold}</strong>${text.slice(idx + bold.length)}`;
}

export function updateTrustList(lang) {
  const list = document.getElementById('trust-list');
  if (!list) return;

  const items = translations[lang].askLawyer.trust;
  list.innerHTML = items
    .map(
      (item, i) =>
        `<li>${TRUST_ICONS[i] || ''}<span>${highlightBold(item.text, item.bold)}</span></li>`
    )
    .join('');
}

export function updateAskAreaOptions(lang) {
  const select = document.getElementById('ask-area');
  if (!select) return;

  const { areaPlaceholder, areas } = translations[lang].askLawyer.form;
  const current = select.value;

  select.innerHTML =
    `<option value="" disabled ${current ? '' : 'selected'}>${areaPlaceholder}</option>` +
    areas.map((label, i) => `<option value="${i}">${label}</option>`).join('');

  if (current) select.value = current;
}

export function updateAskPlaceholders(lang) {
  const form = translations[lang].askLawyer.form;
  const message = document.getElementById('ask-message');
  const note = document.getElementById('bk-note');

  if (message) message.placeholder = form.messagePlaceholder;
  if (note) note.placeholder = translations[lang].appointments.booker.notePlaceholder;
}

export function updateQaCards(lang) {
  const container = document.getElementById('qa-cards');
  if (!container) return;

  const items = translations[lang].askLawyer.qa.items;
  container.innerHTML = items
    .map(
      (item) => `
    <article class="qa-card">
      <span class="qa-tag">${item.tag}</span>
      <h4>${item.title}</h4>
      <p class="text-prose">${item.excerpt}</p>
      <a href="#contact" class="qa-read-more">${item.readMore} →</a>
    </article>`
    )
    .join('');
}
