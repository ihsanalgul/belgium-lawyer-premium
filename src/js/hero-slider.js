import { siteConfig } from '../data/site-config.js';
import { translations } from '../data/translations.js';

const INTERVAL_MS = 5000;

let sliderApi = null;

function renderSlideContent(contentEl, slideData, index, slideConfig, lang) {
  if (!contentEl || !slideData) return;

  const isPortrait = slideConfig?.layout === 'portrait-frame';
  const ctaHtml = slideData.cta
    ? `<a href="${slideData.ctaHref || '#appointments'}" class="btn-primary hero-slide-content__cta">${slideData.cta}</a>`
    : '';

  const quoteClass = index === 0 ? ' hero-slide-content__inner--quote' : '';
  const altText = translations[lang]?.hero?.[slideConfig?.altKey] ?? '';

  const portraitHtml = isPortrait
    ? `<div class="hero-portrait-frame">
        <img
          src="${slideConfig.src}"
          class="hero-portrait-frame__img"
          width="440"
          height="580"
          loading="lazy"
          alt="${altText}"
        />
      </div>`
    : '';

  contentEl.className = `hero-slide-content hero-slide-content--center${
    isPortrait ? ' hero-slide-content--portrait' : ' hero-slide-content--cover'
  }`;

  contentEl.innerHTML = `
    <div class="hero-slide-content__inner is-entering${quoteClass}">
      <p class="hero-slide-content__eyebrow">${slideData.eyebrow}</p>
      <div class="rule-gold hero-slide-content__rule"></div>
      <h1 class="hero-slide-content__title">${slideData.title}</h1>
      ${slideData.subtitle ? `<p class="hero-slide-content__subtitle">${slideData.subtitle}</p>` : ''}
      ${portraitHtml}
      ${ctaHtml}
    </div>`;

  requestAnimationFrame(() => {
    contentEl.querySelector('.hero-slide-content__inner')?.classList.add('is-visible');
  });
}

function createSlide(slideConfig, index, lang) {
  const slide = document.createElement('div');
  const layoutClass =
    slideConfig.layout === 'portrait-frame'
      ? ' hero-slider__slide--portrait-frame'
      : ' hero-slider__slide--cover';

  slide.className = `hero-slider__slide${index === 0 ? ' is-active' : ''}${layoutClass}`;
  slide.setAttribute('role', 'group');
  slide.setAttribute('aria-roledescription', 'slide');
  slide.setAttribute('aria-label', `${index + 1} of ${siteConfig.heroSlides.length}`);

  if (slideConfig.layout === 'portrait-frame') {
    const pattern = document.createElement('div');
    pattern.className = 'hero-slider__slide-pattern';
    pattern.setAttribute('aria-hidden', 'true');
    slide.appendChild(pattern);
  } else {
    const image = document.createElement('img');
    image.src = slideConfig.src;
    image.width = 1920;
    image.height = 1080;
    image.loading = index === 0 ? 'eager' : 'lazy';
    image.alt = translations[lang]?.hero?.[slideConfig.altKey] ?? '';
    image.style.objectPosition = slideConfig.objectPosition ?? 'center center';
    slide.appendChild(image);
  }

  return slide;
}

function setOverlayVisible(visible) {
  const overlay = document.querySelector('.hero-overlay');
  if (!overlay) return;
  overlay.hidden = !visible;
}

export function initHeroSlider() {
  const wrap = document.querySelector('.hero-image-wrap');
  const contentEl = document.getElementById('hero-slide-content');
  const prevBtn = document.querySelector('.hero-slider__arrow--prev');
  const nextBtn = document.querySelector('.hero-slider__arrow--next');
  if (!wrap || !contentEl) return null;

  let currentLang = document.documentElement.lang || 'tr';

  const slides = siteConfig.heroSlides.map((config, i) => createSlide(config, i, currentLang));

  const track = document.createElement('div');
  track.className = 'hero-slider__track';
  slides.forEach((s) => track.appendChild(s));

  const dots = document.createElement('div');
  dots.className = 'hero-slider__dots';
  dots.setAttribute('role', 'tablist');
  dots.setAttribute('aria-label', 'Hero slides');

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
  slider.appendChild(dots);

  wrap.innerHTML = '';
  wrap.appendChild(slider);

  let current = 0;
  let timer = null;
  let paused = false;

  function updateContent(lang = currentLang) {
    const slideData = translations[lang]?.hero?.slides?.[current];
    const slideConfig = siteConfig.heroSlides[current];
    if (slideData) renderSlideContent(contentEl, slideData, current, slideConfig, lang);
    setOverlayVisible(Boolean(slideConfig?.overlay));
  }

  function updateAlts(lang) {
    slides.forEach((slide, i) => {
      const config = siteConfig.heroSlides[i];
      if (config.layout === 'portrait-frame') return;
      const img = slide.querySelector('img');
      if (img && translations[lang]?.hero?.[config.altKey]) {
        img.alt = translations[lang].hero[config.altKey];
      }
    });
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

    updateContent(lang);
  }

  function next() {
    goTo(current + 1);
  }

  function prev() {
    goTo(current - 1);
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

  prevBtn?.addEventListener('click', () => {
    prev();
    startAutoplay();
  });

  nextBtn?.addEventListener('click', () => {
    next();
    startAutoplay();
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
      prev();
      startAutoplay();
    } else if (e.key === 'ArrowRight') {
      e.preventDefault();
      next();
      startAutoplay();
    }
  });

  slider.setAttribute('tabindex', '0');
  updateContent(currentLang);
  updateAlts(currentLang);
  startAutoplay();

  document.body.classList.add('has-hero-slider');

  return {
    updateLang(lang) {
      currentLang = lang;
      updateAlts(lang);
      updateContent(lang);
    },
    getCurrentIndex() {
      return current;
    },
  };
}

export function refreshHeroSliderContent(lang) {
  sliderApi?.updateLang(lang);
}

export function initHeroSliderModule() {
  sliderApi = initHeroSlider();
}
