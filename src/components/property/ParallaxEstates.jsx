import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { properties } from "../../data/properties.data";
import { useNavigate } from "react-router-dom";

gsap.registerPlugin(ScrollTrigger);

export default function ParallaxEstates() {
  const sectionRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    const ctx = gsap.context(() => {
      const panels = gsap.utils.toArray(".estate-panel");

      panels.forEach((panel) => {
        const image = panel.querySelector(".estate-image");
        const content = panel.querySelector(".estate-content");

        gsap.fromTo(
          image,
          { scale: 1.15 },
          {
            scale: 1,
            scrollTrigger: {
              trigger: panel,
              start: "top bottom",
              end: "bottom top",
              scrub: true,
            },
          }
        );

        gsap.from(content, {
          y: 120,
          opacity: 0,
          ease: "power3.out",
          scrollTrigger: {
            trigger: panel,
            start: "top 65%",
            end: "top 40%",
            scrub: true,
          },
        });
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="w-full">
      {properties.slice(0, 5).map((p) => (
        <div
          key={p.id}
          className="estate-panel relative h-screen w-full overflow-hidden"
        >
          {/* IMAGE */}
          <img
            src={p.image}
            alt={p.name}
            className="estate-image absolute inset-0 w-full h-full object-cover"
          />

          {/* OVERLAY */}
          <div className="absolute inset-0 bg-black/60" />

          {/* CONTENT */}
          <div className="estate-content relative z-10 h-full flex items-center">
            <div className="max-w-5xl px-10">
              <p className="uppercase tracking-widest text-sm opacity-70 mb-4">
                Signature Estate
              </p>

              <h2 className="text-5xl md:text-7xl font-extrabold mb-6">
                {p.name}
              </h2>

              <p className="text-xl opacity-80 max-w-xl mb-6">
                {p.description}
              </p>

              <p className="text-red-500 text-2xl mb-10">{p.price}</p>

              <button
                onClick={() => navigate(`/properties/${p.id}`)}
                className="
                  px-12 py-4 rounded-xl text-lg
                  border border-red-600 text-red-400
                  hover:bg-red-600 hover:text-white
                  transition
                "
              >
                View Estate →
              </button>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
}
