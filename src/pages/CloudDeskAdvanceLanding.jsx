import React, { useEffect, useState } from 'react';
import NavbarAdvance from "../components/CloudDeskAdvanceLanding/NavbarAdvance";
import HeroAdvance from "../components/CloudDeskAdvanceLanding/HeroAdvance";
import AdvanceServices from "../components/CloudDeskAdvanceLanding/AdvanceServices";
import QuickAdvance from "../components/CloudDeskAdvanceLanding/QuickAdvance";
import FooterAdvance from "../components/CloudDeskAdvanceLanding/FooterAdvance";
import { ModalEnrollAdvance } from "../components/CloudDeskAdvanceLanding/ModelEnrollAdvance";
import { AlertTriangle } from 'lucide-react';

export default function CloudDeskAdvanceLanding() {
  const [scrolled, setScrolled] = useState(false);
  const [showEnrollModal, setShowEnrollModal] = useState({ open: false, type: "" });
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans selection:bg-blue-500 selection:text-white">

      {/* Urgency Banner */}
      {/* <div className="bg-red-600 text-white py-2 px-4 text-center text-sm font-bold tracking-wide z-50 relative flex items-center justify-center gap-2">
        <AlertTriangle className="w-4 h-4 shrink-0" />
        WARNING: Failure to close Advance Authorisation licenses invites DRI audits, SCNs, and demands for Customs Duty + 15% Interest.
      </div> */}

      <NavbarAdvance
        scrolled={scrolled}
        setShowEnrollModal={setShowEnrollModal}
        isMenuOpen={isMenuOpen}
        setIsMenuOpen={setIsMenuOpen}
      />

      <HeroAdvance setShowEnrollModal={setShowEnrollModal} />
      <AdvanceServices setShowEnrollModal={setShowEnrollModal} />
      <QuickAdvance />

      <FooterAdvance onEnrollClick={() => setShowEnrollModal({ open: true, type: "Enroll" })} />

      {showEnrollModal.open && (
        <ModalEnrollAdvance
          show={showEnrollModal.open}
          onClose={() => setShowEnrollModal({ open: false, type: "" })}
          type={showEnrollModal.type}
        />
      )}
    </div>
  );
}