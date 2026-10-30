export function initializeReveals() {
  document.documentElement.classList.add("js");

  const revealItems = document.querySelectorAll("[data-reveal]");
  const characterItems = document.querySelectorAll("[data-character]");

  if (!("IntersectionObserver" in window)) {
    revealItems.forEach((item) => item.classList.add("is-visible"));
    characterItems.forEach((item) => item.classList.add("is-animating"));
    return;
  }

  const revealObserver = new IntersectionObserver(
    (entries, observer) => {
      for (const entry of entries) {
        if (!entry.isIntersecting) continue;

        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      }
    },
    { threshold: 0.12 },
  );
  revealItems.forEach((item) => revealObserver.observe(item));

  const characterObserver = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        entry.target.classList.toggle("is-animating", entry.isIntersecting);
      }
    },
    { threshold: 0.2 },
  );
  characterItems.forEach((item) => characterObserver.observe(item));
}
