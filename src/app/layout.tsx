import type { Metadata } from "next";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "../index.css";

export const metadata: Metadata = {
  title: "Serendip Atlas — Bespoke Sri Lanka Journeys",
  description: "Small-group and private travel in Sri Lanka. Tailored itineraries, UNESCO heritage, wildlife safaris, tea highlands, and tropical coastlines.",
  keywords: "Sri Lanka travel, Sri Lanka tourism, tour operator Sri Lanka, tailor-made trips Ceylon, Sigiriya, Ella train, Galle fort, Yala safari",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,300..800;1,9..144,300..800&family=Outfit:wght@300;400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
