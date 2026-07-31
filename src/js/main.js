import '../css/main.css';
import { initSiteConfig } from './site-init.js';
import { initI18n } from './i18n.js';
import { initNav } from './nav.js';
import { initScrollReveal } from './scroll-reveal.js';
import { initHeroSliderModule } from './hero-slider.js';
import { initCalendar } from './calendar.js';

initSiteConfig();
initHeroSliderModule();
initCalendar();
initI18n().then(() => {
  initNav();
  initScrollReveal();
});
