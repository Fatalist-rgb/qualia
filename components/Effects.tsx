"use client";

import { useEffect } from "react";

/**
 * Mounts once. Drives `.reveal` / `.reveal-scale` elements into view using a
 * getBoundingClientRect poll (scroll + rAF + interval) rather than relying on
 * IntersectionObserver, so reveals fire consistently across renderers.
 */
export default function Effects() {
  useEffect(() => {
    const root = document.documentElement;
    root.classList.remove("no-js");

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const items = Array.from(
      document.querySelectorAll<HTMLElement>(".reveal, .reveal-scale")
    );

    if (reduce) {
      items.forEach((el) => el.classList.add("is-in"));
      return;
    }

    let ticking = false;

    const check = () => {
      ticking = false;
      const vh = window.innerHeight;
      for (let i = items.length - 1; i >= 0; i--) {
        const el = items[i];
        const r = el.getBoundingClientRect();
        if (r.top < vh * 0.9 && r.bottom > 0) {
          el.classList.add("is-in");
          items.splice(i, 1);
        }
      }
      if (items.length === 0) {
        window.removeEventListener("scroll", onScroll);
        clearInterval(timer);
      }
    };

    const onScroll = () => {
      if (!ticking) {
        ticking = true;
        requestAnimationFrame(check);
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll, { passive: true });
    const timer = setInterval(check, 300);
    check();

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      clearInterval(timer);
    };
  }, []);

  return null;
}
