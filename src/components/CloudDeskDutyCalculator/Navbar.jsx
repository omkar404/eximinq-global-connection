import { Link } from "react-router-dom";
import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import BrandLogo from "../BrandLogo/BrandLogo";
import { navLinks } from "../../Common/navLinks";

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
                             {/* <a href="https://eximinq.in/" className="cursor-pointer">
            <BrandLogo />
          </a> */}
                    <Link to="/" className="cursor-pointer">
            <BrandLogo />
          </Link>
        </div>

        {/* DESKTOP NAV */}
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
