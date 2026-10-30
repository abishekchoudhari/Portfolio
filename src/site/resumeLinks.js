import resumeUrl from "../../docs/ABHISHEK_CHOUDHARI_Flutter_Developer.pdf?url";

export function initializeResumeLinks() {
  document.querySelectorAll('a[href="docs/ABHISHEK_CHOUDHARI_Flutter_Developer.pdf"]')
    .forEach((link) => link.setAttribute("href", resumeUrl));
}
