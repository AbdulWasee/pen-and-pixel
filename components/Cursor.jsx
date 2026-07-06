"use client";

import { useEffect, useRef } from "react";

export default function Cursor() {
  const dotRef = useRef(null);
  const ringRef = useRef(null);

  useEffect(() => {
    // Skip entirely on touch / coarse pointers
    if (window.matchMedia("(pointer: coarse)").matches) return;

    const dot = dotRef.current;
    const ring = ringRef.current;
    if (!dot || !ring) return;

    let ringTimer;
    const onMove = (e) => {
      dot.style.left = e.clientX + "px";
      dot.style.top = e.clientY + "px";
      clearTimeout(ringTimer);
      ringTimer = setTimeout(() => {
        ring.style.left = e.clientX + "px";
        ring.style.top = e.clientY + "px";
      }, 65);
    };

    const enter = () => document.body.classList.add("cursor-hover");
    const leave = () => document.body.classList.remove("cursor-hover");
    const hoverSelector =
      "a,button,input,select,textarea,.industry-tag,.service-card,.trust-pill,.deliverable-tag,.svc-tag,.cs-tag,.cs-card,.filter-btn,.cs-filter-btn,.progress-step";

    const bind = () =>
      document.querySelectorAll(hoverSelector).forEach((el) => {
        el.addEventListener("mouseenter", enter);
        el.addEventListener("mouseleave", leave);
      });

    document.addEventListener("mousemove", onMove);
    bind();

    // Re-bind when route content swaps in
    const mo = new MutationObserver(() => {
      leave();
      bind();
    });
    mo.observe(document.body, { childList: true, subtree: true });

    return () => {
      document.removeEventListener("mousemove", onMove);
      mo.disconnect();
    };
  }, []);

  return (
    <>
      <div className="cursor" ref={dotRef} aria-hidden="true" />
      <div className="cursor-ring" ref={ringRef} aria-hidden="true" />
    </>
  );
}
