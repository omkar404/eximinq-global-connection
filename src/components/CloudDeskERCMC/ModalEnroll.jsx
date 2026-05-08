import React, { useState, useEffect } from "react";
import { X, Handshake, Building, Mail } from "lucide-react";

export const ModalEnroll = ({ show, onClose, onSubmit, type }) => {
  // ─────────────────────────────────────────────────────────────────
  // SERVICE MAP
  // ─────────────────────────────────────────────────────────────────
  const SERVICE_MAP = {
    E_RCMC_Issuance: {
      label: "E_RCMC_Issuance",
      service: "E-RCMC Issuance",
    },
    IEC_REGISTRATION: {
      label: "IEC_REGISTRATION",
      service: "IEC Registration",
    },
    IEC_ANNUAL_UPDATE: {
      label: "IEC_ANNUAL_UPDATE",
      service: "IEC Annual Update",
    },
    IEC_PROFILE_UPDATE: {
      label: "IEC_PROFILE_UPDATE",
      service: "IEC Profile Update",
    },
  };

  const serviceConfig = SERVICE_MAP[type];

  const predefinedService =
    serviceConfig?.service || "E-RCMC Registration";

  // ─────────────────────────────────────────────────────────────────
  // FORM STATE
  // ─────────────────────────────────────────────────────────────────
  const [form, setForm] = useState({
    name: "",
    mobile: "",
    entity: "",
    email: "",
    role: "",
    partner: false,
    service: predefinedService,
  });

  const [category, setCategory] = useState("");
  const [issue, setIssue] = useState("");
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);

  // ─────────────────────────────────────────────────────────────────
  // UPDATE SERVICE
  // ─────────────────────────────────────────────────────────────────
  useEffect(() => {
    setForm((prev) => ({
      ...prev,
      service: predefinedService,
    }));
  }, [predefinedService]);

  // ─────────────────────────────────────────────────────────────────
  // CATEGORY OPTIONS
  // ─────────────────────────────────────────────────────────────────
  const ERCMC_OPTIONS = [
    "FIEO (Multi-Product / Trader)",
    "SEPC (Services EPC)",
    "PEPC (Project Exports)",
    "EIC (Export Inspection Council)",
    "EEPC India (Engineering)",
    "ESC (Electronics & Software)",
    "TEPC (Telecom Equipment)",
    "APEDA",
    "Spices Board",
    "Tea Board",
    "Coffee Board",
    "Rubber Board",
    "Tobacco Board",
    "Coconut Board",
    "AEPC (Garments)",
    "TEXPROCIL (Cotton)",
    "MATEXIL",
    "HEPC",
    "CEPC",
    "WWEPC",
    "ISEPC",
    "Jute Board",
    "GJEPC",
    "CLE",
    "EPCH",
    "SGEPC",
    "MPEDA",
    "IOPEPC",
  ];

  // ─────────────────────────────────────────────────────────────────
  // HANDLE CHANGE
  // ─────────────────────────────────────────────────────────────────
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    setForm((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));

    setErrors((prev) => ({
      ...prev,
      [name]: "",
    }));
  };

  // ─────────────────────────────────────────────────────────────────
  // RESET FORM
  // ─────────────────────────────────────────────────────────────────
  const resetForm = () => {
    setForm({
      name: "",
      mobile: "",
      entity: "",
      email: "",
      role: "",
      partner: false,
      service: predefinedService,
    });

    setCategory("");
    setIssue("");
    setErrors({});
  };

  const handleClose = () => {
    resetForm();
    onClose();
  };

  // ─────────────────────────────────────────────────────────────────
  // VALIDATION
  // ─────────────────────────────────────────────────────────────────
  const validate = () => {
    const newErrors = {};

    if (!form.name.trim()) {
      newErrors.name = "Name is required";
    }

    if (!form.mobile.trim()) {
      newErrors.mobile = "Mobile is required";
    } else if (!/^[6-9]\d{9}$/.test(form.mobile.trim())) {
      newErrors.mobile =
        "Enter valid 10 digit mobile";
    }

    if (!form.email.trim()) {
      newErrors.email = "Email is required";
    } else if (
      !/\S+@\S+\.\S+/.test(form.email.trim())
    ) {
      newErrors.email = "Invalid email";
    }

    if (!form.role) {
      newErrors.role = "Select role";
    }

    // ✅ CATEGORY VALIDATION ONLY FOR E-RCMC
    if (
      type === "E_RCMC_Issuance" &&
      !category
    ) {
      newErrors.category = "Select category";
    }

    return newErrors;
  };

  // ─────────────────────────────────────────────────────────────────
  // SUBMIT
  // ─────────────────────────────────────────────────────────────────
  const handleSubmit = async (e) => {
    e.preventDefault();

    const validationErrors = validate();

    setErrors(validationErrors);

    if (Object.keys(validationErrors).length > 0) {
      return;
    }

    setLoading(true);

    try {
      const finalType = type || "ENROLL_NOW";

      const payload = {
        name: form.name.trim(),
        mobile: form.mobile.trim(),
        entity: form.entity.trim(),
        email: form.email.trim().toLowerCase(),
        role: form.role,
        partner: form.partner,
        service: predefinedService,
        type: finalType,

        // ✅ CATEGORY ONLY FOR E_RCMC_Issuance
        category:
          type === "E_RCMC_Issuance"
            ? category || ""
            : "",

        issue: issue || "",
      };

      console.log("FINAL PAYLOAD:", payload);

      const response = await fetch(
        `${process.env.REACT_APP_API_URL}/api/e-rcmc-registration`,
        // "http://localhost:5000/api/e-rcmc-registration",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify(payload),
        }
      );

      const data = await response.json();

      if (!response.ok) {
        throw new Error(
          data.error ||
            data.message ||
            `HTTP error ${response.status}`
        );
      }

      if (typeof onSubmit === "function") {
        onSubmit(payload);
      }

      alert("✅ Request submitted successfully");

      resetForm();

      onClose();
    } catch (err) {
      console.error("❌ Enroll error:", err);

      alert(`❌ Submission failed: ${err.message}`);
    } finally {
      setLoading(false);
    }
  };

  if (!show) return null;

  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center p-4 bg-gray-900/80 backdrop-blur-sm">
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-lg relative overflow-hidden">

        {/* HEADER */}
        <div className="bg-indigo-900 p-6 text-white flex justify-between items-start">
          <div>
            <h2 className="text-2xl font-bold flex items-center">
              <Handshake className="mr-2 text-teal-400" />
              Enroll Now
            </h2>

            <p className="text-indigo-200 text-sm mt-1">
              Join the CloudDesk Network
            </p>
          </div>

          <button
            onClick={handleClose}
            className="text-white/70 hover:text-white"
          >
            <X size={20} />
          </button>
        </div>

        {/* BODY */}
        <div className="p-6 md:p-8 overflow-y-auto max-h-[80vh]">

          <form
            className="space-y-5"
            onSubmit={handleSubmit}
          >

            {/* NAME + MOBILE */}
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
                  className="w-full p-3 rounded-lg border border-gray-300 text-sm"
                />

                {errors.name && (
                  <p className="text-xs text-red-500 mt-1">
                    {errors.name}
                  </p>
                )}
              </div>

              <div>
                <label className="block text-xs font-bold text-gray-700 mb-1 uppercase">
                  Mobile
                </label>

                <input
                  type="tel"
                  name="mobile"
                  placeholder="9876543210"
                  value={form.mobile}
                  onChange={handleChange}
                  maxLength={10}
                  className="w-full p-3 rounded-lg border border-gray-300 text-sm"
                />

                {errors.mobile && (
                  <p className="text-xs text-red-500 mt-1">
                    {errors.mobile}
                  </p>
                )}
              </div>
            </div>

            {/* ENTITY */}
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
                  className="w-full pl-10 p-3 rounded-lg border border-gray-300 text-sm"
                />
              </div>
            </div>

            {/* EMAIL */}
            <div>
              <label className="block text-xs font-bold text-gray-700 mb-1 uppercase">
                Email
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
                  className="w-full pl-10 p-3 rounded-lg border border-gray-300 text-sm"
                />
              </div>

              {errors.email && (
                <p className="text-xs text-red-500 mt-1">
                  {errors.email}
                </p>
              )}
            </div>

            {/* ✅ CATEGORY ONLY FOR E-RCMC */}
            {type === "E_RCMC_Issuance" && (
              <div>
                <label className="block text-xs font-bold text-gray-700 mb-1 uppercase">
                  Category
                </label>

                <select
                  value={category || ""}
                  onChange={(e) => {
                    console.log(
                      "SELECTED CATEGORY:",
                      e.target.value
                    );

                    setCategory(e.target.value);
                  }}
                  className={`w-full p-3 rounded-lg border outline-none text-sm ${
                    errors.category
                      ? "border-red-400"
                      : "border-gray-300 focus:ring-2 focus:ring-teal-500"
                  }`}
                >
                  <option value="">
                    Select Category
                  </option>

                  {ERCMC_OPTIONS.map((opt, index) => (
                    <option
                      key={index}
                      value={opt}
                    >
                      {opt}
                    </option>
                  ))}
                </select>

                {errors.category && (
                  <p className="text-xs text-red-500 mt-1">
                    {errors.category}
                  </p>
                )}
              </div>
            )}

            {/* ROLE */}
            <div>
              <label className="block text-xs font-bold text-gray-700 mb-2 uppercase">
                I am a:
              </label>

              <div className="grid grid-cols-2 gap-3">
                {[
                  "Importer / Exporter",
                  "CHA",
                  "Logistics",
                  "Forwarder",
                ].map((role) => (
                  <label
                    key={role}
                    className={`flex items-center p-3 border rounded-lg cursor-pointer ${
                      form.role === role
                        ? "border-teal-500 bg-teal-50"
                        : "border-gray-200"
                    }`}
                  >
                    <input
                      type="radio"
                      name="role"
                      value={role}
                      checked={form.role === role}
                      onChange={handleChange}
                    />

                    <span className="ml-2 text-sm">
                      {role}
                    </span>
                  </label>
                ))}
              </div>

              {errors.role && (
                <p className="text-xs text-red-500 mt-2">
                  {errors.role}
                </p>
              )}
            </div>

            {/* PARTNER */}
            <div className="bg-teal-50 p-4 rounded-lg border border-teal-100">
              <label className="flex items-start cursor-pointer">
                <input
                  type="checkbox"
                  name="partner"
                  checked={form.partner}
                  onChange={handleChange}
                  className="mt-1 w-5 h-5"
                />

                <span className="ml-3 text-sm text-gray-800">
                  I am interested in being a{" "}
                  <span className="font-bold text-teal-700">
                    Partner with EXIMINQ CLOUDDESK
                  </span>
                </span>
              </label>
            </div>

            {/* SUBMIT */}
            <button
              type="submit"
              disabled={loading}
              className="w-full py-4 bg-gradient-to-r from-teal-600 to-indigo-700 text-white font-bold rounded-xl"
            >
              {loading
                ? "Submitting..."
                : "Submit Enrollment"}
            </button>

          </form>
        </div>
      </div>
    </div>
  );
};