import React from "react";
import BrandLogo from "../../BrandLogo/BrandLogo";
import useScroll from "../../../hooks/useScroll";

const Navbar = ({ setOpenSupport }) => {
  const scrolled = useScroll(50); // threshold = 50px scroll

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 
        ${scrolled ? "bg-slate-900/90 shadow-lg py-2" : "bg-transparent py-6"}`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        <a
          href="https://www.eximinq.in/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <BrandLogo />
        </a>

        {/* OPEN MODAL BUTTON */}
        {/* <button
          onClick={() => setOpenSupport(true)}
          className="hidden md:flex items-center px-6 py-2 bg-white/10 hover:bg-white/20 
          border border-white/10 rounded-full transition-all text-sm font-medium backdrop-blur-sm"
        >
          Contact Support
        </button> */}
      </div>
    </nav>
  );
};

export default Navbar;
