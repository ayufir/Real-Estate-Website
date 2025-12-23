import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { properties } from "../../data/properties.data";

gsap.registerPlugin(ScrollTrigger);

export default function HorizontalScroll() {
  const containerRef = useRef(null);
  const trackRef = useRef(null);

  useEffect(() => {
    let ctx;

    const timeout = setTimeout(() => {
      ctx = gsap.context(() => {
        const cards = gsap.utils.toArray(".hs-card");

        gsap.to(cards, {
          xPercent: -100 * (cards.length - 1),
          ease: "none",
          scrollTrigger: {
            trigger: containerRef.current,
            pin: true,
            scrub: 1,
            start: "top+=120 top",
            end: () => `+=${trackRef.current.scrollWidth * 0.6}`, // 🔥 SHORTER SCROLL
            invalidateOnRefresh: true,
          },
        });
      }, containerRef);

      ScrollTrigger.refresh();
    }, 300);

    return () => {
      clearTimeout(timeout);
      ctx && ctx.revert();
    };
  }, []);

  return (
    <section
      ref={containerRef}
      className="
        relative
        h-[65vh]            /* 🔥 FIXED HEIGHT */
        overflow-hidden
        bg-black
        flex items-center
      "
    >
      <div
        ref={trackRef}
        className="flex items-center h-full"
      >
        {properties.slice(0, 6).map((p) => (
          <div
            key={p.id}
            className="
              hs-card
              min-w-full
              flex
              justify-center
              items-center
              px-6
            "
          >
            <div
              className="
                glass
                p-6
                w-full
                max-w-3xl        /* 🔥 CARD SIZE SMALLER */
                border
                border-red-600/30
                rounded-2xl
              "
            >
              <img
                src={p.image}
                alt={p.name}
                className="
                  w-full
                  h-[280px]     /* 🔥 IMAGE HEIGHT REDUCED */
                  object-cover
                  rounded-xl
                  mb-4
                "
              />

              <h3 className="text-2xl font-semibold">
                {p.name}
              </h3>
              <p className="opacity-70 text-sm">
                {p.location}
              </p>
              <p className="text-red-500 text-lg mt-1">
                {p.price}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
