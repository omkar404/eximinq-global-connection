import React, { useState } from 'react';
import { Calculator, Clock, IndianRupee, FileText, Award, ShieldAlert, ShieldCheck, AlertTriangle } from 'lucide-react';

export default function EPCGServices({ setShowEnrollModal }) {
  const [dutySaved, setDutySaved] = useState('');
  const [unfulfilledDuty, setUnfulfilledDuty] = useState('');

  return (
    <>
      {/* Stats Banner */}
      <section className="bg-blue-600 py-12 relative z-20 shadow-2xl border-y border-blue-400/30">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center divide-y md:divide-y-0 md:divide-x divide-blue-400/50">
            {[
              { value: "450+", label: "EPCG Licenses Closed" },
              { value: "₹750 Cr+", label: "Duty Saved Secured" },
              { value: "320+", label: "Active Corporate Clients" },
            ].map((item, idx) => (
              <div key={idx} className="p-4">
                <div className="text-4xl md:text-5xl font-black text-white mb-2">{item.value}</div>
                <div className="text-blue-200 font-semibold uppercase tracking-wider text-sm">{item.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Calculators */}
      <section id="calculation" className="py-24 bg-white relative">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Calculate Your True Liability</h2>
            <p className="text-slate-600 text-lg max-w-3xl mx-auto">
              Stop guessing. EPCG is purely mathematical. Use our calculators below to instantly determine your Specific Export Obligation or the composition fee required for an EOP extension.
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">

            {/* Calculator 1 */}
            <div className="bg-slate-50 border border-slate-200 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-blue-100 rounded-lg text-blue-600">
                  <Calculator className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900">Specific EO Calculator</h3>
              </div>
              <p className="text-sm text-slate-600 mb-6">Enter the total Customs Duty saved at the time of import.</p>
              <div className="relative mb-8">
                <IndianRupee className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 w-5 h-5" />
                <input
                  type="number"
                  placeholder="Enter Duty Saved Amount"
                  className="w-full pl-12 pr-4 py-4 bg-white border border-slate-300 rounded-xl text-slate-900 font-bold text-lg focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all"
                  value={dutySaved}
                  onChange={(e) => setDutySaved(e.target.value ? Number(e.target.value) : '')}
                />
              </div>
              <div className="bg-blue-600 text-white rounded-xl p-6 text-center">
                <div className="text-blue-200 text-sm font-semibold uppercase tracking-wider mb-2">Required Specific EO (6x)</div>
                <div className="text-4xl font-black">
                  ₹ {dutySaved ? (Number(dutySaved) * 6).toLocaleString('en-IN') : '0'}
                </div>
              </div>
              <p className="text-xs text-slate-500 mt-4 text-center italic">*Note: You must also maintain your 3-year historical Average EO alongside this target.</p>
            </div>

            {/* Calculator 2 ✅ Fixed - class → className */}
            <div className="bg-slate-50 border border-slate-200 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-orange-100 rounded-lg text-orange-600">
                  <Clock className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900">EOP Extension Fee</h3>
              </div>
              <p className="text-sm text-slate-600 mb-6">Falling short? Calculate the 2% composition fee required for your 1st year extension.</p>
              <div className="relative mb-8">
                <IndianRupee className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 w-5 h-5" />
                <input
                  type="number"
                  placeholder="Enter Unfulfilled Duty Saved"
                  className="w-full pl-12 pr-4 py-4 bg-white border border-slate-300 rounded-xl text-slate-900 font-bold text-lg focus:outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 transition-all"
                  value={unfulfilledDuty}
                  onChange={(e) => setUnfulfilledDuty(e.target.value ? Number(e.target.value) : '')}
                />
              </div>
              <div className="bg-slate-800 text-white rounded-xl p-6 text-center border border-slate-700">
                <div className="text-slate-400 text-sm font-semibold uppercase tracking-wider mb-2">Composition Fee (2%)</div>
                <div className="text-4xl font-black text-orange-400">
                  ₹ {unfulfilledDuty ? (Number(unfulfilledDuty) * 0.02).toLocaleString('en-IN') : '0'}
                </div>
              </div>
              <p className="text-xs text-slate-500 mt-4 text-center italic">*Second extensions incur higher penalties. Apply before original EO period expires.</p>
            </div>

          </div>
        </div>
      </section>

      {/* Procedure */}
      <section id="procedure" className="py-20 bg-slate-900 text-white border-t border-slate-800">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">The EPCG Closure Procedure</h2>
            <p className="text-slate-400 text-lg max-w-2xl mx-auto">
              We handle the entire end-to-end process, bridging the gap between DGFT policy and Customs enforcement.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              { step: "01", title: "Nexus Establishment", desc: "We legally establish the 'nexus' between the imported capital goods and the specific resultant products exported." },
              { step: "02", title: "Document Compilation", desc: "We compile CA/CE certificates (Appendix 5C), ANF 5B, Shipping Bills, e-BRCs, and ensure all mathematical tallies match exactly with ICEGATE data." },
              { step: "03", title: "DGFT EODC Issuance", desc: "We file the redemption application online, respond to any deficiency letters, and secure the Export Obligation Discharge Certificate (EODC) from DGFT." },
              { step: "04", title: "Customs Bond Cancellation", desc: "Obtaining EODC is only half the battle. We register the EODC at the specific Customs port to cancel the Bond/BG executed at the time of import." },
            ].map((item, idx) => (
              <div key={idx} className="bg-slate-800 border border-slate-700 p-8 rounded-xl relative group hover:border-blue-500 transition-colors">
                <div className="text-5xl font-black text-slate-700 absolute top-4 right-4 opacity-50 group-hover:text-blue-500/20 transition-colors">{item.step}</div>
                <h4 className="text-xl font-bold mb-4 mt-8">{item.title}</h4>
                <p className="text-slate-400 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="py-24 bg-white">
        <div className="container mx-auto px-6 max-w-5xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">No Bullshit Pricing. No Hidden Fees.</h2>
            <p className="text-slate-600 text-lg max-w-2xl mx-auto">
              Our commercial structure is directly tied to the work done and the liability we eliminate for your company.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-slate-50 rounded-2xl p-8 border border-slate-200 relative">
              <div className="absolute top-0 right-0 bg-slate-200 text-slate-600 text-xs font-bold px-3 py-1 rounded-bl-lg rounded-tr-xl">STEP 1</div>
              <FileText className="w-10 h-10 text-slate-500 mb-6" />
              <h3 className="text-xl font-bold text-slate-900 mb-2">Drafting & Submission</h3>
              <p className="text-slate-500 text-sm mb-6">Compilation of Appendix 5C, ANF 5B, Nexus establishment, and DGFT online filing.</p>
              <div className="text-3xl font-black text-slate-900">₹ 15,000</div>
              <div className="text-xs text-slate-500 mt-1 uppercase font-bold tracking-wider">Fixed Professional Fee</div>
            </div>
            <div className="bg-blue-600 rounded-2xl p-8 border border-blue-500 shadow-2xl relative transform md:-translate-y-4">
              <div className="absolute top-0 right-0 bg-blue-800 text-blue-100 text-xs font-bold px-3 py-1 rounded-bl-lg rounded-tr-xl">STEP 2</div>
              <Award className="w-10 h-10 text-blue-200 mb-6" />
              <h3 className="text-xl font-bold text-white mb-2">EODC Success Fee</h3>
              <p className="text-blue-100 text-sm mb-6">Billed only upon successful issuance of the Export Obligation Discharge Certificate (EODC).</p>
              <div className="text-3xl font-black text-white">0.5%</div>
              <div className="text-xs text-blue-200 mt-1 uppercase font-bold tracking-wider">Of Duty Saved Amount</div>
            </div>
            <div className="bg-slate-50 rounded-2xl p-8 border border-slate-200 relative">
              <div className="absolute top-0 right-0 bg-slate-200 text-slate-600 text-xs font-bold px-3 py-1 rounded-bl-lg rounded-tr-xl">STEP 3</div>
              <ShieldAlert className="w-10 h-10 text-slate-500 mb-6" />
              <h3 className="text-xl font-bold text-slate-900 mb-2">Customs Bond Closure</h3>
              <p className="text-slate-500 text-sm mb-6">Registration of EODC at the port and final cancellation of Customs Bond/Bank Guarantee.</p>
              <div className="text-3xl font-black text-slate-900">₹ 12,500</div>
              <div className="text-xs text-slate-500 mt-1 uppercase font-bold tracking-wider">Fixed Port Handling Fee</div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose */}
      <section id="consequences" className="py-20 bg-slate-50 border-y border-slate-200">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="w-full md:w-1/2">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">Why Choose EXIMINQ?</h2>
              <p className="text-slate-600 mb-6 leading-relaxed">
                DGFT compliance isn't for amateurs. A minor error in BRC linkage or Nexus certification can trigger an audit that costs you millions in interest.
              </p>
              <ul className="space-y-4">
                {[
                  { title: "End-to-End Ownership", desc: "We don't just file papers. We handle DGFT deficiency letters, coordinate with Chartered Engineers, and battle it out with Customs." },
                  { title: "Zero Tolerance for Errors", desc: "Our 3-tier internal audit ensures your ANF 5B and shipping bills match perfectly before submission." },
                  { title: "Aggressive Customs Follow-up", desc: "Getting the EODC is 50% of the job. We aggressively follow up at the port to release your blocked Bank Guarantees." },
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start">
                    <ShieldCheck className="w-6 h-6 text-green-600 mr-3 shrink-0" />
                    <div>
                      <h4 className="font-bold text-slate-900">{item.title}</h4>
                      <p className="text-sm text-slate-600">{item.desc}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
            <div className="w-full md:w-1/2">
              <div className="bg-slate-900 rounded-2xl p-8 md:p-12 shadow-xl border border-slate-800 text-center">
                <AlertTriangle className="w-12 h-12 text-orange-500 mx-auto mb-6" />
                <h3 className="text-2xl font-bold text-white mb-4">Don't Wait for a SCN.</h3>
                <p className="text-slate-400 mb-8">
                  If your EPCG license is past its 6-year window and you haven't filed for closure or extension, you are actively accumulating 15% interest.
                </p>
                <button
                  onClick={() => setShowEnrollModal({ open: true, type: "epcg_redemption" })}
                  className="inline-block px-8 py-4 bg-orange-500 hover:bg-orange-600 text-white font-bold rounded-lg transition-colors w-full"
                >
                  Audit My EPCG Status Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}