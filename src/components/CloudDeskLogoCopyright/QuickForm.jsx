import { useState } from "react";

const QuickForm = ({ onSubmit }) => {
  const [form, setForm] = useState({
    logoStatus: "",
    applicanttype: "",
    mobile: "",
  });

  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);

  /* -------------------------
      HANDLE CHANGE
  ------------------------- */
  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === "mobile") {
      const digitsOnly = value.replace(/\D/g, "").slice(0, 10);

      setForm((prev) => ({
        ...prev,
        [name]: digitsOnly,
      }));
    } else {
      setForm((prev) => ({
        ...prev,
        [name]: value,
      }));
    }

    // Clear field error while typing
    setErrors((prev) => ({
      ...prev,
      [name]: "",
    }));
  };

  /* -------------------------
      VALIDATION
  ------------------------- */
  const validate = () => {
    const newErrors = {};

    // Asset Type
    if (!form.logoStatus) {
      newErrors.logoStatus = "Please select an logo status";
    }

    // Asset Title
    if (!form.applicanttype.trim()) {
      newErrors.applicanttype = "Applicant title is required";
    }

    // Mobile
    if (!form.mobile) {
      newErrors.mobile = "Mobile number is required";
    } else if (!/^[6-9]\d{9}$/.test(form.mobile)) {
      newErrors.mobile = "Enter valid 10 digit Indian mobile number";
    }

    return newErrors;
  };

  /* -------------------------
      SUBMIT
  ------------------------- */
  const handleSubmit = async (e) => {
    e.preventDefault();

    const validationErrors = validate();

    setErrors(validationErrors);

    if (Object.keys(validationErrors).length > 0) {
      return;
    }

    setLoading(true);

    try {
      const payload = {
        logoStatus: form.logoStatus,
        applicanttype: form.applicanttype,
        mobile: form.mobile,
        type: "QUICK_FORM",
      };

      console.log("📤 Sending Data:", payload);

      // Optional API call
      const response = await fetch(
        `${process.env.REACT_APP_API_URL}/api/logo-copyright`,
        // "http://localhost:5000/api/logo-copyright", // ✅ http:// is required
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

      // Parent callback
      onSubmit?.(payload);

      alert("✅ We will analyze your brand assets and contact you.");

      // Reset form
      setForm({
        logoStatus: "",
        applicanttype: "",
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
      {/* Heading */}
      <h3 className="text-2xl font-bold text-creative-900 mb-2">
        Logo Assessment
      </h3>

      <p className="text-slate-500 mb-6 text-sm">
        Verify if your logo qualifies as 'Artistic Work'.
      </p>

      {/* Form */}
      <form onSubmit={handleSubmit}>
        {/* Asset Type */}
        <div className="mb-4">
          <label className="block text-sm font-semibold mb-1">
            Logo Status
          </label>
          <select
            name="logoStatus"
            value={form.logoStatus}
            onChange={handleChange}
            className="w-full border border-slate-300 rounded px-3 py-2 focus:outline-none focus:border-brand-500"
          >
            <option value="">Select Logo Status</option>
            <option>New Design (Not used yet)</option>
            <option>Already used in Market</option>
            <option>Trademark Applied</option>
            <option>Trademark Registered</option>
          </select>
        </div>

        {/* Asset Title */}
        <div className="mb-4">
          <label className="block text-sm font-semibold mb-1">
            Applicant Type
          </label>
          <select
            name="applicanttype"
            value={form.applicanttype}
            onChange={handleChange}
            className="w-full border border-slate-300 rounded px-3 py-2 focus:outline-none focus:border-brand-500"
          >
            <option value="">Select Applicant Type</option>
            <option>Company (Pvt Ltd/LLP)</option>
            <option>Individual / Creator</option>
          </select>
        </div>

        {/* Mobile */}
        <div className="mb-4">
          <label className="block text-sm font-semibold mb-1">
            Mobile Number
          </label>
          <input
            type="tel"
            name="mobile"
            value={form.mobile}
            onChange={handleChange}
            placeholder="+91 74000 96950"
            required
            className="w-full border border-slate-300 rounded px-3 py-2 focus:outline-none focus:border-brand-500"
          />
        </div>

        {/* Submit */}
        <button
          type="submit"
          disabled={loading}
          className={`w-full bg-brand-600 hover:bg-brand-700 text-white font-bold py-3 rounded-lg transition"`}
        >
          {loading ? "Submitting..." : "Check Eligibility"}
        </button>
      </form>
    </div>
  );
};

export default QuickForm;
