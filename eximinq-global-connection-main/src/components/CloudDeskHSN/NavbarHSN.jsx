import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const NavbarHSN = ({ setShowModal }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const scroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", scroll);
    return () => window.removeEventListener("scroll", scroll);
  }, []);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? "bg-white shadow-md py-2" : "bg-transparent py-4"}`}>
      <div className="container mx-auto px-4 md:px-8 flex justify-between items-center">

        {/* Logo */}
        <div className="flex items-center space-x-2">
          <div className="flex flex-col">
            <span className={`text-2xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-teal-600 via-indigo-800 to-red-800 ${scrolled ? "" : "lg:text-white"}`}>
              EXIMINQ
            </span>
            <span className={`text-sm font-semibold uppercase tracking-widest ${scrolled ? "text-gray-600" : "lg:text-gray-200"}`}>
              Contact
            </span>
          </div>
        </div>

        {/* Desktop Menu */}
        <div className={`hidden md:flex space-x-8 font-medium ${scrolled ? "text-gray-700" : "text-gray-100"}`}>
          <a className="hover:text-teal-400 transition cursor-pointer">Home</a>
          <a className="hover:text-teal-400 transition cursor-pointer">Services</a>
          <a className="hover:text-teal-400 transition cursor-pointer">DGFT & Customs</a>
          <a className="hover:text-teal-400 transition cursor-pointer">Compliance</a>
        </div>

        {/* Right side */}
        <div className="hidden md:flex items-center space-x-4">
          <div className={`hidden lg:flex flex-col text-right mr-2 ${scrolled ? "text-gray-700" : "text-gray-100"}`}>
            <span className="text-xs opacity-80">24/7 Helpdesk</span>
            <span className="text-sm font-bold font-mono">+917400096950</span>
          </div>

          <button
            onClick={() => setShowModal(true)}
            className="px-5 py-2 text-sm font-bold text-white bg-gradient-to-r from-teal-600 to-indigo-700 rounded-lg shadow-lg hover:shadow-xl transition"
          >
            Enroll Now
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <X size={28} /> : <Menu size={28} className={scrolled ? "text-gray-800" : "text-white"} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-lg p-4 space-y-4 border-t">
          <a className="block text-gray-800">Home</a>
          <a className="block text-gray-800">Services</a>
          <a className="block text-gray-800">DGFT & Customs</a>
          <a className="block text-gray-800">Compliance</a>
          <button
            onClick={() => setShowModal(true)}
            className="w-full bg-teal-600 text-white py-2 rounded-lg font-bold"
          >
            Enroll Now
          </button>
        </div>
      )}
    </nav>
  );
};

export default NavbarHSN;
