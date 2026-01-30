import { ClipboardList, MapPin, Phone } from "lucide-react";

const QuickForm = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Our CHA team will contact you shortly.");
  };

  return (
    <div className="bg-white text-slate-800 rounded-xl shadow-2xl p-6 md:p-8">
      <h3 className="text-2xl font-bold text-brand-900 mb-2">Clearance Enquiry</h3>

      <p className="text-slate-500 mb-6 text-sm">
        Need help with a shipment stuck at customs?
      </p>

      <form onSubmit={handleSubmit}>

        {/* Clearance Type */}
        <div className="mb-4">
          <label className="block text-sm font-semibold mb-1">Clearance Type</label>
          <div className="relative">
            <select className="w-full border border-slate-300 rounded px-3 py-2 pl-10 
              focus:outline-none focus:border-brand-500">
              <option>Select Options </option>
              <option>Import Clearance (Sea)</option>
              <option>Export Factory Stuffing</option>
              <option>Air Cargo Clearance</option>
              <option>Dock Stuffing</option>
              <option>Special Cargo (Reefer/ODC)</option>
              <option>Export Clearance ( Sea )</option>
              <option>Air Cargo Clearance ( Export )</option>
              <option>Air Cargo Clearance ( Import )</option>
            </select>
            <ClipboardList
              size={18}
              className="absolute left-3 top-1/2 -translate-y-1/2 text-brand-600"
            />
          </div>
        </div>

        {/* Port Location */}
        <div className="mb-4">
          <label className="block text-sm font-semibold mb-1">Port Location</label>
          <div className="relative">
            <select className="w-full border border-slate-300 rounded px-3 py-2 pl-10
              focus:outline-none focus:border-brand-500">
              <option>Select Port</option>
              <option>Nhava Sheva (JNPT)</option>
              <option>Mundra</option>
              <option>Chennai</option>
              <option>Delhi Air Cargo</option>
              <option>Mumbai Air Cargo</option>
            </select>
            <MapPin
              size={18}
              className="absolute left-3 top-1/2 -translate-y-1/2 text-brand-600"
            />
          </div>
        </div>

        {/* Mobile Number */}
        <div className="mb-4">
          <label className="block text-sm font-semibold mb-1">Mobile Number</label>
          <div className="relative">
            <input
              type="tel"
              required
              placeholder="+91 74000 96950"
              className="w-full border border-slate-300 rounded px-3 py-2 pl-10 
                focus:outline-none focus:border-brand-500"
            />
            <Phone
              size={18}
              className="absolute left-3 top-1/2 -translate-y-1/2 text-brand-600"
            />
          </div>
        </div>

        {/* Submit */}
        <button
          type="submit"
          className="w-full bg-brand-600 hover:bg-brand-700 text-white font-bold py-3 rounded-lg transition"
        >
          Get Support
        </button>

      </form>
    </div>
  );
};

export default QuickForm;
