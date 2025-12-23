import gsap from "gsap";

export const pageTransition = (el) => {
  gsap.from(el, {
    opacity: 0,
    y: 40,
    duration: 0.8,
    ease: "power2.out",
  });
};
