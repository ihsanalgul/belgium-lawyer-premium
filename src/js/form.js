import { translations, defaultLanguage } from '../data/translations.js';

function getCurrentLang() {
  return document.documentElement.lang || defaultLanguage;
}

function showFeedback(element, type, message) {
  element.textContent = message;
  element.classList.remove('is-success', 'is-error', 'is-visible');
  element.classList.add('is-visible', type === 'success' ? 'is-success' : 'is-error');
}

export function initForm() {
  const form = document.getElementById('contact-form');
  const feedback = document.getElementById('form-feedback');
  if (!form || !feedback) return;

  form.addEventListener('submit', async (e) => {
    e.preventDefault();

    const lang = getCurrentLang();
    const t = translations[lang].contact.form;

    const formData = new FormData(form);

    if (!formData.get('name')?.trim() || !formData.get('email')?.trim() || !formData.get('message')?.trim()) {
      showFeedback(feedback, 'error', t.error);
      return;
    }

    const email = formData.get('email');
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      showFeedback(feedback, 'error', t.error);
      return;
    }

    try {
      const response = await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams(formData).toString(),
      });

      if (response.ok) {
        showFeedback(feedback, 'success', t.success);
        form.reset();
      } else {
        showFeedback(feedback, 'error', t.error);
      }
    } catch {
      showFeedback(feedback, 'error', t.error);
    }
  });
}
