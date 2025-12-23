export default function CompareBar({ compare }) {
  if (!compare || compare.length === 0) return null;

  return (
    <div className="fixed bottom-6 left-1/2 -translate-x-1/2 glass px-10 py-4 border border-red-600/40 z-50">
      <p className="mb-2 text-center text-sm opacity-80">
        Comparing {compare.length} properties
      </p>

      <div className="flex gap-6 justify-center">
        {compare.map((id) => (
          <span
            key={id}
            className="px-4 py-1 border border-white/20 rounded-full text-sm"
          >
            #{id}
          </span>
        ))}
      </div>
    </div>
  );
}
