import { Menu, X } from "lucide-react";

const InnerNavbar = ({ scrolled, isMenuOpen, setShowEnrollModal }) => {
  return (
    <div
      className={`transition-all duration-300 ${
        scrolled ? "bg-white shadow-md" : "bg-white/90 backdrop-blur"
      }`}
    >
      <div className="relative max-w-7xl mx-auto px-4 h-16 flex items-center">
        
        {/* Centered Links */}
        <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 gap-10 font-bold text-slate-800">
          <a href="#home" className="hover:text-teal-600 transition">
            Home
          </a>
          <a href="#solutions" className="hover:text-teal-600 transition">
            Trade Solutions
          </a>
          <a href="#services" className="hover:text-teal-600 transition">
            Services
          </a>
          <a href="#clouddesk" className="hover:text-teal-600 transition">
            Contact
          </a>
        </div>

        {/* Mobile Toggle (Right) */}
        <div className="ml-auto md:hidden">
          <button 
          onClick={() => setShowEnrollModal({ open: true, type: "Enroll" })}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

      </div>
    </div>
  );
};

export default InnerNavbar;
