import { useState } from "react";
import { FileCheck, Phone } from "lucide-react";

const Fees = ({ onSubmit }) => {
  const [form, setForm] = useState({
    certificateType: "",
    financialYear: "",
    mobile: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.certificateType || !form.financialYear || !form.mobile) return;

    onSubmit?.(form);

    alert("We will send you the document checklist and quotation.");

    setForm({
      certificateType: "",
      financialYear: "",
      mobile: "",
    });
  };

  return (
    <div className="bg-white text-slate-800 rounded-xl shadow-2xl p-6 md:p-8">
      {/* Heading */}
      <div className="flex items-center gap-3 mb-2">
        <FileCheck className="text-brand-600" size={26} />
        <h3 className="text-2xl font-bold text-brand-900">
          CA Service Request
        </h3>
      </div>

      <p className="text-slate-500 mb-6 text-sm">
        Select the type of audit required.
      </p>

      <form onSubmit={handleSubmit}>
        {/* Certificate Type */}
        <div className="mb-4">
          <label className="block text-sm font-semibold mb-1">
            Certificate Type
          </label>
          <select
            name="certificateType"
            value={form.certificateType}
            onChange={handleChange}
            className="w-full border border-slate-300 rounded px-3 py-2 focus:outline-none focus:border-brand-500"
          >
            <option value="">Select certificate</option>
            <option>Annual Export Turnover</option>
            <option>Export Obligation Discharge (EODC)</option>
            <option>Foreign Exchange Earning</option>
            <option>Status Holder Application (3 Years)</option>
            <option>Average Export Performance</option>
          </select>
        </div>

        {/* Financial Year */}
        <div className="mb-4">
          <label className="block text-sm font-semibold mb-1">
            Financial Year (FY)
          </label>
          <input
            type="text"
            name="financialYear"
            value={form.financialYear}
            onChange={handleChange}
            placeholder="e.g. 2023–24"
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
          Get Checklist &amp; Quote
        </button>
      </form>
    </div>
  );
};

export default Fees;
