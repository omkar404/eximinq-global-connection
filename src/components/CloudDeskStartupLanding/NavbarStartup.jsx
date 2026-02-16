// import React, { useState, useEffect } from "react";
// import BrandLogo from "../BrandLogo/BrandLogo";

// const NavbarStartup = () => {
//   const [scrolled, setScrolled] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => setScrolled(window.scrollY > 50);
//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   return (
//     <nav
//       className={`fixed w-full z-50 transition-all duration-300 ${
//         scrolled
//           ? "bg-slate-900/95 backdrop-blur-md shadow-lg py-3"
//           : "bg-transparent py-6"
//       }`}
//     >
//       <div className="container mx-auto px-6 flex justify-between items-center">
//                             <a href="https://eximinq.in/" className="cursor-pointer">
//             <BrandLogo />
//           </a>

//         <div className="hidden md:flex items-center space-x-8">
//           <a
//             href="#process"
//             className="text-slate-300 hover:text-sky-400 transition text-sm font-medium"
//           >
//             Process
//           </a>
//           <a
//             href="#make-in-india"
//             className="text-slate-300 hover:text-sky-400 transition text-sm font-medium"
//           >
//             Benefits
//           </a>
//           <a
//             href="#solutions"
//             className="text-slate-300 hover:text-sky-400 transition text-sm font-medium"
//           >
//             Services
//           </a>
//           <a
//             href="#contact"
//             className="px-6 py-2 bg-gradient-to-r from-sky-600 to-blue-600 hover:from-sky-500 hover:to-blue-500 text-white rounded-full text-sm font-bold transition shadow-lg shadow-sky-900/50"
//           >
//             Start Exporting
//           </a>
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default NavbarStartup;

import { Link } from "react-router-dom";
import React from "react";
import BrandLogo from "../BrandLogo/BrandLogo";
import { Phone, Mail, MessageCircle } from "lucide-react";

export const NavbarStartup = ({
  scrolled,
  isMenuOpen,
  setIsMenuOpen,
  setShowModal,
}) => {
  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-white shadow-md py-2" : "bg-white py-3"
      }`}
    >
      <div className="container mx-auto px-4 md:px-8 flex justify-between items-center">

        {/* Logo */}
        <div className="flex items-center">
                              {/* <a href="https://eximinq.in/" className="cursor-pointer">
            <BrandLogo />
          </a> */}
                              <Link to="/" className="cursor-pointer">
            <BrandLogo />
          </Link>
        </div>

        {/* Desktop menu */}
        <div className="hidden md:flex items-center space-x-4 font-smedium text-gray-800">
          <a className="hover:text-teal-500" href="/">Home</a>
          <a className="hover:text-teal-500" href="/services">Services</a>
          <a className="hover:text-teal-500" href="/foreign-trade-policy">Foreign Trade Policy</a > 
          <a className="hover:text-teal-500" href="/dgft-customs-consultancy">DGFT & Customs</a>
          <a className="hover:text-teal-500" href="/certificate-of-origin">COO</a>
          <a className="hover:text-teal-500" href="/compliance-trade-india">Compliance</a>
          <a className="hover:text-teal-500" href="/contact-us">Contact</a>
          <a className="hover:text-teal-500" href="/clouddesk-saas">SAAS</a>
        </div>

        {/* Desktop buttons */}
        
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
            onClick={() => setShowModal(true)}
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
