import { useState } from "react";
import { Warehouse, Phone } from "lucide-react";

const Fees = ({ onSubmit }) => {
  const [form, setForm] = useState({
    type: "",
    location: "",
    mobile: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.type || !form.location || !form.mobile) return;

    onSubmit?.(form);

    alert(
      "We will check your facility readiness and compliance requirements."
    );

    setForm({
      type: "",
      location: "",
      mobile: "",
    });
  };

  return (
    <div className="bg-white text-slate-800 rounded-xl shadow-2xl p-6 md:p-8">
      {/* Heading */}
      <div className="flex items-center gap-3 mb-2">
        <Warehouse className="text-brand-600" size={26} />
        <h3 className="text-2xl font-bold text-brand-900">
          License Feasibility Check
        </h3>
      </div>

      <p className="text-slate-500 mb-6 text-sm">
        Find the right license for your operations.
      </p>

      <form onSubmit={handleSubmit}>
        {/* Proposed Type */}
        <div className="mb-4">
          <label className="block text-sm font-semibold mb-1">
            Proposed Type
          </label>
          <select
            name="type"
            value={form.type}
            onChange={handleChange}
            className="w-full border border-slate-300 rounded px-3 py-2 focus:outline-none focus:border-brand-500"
          >
            <option value="">Select type</option>
            <option>Public Bonded Warehouse (Section 57)</option>
            <option>Private Bonded Warehouse (Section 58)</option>
            <option>Manufacturing Warehouse (MOOWR – Sec 65)</option>
            <option>General Storage</option>
          </select>
        </div>

        {/* Location */}
        <div className="mb-4">
          <label className="block text-sm font-semibold mb-1">
            Location
          </label>
          <input
            type="text"
            name="location"
            value={form.location}
            onChange={handleChange}
            placeholder="e.g. Near JNPT, Mumbai"
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
          Get Compliance Report
        </button>
      </form>
    </div>
  );
};

export default Fees;
