import { useState } from "react";

const QuickForm = () => {
  const [form, setForm] = useState({
    companyName: "",
    personName: "",
    mode: "import",
    originPort: "",
    destinationPort: "",
    transportMode: "",
    shipmentDate: "",
    cifValue: "",
    quantity: "",
    goodsDescription: "",
    email: "",
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

  const setMode = (mode) => {
    setForm((prev) => ({ ...prev, mode }));
    // Clear errors related to export-only fields when switching to import
    if (mode === "import") {
      setErrors((prev) => ({
        ...prev,
        shipmentDate: "",
        cifValue: "",
        quantity: "",
        goodsDescription: "",
      }));
    }
  };

  /*----------------------
    VALIDATION
  -----------------------*/
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

    // Common required fields
    if (!form.originPort) newErrors.originPort = "Origin port is required";
    if (!form.destinationPort) newErrors.destinationPort = "Destination port is required";
    if (!form.transportMode) newErrors.transportMode = "Transport mode is required";
    if (!form.email) newErrors.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(form.email)) newErrors.email = "Enter a valid email";

    if (!form.mobile) {
      newErrors.mobile = "Mobile number is required";
    } else if (!/^[6-9]\d{9}$/.test(form.mobile)) {
      newErrors.mobile = "Enter valid 10 digit Indian mobile number";
    }

    // Export-specific fields
    if (form.mode === "export") {
      if (!form.shipmentDate) newErrors.shipmentDate = "Shipment date is required";
      if (!form.cifValue) newErrors.cifValue = "CIF value is required";
      else if (isNaN(Number(form.cifValue)) || Number(form.cifValue) <= 0)
        newErrors.cifValue = "Enter a positive CIF value";
      if (!form.quantity) newErrors.quantity = "Quantity is required";
      else if (isNaN(Number(form.quantity)) || Number(form.quantity) <= 0)
        newErrors.quantity = "Enter a positive quantity";
      if (!form.goodsDescription) newErrors.goodsDescription = "Description of goods is required";
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
        ...form,
        companyName: form.companyName.trim(),
        personName: form.personName.trim(),
        type: "QUICK_FORM",
      };

      console.log("📤 Sending data:", payload);

      const response = await fetch(
        `${process.env.REACT_APP_API_URL}/api/freight-forwarding`,
        // "http://localhost:5000/api/freight-forwarding", // ✅ http:// is required
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

      alert("✅ Shipping quote request submitted successfully");

      // Reset form (keep mode as "import")
      setForm({
        companyName: "",
        personName: "",
        mode: "import",
        originPort: "",
        destinationPort: "",
        transportMode: "",
        shipmentDate: "",
        cifValue: "",
        quantity: "",
        goodsDescription: "",
        email: "",
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
    <div id="quote" className="bg-white text-slate-800 rounded-xl shadow-2xl p-6 md:p-8">
      {/* Header with mode toggle */}
      <div className="flex justify-between items-center mb-6">
        <h3 className="text-2xl font-bold text-brand-900">Get Shipping Quote</h3>
        <div className="flex gap-2">
          <button
            type="button"
            className={`text-xs px-3 py-1 rounded font-bold ${
              form.mode === "import"
                ? "bg-brand-100 text-brand-700"
                : "bg-slate-100 text-slate-600"
            }`}
            onClick={() => setMode("import")}
          >
            Import
          </button>
          <button
            type="button"
            className={`text-xs px-3 py-1 rounded font-bold ${
              form.mode === "export"
                ? "bg-brand-100 text-brand-700"
                : "bg-slate-100 text-slate-600"
            }`}
            onClick={() => setMode("export")}
          >
            Export
          </button>
        </div>
      </div>

      <form onSubmit={handleSubmit}>
        {/* Company & Contact Person */}
        <div className="grid grid-cols-2 gap-4 mb-4">
          <div>
            <label className="block text-xs font-bold text-slate-500 uppercase mb-1">
              Company Name
            </label>
            <input
              type="text"
              name="companyName"
              value={form.companyName}
              onChange={handleChange}
              placeholder="e.g. Acme Exports Pvt Ltd"
              className={`w-full border rounded px-3 py-2 text-sm focus:outline-none focus:border-brand-500 ${
                errors.companyName ? "border-red-500" : "border-slate-300"
              }`}
            />
            {errors.companyName && <p className="text-red-500 text-xs mt-1">{errors.companyName}</p>}
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-500 uppercase mb-1">
              Contact Person Name
            </label>
            <input
              type="text"
              name="personName"
              value={form.personName}
              onChange={handleChange}
              placeholder="e.g. Rahul Sharma"
              className={`w-full border rounded px-3 py-2 text-sm focus:outline-none focus:border-brand-500 ${
                errors.personName ? "border-red-500" : "border-slate-300"
              }`}
            />
            {errors.personName && <p className="text-red-500 text-xs mt-1">{errors.personName}</p>}
          </div>
        </div>

        {/* Ports */}
        <div className="grid grid-cols-2 gap-4 mb-4">
          <div>
            <label className="block text-xs font-bold text-slate-500 uppercase mb-1">
              Origin Port
            </label>
            <input
              type="text"
              name="originPort"
              value={form.originPort}
              onChange={handleChange}
              placeholder="e.g. Shanghai"
              className={`w-full border rounded px-3 py-2 text-sm focus:outline-none focus:border-brand-500 ${
                errors.originPort ? "border-red-500" : "border-slate-300"
              }`}
            />
            {errors.originPort && <p className="text-red-500 text-xs mt-1">{errors.originPort}</p>}
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-500 uppercase mb-1">
              Destination Port
            </label>
            <input
              type="text"
              name="destinationPort"
              value={form.destinationPort}
              onChange={handleChange}
              placeholder="e.g. Nhava Sheva"
              className={`w-full border rounded px-3 py-2 text-sm focus:outline-none focus:border-brand-500 ${
                errors.destinationPort ? "border-red-500" : "border-slate-300"
              }`}
            />
            {errors.destinationPort && <p className="text-red-500 text-xs mt-1">{errors.destinationPort}</p>}
          </div>
        </div>

        {/* Mode & Type */}
        <div className="mb-4">
          <label className="block text-xs font-bold text-slate-500 uppercase mb-1">
            Mode & Type
          </label>
          <select
            name="transportMode"
            value={form.transportMode}
            onChange={handleChange}
            className={`w-full border rounded px-3 py-2 text-sm focus:outline-none focus:border-brand-500 ${
              errors.transportMode ? "border-red-500" : "border-slate-300"
            }`}
          >
            <option value="">Select Mode</option>
            <option>Sea - FCL</option>
            <option>Sea - LCL</option>
            <option>Air Freight</option>
            <option>Door-to-Door</option>
          </select>
          {errors.transportMode && <p className="text-red-500 text-xs mt-1">{errors.transportMode}</p>}
        </div>

        {/* EXPORT ONLY FIELDS */}
        {form.mode === "export" && (
          <>
            <div className="grid grid-cols-2 gap-4 mb-4">
              <div>
                <label className="block text-xs font-bold text-slate-500 uppercase mb-1">
                  Proposed Shipment Date
                </label>
                <input
                  type="date"
                  name="shipmentDate"
                  value={form.shipmentDate}
                  onChange={handleChange}
                  className={`w-full border rounded px-3 py-2 text-sm focus:outline-none focus:border-brand-500 ${
                    errors.shipmentDate ? "border-red-500" : "border-slate-300"
                  }`}
                />
                {errors.shipmentDate && <p className="text-red-500 text-xs mt-1">{errors.shipmentDate}</p>}
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-500 uppercase mb-1">
                  CIF Value (INR)
                </label>
                <input
                  type="text"
                  name="cifValue"
                  value={form.cifValue}
                  onChange={handleChange}
                  placeholder="e.g. 2500000"
                  className={`w-full border rounded px-3 py-2 text-sm focus:outline-none focus:border-brand-500 ${
                    errors.cifValue ? "border-red-500" : "border-slate-300"
                  }`}
                />
                {errors.cifValue && <p className="text-red-500 text-xs mt-1">{errors.cifValue}</p>}
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4 mb-4">
              <div>
                <label className="block text-xs font-bold text-slate-500 uppercase mb-1">
                  Quantity (Metric Tons)
                </label>
                <input
                  type="text"
                  name="quantity"
                  value={form.quantity}
                  onChange={handleChange}
                  placeholder="e.g. 12.5"
                  className={`w-full border rounded px-3 py-2 text-sm focus:outline-none focus:border-brand-500 ${
                    errors.quantity ? "border-red-500" : "border-slate-300"
                  }`}
                />
                {errors.quantity && <p className="text-red-500 text-xs mt-1">{errors.quantity}</p>}
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-500 uppercase mb-1">
                  Description of Goods
                </label>
                <input
                  type="text"
                  name="goodsDescription"
                  value={form.goodsDescription}
                  onChange={handleChange}
                  placeholder="e.g. Iron Ore Fines"
                  className={`w-full border rounded px-3 py-2 text-sm focus:outline-none focus:border-brand-500 ${
                    errors.goodsDescription ? "border-red-500" : "border-slate-300"
                  }`}
                />
                {errors.goodsDescription && <p className="text-red-500 text-xs mt-1">{errors.goodsDescription}</p>}
              </div>
            </div>
          </>
        )}

        {/* Contact Fields */}
        <div className="grid grid-cols-2 gap-4 mb-6">
          <div>
            <label className="block text-xs font-bold text-slate-500 uppercase mb-1">
              Email
            </label>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="official@company.com"
              className={`w-full border rounded px-3 py-2 text-sm focus:outline-none focus:border-brand-500 ${
                errors.email ? "border-red-500" : "border-slate-300"
              }`}
            />
            {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-500 uppercase mb-1">
              Mobile Number
            </label>
            <input
              type="tel"
              name="mobile"
              value={form.mobile}
              onChange={handleChange}
              placeholder="e.g. 9876543210"
              maxLength={10}
              className={`w-full border rounded px-3 py-2 text-sm focus:outline-none focus:border-brand-500 ${
                errors.mobile ? "border-red-500" : "border-slate-300"
              }`}
            />
            {errors.mobile && <p className="text-red-500 text-xs mt-1">{errors.mobile}</p>}
          </div>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          disabled={loading}
          className={`w-full text-white font-bold py-3 rounded-lg transition shadow-md ${
            loading
              ? "bg-brand-400 cursor-not-allowed"
              : "bg-brand-600 hover:bg-brand-700"
          }`}
        >
          {loading ? "Submitting..." : "Get Best Rates"}
        </button>
      </form>
    </div>
  );
};

export default QuickForm;