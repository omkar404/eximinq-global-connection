// components/QuickForm.jsx

import { useState } from "react";

const QuickForm = () => {
  const [form, setForm] = useState({
    port: "",
    cargo: "",
    mobile: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);

      const payload = {
        mobile: form.mobile,
        entity: form.port,
        issue:  form.cargo,
        type:   "QUICK_FORM",
      };

      // FIX 1: fetch result was stored as 'res' but then read as 'response'
      // Renamed to 'response' consistently throughout
      const response = await fetch(
        `${process.env.REACT_APP_API_URL}/api/bill-of-entry-filing`,
        // "http://localhost:5000/api/bill-of-entry-filing",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload),
        }
      );

      const data = await response.json();

      if (!response.ok || !data.success) {
        throw new Error(data.error || data.message || "API failed");
      }

      alert("Request submitted successfully");

      setForm({ port: "", cargo: "", mobile: "" });

    } catch (error) {
      console.error("Submit error:", error.name, error.message);
      alert("Submission failed. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-white text-slate-800 rounded-xl shadow-2xl p-6 md:p-8">

      <h3 className="text-2xl font-bold text-brand-900 mb-2">
        Get Quote for Clearance
      </h3>

      <p className="text-slate-500 mb-6 text-sm">
        Need help with HS Code or Duty?
      </p>

      <form onSubmit={handleSubmit}>

        {/* Port */}
        <div className="mb-4">
          <label className="block text-sm font-semibold mb-1">
            Port of Import
          </label>
          <select
            name="port"
            value={form.port}
            onChange={handleChange}
            required
            className="w-full border border-slate-300 rounded px-3 py-2 focus:outline-none focus:border-brand-500"
          >
            <option value="">Select Port</option>
            <option>Nhava Sheva (Sea)</option>
            <option>Mumbai Air Cargo</option>
            <option>Delhi Air Cargo</option>
            <option>Chennai</option>
            <option>Mundra</option>
          </select>
        </div>

        {/* Cargo */}
        <div className="mb-4">
          <label className="block text-sm font-semibold mb-1">
            Nature of Cargo
          </label>
          <input
            type="text"
            name="cargo"
            value={form.cargo}
            onChange={handleChange}
            placeholder="e.g. Machinery parts, Fabric"
            required
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
          disabled={loading}
          className={`w-full text-white font-bold py-3 rounded-lg transition ${
            loading
              ? "bg-brand-400 cursor-not-allowed"
              : "bg-brand-600 hover:bg-brand-700"
          }`}
        >
          {loading ? "Submitting..." : "Get Estimate"}
        </button>

      </form>
    </div>
  );
};

export default QuickForm;