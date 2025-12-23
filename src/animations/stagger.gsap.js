import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const staggerCards = (container) => {
  gsap.fromTo(
    container.children,
    {
      opacity: 0,
      y: 60,
    },
    {
      opacity: 1,
      y: 0,
      stagger: 0.15,
      duration: 1,
      ease: "power3.out",
      scrollTrigger: {
        trigger: container,
        start: "top 85%",
      },
    }
  );
};
