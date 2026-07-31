let observer = null;

function createObserver() {
  return new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-revealed');
          observer?.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.15,
      rootMargin: '0px 0px -40px 0px',
    }
  );
}

export function observeRevealElements(root = document) {
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const elements = root.querySelectorAll
    ? root.querySelectorAll('.reveal:not(.is-revealed)')
    : [];

  if (!elements.length) return;

  if (prefersReducedMotion) {
    elements.forEach((el) => el.classList.add('is-revealed'));
    return;
  }

  if (!observer) {
    observer = createObserver();
  }

  elements.forEach((el) => observer.observe(el));
}

export function initScrollReveal() {
  observeRevealElements(document);
}
