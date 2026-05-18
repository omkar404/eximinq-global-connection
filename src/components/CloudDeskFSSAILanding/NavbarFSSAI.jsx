// import React from 'react';
// import { PhoneCall } from 'lucide-react';

// const BrandLogo = () => (
//   <div className="flex flex-col">
//     <div className="flex flex-col leading-none">
//       <svg viewBox="0 0 320 65" className="h-10 md:h-12 w-auto" fill="none" xmlns="http://www.w3.org/2000/svg">
//         <defs>
//           <linearGradient id="mainGradient" x1="0" y1="0" x2="1" y2="0">
//             <stop offset="0%" stopColor="#0891b2" />
//             <stop offset="45%" stopColor="#1e3a8a" />
//             <stop offset="100%" stopColor="#7f1d1d" />
//           </linearGradient>
//         </defs>
//         <text x="0" y="42" fontFamily="sans-serif" fontWeight="800" fontSize="44" fill="url(#mainGradient)">EXIMINQ</text>
//         <text x="2" y="60" fontFamily="sans-serif" fontWeight="600" fontSize="11" letterSpacing="0.28em" fill="#334155">GLOBAL CONNECTIONS</text>
//       </svg>
//     </div>
//     <div className="flex items-center space-x-3 mt-1 pl-1">
//       <svg viewBox="0 0 100 100" className="h-7 w-7 md:h-9 md:w-9" fill="none" stroke="currentColor" strokeWidth="1.5">
//         <path d="M50 10 L90 30 L90 70 L50 90 L10 70 L10 30 Z" stroke="#6366f1" strokeWidth="2" fill="none"/>
//         <path d="M50 10 L50 30 M90 30 L70 40 M90 70 L70 60 M50 90 L50 70 M10 70 L30 60 M10 30 L30 40" stroke="#818cf8"/>
//         <path d="M50 30 L70 40 L70 60 L50 70 L30 60 L30 40 Z" stroke="#4f46e5" fill="rgba(99, 102, 241, 0.1)"/>
//         <circle cx="50" cy="50" r="3" fill="#6366f1"/>
//       </svg>
//       <div className="text-2xl md:text-3xl font-bold tracking-tight leading-none flex items-baseline">
//         <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 to-blue-700">Cloud</span>
//         <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-700 to-red-900 ml-2">Desk</span>
//       </div>
//     </div>
//   </div>
// );

// export default function NavbarEPR({ scrolled }) {
//   return (
//     <nav className={`fixed w-full z-40 transition-all duration-300 ${scrolled ? 'bg-white/95 backdrop-blur-md shadow-lg py-3 top-0' : 'bg-transparent py-4 top-8'}`}>
//       <div className="container mx-auto px-6 flex justify-between items-center">
//         <BrandLogo />
//         <div className="hidden md:flex items-center space-x-8">
//           <a href="#details" className="text-slate-600 hover:text-red-600 font-semibold transition-colors">EPR Guidelines</a>
//           <a href="#fees" className="text-slate-600 hover:text-red-600 font-semibold transition-colors">Official Fees</a>
//           <a href="#consequences" className="text-slate-600 hover:text-red-600 font-semibold transition-colors">Customs Risks</a>
//           <a href="#expertise" className="text-slate-600 hover:text-sky-600 font-semibold transition-colors">Our Expertise</a>
//           <div className="flex items-center space-x-2 text-slate-800 font-bold">
//             <PhoneCall className="w-4 h-4 text-sky-600" />
//             <span>+91 74000 96950</span>
//           </div>
//         </div>
//       </div>
//     </nav>
//   );
// }

import { Link } from "react-router-dom";
import BrandLogo from "../BrandLogo/BrandLogo";
import { Phone, Mail, MessageCircle } from "lucide-react";
import { navLinks } from "../../Common/navLinks";

const NavbarFSSAI = ({
  setShowEnrollModal = () => {}, // ✅ Default prop — agar koi page prop pass na kare toh crash nahi hoga
  scrolled,
  isMenuOpen,
  setIsMenuOpen,
}) => {
  // ✅ Fix 1: was `=> return { (` — should be `=> {`
  return (
    // ✅ Fix 2: return is inside the function body
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-white shadow-md py-2" : "bg-white py-3"
      }`}
    >
      <div className="container mx-auto px-4 md:px-8 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center">
          <Link to="/" className="cursor-pointer">
            <BrandLogo />
          </Link>
        </div>
        {/* Desktop menu */}
        <div className="hidden md:flex items-center gap-8 font-smedium text-gray-800">
          {navLinks.map((link) =>
            link.isDropdown ? (
              <div key={link.name} className="relative group">
                <span className="cursor-pointer hover:text-teal-500">
                  {link.name}
                </span>

                {/* Dropdown */}
                <div className="absolute left-0 mt-4 w-72 bg-gray-100 rounded-2xl shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 p-6 z-50">
                  <div className="flex flex-col space-y-6">
                    {link.children.map((child) => (
                      <Link
                        key={child.path}
                        to={child.path}
                        className="text-gray-600 text-lg hover:text-teal-600 transition"
                      >
                        {child.name}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            ) : (
              <Link
                key={link.path}
                to={link.path}
                className="hover:text-teal-500"
              >
                {link.name}
              </Link>
            ),
          )}
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
                    +91 74000 96950 →
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

          {/* Enroll Now Button */}
          <button
            onClick={() => setShowEnrollModal({ open: true, type: "Enroll" })}
            className="px-5 py-2 text-sm font-bold text-white bg-gradient-to-r from-teal-600 to-indigo-700 rounded-lg shadow-lg hover:shadow-xl"
          >
            Enroll Now
          </button>
        </div>{" "}
        {/* ✅ Fix 3: closing div for "Desktop buttons" missing tha */}
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

        <div className="container mx-auto px-4 md:px-8 py-3 flex flex-wrap gap-6 justify-center">
          <a
            href="#guidelines"
            className="text-gray-700 hover:text-teal-600 font-medium"
          >
            FSSAI Guidelines
          </a>
          <a
            href="#penalties"
            className="text-gray-700 hover:text-teal-600 font-medium"
          >
            Penalty Structure
          </a>
          <a
            href="#consequences"
            className="text-gray-700 hover:text-teal-600 font-medium"
          >
            Customs Risks
          </a>
          <a
            href="#expertise"
            className="text-gray-700 hover:text-teal-600 font-medium"
          >
            Our Expertise
          </a>
        </div>
    </nav>
  );
};

export default NavbarFSSAI;
