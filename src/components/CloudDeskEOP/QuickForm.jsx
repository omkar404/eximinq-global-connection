import { useState } from "react";

const QuickForm = ({
  type = "QUICK_FORM",
  eopLicense,
  onSubmit,
  onClose,
  resetForm: externalResetForm,
}) => {
  const [form, setForm] = useState({
    licenseType: "", // Changed from default value to empty string
    pendingExport: "",
    mobile: "",
    companyName: "",
    contactPerson: "",
    email: "",
  });

  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);

  const LICENSE_TYPES = ["Advance Authorisation", "EPCG Scheme"];

  const handleChange = (e) => {
    const { name, value } = e.target;

    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));

    // Clear error when typing
    setErrors((prev) => ({
      ...prev,
      [name]: "",
    }));
  };

  // Internal reset function
  const resetForm = () => {
    setForm({
      licenseType: "",
      pendingExport: "",
      mobile: "",
      companyName: "",
      contactPerson: "",
      email: "",
    });
    setErrors({});

    // Call external reset if provided
    if (typeof externalResetForm === "function") {
      externalResetForm();
    }
  };

  /* -------------------------
     VALIDATION FUNCTION
  -------------------------- */

  const validate = () => {
    const newErrors = {};

    // License Type validation
    if (!form.licenseType) {
      newErrors.licenseType = "Please select a license type";
    }

    // Pending Export validation
    if (!form.pendingExport.trim()) {
      newErrors.pendingExport = "Pending export percentage is required";
    } else {
      const pendingValue = parseFloat(form.pendingExport);
      if (isNaN(pendingValue)) {
        newErrors.pendingExport = "Please enter a valid number";
      } else if (pendingValue < 0 || pendingValue > 100) {
        newErrors.pendingExport = "Percentage must be between 0 and 100";
      }
    }

    // Mobile validation
    const mobileRegex = /^[6-9]\d{9}$/;
    const cleanMobile = form.mobile.replace(/\D/g, "");

    if (!form.mobile.trim()) {
      newErrors.mobile = "Mobile number is required";
    } else if (!mobileRegex.test(cleanMobile)) {
      newErrors.mobile = "Enter valid 10 digit Indian mobile number";
    }

    return newErrors;
  };

  /* -------------------------
     SUBMIT
  -------------------------- */

  const handleSubmit = async (e) => {
    e.preventDefault();

    const validationErrors = validate();
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length > 0) return;

    // Send data out if callback provided
    if (typeof onSubmit === "function") {
      onSubmit({
        ...form,
        type,
        eopLicense: type === "EOP_MANAGEMENT" ? eopLicense : null,
      });
    }

    try {
      setLoading(true);

      const finalType = type || "EOP_EXTENSION";

      // Clean mobile number (remove non-digits)
      const cleanMobile = form.mobile.replace(/\D/g, "");

      const payload = {
        name: form.companyName || form.contactPerson || "EOP Extension Lead",
        email: form.email || "lead@eximinq.com",
        mobile: cleanMobile,
        type: finalType,
        service: "EOP Extension",
        licenseType: form.licenseType,
        pendingExport: form.pendingExport,
        eopLicense: type === "EOP_MANAGEMENT" ? eopLicense : undefined,
        companyName: form.companyName,
        contactPerson: form.contactPerson,
      };

      // Add eopLicense if it exists and type is EOP_MANAGEMENT
      if (type === "EOP_MANAGEMENT" && eopLicense) {
        payload.eopLicense = eopLicense;
      }

      console.log("Final payload:", payload);

      const res = await fetch(
       `${process.env.REACT_APP_API_URL}/api/eop-extension`,
        // "http://localhost:5000/api/eop-extension",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload),
        }
      );

      const data = await res.json();

      console.log("API Response:", data);

      if (!res.ok || !data.success) {
        throw new Error(data.error || data.message || "API failed");
      }

      alert(
        data.message ||
          "EOP extension request submitted successfully. We will calculate the fees and revert."
      );

      // Reset form and close modal
      resetForm();

      if (typeof onClose === "function") {
        onClose();
      }
    } catch (err) {
      console.error("EOP Extension error:", err);
      alert(err.message || "Submission failed. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-white text-slate-800 rounded-xl shadow-2xl p-6 md:p-8">
      <h3 className="text-2xl font-bold text-brand-900 mb-2">
        EOP Extension Assessment
      </h3>
      <p className="text-slate-500 mb-6 text-sm">
        Find out your extension cost and submit request.
      </p>

      <form onSubmit={handleSubmit}>
        {/* License Type */}
        <div className="mb-4">
          <label className="block text-sm font-semibold mb-1">
            License Type <span className="text-red-500"></span>
          </label>
          <select
            name="licenseType"
            value={form.licenseType}
            onChange={handleChange}
            className={`w-full border rounded px-3 py-2 
                       focus:outline-none focus:border-brand-500
                       ${errors.licenseType ? "border-red-500" : "border-slate-300"}`}
            disabled={loading}
          >
            <option value="" disabled>
              -- Select License Type --
            </option>
            {LICENSE_TYPES.map((type) => (
              <option key={type} value={type}>
                {type}
              </option>
            ))}
          </select>
          {errors.licenseType && (
            <p className="text-red-500 text-sm mt-1">{errors.licenseType}</p>
          )}
        </div>

        {/* Pending Export Percentage */}
        <div className="mb-4">
          <label className="block text-sm font-semibold mb-1">
            Pending Export % <span className="text-red-500"></span>
          </label>
          <input
            type="number"
            name="pendingExport"
            value={form.pendingExport}
            onChange={handleChange}
            placeholder="e.g. 40"
            min="0"
            max="100"
            step="0.1"
            className={`w-full border rounded px-3 py-2 
                       focus:outline-none focus:border-brand-500
                       ${errors.pendingExport ? "border-red-500" : "border-slate-300"}`}
            disabled={loading}
          />
          {errors.pendingExport && (
            <p className="text-red-500 text-sm mt-1">{errors.pendingExport}</p>
          )}
        </div>

        {/* Mobile */}
        <div className="mb-6">
          <label className="block text-sm font-semibold mb-1">
            Mobile Number <span className="text-red-500"></span>
          </label>
          <input
            type="tel"
            name="mobile"
            value={form.mobile}
            onChange={handleChange}
            placeholder="9876543210"
            className={`w-full border rounded px-3 py-2 
                       focus:outline-none focus:border-brand-500
                       ${errors.mobile ? "border-red-500" : "border-slate-300"}`}
            disabled={loading}
          />
          {errors.mobile && (
            <p className="text-red-500 text-sm mt-1">{errors.mobile}</p>
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
          {loading ? "Calculating..." : "Calculate Fees"}
        </button>
      </form>
    </div>
  );
};

export default QuickForm;