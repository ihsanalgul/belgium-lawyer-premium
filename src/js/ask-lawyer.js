import { translations } from '../data/translations.js';

export function initAskLawyer() {
  const form = document.getElementById('ask-form');
  const submitBtn = document.getElementById('ask-submit');
  if (!form || !submitBtn) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const lang = document.documentElement.lang || 'en';
    const t = translations[lang].askLawyer.form;

    const name = form.querySelector('#ask-name')?.value.trim();
    const email = form.querySelector('#ask-email')?.value.trim();
    const message = form.querySelector('#ask-message')?.value.trim();
    const consent = form.querySelector('#ask-consent')?.checked;
    const area = form.querySelector('#ask-area')?.value;

    if (!name || !email || !message || !consent || area === '') {
      form.reportValidity();
      return;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      form.querySelector('#ask-email')?.setCustomValidity('Invalid email');
      form.reportValidity();
      form.querySelector('#ask-email')?.setCustomValidity('');
      return;
    }

    submitBtn.textContent = t.submitted;
    submitBtn.disabled = true;
  });
}
