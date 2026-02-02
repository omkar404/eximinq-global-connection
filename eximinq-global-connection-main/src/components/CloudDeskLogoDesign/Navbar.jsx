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
                <a href="#about" class="hover:text-art-600 transition">Why Copyright Logo?</a>
                <a href="#tmc" class="hover:text-art-600 transition">TM-C Certificate</a>
                <a href="#process" class="hover:text-art-600 transition">Process</a>
                <a href="#contact" class="hover:text-art-600 transition">Fees</a>
        </div>

        {/* Apply Now Button - STILL RIGHT ALIGNED (optional) */}
<button
  onClick={() => setShowEnrollModal(true)}
  className="hidden md:inline-block bg-accent-500 hover:bg-accent-600 
             text-white font-bold py-2 px-6 rounded-md shadow-md absolute right-4"
>
  Register Logo
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
            <a href="#about" class="block py-2 text-slate-600">Why Copyright Logo?</a>
            <a href="#tmc" class="block py-2 text-slate-600">TM-C Certificate</a>
            <a href="#process" class="block py-2 text-slate-600">Process</a>
            <a href="#contact" class="block py-2 text-art-600 font-bold">Register Logo</a>
          <a 
            href="#contact"
            className="block py-3 mt-2 bg-accent-500 text-white rounded-md shadow-md"
          >
             Register Logo
          </a>
        </div>
      )}
    </header>
  );
};

export default Navbar;
