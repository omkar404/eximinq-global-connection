import { useState } from "react";
import { Building2, Mail, Phone, ShieldCheck, User } from "lucide-react";
import { submitServiceQuickForm } from "../../utils/submitServiceQuickForm";

const QuickForm = () => {
  const [form, setForm] = useState({
    companyName: "",
    contactPersonName: "",
    email: "",
    businessType: "",
    yearsInBusiness: "",
    mobile: "",
  });

  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));

    setErrors((prev) => ({
      ...prev,
      [name]: "",
    }));
  };

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

    if (!form.businessType) {
      newErrors.businessType = "Please select business type";
    }

    if (!form.yearsInBusiness) {
      newErrors.yearsInBusiness = "Please select duration";
    }

    const mobileRegex = /^[6-9]\d{9}$/;

    if (!form.mobile.trim()) {
      newErrors.mobile = "Mobile number is required";
    } else if (!mobileRegex.test(form.mobile)) {
      newErrors.mobile = "Enter valid 10 digit Indian mobile number";
    }

    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const validationErrors = validate();
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length > 0) return;

    try {
      setLoading(true);

      const payload = {
        serviceKey: "aeo-certification",
        serviceLabel: "AEO Certification",
        companyName: form.companyName.trim(),
        contactPersonName: form.contactPersonName.trim(),
        email: form.email.trim(),
        mobile: form.mobile.trim(),
        type: "QUICK_FORM",
        source: "AEO Certification Readiness Check",
        details: {
          "Company Name": form.companyName.trim(),
          "Contact Person Name": form.contactPersonName.trim(),
          "Email ID": form.email.trim(),
          "Business Type": form.businessType,
          "Years in Business": form.yearsInBusiness,
        },
      };

      await submitServiceQuickForm(payload);

      alert("Request submitted successfully");

      setForm({
        companyName: "",
        contactPersonName: "",
        email: "",
        businessType: "",
        yearsInBusiness: "",
        mobile: "",
      });
    } catch (err) {
      console.error(err);
      alert("Submission failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-white text-slate-800 rounded-xl shadow-2xl p-6 md:p-8">
      <div className="flex items-center gap-3 mb-2">
        <ShieldCheck className="text-brand-600" size={26} />
        <h3 className="text-2xl font-bold text-brand-900">
          AEO Readiness Check
        </h3>
      </div>

      <p className="text-slate-500 mb-6 text-sm">
        Find out if you qualify for T1 or T2 status.
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
              className="w-full pl-9 border border-slate-300 rounded px-3 py-2"
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
              className="w-full pl-9 border border-slate-300 rounded px-3 py-2"
            />
          </div>

          {errors.contactPersonName && (
            <p className="text-red-500 text-xs mt-1">
              {errors.contactPersonName}
            </p>
          )}
        </div>

        {/* Email */}
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
              className="w-full pl-9 border border-slate-300 rounded px-3 py-2"
            />
          </div>

          {errors.email && (
            <p className="text-red-500 text-xs mt-1">{errors.email}</p>
          )}
        </div>

        {/* Business Type */}
        <div>
          <label className="block text-sm font-semibold mb-1">
            Business Type
          </label>

          <select
            name="businessType"
            value={form.businessType}
            onChange={handleChange}
            className="w-full border border-slate-300 rounded px-3 py-2"
          >
            <option value="">Select business type</option>
            <option>Importer / Exporter</option>
            <option>Logistics Provider (CHA / Freight)</option>
            <option>Warehouse Operator</option>
            <option>Custodian / Terminal</option>
          </select>

          {errors.businessType && (
            <p className="text-red-500 text-xs mt-1">{errors.businessType}</p>
          )}
        </div>

        {/* Years */}
        <div>
          <label className="block text-sm font-semibold mb-1">
            Years in Business
          </label>

          <select
            name="yearsInBusiness"
            value={form.yearsInBusiness}
            onChange={handleChange}
            className="w-full border border-slate-300 rounded px-3 py-2"
          >
            <option value="">Select duration</option>
            <option>Less than 3 Years</option>
            <option>More than 3 Years</option>
          </select>

          {errors.yearsInBusiness && (
            <p className="text-red-500 text-xs mt-1">
              {errors.yearsInBusiness}
            </p>
          )}
        </div>

        {/* Mobile */}
        <div>
          <label className="block text-sm font-semibold mb-1">
            Mobile Number
          </label>

          <div className="relative">
            <Phone
              size={16}
              className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
            />

            <input
              type="tel"
              name="mobile"
              value={form.mobile}
              onChange={handleChange}
              placeholder="+91 74000 96950"
              className="w-full pl-9 border border-slate-300 rounded px-3 py-2"
            />
          </div>

          {errors.mobile && (
            <p className="text-red-500 text-xs mt-1">{errors.mobile}</p>
          )}
        </div>

        <button
          type="submit"
          disabled={loading}
          className={`w-full md:col-span-2 text-white font-bold py-3 rounded-lg transition ${
            loading
              ? "bg-brand-400 cursor-not-allowed"
              : "bg-brand-600 hover:bg-brand-700"
          }`}
        >
          {loading ? "Submitting..." : "Request Audit"}
        </button>
      </form>
    </div>
  );
};

export default QuickForm;
