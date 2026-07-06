"use client";

import dynamic from "next/dynamic";
import { useEffect, useRef, useState } from "react";

const Orb = dynamic(() => import("./Orb"), { ssr: false });

export default function HeroOrb() {
  const ref = useRef(null);
  const [inView, setInView] = useState(true);
  const [reduced, setReduced] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReduced(mq.matches);
    const onChange = () => setReduced(mq.matches);
    mq.addEventListener?.("change", onChange);
    return () => mq.removeEventListener?.("change", onChange);
  }, []);

  // Only run the WebGL orb while the hero is on screen — stops the GPU work
  // (and the lag) once you scroll into the rest of the page.
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => setInView(e.isIntersecting),
      { rootMargin: "120px" }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <div className="hero-orb" ref={ref} aria-hidden="true">
      {reduced ? (
        <div className="hero-orb-static" />
      ) : inView ? (
        <Orb hue={110} hoverIntensity={0.45} rotateOnHover={true} forceHoverState={false} />
      ) : null}
    </div>
  );
}
