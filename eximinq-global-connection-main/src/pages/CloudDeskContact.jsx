import React, { useState, useEffect } from "react";

import NavbarContact from "../components/CloudDeskContact/NavbarContact";
import MobileMenuContact from "../components/CloudDeskContact/MobileMenuContact";
import ModalEnrollContact from "../components/CloudDeskContact/ModalEnrollContact";
import HeroContact from "../components/CloudDeskContact/HeroContact";
import ContactInfoCards from "../components/CloudDeskContact/ContactInfoCards";
import PartnerInfo from "../components/CloudDeskContact/PartnerInfo";
import FAQContact from "../components/CloudDeskContact/FAQContact";
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
    <div className="min-h-screen bg-gray-50 text-gray-800 flex flex-col">
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
      <MobileMenuContact
        isMenuOpen={isMenuOpen}
        setIsMenuOpen={setIsMenuOpen}
        setShowModal={setShowModal}
      />

      {/* Hero Section */}
      <HeroContact />

      {/* Main Content */}
      <main className="container mx-auto px-4 py-16 -mt-10 relative z-20">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Contact Info Cards */}
          <ContactInfoCards />

          {/* Partner Program Info */}
          <PartnerInfo setShowModal={setShowModal} />
        </div>

        {/* FAQ */}
        <FAQContact
          faqs={faqs}
          activeFaq={activeFaq}
          setActiveFaq={setActiveFaq}
        />
      </main>

      {/* Footer */}
      <FooterContact setShowModal={setShowModal} />
    </div>
  );
};

export default CloudDeskContact;
