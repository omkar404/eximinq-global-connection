import { useState } from "react";

const QuickForm = () => {
  const [form, setForm] = useState({
    issueType: "",              // 👈 starts empty, user must select
    noticeDate: "",
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

    // Clear error for this field
    setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  // Validation
  const validate = () => {
    const newErrors = {};

    if (!form.issueType) {
      newErrors.issueType = "Please select an issue type";
    }
    if (!form.noticeDate) {
      newErrors.noticeDate = "Notice date is required";
    }
    if (!form.mobile) {
      newErrors.mobile = "Mobile number is required";
    } else if (!/^[6-9]\d{9}$/.test(form.mobile)) {
      newErrors.mobile = "Enter a valid 10-digit Indian mobile number";
    }

    return newErrors;
  };

  // Submit handler
  const handleSubmit = async (e) => {
    e.preventDefault();

    const validationErrors = validate();
    setErrors(validationErrors);
    if (Object.keys(validationErrors).length > 0) return;

    setLoading(true);

    try {
      const payload = {
        issueType: form.issueType,
        noticeDate: form.noticeDate,
        mobile: form.mobile,
        type: "QUICK_FORM",
      };

      console.log("📤 Sending data:", payload);

      const response = await fetch(
        `${process.env.REACT_APP_API_URL}/api/customs-adjudication`,
        // "http://localhost:5000/api/customs-adjudication",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload),
        }
      );

      const data = await response.json();

      if (!response.ok || !data.success) {
        throw new Error(data.error || data.message || "Submission failed");
      }

      alert("✅ Our legal team will review your case details and contact you.");

      // Reset form (keep default empty issueType)
      setForm({
        issueType: "",
        noticeDate: "",
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
        Legal Consultation
      </h3>
      <p className="text-slate-500 mb-6 text-sm">
        Brief us about your case.
      </p>

      <form onSubmit={handleSubmit}>
        {/* Issue Type */}
        <div className="mb-4">
          <label className="block text-sm font-semibold mb-1">
            Issue Type
          </label>
          <select
            name="issueType"
            value={form.issueType}
            onChange={handleChange}
            className={`w-full border rounded px-3 py-2 focus:outline-none focus:border-brand-500 ${
              errors.issueType ? "border-red-500" : "border-slate-300"
            }`}
          >
            <option value="" disabled>Select the issue</option>  {/* 👈 default option */}
            <option>Show Cause Notice (SCN)</option>
            <option>Personal Hearing (PH)</option>
            <option>Order In Original (OIO) Appeal</option>
            <option>IGST Refund Withheld</option>
            <option>DRI / SIIB Investigation</option>
          </select>
          {errors.issueType && (
            <p className="text-red-500 text-xs mt-1">{errors.issueType}</p>
          )}
        </div>

        {/* Notice Date */}
        <div className="mb-4">
          <label className="block text-sm font-semibold mb-1">
            Notice Date
          </label>
          <input
            type="date"
            name="noticeDate"
            value={form.noticeDate}
            onChange={handleChange}
            className={`w-full border rounded px-3 py-2 focus:outline-none focus:border-brand-500 ${
              errors.noticeDate ? "border-red-500" : "border-slate-300"
            }`}
          />
          {errors.noticeDate && (
            <p className="text-red-500 text-xs mt-1">{errors.noticeDate}</p>
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
            placeholder="e.g. 9876543210"
            maxLength={10}
            className={`w-full border rounded px-3 py-2 focus:outline-none focus:border-brand-500 ${
              errors.mobile ? "border-red-500" : "border-slate-300"
            }`}
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
          {loading ? "Submitting..." : "Get Legal Advice"}
        </button>
      </form>
    </div>
  );
};

export default QuickForm;