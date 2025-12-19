import React, { useState, useEffect } from "react";
import BrandLogo from "../BrandLogo/BrandLogo";

const NavbarStartup = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-slate-900/95 backdrop-blur-md shadow-lg py-3"
          : "bg-transparent py-6"
      }`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
                            <a href="https://eximinq.in/" className="cursor-pointer">
            <BrandLogo />
          </a>

        <div className="hidden md:flex items-center space-x-8">
          <a
            href="#process"
            className="text-slate-300 hover:text-sky-400 transition text-sm font-medium"
          >
            Process
          </a>
          <a
            href="#make-in-india"
            className="text-slate-300 hover:text-sky-400 transition text-sm font-medium"
          >
            Benefits
          </a>
          <a
            href="#solutions"
            className="text-slate-300 hover:text-sky-400 transition text-sm font-medium"
          >
            Services
          </a>
          <a
            href="#contact"
            className="px-6 py-2 bg-gradient-to-r from-sky-600 to-blue-600 hover:from-sky-500 hover:to-blue-500 text-white rounded-full text-sm font-bold transition shadow-lg shadow-sky-900/50"
          >
            Start Exporting
          </a>
        </div>
      </div>
    </nav>
  );
};

export default NavbarStartup;
