// import { Truck } from "lucide-react";

// const QuickForm = () => {
//   const handleSubmit = (e) => {
//     e.preventDefault();
//     alert("We have received your transport request.");
//   };

//   return (
//     <div className="bg-white text-slate-800 rounded-xl shadow-2xl p-6 md:p-8">
//       {/* Header */}
//       <div className="flex items-center justify-between mb-6">
//         <h3 className="text-2xl font-bold text-brand-900 flex items-center gap-2">
//           <Truck className="text-brand-600" size={28} />
//           Transport Enquiry
//         </h3>
//       </div>

//       <p className="text-slate-500 mb-6 text-sm">
//         Instant quotes for Full Truck Load (FTL) & Containers.
//       </p>

//       {/* Form */}
//       <form onSubmit={handleSubmit}>
//         {/* Row 1 */}
//         <div className="grid grid-cols-2 gap-4 mb-4">
//           <div>
//             <label className="block text-xs font-semibold mb-1 text-slate-500 uppercase">
//               Pick-up City/Port
//             </label>
//             <input
//               type="text"
//               className="w-full border border-slate-300 rounded px-3 py-2 focus:outline-none focus:border-brand-500"
//               placeholder="e.g. Nhava Sheva"
//             />
//           </div>

//           <div>
//             <label className="block text-xs font-semibold mb-1 text-slate-500 uppercase">
//               Port Location
//             </label>
//             <input
//               type="text"
//               className="w-full border border-slate-300 rounded px-3 py-2 focus:outline-none focus:border-brand-500"
//               placeholder="e.g. Pune Factory"
//             />
//           </div>
//         </div>

//         {/* Vehicle Type */}
//         <div className="mb-4">
//           <label className="block text-sm font-semibold mb-1">
//             Vehicle Type
//           </label>
//           <select className="w-full border border-slate-300 rounded px-3 py-2 focus:outline-none focus:border-brand-500">
//             <option>40ft High Bed Trailer</option>
//             <option>20ft Container Trailer</option>
//             <option>Low Bed (ODC Cargo)</option>
//             <option>Closed Body Truck (LCL)</option>
//           </select>
//         </div>

//         {/* Mobile Number */}
//         <div className="mb-4">
//           <label className="block text-sm font-semibold mb-1">
//             Mobile Number
//           </label>
//           <input
//             type="tel"
//             required
//             className="w-full border border-slate-300 rounded px-3 py-2 focus:outline-none focus:border-brand-500"
//             placeholder="+91 74000 96950"
//           />
//         </div>

//         {/* Submit Button */}
//         <button
//           type="submit"
//           className="w-full bg-brand-600 hover:bg-brand-700 text-white font-bold py-3 rounded-lg transition"
//         >
//           Check Availability
//         </button>
//       </form>
//     </div>
//   );
// };

// export default QuickForm;

import { useState } from "react";
import { Truck } from "lucide-react";

const QuickForm = () => {
  const [form, setForm] = useState({
    mode: "pickup",         // "pickup" or "drop"
    pickupLocation: "",     // used when mode = "pickup"
    dropLocation: "",       // used when mode = "drop"
    portYardIcd: "",
    vehicleType: "",
    mobile: "",
  });

  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);

  const setMode = (mode) => {
    setForm((prev) => ({ ...prev, mode }));
    // Clear errors for location fields when mode changes
    setErrors((prev) => ({ ...prev, pickupLocation: "", dropLocation: "" }));
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === "mobile") {
      const digitsOnly = value.replace(/\D/g, "").slice(0, 10);
      setForm((prev) => ({ ...prev, [name]: digitsOnly }));
    } else {
      setForm((prev) => ({ ...prev, [name]: value }));
    }

    // Clear that field's error on typing
    setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  /*----------------------
    VALIDATION
  -----------------------*/
  const validate = () => {
    const newErrors = {};

    // Location depends on mode
    if (form.mode === "pickup" && !form.pickupLocation) {
      newErrors.pickupLocation = "Pick-up location is required";
    }
    if (form.mode === "drop" && !form.dropLocation) {
      newErrors.dropLocation = "Drop location is required";
    }

    if (!form.portYardIcd) {
      newErrors.portYardIcd = "Port / Yard / ICD is required";
    }
    if (!form.vehicleType) {
      newErrors.vehicleType = "Please select a vehicle type";
    }
    if (!form.mobile) {
      newErrors.mobile = "Mobile number is required";
    } else if (!/^[6-9]\d{9}$/.test(form.mobile)) {
      newErrors.mobile = "Enter valid 10 digit Indian mobile number";
    }

    return newErrors;
  };

  /*----------------------
    SUBMIT HANDLER (API CALL)
  -----------------------*/
  const handleSubmit = async (e) => {
    e.preventDefault();

    const validationErrors = validate();
    setErrors(validationErrors);
    if (Object.keys(validationErrors).length > 0) return;

    setLoading(true);

    try {
      const payload = {
        mode: form.mode,
        pickupLocation: form.pickupLocation,
        dropLocation: form.dropLocation,
        portYardIcd: form.portYardIcd,
        vehicleType: form.vehicleType,
        mobile: form.mobile,
        type: "QUICK_FORM",
      };

      console.log("📤 Sending data:", payload);

      const response = await fetch(
        `${process.env.REACT_APP_API_URL}/api/inland-transportation`,
        // "http://localhost:5000/api/inland-transportation", // ✅ http:// is required        
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

      alert("✅ Transport enquiry submitted successfully");

      // Reset form (keep mode as "pickup")
      setForm({
        mode: "pickup",
        pickupLocation: "",
        dropLocation: "",
        portYardIcd: "",
        vehicleType: "",
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
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-2xl font-bold text-brand-900 flex items-center gap-2">
          <Truck className="text-brand-600" size={28} />
          Transport Enquiry
        </h3>

        {/* Pickup / Drop Toggle */}
        <div className="flex gap-2">
          <button
            type="button"
            onClick={() => setMode("pickup")}
            className={`text-xs px-3 py-1 rounded font-bold ${
              form.mode === "pickup"
                ? "bg-brand-100 text-brand-700"
                : "bg-slate-100 text-slate-600"
            }`}
          >
            Pickup
          </button>

          <button
            type="button"
            onClick={() => setMode("drop")}
            className={`text-xs px-3 py-1 rounded font-bold ${
              form.mode === "drop"
                ? "bg-brand-100 text-brand-700"
                : "bg-slate-100 text-slate-600"
            }`}
          >
            Drop
          </button>
        </div>
      </div>

      <p className="text-slate-500 mb-6 text-sm">
        Instant quotes for Full Truck Load (FTL) & Containers.
      </p>

      <form onSubmit={handleSubmit}>
        {/* Locations – dynamic label & field */}
        <div className="grid grid-cols-2 gap-4 mb-4">
          <div>
            <label className="block text-xs font-semibold mb-1 text-slate-500 uppercase">
              {form.mode === "pickup" ? "Pick-up Location" : "Drop Location"}
            </label>
            <input
              type="text"
              name={form.mode === "pickup" ? "pickupLocation" : "dropLocation"}
              value={form.mode === "pickup" ? form.pickupLocation : form.dropLocation}
              onChange={handleChange}
              className={`w-full border rounded px-3 py-2 focus:outline-none focus:border-brand-500 ${
                (form.mode === "pickup" && errors.pickupLocation) ||
                (form.mode === "drop" && errors.dropLocation)
                  ? "border-red-500"
                  : "border-slate-300"
              }`}
              placeholder={
                form.mode === "pickup"
                  ? "e.g. Factory / Warehouse"
                  : "e.g. Customer Location"
              }
            />
            {form.mode === "pickup" && errors.pickupLocation && (
              <p className="text-red-500 text-xs mt-1">{errors.pickupLocation}</p>
            )}
            {form.mode === "drop" && errors.dropLocation && (
              <p className="text-red-500 text-xs mt-1">{errors.dropLocation}</p>
            )}
          </div>

          <div>
            <label className="block text-xs font-semibold mb-1 text-slate-500 uppercase">
              Port / Yard / ICD
            </label>
            <input
              type="text"
              name="portYardIcd"
              value={form.portYardIcd}
              onChange={handleChange}
              className={`w-full border rounded px-3 py-2 focus:outline-none focus:border-brand-500 ${
                errors.portYardIcd ? "border-red-500" : "border-slate-300"
              }`}
              placeholder="e.g. Nhava Sheva / ICD Tughlakabad"
            />
            {errors.portYardIcd && (
              <p className="text-red-500 text-xs mt-1">{errors.portYardIcd}</p>
            )}
          </div>
        </div>

        {/* Vehicle Type */}
        <div className="mb-4">
          <label className="block text-sm font-semibold mb-1">
            Vehicle Type
          </label>
          <select
            name="vehicleType"
            value={form.vehicleType}
            onChange={handleChange}
            className={`w-full border rounded px-3 py-2 focus:outline-none focus:border-brand-500 ${
              errors.vehicleType ? "border-red-500" : "border-slate-300"
            }`}
          >
            <option value="">Select Vehicle</option>
            <option>40ft High Bed Trailer</option>
            <option>20ft Container Trailer</option>
            <option>Low Bed (ODC Cargo)</option>
            <option>Closed Body Truck (LCL)</option>
          </select>
          {errors.vehicleType && (
            <p className="text-red-500 text-xs mt-1">{errors.vehicleType}</p>
          )}
        </div>

        {/* Mobile Number */}
        <div className="mb-6">
          <label className="block text-sm font-semibold mb-1">
            Mobile Number
          </label>
          <input
            type="tel"
            name="mobile"
            value={form.mobile}
            onChange={handleChange}
            className={`w-full border rounded px-3 py-2 focus:outline-none focus:border-brand-500 ${
              errors.mobile ? "border-red-500" : "border-slate-300"
            }`}
            placeholder="e.g. 9876543210"
            maxLength={10}
          />
          {errors.mobile && (
            <p className="text-red-500 text-xs mt-1">{errors.mobile}</p>
          )}
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          disabled={loading}
          className={`w-full text-white font-bold py-3 rounded-lg transition ${
            loading
              ? "bg-brand-400 cursor-not-allowed"
              : "bg-brand-600 hover:bg-brand-700"
          }`}
        >
          {loading ? "Submitting..." : "Check Availability"}
        </button>
      </form>
    </div>
  );
};

export default QuickForm;