import { useState } from "react";
import { AlertTriangle, Phone } from "lucide-react";

const DEFAULT_FORM = {
  companyName: "",
  contactPersonName: "",
  email: "",
  boe: "",
  portCode: "",
  mobile: "",
};

const QuickForm = () => {
  const [form, setForm] = useState(DEFAULT_FORM);
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === "mobile") {
      const digitsOnly = value.replace(/\D/g, "").slice(0, 10);
      setForm((prev) => ({ ...prev, [name]: digitsOnly }));
    } else if (name === "portCode") {
      setForm((prev) => ({ ...prev, [name]: value.toUpperCase() }));
    } else {
      setForm((prev) => ({ ...prev, [name]: value }));
    }

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

    if (!form.boe.trim()) {
      newErrors.boe = "BOE number is required";
    }

    if (!form.portCode.trim()) {
      newErrors.portCode = "Port code is required";
    }

    if (!form.mobile) {
      newErrors.mobile = "Mobile number is required";
    } else if (!/^[6-9]\d{9}$/.test(form.mobile)) {
      newErrors.mobile = "Enter valid 10 digit Indian mobile number";
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
        companyName: form.companyName.trim(),
        contactPersonName: form.contactPersonName.trim(),
        personName: form.contactPersonName.trim(),
        email: form.email.trim().toLowerCase(),
        boe: form.boe.trim(),
        portCode: form.portCode.trim(),
        mobile: form.mobile,
        type: "QUICK_FORM",
      };

      console.log("📤 Sending data:", payload);

      const response = await fetch(
        `${process.env.REACT_APP_API_URL}/api/rmcc-alert-removal`,
        // "http://localhost:5000/api/rmcc-alert-removal", // ✅ http:// is required
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

      alert(
        "✅ Registration submitted successfully!"
      );

      setForm(DEFAULT_FORM);
      setErrors({});
    } catch (err) {
      console.error("❌ Error:", err);
      alert(`❌ Submission failed: ${err.message}`);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-white text-slate-800 rounded-xl shadow-2xl p-6 md:p-8">
      {/* Header */}
      <div className="flex items-center gap-3 mb-2">
        <AlertTriangle className="text-alert-600" size={28} />
        <h3 className="text-2xl font-bold text-alert-900">
          Emergency Hold Check
        </h3>
      </div>

      <p className="text-slate-500 mb-6 text-sm">
        Submit your Bill of Entry number for instant status.
      </p>

      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <div>
            <label className="block text-sm font-semibold mb-1">
              Company Name
            </label>
            <input
              type="text"
              name="companyName"
              value={form.companyName}
              onChange={handleChange}
              placeholder="e.g. ABC Imports Pvt Ltd"
              className={`w-full border rounded px-3 py-2 text-sm focus:outline-none focus:border-brand-500 ${
                errors.companyName ? "border-red-400" : "border-slate-300"
              }`}
            />
            {errors.companyName && (
              <p className="text-red-500 text-xs mt-1">{errors.companyName}</p>
            )}
          </div>

          <div>
            <label className="block text-sm font-semibold mb-1">
              Contact Person Name
            </label>
            <input
              type="text"
              name="contactPersonName"
              value={form.contactPersonName}
              onChange={handleChange}
              placeholder="e.g. Priya Mehta"
              className={`w-full border rounded px-3 py-2 text-sm focus:outline-none focus:border-brand-500 ${
                errors.contactPersonName ? "border-red-400" : "border-slate-300"
              }`}
            />
            {errors.contactPersonName && (
              <p className="text-red-500 text-xs mt-1">
                {errors.contactPersonName}
              </p>
            )}
          </div>

          <div className="md:col-span-2">
            <label className="block text-sm font-semibold mb-1">
              Email ID
            </label>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="e.g. logistics@example.com"
              className={`w-full border rounded px-3 py-2 text-sm focus:outline-none focus:border-brand-500 ${
                errors.email ? "border-red-400" : "border-slate-300"
              }`}
            />
            {errors.email && (
              <p className="text-red-500 text-xs mt-1">{errors.email}</p>
            )}
          </div>
        </div>

        {/* BOE Number */}
        <div className="mb-4">
          <label className="block text-sm font-semibold mb-1">
            Bill of Entry (BOE) Number
          </label>
          <input
            type="text"
            name="boe"
            value={form.boe}
            onChange={handleChange}
            placeholder="e.g. 7894561"
            className={`w-full border rounded px-3 py-2 text-sm focus:outline-none focus:border-brand-500 ${
              errors.boe ? "border-red-400" : "border-slate-300"
            }`}
          />
          {errors.boe && (
            <p className="text-red-500 text-xs mt-1">{errors.boe}</p>
          )}
        </div>

        {/* Port Code */}
        <div className="mb-4">
          <label className="block text-sm font-semibold mb-1">Port Code</label>
          <input
            type="text"
            name="portCode"
            value={form.portCode}
            onChange={handleChange}
            placeholder="e.g. INNSA1 / INDEL6"
            className={`w-full border rounded px-3 py-2 text-sm focus:outline-none focus:border-brand-500 ${
              errors.portCode ? "border-red-400" : "border-slate-300"
            }`}
          />
          {errors.portCode && (
            <p className="text-red-500 text-xs mt-1">{errors.portCode}</p>
          )}
        </div>

        {/* Mobile Number */}
        <div className="mb-6">
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
              placeholder="9876543210"
              maxLength={10}
              className={`w-full pl-9 border rounded px-3 py-2 text-sm focus:outline-none focus:border-brand-500 ${
                errors.mobile ? "border-red-400" : "border-slate-300"
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
          className={`w-full text-white font-bold py-3 rounded-lg transition ${
            loading
              ? "bg-brand-400 cursor-not-allowed"
              : "bg-brand-600 hover:bg-brand-700"
          }`}
        >
          {loading ? "Submitting..." : "Check Status & Intervene"}
        </button>
      </form>
    </div>
  );
};

export default QuickForm;
