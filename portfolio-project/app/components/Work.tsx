"use client";

import { useState } from "react";

const CATS = ["All", "Web App", "Mobile", "Design"];

const WORKS = [
  { num: "01", title: "E-Commerce Platform", cat: "Web App", year: "2024", tech: ["Next.js","Stripe","PostgreSQL"], desc: "Full-stack shopping platform with real-time inventory and payments.", accent: "#00ff88" },
  { num: "02", title: "Fitness Tracker App", cat: "Mobile",  year: "2024", tech: ["React Native","Firebase"],    desc: "Cross-platform mobile app with workout logging and progress charts.", accent: "#00e5ff" },
  { num: "03", title: "SaaS Dashboard",      cat: "Web App", year: "2023", tech: ["React","Node.js","Redis"],    desc: "Analytics dashboard with real-time data and role-based access.", accent: "#00ff88" },
  { num: "04", title: "Brand Design System", cat: "Design",  year: "2023", tech: ["Figma","Storybook"],          desc: "60+ accessible components with tokens and developer handoff.", accent: "#ff6b6b" },
  { num: "05", title: "Portfolio Template",  cat: "Web App", year: "2023", tech: ["Next.js","MDX","Framer"],     desc: "Open-source portfolio starter — 300+ GitHub stars.", accent: "#00ff88" },
  { num: "06", title: "REST API Service",    cat: "Web App", year: "2022", tech: ["Node.js","Docker","Redis"],   desc: "Scalable API with JWT auth, caching, and Swagger docs.", accent: "#a8ff78" },
];

export default function Work() {
  const [cat, setCat] = useState("All");
  const shown = cat === "All" ? WORKS : WORKS.filter((w) => w.cat === cat);

  return (
    <>
      <style>{`
        .work { padding: 7rem 3rem; background: #111111; }
        .work-inner { max-width: 1280px; margin: 0 auto; }
        .work-top {
          display: flex; justify-content: space-between; align-items: flex-end;
          flex-wrap: wrap; gap: 1.5rem; margin-bottom: 3.5rem;
        }
        .work-filters { display: flex; gap: 0.4rem; flex-wrap: wrap; }
        .wf {
          font-family: 'Space Mono', monospace;
          font-size: 0.72rem; font-weight: 700; letter-spacing: 0.06em; text-transform: uppercase;
          color: rgba(255,255,255,0.40); padding: 0.45rem 1rem; border-radius: 8px;
          border: 1px solid rgba(255,255,255,0.08); background: transparent;
          cursor: pointer; transition: all 0.2s;
        }
        .wf:hover { color: #fff; border-color: rgba(255,255,255,0.18); }
        .wf.on { color: #00ff88; border-color: #00ff88; background: rgba(0,255,136,0.07); }

        .work-grid { display: grid; grid-template-columns: repeat(3,1fr); gap: 1.5rem; }
        .wcard {
          background: #1a1a1a; border: 1px solid rgba(255,255,255,0.07);
          border-radius: 16px; padding: 2rem;
          display: flex; flex-direction: column; gap: 1rem;
          transition: border-color 0.25s, transform 0.25s, box-shadow 0.25s;
          position: relative; overflow: hidden; cursor: pointer;
        }
        .wcard::before {
          content: ''; position: absolute; top: 0; left: 0; right: 0;
          height: 2px; background: var(--wc); opacity: 0; transition: opacity 0.25s;
        }
        .wcard:hover {
          border-color: rgba(0,255,136,0.2);
          transform: translateY(-5px);
          box-shadow: 0 20px 50px rgba(0,0,0,0.4), 0 0 30px rgba(0,255,136,0.05);
        }
        .wcard:hover::before { opacity: 1; }

        .wcard-top { display: flex; justify-content: space-between; align-items: flex-start; }
        .wcard-num {
          font-family: 'Space Mono', monospace;
          font-size: 0.68rem; color: rgba(0,255,136,0.35); letter-spacing: 0.1em; font-weight: 700;
        }
        .wcard-links { display: flex; gap: 0.4rem; }
        .wl {
          width: 28px; height: 28px; border-radius: 8px;
          border: 1px solid rgba(255,255,255,0.10); background: rgba(255,255,255,0.03);
          display: flex; align-items: center; justify-content: center;
          color: rgba(255,255,255,0.35); transition: all 0.2s;
        }
        .wl:hover { color: #00ff88; border-color: rgba(0,255,136,0.4); background: rgba(0,255,136,0.06); }
        .wcard-title {
          font-family: 'Outfit', sans-serif;
          font-size: 1.15rem; font-weight: 700; color: #fff; letter-spacing: -0.03em; line-height: 1.2;
        }
        .wcard-desc {
          font-family: 'Outfit', sans-serif;
          font-size: 0.85rem; font-weight: 300; color: rgba(255,255,255,0.45); line-height: 1.75; flex: 1;
        }
        .wcard-tech { display: flex; flex-wrap: wrap; gap: 0.4rem; }
        .wtag {
          font-family: 'Space Mono', monospace;
          font-size: 0.65rem; font-weight: 700; letter-spacing: 0.04em;
          color: rgba(0,255,136,0.55); padding: 0.2rem 0.65rem; border-radius: 6px;
          border: 1px solid rgba(0,255,136,0.15); background: rgba(0,255,136,0.04);
        }
        .wcard-foot {
          display: flex; justify-content: space-between; align-items: center;
          padding-top: 1rem; border-top: 1px solid rgba(255,255,255,0.06);
          font-family: 'Space Mono', monospace; font-size: 0.68rem;
          color: rgba(255,255,255,0.25); letter-spacing: 0.04em;
        }

        @media (max-width: 900px) { .work-grid { grid-template-columns: repeat(2,1fr); } }
        @media (max-width: 600px) { .work-grid { grid-template-columns: 1fr; } .work { padding: 5rem 1.5rem; } .work-top { flex-direction: column; } }
      `}</style>

      <section className="work" id="work">
        <div className="work-inner">
          <div className="work-top">
            <div>
              <div className="sec-tag">Portfolio</div>
              <h2 className="sec-h2">My <span>Work</span></h2>
            </div>
            <div className="work-filters">
              {CATS.map((c) => (
                <button key={c} className={`wf ${cat === c ? "on" : ""}`} onClick={() => setCat(c)}>{c}</button>
              ))}
            </div>
          </div>
          <div className="work-grid">
            {shown.map((w) => (
              <div className="wcard" key={w.num}
                style={{ "--wc": w.accent } as React.CSSProperties}>
                <div className="wcard-top">
                  <span className="wcard-num">{w.num}</span>
                  <div className="wcard-links">
                    <a href="#" className="wl" title="GitHub">
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.44 9.8 8.2 11.39.6.11.82-.26.82-.58v-2.03c-3.34.73-4.04-1.61-4.04-1.61-.54-1.38-1.33-1.75-1.33-1.75-1.09-.74.08-.73.08-.73 1.2.08 1.84 1.24 1.84 1.24 1.07 1.83 2.8 1.3 3.49 1 .11-.78.42-1.3.76-1.6-2.67-.3-5.47-1.33-5.47-5.93 0-1.31.47-2.38 1.24-3.22-.13-.3-.54-1.52.12-3.18 0 0 1.01-.32 3.3 1.23a11.5 11.5 0 013-.4c1.02.005 2.04.14 3 .4 2.28-1.55 3.29-1.23 3.29-1.23.66 1.66.25 2.88.12 3.18.77.84 1.24 1.91 1.24 3.22 0 4.61-2.81 5.63-5.48 5.92.43.37.81 1.1.81 2.22v3.29c0 .32.22.7.83.58C20.57 21.8 24 17.3 24 12c0-6.63-5.37-12-12-12z"/></svg>
                    </a>
                    <a href="#" className="wl" title="Live">
                      <svg width="12" height="12" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
                    </a>
                  </div>
                </div>
                <h3 className="wcard-title">{w.title}</h3>
                <p className="wcard-desc">{w.desc}</p>
                <div className="wcard-tech">{w.tech.map((t) => <span key={t} className="wtag">{t}</span>)}</div>
                <div className="wcard-foot">
                  <span>{w.cat}</span><span>{w.year}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <style>{`
        .sec-tag { font-family: 'Space Mono', monospace; font-size: 0.75rem; color: #00ff88; letter-spacing: 0.12em; text-transform: uppercase; margin-bottom: 0.8rem; display: flex; align-items: center; gap: 0.7rem; }
        .sec-tag::before { content: ''; width: 24px; height: 1px; background: #00ff88; display: block; }
        .sec-h2 { font-family: 'Outfit', sans-serif; font-size: clamp(2rem, 4vw, 3rem); font-weight: 800; letter-spacing: -0.04em; color: #fff; line-height: 1.1; }
        .sec-h2 span { color: #00ff88; text-shadow: 0 0 30px rgba(0,255,136,0.3); }
      `}</style>
    </>
  );
}
