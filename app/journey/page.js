import Link from "next/link";
import JourneyProgress from "@/components/JourneyProgress";

const STAGES = [
  {
    id: 1, num: "01", timing: "Day 1–3", title: "Discovery",
    tagline: "We listen before we talk. Every brief starts the same way: with questions, not answers.",
    you: ["Your brand story and current positioning","Business goals and growth targets","Existing assets (if any) — logos, visuals, tone","A clear picture of your audience"],
    we: ["A structured discovery questionnaire","60-minute onboarding call with a senior strategist","Competitive landscape scan","Initial brand audit (if assets exist)"],
    what: "Before we build anything, we need to understand what you’re actually building. Our discovery process is a structured conversation — not a form to fill out. We dig into your market, your competitors, what’s worked before, and what hasn’t. This is where we decide if we’re the right fit, and where you decide the same about us.",
    deliverables: ["Discovery Call Recording","Brand Audit Summary","Competitive Scan"],
  },
  {
    id: 2, num: "02", timing: "Day 4–7", title: "Proposal",
    tagline: "A clear, no-fluff document. Here’s what we’d do, why, and what it costs.",
    you: ["Feedback on the discovery summary","Budget range and timeline preferences","Any open questions from the call"],
    we: ["Scoped proposal with service breakdown","Recommended package with rationale","Pricing and engagement model","Proposed team and point of contact"],
    what: "We don’t send generic quotes. Your proposal is built around what you actually need — nothing inflated, nothing missing. We walk you through it on a 30-minute call, answer every question, and revise once based on your feedback before we move forward.",
    deliverables: ["Scoped Proposal Document","Engagement Agreement","30-min Review Call"],
  },
  {
    id: 3, num: "03", timing: "Week 1–2", title: "Strategy",
    tagline: "The plan that everything else runs on. Built once, refined continuously.",
    you: ["Approved proposal and signed agreement","Access to existing channels and analytics","Product/service details and key messages","Any seasonal events or upcoming launches"],
    we: ["Full brand and content strategy document","Platform-specific content framework","Brand voice and visual direction guide","Month 1 content calendar (draft)"],
    what: "This is where strategy becomes tangible. We produce a full content strategy document: audience personas, content pillars, platform priorities, posting cadence, and tone of voice. Nothing gets made until this is approved. It’s the single source of truth for everything that follows.",
    deliverables: ["Brand Strategy Doc","Content Framework","Voice & Visual Guide","Month 1 Calendar Draft"],
  },
  {
    id: 4, num: "04", timing: "Week 2–3", title: "Onboarding",
    tagline: "Getting the infrastructure right so execution is frictionless from day one.",
    you: ["Admin access to relevant social accounts","Brand assets (photography, existing visuals)","Product samples (for shoot, if applicable)","Internal approval contact and workflow"],
    we: ["Shared Notion/Drive workspace setup","Content approval workflow and SLA doc","Dedicated WhatsApp or Slack channel","Account audit and baseline metrics report"],
    what: "We set up the operating system for our working relationship. This includes shared workspaces, approval flows, communication norms, and access handoffs. By the end of this stage, both teams know exactly how work moves from brief to publish — with zero ambiguity about who does what and when.",
    deliverables: ["Shared Workspace","Approval SLA Doc","Baseline Metrics Report","Communication Setup"],
  },
  {
    id: 5, num: "05", timing: "Month 1 onward", title: "Execution",
    tagline: "This is where most agencies stop talking and start delivering. We do both.",
    you: ["Timely approvals (within agreed SLA)","Product or shoot access as needed","Any real-time brand updates or news","Feedback within 24hrs on drafts"],
    we: ["Full monthly content calendar","Reels, statics, carousels — per agreed cadence","Captions, hashtags, and posting schedule","Community management (if in scope)"],
    what: "Content is produced, reviewed, approved, and published on schedule — every month. You get a monthly content calendar by the 25th of the prior month. Drafts are shared 5 days before posting. Revisions are handled within 24 hours. Everything is logged, nothing is forgotten. This is the engine running in the background while you run your business.",
    deliverables: ["Monthly Content Calendar","Designed Assets","Published Posts","Weekly Check-in"],
  },
  {
    id: 6, num: "06", timing: "End of each month", title: "Review & Optimise",
    tagline: "We don’t set and forget. Every month ends with a look at what’s working — and what we’re changing.",
    you: ["Business context: sales, launches, shifts","Honest feedback on content direction","Priorities for the next month"],
    we: ["Monthly performance report (reach, engagement, growth)","Top-performing content breakdown","Strategic recommendations for next month","Updated content calendar and direction"],
    what: "At the end of every month, we sit down (virtually or in person) and review performance against goals. We analyse what landed, what didn’t, and why — then update the strategy for the next cycle. This is how brands compound. Not by posting more, but by getting smarter with every iteration.",
    deliverables: ["Monthly Performance Report","Content Insights","Strategy Update","Month-Ahead Plan"],
  },
];

export const metadata = {
  title: "Our Journey — Pen & Pixel",
  description: "Exactly how we work together, from first call to consistent execution and beyond. No ambiguity, no surprises.",
};

export default function Journey() {
  return (
    <>
      <section className="page-hero">
        <div className="outer">
          <div className="page-hero-bg">06</div>
          <div className="page-hero-inner">
            <div className="page-eyebrow fade-in">Client Onboarding &amp; Process</div>
            <h1 className="fade-in d1">What happens after<br />you <em>book a call.</em></h1>
            <p className="page-hero-sub fade-in d2">No ambiguity. No surprises. Here’s exactly how we work together — from first conversation to consistent execution and beyond.</p>
          </div>
        </div>
      </section>

      <JourneyProgress />

      <div className="journey-stages">
        <div className="outer">
          {STAGES.map((s, i) => (
            <div className="stage fade-in" data-stage-id={s.id} key={s.id}>
              <div className="stage-left">
                <div className="stage-num">{s.num}</div>
                <div className="stage-timing">{s.timing}</div>
                <h2 className="stage-title">{s.title}</h2>
                <p className="stage-tagline">{s.tagline}</p>
              </div>
              <div className="stage-right">
                <div className="stage-partnership">
                  <div className="partnership-col">
                    <div className="partnership-col-label">You Bring</div>
                    <ul className="partnership-list">{s.you.map((x) => (<li key={x}>{x}</li>))}</ul>
                  </div>
                  <div className="partnership-col">
                    <div className="partnership-col-label">We Bring</div>
                    <ul className="partnership-list">{s.we.map((x) => (<li key={x}>{x}</li>))}</ul>
                  </div>
                </div>
                <div className="stage-detail">
                  <h4>What Happens</h4>
                  <p>{s.what}</p>
                  <h4>Deliverables</h4>
                  <div className="stage-deliverables">
                    {s.deliverables.map((d) => (<span className="deliverable-tag" key={d}>{d}</span>))}
                  </div>
                </div>
              </div>
              {i < STAGES.length - 1 && <div className="stage-connector" />}
            </div>
          ))}
        </div>
      </div>

      <section className="journey-cta">
        <div className="outer">
          <h2 className="fade-in">Ready to start<br /><em>your journey?</em></h2>
          <p className="fade-in d1">Book a discovery call. Stage 1 starts within 48 hours.</p>
          <div className="journey-cta-btns fade-in d2">
            <Link href="/contact" className="btn-primary-inv">Book a Call</Link>
            <Link href="/blog" className="btn-ghost" style={{ color: "rgba(247,248,249,.55)", borderColor: "rgba(247,248,249,.2)" }}>Read the Journal</Link>
          </div>
        </div>
      </section>
    </>
  );
}
