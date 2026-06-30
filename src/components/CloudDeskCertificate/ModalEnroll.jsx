import React, { useState } from "react";
import { X, Handshake, Building, Mail } from "lucide-react";

export const ModalEnroll = ({ show, onClose, type }) => {
  const [form, setForm] = useState({
    name: "",
    mobile: "",
    entity: "",
    email: "",
    role: "",
    partner: false,
    ftaagreement: "",
  });

  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);

  const startup = type === "Startup_Small_Plan";
  const midsize = type === "MID_SIZE_EXPORTER_PLAN";
  const large = type === "LARGE_EXPORTER_PLAN";
  const isPreferentialCOO = type === "PREFERENTIAL_COO";
  const isNonPreferentialCOO = type === "NON_PREFERENTIAL_COO";

  const PREFERENTIAL_AGREEMENT_OPTIONS = [
    "India-Japan Comprehensive Economic Partnership Agreement (IJCEPA)",
    "India-Korea Comprehensive Economic Partnership Agreement (IKCEPA)",
    "South Asian Free Trade Area (SAFTA)",
    "Global System of Trade Preferences (GSTP)",
    "India Sri Lanka Free Trade Agreement (ISFTA)",
    "Generalized System of Preferences (GSP) Scheme",
    "India-Chile Preferential Trade Agreement (India-Chile PTA)",
    "SAARC Preferential Trading Arrangement (SAPTA)",
    "India-Thailand Early Harvest Scheme",
    "India-Singapore Comprehensive Economic Cooperation Agreement (CECA)",
    "India-Mercosur Preferential Trade Agreement (India-Mercosur PTA)",
    "ASEAN-India Free Trade Agreement (ASEAN-India FTA)",
    "India-Malaysia Comprehensive Economic Cooperation Agreement (IMCECA)",
    "Asia-Pacific Trade Agreement (APTA)",
    "India-Mauritius Comprehensive Economic Cooperation and Partnership Agreement",
    "India-UAE Comprehensive Economic Partnership Agreement (IUCEPA)",
    "India-Australia Economic Cooperation and Trade Agreement (Ind-Aus ECTA)",
    "India EFTA TEPA (Self-Declaration)",
    "India EFTA TEPA (Agency Issued)",
  ];

  const resetForm = () => {
    setForm({
      name: "",
      mobile: "",
      entity: "",
      email: "",
      role: "",
      partner: false,
      ftaagreement: "",
    });
    setErrors({});
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
    if (!form.mobile.trim()) e.mobile = "Mobile is required.";
    if (!form.email.trim()) e.email = "Email is required.";
    if (!form.role) e.role = "Role is required.";
    if (isPreferentialCOO && !form.ftaagreement)
      e.ftaagreement = "Please select an agreement.";
    return e;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const v = validate();
    setErrors(v);
    if (Object.keys(v).length > 0) return;

    try {
      setLoading(true);

      const payload = {
        ...form,
        type,
        certificateType:
          type === "PREFERENTIAL_COO" || type === "NON_PREFERENTIAL_COO" ||
          type === "Startup_Small_Plan" ||
          type === "MID_SIZE_EXPORTER_PLAN" ||
          type === "LARGE_EXPORTER_PLAN"
            ? type
            : null,
      };

      const res = await fetch(
        `${process.env.REACT_APP_API_URL}/api/coo-enroll`,
        // "http://localhost:5000/api/coo-enroll",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload),
        }
      );

      const data = await res.json();

      console.log("Enroll response:", data);

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
                  placeholder="Company / Firm Name"
                  name="entity"
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

            {/* Selected CoO */}
            {(isPreferentialCOO || isNonPreferentialCOO) && (
              <div>
                <label className="block text-xs font-bold text-gray-700 mb-1 uppercase">
                  Selected Certificate Type
                </label>
                <input
                  type="text"
                  value={
                    isPreferentialCOO
                      ? "Preferential CoO"
                      : "Non-Preferential CoO"
                  }
                  disabled
                  className="w-full p-3 rounded-lg border bg-gray-100"
                />
              </div>
            )}

            {/* Preferential Agreement Dropdown */}
            {isPreferentialCOO && (
              <div>
                <label className="block text-xs font-bold text-gray-700 mb-1 uppercase">
                  Applicable Agreement / Scheme
                </label>
                <select
                  name="ftaagreement"
                  value={form.ftaagreement}
                  onChange={handleChange}
                  className="w-full p-3 rounded-lg border border-gray-300 bg-white"
                >
                  <option value="">-- Select Agreement --</option>
                  {PREFERENTIAL_AGREEMENT_OPTIONS.map((opt) => (
                    <option key={opt} value={opt}>
                      {opt}
                    </option>
                  ))}
                </select>
                {errors.ftaagreement && (
                  <p className="text-xs text-red-500 mt-1">{errors.ftaagreement}</p>
                )}
              </div>
            )}

            {(startup) && (
              <div>
                <label className="block text-xs font-bold text-gray-700 mb-1 uppercase">
                  Selected Certificate Type
                </label>
                <input
                  type="text"
                  value="Startup / Small Plan"
                  disabled
                  className="w-full p-3 rounded-lg border bg-gray-100"
                />
              </div>
            )}

            {(midsize) && (
              <div>
                <label className="block text-xs font-bold text-gray-700 mb-1 uppercase">
                  Selected Certificate Type
                </label>
                <input
                  type="text"
                  value="Mid-Size Exporter Plan"
                  disabled
                  className="w-full p-3 rounded-lg border bg-gray-100"
                />
              </div>
            )}

            {(large) && (
              <div>
                <label className="block text-xs font-bold text-gray-700 mb-1 uppercase">
                  Selected Certificate Type
                </label>
                <input
                  type="text"
                  value="Large-Size Exporter Plan"
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

            {/* Partner Checkbox */}
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