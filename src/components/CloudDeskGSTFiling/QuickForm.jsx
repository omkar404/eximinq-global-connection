import { useState } from "react";

const QuickForm = () => {
  const [form, setForm] = useState({
    export: "",
    invoices: "",
    companyName: "",
    contactPersonName: "",
    email: "",
    mobile: "",
  });

  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);

  /*----------------------
    HANDLE CHANGE
  -----------------------*/
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

    // Clear field error
    setErrors((prev) => ({
      ...prev,
      [name]: "",
    }));
  };

  /*----------------------
    VALIDATION
  -----------------------*/
  const validate = () => {
    const newErrors = {};

    if (!form.export) {
      newErrors.export = "Please select export type";
    }

    if (!form.invoices) {
      newErrors.invoices = "Please enter invoice count";
    }
    if (!form.companyName.trim()) {
      newErrors.companyName = "Company Name is required";
    }
    if (!form.contactPersonName.trim()) {
      newErrors.contactPersonName = "Contact Person Name is required";
    }
    if (!form.email.trim()) {
      newErrors.email = "Email ID is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim())) {
      newErrors.email = "Enter a valid Email ID";
    }

    if (!form.mobile) {
      newErrors.mobile = "Mobile number is required";
    } else if (!/^[6-9]\d{9}$/.test(form.mobile)) {
      newErrors.mobile =
        "Enter valid 10 digit Indian mobile number";
    }

    return newErrors;
  };

  /*----------------------
    SUBMIT
  -----------------------*/
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
        export: form.export,
        invoices: form.invoices,
        companyName: form.companyName.trim(),
        contactPersonName: form.contactPersonName.trim(),
        personName: form.contactPersonName.trim(),
        email: form.email.trim(),
        mobile: form.mobile,
        type: "QUICK_FORM",
      };

      console.log("📤 Sending:", payload);

      const response = await fetch(
        `${process.env.REACT_APP_API_URL}/api/gst-returns`,
        // "http://localhost:5000/api/gst-returns", // ✅ http:// is required        
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
          data.message || "Something went wrong"
        );
      }

      alert("✅ Request submitted successfully");

      // Reset form
      setForm({
        export: "",
        invoices: "",
        companyName: "",
        contactPersonName: "",
        email: "",
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

      <h3 className="text-2xl font-bold text-brand-900 mb-2">
        Filing Health Check
      </h3>

      <p className="text-slate-500 mb-6 text-sm">
        Verify your export data accuracy.
      </p>

      <form onSubmit={handleSubmit}>

        {/* Export Type */}
        <div className="mb-4">
          <label className="block text-sm font-semibold mb-1">
            Export Type
          </label>

          <select
            name="export"
            value={form.export}
            onChange={handleChange}
            className={`w-full border rounded px-3 py-2 focus:outline-none focus:border-brand-500 ${
              errors.export
                ? "border-red-500"
                : "border-slate-300"
            }`}
          >
            <option value="">
              Select Export Type
            </option>

            <option value="With Payment of IGST (Refund)">
              With Payment of IGST (Refund)
            </option>

            <option value="Without Payment of IGST (LUT/Bond)">
              Without Payment of IGST (LUT/Bond)
            </option>

            <option value="Deemed Export (EOU/EPCG)">
              Deemed Export (EOU/EPCG)
            </option>

            <option value="Service Export">
              Service Export
            </option>
          </select>

          {errors.export && (
            <p className="text-red-500 text-xs mt-1">
              {errors.export}
            </p>
          )}
        </div>

        {/* Monthly Invoices */}
        <div className="mb-4">

          <label className="block text-sm font-semibold mb-1">
            Monthly Invoices (Approx)
          </label>

          <input
            type="number"
            min="0"
            name="invoices"
            placeholder="e.g. 50"
            value={form.invoices}
            onChange={handleChange}
            className={`w-full border rounded px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-brand-500 ${
              errors.invoices
                ? "border-red-500"
                : "border-slate-300"
            }`}
          />

          {errors.invoices && (
            <p className="text-red-500 text-xs mt-1">
              {errors.invoices}
            </p>
          )}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <div>
            <label className="block text-sm font-semibold mb-1">
              Company Name *
            </label>
            <input
              type="text"
              name="companyName"
              value={form.companyName}
              onChange={handleChange}
              placeholder="e.g. ABC Exports Pvt Ltd"
              className={`w-full border rounded px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-brand-500 ${
                errors.companyName ? "border-red-500" : "border-slate-300"
              }`}
            />
            {errors.companyName && (
              <p className="text-red-500 text-xs mt-1">
                {errors.companyName}
              </p>
            )}
          </div>

          <div>
            <label className="block text-sm font-semibold mb-1">
              Contact Person Name *
            </label>
            <input
              type="text"
              name="contactPersonName"
              value={form.contactPersonName}
              onChange={handleChange}
              placeholder="e.g. Rahul Sharma"
              className={`w-full border rounded px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-brand-500 ${
                errors.contactPersonName ? "border-red-500" : "border-slate-300"
              }`}
            />
            {errors.contactPersonName && (
              <p className="text-red-500 text-xs mt-1">
                {errors.contactPersonName}
              </p>
            )}
          </div>

          <div className="md:col-span-2">
            <label className="block text-sm font-semibold mb-1">
              Email ID *
            </label>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="e.g. accounts@example.com"
              className={`w-full border rounded px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-brand-500 ${
                errors.email ? "border-red-500" : "border-slate-300"
              }`}
            />
            {errors.email && (
              <p className="text-red-500 text-xs mt-1">
                {errors.email}
              </p>
            )}
          </div>
        </div>

        {/* Mobile Number */}
        <div className="mb-4">

          <label className="block text-sm font-semibold mb-1">
            Mobile Number
            <span className="text-red-500"> *</span>
          </label>

          <input
            type="tel"
            name="mobile"
            value={form.mobile}
            onChange={handleChange}
            placeholder="e.g. 9876543210"
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
              : "bg-brand-600 hover:bg-brand-700"
          }`}
        >
          {loading
            ? "Submitting..."
            : "Check Compliance"}
        </button>

      </form>
    </div>
  );
};

export default QuickForm;
