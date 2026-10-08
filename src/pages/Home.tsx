"use client";
import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { DESTINATIONS, TESTIMONIALS } from "../data";

const SLIDES = [
  {
    img: "https://images.unsplash.com/photo-1566296314736-6eaac1ca0cb9?w=1800&h=1000&fit=crop&auto=format",
    alt: "Blue train crossing the Nine Arches Bridge in Ella, Sri Lanka",
    tag: "Hill Country Tea Trails",
    lines: ["Nine Arches,", "One Island,", "Endless Wonder"],
    italic: 1,
    sub: "Traverse emerald tea highlands on Earth's most breathtaking railways.",
  },
  {
    img: "https://images.unsplash.com/photo-1519566335946-e6f65f0f4fdf?w=1800&h=1000&fit=crop&auto=format",
    alt: "Stilt fishermen silhouetted at sunset on the Sri Lanka coast",
    tag: "Southern Heritage Coast",
    lines: ["Where Ocean", "Meets Centuries of", "Living Culture"],
    italic: 2,
    sub: "Witness ancient stilt fishing rituals along the golden shores of Galle.",
  },
  {
    img: "https://images.unsplash.com/photo-1533484482814-3fe2d922be89?w=1800&h=1000&fit=crop&auto=format",
    alt: "Elephants bathing in a river in Sri Lanka",
    tag: "Wild Elephant Safaris",
    lines: ["Untamed.", "Unhurried.", "Unforgettable."],
    italic: 0,
    sub: "Encounter free-roaming elephant herds in their untouched sanctuary.",
  },
];

const FEATURES = [
  { icon: "🏛️", title: "8 UNESCO World Heritage Sites", desc: "Concentrated ancient kingdoms, rock fortresses, and sacred temples." },
  { icon: "🐘", title: "Rich Wildlife Density", desc: "Home to Asia's highest density of leopards, wild elephants, and blue whales." },
  { icon: "🍃", title: "Highland Tea Estates", desc: "Misty mountain cascades, Ceylon tea factories, and crisp high-altitude air." },
  { icon: "🌴", title: "1,340 km Golden Coast", desc: "Year-round surfing bays, tranquil palm coves, and marine conservation beaches." },
  { icon: "🥁", title: "Authentic Cultural Heritage", desc: "Vibrant Kandyan dance rituals, ancient fire festivals, and living traditions." },
  { icon: "🍛", title: "Exquisite Ceylon Flavors", desc: "Coastal crab curry, fresh hoppers at dawn, and fragrant midnight kottu roti." },
];

function Stars({ n = 5 }) {
  return (
    <div style={{ display: "flex", gap: 3 }}>
      {[...Array(5)].map((_, i) => (
        <svg key={i} width="14" height="14" viewBox="0 0 20 20" fill={i < n ? "#C59B27" : "rgba(197,155,39,0.2)"}>
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

export default function Home() {
  const [idx, setIdx] = useState(0);
  const [fade, setFade] = useState(true);
  const [tIdx, setTIdx] = useState(0);
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const go = (n: number) => {
    setFade(false);
    setTimeout(() => { setIdx(n); setFade(true); }, 350);
  };

  useEffect(() => {
    timer.current = setTimeout(() => go((idx + 1) % SLIDES.length), 6500);
    return () => { if (timer.current) clearTimeout(timer.current); };
  }, [idx]);

  const slide = SLIDES[idx];
  const featured = DESTINATIONS.slice(0, 4);

  return (
    <div style={{ backgroundColor: "#011f0dff" }}>

      {/* ══ HERO SECTION ══ */}
      <section style={{ position: "relative", height: "100vh", minHeight: 640, overflow: "hidden" }}>
        {SLIDES.map((s, i) => (
          <div key={i} style={{ position: "absolute", inset: 0, opacity: i === idx ? 1 : 0, transition: "opacity 1.2s ease-in-out", zIndex: i === idx ? 1 : 0 }}>
            <img src={s.img} alt={s.alt} style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} />
          </div>
        ))}
        {/* Soft natural lighting gradient */}
        <div style={{ position: "absolute", inset: 0, zIndex: 2, background: "linear-gradient(180deg, rgba(27,59,43,0.5) 0%, rgba(27,59,43,0.2) 40%, rgba(27,59,43,0.8) 80%, rgba(27,59,43,0.95) 100%)" }} />
        <div style={{ position: "absolute", inset: 0, zIndex: 2, background: "linear-gradient(90deg, rgba(27,59,43,0.7) 0%, transparent 65%)" }} />

        <div style={{ position: "relative", zIndex: 3, maxWidth: 1280, margin: "0 auto", padding: "0 24px", height: "100%", display: "flex", flexDirection: "column", justifyContent: "flex-end", paddingBottom: 76 }}>
          <div style={{ maxWidth: 680 }}>
            <div style={{ display: "inline-flex", alignItems: "center", gap: 10, padding: "6px 16px", borderRadius: 999, backgroundColor: "rgba(247,245,240,0.2)", backdropFilter: "blur(8px)", border: "1px solid rgba(255,255,255,0.4)", marginBottom: 22 }}>
              <span style={{ width: 7, height: 7, borderRadius: "50%", backgroundColor: "#E8C568", display: "inline-block" }} />
              <span style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase", color: "#FFFFFF" }}>{slide.tag}</span>
            </div>
            
            <h1 style={{ fontFamily: "'Fraunces',Georgia,serif", fontSize: "clamp(42px,7.5vw,84px)", fontWeight: 400, lineHeight: 1.05, color: "#FFFFFF", marginBottom: 20, opacity: fade ? 1 : 0, transition: "opacity 0.35s" }}>
              {slide.lines.map((line, i) => (
                <span key={i} style={{ display: "block", fontStyle: i === slide.italic ? "italic" : "normal", fontWeight: i === slide.italic ? 600 : 300, color: i === slide.italic ? "#E8C568" : "#FFFFFF" }}>{line}</span>
              ))}
            </h1>
            
            <p style={{ fontSize: 17, fontWeight: 300, color: "#E2EBE5", marginBottom: 38, lineHeight: 1.65, maxWidth: 500 }}>{slide.sub}</p>
            
            {/* Action Buttons - Solid Single Colors */}
            <div style={{ display: "flex", flexWrap: "wrap", gap: 14 }}>
              <Link href="/locations" className="btn-primary" style={{ fontSize: 15, padding: "14px 34px" }}>
                Explore Journeys
              </Link>
              <Link href="/planner" className="btn-emerald" style={{ fontSize: 15, padding: "14px 30px" }}>
                Build Your Route →
              </Link>
            </div>
          </div>

          {/* Slider Pagination */}
          <div style={{ display: "flex", alignItems: "center", gap: 14, marginTop: 52 }}>
            {SLIDES.map((_, i) => (
              <button key={i} onClick={() => go(i)} style={{ background: "none", border: "none", cursor: "pointer", padding: 0, display: "flex", alignItems: "center", gap: 10 }}>
                <div style={{ height: 3, borderRadius: 2, transition: "all 0.4s", backgroundColor: i === idx ? "#E8C568" : "rgba(255,255,255,0.4)", width: i === idx ? 48 : 18 }} />
                {i === idx && <span style={{ fontSize: 11, color: "#E8C568", fontWeight: 600, letterSpacing: "0.18em", textTransform: "uppercase" }}>{SLIDES[i].tag}</span>}
              </button>
            ))}
            <span style={{ marginLeft: "auto", fontSize: 13, color: "#E2EBE5", letterSpacing: "0.08em" }}>{String(idx + 1).padStart(2, "0")} / {String(SLIDES.length).padStart(2, "0")}</span>
          </div>
        </div>
      </section>

      {/* ══ STATS BAR ══ */}
      <div style={{ backgroundColor: "#EEF4F0", borderBottom: "1px solid #E2EBE5" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 24px", display: "grid", gridTemplateColumns: "repeat(4,1fr)" }} className="stats-bar">
          {[
            { val: "5,000+", label: "Happy Travellers", desc: "Private & small groups" },
            { val: "120+", label: "Curated Routes", desc: "Customized by experts" },
            { val: "15 Yrs", label: "Local Expertise", desc: "Certified naturalists" },
            { val: "9.8 / 10", label: "Guest Satisfaction", desc: "Based on 1,400+ reviews" },
          ].map(({ val, label, desc }, i) => (
            <div key={label} style={{ padding: "26px 16px", textAlign: "center", borderRight: i < 3 ? "1px solid #E2EBE5" : "none" }}>
              <p style={{ fontFamily: "'Fraunces',Georgia,serif", fontSize: 32, fontWeight: 600, color: "#C59B27", lineHeight: 1 }}>{val}</p>
              <p style={{ fontSize: 12, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.14em", color: "#1B3B2B", marginTop: 6 }}>{label}</p>
              <p style={{ fontSize: 11, color: "#52685C", marginTop: 2 }}>{desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* ══ FEATURES / HIGHLIGHTS ══ */}
      <section style={{ padding: "100px 24px", maxWidth: 1280, margin: "0 auto" }}>
        <div style={{ textAlign: "center", maxWidth: 640, margin: "0 auto 60px" }}>
          <span className="section-label">Why Ceylon Serendipity</span>
          <h2 className="section-title">Authentic Sri Lanka —<br /><em>curated with local passion.</em></h2>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 24 }} className="features-grid">
          {FEATURES.map(({ icon, title, desc }) => (
            <div key={title} className="card" style={{ padding: "32px 28px" }}>
              <div style={{ fontSize: 36, marginBottom: 16 }}>{icon}</div>
              <h3 style={{ fontFamily: "'Fraunces',Georgia,serif", fontSize: 20, fontWeight: 500, color: "#1B3B2B", marginBottom: 12 }}>{title}</h3>
              <p style={{ fontSize: 14, fontWeight: 300, lineHeight: 1.7, color: "#52685C" }}>{desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ══ DESTINATION TEASER ══ */}
      <section style={{ padding: "0 24px 100px", maxWidth: 1280, margin: "0 auto" }}>
        <div style={{ display: "flex", flexWrap: "wrap", gap: 16, justifyContent: "space-between", alignItems: "flex-end", marginBottom: 44 }}>
          <div>
            <span className="section-label">Discover Sri Lanka</span>
            <h2 className="section-title">Iconic <em>destinations</em></h2>
          </div>
          <Link href="/locations" className="btn-outline-gold">
            View All 24 Locations →
          </Link>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(2,1fr)", gap: 20 }} className="dest-grid">
          {featured.map((d) => (
            <div key={d.id} style={{ position: "relative", overflow: "hidden", borderRadius: 20, aspectRatio: "16/10", cursor: "pointer", border: "1px solid #E2EBE5", boxShadow: "0 8px 24px rgba(27,59,43,0.08)" }}
              onMouseEnter={e => { const img = e.currentTarget.querySelector("img") as HTMLImageElement; if (img) img.style.transform = "scale(1.06)"; }}
              onMouseLeave={e => { const img = e.currentTarget.querySelector("img") as HTMLImageElement; if (img) img.style.transform = "scale(1)"; }}
            >
              <img src={d.img} alt={d.alt} style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", transition: "transform 0.6s ease", backgroundColor: "#EEF4F0" }} />
              <div style={{ position: "absolute", inset: 0, background: "linear-gradient(180deg, transparent 40%, rgba(27,59,43,0.9) 100%)" }} />
              <div style={{ position: "absolute", top: 16, left: 16 }}>
                <span className="tag">{d.tag}</span>
              </div>
              <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, padding: "20px 24px", display: "flex", alignItems: "flex-end", justifyContent: "space-between" }}>
                <div>
                  <p style={{ fontSize: 12, color: "#E8C568", fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 3 }}>{d.subtitle}</p>
                  <h3 style={{ fontFamily: "'Fraunces',Georgia,serif", fontSize: 24, fontWeight: 500, color: "#FFFFFF" }}>{d.name}</h3>
                  <p style={{ fontSize: 13, color: "#E2EBE5", marginTop: 2 }}>{d.region}</p>
                </div>
                <Link href="/locations" style={{ width: 40, height: 40, borderRadius: "50%", backgroundColor: "#C59B27", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 16, color: "#FFFFFF", textDecoration: "none", flexShrink: 0, fontWeight: 700 }}>
                  →
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ══ BESPOKE JOURNEYS BANNER ══ */}
      <section style={{ position: "relative", padding: "120px 24px", overflow: "hidden" }}>
        <img src="https://images.unsplash.com/photo-1585171328560-947fbd92d6f0?w=1800&h=700&fit=crop&auto=format" alt="Rolling tea estates in Sri Lanka highlands" style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", filter: "brightness(0.35)" }} />
        <div style={{ position: "absolute", inset: 0, backgroundColor: "rgba(27,59,43,0.85)" }} />
        <div style={{ position: "relative", maxWidth: 1280, margin: "0 auto" }}>
          <div style={{ maxWidth: 560 }}>
            <span className="section-label" style={{ color: "#E8C568" }}>Bespoke Travel Planning</span>
            <h2 className="section-title" style={{ marginBottom: 18, color: "#FFFFFF" }}>Your itinerary,<br /><em style={{ color: "#E8C568" }}>crafted specifically for you.</em></h2>
            <p style={{ fontSize: 16, fontWeight: 300, color: "#E2EBE5", lineHeight: 1.75, marginBottom: 36 }}>No cookie-cutter trips. Our Sri Lankan travel designers collaborate directly with you to create a seamless journey tailored to your interests, timing, and travel pace.</p>
            <div style={{ display: "flex", gap: 14, flexWrap: "wrap" }}>
              <Link href="/planner" className="btn-primary" style={{ fontSize: 15, padding: "14px 32px" }}>
                Start Customizing →
              </Link>
              <Link href="/services" className="btn-ghost" style={{ fontSize: 15, padding: "14px 28px", color: "#FFFFFF", borderColor: "rgba(255,255,255,0.4)" }}>
                Explore Services
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ══ TESTIMONIALS ══ */}
      <section style={{ padding: "100px 24px", maxWidth: 1280, margin: "0 auto" }}>
        <div style={{ display: "flex", flexWrap: "wrap", gap: 14, justifyContent: "space-between", alignItems: "flex-end", marginBottom: 48 }}>
          <div>
            <span className="section-label">Guest Stories</span>
            <h2 className="section-title">Voices from <em>the island</em></h2>
          </div>
          <div style={{ display: "flex", gap: 10 }}>
            <button onClick={() => setTIdx(v => (v - 1 + TESTIMONIALS.length) % TESTIMONIALS.length)} style={{ width: 44, height: 44, borderRadius: "50%", border: "1px solid #CBD8D1", backgroundColor: "#FFFFFF", cursor: "pointer", color: "#1B3B2B", fontSize: 18, transition: "all 0.2s" }}>←</button>
            <button onClick={() => setTIdx(v => (v + 1) % TESTIMONIALS.length)} style={{ width: 44, height: 44, borderRadius: "50%", backgroundColor: "#1B3B2B", border: "none", cursor: "pointer", color: "#FFFFFF", fontSize: 18, fontWeight: 700 }}>→</button>
          </div>
        </div>
        
        <div style={{ display: "grid", gridTemplateColumns: "repeat(2,1fr)", gap: 20 }} className="test-grid">
          {TESTIMONIALS.map((t, i) => (
            <div key={i} onClick={() => setTIdx(i)} className="card" style={{ padding: "32px 30px", cursor: "pointer", borderColor: tIdx === i ? "#C59B27" : undefined, transform: tIdx === i ? "translateY(-4px)" : undefined }}>
              <Stars n={t.rating} />
              <p style={{ fontFamily: "'Fraunces',Georgia,serif", fontSize: 16, fontStyle: "italic", color: "#52685C", lineHeight: 1.75, margin: "16px 0 24px" }}>"{t.quote}"</p>
              <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
                <div style={{ width: 44, height: 44, borderRadius: "50%", backgroundColor: "#EEF4F0", border: "1.5px solid #C59B27", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 14, fontWeight: 700, color: "#1B3B2B", flexShrink: 0 }}>
                  {t.initials}
                </div>
                <div>
                  <p style={{ fontSize: 15, fontWeight: 600, color: "#1B3B2B" }}>{t.author}</p>
                  <p style={{ fontSize: 12, color: "#C59B27", fontWeight: 600 }}>{t.tour}</p>
                  <p style={{ fontSize: 12, color: "#52685C" }}>{t.origin}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ══ CTA SECTION ══ */}
      <section style={{ padding: "88px 24px", backgroundColor: "#EEF4F0", borderTop: "1px solid #E2EBE5", textAlign: "center" }}>
        <div style={{ maxWidth: 640, margin: "0 auto" }}>
          <span className="section-label" style={{ textAlign: "center" }}>Start Your Journey</span>
          <h2 className="section-title" style={{ marginBottom: 18 }}>Experience Sri Lanka <em>with those who call it home</em></h2>
          <p style={{ fontSize: 16, fontWeight: 300, color: "#52685C", lineHeight: 1.75, marginBottom: 38 }}>Connect with our Colombo travel concierges to design your private Sri Lanka itinerary today.</p>
          <div style={{ display: "flex", gap: 14, justifyContent: "center", flexWrap: "wrap" }}>
            <Link href="/planner" className="btn-primary" style={{ fontSize: 15, padding: "14px 36px" }}>
              Build Your Journey
            </Link>
            <Link href="/contact" className="btn-emerald" style={{ fontSize: 15, padding: "14px 32px" }}>
              Talk to a Concierge
            </Link>
          </div>
        </div>
      </section>

      <style>{`
        @media (max-width: 900px) {
          .features-grid { grid-template-columns: repeat(2,1fr) !important; }
          .test-grid { grid-template-columns: 1fr !important; }
        }
        @media (max-width: 640px) {
          .features-grid { grid-template-columns: 1fr !important; }
          .dest-grid { grid-template-columns: 1fr !important; }
          .stats-bar { grid-template-columns: repeat(2,1fr) !important; }
        }
      `}</style>
    </div>
  );
}
