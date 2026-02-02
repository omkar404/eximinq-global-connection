import { useState } from "react";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm sticky top-32 z-30">
      <nav className="container mx-auto px-4 py-4 flex justify-center items-center">

        {/* CENTERED MENU */}
        <div className="hidden md:flex gap-10 font-bold text-sm text-slate-700">
                <a href="#about" class="hover:text-brand-600 transition">How it Works</a>
                <a href="#errors" class="hover:text-brand-600 transition">Common Errors</a>
                <a href="#process" class="hover:text-brand-600 transition">Resolution</a>
                <a href="#faq" class="hover:text-brand-600 transition">FAQs</a>
        </div>

        {/* Apply Now Button - STILL RIGHT ALIGNED (optional) */}
        <a 
          href="#process"
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
            <a href="#about" class="block py-2 text-slate-600">How it Works</a>
            <a href="#errors" class="block py-2 text-slate-600">Common Errors</a>
            <a href="#process" class="block py-2 text-slate-600">Resolution</a>
            <a href="#contact" class="block py-2 text-brand-600 font-bold">Check Refund Status</a>
          <a 
            href="#process"
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
