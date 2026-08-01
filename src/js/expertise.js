import { translations } from '../data/translations.js';
import { observeRevealElements } from './scroll-reveal.js';

export function renderExpertiseItems(lang = document.documentElement.lang) {
  const container = document.getElementById('expertise-list');
  if (!container) return;

  const items = translations[lang]?.expertise?.items ?? [];

  container.innerHTML = items
    .map((item, index) => {
      const number = String(index + 1).padStart(2, '0');
      return `
    <article class="expertise-item reveal">
      <div class="expertise-number" aria-hidden="true">${number}</div>
      <div class="expertise-content">
        <h3 class="text-display-md">${item.title}</h3>
        <p class="text-prose">${item.desc}</p>
      </div>
    </article>`;
    })
    .join('');

  observeRevealElements(container);
}
