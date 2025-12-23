import { useState, useRef, useEffect } from "react";
import gsap from "gsap";
import {
  FaHome,
  FaChartLine,
  FaHandshake,
  FaQuestionCircle,
  FaChevronDown,
} from "react-icons/fa";

const OPTIONS = [
  { label: "Buying a Property", value: "Buying", icon: FaHome },
  { label: "Investment Advisory", value: "Investment", icon: FaChartLine },
  { label: "Private Partnership", value: "Partnership", icon: FaHandshake },
  { label: "General Question", value: "General", icon: FaQuestionCircle },
];

export default function LuxurySelect({ value, onChange }) {
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    if (open) {
      gsap.fromTo(
        dropdownRef.current,
        { opacity: 0, y: -10 },
        { opacity: 1, y: 0, duration: 0.35, ease: "power3.out" }
      );
    }
  }, [open]);

  return (
    <div className="relative">
      {/* SELECT BUTTON */}
      <button
        type="button"
        onClick={() => setOpen(!open)}
        className="
          w-full flex justify-between items-center
          px-5 py-4 rounded-xl
          bg-black/60 border border-white/20
          text-white text-left
          hover:border-red-600 transition
        "
      >
        <span className="opacity-80">
          {value || "Purpose of Inquiry"}
        </span>
        <FaChevronDown
          className={`transition ${open ? "rotate-180" : ""}`}
        />
      </button>

      {/* DROPDOWN */}
      {open && (
        <div
          ref={dropdownRef}
          className="
            absolute z-50 mt-3 w-full
            glass rounded-2xl
            border border-red-600/30
            overflow-hidden
          "
        >
          {OPTIONS.map((opt) => (
            <button
              key={opt.value}
              type="button"
              onClick={() => {
                onChange(opt.label);
                setOpen(false);
              }}
              className="
                w-full flex items-center gap-4
                px-6 py-4 text-left
                hover:bg-red-600/20
                transition
              "
            >
              <opt.icon className="text-red-500 text-lg" />
              <span className="text-white">{opt.label}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
