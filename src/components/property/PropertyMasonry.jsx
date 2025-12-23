import Masonry from "react-masonry-css";
import { motion } from "framer-motion";
import PropertyCard from "./PropertyCard";

export default function PropertyMasonry({
  data,
  favorites = [],
  compare = [],
  onFav,
  onCompare,
}) {
  return (
    <Masonry
      breakpointCols={breakpoints}
      className="flex gap-14"
      columnClassName="flex flex-col gap-14"
    >
      {data.map((p) => (
        <motion.div
          key={p.id}
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <PropertyCard
            p={p}
            isFav={favorites.includes(p.id)}
            onFav={() => onFav(p.id)}
            onCompare={() => onCompare(p.id)}
            compared={compare.includes(p.id)}
          />
        </motion.div>
      ))}
    </Masonry>
  );
}

/* ---------- RESPONSIVE BREAKPOINTS ---------- */
const breakpoints = {
  default: 3,
  1100: 2,
  700: 1,
};
