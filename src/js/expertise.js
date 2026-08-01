import { translations } from '../data/translations.js';
import { expertiseIcons } from './expertise-icons.js';
import { observeRevealElements } from './scroll-reveal.js';

const ICON_KEYS = [
  'reinstatement',
  'sentence',
  'immigration',
  'criminal',
  'labour',
  'administrative',
  'constitutional',
  'echr',
  'un',
  'petition',
];

export function renderExpertiseItems(lang = document.documentElement.lang) {
  const container = document.getElementById('expertise-list');
  if (!container) return;

  const items = translations[lang]?.expertise?.items ?? [];

  container.innerHTML = items
    .map((item, index) => {
      const iconKey = ICON_KEYS[index] ?? 'petition';
      const icon = expertiseIcons[iconKey] ?? '';
      return `
    <article class="expertise-card reveal">
      <div class="expertise-card__icon" aria-hidden="true">${icon}</div>
      <h3 class="expertise-card__title">${item.title}</h3>
      <p class="expertise-card__desc">${item.desc}</p>
    </article>`;
    })
    .join('');

  observeRevealElements(container);
}
