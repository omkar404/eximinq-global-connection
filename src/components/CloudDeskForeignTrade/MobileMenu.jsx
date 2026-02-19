import React from "react";
import { X, Phone, Mail, MessageCircle } from "lucide-react";
import BrandLogo from "../BrandLogo/BrandLogo";
import { Link } from "react-router-dom";
import { navLinks } from "../../Common/navLinks";

const MobileMenu = ({ isMenuOpen, setIsMenuOpen, setShowModal })=> {
  if (!isMenuOpen) return null;

  return (
    <div className="absolute top-[69px] left-0 w-full bg-white shadow-xl border-t z-40 animate-slideDown">
      <div className="flex flex-col items-center py-6 space-y-4 text-gray-800 font-medium">

        {navLinks.map((link) =>
          link.isDropdown ? (
            <div key={link.name} className="flex flex-col items-center gap-4">

              <span className="text-base font-semibold">
                {link.name}
              </span>

              {link.children.map((child) => (
                <Link
                  key={child.path}
                  to={child.path}
                  onClick={() => setIsMenuOpen(false)}
                  className="text-gray-600 hover:text-teal-500 text-sm"
                >
                  {child.name}
                </Link>
              ))}

            </div>
          ) : (
            <Link
              key={link.path}
              to={link.path}
              onClick={() => setIsMenuOpen(false)}
              className="hover:text-teal-500 text-base"
            >
              {link.name}
            </Link>
          )
        )}

        <div className="w-full border-t border-gray-200"></div>

        <div className="text-center">
          <p className="text-xs text-gray-500">24/7 Helpdesk</p>
          <p className="text-sm font-bold font-mono">+917400096950</p>
        </div>

        <button
          className="w-11/12 py-3 bg-gradient-to-r from-teal-600 to-indigo-700 text-white text-sm font-bold rounded-lg shadow-lg hover:shadow-xl"
          onClick={() => {
            setShowModal(true);
            setIsMenuOpen(false);
          }}
        >
          Enroll Now
        </button>
      </div>
    </div>
  );
}

export default MobileMenu;