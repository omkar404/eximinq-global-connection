import { useState } from "react";
import { ShieldAlert, Phone } from "lucide-react";

const QuickForm = ({ onSubmit }) => {
  const [form, setForm] = useState({
    relationshipType: "",
    importValue: "",
    mobile: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.relationshipType || !form.importValue || !form.mobile) return;

    onSubmit?.(form);

    alert(
      "We will assess your valuation risk profile and contact you shortly."
    );

    setForm({
      relationshipType: "",
      importValue: "",
      mobile: "",
    });
  };

  return (
   <div className="bg-white text-slate-800 rounded-xl shadow-2xl p-6 md:p-8">
      {/* Heading */}
      <div className="flex items-center gap-3 mb-2">
        <ShieldAlert className="text-brand-600" size={26} />
        <h3 className="text-2xl font-bold text-brand-900">
          Compliance Risk Check
        </h3>
      </div>

      <p className="text-slate-500 mb-6 text-sm">
        Facing a Customs Hold due to SVB?
      </p>

      <form onSubmit={handleSubmit}>
        {/* Relationship Type */}
        <div className="mb-4">
          <label className="block text-sm font-semibold mb-1">
            Relationship Type
          </label>
          <select
            name="relationshipType"
            value={form.relationshipType}
            onChange={handleChange}
            className="w-full border border-slate-300 rounded px-3 py-2 focus:outline-none focus:border-brand-500"
          >
            <option value="">Select relationship</option>
            <option>Subsidiary / Parent Company</option>
            <option>Joint Venture Partner</option>
            <option>Sole Distributor / Agent</option>
            <option>Common Directors / Management</option>
          </select>
        </div>

        {/* Import Value */}
        <div className="mb-4">
          <label className="block text-sm font-semibold mb-1">
            Annual Import Value (USD)
          </label>
          <input
            type="number"
            name="importValue"
            value={form.importValue}
            onChange={handleChange}
            placeholder="e.g. 5,000,000"
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
              placeholder="+91 74000 96950"
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
          Submit for Assessment
        </button>
      </form>
    </div>
  );
};

export default QuickForm;
