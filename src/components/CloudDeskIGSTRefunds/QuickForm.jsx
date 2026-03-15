// import { useState } from "react";
// import { RefreshCw } from "lucide-react";

// const QuickForm = () => {
//   const [activeTab, setActiveTab] = useState("SB"); // SB | IGST

//     const [form, setForm] = useState({
//       service: "",
//       port: "",
//       mobile: "",
//     });

//   const [errors, setErrors] = useState({});
//   const [loading, setLoading] = useState(false);

//   const handleChange = (e) => {
//     const { name, value } = e.target;

//     setForm((prev) => ({
//       ...prev,
//       [name]: value,
//     }));

//     // clear error when typing
//     setErrors((prev) => ({
//       ...prev,
//       [name]: "",
//     }));
//   };


//     const validate = () => {
//     const newErrors = {};

//     // Service validation
//     if (!form.service) {
//       newErrors.service = "Please select a service";
//     }

//     // Mobile validation
//     const mobileRegex = /^[6-9]\d{9}$/;

//     if (!form.mobile.trim()) {
//       newErrors.mobile = "Mobile number is required";
//     } else if (!mobileRegex.test(form.mobile)) {
//       newErrors.mobile = "Enter valid 10 digit Indian mobile number";
//     }

//     // Port validation (optional but if entered validate length)
//     if (form.port && form.port.length < 3) {
//       newErrors.port = "Port name must be at least 3 characters";
//     }

//     return newErrors;
//   };

//     const handleSubmit = async (e) => {
//       e.preventDefault();
  
//       const validationErrors = validate();
//       setErrors(validationErrors);
  
//       if (Object.keys(validationErrors).length > 0) {
//         return;
//       }
  
//       try {
//         setLoading(true);
  
//         const response = await fetch(
//           //  `${process.env.REACT_APP_API_URL}/api/igst-refund`,
//           "http://localhost:5000/api/igst-refund",
//           {
//             method: "POST",
//             headers: { "Content-Type": "application/json" },
//             body: JSON.stringify(form),
//           }
//         );
  
//         const data = await response.json();
  
//         if (!response.ok || !data.success) {
//           throw new Error(data.error || data.message);
//         }
  
//         alert("Request submitted successfully");
  
//         setForm({
//           service: "",
//           port: "",
//           mobile: "",
//         });
  
//       } catch (err) {
//         console.error(err);
//         alert("Submission failed");
//       } finally {
//         setLoading(false);
//       }
//     };

//   return (
//     <div className="bg-white text-slate-800 rounded-xl shadow-2xl p-6 md:p-8">

//       {/* Header */}
//       <div className="flex items-center gap-3 mb-4">
//         <RefreshCw className="text-brand-600 w-7 h-7" />
//         <h3 className="text-2xl font-bold text-brand-900">
//           Refund Status Check
//         </h3>
//       </div>

//       <p className="text-slate-500 mb-6 text-sm">
//         Find out why your IGST refund is stuck.
//       </p>

//       {/* Tabs */}
//       <div className="flex mb-6 border rounded-lg overflow-hidden">
//         <button
//           type="button"
//           onClick={() => setActiveTab("SB")}
//           className={`flex-1 py-2 text-sm font-bold ${
//             activeTab === "SB"
//               ? "bg-brand-600 text-white"
//               : "bg-slate-100 text-slate-600"
//           }`}
//         >
//           Shipping Bill Wise
//         </button>

//         <button
//           type="button"
//           onClick={() => setActiveTab("IGST")}
//           className={`flex-1 py-2 text-sm font-bold ${
//             activeTab === "IGST"
//               ? "bg-brand-600 text-white"
//               : "bg-slate-100 text-slate-600"
//           }`}
//         >
//           IGST Refund Amount Wise
//         </button>
//       </div>

//       {/* Form */}
//       <form onSubmit={handleSubmit} className="space-y-4">

//         {/* TAB 1: SHIPPING BILL WISE */}
//         {activeTab === "SB" && (
//           <>
//             <div>
//               <label className="block text-sm font-semibold mb-1">
//                 Shipping Bill No.
//               </label>
//               <input
//                 type="text"
//                 required
//                 className="w-full border border-slate-300 rounded px-3 py-2"
//                 placeholder="e.g. 1234567"
//               />
//             </div>

//             <div>
//               <label className="block text-sm font-semibold mb-1">
//                 Shipping Bill Date
//               </label>
//               <input
//                 type="date"
//                 required
//                 className="w-full border border-slate-300 rounded px-3 py-2"
//               />
//             </div>

//             <div>
//               <label className="block text-sm font-semibold mb-1">
//                 Port Code
//               </label>
//               <input
//                 type="text"
//                 required
//                 className="w-full border border-slate-300 rounded px-3 py-2"
//                 placeholder="e.g. INNSA1"
//               />
//             </div>
//           </>
//         )}

//         {/* TAB 2: IGST AMOUNT WISE */}
//         {activeTab === "IGST" && (
//           <>
//             <div>
//               <label className="block text-sm font-semibold mb-1">
//                 Total IGST Refund Pending Amount (₹)
//               </label>
//               <input
//                 type="number"
//                 required
//                 className="w-full border border-slate-300 rounded px-3 py-2"
//                 placeholder="e.g. 1250000"
//               />
//             </div>

//             <div>
//               <label className="block text-sm font-semibold mb-1">
//                 No. of Shipping Bills
//               </label>
//               <input
//                 type="number"
//                 required
//                 className="w-full border border-slate-300 rounded px-3 py-2"
//                 placeholder="e.g. 12"
//               />
//             </div>

//             <div>
//               <label className="block text-sm font-semibold mb-1">
//                 Port Code
//               </label>
//               <input
//                 type="text"
//                 required
//                 className="w-full border border-slate-300 rounded px-3 py-2"
//                 placeholder="e.g. INNSA1"
//               />
//             </div>
//           </>
//         )}

//         {/* COMMON FIELDS */}
//         <div>
//           <label className="block text-sm font-semibold mb-1">
//             Email ID
//           </label>
//           <input
//             type="email"
//             required
//             className="w-full border border-slate-300 rounded px-3 py-2"
//             placeholder="official@company.com"
//           />
//         </div>

//         <div>
//           <label className="block text-sm font-semibold mb-1">
//             Mobile Number
//           </label>
//           <input
//             type="tel"
//             required
//             className="w-full border border-slate-300 rounded px-3 py-2"
//             placeholder="+91 XXXXX XXXXX"
//           />
//         </div>

//         {/* Submit */}
//         <button
//           type="submit"
//           className="w-full bg-brand-600 hover:bg-brand-700 text-white font-bold py-3 rounded-lg transition"
//         >
//           Get Status Report
//         </button>
//       </form>
//     </div>
//   );
// };

// export default QuickForm;


import { useState } from "react";
import { RefreshCw } from "lucide-react";

const QuickForm = () => {
  const [activeTab, setActiveTab] = useState("SB"); // SB | IGST

  // Updated form state to include all fields from both tabs
  const [form, setForm] = useState({
    // Common fields
    email: "",
    mobile: "",
    
    // Shipping Bill Wise fields (Tab 1)
    shippingBillNo: "",
    shippingBillDate: "",
    portCode: "",
    
    // IGST Amount Wise fields (Tab 2)
    igstAmount: "",
    numberOfBills: "",
    igstPortCode: "",
    
    // Track which tab is active for submission
    searchType: "SB" // SB or IGST
  });

  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));

    // Clear error when typing
    setErrors((prev) => ({
      ...prev,
      [name]: "",
    }));
  };

  const handleTabChange = (tab) => {
    setActiveTab(tab);
    setForm((prev) => ({
      ...prev,
      searchType: tab
    }));
    // Clear errors when switching tabs
    setErrors({});
  };

  const validate = () => {
    const newErrors = {};

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!form.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!emailRegex.test(form.email)) {
      newErrors.email = "Enter a valid email address";
    }

    // Mobile validation (10 digit Indian mobile)
    const mobileRegex = /^[6-9]\d{9}$/;
    if (!form.mobile.trim()) {
      newErrors.mobile = "Mobile number is required";
    } else if (!mobileRegex.test(form.mobile)) {
      newErrors.mobile = "Enter valid 10 digit Indian mobile number";
    }

    // Tab-specific validations
    if (activeTab === "SB") {
      if (!form.shippingBillNo.trim()) {
        newErrors.shippingBillNo = "Shipping Bill No. is required";
      }
      if (!form.shippingBillDate) {
        newErrors.shippingBillDate = "Shipping Bill Date is required";
      }
      if (!form.portCode.trim()) {
        newErrors.portCode = "Port Code is required";
      } else if (form.portCode.length < 4) {
        newErrors.portCode = "Port code must be at least 4 characters";
      }
    } else if (activeTab === "IGST") {
      if (!form.igstAmount) {
        newErrors.igstAmount = "IGST refund amount is required";
      } else if (parseFloat(form.igstAmount) <= 0) {
        newErrors.igstAmount = "Amount must be greater than 0";
      }
      if (!form.numberOfBills) {
        newErrors.numberOfBills = "Number of shipping bills is required";
      } else if (parseInt(form.numberOfBills) <= 0) {
        newErrors.numberOfBills = "Number of bills must be greater than 0";
      }
      if (!form.igstPortCode.trim()) {
        newErrors.igstPortCode = "Port Code is required";
      } else if (form.igstPortCode.length < 4) {
        newErrors.igstPortCode = "Port code must be at least 4 characters";
      }
    }

    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const validationErrors = validate();
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length > 0) {
      return;
    }

    try {
      setLoading(true);

      // Prepare data based on active tab
      const submissionData = {
        name: form.email, 
        email: form.email,
        mobile: form.mobile,
        searchType: form.searchType,
        type: "QUICK_FORM",
        ...(activeTab === "SB" ? {
          shippingBillNo: form.shippingBillNo,
          shippingBillDate: form.shippingBillDate,
          portCode: form.portCode
        } : {
          igstAmount: form.igstAmount,
          numberOfBills: form.numberOfBills,
          portCode: form.igstPortCode
        })
      };

      const response = await fetch(
        `${process.env.REACT_APP_API_URL}/api/igst-refund`,
        // "http://localhost:5000/api/igst-refund",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            ...submissionData,
            type: "QUICK_FORM"
          }),
        }
      );

      const data = await response.json();

      if (!response.ok || !data.success) {
        throw new Error(data.error || data.message || "Submission failed");
      }

      alert("Request submitted successfully");

      // Reset form but keep the active tab
      setForm({
        email: "",
        mobile: "",
        shippingBillNo: "",
        shippingBillDate: "",
        portCode: "",
        igstAmount: "",
        numberOfBills: "",
        igstPortCode: "",
        searchType: activeTab
      });

    } catch (err) {
      console.error("Submission error:", err);
      alert(err.message || "Submission failed. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-white text-slate-800 rounded-xl shadow-2xl p-6 md:p-8">
      {/* Header */}
      <div className="flex items-center gap-3 mb-4">
        <RefreshCw className="text-brand-600 w-7 h-7" />
        <h3 className="text-2xl font-bold text-brand-900">
          Refund Status Check
        </h3>
      </div>

      <p className="text-slate-500 mb-6 text-sm">
        Find out why your IGST refund is stuck.
      </p>

      {/* Tabs */}
      <div className="flex mb-6 border rounded-lg overflow-hidden">
        <button
          type="button"
          onClick={() => handleTabChange("SB")}
          className={`flex-1 py-2 text-sm font-bold transition ${
            activeTab === "SB"
              ? "bg-brand-600 text-white"
              : "bg-slate-100 text-slate-600 hover:bg-slate-200"
          }`}
        >
          Shipping Bill Wise
        </button>

        <button
          type="button"
          onClick={() => handleTabChange("IGST")}
          className={`flex-1 py-2 text-sm font-bold transition ${
            activeTab === "IGST"
              ? "bg-brand-600 text-white"
              : "bg-slate-100 text-slate-600 hover:bg-slate-200"
          }`}
        >
          IGST Refund Amount Wise
        </button>
      </div>

      {/* Form */}
      <form onSubmit={handleSubmit} className="space-y-4">
        {/* TAB 1: SHIPPING BILL WISE */}
        {activeTab === "SB" && (
          <>
            <div>
              <label className="block text-sm font-semibold mb-1">
                Shipping Bill No. <span className="text-red-500"></span>
              </label>
              <input
                type="text"
                name="shippingBillNo"
                value={form.shippingBillNo}
                onChange={handleChange}
                className={`w-full border rounded px-3 py-2 ${
                  errors.shippingBillNo ? 'border-red-500' : 'border-slate-300'
                }`}
                placeholder="e.g. 1234567"
              />
              {errors.shippingBillNo && (
                <p className="text-red-500 text-xs mt-1">{errors.shippingBillNo}</p>
              )}
            </div>

            <div>
              <label className="block text-sm font-semibold mb-1">
                Shipping Bill Date <span className="text-red-500"></span>
              </label>
              <input
                type="date"
                name="shippingBillDate"
                value={form.shippingBillDate}
                onChange={handleChange}
                className={`w-full border rounded px-3 py-2 ${
                  errors.shippingBillDate ? 'border-red-500' : 'border-slate-300'
                }`}
              />
              {errors.shippingBillDate && (
                <p className="text-red-500 text-xs mt-1">{errors.shippingBillDate}</p>
              )}
            </div>

            <div>
              <label className="block text-sm font-semibold mb-1">
                Port Code <span className="text-red-500"></span>
              </label>
              <input
                type="text"
                name="portCode"
                value={form.portCode}
                onChange={handleChange}
                className={`w-full border rounded px-3 py-2 ${
                  errors.portCode ? 'border-red-500' : 'border-slate-300'
                }`}
                placeholder="e.g. INNSA1"
              />
              {errors.portCode && (
                <p className="text-red-500 text-xs mt-1">{errors.portCode}</p>
              )}
            </div>
          </>
        )}

        {/* TAB 2: IGST AMOUNT WISE */}
        {activeTab === "IGST" && (
          <>
            <div>
              <label className="block text-sm font-semibold mb-1">
                Total IGST Refund Pending Amount (₹) <span className="text-red-500">*</span>
              </label>
              <input
                type="number"
                name="igstAmount"
                value={form.igstAmount}
                onChange={handleChange}
                className={`w-full border rounded px-3 py-2 ${
                  errors.igstAmount ? 'border-red-500' : 'border-slate-300'
                }`}
                placeholder="e.g. 1250000"
                min="1"
                step="1"
              />
              {errors.igstAmount && (
                <p className="text-red-500 text-xs mt-1">{errors.igstAmount}</p>
              )}
            </div>

            <div>
              <label className="block text-sm font-semibold mb-1">
                No. of Shipping Bills <span className="text-red-500"></span>
              </label>
              <input
                type="number"
                name="numberOfBills"
                value={form.numberOfBills}
                onChange={handleChange}
                className={`w-full border rounded px-3 py-2 ${
                  errors.numberOfBills ? 'border-red-500' : 'border-slate-300'
                }`}
                placeholder="e.g. 12"
                min="1"
                step="1"
              />
              {errors.numberOfBills && (
                <p className="text-red-500 text-xs mt-1">{errors.numberOfBills}</p>
              )}
            </div>

            <div>
              <label className="block text-sm font-semibold mb-1">
                Port Code <span className="text-red-500"></span>
              </label>
              <input
                type="text"
                name="igstPortCode"
                value={form.igstPortCode}
                onChange={handleChange}
                className={`w-full border rounded px-3 py-2 ${
                  errors.igstPortCode ? 'border-red-500' : 'border-slate-300'
                }`}
                placeholder="e.g. INNSA1"
              />
              {errors.igstPortCode && (
                <p className="text-red-500 text-xs mt-1">{errors.igstPortCode}</p>
              )}
            </div>
          </>
        )}

        {/* COMMON FIELDS */}
        <div>
          <label className="block text-sm font-semibold mb-1">
            Email ID <span className="text-red-500"></span>
          </label>
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            className={`w-full border rounded px-3 py-2 ${
              errors.email ? 'border-red-500' : 'border-slate-300'
            }`}
            placeholder="official@company.com"
          />
          {errors.email && (
            <p className="text-red-500 text-xs mt-1">{errors.email}</p>
          )}
        </div>

        <div>
          <label className="block text-sm font-semibold mb-1">
            Mobile Number <span className="text-red-500"></span>
          </label>
          <input
            type="tel"
            name="mobile"
            value={form.mobile}
            onChange={handleChange}
            className={`w-full border rounded px-3 py-2 ${
              errors.mobile ? 'border-red-500' : 'border-slate-300'
            }`}
            placeholder="9876543210"
            maxLength="10"
          />
          {errors.mobile && (
            <p className="text-red-500 text-xs mt-1">{errors.mobile}</p>
          )}
        </div>

        {/* Submit */}
        <button
          type="submit"
          disabled={loading}
          className="w-full bg-brand-600 hover:bg-brand-700 text-white font-bold py-3 rounded-lg transition disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {loading ? "Submitting..." : "Get Status Report"}
        </button>
      </form>
    </div>
  );
};

export default QuickForm;
