"use client";
import { useState } from "react";
import Link from "next/link";
import { SERVICES } from "../data";

const PROCESS = [
  { step: "01", title: "Share Your Vision", desc: "Fill in our short enquiry form or contact our Colombo desk. Share your timing, style, and travel goals." },
  { step: "02", title: "Tailored Proposal", desc: "Within 48 hours, our specialists design a custom itinerary with curated hotels, transport, and private guides." },
  { step: "03", title: "Refine & Finalize", desc: "We fine-tune every detail together until the plan fits your preferences, then confirm all bookings across Sri Lanka." },
  { step: "04", title: "Warm Island Welcome", desc: "Your dedicated concierge greets you upon arrival. From airport pickup to final farewell, every detail is seamlessly managed." },
];

export default function Services() {
  const [hovered, setHovered] = useState<string | null>(null);

  return (
    <div style={{ backgroundColor: "#072514ff", paddingTop: 76 }}>

      {/* ══ PAGE HERO ══ */}
      <section style={{ position: "relative", overflow: "hidden" }}>
        <img src="https://images.unsplash.com/photo-1663784025074-49e9e7f11f62?w=1800&h=600&fit=crop&auto=format" alt="Sigiriya rock fortress Sri Lanka" style={{ width: "100%", height: 460, objectFit: "cover", display: "block", filter: "brightness(0.35)" }} />
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(180deg, rgba(27,59,43,0.6) 0%, rgba(247,245,240,1) 100%)" }} />
        <div style={{ position: "absolute", inset: 0, display: "flex", alignItems: "center", padding: "0 24px" }}>
          <div style={{ maxWidth: 1280, margin: "0 auto", width: "100%" }}>
            <span className="section-label" style={{ color: "#E8C568" }}>Tailored Offerings</span>
            <h1 style={{ fontFamily: "'Fraunces',Georgia,serif", fontSize: "clamp(40px,6vw,72px)", fontWeight: 400, color: "#1B3B2B", lineHeight: 1.05, maxWidth: 660 }}>
              Curated services for a <em style={{ fontStyle: "italic", fontWeight: 500, color: "#C59B27" }}>seamless journey</em>
            </h1>
            <p style={{ fontSize: 16, fontWeight: 300, color: "#52685C", marginTop: 18, lineHeight: 1.7, maxWidth: 520 }}>
              Eight specialized travel services — from private guided expeditions to boutique stays and wild safari adventures.
            </p>
          </div>
        </div>
      </section>

      {/* ══ SERVICES GRID ══ */}
      <section style={{ padding: "96px 24px", maxWidth: 1280, margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: 56 }}>
          <span className="section-label">Our Services</span>
          <h2 className="section-title">Choose your <em>experience</em></h2>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(2,1fr)", gap: 24 }} className="services-grid">
          {SERVICES.map((s) => (
            <div
              key={s.id}
              className="card"
              style={{ display: "flex", flexDirection: "column", overflow: "hidden", cursor: "pointer", borderColor: hovered === s.id ? "#C59B27" : undefined }}
              onMouseEnter={() => setHovered(s.id)}
              onMouseLeave={() => setHovered(null)}
            >
              {/* Image */}
              <div style={{ position: "relative", height: 210, overflow: "hidden", flexShrink: 0 }}>
                <img src={s.img} alt={s.alt} style={{ width: "100%", height: "100%", objectFit: "cover", display: "block", transition: "transform 0.6s ease", transform: hovered === s.id ? "scale(1.06)" : "scale(1)", backgroundColor: "#EEF4F0" }} />
                <div style={{ position: "absolute", inset: 0, background: "linear-gradient(180deg, transparent 50%, rgba(27,59,43,0.85) 100%)" }} />
                <div style={{ position: "absolute", top: 16, left: 16, display: "flex", gap: 8, alignItems: "center" }}>
                  <span className="tag">{s.tagline}</span>
                </div>
              </div>

              {/* Body */}
              <div style={{ padding: "24px 26px 28px", flex: 1, display: "flex", flexDirection: "column", gap: 14 }}>
                <h3 style={{ fontFamily: "'Fraunces',Georgia,serif", fontSize: 22, fontWeight: 500, color: "#1B3B2B" }}>{s.title}</h3>
                <p style={{ fontSize: 14, fontWeight: 300, color: "#52685C", lineHeight: 1.72 }}>{s.description}</p>

                {/* Features */}
                <ul style={{ listStyle: "none", display: "flex", flexWrap: "wrap", gap: 8, margin: 0, padding: 0 }}>
                  {s.features.map(f => (
                    <li key={f} style={{ fontSize: 12, padding: "5px 12px", borderRadius: 999, backgroundColor: "#EEF4F0", color: "#1B3B2B", border: "1px solid #E2EBE5", display: "flex", alignItems: "center", gap: 6 }}>
                      <span style={{ color: "#C59B27", fontSize: 10 }}>✓</span> {f}
                    </li>
                  ))}
                </ul>

                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", paddingTop: 16, marginTop: "auto", borderTop: "1px solid #E2EBE5" }}>
                  <div>
                    <p style={{ fontSize: 11, color: "#52685C" }}>Starting from</p>
                    <p style={{ fontFamily: "'Fraunces',Georgia,serif", fontSize: 20, fontWeight: 600, color: "#C59B27" }}>{s.price}</p>
                  </div>
                  <Link href="/contact" className="btn-emerald" style={{ fontSize: 13, padding: "10px 22px" }}>
                    Enquire Now
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ══ HOW IT WORKS ══ */}
      <section style={{ backgroundColor: "#EEF4F0", borderTop: "1px solid #E2EBE5", borderBottom: "1px solid #E2EBE5", padding: "96px 24px" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 60 }}>
            <span className="section-label">Simple Process</span>
            <h2 className="section-title">How it <em>works</em></h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 24, position: "relative" }} className="process-grid">
            {PROCESS.map(({ step, title, desc }) => (
              <div key={step} style={{ textAlign: "center", position: "relative" }}>
                <div style={{ width: 56, height: 56, borderRadius: "50%", backgroundColor: "#1B3B2B", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 20px", fontFamily: "'Fraunces',Georgia,serif", fontSize: 18, fontWeight: 700, color: "#FFFFFF" }}>
                  {step}
                </div>
                <h4 style={{ fontSize: 17, fontWeight: 600, color: "#1B3B2B", marginBottom: 10 }}>{title}</h4>
                <p style={{ fontSize: 13, fontWeight: 300, color: "#52685C", lineHeight: 1.7 }}>{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ BOTTOM CTA ══ */}
      <section style={{ padding: "80px 24px", textAlign: "center" }}>
        <div style={{ maxWidth: 560, margin: "0 auto" }}>
          <h2 className="section-title" style={{ marginBottom: 18 }}>Not sure which service <em>fits best?</em></h2>
          <p style={{ fontSize: 15, fontWeight: 300, color: "#52685C", lineHeight: 1.75, marginBottom: 34 }}>Tell us what you have in mind. Our travel concierges will construct the ideal travel experience for you.</p>
          <Link href="/contact" className="btn-primary" style={{ fontSize: 15, padding: "14px 40px" }}>
            Talk to a Specialist
          </Link>
        </div>
      </section>

      <style>{`
        @media (max-width: 900px) {
          .services-grid { grid-template-columns: 1fr !important; }
          .process-grid { grid-template-columns: repeat(2,1fr) !important; }
        }
        @media (max-width: 540px) {
          .process-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </div>
  );
}
