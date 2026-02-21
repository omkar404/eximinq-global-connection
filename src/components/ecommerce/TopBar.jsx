import BrandLogo from "../../components/BrandLogo/BrandLogo";
import { Phone, Mail, MessageCircle } from "lucide-react";
import { navLinks } from "../../Common/navLinks";
import { Link } from "react-router-dom";

const TopBar = ({ setShowEnrollModal }) => { 
  return (
    <div className="bg-white border-b">
      <div className="container mx-auto px-4 md:px-8 flex justify-between items-center h-23">
        
        {/* Logo */}
        <a href="https://eximinq.in/">
          <BrandLogo />
        </a>

                {/* Desktop menu */}
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

        {/* Right actions */}
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
            onClick={() => setShowEnrollModal({ open: true, type: "ecommerce_industry_import_export" })}
            className="px-5 py-2 text-sm font-bold text-white bg-gradient-to-r from-teal-600 to-indigo-700 rounded-lg shadow-lg hover:shadow-xl"
          >
            Enroll Now
          </button>
        </div> 
      </div>
    </div>
  );
};

export default TopBar;
