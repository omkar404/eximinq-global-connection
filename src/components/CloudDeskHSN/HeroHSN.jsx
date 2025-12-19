import React from "react";
import { BookOpen } from "lucide-react";

const HeroHSN = () => {
  return (
    <header className="bg-indigo-900 text-white pt-32 pb-20 relative overflow-hidden">
      
      <BookOpen
        size={400}
        className="absolute opacity-10 -right-24 -bottom-20"
      />

      <div className="container mx-auto px-4 text-center relative z-10">
        <h1 className="text-5xl font-bold mb-4">
          HS Code Finder{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-indigo-300">
            (Customs Duty + Policy)
          </span>
        </h1>
        <p className="text-indigo-200 text-lg max-w-2xl mx-auto">
          Instantly find accurate HSN classification with BCD, AIDC, IGST & RoDTEP.
        </p>
      </div>
    </header>
  );
};

export default HeroHSN;
