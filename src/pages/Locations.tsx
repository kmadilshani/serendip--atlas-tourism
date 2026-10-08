"use client";
import { useState } from "react";
import Link from "next/link";
import { DESTINATIONS } from "../data";

const REGIONS = [
  "All Regions",
  "Cultural Triangle",
  "Hill Country",
  "Southern Coast",
  "Central Province",
  "Sabaragamuwa",
  "North Central",
  "Central Highlands"
];

export default function Locations() {
  const [region, setRegion] = useState("All Regions");
  const [view, setView] = useState<"grid" | "list">("grid");
  const [expanded, setExpanded] = useState<string | null>(null);

  const filtered = region === "All Regions" ? DESTINATIONS : DESTINATIONS.filter(d => d.region === region);

  return (
    <div style={{ backgroundColor: "#091305ff", paddingTop: 76 }}>

      {/* ══ PAGE HERO ══ */}
      <section style={{ position: "relative", overflow: "hidden" }}>
        <img src="https://images.unsplash.com/photo-1578517929034-db013fd86597?w=1800&h=560&fit=crop&auto=format" alt="Lush green Sri Lanka highland tea estates" style={{ width: "100%", height: 440, objectFit: "cover", display: "block", filter: "brightness(0.35)" }} />
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(180deg, rgba(27,59,43,0.6) 0%, rgba(247,245,240,1) 100%)" }} />
        <div style={{ position: "absolute", inset: 0, display: "flex", alignItems: "center", padding: "0 24px" }}>
          <div style={{ maxWidth: 1280, margin: "0 auto", width: "100%" }}>
            <span className="section-label" style={{ color: "#E8C568" }}>Explore Sri Lanka</span>
            <h1 style={{ fontFamily: "'Fraunces',Georgia,serif", fontSize: "clamp(40px,6vw,72px)", fontWeight: 400, color: "#1B3B2B", lineHeight: 1.05, maxWidth: 640 }}>
              24 destinations,<br /><em style={{ fontStyle: "italic", fontWeight: 500, color: "#C59B27" }}>one vibrant island.</em>
            </h1>
            <p style={{ fontSize: 16, fontWeight: 300, color: "#52685C", marginTop: 18, lineHeight: 1.7, maxWidth: 500 }}>
              Ancient rock fortresses, wildlife sanctuaries, colonial coastal forts, and misty highland tea valleys.
            </p>
          </div>
        </div>
      </section>

      {/* ══ FILTERS + VIEW TOGGLE ══ */}
      <div style={{ backgroundColor: "#EEF4F0", borderBottom: "1px solid #E2EBE5", padding: "16px 24px", position: "sticky", top: 76, zIndex: 40 }}>
        <div style={{ maxWidth: 1280, margin: "0 auto", display: "flex", flexWrap: "wrap", gap: 10, justifyContent: "space-between", alignItems: "center" }}>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
            {REGIONS.map(r => (
              <button
                key={r}
                onClick={() => setRegion(r)}
                style={{
                  fontSize: 13,
                  fontWeight: 600,
                  padding: "8px 18px",
                  borderRadius: 999,
                  cursor: "pointer",
                  transition: "all 0.2s",
                  backgroundColor: region === r ? "#1B3B2B" : "#FFFFFF",
                  color: region === r ? "#FFFFFF" : "#52685C",
                  border: region === r ? "none" : "1px solid #CBD8D1",
                }}
              >
                {r}
              </button>
            ))}
          </div>
          <div style={{ display: "flex", gap: 6 }}>
            {(["grid", "list"] as const).map(v => (
              <button
                key={v}
                onClick={() => setView(v)}
                style={{
                  width: 38,
                  height: 38,
                  borderRadius: 8,
                  border: "1px solid #CBD8D1",
                  backgroundColor: view === v ? "#1B3B2B" : "#FFFFFF",
                  cursor: "pointer",
                  color: view === v ? "#FFFFFF" : "#52685C",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: 16
                }}
              >
                {v === "grid" ? "Grid" : "List"}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* ══ DESTINATIONS ══ */}
      <section style={{ padding: "52px 24px 96px", maxWidth: 1280, margin: "0 auto" }}>
        <p style={{ fontSize: 13, color: "#52685C", marginBottom: 28 }}>
          Showing <strong style={{ color: "#C59B27" }}>{filtered.length}</strong> destination{filtered.length !== 1 ? "s" : ""}{region !== "All Regions" ? ` in ${region}` : ""}
        </p>

        {view === "grid" ? (
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 24 }} className="dest-grid">
            {filtered.map(d => (
              <div key={d.id} className="card" style={{ overflow: "hidden", cursor: "pointer" }}>
                {/* Image */}
                <div style={{ position: "relative", height: 210, overflow: "hidden" }}>
                  <img src={d.img} alt={d.alt} style={{ width: "100%", height: "100%", objectFit: "cover", display: "block", backgroundColor: "#EEF4F0" }} />
                  <div style={{ position: "absolute", inset: 0, background: "linear-gradient(180deg, transparent 55%, rgba(27,59,43,0.9) 100%)" }} />
                  <div style={{ position: "absolute", top: 14, left: 14 }}>
                    <span className="tag">{d.tag}</span>
                  </div>
                  <div style={{ position: "absolute", bottom: 12, left: 16, right: 16, display: "flex", justifyContent: "space-between", alignItems: "flex-end" }}>
                    <div>
                      <p style={{ fontSize: 11, color: "#E8C568", fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase" }}>{d.region}</p>
                      <h3 style={{ fontFamily: "'Fraunces',Georgia,serif", fontSize: 22, fontWeight: 500, color: "#FFFFFF" }}>{d.name}</h3>
                    </div>
                    <div style={{ textAlign: "right" }}>
                      <p style={{ fontSize: 12, color: "#E8C568", fontWeight: 600 }}>{d.tours} tours</p>
                    </div>
                  </div>
                </div>

                {/* Body */}
                <div style={{ padding: "20px 22px 22px" }}>
                  <p style={{ fontSize: 13, color: "#52685C", fontWeight: 300, lineHeight: 1.7, marginBottom: 16 }}>{d.description}</p>
                  <div style={{ display: "flex", flexWrap: "wrap", gap: 6, marginBottom: 18 }}>
                    {d.highlights.slice(0, 3).map(h => (
                      <span key={h} style={{ fontSize: 11, padding: "4px 10px", borderRadius: 999, backgroundColor: "#EEF4F0", color: "#1B3B2B", border: "1px solid #E2EBE5" }}>· {h}</span>
                    ))}
                  </div>
                  <div style={{ display: "flex", gap: 8, justifyContent: "space-between", alignItems: "center", paddingTop: 14, borderTop: "1px solid #E2EBE5" }}>
                    <div style={{ display: "flex", gap: 14 }}>
                      <span style={{ fontSize: 12, color: "#52685C" }}>⏱ {d.duration}</span>
                      <span style={{ fontSize: 12, color: "#52685C" }}>Best · {d.bestMonth}</span>
                    </div>
                    <Link href="/contact" className="btn-emerald" style={{ fontSize: 12, padding: "8px 18px" }}>
                      Explore →
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          /* LIST VIEW */
          <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
            {filtered.map(d => (
              <div key={d.id} style={{ borderRadius: 16, backgroundColor: "#FFFFFF", border: `1px solid ${expanded === d.id ? "#C59B27" : "#E2EBE5"}`, overflow: "hidden" }}>
                <div
                  style={{ display: "grid", gridTemplateColumns: "220px 1fr auto", gap: 0, cursor: "pointer", alignItems: "stretch" }}
                  onClick={() => setExpanded(expanded === d.id ? null : d.id)}
                  className="list-row"
                >
                  <div style={{ position: "relative", height: 130, overflow: "hidden" }}>
                    <img src={d.img} alt={d.alt} style={{ width: "100%", height: "100%", objectFit: "cover", display: "block", backgroundColor: "#EEF4F0" }} />
                  </div>
                  <div style={{ padding: "18px 24px", display: "flex", flexDirection: "column", justifyContent: "center", gap: 6 }}>
                    <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                      <h3 style={{ fontFamily: "'Fraunces',Georgia,serif", fontSize: 20, fontWeight: 500, color: "#1B3B2B" }}>{d.name}</h3>
                      <span className="tag">{d.tag}</span>
                    </div>
                    <p style={{ fontSize: 13, color: "#C59B27", fontWeight: 600 }}>{d.region} · {d.subtitle}</p>
                    <p style={{ fontSize: 13, color: "#52685C", fontWeight: 300, lineHeight: 1.6 }}>{d.description.slice(0, 110)}…</p>
                  </div>
                  <div style={{ padding: "18px 24px", display: "flex", flexDirection: "column", alignItems: "flex-end", justifyContent: "center", gap: 8, flexShrink: 0 }}>
                    <p style={{ fontSize: 13, fontWeight: 600, color: "#1B3B2B" }}>{d.tours} Tours</p>
                    <p style={{ fontSize: 12, color: "#52685C" }}>Best: {d.bestMonth}</p>
                  </div>
                </div>
                {expanded === d.id && (
                  <div style={{ padding: "0 24px 24px", borderTop: "1px solid #E2EBE5" }}>
                    <div style={{ paddingTop: 18, display: "flex", flexWrap: "wrap", gap: 8, marginBottom: 16 }}>
                      {d.highlights.map(h => <span key={h} style={{ fontSize: 12, padding: "4px 12px", borderRadius: 999, backgroundColor: "#EEF4F0", color: "#1B3B2B", border: "1px solid #E2EBE5" }}>· {h}</span>)}
                    </div>
                    <Link href="/contact" className="btn-emerald" style={{ fontSize: 13, padding: "10px 24px" }}>
                      Explore {d.name} →
                    </Link>
                  </div>
                )}
              </div>
            ))}
          </div>
        )}
      </section>

      {/* ══ CTA ══ */}
      <section style={{ backgroundColor: "#EEF4F0", borderTop: "1px solid #E2EBE5", padding: "72px 24px", textAlign: "center" }}>
        <div style={{ maxWidth: 540, margin: "0 auto" }}>
          <h2 className="section-title" style={{ marginBottom: 14 }}>Can't decide? <em>Let us guide you.</em></h2>
          <p style={{ fontSize: 15, fontWeight: 300, color: "#52685C", lineHeight: 1.75, marginBottom: 30 }}>Tell us your ideal travel style and we will build a personalized list for you.</p>
          <Link href="/contact" className="btn-primary" style={{ fontSize: 15, padding: "14px 36px" }}>
            Talk to a Specialist
          </Link>
        </div>
      </section>

      <style>{`
        @media (max-width: 960px) {
          .dest-grid { grid-template-columns: repeat(2,1fr) !important; }
        }
        @media (max-width: 600px) {
          .dest-grid { grid-template-columns: 1fr !important; }
          .list-row { grid-template-columns: 1fr !important; }
          .list-row > *:first-child { height: 160px !important; }
        }
      `}</style>
    </div>
  );
}
