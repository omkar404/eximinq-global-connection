import { useState } from "react";
import { Building2, Mail, User } from "lucide-react";
import { submitServiceQuickForm } from "../../utils/submitServiceQuickForm";

export default function QuickForm() {
  // ---------- State ----------
  const [form, setForm] = useState({
    companyName: "",
    contactPersonName: "",
    email: "",
    destinationCountry: "",
    invoiceValue: "",
    mobile: "",
  });

  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);

  // ---------- Handle input changes ----------
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

  // ---------- Validation ----------
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

    // Destination Country
    if (!form.destinationCountry) {
      newErrors.destinationCountry = "Please select a destination country";
    }

    // Invoice Value
    if (!form.invoiceValue) {
      newErrors.invoiceValue = "Please select an invoice value range";
    }

    // Mobile Number
    if (!form.mobile) {
      newErrors.mobile = "Mobile number is required";
    } else if (!/^[6-9]\d{9}$/.test(form.mobile)) {
      newErrors.mobile = "Enter a valid 10-digit Indian mobile number (starts with 6-9)";
    }

    return newErrors;
  };

  // ---------- Submit handler ----------
  const handleSubmit = async (e) => {
    e.preventDefault();

    const validationErrors = validate();
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length > 0) return;

    setLoading(true);

    try {
      const payload = {
        serviceKey: "rex-registration",
        serviceLabel: "REX Registration",
        companyName: form.companyName.trim(),
        contactPersonName: form.contactPersonName.trim(),
        email: form.email.trim(),
        mobile: form.mobile.trim(),
        type: "QUICK_FORM",
        source: "REX Eligibility Check",
        details: {
          "Company Name": form.companyName.trim(),
          "Contact Person Name": form.contactPersonName.trim(),
          "Email ID": form.email.trim(),
          "Destination Country": form.destinationCountry,
          "Invoice Value (Approx)": form.invoiceValue,
          "Mobile Number": form.mobile.trim(),
        },
      };

      console.log("📤 Sending eligibility data:", payload);

      await submitServiceQuickForm(payload);

      alert("✅ Eligibility status will be sent to your mobile.");

      // Reset form
      setForm({
        companyName: "",
        contactPersonName: "",
        email: "",
        destinationCountry: "",
        invoiceValue: "",
        mobile: "",
      });
      setErrors({});
    } catch (err) {
      console.error("❌ Error:", err);
      alert(`❌ Submission failed: ${err.message}`);
    } finally {
      setLoading(false);
    }
  };

  // ---------- Render ----------
  return (
    <div className="bg-white text-slate-800 rounded-xl shadow-2xl p-6 md:p-8">
      <h3 className="text-2xl font-bold text-brand-900 mb-2">
        Check Eligibility
      </h3>
      <p className="text-slate-500 mb-6 text-sm">
        Is REX mandatory for your shipment?
      </p>

      <form onSubmit={handleSubmit} noValidate className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Company Name */}
        <div>
          <label className="block text-sm font-semibold mb-1">
            Company Name <span className="text-red-500">*</span>
          </label>
          <div className="relative">
            <Building2 className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
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
            <User className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
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
            <p className="text-red-500 text-xs mt-1">{errors.contactPersonName}</p>
          )}
        </div>

        {/* Email ID */}
        <div>
          <label className="block text-sm font-semibold mb-1">
            Email ID <span className="text-red-500">*</span>
          </label>
          <div className="relative">
            <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
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

        {/* Destination Country */}
        <div>
          <label className="block text-sm font-semibold mb-1">
            Destination Country <span className="text-red-500">*</span>
          </label>
          <select
            name="destinationCountry"
            value={form.destinationCountry}
            onChange={handleChange}
            className={`w-full border rounded px-3 py-2 focus:outline-none focus:border-brand-500 ${
              errors.destinationCountry ? "border-red-500" : "border-slate-300"
            }`}
          >
            <option value="">Select Country</option>
            <option value="European Union (EU)">European Union (EU)</option>
            <option value="United Kingdom (UK)">United Kingdom (UK)</option>
            <option value="Switzerland">Switzerland</option>
            <option value="Norway">Norway</option>
            <option value="Turkey">Turkey</option>
          </select>
          {errors.destinationCountry && (
            <p className="text-red-500 text-xs mt-1">{errors.destinationCountry}</p>
          )}
        </div>

        {/* Invoice Value */}
        <div>
          <label className="block text-sm font-semibold mb-1">
            Invoice Value (Approx) <span className="text-red-500">*</span>
          </label>
          <select
            name="invoiceValue"
            value={form.invoiceValue}
            onChange={handleChange}
            className={`w-full border rounded px-3 py-2 focus:outline-none focus:border-brand-500 ${
              errors.invoiceValue ? "border-red-500" : "border-slate-300"
            }`}
          >
            <option value="">Select Invoice Value</option>
            <option value="Below ₹ 6,000">Below ₹ 6,000</option>
            <option value="Above ₹ 6,000">Above ₹ 6,000</option>
          </select>
          {errors.invoiceValue && (
            <p className="text-red-500 text-xs mt-1">{errors.invoiceValue}</p>
          )}
        </div>

        {/* Mobile Number */}
        <div>
          <label className="block text-sm font-semibold mb-1">
            Mobile Number <span className="text-red-500">*</span>
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
            autoComplete="off"
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
          {loading ? "Verifying..." : "Verify Status"}
        </button>
      </form>
    </div>
  );
}
