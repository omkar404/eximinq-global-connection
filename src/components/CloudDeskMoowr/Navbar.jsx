import { useState } from "react";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm sticky top-32 z-30">
      <nav className="container mx-auto px-4 py-4 flex justify-center items-center">

        {/* CENTERED MENU */}
        <div className="hidden md:flex gap-10 font-bold text-sm text-slate-700">
          <a href="#services" className="hover:text-brand-600 transition">Services</a>
          <a href="#ad-code" className="hover:text-brand-600 transition">AD Code</a>
          <a href="#documents" className="hover:text-brand-600 transition">Documents</a>
          <a href="#process" className="hover:text-brand-600 transition">Process</a>
          <a href="#pricing" className="hover:text-brand-600 transition">Pricing</a>
        </div>

        {/* Apply Now Button - STILL RIGHT ALIGNED (optional) */}
        {/* <a 
          href="#contact"
          className="hidden md:inline-block bg-accent-500 hover:bg-accent-600 text-white font-bold py-2 px-6 rounded-md shadow-md absolute right-4"
        >
          Apply Now
        </a> */}

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
          <a href="#about" className="block py-2">About IEC</a>
          <a href="#benefits" className="block py-2">Benefits</a>
          <a href="#documents" className="block py-2">Documents</a>
          <a href="#process" className="block py-2">Process</a>
          <a href="#fees" className="block py-2">Fees</a>

          {/* <a 
            href="#contact"
            className="block py-3 mt-2 bg-accent-500 text-white rounded-md shadow-md"
          >
            Apply Now
          </a> */}
        </div>
      )}
    </header>
  );
};

export default Navbar;
