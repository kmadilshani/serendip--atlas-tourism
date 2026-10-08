"use client";
import Link from "next/link";
import { TEAM, STATS } from "../data";

const TIMELINE = [
  { year: "2009", title: "Founded in Colombo", desc: "Chamara Perera started Serendip Atlas from a small office near Galle Face with two certified guides and a single luxury vehicle." },
  { year: "2012", title: "First International Guests", desc: "Word of mouth brought our first European travellers — a family from Lyon who still travel with us every year." },
  { year: "2016", title: "Sustainable Tourism Pledge", desc: "We became the first Sri Lankan travel agency to achieve 100% carbon offset across all operations." },
  { year: "2019", title: "TripAdvisor Excellence Award", desc: "Recognised as a top-rated Sri Lanka tour operator for the third consecutive year." },
  { year: "2022", title: "50+ Staff Island-Wide", desc: "Expanded to a team of 54 locals — guides, chauffeurs, naturalists, and concierge specialists." },
  { year: "2026", title: "5,000 Journeys Completed", desc: "We celebrated our 5,000th guest with a sunrise ceremony at Sigiriya — our favorite view on Earth." },
];

const VALUES = [
  { icon: "🌿", title: "Sustainability First", desc: "We partner exclusively with eco-certified properties and offset 100% of trip emissions." },
  { icon: "🤝", title: "Community-Led", desc: "Over 80% of our spending goes directly to local village businesses, artisans, and guides." },
  { icon: "📜", title: "Authentic Experiences", desc: "We refuse to offer scripted tourist traps. Every moment is genuine, relaxed, and rich." },
  { icon: "🛡️", title: "Guest-First Care", desc: "24/7 dedicated on-island concierge, comprehensive safety, and flexible booking." },
];

export default function About() {
  return (
    <div style={{ backgroundColor: "#051b08ff", paddingTop: 76 }}>

      {/* ══ PAGE HERO ══ */}
      <section style={{ position: "relative", padding: "80px 24px 0", overflow: "hidden" }}>
        <img src="https://images.unsplash.com/photo-1663471984093-5925e87e72d5?w=1800&h=700&fit=crop&auto=format" alt="Traditional Kandyan cultural dance performers in Sri Lanka" style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", filter: "brightness(0.35)" }} />
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(180deg, rgba(27,59,43,0.6) 0%, rgba(247,245,240,1) 100%)" }} />
        <div style={{ position: "relative", maxWidth: 1280, margin: "0 auto", padding: "80px 0 96px" }}>
          <span className="section-label" style={{ color: "#E8C568" }}>Our Story</span>
          <h1 style={{ fontFamily: "'Fraunces',Georgia,serif", fontSize: "clamp(40px,6vw,76px)", fontWeight: 400, color: "#1B3B2B", lineHeight: 1.05, maxWidth: 700 }}>
            Born on the island,<br /><em style={{ fontStyle: "italic", fontWeight: 500, color: "#C59B27" }}>built for curious travellers.</em>
          </h1>
          <p style={{ fontSize: 17, fontWeight: 300, color: "#52685C", marginTop: 22, lineHeight: 1.7, maxWidth: 540 }}>
            Since 2009, we've matched travellers with the real Sri Lanka — the culture, wildlife, and serenity beyond brochures.
          </p>
        </div>
      </section>

      {/* ══ COMPANY STORY ══ */}
      <section style={{ padding: "96px 24px", maxWidth: 1280, margin: "0 auto" }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 64, alignItems: "center" }} className="two-col">
          <div>
            <span className="section-label">Company Heritage</span>
            <h2 className="section-title" style={{ marginBottom: 24 }}>A journey started <em>with one vehicle</em></h2>
            <p style={{ fontSize: 15, fontWeight: 300, color: "#52685C", lineHeight: 1.8, marginBottom: 18 }}>
              Serendip Atlas was born from a clear vision: to show international travellers Sri Lanka as locals experience it — authentic, unhurried, and deeply rooted in hospitality.
            </p>
            <p style={{ fontSize: 15, fontWeight: 300, color: "#52685C", lineHeight: 1.8, marginBottom: 18 }}>
              Founder Chamara Perera started with private heritage walks around Kandy and Colombo. Word of mouth spread, and guests appreciated the personal touch, local stories, and seamless logistics.
            </p>
            <p style={{ fontSize: 15, fontWeight: 300, color: "#52685C", lineHeight: 1.8, marginBottom: 34 }}>
              Today, our team includes 54 local experts, 120 curated itineraries, and guests from over 40 countries — all grounded in our founding question: <em style={{ color: "#C59B27" }}>"What meaningful memory will this guest carry home?"</em>
            </p>
            <Link href="/contact" className="btn-primary">
              Plan Your Journey
            </Link>
          </div>
          <div style={{ position: "relative" }}>
            <img src="https://images.unsplash.com/photo-1740812517495-812e90ca01b1?w=700&h=800&fit=crop&auto=format" alt="Colombo city and ocean view Sri Lanka" style={{ width: "100%", borderRadius: 20, display: "block", backgroundColor: "#EEF4F0", border: "1px solid #E2EBE5" }} />
            <div style={{ position: "absolute", bottom: -20, left: -20, padding: "20px 28px", borderRadius: 16, backgroundColor: "#1B3B2B", color: "#FFFFFF", boxShadow: "0 16px 40px rgba(27,59,43,0.15)" }}>
              <p style={{ fontFamily: "'Fraunces',Georgia,serif", fontSize: 34, fontWeight: 700, color: "#E8C568", lineHeight: 1 }}>15+</p>
              <p style={{ fontSize: 11, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.15em", color: "#FFFFFF", marginTop: 4 }}>Years of Local Expertise</p>
            </div>
          </div>
        </div>
      </section>

      {/* ══ TIMELINE ══ */}
      <section style={{ padding: "0 24px 96px", maxWidth: 1280, margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: 60 }}>
          <span className="section-label">Our Journey</span>
          <h2 className="section-title">Milestones that <em>shaped us</em></h2>
        </div>
        <div style={{ position: "relative", maxWidth: 780, margin: "0 auto" }}>
          <div style={{ position: "absolute", left: "50%", top: 0, bottom: 0, width: 2, backgroundColor: "#E2EBE5", transform: "translateX(-50%)" }} className="timeline-line" />
          {TIMELINE.map((t, i) => (
            <div key={t.year} style={{ display: "flex", justifyContent: i % 2 === 0 ? "flex-start" : "flex-end", marginBottom: 36, position: "relative" }} className="timeline-row">
              <div style={{ width: "45%", padding: "24px 26px", borderRadius: 16, backgroundColor: "#FFFFFF", border: "1px solid #E2EBE5", boxShadow: "0 8px 24px rgba(27,59,43,0.06)" }} className="timeline-card">
                <p style={{ fontFamily: "'Fraunces',Georgia,serif", fontSize: 26, fontWeight: 600, color: "#C59B27", marginBottom: 6 }}>{t.year}</p>
                <h4 style={{ fontSize: 16, fontWeight: 600, color: "#1B3B2B", marginBottom: 8 }}>{t.title}</h4>
                <p style={{ fontSize: 14, fontWeight: 300, color: "#52685C", lineHeight: 1.7 }}>{t.desc}</p>
              </div>
              <div style={{ position: "absolute", left: "50%", top: 28, width: 12, height: 12, borderRadius: "50%", backgroundColor: "#C59B27", transform: "translateX(-50%)" }} className="timeline-dot" />
            </div>
          ))}
        </div>
      </section>

      {/* ══ MISSION & VISION ══ */}
      <section style={{ backgroundColor: "#EEF4F0", borderTop: "1px solid #E2EBE5", padding: "96px 24px" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 60 }}>
            <span className="section-label">What Drives Us</span>
            <h2 className="section-title">Mission & <em>Vision</em></h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 24, marginBottom: 56 }} className="two-col">
            <div style={{ padding: "40px 36px", borderRadius: 20, backgroundColor: "#FFFFFF", border: "1px solid #E2EBE5" }}>
              <div style={{ width: 48, height: 48, borderRadius: "50%", backgroundColor: "#EEF4F0", border: "1px solid #C59B27", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 14, fontWeight: 700, color: "#1B3B2B", marginBottom: 20 }}>
                M
              </div>
              <h3 style={{ fontFamily: "'Fraunces',Georgia,serif", fontSize: 26, fontWeight: 500, color: "#1B3B2B", marginBottom: 16 }}>Our Mission</h3>
              <p style={{ fontSize: 15, fontWeight: 300, color: "#52685C", lineHeight: 1.8 }}>
                To connect travellers with the authentic heart of Sri Lanka — its people, ecology, and living culture — through meticulously crafted private journeys that support local host communities.
              </p>
            </div>
            <div style={{ padding: "40px 36px", borderRadius: 20, backgroundColor: "#FFFFFF", border: "1px solid #E2EBE5" }}>
              <div style={{ width: 48, height: 48, borderRadius: "50%", backgroundColor: "#EEF4F0", border: "1px solid #C59B27", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 14, fontWeight: 700, color: "#1B3B2B", marginBottom: 20 }}>
                V
              </div>
              <h3 style={{ fontFamily: "'Fraunces',Georgia,serif", fontSize: 26, fontWeight: 500, color: "#1B3B2B", marginBottom: 16 }}>Our Vision</h3>
              <p style={{ fontSize: 15, fontWeight: 300, color: "#52685C", lineHeight: 1.8 }}>
                To set the benchmark for high-end, responsible island travel — where every itinerary preserves natural biodiversity, sustains heritage art, and builds lasting international connections.
              </p>
            </div>
          </div>

          {/* Values Grid */}
          <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 20 }} className="values-grid">
            {VALUES.map(({ icon, title, desc }) => (
              <div key={title} className="card" style={{ padding: "26px 22px" }}>
                <div style={{ fontSize: 32, marginBottom: 12 }}>{icon}</div>
                <h4 style={{ fontSize: 16, fontWeight: 600, color: "#1B3B2B", marginBottom: 8 }}>{title}</h4>
                <p style={{ fontSize: 13, fontWeight: 300, color: "#52685C", lineHeight: 1.65 }}>{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ TEAM ══ */}
      <section style={{ padding: "96px 24px", maxWidth: 1280, margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: 56 }}>
          <span className="section-label">Local Experts</span>
          <h2 className="section-title">Meet the <em>team</em></h2>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 20 }} className="team-grid">
          {TEAM.map((m) => (
            <div key={m.name} className="card" style={{ padding: 0, overflow: "hidden" }}>
              <div style={{ position: "relative", height: 200, backgroundColor: "#EEF4F0", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <div style={{ width: 64, height: 64, borderRadius: "50%", backgroundColor: "#FFFFFF", border: "1.5px solid #C59B27", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 20, fontWeight: 700, color: "#1B3B2B" }}>
                  {m.initials}
                </div>
              </div>
              <div style={{ padding: "20px 22px 24px" }}>
                <h3 style={{ fontFamily: "'Fraunces',Georgia,serif", fontSize: 19, fontWeight: 600, color: "#1B3B2B", marginBottom: 4 }}>{m.name}</h3>
                <p style={{ fontSize: 12, fontWeight: 600, color: "#C59B27", textTransform: "uppercase", letterSpacing: "0.12em", marginBottom: 4 }}>{m.role}</p>
                <p style={{ fontSize: 12, color: "#52685C", marginBottom: 12 }}>{m.origin}</p>
                <p style={{ fontSize: 13, fontWeight: 300, color: "#52685C", lineHeight: 1.65 }}>{m.bio}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ══ STATS ══ */}
      <section style={{ backgroundColor: "#EEF4F0", borderTop: "1px solid #E2EBE5", padding: "80px 24px" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 52 }}>
            <span className="section-label">By the Numbers</span>
            <h2 className="section-title">Achievements & <em>milestones</em></h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 20 }} className="stats-grid">
            {STATS.map(({ val, label, icon }) => (
              <div key={label} style={{ padding: "32px 24px", borderRadius: 20, backgroundColor: "#FFFFFF", border: "1px solid #E2EBE5", textAlign: "center" }}>
                <div style={{ fontSize: 36, marginBottom: 12 }}>{icon}</div>
                <p style={{ fontFamily: "'Fraunces',Georgia,serif", fontSize: 38, fontWeight: 600, color: "#C59B27", lineHeight: 1 }}>{val}</p>
                <p style={{ fontSize: 12, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.15em", color: "#1B3B2B", marginTop: 8 }}>{label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ CTA ══ */}
      <section style={{ padding: "80px 24px", textAlign: "center" }}>
        <div style={{ maxWidth: 540, margin: "0 auto" }}>
          <h2 className="section-title" style={{ marginBottom: 18 }}>Ready to start your <em>journey?</em></h2>
          <p style={{ fontSize: 15, fontWeight: 300, color: "#52685C", lineHeight: 1.75, marginBottom: 34 }}>Our Colombo team is ready to design your customized Sri Lanka itinerary.</p>
          <Link href="/contact" className="btn-primary" style={{ fontSize: 15, padding: "14px 38px" }}>
            Get In Touch
          </Link>
        </div>
      </section>

      <style>{`
        @media (max-width: 900px) {
          .two-col { grid-template-columns: 1fr !important; }
          .team-grid { grid-template-columns: repeat(2,1fr) !important; }
          .values-grid { grid-template-columns: repeat(2,1fr) !important; }
          .stats-grid { grid-template-columns: repeat(2,1fr) !important; }
          .timeline-line, .timeline-dot { display: none !important; }
          .timeline-row { justify-content: flex-start !important; }
          .timeline-card { width: 100% !important; }
        }
        @media (max-width: 540px) {
          .team-grid { grid-template-columns: 1fr !important; }
          .values-grid { grid-template-columns: 1fr !important; }
          .stats-grid { grid-template-columns: repeat(2,1fr) !important; }
        }
      `}</style>
    </div>
  );
}
