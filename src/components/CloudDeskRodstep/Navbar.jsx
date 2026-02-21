import React, { useState, useEffect } from "react";
import { Phone, Mail, MessageCircle } from "lucide-react";
import BrandLogo from "../BrandLogo/BrandLogo";
import { navLinks } from "../../Common/navLinks";
import { Link } from "react-router-dom";
// import { MobileMenu } from "./MobileMenu";

export function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <nav
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          scrolled ? "bg-white shadow-md py-2" : "bg-white py-3"
        }`}
      >
        <div className="container mx-auto px-4 md:px-8 flex justify-between items-center">
          {/* Logo */}
          <a href="/" className="flex items-center">
            <BrandLogo />
          </a>

          {/* Desktop Nav */}
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
          {/* Desktop Actions */}
          <div className="hidden md:flex items-center space-x-6">
            {/* Contact Hover */}
            <div className="relative group">
              <div className="flex items-center gap-3 px-4 py-2 border border-blue-400 rounded-full cursor-pointer hover:bg-blue-50 transition">
                <Phone size={18} className="text-blue-600" />
                <Mail size={18} className="text-indigo-600" />
                <MessageCircle size={18} className="text-green-500" />
              </div>

              <div className="absolute right-0 mt-4 w-[420px] bg-white rounded-2xl shadow-2xl p-6 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                <div className="grid grid-cols-3 gap-6 text-center">
                  <ContactCard
                    icon={<Phone className="text-blue-600" />}
                    title="Call"
                    desc="Legal & trade assistance"
                    action="+91 74000 96950"
                    href="tel:+917400096950"
                  />
                  <ContactCard
                    icon={<Mail className="text-indigo-600" />}
                    title="Email"
                    desc="Drop us a query"
                    action="Email Us"
                    href="mailto:clouddesk@eximinq.in"
                  />
                  <ContactCard
                    icon={<MessageCircle className="text-green-600" />}
                    title="WhatsApp"
                    desc="Quick support"
                    action="Chat Now"
                    href="https://wa.me/917400096950"
                  />
                </div>
              </div>
            </div>

            {/* CTA */}
            <button className="px-5 py-2 text-sm font-bold text-white bg-gradient-to-r from-teal-600 to-indigo-700 rounded-lg shadow hover:shadow-xl transition">
              Enroll Now
            </button>
          </div>

          {/* Mobile Hamburger */}
          <button
            onClick={() => setMenuOpen(true)}
            className="md:hidden text-3xl font-bold text-gray-800"
          >
            ☰
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {/* <MobileMenu open={menuOpen} onClose={() => setMenuOpen(false)} /> */}
    </>
  );
}

/* ---------------- Helpers ---------------- */

function NavLink({ label, href }) {
  return (
    <a
      href={href}
      className="hover:text-teal-500 transition"
    >
      {label}
    </a>
  );
}

function ContactCard({ icon, title, desc, action, href }) {
  return (
    <div className="flex flex-col items-center gap-3">
      <div className="w-12 h-12 rounded-full bg-gray-50 flex items-center justify-center">
        {icon}
      </div>
      <p className="font-semibold">{title}</p>
      <p className="text-sm text-gray-500">{desc}</p>
      <a
        href={href}
        className="text-blue-600 font-medium text-sm hover:underline"
      >
        {action} →
      </a>
    </div>
  );
}
