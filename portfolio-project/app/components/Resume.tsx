"use client";

const EXP = [
  {
    year: "Present",
    role: "Aspiring Software Engineer",
    company: "Seeking Internship Opportunities",
    desc: "Actively seeking internship opportunities to apply software engineering skills, gain industry experience, and contribute to real-world projects."
  },
  {
    year: "2023 — Present",
    role: "Software Engineering Undergraduate",
    company: "NSBM Green University",
    desc: "Pursuing a B.Sc. in Software Engineering while developing full-stack web and mobile applications using modern technologies."
  },
  {
    year: "2021 — 2022",
    role: "Computer Technician",
    company: "Computer Repair & Sales Shop",
    desc: "Provided computer repair, hardware troubleshooting, software installation, system maintenance, and technical support services."
  }
];
  


const EDU = [
  { year: "2023 — 2027", degree: "B.Sc. Software Engineer",    school: " NSBM Green University",   desc: "Pursuing a Bachelor's degree in Software Engineering with a focus on full-stack development, software design, database systems, algorithms, and modern web technologies." },
  { year: "2022",        degree: "computer hardware and networking",    school: "VTC Dehiwala", desc: "Gained practical experience in computer hardware maintenance, networking, troubleshooting, and technical support." },
];

const SKILLS = [
  { name: "Java",               pct: 85 },
  { name: "JavaScript",         pct: 85 },
  { name: "React.js",           pct: 80 },
  { name: "Next.js",            pct: 75 },
  { name: "PHP / Laravel",      pct: 80 },
  { name: "Flutter",            pct: 75 },
  { name: "MySQL",              pct: 85 },
  { name: "Oracle SQL / PLSQL", pct: 80 },
  { name: "Node.js",            pct: 70 },
  { name: "Git & GitHub",       pct: 85 },
  { name: "HTML / CSS",         pct: 90 },
  { name: "REST APIs",          pct: 75 },
];

export default function Resume() {
  return (
    <>
      <style>{`
        .resume { padding: 7rem 3rem; background: #141414; }
        .resume-inner { max-width: 1280px; margin: 0 auto; }
        .resume-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 5rem; margin-top: 4rem; }

        /* Timeline */
        .tl-section { margin-bottom: 3rem; }
        .tl-label {
          font-family: 'Space Mono', monospace;
          font-size: 0.75rem; color: #00ff88; letter-spacing: 0.1em;
          text-transform: uppercase; margin-bottom: 2rem;
          display: flex; align-items: center; gap: 0.6rem;
        }
        .tl-label::after { content: ''; flex: 1; height: 1px; background: rgba(255,255,255,0.07); }
        .tl-item {
          display: grid; grid-template-columns: 110px 1fr; gap: 1.5rem;
          margin-bottom: 2.2rem; position: relative;
        }
        .tl-item::before {
          content: ''; position: absolute;
          left: 102px; top: 6px; bottom: -2.2rem;
          width: 1px; background: rgba(255,255,255,0.06);
        }
        .tl-item:last-child::before { display: none; }
        .tl-year {
          font-family: 'Space Mono', monospace;
          font-size: 0.7rem; color: rgba(255,255,255,0.30);
          letter-spacing: 0.04em; line-height: 1.6; padding-top: 2px;
        }
        .tl-dot {
          position: absolute; left: 97px; top: 6px;
          width: 11px; height: 11px; border-radius: 50%;
          border: 2px solid #00ff88; background: #141414;
          box-shadow: 0 0 10px rgba(0,255,136,0.5);
        }
        .tl-role {
          font-family: 'Outfit', sans-serif;
          font-size: 1rem; font-weight: 700; color: #fff;
          letter-spacing: -0.02em; margin-bottom: 0.2rem;
        }
        .tl-co {
          font-family: 'Space Mono', monospace;
          font-size: 0.72rem; color: #00ff88; margin-bottom: 0.6rem; letter-spacing: 0.03em;
        }
        .tl-desc {
          font-family: 'Outfit', sans-serif;
          font-size: 0.85rem; font-weight: 300;
          color: rgba(255,255,255,0.45); line-height: 1.75;
        }

        /* Skills */
        .skills-list { display: flex; flex-direction: column; gap: 1.3rem; }
        .skill-row {}
        .skill-info { display: flex; justify-content: space-between; margin-bottom: 0.5rem; }
        .skill-name {
          font-family: 'Outfit', sans-serif;
          font-size: 0.88rem; font-weight: 500; color: rgba(255,255,255,0.75);
        }
        .skill-pct {
          font-family: 'Space Mono', monospace;
          font-size: 0.72rem; color: #00ff88; font-weight: 700;
        }
        .skill-track {
          height: 3px; background: rgba(255,255,255,0.06); border-radius: 2px; overflow: hidden;
        }
        .skill-fill {
          height: 100%; border-radius: 2px;
          background: linear-gradient(90deg, #00ff88, rgba(0,255,136,0.4));
          box-shadow: 0 0 10px rgba(0,255,136,0.4);
          transition: width 1.2s cubic-bezier(0.16,1,0.3,1);
        }

        @media (max-width: 900px) { .resume-grid { grid-template-columns: 1fr; gap: 3rem; } .resume { padding: 5rem 1.5rem; } }
      `}</style>

      <section className="resume" id="resume">
        <div className="resume-inner">
          <div className="sec-tag">My Background</div>
          <h2 className="sec-h2">Resume</h2>

          <div className="resume-grid">
            {/* Left — Experience + Education */}
            <div>
              <div className="tl-section">
                <div className="tl-label">Experience</div>
                {EXP.map((e) => (
                  <div className="tl-item" key={e.role}>
                    <div className="tl-year">{e.year}</div>
                    <div className="tl-dot" />
                    <div>
                      <div className="tl-role">{e.role}</div>
                      <div className="tl-co">{e.company}</div>
                      <p className="tl-desc">{e.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="tl-section">
                <div className="tl-label">Education</div>
                {EDU.map((e) => (
                  <div className="tl-item" key={e.degree}>
                    <div className="tl-year">{e.year}</div>
                    <div className="tl-dot" />
                    <div>
                      <div className="tl-role">{e.degree}</div>
                      <div className="tl-co">{e.school}</div>
                      <p className="tl-desc">{e.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right — Skills */}
            <div>
              <div className="tl-label">Technical Skills</div>
              <div className="skills-list">
                {SKILLS.map((s) => (
                  <div className="skill-row" key={s.name}>
                    <div className="skill-info">
                      <span className="skill-name">{s.name}</span>
                      <span className="skill-pct">{s.pct}%</span>
                    </div>
                    <div className="skill-track">
                      <div className="skill-fill" style={{ width: `${s.pct}%` }} />
                    </div>
                  </div>
                ))}
              </div>
            </div>
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
