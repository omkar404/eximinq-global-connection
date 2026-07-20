import { useState } from "react";
import { Building2, Mail, Phone, User } from "lucide-react";

const QuickForm = () => {
  const [form, setForm] = useState({
    companyName: "",
    contactPersonName: "",
    email: "",
    sector: "",
    investment: "",
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

    if (!form.sector.trim()) {
      newErrors.sector = "Industry sector is required";
    }

    if (!form.investment.trim()) {
      newErrors.investment = "Investment value is required";
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
        companyName: form.companyName.trim(),
        contactPersonName: form.contactPersonName.trim(),
        email: form.email.trim(),
        sector: form.sector.trim(),
        investment: form.investment.trim(),
        mobile: form.mobile.trim(),
        type: "QUICK_FORM",
      };

      console.log("📤 Sending data:", payload);

      const response = await fetch(
      `${process.env.REACT_APP_API_URL}/api/pollution-control`,
      // "http://localhost:5000/api/pollution-control", // ✅ http:// is required
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

      alert("✅ Category assessment submitted successfully");

      // Reset form
      setForm({
        companyName: "",
        contactPersonName: "",
        email: "",
        sector: "",
        investment: "",
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
      <h3 className="text-2xl font-bold text-eco-900 mb-2">
        Category Assessment
      </h3>
      <p className="text-slate-500 mb-6 text-sm">
        Find your industry classification.
      </p>

      <form onSubmit={handleSubmit} noValidate className="grid grid-cols-1 md:grid-cols-2 gap-4">
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
              placeholder="e.g. ABC Manufacturing Pvt Ltd"
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

        {/* Industry Sector */}
        <div className="md:col-span-2">
          <label className="block text-sm font-semibold mb-1">
            Industry Sector <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            name="sector"
            value={form.sector}
            onChange={handleChange}
            placeholder="e.g. Chemical / Textile / Engineering"
            className={`w-full border rounded px-3 py-2 focus:outline-none focus:border-brand-500 ${
              errors.sector ? "border-red-500" : "border-slate-300"
            }`}
          />
          {errors.sector && (
            <p className="text-red-500 text-xs mt-1">{errors.sector}</p>
          )}
        </div>

        {/* Investment */}
        <div className="md:col-span-2">
          <label className="block text-sm font-semibold mb-1">
            Investment (Plant & Machinery) <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            name="investment"
            value={form.investment}
            onChange={handleChange}
            placeholder="e.g. ₹ 5 Crores"
            className={`w-full border rounded px-3 py-2 focus:outline-none focus:border-brand-500 ${
              errors.investment ? "border-red-500" : "border-slate-300"
            }`}
          />
          {errors.investment && (
            <p className="text-red-500 text-xs mt-1">{errors.investment}</p>
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
              className={`w-full pl-9 border rounded px-3 py-2 focus:outline-none focus:border-brand-500 ${
                errors.mobile ? "border-red-500" : "border-slate-300"
              }`}
              placeholder="e.g. 9876543210"
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
          className={`md:col-span-2 w-full text-white font-bold py-3 rounded-lg transition ${
            loading
              ? "bg-brand-400 cursor-not-allowed"
              : "bg-brand-600 hover:bg-brand-700"
          }`}
        >
          {loading ? "Submitting..." : "Check Status"}
        </button>
      </form>
    </div>
  );
};

export default QuickForm;
