// import { useEffect, useRef } from "react";
// import { useNavigate } from "react-router-dom";
// import gsap from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";

// import Button from "../components/common/Button";
// import SectionTitle from "../components/common/SectionTitle";
// import HorizontalScroll from "../components/property/HorizontalScroll";
// import BrochurePreview from "../components/property/BrochurePreview";
// import { heroGsap } from "../animations/hero.gsap";
// import { reveal } from "../animations/scroll.gsap";

// gsap.registerPlugin(ScrollTrigger);

// export default function Home() {
//   const navigate = useNavigate();

//   // HERO
//   const heroTitle = useRef(null);
//   const heroText = useRef(null);
//   const heroBtn = useRef(null);
//   const heroBg = useRef(null); // 🔥 NEW

//   // SECTIONS
//   const luxuryRef = useRef(null);
//   const servicesRef = useRef(null);
//   const statsRef = useRef(null);
//   const trustRef = useRef(null);
//   const brochureRef = useRef(null);
//   const ctaRef = useRef(null);

//   useEffect(() => {
//     const ctx = gsap.context(() => {
//       // HERO ENTRY
//       heroGsap(heroTitle.current, heroText.current, heroBtn.current);

//       // 🔥 CINEMATIC BACKGROUND PARALLAX
//       gsap.to(heroBg.current, {
//         scale: 1.15,
//         yPercent: 15,
//         ease: "none",
//         scrollTrigger: {
//           trigger: heroBg.current,
//           start: "top top",
//           end: "bottom top",
//           scrub: true,
//         },
//       });

//       // SECTION REVEALS
//       [
//         luxuryRef,
//         servicesRef,
//         statsRef,
//         trustRef,
//         brochureRef,
//         ctaRef,
//       ].forEach((r) => r.current && reveal(r.current));
//     });

//     ScrollTrigger.refresh();
//     return () => ctx.revert();
//   }, []);

//   return (
//     <>
//       {/* ================= HERO ================= */}
//       <section className="relative h-screen overflow-hidden flex items-center justify-center">
//         <video
//           ref={heroBg}
//           autoPlay
//           muted
//           loop
//           playsInline
//           preload="auto"
//           poster="/hero-poster.jpg"
//           className="absolute inset-0 w-full h-full object-cover scale-110"
//         >
//           <source src="/hero.mp4" type="video/mp4" />
//         </video>

//         <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/80 to-black" />

//         <div className="relative z-10 max-w-6xl px-6 text-center">
//           <span className="uppercase tracking-[0.3em] text-sm opacity-70">
//             Global Luxury Real Estate
//           </span>

//           <h1
//             ref={heroTitle}
//             className="mt-6 text-6xl md:text-8xl font-extrabold leading-tight"
//           >
//             <span className="text-red-600">Luxury</span> Real Estate
//             <br />
//             Crafted for the <span className="text-red-600">Elite</span>
//           </h1>

//           <p
//             ref={heroText}
//             className="mt-10 text-lg md:text-2xl opacity-80 max-w-4xl mx-auto"
//           >
//             Ultra-premium residences and investment-grade properties curated
//             for global investors and high-net-worth individuals.
//           </p>

//           <div
//             ref={heroBtn}
//             className="mt-16 flex justify-center gap-10 flex-wrap"
//           >
//             <Button onClick={() => navigate("/properties")}>
//               Explore Portfolio
//             </Button>

//             <button
//               onClick={() => navigate("/contact")}
//               className="px-14 py-5 text-lg rounded-xl border border-red-600
//               text-red-500 hover:bg-red-600 hover:text-white transition"
//             >
//               Private Consultation
//             </button>
//           </div>
//         </div>

//         {/* SCROLL INDICATOR */}
//         <div className="absolute bottom-10 left-1/2 -translate-x-1/2">
//           <div className="w-6 h-10 border border-white/40 rounded-full flex justify-center">
//             <span className="w-1 h-3 bg-white/60 rounded-full mt-2 animate-bounce" />
//           </div>
//         </div>
//       </section>

//       {/* ================= LUXURY PHILOSOPHY ================= */}
//       <section ref={luxuryRef} className="section">
//         <SectionTitle
//           title="Redefining Global Luxury Living"
//           subtitle="Beyond residences — strategic assets"
//         />

//         <div className="grid md:grid-cols-3 gap-14">
//           {[
//             {
//               t: "Hand-Curated Assets",
//               d: "Each estate is selected for architectural excellence, scarcity and long-term appreciation.",
//             },
//             {
//               t: "Global Market Access",
//               d: "Direct exposure to Dubai, London, Miami, New York and emerging luxury hubs.",
//             },
//             {
//               t: "Investment-First Strategy",
//               d: "Luxury supported by data, performance metrics and capital growth potential.",
//             },
//           ].map((i, idx) => (
//             <div
//               key={idx}
//               className="glass p-10 rounded-2xl border border-red-600/30"
//             >
//               <h3 className="text-2xl font-semibold text-red-500 mb-4">
//                 {i.t}
//               </h3>
//               <p className="opacity-80 leading-relaxed">{i.d}</p>
//             </div>
//           ))}
//         </div>
//       </section>

//       {/* ================= SERVICES ================= */}
//       <section ref={servicesRef} className="section bg-black/40">
//         <SectionTitle
//           title="White-Glove Real Estate Services"
//           subtitle="End-to-end advisory for elite clients"
//         />

//         <div className="grid md:grid-cols-2 gap-16 items-center">
//           <ul className="space-y-6 text-lg opacity-90">
//             <li>• Ultra-Luxury Residential Sales</li>
//             <li>• Global Property Investment Advisory</li>
//             <li>• International Portfolio Structuring</li>
//             <li>• Asset & Wealth Preservation</li>
//             <li>• Private Client Representation</li>
//           </ul>

//           <div className="glass p-12 rounded-2xl border border-red-600/30">
//             <h3 className="text-3xl font-semibold mb-6">
//               Discretion. Precision. Results.
//             </h3>
//             <p className="opacity-80 text-lg">
//               We deliver confidential transactions with institutional-grade
//               execution for global elite clients.
//             </p>
//           </div>
//         </div>
//       </section>

//       {/* ================= STATS ================= */}
//       <section ref={statsRef} className="section">
//         <div className="grid md:grid-cols-4 gap-12 text-center">
//           {[
//             ["750+", "Signature Properties"],
//             ["1800+", "Global Clients"],
//             ["6", "Prime Markets"],
//             ["20+", "Years of Trust"],
//           ].map(([v, l], i) => (
//             <div
//               key={i}
//               className="glass p-10 rounded-2xl border border-red-600/30"
//             >
//               <h3 className="text-6xl font-bold text-red-600">{v}</h3>
//               <p className="mt-4 opacity-70">{l}</p>
//             </div>
//           ))}
//         </div>
//       </section>

//       {/* ================= TRUST ================= */}
//       <section ref={trustRef} className="section bg-black/40 text-center">
//         <p className="opacity-60 mb-10">
//           Trusted by founders, investors & global institutions
//         </p>
//         <div className="flex justify-center gap-16 flex-wrap text-lg opacity-70">
//           <span>Prime Estates</span>
//           <span>Global Assets</span>
//           <span>Knight Group</span>
//           <span>Dubai Realty</span>
//         </div>
//       </section>

//       {/* ================= FEATURED ================= */}
//       <section className="section text-center">
//         <h2 className="text-5xl font-bold mb-6">
//           Signature <span className="text-red-600">Estates</span>
//         </h2>
//         <p className="text-xl opacity-70">
//           A hand-picked selection of our most exclusive properties
//         </p>
//       </section>

//       {/* 🔥 HORIZONTAL SCROLL (SAFE POSITION) */}
//       <section id="featured-scroll">
//         <HorizontalScroll />
//       </section>

//       {/* ================= BROCHURE ================= */}
//       <section ref={brochureRef} className="section text-center bg-black/40">
//         <SectionTitle
//           title="Property Investment Brochure"
//           subtitle="Floor plans, ROI insights & legal overview"
//         />

//         <div className="max-w-xl mx-auto">
//           <BrochurePreview
//             title="Dubai Signature Villa – Investor Deck"
//             file="/brochures/luxury-villa-dubai.pdf"
//           />
//         </div>

//         <p className="text-sm opacity-60 mt-8">
//           Confidential document • For serious investors only
//         </p>
//       </section>

//       {/* ================= FINAL CTA ================= */}
//       <section ref={ctaRef} className="section text-center bg-black/60">
//         <h2 className="text-5xl md:text-6xl font-bold mb-8">
//           Private Access to <span className="text-red-600">Elite Assets</span>
//         </h2>

//         <p className="text-xl opacity-80 max-w-3xl mx-auto mb-14">
//           Many of our most valuable opportunities are never publicly listed.
//           Speak directly with our advisory team.
//         </p>

//         <div className="flex justify-center gap-10 flex-wrap">
//           <Button onClick={() => navigate("/properties")}>
//             View Portfolio
//           </Button>

//           <button
//             onClick={() => navigate("/contact")}
//             className="px-14 py-5 text-lg border border-red-600
//             text-red-500 rounded-xl hover:bg-red-600 hover:text-white transition"
//           >
//             Speak to an Advisor
//           </button>
//         </div>

//         <p className="text-sm opacity-60 mt-6">
//           Confidential • Discreet • Global Reach
//         </p>
//       </section>
//     </>
//   );
// }


import { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import Button from "../components/common/Button";
import SectionTitle from "../components/common/SectionTitle";
import HorizontalScroll from "../components/property/HorizontalScroll";
import BrochurePreview from "../components/property/BrochurePreview";
import { heroGsap } from "../animations/hero.gsap";
import { reveal } from "../animations/scroll.gsap";

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  const navigate = useNavigate();

  /* HERO */
  const heroTitle = useRef(null);
  const heroText = useRef(null);
  const heroBtn = useRef(null);
  const heroBg = useRef(null);

  /* SECTIONS */
  const luxuryRef = useRef(null);
  const servicesRef = useRef(null);
  const statsRef = useRef(null);
  const trustRef = useRef(null);
  const brochureRef = useRef(null);
  const ctaRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      /* HERO ENTRY */
      heroGsap(heroTitle.current, heroText.current, heroBtn.current);

      /* CINEMATIC PARALLAX BACKGROUND */
      gsap.to(heroBg.current, {
        scale: 1.15,
        yPercent: 15,
        ease: "none",
        scrollTrigger: {
          trigger: heroBg.current,
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      });

      /* SECTION REVEALS */
      [
        luxuryRef,
        servicesRef,
        statsRef,
        trustRef,
        brochureRef,
        ctaRef,
      ].forEach((r) => r.current && reveal(r.current));
    });

    ScrollTrigger.refresh();
    return () => ctx.revert();
  }, []);

  return (
    <>
      {/* ================= HERO ================= */}
      <section className="relative h-screen overflow-hidden flex items-center justify-center">
        <video
          ref={heroBg}
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          poster="/hero-poster.jpg"
          className="absolute inset-0 w-full h-full object-cover scale-110"
        >
          <source src="/hero.mp4" type="video/mp4" />
        </video>

        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/80 to-black" />

        <div className="relative z-10 max-w-6xl px-6 text-center">
          <span className="uppercase tracking-[0.3em] text-sm opacity-70">
            Global Luxury Real Estate
          </span>

          <h1
            ref={heroTitle}
            className="mt-6 text-6xl md:text-8xl font-extrabold leading-tight"
          >
            <span className="text-red-600">Luxury</span> Real Estate
            <br />
            Crafted for the <span className="text-red-600">Elite</span>
          </h1>

          <p
            ref={heroText}
            className="mt-10 text-lg md:text-2xl opacity-80 max-w-4xl mx-auto"
          >
            Ultra-premium residences and investment-grade properties curated
            for global investors and high-net-worth individuals.
          </p>

          <div
            ref={heroBtn}
            className="mt-16 flex justify-center gap-10 flex-wrap"
          >
            <Button onClick={() => navigate("/properties")}>
              Explore Portfolio
            </Button>

            <button
              onClick={() => navigate("/contact")}
              className="px-14 py-5 text-lg rounded-xl border border-red-600
              text-red-500 hover:bg-red-600 hover:text-white transition"
            >
              Private Consultation
            </button>
          </div>
        </div>

        {/* SCROLL INDICATOR */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2">
          <div className="w-6 h-10 border border-white/40 rounded-full flex justify-center">
            <span className="w-1 h-3 bg-white/60 rounded-full mt-2 animate-bounce" />
          </div>
        </div>
      </section>

      {/* ================= LUXURY PHILOSOPHY ================= */}
      <section ref={luxuryRef} className="section">
        <SectionTitle
          title="Redefining Global Luxury Living"
          subtitle="Beyond residences — strategic assets"
        />

        <div className="grid md:grid-cols-3 gap-14">
          {[
            {
              t: "Hand-Curated Assets",
              d: "Each estate is selected for architectural excellence, scarcity and long-term appreciation.",
            },
            {
              t: "Global Market Access",
              d: "Direct exposure to Dubai, London, Miami, New York and emerging luxury hubs.",
            },
            {
              t: "Investment-First Strategy",
              d: "Luxury supported by data, performance metrics and capital growth potential.",
            },
          ].map((i, idx) => (
            <div
              key={idx}
              className="glass p-10 rounded-2xl border border-red-600/30"
            >
              <h3 className="text-2xl font-semibold text-red-500 mb-4">
                {i.t}
              </h3>
              <p className="opacity-80 leading-relaxed">{i.d}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ================= FEATURED ESTATES ================= */}
      <section className="section text-center">
        <h2 className="text-5xl font-bold mb-6">
          Signature <span className="text-red-600">Estates</span>
        </h2>
        <p className="text-xl opacity-70">
          A hand-picked selection of our most exclusive properties
        </p>
      </section>

      {/* SAFE HORIZONTAL SCROLL */}
      <section id="featured-scroll">
        <HorizontalScroll />
      </section>

      {/* ================= BROCHURE ================= */}
      <section ref={brochureRef} className="section text-center bg-black/40">
        <SectionTitle
          title="Property Investment Brochure"
          subtitle="Floor plans, ROI insights & legal overview"
        />

        <div className="max-w-xl mx-auto">
          <BrochurePreview
            title="Dubai Signature Villa – Investor Deck"
            file="/brochures/luxury-villa-dubai.pdf"
          />
        </div>

        <p className="text-sm opacity-60 mt-8">
          Confidential document • For serious investors only
        </p>
      </section>

      {/* ================= FINAL CTA ================= */}
      <section ref={ctaRef} className="section text-center bg-black/60">
        <h2 className="text-5xl md:text-6xl font-bold mb-8">
          Private Access to <span className="text-red-600">Elite Assets</span>
        </h2>

        <p className="text-xl opacity-80 max-w-3xl mx-auto mb-14">
          Many of our most valuable opportunities are never publicly listed.
        </p>

        <div className="flex justify-center gap-10 flex-wrap">
          <Button onClick={() => navigate("/properties")}>
            View Portfolio
          </Button>

          <button
            onClick={() => navigate("/contact")}
            className="px-14 py-5 text-lg border border-red-600
            text-red-500 rounded-xl hover:bg-red-600 hover:text-white transition"
          >
            Speak to an Advisor
          </button>
        </div>
      </section>
    </>
  );
}
