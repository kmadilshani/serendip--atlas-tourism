import { Outlet, ScrollRestoration } from "react-router";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Root() {
  return (
    <>
      <ScrollRestoration />
      <Navbar />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
}
