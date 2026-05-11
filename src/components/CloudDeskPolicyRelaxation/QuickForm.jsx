import { useState } from "react";

const QuickForm = () => {
  const [form, setForm] = useState({
    Issue: "", // 👈 was "Late Submission..."
    regional: "",
    mobile: "",
  });

  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);

  // Handle input changes with mobile sanitization
  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === "mobile") {
      const digitsOnly = value.replace(/\D/g, "").slice(0, 10);
      setForm((prev) => ({ ...prev, [name]: digitsOnly }));
    } else {
      setForm((prev) => ({ ...prev, [name]: value }));
    }

    // Clear error for this field while typing
    setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  // Validation logic
  const validate = () => {
    const newErrors = {};

    if (!form.Issue) {
      newErrors.Issue = "Please select an issue category";
    }
    if (!form.regional.trim()) {
      newErrors.regional = "Regional Authority (RA) is required";
    }
    if (!form.mobile) {
      newErrors.mobile = "Mobile number is required";
    } else if (!/^[6-9]\d{9}$/.test(form.mobile)) {
      newErrors.mobile =
        "Enter a valid 10-digit Indian mobile number (starts with 6-9)";
    }

    return newErrors;
  };

  // Submit handler with API call
  const handleSubmit = async (e) => {
    e.preventDefault();

    const validationErrors = validate();
    setErrors(validationErrors);
    if (Object.keys(validationErrors).length > 0) return;

    setLoading(true);

    try {
      const payload = {
        issue: form.Issue,
        regionalAuthority: form.regional,
        mobile: form.mobile,
        type: "QUICK_FORM",
      };

      console.log("📤 Sending request:", payload);

      const response = await fetch(
        `${process.env.REACT_APP_API_URL}/api/prc-relaxation`,
        // "http://localhost:5000/api/prc-relaxation", // ✅ http:// is required
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload),
        },
      );

      const data = await response.json();

      if (!response.ok || !data.success) {
        throw new Error(data.error || data.message || "Submission failed");
      }

      alert("✅ We have received your PRC request.");

      // Reset form (keep default Issue, clear others)
      setForm({
        Issue: "Late Submission of EODC Documents",
        regional: "",
        mobile: "",
      });
    } catch (err) {
      console.error("❌ API Error:", err);
      alert(`❌ Submission failed: ${err.message}`);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-white text-slate-800 rounded-xl shadow-2xl p-6 md:p-8">
      <h3 className="text-2xl font-bold text-brand-900 mb-2">
        Case Assessment
      </h3>

      <p className="text-slate-500 mb-6 text-sm">
        Verify your Regional registration status.
      </p>

      <form onSubmit={handleSubmit}>
        {/* Issue Category */}
        <div className="mb-4">
          <label className="block text-sm font-semibold mb-1">
            Issue Category
          </label>
          <select
            name="Issue"
            value={form.Issue}
            onChange={handleChange}
            className={`w-full border rounded px-3 py-2 focus:outline-none focus:border-brand-500 ${
              errors.Issue ? "border-red-500" : "border-slate-300"
            }`}
          >
            <option value="" disabled>
              Select the issue
            </option>{" "}
            {/* 👈 added */}
            <option>Late Submission of EODC Documents</option>
            <option>EO Extension Rejection</option>
            <option>Clubbing of License Rejection</option>
            <option>Name/Address Correction Delay</option>
            <option>Other Procedural Lapse</option>
          </select>
          {errors.Issue && (
            <p className="text-red-500 text-xs mt-1">{errors.Issue}</p>
          )}
        </div>

        {/* Regional Authority */}
        <div className="mb-4">
          <label className="block text-sm font-semibold mb-1">
            Regional Authority (RA)
          </label>
          <input
            type="text"
            name="regional"
            value={form.regional}
            onChange={handleChange}
            placeholder="e.g. DGFT Mumbai / Delhi"
            className={`w-full border rounded px-3 py-2 focus:outline-none focus:border-brand-500 ${
              errors.regional ? "border-red-500" : "border-slate-300"
            }`}
          />
          {errors.regional && (
            <p className="text-red-500 text-xs mt-1">{errors.regional}</p>
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
          {loading ? "Submitting..." : "Evaluate Case"}
        </button>
      </form>
    </div>
  );
};

export default QuickForm;
