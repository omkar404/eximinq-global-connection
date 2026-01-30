import React from "react";
import { TrendingUp, FileCheck, Banknote } from "lucide-react";

const Step = ({ icon, title, description }) => {
  return (
    <div className="relative flex flex-col items-center text-center group">
      <div
        className="w-24 h-24 bg-white border-4 border-blue-50 rounded-full
        flex items-center justify-center mb-6 shadow-sm z-10
        group-hover:border-blue-100 transition-colors"
      >
        <div
          className="w-16 h-16 bg-blue-600 rounded-full
          flex items-center justify-center text-white shadow-md"
        >
          {icon}
        </div>
      </div>

      <h3 className="text-xl font-bold text-slate-900 mb-2">{title}</h3>
      <p className="text-slate-600 max-w-xs">{description}</p>
    </div>
  );
};

const ProcessSteps = () => {
  return (
    <section id="process" className="py-20 bg-white border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl">
            How It Works
          </h2>
          <p className="mt-4 text-lg text-slate-600">
            Trade your export incentives in 3 simple steps
          </p>
        </div>

        {/* Steps */}
        <div className="grid md:grid-cols-3 gap-12 relative">
          {/* Connecting line (desktop only) */}
          <div className="hidden md:block absolute top-12 left-[16%] right-[16%] h-0.5 bg-slate-200 -z-10" />

          <Step
            icon={<TrendingUp size={32} />}
            title="1. Check Rates"
            description="Use our live dashboard to check the current Buy/Sell rates for your scrips."
          />

          <Step
            icon={<FileCheck size={32} />}
            title="2. Transfer Scrip"
            description="Securely transfer your e-scrips to our registered DGFT ledger details."
          />

          <Step
            icon={<Banknote size={32} />}
            title="3. Get Paid"
            description="Receive instant payment in your bank account upon successful transfer."
          />
        </div>
      </div>
    </section>
  );
};

export default ProcessSteps;
