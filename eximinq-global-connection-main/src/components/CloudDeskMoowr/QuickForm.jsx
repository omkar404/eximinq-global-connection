import { useState } from "react";

const QuickForm = () => {
  const [form, setForm] = useState({
    service: "New ICEGATE Registration",
    port: "",
    mobile: ""
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("We have received your ICEGATE request.");
  };

  return (
    <div className="bg-white text-slate-800 rounded-xl shadow-2xl p-6 md:p-8">
      <h3 className="text-2xl font-bold text-brand-900 mb-2">
        Customs Compliance Check
      </h3>

      <p className="text-slate-500 mb-6 text-sm">
        Verify your port registration status.
      </p>

      <form onSubmit={handleSubmit}>
        
        {/* Service Required */}
        <div className="mb-4">
          <label className="block text-sm font-semibold mb-1">
            Service Required
          </label>
          <select
            name="service"
            value={form.service}
            onChange={handleChange}
            className="w-full border border-slate-300 rounded px-3 py-2 
                       focus:outline-none focus:border-brand-500"
          >
            <option>New ICEGATE Registration</option>
            <option>AD Code Registration</option>
            <option>e-Sanchit Registration</option>
            <option>DSC Update on ICEGATE</option>
          </select>
        </div>

        {/* Port Name */}
        <div className="mb-4">
          <label className="block text-sm font-semibold mb-1">
            Port Name (Optional)
          </label>
          <input
            type="text"
            name="port"
            value={form.port}
            onChange={handleChange}
            placeholder="e.g. Nhava Sheva (INNSA1)"
            className="w-full border border-slate-300 rounded px-3 py-2 
                       focus:outline-none focus:border-brand-500"
          />
        </div>

        {/* Mobile Number */}
        <div className="mb-4">
          <label className="block text-sm font-semibold mb-1">
            Mobile Number
          </label>
          <input
            type="tel"
            name="mobile"
            value={form.mobile}
            onChange={handleChange}
            placeholder="+917400096950"
            required
            className="w-full border border-slate-300 rounded px-3 py-2 
                       focus:outline-none focus:border-brand-500"
          />
        </div>

        {/* Submit */}
        <button
          type="submit"
          className="w-full bg-brand-600 hover:bg-brand-700 text-white 
                     font-bold py-3 rounded-lg transition"
        >
          Check Eligibility
        </button>

      </form>
    </div>
  );
};

export default QuickForm;
