import Link from "next/link";

export default function Footer() {
  return (
    <footer>
      <div className="footer-left">
        <span className="footer-brand">Pen &amp; Pixel</span>
        <span className="footer-copy">&copy; 2026 &middot; Karachi, Pakistan</span>
      </div>
      <div className="footer-links">
        <Link href="/#services">Services</Link>
        <Link href="/#work">Work</Link>
        <Link href="/blog">Blog</Link>
        <Link href="/journey">Our Journey</Link>
        <Link href="/contact">Contact</Link>
      </div>
      <div className="footer-social">
        <a href="https://instagram.com" title="Instagram" target="_blank" rel="noreferrer">IG</a>
        <a href="https://linkedin.com" title="LinkedIn" target="_blank" rel="noreferrer">LI</a>
        <a href="https://behance.net" title="Behance" target="_blank" rel="noreferrer">BE</a>
      </div>
    </footer>
  );
}
