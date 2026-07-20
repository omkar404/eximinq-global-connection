import { useState } from "react";

const QuickForm = () => {
  const [form, setForm] = useState({
    companyName: "",
    personName: "",
    email: "",
    fertilizerType: "",
    state: "",
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

    // Clear field error on typing
    setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  /*----------------------
    VALIDATION
  -----------------------*/
  const validate = () => {
    const newErrors = {};

    if (!form.companyName.trim()) {
      newErrors.companyName = "Company name is required";
    } else if (form.companyName.trim().length < 2) {
      newErrors.companyName = "Company name must be at least 2 characters";
    }

    if (!form.personName.trim()) {
      newErrors.personName = "Your name is required";
    } else if (form.personName.trim().length < 2) {
      newErrors.personName = "Name must be at least 2 characters";
    }

    if (!form.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim())) {
      newErrors.email = "Enter a valid email address";
    }

    if (!form.fertilizerType) {
      newErrors.fertilizerType = "Please select a fertilizer type";
    }
    if (!form.state) {
      newErrors.state = "State is required";
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
        personName: form.personName.trim(),
        email: form.email.trim(),
        fertilizerType: form.fertilizerType,
        state: form.state,
        mobile: form.mobile,
        type: "QUICK_FORM",
      };

      console.log("📤 Sending data:", payload);

      const response = await fetch(
        `${process.env.REACT_APP_API_URL}/api/fertiliser-import-license`,
        // "http://localhost:5000/api/fertiliser-import-license", // ✅ http:// is required
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

      alert("✅ Eligibility check submitted successfully");

      // Reset form
      setForm({
        companyName: "",
        personName: "",
        email: "",
        fertilizerType: "",
        state: "",
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
    <div className="bg-white text-slate-800 rounded-xl shadow-2xl p-4 md:p-5">
      <h3 className="text-lg font-bold text-brand-900 mb-1">
        Check Eligibility
      </h3>
      <p className="text-slate-500 mb-3 text-xs">
        Verify product compliance.
      </p>

      <form onSubmit={handleSubmit}>
        {/* Company Name */}
        <div className="mb-2.5">
          <label className="block text-xs font-semibold mb-1">
            Company Name
          </label>
          <input
            type="text"
            name="companyName"
            value={form.companyName}
            onChange={handleChange}
            className={`w-full border rounded px-2.5 py-1.5 text-sm focus:outline-none focus:border-brand-500 ${
              errors.companyName ? "border-red-500" : "border-slate-300"
            }`}
            placeholder="e.g. Acme Exports Pvt Ltd"
          />
          {errors.companyName && (
            <p className="text-red-500 text-xs mt-1">{errors.companyName}</p>
          )}
        </div>

        {/* Contact Person Name */}
        <div className="mb-2.5">
          <label className="block text-xs font-semibold mb-1">
            Contact Person Name
          </label>
          <input
            type="text"
            name="personName"
            value={form.personName}
            onChange={handleChange}
            className={`w-full border rounded px-2.5 py-1.5 text-sm focus:outline-none focus:border-brand-500 ${
              errors.personName ? "border-red-500" : "border-slate-300"
            }`}
            placeholder="e.g. Rahul Sharma"
          />
          {errors.personName && (
            <p className="text-red-500 text-xs mt-1">{errors.personName}</p>
          )}
        </div>

        {/* Email */}
        <div className="mb-2.5">
          <label className="block text-xs font-semibold mb-1">
            Email Id
          </label>
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            className={`w-full border rounded px-2.5 py-1.5 text-sm focus:outline-none focus:border-brand-500 ${
              errors.email ? "border-red-500" : "border-slate-300"
            }`}
            placeholder="e.g. rahul@acmeexports.com"
          />
          {errors.email && (
            <p className="text-red-500 text-xs mt-1">{errors.email}</p>
          )}
        </div>

        {/* Fertilizer Type */}
        <div className="mb-2.5">
          <label className="block text-xs font-semibold mb-1">
            Fertilizer Type
          </label>
          <select
            name="fertilizerType"
            value={form.fertilizerType}
            onChange={handleChange}
            className={`w-full border rounded px-2.5 py-1.5 text-sm focus:outline-none focus:border-brand-500 ${
              errors.fertilizerType ? "border-red-500" : "border-slate-300"
            }`}
          >
            <option value="">Select type</option>
            <option>Straight Nitrogenous (Urea)</option>
            <option>Complex (DAP, NPK)</option>
            <option>Water Soluble Fertilizer</option>
            <option>Bio-stimulants (Form G)</option>
            <option>Organic / City Compost</option>
          </select>
          {errors.fertilizerType && (
            <p className="text-red-500 text-xs mt-1">{errors.fertilizerType}</p>
          )}
        </div>

        {/* State */}
        <div className="mb-2.5">
          <label className="block text-xs font-semibold mb-1">
            State of Marketing
          </label>
          <input
            type="text"
            name="state"
            value={form.state}
            onChange={handleChange}
            placeholder="e.g. Maharashtra, Punjab"
            className={`w-full border rounded px-2.5 py-1.5 text-sm focus:outline-none focus:border-brand-500 ${
              errors.state ? "border-red-500" : "border-slate-300"
            }`}
          />
          {errors.state && (
            <p className="text-red-500 text-xs mt-1">{errors.state}</p>
          )}
        </div>

        {/* Mobile Number */}
        <div className="mb-3">
          <label className="block text-xs font-semibold mb-1">
            Mobile Number
          </label>
          <input
            type="tel"
            name="mobile"
            value={form.mobile}
            onChange={handleChange}
            className={`w-full border rounded px-2.5 py-1.5 text-sm focus:outline-none focus:border-brand-500 ${
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
          className={`w-full text-white font-bold py-2 text-sm rounded-lg transition ${
            loading
              ? "bg-brand-400 cursor-not-allowed"
              : "bg-brand-600 hover:bg-brand-700"
          }`}
        >
          {loading ? "Submitting..." : "Verify Status"}
        </button>
      </form>
    </div>
  );
};

export default QuickForm;