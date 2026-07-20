import { useState } from "react";
import { Building2, Mail, User } from "lucide-react";
import { submitServiceQuickForm } from "../../utils/submitServiceQuickForm";

const QuickForm = () => {
  const [form, setForm] = useState({
    companyName: "",
    contactPersonName: "",
    email: "",
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

    if (!form.companyName.trim()) {
      newErrors.companyName = "Company name is required";
    }
    if (!form.contactPersonName.trim()) {
      newErrors.contactPersonName = "Contact person name is required";
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!form.email.trim()) {
      newErrors.email = "Email ID is required";
    } else if (!emailRegex.test(form.email.trim())) {
      newErrors.email = "Enter a valid email ID";
    }
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
        serviceKey: "customs-adjudication",
        serviceLabel: "Customs Adjudication Legal Consultation",
        companyName: form.companyName.trim(),
        contactPersonName: form.contactPersonName.trim(),
        email: form.email.trim(),
        mobile: form.mobile.trim(),
        type: "QUICK_FORM",
        source: "Customs Adjudication Legal Consultation",
        details: {
          "Company Name": form.companyName.trim(),
          "Contact Person Name": form.contactPersonName.trim(),
          "Email ID": form.email.trim(),
          "Issue Type": form.issueType,
          "Notice Date": form.noticeDate,
          "Mobile Number": form.mobile.trim(),
        },
      };

      console.log("📤 Sending data:", payload);

      await submitServiceQuickForm(payload);

      alert("✅ Our legal team will review your case details and contact you.");

      // Reset form (keep default empty issueType)
      setForm({
        companyName: "",
        contactPersonName: "",
        email: "",
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

      <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Company Name */}
        <div>
          <label className="block text-sm font-semibold mb-1">
            Company Name
          </label>
          <div className="relative">
            <Building2
              size={16}
              className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
            />
            <input
              type="text"
              name="companyName"
              value={form.companyName}
              onChange={handleChange}
              placeholder="Enter company name"
              className={`w-full pl-9 border rounded px-3 py-2 focus:outline-none focus:border-brand-500 ${
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
            Contact Person Name
          </label>
          <div className="relative">
            <User
              size={16}
              className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
            />
            <input
              type="text"
              name="contactPersonName"
              value={form.contactPersonName}
              onChange={handleChange}
              placeholder="Enter contact person name"
              className={`w-full pl-9 border rounded px-3 py-2 focus:outline-none focus:border-brand-500 ${
                errors.contactPersonName
                  ? "border-red-500"
                  : "border-slate-300"
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
        <div>
          <label className="block text-sm font-semibold mb-1">Email ID</label>
          <div className="relative">
            <Mail
              size={16}
              className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
            />
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="official@company.com"
              className={`w-full pl-9 border rounded px-3 py-2 focus:outline-none focus:border-brand-500 ${
                errors.email ? "border-red-500" : "border-slate-300"
              }`}
            />
          </div>
          {errors.email && (
            <p className="text-red-500 text-xs mt-1">{errors.email}</p>
          )}
        </div>

        {/* Issue Type */}
        <div>
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
        <div>
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
        <div>
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
          className={`w-full md:col-span-2 text-white font-bold py-3 rounded-lg transition ${
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
