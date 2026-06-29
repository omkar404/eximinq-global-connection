import { useState } from "react";
import { getApiUrl } from "../../utils/apiBaseUrl";

const QuickForm = () => {
  const [form, setForm] = useState({
    companyStatus: "MSME Manufacturer",
    loanAmount: "",
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

    if (!form.loanAmount) {
      newErrors.loanAmount = "Loan amount is required";
    } else if (isNaN(Number(form.loanAmount)) || Number(form.loanAmount) <= 0) {
      newErrors.loanAmount = "Enter a valid positive loan amount";
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
        companyStatus: form.companyStatus,
        loanAmount: form.loanAmount,
        mobile: form.mobile,
        type: "QUICK_FORM",      // or any identifier your backend expects
      };

      console.log("📤 Sending data:", payload);

      const response = await fetch(
        getApiUrl("/api/interest-equalisation-scheme"),
          //  "http://localhost:5000/api/interest-equalisation-scheme", // ✅ http:// is required
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

      alert("✅ Subsidy calculation request submitted successfully");

      // Reset form (keep default companyStatus, clear other fields)
      setForm({
        companyStatus: "MSME Manufacturer",
        loanAmount: "",
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
      <h3 className="text-2xl font-bold text-brand-900 mb-2">
        Benefit Calculator
      </h3>
      <p className="text-slate-500 mb-6 text-sm">
        How much interest can you save?
      </p>

      <form onSubmit={handleSubmit}>
        {/* Company Status */}
        <div className="mb-4">
          <label className="block text-sm font-semibold mb-1">
            Company Status
          </label>
          <select
            name="companyStatus"
            value={form.companyStatus}
            onChange={handleChange}
            className="w-full border border-slate-300 rounded px-3 py-2 focus:outline-none focus:border-brand-500"
          >
            <option>MSME Manufacturer</option>
            <option>Non-MSME Manufacturer</option>
            <option>Merchant Exporter</option>
          </select>
        </div>

        {/* Loan Amount */}
        <div className="mb-4">
          <label className="block text-sm font-semibold mb-1">
            Total Loan Amount (₹)
          </label>
          <input
            type="text"
            name="loanAmount"
            value={form.loanAmount}
            onChange={handleChange}
            placeholder="e.g. 2000000"
            className={`w-full border rounded px-3 py-2 focus:outline-none focus:border-brand-500 ${
              errors.loanAmount ? "border-red-500" : "border-slate-300"
            }`}
          />
          {errors.loanAmount && (
            <p className="text-red-500 text-xs mt-1">{errors.loanAmount}</p>
          )}
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
            className={`w-full border rounded px-3 py-2 focus:outline-none focus:border-brand-500 ${
              errors.mobile ? "border-red-500" : "border-slate-300"
            }`}
            placeholder="e.g. 9876543210"
            maxLength={10}
          />
          {errors.mobile && (
            <p className="text-red-500 text-xs mt-1">{errors.mobile}</p>
          )}
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
          {loading ? "Submitting..." : "Calculate Subsidy"}
        </button>
      </form>
    </div>
  );
};

export default QuickForm;
