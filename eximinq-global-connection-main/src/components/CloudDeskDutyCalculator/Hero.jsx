import React from "react";
import DutyCalculator from "./DutyCalculator";
import { Calculator, CheckCircle } from "lucide-react";

const Hero = ({ onEnrollClick }) => {
  return (
    <header className="bg-[#000000] text-white pt-32 pb-20 relative">
      {/* Background Image */}

      <Calculator
        size={280}
        className="absolute opacity-10 -right-10 -top-10"
      />

      <div className="container mx-auto px-4 flex flex-col lg:flex-row gap-12 items-start">
        {/* LEFT TEXT */}
        <div className="lg:w-5/12 pt-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
            Estimate Your <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-teal-200">
              Landed Cost
            </span>
          </h1>
          <p className="text-lg text-indigo-200 mb-8 leading-relaxed">
            Calculate Basic Customs Duty (BCD), Agriculture Infrastructure Cess
            (AIDC), and IGST instantly. Get a clear picture of your import costs
            before you ship.
          </p>

          <div className="space-y-4">
            <div className="flex items-start">
              <div className="bg-white/10 p-2 rounded mr-4 mt-1">
                <CheckCircle size={16} className="text-teal-400" />
              </div>
              <div>
                <h4 className="font-bold text-sm">Accurate Tariff Heads</h4>
                <p className="text-xs text-indigo-300">
                  Integrated with latest HSN directory & Finance Bill rates.
                </p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="bg-white/10 p-2 rounded mr-4 mt-1">
                <CheckCircle size={16} className="text-teal-400" />
              </div>
              <div>
                <h4 className="font-bold text-sm">AIDC & Surcharge Included</h4>
                <p className="text-xs text-indigo-300">
                  Automatically applies specific cess rates for Gold, Coal, etc.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT: CALCULATOR */}
        <div className="lg:w-7/12">
          <DutyCalculator onEnrollClick={onEnrollClick} />
        </div>
      </div>
    </header>
  );
};

export default Hero;
