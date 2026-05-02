import { useState } from "react";
import { AlertTriangle, Phone } from "lucide-react";

const Fees = () => {
  const [form, setForm] = useState({
    unNumber: "",
    packagingType: "",
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

    // Clear that field's error on typing
    setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  /*----------------------
    VALIDATION
  -----------------------*/
  const validate = () => {
    const newErrors = {};

    if (!form.unNumber) {
      newErrors.unNumber = "UN Number is required";
    }

    if (!form.packagingType) {
      newErrors.packagingType = "Packaging type is required";
    }

    if (!form.mobile) {
      newErrors.mobile = "Mobile number is required";
    } else if (!/^[6-9]\d{9}$/.test(form.mobile)) {
      newErrors.mobile = "Enter valid 10 digit Indian mobile number";
    }

    return newErrors;
  };

  /*----------------------
    SUBMIT HANDLER
  -----------------------*/
  const handleSubmit = async (e) => {
    e.preventDefault();

    const validationErrors = validate();
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length > 0) return;

    setLoading(true);

    try {
      const payload = {
        unNumber: form.unNumber,
        packagingType: form.packagingType,
        mobile: form.mobile,
        type: "QUICK_FORM",
      };

      console.log("📤 Sending data:", payload);

      const response = await fetch(
        `${import.meta.env.VITE_API_BASE_URL}/api/un-iip-certification`,
        // "http://localhost:5000/api/un-iip-certification", // ✅ http:// is required
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

      // Reset form
      setForm({ unNumber: "", packagingType: "", mobile: "" });
    } catch (err) {
      console.error("❌ Error:", err);
      alert(`❌ Submission failed: ${err.message}`);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-white text-slate-800 rounded-xl shadow-2xl p-6 md:p-8">

      {/* Heading */}
      <div className="flex items-center gap-3 mb-2">
        <AlertTriangle className="text-brand-600" size={26} />
        <h3 className="text-2xl font-bold text-brand-900">
          DG Cargo Assessment
        </h3>
      </div>

      <p className="text-slate-500 mb-6 text-sm">
        Find the required Packaging Group for your product.
      </p>

      <form onSubmit={handleSubmit}>

        {/* UN Number */}
        <div className="mb-4">
          <label className="block text-sm font-semibold mb-1">
            UN Number / Name
          </label>
          <input
            type="text"
            name="unNumber"
            value={form.unNumber}
            onChange={handleChange}
            placeholder="e.g. UN 1263 (Paint) / Class 3"
            className={`w-full border rounded px-3 py-2 focus:outline-none focus:border-brand-500 ${
              errors.unNumber ? "border-red-500" : "border-slate-300"
            }`}
          />
          {errors.unNumber && (
            <p className="text-red-500 text-xs mt-1">{errors.unNumber}</p>
          )}
        </div>

        {/* Packaging Type */}
        <div className="mb-4">
          <label className="block text-sm font-semibold mb-1">
            Packaging Type
          </label>
          <select
            name="packagingType"
            value={form.packagingType}
            onChange={handleChange}
            className={`w-full border rounded px-3 py-2 focus:outline-none focus:border-brand-500 ${
              errors.packagingType ? "border-red-500" : "border-slate-300"
            }`}
          >
            <option value="">Select packaging</option>
            <option>Drums (Steel / Plastic)</option>
            <option>Boxes (Fibreboard / Wood)</option>
            <option>Jerricans / Bottles</option>
            <option>Intermediate Bulk Container (IBC)</option>
          </select>
          {errors.packagingType && (
            <p className="text-red-500 text-xs mt-1">{errors.packagingType}</p>
          )}
        </div>

        {/* Mobile */}
        <div className="mb-6">
          <label className="block text-sm font-semibold mb-1">
            Mobile Number <span className="text-red-500">*</span>
          </label>
          <div className="relative">
            <Phone
              size={16}
              className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
            />
            <input
              type="tel"
              name="mobile"
              value={form.mobile}
              onChange={handleChange}
              placeholder="e.g. 9876543210"
              maxLength={10}
              className={`w-full pl-9 border rounded px-3 py-2 focus:outline-none focus:border-brand-500 ${
                errors.mobile ? "border-red-500" : "border-slate-300"
              }`}
            />
          </div>
          {errors.mobile && (
            <p className="text-red-500 text-xs mt-1">{errors.mobile}</p>
          )}
        </div>

        {/* Submit */}
        <button
          type="submit"
          disabled={loading}
          className={`w-full text-white font-bold py-3 rounded-lg transition ${
            loading
              ? "bg-brand-400 cursor-not-allowed"
              : "bg-brand-600 hover:bg-brand-700"
          }`}
        >
          {loading ? "Submitting..." : "Get Packaging Specification"}
        </button>

      </form>
    </div>
  );
};

export default Fees;