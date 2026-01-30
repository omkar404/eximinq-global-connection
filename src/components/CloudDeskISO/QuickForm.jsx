import { useState } from "react";

const QuickForm = ({ setShowEnrollModal, setEnrollSource }) => {
  const [form, setForm] = useState({
    standard: "ISO 9001:2015 (Quality)",
    accreditation: "IAF (For Tenders/Export)",
    mobile: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.mobile) return;

    // source is explicit + useful for email subject
    setEnrollSource(
      `ISO Certification - ${form.standard} - ${form.accreditation}`
    );
    setShowEnrollModal(true);
  };

  return (
    <div className="bg-white text-slate-800 rounded-xl shadow-2xl p-6 md:p-8">
      <h3 className="text-2xl font-bold text-brand-900 mb-2">
        Certification Enquiry
      </h3>

      <p className="text-slate-500 mb-6 text-sm">
        Which standard do you need?
      </p>

      <form onSubmit={handleSubmit}>
        {/* ISO Standard */}
        <div className="mb-4">
          <label className="block text-sm font-semibold mb-1">
            ISO Standard
          </label>
          <select
            name="standard"
            value={form.standard}
            onChange={handleChange}
            className="w-full border border-slate-300 rounded px-3 py-2
                       focus:outline-none focus:border-brand-500"
          >
            <option>ISO 9001:2015 (Quality)</option>
            <option>ISO 14001:2015 (Environment)</option>
            <option>ISO 45001:2018 (Health & Safety)</option>
            <option>ISO 27001:2022 (Info Security)</option>
            <option>ISO 22000:2018 (Food Safety)</option>
          </select>
        </div>

        {/* Accreditation */}
        <div className="mb-4">
          <label className="block text-sm font-semibold mb-1">
            Accreditation Type
          </label>
          <select
            name="accreditation"
            value={form.accreditation}
            onChange={handleChange}
            className="w-full border border-slate-300 rounded px-3 py-2
                       focus:outline-none focus:border-brand-500"
          >
            <option>IAF (For Tenders/Export)</option>
            <option>Non-IAF (For Branding/Internal)</option>
          </select>
        </div>

        {/* Mobile */}
        <div className="mb-6">
          <label className="block text-sm font-semibold mb-1">
            Mobile Number
          </label>
          <input
            type="tel"
            name="mobile"
            value={form.mobile}
            onChange={handleChange}
            required
            placeholder="+91 74000 96950"
            className="w-full border border-slate-300 rounded px-3 py-2
                       focus:outline-none focus:border-brand-500"
          />
        </div>

        {/* CTA */}
        <button
          type="submit"
          className="w-full bg-yellow-600 hover:bg-yellow-800
                     text-white font-bold py-3 rounded-lg transition"
        >
          Get Best Price
        </button>
      </form>
    </div>
  );
};

export default QuickForm;


