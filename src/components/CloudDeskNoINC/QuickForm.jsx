import { useState } from "react";

const QuickForm = () => {
  const [form, setForm] = useState({
    reason: "",
    shippingBill: "",
    portOfExport: "",
    mobile: "",
  });

  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);


  /* -------------------------
      HANDLE CHANGE
  ------------------------- */
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

    // Clear error while typing
    setErrors((prev) => ({
      ...prev,
      [name]: "",
    }));
  };

  /* -------------------------
      VALIDATION
  ------------------------- */
  const validate = () => {
    const newErrors = {};

    // Reason
    if (!form.reason) {
      newErrors.reason = "Please select a reason";
    }

    // Shipping Bill
    if (!form.shippingBill.trim()) {
      newErrors.shippingBill =
        "Shipping Bill number is required";
    }

    // Port
    if (!form.portOfExport.trim()) {
      newErrors.portOfExport =
        "Port of Export is required";
    }

    // Mobile
    if (!form.mobile) {
      newErrors.mobile = "Mobile number is required";
    } else if (!/^[6-9]\d{9}$/.test(form.mobile)) {
      newErrors.mobile =
        "Enter valid 10 digit Indian mobile number";
    }

    return newErrors;
  };

  /* -------------------------
      SUBMIT
  ------------------------- */
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
        reason: form.reason,
        shippingBill: form.shippingBill,
        portOfExport: form.portOfExport,
        mobile: form.mobile,
        type: "QUICK_FORM",
      };

      console.log("📤 Sending Data:", payload);

      const response = await fetch(
        `${process.env.REACT_APP_API_URL}/api/no-incentive-certificate`,
        // "http://localhost:5000/api/no-incentive-certificate", // ✅ http:// is required
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload),
        },
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
        "✅ Re-import assessment submitted successfully"
      );

      // Reset form
      setForm({
        reason: "",
        shippingBill: "",
        portOfExport: "",
        mobile: "",
      });

      setErrors({});
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
      <h3 className="text-2xl font-bold text-blue-900 mb-2">
        Re-import Assessment
      </h3>

      <p className="text-slate-500 mb-6 text-sm">
        Did you claim incentives during export?
      </p>

      {/* Form */}
      <form onSubmit={handleSubmit}>
        {/* Reason */}
        <div className="mb-4">
          <label className="block text-sm font-semibold mb-1">
            Reason for Return
          </label>

          <select
            name="reason"
            value={form.reason}
            onChange={handleChange}
            className={`w-full border rounded px-3 py-2 focus:outline-none focus:border-blue-500 ${
              errors.reason
                ? "border-red-500"
                : "border-slate-300"
            }`}
          >
            <option value="">Select the Reason</option>

            <option value="Quality Rejection">
              Quality Rejection
            </option>

            <option value="Repair & Return">
              Repair & Return
            </option>

            <option value="Exhibition Return">
              Exhibition Return
            </option>

            <option value="Wrong Shipment">
              Wrong Shipment
            </option>
          </select>

          {errors.reason && (
            <p className="text-red-500 text-xs mt-1">
              {errors.reason}
            </p>
          )}
        </div>

        {/* Shipping Bill */}
        <div className="mb-4">
          <label className="block text-sm font-semibold mb-1">
            Original Shipping Bill No.
          </label>

          <input
            type="text"
            name="shippingBill"
            value={form.shippingBill}
            onChange={handleChange}
            placeholder="e.g. 7894561"
            className={`w-full border rounded px-3 py-2 focus:outline-none focus:border-blue-500 ${
              errors.shippingBill
                ? "border-red-500"
                : "border-slate-300"
            }`}
          />

          {errors.shippingBill && (
            <p className="text-red-500 text-xs mt-1">
              {errors.shippingBill}
            </p>
          )}
        </div>

        {/* Port of Export */}
        <div className="mb-4">
          <label className="block text-sm font-semibold mb-1">
            Port of Export
          </label>

          <input
            type="text"
            name="portOfExport"
            value={form.portOfExport}
            onChange={handleChange}
            placeholder="e.g. Nhava Sheva"
            className={`w-full border rounded px-3 py-2 focus:outline-none focus:border-blue-500 ${
              errors.portOfExport
                ? "border-red-500"
                : "border-slate-300"
            }`}
          />

          {errors.portOfExport && (
            <p className="text-red-500 text-xs mt-1">
              {errors.portOfExport}
            </p>
          )}
        </div>

        {/* Mobile */}
        <div className="mb-6">
          <label className="block text-sm font-semibold mb-1">
            Mobile Number
          </label>

          <input
            type="tel"
            name="mobile"
            value={form.mobile}
            onChange={handleChange}
            placeholder="e.g. 9876543210"
            maxLength={10}
            className={`w-full border rounded px-3 py-2 focus:outline-none focus:border-blue-500 ${
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

        {/* Submit */}
        <button
          type="submit"
          disabled={loading}
          className={`w-full text-white font-bold py-3 rounded-lg transition duration-300 ${
            loading
              ? "bg-blue-400 cursor-not-allowed"
              : "bg-blue-600 hover:bg-blue-700"
          }`}
        >
          {loading
            ? "Submitting..."
            : "Check Duty Liability"}
        </button>
      </form>
    </div>
  );
};

export default QuickForm;