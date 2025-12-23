// import { Link } from "react-router-dom";
// import { motion } from "framer-motion";

// export default function PropertyCard({
//   p,
//   isFav,
//   onFav,
//   onCompare,
//   compared,
// }) {
//   return (
//     <motion.div
//       whileHover={{ boxShadow: "0 30px 80px rgba(225,6,0,0.25)" }}
//       transition={{ duration: 0.35, ease: "easeOut" }}
//       className="
//         relative overflow-hidden rounded-2xl
//         glass border border-red-600/20
//         will-change-transform
//       "
//     >
//       {/* IMAGE WRAPPER (NO LAYOUT SHIFT) */}
//       <div className="relative h-64 overflow-hidden">
//         <img
//           src={p.image}
//           alt={p.name}
//           className="
//             h-full w-full object-cover
//             transition-transform duration-700 ease-out
//             group-hover:scale-110
//           "
//         />

//         {/* DARK OVERLAY */}
//         <div className="absolute inset-0 bg-black/30 opacity-0 hover:opacity-100 transition" />
//       </div>

//       {/* ACTIONS */}
//       <div className="absolute top-4 right-4 z-10 flex gap-3">
//         <button
//           onClick={onFav}
//           className="
//             w-9 h-9 rounded-full
//             bg-black/60 backdrop-blur
//             border border-white/20
//             flex items-center justify-center
//             hover:scale-110 transition
//           "
//         >
//           {isFav ? "❤️" : "🤍"}
//         </button>

//         <button
//           onClick={onCompare}
//           className="
//             px-3 h-9 rounded-full
//             bg-black/60 backdrop-blur
//             border border-white/20 text-xs
//             hover:scale-110 transition
//           "
//         >
//           {compared ? "✓ Added" : "Compare"}
//         </button>
//       </div>

//       {/* CONTENT */}
//       <div className="p-6 space-y-2">
//         <h3 className="text-xl font-semibold leading-snug">
//           {p.name}
//         </h3>

//         <p className="opacity-70 text-sm">{p.location}</p>

//         <p className="text-red-500 font-bold text-lg mt-1">
//           {p.price}
//         </p>

//         <Link
//           to={`/properties/${p.id}`}
//           className="
//             inline-block mt-4 text-sm
//             text-red-500 underline
//             hover:text-red-400 transition
//           "
//         >
//           View Details →
//         </Link>
//       </div>
//     </motion.div>
//   );
// }









import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function PropertyCard({
  p,
  isFav,
  onFav,
  onCompare,
  compared,
}) {
  return (
    <motion.div
      whileHover={{
        boxShadow: "0 35px 90px rgba(225,6,0,0.22)",
      }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className="
        group
        relative
        overflow-hidden
        rounded-2xl
        glass
        border border-red-600/20
        bg-black/40
      "
    >
      {/* ================= IMAGE ================= */}
      <div className="relative h-64 overflow-hidden">
        <img
          src={p.image}
          alt={p.name}
          className="
            h-full w-full object-cover
            transition-transform duration-700 ease-out
            group-hover:scale-105
          "
        />

        {/* SOFT OVERLAY */}
        <div
          className="
            absolute inset-0
            bg-gradient-to-t from-black/60 via-black/10 to-transparent
            opacity-0 group-hover:opacity-100
            transition duration-500
          "
        />
      </div>

      {/* ================= ACTIONS ================= */}
      <div className="absolute top-4 right-4 z-10 flex gap-3">
        <button
          onClick={onFav}
          className="
            w-9 h-9 rounded-full
            bg-black/60 backdrop-blur
            border border-white/20
            flex items-center justify-center
            text-sm
            transition hover:bg-red-600 hover:scale-105
          "
        >
          {isFav ? "❤️" : "🤍"}
        </button>

        <button
          onClick={onCompare}
          className="
            px-3 h-9 rounded-full
            bg-black/60 backdrop-blur
            border border-white/20 text-xs
            transition hover:bg-white/10
          "
        >
          {compared ? "✓ Added" : "Compare"}
        </button>
      </div>

      {/* ================= CONTENT ================= */}
      <div className="p-6 space-y-2">
        <h3 className="text-xl font-semibold leading-snug">
          {p.name}
        </h3>

        <p className="opacity-70 text-sm">{p.location}</p>

        <p className="text-red-500 font-semibold text-lg mt-1">
          {p.price}
        </p>

        <Link
          to={`/properties/${p.id}`}
          className="
            inline-block mt-4 text-sm
            text-red-500
            border-b border-red-500/40
            hover:text-red-400 hover:border-red-400
            transition
          "
        >
          View Details →
        </Link>
      </div>
    </motion.div>
  );
}
