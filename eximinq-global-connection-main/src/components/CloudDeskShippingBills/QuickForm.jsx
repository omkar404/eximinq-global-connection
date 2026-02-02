import { SendHorizontal } from "lucide-react";

const QuickForm = () => {
  return (
    <div className="bg-white text-slate-800 rounded-xl shadow-2xl p-6 md:p-8">
      
      {/* Heading */}
      <h3 className="text-2xl font-bold text-brand-900 mb-2">
        Get Export Quote
      </h3>
      <p className="text-slate-500 mb-6 text-sm">
        Need help with Drawback rates?
      </p>

      {/* Form */}
      <form
        onSubmit={(e) => {
          e.preventDefault();
          alert("We will contact you shortly regarding your export shipment.");
        }}
      >
        {/* Port of Loading */}
        <div className="mb-4">
          <label className="block text-sm font-semibold mb-1">
            Port of Loading
          </label>
          <select className="w-full border border-slate-300 rounded px-3 py-2 focus:outline-none focus:border-brand-500">
            <option>Nhava Sheva (Sea)</option>
            <option>Mundra (Sea)</option>
            <option>Delhi / Mumbai (Air)</option>
            <option>Chennai / Kolkata</option>
            <option>Others / ICD</option>
          </select>
        </div>

        {/* Incentive Type */}
        <div className="mb-4">
          <label className="block text-sm font-semibold mb-1">
            Incentive Type
          </label>
          <select className="w-full border border-slate-300 rounded px-3 py-2 focus:outline-none focus:border-brand-500">
            <option>Duty Drawback</option>
            <option>RoDTEP</option>
            <option>Advance Authorization</option>
            <option>Free / Only GST</option>
          </select>
        </div>

        {/* Mobile Number */}
        <div className="mb-4">
          <label className="block text-sm font-semibold mb-1">
            Mobile Number
          </label>
          <input
            type="tel"
            className="w-full border border-slate-300 rounded px-3 py-2 focus:outline-none focus:border-brand-500"
            placeholder="+91 74000 96950"
            required
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-brand-600 hover:bg-brand-700 text-white font-bold py-3 rounded-lg transition flex items-center justify-center gap-2"
        >
          <SendHorizontal size={18} />
          Get Estimate
        </button>
      </form>
    </div>
  );
};

export default QuickForm;
