import React from "react";
import { Menu, X } from "lucide-react";
import BrandLogo from "../BrandLogo/BrandLogo";

const NavbarAEO = ({ isMenuOpen, setIsMenuOpen }) => {
  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 py-3 grid grid-cols-3 items-center">
        {/* Logo (Left) */}
        <div className="flex items-center">
          <a href="https://eximinq.in/">
            <BrandLogo />
          </a>
        </div>

        <div className="hidden md:flex justify-center space-x-6 font-medium text-gray-800">
          <a className="hover:text-teal-500 whitespace-nowrap" href="/">
            Home
          </a>
          <a className="hover:text-teal-500 whitespace-nowrap" href="/services">
            Services
          </a>
          <a
            className="hover:text-teal-500 whitespace-nowrap"
            href="/foreign-trade-policy"
          >
            Foreign Trade Policy
          </a>
          <a
            className="hover:text-teal-500 whitespace-nowrap"
            href="/dgft-customs-consultancy"
          >
            DGFT & Customs
          </a>
          <a
            className="hover:text-teal-500 whitespace-nowrap"
            href="/certificate-of-origin"
          >
            COO
          </a>
          <a
            className="hover:text-teal-500 whitespace-nowrap"
            href="/compliance-trade-india"
          >
            Compliance
          </a>
          <a
            className="hover:text-teal-500 whitespace-nowrap"
            href="/contact-us"
          >
            Cloud Desk
          </a>
          <a
            className="hover:text-teal-500 whitespace-nowrap"
            href="/clouddesk-saas"
          >
            SAAS
          </a>
        </div>

        {/* Mobile Toggle (Right) */}
        <div className="flex justify-end md:hidden">
          <button
            className="text-gray-600"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default NavbarAEO;
