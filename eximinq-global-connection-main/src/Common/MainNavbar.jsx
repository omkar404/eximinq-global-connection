import { Menu, X } from "lucide-react";

const MainNavbar = ({ scrolled, isMenuOpen, setIsMenuOpen }) => {
  return (
    <nav
      className={`transition-all duration-300 ${
        scrolled ? "bg-white shadow-md" : "bg-white/90 backdrop-blur"
      }`}
    >
      <div className="relative max-w-7xl mx-auto px-4 h-16 flex items-center">
        {/* Centered Desktop Links */}
        <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 gap-10 font-bold text-slate-800">
          <a href="#home" className="hover:text-rose-600">
            Home
          </a>
          <a href="#solutions" className="hover:text-rose-600">
            Solutions
          </a>
          <a href="#services" className="hover:text-rose-600">
            Services
          </a>
          <a href="#clouddesk" className="hover:text-rose-600">
            Contact
          </a>
        </div>

        {/* Mobile Toggle */}
        <div className="ml-auto md:hidden">
          <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* 📱 Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t shadow-lg">
          <div className="px-4 py-6 space-y-4 font-bold text-slate-800">
            <a href="#home" onClick={() => setIsMenuOpen(false)}>
              Home
            </a>
            <a href="#solutions" onClick={() => setIsMenuOpen(false)}>
              Solutions
            </a>
            <a href="#services" onClick={() => setIsMenuOpen(false)}>
              Services
            </a>
            <a href="#clouddesk" onClick={() => setIsMenuOpen(false)}>
              Contact
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default MainNavbar;