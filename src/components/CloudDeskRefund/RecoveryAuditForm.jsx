// import { useState, useEffect } from "react";

// export default function RecoveryAuditForm() {
//   const issues = {
//     RoDTEP: [
//       "Scroll Expired / Lapsed",
//       "Scroll Amount Mismatch",
//       "EGM Error (Export General Manifest)",
//       "Scrip Generation Issue",
//       "Other",
//     ],
//     IGST: [
//       "SB005 Error (Invoice Mismatch)",
//       "PFMS Validation Pending",
//       "Scroll Generated but Not Credited",
//       "EGM Not Filed",
//       "Other",
//     ],
//     Drawback: [
//       "Brand Rate Fixation",
//       "Supplementary Claim",
//       "Drawback Amount Short Credited",
//       "Section 74 Re-Export Claim",
//       "Other",
//     ],
//   };

//   const [loading, setLoading] = useState(false);
//   const [licenseType, setLicenseType] = useState("RoDTEP");

//   const [formData, setFormData] = useState({
//     firstName: "",
//     lastName: "",
//     email: "",
//     mobile: "",
//     incentiveType: "RoDTEP",
//     issueDesc: issues["RoDTEP"][0],
//     amount: "",
//   });

//   /* -------- Reset issue when type changes -------- */
//   useEffect(() => {
//     setFormData((prev) => ({
//       ...prev,
//       incentiveType: licenseType,
//       issueDesc: issues[licenseType][0],
//     }));
//   }, [licenseType]);

//   /* -------- Handle Change -------- */
//   const handleChange = (e) => {
//     const { name, value } = e.target;

//     setFormData((prev) => ({
//       ...prev,
//       [name]: value,
//     }));
//   };

//   /* -------- Handle Submit -------- */
//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     const {
//       firstName,
//       lastName,
//       email,
//       mobile,
//       incentiveType,
//       issueDesc,
//       amount,
//     } = formData;

//     if (!firstName || !lastName || !email || !mobile) {
//       alert("Please fill all required fields");
//       return;
//     }

//     try {
//       setLoading(true);

//       const payload = {
//         name: `${firstName} ${lastName}`,
//         mobile,
//         email,
//         type: "recovery_audit",
//         incentiveType,
//         issueDescription: issueDesc,
//         estimatedAmount: amount,
//       };

//       console.log("Payload:", payload);

//       const response = await fetch(
//         // `${process.env.REACT_APP_API_URL}/api/rodtep-refund-recovery`,
//         "http://localhost:5000/api/rodtep-refund-recovery",
//         {
//           method: "POST",
//           headers: {
//             "Content-Type": "application/json",
//           },
//           body: JSON.stringify(payload),
//         },
//       );

//       const data = await response.json();

//       if (!response.ok) {
//         throw new Error(data.message);
//       }

//       alert("Request submitted successfully!");

//       // Reset form
//       setFormData({
//         firstName: "",
//         lastName: "",
//         email: "",
//         mobile: "",
//         incentiveType: "RoDTEP",
//         issueDesc: issues["RoDTEP"][0],
//         amount: "",
//       });

//       setLicenseType("RoDTEP");
//     } catch (error) {
//       console.error(error);
//       alert(error.message || "Submission failed");
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <section className="py-24 bg-slate-900 text-white relative overflow-hidden">
//       <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>

//       <div className="container mx-auto px-4 relative z-10 flex flex-col lg:flex-row gap-16 items-center max-w-6xl">
//         {/* LEFT CONTENT */}
//         <div className="lg:w-1/2">
//           <span className="text-green-400 font-bold uppercase tracking-wider text-sm mb-2 block">
//             Free Financial Check
//           </span>

//           <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
//             Find out how much cash is hiding in your old files.
//           </h2>

//           <p className="text-slate-400 mb-8 text-lg leading-relaxed">
//             Submit your details. We will run a diagnostic on your IEC to find
//             every single unpaid Shipping Bill, expired scroll, or stuck refund
//             legally owed to you.
//           </p>
//         </div>

//         {/* RIGHT FORM */}
//         <div className="lg:w-1/2 w-full">
//           <div className="bg-white rounded-2xl p-8 shadow-2xl text-slate-900 border border-slate-200">
//             <h3 className="text-2xl font-bold mb-6 border-b pb-4 text-slate-800">
//               Request Recovery Audit
//             </h3>

//             <form className="space-y-5" onSubmit={handleSubmit}>
//               <div className="grid grid-cols-2 gap-4">
//                 <div>
//                   <label className="block text-xs font-bold uppercase mb-1">
//                     First Name
//                   </label>
//                   <input
//                     type="text"
//                     className="w-full border border-slate-300 rounded-lg px-4 py-3"
//                     placeholder="John"
//                   />
//                 </div>

//                 <div>
//                   <label className="block text-xs font-bold uppercase mb-1">
//                     Last Name
//                   </label>
//                   <input
//                     type="text"
//                     className="w-full border border-slate-300 rounded-lg px-4 py-3"
//                     placeholder="Doe"
//                   />
//                 </div>
//               </div>

//               <div>
//                 <label className="block text-xs font-bold uppercase mb-1">
//                   Company Email
//                 </label>
//                 <input
//                   type="email"
//                   className="w-full border border-slate-300 rounded-lg px-4 py-3"
//                   placeholder="john@company.com"
//                 />
//               </div>

//               <div>
//                 <label className="block text-xs font-bold uppercase mb-1">
//                   Incentive Type
//                 </label>
//                 <select
//                   value={licenseType}
//                   onChange={(e) => setLicenseType(e.target.value)}
//                   className="w-full border border-slate-300 rounded-lg px-4 py-3 bg-white"
//                 >
//                   <option value="RoDTEP">RoDTEP / RoSCTL</option>
//                   <option value="IGST">IGST Refund</option>
//                   <option value="Drawback">Duty Drawback</option>
//                 </select>
//               </div>

//               <div>
//                 <label className="block text-xs font-bold text-slate-500 uppercase mb-1">
//                   Est. Amount (Optional)
//                 </label>
//                 <input
//                   type="text"
//                   className="w-full border border-slate-300 rounded-lg px-4 py-3 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 outline-none transition"
//                   placeholder="e.g. ₹5 Lakhs"
//                 />
//               </div>

//               <div>
//                 <label className="block text-xs font-bold uppercase mb-1">
//                   Issue Description
//                 </label>
//                 <select className="w-full border border-slate-300 rounded-lg px-4 py-3 bg-white">
//                   {issues[licenseType].map((issue, index) => (
//                     <option key={index} value={issue}>
//                       {issue}
//                     </option>
//                   ))}
//                 </select>
//               </div>

//               {/* <button
//                 type="button"
//                 className="w-full bg-slate-900 text-white font-bold py-4 rounded-lg hover:bg-slate-800 transition shadow-lg mt-2"
//               >
//                 Recover My Money
//               </button> */}

//               {/* Button fix */}
//               <button
//                 type="submit" // ✅ "button" → "submit"
//                 disabled={loading} // ✅ Add karo
//                 className="w-full bg-slate-900 text-white font-bold py-4 rounded-lg hover:bg-slate-800 transition shadow-lg mt-2 disabled:opacity-50"
//               >
//                 {loading ? "Submitting..." : "Recover My Money"}
//               </button>
//             </form>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

import { useState, useEffect } from "react";

export default function RecoveryAuditForm() {
  const issues = {
    RoDTEP: [
      "Scroll Expired / Lapsed",
      "Scroll Amount Mismatch",
      "EGM Error (Export General Manifest)",
      "Scrip Generation Issue",
      "Other",
    ],
    IGST: [
      "SB005 Error (Invoice Mismatch)",
      "PFMS Validation Pending",
      "Scroll Generated but Not Credited",
      "EGM Not Filed",
      "Other",
    ],
    Drawback: [
      "Brand Rate Fixation",
      "Supplementary Claim",
      "Drawback Amount Short Credited",
      "Section 74 Re-Export Claim",
      "Other",
    ],
  };

  const [loading, setLoading] = useState(false);
  const [licenseType, setLicenseType] = useState("RoDTEP");

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    //    mobile: "", // ✅ UNCOMMENTED - Mobile is REQUIRED by backend
    incentiveType: "RoDTEP",
    issueDesc: issues["RoDTEP"][0],
    estimatedAmount: "",
  });

  useEffect(() => {
    setFormData((prev) => ({
      ...prev,
      incentiveType: licenseType,
      issueDesc: issues[licenseType][0],
    }));
  }, [licenseType]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const {
      firstName,
      lastName,
      email,
      //   mobile, // ✅ Added mobile
      incentiveType,
      issueDesc,
      estimatedAmount,
    } = formData;

    // ✅ Fixed validation - mobile is required
    if (!firstName || !lastName || !email) {
      alert(
        "Please fill all required fields (First Name, Last Name, Email, and Mobile)",
      );
      return;
    }

    // // ✅ Mobile validation
    // const mobileRegex = /^[6-9]\d{9}$/;
    // if (!mobileRegex.test(mobile)) {
    //   alert("Please enter a valid 10-digit Indian mobile number starting with 6-9");
    //   return;
    // }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      alert("Please enter a valid email address");
      return;
    }

    try {
      setLoading(true);

      // ✅ Fixed payload - using correct form data references
      const payload = {
        name: `${formData.firstName} ${formData.lastName}`,
        mobile: formData.mobile || "",
        email: formData.email,
        type: "recovery_audit",
        licenseType: formData.incentiveType,
        issueDescription: formData.issueDesc,
        estimatedAmount: formData.estimatedAmount || "", // ✅ FIXED
        additionalDetails: formData.additionalDetails || "",
      };

      console.log("Payload:", payload);

      const response = await fetch(
        `${process.env.REACT_APP_API_URL}/api/rodtep-refund-recovery`,
        // "http://localhost:5000/api/rodtep-refund-recovery",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload),
        },
      );

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Something went wrong");
      }

      alert("Request submitted successfully!");

      // Reset form
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        // mobile: "", // ✅ Reset mobile too
        incentiveType: "RoDTEP",
        issueDesc: issues["RoDTEP"][0],
        estimatedAmount: "",
      });

      setLicenseType("RoDTEP");
    } catch (error) {
      console.error("Submission error:", error);
      alert(error.message || "Submission failed. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="py-24 bg-slate-900 text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>

      <div className="container mx-auto px-4 relative z-10 flex flex-col lg:flex-row gap-16 items-center max-w-6xl">
        {/* LEFT CONTENT */}
        <div className="lg:w-1/2">
          <span className="text-green-400 font-bold uppercase tracking-wider text-sm mb-2 block">
            Free Financial Check
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
            Find out how much cash is hiding in your old files.
          </h2>
          <p className="text-slate-400 mb-8 text-lg leading-relaxed">
            Submit your details. We will run a diagnostic on your IEC to find
            every single unpaid Shipping Bill, expired scroll, or stuck refund
            legally owed to you.
          </p>
        </div>

        {/* RIGHT FORM */}
        <div className="lg:w-1/2 w-full">
          <div className="bg-white rounded-2xl p-8 shadow-2xl text-slate-900 border border-slate-200">
            <h3 className="text-2xl font-bold mb-6 border-b pb-4 text-slate-800">
              Request Recovery Audit
            </h3>

            <form className="space-y-5" onSubmit={handleSubmit}>
              {/* Name Fields */}
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-500 uppercase mb-1">
                    First Name <span className="text-red-500"></span>
                  </label>
                  <input
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    placeholder="John"
                    className="w-full border border-slate-300 rounded-lg px-4 py-3 outline-none focus:border-teal-500 focus:ring-2 focus:ring-teal-200 transition"
                    required
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-500 uppercase mb-1">
                    Last Name <span className="text-red-500"></span>
                  </label>
                  <input
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    placeholder="Doe"
                    className="w-full border border-slate-300 rounded-lg px-4 py-3 outline-none focus:border-teal-500 focus:ring-2 focus:ring-teal-200 transition"
                    required
                  />
                </div>
              </div>

              {/* Email */}
              <div>
                <label className="block text-xs font-bold text-slate-500 uppercase mb-1">
                  Company Email <span className="text-red-500"></span>
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="john@company.com"
                  className="w-full border border-slate-300 rounded-lg px-4 py-3 outline-none focus:border-teal-500 focus:ring-2 focus:ring-teal-200 transition"
                  required
                />
              </div>

              {/* ✅ Mobile - UNCOMMENTED and REQUIRED */}
              {/* <div>
                <label className="block text-xs font-bold text-slate-500 uppercase mb-1">
                  Mobile Number <span className="text-red-500">*</span>
                </label>
                <input
                  type="tel"
                  name="mobile"
                  value={formData.mobile}
                  onChange={handleChange}
                  placeholder="9876543210"
                  maxLength="10"
                  className="w-full border border-slate-300 rounded-lg px-4 py-3 outline-none focus:border-teal-500 focus:ring-2 focus:ring-teal-200 transition"
                  required
                />
                <p className="text-xs text-slate-400 mt-1">Enter 10-digit mobile number starting with 6-9</p>
              </div> */}

              {/* Incentive Type */}
              <div>
                <label className="block text-xs font-bold text-slate-500 uppercase mb-1">
                  Incentive Type
                </label>
                <select
                  value={licenseType}
                  onChange={(e) => setLicenseType(e.target.value)}
                  className="w-full border border-slate-300 rounded-lg px-4 py-3 bg-white outline-none focus:border-teal-500 focus:ring-2 focus:ring-teal-200 transition"
                >
                  <option value="RoDTEP">RoDTEP / RoSCTL</option>
                  <option value="IGST">IGST Refund</option>
                  <option value="Drawback">Duty Drawback</option>
                </select>
              </div>

              {/* Estimated Amount */}
              <div>
                <label className="block text-xs font-bold text-slate-500 uppercase mb-1">
                  Estimated Amount (Optional)
                </label>
                <input
                  type="text"
                  name="estimatedAmount"
                  value={formData.estimatedAmount}
                  onChange={handleChange}
                  placeholder="e.g. ₹5 Lakhs"
                  className="w-full border border-slate-300 rounded-lg px-4 py-3 focus:border-teal-500 focus:ring-2 focus:ring-teal-200 outline-none transition"
                />
              </div>

              {/* Issue Description */}
              <div>
                <label className="block text-xs font-bold text-slate-500 uppercase mb-1">
                  Issue Description <span className="text-red-500"></span>
                </label>
                <select
                  name="issueDesc"
                  value={formData.issueDesc}
                  onChange={handleChange}
                  className="w-full border border-slate-300 rounded-lg px-4 py-3 bg-white outline-none focus:border-teal-500 focus:ring-2 focus:ring-teal-200 transition"
                  required
                >
                  {issues[licenseType].map((issue, index) => (
                    <option key={index} value={issue}>
                      {issue}
                    </option>
                  ))}
                </select>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={loading}
                className="w-full bg-slate-900 text-white font-bold py-4 rounded-lg hover:bg-slate-800 transition shadow-lg mt-2 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {loading ? "Submitting..." : "Recover My Money"}
              </button>

              <p className="text-xs text-center text-slate-400 mt-4">
                We respect your privacy. Your data is never shared.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
