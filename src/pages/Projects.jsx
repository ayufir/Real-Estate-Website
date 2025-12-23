import { useEffect, useRef, useState } from "react";
import { reveal } from "../animations/scroll.gsap";
import { projects } from "../data/projects.data";

import ProjectTabs from "../components/project/ProjectTabs";
import ProjectCard from "../components/project/ProjectCard";

export default function Projects() {
  const pageRef = useRef(null);
  const [activeTab, setActiveTab] = useState("Completed");

  useEffect(() => {
    reveal(pageRef.current);
  }, []);

  const filteredProjects = projects.filter(
    (p) => p.status === activeTab
  );

  return (
    <section ref={pageRef} className="pt-32 pb-40">
      {/* HEADER */}
      <div className="text-center max-w-4xl mx-auto mb-24 px-6">
        <span className="uppercase tracking-widest text-sm opacity-60">
          Our Developments
        </span>

        <h1 className="text-5xl md:text-7xl font-extrabold mt-4 mb-6">
          Luxury <span className="text-red-600">Projects</span>
        </h1>

        <p className="text-lg md:text-2xl opacity-80">
          A portfolio of iconic developments crafted for elite lifestyles
          and long-term value creation.
        </p>
      </div>

      {/* TABS */}
      <ProjectTabs active={activeTab} setActive={setActiveTab} />

      {/* PROJECT GRID */}
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-16">
          {filteredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
