import { useState } from "react";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm sticky top-24 z-30">
      <nav className="container mx-auto px-4 py-4 flex justify-center items-center">

        {/* CENTERED MENU */}
        <div className="hidden md:flex gap-10 font-bold text-sm text-slate-700">
          <a href="#home" class="hover:text-brand-600 transition">Home</a>
                <a href="#about" class="hover:text-brand-600 transition">What is ECL?</a>
                <a href="#services" class="hover:text-brand-600 transition">Services</a>
                <a href="#process" class="hover:text-brand-600 transition">Process</a>
                <a href="#pricing" class="hover:text-brand-600 transition">Fees</a>
        </div>

        {/* Apply Now Button - STILL RIGHT ALIGNED (optional) */}
        <a 
          href="#pricing"
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
            <a href="#about" class="block py-2 text-slate-600">What is ECL?</a>
            <a href="#services" class="block py-2 text-slate-600">Services</a>
            <a href="#process" class="block py-2 text-slate-600">Process</a>
            <a href="#contact" class="block py-2 text-brand-600 font-bold">Pay Duty Now</a>
          <a 
            href="#contact"
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
