export default function Fees() {
  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-4 text-center">
        
        <h2 className="text-3xl font-bold text-slate-900 mb-8">
          Service Charges
        </h2>

        <div className="max-w-md mx-auto">
          {/* IMS Pricing */}
          <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-slate-200">
            <div className="bg-accent-500 text-brand-900 py-4">
              <h3 className="text-xl font-bold">IMS Registration</h3>
              <p className="text-sm opacity-80">
                SIMS / NFMIMS / CIMS / PIMS / CHIMS
              </p>
            </div>

            <div className="p-8">
              <div className="text-4xl font-bold text-slate-900 mb-2">
                ₹ 2,500
              </div>
              <p className="text-slate-500 text-sm mb-6">
                + GST (Per License)
              </p>

              <a
                href="tel:+917400096950"
                className="block w-full bg-accent-600 text-white font-bold py-3 rounded-lg hover:bg-accent-700 transition"
              >
                Apply Now
              </a>
            </div>
          </div>
        </div>

        <p className="text-sm text-slate-500 mt-8">
          *Government fees for IMS are payable separately (approx ₹ 500 - ₹ 1/1000 of value).
        </p>
      </div>
    </section>
  );
}
