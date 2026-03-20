// // components/QuickForm.jsx

// import { useState } from "react";

// const QuickForm = () => {
//   const [form, setForm] = useState({
//     service: "New ICEGATE Registration",
//     port: "",
//     mobile: "",
//   });

//   const [loading, setLoading] = useState(false);

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setForm((prev) => ({ ...prev, [name]: value }));
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     if (!form.mobile.trim()) {
//       alert("Please enter your mobile number.");
//       return;
//     }

//     try {
//       setLoading(true);
//       const response = await fetch(
//         //  `${process.env.REACT_APP_API_URL}/api/icegate-registration`,
//         "http://localhost:5000/api/icegate-registration",
//         {
//           method: "POST",
//           headers: { "Content-Type": "application/json" },
//           body: JSON.stringify(form),
//         },
//       );

//       const data = await response.json();

//       // FIX 2: was only checking response.ok — also check data.success
//       if (!response.ok || !data.success) {
//         throw new Error(data.error || data.message || "API failed");
//       }

//       alert("Request submitted successfully");

//       setForm({
//         service: "New ICEGATE Registration",
//         port: "",
//         mobile: "",
//       });
//     } catch (err) {
//       console.error("Submit error:", err.name, err.message);
//       alert("Submission failed. Please try again.");
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="bg-white text-slate-800 rounded-xl shadow-2xl p-6 md:p-8">
//       <h3 className="text-2xl font-bold text-brand-900 mb-2">
//         Customs Compliance Check
//       </h3>

//       <p className="text-slate-500 mb-6 text-sm">
//         Verify your port registration status.
//       </p>

//       <form onSubmit={handleSubmit}>
//         {/* Service Required */}
//         <div className="mb-4">
//           <label className="block text-sm font-semibold mb-1">
//             Service Required
//           </label>
//           <select
//             name="service"
//             value={form.service}
//             onChange={handleChange}
//             className="w-full border border-slate-300 rounded px-3 py-2 focus:outline-none focus:border-brand-500"
//           >
//             <option>New ICEGATE Registration</option>
//             <option>AD Code Registration</option>
//             <option>e-Sanchit Registration</option>
//             <option>DSC Update on ICEGATE</option>
//           </select>
//         </div>

//         {/* Port Name */}
//         <div className="mb-4">
//           <label className="block text-sm font-semibold mb-1">
//             Port Name (Optional)
//           </label>
//           <input
//             type="text"
//             name="port"
//             value={form.port}
//             onChange={handleChange}
//             placeholder="e.g. Nhava Sheva (INNSA1)"
//             className="w-full border border-slate-300 rounded px-3 py-2 focus:outline-none focus:border-brand-500"
//           />
//         </div>

//         {/* Mobile Number */}
//         <div className="mb-4">
//           <label className="block text-sm font-semibold mb-1">
//             Mobile Number
//           </label>
//           <input
//             type="tel"
//             name="mobile"
//             value={form.mobile}
//             onChange={handleChange}
//             placeholder="+917400096950"
//             className="w-full border border-slate-300 rounded px-3 py-2 focus:outline-none focus:border-brand-500"
//           />
//         </div>

//         {/* Submit */}
//         <button
//           type="submit"
//           disabled={loading}
//           className={`w-full text-white font-bold py-3 rounded-lg transition ${
//             loading
//               ? "bg-brand-400 cursor-not-allowed"
//               : "bg-brand-600 hover:bg-brand-700"
//           }`}
//         >
//           {loading ? "Submitting..." : "Check Eligibility"}
//         </button>
//       </form>
//     </div>
//   );
// };

// export default QuickForm;



// import { useState } from "react";

// const QuickForm = () => {

//   const [form, setForm] = useState({
//     service: "",
//     port: "",
//     mobile: "",
//   });

//   const [errors, setErrors] = useState({});
//   const [loading, setLoading] = useState(false);

//   const SERVICES = [
//     "New ICEGATE Registration",
//     "AD Code Registration",
//     "e-Sanchit Registration",
//     "DSC Update on ICEGATE",
//   ];

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

//   /* -------------------------
//      VALIDATION FUNCTION
//   -------------------------- */

//   const validate = () => {
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

//   /* -------------------------
//      SUBMIT
//   -------------------------- */

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     const validationErrors = validate();
//     setErrors(validationErrors);

//     if (Object.keys(validationErrors).length > 0) {
//       return;
//     }

//     try {
//       setLoading(true);

//       const response = await fetch(
//         // `${process.env.REACT_APP_API_URL}/api/icegate-registration`,
//         "http://localhost:5000/api/icegate-registration",
//         {
//           method: "POST",
//           headers: { "Content-Type": "application/json" },
//           body: JSON.stringify(form),
//         }
//       );

//       const data = await response.json();

//       if (!response.ok || !data.success) {
//         throw new Error(data.error || data.message);
//       }

//       alert("Request submitted successfully");

//       setForm({
//         service: "",
//         port: "",
//         mobile: "",
//       });

//     } catch (err) {
//       console.error(err);
//       alert("Submission failed");
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="bg-white text-slate-800 rounded-xl shadow-2xl p-6 md:p-8">

//       <h3 className="text-2xl font-bold text-brand-900 mb-2">
//         Customs Compliance Check
//       </h3>

//       <p className="text-slate-500 mb-6 text-sm">
//         Verify your port registration status.
//       </p>

//       <form onSubmit={handleSubmit}>

//         {/* SERVICE */}
//         <div className="mb-4">
//           <label className="block text-sm font-semibold mb-1">
//             Service Required
//           </label>

//           <select
//             name="service"
//             value={form.service}
//             onChange={handleChange}
//             className="w-full border border-slate-300 rounded px-3 py-2"
//           >
//             <option value="">Select Service</option>

//             {SERVICES.map((service) => (
//               <option key={service} value={service}>
//                 {service}
//               </option>
//             ))}
//           </select>

//           {errors.service && (
//             <p className="text-red-500 text-sm mt-1">{errors.service}</p>
//           )}
//         </div>

//         {/* PORT */}
//         <div className="mb-4">
//           <label className="block text-sm font-semibold mb-1">
//             Port Name (Optional)
//           </label>

//           <input
//             type="text"
//             name="port"
//             value={form.port}
//             onChange={handleChange}
//             placeholder="e.g. Nhava Sheva (INNSA1)"
//             className="w-full border border-slate-300 rounded px-3 py-2"
//           />

//           {errors.port && (
//             <p className="text-red-500 text-sm mt-1">{errors.port}</p>
//           )}
//         </div>

//         {/* MOBILE */}
//         <div className="mb-4">
//           <label className="block text-sm font-semibold mb-1">
//             Mobile Number
//           </label>

//           <input
//             type="tel"
//             name="mobile"
//             value={form.mobile}
//             onChange={handleChange}
//             placeholder="9876543210"
//             className="w-full border border-slate-300 rounded px-3 py-2"
//           />

//           {errors.mobile && (
//             <p className="text-red-500 text-sm mt-1">{errors.mobile}</p>
//           )}
//         </div>

//         {/* SUBMIT */}
//         <button
//           type="submit"
//           disabled={loading}
//           className={`w-full text-white font-bold py-3 rounded-lg transition ${
//             loading
//               ? "bg-brand-400 cursor-not-allowed"
//               : "bg-brand-600 hover:bg-brand-700"
//           }`}
//         >
//           {loading ? "Submitting..." : "Check Eligibility"}
//         </button>

//       </form>
//     </div>
//   );
// };

// export default QuickForm;


//*------------------------*//

import { useState } from "react";

const QuickForm = () => {
  const [form, setForm] = useState({
    service: "",
    port: "",
    mobile: "",
  });

  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);

  // Service options exactly as in your image
  const SERVICES = [
    "New ICEGATE Registration",
    "AD Code Registration",
    "e-Sanchit Registration",
    "DSC Update on ICEGATE",
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;

    // For mobile, only allow digits
    if (name === "mobile") {
      const digitsOnly = value.replace(/\D/g, '').slice(0, 10);
      setForm((prev) => ({
        ...prev,
        [name]: digitsOnly,
      }));
    } else {
      setForm((prev) => ({
        ...prev,
        [name]: value,
      }));
    }

    // Clear error when typing
    setErrors((prev) => ({
      ...prev,
      [name]: "",
    }));
  };

  /* -------------------------
     VALIDATION FUNCTION
  -------------------------- */
  const validate = () => {
    const newErrors = {};

    // Service validation
    if (!form.service) {
      newErrors.service = "Please select a service";
    }

    // Mobile validation
    if (!form.mobile) {
      newErrors.mobile = "Mobile number is required";
    } else if (!/^[6-9]\d{9}$/.test(form.mobile)) {
      newErrors.mobile = "Enter valid 10 digit Indian mobile number";
    }

    return newErrors;
  };

  /* -------------------------
     SUBMIT HANDLER
  -------------------------- */
  const handleSubmit = async (e) => {
    e.preventDefault();

    const validationErrors = validate();
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length > 0) {
      return;
    }

    try {
      setLoading(true);

      // Prepare payload - ONLY service, port, mobile
      const payload = {
        service: form.service,
        mobile: form.mobile,
        type: "QUICK_FORM", // This identifies it's from QuickForm
        ...(form.port && { port: form.port }), // Only include port if provided
      };

      console.log("📤 Sending data:", payload);

      const response = await fetch(
        // "http://localhost:5000/api/icegate-registration",
        `${process.env.REACT_APP_API_URL}/api/icegate-registration`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload),
        }
      );

      const data = await response.json();

      if (!response.ok || !data.success) {
        throw new Error(data.error || data.message);
      }

      // Show success message
      alert("✅ Request submitted successfully");

      // Reset form
      setForm({
        service: "",
        port: "",
        mobile: "",
      });

    } catch (err) {
      console.error("❌ Error:", err);
      alert("❌ Submission failed. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-white text-slate-800 rounded-xl shadow-2xl p-6 md:p-8 max-w-md mx-auto">
      {/* Header exactly as in image */}
      <h3 className="text-2xl font-bold text-brand-900 mb-2">
        Customs Compliance Check
      </h3>

      <p className="text-slate-500 mb-6 text-sm">
        Verify your port registration status.
      </p>

      <form onSubmit={handleSubmit}>
        {/* SERVICE FIELD */}
        <div className="mb-4">
          <label className="block text-sm font-semibold mb-1">
            Service Required
          </label>

          <select
            name="service"
            value={form.service}
            onChange={handleChange}
            disabled={loading}
            className="w-full border border-slate-300 rounded px-3 py-2 focus:outline-none focus:border-brand-500"
          >
            <option value="">Select Service</option>
            {SERVICES.map((service) => (
              <option key={service} value={service}>
                {service}
              </option>
            ))}
          </select>

          {errors.service && (
            <p className="text-red-500 text-sm mt-1">{errors.service}</p>
          )}
        </div>

        {/* PORT FIELD */}
        <div className="mb-4">
          <label className="block text-sm font-semibold mb-1">
            Port Name (Optional)
          </label>

          <input
            type="text"
            name="port"
            value={form.port}
            onChange={handleChange}
            disabled={loading}
            placeholder="e.g. Nhava Sheva (INNSA1)"
            className="w-full border border-slate-300 rounded px-3 py-2 focus:outline-none focus:border-brand-500"
          />

          {errors.port && (
            <p className="text-red-500 text-sm mt-1">{errors.port}</p>
          )}
        </div>

        {/* MOBILE FIELD */}
        <div className="mb-6">
          <label className="block text-sm font-semibold mb-1">
            Mobile Number
          </label>

          <div className="relative">
            <span className="absolute left-3 top-2.5 text-slate-500">+91</span>
            <input
              type="tel"
              name="mobile"
              value={form.mobile}
              onChange={handleChange}
              disabled={loading}
              placeholder="9876543210"
              maxLength="10"
              className="w-full border border-slate-300 rounded pl-12 pr-3 py-2 focus:outline-none focus:border-brand-500"
            />
          </div>

          {errors.mobile && (
            <p className="text-red-500 text-sm mt-1">{errors.mobile}</p>
          )}
        </div>

        {/* SUBMIT BUTTON */}
        <button
          type="submit"
          disabled={loading}
          className={`w-full text-white font-bold py-3 rounded-lg transition ${
            loading
              ? "bg-brand-400 cursor-not-allowed"
              : "bg-brand-600 hover:bg-brand-700"
          }`}
        >
          {loading ? "Submitting..." : "Check Eligibility"}
        </button>
      </form>
    </div>
  );
};

export default QuickForm;