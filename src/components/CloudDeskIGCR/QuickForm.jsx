import { useState } from "react";

const QuickForm = ({ setShowEnrollModal, setEnrollSource }) => {
  const [form, setForm] = useState({
    iec: "",
    notification: "",
    mobile: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // basic guard – don't waste backend cycles
    if (!form.iec || !form.mobile) return;

    setEnrollSource("Compliance Check - IGCR / Pending Returns");
    setShowEnrollModal(true);
  };

  return (
    <div className="bg-white text-slate-800 rounded-xl shadow-2xl p-6 md:p-8">
      <h3 className="text-2xl font-bold text-brand-900 mb-2">
        Compliance Check
      </h3>

      <p className="text-slate-500 mb-6 text-sm">
        Verify your pending returns status.
      </p>

      <form onSubmit={handleSubmit}>
        {/* IEC */}
        <div className="mb-4">
          <label className="block text-sm font-semibold mb-1">
            Company IEC
          </label>
          <input
            type="text"
            name="iec"
            value={form.iec}
            onChange={handleChange}
            placeholder="e.g. 0513456789"
            className="w-full border border-slate-300 rounded px-3 py-2
                       focus:outline-none focus:border-brand-500"
          />
        </div>

        {/* Notification */}
        <div className="mb-4">
          <label className="block text-sm font-semibold mb-1">
            Notification No.
          </label>
          <input
            type="text"
            name="notification"
            value={form.notification}
            onChange={handleChange}
            placeholder="e.g. 50/2017-Cus"
            className="w-full border border-slate-300 rounded px-3 py-2
                       focus:outline-none focus:border-brand-500"
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
            required
            placeholder="+91 74000 96950"
            className="w-full border border-slate-300 rounded px-3 py-2
                       focus:outline-none focus:border-brand-500"
          />
        </div>

        {/* CTA */}
        <button
          type="submit"
          className="w-full bg-brand-600 hover:bg-brand-700
                     text-white font-bold py-3 rounded-lg transition"
        >
          Check Status
        </button>
      </form>
    </div>
  );
};

export default QuickForm;

