import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function LuxuryCursor() {
  const cursor = useRef(null);
  const follower = useRef(null);

  useEffect(() => {
    const move = (e) => {
      gsap.to(cursor.current, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.15,
      });

      gsap.to(follower.current, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.35,
      });
    };

    window.addEventListener("mousemove", move);

    return () => window.removeEventListener("mousemove", move);
  }, []);

  return (
    <>
      <div
        ref={follower}
        className="fixed top-0 left-0 w-12 h-12 rounded-full
        border border-yellow-500 pointer-events-none z-[9998]"
      />
      <div
        ref={cursor}
        className="fixed top-0 left-0 w-2.5 h-2.5 rounded-full
        bg-yellow-400 pointer-events-none z-[9999]"
      />
    </>
  );
}
