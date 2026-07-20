import { useState } from "react";
import { Building2, Mail, User } from "lucide-react";
import { submitServiceQuickForm } from "../../utils/submitServiceQuickForm";

const QuickForm = () => {
  const [form, setForm] = useState({
    companyName: "",
    contactPersonName: "",
    email: "",
    product: "",
    investment: "",
    location: "",
  });

  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));

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

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!form.email.trim()) {
      newErrors.email = "Email ID is required";
    } else if (!emailRegex.test(form.email.trim())) {
      newErrors.email = "Enter a valid email ID";
    }

    if (!form.product) {
      newErrors.product = "Product name is required";
    }

    if (!form.investment) {
      newErrors.investment = "Investment amount is required";
    } else if (isNaN(Number(form.investment)) || Number(form.investment) <= 0) {
      newErrors.investment = "Enter a valid positive investment amount";
    }

    // Location is optional, no validation needed

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
        serviceKey: "industrial-license",
        serviceLabel: "Industrial License for Regulated Sectors",
        companyName: form.companyName.trim(),
        contactPersonName: form.contactPersonName.trim(),
        email: form.email.trim(),
        mobile: "",
        type: "QUICK_FORM",
        source: "Industrial License Category Verification",
        details: {
          "Company Name": form.companyName.trim(),
          "Contact Person Name": form.contactPersonName.trim(),
          "Email ID": form.email.trim(),
          "Proposed Product": form.product.trim(),
          "Investment (Crores)": form.investment.trim(),
          "Location": form.location.trim(),
        },
      };

      console.log("📤 Sending data:", payload);

      await submitServiceQuickForm(payload);

      alert("✅ Category verification request submitted successfully");

      // Reset form
      setForm({
        companyName: "",
        contactPersonName: "",
        email: "",
        product: "",
        investment: "",
        location: "",
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
        Category Verification
      </h3>
      <p className="text-slate-500 mb-6 text-sm">
        Confirm if your product requires IL or IEM.
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

        {/* Proposed Product */}
        <div>
          <label className="block text-sm font-semibold mb-1">
            Proposed Product
          </label>
          <input
            type="text"
            name="product"
            value={form.product}
            onChange={handleChange}
            placeholder="e.g. Gunpowder / Ethanol / Aerospace Parts"
            className={`w-full border rounded px-3 py-2 focus:outline-none focus:border-brand-500 ${
              errors.product ? "border-red-500" : "border-slate-300"
            }`}
          />
          {errors.product && (
            <p className="text-red-500 text-xs mt-1">{errors.product}</p>
          )}
        </div>

        {/* Investment */}
        <div>
          <label className="block text-sm font-semibold mb-1">
            Investment (₹ Crores)
          </label>
          <input
            type="text"
            name="investment"
            value={form.investment}
            onChange={handleChange}
            placeholder="e.g. 100"
            className={`w-full border rounded px-3 py-2 focus:outline-none focus:border-brand-500 ${
              errors.investment ? "border-red-500" : "border-slate-300"
            }`}
          />
          {errors.investment && (
            <p className="text-red-500 text-xs mt-1">{errors.investment}</p>
          )}
        </div>

        {/* Location */}
        <div>
          <label className="block text-sm font-semibold mb-1">
            Location
          </label>
          <input
            type="text"
            name="location"
            value={form.location}
            onChange={handleChange}
            placeholder="State / District"
            className="w-full border border-slate-300 rounded px-3 py-2 focus:outline-none focus:border-brand-500"
          />
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
          {loading ? "Submitting..." : "Verify Requirement"}
        </button>
      </form>
    </div>
  );
};

export default QuickForm;
