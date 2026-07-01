import { useState } from "react";


const QuickForm = () => {
  const [form, setForm] = useState({
    companyType: "",
    aeoStatus: "",
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

    if (!form.companyType) {
      newErrors.companyType = "Please select your company type";
    }

    if (!form.aeoStatus) {
      newErrors.aeoStatus = "Please select your AEO status";
    }

    if (!form.mobile) {
      newErrors.mobile = "Mobile number is required";
    } else if (!/^[6-9]\d{9}$/.test(form.mobile)) {
      newErrors.mobile = "Enter valid 10 digit Indian mobile number";
    }

    return newErrors;
  };

  /*----------------------
    SUBMIT HANDLER
  -----------------------*/
  const handleSubmit = async (e) => {
    e.preventDefault();

    const validationErrors = validate();
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length > 0) return;

    setLoading(true);

    try {
      const payload = {
        companyType: form.companyType,
        aeoStatus: form.aeoStatus,
        mobile: form.mobile,
        type: "Quick_Form",
      };

      console.log("📤 Sending data:", payload);

      const response = await fetch(
        `${process.env.REACT_APP_API_URL}/api/factory-stuffing`,
        // "http://localhost:5000/api/factory-stuffing", // ✅ http:// is required
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload),
        },
      );

      const data = await response.json();

      if (!response.ok || !data.success) {
        throw new Error(data.error || data.message || "Something went wrong");
      }

      alert("✅ Request submitted successfully");

      // Reset form
      setForm({ companyType: "", aeoStatus: "", mobile: "" });
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
        Eligibility Check
      </h3>
      <p className="text-slate-500 mb-6 text-sm">
        Can you self-seal your cargo?
      </p>

      <form onSubmit={handleSubmit}>
        {/* Company Type */}
        <div className="mb-4">
          <label className="block text-sm font-semibold mb-1">
            Company Type
          </label>
          <select
            name="companyType"
            value={form.companyType}
            onChange={handleChange}
            className={`w-full border rounded px-3 py-2 focus:outline-none focus:border-brand-500 ${
              errors.companyType ? "border-red-500" : "border-slate-300"
            }`}
          >
            <option value="" disabled>
              Select Company Type
            </option>
            <option>Manufacturer Exporter</option>
            <option>Merchant Exporter</option>
            <option>Warehouse / 3PL</option>
          </select>
          {errors.companyType && (
            <p className="text-red-500 text-xs mt-1">{errors.companyType}</p>
          )}
        </div>

        {/* AEO Status */}
        <div className="mb-4">
          <label className="block text-sm font-semibold mb-1">
            AEO Status
          </label>
          <select
            name="aeoStatus"
            value={form.aeoStatus}
            onChange={handleChange}
            className={`w-full border rounded px-3 py-2 focus:outline-none focus:border-brand-500 ${
              errors.aeoStatus ? "border-red-500" : "border-slate-300"
            }`}
          >
            <option value="" disabled>
              Select AEO Status
            </option>
            <option>No AEO Status</option>
            <option>AEO T1</option>
            <option>AEO T2</option>
            <option>AEO T3</option>
          </select>
          {errors.aeoStatus && (
            <p className="text-red-500 text-xs mt-1">{errors.aeoStatus}</p>
          )}
        </div>

        {/* Mobile Number */}
        <div className="mb-4">
          <label className="block text-sm font-semibold mb-1">
            Mobile Number <span className="text-red-500"></span>
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
          {loading ? "Submitting..." : "Verify Eligibility"}
        </button>
      </form>
    </div>
  );
};
export default QuickForm;
