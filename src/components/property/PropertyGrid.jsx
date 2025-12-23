// import PropertyCard from "./PropertyCard";

// export default function PropertyGrid({ data }) {
//   return (
//     <div className="grid md:grid-cols-3 gap-14">
//       {data.map((p) => (
//         <PropertyCard key={p.id} p={p} />
//       ))}
//     </div>
//   );
// }


import { motion } from "framer-motion";
import PropertyCard from "./PropertyCard";

export default function PropertyGrid({
  data,
  favorites = [],
  onFav,
  onCompare,
  compare = [],
}) {
  return (
    <motion.div
      initial="hidden"
      animate="show"
      variants={container}
      className="
        grid md:grid-cols-3 gap-16
        items-start
      "
    >
      {data.map((p) => (
        <motion.div key={p.id} variants={item}>
          <PropertyCard
            p={p}
            isFav={favorites.includes(p.id)}
            onFav={() => onFav(p.id)}
            onCompare={() => onCompare(p.id)}
            compared={compare.includes(p.id)}
          />
        </motion.div>
      ))}
    </motion.div>
  );
}

/* ---------------- ANIMATION VARIANTS ---------------- */

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.1,
    },
  },
};

const item = {
  hidden: {
    opacity: 0,
    y: 30,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};
