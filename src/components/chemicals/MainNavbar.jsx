import { Menu, X } from "lucide-react";

const MainNavbar = ({ scrolled, isMenuOpen, setIsMenuOpen }) => {
  return (
    <div
      className={`transition-all duration-300 relative ${
        scrolled ? "bg-white shadow-md" : "bg-white/90 backdrop-blur"
      }`}
    >
      {/* Navbar Bar */}
      <div className="relative max-w-7xl mx-auto px-4 h-16 flex items-center">
        {/* Centered Desktop Links */}
        <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 gap-10 font-bold text-slate-800">
          <a href="#home" className="hover:text-blue-700 transition-colors">
            Home
          </a>
          <a href="#solutions" className="hover:text-blue-700 transition-colors">
            Solutions
          </a>
          <a href="#services" className="hover:text-blue-700 transition-colors">
            Services
          </a>
          <a href="#clouddesk" className="hover:text-blue-700 transition-colors">
            Cloud Desk
          </a>
        </div>

        {/* Mobile Toggle */}
        <div className="ml-auto md:hidden">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="p-2 rounded-md hover:bg-slate-100 transition"
          >
            {isMenuOpen ? (
              <X className="w-6 h-6 text-slate-800" />
            ) : (
              <Menu className="w-6 h-6 text-slate-800" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white shadow-lg border-t z-50">
          <div className="flex flex-col px-6 py-4 space-y-4 font-semibold text-slate-800">
            <a
              href="#home"
              onClick={() => setIsMenuOpen(false)}
              className="hover:text-blue-700"
            >
              Home
            </a>
            <a
              href="#solutions"
              onClick={() => setIsMenuOpen(false)}
              className="hover:text-blue-700"
            >
              Solutions
            </a>
            <a
              href="#services"
              onClick={() => setIsMenuOpen(false)}
              className="hover:text-blue-700"
            >
              Services
            </a>
            <a
              href="#clouddesk"
              onClick={() => setIsMenuOpen(false)}
              className="hover:text-blue-700"
            >
              Cloud Desk
            </a>
          </div>
        </div>
      )}
    </div>
  );
};

export default MainNavbar;
