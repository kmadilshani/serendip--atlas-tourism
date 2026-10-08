import { createBrowserRouter } from "react-router";
import Root from "./pages/Root";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Locations from "./pages/Locations";
import Contact from "./pages/Contact";
import Planner from "./pages/Planner";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      { index: true, Component: Home },
      { path: "about", Component: About },
      { path: "services", Component: Services },
      { path: "locations", Component: Locations },
      { path: "contact", Component: Contact },
      { path: "planner", Component: Planner },
    ],
  },
]);
