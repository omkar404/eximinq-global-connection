const Fees = ({ setShowEnrollModal }) => {
  return (
    <section id="pricing" className="py-20 bg-slate-50">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold text-slate-900 mb-8">
          Professional Fees
        </h2>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Card 1 */}
          <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-slate-200">
            <div className="bg-brand-800 text-white py-4">
              <h3 className="text-xl font-bold">ICEGATE Registration</h3>
              <p className="text-sm opacity-80">
                New ID Creation + DSC Linking
              </p>
            </div>

            <div className="p-8">
              <div className="text-4xl font-bold text-slate-900 mb-2">
                ₹ 2,000
              </div>
              <p className="text-slate-500 text-sm mb-6">+ GST</p>

              <ul className="text-left space-y-3 mb-8 text-sm text-slate-600">
                <li>✔ ICEGATE ID Creation</li>
                <li>✔ Profile Validation</li>
                <li>✔ Digital Signature Mapping</li>
                <li>✔ Common Signer Utility Setup</li>
              </ul>

              <button
                onClick={() =>
                  setShowEnrollModal({
                    open: true,
                    type: "ICEGATE_REGISTRATION",
                  })
                }
                className="block w-full bg-brand-600 text-white font-bold py-3 rounded-lg mt-6 hover:bg-brand-700 transition"
              >
                Get Started
              </button>
            </div>
          </div>

          {/* Card 2 */}
          <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-slate-200 relative">
            <div className="absolute top-0 right-0 bg-accent-500 text-brand-900 text-xs font-bold px-3 py-1 rounded-bl-lg">
              RECOMMENDED
            </div>

            <div className="bg-brand-900 text-white py-4">
              <h3 className="text-xl font-bold">AD Code Registration</h3>
              <p className="text-sm opacity-80">Per Port Registration</p>
            </div>

            <div className="p-8">
              <div className="text-4xl font-bold text-slate-900 mb-2">
                ₹ 3,500
              </div>
              <p className="text-slate-500 text-sm mb-6">+ GST (Per Port)</p>

              <ul className="text-left space-y-3 mb-8 text-sm text-slate-600">
                <li>✔ Bank Letter Drafting</li>
                <li>✔ e-Sanchit Upload (IRN)</li>
                <li>✔ Online Submission to Customs</li>
                <li>✔ Query Resolution Support</li>
              </ul>

              <button
                onClick={() =>
                  setShowEnrollModal({
                    open: true,
                    type: "AD_CODE_REGISTRATION",
                  })
                }
                className="block w-full bg-brand-600 text-white font-bold py-3 rounded-lg mt-6 hover:bg-brand-700 transition"
              >
                Get Started
              </button>
            </div>
          </div>

          {/* Card 3 – NEW */}
          <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-slate-200">
            <div className="bg-brand-800 text-white py-4">
              <h3 className="text-xl font-bold">IFSC Code Registration</h3>
              <p className="text-sm opacity-80">As per Service Selection</p>
            </div>

            <div className="p-8">
              <div className="text-4xl font-bold text-slate-900 mb-2">
                ₹ 2,500
              </div>
              <p className="text-slate-500 text-sm mb-6">+ GST</p>

              <ul className="text-left space-y-3 mb-8 text-sm text-slate-600">
                <li>✔ IFSC Mapping Assistance</li>
                <li>✔ Bank Coordination Support</li>
                <li>✔ Documentation Review</li>
                <li>✔ Query Resolution Support</li>
              </ul>

              <button
                onClick={() =>
                  setShowEnrollModal({
                    open: true,
                    type: "IFSC_CODE_REGISTRATION",
                  })
                }
                className="block w-full bg-brand-600 text-white font-bold py-3 rounded-lg mt-6 hover:bg-brand-700 transition"
              >
                Get Started
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Fees;
