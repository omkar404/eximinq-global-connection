import { useState } from "react";

export default function QuickForm() {
  const [form, setForm] = useState({
    destinationCountry: "",
    hsCode: "",
    mobile: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!form.destinationCountry || !form.hsCode || !form.mobile) {
      alert("All fields are required");
      return;
    }

    if (form.hsCode.length !== 6) {
      alert("HS Code must be exactly 6 digits");
      return;
    }

    try {
      setLoading(true);

      const res = await fetch(
        `${process.env.REACT_APP_API_URL}/api/duty-check`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(form),
        }
      );

      const data = await res.json();

      if (!res.ok || !data.success) {
        throw new Error(data.error || "API failed");
      }

      // ✅ SUCCESS
      alert("Request submitted successfully");

      // 🔁 RESET FORM — THIS IS THE ONLY RIGHT PLACE
      setForm({
        destinationCountry: "",
        hsCode: "",
        mobile: "",
      });
    } catch (err) {
      console.error("Submit error:", err);
      alert("Submission failed. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-white text-slate-800 rounded-xl shadow-2xl p-6 md:p-8">
      <h3 className="text-2xl font-bold text-brand-900 mb-2">
        Duty Benefit Check
      </h3>

      <p className="text-slate-500 mb-6 text-sm">
        Find applicable agreement for your destination.
      </p>

      <form onSubmit={handleSubmit}>
        {/* Destination Country */}
        <div className="mb-4">
          <label className="block text-sm font-semibold mb-1">
            Destination Country
          </label>
          <input
            type="text"
            name="destinationCountry"
            value={form.destinationCountry}
            onChange={handleChange}
            placeholder="e.g. Thailand / UAE / Australia"
            className="w-full border border-slate-300 rounded px-3 py-2
                       focus:outline-none focus:border-brand-500"
          />
        </div>

        {/* HS Code */}
        <div className="mb-4">
          <label className="block text-sm font-semibold mb-1">
            HS Code (First 6 digits)
          </label>
          <input
            type="text"
            name="hsCode"
            value={form.hsCode}
            onChange={handleChange}
            placeholder="e.g. 870899"
            className="w-full border border-slate-300 rounded px-3 py-2
                       focus:outline-none focus:border-brand-500"
          />
        </div>

        {/* Mobile Number */}
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
            className="w-full border border-slate-300 rounded px-3 py-2
                       focus:outline-none focus:border-brand-500"
          />
        </div>

        {/* Submit */}
        <button
          type="submit"
          disabled={loading}
          className={`w-full text-white font-bold py-3 rounded-lg transition
            ${loading ? "bg-slate-400" : "bg-brand-600 hover:bg-brand-700"}`}
        >
          {loading ? "Checking..." : "Check Benefit"}
        </button>
      </form>
    </div>
  );
}
