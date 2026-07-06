"use client";

import dynamic from "next/dynamic";
import { useEffect, useState } from "react";

// WebGL is browser-only — load the galaxy without SSR so it never runs at build.
const Galaxy = dynamic(() => import("./Galaxy"), { ssr: false });

export default function HeroGalaxy() {
  const [reduced, setReduced] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReduced(mq.matches);
    const onChange = () => setReduced(mq.matches);
    mq.addEventListener?.("change", onChange);
    return () => mq.removeEventListener?.("change", onChange);
  }, []);

  return (
    <div className="hero-galaxy" aria-hidden="true">
      <Galaxy
        density={1.1}
        glowIntensity={0.38}
        saturation={0.55}
        hueShift={210}          /* toward Adonis blue, with warm star variance */
        twinkleIntensity={0.45}
        rotationSpeed={0.04}
        starSpeed={0.3}
        speed={0.8}
        repulsionStrength={1.6}
        mouseInteraction={!reduced}
        mouseRepulsion={false}  /* gentle parallax drift, not a strong push */
        disableAnimation={reduced}
        transparent={true}
      />
    </div>
  );
}
