import React from "react";
import { TrendingUp, Phone } from "lucide-react";

const Hero = ({ onViewRates }) => {
  return (
    <section className="relative bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white pb-32 pt-28 px-4 sm:px-6 lg:px-8 overflow-hidden">
      
      {/* Animated background blobs */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute top-10 left-10 w-72 h-72 bg-blue-500 rounded-full blur-3xl animate-blob" />
        <div className="absolute top-10 right-10 w-72 h-72 bg-purple-500 rounded-full blur-3xl animate-blob animation-delay-2000" />
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-500 rounded-full blur-3xl animate-blob animation-delay-4000" />
      </div>

      <div className="relative max-w-7xl mx-auto text-center">
        {/* Live badge */}
        <div className="inline-flex items-center gap-2 bg-blue-800/50 backdrop-blur border border-blue-400/30 rounded-full px-4 py-1.5 mb-8">
          <span className="flex h-2 w-2 relative">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500" />
          </span>
          <span className="text-sm font-medium text-blue-100">
            Market is Live & Active
          </span>
        </div>

        {/* Heading */}
        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6 leading-tight">
          India&apos;s Most Trusted <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-200 to-cyan-200">
            RODTEP & ROSCTL Exchange
          </span>
        </h1>

        {/* Sub text */}
        <p className="max-w-2xl mx-auto text-xl text-blue-100 mb-10 leading-relaxed">
          Maximize your export incentives with Eximinq CloudDesk. Get the best
          market rates, instant settlements, and 100% compliant documentation.
        </p>

        {/* CTA buttons */}
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <button
            onClick={onViewRates}
            className="bg-white text-blue-900 px-8 py-4 rounded-xl font-bold shadow-xl
            hover:bg-blue-50 transition transform hover:-translate-y-1
            flex items-center justify-center gap-2"
          >
            <TrendingUp size={20} />
            View Live Rates
          </button>

          <button
            onClick={() =>
              document
                .getElementById("contact")
                ?.scrollIntoView({ behavior: "smooth" })
            }
            className="bg-blue-600/30 backdrop-blur border border-white/20
            text-white px-8 py-4 rounded-xl font-bold
            hover:bg-blue-600/50 transition transform hover:-translate-y-1
            flex items-center justify-center gap-2"
          >
            <Phone size={20} />
            Speak to Dealer
          </button>
        </div>
      </div>

      {/* Animations */}
      <style jsx>{`
        @keyframes blob {
          0% {
            transform: translate(0px, 0px) scale(1);
          }
          33% {
            transform: translate(30px, -50px) scale(1.1);
          }
          66% {
            transform: translate(-20px, 20px) scale(0.9);
          }
          100% {
            transform: translate(0px, 0px) scale(1);
          }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style>
    </section>
  );
};

export default Hero;
