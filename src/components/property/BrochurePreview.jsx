import { useState } from "react";

export default function BrochurePreview({ title, file }) {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* PREVIEW CARD */}
      <div className="glass p-8 border border-red-600/30 rounded-2xl text-center">
        <h3 className="text-2xl font-semibold mb-4">{title}</h3>

        <p className="opacity-70 mb-6">
          Download or preview the complete property brochure.
        </p>

        <div className="flex justify-center gap-6 flex-wrap">
          <button
            onClick={() => setOpen(true)}
            className="px-8 py-3 border border-white/30 rounded-lg hover:bg-white/10 transition"
          >
            Preview
          </button>

          <a
            href={file}
            download
            className="px-8 py-3 border border-red-600 text-red-500 rounded-lg hover:bg-red-600 hover:text-white transition"
          >
            Download PDF
          </a>
        </div>
      </div>

      {/* PREVIEW MODAL */}
      {open && (
        <div className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center px-6">
          <div className="bg-black w-full max-w-5xl h-[80vh] rounded-2xl relative">

            <button
              onClick={() => setOpen(false)}
              className="absolute top-4 right-4 text-white text-xl"
            >
              ✕
            </button>

            <iframe
              src={file}
              title="Property Brochure"
              className="w-full h-full rounded-2xl"
            />
          </div>
        </div>
      )}
    </>
  );
}
