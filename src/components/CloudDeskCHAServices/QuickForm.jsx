import { useState } from "react";
import { ClipboardList, MapPin, Phone } from "lucide-react";

const QuickForm = () => {
  const [form, setForm] = useState({
    personName: "",        // renamed from name → personName
    companyName: "",
    email: "",
    clearanceType: "",
    portLocation: "",
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

    if (!form.clearanceType) {
      newErrors.clearanceType = "Please select a clearance type";
    }
    if (!form.portLocation) {
      newErrors.portLocation = "Please select a port location";
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
        personName: form.personName,   // updated key
        companyName: form.companyName,
        email: form.email,
        clearanceType: form.clearanceType,
        portLocation: form.portLocation,
        mobile: form.mobile,
        type: "QUICK_FORM",
      };

      console.log("📤 Sending data:", payload);

      const response = await fetch(
        `${process.env.REACT_APP_API_URL}/api/cha-services`,
       // "http://localhost:5000/api/cha-services", // ✅ http:// is required
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

      alert("✅ Clearance enquiry submitted successfully");

      setForm({
        personName: "",
        companyName: "",
        email: "",
        clearanceType: "",
        portLocation: "",
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
      <h3 className="text-2xl font-bold text-brand-900 mb-2">
        Clearance Enquiry
      </h3>
      <p className="text-slate-500 mb-6 text-sm">
        Need help with a shipment stuck at customs?
      </p>

      <form onSubmit={handleSubmit}>
        {/* Person Name */}
        <div className="mb-4">
          <label className="block text-sm font-semibold mb-1">
            Full Name <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            name="personName"          // updated name attribute
            value={form.personName}
            onChange={handleChange}
            className={`w-full border rounded px-3 py-2 focus:outline-none focus:border-brand-500 ${
              errors.personName ? "border-red-500" : "border-slate-300"
            }`}
            placeholder="e.g. Rajesh Kumar"
          />
          {errors.personName && (
            <p className="text-red-500 text-xs mt-1">{errors.personName}</p>
          )}
        </div>

        {/* Company Name */}
        <div className="mb-4">
          <label className="block text-sm font-semibold mb-1">
            Company Name
          </label>
          <input
            type="text"
            name="companyName"
            value={form.companyName}
            onChange={handleChange}
            className="w-full border border-slate-300 rounded px-3 py-2 focus:outline-none focus:border-brand-500"
            placeholder="e.g. ABC Logistics Pvt Ltd"
          />
        </div>

        {/* Email ID */}
        <div className="mb-4">
          <label className="block text-sm font-semibold mb-1">
            Email ID <span className="text-red-500">*</span>
          </label>
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            className={`w-full border rounded px-3 py-2 focus:outline-none focus:border-brand-500 ${
              errors.email ? "border-red-500" : "border-slate-300"
            }`}
            placeholder="you@example.com"
          />
          {errors.email && (
            <p className="text-red-500 text-xs mt-1">{errors.email}</p>
          )}
        </div>

        {/* Clearance Type */}
        <div className="mb-4">
          <label className="block text-sm font-semibold mb-1">
            Clearance Type <span className="text-red-500">*</span>
          </label>
          <select
            name="clearanceType"
            value={form.clearanceType}
            onChange={handleChange}
            className={`w-full border rounded px-3 py-2 focus:outline-none focus:border-brand-500 ${
              errors.clearanceType ? "border-red-500" : "border-slate-300"
            }`}
          >
            <option value="">Select Clearance Type</option>
            <option>Import Clearance (Sea)</option>
            <option>Export Factory Stuffing</option>
            <option>Air Cargo Clearance</option>
            <option>Dock Stuffing</option>
            <option>Special Cargo (Reefer/ODC)</option>
            <option>Export Clearance (Sea)</option>
            <option>Air Cargo Clearance (Export)</option>
            <option>Air Cargo Clearance (Import)</option>
          </select>
          {errors.clearanceType && (
            <p className="text-red-500 text-xs mt-1">{errors.clearanceType}</p>
          )}
        </div>

        {/* Port Location */}
        <div className="mb-4">
          <label className="block text-sm font-semibold mb-1">
            Port Location <span className="text-red-500">*</span>
          </label>
          <select
            name="portLocation"
            value={form.portLocation}
            onChange={handleChange}
            className={`w-full border rounded px-3 py-2 focus:outline-none focus:border-brand-500 ${
              errors.portLocation ? "border-red-500" : "border-slate-300"
            }`}
          >
            <option value="">Select Port</option>
            <option>Nhava Sheva (JNPT)</option>
            <option>Mundra</option>
            <option>Chennai</option>
            <option>Delhi Air Cargo</option>
            <option>Mumbai Air Cargo</option>
          </select>
          {errors.portLocation && (
            <p className="text-red-500 text-xs mt-1">{errors.portLocation}</p>
          )}
        </div>

        {/* Mobile Number */}
        <div className="mb-4">
          <label className="block text-sm font-semibold mb-1">
            Mobile Number <span className="text-red-500">*</span>
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
          {loading ? "Submitting..." : "Get Support"}
        </button>
      </form>
    </div>
  );
};

export default QuickForm;