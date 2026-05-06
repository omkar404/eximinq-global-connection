import { useState } from "react";

const QuickForm = () => {
  const [form, setForm] = useState({
    standard: "",
    accreditation: "",
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

    // Clear error for this field on typing
    setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const validate = () => {
    const newErrors = {};

    if (!form.standard) {
      newErrors.standard = "Please select an ISO standard";
    }
    if (!form.accreditation) {
      newErrors.accreditation = "Please select an accreditation type";
    }
    if (!form.mobile) {
      newErrors.mobile = "Mobile number is required";
    } else if (!/^[6-9]\d{9}$/.test(form.mobile)) {
      newErrors.mobile = "Enter valid 10 digit Indian mobile number";
    }

    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const validationErrors = validate();
    setErrors(validationErrors);
    if (Object.keys(validationErrors).length > 0) return;

    setLoading(true);

    try {
      const payload = {
        standard: form.standard,
        accreditation: form.accreditation,
        mobile: form.mobile,
        type: "QUICK_FORM",
      };

      console.log("📤 Sending data:", payload);

      const response = await fetch(
        `${process.env.REACT_APP_API_URL}/api/iso-certification`,
        // "http://localhost:5000/api/iso-certification", // ✅ http:// is required        
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

      alert("✅ Certification enquiry submitted successfully");

      // Reset form
      setForm({
        standard: "",
        accreditation: "",
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
        Certification Enquiry
      </h3>

      <p className="text-slate-500 mb-6 text-sm">
        Which standard do you need?
      </p>

      <form onSubmit={handleSubmit}>
        {/* ISO Standard */}
        <div className="mb-4">
          <label className="block text-sm font-semibold mb-1">
            ISO Standard
          </label>
          <select
            name="standard"
            value={form.standard}
            onChange={handleChange}
            className={`w-full border rounded px-3 py-2 focus:outline-none focus:border-brand-500 ${
              errors.standard ? "border-red-500" : "border-slate-300"
            }`}
          >
            <option value="" disabled>Select type</option>
            <option>ISO 9001:2015 (Quality)</option>
            <option>ISO 14001:2015 (Environment)</option>
            <option>ISO 45001:2018 (Health & Safety)</option>
            <option>ISO 27001:2022 (Info Security)</option>
            <option>ISO 22000:2018 (Food Safety)</option>
          </select>
          {errors.standard && (
            <p className="text-red-500 text-xs mt-1">{errors.standard}</p>
          )}
        </div>

        {/* Accreditation Type */}
        <div className="mb-4">
          <label className="block text-sm font-semibold mb-1">
            Accreditation Type
          </label>
          <select
            name="accreditation"
            value={form.accreditation}
            onChange={handleChange}
            className={`w-full border rounded px-3 py-2 focus:outline-none focus:border-brand-500 ${
              errors.accreditation ? "border-red-500" : "border-slate-300"
            }`}
          >
            <option value="" disabled>Select type</option>
            <option>IAF (For Tenders/Export)</option>
            <option>Non-IAF (For Branding/Internal)</option>
          </select>
          {errors.accreditation && (
            <p className="text-red-500 text-xs mt-1">{errors.accreditation}</p>
          )}
        </div>

        {/* Mobile Number */}
        <div className="mb-6">
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
              : "bg-yellow-600 hover:bg-yellow-800"
          }`}
        >
          {loading ? "Submitting..." : "Get Best Price"}
        </button>
      </form>
    </div>
  );
};

export default QuickForm;