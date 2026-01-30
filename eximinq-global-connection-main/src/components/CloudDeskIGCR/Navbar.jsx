import { useState } from "react";

const Navbar = ({
  setShowEnrollModal 
}) => {
  const [open, setOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm sticky top-24 z-30">
      <nav className="container mx-auto px-4 py-4 flex justify-center items-center">
        {/* CENTERED MENU */}
        <div className="hidden md:flex gap-10 font-bold text-sm text-slate-700">
          <a href="#home" class="hover:text-brand-600 transition">Home</a>
                <a href="#about" class="hover:text-brand-600 transition">What is IGCR?</a>
                <a href="#forms" class="hover:text-brand-600 transition">Forms (1/2/3)</a>
                <a href="#process" class="hover:text-brand-600 transition">Compliance</a>
                <a href="#deadlines" class="hover:text-brand-600 transition">Due Dates</a>
        </div>

        {/* Apply Now Button - STILL RIGHT ALIGNED (optional) */}
<button
  onClick={() => setShowEnrollModal(true)}
  className="hidden md:inline-block bg-accent-500 hover:bg-accent-600 
             text-white font-bold py-2 px-6 rounded-md shadow-md absolute right-4"
>
  Extend License
</button>


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
          <a href="#home" class="hover:text-brand-600 transition">Home</a>
            <a href="#about" class="block py-2 text-slate-600">What is IGCR?</a>
            <a href="#forms" class="block py-2 text-slate-600">Forms (1/2/3)</a>
            <a href="#process" class="block py-2 text-slate-600">Compliance</a>
            <a href="#contact" class="block py-2 text-brand-600 font-bold">File Return</a>

          <a 
            href="#contact"
            className="block py-3 mt-2 bg-accent-500 text-white rounded-md shadow-md"
          >
            Verify Benefit
          </a>
        </div>
      )}
    </header>
  );
};

export default Navbar;
