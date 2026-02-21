import React from "react";
import { Menu, X } from "lucide-react";
import BrandLogo from "../BrandLogo/BrandLogo";
import { navLinks } from "../../Common/navLinks";
import { Link } from "react-router-dom";

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

        <div className="hidden md:flex items-center gap-8 font-smedium text-gray-800">
          {navLinks.map((link) =>
            link.isDropdown ? (
              <div key={link.name} className="relative group">
                <span className="cursor-pointer hover:text-teal-500">
                  {link.name}
                </span>

                {/* Dropdown */}
                <div className="absolute left-0 mt-4 w-72 
                      bg-gray-100 rounded-2xl shadow-xl 
                      opacity-0 invisible 
                      group-hover:opacity-100 group-hover:visible 
                      transition-all duration-200 
                      p-6 z-50">

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
            )
          )}
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
