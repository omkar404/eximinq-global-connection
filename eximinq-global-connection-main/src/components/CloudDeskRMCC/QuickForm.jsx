import { useState } from "react";
import { AlertTriangle, Phone } from "lucide-react";

const QuickForm = ({ onSubmit }) => {
  const [form, setForm] = useState({
    boe: "",
    portCode: "",
    mobile: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.boe || !form.portCode || !form.mobile) return;

    onSubmit?.(form);

    alert(
      "We are checking your Bill of Entry status on ICEGATE and will call you back within 15 minutes."
    );

    setForm({
      boe: "",
      portCode: "",
      mobile: "",
    });
  };

  return (
    <div className="bg-white text-slate-800 rounded-xl shadow-2xl p-6 md:p-8">
      {/* Heading */}
      <div className="flex items-center gap-3 mb-2">
        <AlertTriangle className="text-alert-600" size={28} />
        <h3 className="text-2xl font-bold text-alert-900">
          Emergency Hold Check
        </h3>
      </div>

      <p className="text-slate-500 mb-6 text-sm">
        Submit your Bill of Entry number for instant status.
      </p>

      <form onSubmit={handleSubmit}>
        {/* BOE */}
        <div className="mb-4">
          <label className="block text-sm font-semibold mb-1">
            Bill of Entry (BOE) Number
          </label>
          <input
            type="text"
            name="boe"
            value={form.boe}
            onChange={handleChange}
            placeholder="e.g. 7894561"
            className="w-full border border-slate-300 rounded px-3 py-2 focus:outline-none focus:border-brand-500"
          />
        </div>

        {/* Port Code */}
        <div className="mb-4">
          <label className="block text-sm font-semibold mb-1">
            Port Code
          </label>
          <input
            type="text"
            name="portCode"
            value={form.portCode}
            onChange={handleChange}
            placeholder="e.g. INNSA1 / INDEL6"
            className="w-full border border-slate-300 rounded px-3 py-2 focus:outline-none focus:border-brand-500"
          />
        </div>

        {/* Mobile */}
        <div className="mb-6">
          <label className="block text-sm font-semibold mb-1">
            Mobile Number
          </label>
          <div className="relative">
            <Phone
              size={16}
              className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
            />
            <input
              type="tel"
              name="mobile"
              value={form.mobile}
              onChange={handleChange}
              placeholder="+91 74000 96950 (Must be reachable)"
              required
              className="w-full pl-9 border border-slate-300 rounded px-3 py-2 focus:outline-none focus:border-brand-500"
            />
          </div>
        </div>

        {/* Submit */}
        <button
          type="submit"
         className="w-full bg-brand-600 hover:bg-brand-700 text-white font-bold py-3 rounded-lg transition"
        >
          Check Status & Intervene
        </button>
      </form>
    </div>
  );
};

export default QuickForm;


