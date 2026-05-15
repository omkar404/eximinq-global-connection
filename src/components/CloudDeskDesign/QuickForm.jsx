import { useState } from "react";

const QuickForm = () => {
  const [form, setForm] = useState({
    category: "",
    publicationDate: "",
    mobile: "",
  });

  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);

  /* -----------------------------
      HANDLE CHANGE
  ------------------------------ */
  const handleChange = (e) => {
    const { name, value } = e.target;

    // Mobile only digits
    if (name === "mobile") {
      const digitsOnly = value
        .replace(/\D/g, "")
        .slice(0, 10);

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

    // Clear Error
    setErrors((prev) => ({
      ...prev,
      [name]: "",
    }));
  };

  /* -----------------------------
      VALIDATION
  ------------------------------ */
  const validate = () => {
    const newErrors = {};

    if (!form.category) {
      newErrors.category =
        "Please select product category";
    }

    if (!form.publicationDate) {
      newErrors.publicationDate =
        "Please select publication date";
    }

    if (!form.mobile) {
      newErrors.mobile =
        "Mobile number is required";
    } else if (!/^[6-9]\d{9}$/.test(form.mobile)) {
      newErrors.mobile =
        "Enter valid 10 digit Indian mobile number";
    }

    return newErrors;
  };

  /* -----------------------------
      SUBMIT
  ------------------------------ */
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
        category: form.category,
        publicationDate: form.publicationDate,
        mobile: form.mobile,
        type: "QUICK_FORM",
      };

      console.log("📤 Sending:", payload);

      const response = await fetch(
        `${process.env.REACT_APP_API_URL}/api/design-registration`,
        // "http://localhost:5000/api/design-registration",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(payload),
        }
      );

      const data = await response.json();

      if (!response.ok || !data.success) {
        throw new Error(
          data.error ||
            data.message ||
            "Something went wrong"
        );
      }

      alert(
        "✅ Request submitted successfully"
      );

      // Reset Form
      setForm({
        category: "",
        publicationDate: "",
        mobile: "",
      });

      setErrors({});

    } catch (err) {

      console.error("❌ Error:", err);

      alert(
        `❌ Submission failed: ${err.message}`
      );

    } finally {

      setLoading(false);
    }
  };

  return (
    <div className="bg-white text-slate-800 rounded-xl shadow-2xl p-6 md:p-8">

      {/* Heading */}
      <h3 className="text-2xl font-bold text-brand-900 mb-2">
        Design Assessment
      </h3>

      <p className="text-slate-500 mb-6 text-sm">
        Check for Novelty & Originality.
      </p>

      {/* Form */}
      <form onSubmit={handleSubmit}>

        {/* Product Category */}
        <div className="mb-4">

          <label className="block text-sm font-semibold mb-1">
            Product Category
          </label>

          <select
            name="category"
            value={form.category}
            onChange={handleChange}
            className={`w-full border border-slate-300 rounded px-3 py-2
                       focus:outline-none focus:border-brand-500 ${
              errors.category
                ? "border-red-500"
                : "border-slate-300"
            }`}
          >
            <option value="">
              Select Product Category
            </option>

            <option value="Furniture / Household Goods">
              Furniture / Household Goods
            </option>

            <option value="Electronics Casing / Body">
              Electronics Casing / Body
            </option>

            <option value="Textile Patterns / Lace">
              Textile Patterns / Lace
            </option>

            <option value="Packaging / Containers">
              Packaging / Containers
            </option>

            <option value="Jewellery / Ornaments">
              Jewellery / Ornaments
            </option>
          </select>

          {errors.category && (
            <p className="text-red-500 text-sm mt-1">
              {errors.category}
            </p>
          )}

        </div>

        {/* Date */}
        <div className="mb-4">

          <label className="block text-base font-semibold mb-1">
            Date of First Publication
          </label>

          <input
            type="date"
            name="publicationDate"
            value={form.publicationDate}
            onChange={handleChange}
            className={`w-full border border-slate-300 rounded px-3 py-2
                       focus:outline-none focus:border-brand-500 ${
              errors.publicationDate
                ? "border-red-500"
                : "border-slate-300"
            }`}
          />

          {errors.publicationDate && (
            <p className="text-red-500 text-sm mt-1">
              {errors.publicationDate}
            </p>
          )}

        </div>

        {/* Mobile */}
        <div className="mb-4">

          <label className="block text-base font-semibold mb-1">
            Mobile Number
          </label>

          <input
            type="tel"
            name="mobile"
            value={form.mobile}
            onChange={handleChange}
            placeholder="+91 74000 96950"
            maxLength={10}
            className={`w-full border border-slate-300 rounded px-3 py-2
                       focus:outline-none focus:border-brand-500 ${
              errors.mobile
                ? "border-red-500"
                : "border-slate-300"
            }`}
          />

          {errors.mobile && (
            <p className="text-red-500 text-sm mt-1">
              {errors.mobile}
            </p>
          )}

        </div>

        {/* Submit Button */}
        <button
          type="submit"
          disabled={loading}
          className={`w-full text-white font-bold py-4 rounded-xl text-lg transition ${
            loading
              ? "bg-sky-400 cursor-not-allowed"
              : "bg-sky-600 hover:bg-sky-700"
          }`}
        >
          {loading
            ? "Submitting..."
            : "Check Novelty"}
        </button>

      </form>
    </div>
  );
};

export default QuickForm;