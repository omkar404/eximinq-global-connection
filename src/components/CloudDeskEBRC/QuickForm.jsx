import { useState } from "react";

const QuickForm = () => {

  const [form, setForm] = useState({
    commodityType: "",
    country: "",
    mobile: "",
  });

  const [errors, setErrors] = useState({});

  const [loading, setLoading] = useState(false);

  /* -----------------------------------
      HANDLE CHANGE
  ----------------------------------- */
  const handleChange = (e) => {

    const { name, value } = e.target;

    // Mobile Number Validation
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

  /* -----------------------------------
      VALIDATION
  ----------------------------------- */
  const validate = () => {

    const newErrors = {};

    // Commodity Type
    if (!form.commodityType) {

      newErrors.commodityType =
        "Please select commodity type";
    }

    // Country
    if (!form.country.trim()) {

      newErrors.country =
        "Country of origin is required";
    }

    // Mobile
    if (!form.mobile.trim()) {

      newErrors.mobile =
        "Mobile number is required";

    } else if (
      !/^[6-9]\d{9}$/.test(form.mobile)
    ) {

      newErrors.mobile =
        "Enter valid 10 digit Indian mobile number";
    }

    return newErrors;
  };

  /* -----------------------------------
      SUBMIT
  ----------------------------------- */
  const handleSubmit = async (e) => {

    e.preventDefault();

    const validationErrors = validate();

    setErrors(validationErrors);

    if (
      Object.keys(validationErrors).length > 0
    ) {
      return;
    }

    setLoading(true);

    try {

      const payload = {
        commodityType: form.commodityType,
        country: form.country.trim(),
        mobile: form.mobile,
        type: "QUICK_FORM",
      };

      console.log("📤 Sending:", payload);

      const response = await fetch(
        `${process.env.REACT_APP_API_URL}/api/aqcs-pqms`,
        // "http://localhost:5000/api/aqcs-pqms", // ✅ http:// is required        
        {
          method: "POST",
          headers: {
            "Content-Type":
              "application/json",
          },
          body: JSON.stringify(payload),
        }
      );

      const data = await response.json();

      if (!response.ok || !data.success) {

        throw new Error(
          data.message ||
          "Something went wrong"
        );
      }

      alert(
        "✅ Request submitted successfully"
      );

      // Reset Form
      setForm({
        commodityType: "",
        country: "",
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
        Check Requirement
      </h3>

      <p className="text-slate-500 mb-6 text-sm">
        Do you need an Import Permit?
      </p>

      {/* Form */}
      <form onSubmit={handleSubmit}>

        {/* Commodity Type */}
        <div className="mb-4">

          <label className="block text-sm font-semibold mb-1">
            Commodity Type
          </label>

          <select
            name="commodityType"
            value={form.commodityType}
            onChange={handleChange}
            className={`w-full border rounded px-3 py-2 focus:outline-none focus:border-brand-500 ${
              errors.commodityType
                ? "border-red-500"
                : "border-slate-300"
            }`}
          >

            <option value="">
              Select Commodity Type
            </option>

            <option value="Fresh Fruits / Vegetables">
              Fresh Fruits / Vegetables
            </option>

            <option value="Processed Food">
              Processed Food
            </option>

            <option value="Meat / Poultry">
              Meat / Poultry
            </option>

            <option value="Dairy Products">
              Dairy Products
            </option>

            <option value="Pharmaceutical Products">
              Pharmaceutical Products
            </option>

          </select>

          {errors.commodityType && (
            <p className="text-red-500 text-xs mt-1">
              {errors.commodityType}
            </p>
          )}

        </div>

        {/* Country */}
        <div className="mb-4">

          <label className="block text-sm font-semibold mb-1">
            Country of Origin
          </label>

          <input
            type="text"
            name="country"
            value={form.country}
            onChange={handleChange}
            placeholder="e.g. USA / Thailand"
            className={`w-full border rounded px-3 py-2 focus:outline-none focus:border-brand-500 ${
              errors.country
                ? "border-red-500"
                : "border-slate-300"
            }`}
          />

          {errors.country && (
            <p className="text-red-500 text-xs mt-1">
              {errors.country}
            </p>
          )}

        </div>

        {/* Mobile */}
        <div className="mb-5">

          <label className="block text-sm font-semibold mb-1">
            Mobile Number
          </label>

          <input
            type="tel"
            name="mobile"
            value={form.mobile}
            onChange={handleChange}
            placeholder="9876543210"
            maxLength={10}
            className={`w-full border rounded px-3 py-2 focus:outline-none focus:border-brand-500 ${
              errors.mobile
                ? "border-red-500"
                : "border-slate-300"
            }`}
          />

          {errors.mobile && (
            <p className="text-red-500 text-xs mt-1">
              {errors.mobile}
            </p>
          )}

        </div>

        {/* Submit Button */}
        <button
          type="submit"
          disabled={loading}
          className={`w-full text-white font-bold py-3 rounded-lg transition ${
            loading
              ? "bg-brand-400 cursor-not-allowed"
              : "bg-sky-600 hover:bg-sky-700"
          }`}
        >

          {loading
            ? "Submitting..."
            : "Verify Now"}

        </button>

      </form>

    </div>
  );
};

export default QuickForm;