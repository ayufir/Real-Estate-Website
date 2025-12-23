import { useState } from "react";

export default function BrochureGateModal({ open, onClose, brochure }) {
  const [form, setForm] = useState({
    name: "",
    phone: "",
  });

  if (!open) return null;

  const handleSubmit = (e) => {
    e.preventDefault();

    const msg = `
New Brochure Request – LuxEstate

Name: ${form.name}
Phone: ${form.phone}
Brochure: ${brochure.title}
    `;

    window.open(
      `https://wa.me/919999999999?text=${encodeURIComponent(msg)}`,
      "_blank"
    );

    // AUTO DOWNLOAD AFTER WHATSAPP
    window.location.href = brochure.file;

    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center px-6">
      <div className="bg-black max-w-md w-full p-8 rounded-2xl border border-red-600/30">
        <h3 className="text-2xl font-semibold mb-4">
          Access Confidential Brochure
        </h3>

        <p className="opacity-70 mb-6">
          Please share your details to receive this document.
        </p>

        <form onSubmit={handleSubmit} className="space-y-5">
          <input
            required
            placeholder="Full Name"
            className="w-full p-3 bg-transparent border border-white/20 rounded-lg"
            onChange={(e) =>
              setForm({ ...form, name: e.target.value })
            }
          />

          <input
            required
            placeholder="Phone / WhatsApp Number"
            className="w-full p-3 bg-transparent border border-white/20 rounded-lg"
            onChange={(e) =>
              setForm({ ...form, phone: e.target.value })
            }
          />

          <button
            type="submit"
            className="w-full py-3 border border-green-500 text-green-400 rounded-lg hover:bg-green-500 hover:text-white transition"
          >
            Continue to WhatsApp & Download
          </button>
        </form>

        <button
          onClick={onClose}
          className="text-sm opacity-60 mt-6 block mx-auto"
        >
          Cancel
        </button>
      </div>
    </div>
  );
}
