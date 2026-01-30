import React from "react";
import BrandLogo from "../BrandLogo/BrandLogo";

export const MainNavbar = ({
  scrolled,
  isMenuOpen,
  setIsMenuOpen,
  setShowEnrollModal,
}) => {
  return (
    <nav
      className={`fixed w-full z-40 transition-all duration-300 top-0 ${
        scrolled ? "bg-white shadow-md py-2" : "bg-white py-3"
      }`}
    >
      <div className="container mx-auto px-4 md:px-8 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center">
          <a href="https://eximinq.in/" className="cursor-pointer">
            <BrandLogo />
          </a>
        </div>

        {/* Desktop menu */}
        <div className="hidden md:flex items-center space-x-8 font-medium text-gray-800">
          <a className="hover:text-teal-500" href="/">
            Home
          </a>
          <a className="hover:text-teal-500" href="/services">
            Services
          </a>
          <a className="hover:text-teal-500" href="/dgft-customs-consultancy">
            DGFT & Customs
          </a>
          <a className="hover:text-teal-500" href="/certificate-of-origin">
            COO
          </a>
          <a className="hover:text-teal-500" href="/compliance-trade-india">
            Compliance
          </a>
          <a className="hover:text-teal-500" href="/contact-us">
            Contact
          </a>
          <a className="hover:text-teal-500" href="/clouddesk-saas">
            SAAS
          </a>
        </div>

        {/* Desktop buttons */}
        <div className="hidden md:flex items-center space-x-6">
          <div className="hidden lg:flex flex-col text-right">
            <span className="text-xs opacity-80">24/7 Helpdesk</span>
            <span className="text-sm font-bold font-mono">+917400096950</span>
          </div>

          <button
            onClick={() => setShowEnrollModal({ open: true, type: "" })}
            className="px-5 py-2 text-sm font-bold text-white bg-gradient-to-r from-teal-600 to-indigo-700 rounded-lg shadow-lg hover:shadow-xl"
          >
            Enroll Now
          </button>
        </div>

        {/* Hamburger */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className={`md:hidden text-3xl font-bold ${
            scrolled ? "text-gray-800" : "text-gray-800"
          }`}
        >
          {isMenuOpen ? "✕" : "☰"}
        </button>
      </div>
    </nav>
  );
};
