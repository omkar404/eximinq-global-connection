const ModalEnrollSaas = ({ isMenuOpen, setIsMenuOpen, setShowModal }) => {
  if (!isMenuOpen) return null;

  return (
    <div className="absolute top-[69px] left-0 w-full bg-white shadow-xl border-t z-40 animate-slideDown">
      <div className="flex flex-col items-center py-6 space-y-4 text-gray-800 font-medium">

        <a href="/" onClick={() => setIsMenuOpen(false)} className="hover:text-teal-500">Home</a>
        <a href="/services" onClick={() => setIsMenuOpen(false)} className="hover:text-teal-500">Services</a>
        <a href="/dgft-customs-consultancy" onClick={() => setIsMenuOpen(false)} className="hover:text-teal-500">DGFT & Customs</a>
        <a href="/certificate-of-origin" onClick={() => setIsMenuOpen(false)} className="hover:text-teal-500">COO</a>
        <a href="/compliance-trade-india" onClick={() => setIsMenuOpen(false)} className="hover:text-teal-500">Compliance</a>
        <a href="/contact-us" onClick={() => setIsMenuOpen(false)} className="hover:text-teal-500">Cloud Desk</a>
        <a href="/clouddesk-saas" onClick={() => setIsMenuOpen(false)} className="hover:text-teal-500">SAAS</a>

        <div className="w-full border-t border-gray-200"></div>

        <div className="text-center">
          <p className="text-xs text-gray-500">24/7 Helpdesk</p>
          <p className="text-sm font-bold font-mono">+917400096950</p>
        </div>

        <button
          className="w-11/12 py-3 bg-gradient-to-r from-teal-600 to-indigo-700 text-white text-sm font-bold rounded-lg shadow-lg hover:shadow-xl"
          onClick={() => {
            setShowModal(true);
            setIsMenuOpen(false);
          }}
        >
          Enroll Now
        </button>
      </div>
    </div>
  );
};


export default ModalEnrollSaas;

