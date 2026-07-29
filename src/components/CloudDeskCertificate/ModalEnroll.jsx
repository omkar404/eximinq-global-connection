import React, { useEffect, useState } from "react";
import { X, Handshake, Building, Mail } from "lucide-react";

export const ModalEnroll = ({ show, onClose, type }) => {
  const PLAN_DETAILS = {
    PREFERENTIAL_COO: {
      planCategory: "Certificate of Origin",
      planName: "Preferential CoO",
      monthlyCooLimit: "Not applicable",
      additionalCooRate: "Not applicable",
      planPrice: "INR 1,500 + GST (Per Certificate)",
    },
    NON_PREFERENTIAL_COO: {
      planCategory: "Certificate of Origin",
      planName: "Non-Preferential CoO",
      monthlyCooLimit: "Not applicable",
      additionalCooRate: "Not applicable",
      planPrice: "INR 750 + GST (Per Certificate)",
    },
    Startup_Small_Plan: {
      planCategory: "Preferential COO Subscription",
      planName: "Startup / Small Plan",
      monthlyCooLimit: "Up to 25 Pref. COO",
      additionalCooRate: "INR 1,250/- per COO",
      planPrice: "INR 30,000/- / mo",
    },
    MID_SIZE_EXPORTER_PLAN: {
      planCategory: "Preferential COO Subscription",
      planName: "Mid-Size Exporter Plan",
      monthlyCooLimit: "Up to 50 Pref. COO",
      additionalCooRate: "INR 1,150/- per COO",
      planPrice: "INR 55,000/- / mo",
    },
    LARGE_EXPORTER_PLAN: {
      planCategory: "Preferential COO Subscription",
      planName: "Large-Size Exporter Plan",
      monthlyCooLimit: "Up to 75 Pref. COO",
      additionalCooRate: "INR 1,050/- per COO",
      planPrice: "INR 75,000/- / mo",
    },
  };

  const PLAN_ALIASES = {
    "Preferential CoO": "PREFERENTIAL_COO",
    "Non-Preferential CoO": "NON_PREFERENTIAL_COO",
    "Startup / Small Plan": "Startup_Small_Plan",
    "Mid-Size Exporter Plan": "MID_SIZE_EXPORTER_PLAN",
    "Large-Size Exporter Plan": "LARGE_EXPORTER_PLAN",
  };

  const normalizePlanType = (value) => PLAN_ALIASES[value] || value || "";
  const initialPlanType = normalizePlanType(type);

  const [form, setForm] = useState({
    name: "",
    mobile: "",
    entity: "",
    email: "",
    selectedPlanType: initialPlanType,
    role: "",
    partner: false,
    ftaagreement: "",
  });

  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!show) return;

    setForm((prev) => ({
      ...prev,
      selectedPlanType: initialPlanType,
    }));
  }, [show, initialPlanType]);

  const selectedPlanType = form.selectedPlanType || initialPlanType;
  const selectedPlanDetails = PLAN_DETAILS[selectedPlanType] || null;
  const isPreferentialCOO = selectedPlanType === "PREFERENTIAL_COO";
  const isNonPreferentialCOO = selectedPlanType === "NON_PREFERENTIAL_COO";
  const isExporterPlan = [
    "Startup_Small_Plan",
    "MID_SIZE_EXPORTER_PLAN",
    "LARGE_EXPORTER_PLAN",
  ].includes(selectedPlanType);
  const selectedCertificateType = selectedPlanDetails?.planName || "";

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
      selectedPlanType: initialPlanType,
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
        type: selectedPlanType || type,
        certificateType:
          selectedPlanType === "PREFERENTIAL_COO" ||
          selectedPlanType === "NON_PREFERENTIAL_COO" ||
          selectedPlanType === "Startup_Small_Plan" ||
          selectedPlanType === "MID_SIZE_EXPORTER_PLAN" ||
          selectedPlanType === "LARGE_EXPORTER_PLAN"
            ? selectedPlanType
            : null,
        planCategory: selectedPlanDetails?.planCategory || null,
        planName: selectedPlanDetails?.planName || null,
        monthlyCooLimit: selectedPlanDetails?.monthlyCooLimit || null,
        additionalCooRate: selectedPlanDetails?.additionalCooRate || null,
        planPrice: selectedPlanDetails?.planPrice || null,
      };

      const res = await fetch(
        `${process.env.REACT_APP_API_URL}/api/certificate-of-origin`,
        // "http://localhost:5000/api/certificate-of-origin",
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

            {selectedPlanDetails && (
              <div className="rounded-xl border border-indigo-100 bg-indigo-50/70 p-4">
                <label className="block text-xs font-bold text-gray-700 mb-2 uppercase">
                  Selected Plan
                </label>
                <select
                  name="selectedPlanType"
                  value={selectedPlanType}
                  onChange={handleChange}
                  className="w-full p-3 rounded-lg border border-indigo-200 bg-white text-gray-900"
                >
                  {Object.entries(PLAN_DETAILS).map(([key, details]) => (
                    <option key={key} value={key}>
                      {details.planName}
                    </option>
                  ))}
                </select>

                <dl className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm">
                  {[
                    ["Selected Plan Category", selectedPlanDetails.planCategory],
                    ["Plan Name", selectedPlanDetails.planName],
                    ["Monthly COO Limit", selectedPlanDetails.monthlyCooLimit],
                    ["Rate for Additional COO", selectedPlanDetails.additionalCooRate],
                    ["Plan Price", selectedPlanDetails.planPrice],
                  ].map(([label, value]) => (
                    <div key={label} className="rounded-lg bg-white p-3 border border-indigo-100">
                      <dt className="text-[11px] font-bold uppercase text-gray-500">
                        {label}
                      </dt>
                      <dd className="mt-1 font-semibold text-gray-900">
                        {value}
                      </dd>
                    </div>
                  ))}
                </dl>
              </div>
            )}

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

            {isExporterPlan && (
              <div>
                <label className="block text-xs font-bold text-gray-700 mb-1 uppercase">
                  Selected Certificate Type
                </label>
                <input
                  type="text"
                  value={selectedCertificateType}
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
