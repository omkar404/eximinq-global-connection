import { useState } from "react";
import { Building2, Mail, User } from "lucide-react";
import { submitServiceQuickForm } from "../../utils/submitServiceQuickForm";

const QuickForm = () => {
  const [form, setForm] = useState({
    companyName: "",
    contactPersonName: "",
    email: "",
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

    if (!form.companyName.trim()) {
      newErrors.companyName = "Company name is required";
    }
    if (!form.contactPersonName.trim()) {
      newErrors.contactPersonName = "Contact person name is required";
    }
    if (!form.email.trim()) {
      newErrors.email = "Email ID is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim())) {
      newErrors.email = "Enter a valid email ID";
    }
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
        serviceKey: "prc-relaxation",
        serviceLabel: "Policy Relaxation Committee Representation",
        companyName: form.companyName.trim(),
        contactPersonName: form.contactPersonName.trim(),
        email: form.email.trim(),
        mobile: form.mobile.trim(),
        type: "QUICK_FORM",
        source: "PRC Case Assessment",
        details: {
          "Company Name": form.companyName.trim(),
          "Contact Person Name": form.contactPersonName.trim(),
          "Email ID": form.email.trim(),
          "Issue Category": form.Issue,
          "Regional Authority (RA)": form.regional.trim(),
          "Mobile Number": form.mobile.trim(),
        },
      };

      console.log("📤 Sending request:", payload);

      await submitServiceQuickForm(payload);

      alert("✅ We have received your PRC request.");

      // Reset form (keep default Issue, clear others)
      setForm({
        companyName: "",
        contactPersonName: "",
        email: "",
        Issue: "",
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

      <form
        onSubmit={handleSubmit}
        noValidate
        className="grid grid-cols-1 md:grid-cols-2 gap-4"
      >
        {/* Company Name */}
        <div>
          <label className="block text-sm font-semibold mb-1">
            Company Name <span className="text-red-500">*</span>
          </label>
          <div className="relative">
            <Building2 className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 w-4 h-4" />
            <input
              type="text"
              name="companyName"
              value={form.companyName}
              onChange={handleChange}
              placeholder="e.g. ABC Exports Pvt Ltd"
              className={`w-full border rounded px-3 py-2 pl-10 focus:outline-none focus:border-brand-500 ${
                errors.companyName ? "border-red-500" : "border-slate-300"
              }`}
            />
          </div>
          {errors.companyName && (
            <p className="text-red-500 text-xs mt-1">{errors.companyName}</p>
          )}
        </div>

        {/* Contact Person Name */}
        <div>
          <label className="block text-sm font-semibold mb-1">
            Contact Person Name <span className="text-red-500">*</span>
          </label>
          <div className="relative">
            <User className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 w-4 h-4" />
            <input
              type="text"
              name="contactPersonName"
              value={form.contactPersonName}
              onChange={handleChange}
              placeholder="e.g. Rohan Mehta"
              className={`w-full border rounded px-3 py-2 pl-10 focus:outline-none focus:border-brand-500 ${
                errors.contactPersonName ? "border-red-500" : "border-slate-300"
              }`}
            />
          </div>
          {errors.contactPersonName && (
            <p className="text-red-500 text-xs mt-1">
              {errors.contactPersonName}
            </p>
          )}
        </div>

        {/* Email ID */}
        <div className="md:col-span-2">
          <label className="block text-sm font-semibold mb-1">
            Email ID <span className="text-red-500">*</span>
          </label>
          <div className="relative">
            <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 w-4 h-4" />
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="official@company.com"
              className={`w-full border rounded px-3 py-2 pl-10 focus:outline-none focus:border-brand-500 ${
                errors.email ? "border-red-500" : "border-slate-300"
              }`}
            />
          </div>
          {errors.email && (
            <p className="text-red-500 text-xs mt-1">{errors.email}</p>
          )}
        </div>

        {/* Issue Category */}
        <div className="md:col-span-2">
          <label className="block text-sm font-semibold mb-1">
            Issue Category <span className="text-red-500">*</span>
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
        <div className="md:col-span-2">
          <label className="block text-sm font-semibold mb-1">
            Regional Authority (RA) <span className="text-red-500">*</span>
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
        <div className="md:col-span-2">
          <label className="block text-sm font-semibold mb-1">
            Mobile Number <span className="text-red-500">*</span>
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
          className={`md:col-span-2 w-full text-white font-bold py-3 rounded-lg transition ${
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
