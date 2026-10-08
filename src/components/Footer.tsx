"use client";
import Link from "next/link";
import Logo from "./Logo";

const QUICK = [
  { label: "Home", path: "/" },
  { label: "About Us", path: "/about" },
  { label: "Services", path: "/services" },
  { label: "Locations", path: "/locations" },
  { label: "Contact", path: "/contact" },
  { label: "Trip Planner", path: "/planner" },
];

const SERVICES_LIST = [
  "Tour Packages",
  "Hotel Booking",
  "Private Transport",
  "Guided Tours",
  "Wildlife Safaris",
  "Wellness Retreats"
];

export default function Footer() {
  return (
    <footer style={{ backgroundColor: "#021a0aff", borderTop: "1px solid #E2EBE5", paddingTop: 72, paddingBottom: 36 }}>
      <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 24px" }}>
        {/* Top grid */}
        <div style={{ display: "grid", gridTemplateColumns: "2fr 1fr 1fr 1.4fr", gap: 40, paddingBottom: 48, borderBottom: "1px solid #CBD8D1" }} className="footer-grid">
          {/* Brand */}
          <div>
            <Link href="/" style={{ textDecoration: "none", display: "inline-block", marginBottom: 18 }}>
              <Logo size="md" lightText={false} />
            </Link>
            <p style={{ fontSize: 14, fontWeight: 300, color: "#52685C", lineHeight: 1.8, marginBottom: 24, maxWidth: 300 }}>
              Authentic small-group and bespoke Sri Lanka journeys curated by certified local naturalists and travel experts.
            </p>
            <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
              {[
                { name: "Instagram", url: "#" },
                { name: "Facebook", url: "#" },
                { name: "TripAdvisor", url: "#" },
                { name: "YouTube", url: "#" },
              ].map(({ name, url }) => (
                <a
                  key={name}
                  href={url}
                  style={{
                    fontSize: 12, fontWeight: 600, padding: "6px 14px", borderRadius: 999,
                    backgroundColor: "#FFFFFF", color: "#1B3B2B", textDecoration: "none",
                    border: "1px solid #CBD8D1", transition: "all 0.2s"
                  }}
                  onMouseEnter={e => {
                    e.currentTarget.style.backgroundColor = "#1B3B2B";
                    e.currentTarget.style.color = "#FFFFFF";
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.backgroundColor = "#FFFFFF";
                    e.currentTarget.style.color = "#1B3B2B";
                  }}
                >{name}</a>
              ))}
            </div>
          </div>

          {/* Quick links */}
          <div>
            <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase", color: "#C59B27", marginBottom: 20 }}>Navigation</p>
            {QUICK.map(({ label, path }) => (
              <Link key={path} href={path} style={{ display: "block", fontSize: 14, fontWeight: 500, color: "#52685C", textDecoration: "none", marginBottom: 12, transition: "color 0.2s" }}
                onMouseEnter={e => (e.currentTarget.style.color = "#1B3B2B")}
                onMouseLeave={e => (e.currentTarget.style.color = "#52685C")}
              >{label}</Link>
            ))}
          </div>

          {/* Services */}
          <div>
            <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase", color: "#C59B27", marginBottom: 20 }}>Services</p>
            {SERVICES_LIST.map(s => (
              <Link key={s} href="/services" style={{ display: "block", fontSize: 14, fontWeight: 500, color: "#52685C", textDecoration: "none", marginBottom: 12, transition: "color 0.2s" }}
                onMouseEnter={e => (e.currentTarget.style.color = "#1B3B2B")}
                onMouseLeave={e => (e.currentTarget.style.color = "#52685C")}
              >{s}</Link>
            ))}
          </div>

          {/* Contact */}
          <div>
            <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase", color: "#C59B27", marginBottom: 20 }}>Get In Touch</p>
            {[
              { icon: "✉", text: "ayubowan@serendipatlas.lk" },
              { icon: "☎", text: "+94 11 268 7744" },
              { icon: "📍", text: "18 Alfred House Gardens, Colombo 03, Sri Lanka" },
              { icon: "🕒", text: "Mon–Sat 8:30am – 6:30pm SLST" },
            ].map(({ icon, text }) => (
              <div key={text} style={{ display: "flex", alignItems: "flex-start", gap: 12, marginBottom: 14 }}>
                <span style={{ fontSize: 14, color: "#C59B27", flexShrink: 0, marginTop: 1 }}>{icon}</span>
                <span style={{ fontSize: 13, fontWeight: 400, color: "#52685C", lineHeight: 1.5 }}>{text}</span>
              </div>
            ))}
            <Link href="/contact" className="btn-emerald" style={{ marginTop: 12, fontSize: 13, padding: "10px 24px" }}>
              Contact Us
            </Link>
          </div>
        </div>

        {/* Bottom bar */}
        <div style={{ paddingTop: 28, display: "flex", flexWrap: "wrap", gap: 14, justifyContent: "space-between", alignItems: "center" }}>
          <p style={{ fontSize: 13, color: "#52685C", fontWeight: 400 }}>© 2026 Serendip Atlas Journeys (Pvt) Ltd. All rights reserved.</p>
          <div style={{ display: "flex", gap: 24, flexWrap: "wrap" }}>
            {["Privacy Policy", "Terms of Service", "Cookie Policy"].map(item => (
              <a key={item} href="#" style={{ fontSize: 13, color: "#52685C", textDecoration: "none", transition: "color 0.2s" }}
                onMouseEnter={e => (e.currentTarget.style.color = "#1B3B2B")}
                onMouseLeave={e => (e.currentTarget.style.color = "#52685C")}
              >{item}</a>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .footer-grid { grid-template-columns: 1fr 1fr !important; }
        }
        @media (max-width: 540px) {
          .footer-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </footer>
  );
}
