import { useState, useRef, useEffect } from "react";
import { Building2, FileCheck, Mail, Phone, User, ChevronDown } from "lucide-react";
import { submitServiceQuickForm } from "../../utils/submitServiceQuickForm";

const CERTIFICATE_OPTIONS = [
  "Select Certificate",
  "Annual Export Turnover Certification",
  "Export Obligation Discharge ( EODC ) Certification",
  "Foreign Exchange Earning Certification",
  "Status Holder Application ( 3 Years ) Certification",
  "Average Export Performance Certification",
  "RCMC Export Turnover Certification",
  "Solvency Certificate Certification",
  "EPCG Redemption Certification",
  "AA Redemption Certification",
];

const QuickForm = () => {
  const [form, setForm] = useState({
    companyName: "",
    contactPersonName: "",
    email: "",
    certificateType: "",
    financialYear: "",
    mobile: "",
  });

  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  // Close dropdown when clicking outside of it
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setIsDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const selectCertificate = (value) => {
    setForm((prev) => ({ ...prev, certificateType: value }));
    setErrors((prev) => ({ ...prev, certificateType: "" }));
    setIsDropdownOpen(false);
  };

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

    if (!form.certificateType || form.certificateType === "Select Certificate") {
      newErrors.certificateType = "Certificate type is required";
    }

    if (!form.financialYear) {
      newErrors.financialYear = "Financial year is required";
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
        serviceKey: "ca-certification-export-import",
        serviceLabel: "CA Certification for Export Import",
        companyName: form.companyName.trim(),
        contactPersonName: form.contactPersonName.trim(),
        email: form.email.trim(),
        mobile: form.mobile.trim(),
        type: "QUICK_FORM",
        source: "CA Service Request",
        details: {
          "Company Name": form.companyName.trim(),
          "Contact Person Name": form.contactPersonName.trim(),
          "Email ID": form.email.trim(),
          "Certificate Type": form.certificateType,
          "Financial Year (FY)": form.financialYear.trim(),
          "Mobile Number": form.mobile.trim(),
        },
      };

      console.log("📤 Sending data:", payload);

      await submitServiceQuickForm(payload);

      alert("✅ CA service request submitted successfully");

      // Reset form
      setForm({
        companyName: "",
        contactPersonName: "",
        email: "",
        certificateType: "",
        financialYear: "",
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
      {/* Heading */}
      <div className="flex items-center gap-3 mb-2">
        <FileCheck className="text-brand-600" size={26} />
        <h3 className="text-2xl font-bold text-brand-900">
          CA Service Request
        </h3>
      </div>

      <p className="text-slate-500 mb-6 text-sm">
        Select the type of audit required.
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
            <Building2
              size={16}
              className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
            />
            <input
              type="text"
              name="companyName"
              value={form.companyName}
              onChange={handleChange}
              placeholder="e.g. ABC Exports Pvt Ltd"
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
            Contact Person Name <span className="text-red-500">*</span>
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
              placeholder="e.g. Rohan Mehta"
              className={`w-full pl-9 border rounded px-3 py-2 focus:outline-none focus:border-brand-500 ${
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

        {/* Certificate Type */}
        <div className="md:col-span-2" ref={dropdownRef}>
          <label className="block text-sm font-semibold mb-1">
            Certificate Type <span className="text-red-500">*</span>
          </label>

          <div className="relative">
            {/* Trigger bar — normal input look, no color flip */}
            <button
              type="button"
              onClick={() => setIsDropdownOpen((prev) => !prev)}
              className={`w-full flex items-center justify-between border rounded px-3 py-2 text-left bg-white focus:outline-none focus:border-brand-500 ${
                errors.certificateType ? "border-red-500" : "border-slate-300"
              }`}
            >
              <span className={form.certificateType ? "text-slate-800" : "text-slate-400"}>
                {form.certificateType || "Select certificate"}
              </span>
              <ChevronDown
                size={18}
                className={`text-slate-400 transition-transform ${
                  isDropdownOpen ? "rotate-180" : ""
                }`}
              />
            </button>

            {/* Dropdown list — absolutely positioned below the trigger.
                This is anchored to the button itself (not the viewport),
                so it always opens downward no matter the scroll position. */}
            {isDropdownOpen && (
              <ul
                role="listbox"
                className="absolute left-0 top-full mt-1 w-full max-h-72 overflow-y-auto bg-white border border-slate-300 rounded shadow-lg z-50"
              >
                {CERTIFICATE_OPTIONS.map((option) => (
                  <li
                    key={option}
                    role="option"
                    aria-selected={form.certificateType === option}
                    onClick={() => selectCertificate(option)}
                    className={`px-3 py-2 text-sm cursor-pointer hover:bg-slate-100 ${
                      form.certificateType === option
                        ? "bg-slate-100 font-semibold text-slate-900"
                        : "text-slate-700"
                    }`}
                  >
                    {option}
                  </li>
                ))}
              </ul>
            )}
          </div>

          {errors.certificateType && (
            <p className="text-red-500 text-xs mt-1">{errors.certificateType}</p>
          )}
        </div>

        {/* Financial Year */}
        <div className="md:col-span-2">
          <label className="block text-sm font-semibold mb-1">
            Financial Year (FY) <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            name="financialYear"
            value={form.financialYear}
            onChange={handleChange}
            placeholder="e.g. 2023–24"
            className={`w-full border rounded px-3 py-2 focus:outline-none focus:border-brand-500 ${
              errors.financialYear ? "border-red-500" : "border-slate-300"
            }`}
          />
          {errors.financialYear && (
            <p className="text-red-500 text-xs mt-1">{errors.financialYear}</p>
          )}
        </div>

        {/* Mobile Number */}
        <div className="md:col-span-2">
          <label className="block text-sm font-semibold mb-1">
            Mobile Number <span className="text-red-500">*</span>
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
              placeholder="e.g. 9876543210"
              maxLength={10}
              className={`w-full pl-9 border rounded px-3 py-2 focus:outline-none focus:border-brand-500 ${
                errors.mobile ? "border-red-500" : "border-slate-300"
              }`}
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
          className={`md:col-span-2 w-full text-white font-bold py-3 rounded-lg transition ${
            loading
              ? "bg-brand-400 cursor-not-allowed"
              : "bg-brand-600 hover:bg-brand-700"
          }`}
        >
          {loading ? "Submitting..." : "Get Checklist & Quote"}
        </button>
      </form>
    </div>
  );
};

export default QuickForm;
