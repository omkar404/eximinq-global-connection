import { useState } from "react";

const QuickForm = () => {
  const [form, setForm] = useState({
    cargoType: "",
    weight: "",
    dimension: "",
    mobile: "",
  });

  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);

  /* HANDLE CHANGE */
  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === "mobile") {
      // Only digits, max 10 characters
      const digitsOnly = value.replace(/\D/g, "").slice(0, 10);

      setForm((prev) => ({
        ...prev,
        mobile: digitsOnly,
      }));
    } else if (name === "weight") {
      // Allow only positive numbers
      if (value === "" || /^\d*\.?\d*$/.test(value)) {
        setForm((prev) => ({
          ...prev,
          weight: value,
        }));
      }
    } else {
      setForm((prev) => ({
        ...prev,
        [name]: value,
      }));
    }

    // Clear error
    setErrors((prev) => ({
      ...prev,
      [name]: "",
    }));
  };

  /* VALIDATION */
  const validate = () => {
    const newErrors = {};

    if (!form.cargoType) {
      newErrors.cargoType = "Please select cargo type";
    }

    if (!form.weight) {
      newErrors.weight = "Weight is required";
    } else if (
      isNaN(form.weight) ||
      parseFloat(form.weight) <= 0
    ) {
      newErrors.weight =
        "Weight must be a positive number";
    }

    if (!form.dimension) {
      newErrors.dimension =
        "Dimension is required";
    } else if (
      form.dimension.trim().length < 3
    ) {
      newErrors.dimension =
        "Enter valid dimension";
    }

    if (!form.mobile) {
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

  /* SUBMIT */
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
        cargoType: form.cargoType,
        weightMt: parseFloat(form.weight),
        dimension: form.dimension.trim(),
        mobile: form.mobile,
        type: "QUICK_FORM",
      };

      console.log("📤 Sending data:", payload);

      const response = await fetch(
        `${process.env.REACT_APP_API_URL}/api/project-cargo`,
        // "http://localhost:5000/api/project-cargo", // ✅ http:// is required        
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
          data.error ||
            data.message ||
            "Something went wrong"
        );
      }

      alert(
        "✅ Request submitted successfully – we'll contact you shortly."
      );

      // Reset form
      setForm({
        cargoType: "",
        weight: "",
        dimension: "",
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
        Project Enquiry
      </h3>

      <p className="text-slate-500 mb-6 text-sm">
        Tell us about your heavy lift requirement.
      </p>

      <form
        onSubmit={handleSubmit}
        noValidate
      >

        {/* Cargo Type */}
        <div className="mb-4">

          <label className="block text-sm font-semibold mb-1">
            Cargo Type
          </label>

          <select
            name="cargoType"
            value={form.cargoType}
            onChange={handleChange}
            className={`w-full border ${
              errors.cargoType
                ? "border-red-500"
                : "border-slate-300"
            } rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent`}
          >

            <option value="">
              Select Cargo Type
            </option>

            <option value="Heavy Machinery">
              Heavy Machinery
            </option>

            <option value="Turbines / Generators">
              Turbines / Generators
            </option>

            <option value="Construction Equipment">
              Construction Equipment
            </option>

            <option value="Boilers / Pressure Vessels">
              Boilers / Pressure Vessels
            </option>

            <option value="Plant Relocation">
              Plant Relocation
            </option>

          </select>

          {errors.cargoType && (
            <p className="text-red-500 text-xs mt-1">
              {errors.cargoType}
            </p>
          )}

        </div>

        {/* Weight + Dimension */}
        <div className="grid grid-cols-2 gap-4 mb-4">

          {/* Weight */}
          <div>

            <label className="block text-xs font-semibold mb-1 text-slate-500">
              Weight (MT)
            </label>

            <input
              type="text"
              name="weight"
              value={form.weight}
              onChange={handleChange}
              placeholder="e.g. 50"
              className={`w-full border ${
                errors.weight
                  ? "border-red-500"
                  : "border-slate-300"
              } rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent`}
            />

            {errors.weight && (
              <p className="text-red-500 text-xs mt-1">
                {errors.weight}
              </p>
            )}

          </div>

          {/* Dimension */}
          <div>

            <label className="block text-xs font-semibold mb-1 text-slate-500">
              Max Dimension
            </label>

            <input
              type="text"
              name="dimension"
              value={form.dimension}
              onChange={handleChange}
              placeholder="L x W x H (m)"
              className={`w-full border ${
                errors.dimension
                  ? "border-red-500"
                  : "border-slate-300"
              } rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent`}
            />

            {errors.dimension && (
              <p className="text-red-500 text-xs mt-1">
                {errors.dimension}
              </p>
            )}

          </div>

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
            placeholder="Enter 10 digit mobile number"
            maxLength={10}
            className={`w-full border ${
              errors.mobile
                ? "border-red-500"
                : "border-slate-300"
            } rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent`}
          />

          {errors.mobile && (
            <p className="text-red-500 text-xs mt-1">
              {errors.mobile}
            </p>
          )}

        </div>

        {/* Submit */}
        <button
          type="submit"
          disabled={loading}
          className="w-full bg-brand-600 hover:bg-brand-700 text-white font-bold py-3 rounded-lg transition disabled:opacity-70 disabled:cursor-not-allowed"
        >

          {loading
            ? "Submitting..."
            : "Get Estimate"}

        </button>

      </form>
    </div>
  );
};

export default QuickForm;