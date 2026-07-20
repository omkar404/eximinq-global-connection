import { useState } from "react";
import {
  Building2,
  ClipboardCheck,
  Mail,
  MapPin,
  Phone,
  User,
} from "lucide-react";
import { submitServiceQuickForm } from "../../utils/submitServiceQuickForm";

const QuickForm = () => {
  const [form, setForm] = useState({
    companyName: "",
    contactPersonName: "",
    email: "",
    productType: "",
    portOfImport: "",
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

  /* VALIDATION */
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

    if (!form.productType) {
      newErrors.productType = "Product type is required";
    }

    if (!form.portOfImport.trim()) {
      newErrors.portOfImport = "Port of import is required";
    }

    if (!form.mobile) {
      newErrors.mobile = "Mobile number is required";
    } else if (!/^[6-9]\d{9}$/.test(form.mobile)) {
      newErrors.mobile = "Enter a valid 10-digit Indian mobile number";
    }

    return newErrors;
  };

  /* SUBMIT HANDLER */
  const handleSubmit = async (e) => {
    e.preventDefault();

    const validationErrors = validate();
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length > 0) return;

    setLoading(true);

    try {
      const payload = {
        serviceKey: "fssai-licensing",
        serviceLabel: "FSSAI Licensing & Import Clearance",
        companyName: form.companyName.trim(),
        contactPersonName: form.contactPersonName.trim(),
        email: form.email.trim(),
        mobile: form.mobile.trim(),
        type: "QUICK_FORM",
        source: "FSSAI Licensing Compliance Check",
        details: {
          "Company Name": form.companyName.trim(),
          "Contact Person Name": form.contactPersonName.trim(),
          "Email ID": form.email.trim(),
          "Product Type": form.productType,
          "Port of Import": form.portOfImport.trim(),
          "Mobile Number": form.mobile.trim(),
        },
      };

      await submitServiceQuickForm(payload);

      alert("✅ Request submitted successfully! We'll analyze and revert.");

      // Reset form
      setForm({
        companyName: "",
        contactPersonName: "",
        email: "",
        productType: "",
        portOfImport: "",
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
      <h3 className="text-2xl font-bold text-brand-900 mb-2 flex items-center gap-2">
        <ClipboardCheck className="w-6 h-6 text-brand-900" />
        Compliance Check
      </h3>

      <p className="text-slate-500 mb-6 text-sm">
        Verify product category eligibility.
      </p>

      <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Company Name */}
        <div>
          <label className="block text-sm font-semibold mb-1">
            Company Name <span className="text-red-500">*</span>
          </label>
          <div className="relative">
            <Building2 className="absolute left-3 top-2.5 w-4 h-4 text-slate-400" />
            <input
              type="text"
              name="companyName"
              value={form.companyName}
              onChange={handleChange}
              className={`w-full border rounded pl-9 pr-3 py-2 focus:outline-none focus:border-brand-500 ${
                errors.companyName ? "border-red-500" : "border-slate-300"
              }`}
              placeholder="Enter company name"
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
            <User className="absolute left-3 top-2.5 w-4 h-4 text-slate-400" />
            <input
              type="text"
              name="contactPersonName"
              value={form.contactPersonName}
              onChange={handleChange}
              className={`w-full border rounded pl-9 pr-3 py-2 focus:outline-none focus:border-brand-500 ${
                errors.contactPersonName
                  ? "border-red-500"
                  : "border-slate-300"
              }`}
              placeholder="Enter contact person name"
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
          <label className="block text-sm font-semibold mb-1">
            Email ID <span className="text-red-500">*</span>
          </label>
          <div className="relative">
            <Mail className="absolute left-3 top-2.5 w-4 h-4 text-slate-400" />
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              className={`w-full border rounded pl-9 pr-3 py-2 focus:outline-none focus:border-brand-500 ${
                errors.email ? "border-red-500" : "border-slate-300"
              }`}
              placeholder="official@company.com"
            />
          </div>
          {errors.email && (
            <p className="text-red-500 text-xs mt-1">{errors.email}</p>
          )}
        </div>

        {/* Product Type */}
        <div>
          <label className="block text-sm font-semibold mb-1">
            Product Type <span className="text-red-500">*</span>
          </label>
          <select
            name="productType"
            value={form.productType}
            onChange={handleChange}
            className={`w-full border rounded px-3 py-2 focus:outline-none focus:border-brand-500 ${
              errors.productType ? "border-red-500" : "border-slate-300"
            }`}
          >
            <option value="">Select product type</option>
            <option>Health Supplements / Nutraceuticals</option>
            <option>Confectionery / Chocolates</option>
            <option>Beverages (Alcoholic/Non-Alcoholic)</option>
            <option>Dairy Products</option>
            <option>Raw Material / Additives</option>
          </select>
          {errors.productType && (
            <p className="text-red-500 text-xs mt-1">{errors.productType}</p>
          )}
        </div>

        {/* Port of Import */}
        <div>
          <label className="block text-sm font-semibold mb-1">
            Port of Import <span className="text-red-500">*</span>
          </label>
          <div className="relative">
            <MapPin className="absolute left-3 top-2.5 w-4 h-4 text-slate-400" />
            <input
              type="text"
              name="portOfImport"
              value={form.portOfImport}
              onChange={handleChange}
              className={`w-full border rounded pl-9 pr-3 py-2 focus:outline-none focus:border-brand-500 ${
                errors.portOfImport ? "border-red-500" : "border-slate-300"
              }`}
              placeholder="e.g. Nhava Sheva / Delhi Airport"
            />
          </div>
          {errors.portOfImport && (
            <p className="text-red-500 text-xs mt-1">{errors.portOfImport}</p>
          )}
        </div>

        {/* Mobile Number */}
        <div>
          <label className="block text-sm font-semibold mb-1">
            Mobile Number <span className="text-red-500">*</span>
          </label>
          <div className="relative">
            <Phone className="absolute left-3 top-2.5 w-4 h-4 text-slate-400" />
            <input
              type="tel"
              name="mobile"
              value={form.mobile}
              onChange={handleChange}
              className={`w-full border rounded pl-9 pr-3 py-2 focus:outline-none focus:border-brand-500 ${
                errors.mobile ? "border-red-500" : "border-slate-300"
              }`}
              placeholder="9876543210"
              maxLength={10}
            />
          </div>
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
          {loading ? "Submitting..." : "Check Requirements"}
        </button>
      </form>
    </div>
  );
};

export default QuickForm;
