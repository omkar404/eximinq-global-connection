import { ChevronRight, Box, CheckCircle, TrendingUp } from "lucide-react";

const Hero = () => {
  return (
    <section id="home" className="relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 to-teal-900/80 z-10" />
        <img
          src="https://images.unsplash.com/photo-1587854692152-cbe660dbde88?auto=format&fit=crop&q=80"
          alt="Pharmaceutical Lab"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Content */}
      <div className="relative z-20 max-w-7xl mx-auto px-4 py-28 md:py-36">
        <div className="max-w-3xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-teal-500/20 backdrop-blur-sm border border-teal-400/30 text-teal-100 px-4 py-1.5 rounded-full text-sm font-semibold mb-6">
            <CheckCircle className="w-4 h-4" />
            ISO 9001:2015 Certified Compliance
          </div>

          {/* Heading */}
          <h1 className="text-4xl md:text-6xl font-extrabold text-white leading-tight mb-6">
            Compliance Simplified for{" "}
            <span className="text-teal-400">Pharma Trade</span>
          </h1>

          {/* Description */}
          <p className="text-lg md:text-xl text-slate-200 mb-10 leading-relaxed">
            Navigate CDSCO regulations, DGFT incentives, SCOMET licensing, and
            global cold-chain logistics with confidence.
          </p>

          {/* Actions */}
          <div className="flex flex-col sm:flex-row gap-4">
            <button className="bg-teal-500 hover:bg-teal-400 text-white px-8 py-4 rounded-lg font-bold text-lg transition-all shadow-lg hover:shadow-teal-500/50 flex items-center justify-center gap-2">
              Explore Services
              <ChevronRight className="w-5 h-5" />
            </button>

            <button className="bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/30 text-white px-8 py-4 rounded-lg font-bold text-lg transition-all flex items-center justify-center gap-2">
              <Box className="w-5 h-5" />
              Track Shipment
            </button>
          </div>
        </div>
      </div>

      {/* Floating Stats Card */}
      <div className="hidden lg:block absolute right-0 bottom-20 z-30 w-1/3">
        <div className="bg-white/95 backdrop-blur shadow-2xl rounded-l-2xl p-6 border-l-4 border-teal-500 transform translate-x-4 hover:translate-x-0 transition-transform duration-300">
          <div className="flex items-start gap-4 mb-4">
            <div className="bg-teal-100 p-3 rounded-full text-teal-600">
              <TrendingUp className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-sm font-semibold text-slate-600">
                Duty Saved
              </h3>
              <p className="text-3xl font-extrabold text-teal-600">
                ₹100 Cr+
              </p>
              <p className="text-sm text-slate-500">
                For Pharma Clients in 2024
              </p>
            </div>
          </div>

          {/* Progress bar */}
          <div className="h-1.5 w-full bg-slate-100 rounded-full overflow-hidden">
            <div className="h-full bg-teal-500 w-3/4 rounded-full"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
