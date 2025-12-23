// import { useEffect, useRef, useState } from "react";
// import { reveal } from "../animations/scroll.gsap";
// import { properties } from "../data/properties.data";

// import PropertyMasonry from "../components/property/PropertyMasonry";
// import PropertySkeleton from "../components/property/PropertySkeleton";
// import CompareBar from "../components/property/CompareBar";

// export default function Properties() {
//   const pageRef = useRef(null);

//   /* ---------------- STATE ---------------- */
//   const [search, setSearch] = useState("");
//   const [location, setLocation] = useState("All");
//   const [beds, setBeds] = useState("All");

//   const [favorites, setFavorites] = useState(
//     JSON.parse(localStorage.getItem("favorites") || "[]")
//   );
//   const [compare, setCompare] = useState([]);
//   const [loading, setLoading] = useState(true);

//   /* ---------------- EFFECTS ---------------- */
//   useEffect(() => {
//     reveal(pageRef.current);
//   }, []);

//   useEffect(() => {
//     localStorage.setItem("favorites", JSON.stringify(favorites));
//   }, [favorites]);

//   useEffect(() => {
//     const timer = setTimeout(() => setLoading(false), 1200);
//     return () => clearTimeout(timer);
//   }, []);

//   /* ---------------- ACTIONS ---------------- */
//   const toggleFavorite = (id) => {
//     setFavorites((prev) =>
//       prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]
//     );
//   };

//   const toggleCompare = (id) => {
//     setCompare((prev) =>
//       prev.includes(id)
//         ? prev.filter((x) => x !== id)
//         : prev.length < 3
//         ? [...prev, id]
//         : prev
//     );
//   };

//   /* ---------------- FILTER ---------------- */
//   const filtered = properties.filter((p) => {
//     const matchSearch =
//       p.name.toLowerCase().includes(search.toLowerCase()) ||
//       p.location.toLowerCase().includes(search.toLowerCase());

//     const matchLocation = location === "All" || p.location === location;
//     const matchBeds = beds === "All" || p.beds === Number(beds);

//     return matchSearch && matchLocation && matchBeds;
//   });

//   /* ---------------- JSX ---------------- */
//   return (
//     <section ref={pageRef} className="pt-32 pb-40">
//       {/* ================= HERO ================= */}
//       <div className="max-w-5xl mx-auto text-center px-6 mb-28">
//         <span className="uppercase tracking-widest text-sm opacity-60">
//           Global Luxury Portfolio
//         </span>

//         <h1 className="text-5xl md:text-7xl font-extrabold mt-4 mb-6">
//           Discover <span className="text-red-600">Iconic Properties</span>
//         </h1>

//         <p className="text-lg md:text-2xl opacity-80 leading-relaxed">
//           Ultra-premium residences curated for elite lifestyles and
//           long-term investment value.
//         </p>

//         <div className="flex justify-center gap-16 mt-14 flex-wrap">
//           <Stat value={`${properties.length}+`} label="Luxury Assets" />
//           <Stat value="6" label="Global Markets" />
//           <Stat value="10+" label="Years of Trust" />
//         </div>
//       </div>

//       {/* ================= FILTER PANEL ================= */}
//       <div className="sticky top-28 z-20 max-w-6xl mx-auto mb-24 px-6">
//         <div className="glass p-6 rounded-2xl border border-red-600/30">
//           <div className="grid md:grid-cols-4 gap-6 items-center">
//             <FilterInput
//               placeholder="Search estate or city"
//               value={search}
//               onChange={(e) => setSearch(e.target.value)}
//             />

//             <FilterSelect
//               value={location}
//               onChange={(e) => setLocation(e.target.value)}
//               options={["All", "Dubai", "London", "Miami", "New York"]}
//             />

//             <FilterSelect
//               value={beds}
//               onChange={(e) => setBeds(e.target.value)}
//               options={["All", "2", "3", "4"]}
//               label="Beds"
//             />

//             <div className="text-right text-lg opacity-70">
//               {filtered.length} Estates
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* ================= PROPERTIES ================= */}
//       <div className="max-w-7xl mx-auto px-6">
//         {loading ? (
//           <div className="grid md:grid-cols-3 gap-16">
//             {[...Array(6)].map((_, i) => (
//               <PropertySkeleton key={i} />
//             ))}
//           </div>
//         ) : filtered.length > 0 ? (
//           <PropertyMasonry
//             data={filtered}
//             favorites={favorites}
//             compare={compare}
//             onFav={toggleFavorite}
//             onCompare={toggleCompare}
//           />
//         ) : (
//           <p className="text-center text-xl opacity-60 mt-20">
//             No properties match your criteria.
//           </p>
//         )}
//       </div>

//       {/* ================= INVESTOR CTA ================= */}
//       <div className="text-center mt-40 px-6 max-w-4xl mx-auto">
//         <h2 className="text-4xl md:text-5xl font-bold mb-6">
//           Private & Off-Market Opportunities
//         </h2>

//         <p className="text-lg md:text-xl opacity-80 mb-10">
//           Many of our most valuable assets are never publicly listed.
//           Speak directly with our advisors.
//         </p>

//         <a
//           href="/contact"
//           className="inline-block px-16 py-5 text-lg rounded-xl
//           border border-red-600 text-red-500
//           hover:bg-red-600 hover:text-white transition"
//         >
//           Speak With a Private Advisor
//         </a>

//         <p className="text-sm opacity-60 mt-6">
//           Confidential • Investor-Focused • Global Reach
//         </p>
//       </div>

//       {/* ================= COMPARE BAR ================= */}
//       <CompareBar compare={compare} />
//     </section>
//   );
// }

// /* ================= SMALL COMPONENTS ================= */

// function Stat({ value, label }) {
//   return (
//     <div className="text-center">
//       <h3 className="text-4xl font-bold text-red-600">{value}</h3>
//       <p className="opacity-70">{label}</p>
//     </div>
//   );
// }

// function FilterInput(props) {
//   return (
//     <input
//       {...props}
//       className="p-4 bg-transparent border border-white/20 rounded-lg focus:outline-none"
//     />
//   );
// }

// function FilterSelect({ value, onChange, options, label }) {
//   return (
//     <select
//       value={value}
//       onChange={onChange}
//       className="p-4 bg-transparent border border-white/20 rounded-lg"
//     >
//       {options.map((o) => (
//         <option key={o} value={o}>
//           {label && o !== "All" ? `${o} ${label}` : o}
//         </option>
//       ))}
//     </select>
//   );
// }
import { useEffect, useRef, useState } from "react";
import { reveal } from "../animations/scroll.gsap";
import { properties } from "../data/properties.data";

import PropertyMasonry from "../components/property/PropertyMasonry";
import PropertySkeleton from "../components/property/PropertySkeleton";
import CompareBar from "../components/property/CompareBar";

export default function Properties() {
  const pageRef = useRef(null);

  /* ---------------- STATE ---------------- */
  const [search, setSearch] = useState("");
  const [location, setLocation] = useState("All");
  const [beds, setBeds] = useState("All");

  const [favorites, setFavorites] = useState(
    JSON.parse(localStorage.getItem("favorites") || "[]")
  );
  const [compare, setCompare] = useState([]);
  const [loading, setLoading] = useState(true);

  /* ---------------- EFFECTS ---------------- */
  useEffect(() => {
    reveal(pageRef.current);
  }, []);

  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(favorites));
  }, [favorites]);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1200);
    return () => clearTimeout(timer);
  }, []);

  /* ---------------- ACTIONS ---------------- */
  const toggleFavorite = (id) => {
    setFavorites((prev) =>
      prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]
    );
  };

  const toggleCompare = (id) => {
    setCompare((prev) =>
      prev.includes(id)
        ? prev.filter((x) => x !== id)
        : prev.length < 3
        ? [...prev, id]
        : prev
    );
  };

  /* ---------------- FILTER ---------------- */
  const filtered = properties.filter((p) => {
    const matchSearch =
      p.name.toLowerCase().includes(search.toLowerCase()) ||
      p.location.toLowerCase().includes(search.toLowerCase());

    const matchLocation = location === "All" || p.location === location;
    const matchBeds = beds === "All" || p.beds === Number(beds);

    return matchSearch && matchLocation && matchBeds;
  });

  /* ---------------- JSX ---------------- */
  return (
    <section ref={pageRef} className="pt-32 pb-44">
      {/* ================= HERO STORY ================= */}
      <div className="max-w-5xl mx-auto text-center px-6 mb-32">
        <span className="uppercase tracking-[0.35em] text-xs opacity-60">
          Curated Global Assets
        </span>

        <h1 className="text-5xl md:text-7xl font-extrabold mt-6 mb-8 leading-tight">
          Signature <span className="text-red-600">Luxury Residences</span>
        </h1>

        <p className="text-lg md:text-2xl opacity-80 leading-relaxed">
          A private collection of architecturally iconic properties designed
          for elite living and long-term capital appreciation.
        </p>

        {/* STATS */}
        <div className="flex justify-center gap-20 mt-16 flex-wrap">
          <Stat value={`${properties.length}+`} label="Exclusive Assets" />
          <Stat value="6" label="Prime Global Markets" />
          <Stat value="10+" label="Years of Advisory Trust" />
        </div>
      </div>

      {/* ================= LUXURY FILTER BAR ================= */}
      <div className="sticky top-28 z-30 max-w-6xl mx-auto mb-28 px-6">
        <div className="glass rounded-3xl border border-red-600/30 px-8 py-6">
          <div className="flex flex-col md:flex-row gap-6 items-center">

            {/* SEARCH */}
            <input
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search by estate or city"
              className="
                flex-1 px-6 py-4 rounded-full
                bg-black/60 border border-white/15
                focus:border-red-600 outline-none
              "
            />

            {/* LOCATION */}
            <LuxurySelect
              value={location}
              onChange={setLocation}
              options={["All", "Dubai", "London", "Miami", "New York"]}
            />

            {/* BEDS */}
            <LuxurySelect
              value={beds}
              onChange={setBeds}
              options={["All", "2", "3", "4"]}
              suffix="Beds"
            />

            {/* COUNT */}
            <div className="text-sm opacity-70 whitespace-nowrap">
              {filtered.length} Estates Found
            </div>
          </div>
        </div>
      </div>

      {/* ================= PROPERTY LIST ================= */}
      <div className="max-w-7xl mx-auto px-6">
        {loading ? (
          <div className="grid md:grid-cols-3 gap-16">
            {[...Array(6)].map((_, i) => (
              <PropertySkeleton key={i} />
            ))}
          </div>
        ) : filtered.length > 0 ? (
          <PropertyMasonry
            data={filtered}
            favorites={favorites}
            compare={compare}
            onFav={toggleFavorite}
            onCompare={toggleCompare}
          />
        ) : (
          <p className="text-center text-xl opacity-60 mt-24">
            No estates match your criteria.
          </p>
        )}
      </div>

      {/* ================= INVESTOR CTA ================= */}
      <div className="text-center mt-44 px-6 max-w-4xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-8">
          Private & Off-Market Opportunities
        </h2>

        <p className="text-lg md:text-xl opacity-80 mb-12">
          Many of our most valuable residences are transacted privately.
          Connect directly with our advisory team.
        </p>

        <a
          href="/contact"
          className="
            inline-block px-20 py-6 text-lg rounded-full
            border border-red-600 text-red-500
            hover:bg-red-600 hover:text-white transition
          "
        >
          Speak With a Private Advisor
        </a>

        <p className="text-xs uppercase tracking-widest opacity-50 mt-8">
          Confidential • Investor-Focused • Global Reach
        </p>
      </div>

      {/* ================= COMPARE BAR ================= */}
      <CompareBar compare={compare} />
    </section>
  );
}

/* ================= REUSABLE ================= */

function Stat({ value, label }) {
  return (
    <div className="text-center">
      <h3 className="text-4xl font-bold text-red-600">{value}</h3>
      <p className="opacity-70 mt-1">{label}</p>
    </div>
  );
}

/* ---------- LUXURY SELECT ---------- */
function LuxurySelect({ value, onChange, options, suffix }) {
  return (
    <select
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className="
        px-6 py-4 rounded-full
        bg-black/60 border border-white/15
        focus:border-red-600 outline-none
      "
    >
      {options.map((o) => (
        <option key={o} value={o}>
          {suffix && o !== "All" ? `${o} ${suffix}` : o}
        </option>
      ))}
    </select>
  );
}
