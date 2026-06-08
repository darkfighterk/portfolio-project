export default function Footer() {
  return (
    <>
      <style>{`
        .footer {
          background: #111111; border-top: 1px solid rgba(255,255,255,0.06);
          padding: 2.5rem 3rem;
        }
        .footer-inner {
          max-width: 1280px; margin: 0 auto;
          display: flex; align-items: center; justify-content: space-between;
          flex-wrap: wrap; gap: 1rem;
        }
        .fl {
          font-family: 'Outfit', sans-serif; font-weight: 800; font-size: 1.2rem;
          color: #fff; letter-spacing: -0.03em;
          display: flex; align-items: baseline; gap: 2px;
        }
        .fl-dot {
          width: 8px; height: 8px; border-radius: 50%;
          background: #00ff88; display: inline-block; margin-left: 2px;
          box-shadow: 0 0 12px rgba(0,255,136,0.6);
        }
        .footer-copy {
          font-family: 'Space Mono', monospace;
          font-size: 0.72rem; color: rgba(255,255,255,0.25);
          letter-spacing: 0.04em;
        }
        .footer-links { display: flex; gap: 1.5rem; }
        .footer-link {
          font-family: 'Space Mono', monospace;
          font-size: 0.72rem; letter-spacing: 0.04em;
          color: rgba(255,255,255,0.25);
          transition: color 0.2s;
        }
        .footer-link:hover { color: #00ff88; }
        @media (max-width: 600px) { .footer-inner { flex-direction: column; align-items: center; text-align: center; } .footer { padding: 2rem 1.5rem; } }
      `}</style>
      <footer className="footer">
        <div className="footer-inner">
          <a href="#home" className="fl">Anjana<span className="fl-dot" /></a>
          <p className="footer-copy">© {new Date().getFullYear()} Anjana Tharindu. All rights reserved.</p>
          <div className="footer-links">
            {[["GitHub","https://github.com/darkfighterk"],["LinkedIn","https://www.linkedin.com/in/anjana-tharindu-379ab137a?utm_source=share_via&utm_content=profile&utm_medium=member_android"],["Twitter","https://twitter.com"]].map(([l,h]) => (
              <a key={l} href={h} className="footer-link" target="_blank" rel="noopener noreferrer">{l}</a>
            ))}
          </div>
        </div>
      </footer>
    </>
  );
}
