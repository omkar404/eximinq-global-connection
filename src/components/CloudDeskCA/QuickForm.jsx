import { useState } from "react";
import { FileCheck, Phone } from "lucide-react";

const Fees = () => {
  const [form, setForm] = useState({
    certificateType: "",
    financialYear: "",
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

    if (!form.certificateType) {
      newErrors.certificateType = "Certificate type is required";
    }

    if (!form.financialYear) {
      newErrors.financialYear = "Financial year is required";
    }

    if (!form.mobile) {
      newErrors.mobile = "Mobile number is required";
    } else if (!/^[6-9]\d{9}$/.test(form.mobile)) {
      newErrors.mobile = "Enter valid 10 digit Indian mobile number";
    }

    return newErrors;
  };

  /*----------------------
    SUBMIT HANDLER (API CALL)
  -----------------------*/
  const handleSubmit = async (e) => {
    e.preventDefault();

    const validationErrors = validate();
    setErrors(validationErrors);
    if (Object.keys(validationErrors).length > 0) return;

    setLoading(true);

    try {
      const payload = {
        certificateType: form.certificateType,
        financialYear: form.financialYear,
        mobile: form.mobile,
        type: "QUICK_FORM",
      };

      console.log("📤 Sending data:", payload);

      const response = await fetch(
        `${process.env.REACT_APP_API_URL}/api/ca-certification-export-import`,
    // "http://localhost:5000/api/ca-certification-export-import", // ✅ http:// is required   
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

      alert("✅ CA service request submitted successfully");

      // Reset form
      setForm({
        certificateType: "",
        financialYear: "",
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
      {/* Heading */}
      <div className="flex items-center gap-3 mb-2">
        <FileCheck className="text-brand-600" size={26} />
        <h3 className="text-2xl font-bold text-brand-900">
          CA Service Request
        </h3>
      </div>

      <p className="text-slate-500 mb-6 text-sm">
        Select the type of audit required.
      </p>

      <form onSubmit={handleSubmit}>
        {/* Certificate Type */}
        <div className="mb-4">
          <label className="block text-sm font-semibold mb-1">
            Certificate Type
          </label>
          <select
            name="certificateType"
            value={form.certificateType}
            onChange={handleChange}
            className={`w-full border rounded px-3 py-2 focus:outline-none focus:border-brand-500 ${
              errors.certificateType ? "border-red-500" : "border-slate-300"
            }`}
          >
            <option value="">Select certificate</option>
            <option>Annual Export Turnover</option>
            <option>Export Obligation Discharge (EODC)</option>
            <option>Foreign Exchange Earning</option>
            <option>Status Holder Application (3 Years)</option>
            <option>Average Export Performance</option>
          </select>
          {errors.certificateType && (
            <p className="text-red-500 text-xs mt-1">{errors.certificateType}</p>
          )}
        </div>

        {/* Financial Year */}
        <div className="mb-4">
          <label className="block text-sm font-semibold mb-1">
            Financial Year (FY)
          </label>
          <input
            type="text"
            name="financialYear"
            value={form.financialYear}
            onChange={handleChange}
            placeholder="e.g. 2023–24"
            className={`w-full border rounded px-3 py-2 focus:outline-none focus:border-brand-500 ${
              errors.financialYear ? "border-red-500" : "border-slate-300"
            }`}
          />
          {errors.financialYear && (
            <p className="text-red-500 text-xs mt-1">{errors.financialYear}</p>
          )}
        </div>

        {/* Mobile Number */}
        <div className="mb-6">
          <label className="block text-sm font-semibold mb-1">
            Mobile Number
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
          {loading ? "Submitting..." : "Get Checklist & Quote"}
        </button>
      </form>
    </div>
  );
};

export default Fees;