"use client";

// SpotlightCard — open-source React Bits component.
// The cursor-following radial-glow behaviour is kept as-is; the container
// styling is themed in app/globals.css to fit the light services grid
// (so the demo's dark #111 card look is intentionally not used), and the
// glow is drawn on ::after to avoid clashing with .service-card::before.
import { useRef } from "react";

const SpotlightCard = ({
  children,
  className = "",
  spotlightColor = "rgba(224, 99, 59, 0.18)",
}) => {
  const divRef = useRef(null);

  const handleMouseMove = (e) => {
    const el = divRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    el.style.setProperty("--mouse-x", `${e.clientX - rect.left}px`);
    el.style.setProperty("--mouse-y", `${e.clientY - rect.top}px`);
    el.style.setProperty("--spotlight-color", spotlightColor);
  };

  return (
    <div
      ref={divRef}
      onMouseMove={handleMouseMove}
      className={`card-spotlight ${className}`}
    >
      {children}
    </div>
  );
};

export default SpotlightCard;
