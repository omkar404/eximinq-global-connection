import React, { useEffect, useState } from "react";
import NavbarFSSAI from "../components/CloudDeskFSSAILanding/NavbarFSSAI";
import HeroFSSAI from "../components/CloudDeskFSSAILanding/HeroFSSAI";
// import DeadlineCardEPR from "../components/CloudDeskEPRLanding/DeadlineCardEPR";
import FSSAIServices from "../components/CloudDeskFSSAILanding/FSSAIServices";
import QuickFSSAI from "../components/CloudDeskFSSAILanding/QuickFSSAI";
// In CloudDeskFSSAILanding.jsx
// ✅ Correct – default import
import FooterFSSAI from "../components/CloudDeskFSSAILanding/FooterFSSAI.jsx";
// ✅ Correct – named import (matches the export)
import { ModalEnrollFSSAI } from "../components/CloudDeskFSSAILanding/ModalEnrollFSSAI.jsx";

// Required icons (if not globally imported)
import {
  AlertTriangle,
  Package,
  Zap,
  FileText,
  ShieldAlert,
  Anchor,
  Scale,
  Trash2,
  Briefcase,
  FileWarning,
  Calculator,
  Shield,
} from "lucide-react";

export default function CloudDeskFSSAILanding() {
  const [scrolled, setScrolled] = useState(false);
  const [showEnrollModal, setShowEnrollModal] = useState({
    open: false,
    type: "",
  });
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans selection:bg-red-500 selection:text-white">
      {/* Sticky Top Urgency Banner */}
      {/* <div className="bg-red-600 text-white py-2 px-4 text-center text-sm font-bold tracking-wide z-50 relative flex items-center justify-center gap-2">
        <AlertTriangle className="w-4 h-4 animate-pulse" />
        URGENT FOR IMPORTERS: CPCB Portals are strictly enforcing Annual Returns. File immediately to avoid Customs blockages.
      </div> */}
      <NavbarFSSAI
        scrolled={scrolled}
        setShowEnrollModal={setShowEnrollModal}
        isMenuOpen={isMenuOpen}
        setIsMenuOpen={setIsMenuOpen}
      />
      <HeroFSSAI setShowEnrollModal={setShowEnrollModal} />
      {/* <DeadlineCardEPR setShowEnrollModal={setShowEnrollModal} /> */}
      {/* Importer EPR Details (custom section not yet extracted) */}
      <section id="guidelines" className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Who Needs to File Form D-1?
            </h2>
            <p className="text-slate-600 text-lg">
              FSSAI mandates that every Food Business Operator (FBO) involved in
              importing, manufacturing, or repacking food products must submit
              an annual return. Zero exceptions.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12 max-w-5xl mx-auto">
            {[
              {
                icon: Anchor,
                color: "text-blue-600",
                title: "Food Importers",
                desc: "If you hold an FSSAI Central License for importing food articles, you are required to declare the exact quantities imported during the preceding financial year.",
              },
              {
                icon: Package,
                color: "text-teal-600",
                title: "Manufacturers / Processors",
                desc: "All food manufacturers, regardless of production volume, must declare the items manufactured, quantities, and their sales value.",
              },
              {
                icon: Briefcase,
                color: "text-indigo-600",
                title: "Relabellers / Repackers",
                desc: "Even if you do not manufacture the product yourself but repack or relabel bulk food items for retail sale, Form D-1 compliance is mandatory.",
              },
            ].map((item, idx) => (
              <div
                key={idx}
                className="bg-slate-50 p-8 rounded-xl border border-slate-200 hover:border-sky-300 transition-colors"
              >
                <item.icon className={`w-12 h-12 ${item.color} mb-6`} />
                <h4 className="text-xl font-bold text-slate-900 mb-3">
                  {item.title}
                </h4>
                <p className="text-slate-600 leading-relaxed text-sm">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
          <div className="bg-red-50 border border-red-200 rounded-xl p-8 max-w-4xl mx-auto flex flex-col md:flex-row items-center gap-6">
            <FileWarning className="w-16 h-16 text-red-500 shrink-0" />
            <div>
              <h4 className="text-xl font-bold text-red-900 mb-2">
                Notice: "Nil" Returns Are Also Mandatory
              </h4>
              <p className="text-red-800 text-sm leading-relaxed">
                Even if you obtained the license but did not conduct any
                activity during the financial year, you are legally required to
                file a "Nil" return. Failure to do so attracts the exact same
                penalties.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* Consequences Section */}
      <section id="consequences" className="py-20 bg-slate-900 text-white">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-between mb-16 gap-8">
            <div className="md:w-1/2">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Consequences of Defaulting
              </h2>
              <p className="text-red-400 font-semibold text-lg">
                FSSAI's automated FoSCoS system triggers immediate actions
                against non-compliant licenses the day after the deadline.
              </p>
            </div>
            <ShieldAlert className="w-24 h-24 text-red-500 opacity-50 shrink-0" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: Anchor,
                title: "FICS Customs Blockage",
                desc: "For importers, FSSAI interfaces directly with Customs. If your license is flagged, the Food Import Clearance System (FICS) will block your NOC, halting your shipment at the port.",
              },
              {
                icon: Calculator,
                title: "Compounding Daily Fines",
                desc: "A strict penalty of ₹100 is applied for every single day the return is delayed past May 31st. This caps out at 5 times the annual license fee.",
              },
              {
                icon: Shield,
                title: "License Suspension",
                desc: "Continued failure to file returns will lead to automatic suspension or cancellation of your FSSAI License, rendering any domestic sale or import strictly illegal.",
              },
            ].map((item, idx) => (
              <div
                key={idx}
                className="bg-slate-800 p-8 rounded-xl border border-red-900/50 hover:bg-slate-700 transition-colors"
              >
                <div className="w-12 h-12 bg-red-500/20 rounded-full flex items-center justify-center mb-6">
                  <item.icon className="w-6 h-6 text-red-500" />
                </div>
                <h4 className="text-xl font-bold text-white mb-3">
                  {item.title}
                </h4>
                <p className="text-slate-400 text-sm leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Fees Section */}
      <section
        id="penalties"
        className="py-20 bg-slate-50 border-b border-slate-200"
      >
        <div className="container mx-auto px-6 max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              The Cost of Delay
            </h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
              FSSAI does not charge a base fee to file on time. However, their
              penalty structure is designed to punish delays severely.
            </p>
          </div>
          <div className="bg-white rounded-xl shadow-lg border border-red-200 overflow-hidden">
            <div className="bg-red-600 text-white p-5 font-bold flex items-center gap-2 text-lg">
              <Calculator className="w-6 h-6" /> FSSAI Late Filing Penalty
              Structure
            </div>
            <div className="p-8">
              <div className="flex flex-col md:flex-row items-center justify-between border-b border-slate-200 pb-6 mb-6">
                <div>
                  <h4 className="text-lg font-bold text-slate-900">
                    Before May 31st
                  </h4>
                  <p className="text-slate-500 text-sm">
                    Filing within the stipulated deadline.
                  </p>
                </div>
                <div className="text-2xl font-black text-green-600 mt-2 md:mt-0">
                  ₹0 Penalty
                </div>
              </div>
              <div className="flex flex-col md:flex-row items-center justify-between border-b border-slate-200 pb-6 mb-6">
                <div>
                  <h4 className="text-lg font-bold text-slate-900">
                    After May 31st
                  </h4>
                  <p className="text-slate-500 text-sm">
                    Penalty applied automatically by FoSCoS portal.
                  </p>
                </div>
                <div className="text-2xl font-black text-red-600 mt-2 md:mt-0 flex items-center">
                  ₹100{" "}
                  <span className="text-sm text-red-400 font-normal ml-1">
                    / per day
                  </span>
                </div>
              </div>
              <div className="bg-slate-100 p4 rounded-lg text-sm text-slate-700 italic flex items-start">
                <AlertTriangle className="w-5 h-5 text-red-500 mr-2 shrink-0 mt-0.5" />
                <p>
                  <strong>Maximum Penalty Cap:</strong> The late fee accumulates
                  daily until it reaches a maximum equal to{" "}
                  <strong>5 times your annual license fee</strong>.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <FSSAIServices setShowEnrollModal={setShowEnrollModal} />
      <QuickFSSAI />
      <FooterFSSAI />
      {/* Modal */}
      <ModalEnrollFSSAI
        show={showEnrollModal.open} // ✅ yeh badlo
        onClose={() => setShowEnrollModal({ open: false, type: "" })}
        type={showEnrollModal.type}
      />
    </div>
  );
}
