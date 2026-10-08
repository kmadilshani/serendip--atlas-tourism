"use client";
import { useState } from "react";
import Link from "next/link";
import Logo from "../components/Logo";

const ENQUIRY_TYPES = [
  "Tour Package",
  "Hotel Booking",
  "Private Transport",
  "Guided Tour",
  "Wildlife Safari",
  "Custom Itinerary",
  "General Enquiry"
];

const OFFICES = [
  { city: "Colombo Studio", address: "18 Alfred House Gardens, Colombo 03", phone: "+94 11 268 7744", email: "ayubowan@serendipatlas.lk", hours: "Mon–Sat 8:30am – 6:30pm SLST" },
  { city: "Kandy Outpost", address: "36 Deva Veediya, Kandy", phone: "+94 81 222 5871", email: "kandy@serendipatlas.lk", hours: "Mon–Sat 8:30am – 6:00pm SLST" },
  { city: "Galle Outpost", address: "12 Church Street, Galle Fort", phone: "+94 91 224 6710", email: "galle@serendipatlas.lk", hours: "Mon–Fri 9:00am – 5:30pm SLST" },
];

const SOCIALS = [
  { name: "Instagram", handle: "@serendipatlas", url: "#", icon: "📸", followers: "48.2K" },
  { name: "Facebook", handle: "Serendip Atlas", url: "#", icon: "🌐", followers: "31.5K" },
  { name: "TripAdvisor", handle: "Serendip Atlas Journeys", url: "#", icon: "⭐", followers: "4.9 / 5" },
  { name: "WhatsApp", handle: "+94 77 748 2752", url: "#", icon: "💬", followers: "Direct chat" },
];

const FAQ = [
  { q: "How far in advance should I book my trip?", a: "For peak season (December – March) we recommend booking 2 to 3 months ahead. Off-peak trips can often be arranged within 3 to 4 weeks." },
  { q: "Do you handle entry visas for Sri Lanka?", a: "Sri Lanka offers a quick online ETA application. We provide a step-by-step guidance document and assist with any travel requirements." },
  { q: "What is your cancellation policy?", a: "Cancellations made more than 30 days prior receive a full refund minus administrative fees. Within 30 days, flexible reschedule options are offered." },
  { q: "Are your Sri Lanka tours private or group?", a: "All our standard itineraries are 100% private. We also organize small custom groups upon request." },
];

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", phone: "", enquiry: "", dates: "", message: "", newsletter: false });
  const [sent, setSent] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const set = (k: string, v: string | boolean) => setForm(f => ({ ...f, [k]: v }));
  const submit = (e: React.FormEvent) => { e.preventDefault(); setSent(true); };

  return (
    <div style={{ backgroundColor: "#05240eff", paddingTop: 76 }}>

      {/* ══ PAGE HERO ══ */}
      <section style={{ position: "relative", overflow: "hidden" }}>
        <img src="https://images.unsplash.com/photo-1740812517495-812e90ca01b1?w=1800&h=480&fit=crop&auto=format" alt="Colombo Sri Lanka coast and city" style={{ width: "100%", height: 380, objectFit: "cover", display: "block", filter: "brightness(0.35)" }} />
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(180deg, rgba(27,59,43,0.6) 0%, rgba(247,245,240,1) 100%)" }} />
        <div style={{ position: "absolute", inset: 0, display: "flex", alignItems: "center", padding: "0 24px" }}>
          <div style={{ maxWidth: 1280, margin: "0 auto", width: "100%" }}>
            <span className="section-label" style={{ color: "#E8C568" }}>Get In Touch</span>
            <h1 style={{ fontFamily: "'Fraunces',Georgia,serif", fontSize: "clamp(38px,5.5vw,68px)", fontWeight: 400, color: "#1B3B2B", lineHeight: 1.05 }}>
              Let's craft your<br /><em style={{ fontStyle: "italic", fontWeight: 500, color: "#C59B27" }}>Sri Lanka journey</em>
            </h1>
            <p style={{ fontSize: 16, fontWeight: 300, color: "#52685C", marginTop: 16, lineHeight: 1.7, maxWidth: 460 }}>
              Connect with our Colombo travel concierges. We respond to all inquiries within 24 hours.
            </p>
          </div>
        </div>
      </section>

      {/* ══ MAIN CONTENT ══ */}
      <section style={{ padding: "80px 24px 96px", maxWidth: 1280, margin: "0 auto" }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 420px", gap: 48, alignItems: "start" }} className="contact-grid">

          {/* ── FORM ── */}
          <div>
            <h2 className="section-title" style={{ marginBottom: 8 }}>Send us a <em>message</em></h2>
            <p style={{ fontSize: 15, fontWeight: 300, color: "#52685C", marginBottom: 36 }}>Share your travel plans and a dedicated Sri Lanka travel designer will be in touch.</p>

            {sent ? (
              <div style={{ padding: "48px 36px", borderRadius: 20, backgroundColor: "#FFFFFF", border: "1px solid #C59B27", textAlign: "center", boxShadow: "0 12px 32px rgba(27,59,43,0.08)" }}>
                <div style={{ marginBottom: 20, display: "flex", justifyContent: "center" }}>
                  <Logo size="lg" lightText={false} />
                </div>
                <h3 style={{ fontFamily: "'Fraunces',Georgia,serif", fontSize: 26, fontWeight: 500, color: "#1B3B2B", marginBottom: 12 }}>Ayubowan! Message Received.</h3>
                <p style={{ fontSize: 15, color: "#52685C", lineHeight: 1.7, marginBottom: 26 }}>
                  Thank you, {form.name || "friend"}. Our travel concierges will get back to you within 24 hours.
                </p>
                <div style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}>
                  <button onClick={() => setSent(false)} className="btn-outline-gold">Send Another Inquiry</button>
                  <Link href="/locations" className="btn-primary">Explore Locations</Link>
                </div>
              </div>
            ) : (
              <form onSubmit={submit}>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 18, marginBottom: 18 }} className="form-two-col">
                  <div>
                    <label style={{ display: "block", fontSize: 12, fontWeight: 700, color: "#1B3B2B", marginBottom: 8, letterSpacing: "0.12em", textTransform: "uppercase" }}>Full Name *</label>
                    <input required value={form.name} onChange={e => set("name", e.target.value)} placeholder="Isabelle Fontaine" />
                  </div>
                  <div>
                    <label style={{ display: "block", fontSize: 12, fontWeight: 700, color: "#1B3B2B", marginBottom: 8, letterSpacing: "0.12em", textTransform: "uppercase" }}>Email Address *</label>
                    <input required type="email" value={form.email} onChange={e => set("email", e.target.value)} placeholder="isabelle@example.com" />
                  </div>
                </div>

                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 18, marginBottom: 18 }} className="form-two-col">
                  <div>
                    <label style={{ display: "block", fontSize: 12, fontWeight: 700, color: "#1B3B2B", marginBottom: 8, letterSpacing: "0.12em", textTransform: "uppercase" }}>Phone / WhatsApp</label>
                    <input value={form.phone} onChange={e => set("phone", e.target.value)} placeholder="+33 6 12 34 56 78" />
                  </div>
                  <div>
                    <label style={{ display: "block", fontSize: 12, fontWeight: 700, color: "#1B3B2B", marginBottom: 8, letterSpacing: "0.12em", textTransform: "uppercase" }}>Travel Dates</label>
                    <input value={form.dates} onChange={e => set("dates", e.target.value)} placeholder="e.g. March 12 – 24, 2027" />
                  </div>
                </div>

                <div style={{ marginBottom: 18 }}>
                  <label style={{ display: "block", fontSize: 12, fontWeight: 700, color: "#1B3B2B", marginBottom: 8, letterSpacing: "0.12em", textTransform: "uppercase" }}>Enquiry Type</label>
                  <select value={form.enquiry} onChange={e => set("enquiry", e.target.value)}>
                    <option value="">Select an option…</option>
                    {ENQUIRY_TYPES.map(t => <option key={t} value={t}>{t}</option>)}
                  </select>
                </div>

                <div style={{ marginBottom: 26 }}>
                  <label style={{ display: "block", fontSize: 12, fontWeight: 700, color: "#1B3B2B", marginBottom: 8, letterSpacing: "0.12em", textTransform: "uppercase" }}>Your Message *</label>
                  <textarea required rows={5} value={form.message} onChange={e => set("message", e.target.value)} placeholder="Tell us about your trip goals — places you want to visit, budget, group size, special requests…" style={{ resize: "vertical" }} />
                </div>

                <label style={{ display: "flex", alignItems: "flex-start", gap: 12, cursor: "pointer", marginBottom: 30 }}>
                  <input type="checkbox" checked={form.newsletter as boolean} onChange={e => set("newsletter", e.target.checked)} style={{ width: "auto", marginTop: 3, accentColor: "#C59B27" }} />
                  <span style={{ fontSize: 13, color: "#52685C", fontWeight: 300 }}>Subscribe to the Serendip Letter for monthly island updates, seasonal tips, and boutique stay highlights.</span>
                </label>

                <button type="submit" className="btn-primary" style={{ fontSize: 15, padding: "14px 42px" }}>
                  Send Message →
                </button>
              </form>
            )}
          </div>

          {/* ── SIDEBAR ── */}
          <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>

            {/* Offices */}
            <div style={{ padding: "30px 28px", borderRadius: 20, backgroundColor: "#FFFFFF", border: "1px solid #E2EBE5", boxShadow: "0 8px 24px rgba(27,59,43,0.06)" }}>
              <h3 style={{ fontFamily: "'Fraunces',Georgia,serif", fontSize: 22, fontWeight: 500, color: "#1B3B2B", marginBottom: 20 }}>Our Offices</h3>
              {OFFICES.map((o, i) => (
                <div key={o.city} style={{ paddingBottom: i < OFFICES.length - 1 ? 20 : 0, marginBottom: i < OFFICES.length - 1 ? 20 : 0, borderBottom: i < OFFICES.length - 1 ? "1px solid #E2EBE5" : "none" }}>
                  <p style={{ fontSize: 14, fontWeight: 700, color: "#C59B27", marginBottom: 6 }}>{o.city}</p>
                  <p style={{ fontSize: 13, color: "#52685C", fontWeight: 300, marginBottom: 4 }}>📍 {o.address}</p>
                  <p style={{ fontSize: 13, color: "#52685C", fontWeight: 300, marginBottom: 4 }}>☎ {o.phone}</p>
                  <p style={{ fontSize: 13, color: "#52685C", fontWeight: 300, marginBottom: 4 }}>✉ {o.email}</p>
                  <p style={{ fontSize: 12, color: "#1B3B2B", fontWeight: 500 }}>🕒 {o.hours}</p>
                </div>
              ))}
            </div>

            {/* Social links */}
            <div style={{ padding: "26px 28px", borderRadius: 20, backgroundColor: "#FFFFFF", border: "1px solid #E2EBE5", boxShadow: "0 8px 24px rgba(27,59,43,0.06)" }}>
              <h3 style={{ fontFamily: "'Fraunces',Georgia,serif", fontSize: 20, fontWeight: 500, color: "#1B3B2B", marginBottom: 18 }}>Connect With Us</h3>
              <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                {SOCIALS.map(s => (
                  <a key={s.name} href={s.url} style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "12px 16px", borderRadius: 12, backgroundColor: "#EEF4F0", border: "1px solid #E2EBE5", textDecoration: "none", transition: "all 0.2s" }}
                    onMouseEnter={e => {
                      (e.currentTarget as HTMLAnchorElement).style.borderColor = "#C59B27";
                    }}
                    onMouseLeave={e => {
                      (e.currentTarget as HTMLAnchorElement).style.borderColor = "#E2EBE5";
                    }}
                  >
                    <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                      <span style={{ fontSize: 18 }}>{s.icon}</span>
                      <div>
                        <p style={{ fontSize: 14, fontWeight: 600, color: "#1B3B2B" }}>{s.name}</p>
                        <p style={{ fontSize: 12, color: "#52685C" }}>{s.handle}</p>
                      </div>
                    </div>
                    <span style={{ fontSize: 12, color: "#C59B27", fontWeight: 600 }}>{s.followers}</span>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══ FAQ ══ */}
      <section style={{ backgroundColor: "#EEF4F0", borderTop: "1px solid #E2EBE5", padding: "80px 24px" }}>
        <div style={{ maxWidth: 840, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 48 }}>
            <span className="section-label">Before You Book</span>
            <h2 className="section-title">Frequently asked <em>questions</em></h2>
          </div>
          {FAQ.map((f, i) => (
            <div key={i} style={{ borderBottom: "1px solid #CBD8D1", overflow: "hidden" }}>
              <button
                onClick={() => setOpenFaq(openFaq === i ? null : i)}
                style={{ width: "100%", display: "flex", justifyContent: "space-between", alignItems: "center", padding: "20px 0", background: "none", border: "none", cursor: "pointer", textAlign: "left", gap: 16 }}
              >
                <span style={{ fontSize: 16, fontWeight: 600, color: "#1B3B2B" }}>{f.q}</span>
                <span style={{ fontSize: 22, color: "#C59B27", flexShrink: 0, transition: "transform 0.3s", transform: openFaq === i ? "rotate(45deg)" : "rotate(0)" }}>+</span>
              </button>
              {openFaq === i && (
                <p style={{ fontSize: 15, fontWeight: 300, color: "#52685C", lineHeight: 1.75, paddingBottom: 20 }}>{f.a}</p>
              )}
            </div>
          ))}
        </div>
      </section>

      <style>{`
        @media (max-width: 960px) {
          .contact-grid { grid-template-columns: 1fr !important; }
        }
        @media (max-width: 600px) {
          .form-two-col { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </div>
  );
}
