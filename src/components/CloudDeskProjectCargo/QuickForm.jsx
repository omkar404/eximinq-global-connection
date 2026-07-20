import { useState } from "react";
import { Building2, Mail, User } from "lucide-react";
import { submitServiceQuickForm } from "../../utils/submitServiceQuickForm";

const QuickForm = () => {
  const [form, setForm] = useState({
    companyName: "",
    contactPersonName: "",
    email: "",
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

    if (!form.companyName.trim()) {
      newErrors.companyName = "Company name is required";
    }

    if (!form.contactPersonName.trim()) {
      newErrors.contactPersonName = "Contact person name is required";
    }

    if (!form.email.trim()) {
      newErrors.email = "Email ID is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim())) {
      newErrors.email = "Enter a valid email ID";
    }

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
        serviceKey: "project-cargo",
        serviceLabel: "Project Cargo and ODC Handling",
        companyName: form.companyName.trim(),
        contactPersonName: form.contactPersonName.trim(),
        email: form.email.trim(),
        mobile: form.mobile.trim(),
        type: "QUICK_FORM",
        source: "Project Cargo Enquiry",
        details: {
          "Company Name": form.companyName.trim(),
          "Contact Person Name": form.contactPersonName.trim(),
          "Email ID": form.email.trim(),
          "Cargo Type": form.cargoType,
          "Weight (MT)": parseFloat(form.weight),
          "Max Dimension": form.dimension.trim(),
          "Mobile Number": form.mobile.trim(),
        },
      };

      console.log("📤 Sending data:", payload);

      await submitServiceQuickForm(payload);

      alert(
        "✅ Request submitted successfully – we'll contact you shortly."
      );

      // Reset form
      setForm({
        companyName: "",
        contactPersonName: "",
        email: "",
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
        className="grid grid-cols-1 md:grid-cols-2 gap-4"
      >
        {/* Company Name */}
        <div>
          <label className="block text-sm font-semibold mb-1">
            Company Name <span className="text-red-500">*</span>
          </label>
          <div className="relative">
            <Building2 className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 w-4 h-4" />
            <input
              type="text"
              name="companyName"
              value={form.companyName}
              onChange={handleChange}
              placeholder="e.g. ABC Engineering Pvt Ltd"
              className={`w-full border ${
                errors.companyName ? "border-red-500" : "border-slate-300"
              } rounded-lg px-3 py-2 pl-10 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent`}
            />
          </div>
          {errors.companyName && (
            <p className="text-red-500 text-xs mt-1">
              {errors.companyName}
            </p>
          )}
        </div>

        {/* Contact Person Name */}
        <div>
          <label className="block text-sm font-semibold mb-1">
            Contact Person Name <span className="text-red-500">*</span>
          </label>
          <div className="relative">
            <User className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 w-4 h-4" />
            <input
              type="text"
              name="contactPersonName"
              value={form.contactPersonName}
              onChange={handleChange}
              placeholder="e.g. Rohan Mehta"
              className={`w-full border ${
                errors.contactPersonName ? "border-red-500" : "border-slate-300"
              } rounded-lg px-3 py-2 pl-10 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent`}
            />
          </div>
          {errors.contactPersonName && (
            <p className="text-red-500 text-xs mt-1">
              {errors.contactPersonName}
            </p>
          )}
        </div>

        {/* Email ID */}
        <div className="md:col-span-2">
          <label className="block text-sm font-semibold mb-1">
            Email ID <span className="text-red-500">*</span>
          </label>
          <div className="relative">
            <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 w-4 h-4" />
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="official@company.com"
              className={`w-full border ${
                errors.email ? "border-red-500" : "border-slate-300"
              } rounded-lg px-3 py-2 pl-10 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent`}
            />
          </div>
          {errors.email && (
            <p className="text-red-500 text-xs mt-1">
              {errors.email}
            </p>
          )}
        </div>

        {/* Cargo Type */}
        <div className="md:col-span-2">

          <label className="block text-sm font-semibold mb-1">
            Cargo Type <span className="text-red-500">*</span>
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
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:col-span-2">

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
        <div className="md:col-span-2">

          <label className="block text-sm font-semibold mb-1">
            Mobile Number <span className="text-red-500">*</span>
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
          className="md:col-span-2 w-full bg-brand-600 hover:bg-brand-700 text-white font-bold py-3 rounded-lg transition disabled:opacity-70 disabled:cursor-not-allowed"
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
