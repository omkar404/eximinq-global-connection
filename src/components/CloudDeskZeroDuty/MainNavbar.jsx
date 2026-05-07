import React from "react";
import { Link } from "react-router-dom";
import { Mail, MessageCircle, Phone } from "lucide-react";
import BrandLogo from "../BrandLogo/BrandLogo";
import { navLinks } from "../../Common/navLinks";

export const MainNavbar = ({
  scrolled,
  isMenuOpen,
  setIsMenuOpen,
  setShowEnrollModal,
}) => {
  const openModal = (actionType) =>
    setShowEnrollModal({
      open: true,
      actionType,
      source: "services/epcg-scheme",
    });

  return (
    <nav
      className={`fixed top-0 z-40 w-full transition-all duration-300 ${
        scrolled ? "bg-white py-2 shadow-md" : "bg-white py-3"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between px-4 md:px-8">
        <div className="flex items-center">
          <Link to="/" className="cursor-pointer">
            <BrandLogo />
          </Link>
        </div>

        <div className="hidden items-center gap-8 font-smedium text-gray-800 md:flex">
          {navLinks.map((link) =>
            link.isDropdown ? (
              <div key={link.name} className="group relative">
                <span className="cursor-pointer hover:text-teal-500">
                  {link.name}
                </span>
                <div className="invisible absolute left-0 mt-4 w-72 rounded-2xl bg-gray-100 p-6 opacity-0 shadow-xl transition-all duration-200 group-hover:visible group-hover:opacity-100">
                  <div className="flex flex-col space-y-6">
                    {link.children.map((child) => (
                      <Link
                        key={child.path}
                        to={child.path}
                        className="text-lg text-gray-600 transition hover:text-teal-600"
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

        <div className="hidden items-center space-x-6 md:flex">
          <div className="group relative hidden md:block">
            <div className="flex cursor-pointer items-center gap-3 rounded-full border border-blue-400 px-4 py-2 transition hover:bg-blue-50">
              <Phone size={18} className="text-blue-600" />
              <Mail size={18} className="text-blue-600" />
              <MessageCircle size={18} className="text-green-500" />
            </div>

            <div className="invisible absolute right-0 mt-4 w-[420px] rounded-2xl bg-white p-6 opacity-0 shadow-2xl transition-all duration-200 group-hover:visible group-hover:opacity-100">
              <div className="grid grid-cols-3 gap-6 text-center">
                <div className="flex flex-col items-center gap-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-50">
                    <Phone className="text-blue-600" />
                  </div>
                  <p className="font-semibold">Call</p>
                  <p className="text-sm text-gray-500">
                    Connect with us for EPCG support
                  </p>
                  <a
                    href="tel:+917400096950"
                    className="text-sm font-medium text-blue-600 hover:underline"
                  >
                    +917400096950
                  </a>
                </div>

                <div className="flex flex-col items-center gap-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-indigo-50">
                    <Mail className="text-indigo-600" />
                  </div>
                  <p className="font-semibold">Email</p>
                  <p className="text-sm text-gray-500">
                    Need help? Drop us an email
                  </p>
                  <a
                    href="mailto:clouddesk@eximinq.in"
                    className="text-sm font-medium text-blue-600 hover:underline"
                  >
                    Email Us
                  </a>
                </div>

                <div className="flex flex-col items-center gap-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-green-50">
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
                    className="text-sm font-medium text-blue-600 hover:underline"
                  >
                    Text Us
                  </a>
                </div>
              </div>
            </div>
          </div>

          <button
            onClick={() => openModal("Enroll Now")}
            className="rounded-lg bg-gradient-to-r from-teal-600 to-indigo-700 px-5 py-2 text-sm font-bold text-white shadow-lg hover:shadow-xl"
          >
            Enroll Now
          </button>
        </div>

        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className={`text-3xl font-bold md:hidden ${
            scrolled ? "text-gray-800" : "text-gray-800"
          }`}
        >
          {isMenuOpen ? "x" : "="}
        </button>
      </div>
    </nav>
  );
};
