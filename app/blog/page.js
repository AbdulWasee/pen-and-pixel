import Link from "next/link";

export const metadata = {
  title: "Blog — Pen & Pixel",
  description:
    "The Pen & Pixel Journal is launching soon — playbooks, teardowns, and behind-the-scenes on brand, social media, and growth for founders and marketers in Pakistan and beyond.",
};

const TOPICS = ["Social Strategy", "Branding", "Personal Branding", "SEO", "Behind the Scenes", "Web"];

export default function Blog() {
  return (
    <>
      <section className="page-hero">
        <div className="outer">
          <div className="page-hero-bg">JL</div>
          <div className="page-hero-inner">
            <div className="page-eyebrow fade-in">The Journal</div>
            <h1 className="fade-in d1">Ideas, playbooks &amp;<br /><em>behind the scenes.</em></h1>
            <p className="page-hero-sub fade-in d2">Strategy, brand, and social insights from the Pen &amp; Pixel team — no fluff, no recycled listicles.</p>
          </div>
        </div>
      </section>

      <section className="blog-soon">
        <div className="outer">
          <div className="blog-soon-inner fade-in">
            <div className="blog-soon-glyph">JL</div>
            <span className="blog-soon-badge">The Journal</span>
            <h2 className="blog-soon-title">Coming soon<span>.</span></h2>
            <p className="blog-soon-text">We’re writing the first pieces right now — practical playbooks and teardowns on brand, social media, and growth. Check back shortly, or get in touch and we’ll tell you the moment it’s live.</p>
            <div className="blog-soon-topics">
              {TOPICS.map((t) => (
                <span className="blog-soon-chip" key={t}>{t}</span>
              ))}
            </div>
            <div className="blog-soon-btns">
              <Link href="/contact" className="btn-primary-inv">Book a Call</Link>
              <Link href="/" className="btn-ghost-inv">Back to Home</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
