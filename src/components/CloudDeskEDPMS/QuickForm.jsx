import { useState } from "react";


const QuickForm = () => {
  const [form, setForm] = useState({
    iec: "",
    bank: "",
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

    if (!form.iec) {
      newErrors.iec = "IEC is required";
    } else if (!/^\d{10}$/.test(form.iec)) {
      newErrors.iec = "Enter valid 10-digit IEC number";
    }

    if (!form.bank) {
      newErrors.bank = "Bank name is required";
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
        iec: form.iec,
        bank: form.bank,
        mobile: form.mobile,
        type: "QUICK_FORM",
      };

      console.log("📤 Sending data:", payload);

      const response = await fetch(
        `${process.env.REACT_APP_API_URL}/api/edpms-ebrc`,
        // "http://localhost:5000/api/edpms-ebrc", // ✅ http:// is required
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

      alert("✅ EDPMS check request submitted successfully");

      // Reset form
      setForm({ iec: "", bank: "", mobile: "" });
      setErrors({});
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
        EDPMS Health Check
      </h3>
      <p className="text-slate-500 mb-6 text-sm">
        Do you have pending Shipping Bills &gt; 9 months?
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
            className={`w-full border rounded px-3 py-2 focus:outline-none focus:border-brand-500 ${
              errors.iec ? "border-red-500" : "border-slate-300"
            }`}
            placeholder="e.g. 0512345678"
          />
          {errors.iec && (
            <p className="text-red-500 text-xs mt-1">{errors.iec}</p>
          )}
        </div>

        {/* Bank Name */}
        <div className="mb-4">
          <label className="block text-sm font-semibold mb-1">
            Bank Name
          </label>
          <input
            type="text"
            name="bank"
            value={form.bank}
            onChange={handleChange}
            className={`w-full border rounded px-3 py-2 focus:outline-none focus:border-brand-500 ${
              errors.bank ? "border-red-500" : "border-slate-300"
            }`}
            placeholder="Authorized Dealer (AD) Bank"
          />
          {errors.bank && (
            <p className="text-red-500 text-xs mt-1">{errors.bank}</p>
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
          {loading ? "Submitting..." : "Check Pending List"}
        </button>
      </form>
    </div>
  );
};

export default QuickForm;
