import { useState } from "react";

const QuickForm = () => {
  const [form, setForm] = useState({
    businessType: "",
    productCategory: "", // renamed from ProductCategory
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

  // ✅ Full validation – all fields
  const validate = () => {
    const newErrors = {};

    if (!form.businessType) {
      newErrors.businessType = "Please select a business type";
    }
    // Optional: make productCategory required if needed
    // if (!form.productCategory.trim()) {
    //   newErrors.productCategory = "Product category is required";
    // }
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
        businessType: form.businessType,
        productCategory: form.productCategory,
        mobile: form.mobile,
        type: "QUICK_FORM",
      };

      console.log("📤 Sending data:", payload);

      const response = await fetch(
        `${process.env.REACT_APP_API_URL}/api/gem-registration`,
        // "http://localhost:5000/api/gem-registration", // ✅ http:// is required
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

      alert("✅ Seller Assessment verified successfully");

      setForm({
        businessType: "",
        productCategory: "",
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
    <div className="bg-white text-slate-800 rounded-xl shadow-2xl p-6 md:p-8 border border-slate-200">
      <h3 className="text-2xl font-bold text-logistics-900 mb-2">
        Seller Assessment
      </h3>
      <p className="text-slate-500 mb-6 text-sm">
        Determine your seller category.
      </p>

      <form onSubmit={handleSubmit}>
        {/* Business Type */}
        <div className="mb-4">
          <label className="block text-sm font-semibold mb-1">
            Business Type
          </label>
          <select
            name="businessType"
            value={form.businessType}
            onChange={handleChange}
            className={`w-full border rounded px-3 py-2 focus:outline-none focus:border-brand-500 ${
              errors.businessType ? "border-red-500" : "border-slate-300"
            }`}
          >
            <option value="" disabled>
              Select the Business
            </option>
            <option>OEM (Manufacturer)</option>
            <option>Reseller (Authorized Dealer)</option>
            <option>Service Provider (Manpower/Taxi etc.)</option>
          </select>
          {errors.businessType && (
            <p className="text-red-500 text-xs mt-1">{errors.businessType}</p>
          )}
        </div>

        {/* Product Category */}
        <div className="mb-4">
          <label className="block text-sm font-semibold mb-1">
            Product Category
          </label>
          <input
            type="text"
            name="productCategory" // ✅ removed extra }
            value={form.productCategory}
            onChange={handleChange}
            placeholder="e.g. Computers / Furniture / Office Supplies"
            className={`w-full border rounded px-3 py-2 focus:outline-none focus:border-brand-500 ${
              errors.productCategory ? "border-red-500" : "border-slate-300"
            }`}
          />
          {errors.productCategory && (
            <p className="text-red-500 text-xs mt-1">
              {errors.productCategory}
            </p>
          )}
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

        <button
          type="submit"
          disabled={loading}
          className={`w-full text-white font-bold py-3 rounded-lg transition ${
            loading
              ? "bg-brand-400 cursor-not-allowed"
              : "bg-brand-600 hover:bg-brand-700"
          }`}
        >
          {loading ? "Submitting..." : "Verify Profile"}
        </button>
      </form>
    </div>
  );
};

export default QuickForm;
