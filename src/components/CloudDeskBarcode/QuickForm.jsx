import { useState } from "react";

const QuickForm = () => {
  const [form, setForm] = useState({
    companyName: "",
    contactPersonName: "",
    email: "",
    skus: "",
    turnover: "",
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

    if (!form.skus) {
      newErrors.skus = "Please select SKU volume";
    }

    if (!form.turnover) {
      newErrors.turnover = "Please select company turnover";
    }

    if (!form.mobile) {
      newErrors.mobile = "Mobile number is required";
    } else if (!/^[6-9]\d{9}$/.test(form.mobile)) {
      newErrors.mobile = "Enter valid 10 digit Indian mobile number";
    }

    return newErrors;
  };

  /*----------------------
    SUBMIT HANDLER
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
        personName: form.contactPersonName.trim(),
        email: form.email.trim().toLowerCase(),
        skus: form.skus,
        turnover: form.turnover,
        mobile: form.mobile,
        type: "QUICK_FORM",
      };

      console.log("📤 Sending data:", payload);

      const response = await fetch(
        `${process.env.REACT_APP_API_URL}/api/barcode-registration`,
        // "http://localhost:5000/api/barcode-registration", // ✅ http:// is required
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload),
        },
      );

      const data = await response.json();

      if (!response.ok || !data.success) {
        throw new Error(data.error || data.message || "Something went wrong");
      }

      alert("✅ We will send the barcode package details to you shortly.");

      // Reset form
      setForm({
        companyName: "",
        contactPersonName: "",
        email: "",
        skus: "",
        turnover: "",
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

  return (
    <div className="bg-white text-slate-800 rounded-xl shadow-2xl p-6 md:p-8">
      <h3 className="text-2xl font-bold text-scan-900 mb-2">
        Requirements Check
      </h3>
      <p className="text-slate-500 mb-6 text-sm">
        How many products do you have?
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
              className={`w-full border rounded px-3 py-2 focus:outline-none focus:border-brand-500 ${
                errors.companyName ? "border-red-500" : "border-slate-300"
              }`}
              placeholder="e.g. ABC Foods Pvt Ltd"
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
              className={`w-full border rounded px-3 py-2 focus:outline-none focus:border-brand-500 ${
                errors.contactPersonName ? "border-red-500" : "border-slate-300"
              }`}
              placeholder="e.g. Rahul Sharma"
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
              className={`w-full border rounded px-3 py-2 focus:outline-none focus:border-brand-500 ${
                errors.email ? "border-red-500" : "border-slate-300"
              }`}
              placeholder="e.g. products@example.com"
            />
            {errors.email && (
              <p className="text-red-500 text-xs mt-1">{errors.email}</p>
            )}
          </div>
        </div>

        {/* Number of SKUs */}
        <div className="mb-4">
          <label className="block text-sm font-semibold mb-1">
            Number of SKUs (Products)
          </label>
          <select
            name="skus"
            value={form.skus}
            onChange={handleChange}
            className={`w-full border rounded px-3 py-2 text-sm focus:outline-none focus:border-brand-500 ${
              errors.skus ? "border-red-500" : "border-slate-300"
            }`}
          >
            <option value="" disabled>
              Select
            </option>
            <option>Up to 100 SKUs</option>
            <option>100 to 1,000 SKUs</option>
            <option>1,000 to 10,000 SKUs</option>
            <option>10,000+ SKUs</option>
          </select>
          {errors.skus && (
            <p className="text-red-500 text-xs mt-1">{errors.skus}</p>
          )}
        </div>

        {/* Company Turnover */}
        <div className="mb-4">
          <label className="block text-sm font-semibold mb-1">
            Company Turnover
          </label>
          <select
            name="turnover"
            value={form.turnover}
            onChange={handleChange}
            className={`w-full border rounded px-3 py-2 text-sm focus:outline-none focus:border-brand-500 ${
              errors.turnover ? "border-red-500" : "border-slate-300"
            }`}
          >
            <option value="" disabled>
              Select
            </option>
            <option>Up to Rs 50 Crores</option>
            <option>Rs 50 - Rs 250 Crores</option>
            <option>Rs 250 - Rs 500 Crores</option>
            <option>Above Rs 500 Crores</option>
          </select>
          {errors.turnover && (
            <p className="text-red-500 text-xs mt-1">{errors.turnover}</p>
          )}
        </div>

        {/* Mobile Number */}
        <div className="mb-4">
          <label className="block text-sm font-semibold mb-1">
            Mobile Number <span className="text-red-500"></span>
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
          {loading ? "Submitting..." : "See Packages"}
        </button>
      </form>
    </div>
  );
};
export default QuickForm;
