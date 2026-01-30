import { useState } from "react";
import { ShieldAlert } from "lucide-react";

const Fees = ({ onSubmit }) => {
  const [form, setForm] = useState({
    licenseType: "",
    port: "",
    dutyValue: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.licenseType || !form.port || !form.dutyValue) return;

    onSubmit?.(form);

    alert("We will audit your pending license and contact you.");

    setForm({
      licenseType: "",
      port: "",
      dutyValue: "",
    });
  };

  return (
    <div className="bg-white text-slate-800 rounded-xl shadow-2xl p-6 md:p-8">
      {/* Heading */}
      <div className="flex items-center gap-3 mb-2">
        <ShieldAlert className="text-brand-600" size={26} />
        <h3 className="text-2xl font-bold text-brand-900">
          Registration Risk Check
        </h3>
      </div>

      <p className="text-slate-500 mb-6 text-sm">
        Facing issues submitting your Bond?
      </p>

      <form onSubmit={handleSubmit}>
        {/* License Type */}
        <div className="mb-4">
          <label className="block text-sm font-semibold mb-1">
            License Type
          </label>
          <select
            name="licenseType"
            value={form.licenseType}
            onChange={handleChange}
            className="w-full border border-slate-300 rounded px-3 py-2 focus:outline-none focus:border-brand-500"
          >
            <option value="">Select license</option>
            <option>EPCG (Capital Goods)</option>
            <option>Advance Authorisation (Inputs)</option>
          </select>
        </div>

        {/* Port of Import */}
        <div className="mb-4">
          <label className="block text-sm font-semibold mb-1">
            Port of Import
          </label>
          <input
            type="text"
            name="port"
            value={form.port}
            onChange={handleChange}
            placeholder="e.g. Nhava Sheva / Mumbai Air Cargo"
            className="w-full border border-slate-300 rounded px-3 py-2 focus:outline-none focus:border-brand-500"
          />
        </div>

        {/* License Value */}
        <div className="mb-6">
          <label className="block text-sm font-semibold mb-1">
            License Value (Duty Saved)
          </label>
          <input
            type="number"
            name="dutyValue"
            value={form.dutyValue}
            onChange={handleChange}
            placeholder="e.g. 5000000"
            className="w-full border border-slate-300 rounded px-3 py-2 focus:outline-none focus:border-brand-500"
          />
        </div>

        {/* Submit */}
        <button
          type="submit"
          className="w-full bg-brand-600 hover:bg-brand-700 text-white font-bold py-3 rounded-lg transition"
        >
          Start Compliance
        </button>
      </form>
    </div>
  );
};

export default Fees;
