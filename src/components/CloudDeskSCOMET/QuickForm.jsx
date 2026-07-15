import { useState } from "react";
import { SearchCheck } from "lucide-react";

const QuickForm = () => {
  const [form, setForm] = useState({
    companyName: "",
    personName: "",
    email: "",
    mobile: "",
    productName: "",
    technicalSpec: "",
    endUserCountry: "",
  });

  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === "mobile") {
      const digitsOnly = value.replace(/\D/g, "").slice(0, 10);
      setForm((prev) => ({ ...prev, [name]: digitsOnly }));
    } else {
      setForm((prev) => ({
        ...prev,
        [name]: value,
      }));
    }

    // clear error when typing
    setErrors((prev) => ({
      ...prev,
      [name]: "",
    }));
  };

  /* -------------------------
     VALIDATION FUNCTION
  -------------------------- */

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

    if (!form.mobile.trim()) {
      newErrors.mobile = "Mobile number is required";
    } else if (!/^[6-9]\d{9}$/.test(form.mobile)) {
      newErrors.mobile = "Enter valid 10 digit Indian mobile number";
    }

    // Product Name validation
    if (!form.productName.trim()) {
      newErrors.productName = "Product name is required";
    }

    // Technical Specification validation
    if (!form.technicalSpec.trim()) {
      newErrors.technicalSpec = "Technical specification is required";
    }

    // End User Country validation
    if (!form.endUserCountry.trim()) {
      newErrors.endUserCountry = "End user country is required";
    } else if (form.endUserCountry.trim().length < 2) {
      newErrors.endUserCountry = "Please enter a valid country name";
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

  if (Object.keys(validationErrors).length > 0) {
    return;
  }

  try {
    setLoading(true);

    // Create payload with ALL required fields
    const payload = {
      companyName: form.companyName.trim(),      // Contact fields
      personName: form.personName.trim(),
      email: form.email.trim(),
      mobile: form.mobile,
      type: "QUICK_FORM",
      productName: form.productName,              // Additional field
      technicalSpec: form.technicalSpec,          // Additional field
      endUserCountry: form.endUserCountry,        // Additional field
    };

    console.log("Sending payload:", payload);

    const response = await fetch(
      `${process.env.REACT_APP_API_URL}/api/scomet-licensing`,
      // "http://localhost:5000/api/scomet-licensing",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      }
    );

    const data = await response.json();
    console.log("API Response:", data);

    if (!response.ok || !data.success) {
      throw new Error(data.message || data.error || "Submission failed");
    }

    alert(data.message || "We will analyze the technical specifications and revert.");

    // Reset form
    setForm({
      companyName: "",
      personName: "",
      email: "",
      mobile: "",
      productName: "",
      technicalSpec: "",
      endUserCountry: "",
    });
    setErrors({});

  } catch (err) {
    console.error("Submission error:", err);
    alert(err.message || "Submission failed. Please try again.");
  } finally {
    setLoading(false);
  }
};

  return (
    <div className="bg-white text-slate-800 rounded-xl shadow-2xl p-4 md:p-5">
      <div className="flex items-center gap-2 mb-1">
        <SearchCheck className="w-5 h-5 text-brand-900" />
        <h3 className="text-lg font-bold text-brand-900">Item Verification</h3>
      </div>

      <p className="text-slate-500 mb-3 text-xs">
        Check if your product requires a license.
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
            className={`w-full border rounded px-2.5 py-1.5 text-sm
                     focus:outline-none focus:border-brand-500
                     ${errors.companyName ? "border-red-500" : "border-slate-300"}`}
            placeholder="e.g. Acme Exports Pvt Ltd"
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
            className={`w-full border rounded px-2.5 py-1.5 text-sm
                     focus:outline-none focus:border-brand-500
                     ${errors.personName ? "border-red-500" : "border-slate-300"}`}
            placeholder="e.g. Rahul Sharma"
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
            className={`w-full border rounded px-2.5 py-1.5 text-sm
                     focus:outline-none focus:border-brand-500
                     ${errors.email ? "border-red-500" : "border-slate-300"}`}
            placeholder="e.g. rahul@acmeexports.com"
          />
          {errors.email && (
            <p className="text-red-500 text-xs mt-1">{errors.email}</p>
          )}
        </div>

        {/* Mobile Number */}
        <div className="mb-2.5">
          <label className="block text-xs font-semibold mb-1">
            Mobile Number
          </label>
          <input
            type="tel"
            name="mobile"
            value={form.mobile}
            onChange={handleChange}
            maxLength={10}
            className={`w-full border rounded px-2.5 py-1.5 text-sm
                     focus:outline-none focus:border-brand-500
                     ${errors.mobile ? "border-red-500" : "border-slate-300"}`}
            placeholder="e.g. 9876543210"
          />
          {errors.mobile && (
            <p className="text-red-500 text-xs mt-1">{errors.mobile}</p>
          )}
        </div>

        {/* Product Name */}
        <div className="mb-2.5">
          <label className="block text-xs font-semibold mb-1">
            Product Name / CAS No. <span className="text-red-500"></span>
          </label>
          <input
            type="text"
            name="productName"
            value={form.productName}
            onChange={handleChange}
            className={`w-full border rounded px-2.5 py-1.5 text-sm
                     focus:outline-none focus:border-brand-500
                     ${errors.productName ? "border-red-500" : "border-slate-300"}`}
            placeholder="e.g. Titanium Alloy / Triethanolamine"
          />
          {errors.productName && (
            <p className="text-red-500 text-xs mt-1">{errors.productName}</p>
          )}
        </div>

        {/* Technical Specification */}
        <div className="mb-2.5">
          <label className="block text-xs font-semibold mb-1">
            Technical Specification <span className="text-red-500"></span>
          </label>
          <input
            type="text"
            name="technicalSpec"
            value={form.technicalSpec}
            onChange={handleChange}
            className={`w-full border rounded px-2.5 py-1.5 text-sm
                     focus:outline-none focus:border-brand-500
                     ${errors.technicalSpec ? "border-red-500" : "border-slate-300"}`}
            placeholder="e.g. High speed machining center"
          />
          {errors.technicalSpec && (
            <p className="text-red-500 text-xs mt-1">{errors.technicalSpec}</p>
          )}
        </div>

        {/* End User Country */}
        <div className="mb-3">
          <label className="block text-xs font-semibold mb-1">
            End User Country <span className="text-red-500"></span>
          </label>
          <input
            type="text"
            name="endUserCountry"
            value={form.endUserCountry}
            onChange={handleChange}
            className={`w-full border rounded px-2.5 py-1.5 text-sm
                     focus:outline-none focus:border-brand-500
                     ${errors.endUserCountry ? "border-red-500" : "border-slate-300"}`}
            placeholder="e.g. Germany"
          />
          {errors.endUserCountry && (
            <p className="text-red-500 text-xs mt-1">{errors.endUserCountry}</p>
          )}
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          disabled={loading}
          className={`w-full text-white font-bold py-2 text-sm rounded-lg transition ${
            loading
              ? "bg-brand-400 cursor-not-allowed"
              : "bg-brand-600 hover:bg-brand-700"
          }`}
        >
          {loading ? "Submitting..." : "Check Status"}
        </button>
      </form>
    </div>
  );
};

export default QuickForm;