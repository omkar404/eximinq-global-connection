import { useState } from "react";
import { AlertTriangle, Phone } from "lucide-react";

const QuickForm = () => {
  const [form ,setForm] = useState({
  iec: "",
  notification: "",
  mobile: "",
});

  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === "mobile") {
      const digitsOnly = value.replace(/\D/g, "").slice(0, 10);
      setForm((prev) => ({ ...prev, [name]: digitsOnly }));
    } else if (name === "notification") {
      setForm((prev) => ({ ...prev, [name]: value.toUpperCase() }));
    } else {
      setForm((prev) => ({ ...prev, [name]: value }));
    }

    setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  /* VALIDATION */
  const validate = () => {
    const newErrors = {};

    if (!form.iec.trim()) {
      newErrors.iec = "iec number is required";
    }

    if (!form.notification.trim()) {
      newErrors.notification = "notification is required";
    }

    if (!form.mobile) {
      newErrors.mobile = "Mobile number is required";
    } else if (!/^[6-9]\d{9}$/.test(form.mobile)) {
      newErrors.mobile = "Enter valid 10 digit Indian mobile number";
    }

    return newErrors;
  };

  /* SUBMIT HANDLER */
  const handleSubmit = async (e) => {
    e.preventDefault();

    const validationErrors = validate();
    setErrors(validationErrors);
    if (Object.keys(validationErrors).length > 0) return;

    setLoading(true);

    try {
      const payload = {
        iec: form.iec.trim(),
        notification: form.notification.trim(),
        mobile: form.mobile,
        type: "QUICK_FORM",
      };

      console.log("📤 Sending data:", payload);

      const response = await fetch(
        `${process.env.REACT_APP_API_URL}/api/igcr-returns`,
        // "http://localhost:5000/api/igcr-returns", // ✅ http:// is required        
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

      alert(
        "✅ Compliance Check Submission successfully!"
      ); 

      setForm({ iec: "", notification: "", mobile: ""  });
    } catch (err) {
      console.error("❌ Error:", err);
      alert(`❌ Submission failed: ${err.message}`);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-white text-slate-800 rounded-xl shadow-2xl p-6 md:p-8">
      {/* Header */}
      <div className="flex items-center gap-3 mb-2">
        <h3 className="text-2xl font-bold text-alert-900">
          Compliance Check
        </h3>
      </div>

      <p className="text-slate-500 mb-6 text-sm">
        Verify your pending returns status.
      </p>

      <form onSubmit={handleSubmit}>
        {/* BOE Number */}
        <div className="mb-4">
          <label className="block text-sm font-semibold mb-1">
            Company IEC
          </label>
          <input
            type="text"
            name="iec"
            value={form.iec}
            onChange={handleChange}
            placeholder="e.g. 0513456789"
            className={`w-full border rounded px-3 py-2 text-sm focus:outline-none focus:border-brand-500 ${
              errors.iec ? "border-red-400" : "border-slate-300"
            }`}
          />
          {errors.iec && (
            <p className="text-red-500 text-xs mt-1">{errors.iec}</p>
          )}
        </div>

        {/* Port Code */}
        <div className="mb-4">
          <label className="block text-sm font-semibold mb-1">Notification No.</label>
          <input
            type="text"
            name="notification"
            value={form.notification}
            onChange={handleChange}
            placeholder="e.g. 50/2017-Cus"
            className={`w-full border rounded px-3 py-2 text-sm focus:outline-none focus:border-brand-500 ${
              errors.notification ? "border-red-400" : "border-slate-300"
            }`}
          />
          {errors.notification && (
            <p className="text-red-500 text-xs mt-1">{errors.notification}</p>
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
              placeholder="9876543210"
              maxLength={10}
              className={`w-full pl-9 border rounded px-3 py-2 text-sm focus:outline-none focus:border-brand-500 ${
                errors.mobile ? "border-red-400" : "border-slate-300"
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
          {loading ? "Submitting..." : "Check Status"}
        </button>
      </form>
    </div>
  );
};

export default QuickForm;