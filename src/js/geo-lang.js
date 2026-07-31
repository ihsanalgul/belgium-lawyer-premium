import { supportedLanguages } from '../data/translations.js';

const GEO_API = 'https://ipapi.co/json/';
const TIMEOUT_MS = 2000;

const COUNTRY_LANG_MAP = {
  TR: 'tr',
  BE: 'fr',
  FR: 'fr',
  LU: 'fr',
  MC: 'fr',
  NL: 'nl',
};

function mapCountryToLang(countryCode) {
  if (!countryCode) return null;
  return COUNTRY_LANG_MAP[countryCode.toUpperCase()] || 'en';
}

export async function detectGeoLanguage() {
  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), TIMEOUT_MS);

  try {
    const res = await fetch(GEO_API, { signal: controller.signal });
    if (!res.ok) return null;
    const data = await res.json();
    const lang = mapCountryToLang(data.country_code);
    return lang && supportedLanguages.includes(lang) ? lang : null;
  } catch {
    return null;
  } finally {
    clearTimeout(timeout);
  }
}
