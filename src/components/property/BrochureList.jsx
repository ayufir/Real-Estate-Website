export default function BrochureList({ brochures, onSelect }) {
  return (
    <div className="grid md:grid-cols-3 gap-8 mt-10">
      {brochures.map((b, i) => (
        <div
          key={i}
          className="glass p-8 border border-red-600/30 rounded-2xl"
        >
          <h4 className="text-xl font-semibold mb-4">{b.title}</h4>

          <button
            onClick={() => onSelect(b)}
            className="mt-6 px-6 py-3 border border-red-600 text-red-500 rounded-lg hover:bg-red-600 hover:text-white transition"
          >
            Preview & Download
          </button>
        </div>
      ))}
    </div>
  );
}
