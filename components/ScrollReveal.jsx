"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

export default function ScrollReveal() {
  const pathname = usePathname();

  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const els = document.querySelectorAll(".fade-in");

    if (reduce) {
      els.forEach((el) => el.classList.add("visible"));
      return;
    }

    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("visible");
            obs.unobserve(e.target);
          }
        });
      },
      { threshold: 0.07 }
    );

    els.forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, [pathname]);

  return null;
}
