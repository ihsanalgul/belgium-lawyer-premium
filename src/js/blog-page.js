import '../css/main.css';
import { initSiteConfig } from './site-init.js';
import { initI18n } from './i18n.js';

const logo = document.querySelector('.logo-wordmark');
if (logo) logo.href = '/';

initSiteConfig();
initI18n();
