// components/ModalEnroll.jsx

import React, { useState } from "react";
import { X, Handshake, Building, Mail, FileSignature } from "lucide-react";

export const ModalEnroll = ({ show, onClose, onSubmit, type }) => {
  /* ─────────────────────────────────────────
     STATE — all hooks declared before early return
  ───────────────────────────────────────── */
  const [form, setForm] = useState({
    name: "",
    mobile: "",
    entity: "",
    email: "",
    role: "",
    partner: false,
  });

  const [category, setCategory] = useState("");
  const [issue, setIssue] = useState("");
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);

  /* --------------------------------
     SERVICE CONFIGURATION
  -------------------------------- */

  const SERVICE_MAP = {
    Start_Application: {
      service: "Start Application",
    },
  };

  const serviceConfig = SERVICE_MAP[type];
  const predefinedService = serviceConfig?.service;

  /* ─────────────────────────────────────────
     FORM TYPE FLAGS
  ───────────────────────────────────────── */
  const isApplyApplication = type === "Start_Application";
  const isEnroll = type === "Enroll";

  /* ─────────────────────────────────────────
     RESET
  ───────────────────────────────────────── */
  const resetForm = () => {
    setForm({
      name: "",
      mobile: "",
      entity: "",
      email: "",
      role: "",
      partner: false,
    });
    setCategory("");
    setIssue("");
    setErrors({});
  };

  // FIX 4: X button was calling onClose() directly.
  //         handleClose() resets the form first so stale
  //         data doesn't appear when the modal reopens.
  const handleClose = () => {
    resetForm();
    onClose();
  };

  if (!show) return null;

  /* ─────────────────────────────────────────
     CHANGE HANDLER
     FIX 1: Original code destructured 'type' from e.target
     but then referenced the non-existent variable 'inputType'.
     This caused a ReferenceError on every single keystroke /
     checkbox click, making the entire form non-functional.
     Fixed by consistently using 'inputType' in both places.
  ───────────────────────────────────────── */
  const handleChange = (e) => {
    const { name, value, type: inputType, checked } = e.target; // ← renamed here
    setForm((prev) => ({
      ...prev,
      [name]: inputType === "checkbox" ? checked : value, // ← and used here
    }));
  };

  /* ─────────────────────────────────────────
     VALIDATION
  ───────────────────────────────────────── */
  const validate = () => {
    const newErrors = {};
    if (!form.name.trim()) newErrors.name = "Name is required.";
    if (!form.mobile.trim()) newErrors.mobile = "Mobile number is required.";
    if (!form.email.trim()) newErrors.email = "Email is required.";
    if (!form.role) newErrors.role = "Please select your role.";
    if (isEnroll);
    return newErrors;
  };

  /* ─────────────────────────────────────────
     SUBMIT
     FIX 3: handleSubmit was declared as a regular function
     but used 'await' inside a try/catch block.
     This is a SyntaxError — async functions must be declared
     with the 'async' keyword. The form would never submit.
  ───────────────────────────────────────── */
  const handleSubmit = async (e) => {
    // ← 'async' was missing
    e.preventDefault();

    const validationErrors = validate();
    setErrors(validationErrors);
    if (Object.keys(validationErrors).length > 0) return;

    setLoading(true); // FIX 2: now works because setter name matches declaration

    // const payload = {
    //   ...form,
    //   type,
    //   category: isApplyApplication ? "Status Certification" : (category || null),
    //   issue:    issue || null,
    // };

    // console.log("Final Payload:", payload);

    try {
      const finalType = type || "Enroll";
      const payload = {
        name: form.name,
        mobile: form.mobile,
        email: form.email,
        entity: form.entity,
        role: form.role,
        partner: form.partner,
        type: finalType,
        category: category || "",
        issue: issue || "",
        service: predefinedService || finalType,
      };
      console.log("Final Paayload:", payload);

      // ✅ Send to parent callback if provided
      if (typeof onSubmit === "function") {
        onSubmit(payload);
      }
      const res = await fetch(
        `${process.env.REACT_APP_API_URL}/api/star-export-house`,
        // "http://localhost:5000/api/star-export-house",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload),
        },
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
     REUSABLE: Locked issue-type display field
  ───────────────────────────────────────── */
  const IssueTypeField = ({ value }) => (
    <div>
      <label className="block text-xs font-bold text-gray-700 mb-1 uppercase">
        Issue Type
      </label>
      <div className="relative">
        <FileSignature
          className="absolute left-3 top-3 text-gray-400"
          size={16}
        />
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

          {/* FIX 4: was onClick={onClose} — now calls handleClose to reset form */}
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
                  className="w-full pl-10 p-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-teal-500 outline-none text-sm"
                />
              </div>
            </div>

            {/* Email ID */}
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

            {/* Start_Application → locked "Status Certification" field */}
            {isApplyApplication && (
              <div>
                <label className="block text-xs font-bold text-gray-700 mb-1 uppercase">
                  Category
                </label>
                <div className="relative">
                  <FileSignature
                    className="absolute left-3 top-3 text-gray-400"
                    size={16}
                  />
                  <input
                    type="text"
                    name="service"
                    value="Status Certification"
                    readOnly
                    className="w-full pl-10 p-3 rounded-lg border border-gray-300 bg-gray-100 text-sm text-gray-600"
                  />
                </div>
              </div>
            )}

            {/* Enroll → extend with fields here when needed */}
            {isEnroll && (
              <div>{/* future category/issue fields go here */}</div>
            )}

            {/* Role Selection */}
            <div>
              <label className="block text-xs font-bold text-gray-700 mb-2 uppercase">
                I am a:
              </label>
              <div className="grid grid-cols-2 gap-3">
                {["Importer / Exporter", "CHA", "Logistics", "Forwarder"].map(
                  (role) => {
                    const selected = form.role === role;
                    return (
                      <label
                        key={role}
                        className={`flex items-center p-3 border rounded-lg cursor-pointer transition ${
                          selected
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
                        <span className="ml-2 text-sm font-medium text-gray-700">
                          {role}
                        </span>
                      </label>
                    );
                  },
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

            {/* FIX 5: Button now disables during loading and shows a spinner.
                       Previously loading state was tracked but the button
                       completely ignored it — double submits were possible. */}
            <button
              type="submit"
              disabled={loading}
              className={`w-full py-4 bg-gradient-to-r from-teal-600 to-indigo-700
                text-white font-bold rounded-xl shadow-lg hover:shadow-xl
                transition flex items-center justify-center text-lg
                ${
                  loading
                    ? "opacity-60 cursor-not-allowed"
                    : "transform hover:-translate-y-0.5"
                }`}
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
                      cx="12"
                      cy="12"
                      r="10"
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


// // src/components/CloudDeskExportHouse/ModalEnroll.jsx
// import React, { useState } from "react";
// import { X, Handshake, Building, Mail, FileSignature } from "lucide-react";

// export const ModalEnroll = ({ show, onClose, onSubmit, type }) => {
//   const [form, setForm] = useState({
//     name: "",
//     mobile: "",
//     entity: "",
//     email: "",
//     role: "",
//     partner: false,
//   });
//   const [category, setCategory] = useState("");
//   const [issue, setIssue] = useState("");
//   const [errors, setErrors] = useState({});
//   const [loading, setLoading] = useState(false);

//   const SERVICE_MAP = {
//     Start_Application: { service: "Start Application" },
//   };
//   const serviceConfig = SERVICE_MAP[type];
//   const predefinedService = serviceConfig?.service;

//   const isApplyApplication = type === "Start_Application";
//   const isEnroll = type === "Enroll";

//   const resetForm = () => {
//     setForm({ name: "", mobile: "", entity: "", email: "", role: "", partner: false });
//     setCategory("");
//     setIssue("");
//     setErrors({});
//   };

//   const handleClose = () => {
//     resetForm();
//     onClose();
//   };

//   if (!show) return null;

//   const handleChange = (e) => {
//     const { name, value, type: inputType, checked } = e.target;
//     setForm((prev) => ({
//       ...prev,
//       [name]: inputType === "checkbox" ? checked : value,
//     }));
//   };

//   const validate = () => {
//     const newErrors = {};
//     if (!form.name.trim()) newErrors.name = "Name is required.";
//     if (!form.mobile.trim()) newErrors.mobile = "Mobile number is required.";
//     if (!form.email.trim()) newErrors.email = "Email is required.";
//     if (!form.role) newErrors.role = "Please select your role.";
//     return newErrors;
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     const validationErrors = validate();
//     setErrors(validationErrors);
//     if (Object.keys(validationErrors).length > 0) return;

//     setLoading(true);
//     try {
//       const finalType = type || "Enroll";
//       const payload = {
//         name: form.name,
//         mobile: form.mobile,
//         email: form.email,
//         entity: form.entity,
//         role: form.role,
//         partner: form.partner,
//         type: finalType,
//         category: category || "",
//         issue: issue || "",
//         service: predefinedService || finalType,
//       };

//       if (typeof onSubmit === "function") onSubmit(payload);

//       const apiBase = process.env.REACT_APP_API_URL || "http://localhost:5000";
//       const res = await fetch(`${apiBase}/api/star-export-house`, {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify(payload),
//       });
//       const data = await res.json();

//       if (res.ok) {
//         alert("Registration submitted successfully");
//         resetForm();
//         onClose();
//       } else {
//         alert(data.message || "Submission failed");
//       }
//     } catch (error) {
//       console.error(error);
//       alert("Submission failed. Please try again.");
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="fixed inset-0 z-[60] flex items-center justify-center p-4 bg-gray-900/80 backdrop-blur-sm">
//       <div className="bg-white rounded-2xl shadow-2xl w-full max-w-lg relative overflow-hidden">
//         <div className="bg-indigo-900 p-6 text-white flex justify-between items-start">
//           <div>
//             <h2 className="text-2xl font-bold flex items-center">
//               <Handshake className="mr-2 text-teal-400" /> Enroll Now
//             </h2>
//             <p className="text-indigo-200 text-sm mt-1">Join the CloudDesk Network</p>
//           </div>
//           <button onClick={handleClose} className="text-white/70 hover:text-white bg-white/10 hover:bg-white/20 rounded-full p-1 transition">
//             <X size={20} />
//           </button>
//         </div>
//         <div className="p-6 md:p-8 overflow-y-auto max-h-[80vh]">
//           <form className="space-y-5" onSubmit={handleSubmit}>
//             <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//               <div>
//                 <label className="block text-xs font-bold text-gray-700 mb-1 uppercase">Name</label>
//                 <input type="text" name="name" placeholder="Your Name" value={form.name} onChange={handleChange}
//                   className={`w-full p-3 rounded-lg border text-sm outline-none ${errors.name ? "border-red-400" : "border-gray-300 focus:ring-2 focus:ring-teal-500"}`} />
//                 {errors.name && <p className="text-xs text-red-500 mt-1">{errors.name}</p>}
//               </div>
//               <div>
//                 <label className="block text-xs font-bold text-gray-700 mb-1 uppercase">Mobile No</label>
//                 <input type="tel" name="mobile" placeholder="+91 XXXXX XXXXX" value={form.mobile} onChange={handleChange}
//                   className={`w-full p-3 rounded-lg border text-sm outline-none ${errors.mobile ? "border-red-400" : "border-gray-300 focus:ring-2 focus:ring-teal-500"}`} />
//                 {errors.mobile && <p className="text-xs text-red-500 mt-1">{errors.mobile}</p>}
//               </div>
//             </div>
//             <div>
//               <label className="block text-xs font-bold text-gray-700 mb-1 uppercase">Entity Name</label>
//               <div className="relative">
//                 <Building className="absolute left-3 top-3 text-gray-400" size={16} />
//                 <input type="text" name="entity" placeholder="Company / Firm Name" value={form.entity} onChange={handleChange}
//                   className="w-full pl-10 p-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-teal-500 outline-none text-sm" />
//               </div>
//             </div>
//             <div>
//               <label className="block text-xs font-bold text-gray-700 mb-1 uppercase">Email ID</label>
//               <div className="relative">
//                 <Mail className="absolute left-3 top-3 text-gray-400" size={16} />
//                 <input type="email" name="email" placeholder="official@domain.com" value={form.email} onChange={handleChange}
//                   className={`w-full pl-10 p-3 rounded-lg border text-sm outline-none ${errors.email ? "border-red-400" : "border-gray-300 focus:ring-2 focus:ring-teal-500"}`} />
//               </div>
//               {errors.email && <p className="text-xs text-red-500 mt-1">{errors.email}</p>}
//             </div>
//             {isApplyApplication && (
//               <div>
//                 <label className="block text-xs font-bold text-gray-700 mb-1 uppercase">Category</label>
//                 <div className="relative">
//                   <FileSignature className="absolute left-3 top-3 text-gray-400" size={16} />
//                   <input type="text" value="Status Certification" readOnly
//                     className="w-full pl-10 p-3 rounded-lg border border-gray-300 bg-gray-100 text-sm text-gray-600" />
//                 </div>
//               </div>
//             )}
//             {isEnroll && <div>{/* future fields */}</div>}
//             <div>
//               <label className="block text-xs font-bold text-gray-700 mb-2 uppercase">I am a:</label>
//               <div className="grid grid-cols-2 gap-3">
//                 {["Importer / Exporter", "CHA", "Logistics", "Forwarder"].map((role) => (
//                   <label key={role} className={`flex items-center p-3 border rounded-lg cursor-pointer transition ${form.role === role ? "border-teal-500 bg-teal-50" : "border-gray-200 hover:bg-indigo-50"}`}>
//                     <input type="radio" name="role" value={role} checked={form.role === role} onChange={handleChange} className="w-4 h-4 text-teal-600" />
//                     <span className="ml-2 text-sm font-medium text-gray-700">{role}</span>
//                   </label>
//                 ))}
//               </div>
//               {errors.role && <p className="text-xs text-red-500 mt-2">{errors.role}</p>}
//             </div>
//             <div className="bg-teal-50 p-4 rounded-lg border border-teal-100">
//               <label className="flex items-start cursor-pointer">
//                 <input type="checkbox" name="partner" checked={form.partner} onChange={handleChange} className="mt-1 w-5 h-5 text-teal-600 rounded" />
//                 <span className="ml-3 text-sm text-gray-800">
//                   I am interested in being a <span className="font-bold text-teal-700">Partner with EXIMINQ CLOUDDESK</span> and agree to the terms.
//                 </span>
//               </label>
//             </div>
//             <button type="submit" disabled={loading}
//               className={`w-full py-4 bg-gradient-to-r from-teal-600 to-indigo-700 text-white font-bold rounded-xl shadow-lg hover:shadow-xl transition flex items-center justify-center text-lg ${loading ? "opacity-60 cursor-not-allowed" : "transform hover:-translate-y-0.5"}`}>
//               {loading ? (
//                 <>
//                   <svg className="animate-spin h-5 w-5 mr-2 text-white" viewBox="0 0 24 24" fill="none">
//                     <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
//                     <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z" />
//                   </svg>
//                   Submitting...
//                 </>
//               ) : "Submit Enrollment"}
//             </button>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// };