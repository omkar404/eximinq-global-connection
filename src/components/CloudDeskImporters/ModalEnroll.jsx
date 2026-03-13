// components/ModalEnroll.jsx

import React, { useState } from "react";
import { X, Handshake, Building, Mail, FileSignature } from "lucide-react";

export const ModalEnroll = ({ show, onClose, onSubmit, type }) => {
  const [form, setForm] = useState({
    name: "",
    mobile: "",
    entity: "",
    email: "",
    role: "",
    partner: false,
  });

  const [category, setCategory] = useState("");
  const [issue, setIssue]       = useState("");
  const [errors, setErrors]     = useState({});
  const [loading, setLoading]   = useState(false);

  /* ─────────────────────────────────────────
     FORM TYPE FLAGS
  ───────────────────────────────────────── */
  const isEnroll            = type === "Enroll";
  const isProfileUpdate     = type === "IEC_PROFILE_UPDATE";
  const isRegistration      = type === "IEC_REGISTRATION" || type === "IEC_ANNUAL_UPDATE";
  const isSteelSIMS         = type === "Steel_Import_NOC_SIMS";
  const isCopperNFMIMS      = type === "Copper_(NFMIMS)";
  const isRegisterAluminium = type === "Register_Aluminium";
  const isGetCIMSNo         = type === "Get_CIMS_No";
  const isGetPIMSNo         = type === "Get_PIMS_No";
  const isRegisterChips     = type === "Register_Chips";
  const isIMSRegistration   = type === "IMS_Registration";
  /* ─────────────────────────────────────────
     OPTIONS
  ───────────────────────────────────────── */
  const IEC_OPTIONS = [
    "NEW IEC REGISTRATION",
    "IEC PROFILE UPDATATION",
    "IEC ANNUAL UPDATE",
    "IEC SUSPENSION",
  ];

  const PROFILE_UPDATE_OPTIONS = [
    "Steel Import NOC (SIMS)",
    "Copper (NFMIMS)",
    "Aluminium (NFMIMS)",
    "Coal (CIMS)",
    "Paper (PIMS)",
    "Chip (CHIMS)",
  ];

  /* ─────────────────────────────────────────
     RESET
  ───────────────────────────────────────── */
  const resetForm = () => {
    setForm({ name: "", mobile: "", entity: "", email: "", role: "", partner: false });
    setCategory("");
    setIssue("");
    setErrors({});
  };

  const handleClose = () => {
    resetForm();
    onClose();
  };

  if (!show) return null;

  /* ─────────────────────────────────────────
     CHANGE HANDLER
     FIX: renamed destructured 'type' → 'inputType'
     to avoid shadowing the 'type' prop.
     Previously the checkbox was never toggling
     because `type === "checkbox"` was comparing
     against e.g. "Enroll" instead of "checkbox".
  ───────────────────────────────────────── */
  const handleChange = (e) => {
    const { name, value, type: inputType, checked } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: inputType === "checkbox" ? checked : value,
    }));
  };

  /* ─────────────────────────────────────────
     VALIDATION
  ───────────────────────────────────────── */
  const validate = () => {
    const newErrors = {};
    if (!form.name.trim())   newErrors.name   = "Name is required.";
    if (!form.mobile.trim()) newErrors.mobile = "Mobile number is required.";
    if (!form.email.trim())  newErrors.email  = "Email is required.";
    if (!form.role)          newErrors.role   = "Please select your role.";
    return newErrors;
  };

  /* ─────────────────────────────────────────
     SUBMIT
  ───────────────────────────────────────── */
  const handleSubmit = async (e) => {
    e.preventDefault();


    // Validate before sending
    const validationErrors = validate();
    setErrors(validationErrors);
    if (Object.keys(validationErrors).length > 0) return;

    setLoading(true);

    // Send data out of callback provided
    if (typeof onSubmit === "function"){
      onSubmit({
      ...form,
      type,
      category: isEnroll       ? category : null,
      issue:    isProfileUpdate ? issue    : null,
    });
    }

    try {

      const finalType = type || "ENROLL_NOW";
      const payload = {
        ...form,
        type: finalType,
        category: isEnroll ? category : undefined,
        issue: isProfileUpdate ? issue : undefined,
      };

      if (category) {
        payload.category = category;
      }

      if (issue) {
        payload.issue = issue;
      }
    console.log("Final Payload:", payload);
      const res = await fetch(
      `${process.env.REACT_APP_API_URL}/api/import-management-registration`,  
        // "http://localhost:5000/api/import-management-registration",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload),
        }
      );

      const data = await res.json();
      console.log("API Response:", data);

      if (res.ok) {
        alert("Registration submitted successfully");
        if (typeof onSubmit === "function") onSubmit(payload);
        resetForm();
        onClose();
      } else {
        alert(data.message || "Submission failed");
      }
    } catch (error) {
      console.error("Fetch error:", error.name, error.message);
      alert("Submission failed. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  /* ─────────────────────────────────────────
     REUSABLE: Disabled issue-type field
     FIX: added 'relative' wrapper so the
     absolute-positioned icon stays inside.
  ───────────────────────────────────────── */
  const IssueTypeField = ({ value }) => (
    <div>
      <label className="block text-xs font-bold text-gray-700 mb-1 uppercase">
        Issue Type
      </label>
      <div className="relative">
        <FileSignature className="absolute left-3 top-3 text-gray-400" size={16} />
        <input
          type="text"
          value={value}
          disabled
          className="w-full pl-10 p-3 rounded-lg border bg-gray-100 text-sm text-gray-600"
        />
      </div>
    </div>
  );

  /* ─────────────────────────────────────────
     RENDER
  ───────────────────────────────────────── */
  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center p-4 bg-gray-900/80 backdrop-blur-sm">
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-lg relative overflow-hidden">

        {/* ── Header ── */}
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
            className="text-white/70 hover:text-white bg-white/10 hover:bg-white/20 rounded-full p-1 transition"
            aria-label="Close modal"
          >
            <X size={20} />
          </button>
        </div>

        {/* ── Body ── */}
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
                  className={`w-full p-3 rounded-lg border text-sm outline-none ${
                    errors.name
                      ? "border-red-400"
                      : "border-gray-300 focus:ring-2 focus:ring-teal-500"
                  }`}
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
                  className={`w-full p-3 rounded-lg border text-sm outline-none ${
                    errors.mobile
                      ? "border-red-400"
                      : "border-gray-300 focus:ring-2 focus:ring-teal-500"
                  }`}
                />
                {errors.mobile && (
                  <p className="text-xs text-red-500 mt-1">{errors.mobile}</p>
                )}
              </div>
            </div>

            {/* Entity Name */}
            <div>
              <label className="block text-xs font-bold text-gray-700 mb-1 uppercase">
                Entity Name
              </label>
              <div className="relative">
                <Building className="absolute left-3 top-3 text-gray-400" size={16} />
                <input
                  type="text"
                  name="entity"
                  placeholder="Company / Firm Name"
                  value={form.entity}
                  onChange={handleChange}
                  className="w-full pl-10 p-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-teal-500 outline-none text-sm"
                />
              </div>
            </div>

            {/* Email */}
            <div>
              <label className="block text-xs font-bold text-gray-700 mb-1 uppercase">
                Email ID
              </label>
              <div className="relative">
                <Mail className="absolute left-3 top-3 text-gray-400" size={16} />
                <input
                  type="email"
                  name="email"
                  placeholder="official@domain.com"
                  value={form.email}
                  onChange={handleChange}
                  className={`w-full pl-10 p-3 rounded-lg border text-sm outline-none ${
                    errors.email
                      ? "border-red-400"
                      : "border-gray-300 focus:ring-2 focus:ring-teal-500"
                  }`}
                />
              </div>
              {errors.email && (
                <p className="text-xs text-red-500 mt-1">{errors.email}</p>
              )}
            </div>

            {/* IEC Profile Update — issue dropdown */}
            {isProfileUpdate && (
              <div>
                <label className="block text-xs font-bold text-gray-700 mb-1 uppercase">
                  Update Type
                </label>
                <select
                  value={issue}
                  onChange={(e) => setIssue(e.target.value)}
                  className="w-full p-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-teal-500 outline-none text-sm"
                >
                  <option value="" disabled>Select Update Type</option>
                  {PROFILE_UPDATE_OPTIONS.map((opt) => (
                    <option key={opt} value={opt}>{opt}</option>
                  ))}
                </select>
              </div>
            )}

            {/* Enroll — category dropdown */}
            {isEnroll && (
              <div>
                {/* <label className="block text-xs font-bold text-gray-700 mb-1 uppercase">
                  Category
                </label>
                <select
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                  className="w-full p-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-teal-500 outline-none text-sm"
                >
                  <option value="" disabled>Select Category</option>
                  {IEC_OPTIONS.map((opt) => (
                    <option key={opt} value={opt}>{opt}</option>
                  ))}
                </select> */}
              </div>
            )}

            {/* Conditional fixed Issue Type fields */}
            {isSteelSIMS         && <IssueTypeField value="Steel Import NOC (SIMS)" />}
            {isCopperNFMIMS      && <IssueTypeField value="Copper (NFMIMS)" />}
            {isRegisterAluminium && <IssueTypeField value="Aluminium (NFMIMS)" />}
            {isGetCIMSNo         && <IssueTypeField value="Get CIMS No" />}
            {isGetPIMSNo         && <IssueTypeField value="Get PIMS No" />}
            {isRegisterChips     && <IssueTypeField value="Register Chips" />}
            {isIMSRegistration   && <IssueTypeField value="IMS Registration"/>}
            {/* Role Selection */}
            <div>
              <label className="block text-xs font-bold text-gray-700 mb-2 uppercase">
                I am a:
              </label>
              <div className="grid grid-cols-2 gap-3">
                {["Importer / Exporter", "CHA", "Logistics", "Forwarder"].map((role) => (
                  <label
                    key={role}
                    className={`flex items-center p-3 border rounded-lg cursor-pointer transition ${
                      form.role === role
                        ? "border-teal-500 bg-teal-50"
                        : "border-gray-200 hover:bg-indigo-50 hover:border-indigo-200"
                    }`}
                  >
                    <input
                      type="radio"
                      name="role"
                      value={role}
                      checked={form.role === role}
                      onChange={handleChange}
                      className="w-4 h-4 text-teal-600 focus:ring-teal-500"
                    />
                    <span className="ml-2 text-sm font-medium text-gray-700">{role}</span>
                  </label>
                ))}
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

            {/* Submit Button — disabled + spinner while loading */}
            <button
              type="submit"
              disabled={loading}
              className={`w-full py-4 bg-gradient-to-r from-teal-600 to-indigo-700
                text-white font-bold rounded-xl shadow-lg hover:shadow-xl
                transition flex items-center justify-center text-lg
                ${loading ? "opacity-60 cursor-not-allowed" : "hover:-translate-y-0.5 transform"}`}
            >
              {loading ? (
                <>
                  <svg
                    className="animate-spin h-5 w-5 mr-2 text-white"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <circle
                      className="opacity-25"
                      cx="12" cy="12" r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    />
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8v8z"
                    />
                  </svg>
                  Submitting...
                </>
              ) : (
                "Submit Enrollment"
              )}
            </button>

          </form>
        </div>
      </div>
    </div>
  );
};