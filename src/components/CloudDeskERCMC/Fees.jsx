const Fees = ({setShowEnrollModal}) => {
  return (
    <section id="process" className="py-20 bg-slate-50">
      <div className="container mx-auto px-4 text-center">

        {/* Heading */}
        <h2 className="text-3xl font-bold text-slate-900 mb-8">
          Professional Fees
        </h2>

        {/* PRICE CARD */}
        <div className="max-w-md mx-auto bg-white rounded-xl shadow-lg overflow-hidden border border-slate-200">
          
          {/* Header */}
          <div className="bg-brand-900 text-white py-4">
            <h3 className="text-xl font-bold">E-RCMC Issuance</h3>
            <p className="text-sm opacity-80">Consultancy & Filing Charges</p>
          </div>

          {/* Body */}
          <div className="p-8">
            <div className="text-4xl font-bold text-slate-900 mb-2">₹ 2,500</div>
            <p className="text-slate-500 text-sm mb-6">
              + GST (Excluding Council Fees)
            </p>

            {/* Services List */}
            <ul className="text-left space-y-3 mb-8 text-sm text-slate-600 pl-8">
              <li className="flex gap-2">
                <i className="fas fa-check text-green-500"></i> Council Selection Advice
              </li>
              <li className="flex gap-2">
                <i className="fas fa-check text-green-500"></i> HSN Code Mapping
              </li>
              <li className="flex gap-2">
                <i className="fas fa-check text-green-500"></i> DGFT Portal Filing
              </li>
              <li className="flex gap-2">
                <i className="fas fa-check text-green-500"></i> Document Upload
              </li>
              <li className="flex gap-2">
                <i className="fas fa-check text-green-500"></i> Follow-up for Approval
              </li>
            </ul>

            {/* CTA */}
              <button
                onClick={() =>
                  setShowEnrollModal({
                    open: true,
                    type: "IEC_PROFILE_UPDATE",
                  })
                }
                className="block w-full bg-brand-600 text-white font-bold py-3 rounded-lg mt-6 hover:bg-brand-700 transition"
              >
                Start Registration
              </button>
          </div>
        </div>

        {/* Note */}
        <p className="text-sm text-slate-500 mt-6">
          *Note: Official Government/Council membership fees are payable directly on the portal at actuals.
        </p>

      </div>
    </section>

  );
};

export default Fees;
