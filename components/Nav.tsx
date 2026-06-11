"use client";

import { useEffect, useState } from "react";
import Logo from "./Logo";

const LINKS = [
  { label: "Product", href: "#product" },
  { label: "Customers", href: "#customers" },
  { label: "Careers", href: "#cta" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    let last = window.scrollY;
    const onScroll = () => {
      const y = window.scrollY;
      setScrolled(y > 12);
      setHidden(y > 420 && y > last && !open);
      last = y;
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [open]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
  }, [open]);

  const go = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
    else window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      <header className={`nav${scrolled ? " scrolled" : ""}${hidden ? " hidden" : ""}`}>
        <div className="container nav-inner">
          <a href="#top" onClick={(e) => go(e, "#top")} aria-label="Qualia home">
            <Logo />
          </a>

          <nav className="nav-links" aria-label="Primary">
            {LINKS.map((l) => (
              <a key={l.label} href={l.href} onClick={(e) => go(e, l.href)}>
                {l.label}
              </a>
            ))}
          </nav>

          <div className="nav-cta">
            <a className="nav-signin" href="#cta" onClick={(e) => go(e, "#cta")}>
              Sign in
            </a>
            <a className="btn btn-primary" href="#cta" onClick={(e) => go(e, "#cta")}>
              Get a demo
            </a>
            <button
              className={`nav-burger${open ? " open" : ""}`}
              aria-label="Menu"
              aria-expanded={open}
              onClick={() => setOpen((v) => !v)}
            >
              <span />
              <span />
              <span />
            </button>
          </div>
        </div>
      </header>

      <div className={`mobile-menu${open ? " open" : ""}`}>
        {LINKS.map((l) => (
          <a key={l.label} href={l.href} onClick={(e) => go(e, l.href)}>
            {l.label}
          </a>
        ))}
        <a href="#cta" onClick={(e) => go(e, "#cta")}>
          Sign in
        </a>
        <a className="btn btn-primary" href="#cta" onClick={(e) => go(e, "#cta")}>
          Get a demo
        </a>
      </div>
    </>
  );
}
