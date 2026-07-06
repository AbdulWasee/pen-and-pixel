"use client";

import dynamic from "next/dynamic";
import { useEffect, useRef, useState } from "react";
import workImages from "./workImages";

const DomeGallery = dynamic(() => import("./DomeGallery"), { ssr: false });

export default function WorkDome() {
  const ref = useRef(null);
  const [mounted, setMounted] = useState(false);

  // Build the (heavy) dome only when it's about to enter the viewport.
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setMounted(true);
          obs.disconnect();
        }
      },
      { rootMargin: "300px" }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <div className="work-dome" ref={ref}>
      {mounted && (
        <DomeGallery
          images={workImages}
          overlayBlurColor="#121119"
          grayscale={false}
          imageBorderRadius="18px"
          openedImageBorderRadius="18px"
          openedImageWidth="320px"
          openedImageHeight="400px"
          fitBasis="auto"
        />
      )}
      <span className="work-dome-hint">Drag to explore</span>
    </div>
  );
}
