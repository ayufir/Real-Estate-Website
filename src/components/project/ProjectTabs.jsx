export default function ProjectTabs({ active, setActive }) {
  return (
    <div className="flex justify-center gap-8 mb-20">
      {["Completed", "Ongoing"].map((tab) => (
        <button
          key={tab}
          onClick={() => setActive(tab)}
          className={`
            px-8 py-3 rounded-full text-lg transition
            ${
              active === tab
                ? "bg-red-600 text-white"
                : "border border-red-600/40 text-red-400 hover:bg-red-600 hover:text-white"
            }
          `}
        >
          {tab === "Completed" ? "Completed Projects" : "Ongoing Projects"}
        </button>
      ))}
    </div>
  );
}
