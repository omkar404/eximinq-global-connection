import React, { useState, useEffect } from "react";
import { X, Handshake, Building, Mail } from "lucide-react";

const ModalEnrollSaas = ({ show, onClose, type, plan, billing, price, onSubmit }) => {
  const [form, setForm] = useState({
    name: "",
    mobile: "",
    entity: "",
    email: "",
    role: "",
    partner: false,
  });

  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);

  const oneyearData = type === "Last 1 Year Data";

  const secondyearData = type === "Last 2 Year Data";

  const thirdyearData = type === "Last 3 Year Data";

  const sixyearsData = type === "Last 6 Year Data";

  const isEnroll = type === "Enroll";


  const resetForm = () => {
    setForm({
      name: "",
      mobile: "",
      entity: "",
      email: "",
      role: "",
      partner: false,
    });
    setErrors({});
    setLoading(false);
  };

  const handleClose = () => {
    resetForm();
    onClose();
  };

  if (!show) return null;


  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const validate = () => {
    const e = {};
    if (!form.name.trim()) e.name = "Name is required.";
    if (!form.mobile.trim()) e.mobile = "Mobile number is required.";
    if (!form.email.trim()) e.email = "Email is required.";
    if (!form.role) e.role = "Please select your role.";
    if (!form.partner) e.partner = "Please agree to the partnership terms.";
    return e;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const v = validate();
    setErrors(v);
    if (Object.keys(v).length > 0) return;

    if (typeof onSubmit === "function") {
      onSubmit({
        ...form,
        type,
      });
    }

    try {
      setLoading(true);

      const payload = {
        ...form,
        type: type || null,
        plan: plan || null,
        billing: billing || null,
        price: price || null
      };


      console.log("final payload", payload);

      const res = await fetch(
        `${process.env.REACT_APP_API_URL}/api/saas-enrollment`,
        // `http://localhost:5000/api/saas-enrollment`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload),
        }
      );

      const data = await res.json();

      if (!res.ok || !data.success) {
        throw new Error(data.error || "API failed");
      }

      alert("Request submitted successfully");
      resetForm();
      onClose();
    } catch (err) {
      console.error("Enroll error:", err);
      alert("Submission failed. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center p-4 bg-gray-900/80 backdrop-blur-sm">
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-lg relative overflow-hidden">
        {/* Header */}
        <div className="bg-indigo-900 p-6 text-white flex justify-between items-start">
          <div>
            <h2 className="text-2xl font-bold flex items-center">
              <Handshake className="mr-2 text-teal-400" /> Enroll Now
            </h2>
            <p className="text-indigo-200 text-sm mt-1">
              Join the CloudDesk Network
            </p>
          </div>

          <button
            onClick={handleClose}
            className="text-white/70 hover:text-white bg-white/10 hover:bg-white/20 
            rounded-full p-1 transition"
          >
            <X size={20} />
          </button>
        </div>

        {/* Body */}
        <div className="p-6 md:p-8 overflow-y-auto max-h-[80vh]">
          <form className="space-y-5" onSubmit={handleSubmit}>
            {/* Name + Mobile */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold text-gray-700 mb-1 uppercase">
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={form.name}
                  onChange={handleChange}
                  className="w-full p-3 rounded-lg border border-gray-300"
                />
                {errors.name && (
                  <p className="text-xs text-red-500 mt-1">{errors.name}</p>
                )}
              </div>

              <div>
                <label className="block text-xs font-bold text-gray-700 mb-1 uppercase">
                  Mobile No
                </label>
                <input
                  type="tel"
                  name="mobile"
                  placeholder="+91 XXXXX XXXXX"
                  value={form.mobile}
                  onChange={handleChange}
                  className="w-full p-3 rounded-lg border border-gray-300"
                />
                {errors.mobile && (
                  <p className="text-xs text-red-500 mt-1">{errors.mobile}</p>
                )}
              </div>
            </div>

            {/* Entity */}
            <div>
              <label className="block text-xs font-bold text-gray-700 mb-1 uppercase">
                Entity Name
              </label>
              <div className="relative">
                <Building
                  className="absolute left-3 top-3 text-gray-400"
                  size={16}
                />
                <input
                  type="text"
                  name="entity"
                  placeholder="Company / Firm Name"
                  value={form.entity}
                  onChange={handleChange}
                  className="w-full pl-10 p-3 rounded-lg border border-gray-300"
                />
              </div>
            </div>

            {/* Email */}
            <div>
              <label className="block text-xs font-bold text-gray-700 mb-1 uppercase">
                Email ID
              </label>
              <div className="relative">
                <Mail
                  className="absolute left-3 top-3 text-gray-400"
                  size={16}
                />
                <input
                  type="email"
                  name="email"
                  placeholder="official@domain.com"
                  value={form.email}
                  onChange={handleChange}
                  className="w-full pl-10 p-3 rounded-lg border border-gray-300"
                />
              </div>
              {errors.email && (
                <p className="text-xs text-red-500 mt-1">{errors.email}</p>
              )}
            </div>

            {(isEnroll) && (
              <div className="bg-yellow-50 p-4 rounded-lg border border-yellow-100">
                <p className="text-sm text-yellow-800">
                  You are on the list! We will contact you beforeMat 15, 2026.
                </p>
              </div>
            )}

            {(oneyearData) && (
              <div>
                <label className="block text-xs font-bold text-gray-700 mb-1 uppercase">
                  card type
                </label>
                <input
                  type="text"
                  value="Last 1 Year Data"
                  disabled
                  className="w-full p-3 rounded-lg border bg-gray-100"
                />
              </div>
            )}

            {(secondyearData) && (
              <div>
                <label className="block text-xs font-bold text-gray-700 mb-1 uppercase">
                  card type
                </label>
                <input
                  type="text"
                  value="Last 2 Year Data"
                  disabled
                  className="w-full p-3 rounded-lg border bg-gray-100"
                />
              </div>
            )}

            {(thirdyearData) && (
              <div>
                <label className="block text-xs font-bold text-gray-700 mb-1 uppercase">
                  card type
                </label>
                <input
                  type="text"
                  value="Last 3 Year Data"
                  disabled
                  className="w-full p-3 rounded-lg border bg-gray-100"
                />
              </div>
            )}

            {(sixyearsData) && (
              <div>
                <label className="block text-xs font-bold text-gray-700 mb-1 uppercase">
                  card type
                </label>
                <input
                  type="text"
                  value="Last 6 Year Data"
                  disabled
                  className="w-full p-3 rounded-lg border bg-gray-100"
                />
              </div>
            )}

            {plan && (
              <div>
                <label className="block text-xs font-bold text-gray-700 mb-1 uppercase">
                  Selected Plan
                </label>
                <input
                  type="text"
                  value={`${billing === "annual" ? "Annual Plan" : "Monthly Plan"} - ${plan} - ${price}`}
                  disabled
                  className="w-full p-3 rounded-lg border bg-gray-100"
                />
              </div>
            )}


            {/* Role */}
            <div>
              <label className="block text-xs font-bold text-gray-700 mb-2 uppercase">
                I am a:
              </label>
              <div className="grid grid-cols-2 gap-3">
                {["Importer / Exporter", "CHA", "Logistics", "Forwarder"].map(
                  (r) => (
                    <label key={r} className="flex items-center gap-2">
                      <input
                        type="radio"
                        name="role"
                        value={r}
                        checked={form.role === r}
                        onChange={handleChange}
                      />
                      {r}
                    </label>
                  )
                )}
              </div>
              {errors.role && (
                <p className="text-xs text-red-500 mt-2">{errors.role}</p>
              )}
            </div>

            <div className="bg-teal-50 p-4 rounded-lg border border-teal-100">
              <label className="flex items-start cursor-pointer">
                <input
                  type="checkbox"
                  name="partner"
                  checked={form.partner}
                  onChange={handleChange}
                  className="mt-1 w-5 h-5 text-teal-600 rounded border-gray-300 focus:ring-teal-500"
                />
                <span className="ml-3 text-sm text-gray-800">
                  I am interested in being a{" "}
                  <span className="font-bold text-teal-700">
                    Partner with EXIMINQ CLOUDDESK
                  </span>{" "}
                  and agree to the terms of enrollment.
                </span>
              </label>
              {errors.partner && (
                <p className="text-xs text-red-500 mt-2">{errors.partner}</p>
              )}
            </div>

            {/* Submit */}
            <button
              type="submit"
              disabled={loading}
              className="w-full py-4 bg-gradient-to-r from-teal-600 to-indigo-700 
              text-white font-bold rounded-xl shadow-lg hover:shadow-xl 
              transform hover:-translate-y-0.5 transition flex items-center justify-center text-lg"
            >
              {loading ? "Submitting..." : "Submit Enrollment"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ModalEnrollSaas;
