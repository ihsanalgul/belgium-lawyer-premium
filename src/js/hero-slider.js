import { siteConfig } from '../data/site-config.js';
import { translations } from '../data/translations.js';

const INTERVAL_MS = 5000;

let sliderApi = null;

export function initHeroSlider() {
  const wrap = document.querySelector('.hero-image-wrap');
  if (!wrap) return null;

  const slides = siteConfig.heroImages.map((img, i) => {
    const slide = document.createElement('div');
    slide.className = `hero-slider__slide${i === 0 ? ' is-active' : ''}${img.variant === 'portrait' ? ' hero-slider__slide--portrait' : ''}`;
    slide.setAttribute('role', 'group');
    slide.setAttribute('aria-roledescription', 'slide');
    slide.setAttribute('aria-label', `${i + 1} of ${siteConfig.heroImages.length}`);

    const image = document.createElement('img');
    image.src = img.src;
    image.width = 700;
    image.height = 875;
    image.loading = i === 0 ? 'eager' : 'lazy';
    image.dataset.i18nAlt = `hero.${img.altKey}`;
    slide.appendChild(image);
    return slide;
  });

  const track = document.createElement('div');
  track.className = 'hero-slider__track';
  slides.forEach((s) => track.appendChild(s));

  const quoteEl = document.createElement('blockquote');
  quoteEl.className = 'hero-slider__quote';
  quoteEl.setAttribute('aria-live', 'polite');

  const quoteText = document.createElement('p');
  quoteText.className = 'hero-slider__quote-text';

  const quoteAuthor = document.createElement('cite');
  quoteAuthor.className = 'hero-slider__quote-author';

  quoteEl.append(quoteText, quoteAuthor);

  const dots = document.createElement('div');
  dots.className = 'hero-slider__dots';
  dots.setAttribute('role', 'tablist');
  dots.setAttribute('aria-label', 'Hero images');

  const dotBtns = slides.map((_, i) => {
    const btn = document.createElement('button');
    btn.type = 'button';
    btn.className = `hero-slider__dot${i === 0 ? ' is-active' : ''}`;
    btn.setAttribute('role', 'tab');
    btn.setAttribute('aria-selected', i === 0 ? 'true' : 'false');
    btn.setAttribute('aria-label', `Slide ${i + 1}`);
    dots.appendChild(btn);
    return btn;
  });

  const slider = document.createElement('div');
  slider.className = 'hero-slider';
  slider.appendChild(track);
  slider.appendChild(quoteEl);
  slider.appendChild(dots);

  wrap.innerHTML = '';
  wrap.appendChild(slider);

  let current = 0;
  let currentLang = 'tr';
  let timer = null;
  let paused = false;

  function updateQuote(index, lang) {
    const quotes = translations[lang]?.hero?.quotes;
    const quoteIndex = siteConfig.heroImages[index]?.quoteIndex ?? index;
    const quote = quotes?.[quoteIndex];
    if (!quote) return;
    quoteText.textContent = `"${quote.text}"`;
    quoteAuthor.textContent = `— ${quote.author}`;
  }

  function goTo(index, lang = currentLang) {
    slides[current].classList.remove('is-active');
    dotBtns[current].classList.remove('is-active');
    dotBtns[current].setAttribute('aria-selected', 'false');

    current = (index + slides.length) % slides.length;
    currentLang = lang;

    slides[current].classList.add('is-active');
    dotBtns[current].classList.add('is-active');
    dotBtns[current].setAttribute('aria-selected', 'true');
    updateQuote(current, lang);
  }

  function next() {
    goTo(current + 1);
  }

  function startAutoplay() {
    stopAutoplay();
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    timer = setInterval(() => {
      if (!paused) next();
    }, INTERVAL_MS);
  }

  function stopAutoplay() {
    if (timer) {
      clearInterval(timer);
      timer = null;
    }
  }

  dotBtns.forEach((btn, i) => {
    btn.addEventListener('click', () => {
      goTo(i);
      startAutoplay();
    });
  });

  slider.addEventListener('mouseenter', () => {
    paused = true;
  });

  slider.addEventListener('mouseleave', () => {
    paused = false;
  });

  slider.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowLeft') {
      e.preventDefault();
      goTo(current - 1);
      startAutoplay();
    } else if (e.key === 'ArrowRight') {
      e.preventDefault();
      goTo(current + 1);
      startAutoplay();
    }
  });

  slider.setAttribute('tabindex', '0');
  updateQuote(0, 'tr');
  startAutoplay();

  return {
    updateLang(lang) {
      currentLang = lang;
      slides.forEach((slide, i) => {
        const img = slide.querySelector('img');
        const key = siteConfig.heroImages[i].altKey;
        if (translations[lang]?.hero?.[key]) {
          img.alt = translations[lang].hero[key];
        }
      });
      updateQuote(current, lang);
    },
  };
}

export function refreshHeroSliderAlts(lang) {
  sliderApi?.updateLang(lang);
}

export function initHeroSliderModule() {
  sliderApi = initHeroSlider();
}
