import React from "react";

const SecondaryNavbar = ({ scrollToSection }) => {
  return (
    <div className="sticky top-[88px] z-40 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4">
        <div className="hidden md:flex justify-center items-center space-x-8 py-4">
          <NavButton
            label="Live Rates"
            onClick={() => scrollToSection("rates")}
          />
          <NavButton
            label="How It Works"
            onClick={() => scrollToSection("process")}
          />
          <NavButton
            label="Calculator"
            onClick={() => scrollToSection("calculator")}
          />
          <NavButton
            label="About Schemes"
            onClick={() => scrollToSection("about")}
          />
          {/* <button
            onClick={() => scrollToSection("contact")}
            className="bg-blue-700 hover:bg-blue-800 text-white px-6 py-2.5 rounded-full
            font-bold shadow-md transition-all hover:shadow-lg
            transform hover:-translate-y-0.5"
          >
            Trade Scrips
          </button> */}
        </div>
      </div>
    </div>
  );
};

const NavButton = ({ label, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="text-slate-700 hover:text-blue-700 font-bold
      transition relative after:absolute after:-bottom-1 after:left-0
      after:w-0 after:h-0.5 after:bg-blue-700 after:transition-all
      hover:after:w-full"
    >
      {label}
    </button>
  );
};

export default SecondaryNavbar;
