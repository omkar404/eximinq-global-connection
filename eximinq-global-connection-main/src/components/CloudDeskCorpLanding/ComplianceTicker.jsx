import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Clock } from "lucide-react";
import { COMPLIANCE_FLASH_CARDS } from "./corpData";

const ComplianceTicker = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const next = () =>
    setCurrentSlide((prev) => (prev + 1) % COMPLIANCE_FLASH_CARDS.length);

  const prev = () =>
    setCurrentSlide(
      (prev) =>
        (prev - 1 + COMPLIANCE_FLASH_CARDS.length) %
        COMPLIANCE_FLASH_CARDS.length
    );

  useEffect(() => {
    const interval = setInterval(next, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-slate-800 border-y border-slate-700 relative overflow-hidden">
      <div className="absolute inset-0 bg-slate-900/40" />

      <div className="container mx-auto px-6 py-10 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-10">
          {/* LEFT SIDE */}
          <div className="md:w-1/3">
            <div className="inline-flex items-center space-x-2 text-sky-400 mb-2">
              <Clock size={16} />
              <span className="uppercase text-xs tracking-wider font-bold">
                Compliance Watch
              </span>
            </div>

            <h3 className="text-2xl font-bold text-white mb-2">
              Critical Due Dates
            </h3>
            <p className="text-slate-400 text-sm">
              Stay ahead of penalties with our compliance calendar reminders.
            </p>

            {/* Arrows */}
            <div className="flex space-x-3 mt-5">
              <button
                onClick={prev}
                className="p-2 rounded-full bg-slate-700 hover:bg-sky-500"
              >
                <ChevronLeft size={18} className="text-white" />
              </button>
              <button
                onClick={next}
                className="p-2 rounded-full bg-slate-700 hover:bg-sky-500"
              >
                <ChevronRight size={18} className="text-white" />
              </button>
            </div>
          </div>

          {/* RIGHT CARD */}
          <div className="md:w-2/3 relative">
            <div className="relative h-48 md:h-40">
              {COMPLIANCE_FLASH_CARDS.map((card, idx) =>
                idx === currentSlide ? (
                  <div
                    key={card.id}
                    className="absolute inset-0 bg-slate-900/50 border border-slate-700 
                               rounded-xl shadow-xl p-6 flex gap-5 animate-fade-in"
                  >
                    <div className="w-20 h-20 bg-sky-900/30 flex items-center justify-center rounded-xl mb-6">
                      <card.icon size={28} className="text-sky-400" />
                    </div>

                    <div>
                      <div className="flex items-center gap-3 mb-2">
                        <h4 className="text-lg font-bold text-white">
                          {card.title}
                        </h4>
                        <span
                          className={`text-[10px] px-2 py-1 rounded text-white ${card.color}`}
                        >
                          Due: {card.date}
                        </span>
                      </div>

                      <p className="text-slate-300 text-sm leading-relaxed">
                        {card.description}
                      </p>
                    </div>
                  </div>
                ) : null
              )}
            </div>

            {/* Indicators */}
            <div className="flex space-x-2 mt-4 justify-center md:justify-start">
              {COMPLIANCE_FLASH_CARDS.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentSlide(i)}
                  className={`h-1.5 rounded-full transition-all ${
                    i === currentSlide ? "w-8 bg-sky-500" : "w-2 bg-slate-600"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ComplianceTicker;
