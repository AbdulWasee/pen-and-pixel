import ContactForm from "@/components/ContactForm";

export const metadata = {
  title: "Book a Call — Pen & Pixel",
  description: "Tell us about your brand. We reply to every serious brief within one business day. Based in Karachi, working with brands in Pakistan and beyond.",
};

export default function Contact() {
  return (
    <section className="contact-hero">
      <div className="outer">
        <div className="section-head fade-in">
          <div className="section-eyebrow">Get in Touch</div>
          <h2>Let’s build something<br />that actually works.</h2>
        </div>
        <div className="contact-grid">
          <div className="contact-left fade-in">
            <h2>Start with a<br /><em>discovery call.</em></h2>
            <p>Tell us where your brand is and where you want it to go. If we’re a fit, Stage 1 starts within 48 hours — no long sales cycle, no pressure.</p>
            <div className="contact-detail">
              <div className="contact-detail-row"><span className="contact-detail-k">Email</span><span className="contact-detail-v">hello@penandpixel.studio</span></div>
              <div className="contact-detail-row"><span className="contact-detail-k">Based</span><span className="contact-detail-v">Karachi, Pakistan</span></div>
              <div className="contact-detail-row"><span className="contact-detail-k">Working</span><span className="contact-detail-v">With brands in Pakistan &amp; internationally</span></div>
              <div className="contact-detail-row"><span className="contact-detail-k">Reply</span><span className="contact-detail-v">Within one business day</span></div>
            </div>
          </div>
          <div className="contact-right fade-in d1">
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
}
