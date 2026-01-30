import React from "react";
import { Menu, X } from "lucide-react";
import { Phone, Mail, MessageCircle } from "lucide-react";

import BrandLogo from "../BrandLogo/BrandLogo";

const NavbarDGFT = ({ scrolled, isMenuOpen, setIsMenuOpen, setShowEnrollModal }) => {
  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 bg-white shadow-md ${
        scrolled ? "py-2" : "py-3"
      }`}
    >
      <div className="container mx-auto px-4 md:px-8 flex justify-between items-center">

        {/* BRAND LOGO */}
                            <a href="https://eximinq.in/" className="cursor-pointer">
            <BrandLogo />
          </a>

        {/* DESKTOP MENU */}
        <div className="hidden md:flex space-x-4 font-smedium text-gray-700">
          <a href="/" className="hover:text-teal-600 transition">Home</a>
          <a href="/services" className="hover:text-teal-600 transition">Services</a>
          <a href="/foreign-trade-policy" className="hover:text-teal-600 transition">Foreign Trade Policy</a>
          <a href="/dgft-customs-consultancy" className="text-teal-600 font-bold transition">
            DGFT & Customs
          </a>
          <a href="/certificate-of-origin" className="hover:text-teal-600 transition">COO</a>
          <a href="/compliance-trade-india" className="hover:text-teal-600 transition">Compliance</a>
          <a href="/contact-us" className="hover:text-teal-600 transition">Contact</a>
          <a href="/clouddesk-saas" className="hover:text-teal-500 transition">SAAS</a>
        </div>

        {/* DESKTOP ACTIONS */}
        <div className="hidden md:flex items-center space-x-6">
          {/* Contact Dropdown */}
          <div className="relative group hidden md:block">
            <div className="flex items-center gap-3 px-4 py-2 border border-blue-400 rounded-full cursor-pointer hover:bg-blue-50 transition">
              <Phone size={18} className="text-blue-600" />
              <Mail size={18} className="text-blue-600" />
              <MessageCircle size={18} className="text-green-500" />
            </div>

            <div className="absolute right-0 mt-4 w-[420px] bg-white rounded-2xl shadow-2xl p-6 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
              <div className="grid grid-cols-3 gap-6 text-center">
                <div className="flex flex-col items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-blue-50 flex items-center justify-center">
                    <Phone className="text-blue-600" />
                  </div>
                  <p className="font-semibold">Call</p>
                  <p className="text-sm text-gray-500">
                    Connect with us for legal assistance
                  </p>
                  <a
                    href="tel:+917400096950"
                    className="text-blue-600 font-medium text-sm hover:underline"
                  >
                    +917400096950 →
                  </a>
                </div>

                <div className="flex flex-col items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-indigo-50 flex items-center justify-center">
                    <Mail className="text-indigo-600" />
                  </div>
                  <p className="font-semibold">Email</p>
                  <p className="text-sm text-gray-500">
                    Need help? Drop us an email
                  </p>
                  <a
                    href="mailto:clouddesk@eximinq.in"
                    className="text-blue-600 font-medium text-sm hover:underline"
                  >
                    Email Us →
                  </a>
                </div>

                <div className="flex flex-col items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-green-50 flex items-center justify-center">
                    <MessageCircle className="text-green-600" />
                  </div>
                  <p className="font-semibold">WhatsApp</p>
                  <p className="text-sm text-gray-500">
                    Need a quick help? Leave a message
                  </p>
                  <a
                    href="https://wa.me/917400096950"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 font-medium text-sm hover:underline"
                  >
                    Text Us →
                  </a>
                </div>
              </div>
            </div>
          </div>

          <button
            onClick={() => setShowEnrollModal({ open: true, type: "certificate_of_origin_enroll" })}
            className="px-5 py-2 text-sm font-bold text-white bg-gradient-to-r from-teal-600 to-indigo-700 rounded-lg shadow-lg hover:shadow-xl"
          >
            Enroll Now
          </button>
        </div>

        {/* MOBILE MENU ICON */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle Menu"
          className="md:hidden text-gray-700"
        >
          {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>
    </nav>
  );
};

export default NavbarDGFT;
