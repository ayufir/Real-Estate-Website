import gsap from "gsap";
import { useEffect } from "react";

export default function Loader({ done }) {
  useEffect(() => {
    gsap.from(".loader-text", {
      y: 100,
      opacity: 0,
      duration: 1.5,
      ease: "power4.out",
    });
  }, []);

  if (done) return null;

  return (
    <div className="fixed inset-0 bg-black flex items-center justify-center z-50">
      <h1 className="loader-text text-6xl font-bold text-red-600">
        LUXESTATE
      </h1>
    </div>
  );
}
