import { useState } from "react";

export default function ROIEMICalculator({ price }) {
  // price expected in number (₹)
  const propertyPrice = price || 45000000; // fallback ₹4.5 Cr

  const [downPayment, setDownPayment] = useState(20); // %
  const [interest, setInterest] = useState(8.5); // %
  const [tenure, setTenure] = useState(20); // years
  const [expectedRent, setExpectedRent] = useState(180000); // monthly ₹

  const loanAmount = propertyPrice * ((100 - downPayment) / 100);
  const monthlyRate = interest / 12 / 100;
  const months = tenure * 12;

  const emi =
    (loanAmount *
      monthlyRate *
      Math.pow(1 + monthlyRate, months)) /
    (Math.pow(1 + monthlyRate, months) - 1);

  const annualRent = expectedRent * 12;
  const roi = ((annualRent - emi * 12) / propertyPrice) * 100;

  return (
    <div className="mt-32 glass p-12 rounded-2xl border border-red-600/30">
      <h2 className="text-4xl font-bold mb-4">
        ROI & <span className="text-red-600">EMI Calculator</span>
      </h2>

      <p className="opacity-70 mb-10">
        Estimate monthly EMI and investment return (India focused)
      </p>

      {/* INPUTS */}
      <div className="grid md:grid-cols-2 gap-8 mb-14">

        <Input
          label="Down Payment (%)"
          value={downPayment}
          onChange={setDownPayment}
        />

        <Input
          label="Interest Rate (%)"
          value={interest}
          onChange={setInterest}
        />

        <Input
          label="Loan Tenure (Years)"
          value={tenure}
          onChange={setTenure}
        />

        <Input
          label="Expected Monthly Rent (₹)"
          value={expectedRent}
          onChange={setExpectedRent}
        />
      </div>

      {/* RESULTS */}
      <div className="grid md:grid-cols-3 gap-10 text-center">
        <Result label="Loan Amount" value={`₹${format(loanAmount)}`} />
        <Result label="Monthly EMI" value={`₹${format(emi)}`} />
        <Result
          label="Estimated ROI"
          value={`${roi.toFixed(2)}%`}
          highlight
        />
      </div>

      <p className="text-sm opacity-60 mt-10 text-center">
        * Calculations are indicative. Actual returns may vary.
      </p>
    </div>
  );
}

/* ---------- SMALL COMPONENTS ---------- */

function Input({ label, value, onChange }) {
  return (
    <div>
      <label className="block mb-2 opacity-70">{label}</label>
      <input
        type="number"
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
        className="w-full p-4 bg-transparent border border-white/20 rounded-lg"
      />
    </div>
  );
}

function Result({ label, value, highlight }) {
  return (
    <div className="glass p-8 rounded-xl border border-white/10">
      <p className="opacity-70 mb-2">{label}</p>
      <p
        className={`text-3xl font-bold ${
          highlight ? "text-green-400" : "text-red-500"
        }`}
      >
        {value}
      </p>
    </div>
  );
}

function format(num) {
  return Math.round(num).toLocaleString("en-IN");
}
