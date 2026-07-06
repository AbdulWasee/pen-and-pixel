"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

export default function FloatCta() {
  const [visible, setVisible] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const hero = document.querySelector(".hero, .page-hero, .cs-hero, .contact-hero");
    if (!hero) {
      const onScroll = () => setVisible(window.scrollY > 500);
      window.addEventListener("scroll", onScroll, { passive: true });
      onScroll();
      return () => window.removeEventListener("scroll", onScroll);
    }
    const obs = new IntersectionObserver(
      (entries) => entries.forEach((e) => setVisible(!e.isIntersecting)),
      { threshold: 0 }
    );
    obs.observe(hero);
    return () => obs.disconnect();
  }, [pathname]);

  return (
    <Link
      href="/contact"
      className={`float-cta${visible ? " visible" : ""}`}
    >
      Book a Call
    </Link>
  );
}
