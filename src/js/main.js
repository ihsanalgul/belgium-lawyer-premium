import '../css/main.css';
import { initSiteConfig } from './site-init.js';
import { initTheme } from './theme.js';
import { initI18n } from './i18n.js';
import { initNav } from './nav.js';
import { initAppointments } from './appointments.js';

initTheme();
initSiteConfig();

initI18n().then(() => {
  initAppointments();
  initNav();
});
