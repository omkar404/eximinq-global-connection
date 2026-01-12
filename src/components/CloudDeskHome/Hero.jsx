import React from "react";
import { Search, Briefcase, BookOpen } from "lucide-react";

export const Hero = ({ setShowEnrollModal }) => {
  return (
    <header className="relative bg-[#000000] text-white pt-28 pb-16 md:pt-40 md:pb-32 overflow-hidden">
      {/* Background Blobs */}
      <div className="absolute inset-0 z-0 opacity-20 pointer-events-none">
        <div className="absolute top-0 right-0 w-64 h-64 md:w-96 md:h-96 bg-teal-500 rounded-full mix-blend-multiply blur-3xl animate-blob" />
        <div className="absolute bottom-0 left-0 w-64 h-64 md:w-96 md:h-96 bg-red-600 rounded-full mix-blend-multiply blur-3xl animate-blob animation-delay-2000" />
        <div className="absolute top-1/2 left-1/2 w-64 h-64 md:w-96 md:h-96 bg-indigo-500 rounded-full mix-blend-multiply blur-3xl animate-blob animation-delay-4000" />

        {/* World Map Background */}
        <div className="absolute inset-0 bg-[url('https://upload.wikimedia.org/wikipedia/commons/e/ec/World_map_blank_without_borders.svg')] bg-cover bg-center opacity-10" />
      </div>

      <div className="container mx-auto px-4 relative z-10 text-center">
        {/* Tagline */}
        <div
          className="inline-block px-4 py-1 mb-6 rounded-full bg-white/10 border border-white/20 
        backdrop-blur-sm text-sm font-medium text-teal-200"
        >
          Assisting Importers, Exporters, CHA & Logistics
        </div>

        {/* Heading */}
        {/* <h1 className="text-3xl md:text-6xl font-bold mb-4 leading-tight">
          Your 24/7{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-indigo-300">
            DGFT, Customs & Compliance
          </span>{" "}
          <br className="md:hidden" />24/7 Helpdesk
        </h1> */}

        <h1 className="text-3xl md:text-6xl font-bold leading-tight">
          <span className="block text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-indigo-300">
            DGFT, Customs & Compliance
          </span>
          <span className="block mt-2">24/7 Helpdesk</span>
        </h1>

        {/* Subtext */}
        <p className="text-base md:text-xl text-indigo-100 mb-8 max-w-2xl mx-auto">
          Expert day-to-day assistance for trade compliance. From IEC
          registration to complex customs clearance issues — we manage
          everything for you.
        </p>

        {/* Search Bar */}
        <div
          className="
          bg-white p-3 md:p-4 rounded-2xl shadow-2xl border border-gray-100 
          max-w-4xl mx-auto 
          flex flex-col md:flex-row gap-3 md:gap-2 
          transition duration-300
        "
        >
          {/* Search Field */}
          <div className="flex-1 w-full relative">
            <Search className="absolute left-4 top-3.5 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Search Services (e.g., EPCG, Customs Duty, IEC)"
              className="w-full pl-12 pr-4 py-3 rounded-xl focus:outline-none focus:bg-gray-50 
              text-gray-800 placeholder-gray-400 font-medium"
            />
          </div>

          {/* Divider */}
          <div className="hidden md:block w-px h-10 bg-gray-300" />

          {/* Issue Type */}
          <div className="flex-1 w-full relative">
            <BookOpen className="absolute left-4 top-3.5 text-gray-400 w-5 h-5" />
            <select className="w-full pl-12 pr-4 py-3 rounded-xl bg-transparent font-medium text-gray-800 focus:outline-none focus:bg-gray-50 cursor-pointer">
              <option>Select Issue Type</option>
              <option>DGFT Notification</option>
              <option>Customs Duty</option>
              <option>Logistics Support</option>
              <option>Compliance Audit</option>
            </select>
          </div>

          {/* Divider */}
          <div className="hidden md:block w-px h-10 bg-gray-300" />

          {/* Sector Select */}
          <div className="flex-1 w-full relative">
            <Briefcase className="absolute left-4 top-3.5 text-gray-400 w-5 h-5" />
            <select className="w-full pl-12 pr-4 py-3 rounded-xl bg-transparent font-medium text-gray-800 focus:outline-none focus:bg-gray-50 cursor-pointer">
              <option>All Sectors</option>
              <option>Agriculture & Food</option>
              <option>Engineering</option>
              <option>Pharmaceuticals</option>
              <option>Textiles</option>
              <option>Electronics</option>
            </select>
          </div>

          {/* Button */}
          <button
            onClick={() => setShowEnrollModal({ open: true, type: "home_enroll" })} 
            className="w-full md:w-auto bg-gradient-to-r from-indigo-700 to-red-800 
            text-white font-bold py-3 px-8 rounded-xl hover:shadow-lg transition"
          >
            Enroll Now
          </button>
        </div>
      </div>
    </header>
  );
};
