import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

// 🔹 Simple reveal animation (used in Home, About, Contact)
export const reveal = (el) => {
  if (!el) return;

  gsap.from(el, {
    y: 80,
    opacity: 0,
    duration: 1.1,
    ease: "power3.out",
    scrollTrigger: {
      trigger: el,
      start: "top 85%",
    },
  });
};

// 🔹 Parallax image effect (future use)
export const parallaxImage = (el) => {
  if (!el) return;

  gsap.to(el, {
    yPercent: -20,
    ease: "none",
    scrollTrigger: {
      trigger: el,
      start: "top bottom",
      scrub: true,
    },
  });
};
