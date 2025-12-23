import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import {
  completedProjects,
  ongoingProjects,
} from "../../data/projects.data";

export default function ProjectStatsHeader() {
  const navigate = useNavigate();

  return (
    <motion.section
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="
        relative mt-32 mb-40
        max-w-7xl mx-auto px-6
      "
    >
      {/* GLASS CONTAINER */}
      <div
        className="
          glass rounded-3xl
          border border-red-600/30
          px-12 py-16
          flex flex-col md:flex-row
          items-center justify-between
          gap-16
        "
      >
        {/* LEFT TEXT */}
        <div className="max-w-xl">
          <span className="uppercase tracking-widest text-sm opacity-60">
            Our Track Record
          </span>

          <h2 className="text-4xl md:text-5xl font-extrabold mt-4 leading-tight">
            Proven <span className="text-red-600">Projects</span>
            <br /> Global Execution
          </h2>

          <p className="mt-6 text-lg opacity-80 leading-relaxed">
            From landmark luxury developments to high-value global
            investments, our portfolio reflects execution excellence
            and investor trust.
          </p>

          <button
            onClick={() => navigate("/projects")}
            className="
              mt-10 px-14 py-4 rounded-xl
              border border-red-600
              text-red-500 text-lg
              hover:bg-red-600 hover:text-white
              transition
            "
          >
            View All Projects →
          </button>
        </div>

        {/* RIGHT STATS */}
        <div className="grid grid-cols-2 gap-12 text-center">
          <StatCard
            value={completedProjects.length}
            label="Completed Projects"
            sub="Delivered Successfully"
          />

          <StatCard
            value={ongoingProjects.length}
            label="Ongoing Projects"
            sub="Under Active Development"
          />
        </div>
      </div>
    </motion.section>
  );
}

/* ---------- SMALL CARD ---------- */
function StatCard({ value, label, sub }) {
  return (
    <div
      className="
        glass px-10 py-12 rounded-2xl
        border border-red-600/25
      "
    >
      <h3 className="text-6xl font-extrabold text-red-600">
        {value}
      </h3>

      <p className="mt-3 text-lg font-semibold">
        {label}
      </p>

      <p className="mt-1 text-sm opacity-60">
        {sub}
      </p>
    </div>
  );
}
