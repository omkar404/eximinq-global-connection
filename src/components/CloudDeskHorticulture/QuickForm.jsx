import { useState } from "react";

const QuickForm = () => {
  const [form, setForm] = useState({
    projectType: "",          // empty → shows placeholder
    projectCost: "",
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

    if (!form.projectType) {
      newErrors.projectType = "Please select a project type";
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
        projectType: form.projectType,
        projectCost: form.projectCost,
        mobile: form.mobile,
        type: "QUICK_FORM",
      };

      console.log("📤 Sending data:", payload);

      const response = await fetch(
        `${process.env.REACT_APP_API_URL}/api/horticulture`,
        // "http://localhost:5000/api/horticulture", // ✅ http:// is required
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

      alert("✅ Project assessment submitted successfully");

      // Reset form (keep placeholder by setting projectType to "")
      setForm({
        projectType: "",
        projectCost: "",
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
      <h3 className="text-2xl font-bold text-horti-900 mb-2">
        Project Assessment
      </h3>
      <p className="text-slate-500 mb-6 text-sm">
        Find out your grant potential.
      </p>

      <form onSubmit={handleSubmit}>
        {/* Project Type */}
        <div className="mb-4">
          <label className="block text-sm font-semibold mb-1">
            Project Type
          </label>
          <select
            name="projectType"
            value={form.projectType}
            onChange={handleChange}
            className={`w-full border rounded px-3 py-2 focus:outline-none focus:border-brand-500 ${
              errors.projectType ? "border-red-500" : "border-slate-300"
            }`}
          >
            <option value="" disabled>Select Project Type</option>
            <option>Cold Storage / Cold Chain</option>
            <option>Commercial Horticulture (Open Field/Polyhouse)</option>
            <option>Pack House / Ripening Chamber</option>
            <option>Reefer Van / Transport</option>
          </select>
          {errors.projectType && (
            <p className="text-red-500 text-xs mt-1">{errors.projectType}</p>
          )}
        </div>

        {/* Estimated Project Cost */}
        <div className="mb-4">
          <label className="block text-sm font-semibold mb-1">
            Estimated Project Cost
          </label>
          <input
            type="text"
            name="projectCost"
            value={form.projectCost}
            onChange={handleChange}
            placeholder="e.g. ₹ 2 Crores"
            className="w-full border border-slate-300 rounded px-3 py-2 focus:outline-none focus:border-brand-500"
          />
        </div>

        {/* Mobile Number */}
        <div className="mb-4">
          <label className="block text-sm font-semibold mb-1">
            Mobile Number
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
          {loading ? "Submitting..." : "Calculate Subsidy"}
        </button>
      </form>
    </div>
  );
};

export default QuickForm;