import React, { useEffect, useState } from 'react';
import NavbarEPCG from "../components/CloudDeskEPCGLanding/NavbarEPCG";
import HeroEPCG from "../components/CloudDeskEPCGLanding/HeroEPCG";
import EPCGServices from "../components/CloudDeskEPCGLanding/EPCGServices";
import QuickEPCG from "../components/CloudDeskEPCGLanding/QuickEPCG";
import FooterEPCG from "../components/CloudDeskEPCGLanding/FooterEPCG";
import { ModalEnrollEPCG } from "../components/CloudDeskEPCGLanding/ModelEnrollEPCG";
import { AlertTriangle } from 'lucide-react';

export default function CloudDeskEPCGLanding() {
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
        WARNING: Failure to close EPCG licenses invites Show Cause Notices (SCN) and demands for Customs Duty + 15% Interest.
      </div> */}

      <NavbarEPCG
        scrolled={scrolled}
        setShowEnrollModal={setShowEnrollModal}
        isMenuOpen={isMenuOpen}
        setIsMenuOpen={setIsMenuOpen}
      />

      <HeroEPCG setShowEnrollModal={setShowEnrollModal} />
      <EPCGServices setShowEnrollModal={setShowEnrollModal} />
      <QuickEPCG />

      <FooterEPCG onEnrollClick={() => setShowEnrollModal({ open: true, type: "Enroll" })} />

      {showEnrollModal.open && (
        <ModalEnrollEPCG
          show={showEnrollModal.open}
          onClose={() => setShowEnrollModal({ open: false, type: "" })}
          type={showEnrollModal.type}
        />
      )}
    </div>
  );
}