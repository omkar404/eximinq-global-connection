//*------------------------*//

import { useState } from "react";

const QuickForm = () => {
  const [form, setForm] = useState({
    companyName: "",
    personName: "",
    email: "",
    service: "",
    port: "",
    mobile: "",
  });

  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);

  // Service options exactly as in your image
  const SERVICES = [
    "New ICEGATE Registration",
    "AD Code Registration",
    "e-Sanchit Registration",
    "DSC Update on ICEGATE",
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;

    // For mobile, only allow digits
    if (name === "mobile") {
      const digitsOnly = value.replace(/\D/g, "").slice(0, 10);
      setForm((prev) => ({ ...prev, [name]: digitsOnly }));
    } else {
      setForm((prev) => ({ ...prev, [name]: value }));
    }

    // Clear that field's error on typing
    setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  /* -------------------------
     VALIDATION FUNCTION
  -------------------------- */
  const validate = () => {
    const newErrors = {};

    // Company name validation
    if (!form.companyName.trim()) {
      newErrors.companyName = "Company name is required";
    } else if (form.companyName.trim().length < 2) {
      newErrors.companyName = "Company name must be at least 2 characters";
    }

    // Person name validation
    if (!form.personName.trim()) {
      newErrors.personName = "Your name is required";
    } else if (form.personName.trim().length < 2) {
      newErrors.personName = "Name must be at least 2 characters";
    }

    // Email validation
    if (!form.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim())) {
      newErrors.email = "Enter a valid email address";
    }

    // Service validation
    if (!form.service) {
      newErrors.service = "Please select a service";
    }

    // Mobile validation
    if (!form.mobile) {
      newErrors.mobile = "Mobile number is required";
    } else if (!/^[6-9]\d{9}$/.test(form.mobile)) {
      newErrors.mobile = "Enter valid 10 digit Indian mobile number";
    }

    return newErrors;
  };

  /* -------------------------
     SUBMIT HANDLER
  -------------------------- */
  const handleSubmit = async (e) => {
    e.preventDefault();

    const validationErrors = validate();
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length > 0) return;

    setLoading(true);
    try {

      // Prepare payload
      const payload = {
        companyName: form.companyName,
        personName: form.personName,
        name: form.name,
        email: form.email,
        service: form.service,
        port: form.port,
        mobile: form.mobile,
        type: "QUICK_FORM", // This identifies it's from QuickForm
      };

      console.log("📤 Sending data:", payload);

      const response = await fetch(
        // "http://localhost:5000/api/icegate-registration",
        `${process.env.REACT_APP_API_URL}/api/icegate-registration`,
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

      // Show success message
      alert("✅ Request submitted successfully");

      // Reset form
      setForm({
        companyName: "",
        personName: "",
        email: "",
        service: "",
        port: "",
        mobile: "",
      });

    } catch (err) {
      console.error("❌ Error:", err);
      alert("❌ Submission failed. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-white text-slate-800 rounded-xl shadow-2xl p-4 md:p-5 max-w-md mx-auto">
      {/* Header exactly as in image */}
      <h3 className="text-lg font-bold text-brand-900 mb-1">
        Customs Compliance Check
      </h3>

      <p className="text-slate-500 mb-3 text-xs">
        Verify your port registration status.
      </p>

      <form onSubmit={handleSubmit}>
        {/* COMPANY NAME FIELD */}
        <div className="mb-2.5">
          <label className="block text-xs font-semibold mb-1">
            Company Name
          </label>

          <input
            type="text"
            name="companyName"
            value={form.companyName}
            onChange={handleChange}
            disabled={loading}
            placeholder="e.g. Acme Exports Pvt Ltd"
            className={`w-full border rounded px-2.5 py-1.5 text-sm focus:outline-none focus:border-brand-500 ${
              errors.companyName ? "border-red-500" : "border-slate-300"
            }`}
          />

          {errors.companyName && (
            <p className="text-red-500 text-xs mt-1">{errors.companyName}</p>
          )}
        </div>

        {/* PERSON NAME FIELD */}
        <div className="mb-2.5">
          <label className="block text-xs font-semibold mb-1">
            Your Name
          </label>

          <input
            type="text"
            name="personName"
            value={form.personName}
            onChange={handleChange}
            disabled={loading}
            placeholder="e.g. Rahul Sharma"
            className={`w-full border rounded px-2.5 py-1.5 text-sm focus:outline-none focus:border-brand-500 ${
              errors.personName ? "border-red-500" : "border-slate-300"
            }`}
          />

          {errors.personName && (
            <p className="text-red-500 text-xs mt-1">{errors.personName}</p>
          )}
        </div>

        {/* EMAIL FIELD */}
        <div className="mb-2.5">
          <label className="block text-xs font-semibold mb-1">
            Email Id
          </label>

          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            disabled={loading}
            placeholder="e.g. rahul@acmeexports.com"
            className={`w-full border rounded px-2.5 py-1.5 text-sm focus:outline-none focus:border-brand-500 ${
              errors.email ? "border-red-500" : "border-slate-300"
            }`}
          />

          {errors.email && (
            <p className="text-red-500 text-xs mt-1">{errors.email}</p>
          )}
        </div>

        {/* SERVICE FIELD */}
        <div className="mb-2.5">
          <label className="block text-xs font-semibold mb-1">
            Service Required
          </label>

          <select
            name="service"
            value={form.service}
            onChange={handleChange}
            disabled={loading}
            className="w-full border border-slate-300 rounded px-2.5 py-1.5 text-sm focus:outline-none focus:border-brand-500"
          >
            <option value="">Select Service</option>
            {SERVICES.map((service) => (
              <option key={service} value={service}>
                {service}
              </option>
            ))}
          </select>

          {errors.service && (
            <p className="text-red-500 text-xs mt-1">{errors.service}</p>
          )}
        </div>

        {/* PORT FIELD */}
        <div className="mb-2.5">
          <label className="block text-xs font-semibold mb-1">
            Port Name (Optional)
          </label>

          <input
            type="text"
            name="port"
            value={form.port}
            onChange={handleChange}
            disabled={loading}
            placeholder="e.g. Nhava Sheva (INNSA1)"
            className="w-full border border-slate-300 rounded px-2.5 py-1.5 text-sm focus:outline-none focus:border-brand-500"
          />

          {errors.port && (
            <p className="text-red-500 text-xs mt-1">{errors.port}</p>
          )}
        </div>

        {/* MOBILE FIELD */}
        <div className="mb-3">
          <label className="block text-xs font-semibold mb-1">
            Mobile Number
          </label>

          <div className="relative">
            <span className="absolute left-2.5 top-1.5 text-slate-500 text-sm">+91</span>
            <input
              type="tel"
              name="mobile"
              value={form.mobile}
              onChange={handleChange}
              disabled={loading}
              placeholder="9876543210"
              maxLength="10"
              className={`w-full border rounded pl-10 pr-2.5 py-1.5 text-sm focus:outline-none focus:border-brand-500 ${
                errors.mobile ? "border-red-500" : "border-slate-300"
              }`}
            />
          </div>

          {errors.mobile && (
            <p className="text-red-500 text-xs mt-1">{errors.mobile}</p>
          )}
        </div>

        {/* SUBMIT BUTTON */}
        <button
          type="submit"
          disabled={loading}
          className={`w-full text-white font-bold py-2 text-sm rounded-lg transition ${
            loading
              ? "bg-brand-400 cursor-not-allowed"
              : "bg-brand-600 hover:bg-brand-700"
          }`}
        >
          {loading ? "Submitting..." : "Check Eligibility"}
        </button>
      </form>
    </div>
  );
};

export default QuickForm;