import { useState } from "react";
import { Wrench } from "lucide-react";  // Keep only the wrench icon for heading

const QuickForm = () => {
  const [form, setForm] = useState({
    issueType: "",
    companyName: "",
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

    if (!form.issueType) {
      newErrors.issueType = "Please select an issue type";
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
        issueType: form.issueType,
        companyName: form.companyName,
        mobile: form.mobile,
        type: "QUICK_FORM",
      };

      console.log("📤 Sending data:", payload);

      const response = await fetch(
       `${process.env.REACT_APP_API_URL}/api/e-sanchit-filing`,        
        // "http://localhost:5000/api/e-sanchit-filing",
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

      alert("✅ Technical support request submitted successfully");

      setForm({
        issueType: "",
        companyName: "",
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
      <h3 className="text-2xl font-bold text-brand-900 mb-2 flex items-center gap-2">
        <Wrench className="text-brand-600" size={26} />
        Technical Support
      </h3>

      <p className="text-slate-500 mb-6 text-sm">
        Facing issues with document upload?
      </p>

      <form onSubmit={handleSubmit}>
        {/* Issue Type */}
        <div className="mb-4">
          <label className="block text-sm font-semibold mb-1">Issue Type</label>
          <select
            name="issueType"
            value={form.issueType}
            onChange={handleChange}
            className="w-full border border-slate-300 rounded px-3 py-2 focus:outline-none focus:border-brand-500"
          >
            <option value="" disabled>Select DSC</option>
            <option>DSC Not Detected</option>
            <option>PDF Signature Error</option>
            <option>File Size Too Large</option>
            <option>ICEGATE Login Issue</option>
            <option>Other</option>
          </select>
          {errors.issueType && (
            <p className="text-red-500 text-xs mt-1">{errors.issueType}</p>
          )}
        </div>

        {/* Company Name - simplified */}
        <div className="mb-4">
          <label className="block text-sm font-semibold mb-1">Company Name</label>
          <input
            type="text"
            name="companyName"
            value={form.companyName}
            onChange={handleChange}
            className="w-full border border-slate-300 rounded px-3 py-2 focus:outline-none focus:border-brand-500"
            placeholder="e.g. ABC Exports"
          />
        </div>

        {/* Mobile Number - simplified, with error styling */}
        <div className="mb-4">
          <label className="block text-sm font-semibold mb-1">Mobile Number</label>
          <input
            type="tel"
            name="mobile"
            value={form.mobile}
            onChange={handleChange}
            className={`w-full border border-slate-300 rounded px-3 py-2 focus:outline-none focus:border-brand-500`}
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
          {loading ? "Submitting..." : "Fix My Issue"}
        </button>
      </form>
    </div>
  );
};

export default QuickForm;