import { SendHorizontal } from "lucide-react";
import { useState } from "react";

const QuickForm = () => {

  const [form, setForm] = useState({
    service: "",
    port: "",
    mobile: "",
    email: "",
  });

  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {

    const { name, value } = e.target;

    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));

    setErrors((prev) => ({
      ...prev,
      [name]: "",
    }));
  };

  const validate = () => {

    const newErrors = {};

    if (!form.service) {
      newErrors.service = "Please select a service";
    }

    const mobileRegex = /^[6-9]\d{9}$/;

    if (!form.mobile.trim()) {
      newErrors.mobile = "Mobile number is required";
    } else if (!mobileRegex.test(form.mobile)) {
      newErrors.mobile = "Enter valid 10 digit Indian mobile number";
    }

    if (!form.port) {
      newErrors.port = "Please select a port";
    }

    return newErrors;
  };

  const handleSubmit = async (e) => {

    e.preventDefault();

    const validationErrors = validate();
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length > 0) return;

    try {

      setLoading(true);

      const response = await fetch(
        `${process.env.REACT_APP_API_URL}/api/shipping-bill-filing`,
        // "http://localhost:5000/api/shipping-bill-filing",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(form),
        }
      );

      const data = await response.json();

      if (!response.ok || !data.success) {
        throw new Error(data.error || data.message);
      }

      alert("Request submitted successfully");

      setForm({
        service: "",
        port: "",
        mobile: "",
      });

    } catch (err) {

      console.error(err);
      alert("Submission failed");

    } finally {

      setLoading(false);

    }

  };

  return (

    <div className="bg-white text-slate-800 rounded-xl shadow-2xl p-6 md:p-8">

      <h3 className="text-2xl font-bold text-brand-900 mb-2">
        Get Export Quote
      </h3>

      <p className="text-slate-500 mb-6 text-sm">
        Need help with Drawback rates?
      </p>

      <form onSubmit={handleSubmit}>

        {/* PORT */}
        <div className="mb-4">

          <label className="block text-sm font-semibold mb-1">
            Port of Loading
          </label>

          <select
            name="port"
            value={form.port}
            onChange={handleChange}
            className="w-full border border-slate-300 rounded px-3 py-2"
          >
            <option value="">Select Port</option>
            <option value="Nhava Sheva">Nhava Sheva (Sea)</option>
            <option value="Mundra">Mundra (Sea)</option>
            <option value="Delhi/Mumbai Air">Delhi / Mumbai (Air)</option>
            <option value="Chennai/Kolkata">Chennai / Kolkata</option>
            <option value="Others">Others / ICD</option>
          </select>

          {errors.port && (
            <p className="text-red-500 text-xs mt-1">{errors.port}</p>
          )}

        </div>

        {/* SERVICE */}
        <div className="mb-4">

          <label className="block text-sm font-semibold mb-1">
            Incentive Type
          </label>

          <select
            name="service"
            value={form.service}
            onChange={handleChange}
            className="w-full border border-slate-300 rounded px-3 py-2"
          >
            <option value="">Select Incentive</option>
            <option value="Duty Drawback">Duty Drawback</option>
            <option value="RoDTEP">RoDTEP</option>
            <option value="Advance Authorization">Advance Authorization</option>
            <option value="Free / Only GST">Free / Only GST</option>
          </select>

          {errors.service && (
            <p className="text-red-500 text-xs mt-1">{errors.service}</p>
          )}

        </div>

        {/* MOBILE */}
        <div className="mb-4">

          <label className="block text-sm font-semibold mb-1">
            Mobile Number
          </label>

          <input
            type="tel"
            name="mobile"
            value={form.mobile}
            onChange={handleChange}
            placeholder="Enter 10 digit mobile number"
            className="w-full border border-slate-300 rounded px-3 py-2"
          />

          {errors.mobile && (
            <p className="text-red-500 text-xs mt-1">{errors.mobile}</p>
          )}

        </div>

        {/* SUBMIT */}
        <button
          type="submit"
          disabled={loading}
          className="w-full bg-brand-600 hover:bg-brand-700 text-white font-bold py-3 rounded-lg transition flex items-center justify-center gap-2"
        >
          <SendHorizontal size={18} />
          {loading ? "Submitting..." : "Get Estimate"}
        </button>

      </form>

    </div>
  );
};

export default QuickForm;