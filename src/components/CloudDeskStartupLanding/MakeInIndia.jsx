import React from "react";
import { TrendingUp, Anchor, Package, CheckCircle } from "lucide-react";

const MakeInIndia = () => {
  return (
    <section id="make-in-india" className="py-20 bg-slate-950 relative">
      <div className="container mx-auto px-6">

        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Maximize Profits with Government Schemes</h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            We help you leverage key “Make in India” initiatives to recover costs and boost competitiveness.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

          {/* RODTEP */}
          <div className="bg-gradient-to-br from-slate-800 to-slate-900 p-8 rounded-2xl border border-slate-700 hover:border-orange-500/50 transition">
            <div className="w-12 h-12 bg-orange-500/20 rounded-lg flex items-center justify-center mb-6">
              <TrendingUp className="w-6 h-6 text-orange-400" />
            </div>

            <h3 className="text-xl font-bold mb-2">RoDTEP Scheme</h3>
            <p className="text-xs font-bold text-orange-400 uppercase tracking-widest mb-4">
              Remission of Duties
            </p>

            <p className="text-slate-400 text-sm mb-6 leading-relaxed">
              Get a rebate on central, state, and local duties/taxes that are not otherwise refunded. Rates typically range from 0.5% to 4.3% of FOB value.
            </p>

            <div className="space-y-2 border-t border-slate-700 pt-4">
              <div className="flex items-center text-sm text-slate-300">
                <CheckCircle className="w-4 h-4 text-green-500 mr-2" /> Applied in Shipping Bill
              </div>
              <div className="flex items-center text-sm text-slate-300">
                <CheckCircle className="w-4 h-4 text-green-500 mr-2" /> Transferable Scrips
              </div>
            </div>
          </div>

          {/* Duty Drawback */}
          <div className="bg-gradient-to-br from-slate-800 to-slate-900 p-8 rounded-2xl border border-slate-700 hover:border-blue-500/50 transition">
            <div className="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center mb-6">
              <Anchor className="w-6 h-6 text-blue-400" />
            </div>

            <h3 className="text-xl font-bold mb-2">Duty Drawback</h3>
            <p className="text-xs font-bold text-blue-400 uppercase tracking-widest mb-4">
              Customs Refund
            </p>

            <p className="text-slate-400 text-sm mb-6 leading-relaxed">
              Claim a refund of Customs duties paid on imported materials used in the manufacture of export goods. Essential for manufacturing exporters.
            </p>

            <div className="space-y-2 border-t border-slate-700 pt-4">
              <div className="flex items-center text-sm text-slate-300">
                <CheckCircle className="w-4 h-4 text-green-500 mr-2" /> Direct Bank Transfer
              </div>
              <div className="flex items-center text-sm text-slate-300">
                <CheckCircle className="w-4 h-4 text-green-500 mr-2" /> Brand Rate Fixation
              </div>
            </div>
          </div>

          {/* MOOWR */}
          <div className="bg-gradient-to-br from-slate-800 to-slate-900 p-8 rounded-2xl border border-slate-700 hover:border-purple-500/50 transition">
            <div className="w-12 h-12 bg-purple-500/20 rounded-lg flex items-center justify-center mb-6">
              <Package className="w-6 h-6 text-purple-400" />
            </div>

            <h3 className="text-xl font-bold mb-2">MOOWR Scheme</h3>
            <p className="text-xs font-bold text-purple-400 uppercase tracking-widest mb-4">
              Bonded Warehouse
            </p>

            <p className="text-slate-400 text-sm mb-6 leading-relaxed">
              Defer customs duty on imported capital goods and inputs. If goods are exported, the duty is waived completely.
            </p>

            <div className="space-y-2 border-t border-slate-700 pt-4">
              <div className="flex items-center text-sm text-slate-300">
                <CheckCircle className="w-4 h-4 text-green-500 mr-2" /> No Export Obligation Period
              </div>
              <div className="flex items-center text-sm text-slate-300">
                <CheckCircle className="w-4 h-4 text-green-500 mr-2" /> Improves Cash Flow
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default MakeInIndia;
