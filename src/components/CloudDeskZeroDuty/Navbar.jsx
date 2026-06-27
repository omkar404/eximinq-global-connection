import { useState } from "react";

const Navbar = ({ setShowEnrollModal }) => {
  const [open, setOpen] = useState(false);

  const openModal = (actionType) =>
    setShowEnrollModal({
      open: true,
      actionType,
      source: "services/epcg-scheme",
    });

  return (
    <header className="sticky top-24 z-30 bg-white shadow-sm">
      <nav className="container relative mx-auto flex items-center justify-center px-4 py-4">
        <div className="hidden gap-10 text-sm font-bold text-slate-700 md:flex">
          <a href="#home" className="transition hover:text-brand-600">
            Home
          </a>
          <a href="#eligibility" className="transition hover:text-brand-600">
            Eligibility
          </a>
          <a href="#about" className="transition hover:text-brand-600">
            What is EPCG?
          </a>
          <a href="#coverage" className="transition hover:text-brand-600">
            Coverage
          </a>
          <a href="#obligation" className="transition hover:text-brand-600">
            Export Obligation
          </a>
          <a href="#documents" className="transition hover:text-brand-600">
            Documents
          </a>
          <a href="#fees" className="transition hover:text-brand-600">
            Service Charges
          </a>
        </div>

        {/* <button
          onClick={() => openModal("Apply Now")}
          className="absolute right-4 hidden rounded-md bg-accent-500 px-6 py-2 font-bold text-white shadow-md transition hover:bg-accent-600 md:inline-block"
        >
          Apply Now
        </button> */}

        <a 
          href="#fees"
          className="absolute right-4 hidden rounded-md bg-accent-500 px-6 py-2 font-bold text-white shadow-md transition hover:bg-accent-600 md:inline-block"
        >
          Apply Now
        </a>

        <button
          className="absolute right-4 text-2xl text-brand-900 md:hidden"
          onClick={() => setOpen((prev) => !prev)}
        >
          {open ? "x" : "="}
        </button>
      </nav>

      {open && (
        <div className="border-t border-slate-100 bg-white p-4 text-center font-bold text-slate-700 md:hidden">
          <a href="#about" className="block py-2 text-slate-600">
            What is EPCG?
          </a>
          <a href="#eligibility" className="block py-2 text-slate-600">
            Eligibility
          </a>
          <a href="#coverage" className="block py-2 text-slate-600">
            Coverage
          </a>
          <a href="#obligation" className="block py-2 text-slate-600">
            Export Obligation
          </a>
          <a href="#documents" className="block py-2 text-slate-600">
            Documents
          </a>
          <a href="#fees" className="block py-2 text-slate-600">
            Service Charges
          </a>
          <button
            onClick={() => openModal("Apply Now")}
            className="mt-2 block w-full rounded-md bg-accent-500 py-3 text-white shadow-md"
          >
            Apply Now
          </button>
        </div>
      )}
    </header>
  );
};

export default Navbar;
