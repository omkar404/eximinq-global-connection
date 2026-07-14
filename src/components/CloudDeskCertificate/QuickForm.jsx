import { useState } from "react";

export default function QuickForm() {
  const [form, setForm] = useState({
    companyName: "",
    personName: "",
    email: "",
    destinationCountry: "",
    hsCode: "",
    mobile: "",
  });

  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: "" }));
  };

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

    if (!form.destinationCountry.trim()) {
      newErrors.destinationCountry = "Destination country is required";
    }

    if (!form.hsCode.trim()) {
      newErrors.hsCode = "HS Code is required";
    } else if (form.hsCode.trim().length !== 6) {
      newErrors.hsCode = "HS Code must be exactly 6 digits";
    }

    if (!form.mobile.trim()) {
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

    try {
      setLoading(true);

      const payload = {
        companyName: form.companyName.trim(),
        personName: form.personName.trim(),
        email: form.email.trim(),
        destinationCountry: form.destinationCountry,
        hsCode: form.hsCode,
        mobile: form.mobile,
        type: "QUICK_FORM",
      };

      const res = await fetch(
        `${process.env.REACT_APP_API_URL}/api/certificate-of-origin`,
        // "http://localhost:5000/api/certificate-of-origin",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload),
        },
      );

      const data = await res.json();

      if (!res.ok || !data.success) {
        throw new Error(data.error || "API failed");
      }

      // ✅ SUCCESS
      alert("Request submitted successfully");

      // 🔁 RESET FORM — THIS IS THE ONLY RIGHT PLACE
      setForm({
        companyName: "",
        personName: "",
        email: "",
        destinationCountry: "",
        hsCode: "",
        mobile: "",
      });
      setErrors({});
    } catch (err) {
      console.error("Submit error:", err);
      alert("Submission failed. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-white text-slate-800 rounded-xl shadow-2xl p-4 md:p-5">
      <h3 className="text-lg font-bold text-brand-900 mb-1">
        Duty Benefit Check
      </h3>

      <p className="text-slate-500 mb-3 text-xs">
        Find applicable agreement for your destination.
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
            placeholder="e.g. Acme Exports Pvt Ltd"
            className={`w-full border rounded px-2.5 py-1.5 text-sm
                       focus:outline-none focus:border-brand-500 ${
                         errors.companyName ? "border-red-500" : "border-slate-300"
                       }`}
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
            placeholder="e.g. Rahul Sharma"
            className={`w-full border rounded px-2.5 py-1.5 text-sm
                       focus:outline-none focus:border-brand-500 ${
                         errors.personName ? "border-red-500" : "border-slate-300"
                       }`}
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
            placeholder="e.g. rahul@acmeexports.com"
            className={`w-full border rounded px-2.5 py-1.5 text-sm
                       focus:outline-none focus:border-brand-500 ${
                         errors.email ? "border-red-500" : "border-slate-300"
                       }`}
          />
          {errors.email && (
            <p className="text-red-500 text-xs mt-1">{errors.email}</p>
          )}
        </div>

        {/* Destination Country */}
        <div className="mb-2.5">
          <label className="block text-xs font-semibold mb-1">
            Destination Country
          </label>
          <input
            type="text"
            name="destinationCountry"
            value={form.destinationCountry}
            onChange={handleChange}
            placeholder="e.g. Thailand / UAE / Australia"
            className={`w-full border rounded px-2.5 py-1.5 text-sm
                       focus:outline-none focus:border-brand-500 ${
                         errors.destinationCountry ? "border-red-500" : "border-slate-300"
                       }`}
          />
          {errors.destinationCountry && (
            <p className="text-red-500 text-xs mt-1">{errors.destinationCountry}</p>
          )}
        </div>

        {/* HS Code */}
        <div className="mb-2.5">
          <label className="block text-xs font-semibold mb-1">
            HS Code (First 6 digits)
          </label>
          <input
            type="text"
            name="hsCode"
            value={form.hsCode}
            onChange={handleChange}
            placeholder="e.g. 870899"
            className={`w-full border rounded px-2.5 py-1.5 text-sm
                       focus:outline-none focus:border-brand-500 ${
                         errors.hsCode ? "border-red-500" : "border-slate-300"
                       }`}
          />
          {errors.hsCode && (
            <p className="text-red-500 text-xs mt-1">{errors.hsCode}</p>
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
            placeholder="+91 74000 96950"
            maxLength={10}
            className={`w-full border rounded px-2.5 py-1.5 text-sm
                       focus:outline-none focus:border-brand-500 ${
                         errors.mobile ? "border-red-500" : "border-slate-300"
                       }`}
          />
          {errors.mobile && (
            <p className="text-red-500 text-xs mt-1">{errors.mobile}</p>
          )}
        </div>

        {/* Submit */}
        <button
          type="submit"
          disabled={loading}
          className={`w-full text-white font-bold py-2 text-sm rounded-lg transition
            ${loading ? "bg-slate-400" : "bg-brand-600 hover:bg-brand-700"}`}
        >
          {loading ? "Checking..." : "Check Benefit"}
        </button>
      </form>
    </div>
  );
}