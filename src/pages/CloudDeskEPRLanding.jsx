import React, { useEffect, useState } from "react";
import NavbarEPR from "../components/CloudDeskEPRLanding/NavbarEPR";
import HeroEPR from "../components/CloudDeskEPRLanding/HeroEPR";
// import DeadlineCardEPR from "../components/CloudDeskEPRLanding/DeadlineCardEPR";
import EPRServices from "../components/CloudDeskEPRLanding/EPRServices";
import ContactEPR from "../components/CloudDeskEPRLanding/ContactEPR";
import { FooterEPR } from "../components/CloudDeskEPRLanding/FooterEPR";
import { ModalEnrollEPR } from "../components/CloudDeskEPRLanding/ModalEnrollEPR";

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
} from "lucide-react";

export default function CloudDeskEPRLanding() {
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
      <NavbarEPR
        scrolled={scrolled}
        setShowEnrollModal={setShowEnrollModal}
        isMenuOpen={isMenuOpen}
        setIsMenuOpen={setIsMenuOpen}
      />
      <HeroEPR setShowEnrollModal={setShowEnrollModal}/>
      {/* <DeadlineCardEPR setShowEnrollModal={setShowEnrollModal} /> */}
      {/* Importer EPR Details (custom section not yet extracted) */}
      <section id="guidelines" className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Are You an Importer? You Must File.
            </h2>
            <p className="text-slate-600 text-lg">
              The Government of India places strict Extended Producer
              Responsibility (EPR) on the entity introducing the waste into the
              country. If you clear goods through customs, the compliance burden
              is on you.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12 max-w-4xl mx-auto">
            <div className="bg-slate-50 p-8 rounded-xl border border-slate-200 hover:border-sky-300 transition-colors">
              <Package className="w-12 h-12 text-blue-600 mb-6" />
              <h4 className="text-xl font-bold text-slate-900 mb-3">
                Importers of Packaged Goods
              </h4>
              <p className="text-slate-600 leading-relaxed">
                If you import *any* product that arrives in plastic packaging
                (electronics, cosmetics, raw materials, consumer goods), you
                must file Plastic EPR Annual Returns based on the weight of the
                packaging imported.
              </p>
            </div>
            <div className="bg-slate-50 p-8 rounded-xl border border-slate-200 hover:border-sky-300 transition-colors">
              <Zap className="w-12 h-12 text-teal-600 mb-6" />
              <h4 className="text-xl font-bold text-slate-900 mb-3">
                Importers of Electronics (E-Waste)
              </h4>
              <p className="text-slate-600 leading-relaxed">
                If you import IT equipment, consumer electronics, or components
                listed under E-Waste rules, you must file E-Waste Annual Returns
                detailing your sales and fulfilling your recycling targets.
              </p>
            </div>
          </div>
          <div className="bg-red-50 border border-red-200 rounded-xl p-8 max-w-4xl mx-auto flex flex-col md:flex-row items-center gap-6">
            <FileText className="w-16 h-16 text-red-500 shrink-0" />
            <div>
              <h4 className="text-xl font-bold text-red-900 mb-2">
                Annual Returns Compliance Explained
              </h4>
              <p className="text-red-800 text-sm leading-relaxed">
                Filing requires exact quantification of materials imported
                (often cross-checked against Customs data), securing valid EPR
                Certificates from registered recyclers to meet your assigned
                targets, and submitting audited data to the CPCB portal.
                Discrepancies lead to show-cause notices.
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
                Consequences of Non-Filing
              </h2>
              <p className="text-red-400 font-semibold text-lg">
                The CPCB and Customs have linked their systems. Missing the
                deadline has immediate operational impacts.
              </p>
            </div>
            <ShieldAlert className="w-24 h-24 text-red-500 opacity-50 shrink-0" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Customs Clearance Blocked",
                desc: "This is the biggest risk. ICEGATE validation will fail for your shipments, leading to your containers being halted at the port and incurring heavy demurrage charges.",
                icon: Anchor,
              },
              {
                title: "Environmental Compensation",
                desc: "Heavy financial penalties levied proportionally on the volume of unfulfilled EPR targets. This is a non-negotiable tax that compounds the longer you delay.",
                icon: Scale,
              },
              {
                title: "Registration Cancellation",
                desc: "Your EPR registration will be suspended. Operating or clearing imports without a valid active EPR is illegal and invites further legal action.",
                icon: Trash2,
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
        id="fees"
        className="py-20 bg-slate-50 border-b border-slate-200"
      >
        <div className="container mx-auto px-6 max-w-5xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Official CPCB Fees Structure (Importers)
            </h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
              Below are the standard CPCB official fees based on your import
              volume (Tonnes Per Annum). <br />
              <strong>Note:</strong> These are Government charges payable
              directly to CPCB, strictly separate from our ₹3500 professional
              filing fee.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="bg-white rounded-xl shadow-lg border border-slate-200 overflow-hidden">
              <div className="bg-blue-600 text-white p-4 font-bold flex items-center gap-2">
                <Package className="w-5 h-5" /> EPR Plastic - Importer Slab
              </div>
              <table className="w-full text-left text-sm">
                <thead>
                  <tr className="bg-slate-100">
                    <th className="p-4">Volume Imported (TPA)</th>
                    <th className="p-4 text-right">Official Fee (₹)</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="p-4">Less than 100 TPA</td>
                    <td className="p-4 text-right">5,000</td>
                  </tr>
                  <tr>
                    <td className="p-4">100 to 1,000 TPA</td>
                    <td className="p-4 text-right">10,000</td>
                  </tr>
                  <tr>
                    <td className="p-4">1,000 to 10,000 TPA</td>
                    <td className="p-4 text-right">20,000</td>
                  </tr>
                  <tr>
                    <td className="p-4">More than 10,000 TPA</td>
                    <td className="p-4 text-right">50,000</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="bg-white rounded-xl shadow-lg border border-slate-200 overflow-hidden">
              <div className="bg-teal-600 text-white p-4 font-bold flex items-center gap-2">
                <Zap className="w-5 h-5" /> EPR E-Waste - Importer Slab
              </div>
              <table className="w-full text-left text-sm">
                <thead>
                  <tr className="bg-slate-100">
                    <th className="p-4">E-Waste Imported (TPA)</th>
                    <th className="p-4 text-right">Official Fee (₹)</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="p-4">Less than 100 TPA</td>
                    <td className="p-4 text-right">10,000</td>
                  </tr>
                  <tr>
                    <td className="p-4">100 to 1,000 TPA</td>
                    <td className="p-4 text-right">20,000</td>
                  </tr>
                  <tr>
                    <td className="p-4">1,000 to 10,000 TPA</td>
                    <td className="p-4 text-right">50,000</td>
                  </tr>
                  <tr>
                    <td className="p-4">More than 10,000 TPA</td>
                    <td className="p-4 text-right">1,00,000+</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="col-span-1 md:col-span-2 text-center text-xs text-slate-500 italic">
              *Slabs are indicative. The CPCB portal calculates exact fees based
              on your specific application and historical data.
            </div>
          </div>
        </div>
      </section>
      <EPRServices setShowEnrollModal={setShowEnrollModal} />
      <ContactEPR />
      <FooterEPR />
      {/* Modal */}
      <ModalEnrollEPR
        show={showEnrollModal.open} // ✅ yeh badlo
        onClose={() => setShowEnrollModal({ open: false, type: "" })}
        type={showEnrollModal.type}
      />
    </div>
  );
}
