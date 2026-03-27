// import React, { useState, useEffect } from "react";
// import { X, Handshake, Building, Mail , FileSignature } from "lucide-react";

// export const ModalEnroll = ({ 
//   show, 
//   onClose,
//   onSubmit,
//   predefindService,
//   type,
//   category,
//   issue,
//  }) => {
//   const [form, setForm] = useState({
//     name: "",
//     mobile: "",
//     entity: "",
//     email: "",
//     role: "",
//     partner: false,
//     service: predefinedService || "electronics-industry",
//   });

//   const isEnroll = !!predefindService;
//   const isconsultexpert = type === "Consult_an_Expert";
//   const isProfileUpdate = type === "profile_update";
//   const [errors, setErrors] = useState({});
//   const [loading, setLoading] = useState(false);

//     useEffect(() => {
//       if (predefinedService) {
//         setForm((prev) => ({ ...prev, service: predefinedService }));
//       }
//     }, [predefinedService]);

//   const resetForm = () => {
//     setForm({
//       name: "",
//       mobile: "",
//       entity: "",
//       email: "",
//       role: "",
//       partner: false,
//       service: predefinedService || "electronics-industry",
//     });
//     setErrors({});
//     setLoading(false);
//   };

//   const handleClose = () => {
//     resetForm();
//     onClose();
//   };

//   if (!show) return null;

//   const handleChange = (e) => {
//     const { name, value, type, checked } = e.target;
//     setForm((prev) => ({
//       ...prev,
//       [name]: type === "checkbox" ? checked : value,
//     }));
//   };

//   const validate = () => {
//     const e = {};
//     if (!form.name.trim()) e.name = "Name is required.";
//     if (!form.mobile.trim()) e.mobile = "Mobile number is required.";
//     if (!form.email.trim()) e.email = "Email is required.";
//     if (!form.role) e.role = "Please select your role.";
//     if (!form.partner) e.partner = "Please agree to the partnership terms.";
//     return e;
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     const v = validate();
//     setErrors(v);
//     if (Object.keys(v).length > 0) return;

//     setLoading(true);

//     try {

//       const payload = {
//         name: form.name,
//         mobile: form.mobile,
//         entity: form.entity,
//         email: form.email,
//         role: form.role,
//         partner: form.partner,
//         service: predefinedService || form.service,
//         type: type,
//       };

//       console.log("📤 Final payload:", payload);

//       const res = await fetch(
//         // `${process.env.REACT_APP_API_URL}/api/electronics-it-industry-import-export`,
//         "http://localhost:5000/api/electronics-it-industry-import-export",
//         {
//           method: "POST",
//           headers: { "Content-Type": "application/json" },
//           body: JSON.stringify(payload),
//         }
//       );

//       const data = await res.json();

//       if (!res.ok || !data.success) {
//         throw new Error(data.error || data.message || "API failed");
//       }

//       if (typeof onSubmit === "function") {
//         onSubmit({
//           ...form,
//           type,
//           category: isEnroll ? category : null,
//           issue: isProfileUpdate ? issue : null,
//         });
//       }

//       alert("Request submitted successfully");
//       resetForm();
//       onClose();
//     } catch (err) {
//       console.error("Enroll error:", err);
//       alert("Submission failed. Please try again.");
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="fixed inset-0 z-[60] flex items-center justify-center p-4 bg-gray-900/80 backdrop-blur-sm">
//       <div className="bg-white rounded-2xl shadow-2xl w-full max-w-lg relative overflow-hidden">
//         {/* Header */}
//         <div className="bg-indigo-900 p-6 text-white flex justify-between items-start">
//           <div>
//             <h2 className="text-2xl font-bold flex items-center">
//               <Handshake className="mr-2 text-teal-400" /> Enroll Now
//             </h2>
//             <p className="text-indigo-200 text-sm mt-1">
//               Join the CloudDesk Network
//             </p>
//           </div>

//           <button
//             onClick={handleClose}
//             className="text-white/70 hover:text-white bg-white/10 hover:bg-white/20 
//             rounded-full p-1 transition"
//           >
//             <X size={20} />
//           </button>
//         </div>

//         {/* Body */}
//         <div className="p-6 md:p-8 overflow-y-auto max-h-[80vh]">
//           <form className="space-y-5" onSubmit={handleSubmit}>
//             {/* Name + Mobile */}
//             <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//               <div>
//                 <label className="block text-xs font-bold text-gray-700 mb-1 uppercase">
//                   Name
//                 </label>
//                 <input
//                   type="text"
//                   name="name"
//                   placeholder="Your Name"
//                   value={form.name}
//                   onChange={handleChange}
//                   className="w-full p-3 rounded-lg border border-gray-300"
//                 />
//                 {errors.name && (
//                   <p className="text-xs text-red-500 mt-1">{errors.name}</p>
//                 )}
//               </div>

//               <div>
//                 <label className="block text-xs font-bold text-gray-700 mb-1 uppercase">
//                   Mobile No
//                 </label>
//                 <input
//                   type="tel"
//                   name="mobile"
//                   placeholder="+91 XXXXX XXXXX"
//                   value={form.mobile}
//                   onChange={handleChange}
//                   className="w-full p-3 rounded-lg border border-gray-300"
//                 />
//                 {errors.mobile && (
//                   <p className="text-xs text-red-500 mt-1">{errors.mobile}</p>
//                 )}
//               </div>
//             </div>

//             {/* Entity */}
//             <div>
//               <label className="block text-xs font-bold text-gray-700 mb-1 uppercase">
//                 Entity Name
//               </label>
//               <div className="relative">
//                 <Building
//                   className="absolute left-3 top-3 text-gray-400"
//                   size={16}
//                 />
//                 <input
//                   type="text"
//                   name="entity"
//                   placeholder="Company / Firm Name"
//                   value={form.entity}
//                   onChange={handleChange}
//                   className="w-full pl-10 p-3 rounded-lg border border-gray-300"
//                 />
//               </div>
//             </div>

//             {/* Email */}
//             <div>
//               <label className="block text-xs font-bold text-gray-700 mb-1 uppercase">
//                 Email ID
//               </label>
//               <div className="relative">
//                 <Mail
//                   className="absolute left-3 top-3 text-gray-400"
//                   size={16}
//                 />
//                 <input
//                   type="email"
//                   name="email"
//                   placeholder="official@domain.com"
//                   value={form.email}
//                   onChange={handleChange}
//                   className="w-full pl-10 p-3 rounded-lg border border-gray-300"
//                 />
//               </div>
//               {errors.email && (
//                 <p className="text-xs text-red-500 mt-1">{errors.email}</p>
//               )}
//             </div>

//             {/* Role */}
//             <div>
//               <label className="block text-xs font-bold text-gray-700 mb-2 uppercase">
//                 I am a:
//               </label>
//               <div className="grid grid-cols-2 gap-3">
//                 {["Importer / Exporter", "CHA", "Logistics", "Forwarder"].map(
//                   (role) => (
//                     <label
//                       key={role}
//                       className={`flex items-center p-3 border rounded-lg cursor-pointer transition ${
//                         form.role === role
//                           ? "border-teal-500 bg-teal-50"
//                           : "border-gray-200 hover:bg-indigo-50 hover:border-indigo-200"
//                       }`}
//                     >
//                       <input
//                         type="radio"
//                         name="role"
//                         value={role}
//                         checked={form.role === role}
//                         onChange={handleChange}
//                         className="w-4 h-4 text-teal-600 focus:ring-teal-500"
//                       />
//                       <span className="ml-2 text-sm font-medium text-gray-700">
//                         {role}
//                       </span>
//                     </label>
//                   ),
//                 )}
//               </div>
//               {errors.role && (
//                 <p className="text-xs text-red-500 mt-2">{errors.role}</p>
//               )}
//             </div>

//             {/* Partner Checkbox */}
//             <div className="bg-teal-50 p-4 rounded-lg border border-teal-100">
//               <label className="flex items-start cursor-pointer">
//                 <input
//                   type="checkbox"
//                   name="partner"
//                   checked={form.partner}
//                   onChange={handleChange}
//                   className="mt-1 w-5 h-5 text-teal-600 rounded border-gray-300 focus:ring-teal-500"
//                 />
//                 <span className="ml-3 text-sm text-gray-800">
//                   I am interested in being a{" "}
//                   <span className="font-bold text-teal-700">
//                     Partner with EXIMINQ CLOUDDESK
//                   </span>{" "}
//                   and agree to the terms of enrollment.
//                 </span>
//               </label>
//               {errors.partner && (
//                 <p className="text-xs text-red-500 mt-2">{errors.partner}</p>
//               )}
//             </div>

//             {/* Submit */}
//             <button
//               type="submit"
//               disabled={loading}
//               className="w-full py-4 bg-gradient-to-r from-teal-600 to-indigo-700 
//               text-white font-bold rounded-xl shadow-lg hover:shadow-xl 
//               transform hover:-translate-y-0.5 transition flex items-center justify-center text-lg"
//             >
//               {loading ? "Submitting..." : "Submit Enrollment"}
//             </button>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// };


import React, { useState, useEffect } from "react";
import { X, Handshake, Building, Mail, FileSignature } from "lucide-react";

export const ModalEnroll = ({ 
  show, 
  onClose,
  onSubmit,
  predefinedService,  // Fixed typo: predefindService -> predefinedService
  type,
  category,
  issue,
}) => {
  const [form, setForm] = useState({
    name: "",
    mobile: "",
    entity: "",
    email: "",
    role: "",
    partner: false,
    service: predefinedService || "electronics-industry",
  });

  const isEnroll = !!predefinedService;  // Fixed typo
  const isconsultexpert = type === "Consult_an_Expert";
  const isProfileUpdate = type === "profile_update";

  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (predefinedService) {  // Fixed variable name
      setForm((prev) => ({ ...prev, service: predefinedService }));
    }
  }, [predefinedService]);

  const resetForm = () => {
    setForm({
      name: "",
      mobile: "",
      entity: "",
      email: "",
      role: "",
      partner: false,
      service: predefinedService || "electronics-industry",
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
    
    // Add email format validation
    if (form.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      e.email = "Please enter a valid email address.";
    }
    
    // Add mobile number format validation
    if (form.mobile && !/^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{4,6}$/.test(form.mobile)) {
      e.mobile = "Please enter a valid mobile number.";
    }
    
    return e;
  };

const handleSubmit = async (e) => {
  e.preventDefault();

  // ✅ Validate form
  const v = validate();
  setErrors(v);
  if (Object.keys(v).length > 0) return;

  setLoading(true);

  try {
    // ✅ Prepare payload
    const payload = {
      name: form.name?.trim(),
      mobile: form.mobile?.trim(),
      entity: form.entity?.trim(),
      email: form.email?.toLowerCase().trim(),
      role: form.role,
      partner: form.partner,
      service: predefinedService || form.service,
      type: type,

      // optional (if needed later)
      category: isEnroll ? category : null,
      issue: isProfileUpdate ? issue : null,
    };

    console.log("📤 Final payload:", payload);

    // ✅ API URL (FIXED)
    const res = await fetch(
        // `${process.env.REACT_APP_API_URL}/api/electronics-it-industry-import-export`,
        "http://localhost:5000/api/electronics-it-industry-import-export",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      }
    );

    // ✅ Handle non-JSON safely
    let data;
    try {
      data = await res.json();
    } catch (err) {
      throw new Error("Invalid JSON response from server");
    }

    console.log("📥 Response:", data);

    // ✅ Handle API error
    if (!res.ok || !data.success) {
      throw new Error(data.message || "API failed");
    }

    // ✅ Callback
    if (typeof onSubmit === "function") {
      onSubmit(payload);
    }

    alert("✅ Request submitted successfully");

    // ✅ Reset form
    resetForm();

    // ✅ Close modal safely
    if (typeof onClose === "function") {
      onClose();
    }

  } catch (err) {
    console.error("❌ Enroll error:", err);

    alert(err.message || "Submission failed. Please try again.");
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
            type="button"
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
                  className={`w-full p-3 rounded-lg border ${
                    errors.name ? 'border-red-500' : 'border-gray-300'
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
                  className={`w-full p-3 rounded-lg border ${
                    errors.mobile ? 'border-red-500' : 'border-gray-300'
                  }`}
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
                  className={`w-full pl-10 p-3 rounded-lg border ${
                    errors.email ? 'border-red-500' : 'border-gray-300'
                  }`}
                />
              </div>
              {errors.email && (
                <p className="text-xs text-red-500 mt-1">{errors.email}</p>
              )}
            </div>

            {isEnroll && (
              <>
                {/* Category + Issue or ENROLL-specific fields */}
                <div>
                  {/* <label className="block text-xs font-bold text-gray-700 mb-1 uppercase">
                    Category
                  </label>
                  <select
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                    className="w-full p-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-teal-500 outline-none text-sm"
                  >
                    <option value="" disabled>
                      Select Category
                    </option>
                    {IEC_OPTIONS.map((option) => (
                      <option key={option} value={option}>
                        {option}
                      </option>
                    ))}
                  </select> */}
                </div>
              </>
            )}

            {isconsultexpert && (
              <div>
                <label className="block text-xs font-bold text-gray-700 mb-1">
                  CATEGORY
                </label>
                <div className="relative">
                  <FileSignature
                    className="absolute left-3 top-3 text-gray-400"
                    size={16}
                  />
                  <input
                    type="text"
                    name="service"
                    value="Consult an Expert"
                    readOnly
                    className="w-full pl-10 p-3 rounded-lg border border-gray-300 bg-gray-100 text-sm"
                  />
                </div>
              </div>
            )}            
            {/* Role */}
            <div>
              <label className="block text-xs font-bold text-gray-700 mb-2 uppercase">
                I am a: 
              </label>
              <div className="grid grid-cols-2 gap-3">
                {["Importer / Exporter", "CHA", "Logistics", "Forwarder"].map(
                  (role) => (
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
                      <span className="ml-2 text-sm font-medium text-gray-700">
                        {role}
                      </span>
                    </label>
                  ),
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
              transform hover:-translate-y-0.5 transition flex items-center justify-center text-lg
              disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {loading ? "Submitting..." : "Submit Enrollment"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};