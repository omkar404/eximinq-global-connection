import { useState } from "react";

const QuickForm = () => {
  const [form, setForm] = useState({
    product: "",
    investment: "",
    location: "",
  });

  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));

    // Clear that field's error on typing
    setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  /*----------------------
    VALIDATION
  -----------------------*/
  const validate = () => {
    const newErrors = {};

    if (!form.product) {
      newErrors.product = "Product name is required";
    }

    if (!form.investment) {
      newErrors.investment = "Investment amount is required";
    } else if (isNaN(Number(form.investment)) || Number(form.investment) <= 0) {
      newErrors.investment = "Enter a valid positive investment amount";
    }

    // Location is optional, no validation needed

    return newErrors;
  };

  /*----------------------
    SUBMIT HANDLER (API CALL)
  -----------------------*/
  const handleSubmit = async (e) => {
    e.preventDefault();

    const validationErrors = validate();
    setErrors(validationErrors);
    if (Object.keys(validationErrors).length > 0) return;

    setLoading(true);

    try {
      const payload = {
        product: form.product,
        investment: form.investment,
        location: form.location,
        type: "QUICK_FORM",
      };

      console.log("📤 Sending data:", payload);

      const response = await fetch(
        `${process.env.REACT_APP_API_URL}/api/industrial-license`,
      // "http://localhost:5000/api/industrial-license", // ✅ http:// is required
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload),
        }
      );

      const data = await response.json();

      if (!response.ok || !data.success) {
        throw new Error(data.error || data.message || "Something went wrong");
      }

      alert("✅ Category verification request submitted successfully");

      // Reset form
      setForm({
        product: "",
        investment: "",
        location: "",
      });
    } catch (err) {
      console.error("❌ Error:", err);
      alert(`❌ Submission failed: ${err.message}`);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-white text-slate-800 rounded-xl shadow-2xl p-6 md:p-8">
      <h3 className="text-2xl font-bold text-brand-900 mb-2">
        Category Verification
      </h3>
      <p className="text-slate-500 mb-6 text-sm">
        Confirm if your product requires IL or IEM.
      </p>

      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Proposed Product */}
        <div>
          <label className="block text-sm font-semibold mb-1">
            Proposed Product
          </label>
          <input
            type="text"
            name="product"
            value={form.product}
            onChange={handleChange}
            placeholder="e.g. Gunpowder / Ethanol / Aerospace Parts"
            className={`w-full border rounded px-3 py-2 focus:outline-none focus:border-brand-500 ${
              errors.product ? "border-red-500" : "border-slate-300"
            }`}
          />
          {errors.product && (
            <p className="text-red-500 text-xs mt-1">{errors.product}</p>
          )}
        </div>

        {/* Investment */}
        <div>
          <label className="block text-sm font-semibold mb-1">
            Investment (₹ Crores)
          </label>
          <input
            type="text"
            name="investment"
            value={form.investment}
            onChange={handleChange}
            placeholder="e.g. 100"
            className={`w-full border rounded px-3 py-2 focus:outline-none focus:border-brand-500 ${
              errors.investment ? "border-red-500" : "border-slate-300"
            }`}
          />
          {errors.investment && (
            <p className="text-red-500 text-xs mt-1">{errors.investment}</p>
          )}
        </div>

        {/* Location */}
        <div>
          <label className="block text-sm font-semibold mb-1">
            Location
          </label>
          <input
            type="text"
            name="location"
            value={form.location}
            onChange={handleChange}
            placeholder="State / District"
            className="w-full border border-slate-300 rounded px-3 py-2 focus:outline-none focus:border-brand-500"
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          disabled={loading}
          className={`w-full text-white font-bold py-3 rounded-lg transition ${
            loading
              ? "bg-brand-400 cursor-not-allowed"
              : "bg-brand-600 hover:bg-brand-700"
          }`}
        >
          {loading ? "Submitting..." : "Verify Requirement"}
        </button>
      </form>
    </div>
  );
};

export default QuickForm;