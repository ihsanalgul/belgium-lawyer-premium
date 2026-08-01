import '../css/main.css';
import { initSiteConfig } from './site-init.js';
import { initTheme } from './theme.js';
import { initI18n } from './i18n.js';
import { initNav } from './nav.js';
import { initScrollReveal } from './scroll-reveal.js';
import { initHeroSliderModule } from './hero-slider.js';
import { initAppointments } from './appointments.js';

initTheme();
initSiteConfig();
initHeroSliderModule();
initAppointments();
initI18n().then(() => {
  initNav();
  initScrollReveal();
});
