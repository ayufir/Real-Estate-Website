import { useEffect, useRef } from "react";
import { reveal } from "../animations/scroll.gsap";
import SectionTitle from "../components/common/SectionTitle";

export default function About() {
  const introRef = useRef(null);
  const visionRef = useRef(null);
  const valuesRef = useRef(null);
  const statsRef = useRef(null);
  const ctaRef = useRef(null);

  useEffect(() => {
    reveal(introRef.current);
    reveal(visionRef.current);
    reveal(valuesRef.current);
    reveal(statsRef.current);
    reveal(ctaRef.current);
  }, []);

  return (
    <section className="pt-32 pb-40">

      {/* ================= INTRO ================= */}
      <div
        ref={introRef}
        className="max-w-5xl mx-auto text-center px-6 mb-28"
      >
        <h1 className="text-5xl md:text-6xl font-extrabold mb-6 leading-tight">
          Redefining <span className="text-red-600">Luxury Real Estate</span>
        </h1>
        <p className="text-lg md:text-xl opacity-80 leading-relaxed">
          LuxEstate is a global luxury real estate advisory firm dedicated to
          serving elite clients, investors, and visionaries seeking timeless
          properties and long-term value.
        </p>
      </div>

      {/* ================= STORY ================= */}
      <section className="section bg-black/40">
        <SectionTitle
          title="Our Story"
          subtitle="Built on trust, discretion & excellence"
        />

        <div className="max-w-5xl mx-auto text-lg opacity-80 leading-relaxed px-6">
          <p className="mb-6">
            Founded with a vision to elevate real estate beyond transactions,
            LuxEstate was created to serve clients who value discretion,
            precision, and global expertise.
          </p>

          <p className="mb-6">
            Our team operates across key international markets, offering
            hand-selected residences, investment-grade assets, and private
            off-market opportunities rarely accessible to the public.
          </p>

          <p>
            We don’t chase volume. We curate value.
          </p>
        </div>
      </section>

      {/* ================= VISION ================= */}
      <section
        ref={visionRef}
        className="section"
      >
        <div className="grid md:grid-cols-2 gap-16 items-center px-6 max-w-7xl mx-auto">
          <div>
            <h2 className="text-4xl font-bold mb-6">
              Our Vision
            </h2>
            <p className="text-lg opacity-80 leading-relaxed">
              To become the world’s most trusted luxury real estate partner,
              delivering iconic properties, intelligent investments, and
              exceptional client experiences across borders.
            </p>
          </div>

          <div className="glass p-10 rounded-2xl border border-red-600/30">
            <h3 className="text-2xl font-semibold mb-4 text-red-500">
              What Sets Us Apart
            </h3>
            <ul className="space-y-3 opacity-80">
              <li>• Global luxury market expertise</li>
              <li>• Access to private & off-market deals</li>
              <li>• Investor-driven advisory approach</li>
              <li>• Absolute discretion & confidentiality</li>
            </ul>
          </div>
        </div>
      </section>

      {/* ================= CORE VALUES ================= */}
      <section
        ref={valuesRef}
        className="section bg-black/40"
      >
        <SectionTitle
          title="Our Core Values"
          subtitle="Principles that guide every decision"
        />

        <div className="grid md:grid-cols-4 gap-10 px-6 max-w-7xl mx-auto">
          {[
            {
              title: "Integrity",
              text: "We operate with honesty, transparency, and ethical responsibility."
            },
            {
              title: "Discretion",
              text: "Privacy and confidentiality are fundamental to our client relationships."
            },
            {
              title: "Excellence",
              text: "We pursue perfection in service, strategy, and execution."
            },
            {
              title: "Long-Term Value",
              text: "Every recommendation is aligned with sustainable wealth creation."
            }
          ].map((v, i) => (
            <div
              key={i}
              className="glass p-8 rounded-2xl border border-red-600/20"
            >
              <h4 className="text-xl font-semibold mb-3 text-red-500">
                {v.title}
              </h4>
              <p className="opacity-80 leading-relaxed">
                {v.text}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ================= STATS ================= */}
      <section
        ref={statsRef}
        className="section"
      >
        <div className="grid md:grid-cols-4 gap-12 text-center px-6 max-w-7xl mx-auto">
          {[
            ["20+", "Years of Expertise"],
            ["1800+", "Elite Clients Served"],
            ["6", "Global Markets"],
            ["750+", "Luxury Assets Curated"]
          ].map(([value, label], i) => (
            <div
              key={i}
              className="glass p-10 rounded-2xl border border-red-600/30"
            >
              <h3 className="text-5xl font-bold text-red-600">{value}</h3>
              <p className="mt-4 opacity-70">{label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ================= FINAL CTA ================= */}
      <section
        ref={ctaRef}
        className="section bg-black/60 text-center px-6"
      >
        <h2 className="text-4xl md:text-5xl font-bold mb-6">
          Partner With <span className="text-red-600">LuxEstate</span>
        </h2>

        <p className="text-lg md содержит opacity-80 max-w-3xl mx-auto mb-10">
          Whether you are acquiring a signature residence or building a global
          property portfolio, our advisors are ready to guide you with clarity
          and confidence.
        </p>

        <a
          href="/contact"
          className="inline-block px-14 py-5 text-lg rounded-xl border border-red-600 text-red-500 hover:bg-red-600 hover:text-white transition"
        >
          Speak With Our Advisors
        </a>
      </section>
    </section>
  );
}
