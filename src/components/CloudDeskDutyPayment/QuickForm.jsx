import { useState } from "react";
import { Calculator } from "lucide-react";

const QuickForm = () => {
  const [form, setForm] = useState({
    hsn: "",
    cifValue: "",
    country: "",
    mobile: "",
  });

  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === "mobile") {
      const digitsOnly = value.replace(/\D/g, "").slice(0, 10);
      setForm((prev) => ({ ...prev, [name]: digitsOnly }));
    } else {
      setForm((prev) => ({ ...prev, [name]: value }));
    }

    // Clear that field's error on typing
    setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  /*----------------------
    VALIDATION
  -----------------------*/
  const validate = () => {
    const newErrors = {};

    if (!form.hsn) {
      newErrors.hsn = "HSN Code is required";
    }
    if (!form.cifValue) {
      newErrors.cifValue = "CIF Value is required";
    } else if (isNaN(Number(form.cifValue)) || Number(form.cifValue) <= 0) {
      newErrors.cifValue = "Enter a valid positive CIF value";
    }
    if (!form.country) {
      newErrors.country = "Country of origin is required";
    }
    if (!form.mobile) {
      newErrors.mobile = "Mobile number is required";
    } else if (!/^[6-9]\d{9}$/.test(form.mobile)) {
      newErrors.mobile = "Enter valid 10 digit Indian mobile number";
    }

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
        hsn: form.hsn,
        cifValue: form.cifValue,
        country: form.country,
        mobile: form.mobile,
        type: "QUICK_FORM",
      };

      console.log("📤 Sending data:", payload);

      const response = await fetch(
        `${process.env.REACT_APP_API_URL}/api/duty-payment-ecl`,
        // "http://localhost:5000/api/duty-payment-ecl", // ✅ http:// is required  
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

      alert("✅ Duty calculation request submitted successfully");

      // Reset form
      setForm({
        hsn: "",
        cifValue: "",
        country: "",
        mobile: "",
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
      {/* Heading */}
      <h3 className="text-2xl font-bold text-brand-900 mb-2 flex items-center gap-2">
        <Calculator className="text-brand-600" size={24} />
        Duty Calculator
      </h3>

      <p className="text-slate-500 mb-6 text-sm">
        Get an estimate before the shipment arrives.
      </p>

      <form onSubmit={handleSubmit}>
        {/* HSN Code */}
        <div className="mb-4">
          <label className="block text-sm font-semibold mb-1">HSN Code</label>
          <input
            type="text"
            name="hsn"
            value={form.hsn}
            onChange={handleChange}
            className={`w-full border rounded px-3 py-2 focus:outline-none focus:border-brand-500 ${
              errors.hsn ? "border-red-500" : "border-slate-300"
            }`}
            placeholder="e.g. 8504"
          />
          {errors.hsn && <p className="text-red-500 text-xs mt-1">{errors.hsn}</p>}
        </div>

        {/* CIF Value */}
        <div className="mb-4">
          <label className="block text-sm font-semibold mb-1">CIF Value (INR)</label>
          <input
            type="text"
            name="cifValue"
            value={form.cifValue}
            onChange={handleChange}
            className={`w-full border rounded px-3 py-2 focus:outline-none focus:border-brand-500 ${
              errors.cifValue ? "border-red-500" : "border-slate-300"
            }`}
            placeholder="e.g. 1000000"
          />
          {errors.cifValue && <p className="text-red-500 text-xs mt-1">{errors.cifValue}</p>}
        </div>

        {/* Country of Origin */}
        <div className="mb-4">
          <label className="block text-sm font-semibold mb-1">Country of Origin</label>
          <input
            type="text"
            name="country"
            value={form.country}
            onChange={handleChange}
            className={`w-full border rounded px-3 py-2 focus:outline-none focus:border-brand-500 ${
              errors.country ? "border-red-500" : "border-slate-300"
            }`}
            placeholder="e.g. China / Japan"
          />
          {errors.country && <p className="text-red-500 text-xs mt-1">{errors.country}</p>}
        </div>

        {/* Mobile Number */}
        <div className="mb-6">
          <label className="block text-sm font-semibold mb-1">Mobile Number</label>
          <input
            type="tel"
            name="mobile"
            value={form.mobile}
            onChange={handleChange}
            className={`w-full border rounded px-3 py-2 focus:outline-none focus:border-brand-500 ${
              errors.mobile ? "border-red-500" : "border-slate-300"
            }`}
            placeholder="e.g. 9876543210"
            maxLength={10}
          />
          {errors.mobile && <p className="text-red-500 text-xs mt-1">{errors.mobile}</p>}
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
          {loading ? "Submitting..." : "Calculate Now"}
        </button>
      </form>
    </div>
  );
};

export default QuickForm;