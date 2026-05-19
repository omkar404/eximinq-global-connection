import React from 'react';
import { FileSignature, ArrowRight, XCircle, PhoneCall } from 'lucide-react';

export default function HeroEPCG({ setShowEnrollModal }) {
  return (
    <header className="pt-32 pb-16 md:pt-48 md:pb-24 bg-slate-900 relative overflow-hidden">
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-600 via-slate-900 to-slate-900"></div>
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12">

          <div className="w-full lg:w-3/5 text-center lg:text-left">
            <div className="inline-flex items-center space-x-2 px-3 py-1 bg-blue-500/20 border border-blue-500/50 rounded-full text-blue-400 text-sm font-bold uppercase tracking-wider mb-6">
              <FileSignature className="w-4 h-4" />
              <span>DGFT & Customs Compliance</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-6 leading-tight">
              EPCG License <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
                Redemption & EOP Extension
              </span>
            </h1>
            <p className="text-slate-300 text-lg md:text-xl mb-8 leading-relaxed max-w-2xl mx-auto lg:mx-0">
              Stop accumulating interest. Whether you have fulfilled your Export Obligation and need an EODC, or you need more time via an EOP Extension, our experts navigate the DGFT and Customs complexities to close your licenses safely.
            </p>
            <div className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start">
              {/* <button
                onClick={() => setShowEnrollModal({ open: true, type: "epcg_closure" })}
                className="px-8 py-4 bg-blue-600 hover:bg-blue-500 text-white font-bold rounded-lg shadow-lg shadow-blue-900/50 transition-all text-lg w-full sm:w-auto text-center flex items-center justify-center"
              >
                Consult an Expert <ArrowRight className="w-5 h-5 ml-2" />
              </button> */}
              <a href="#contact" className="px-8 py-4 bg-blue-600 hover:bg-blue-500 text-white font-bold rounded-lg shadow-lg shadow-blue-900/50 transition-all text-lg w-full sm:w-auto text-center flex items-center justify-center">
                Consult an Expert <ArrowRight className="w-5 h-5 ml-2" />
              </a>
            </div>
          </div>

          <div className="w-full lg:w-2/5">
            <div className="bg-slate-800 rounded-2xl border border-slate-700 shadow-2xl overflow-hidden p-8">
              <h3 className="text-xl font-bold text-white mb-6 border-b border-slate-700 pb-4">The Cost of Inaction</h3>
              <div className="space-y-6">
                {[
                  { title: "15% Interest on Duty Saved", desc: "If you fail to prove EO fulfillment, you must pay the original customs duty plus 15% interest per annum from the date of import." },
                  { title: "DRI / Customs Recovery Action", desc: "Unredeemed licenses are actively flagged by Customs. This leads to Show Cause Notices and forced recovery proceedings." },
                  { title: "Blockage of Future Benefits", desc: "Pending closures will result in your IEC being placed on the Denied Entity List (DEL), halting future imports and incentive claims." },
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start">
                    <XCircle className="w-6 h-6 text-red-500 mr-4 shrink-0 mt-0.5" />
                    <div>
                      <h4 className="text-white font-semibold">{item.title}</h4>
                      <p className="text-slate-400 text-sm mt-1">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>
      </div>
    </header>
  );
}