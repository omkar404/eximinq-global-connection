import { useState } from "react";

const QuickForm = ({ onSubmit }) => {
  const [form, setForm] = useState({
    workType: "",
    title: "",
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
    alert("We will analyze your work category and contact you.");

    setForm({
      workType: "",
      title: "",
      mobile: "",
    });
  };

  return (
    <div className="bg-white text-slate-800 rounded-xl shadow-2xl p-6 md:p-8">
      <h3 className="text-2xl font-bold text-legal-900 mb-2">
        Work Assessment
      </h3>
      <p className="text-slate-500 mb-6 text-sm">
        What do you want to protect?
      </p>

      <form onSubmit={handleSubmit}>
        {/* Type of Work */}
        <div className="mb-4">
          <label className="block text-sm font-semibold mb-1">
            Type of Work
          </label>
          <select
            name="workType"
            value={form.workType}
            onChange={handleChange}
            className="w-full border border-slate-300 rounded px-3 py-2 focus:outline-none focus:border-brand-500"
          >
            <option value="">Select type</option>
            <option>Literary (Books / Software Code)</option>
            <option>Artistic (Logo / Design)</option>
            <option>Cinematograph Film (Video)</option>
            <option>Sound Recording (Music)</option>
            <option>Musical Work (Composition)</option>
          </select>
        </div>

        {/* Title */}
        <div className="mb-4">
          <label className="block text-sm font-semibold mb-1">
            Title of Work
          </label>
          <input
            type="text"
            name="title"
            value={form.title}
            onChange={handleChange}
            placeholder="e.g. My App v1.0 / Brand Logo"
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
          Check Feasibility
        </button>
      </form>
    </div>
  );
};

export default QuickForm;
