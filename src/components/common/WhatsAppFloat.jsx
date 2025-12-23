import { FaWhatsapp } from "react-icons/fa";

export default function WhatsAppFloat() {
  const message =
    "Hello LuxEstate, I am interested in luxury properties. Please contact me.";

  return (
    <a
      href={`https://wa.me/919999999999?text=${encodeURIComponent(message)}`}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 w-16 h-16 rounded-full bg-green-500 flex items-center justify-center shadow-lg hover:scale-110 transition"
    >
      <FaWhatsapp className="text-white text-3xl" />
    </a>
  );
}
