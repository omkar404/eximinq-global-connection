import { useState } from "react";

const QuickForm = () => {
  const [form, setForm] = useState({
    exportProduct: "",
    importRawMaterial: "",
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

    if (!form.exportProduct.trim()) {
      newErrors.exportProduct = "Export product is required";
    } else if (form.exportProduct.trim().length < 3) {
      newErrors.exportProduct = "Product name must be at least 3 characters";
    }

    if (!form.importRawMaterial.trim()) {
      newErrors.importRawMaterial = "Import raw material is required";
    } else if (form.importRawMaterial.trim().length < 3) {
      newErrors.importRawMaterial = "Material name must be at least 3 characters";
    }

    const mobileRegex = /^[6-9]\d{9}$/;
    if (!form.mobile.trim()) {
      newErrors.mobile = "Mobile number is required";
    } else if (!mobileRegex.test(form.mobile)) {
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
        name: form.exportProduct,
        email: "lead@eximinq.com",
        mobile: form.mobile,
        type: "QUICK_FORM",
        service: "Benefit Calculator",
        exportProduct: form.exportProduct,
        importRawMaterial: form.importRawMaterial,
      };

      const response = await fetch(
        `${process.env.REACT_APP_API_URL}/api/advance-authorisation`,
        // "http://localhost:5000/api/advance-authorisation",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload),
        }
      );

      const data = await response.json();

      if (!response.ok || !data.success) {
        throw new Error(data.error || data.message);
      }

      alert("Benefit calculation request submitted successfully!");

      setForm({ exportProduct: "", importRawMaterial: "", mobile: "" });

    } catch (err) {
      console.error(err);
      alert("Submission failed. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-white text-slate-800 rounded-xl shadow-2xl p-6 md:p-8">

      <h3 className="text-2xl font-bold text-brand-900 mb-1">
        Benefit Calculator
      </h3>
      <p className="text-slate-500 mb-6 text-sm">
        Estimate your duty savings.
      </p>

      <form onSubmit={handleSubmit}>

        {/* EXPORT PRODUCT */}
        <div className="mb-4">
          <label className="block text-sm font-semibold mb-1">
            Export Product
          </label>
          <input
            type="text"
            name="exportProduct"
            value={form.exportProduct}
            onChange={handleChange}
            placeholder="e.g. Stainless Steel Utensils"
            className={`w-full border rounded px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-blue-500 ${
              errors.exportProduct ? "border-red-400" : "border-slate-300"
            }`}
          />
          {errors.exportProduct && (
            <p className="text-red-500 text-xs mt-1">{errors.exportProduct}</p>
          )}
        </div>

        {/* IMPORT RAW MATERIAL */}
        <div className="mb-4">
          <label className="block text-sm font-semibold mb-1">
            Import Raw Material
          </label>
          <input
            type="text"
            name="importRawMaterial"
            value={form.importRawMaterial}
            onChange={handleChange}
            placeholder="e.g. SS Coils Grade 304"
            className={`w-full border rounded px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-blue-500 ${
              errors.importRawMaterial ? "border-red-400" : "border-slate-300"
            }`}
          />
          {errors.importRawMaterial && (
            <p className="text-red-500 text-xs mt-1">{errors.importRawMaterial}</p>
          )}
        </div>

        {/* MOBILE */}
        <div className="mb-6">
          <label className="block text-sm font-semibold mb-1">
            Mobile Number
          </label>
          <input
            type="tel"
            name="mobile"
            value={form.mobile}
            onChange={handleChange}
            placeholder="+91 74000 96950"
            className={`w-full border rounded px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-blue-500 ${
              errors.mobile ? "border-red-400" : "border-slate-300"
            }`}
          />
          {errors.mobile && (
            <p className="text-red-500 text-xs mt-1">{errors.mobile}</p>
          )}
        </div>

        {/* SUBMIT */}
        <button
          type="submit"
          disabled={loading}
          className={`w-full text-white font-bold py-3 rounded-lg transition ${
            loading
              ? "bg-blue-400 cursor-not-allowed"
              : "bg-blue-600 hover:bg-blue-700"
          }`}
        >
          {loading ? "Submitting..." : "Calculate Savings"}
        </button>

      </form>
    </div>
  );
};

export default QuickForm;