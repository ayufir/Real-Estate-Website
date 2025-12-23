// import { Routes, Route } from "react-router-dom";

// import Home from "../pages/Home";
// import Properties from "../pages/Properties";
// import PropertyDetails from "../pages/PropertyDetails";
// import About from "../pages/About";
// import Contact from "../pages/Contact";
// import Compare from "../pages/Compare"; // ✅ ADD THIS

// export default function AppRoutes() {
//   return (
//     <Routes>
//       <Route path="/" element={<Home />} />
//       <Route path="/properties" element={<Properties />} />
//       <Route path="/properties/:id" element={<PropertyDetails />} />
//       <Route path="/compare" element={<Compare />} /> {/* ✅ ADDED */}
//       <Route path="/about" element={<About />} />
//       <Route path="/contact" element={<Contact />} />
//     </Routes>
//   );
// }


import { Routes, Route } from "react-router-dom";

import Home from "../pages/Home";
import Properties from "../pages/Properties";
import PropertyDetails from "../pages/PropertyDetails";
import Compare from "../pages/Compare";
import Projects from "../pages/Projects"; // ✅ PROJECTS PAGE
import About from "../pages/About";
import Contact from "../pages/Contact";

export default function AppRoutes() {
  return (
    <Routes>
      {/* ================= MAIN PAGES ================= */}
      <Route path="/" element={<Home />} />

      <Route path="/properties" element={<Properties />} />
      <Route path="/properties/:id" element={<PropertyDetails />} />

      {/* ================= EXTRA FEATURES ================= */}
      <Route path="/compare" element={<Compare />} />
      <Route path="/projects" element={<Projects />} /> {/* ✅ ADDED */}

      {/* ================= STATIC PAGES ================= */}
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  );
}
