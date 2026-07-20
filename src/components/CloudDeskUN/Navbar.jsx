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
          <a href="#home" className="hover:text-brand-600 transition">Home</a>
                <a href="#about" className="hover:text-brand-600 transition">What is UN IIP?</a>
                <a href="#tests" className="hover:text-brand-600 transition">Testing</a>
                <a href="#marking" className="hover:text-brand-600 transition">UN Mark Guide</a>
                <a href="#process" className="hover:text-brand-600 transition">Process</a>
                <a href="#contact" className="hover:text-brand-600 transition">Fees</a>
        </div>

        {/* Apply Now Button - STILL RIGHT ALIGNED (optional) */}
{/* <button
  onClick={() => setShowEnrollModal(true)}
  className="hidden md:inline-block bg-accent-500 hover:bg-accent-600 
             text-white font-bold py-2 px-6 rounded-md shadow-md absolute right-4"
>
  Get Certified
</button> */}

          <a 
            href="#contact"
            className="hidden md:inline-block bg-accent-500 hover:bg-accent-600 
             text-white font-bold py-2 px-6 rounded-md shadow-md absolute right-4"
          >
             Get Certified
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
          <a href="#home" className="block py-2 text-slate-600">Home</a>
                <a href="#about" className="block py-2 text-slate-600">What is UN IIP?</a>
                <a href="#tests" className="block py-2 text-slate-600">Testing</a>
                <a href="#marking" className="block py-2 text-slate-600">UN Mark Guide</a>
                <a href="#contact" className="block py-2 text-slate-600">Process</a>
          <a 
            href="#contact"
            className="block py-3 mt-2 bg-accent-500 text-white rounded-md shadow-md"
          >
             Get Certified
          </a>
        </div>
      )}
    </header>
  );
};

export default Navbar;
