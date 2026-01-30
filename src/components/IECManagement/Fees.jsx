const Fees = ({ setShowEnrollModal }) => {
  return (
    <section id="fees" className="py-20 bg-slate-50">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold text-slate-900 mb-12">
          IEC Services Fees
        </h2>

        {/* Cards Wrapper */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* LEFT CARD */}
          <div className="bg-white rounded-xl shadow-md border border-slate-200 overflow-hidden">
            <div className="bg-slate-800 text-white py-4">
              <h3 className="text-lg font-bold">IEC Profile Updatation</h3>
              <p className="text-sm opacity-80">Standard Package</p>
            </div>

            <div className="p-6">
              <div className="flex justify-between py-2 border-b">
                <span className="text-slate-600">Govt Fees</span>
                <span className="font-bold">₹ 200</span>
              </div>
              <div className="flex justify-between py-2 border-b">
                <span className="text-slate-600">Professional Fees</span>
                <span className="font-bold">₹ 1,000</span>
              </div>
              <div className="flex justify-between pt-4">
                <span className="font-bold">Total</span>
                <span className="text-xl font-bold text-brand-600">
                  ₹ 1,200
                </span>
              </div>

              <p className="text-xs text-slate-500 mt-2">*GST extra</p>
              <button
                onClick={() =>
                  setShowEnrollModal({
                    open: true,
                    type: "IEC_PROFILE_UPDATATION",
                  })
                }
                className="block w-full bg-brand-600 text-white font-bold py-3 rounded-lg mt-6 hover:bg-brand-700 transition"
              >
                Get Started
              </button>
            </div>
          </div>

          {/* CENTER CARD (CURRENT ONE) */}
          <div className="bg-white rounded-xl shadow-xl border-2 border-brand-600 overflow-hidden scale-105">
            <div className="bg-brand-900 text-white py-4">
              <h3 className="text-xl font-bold">IEC Registration</h3>
              <p className="text-sm opacity-80">Standard Package</p>
            </div>

            <div className="p-8">
              <div className="flex justify-between py-3 border-b">
                <span className="text-slate-600">Government Fees</span>
                <span className="font-bold">₹ 500</span>
              </div>
              <div className="flex justify-between py-3 border-b">
                <span className="text-slate-600">Professional Fees</span>
                <span className="font-bold">₹ 1,500</span>
              </div>
              <div className="flex justify-between pt-4">
                <span className="text-lg font-bold">Total</span>
                <span className="text-2xl font-bold text-accent-600">
                  ₹ 2,000
                </span>
              </div>

              <p className="text-xs text-slate-500 mt-2">
                *Fees exclusive of GST.
              </p>

              <button
                onClick={() =>
                  setShowEnrollModal({
                    open: true,
                    type: "IEC_REGISTRATION",
                  })
                }
                className="block w-full bg-brand-600 text-white font-bold py-3 rounded-lg mt-6 hover:bg-brand-700 transition"
              >
                Get Started
              </button>
            </div>
          </div>

          {/* RIGHT CARD */}
          <div className="bg-white rounded-xl shadow-md border border-slate-200 overflow-hidden">
            <div className="bg-green-700 text-white py-4">
              <h3 className="text-lg font-bold">IEC Annual Updatation</h3>
              <p className="text-sm opacity-80">Apply between Apr – June</p>
            </div>

            <div className="p-6">
              <div className="flex justify-between py-2 border-b">
                <span className="text-slate-600">Govt Fees</span>
                <span className="font-bold text-green-700">Free</span>
              </div>
              <div className="flex justify-between py-2 border-b">
                <span className="text-slate-600">Professional Fees</span>
                <span className="font-bold text-green-700">Free</span>
              </div>
              <div className="flex justify-between pt-4">
                <span className="font-bold">Total</span>
                <span className="text-xl font-bold text-green-700">₹ 0</span>
              </div>

              <p className="text-xs text-slate-500 mt-2">
                *Mandatory annual update
              </p>
              <button
                onClick={() =>
                  setShowEnrollModal({
                    open: true,
                    type: "IEC_ANNUAL_UPDATE",
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
