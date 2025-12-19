import { useState } from "react";

const QuickForm = ({ onSubmit }) => {
  const [form, setForm] = useState({
    volume: "",
    port: "Nhava Sheva (JNPT)",
    mobile: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // basic validation
    if (!form.volume || !form.mobile) return;

    onSubmit?.({
      service: "DPD Savings Calculator",
      monthlyVolumeTEUs: form.volume,
      currentPort: form.port,
      mobile: form.mobile,
    });

    // optional reset
    setForm({
      volume: "",
      port: "Nhava Sheva (JNPT)",
      mobile: "",
    });
  };

  return (
    <div className="bg-white text-slate-800 rounded-xl shadow-2xl p-6 md:p-8 border border-slate-200">
      <h3 className="text-2xl font-bold text-port-900 mb-2">
        Savings Calculator
      </h3>
      <p className="text-slate-500 mb-6 text-sm">
        Estimate your DPD savings.
      </p>

      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Monthly Volume */}
        <div>
          <label className="block text-sm font-semibold mb-1">
            Monthly Volume (TEUs)
          </label>
          <input
            type="number"
            name="volume"
            value={form.volume}
            onChange={handleChange}
            placeholder="e.g. 20 Containers"
            required
            className="w-full border border-slate-300 rounded px-3 py-2 focus:outline-none focus:border-brand-500"
          />
        </div>

        {/* Current Port */}
        <div>
          <label className="block text-sm font-semibold mb-1">
            Current Port
          </label>
          <select
            name="port"
            value={form.port}
            onChange={handleChange}
            className="w-full border border-slate-300 rounded px-3 py-2 focus:outline-none focus:border-brand-500"
          >
            <option>Nhava Sheva (JNPT)</option>
            <option>Mundra</option>
            <option>Chennai</option>
            <option>Kolkata</option>
          </select>
        </div>

        {/* Mobile */}
        <div>
          <label className="block text-sm font-semibold mb-1">
            Mobile Number
          </label>
          <input
            type="tel"
            name="mobile"
            value={form.mobile}
            onChange={handleChange}
            placeholder="+91 74000 96950"
            required
            className="w-full border border-slate-300 rounded px-3 py-2 focus:outline-none focus:border-brand-500"
          />
        </div>

        {/* Submit */}
        <button
          type="submit"
          className="w-full bg-brand-600 hover:bg-brand-700 text-white font-bold py-3 rounded-lg transition"
        >
          Calculate Now
        </button>
      </form>
    </div>
  );
};

export default QuickForm;
