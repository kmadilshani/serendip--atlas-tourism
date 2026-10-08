"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Logo from "./Logo";

const LINKS = [
  { label: "Home", path: "/" },
  { label: "About", path: "/about" },
  { label: "Services", path: "/services" },
  { label: "Locations", path: "/locations" },
  { label: "Contact", path: "/contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname() || "/";
  const isHome = pathname === "/";

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", fn, { passive: true });
    fn();
    return () => window.removeEventListener("scroll", fn);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  const solid = !isHome || scrolled;
  // If transparent hero, text is white; if scrolled or non-home, text is deep forest
  const navTextLight = !solid && isHome;

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50"
      style={{
        backgroundColor: solid ? "rgba(13, 29, 18, 0.96)" : "transparent",
        backdropFilter: solid ? "blur(16px)" : "none",
        borderBottom: solid ? "1px solid #0f1805ff" : "none",
        boxShadow: solid ? "0 4px 20px rgba(27,59,43,0.06)" : "none",
        transition: "all 0.35s ease",
      }}
    >
      <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 24px", height: 76, display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        {/* Brand Logo */}
        <Link href="/" style={{ textDecoration: "none" }}>
          <Logo size="md" lightText={navTextLight} />
        </Link>

        {/* Desktop Navigation */}
        <nav style={{ display: "flex", alignItems: "center", gap: 32 }} className="hidden-mobile">
          {LINKS.map(({ label, path }) => {
            const isActive = pathname === path;
            return (
              <Link
                key={path}
                href={path}
                style={{
                  fontSize: 14,
                  fontWeight: 600,
                  textDecoration: "none",
                  color: isActive ? "#C59B27" : navTextLight ? "#FFFFFF" : "#1B3B2B",
                  borderBottom: isActive ? "2px solid #C59B27" : "2px solid transparent",
                  paddingBottom: 4,
                  transition: "color 0.2s, border-color 0.2s",
                }}
              >
                {label}
              </Link>
            );
          })}
        </nav>

        {/* Action Buttons - Simple Single Colors */}
        <div style={{ display: "flex", gap: 12, alignItems: "center" }} className="hidden-mobile">
          <Link href="/planner" className="btn-outline-gold">
            Trip Planner
          </Link>
          <Link href="/contact" className="btn-emerald" style={{ fontSize: 13, padding: "10px 24px" }}>
            Talk to a Local
          </Link>
        </div>

        {/* Mobile menu button */}
        <button
          onClick={() => setOpen(v => !v)}
          aria-label="Toggle menu"
          style={{ background: "none", border: "none", cursor: "pointer", color: navTextLight ? "#FFFFFF" : "#1B3B2B", padding: 8, display: "none" }}
          className="show-mobile"
        >
          <svg width="26" height="26" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            {open
              ? <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              : <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />}
          </svg>
        </button>
      </div>

      {/* Mobile Drawer */}
      {open && (
        <div style={{ backgroundColor: "#F7F5F0", borderTop: "1px solid #E2EBE5", padding: "16px 24px 28px" }}>
          {LINKS.map(({ label, path }) => {
            const isActive = pathname === path;
            return (
              <Link
                key={path}
                href={path}
                style={{
                  display: "block", padding: "14px 0", fontSize: 16, fontWeight: 600,
                  color: isActive ? "#C59B27" : "#1B3B2B", textDecoration: "none",
                  borderBottom: "1px solid #E2EBE5",
                }}
              >
                {label}
              </Link>
            );
          })}
          <Link href="/planner" style={{ display: "block", padding: "14px 0", fontSize: 16, fontWeight: 600, color: "#C59B27", textDecoration: "none", borderBottom: "1px solid #E2EBE5" }}>
            Trip Planner
          </Link>
          <Link href="/contact" className="btn-emerald" style={{ marginTop: 20, width: "100%", justifyContent: "center" }}>
            Talk to a Local
          </Link>
        </div>
      )}

      <style>{`
        @media (max-width: 820px) {
          .hidden-mobile { display: none !important; }
          .show-mobile { display: block !important; }
        }
        @media (min-width: 821px) {
          .show-mobile { display: none !important; }
        }
      `}</style>
    </header>
  );
}
