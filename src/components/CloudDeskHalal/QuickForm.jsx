import { useState } from "react";

const QuickForm = () => {
  const [form, setForm] = useState({
    companyName: "",
    personName: "",
    email: "",
    targetMarket: "",
    productCategory: "",
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

    // ✅ Fixed: was wiping form value with ""
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

    if (!form.targetMarket) {
      newErrors.targetMarket = "Please select a target market";
    }

    if (!form.productCategory) {
      newErrors.productCategory = "Please select a product category";
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
        companyName: form.companyName.trim(),
        personName: form.personName.trim(),
        email: form.email.trim(),
        targetMarket: form.targetMarket,
        productCategory: form.productCategory,
        mobile: form.mobile,
        type: "QUICK_FORM",
      };

      console.log("📤 Sending data:", payload);

      const response = await fetch(
        `${process.env.REACT_APP_API_URL}/api/halal-certification`,
        // "http://localhost:5000/api/halal-certification",
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

      alert("✅ Request submitted successfully");

      setForm({
        companyName: "",
        personName: "",
        email: "",
        targetMarket: "",
        productCategory: "",
        mobile: "",
      });
      setErrors({});

    } catch (err) {
      console.error("❌ Error:", err);
      alert(`❌ Submission failed: ${err.message}`);
    } finally {
      setLoading(false);  // ✅ Fixed: brace was misplaced
    }
  };

  return (
    <div className="bg-white text-slate-800 rounded-xl shadow-2xl p-4 md:p-5">
      <h3 className="text-lg font-bold text-brand-900 mb-1">
        Eligibility Check
      </h3>
      <p className="text-slate-500 mb-3 text-xs">
        Verify compliance requirements for your market.
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

        {/* Target Market */}
        <div className="mb-2.5">
          <label className="block text-xs font-semibold mb-1">
            Target Market
          </label>
          <select
            name="targetMarket"
            value={form.targetMarket}
            onChange={handleChange}
            className={`w-full border rounded px-2.5 py-1.5 text-sm
                       focus:outline-none focus:border-brand-500 ${
                         errors.targetMarket ? "border-red-500" : "border-slate-300"
                       }`}
          >
            <option value="" disabled>-- Select Target Market --</option>
            <option value="UAE / Saudi Arabia (GSO)">UAE / Saudi Arabia (GSO)</option>
            <option value="Malaysia (JAKIM)">Malaysia (JAKIM)</option>
            <option value="Indonesia (MUI / BPJPH)">Indonesia (MUI / BPJPH)</option>
            <option value="Global (General)">Global (General)</option>
          </select>
          {errors.targetMarket && (
            <p className="text-red-500 text-xs mt-1">{errors.targetMarket}</p>
          )}
        </div>

        {/* Product Category */}
        <div className="mb-2.5">
          <label className="block text-xs font-semibold mb-1">
            Product Category
          </label>
          <select
            name="productCategory"
            value={form.productCategory}
            onChange={handleChange}
            className={`w-full border rounded px-2.5 py-1.5 text-sm
                       focus:outline-none focus:border-brand-500 ${
                         errors.productCategory ? "border-red-500" : "border-slate-300"
                       }`}
          >
            <option value="" disabled>-- Select Product Category --</option>
            <option value="Processed Food">Processed Food</option>
            <option value="Meat & Poultry">Meat & Poultry</option>
            <option value="Cosmetics / Personal Care">Cosmetics / Personal Care</option>
            <option value="Pharmaceuticals">Pharmaceuticals</option>
            <option value="Additives / Ingredients">Additives / Ingredients</option>
          </select>
          {errors.productCategory && (
            <p className="text-red-500 text-xs mt-1">{errors.productCategory}</p>
          )}
        </div>

        {/* Mobile */}
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

        <button
          type="submit"
          disabled={loading}
          className={`w-full text-white font-bold py-2 text-sm rounded-lg transition ${
            loading
              ? "bg-brand-400 cursor-not-allowed"
              : "bg-brand-600 hover:bg-brand-700"
          }`}
        >
          {loading ? "Submitting..." : "Check Requirements"}
        </button>

      </form>
    </div>
  );
};

export default QuickForm;