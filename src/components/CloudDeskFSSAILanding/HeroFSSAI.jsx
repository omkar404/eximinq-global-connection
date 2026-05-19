import React, { useState, useEffect } from 'react';
import { AlertOctagon, CheckCircle } from 'lucide-react';

function CountdownTimer({ targetDate }) {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const calculate = () => {
      const diff = new Date(targetDate) - new Date();
      if (diff <= 0) {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        return;
      }
      setTimeLeft({
        days: Math.floor(diff / (1000 * 60 * 60 * 24)),
        hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((diff / (1000 * 60)) % 60),
        seconds: Math.floor((diff / 1000) % 60),
      });
    };
    calculate();
    const timer = setInterval(calculate, 1000);
    return () => clearInterval(timer);
  }, [targetDate]);

  return (
    <div className="flex justify-center space-x-2 md:space-x-4 mb-6">
      {[
        { label: 'Days', value: timeLeft.days },
        { label: 'Hours', value: timeLeft.hours },
        { label: 'Minutes', value: timeLeft.minutes },
        { label: 'Seconds', value: timeLeft.seconds },
      ].map((item) => (
        <div key={item.label} className="flex flex-col items-center">
          <div className="bg-slate-900 border border-red-900/50 text-white font-mono text-2xl md:text-4xl font-bold w-14 h-14 md:w-20 md:h-20 flex items-center justify-center rounded-lg shadow-inner">
            {String(item.value).padStart(2, '0')}
          </div>
          <span className="text-red-300 text-xs mt-2 uppercase font-semibold tracking-wider">{item.label}</span>
        </div>
      ))}
    </div>
  );
}

export default function HeroFSSAI({ setShowEnrollModal }) {
  const targetDate = new Date('2026-05-31T23:59:59');

  return (
    <header className="pt-32 pb-16 md:pt-48 md:pb-24 bg-slate-900 relative overflow-hidden">
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-red-600 via-slate-900 to-slate-900"></div>
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12">

          <div className="w-full lg:w-1/2 text-center lg:text-left">
            <div className="inline-flex items-center space-x-2 px-3 py-1 bg-red-500/20 border border-red-500/50 rounded-full text-red-400 text-sm font-bold uppercase tracking-wider mb-6">
              <AlertOctagon className="w-4 h-4" />
              <span>Mandatory FoSCoS Compliance</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-6 leading-tight">
              FSSAI Annual Returns <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-orange-500">
                Form D-1 Filing
              </span>
            </h1>
            <p className="text-slate-300 text-lg md:text-xl mb-8 leading-relaxed max-w-2xl mx-auto lg:mx-0">
              If you hold a Food License (Importer, Manufacturer, Relabeller), you must file your Annual Returns by May 31st. Delaying this triggers compounding daily fines and threatens your import clearance.
            </p>
            <div className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start">
              <a href="#contact" className="px-8 py-4 bg-red-600 hover:bg-red-500 text-white font-bold rounded-lg shadow-lg shadow-red-900/50 transition-all text-lg w-full sm:w-auto text-center">
                File Returns Now
              </a>
              <a href="#penalties" className="px-8 py-4 bg-transparent border border-slate-600 hover:bg-slate-800 text-white font-bold rounded-lg transition-all w-full sm:w-auto text-center">
                View Penalty Risks
              </a>
            </div>
          </div>

          <div className="w-full lg:w-1/2 max-w-md mx-auto">
            <div className="bg-slate-800 rounded-2xl border border-slate-700 shadow-2xl overflow-hidden">
              <div className="bg-red-600/10 border-b border-red-900/30 p-6 text-center">
                <h3 className="text-red-400 font-bold uppercase tracking-widest text-sm mb-2">Filing Deadline</h3>
                <div className="text-white text-2xl font-bold tracking-wide mb-4">May 31, 2026</div>
                <CountdownTimer targetDate={targetDate} />
                <p className="text-slate-400 text-sm">FoSCoS portal delays are common in the final week. Do not wait.</p>
              </div>
              <div className="p-8 text-center">
                <div className="text-slate-400 font-semibold mb-2 uppercase tracking-wide">Professional Filing Service</div>
                <div className="text-5xl font-black text-white mb-2">₹3500/-</div>
                <div className="text-sm text-slate-500 mb-6">Fixed Rate (No Hidden Processing Fees)</div>
                <ul className="space-y-3 text-left mb-8">
                  {[
                    "Accurate categorization of food products",
                    "Data compilation as per FoSCoS format",
                    "Error-free online Form D-1 submission",
                    "Prevention of ₹100/day late penalties",
                  ].map((item, i) => (
                    <li key={i} className="flex items-start text-slate-300">
                      <CheckCircle className="w-5 h-5 text-sky-400 mr-3 shrink-0" />
                      <span className="text-sm font-medium">{item}</span>
                    </li>
                  ))}
                </ul>
                <button
                  onClick={() => setShowEnrollModal({ open: true, type: "fssai_annual_returns" })}
                  className="block w-full py-4 bg-sky-600 hover:bg-sky-500 text-white font-bold rounded-lg transition-colors text-lg"
                >
                  Start Filing Process
                </button>
                <p className="mt-4 text-xs text-slate-500">
                  *If the deadline is missed, FSSAI daily penalties will apply on top of this fee.
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </header>
  );
}