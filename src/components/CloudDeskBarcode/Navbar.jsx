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
                <a href="#about" className="hover:text-design-600 transition">What is GTIN?</a>
                <a href="#coverage" className="hover:text-design-600 transition">Benefits</a>
                <a href="#process" className="hover:text-design-600 transition">Process</a>
                <a href="#fees" className="hover:text-brand-600 transition">Fees</a>
        </div>

        {/* Apply Now Button - STILL RIGHT ALIGNED (optional) */}
{/* <button
  onClick={() => setShowEnrollModal(true)}
  className="hidden md:inline-block bg-accent-500 hover:bg-accent-600 
             text-white font-bold py-2 px-6 rounded-md shadow-md absolute right-4"
>
  File Registration
</button> */}
          {/* <button
            onClick={() =>
              setShowEnrollModal({
                open: true,
                actionType: "File Registration",
                source: "services/barcode-registration",
              })
            }
            className="hidden md:inline-block bg-accent-500 hover:bg-accent-600 
             text-white font-bold py-2 px-6 rounded-md shadow-md absolute right-4"
          >
             File Registration
          </button> */}
        <a 
          href="#fees"
          className="hidden md:inline-block bg-accent-500 hover:bg-accent-600 
             text-white font-bold py-2 px-6 rounded-md shadow-md absolute right-4"
        >
          Get Barcodes
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
          <a href="#home" className="hover:text-brand-600 transition">Home</a>
                <a href="#about" className="hover:text-design-600 transition">What is GTIN?</a>
                <a href="#coverage" className="hover:text-design-600 transition">Benefits</a>
                <a href="#process" className="hover:text-design-600 transition">Process</a>
            <a href="#contact" className="block py-2 text-brand-600 font-bold">Get Barcodes</a>
          <button
            onClick={() =>
              setShowEnrollModal({
                open: true,
                actionType: "File Registration",
                source: "services/barcode-registration",
              })
            }
            className="block py-3 mt-2 bg-accent-500 text-white rounded-md shadow-md"
          >
             File Registration
          </button>
        </div>
      )}
    </header>
  );
};

export default Navbar;
