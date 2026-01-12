import React, { useState } from "react";
import { X, Building, Mail, Phone, User, Handshake } from "lucide-react";

const PREFERENTIAL_OPTIONS = [
  "SAPTA / SAFTA",
  "ASEAN-India FTA (AIFTA)",
  "India-UAE CEPA",
  "GSP (Generalized System of Preferences)",
  "Free Trade Agreements (FTAs) - Others",
];

const NON_PREFERENTIAL_OPTIONS = [
  "Chamber of Commerce Attestation",
  "Embassy Legalization",
  "European Union Exports",
  "Middle East Export Documentation",
];

const initialFormState = {
  name: "",
  mobile: "",
  entity: "",
  email: "",
  role: "",
  partner: false,
  flow: "",
  cooType: "",
}

const ModalEnrollCOO = ({ show, onClose, type }) => {
const [form, setForm] = useState(initialFormState);

  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({});

  if (!show) return null;

  const handleChange = (e) => {
    const { name, value, type: t, checked } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: t === "checkbox" ? checked : value,
    }));
  };

  const validate = () => {
    const e = {};
    if (!form.name) e.name = "Name required";
    if (!form.mobile) e.mobile = "Mobile required";
    if (!form.email) e.email = "Email required";
    if (!form.role) e.role = "Role required";

    if (type === "HERO" && !form.flow) e.flow = "Please select a flow";

    if (
      (type === "PREFERENTIAL" || type === "NON_PREFERENTIAL") &&
      !form.cooType
    )
      e.cooType = "Please select COO type";

    return e;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const v = validate();
    setErrors(v);
    if (Object.keys(v).length) return;

    try {
      setLoading(true);

      const payload = {
        name: form.name,
        mobile: form.mobile,
        entity: form.entity,
        email: form.email,
        role: form.role,
        partner: form.partner,
        type,
        flow: form.flow || undefined,
        cooType: form.cooType || undefined,
      };

      const res = await fetch(`${process.env.REACT_APP_API_URL}/api/main-coo-enroll`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const data = await res.json();
      if (!res.ok || !data.success)
        throw new Error(data.error || "Submission failed");

      alert("Enrollment submitted successfully");
      setForm(initialFormState);
      onClose();
    } catch (err) {
      alert("Unable to submit. Try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleClose = () => {
  setForm(initialFormState);
  onClose();
};


  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center p-4 bg-gray-900/80 backdrop-blur-sm transition-opacity">
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-lg relative overflow-hidden animate-in fade-in zoom-in duration-200">
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
            className="text-white/70 hover:text-white bg-white/10 hover:bg-white/20 rounded-full p-1 transition"
            aria-label="Close modal"
          >
            <X size={20} />
          </button>
        </div>

        {/* Body */}
        <div className="p-6 md:p-8 overflow-y-auto max-h-[80vh]">
<form onSubmit={handleSubmit} className="space-y-5">
  {/* Name + Mobile */}
  <div className="grid grid-cols-2 gap-4">
    <div>
      <label className="block text-xs font-bold text-gray-700 mb-1 uppercase">
        Name
      </label>
      <input
        type="text"
        name="name"
        value={form.name}
        onChange={handleChange}
        placeholder="Your Name"
        className="w-full p-3 rounded-lg border border-gray-300"
      />
    </div>

    <div>
      <label className="block text-xs font-bold text-gray-700 mb-1 uppercase">
        Mobile No
      </label>
      <input
        type="tel"
        name="mobile"
        value={form.mobile}
        onChange={handleChange}
        placeholder="+91 XXXXX XXXXX"
        className="w-full p-3 rounded-lg border border-gray-300"
      />
    </div>
  </div>

  {/* Entity */}
  <div>
    <label className="block text-xs font-bold text-gray-700 mb-1 uppercase">
      Entity Name
    </label>
    <input
      type="text"
      name="entity"
      value={form.entity}
      onChange={handleChange}
      placeholder="Company / Firm Name"
      className="w-full p-3 rounded-lg border border-gray-300"
    />
  </div>

  {/* Email */}
  <div>
    <label className="block text-xs font-bold text-gray-700 mb-1 uppercase">
      Email ID
    </label>
    <input
      type="email"
      name="email"
      value={form.email}
      onChange={handleChange}
      placeholder="official@domain.com"
      className="w-full p-3 rounded-lg border border-gray-300"
    />
  </div>

  {/* HERO FLOW */}
  {type === "HERO" && (
    <select
      name="flow"
      value={form.flow}
      onChange={handleChange}
      className="w-full p-3 border rounded-lg"
    >
      <option value="">Select Certificate Type</option>
      <option value="preferential">
        Apply Preferential Certificate of Origin
      </option>
      <option value="non_preferential">
        Apply Non-Preferential Certificate of Origin
      </option>
    </select>
  )}

  {/* Preferential */}
  {type === "PREFERENTIAL" && (
    <select
      name="cooType"
      value={form.cooType}
      onChange={handleChange}
      className="w-full p-3 border rounded-lg"
    >
      <option value="">Select Preferential COO Type</option>
      {PREFERENTIAL_OPTIONS.map((opt) => (
        <option key={opt} value={opt}>
          {opt}
        </option>
      ))}
    </select>
  )}

  {/* Non-Preferential */}
  {type === "NON_PREFERENTIAL" && (
    <select
      name="cooType"
      value={form.cooType}
      onChange={handleChange}
      className="w-full p-3 border rounded-lg"
    >
      <option value="">Select Non-Preferential COO Type</option>
      {NON_PREFERENTIAL_OPTIONS.map((opt) => (
        <option key={opt} value={opt}>
          {opt}
        </option>
      ))}
    </select>
  )}

  {/* Role */}
  <div>
    <label className="block text-xs font-bold text-gray-700 mb-2 uppercase">
      I am a:
    </label>

    <div className="grid grid-cols-2 gap-3">
      {["Importer / Exporter", "CHA", "Logistics", "Forwarder"].map((role) => (
        <label
          key={role}
          className="flex items-center p-3 border rounded-lg cursor-pointer"
        >
          <input
            type="radio"
            name="role"
            value={role}
            checked={form.role === role}
            onChange={handleChange}
            className="w-4 h-4"
          />
          <span className="ml-2 text-sm">{role}</span>
        </label>
      ))}
    </div>
  </div>

  {/* Partner */}
  <div className="bg-teal-50 p-4 rounded-lg border">
    <label className="flex items-start cursor-pointer">
      <input
        type="checkbox"
        name="partner"
        checked={form.partner}
        onChange={handleChange}
        className="mt-1 w-5 h-5"
      />
      <span className="ml-3 text-sm">
        I am interested in being a{" "}
        <strong className="text-teal-700">
          Partner with EXIMINQ CLOUDDESK
        </strong>
      </span>
    </label>
  </div>

  {/* Submit */}
  <button
    type="submit"
    disabled={loading}
    className="w-full py-4 bg-gradient-to-r from-teal-600 to-indigo-700 
               text-white font-bold rounded-xl"
  >
    {loading ? "Submitting..." : "Submit Enrollment"}
  </button>
</form>

        </div>
      </div>
    </div>
  );
};

export default ModalEnrollCOO;
