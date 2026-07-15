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
  Server,
  CheckCheck,
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

        <section id="epr portal" className="bg-slate-900 text-white pt-16 pb-20 relative overflow-hidden">
        {/* Background Pattern */}
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: "radial-gradient(#ffffff 1px, transparent 1px)",
            backgroundSize: "20px 20px",
          }}
        ></div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 bg-red-600/20 border border-red-500 text-red-100 px-4 py-1.5 rounded-full text-sm font-bold tracking-wide uppercase mb-6 shadow-sm shadow-red-500/20">
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-red-500"></span>
            </span>
            CPCB Deadline &amp; Portal Migration Update
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight mb-6 leading-tight">
            The Old EPR Portal is Closed. <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">
              Have You Migrated Yet?
            </span>
          </h1>

          <p className="text-lg md:text-xl text-slate-300 mb-8 max-w-3xl mx-auto leading-relaxed">
            Do not risk your F.Y. 25-26 compliance due to portal glitches, PAN
            mismatches, or migrated data errors. EXIMINQ's technical desk will
            execute your mandatory system migration, verify your data, and
            successfully file your Plastic &amp; E-Waste EPR Annual Returns.
          </p>

          <div className="bg-slate-800/50 inline-block px-8 py-4 rounded-2xl border border-slate-700 mb-8 backdrop-blur-sm">
            <p className="text-sm text-slate-400 uppercase tracking-widest font-semibold mb-1">
              End-to-End Execution
            </p>
            <p className="text-3xl font-extrabold text-white">
              Flat Fee: INR 3,500/-
            </p>
          </div>
          <br />
          <a
            href="#form-section"
            className="inline-block bg-green-500 hover:bg-green-600 text-white font-bold text-lg px-8 py-4 rounded-xl shadow-lg shadow-green-500/30 transition-all transform hover:-translate-y-1"
          >
            START MY MIGRATION &amp; FILING NOW
          </a>
        </div>
      </section>

{/* Portal Migration Explainer */}
      <section  id="common epr" className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left: The Narrative */}
            <div>
              <h2 className="text-3xl font-extrabold text-gray-900 mb-6">
                Why You Cannot Just "Log In" Anymore
              </h2>
              <p className="text-gray-600 mb-4 leading-relaxed">
                If you are trying to file your returns using your old
                credentials, it will fail. As per the official CPCB mandate,
                operations on the legacy EPR portal were permanently
                discontinued on <strong>June 28, 2026</strong>.
              </p>
              <p className="text-gray-600 mb-6 leading-relaxed">
                To file your pending F.Y. 2025-26 returns, your company must
                now complete a technical migration:
              </p>
              <ul className="space-y-4 mb-6">
                <li className="flex items-start">
                  <i className="fa-solid fa-triangle-exclamation text-amber-500 mt-1 mr-3"></i>
                  <span className="text-gray-700">
                    <strong>Re-Register:</strong> Create a new account on the
                    "COMMON EPR PORTAL".
                  </span>
                </li>
                <li className="flex items-start">
                  <i className="fa-solid fa-link text-blue-500 mt-1 mr-3"></i>
                  <span className="text-gray-700">
                    <strong>Link Accounts:</strong> Use the exact Authorized
                    Person PAN and Company PAN to retrieve your history.
                  </span>
                </li>
                <li className="flex items-start">
                  <i className="fa-solid fa-magnifying-glass-chart text-purple-500 mt-1 mr-3"></i>
                  <span className="text-gray-700">
                    <strong>Audit Migrated Data:</strong> Manually verify the
                    data migrated by CPCB and officially report discrepancies
                    before the system allows you to file.
                  </span>
                </li>
              </ul>
              <div className="bg-red-50 border-l-4 border-red-500 p-4 rounded-r-lg">
                <p className="text-sm text-red-800 font-semibold">
                  ⚠️ One PAN mismatch or unverified data point will block your
                  entire filing process, leaving you exposed to environmental
                  compensation penalties.
                </p>
              </div>
            </div>

            {/* Right: The Recreated CPCB Notice */}
            <div className="bg-[#0B6E2C] rounded-xl shadow-2xl p-6 md:p-8 transform rotate-1 hover:rotate-0 transition-transform duration-300">
              <p className="text-white leading-relaxed text-[15px] md:text-base font-medium">
                The operations of the existing EPR portal have been
                discontinued from 28th June 2026 onwards. The newly developed{" "}
                <span className="text-yellow-400 font-bold">
                  COMMON EPR PORTAL
                </span>{" "}
                has successfully gone live with the necessary system
                upgrades. User data of all registered units has been migrated
                to the new{" "}
                <span className="text-yellow-400 font-bold">
                  COMMON EPR PORTAL
                </span>
                . All users are hereby requested to verify the migrated data
                of their units and report if any discrepancy/ mismatch is
                observed on the Common EPR portal, as a result of the
                migration activity. All such Reported issues shall be
                addressed by CPCB on the common EPR portal.
              </p>

              <div className="flex justify-center mt-6 mb-6">
                <button className="bg-white text-gray-900 text-sm font-semibold py-2 px-4 rounded shadow">
                  Click here to visit Common EPR Portal
                </button>
              </div>

              <div className="bg-[#FFF8CC] p-4 rounded text-xs text-gray-800 font-medium">
                To link your existing account, register on the Common EPR
                Portal using the same Authorized Person PAN and Company PAN
                as your existing account on the old Plastic EPR Portal/other
                existing EPR Portal. PAN details must match exactly.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How We Handle the Chaos */}
      <section id="Compliant" className="py-20 bg-slate-50 border-t border-gray-200">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 mb-4">
            We Handle the Chaos. You Stay Compliant.
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-16">
            Stop wasting your operations team's time on government portal
            errors. For ₹3,500, our technical desk takes over the entire
            headache.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Step 1 */}
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 relative pt-12">
              <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 w-16 h-16 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center shadow-sm border-4 border-white">
                <Server className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                1. Seamless Migration
              </h3>
              <p className="text-gray-600 text-sm">
                We map your existing Authorized PAN and company details
                directly into the new Common EPR Portal without errors.
              </p>
            </div>

            {/* Step 2 */}
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 relative pt-12">
              <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 w-16 h-16 bg-purple-100 text-purple-600 rounded-full flex items-center justify-center shadow-sm border-4 border-white">
                <FileText className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                2. Data Verification Audit
              </h3>
              <p className="text-gray-600 text-sm">
                Our experts cross-check your CPCB migrated data against your
                actual procurement invoices to resolve portal discrepancies.
              </p>
            </div>

            {/* Step 3 */}
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 relative pt-12">
              <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center shadow-sm border-4 border-white">
                <CheckCheck className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                3. Successful Filing
              </h3>
              <p className="text-gray-600 text-sm">
                We prepare, upload, and execute the final submission of your
                F.Y. 2025-26 Annual Returns, providing you with the final
                receipt.
              </p>
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
