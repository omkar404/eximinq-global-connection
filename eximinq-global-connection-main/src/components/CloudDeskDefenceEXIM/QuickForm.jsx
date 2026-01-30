import { useState } from "react";

const QuickForm = ({ onSubmit }) => {
  const [form, setForm] = useState({
    itemDescription: "",
    endUse: "Military / Armed Forces",
    contact: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Basic validation
    if (!form.itemDescription || !form.contact) return;

    onSubmit?.({
      service: "Technical Assessment",
      source: "Defence Compliance",
      itemDescription: form.itemDescription,
      endUse: form.endUse,
      contact: form.contact,
    });

    // Optional reset
    setForm({
      itemDescription: "",
      endUse: "Military / Armed Forces",
      contact: "",
    });
  };

  return (
    <div className="bg-white text-slate-800 rounded-xl shadow-2xl p-6 md:p-8">
      <h3 className="text-2xl font-bold text-brand-900 mb-2">
        Technical Assessment
      </h3>
      <p className="text-slate-500 mb-6 text-sm">
        Classify your item against the Munitions List.
      </p>

      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Item Description */}
        <div>
          <label className="block text-sm font-semibold mb-1">
            Item Description
          </label>
          <input
            type="text"
            name="itemDescription"
            value={form.itemDescription}
            onChange={handleChange}
            placeholder="e.g. Armor Plate, Night Vision, UAV"
            className="w-full border border-slate-300 rounded px-3 py-2 focus:outline-none focus:border-brand-500"
            required
          />
        </div>

        {/* End Use */}
        <div>
          <label className="block text-sm font-semibold mb-1">
            End Use
          </label>
          <select
            name="endUse"
            value={form.endUse}
            onChange={handleChange}
            className="w-full border border-slate-300 rounded px-3 py-2 focus:outline-none focus:border-brand-500"
          >
            <option>Military / Armed Forces</option>
            <option>Police / Paramilitary</option>
            <option>Civilian / Commercial</option>
            <option>R&D / Testing</option>
          </select>
        </div>

        {/* Contact */}
        <div>
          <label className="block text-sm font-semibold mb-1">
            Contact Securely
          </label>
          <input
            type="tel"
            name="contact"
            value={form.contact}
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
          Verify Classification
        </button>
      </form>
    </div>
  );
};

export default QuickForm;
