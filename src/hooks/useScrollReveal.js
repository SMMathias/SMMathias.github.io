import { useEffect } from "react";

/* Afslører [data-reveal]-elementer med designets v8-rise-animation,
   når de rulles ind i viewporten. Elementerne skjules først, når vi
   ved, at JS kan afsløre dem igen (reveal-js på <html>). */
function useScrollReveal(routeKey) {
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return undefined;
    }

    document.documentElement.classList.add("reveal-js");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-revealed");
            observer.unobserve(entry.target);
          }
        });
      },
      { rootMargin: "0px 0px -8% 0px" },
    );

    document
      .querySelectorAll("[data-reveal]:not(.is-revealed)")
      .forEach((element) => observer.observe(element));

    return () => observer.disconnect();
  }, [routeKey]);
}

export default useScrollReveal;
