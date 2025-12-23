import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function ProjectCard({ project }) {
  return (
    <motion.div
      whileHover={{ y: -10 }}
      className="glass rounded-2xl overflow-hidden border border-red-600/20"
    >
      {/* IMAGE */}
      <div className="relative">
        <img
          src={project.image}
          alt={project.name}
          className="h-64 w-full object-cover"
        />

        {/* STATUS BADGE */}
        <span
          className={`
            absolute top-4 left-4 px-4 py-1 text-sm rounded-full
            ${
              project.status === "Completed"
                ? "bg-green-600/80 text-white"
                : "bg-yellow-500/90 text-black"
            }
          `}
        >
          {project.status}
        </span>
      </div>

      {/* CONTENT */}
      <div className="p-6">
        <h3 className="text-2xl font-semibold mb-1">
          {project.name}
        </h3>

        <p className="opacity-70">{project.location}</p>

        <p className="mt-2 text-sm opacity-60">
          {project.status === "Completed"
            ? `Completed in ${project.year}`
            : `Expected Completion ${project.year}`}
        </p>

        <Link
          to={`/projects/${project.id}`}
          className="inline-block mt-5 text-red-500 underline"
        >
          View Details →
        </Link>
      </div>
    </motion.div>
  );
}
