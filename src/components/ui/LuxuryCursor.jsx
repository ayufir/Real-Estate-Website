import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function LuxuryCursor() {
  const cursorRef = useRef(null);
  const dotRef = useRef(null);

  useEffect(() => {
    const cursor = cursorRef.current;
    const dot = dotRef.current;

    window.addEventListener("mousemove", (e) => {
      gsap.to(cursor, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.35,
        ease: "power3.out",
      });

      gsap.to(dot, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.1,
      });
    });

    // Hover effect
    document.querySelectorAll("a, button").forEach((el) => {
      el.addEventListener("mouseenter", () => {
        gsap.to(cursor, {
          scale: 1.8,
          backgroundColor: "rgba(225,6,0,0.15)",
          borderColor: "#e10600",
        });
      });

      el.addEventListener("mouseleave", () => {
        gsap.to(cursor, {
          scale: 1,
          backgroundColor: "transparent",
          borderColor: "rgba(255,255,255,0.3)",
        });
      });
    });
  }, []);

  return (
    <>
      {/* Outer Ring */}
      <div
        ref={cursorRef}
        className="fixed top-0 left-0 w-12 h-12 rounded-full 
        border border-white/30 pointer-events-none z-[9999]
        -translate-x-1/2 -translate-y-1/2"
      />

      {/* Center Dot */}
      <div
        ref={dotRef}
        className="fixed top-0 left-0 w-2 h-2 bg-red-600 rounded-full
        pointer-events-none z-[9999]
        -translate-x-1/2 -translate-y-1/2"
      />
    </>
  );
}
