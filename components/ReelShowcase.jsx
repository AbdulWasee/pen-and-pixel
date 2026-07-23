"use client";

import { useEffect, useRef, useState } from "react";
import reels from "./reels";

const ROTATIONS = ["-4deg", "3deg", "-2.5deg", "4deg", "-3.5deg", "2deg"];

function ReelCard({ reel, index, onOpen }) {
  const videoRef = useRef(null);
  const [playing, setPlaying] = useState(false);
  const hasVideo = Boolean(reel.src);

  const enter = () => {
    if (!hasVideo || !videoRef.current) return;
    videoRef.current.play().then(() => setPlaying(true)).catch(() => {});
  };
  const leave = () => {
    if (!hasVideo || !videoRef.current) return;
    videoRef.current.pause();
    videoRef.current.currentTime = 0;
    setPlaying(false);
  };

  return (
    <div
      className={`reel-card${playing ? " playing" : ""}`}
      style={{ ["--rot"]: ROTATIONS[index % ROTATIONS.length], cursor: hasVideo ? "pointer" : "default" }}
      onMouseEnter={enter}
      onMouseLeave={leave}
      onClick={() => hasVideo && onOpen(reel)}
    >
      <div className="reel-card-inner">
        {/* Only show poster image if it exists */}
        {reel.poster && (
          // eslint-disable-next-line @next/next/no-img-element
          <img className="reel-poster" src={reel.poster} alt="" loading="lazy" draggable={false} />
        )}
        {hasVideo && (
          <video className="reel-video" ref={videoRef} muted loop playsInline preload="none" poster={reel.poster || ''}>
            <source src={reel.src} type="video/mp4" />
          </video>
        )}
        <div className="reel-card-overlay">
          <span className="reel-tag">{reel.label}</span>
          {hasVideo ? <div className="reel-play" aria-hidden="true">▶</div> : <div className="reel-coming">Reel coming soon</div>}
          <div className="reel-card-meta">{reel.title}</div>
        </div>
      </div>
    </div>
  );
}

export default function ReelShowcase() {
  const [active, setActive] = useState(null);

  useEffect(() => {
    if (!active) return;
    const onKey = (e) => e.key === "Escape" && setActive(null);
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [active]);

  const loop = [...reels, ...reels];

  return (
    <section className="reels-section">
      <div className="outer">
        <div className="section-head fade-in">
          <div className="section-eyebrow">In Motion</div>
          <h2>Reels that stop<br />the scroll.</h2>
        </div>
      </div>

      <div className="reels-viewport fade-in">
        <div className="reels-track">
          {loop.map((reel, i) => (
            <ReelCard key={i} reel={reel} index={i} onOpen={setActive} aria-hidden={i >= reels.length} />
          ))}
        </div>
      </div>
      <p className="reels-hint">Hover to preview · click for sound</p>

      {active && (
        <div className="reel-lightbox" onClick={() => setActive(null)}>
          <div className="reel-lightbox-inner" onClick={(e) => e.stopPropagation()}>
            <button className="reel-close" onClick={() => setActive(null)} aria-label="Close">✕</button>
            <video src={active.src} poster={active.poster} controls autoPlay playsInline />
          </div>
        </div>
      )}
    </section>
  );
}
