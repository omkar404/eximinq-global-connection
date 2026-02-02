export default function Fees({setShowEnrollModal}) {
  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-4 text-center">
        
        {/* Title */}
        <h2 className="text-3xl font-bold text-slate-900 mb-8">
          Introducing SIMS Saral
        </h2>

        {/* 🔹 SARAL SIMS Info Box (INSERTED HERE) */}
        <div className="max-w-4xl mx-auto mb-12 text-left bg-slate-50 border border-slate-200 rounded-xl p-6 shadow-sm">
          <h3 className="text-xl font-semibold text-slate-800 mb-4">
            SARAL SIMS – Key Points
          </h3>

          <ul className="space-y-4 text-sm text-slate-700">
            <li>
              <strong>1. Eligibility:</strong>
              <ul className="list-disc ml-6 mt-1">
                <li>Small Import: ≤ 10 MT per consignment, max 1000 MT/year</li>
                <li>Import for Export under AA / SEZ / EOU (no threshold)</li>
              </ul>
            </li>

            <li>
              <strong>2. Application Details:</strong>  
              Only tentative country and quantity required.
            </li>

            <li>
              <strong>3. Return Filing:</strong>
              <ul className="list-disc ml-6 mt-1">
                <li>Return to be filed by 30th April of next FY</li>
                <li>New SARAL SIMS allowed only after return filing</li>
                <li>Imports allowed till 30th April if balance exists</li>
              </ul>
            </li>

            <li>
              <strong>4. Small Import Conditions:</strong>
              <ul className="list-disc ml-6 mt-1">
                <li>Annual threshold: 1000 MT (FY 2025–26: 500 MT)</li>
                <li>Each consignment ≤ 10 MT</li>
                <li>Regular SIMS blocks SARAL SIMS for the FY</li>
                <li>Multiple registrations allowed within limit</li>
              </ul>
            </li>

            <li>
              <strong>5. Export Purpose:</strong>
              <ul className="list-disc ml-6 mt-1">
                <li>No threshold for AA / SEZ / EOU imports</li>
                <li>Domestic imports require regular SIMS</li>
              </ul>
            </li>

            <li>
              <strong>6. Single Sign-On:</strong>  
              Same login for SIMS & SARAL SIMS.
            </li>

            <li>
              <strong>7. Fees:</strong>  
              ₹750 per registration (₹500 Govt + ₹250 Processing).
            </li>
          </ul>
        </div>

        {/* Pricing Card */}
        <div className="max-w-md mx-auto">
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

              <button
                onClick={() =>
                  setShowEnrollModal({
                    open: true,
                    type: "IEC_PROFILE_UPDATE",
                  })
                }
                className="block w-full bg-accent-600 text-white font-bold py-3 rounded-lg hover:bg-accent-700 transition"
              >
                Get Started
              </button>
            </div>
          </div>
        </div>
        {/* Footer Note */}
        <p className="text-sm text-slate-500 mt-8">
          *Government fees for IMS are payable separately (approx ₹500 – ₹1/1000 of value).
        </p>
      </div>
    </section>
  );
}
