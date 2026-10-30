export function initializeIntroExperience() {
  const screen = document.querySelector("#intro-screen");
  const video = document.querySelector("#intro-video");
  const skipButton = document.querySelector("#intro-skip");
  const soundButton = document.querySelector("#intro-sound");
  const soundIcon = soundButton?.querySelector(".intro-sound-icon");
  const soundLabel = soundButton?.querySelector(".intro-sound-label");
  const status = document.querySelector("#intro-status");
  const progress = document.querySelector(".intro-progress span");

  if (!(screen instanceof HTMLElement) || !(video instanceof HTMLVideoElement) ||
      !(skipButton instanceof HTMLButtonElement) || !(soundButton instanceof HTMLButtonElement) ||
      !(soundIcon instanceof HTMLElement) || !(soundLabel instanceof HTMLElement) ||
      !(status instanceof HTMLElement) ||
      !(progress instanceof HTMLElement)) {
    throw new Error("The portfolio intro requires its screen, video, controls, status, and progress elements.");
  }

  let hasTransitionStarted = false;
  let fallbackTimer = 0;
  let fallbackAnimationHandler;
  let transitionModulePromise;
  let transitionModuleError;
  let handleKeydown;
  const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const portfolioElements = document.querySelectorAll(".skip-link, .site-header, main, .site-footer");

  function loadTransitionModule() {
    if (!transitionModulePromise) {
      transitionModulePromise = import("./diagonalWipe.js").catch((error) => {
        transitionModuleError = error;
        return null;
      });
    }

    return transitionModulePromise;
  }

  function setPortfolioInert(isInert) {
    portfolioElements.forEach((element) => {
      element.inert = isInert;
    });
  }

  function closeIntro() {
    window.clearTimeout(fallbackTimer);
    if (fallbackAnimationHandler) {
      screen.removeEventListener("animationend", fallbackAnimationHandler);
    }
    if (handleKeydown) {
      document.removeEventListener("keydown", handleKeydown);
    }
    screen.remove();
    document.body.classList.remove("intro-active");
    setPortfolioInert(false);
    document.querySelector("#main")?.focus({ preventScroll: true });
  }

  async function finishIntro({ instant = prefersReducedMotion } = {}) {
    if (hasTransitionStarted) return;
    hasTransitionStarted = true;
    video.pause();

    if (instant) {
      closeIntro();
      return;
    }

    try {
      const transitionModule = await loadTransitionModule();
      if (!transitionModule) {
        throw transitionModuleError ?? new Error("The Three.js transition module could not load.");
      }

      const { playDiagonalWipe } = transitionModule;
      await playDiagonalWipe(video, () => {
        screen.classList.add("is-transitioning");
      });
      closeIntro();
    } catch (error) {
      console.error("The Three.js intro transition could not run; using the CSS transition instead.", error);
      screen.classList.remove("is-transitioning");
      screen.classList.add("is-css-transition");
      fallbackAnimationHandler = closeIntro;
      screen.addEventListener("animationend", fallbackAnimationHandler, { once: true });
      fallbackTimer = window.setTimeout(closeIntro, 1800);
    }
  }

  screen.hidden = false;
  document.body.classList.add("intro-active");
  setPortfolioInert(true);
  skipButton.focus({ preventScroll: true });

  skipButton.addEventListener("click", () => {
    void finishIntro();
  });

  soundButton.addEventListener("click", () => {
    video.muted = !video.muted;
    soundButton.setAttribute("aria-pressed", String(!video.muted));
    soundIcon.textContent = video.muted ? "♪" : "♫";
    soundLabel.textContent = video.muted ? "Sound off" : "Sound on";
  });

  video.addEventListener("ended", () => {
    void finishIntro({ instant: prefersReducedMotion });
  });

  video.addEventListener("error", () => {
    status.textContent = "The introduction video could not load. Continue to the portfolio whenever you’re ready.";
    skipButton.textContent = "Continue to portfolio";
  });

  video.addEventListener("timeupdate", () => {
    if (Number.isFinite(video.duration) && video.duration > 0) {
      progress.style.transform = `scaleX(${video.currentTime / video.duration})`;
    }
  });

  video.addEventListener("playing", () => {
    void loadTransitionModule();
  }, { once: true });

  handleKeydown = (event) => {
    if (event.key === "Escape") {
      void finishIntro({ instant: prefersReducedMotion });
      return;
    }

    if (event.key !== "Tab") return;

    const activeElement = document.activeElement;
    if (event.shiftKey && activeElement === soundButton) {
      event.preventDefault();
      skipButton.focus();
    } else if (!event.shiftKey && activeElement === skipButton) {
      event.preventDefault();
      soundButton.focus();
    }
  };
  document.addEventListener("keydown", handleKeydown);

  video.play().then(() => {
    void loadTransitionModule();
  }).catch((error) => {
    if (hasTransitionStarted) return;
    console.warn("The intro could not autoplay; use the continue button to open the portfolio.", error);
    status.textContent = "The introduction video could not autoplay. Continue to the portfolio whenever you’re ready.";
    skipButton.textContent = "Continue to portfolio";
  });
}
