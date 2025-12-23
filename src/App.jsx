// // import { useEffect, useState } from "react";
// // import Navbar from "./components/layout/Navbar";
// // import Footer from "./components/layout/Footer";
// // import AppRoutes from "./routes/AppRoutes";
// // import Cursor from "./components/common/Cursor";
// // import Loader from "./components/common/Loader";
// // import WhatsAppFloat from "./components/common/WhatsAppFloat";
// // import SocialBar from "./components/common/SocialBar";

// // import "./styles/glass.css";
// // import "./styles/global.css";

// // export default function App() {
// //   const [loaded, setLoaded] = useState(false);

// //   useEffect(() => {
// //     const timer = setTimeout(() => setLoaded(true), 2000);
// //     return () => clearTimeout(timer);
// //   }, []);

// //   return (
// //     <>
// //       {/* PAGE LOADER */}
// //       <Loader done={loaded} />

// //       {loaded && (
// //         <>
// //           {/* CUSTOM CURSOR */}
// //           <Cursor />
// //           <LuxuryCursor />

// //           {/* MAIN LAYOUT */}
// //           <Navbar />
// //           <AppRoutes />
// //           <Footer />

// //           {/* GLOBAL BUSINESS FEATURES */}
// //           <WhatsAppFloat />
// //           <SocialBar />
// //         </>
// //       )}
// //     </>
// //   );
// // }





// import { useEffect, useState } from "react";

// import Navbar from "./components/layout/Navbar";
// import Footer from "./components/layout/Footer";
// import AppRoutes from "./routes/AppRoutes";

// import LuxuryCursor from "./components/ui/LuxuryCursor"; // ✅ NEW CURSOR
// import Loader from "./components/common/Loader";
// import WhatsAppFloat from "./components/common/WhatsAppFloat";
// import SocialBar from "./components/common/SocialBar";

// import "./styles/glass.css";
// import "./styles/global.css";

// export default function App() {
//   const [loaded, setLoaded] = useState(false);

//   useEffect(() => {
//     const timer = setTimeout(() => setLoaded(true), 1800); // smooth intro
//     return () => clearTimeout(timer);
//   }, []);

//   return (
//     <>
//       {/* ================= PAGE LOADER ================= */}
//       <Loader done={loaded} />

//       {loaded && (
//         <>
//           {/* ================= LUXURY CURSOR ================= */}
//           <LuxuryCursor />

//           {/* ================= MAIN LAYOUT ================= */}
//           <Navbar />
//           <AppRoutes />
//           <Footer />

//           {/* ================= GLOBAL CTA ================= */}
//           <WhatsAppFloat />
//           <SocialBar />
//         </>
//       )}
//     </>
//   );
// }





import { useEffect, useState } from "react";

/* ================= LAYOUT ================= */
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import AppRoutes from "./routes/AppRoutes";

/* ================= UI / GLOBAL ================= */
import LuxuryCursor from "./components/ui/LuxuryCursor";
import Loader from "./components/common/Loader";
import WhatsAppFloat from "./components/common/WhatsAppFloat";
import SocialBar from "./components/common/SocialBar";

/* ================= STYLES ================= */
import "./styles/glass.css";
import "./styles/global.css";

export default function App() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoaded(true);
    }, 1800); // smooth luxury intro

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {/* ================= PAGE LOADER ================= */}
      <Loader done={loaded} />

      {loaded && (
        <>
          {/* ================= LUXURY CURSOR ================= */}
          <LuxuryCursor />

          {/* ================= MAIN APP ================= */}
          <Navbar />
          <AppRoutes />
          <Footer />

          {/* ================= FLOATING CTAs ================= */}
          <WhatsAppFloat />
          <SocialBar />
        </>
      )}
    </>
  );
}
