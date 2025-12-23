import { useState } from "react";

export default function EmiCalculator({ price }) {
  const cleanPrice = Number(price.replace(/[^0-9]/g, ""));

  const [loan, setLoan] = useState(cleanPrice);
  const [rate, setRate] = useState(8.5);
  const [years, setYears] = useState(20);

  const r = rate / 12 / 100;
  const n = years * 12;

  const emi =
    (loan * r * Math.pow(1 + r, n)) /
    (Math.pow(1 + r, n) - 1);

  return (
    <div className="glass p-10 border border-red-600/30">
      <h3 className="text-3xl font-semibold mb-6">
        EMI Calculator (India)
      </h3>

      <div className="grid md:grid-cols-3 gap-6">
        <input
          type="number"
          value={loan}
          onChange={(e) => setLoan(e.target.value)}
          className="p-4 bg-transparent border"
          placeholder="Loan Amount"
        />

        <input
          type="number"
          value={rate}
          onChange={(e) => setRate(e.target.value)}
          className="p-4 bg-transparent border"
          placeholder="Interest %"
        />

        <input
          type="number"
          value={years}
          onChange={(e) => setYears(e.target.value)}
          className="p-4 bg-transparent border"
          placeholder="Years"
        />
      </div>

      <p className="mt-8 text-2xl">
        Monthly EMI:
        <span className="text-red-500 font-bold ml-3">
          ₹{emi.toFixed(0)}
        </span>
      </p>
    </div>
  );
}
