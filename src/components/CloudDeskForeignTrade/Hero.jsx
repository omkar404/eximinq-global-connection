import React from "react";
import {
  Search,
  IdCard,
  Receipt,
  Package,
  Globe,
} from "lucide-react";

export function Hero() {
  return (
    <section className="bg-gradient-to-br from-slate-900 to-blue-900 text-white pt-24 pb-28 px-4 relative overflow-hidden">
      <div className="container mx-auto grid lg:grid-cols-2 gap-12 items-center relative z-10">
        {/* Left Content */}
        <div className="animate-slide-up">
          {/* Status */}
          <div className="inline-flex items-center space-x-2 bg-blue-800/50 border border-blue-400/30 rounded-full px-3 py-1 mb-6 backdrop-blur-sm">
            <span className="bg-green-500 w-2 h-2 rounded-full animate-pulse"></span>
            <span className="text-xs font-semibold tracking-wide text-blue-100 uppercase">
              System Online
            </span>
          </div>

          {/* Heading */}
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Trade Facilitation <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-200 to-cyan-300">
              Reimagined.
            </span>
          </h1>

          {/* Description */}
          <p className="text-blue-100 text-lg mb-8 max-w-lg leading-relaxed">
            India’s single window for Foreign Trade Policy, Customs
            Procedures, and Digital Compliance.
          </p>

          {/* Search */}
          <div className="bg-white/10 backdrop-blur-md p-2 rounded-xl border border-white/20 max-w-md shadow-2xl flex relative">
            <Search className="absolute left-4 top-3.5 text-blue-200 w-5 h-5" />
            <input
              type="text"
              placeholder="Track App, Search HS Code, or Policy..."
              className="w-full bg-transparent text-white placeholder-blue-200 pl-10 pr-4 py-3 rounded-lg focus:outline-none focus:bg-white/10 transition"
            />
            <button className="bg-blue-500 hover:bg-blue-400 text-white px-6 py-2 rounded-lg font-semibold shadow-lg transition">
              Search
            </button>
          </div>

          {/* Popular Links */}
          <div className="mt-6 flex items-center space-x-4 text-sm text-blue-200">
            <span>Popular:</span>
            <HeroLink label="RoDTEP" />
            <HeroLink label="Advance Auth" />
            <HeroLink label="IEC Status" />
          </div>
        </div>

        {/* Right Cards */}
        <div className="grid grid-cols-2 gap-4 animate-slide-up">
          <ServiceCard
            icon={IdCard}
            title="Apply for IEC"
            desc="Importer Exporter Code issuance & modification."
            color="from-orange-400 to-orange-600"
          />
          <ServiceCard
            icon={Receipt}
            title="E-Scrip / RoDTEP"
            desc="Manage Duty Credit Scrips digitally."
            color="from-green-400 to-green-600"
          />
          <ServiceCard
            icon={Package}
            title="Advance Authorization"
            desc="Duty-free import of export inputs."
            color="from-purple-400 to-purple-600"
          />
          <ServiceCard
            icon={Globe}
            title="Certificate of Origin"
            desc="Apply for Preferential & Non-Preferential CoO."
            color="from-blue-400 to-blue-600"
          />
        </div>
      </div>
    </section>
  );
}

/* ---------------- Helpers ---------------- */

function HeroLink({ label }) {
  return (
    <a href="#" className="underline hover:text-white transition">
      {label}
    </a>
  );
}

function ServiceCard({ icon: Icon, title, desc, color }) {
  return (
    <div className="bg-white/10 backdrop-blur-md p-6 rounded-2xl border border-white/10 hover:bg-white/20 hover:border-white/30 transition group cursor-pointer shadow-lg">
      <div
        className={`bg-gradient-to-br ${color} w-12 h-12 rounded-xl flex items-center justify-center mb-4 shadow-lg group-hover:scale-110 transition`}
      >
        <Icon className="text-white w-6 h-6" />
      </div>
      <h3 className="font-bold text-lg group-hover:text-blue-200 transition">
        {title}
      </h3>
      <p className="text-xs text-blue-200 mt-2 leading-relaxed">
        {desc}
      </p>
    </div>
  );
}
