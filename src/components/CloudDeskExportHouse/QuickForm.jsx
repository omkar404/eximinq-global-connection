import { useState } from "react";


const QuickForm = () => {
  const [form, setForm] = useState({
    companyName: "",
    personName: "",
    email: "",
    turnover: "",
    bonus: "",
    mobile: "",
  });

  // ✅ FIXED: renamed 'error' → 'errors' to match usage
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

    if (!form.mobile) {
      newErrors.mobile = "Mobile number is required";
    } else if (!/^[6-9]\d{9}$/.test(form.mobile)) {
      newErrors.mobile = "Enter valid 10 digit Indian mobile number";
    }

    // Optional: add validation for turnover and bonus if needed
    if (!form.turnover) {
      newErrors.turnover = "Export turnover is required";
    } else if (Number(form.turnover) <= 0) {
      newErrors.turnover = "Turnover must be greater than 0";
    }

    if (!form.bonus) {
      newErrors.bonus = "Please select a bonus category";
    }

    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const validationErrors = validate();
    setErrors(validationErrors);

    // ✅ FIXED: 'object' → 'Object' (capital O)
    if (Object.keys(validationErrors).length > 0) return;

    setLoading(true);

    try {
      const payload = {
        companyName: form.companyName.trim(),
        personName: form.personName.trim(),
        email: form.email.trim(),
        turnover: form.turnover,
        bonus: form.bonus,
        mobile: form.mobile,
        type: "QUICK_FORM",
      };

      console.log("Sending data:", payload);

      const response = await fetch(
      `${process.env.REACT_APP_API_URL}/api/star-export-house`,
        // "http://localhost:5000/api/star-export-house",
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

      alert("Request submitted successfully");

      // Reset form
      setForm({ companyName: "", personName: "", email: "", turnover: "", bonus: "", mobile: "" });
      setErrors({}); // clear errors as well
    } catch (err) {
      console.error("Error:", err);
      alert(`Submission failed: ${err.message}`);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-white text-slate-800 rounded-xl shadow-2xl p-4 md:p-5">
      <h3 className="text-lg font-bold text-brand-900 mb-1">
        Status Calculator
      </h3>

      <p className="text-slate-500 mb-3 text-xs">
        Determine your Star Export House category.
      </p>

      <form onSubmit={handleSubmit} className="space-y-2.5">
        <div>
          <label className="block text-xs font-semibold mb-1">
            Company Name
          </label>
          <input
            type="text"
            name="companyName"
            value={form.companyName}
            onChange={handleChange}
            placeholder="e.g. Acme Exports Pvt Ltd"
            className={`w-full border rounded px-2.5 py-1.5 text-sm ${
              errors.companyName ? "border-red-500" : "border-slate-300"
            }`}
          />
          {errors.companyName && <p className="text-red-500 text-xs">{errors.companyName}</p>}
        </div>

        <div>
          <label className="block text-xs font-semibold mb-1">
            Contact Person Name
          </label>
          <input
            type="text"
            name="personName"
            value={form.personName}
            onChange={handleChange}
            placeholder="e.g. Rahul Sharma"
            className={`w-full border rounded px-2.5 py-1.5 text-sm ${
              errors.personName ? "border-red-500" : "border-slate-300"
            }`}
          />
          {errors.personName && <p className="text-red-500 text-xs">{errors.personName}</p>}
        </div>

        <div>
          <label className="block text-xs font-semibold mb-1">
            Email Id
          </label>
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            placeholder="e.g. rahul@acmeexports.com"
            className={`w-full border rounded px-2.5 py-1.5 text-sm ${
              errors.email ? "border-red-500" : "border-slate-300"
            }`}
          />
          {errors.email && <p className="text-red-500 text-xs">{errors.email}</p>}
        </div>

        <div>
          <label className="block text-xs font-semibold mb-1">
            Export Turnover (FOB USD)
          </label>
          <input
            type="number"
            name="turnover"
            value={form.turnover}
            onChange={handleChange}
            placeholder="Last 3 FYs + Current FY"
            className={`w-full border rounded px-2.5 py-1.5 text-sm ${
              errors.turnover ? "border-red-500" : "border-slate-300"
            }`}
          />
          {errors.turnover && <p className="text-red-500 text-xs">{errors.turnover}</p>}
        </div>

        <div>
          <label className="block text-xs font-semibold mb-1">
            Bonus Category
          </label>
          <select
            name="bonus"
            value={form.bonus}
            onChange={handleChange}
            className={`w-full border rounded px-2.5 py-1.5 text-sm ${
              errors.bonus ? "border-red-500" : "border-slate-300"
            }`}
          >
            <option value="">Select Category</option>
            <option>MSME (Micro / Small / Medium)</option>
            <option>ISO Certified Unit</option>
            <option>Agri / Fruits / Vegetables Export</option>
            <option>North East Region Unit</option>
          </select>
          {errors.bonus && <p className="text-red-500 text-xs">{errors.bonus}</p>}
        </div>

        <div>
          <label className="block text-xs font-semibold mb-1">
            Mobile Number
          </label>
          <input
            type="tel"
            name="mobile"
            value={form.mobile}
            onChange={handleChange}
            placeholder="9876543210"
            maxLength="10"
            className={`w-full border rounded px-2.5 py-1.5 text-sm ${
              errors.mobile ? "border-red-500" : "border-slate-300"
            }`}
          />
          {errors.mobile && <p className="text-red-500 text-xs">{errors.mobile}</p>}
        </div>

        <button
          type="submit"
          disabled={loading}
          className="w-full bg-brand-600 hover:bg-brand-700 text-white font-bold py-2 text-sm rounded-lg transition"
        >
          {loading ? "Submitting..." : "Check My Star Rating"}
        </button>
      </form>
    </div>
  );
};

export default QuickForm;