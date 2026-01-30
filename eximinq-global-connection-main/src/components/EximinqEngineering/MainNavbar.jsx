import { Menu, X } from "lucide-react";

const MainNavbar = ({ scrolled, isMenuOpen, setIsMenuOpen }) => {
  return (
    <div
      className={`transition-all duration-300 ${
        scrolled ? "bg-white shadow-md" : "bg-white/90 backdrop-blur"
      }`}
    >
      <div className="relative max-w-7xl mx-auto px-4 h-16 flex items-center">
        {/* Centered Links */}
        <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 gap-10 font-bold text-slate-800">
          <a href="#home" className="hover:text-blue-700 transition-colors">
            Home
          </a>
          <a
            href="#solutions"
            className="hover:text-blue-700 transition-colors"
          >
            Solutions
          </a>
          <a href="#services" className="hover:text-blue-700 transition-colors">
            Services
          </a>
          <a
            href="#clouddesk"
            className="hover:text-blue-700 transition-colors"
          >
            Contact
          </a>
        </div>

        {/* Mobile Toggle (Right) */}
        <div className="ml-auto md:hidden">
          <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

export default MainNavbar;
