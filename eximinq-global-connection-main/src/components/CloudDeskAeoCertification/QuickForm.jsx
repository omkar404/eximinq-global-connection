import { useState } from "react";
import { ShieldCheck, Phone } from "lucide-react";

const QuickForm = ({ onSubmit }) => {
  const [form, setForm] = useState({
    businessType: "",
    yearsInBusiness: "",
    mobile: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.businessType || !form.yearsInBusiness || !form.mobile) return;

    onSubmit?.(form);

    alert("We will schedule a preliminary AEO audit call.");

    setForm({
      businessType: "",
      yearsInBusiness: "",
      mobile: "",
    });
  };

  return (
    <div className="bg-white text-slate-800 rounded-xl shadow-2xl p-6 md:p-8">
      {/* Heading */}
      <div className="flex items-center gap-3 mb-2">
        <ShieldCheck className="text-brand-600" size={26} />
        <h3 className="text-2xl font-bold text-brand-900">
          AEO Readiness Check
        </h3>
      </div>

      <p className="text-slate-500 mb-6 text-sm">
        Find out if you qualify for T1 or T2 status.
      </p>

      <form onSubmit={handleSubmit}>
        {/* Business Type */}
        <div className="mb-4">
          <label className="block text-sm font-semibold mb-1">
            Business Type
          </label>
          <select
            name="businessType"
            value={form.businessType}
            onChange={handleChange}
            className="w-full border border-slate-300 rounded px-3 py-2 focus:outline-none focus:border-brand-500"
          >
            <option value="">Select business type</option>
            <option>Importer / Exporter</option>
            <option>Logistics Provider (CHA / Freight)</option>
            <option>Warehouse Operator</option>
            <option>Custodian / Terminal</option>
          </select>
        </div>

        {/* Years in Business */}
        <div className="mb-4">
          <label className="block text-sm font-semibold mb-1">
            Years in Business
          </label>
          <select
            name="yearsInBusiness"
            value={form.yearsInBusiness}
            onChange={handleChange}
            className="w-full border border-slate-300 rounded px-3 py-2 focus:outline-none focus:border-brand-500"
          >
            <option value="">Select duration</option>
            <option>Less than 3 Years</option>
            <option>More than 3 Years</option>
          </select>
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
          Request Audit
        </button>
      </form>
    </div>
  );
};

export default QuickForm;

