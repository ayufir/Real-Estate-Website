import gsap from "gsap";

export const heroGsap = (title, text, buttons) => {
  const tl = gsap.timeline({ delay: 0.3 });

  tl.from(title, {
    y: 120,
    opacity: 0,
    filter: "blur(10px)",
    duration: 1.4,
    ease: "power4.out",
  })
    .from(
      text,
      {
        y: 80,
        opacity: 0,
        filter: "blur(8px)",
        duration: 1.2,
        ease: "power4.out",
      },
      "-=0.8"
    )
    .from(
      buttons,
      {
        y: 60,
        opacity: 0,
        duration: 1,
        ease: "power4.out",
      },
      "-=0.6"
    );
};
