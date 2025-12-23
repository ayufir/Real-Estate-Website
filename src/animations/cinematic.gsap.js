import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

/**
 * Luxury cinematic scroll reveal
 */
export const cinematicReveal = (elements) => {
  gsap.fromTo(
    elements,
    {
      y: 120,
      opacity: 0,
      filter: "blur(10px)",
    },
    {
      y: 0,
      opacity: 1,
      filter: "blur(0px)",
      duration: 1.4,
      ease: "power4.out",
      stagger: 0.15,
      scrollTrigger: {
        trigger: elements[0],
        start: "top 85%",
        toggleActions: "play none none reverse",
      },
    }
  );
};

/**
 * Background slow parallax
 */
export const backgroundParallax = (el) => {
  gsap.to(el, {
    yPercent: 20,
    ease: "none",
    scrollTrigger: {
      trigger: el,
      start: "top bottom",
      end: "bottom top",
      scrub: true,
    },
  });
};
