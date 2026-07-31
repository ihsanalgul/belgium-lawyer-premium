import '../css/main.css';
import { initSiteConfig } from './site-init.js';
import { initI18n } from './i18n.js';
import { initNav } from './nav.js';

initSiteConfig();
initI18n().then(() => {
  initNav();
});
