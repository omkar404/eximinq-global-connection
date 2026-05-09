import { useState } from "react";

export default function QuickForm() {
  const [form, setForm] = useState({
    dscType: "",          // Start with empty selection
    validity: "2 Years",
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

    // Clear error for this field on typing
    setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  // Validation
  const validate = () => {
    const newErrors = {};

    // DSC Type validation
    if (!form.dscType) {
      newErrors.dscType = "Please select a DSC type";
    }

    // Mobile number validation
    if (!form.mobile) {
      newErrors.mobile = "Mobile number is required";
    } else if (!/^[6-9]\d{9}$/.test(form.mobile)) {
      newErrors.mobile = "Enter valid 10 digit Indian mobile number";
    }

    return newErrors;
  };

  // Submit Handler
  const handleSubmit = async (e) => {
    e.preventDefault();

    const validationErrors = validate();
    setErrors(validationErrors);
    if (Object.keys(validationErrors).length > 0) return;

    setLoading(true);

    try {
      const payload = {
        dscType: form.dscType,
        validity: form.validity,
        mobile: form.mobile,
        type: "QUICK_FORM",
      };

      console.log("📤 Sending data:", payload);

      const response = await fetch(
        `${process.env.REACT_APP_API_URL}/api/dsc-services`,
        // "http://localhost:5000/api/dsc-services", // ✅ http:// is required
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

      alert("✅ Request submitted successfully – KYC link will be sent to your mobile.");

      // Reset form
      setForm({
        dscType: "",
        validity: "2 Years",
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
      <h3 className="text-2xl font-bold text-brand-900 mb-2">Buy DSC Online</h3>
      <p className="text-slate-500 mb-6 text-sm">Select your requirement.</p>

      <form onSubmit={handleSubmit}>
        {/* DSC Type Dropdown */}
        <div className="mb-4">
          <label className="block text-sm font-semibold mb-1">DSC Type</label>
          <select
            name="dscType"
            value={form.dscType}
            onChange={handleChange}
            className={`w-full border rounded px-3 py-2 focus:outline-none focus:border-brand-500 ${
              errors.dscType ? "border-red-500" : "border-slate-300"
            }`}
          >
            <option value="" disabled>-- Select DSC Type --</option>
            <option>DGFT (IEC Based)</option>
            <option>ICEGATE (Class 3 Combo)</option>
            <option>Combo (DGFT + ICEGATE)</option>
            <option>Renewal Only</option>
          </select>
          {errors.dscType && (
            <p className="text-red-500 text-xs mt-1">{errors.dscType}</p>
          )}
        </div>

        {/* Validity Dropdown */}
        <div className="mb-4">
          <label className="block text-sm font-semibold mb-1">Validity</label>
          <select
            name="validity"
            value={form.validity}
            onChange={handleChange}
            className="w-full border border-slate-300 rounded px-3 py-2 focus:outline-none focus:border-brand-500"
          >
            <option>2 Years</option>
            <option>3 Years (Best Value)</option>
          </select>
        </div>

        {/* Mobile Number */}
        <div className="mb-4">
          <label className="block text-sm font-semibold mb-1">Mobile Number</label>
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
          {loading ? "Submitting..." : "Proceed to KYC"}
        </button>
      </form>
    </div>
  );
}
