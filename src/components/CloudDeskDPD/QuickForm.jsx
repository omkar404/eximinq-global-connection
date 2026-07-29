import { useState } from "react";

const QuickForm = () => {
  const [form, setForm] = useState({
    personName: "",
    companyName: "",
    email: "",
    volume: "",
    port: "",
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

    setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const validate = () => {
    const newErrors = {};

    if (!form.personName.trim()) {
      newErrors.personName = "Please enter your full name";
    }
    if (!form.email.trim()) {
      newErrors.email = "Email address is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      newErrors.email = "Please enter a valid email address";
    }
    // companyName is optional

    if (!form.volume) {
      newErrors.volume = "Monthly volume is required";
    } else if (isNaN(Number(form.volume)) || Number(form.volume) <= 0) {
      newErrors.volume = "Enter a valid positive volume";
    }

    if (!form.port) {
      newErrors.port = "Please select a port";
    }

    if (!form.mobile) {
      newErrors.mobile = "Mobile number is required";
    } else if (!/^[6-9]\d{9}$/.test(form.mobile)) {
      newErrors.mobile = "Enter valid 10 digit Indian mobile number";
    }

    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const validationErrors = validate();
    setErrors(validationErrors);
    if (Object.keys(validationErrors).length > 0) return;

    setLoading(true);

    try {
      const payload = {
        personName: form.personName,
        companyName: form.companyName,
        email: form.email,
        volume: form.volume,
        port: form.port,
        mobile: form.mobile,
        type: "QUICK_FORM",
      };

      console.log("📤 Sending data:", payload);

      const response = await fetch(
        `${process.env.REACT_APP_API_URL}/api/dpd-registration`,
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

      alert("✅ Savings calculation request submitted successfully");

      setForm({
        personName: "",
        companyName: "",
        email: "",
        volume: "",
        port: "",
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
    // 🔽 Reduced outer padding
    <div className="bg-white text-slate-800 rounded-xl shadow-2xl p-4 md:p-5 border border-slate-200">
      {/* 🔽 Smaller title */}
      <h3 className="text-xl font-bold text-port-900 mb-1">
        Savings Calculator
      </h3>
      {/* 🔽 Smaller description */}
      <p className="text-slate-500 mb-4 text-xs">
        Estimate your DPD savings.
      </p>

      {/* 🔽 Reduced spacing between fields */}
      <form onSubmit={handleSubmit} className="space-y-3">
        {/* Person Name */}
        <div>
          <label className="block text-xs font-semibold mb-1">
            Full Name <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            name="personName"
            value={form.personName}
            onChange={handleChange}
            // 🔽 Smaller padding & text
            className={`w-full border rounded px-2 py-1.5 text-sm focus:outline-none focus:border-brand-500 ${
              errors.personName ? "border-red-500" : "border-slate-300"
            }`}
            placeholder="e.g. Rajesh Kumar"
          />
          {errors.personName && (
            // 🔽 Smaller error margin
            <p className="text-red-500 text-xs mt-0.5">{errors.personName}</p>
          )}
        </div>

        {/* Company Name */}
        <div>
          <label className="block text-xs font-semibold mb-1">
            Company Name
          </label>
          <input
            type="text"
            name="companyName"
            value={form.companyName}
            onChange={handleChange}
            className="w-full border border-slate-300 rounded px-2 py-1.5 text-sm focus:outline-none focus:border-brand-500"
            placeholder="e.g. ABC Logistics Pvt Ltd"
          />
        </div>

        {/* Email ID */}
        <div>
          <label className="block text-xs font-semibold mb-1">
            Email ID <span className="text-red-500">*</span>
          </label>
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            className={`w-full border rounded px-2 py-1.5 text-sm focus:outline-none focus:border-brand-500 ${
              errors.email ? "border-red-500" : "border-slate-300"
            }`}
            placeholder="you@example.com"
          />
          {errors.email && (
            <p className="text-red-500 text-xs mt-0.5">{errors.email}</p>
          )}
        </div>

        {/* Monthly Volume */}
        <div>
          <label className="block text-xs font-semibold mb-1">
            Monthly Volume (TEUs) <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            name="volume"
            value={form.volume}
            onChange={handleChange}
            placeholder="e.g. 20"
            className={`w-full border rounded px-2 py-1.5 text-sm focus:outline-none focus:border-brand-500 ${
              errors.volume ? "border-red-500" : "border-slate-300"
            }`}
          />
          {errors.volume && (
            <p className="text-red-500 text-xs mt-0.5">{errors.volume}</p>
          )}
        </div>

        {/* Current Port */}
        <div>
          <label className="block text-xs font-semibold mb-1">
            Current Port <span className="text-red-500">*</span>
          </label>
          <select
            name="port"
            value={form.port}
            onChange={handleChange}
            className={`w-full border rounded px-2 py-1.5 text-sm focus:outline-none focus:border-brand-500 ${
              errors.port ? "border-red-500" : "border-slate-300"
            }`}
          >
            <option value="" disabled>Select port</option>
            <option>Nhava Sheva (JNPT)</option>
            <option>Mundra</option>
            <option>Chennai</option>
            <option>Kolkata</option>
          </select>
          {errors.port && (
            <p className="text-red-500 text-xs mt-0.5">{errors.port}</p>
          )}
        </div>

        {/* Mobile Number */}
        <div>
          <label className="block text-xs font-semibold mb-1">
            Mobile Number <span className="text-red-500">*</span>
          </label>
          <input
            type="tel"
            name="mobile"
            value={form.mobile}
            onChange={handleChange}
            className={`w-full border rounded px-2 py-1.5 text-sm focus:outline-none focus:border-brand-500 ${
              errors.mobile ? "border-red-500" : "border-slate-300"
            }`}
            placeholder="e.g. 9876543210"
            maxLength={10}
          />
          {errors.mobile && (
            <p className="text-red-500 text-xs mt-0.5">{errors.mobile}</p>
          )}
        </div>

        {/* Submit Button – smaller height */}
        <button
          type="submit"
          disabled={loading}
          className={`w-full text-white font-bold py-2 rounded-lg transition text-sm ${
            loading
              ? "bg-brand-400 cursor-not-allowed"
              : "bg-brand-600 hover:bg-brand-700"
          }`}
        >
          {loading ? "Submitting..." : "Calculate Now"}
        </button>
      </form>
    </div>
  );
};

export default QuickForm;