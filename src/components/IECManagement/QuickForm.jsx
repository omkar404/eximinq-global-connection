// import { useState } from "react";

// const QuickForm = () => {
//   const [form, setForm] = useState({
//     mobile: "",
//     email: "",
//   });

//   const [errors, setErrors] = useState({});
//   const [loading, setLoading] = useState(false);

//   // const handleChange = (e) => {
//   //   setFormData({
//   //     ...formData,
//   //     [e.target.name]: e.target.value
//   //   });
//   // };

//   const handleChange = (e) => {
//     const { name, value } = e.target;

//     if (name === "mobile") {
//       const digitsOnly = value.replace(/\D/g, "").slice(0, 10);
//       setForm((prev) => ({ ...prev, [name]: digitsOnly }));
//     } else {
//       setForm((prev) => ({ ...prev, [name]: value }));
//     }

//     // Clear that field's error on typing
//     setErrors((prev) => ({ ...prev, [name]: "" }));
//   };

//   /*----------------------
//     VALIDATION
//   -----------------------*/
//   const validate = () => {
//     const newErrors = {};

//     if (!form.mobile) {
//       newErrors.mobile = "Mobile number is required";
//     } else if (!/^[6-9]\d{9}$/.test(form.mobile)) {
//       newErrors.mobile = "Enter valid 10 digit Indian mobile number";
//     }

//     return newErrors;
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     const validationErrors = validate();
//     setErrors(validationErrors);

//     if (Object.keys(validationErrors).length > 0) return;

//     setLoading(true);

//     try {
//       const payload = {
//         mobile: form.mobile,
//         email: form.email,
//         type: "QUICK_FORM",
//       };

//       console.log("📤 Sending data:", payload);

//       const response = await fetch(
//         `${process.env.REACT_APP_API_URL}/api/import-export-code`,
//         // `http://localhost:5000/api/import-export-code`,
//         {
//           method: "POST",
//           headers: {"Content-Type": "application/json",},
//           body: JSON.stringify(payload),
//         },
//       );

//       const data = await response.json();

//       if (!response.ok || !data.success) {
//         throw new Error( data.error || data.message || "Something went wrong");
//       }

//       alert("Request submitted successfully");
//       setForm({ mobile: "", email: "" });
//     } catch (error) {
//       alert(error.message);
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="bg-white text-slate-800 rounded-xl shadow-2xl p-6 md:p-8">
//       <h3 className="text-2xl font-bold text-brand-900 mb-2">
//         Get IEC in 24 Hours
//       </h3>

//       <p className="text-slate-500 mb-6 text-sm">
//         Fill the details to get expert call back.
//       </p>

//       <form onSubmit={handleSubmit}>
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
//             className="w-full border border-slate-300 rounded px-3 py-2"
//             required
//           />
//         </div>

//         <div className="mb-4">
//           <label className="block text-sm font-semibold mb-1">
//             Email Address
//           </label>
//           <input
//             type="email"
//             name="email"
//             value={form.email}
//             onChange={handleChange}
//             placeholder="your@company.com"
//             className="w-full border border-slate-300 rounded px-3 py-2"
//             required
//           />
//         </div>

//         <button
//           type="submit"
//           disabled={loading}
//           className="w-full bg-brand-600 hover:bg-brand-700 text-white font-bold py-3 rounded-lg"
//         >
//           {loading ? "Submitting..." : "Apply Now"}
//         </button>
//       </form>
//     </div>
//   );
// };

// export default QuickForm;



import { useState } from "react";

const QuickForm = () => {
  const [form, setForm] = useState({
    mobile: "",
    email: "",
  });

  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);

  // ✅ Removed commented-out dead code that used undefined 'formData'
  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === "mobile") {
      const digitsOnly = value.replace(/\D/g, "").slice(0, 10);
      setForm((prev) => ({ ...prev, [name]: digitsOnly }));
    } else {
      setForm((prev) => ({ ...prev, [name]: value }));
    }

    setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const validate = () => {
    const newErrors = {};

    if (!form.mobile) {
      newErrors.mobile = "Mobile number is required";
    } else if (!/^[6-9]\d{9}$/.test(form.mobile)) {
      newErrors.mobile = "Enter valid 10 digit Indian mobile number";
    }

    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const validationErrors = validate();
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length > 0) return;

    setLoading(true);

    try {
      const payload = {
        mobile: form.mobile,
        email: form.email,
        type: "QUICK_FORM",
      };

      console.log("📤 Sending data:", payload);

      const response = await fetch(
        // `${process.env.REACT_APP_API_URL}/api/import-export-code`,
        "http://localhost:5000/api/import-export-code",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload),
        }
      );

      const data = await response.json();

      if (!response.ok || !data.success) {
        throw new Error(data.error || data.message || "Something went wrong");
      }

      alert("✅ Request submitted successfully");
      setForm({ mobile: "", email: "" });

    } catch (error) {
      alert(`❌ ${error.message}`);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-white text-slate-800 rounded-xl shadow-2xl p-6 md:p-8">
      <h3 className="text-2xl font-bold text-brand-900 mb-2">
        Get IEC in 24 Hours
      </h3>
      <p className="text-slate-500 mb-6 text-sm">
        Fill the details to get expert call back.
      </p>

      <form onSubmit={handleSubmit}>

        {/* Mobile */}
        <div className="mb-4">
          <label className="block text-sm font-semibold mb-1">
            Mobile Number
          </label>
          <input
            type="tel"
            name="mobile"
            value={form.mobile}
            onChange={handleChange}
            placeholder="+91 74000 96950"
            maxLength={10}
            className={`w-full border rounded px-3 py-2 ${
              errors.mobile ? "border-red-500" : "border-slate-300"
            }`}
          />
          {errors.mobile && (
            <p className="text-red-500 text-xs mt-1">{errors.mobile}</p>
          )}
        </div>

        {/* Email */}
        <div className="mb-4">
          <label className="block text-sm font-semibold mb-1">
            Email Address
          </label>
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            placeholder="your@company.com"
            className="w-full border border-slate-300 rounded px-3 py-2"
          />
        </div>

        <button
          type="submit"
          disabled={loading}
          className={`w-full text-white font-bold py-3 rounded-lg transition ${
            loading
              ? "bg-brand-400 cursor-not-allowed"
              : "bg-brand-600 hover:bg-brand-700"
          }`}
        >
          {loading ? "Submitting..." : "Apply Now"}
        </button>

      </form>
    </div>
  );
};

export default QuickForm;