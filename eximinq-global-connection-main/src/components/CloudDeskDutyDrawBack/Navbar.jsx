import { useState } from "react";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm sticky top-32 z-30">
      <nav className="container mx-auto px-4 py-4 flex justify-center items-center">

        {/* CENTERED MENU */}
        <div className="hidden md:flex gap-10 font-bold text-sm text-slate-700">
                <a href="#about" class="hover:text-brand-600 transition">Overview</a>
                <a href="#brand-rate" class="hover:text-brand-600 transition">Brand Rate</a>
                <a href="#section74" class="hover:text-brand-600 transition">Section 74 (Re-export)</a>
                <a href="#process" class="hover:text-brand-600 transition">Process</a>
        </div>

        {/* Apply Now Button - STILL RIGHT ALIGNED (optional) */}
        <a 
          href="#home"
          className="hidden md:inline-block bg-accent-500 hover:bg-accent-600 text-white font-bold py-2 px-6 rounded-md shadow-md absolute right-4"
        >
          Apply Now
        </a>

        {/* MOBILE MENU BUTTON */}
        <button
          className="md:hidden text-brand-900 text-2xl absolute right-4"
          onClick={() => setOpen(!open)}
        >
          ☰
        </button>

      </nav>

      {/* MOBILE MENU DROPDOWN */}
      {open && (
        <div className="md:hidden bg-white border-t border-slate-100 p-4 text-center font-bold text-slate-700">
            <a href="#about" class="block py-2 text-slate-600">Overview</a>
            <a href="#brand-rate" class="block py-2 text-slate-600">Brand Rate</a>
            <a href="#section74" class="block py-2 text-slate-600">Section 74</a>
            <a href="#contact" class="block py-2 text-brand-600 font-bold">Claim Drawback</a>
          <a 
            href="#home"
            className="block py-3 mt-2 bg-accent-500 text-white rounded-md shadow-md"
          >
            Apply Now
          </a>
        </div>
      )}
    </header>
  );
};

export default Navbar;
