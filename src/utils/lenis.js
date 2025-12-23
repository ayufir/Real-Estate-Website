import { useEffect, useState } from "react";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import AppRoutes from "./routes/AppRoutes";
import LuxuryCursor from "./components/common/LuxuryCursor";
import Loader from "./components/common/Loader";
import WhatsAppFloat from "./components/common/WhatsAppFloat";
import SocialBar from "./components/common/SocialBar";
import initLenis from "./utils/lenis";

import "./styles/glass.css";
import "./styles/global.css";

export default function App() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    initLenis();
    const timer = setTimeout(() => setLoaded(true), 1800);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <Loader done={loaded} />

      {loaded && (
        <>
          <LuxuryCursor />

          <Navbar />
          <AppRoutes />
          <Footer />

          <WhatsAppFloat />
          <SocialBar />
        </>
      )}
    </>
  );
}
