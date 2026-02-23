import React, { useState, useEffect } from "react";

import NavbarContact from "../components/CloudDeskContact/NavbarContact";
// import MobileMenuContact from "../components/CloudDeskContact/MobileMenuContact";
import ModalEnrollContact from "../components/CloudDeskContact/ModalEnrollContact";
import HeroContact from "../components/CloudDeskContact/HeroContact";
import ContactInfoCards from "../components/CloudDeskContact/ContactInfoCards";
// import PartnerInfo from "../components/CloudDeskContact/PartnerInfo";
// import FAQContact from "../components/CloudDeskContact/FAQContact";
import FooterContact from "../components/CloudDeskContact/FooterContact";

const CloudDeskContact = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [activeFaq, setActiveFaq] = useState(null);

  const faqs = [
    {
      q: "What is the Turnaround Time (TAT) for a DGFT query?",
      a: "For standard queries, our initial response time is 2-4 hours. Complex policy interpretations or drafting legal replies typically takes 24-48 hours.",
    },
    {
      q: "Do you provide physical support at Customs ports?",
      a: "Yes, we have associated CHAs at major ports (JNPT, Mundra, Chennai, Delhi Air Cargo) to handle physical examination and clearance.",
    },
    {
      q: "Can I track the status of my ticket?",
      a: "Absolutely. Once you enroll and submit a query, you will receive a unique Ticket ID via email to track progress.",
    },
    {
      q: "Is the initial consultation chargeable?",
      a: "No, the initial 'Gap Analysis' or consultation call to understand your issue is completely free. Charges apply only when we initiate filing or drafting.",
    },
  ];

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="bg-slate-50 text-slate-800 antialiased selection:bg-teal-200 selection:text-teal-900">
      {/* Modal */}
      <ModalEnrollContact
        show={showModal}
        onClose={() => setShowModal(false)}
      />

      {/* Navbar */}
      <NavbarContact
        scrolled={scrolled}
        isMenuOpen={isMenuOpen}
        setIsMenuOpen={setIsMenuOpen}
        setShowModal={setShowModal}
      />

      {/* Mobile Menu */}
      {/* <MobileMenuContact
        isMenuOpen={isMenuOpen}
        setIsMenuOpen={setIsMenuOpen}
        setShowModal={setShowModal}
      /> */}

      {/* Hero Section */}
      <HeroContact />

      {/* Main Content */}
      {/* <main className="container mx-auto px-4 py-16 -mt-10 relative z-20"> */}
      {/* <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        
          <ContactInfoCards />

         
          <PartnerInfo setShowModal={setShowModal} />
        </div> */}

      {/* FAQ */}
      {/* <FAQContact
          faqs={faqs}
          activeFaq={activeFaq}
          setActiveFaq={setActiveFaq}
        /> */}
      {/* </main> */}


      {/* <ContactInfoCards /> */}

      <section className="py-12 bg-slate-900 -mt-20 relative z-20">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 reveal">

            {/* CARD 1 – URGENT */}
            <div className="glass-panel p-8 rounded-2xl hover:border-red-500/50 transition duration-300 group relative overflow-hidden">
              <div className="absolute top-0 right-0 w-24 h-24 bg-red-500/10 rounded-full blur-2xl group-hover:bg-red-500/20 transition"></div>

              <div className="w-12 h-12 bg-slate-800 rounded-lg flex items-center justify-center text-red-500 mb-6 border border-slate-700">
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                  />
                </svg>
              </div>

              <h3 className="text-lg font-bold text-white mb-2">
                Urgent Clearance
              </h3>

              <p className="text-slate-400 text-sm mb-6">
                Demurrage risk? Stuck shipment? Priority support line.
              </p>

              <a
                href="tel:+917400096950"
                className="text-2xl font-mono font-bold text-white hover:text-red-400 transition block mb-2"
              >
                +91 74000 96950
              </a>

              <a
                href="https://wa.me/917400096950"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-bold text-green-400 hover:text-green-300 flex items-center uppercase tracking-wide"
              >
                WhatsApp Priority
              </a>
            </div>

            {/* CARD 2 – EMAIL */}
            <div className="glass-panel p-8 rounded-2xl hover:border-teal-500/50 transition duration-300 group relative overflow-hidden">
              <div className="absolute top-0 right-0 w-24 h-24 bg-teal-500/10 rounded-full blur-2xl group-hover:bg-teal-500/20 transition"></div>

              <div className="w-12 h-12 bg-slate-800 rounded-lg flex items-center justify-center text-teal-400 mb-6 border border-slate-700">
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
              </div>

              <h3 className="text-lg font-bold text-white mb-2">
                Audit & SaaS
              </h3>

              <p className="text-slate-400 text-sm mb-6">
                EPCG Closure, RoDTEP audits, or CloudDesk demos.
              </p>

              <a
                href="mailto:clouddesk@eximinq.in"
                className="text-lg font-mono font-bold text-teal-400 hover:text-white transition block break-all"
              >
                clouddesk@eximinq.in
              </a>

              <p className="text-[10px] text-slate-500 mt-2 uppercase tracking-widest">
                Avg Response: &lt; 2 Hrs
              </p>
            </div>

            {/* CARD 3 – ADDRESS */}
            <div className="glass-panel p-8 rounded-2xl hover:border-indigo-500/50 transition duration-300 group relative overflow-hidden">
              <div className="absolute top-0 right-0 w-24 h-24 bg-indigo-500/10 rounded-full blur-2xl group-hover:bg-indigo-500/20 transition"></div>

              <div className="w-12 h-12 bg-slate-800 rounded-lg flex items-center justify-center text-indigo-400 mb-6 border border-slate-700">
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
              </div>

              <h3 className="text-lg font-bold text-white mb-2">
                Operations Base
              </h3>

              <p className="text-slate-400 text-sm mb-6">
                #2, Navketan Ind. Est., Mahakali Caves Road, Andheri East, Mumbai
              </p>

              <a
                href="#map"
                className="text-xs font-bold text-indigo-400 hover:text-white flex items-center uppercase tracking-wide"
              >
                Navigate via Maps
              </a>
            </div>

          </div>
        </div>
      </section>

      <ContactInfoCards />



      {/* Footer */}
      <FooterContact setShowModal={setShowModal} />
    </div>
  );
};

export default CloudDeskContact;
