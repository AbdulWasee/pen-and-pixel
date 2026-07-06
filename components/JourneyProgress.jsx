"use client";

import { useEffect, useState } from "react";

const STEPS = [
  { stage: 1, label: "Discovery" },
  { stage: 2, label: "Proposal" },
  { stage: 3, label: "Strategy" },
  { stage: 4, label: "Onboarding" },
  { stage: 5, label: "Execution" },
  { stage: 6, label: "Review & Optimise" },
];

export default function JourneyProgress() {
  const [current, setCurrent] = useState(1);

  useEffect(() => {
    const stages = document.querySelectorAll(".stage[data-stage-id]");
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setCurrent(parseInt(entry.target.dataset.stageId, 10));
          }
        });
      },
      { threshold: 0.4 }
    );
    stages.forEach((s) => obs.observe(s));
    return () => obs.disconnect();
  }, []);

  const goTo = (stage) => {
    const target = document.querySelector(`.stage[data-stage-id="${stage}"]`);
    if (!target) return;
    const offset = 58 + 49 + 20;
    const top = target.getBoundingClientRect().top + window.scrollY - offset;
    window.scrollTo({ top, behavior: "smooth" });
  };

  return (
    <div className="progress-nav">
      <div className="progress-nav-inner">
        {STEPS.map((s) => (
          <div
            key={s.stage}
            className={`progress-step${
              s.stage === current ? " active" : s.stage < current ? " done" : ""
            }`}
            onClick={() => goTo(s.stage)}
          >
            <span className="progress-step-num">{s.stage}</span>
            {s.label}
          </div>
        ))}
      </div>
    </div>
  );
}
