"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

const LINKS = [
  { href: "/#services", label: "Services" },
  { href: "/#work", label: "Work" },
  { href: "/blog", label: "Blog", match: "/blog" },
  { href: "/journey", label: "Our Journey", match: "/journey" },
  { href: "/#about", label: "About" },
];

export default function Header() {
  const pathname = usePathname();

  return (
    <header>
      <nav>
        <Link href="/" className="logo">
          <Image
            src="/logo-mark.png"
            alt="Pen & Pixel"
            width={322}
            height={253}
            className="logo-img"
            priority
          />
          <span className="logo-dot" />
          Pen &amp; Pixel
        </Link>
        <ul className="nav-links">
          {LINKS.map((l) => (
            <li key={l.href}>
              <Link
                href={l.href}
                className={l.match && pathname === l.match ? "active-page" : undefined}
              >
                {l.label}
              </Link>
            </li>
          ))}
          <li>
            <Link href="/contact" className="nav-cta">
              Book a Call
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
