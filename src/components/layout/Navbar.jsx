import { Link, NavLink } from "react-router-dom";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  // ================= SCROLL DETECTION =================
  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className={`
        fixed top-0 w-full z-50 transition-all duration-300
        ${
          scrolled
            ? "bg-black/90 backdrop-blur-xl py-3 shadow-2xl"
            : "bg-black/50 backdrop-blur-md py-5"
        }
        border-b border-white/10
      `}
    >
      <div className="max-w-7xl mx-auto px-10 flex items-center justify-between">

        {/* ================= LOGO ================= */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          <Link
            to="/"
            className="text-2xl font-extrabold tracking-wide"
          >
            <span className="text-red-600">LUX</span>ESTATE
          </Link>
        </motion.div>

        {/* ================= NAV LINKS ================= */}
        <div className="hidden md:flex items-center gap-10 text-xs uppercase tracking-widest">
          <NavItem to="/">Home</NavItem>
          <NavItem to="/properties">Properties</NavItem>
          <NavItem to="/projects">Projects</NavItem> {/* ✅ ADDED */}
          <NavItem to="/about">About</NavItem>
          <NavItem to="/contact">Contact</NavItem>
        </div>

        {/* ================= CTA ================= */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="hidden md:block"
        >
          <Link
            to="/contact"
            className="
              px-6 py-3 rounded-xl text-xs font-semibold uppercase tracking-widest
              border border-red-600 text-red-500
              hover:bg-red-600 hover:text-white
              transition-all duration-300
            "
          >
            Private Consultation
          </Link>
        </motion.div>

      </div>
    </motion.nav>
  );
}

/* ================= NAV ITEM ================= */

function NavItem({ to, children }) {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        `
        relative transition-all duration-300
        ${
          isActive
            ? "text-red-500"
            : "text-white/80 hover:text-white"
        }
        after:absolute after:-bottom-1 after:left-0
        after:h-[2px] after:w-0 after:bg-red-600
        after:transition-all after:duration-300
        hover:after:w-full
        ${isActive ? "after:w-full" : ""}
        `
      }
    >
      {children}
    </NavLink>
  );
}
