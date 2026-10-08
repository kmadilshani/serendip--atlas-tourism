"use client";

interface LogoProps {
  size?: "sm" | "md" | "lg";
  lightText?: boolean;
}

export default function Logo({ size = "md", lightText }: LogoProps) {
  const dimensions = {
    sm: { img: 36, title: 16, sub: 8, gap: 10 },
    md: { img: 44, title: 19, sub: 9.5, gap: 12 },
    lg: { img: 56, title: 24, sub: 11, gap: 14 },
  }[size];

  // Default text color for fresh light theme is deep forest green
  const textColor = lightText === true ? "#FFFFFF" : lightText === false ? "#1B3B2B" : "#1B3B2B";

  return (
    <div style={{ display: "inline-flex", alignItems: "center", gap: dimensions.gap, textDecoration: "none" }}>
      <div
        style={{
          width: dimensions.img,
          height: dimensions.img,
          borderRadius: "50%",
          overflow: "hidden",
          border: "1.5px solid #C59B27",
          boxShadow: "0 3px 12px rgba(27,59,43,0.12)",
          flexShrink: 0,
          backgroundColor: "#1B3B2B",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <img
          src="/images/logo.png"
          alt="Serendip Atlas Logo"
          style={{ width: "100%", height: "100%", objectFit: "cover" }}
        />
      </div>

      <div>
        <span
          style={{
            fontFamily: "'Fraunces', Georgia, serif",
            fontSize: dimensions.title,
            fontWeight: 600,
            color: textColor,
            lineHeight: 1.1,
            display: "block",
            letterSpacing: "-0.01em",
          }}
        >
          Serendip Atlas
        </span>
        <span
          style={{
            fontSize: dimensions.sub,
            fontWeight: 600,
            letterSpacing: "0.22em",
            textTransform: "uppercase",
            color: "#C59B27",
            display: "block",
            marginTop: 2,
          }}
        >
          Journeys · Sri Lanka
        </span>
      </div>
    </div>
  );
}
