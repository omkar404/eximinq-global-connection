import { useState } from "react";

const QuickForm = () => {
  const [form, setForm] = useState({
    fertilizerType: "",
    state: "",
    mobile: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // replace this with API / email logic
    console.log("Eligibility Check Data:", form);
  };

  return (
    <div className="bg-white text-slate-800 rounded-xl shadow-2xl p-6 md:p-8">
      <h3 className="text-2xl font-bold text-brand-900 mb-2">
        Check Eligibility
      </h3>
      <p className="text-slate-500 mb-6 text-sm">
        Verify product compliance.
      </p>

      <form onSubmit={handleSubmit}>
        {/* Fertilizer Type */}
        <div className="mb-4">
          <label className="block text-sm font-semibold mb-1">
            Fertilizer Type
          </label>
          <select
            name="fertilizerType"
            value={form.fertilizerType}
            onChange={handleChange}
            className="w-full border border-slate-300 rounded px-3 py-2 focus:outline-none focus:border-brand-500"
            required
          >
            <option value="">Select type</option>
            <option>Straight Nitrogenous (Urea)</option>
            <option>Complex (DAP, NPK)</option>
            <option>Water Soluble Fertilizer</option>
            <option>Bio-stimulants (Form G)</option>
            <option>Organic / City Compost</option>
          </select>
        </div>

        {/* State */}
        <div className="mb-4">
          <label className="block text-sm font-semibold mb-1">
            State of Marketing
          </label>
          <input
            type="text"
            name="state"
            value={form.state}
            onChange={handleChange}
            placeholder="e.g. Maharashtra, Punjab"
            className="w-full border border-slate-300 rounded px-3 py-2 focus:outline-none focus:border-brand-500"
            required
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
            className="w-full border border-slate-300 rounded px-3 py-2 focus:outline-none focus:border-brand-500"
            required
          />
        </div>

        {/* Submit */}
        <button
          type="submit"
          className="block w-full bg-brand-600 text-white font-bold py-3 rounded-lg hover:bg-brand-700 transition"
        >
          Verify Status
        </button>
      </form>
    </div>
  );
};

export default QuickForm;


