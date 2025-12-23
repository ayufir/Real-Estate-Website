import { properties } from "../data/properties.data";

export default function Compare() {
  const compareIds = JSON.parse(localStorage.getItem("compare") || "[]");
  const items = properties.filter((p) => compareIds.includes(p.id));

  return (
    <section className="section pt-32 max-w-7xl mx-auto">
      <h1 className="text-6xl font-bold mb-20 text-center">
        Compare Properties
      </h1>

      <div className="grid md:grid-cols-3 gap-10">
        {items.map((p) => (
          <div key={p.id} className="glass p-8">
            <img
              src={p.image}
              className="rounded-xl mb-6"
            />
            <h3 className="text-2xl font-semibold">{p.name}</h3>
            <p className="opacity-70">{p.location}</p>
            <p className="text-red-500 mt-3 text-xl">{p.price}</p>
            <p className="mt-4">Beds: {p.beds}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
