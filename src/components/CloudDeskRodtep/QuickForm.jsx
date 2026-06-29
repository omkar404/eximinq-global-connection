import { useState } from "react";
import { Calculator } from "lucide-react";
import { getApiUrl } from "../../utils/apiBaseUrl";

const QuickForm = () => {
  const [formData, setFormData] = useState({
    hsnCode: "",
    fobValue: "",
    mobile: "",
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const payload = {
        mobile: formData.mobile,
        type: "QUICK_FORM",
        hsnCode: formData.hsnCode,
        fobValue: formData.fobValue,
      };

    const response = await fetch(
      getApiUrl("/api/rodtep-scheme"),
      // "http://localhost:5000/api/rodtep-scheme", 
      {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Submission failed");
      }

      alert("✅ Submitted successfully!");

      // ✅ Clear form (like a refresh)
      setFormData({
        hsnCode: "",
        fobValue: "",
        mobile: "",
      });
    } catch (error) {
      console.error(error);
      alert(error.message || "Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-white text-slate-800 rounded-xl shadow-2xl p-6 md:p-8">
      <div className="flex items-center gap-3 mb-2">
        <Calculator className="w-7 h-7 text-brand-600" />
        <h3 className="text-2xl font-bold text-brand-900">Benefit Calculator</h3>
      </div>
      <p className="text-slate-500 mb-6 text-sm">Estimate your export refund.</p>

      <form onSubmit={handleSubmit}>
        {/* HSN Code */}
        <div className="mb-4">
          <label className="block text-sm font-semibold mb-1">
            HSN Code (Export)
          </label>
          <input
            type="text"
            name="hsnCode"
            value={formData.hsnCode}
            onChange={handleChange}
            className="w-full border border-slate-300 rounded px-3 py-2 focus:outline-none focus:border-brand-500"
            placeholder="e.g. 6109 (T-Shirts)"
            required
          />
        </div>

        {/* FOB Value */}
        <div className="mb-4">
          <label className="block text-sm font-semibold mb-1">
            FOB Value (INR)
          </label>
          <input
            type="number"
            name="fobValue"
            value={formData.fobValue}
            onChange={handleChange}
            className="w-full border border-slate-300 rounded px-3 py-2 focus:outline-none focus:border-brand-500"
            placeholder="e.g. 5000000"
            required
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
            value={formData.mobile}
            onChange={handleChange}
            className="w-full border border-slate-300 rounded px-3 py-2 focus:outline-none focus:border-brand-500"
            placeholder="9876543210"
            required
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          disabled={loading}
          className="w-full bg-brand-600 hover:bg-brand-700 text-white font-bold py-3 rounded-lg transition disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {loading ? "Submitting..." : "Calculate Value"}
        </button>
      </form>
    </div>
  );
};

export default QuickForm;
