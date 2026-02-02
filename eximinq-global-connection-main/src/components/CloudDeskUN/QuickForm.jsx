import { useState } from "react";
import { AlertTriangle, Phone } from "lucide-react";

const Fees = ({ onSubmit }) => {
  const [form, setForm] = useState({
    unNumber: "",
    packagingType: "",
    mobile: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.unNumber || !form.packagingType || !form.mobile) return;

    onSubmit?.(form);

    alert(
      "We will assess your product’s UN Number and recommend the correct packaging group."
    );

    setForm({
      unNumber: "",
      packagingType: "",
      mobile: "",
    });
  };

  return (
    <div className="bg-white text-slate-800 rounded-xl shadow-2xl p-6 md:p-8">
      {/* Heading */}
      <div className="flex items-center gap-3 mb-2">
        <AlertTriangle className="text-brand-600" size={26} />
        <h3 className="text-2xl font-bold text-brand-900">
          DG Cargo Assessment
        </h3>
      </div>

      <p className="text-slate-500 mb-6 text-sm">
        Find the required Packaging Group for your product.
      </p>

      <form onSubmit={handleSubmit}>
        {/* UN Number */}
        <div className="mb-4">
          <label className="block text-sm font-semibold mb-1">
            UN Number / Name
          </label>
          <input
            type="text"
            name="unNumber"
            value={form.unNumber}
            onChange={handleChange}
            placeholder="e.g. UN 1263 (Paint) / Class 3"
            className="w-full border border-slate-300 rounded px-3 py-2 focus:outline-none focus:border-brand-500"
          />
        </div>

        {/* Packaging Type */}
        <div className="mb-4">
          <label className="block text-sm font-semibold mb-1">
            Packaging Type
          </label>
          <select
            name="packagingType"
            value={form.packagingType}
            onChange={handleChange}
            className="w-full border border-slate-300 rounded px-3 py-2 focus:outline-none focus:border-brand-500"
          >
            <option value="">Select packaging</option>
            <option>Drums (Steel / Plastic)</option>
            <option>Boxes (Fibreboard / Wood)</option>
            <option>Jerricans / Bottles</option>
            <option>Intermediate Bulk Container (IBC)</option>
          </select>
        </div>

        {/* Mobile */}
        <div className="mb-6">
          <label className="block text-sm font-semibold mb-1">
            Mobile Number
          </label>
          <div className="relative">
            <Phone
              size={16}
              className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
            />
            <input
              type="tel"
              name="mobile"
              value={form.mobile}
              onChange={handleChange}
              placeholder="+91 74000 96950"
              required
              className="w-full pl-9 border border-slate-300 rounded px-3 py-2 focus:outline-none focus:border-brand-500"
            />
          </div>
        </div>

        {/* Submit */}
        <button
          type="submit"
          className="w-full bg-brand-600 hover:bg-brand-700 text-white font-bold py-3 rounded-lg transition"
        >
          Get Packaging Specification
        </button>
      </form>
    </div>
  );
};

export default Fees;
