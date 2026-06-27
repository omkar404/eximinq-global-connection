import { useState } from "react";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm sticky top-24 z-30">
      <nav className="container mx-auto px-4 py-4 flex justify-center items-center">
        <div className="hidden md:flex gap-10 font-bold text-sm text-slate-700">
          <a href="#overview" className="hover:text-brand-600 transition">
            Overview
          </a>
          <a href="#types" className="hover:text-brand-600 transition">
            COO Types
          </a>
          <a href="#benefits" className="hover:text-brand-600 transition">
            Benefits
          </a>
          <a href="#process" className="hover:text-brand-600 transition">
            Process
          </a>
          <a href="#faqs" className="hover:text-brand-600 transition">
            FAQs
          </a>
        </div>

        <a
          href="#contact"
          className="hidden md:inline-block bg-accent-500 hover:bg-accent-600 text-white font-bold py-2 px-6 rounded-md shadow-md absolute right-4"
        >
          Talk to Expert
        </a>

        <button
          className="md:hidden text-brand-900 text-2xl absolute right-4"
          onClick={() => setOpen(!open)}
        >
          ☰
        </button>
      </nav>

      {open && (
        <div className="md:hidden bg-white border-t border-slate-100 p-4 text-center font-bold text-slate-700">
          <a href="#overview" className="block py-2 text-slate-600">
            Overview
          </a>
          <a href="#types" className="block py-2 text-slate-600">
            COO Types
          </a>
          <a href="#benefits" className="block py-2 text-slate-600">
            Benefits
          </a>
          <a href="#process" className="block py-2 text-slate-600">
            Process
          </a>
          <a href="#faqs" className="block py-2 text-slate-600">
            FAQs
          </a>
          <a
            href="#contact"
            className="block py-3 mt-2 bg-accent-500 text-white rounded-md shadow-md"
          >
            Start Request
          </a>
        </div>
      )}
    </header>
  );
};

export default Navbar;
