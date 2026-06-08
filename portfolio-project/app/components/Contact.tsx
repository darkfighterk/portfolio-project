"use client";

import { useState } from "react";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [status, setStatus] = useState<"idle" | "sending" | "sent">("idle");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setForm((p) => ({ ...p, [e.target.name]: e.target.value }));

  const handleSubmit = async (e: React.MouseEvent) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) return;
    setStatus("sending");
    await new Promise((r) => setTimeout(r, 1500));
    setStatus("sent");
  };

  return (
    <>
      <style>{`
        .contact { padding: 7rem 3rem; background: #141414; position: relative; overflow: hidden; }
        .contact::before {
          content: ''; position: absolute; left: -200px; bottom: -200px;
          width: 600px; height: 600px; border-radius: 50%;
          background: radial-gradient(circle, rgba(0,255,136,0.05) 0%, transparent 65%);
          pointer-events: none;
        }
        .contact-inner { max-width: 1280px; margin: 0 auto; position: relative; z-index: 1; }
        .contact-layout { display: grid; grid-template-columns: 1fr 1.4fr; gap: 5rem; margin-top: 4rem; align-items: start; }

        /* Info column */
        .cinfo-title { font-family: 'Outfit', sans-serif; font-size: 1.5rem; font-weight: 700; color: #fff; letter-spacing: -0.03em; margin-bottom: 0.8rem; }
        .cinfo-sub { font-family: 'Outfit', sans-serif; font-size: 0.9rem; font-weight: 300; color: rgba(255,255,255,0.45); line-height: 1.8; margin-bottom: 2.5rem; }
        .cinfo-list { display: flex; flex-direction: column; gap: 1rem; }
        .ci {
          display: flex; align-items: center; gap: 1rem;
          padding: 1rem 1.2rem; border-radius: 12px;
          background: #1a1a1a; border: 1px solid rgba(255,255,255,0.07);
          transition: border-color 0.2s, transform 0.2s;
        }
        .ci:hover { border-color: rgba(0,255,136,0.25); transform: translateX(4px); }
        .ci-icon {
          width: 40px; height: 40px; border-radius: 10px; flex-shrink: 0;
          background: rgba(0,255,136,0.08); border: 1px solid rgba(0,255,136,0.15);
          display: flex; align-items: center; justify-content: center; color: #00ff88;
        }
        .ci-lbl { font-family: 'Space Mono', monospace; font-size: 0.65rem; color: rgba(255,255,255,0.30); letter-spacing: 0.08em; text-transform: uppercase; margin-bottom: 0.2rem; }
        .ci-val { font-family: 'Outfit', sans-serif; font-size: 0.9rem; font-weight: 500; color: rgba(255,255,255,0.75); }

        /* Form */
        .cform {
          background: #1a1a1a; border: 1px solid rgba(255,255,255,0.08);
          border-radius: 20px; padding: 2.5rem;
        }
        .frow { display: grid; grid-template-columns: 1fr 1fr; gap: 1rem; margin-bottom: 1rem; }
        .fg { display: flex; flex-direction: column; gap: 0.45rem; margin-bottom: 1rem; }
        .fg:last-of-type { margin-bottom: 0; }
        .flbl {
          font-family: 'Space Mono', monospace;
          font-size: 0.65rem; color: rgba(255,255,255,0.30);
          letter-spacing: 0.08em; text-transform: uppercase;
        }
        .fi, .ft {
          width: 100%; background: #111; border: 1px solid rgba(255,255,255,0.08);
          border-radius: 10px; padding: 0.85rem 1rem;
          color: #fff; font-family: 'Outfit', sans-serif; font-size: 0.9rem;
          outline: none; transition: border-color 0.2s, box-shadow 0.2s;
        }
        .fi::placeholder, .ft::placeholder { color: rgba(255,255,255,0.20); }
        .fi:focus, .ft:focus {
          border-color: rgba(0,255,136,0.4);
          box-shadow: 0 0 0 3px rgba(0,255,136,0.06);
        }
        .ft { resize: vertical; min-height: 130px; line-height: 1.65; }
        .fsub {
          width: 100%; margin-top: 1.2rem; padding: 1rem;
          border-radius: 100px; background: #00ff88; color: #141414;
          font-family: 'Space Mono', monospace; font-size: 0.78rem;
          font-weight: 700; letter-spacing: 0.06em; text-transform: uppercase;
          display: flex; align-items: center; justify-content: center; gap: 0.6rem;
          border: none; cursor: pointer;
          box-shadow: 0 4px 24px rgba(0,255,136,0.3);
          transition: transform 0.2s, box-shadow 0.2s, opacity 0.2s;
        }
        .fsub:hover:not(:disabled) { transform: translateY(-2px); box-shadow: 0 8px 40px rgba(0,255,136,0.4); }
        .fsub:disabled { opacity: 0.6; cursor: not-allowed; }

        /* Success */
        .csuccess { text-align: center; padding: 4rem 2rem; }
        .csuccess-ic {
          width: 64px; height: 64px; border-radius: 50%;
          background: rgba(0,255,136,0.08); border: 1px solid rgba(0,255,136,0.2);
          display: flex; align-items: center; justify-content: center;
          margin: 0 auto 1.5rem; color: #00ff88;
        }
        .csuccess h3 { font-family: 'Outfit', sans-serif; font-size: 1.6rem; font-weight: 800; color: #fff; letter-spacing: -0.03em; margin-bottom: 0.5rem; }
        .csuccess p { color: rgba(255,255,255,0.45); font-size: 0.9rem; font-family: 'Outfit', sans-serif; }

        @media (max-width: 900px) { .contact-layout { grid-template-columns: 1fr; gap: 3rem; } .contact { padding: 5rem 1.5rem; } }
        @media (max-width: 600px) { .frow { grid-template-columns: 1fr; } .cform { padding: 1.8rem 1.5rem; } }
      `}</style>

      <section className="contact" id="contact">
        <div className="contact-inner">
          <div className="sec-tag">Let&apos;s Talk</div>
          <h2 className="sec-h2">Get In <span>Touch</span></h2>

          <div className="contact-layout">
            <div>
              <h3 className="cinfo-title">Have a project in mind?</h3>
              <p className="cinfo-sub">I&apos;m always open to discussing new projects, creative ideas, or opportunities to be part of something great.</p>
              <div className="cinfo-list">
                {[
                  { icon: <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>, lbl: "Email", val: "luke@example.com", href: "mailto:luke@example.com" },
                  { icon: <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"/><circle cx="4" cy="4" r="2"/></svg>, lbl: "LinkedIn", val: "linkedin.com/in/lukecoleman", href: "https://linkedin.com" },
                  { icon: <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.44 9.8 8.2 11.39.6.11.82-.26.82-.58v-2.03c-3.34.73-4.04-1.61-4.04-1.61-.54-1.38-1.33-1.75-1.33-1.75-1.09-.74.08-.73.08-.73 1.2.08 1.84 1.24 1.84 1.24 1.07 1.83 2.8 1.3 3.49 1 .11-.78.42-1.3.76-1.6-2.67-.3-5.47-1.33-5.47-5.93 0-1.31.47-2.38 1.24-3.22-.13-.3-.54-1.52.12-3.18 0 0 1.01-.32 3.3 1.23a11.5 11.5 0 013-.4c1.02.005 2.04.14 3 .4 2.28-1.55 3.29-1.23 3.29-1.23.66 1.66.25 2.88.12 3.18.77.84 1.24 1.91 1.24 3.22 0 4.61-2.81 5.63-5.48 5.92.43.37.81 1.1.81 2.22v3.29c0 .32.22.7.83.58C20.57 21.8 24 17.3 24 12c0-6.63-5.37-12-12-12z"/></svg>, lbl: "GitHub", val: "github.com/lukecoleman", href: "https://github.com" },
                ].map((c) => (
                  <a key={c.lbl} href={c.href} className="ci" target="_blank" rel="noopener noreferrer">
                    <div className="ci-icon">{c.icon}</div>
                    <div><div className="ci-lbl">{c.lbl}</div><div className="ci-val">{c.val}</div></div>
                  </a>
                ))}
              </div>
            </div>

            <div className="cform">
              {status === "sent" ? (
                <div className="csuccess">
                  <div className="csuccess-ic"><svg width="28" height="28" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><polyline points="20 6 9 17 4 12"/></svg></div>
                  <h3>Message Sent!</h3>
                  <p>I&apos;ll get back to you within 24 hours.</p>
                </div>
              ) : (
                <>
                  <div className="frow">
                    <div className="fg"><label className="flbl">Name</label><input name="name" type="text" className="fi" placeholder="Your name" value={form.name} onChange={handleChange} /></div>
                    <div className="fg"><label className="flbl">Email</label><input name="email" type="email" className="fi" placeholder="you@email.com" value={form.email} onChange={handleChange} /></div>
                  </div>
                  <div className="fg"><label className="flbl">Subject</label><input name="subject" type="text" className="fi" placeholder="Project inquiry" value={form.subject} onChange={handleChange} /></div>
                  <div className="fg" style={{ marginBottom: 0 }}><label className="flbl">Message</label><textarea name="message" className="ft" placeholder="Tell me about your project…" value={form.message} onChange={handleChange} /></div>
                  <button className="fsub" disabled={status === "sending"} onClick={handleSubmit}>
                    {status === "sending" ? "Sending…" : <>Send Message <svg width="14" height="14" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/></svg></>}
                  </button>
                </>
              )}
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
