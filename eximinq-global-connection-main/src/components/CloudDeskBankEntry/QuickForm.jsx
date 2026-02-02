const QuickForm = ({ formType = "Quick Form" }) => {
  const handleSubmit = (e) => {
    e.preventDefault();

    const payload = {
      type: formType,
      // later you can add port, cargo, mobile
    };

    console.log(payload);
    alert("We will calculate duty and contact you.");
  };

  return (
    <div className="bg-white text-slate-800 rounded-xl shadow-2xl p-6 md:p-8">
      <h3 className="text-2xl font-bold text-brand-900 mb-2">{formType}</h3>

      <p className="text-slate-500 mb-6 text-sm">
        Need help with HS Code or Duty?
      </p>

      <form onSubmit={handleSubmit}>
        {/* HIDDEN TYPE FIELD */}
        <input type="hidden" name="type" value={formType} />

        {/* Port Selection */}
        <div className="mb-4">
          <label className="block text-sm font-semibold mb-1">
            Port of Import
          </label>
          <select className="w-full border border-slate-300 rounded px-3 py-2">
            <option>Nhava Sheva (Sea)</option>
            <option>Mumbai Air Cargo</option>
            <option>Delhi Air Cargo</option>
            <option>Chennai / Mundra</option>
            <option>Others</option>
          </select>
        </div>

        {/* Cargo Type */}
        <div className="mb-4">
          <label className="block text-sm font-semibold mb-1">
            Nature of Cargo
          </label>
          <input
            type="text"
            placeholder="e.g. Machinery parts, Fabric"
            className="w-full border border-slate-300 rounded px-3 py-2"
          />
        </div>

        {/* Mobile */}
        <div className="mb-4">
          <label className="block text-sm font-semibold mb-1">
            Mobile Number
          </label>
          <input
            type="tel"
            required
            placeholder="+91 74000 96950"
            className="w-full border border-slate-300 rounded px-3 py-2"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-brand-600 hover:bg-brand-700 text-white font-bold py-3 rounded-lg"
        >
          Get Estimate
        </button>
      </form>
    </div>
  );
};

export default QuickForm;
