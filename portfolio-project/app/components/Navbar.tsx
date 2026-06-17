"use client";

import { useState, useEffect } from "react";

const NAV_LINKS = [
  { label: "Home",     href: "#home" },
  { label: "Services", href: "#services" },
  { label: "Resume",   href: "#resume" },
  { label: "Work",     href: "#work" },
  { label: "Contact",  href: "#contact" },
];

export default function Navbar() {
  const [active, setActive]     = useState("Home");
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen]         = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  return (
    <>
      <style>{`
        .nb {
          position: fixed;
          top: 0; left: 0; right: 0;
          z-index: 100;
          transition: background 0.3s, border-color 0.3s;
        }
        .nb.stuck {
          background: rgba(20,20,20,0.90);
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
          border-bottom: 1px solid rgba(0,255,136,0.08);
        }
        .nb-inner {
          max-width: 1280px;
          margin: 0 auto;
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 1.4rem 3rem;
        }
        .nb-logo {
          font-family: 'Outfit', sans-serif;
          font-weight: 800;
          font-size: 1.6rem;
          color: #ffffff;
          letter-spacing: -0.02em;
          display: flex;
          align-items: baseline;
          gap: 2px;
          text-decoration: none;
        }
        .nb-logo-dot {
          width: 10px;
          height: 10px;
          border-radius: 50%;
          background: #00ff88;
          display: inline-block;
          margin-left: 3px;
          margin-bottom: 3px;
          box-shadow: 0 0 14px rgba(0,255,136,0.7);
        }
        .nb-links {
          display: flex;
          align-items: center;
          gap: 0.2rem;
          list-style: none;
          margin: 0;
          padding: 0;
        }
        .nb-links a {
          font-family: 'Outfit', sans-serif;
          font-size: 0.9rem;
          font-weight: 500;
          color: rgba(255,255,255,0.55);
          padding: 0.45rem 1rem;
          border-radius: 8px;
          transition: color 0.2s;
          text-decoration: none;
          position: relative;
        }
        .nb-links a:hover { color: #ffffff; }
        .nb-links a.active { color: #00ff88; }
        .nb-links a.active::after {
          content: '';
          position: absolute;
          bottom: 0px; left: 50%;
          transform: translateX(-50%);
          width: 20px; height: 2px;
          background: #00ff88;
          border-radius: 2px;
        }
        .nb-cta {
          font-family: 'Outfit', sans-serif;
          font-size: 0.9rem; font-weight: 600;
          color: #00ff88;
          padding: 0.55rem 1.5rem;
          border-radius: 100px;
          border: 2px solid #00ff88;
          background: transparent;
          cursor: pointer;
          transition: background 0.2s, color 0.2s, box-shadow 0.2s, transform 0.2s;
          text-decoration: none;
          white-space: nowrap;
        }
        .nb-cta:hover {
          background: #00ff88; color: #141414;
          box-shadow: 0 0 28px rgba(0,255,136,0.4);
          transform: translateY(-1px);
        }
        .nb-hamburger {
          display: none; flex-direction: column; gap: 5px;
          background: none; border: none; cursor: pointer; padding: 6px;
        }
        .nb-hamburger span {
          display: block; width: 22px; height: 2px;
          background: #ffffff; border-radius: 2px;
          transition: transform 0.3s, opacity 0.2s;
          transform-origin: center;
        }
        .nb-hamburger.open span:nth-child(1) { transform: translateY(7px) rotate(45deg); }
        .nb-hamburger.open span:nth-child(2) { opacity: 0; }
        .nb-hamburger.open span:nth-child(3) { transform: translateY(-7px) rotate(-45deg); }
        .nb-mobile {
          position: fixed; inset: 0; z-index: 99;
          background: #141414;
          display: flex; flex-direction: column;
          align-items: center; justify-content: center; gap: 0.5rem;
          opacity: 0; pointer-events: none; transition: opacity 0.3s;
        }
        .nb-mobile.open { opacity: 1; pointer-events: all; }
        .nb-mobile a {
          font-family: 'Outfit', sans-serif;
          font-size: 2.8rem; font-weight: 700;
          color: rgba(255,255,255,0.25);
          letter-spacing: -0.04em;
          transition: color 0.2s, transform 0.2s;
          text-decoration: none;
        }
        .nb-mobile a:hover, .nb-mobile a.active { color: #00ff88; transform: translateX(10px); }
        .nb-mobile-cta {
          margin-top: 2rem;
          font-size: 1rem !important;
          color: #00ff88 !important;
          border: 2px solid #00ff88;
          padding: 0.75rem 2.5rem;
          border-radius: 100px;
          transform: none !important;
        }
        @media (max-width: 768px) {
          .nb-links, .nb-cta { display: none; }
          .nb-hamburger { display: flex; }
          .nb-inner { padding: 1.2rem 1.5rem; }
        }
      `}</style>

      <div className={`nb-mobile ${open ? "open" : ""}`}>
        {NAV_LINKS.map((link) => (
          <a key={link.label} href={link.href}
            className={active === link.label ? "active" : ""}
            onClick={() => { setActive(link.label); setOpen(false); }}>
            {link.label}
          </a>
        ))}
        <a href="#contact" className="nb-mobile-cta"
          onClick={() => { setActive("Contact"); setOpen(false); }}>
          Hire me
        </a>
      </div>

      <nav className={`nb ${scrolled ? "stuck" : ""}`}>
        <div className="nb-inner">
          <a href="#home" className="nb-logo" onClick={() => setActive("Home")}>
            Anjana<span className="nb-logo-dot" />
          </a>

          <ul className="nb-links">
            {NAV_LINKS.map((link) => (
              <li key={link.label}>
                <a href={link.href}
                  className={active === link.label ? "active" : ""}
                  onClick={() => setActive(link.label)}>
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
            <a href="#contact" className="nb-cta" onClick={() => setActive("Contact")}>
              Hire me
            </a>
            <button className={`nb-hamburger ${open ? "open" : ""}`}
              onClick={() => setOpen(!open)} aria-label="Toggle menu">
              <span /><span /><span />
            </button>
          </div>
        </div>
      </nav>
    </>
  );
}
