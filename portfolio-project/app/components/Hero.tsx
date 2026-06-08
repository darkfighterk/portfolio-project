"use client";

import { useEffect, useRef, useState } from "react";

const ROLES = ["Software Developer", "Full Stack Engineer", "UI/UX Enthusiast", "Open Source Contributor"];

const STATS = [
  { num: 12, label: "Years of\nexperience" },
  { num: 26, label: "Projects\ncompleted" },
  { num: 8,  label: "Technologies\nmastered" },
  { num: 500, label: "Code\ncommits" },
];

function useCountUp(target: number, duration = 1800) {
  const [val, setVal] = useState(0);
  const [started, setStarted] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting && !started) setStarted(true); }, { threshold: 0.5 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, [started]);

  useEffect(() => {
    if (!started) return;
    const start = performance.now();
    const raf = (now: number) => {
      const p = Math.min((now - start) / duration, 1);
      const ease = 1 - Math.pow(1 - p, 3);
      setVal(Math.round(ease * target));
      if (p < 1) requestAnimationFrame(raf);
    };
    requestAnimationFrame(raf);
  }, [started, target, duration]);

  return { val, ref };
}

function StatItem({ num, label }: { num: number; label: string }) {
  const { val, ref } = useCountUp(num);
  return (
    <div ref={ref} className="stat-item">
      <div className="stat-num">{val}{num === 500 ? "" : ""}</div>
      <div className="stat-label">{label}</div>
    </div>
  );
}

export default function Hero() {
  const [roleIdx, setRoleIdx] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [deleting, setDeleting] = useState(false);
  const [cursor, setCursor] = useState(true);

  // Typewriter
  useEffect(() => {
    const target = ROLES[roleIdx];
    let t: ReturnType<typeof setTimeout>;
    if (!deleting) {
      if (displayed.length < target.length) {
        t = setTimeout(() => setDisplayed(target.slice(0, displayed.length + 1)), 75);
      } else {
        t = setTimeout(() => setDeleting(true), 2500);
      }
    } else {
      if (displayed.length > 0) {
        t = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 40);
      } else {
        setDeleting(false);
        setRoleIdx((i) => (i + 1) % ROLES.length);
      }
    }
    return () => clearTimeout(t);
  }, [displayed, deleting, roleIdx]);

  useEffect(() => {
    const t = setInterval(() => setCursor((c) => !c), 520);
    return () => clearInterval(t);
  }, []);

  return (
    <>
      <style>{`
        .hero {
          min-height: 100svh;
          display: flex; flex-direction: column; justify-content: center;
          padding: 7rem 3rem 4rem;
          max-width: 1280px; margin: 0 auto;
          position: relative;
        }
        .hero-main {
          display: flex; align-items: center; justify-content: space-between;
          gap: 4rem; flex: 1;
        }

        /* ── LEFT ── */
        .hero-left { flex: 1; max-width: 520px; }

        .hero-role {
          font-family: 'Space Mono', monospace;
          font-size: 0.88rem; color: rgba(255,255,255,0.55);
          letter-spacing: 0.04em; margin-bottom: 1.2rem;
          animation: fadeUp 0.5s 0.1s ease both;
        }

        .hero-h1 {
          font-family: 'Outfit', sans-serif;
          font-weight: 800;
          font-size: clamp(3rem, 5.5vw, 4.8rem);
          line-height: 1.0; letter-spacing: -0.03em;
          color: #fff; margin-bottom: 0.15rem;
          animation: fadeUp 0.5s 0.18s ease both;
        }

        .hero-name {
          font-family: 'Space Mono', monospace;
          font-size: clamp(2.4rem, 5vw, 4.2rem);
          font-weight: 700; color: #00ff88;
          line-height: 1.05; letter-spacing: -0.02em;
          margin-bottom: 1.8rem;
          text-shadow: 0 0 40px rgba(0,255,136,0.3);
          animation: fadeUp 0.5s 0.25s ease both;
        }

        .hero-typewriter {
          font-family: 'Space Mono', monospace;
          font-size: 0.82rem; color: rgba(255,255,255,0.5);
          margin-bottom: 0.6rem; min-height: 1.4rem;
          animation: fadeUp 0.5s 0.3s ease both;
        }
        .tw-text { color: #00ff88; }
        .tw-cur {
          display: inline-block; width: 2px; height: 0.9em;
          background: #00ff88; vertical-align: text-bottom;
          border-radius: 1px; margin-left: 1px;
        }

        .hero-desc {
          font-family: 'Outfit', sans-serif;
          font-size: 0.95rem; font-weight: 300;
          color: rgba(255,255,255,0.55); line-height: 1.8;
          max-width: 420px; margin-bottom: 2.5rem;
          animation: fadeUp 0.5s 0.35s ease both;
        }

        /* Buttons + Socials row */
        .hero-actions {
          display: flex; align-items: center; gap: 1.2rem; flex-wrap: wrap;
          animation: fadeUp 0.5s 0.4s ease both;
        }
        .btn-cv {
          display: inline-flex; align-items: center; gap: 0.55rem;
          font-family: 'Space Mono', monospace;
          font-size: 0.75rem; font-weight: 700; letter-spacing: 0.06em;
          text-transform: uppercase; color: #00ff88;
          padding: 0.75rem 1.6rem; border-radius: 100px;
          border: 2px solid #00ff88; background: transparent;
          transition: background 0.2s, color 0.2s, box-shadow 0.2s, transform 0.2s;
          cursor: pointer;
        }
        .btn-cv:hover {
          background: #00ff88; color: #141414;
          box-shadow: 0 0 30px rgba(0,255,136,0.4);
          transform: translateY(-2px);
        }
        .socials { display: flex; gap: 0.6rem; }
        .soc {
          width: 38px; height: 38px; border-radius: 50%;
          border: 1px solid rgba(255,255,255,0.15);
          display: flex; align-items: center; justify-content: center;
          color: rgba(255,255,255,0.50);
          transition: border-color 0.2s, color 0.2s, background 0.2s, transform 0.2s;
          background: rgba(255,255,255,0.03);
        }
        .soc:hover {
          border-color: #00ff88; color: #00ff88;
          background: rgba(0,255,136,0.08);
          transform: translateY(-2px);
        }

        /* ── RIGHT — Avatar ── */
        .hero-right {
          flex-shrink: 0;
          position: relative; width: 360px; height: 360px;
          display: flex; align-items: center; justify-content: center;
          animation: fadeIn 0.7s 0.3s ease both;
        }

        /* Dashed rotating circles */
        .circle-wrap {
          position: absolute; inset: 0;
          display: flex; align-items: center; justify-content: center;
        }
        .circle {
          position: absolute; border-radius: 50%;
          border: 2px dashed #00ff88;
          opacity: 0.7;
        }
        .circle-1 {
          width: 320px; height: 320px;
          animation: spinCW 18s linear infinite;
          border-color: #00ff88;
        }
        .circle-2 {
          width: 280px; height: 280px;
          animation: spinCCW 14s linear infinite;
          border-color: rgba(0,255,136,0.45);
          border-style: dashed;
        }
        /* Gaps in the circles — achieved via conic mask */
        .circle-1 { border-top-color: transparent; border-left-color: transparent; }
        .circle-2 { border-bottom-color: transparent; border-right-color: transparent; }

        /* Glow ring */
        .circle-glow {
          position: absolute; width: 260px; height: 260px; border-radius: 50%;
          background: radial-gradient(circle, rgba(0,255,136,0.06) 0%, transparent 70%);
          box-shadow: 0 0 60px rgba(0,255,136,0.15);
        }

        /* Avatar photo placeholder */
        .avatar {
          position: relative; z-index: 2;
          width: 230px; height: 230px; border-radius: 50%;
          overflow: hidden;
          border: 3px solid rgba(0,255,136,0.3);
          box-shadow: 0 0 40px rgba(0,255,136,0.2), inset 0 0 40px rgba(0,0,0,0.5);
          background: #1a1a1a;
        }
        /* Replace the below with <Image src="/avatar.jpg" fill ... /> */
        .avatar-placeholder {
          width: 100%; height: 100%;
          background: linear-gradient(160deg, #1e2a1e 0%, #0d1a0d 100%);
          display: flex; align-items: flex-end; justify-content: center;
          overflow: hidden;
        }
        .avatar-silhouette {
          width: 160px; height: 200px;
          background: linear-gradient(to bottom, #2a2a2a, #1a1a1a);
          border-radius: 80px 80px 0 0;
          position: relative; bottom: -10px;
        }
        .avatar-head {
          width: 90px; height: 90px; border-radius: 50%;
          background: #2e2e2e;
          position: absolute; top: 10px; left: 50%; transform: translateX(-50%);
        }

        /* ── STATS ── */
        .hero-stats {
          display: flex; align-items: flex-start; gap: 3.5rem;
          padding-top: 3rem; flex-wrap: wrap;
          border-top: 1px solid rgba(255,255,255,0.07);
          margin-top: 2rem;
          animation: fadeUp 0.5s 0.5s ease both;
        }
        .stat-item { display: flex; align-items: baseline; gap: 0.8rem; }
        .stat-num {
          font-family: 'Outfit', sans-serif;
          font-size: clamp(2.5rem, 5vw, 3.8rem);
          font-weight: 800; letter-spacing: -0.05em;
          color: #fff; line-height: 1;
        }
        .stat-label {
          font-family: 'Outfit', sans-serif;
          font-size: 0.8rem; font-weight: 400;
          color: rgba(255,255,255,0.45); line-height: 1.4;
          white-space: pre-line;
        }

        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(20px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
        @keyframes spinCW  { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
        @keyframes spinCCW { from { transform: rotate(0deg); } to { transform: rotate(-360deg); } }

        @media (max-width: 900px) {
          .hero { padding: 6rem 1.5rem 3rem; }
          .hero-main { flex-direction: column-reverse; align-items: center; gap: 3rem; }
          .hero-left { max-width: 100%; text-align: center; }
          .hero-desc { margin-left: auto; margin-right: auto; }
          .hero-actions { justify-content: center; }
          .hero-right { width: 280px; height: 280px; }
          .circle-1 { width: 260px; height: 260px; }
          .circle-2 { width: 224px; height: 224px; }
          .avatar { width: 190px; height: 190px; }
          .hero-stats { justify-content: center; gap: 2rem; }
        }
      `}</style>

      <section id="home">
        <div className="hero">
          <div className="hero-main">
            {/* LEFT */}
            <div className="hero-left">
              <p className="hero-role">Software Developer</p>
              <h1 className="hero-h1">Hello I&apos;m</h1>
              <div className="hero-name">Luke Coleman</div>

              <p className="hero-typewriter">
                &gt; <span className="tw-text">{displayed}</span>
                <span className="tw-cur" style={{ opacity: cursor ? 1 : 0 }} />
              </p>

              <p className="hero-desc">
                I excel at crafting elegant digital experiences and
                I am proficient in various programming languages and technologies.
              </p>

              <div className="hero-actions">
                <a href="/resume.pdf" className="btn-cv" download>
                  Download CV
                  <svg width="14" height="14" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>
                </a>
                <div className="socials">
                  {[
                    { title: "GitHub", icon: <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.44 9.8 8.2 11.39.6.11.82-.26.82-.58v-2.03c-3.34.73-4.04-1.61-4.04-1.61-.54-1.38-1.33-1.75-1.33-1.75-1.09-.74.08-.73.08-.73 1.2.08 1.84 1.24 1.84 1.24 1.07 1.83 2.8 1.3 3.49 1 .11-.78.42-1.3.76-1.6-2.67-.3-5.47-1.33-5.47-5.93 0-1.31.47-2.38 1.24-3.22-.13-.3-.54-1.52.12-3.18 0 0 1.01-.32 3.3 1.23a11.5 11.5 0 013-.4c1.02.005 2.04.14 3 .4 2.28-1.55 3.29-1.23 3.29-1.23.66 1.66.25 2.88.12 3.18.77.84 1.24 1.91 1.24 3.22 0 4.61-2.81 5.63-5.48 5.92.43.37.81 1.1.81 2.22v3.29c0 .32.22.7.83.58C20.57 21.8 24 17.3 24 12c0-6.63-5.37-12-12-12z"/></svg>, href: "https://github.com" },
                    { title: "LinkedIn", icon: <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"/><circle cx="4" cy="4" r="2"/></svg>, href: "https://linkedin.com" },
                    { title: "YouTube", icon: <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M22.54 6.42a2.78 2.78 0 00-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46a2.78 2.78 0 00-1.95 1.96A29 29 0 001 12a29 29 0 00.46 5.58A2.78 2.78 0 003.41 19.6C5.12 20 12 20 12 20s6.88 0 8.59-.4a2.78 2.78 0 001.95-1.95A29 29 0 0023 12a29 29 0 00-.46-5.58z"/><polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" fill="#141414"/></svg>, href: "https://youtube.com" },
                    { title: "Twitter", icon: <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"/></svg>, href: "https://twitter.com" },
                  ].map((s) => (
                    <a key={s.title} href={s.href} className="soc" title={s.title} target="_blank" rel="noopener noreferrer">
                      {s.icon}
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* RIGHT — Avatar */}
            <div className="hero-right">
              <div className="circle-wrap">
                <div className="circle-glow" />
                <div className="circle circle-1" />
                <div className="circle circle-2" />
              </div>
              <div className="avatar">
                {/* Replace with: <Image src="/avatar.jpg" alt="Luke Coleman" fill style={{objectFit:'cover'}} /> */}
                <div className="avatar-placeholder">
                  <div className="avatar-silhouette">
                    <div className="avatar-head" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* STATS */}
          <div className="hero-stats">
            {STATS.map((s) => (
              <StatItem key={s.label} num={s.num} label={s.label} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
