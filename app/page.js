import Link from "next/link";
import HeroOrb from "@/components/HeroOrb";
import SpotlightCard from "@/components/SpotlightCard";
import WorkDome from "@/components/WorkDome";
import ReelShowcase from "@/components/ReelShowcase";

const MARQUEE = [
  "Pen & Pixel", "Strategy First", "Brand Identity", "Content Systems",
  "Social Media", "Packaging Design", "Videography", "Web Design", "Execution at Scale",
];

const SERVICES = [
  { num: "01", icon: "📱", title: "Social Media Marketing", body: "Strategy, calendars, reels, carousels, captions — everything your brand needs to show up consistently and convert." },
  { num: "02", icon: "✦", title: "Branding & Identity", body: "Logo, color, type, voice. If your brand feels inconsistent, it’s not a content problem — it’s a brand problem." },
  { num: "03", icon: "📦", title: "Packaging Design", body: "Your packaging is your first impression — and often your only one. We make it count on the shelf and on the feed." },
  { num: "04", icon: "🎬", title: "Videography Production", body: "Concept to camera to edit. Brand reels, aesthetic shoots, narrative content, and trend-based formats that feel right." },
  { num: "05", icon: "🌐", title: "Web Design", body: "Your website shouldn’t just exist. It should convert. UI/UX, Shopify, landing pages — brand-aligned and built to perform." },
];

const APPROACH = [
  { num: "01", title: "Understand Your Brand", body: "Not just your product. We dig into your positioning, audience, and what you’re actually trying to build — before we touch a single asset.", arrow: true },
  { num: "02", title: "Build a Strategy", body: "Content system, growth levers, platform prioritization. A clear plan you’ll actually follow — not a 40-slide deck that collects dust.", arrow: true },
  { num: "03", title: "Execute Consistently", body: "Reels, statics, carousels, copy — shipped on time, every time. We run the content engine so you don’t have to think about it.", arrow: true },
  { num: "04", title: "Optimize & Scale", body: "Monthly performance reviews, creative testing, continuous iteration — because what worked last month might not work next month.", arrow: false },
];

const INDUSTRIES = ["Fashion","Textiles","Skincare & Beauty","Healthcare","Wellness","Food & Beverage","Retail & E-Commerce","FMCG","Events","Home & Lifestyle"];

const WHY = [
  { icon: "🧠", h: "Strategy-First Execution", p: "Every piece of content traces back to a business objective. We don’t post for the sake of posting." },
  { icon: "🎨", h: "Strong Aesthetic Sense", p: "Not Canva templates. Not stock-heavy layouts. Visuals that actually look like a brand — and hold up in a crowded feed." },
  { icon: "⚙️", h: "Consistent Output Systems", p: "We run on process. No missed deadlines, no ghosting, no scrambling for content ideas at 11pm." },
  { icon: "🔄", h: "End-to-End Handling", p: "Concept to delivery, in one place. No vendor juggling. No brief getting lost in translation." },
];

const PACKAGES = [
  { tier: "Starter", name: "Launch Ready", featured: false, desc: "For brands that need a clean foundation and a consistent presence. Ideal for startups and new labels getting online.", features: ["Brand identity essentials","Monthly content calendar","8 static posts/month","4 reels/month","Caption copywriting"] },
  { tier: "Growth", name: "Scale Up", featured: true, desc: "For established brands ready to go from sporadic to systematic. Full content engine, production included.", features: ["Everything in Starter","16 posts/month (mix of formats)","Monthly shoot day","Community management","Monthly performance review"] },
  { tier: "Partner", name: "Full Partnership", featured: false, desc: "For brands that want us as their full creative arm — strategy, production, identity, web, packaging. Everything.", features: ["Everything in Growth","Dedicated creative team","Web + packaging design","Campaign ideation & execution","Priority turnaround"] },
];

export default function Home() {
  return (
    <>
      {/* HERO */}
      <section className="hero">
        <HeroOrb />
        <div className="hero-bg-text">P&amp;P</div>
        <div className="hero-inner">
          <div className="hero-eyebrow fade-in">Creative Digital Agency · Karachi</div>
          <h1 className="fade-in d1">Turning <em>“we should<br />post more”</em><br />into results.</h1>
          <p className="hero-sub fade-in d2">We help brands show up better online — with strategy, content, and execution that actually moves the needle.</p>
          <div className="hero-ctas fade-in d3">
            <Link href="/#work" className="btn-primary">View Work</Link>
            <Link href="/contact" className="btn-ghost">Book a Call</Link>
          </div>
          <div className="hero-stats fade-in d4">
            <div className="hero-stat"><div className="hero-stat-num">40<span>+</span></div><div className="hero-stat-label">Brands Worked With</div></div>
            <div className="hero-stat"><div className="hero-stat-num">5<span>+</span></div><div className="hero-stat-label">Industries Served</div></div>
            <div className="hero-stat"><div className="hero-stat-num">3<span>×</span></div><div className="hero-stat-label">Avg Engagement Lift</div></div>
            <div className="hero-stat"><div className="hero-stat-num">360<span>°</span></div><div className="hero-stat-label">End-to-End Execution</div></div>
          </div>
        </div>
      </section>

      {/* MARQUEE */}
      <div className="marquee-strip">
        <div className="marquee-track">
          {[...MARQUEE, ...MARQUEE].map((m, i) => (
            <span className="marquee-item" key={i}>{m}<span className="marquee-dot" /></span>
          ))}
        </div>
      </div>

      {/* TRUST */}
      <section className="trust-strip fade-in">
        <div className="outer">
          <div className="trust-inner">
            <span className="trust-label">Trusted By</span>
            <div className="trust-divider" />
            <div className="trust-logos">
              <span className="trust-pill">Fashion Brand</span>
              <span className="trust-pill">Skincare Label</span>
              <span className="trust-pill">F&amp;B Chain</span>
              <span className="trust-pill">E-Commerce</span>
              <span className="trust-pill">Lifestyle Brand</span>
            </div>
            <blockquote className="trust-quote">“Finally, an agency that thinks before it posts.”</blockquote>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services">
        <div className="outer">
          <div className="services-intro fade-in">
            <div className="section-eyebrow">What We Do</div>
            <p>We don’t just create content. <strong>We build systems.</strong></p>
          </div>
          <div className="services-grid">
            {SERVICES.map((s, i) => (
              <SpotlightCard className={`service-card fade-in${i ? ` d${i}` : ""}`} key={s.num}>
                <div className="service-num">{s.num}</div>
                <span className="service-icon">{s.icon}</span>
                <h3>{s.title}</h3>
                <p>{s.body}</p>
                <Link href="/contact" className="service-link">Explore</Link>
              </SpotlightCard>
            ))}
          </div>
        </div>
      </section>

      {/* APPROACH */}
      <section className="approach" id="approach">
        <div className="outer">
          <div className="section-head fade-in">
            <div className="section-eyebrow">How We Work</div>
            <h2>Structure for brands<br />that feel scattered.</h2>
          </div>
          <div className="approach-grid">
            {APPROACH.map((a, i) => (
              <div className={`approach-step fade-in${i ? ` d${i}` : ""}`} key={a.num}>
                <div className="approach-num">{a.num}</div>
                {a.arrow && <span className="approach-arrow">→</span>}
                <h3>{a.title}</h3>
                <p>{a.body}</p>
              </div>
            ))}
          </div>
          <div className="approach-bottom fade-in">
            <p className="approach-tagline">We bring <em>structure</em> to brands<br />that feel scattered.</p>
            <Link href="/journey" className="btn-primary-inv">See Our Process</Link>
          </div>
        </div>
      </section>

      {/* INDUSTRIES */}
      <section>
        <div className="outer">
          <div className="section-head fade-in">
            <div className="section-eyebrow">Industries</div>
            <h2>We’ve worked across<br />the full brand spectrum.</h2>
          </div>
          <div className="industries-list fade-in">
            {INDUSTRIES.map((t) => (<span className="industry-tag" key={t}>{t}</span>))}
          </div>
        </div>
      </section>

      {/* WORK / PORTFOLIO */}
      <section id="work">
        <div className="outer">
          <div className="section-head fade-in">
            <div className="section-eyebrow">Featured Work</div>
            <h2>Brands we’ve helped<br />show up better.</h2>
          </div>
        </div>
        <div className="outer">
          <WorkDome />
        </div>
        <div className="outer">
          <div className="portfolio-cta-row fade-in">
            <span className="portfolio-cta-label">More on the way —</span>
            <Link href="/contact" className="btn-primary">Start a Project</Link>
          </div>
        </div>
      </section>

      {/* REELS / IN MOTION */}
      <ReelShowcase />

      {/* WHY US */}
      <section id="about">
        <div className="outer">
          <div className="section-head fade-in"><div className="section-eyebrow">Why Pen &amp; Pixel</div></div>
          <div className="why-grid">
            <div className="why-left fade-in">
              <h2>Not just another<br /><em>content agency.</em></h2>
              <p>Most agencies give you output. We give you a system. The difference? One creates dependency. The other builds a brand that actually compounds over time.<br /><br />We work with brands in Pakistan and beyond who are serious about what they’re building — not just what they’re posting.</p>
            </div>
            <div className="why-right fade-in d2">
              {WHY.map((w) => (
                <div className="why-item" key={w.h}>
                  <div className="why-item-icon">{w.icon}</div>
                  <div className="why-item-text"><h4>{w.h}</h4><p>{w.p}</p></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* PACKAGES */}
      <section className="packages">
        <div className="outer">
          <div className="section-head fade-in">
            <div className="section-eyebrow">Packages</div>
            <h2>Pick a starting point.<br />We’ll build from there.</h2>
          </div>
          <div className="packages-grid">
            {PACKAGES.map((p, i) => (
              <div className={`package-card${p.featured ? " featured" : ""} fade-in${i ? ` d${i}` : ""}`} key={p.tier}>
                <div className="package-tier">{p.tier}</div>
                <h3>{p.name}</h3>
                <p>{p.desc}</p>
                <ul className="package-features">
                  {p.features.map((f) => (<li key={f}>{f}</li>))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="final-cta" id="contact">
        <div className="outer">
          <h2 className="fade-in">Let’s build something<br />that <em>actually works.</em></h2>
          <p className="fade-in d1">Based in Karachi. Built for brands that mean business — wherever they are.</p>
          <div className="final-cta-btns fade-in d2">
            <Link href="/contact" className="btn-primary-inv">Book a Call</Link>
            <Link href="/blog" className="btn-ghost-inv">Read the Journal</Link>
          </div>
        </div>
      </section>
    </>
  );
}
