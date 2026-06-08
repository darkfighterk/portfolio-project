"use client";

const SERVICES = [
  {
    num: "01",
    icon: <svg width="28" height="28" fill="none" viewBox="0 0 24 24" stroke="#00ff88" strokeWidth={1.5}><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M9 9h6M9 12h6M9 15h4"/></svg>,
    title: "Web Development",
    desc: "Building fast, responsive, and accessible web applications using the latest technologies like React, Next.js, and TypeScript.",
  },
  {
    num: "02",
    icon: <svg width="28" height="28" fill="none" viewBox="0 0 24 24" stroke="#00ff88" strokeWidth={1.5}><rect x="5" y="2" width="14" height="20" rx="2"/><line x1="12" y1="18" x2="12.01" y2="18"/></svg>,
    title: "Mobile Development",
    desc: "Crafting cross-platform mobile experiences with React Native that feel native on both iOS and Android.",
  },
  {
    num: "03",
    icon: <svg width="28" height="28" fill="none" viewBox="0 0 24 24" stroke="#00ff88" strokeWidth={1.5}><circle cx="12" cy="12" r="10"/><path d="M2 12h20M12 2a15.3 15.3 0 010 20M12 2a15.3 15.3 0 000 20"/></svg>,
    title: "Backend & APIs",
    desc: "Designing and implementing scalable RESTful and GraphQL APIs with Node.js, Express, and PostgreSQL.",
  },
  {
    num: "04",
    icon: <svg width="28" height="28" fill="none" viewBox="0 0 24 24" stroke="#00ff88" strokeWidth={1.5}><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/></svg>,
    title: "UI/UX Design",
    desc: "Transforming ideas into pixel-perfect, intuitive interfaces with a focus on user experience and modern aesthetics.",
  },
];

export default function Services() {
  return (
    <>
      <style>{`
        .services {
          padding: 7rem 3rem;
          background: #111111;
          position: relative; overflow: hidden;
        }
        .services::before {
          content: '';
          position: absolute; top: -200px; right: -200px;
          width: 500px; height: 500px; border-radius: 50%;
          background: radial-gradient(circle, rgba(0,255,136,0.04) 0%, transparent 70%);
          pointer-events: none;
        }
        .sec-inner { max-width: 1280px; margin: 0 auto; }
        .sec-head { margin-bottom: 4rem; }
        .sec-tag {
          font-family: 'Space Mono', monospace;
          font-size: 0.75rem; color: #00ff88; letter-spacing: 0.12em;
          text-transform: uppercase; margin-bottom: 0.8rem;
          display: flex; align-items: center; gap: 0.7rem;
        }
        .sec-tag::before { content: ''; width: 24px; height: 1px; background: #00ff88; display: block; }
        .sec-h2 {
          font-family: 'Outfit', sans-serif;
          font-size: clamp(2rem, 4vw, 3rem); font-weight: 800;
          letter-spacing: -0.04em; color: #fff; line-height: 1.1;
        }
        .sec-h2 span {
          color: #00ff88;
          text-shadow: 0 0 30px rgba(0,255,136,0.3);
        }
        .svc-grid {
          display: grid; grid-template-columns: repeat(4,1fr); gap: 1.5rem;
        }
        .svc-card {
          background: #1a1a1a; border: 1px solid rgba(255,255,255,0.07);
          border-radius: 16px; padding: 2rem 1.8rem;
          transition: border-color 0.25s, transform 0.25s, box-shadow 0.25s;
          position: relative; overflow: hidden;
        }
        .svc-card::before {
          content: ''; position: absolute; top: 0; left: 0; right: 0;
          height: 2px; background: linear-gradient(90deg, #00ff88, transparent);
          opacity: 0; transition: opacity 0.25s;
        }
        .svc-card:hover {
          border-color: rgba(0,255,136,0.25);
          transform: translateY(-5px);
          box-shadow: 0 20px 50px rgba(0,0,0,0.4), 0 0 30px rgba(0,255,136,0.07);
        }
        .svc-card:hover::before { opacity: 1; }
        .svc-num {
          font-family: 'Space Mono', monospace;
          font-size: 0.7rem; color: rgba(0,255,136,0.4);
          letter-spacing: 0.1em; margin-bottom: 1.2rem; font-weight: 700;
        }
        .svc-icon { margin-bottom: 1.2rem; }
        .svc-title {
          font-family: 'Outfit', sans-serif;
          font-size: 1.1rem; font-weight: 700; color: #fff;
          letter-spacing: -0.02em; margin-bottom: 0.75rem;
        }
        .svc-desc {
          font-family: 'Outfit', sans-serif;
          font-size: 0.875rem; font-weight: 300;
          color: rgba(255,255,255,0.50); line-height: 1.75;
        }
        @media (max-width: 1100px) { .svc-grid { grid-template-columns: repeat(2,1fr); } }
        @media (max-width: 640px)  { .svc-grid { grid-template-columns: 1fr; } .services { padding: 5rem 1.5rem; } }
      `}</style>

      <section className="services" id="services">
        <div className="sec-inner">
          <div className="sec-head">
            <div className="sec-tag">What I Do</div>
            <h2 className="sec-h2">My <span>Services</span></h2>
          </div>
          <div className="svc-grid">
            {SERVICES.map((s) => (
              <div className="svc-card" key={s.num}>
                <div className="svc-num">{s.num}</div>
                <div className="svc-icon">{s.icon}</div>
                <h3 className="svc-title">{s.title}</h3>
                <p className="svc-desc">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
