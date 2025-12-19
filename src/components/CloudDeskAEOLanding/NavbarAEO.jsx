import React from "react";
import { Menu, X } from "lucide-react";
import BrandLogo from "../BrandLogo/BrandLogo";

const NavbarAEO = ({ isMenuOpen, setIsMenuOpen }) => {
  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        
        {/* Logo */}
        <div className="flex items-center">
          <a href="https://eximinq.in/" className="cursor-pointer">
            <BrandLogo />
          </a>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8 items-center">
          <a href="#home" className="hover:text-blue-700 font-medium">Home</a>
          <a href="#deadline" className="hover:text-blue-700 font-medium text-red-600">Deadline</a>
          <a href="#services" className="hover:text-blue-700 font-medium">Services</a>
          <a 
            href="#contact"
            className="bg-blue-600 text-white px-5 py-2 rounded-full hover:bg-blue-700 transition"
          >
            Contact Cloud Desk
          </a>
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden text-gray-600" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Dropdown */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t p-4 flex flex-col space-y-4 shadow-lg">
          <a href="#home" onClick={() => setIsMenuOpen(false)}>Home</a>
          <a href="#deadline" className="text-red-600 font-bold" onClick={() => setIsMenuOpen(false)}>Urgent Deadline</a>
          <a href="#services" onClick={() => setIsMenuOpen(false)}>Our Services</a>
          <a href="#contact" className="text-blue-600 font-bold" onClick={() => setIsMenuOpen(false)}>Contact Cloud Desk</a>
        </div>
      )}
    </nav>
  );
};

export default NavbarAEO;