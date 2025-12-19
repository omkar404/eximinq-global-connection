import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import BrandLogo from "../BrandLogo/BrandLogo";

const Navbar = ({ onEnrollClick }) => {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-white shadow-md py-2" : "bg-white shadow-md py-2"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between px-4">
        {/* LOGO */}
        <div className="flex items-center">
                             <a href="https://eximinq.in/" className="cursor-pointer">
            <BrandLogo />
          </a>
        </div>

        {/* DESKTOP NAV */}
        <div
          className={`hidden md:flex space-x-8 font-medium ${
            scrolled ? "text-gray-800" : "text-gray-800"
          }`}
        >
          <a href="/" className="hover:text-teal-600 transition">
            Home
          </a>
          <a href="/services" className="hover:text-teal-600 transition">
            Services
          </a>
          <a
            href="/dgft-customs-consultancy"
            className="hover:text-teal-600 transition"
          >
            DGFT & Customs
          </a>
          <a href="/certificate-of-origin" className="hover:text-teal-600 transition">
            COO
          </a>
          <a
            href="/compliance-trade-india"
            className="hover:text-teal-600 transition"
          >
            Compliance
          </a>
          <a href="/contact-us" className="hover:text-teal-600 transition">
            Cloud Desk
          </a>
          <a href="/clouddesk-saas" className="hover:text-teal-600 transition">
            SAAS
          </a>

          {/* <button
            onClick={onEnrollClick}
            className="px-4 py-2 bg-gradient-to-r from-teal-600 to-indigo-700 text-white rounded-lg font-bold"
          >
            Enroll Now
          </button> */}
        </div>


        <div className="hidden md:flex items-center space-x-4">
          {/* Helpdesk */}
          <div
            className={`hidden lg:flex flex-col text-right mr-2 ${
              scrolled ? "bg-white py-2" : "bg-white py-2"
            }`}
          >
            <span className="text-xs font-medium opacity-80">
              24/7 Helpdesk
            </span>
            <span className="text-sm font-bold font-mono">+917400096950</span>
          </div>

          {/* Enroll Btn */}
          <button
                onClick={onEnrollClick}
            className="px-5 py-2 text-sm font-bold text-white bg-gradient-to-r from-teal-600 to-indigo-700 rounded-lg shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition"
          >
            Enroll Now
          </button>
        </div>
        {/* MOBILE MENU */}
        {/* <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? (
            <X
              size={26}
              className={scrolled ? "text-gray-800" : "text-white"}
            />
          ) : (
            <Menu
              size={26}
              className={scrolled ? "text-gray-800" : "text-white"}
            />
          )}
        </button> */}
      </div>
    </nav>
  );
};

export default Navbar;
