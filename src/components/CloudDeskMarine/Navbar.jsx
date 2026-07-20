import { useState } from "react";

const Navbar = ({ setShowEnrollModal }) => {
  const [open, setOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm sticky top-24 z-30">
      <nav className="container mx-auto px-4 py-4 flex justify-center items-center">
        {/* CENTERED MENU */}
        <div className="hidden md:flex gap-10 font-bold text-sm text-slate-700">
          <a href="#home" className="hover:text-brand-600 transition">
            Home
          </a>
          <a href="#about" className="hover:text-brand-600 transition">
            Why Insure?
          </a>
          <a href="#coverage" className="hover:text-brand-600 transition">
            Coverage Types
          </a>
          <a href="#obligation" className="hover:text-brand-600 transition">
            Claims Process
          </a>
          <a href="#home" className="hover:text-brand-600 transition">
            Get Quote
          </a>
          {/* <a href="#fees" className="hover:text-brand-600 transition">
            Fees
          </a> */}
        </div>

        {/* Apply Now Button - STILL RIGHT ALIGNED (optional) */}

          {/* <button
            onClick={() => setShowEnrollModal({ open: true, type: "Buy_Policy" })}
            className="hidden md:inline-block bg-accent-500 hover:bg-accent-600 
              text-white font-bold py-2 px-6 rounded-md shadow-md absolute right-4"
          >
            Buy Policy
          </button> */}

        <a 
          href="#home"
          className="hidden md:inline-block bg-accent-500 hover:bg-accent-600 
              text-white font-bold py-2 px-6 rounded-md shadow-md absolute right-4"
        >
          Buy Policy
        </a>

        {/* <button
        href=
  onClick={() => setShowEnrollModal({open: true, type: "ENROLL" })}
  className="hidden md:inline-block bg-accent-500 hover:bg-accent-600 text-white font-bold py-2 px-6 rounded-md shadow-md absolute right-4"
>
  Apply Now
</button> */}

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
          <a href="#about" className="block py-2 text-slate-600">
            What is EPCG?
          </a>
          <a href="#coverage" className="block py-2 text-slate-600">
            Coverage
          </a>
          <a href="#obligation" className="block py-2 text-slate-600">
            Export Obligation
          </a>
          <a href="#contact" className="block py-2 text-brand-600 font-bold">
            Apply License
          </a>
          <button
            onClick={() =>
              setShowEnrollModal({
                open: true,
                actionType: "Apply Now",
                source: "services/epcg-scheme",
              })
            }
            className="block py-3 mt-2 bg-accent-500 text-white rounded-md shadow-md"
          >
            Apply Now
          </button>
        </div>
      )}
    </header>
  );
};

export default Navbar;
