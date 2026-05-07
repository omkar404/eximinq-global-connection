// components/QuickForm.jsx
import { useState } from "react";

const QuickForm = () => {
  const [form, setForm] = useState({
    service: "",
    companyName: "",   // ✅ camelCase, no space
    mobile: "",
  });

  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [services, setServices] = useState([
    "Steel Import NOC (SIMS)",
    "Copper (NFMIMS)",
    "Aluminium (NFMIMS)",
    "Coal (CIMS)",
    "Paper (PIMS)",
    "Chip (CHIMS)",
  ]);
  const [newServiceName, setNewServiceName] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const validate = () => {
    const newErrors = {};
    if (!form.service) newErrors.service = "Please select a service";

    const mobileRegex = /^[6-9]\d{9}$/;
    if (!form.mobile.trim()) {
      newErrors.mobile = "Mobile number is required";
    } else if (!mobileRegex.test(form.mobile)) {
      newErrors.mobile = "Enter valid 10 digit Indian mobile number";
    }
    return newErrors;
  };

  const addService = () => {
    const trimmed = newServiceName.trim();
    if (!trimmed) return alert("Please enter a service name");
    if (services.includes(trimmed)) return alert("Service already exists");
    setServices([...services, trimmed]);
    setNewServiceName("");
  };

  const removeService = (serviceToRemove) => {
    if (form.service === serviceToRemove) {
      alert("Please select a different service before removing this one.");
      return;
    }
    setServices(services.filter((s) => s !== serviceToRemove));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validate();
    setErrors(validationErrors);
    if (Object.keys(validationErrors).length > 0) return;

    setLoading(true);

    try {
        const payload = {
        service: form.service,
        companyName: form.companyName,
        mobile: form.mobile,
        type: "QUICK_FORM",
      };

      console.log("📤 Sending data:", payload);

      const response = await fetch(
        `${process.env.REACT_APP_API_URL}/api/import-management-registration`,        
        // "http://localhost:5000/api/import-management-registration",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(form), // sends { service, companyName, mobile }
        }
      );
      const data = await response.json();
      if (!response.ok || !data.success) throw new Error(data.error || "API failed");
      alert("Request submitted successfully");
      setForm({ service: "", companyName: "", mobile: "" });
      setErrors({});
    } catch (err) {
      console.error(err);
      alert("Submission failed. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-white text-slate-800 rounded-xl shadow-2xl p-6 md:p-8">
      <h3 className="text-2xl font-bold text-brand-900 mb-2">Service Request</h3>
      <p className="text-slate-500 mb-6 text-sm">
        Select the service you need. You can also add or remove services below.
      </p>

      <form onSubmit={handleSubmit}>
        {/* Service Type Dropdown */}
        <div className="mb-4">
          <label className="block text-sm font-semibold mb-1">Service Type</label>
          <select
            name="service"
            value={form.service}
            onChange={handleChange}
            className="w-full border border-slate-300 rounded px-3 py-2"
          >
            <option value="">Select a service</option>
            {services.map((svc) => (
              <option key={svc} value={svc}>
                {svc}
              </option>
            ))}
          </select>
          {errors.service && <p className="text-red-500 text-xs mt-1">{errors.service}</p>}
        </div>


        {/* Company Name */}
        <div className="mb-4">
          <label className="block text-sm font-semibold mb-1">Company Name</label>
          <input
            type="text"
            name="companyName"
            value={form.companyName}
            onChange={handleChange}
            placeholder="e.g. ABC Pvt Ltd"
            className="w-full border border-slate-300 rounded px-3 py-2"
          />
        </div>

        {/* Mobile Number */}
        <div className="mb-4">
          <label className="block text-sm font-semibold mb-1">Mobile Number</label>
          <input
            type="tel"
            name="mobile"
            value={form.mobile}
            onChange={handleChange}
            placeholder="+91 74000 96950"
            className="w-full border border-slate-300 rounded px-3 py-2"
          />
          {errors.mobile && <p className="text-red-500 text-xs mt-1">{errors.mobile}</p>}
        </div>

        <button
          type="submit"
          disabled={loading}
          className={`w-full text-white font-bold py-3 rounded-lg transition ${
            loading ? "bg-brand-400 cursor-not-allowed" : "bg-brand-600 hover:bg-brand-700"
          }`}
        >
          {loading ? "Submitting..." : "Proceed"}
        </button>
      </form>
    </div>
  );
};

export default QuickForm;