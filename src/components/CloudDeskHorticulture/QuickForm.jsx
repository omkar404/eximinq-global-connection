import { useState } from "react";

const QuickForm = ({ onSubmit }) => {
  const [form, setForm] = useState({
    projectType: "Cold Storage / Cold Chain",
    projectCost: "",
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

    // same intent as original inline alert
    alert("We will analyze your project viability and contact you.");

    setForm({
      projectType: "Cold Storage / Cold Chain",
      projectCost: "",
      mobile: "",
    });
  };

  return (
    <div className="bg-white text-slate-800 rounded-xl shadow-2xl p-6 md:p-8">
      <h3 className="text-2xl font-bold text-horti-900 mb-2">
        Project Assessment
      </h3>
      <p className="text-slate-500 mb-6 text-sm">
        Find out your grant potential.
      </p>

      <form onSubmit={handleSubmit}>
        {/* Project Type */}
        <div className="mb-4">
          <label className="block text-sm font-semibold mb-1">
            Project Type
          </label>
          <select
            name="projectType"
            value={form.projectType}
            onChange={handleChange}
            className="w-full border border-slate-300 rounded px-3 py-2 focus:outline-none focus:border-brand-500"
          >
            <option>Cold Storage / Cold Chain</option>
            <option>
              Commercial Horticulture (Open Field/Polyhouse)
            </option>
            <option>Pack House / Ripening Chamber</option>
            <option>Reefer Van / Transport</option>
          </select>
        </div>

        {/* Estimated Project Cost */}
        <div className="mb-4">
          <label className="block text-sm font-semibold mb-1">
            Estimated Project Cost
          </label>
          <input
            type="text"
            name="projectCost"
            value={form.projectCost}
            onChange={handleChange}
            placeholder="e.g. ₹ 2 Crores"
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
          Calculate Subsidy
        </button>
      </form>
    </div>
  );
};

export default QuickForm;
