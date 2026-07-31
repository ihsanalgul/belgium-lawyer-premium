import { blogPosts } from '../data/blog-content.js';
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

export function renderBlogCards(lang) {
  const grid = document.getElementById('blog-grid');
  if (!grid) return;

  const posts = blogPosts.map((post) => ({
    ...post,
    ...(post.locales[lang] || post.locales.tr),
  }));

  const t = translations[lang]?.blog || translations.tr.blog;
  grid.innerHTML = '';

  posts.forEach((post) => {
    const card = document.createElement('article');
    card.className = 'blog-card reveal';

    const meta = document.createElement('div');
    meta.className = 'blog-card__meta';

    const date = document.createElement('time');
    date.className = 'blog-card__date';
    date.dateTime = post.date;
    date.textContent = formatDate(post.date, lang);

    const tags = document.createElement('div');
    tags.className = 'blog-card__tags';
    post.tags.forEach((tag) => {
      const span = document.createElement('span');
      span.className = 'blog-card__tag';
      span.textContent = tag;
      tags.appendChild(span);
    });

    meta.append(date, tags);

    const title = document.createElement('h3');
    title.className = 'blog-card__title';
    const titleLink = document.createElement('a');
    titleLink.href = `/blog/${post.slug}.html`;
    titleLink.textContent = post.title;
    title.appendChild(titleLink);

    const excerpt = document.createElement('p');
    excerpt.className = 'blog-card__excerpt';
    excerpt.textContent = post.excerpt;

    const readMore = document.createElement('a');
    readMore.className = 'blog-card__link link-underline';
    readMore.href = `/blog/${post.slug}.html`;
    readMore.textContent = t.readMore;

    card.append(meta, title, excerpt, readMore);
    grid.appendChild(card);
  });

  observeRevealElements(grid);
  injectBlogSchema(posts, lang);
}

function injectBlogSchema(posts, lang) {
  const existing = document.getElementById('blog-schema');
  if (existing) existing.remove();

  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Blog',
    name: translations[lang]?.blog?.title || 'Ceza Hukuku Yazıları',
    blogPost: posts.map((post) => ({
      '@type': 'BlogPosting',
      headline: post.title,
      description: post.excerpt,
      datePublished: post.date,
      url: `https://yusufziyakahya.com/blog/${post.slug}.html`,
      author: {
        '@type': 'Person',
        name: 'Av. Yusuf Ziya KAHYA',
      },
    })),
  };

  const script = document.createElement('script');
  script.id = 'blog-schema';
  script.type = 'application/ld+json';
  script.textContent = JSON.stringify(schema);
  document.head.appendChild(script);
}
