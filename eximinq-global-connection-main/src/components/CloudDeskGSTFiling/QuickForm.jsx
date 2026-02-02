import { useState } from "react";

const QuickForm = ({ onSubmit }) => {
  const [form, setForm] = useState({
    exportType: "With Payment of IGST (Refund)",
    invoices: "",
    mobile: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.mobile) return;

    onSubmit?.(form);

    // same intent as your original inline alert
    alert("We will audit your last return and contact you.");

    setForm({
      exportType: "With Payment of IGST (Refund)",
      invoices: "",
      mobile: "",
    });
  };

  return (
    <div className="bg-white text-slate-800 rounded-xl shadow-2xl p-6 md:p-8">
      <h3 className="text-2xl font-bold text-tax-900 mb-2">
        Filing Health Check 
      </h3>
      <p className="text-slate-500 mb-6 text-sm">
        Verify your export data accuracy.
      </p>

      <form onSubmit={handleSubmit}>
        {/* Export Type */}
        <div className="mb-4">
          <label className="block text-sm font-semibold mb-1">
            Export Type
          </label>
          <select
            name="exportType"
            value={form.exportType}
            onChange={handleChange}
            className="w-full border border-slate-300 rounded px-3 py-2 focus:outline-none focus:border-brand-500"
          >
            <option>With Payment of IGST (Refund)</option>
            <option>Without Payment of IGST (LUT)</option>
            <option>Deemed Export (EOU/EPCG)</option>
            <option>Service Export</option>
          </select>
        </div>

        {/* Monthly Invoices */}
        <div className="mb-4">
          <label className="block text-sm font-semibold mb-1">
            Monthly Invoices (Approx)
          </label>
          <input
            type="number"
            name="invoices"
            value={form.invoices}
            onChange={handleChange}
            placeholder="e.g. 50"
            className="w-full border border-slate-300 rounded px-3 py-2 focus:outline-none focus:border-brand-500"
          />
        </div>

        {/* Mobile */}
        <div className="mb-4">
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
          Check Compliance
        </button>
      </form>
    </div>
  );
};

export default QuickForm;
