import { useState } from "react";

const QuickForm = ({ onSubmit }) => {
  const [form, setForm] = useState({
    businessType: "OEM (Manufacturer)",
    productCategory: "",
    mobile: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.mobile) return;

    onSubmit?.(form);

    // same intent as original inline alert
    alert("We will analyze your GeM potential and contact you.");

    setForm({
      businessType: "OEM (Manufacturer)",
      productCategory: "",
      mobile: "",
    });
  };

  return (
    <div className="bg-white text-slate-800 rounded-xl shadow-2xl p-6 md:p-8">
      <h3 className="text-2xl font-bold text-gov-900 mb-2">
        Seller Assessment
      </h3>
      <p className="text-slate-500 mb-6 text-sm">
        Determine your seller category.
      </p>

      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-sm font-semibold mb-1">
            Business Type
          </label>
          <select
            name="businessType"
            value={form.businessType}
            onChange={handleChange}
            className="w-full border border-slate-300 rounded px-3 py-2 focus:outline-none focus:border-brand-500"
          >
            <option>OEM (Manufacturer)</option>
            <option>Reseller (Authorized Dealer)</option>
            <option>Service Provider (Manpower/Taxi etc.)</option>
          </select>
        </div>

        <div className="mb-4">
          <label className="block text-sm font-semibold mb-1">
            Product Category
          </label>
          <input
            type="text"
            name="productCategory"
            value={form.productCategory}
            onChange={handleChange}
            placeholder="e.g. Computers / Furniture / Office Supplies"
            className="w-full border border-slate-300 rounded px-3 py-2 focus:outline-none focus:border-brand-500"
          />
        </div>

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
            required
            className="w-full border border-slate-300 rounded px-3 py-2 focus:outline-none focus:border-brand-500"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-brand-600 hover:bg-brand-700 text-white font-bold py-3 rounded-lg transition"
        >
          Verify Profile
        </button>
      </form>
    </div>
  );
};

export default QuickForm;
