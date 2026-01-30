import React from "react";
import { Search } from "lucide-react";
const HeroServices = ({ searchQuery, setSearchQuery }) => {
  return (
    <header className="bg-[#000000] text-white pt-32 pb-16 relative overflow-hidden">

      {/* Background Image */}
            <div className="absolute inset-0 z-0 opacity-20">
        <div className="absolute top-0 right-0 w-96 h-96 bg-teal-500 rounded-full mix-blend-multiply filter blur-3xl animate-blob" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-red-600 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000" />
        <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-indigo-500 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-4000" />

        {/* World Map Background */}
        <div className="absolute inset-0 bg-[url('https://upload.wikimedia.org/wikipedia/commons/e/ec/World_map_blank_without_borders.svg')] bg-cover bg-center opacity-10" />
      </div>

      {/* Overlay */}
      {/* <div className="absolute inset-0 bg-gradient-to-r from-[#000000] to-[#000000]/80" /> */}

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col items-center text-center">

          {/* Heading */}
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Our Services
          </h1>

          <p className="text-xl text-indigo-100 max-w-2xl">
            From DGFT Licensing to End-to-End Logistics & Regulatory Compliance.
          </p>

          {/* Search Bar */}
          <div className="mt-8 w-full max-w-xl relative">
            <input
              type="text"
              placeholder="Find a service (e.g. BIS, Freight, RoDTEP)"
              className="w-full py-4 pl-12 pr-4 rounded-full text-gray-800 shadow-lg focus:outline-none focus:ring-2 focus:ring-teal-400"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <Search className="absolute left-4 top-4 text-gray-400" size={20} />
          </div>
        </div>
      </div>
    </header>
  );
};


export default HeroServices;
