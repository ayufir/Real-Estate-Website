export default function TourButton({ onClick }) {
  return (
    <button
      onClick={onClick}
      className="
        px-5 py-3 rounded-full
        bg-black/60 backdrop-blur
        border border-white/20
        text-white text-sm
        hover:scale-110 transition
        cursor-grab active:cursor-grabbing
      "
    >
      🌀 360° Virtual Tour
    </button>
  );
}
