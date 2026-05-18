import React, { useState, useEffect } from 'react';
import { CheckCircle } from 'lucide-react';

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

  const units = [
    { label: 'Days', value: timeLeft.days },
    { label: 'Hours', value: timeLeft.hours },
    { label: 'Minutes', value: timeLeft.minutes },
    { label: 'Seconds', value: timeLeft.seconds },
  ];

  return (
    <div className="flex justify-center space-x-2 md:space-x-4 mb-6">
      {units.map(({ label, value }) => (
        <div key={label} className="flex flex-col items-center">
          <div className="bg-slate-900 border border-red-900/50 text-white font-mono text-2xl md:text-4xl font-bold w-14 h-14 md:w-20 md:h-20 flex items-center justify-center rounded-lg shadow-inner">
            {String(value).padStart(2, '0')}
          </div>
          <span className="text-red-300 text-xs mt-2 uppercase font-semibold tracking-wider">
            {label}
          </span>
        </div>
      ))}
    </div>
  );
}

export default function DeadlineCardEPR({ setShowEnrollModal }) {
  const targetDate = new Date("2026-06-30T23:59:59");

  return (
    <section className="py-16 bg-slate-900">
      <div className="container mx-auto px-6 max-w-2xl">
        <div className="bg-slate-800 rounded-2xl border border-slate-700 shadow-2xl overflow-hidden">

          <div className="bg-red-600/10 border-b border-red-900/30 p-6 text-center">
            <h3 className="text-red-400 font-bold uppercase tracking-widest text-sm mb-2">
              Deadline Approaching
            </h3>
            <div className="text-white text-2xl font-bold tracking-wide mb-4">
              June 30, 2026
            </div>
            <CountdownTimer targetDate={targetDate} />
            <p className="text-slate-400 text-sm">
              Don't wait. CPCB portals crash frequently as the deadline nears.
            </p>
          </div>

          <div className="p-8 text-center">
            <div className="text-slate-400 font-semibold mb-2 uppercase tracking-wide">
              Professional Filing Service
            </div>
            <div className="text-5xl font-black text-white mb-2">₹3500/-</div>
            <div className="text-sm text-slate-500 mb-6">
              Per Category (Plastic OR E-Waste)*
            </div>
            <ul className="space-y-3 text-left mb-8">
              {[
                "Thorough Expert Review of Import Data",
                "Data alignment with CPCB guidelines",
                "Timely Submission & Follow-up",
                "Prevention of ICEGATE blocks",
              ].map((item, i) => (
                <li key={i} className="flex items-start text-slate-300">
                  <CheckCircle className="w-5 h-5 text-sky-400 mr-3 shrink-0" />
                  <span className="text-sm font-medium">{item}</span>
                </li>
              ))}
            </ul>
            <button
              onClick={() => setShowEnrollModal({ open: true, type: "epr_annual_returns" })}
              className="block w-full py-4 bg-sky-600 hover:bg-sky-500 text-white font-bold rounded-lg transition-colors text-lg"
            >
              Claim Offer
            </button>
            <p className="mt-4 text-xs text-slate-500">
              *Official CPCB portal fees are extra based on your import volume slab.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}