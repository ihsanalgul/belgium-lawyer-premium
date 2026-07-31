import { tweetsContent } from '../data/tweets-content.js';
import { siteConfig } from '../data/site-config.js';
import { translations } from '../data/translations.js';
import { observeRevealElements } from './scroll-reveal.js';

function formatDate(dateStr, lang) {
  const date = new Date(dateStr + 'T12:00:00');
  const locales = { en: 'en-GB', fr: 'fr-FR', nl: 'nl-NL', tr: 'tr-TR' };
  return date.toLocaleDateString(locales[lang] || 'en-GB', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}

export function renderInsights(lang) {
  const grid = document.getElementById('insights-grid');
  if (!grid) return;

  const tweets = tweetsContent[lang] || tweetsContent.tr;
  grid.innerHTML = '';

  tweets.forEach((tweet) => {
    const card = document.createElement('article');
    card.className = 'tweet-card reveal';

    const meta = document.createElement('div');
    meta.className = 'tweet-card__meta';

    const handle = document.createElement('span');
    handle.className = 'tweet-card__handle';
    handle.textContent = siteConfig.x.handle;

    const date = document.createElement('time');
    date.className = 'tweet-card__date';
    date.dateTime = tweet.date;
    date.textContent = formatDate(tweet.date, lang);

    meta.append(handle, date);

    const text = document.createElement('p');
    text.className = 'tweet-card__text';
    text.textContent = tweet.text;

    const link = document.createElement('a');
    link.className = 'tweet-card__link link-underline';
    link.href = tweet.url;
    link.target = '_blank';
    link.rel = 'noopener noreferrer';
    link.dataset.i18n = 'insights.readMore';
    link.textContent = translations[lang]?.insights?.readMore || 'Read on X';

    card.append(meta, text, link);
    grid.appendChild(card);
  });

  observeRevealElements(grid);
}
