"use client";

import { useState } from "react";

const FILTERS = [
  { key: "all", label: "All" },
  { key: "social", label: "Social Media" },
  { key: "branding", label: "Branding" },
  { key: "packaging", label: "Packaging" },
  { key: "video", label: "Video" },
];

const SLOTS = [
  { cat: "social", icon: "▶", label: "Social Media", num: "01" },
  { cat: "branding", icon: "✦", label: "Branding", num: "02" },
  { cat: "video", icon: "🎬", label: "Video", num: "03" },
  { cat: "packaging", icon: "📦", label: "Packaging", num: "04" },
];

export default function PortfolioGallery() {
  const [active, setActive] = useState("all");

  return (
    <>
      <div className="outer">
        <div className="portfolio-filters fade-in">
          {FILTERS.map((f) => (
            <button
              key={f.key}
              className={`filter-btn${active === f.key ? " active" : ""}`}
              onClick={() => setActive(f.key)}
            >
              {f.label}
            </button>
          ))}
        </div>
      </div>
      <div className="outer" style={{ paddingLeft: 0, paddingRight: 0 }}>
        <div className="portfolio-grid">
          {SLOTS.map((s) => {
            const show = active === "all" || active === s.cat;
            return (
              <div
                key={s.num}
                className={`portfolio-slot${show ? " active" : ""}`}
                data-category={s.cat}
              >
                <div className="portfolio-placeholder">
                  <span className="placeholder-icon">{s.icon}</span>
                  <span className="placeholder-cat">{s.label}</span>
                  <span className="placeholder-label">Reel coming soon</span>
                </div>
                <div className="slot-overlay" />
                <span className="slot-num">{s.num}</span>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
