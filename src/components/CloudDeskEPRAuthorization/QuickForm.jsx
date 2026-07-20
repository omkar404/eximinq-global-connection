// import { ShieldCheck, Phone, Factory, Recycle } from "lucide-react";

// const QuickForm = () => {
//   return (
//     <div className="bg-white text-slate-800 rounded-xl shadow-2xl p-6 md:p-8">
      
//       {/* Header */}
//       <h3 className="text-2xl font-bold text-brand-900 mb-2 flex items-center gap-2">
//         <ShieldCheck className="w-6 h-6 text-brand-600" />
//         Compliance Check
//       </h3>

//       <p className="text-slate-500 mb-6 text-sm">Are you a PIBO?</p>

//       {/* Form */}
//       <form
//         onSubmit={(e) => {
//           e.preventDefault();
//           alert("We will calculate your EPR target and contact you.");
//         }}
//       >
//         {/* Business Type */}
//         <div>
//           <label className="block text-sm font-semibold mb-1">Business Type</label>
//           <div className="relative">
//             <select className="w-full border border-slate-300 rounded px-3 py-2 pr-10 focus:outline-none focus:border-brand-500">
//               <option>Importer</option>
//               <option>Manufacturer / Producer</option>
//               <option>Brand Owner</option>
//               <option>Recycler</option>
//             </select>
//             <Factory className="w-4 h-4 absolute right-3 top-3 text-slate-400 pointer-events-none" />
//           </div>
//         </div>

//         {/* Waste Category */}
//         <div>
//           <label className="block text-sm font-semibold mb-1">Waste Category</label>
//           <div className="relative">
//             <select className="w-full border border-slate-300 rounded px-3 py-2 pr-10 focus:outline-none focus:border-brand-500">
//               <option>Plastic Packaging</option>
//               <option>Electronics (E-Waste)</option>
//               <option>Batteries (Lead/Li-ion)</option>
//               <option>Tyres (Waste/New)</option>
//             </select>
//             <Recycle className="w-4 h-4 absolute right-3 top-3 text-slate-400 pointer-events-none" />
//           </div>
//         </div>

//         {/* Mobile Number */}
//         <div>
//           <label className="block text-sm font-semibold mb-1">Mobile Number</label>
//           <div className="relative">
//             <input
//               type="tel"
//               className="w-full border border-slate-300 rounded px-3 py-2 pr-10 focus:outline-none focus:border-brand-500"
//               placeholder="+91 74000 96950"
//               required
//             />
//             <Phone className="w-4 h-4 absolute right-3 top-3 text-slate-400 pointer-events-none" />
//           </div>
//         </div>

//         {/* Button */}
//         <button
//           type="submit"
//           className="w-full bg-brand-600 hover:bg-brand-700 text-white font-bold py-3 rounded-lg transition"
//         >
//           Get EPR Quote
//         </button>
//       </form>
//     </div>
//   );
// };

// export default QuickForm;

import { useState } from "react";
import {
  Building2,
  Factory,
  Mail,
  Phone,
  Recycle,
  ShieldCheck,
  User,
} from "lucide-react";
import { submitServiceQuickForm } from "../../utils/submitServiceQuickForm";

const QuickForm = () => {
  const [form, setForm] = useState({
    companyName: "",
    contactPersonName: "",
    email: "",
    businessType: "",
    wasteCategory: "",
    mobile: "",
  });

  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === "mobile") {
      const digitsOnly = value.replace(/\D/g, "").slice(0, 10);
      setForm((prev) => ({ ...prev, [name]: digitsOnly }));
    } else {
      setForm((prev) => ({ ...prev, [name]: value }));
    }

    // Clear error for this field
    setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  /* VALIDATION */
  const validate = () => {
    const newErrors = {};

    if (!form.companyName.trim()) {
      newErrors.companyName = "Company name is required";
    }

    if (!form.contactPersonName.trim()) {
      newErrors.contactPersonName = "Contact person name is required";
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!form.email.trim()) {
      newErrors.email = "Email ID is required";
    } else if (!emailRegex.test(form.email.trim())) {
      newErrors.email = "Enter a valid email ID";
    }

    if (!form.businessType) {
      newErrors.businessType = "Please select a business type";
    }

    if (!form.wasteCategory) {
      newErrors.wasteCategory = "Please select a waste category";
    }

    if (!form.mobile) {
      newErrors.mobile = "Mobile number is required";
    } else if (!/^[6-9]\d{9}$/.test(form.mobile)) {
      newErrors.mobile = "Enter valid 10 digit Indian mobile number";
    }

    return newErrors;
  };

  /* SUBMIT HANDLER */
  const handleSubmit = async (e) => {
    e.preventDefault();

    const validationErrors = validate();
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length > 0) return;

    setLoading(true);

    try {
      const payload = {
        serviceKey: "epr-authorization",
        serviceLabel: "EPR Authorization Compliance Check",
        companyName: form.companyName.trim(),
        contactPersonName: form.contactPersonName.trim(),
        email: form.email.trim(),
        mobile: form.mobile.trim(),
        type: "QUICK_FORM",
        source: "EPR Authorization Compliance Check",
        details: {
          "Company Name": form.companyName.trim(),
          "Contact Person Name": form.contactPersonName.trim(),
          "Email ID": form.email.trim(),
          "Business Type": form.businessType,
          "Waste Category": form.wasteCategory,
          "Mobile Number": form.mobile.trim(),
        },
      };

      console.log("📤 Sending data:", payload);

      await submitServiceQuickForm(payload);

      alert("✅ EPR quote request submitted successfully");

      // Reset form
      setForm({
        companyName: "",
        contactPersonName: "",
        email: "",
        businessType: "",
        wasteCategory: "",
        mobile: "",
      });
    } catch (err) {
      console.error("❌ Error:", err);
      alert(`❌ Submission failed: ${err.message}`);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-white text-slate-800 rounded-xl shadow-2xl p-6 md:p-8">
      {/* Header */}
      <h3 className="text-2xl font-bold text-brand-900 mb-2 flex items-center gap-2">
        <ShieldCheck className="w-6 h-6 text-brand-600" />
        Compliance Check
      </h3>

      <p className="text-slate-500 mb-6 text-sm">Are you a PIBO?</p>

      {/* Form */}
      <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Company Name */}
        <div>
          <label className="block text-sm font-semibold mb-1">
            Company Name
          </label>
          <div className="relative">
            <Building2
              size={16}
              className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
            />
            <input
              type="text"
              name="companyName"
              value={form.companyName}
              onChange={handleChange}
              placeholder="Enter company name"
              className={`w-full pl-9 border rounded px-3 py-2 focus:outline-none focus:border-brand-500 ${
                errors.companyName ? "border-red-500" : "border-slate-300"
              }`}
            />
          </div>
          {errors.companyName && (
            <p className="text-red-500 text-xs mt-1">{errors.companyName}</p>
          )}
        </div>

        {/* Contact Person Name */}
        <div>
          <label className="block text-sm font-semibold mb-1">
            Contact Person Name
          </label>
          <div className="relative">
            <User
              size={16}
              className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
            />
            <input
              type="text"
              name="contactPersonName"
              value={form.contactPersonName}
              onChange={handleChange}
              placeholder="Enter contact person name"
              className={`w-full pl-9 border rounded px-3 py-2 focus:outline-none focus:border-brand-500 ${
                errors.contactPersonName
                  ? "border-red-500"
                  : "border-slate-300"
              }`}
            />
          </div>
          {errors.contactPersonName && (
            <p className="text-red-500 text-xs mt-1">
              {errors.contactPersonName}
            </p>
          )}
        </div>

        {/* Email ID */}
        <div>
          <label className="block text-sm font-semibold mb-1">Email ID</label>
          <div className="relative">
            <Mail
              size={16}
              className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
            />
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="official@company.com"
              className={`w-full pl-9 border rounded px-3 py-2 focus:outline-none focus:border-brand-500 ${
                errors.email ? "border-red-500" : "border-slate-300"
              }`}
            />
          </div>
          {errors.email && (
            <p className="text-red-500 text-xs mt-1">{errors.email}</p>
          )}
        </div>

        {/* Business Type */}
        <div>
          <label className="block text-sm font-semibold mb-1">
            Business Type
          </label>
          <div className="relative">
            <select
              name="businessType"
              value={form.businessType}
              onChange={handleChange}
              className={`w-full border rounded px-3 py-2 pr-10 focus:outline-none focus:border-brand-500 ${
                errors.businessType ? "border-red-500" : "border-slate-300"
              }`}
            >
              <option value="">Select business type</option>
              <option>Importer</option>
              <option>Manufacturer / Producer</option>
              <option>Brand Owner</option>
              <option>Recycler</option>
            </select>
            <Factory className="w-4 h-4 absolute right-3 top-3 text-slate-400 pointer-events-none" />
          </div>
          {errors.businessType && (
            <p className="text-red-500 text-xs mt-1">{errors.businessType}</p>
          )}
        </div>

        {/* Waste Category */}
        <div>
          <label className="block text-sm font-semibold mb-1">
            Waste Category
          </label>
          <div className="relative">
            <select
              name="wasteCategory"
              value={form.wasteCategory}
              onChange={handleChange}
              className={`w-full border rounded px-3 py-2 pr-10 focus:outline-none focus:border-brand-500 ${
                errors.wasteCategory ? "border-red-500" : "border-slate-300"
              }`}
            >
              <option value="">Select waste category</option>
              <option>Plastic Packaging</option>
              <option>Electronics (E-Waste)</option>
              <option>Batteries (Lead/Li-ion)</option>
              <option>Tyres (Waste/New)</option>
            </select>
            <Recycle className="w-4 h-4 absolute right-3 top-3 text-slate-400 pointer-events-none" />
          </div>
          {errors.wasteCategory && (
            <p className="text-red-500 text-xs mt-1">{errors.wasteCategory}</p>
          )}
        </div>

        {/* Mobile Number */}
        <div>
          <label className="block text-sm font-semibold mb-1">
            Mobile Number
          </label>
          <div className="relative">
            <input
              type="tel"
              name="mobile"
              value={form.mobile}
              onChange={handleChange}
              className={`w-full border rounded px-3 py-2 pr-10 focus:outline-none focus:border-brand-500 ${
                errors.mobile ? "border-red-500" : "border-slate-300"
              }`}
              placeholder="9876543210"
              maxLength={10}
            />
            <Phone className="w-4 h-4 absolute right-3 top-3 text-slate-400 pointer-events-none" />
          </div>
          {errors.mobile && (
            <p className="text-red-500 text-xs mt-1">{errors.mobile}</p>
          )}
        </div>

        {/* Button */}
        <button
          type="submit"
          disabled={loading}
          className={`w-full md:col-span-2 text-white font-bold py-3 rounded-lg transition ${
            loading
              ? "bg-brand-400 cursor-not-allowed"
              : "bg-brand-600 hover:bg-brand-700"
          }`}
        >
          {loading ? "Submitting..." : "Get EPR Quote"}
        </button>
      </form>
    </div>
  );
};

export default QuickForm;
