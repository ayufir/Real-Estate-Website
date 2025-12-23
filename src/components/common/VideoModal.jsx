export default function VideoModal({ onClose }) {
  return (
    <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center">
      <div className="relative w-full max-w-4xl">
        <button
          onClick={onClose}
          className="absolute -top-12 right-0 text-white text-2xl"
        >
          ✕
        </button>

        <video
          controls
          autoPlay
          className="w-full rounded-xl"
          src="/tour.mp4"
        />
      </div>
    </div>
  );
}
