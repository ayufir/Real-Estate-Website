export default function Button({ children, onClick }) {
  return (
    <button
      onClick={onClick}
      className="glass px-10 py-4 text-lg hover:scale-110 transition"
    >
      {children}
    </button>
  );
}
