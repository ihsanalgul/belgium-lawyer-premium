import { translations } from '../data/translations.js';

const ALL_SLOTS = ['09:00', '10:30', '11:30', '13:00', '14:30', '16:00', '17:00'];
const TAKEN_PATTERN = [1, 4];

const state = {
  step: 1,
  pkgId: null,
  pkgLabel: null,
  dateIdx: null,
  slot: null,
  days: [],
};

let packageClickHandler = null;

function getLang() {
  return document.documentElement.lang || 'tr';
}

function getT() {
  return translations[getLang()].appointments;
}

function buildDays() {
  state.days = [];
  for (let i = 1; i <= 7; i++) {
    const d = new Date();
    d.setDate(d.getDate() + i);
    state.days.push(d);
  }
}

function setStep(step) {
  state.step = step;
  document.querySelectorAll('.appt-step').forEach((el) => {
    const n = Number(el.dataset.step);
    el.hidden = n !== step;
    el.classList.toggle('is-active', n === step);
  });
  document.querySelectorAll('.appt-step-indicator__item').forEach((el) => {
    const n = Number(el.dataset.step);
    el.classList.toggle('is-complete', n < step);
    el.classList.toggle('is-active', n === step);
  });
}

function renderPackages() {
  const grid = document.getElementById('packages-grid');
  if (!grid) return;

  const t = getT();

  grid.innerHTML = t.packages
    .map(
      (pkg) => `
    <button
      type="button"
      class="pkg-card${state.pkgId === pkg.id ? ' is-selected' : ''}"
      role="radio"
      aria-checked="${state.pkgId === pkg.id}"
      data-pkg-id="${pkg.id}"
      data-selected-label="${t.selectedLabel}"
      tabindex="${state.pkgId === pkg.id ? '0' : '-1'}"
    >
      <div class="pkg-duration" data-pkg-field="duration">${pkg.duration}</div>
      <h3 data-pkg-field="title">${pkg.title}</h3>
      <div class="pkg-price">
        ${pkg.price}${pkg.priceNote ? `<span class="pkg-price-note"> ${pkg.priceNote}</span>` : ''}
      </div>
      <p class="pkg-desc" data-pkg-field="desc">${pkg.desc}</p>
      <ul class="pkg-features" data-pkg-field="features">
        ${pkg.features.map((f) => `<li>${f}</li>`).join('')}
      </ul>
    </button>`
    )
    .join('');

  if (packageClickHandler) {
    grid.removeEventListener('click', packageClickHandler);
    grid.removeEventListener('keydown', packageKeyHandler);
  }

  packageClickHandler = (e) => {
    const card = e.target.closest('.pkg-card');
    if (!card) return;
    selectPackage(card.dataset.pkgId);
  };

  grid.addEventListener('click', packageClickHandler);
  grid.addEventListener('keydown', packageKeyHandler);

  const step1Next = document.getElementById('appt-step1-next');
  if (step1Next) step1Next.disabled = !state.pkgId;
}

function packageKeyHandler(e) {
  if (e.key !== 'Enter' && e.key !== ' ') return;
  const card = e.target.closest('.pkg-card');
  if (!card) return;
  e.preventDefault();
  selectPackage(card.dataset.pkgId);
}

function selectPackage(pkgId) {
  const t = getT();
  const pkg = t.packages.find((p) => p.id === pkgId);
  if (!pkg) return;

  state.pkgId = pkgId;
  state.pkgLabel = `${pkg.title} · ${pkg.duration}`;
  state.dateIdx = null;
  state.slot = null;

  renderPackages();
  renderDateChips();
  renderSlots();
  updateSummary();
}

function renderDateChips() {
  const container = document.getElementById('date-chips');
  if (!container) return;

  const t = getT();
  container.innerHTML = '';

  state.days.forEach((d, idx) => {
    const chip = document.createElement('button');
    chip.type = 'button';
    chip.className = `date-chip${state.dateIdx === idx ? ' is-active' : ''}`;
    chip.setAttribute('aria-pressed', state.dateIdx === idx ? 'true' : 'false');
    chip.innerHTML = `
      <span class="date-chip-dow">${t.weekdays[d.getDay()]}</span>
      <span class="date-chip-dom">${d.getDate()}</span>`;
    chip.addEventListener('click', () => {
      state.dateIdx = idx;
      state.slot = null;
      renderDateChips();
      renderSlots();
      updateSummary();
      updateStep2Next();
    });
    container.appendChild(chip);
  });
}

function renderSlots() {
  const grid = document.getElementById('slot-grid');
  if (!grid) return;

  grid.innerHTML = '';

  ALL_SLOTS.forEach((slot, i) => {
    const taken =
      state.dateIdx !== null &&
      TAKEN_PATTERN.includes((i + state.dateIdx) % ALL_SLOTS.length);

    const btn = document.createElement('button');
    btn.type = 'button';
    btn.className = `slot-btn${state.slot === slot ? ' is-active' : ''}${taken ? ' is-taken' : ''}`;
    btn.textContent = slot;
    btn.disabled = taken;
    btn.setAttribute('aria-pressed', state.slot === slot ? 'true' : 'false');

    if (!taken) {
      btn.addEventListener('click', () => {
        state.slot = slot;
        renderSlots();
        updateSummary();
        updateStep2Next();
      });
    }

    grid.appendChild(btn);
  });
}

function updateStep2Next() {
  const btn = document.getElementById('appt-step2-next');
  if (btn) btn.disabled = state.dateIdx === null || !state.slot;
}

function updateSummary() {
  const summaryLine = document.getElementById('summary-line');
  const confirmBtn = document.getElementById('confirm-btn');
  const t = getT().booker;

  if (state.pkgLabel && state.dateIdx !== null && state.slot) {
    const d = state.days[state.dateIdx];
    const month = getT().months[d.getMonth()];
    if (summaryLine) {
      summaryLine.innerHTML = `<strong>${state.pkgLabel}</strong> — ${d.getDate()} ${month}, <strong>${state.slot}</strong>`;
    }
    if (confirmBtn) confirmBtn.disabled = false;
  } else {
    if (summaryLine) summaryLine.textContent = t.summaryEmpty;
    if (confirmBtn) confirmBtn.disabled = true;
  }
}

function handleConfirm() {
  const name = document.getElementById('bk-name')?.value.trim();
  const email = document.getElementById('bk-email')?.value.trim();

  if (!name || !email) {
    if (!name) document.getElementById('bk-name')?.focus();
    else document.getElementById('bk-email')?.focus();
    return;
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) return;

  document.querySelectorAll('.appt-step').forEach((el) => {
    el.hidden = true;
  });
  document.querySelector('.appt-step-indicator')?.setAttribute('hidden', '');
  const success = document.getElementById('booking-success');
  if (success) {
    success.hidden = false;
    success.classList.add('is-visible');
  }
}

export function refreshAppointmentsLocale() {
  if (state.days.length === 0) buildDays();
  renderPackages();
  renderDateChips();
  renderSlots();
  updateSummary();
  updateStep2Next();
}

export function initAppointments() {
  buildDays();
  renderPackages();
  renderDateChips();
  renderSlots();
  updateSummary();
  setStep(1);

  document.getElementById('appt-step1-next')?.addEventListener('click', () => {
    if (!state.pkgId) return;
    setStep(2);
  });

  document.getElementById('appt-step2-back')?.addEventListener('click', () => setStep(1));
  document.getElementById('appt-step2-next')?.addEventListener('click', () => {
    if (state.dateIdx === null || !state.slot) return;
    setStep(3);
  });

  document.getElementById('appt-step3-back')?.addEventListener('click', () => setStep(2));
  document.getElementById('confirm-btn')?.addEventListener('click', handleConfirm);
}
