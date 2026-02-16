import React, { useState } from "react";
import TopBar from "../components/CloudDeskImporters/TopBar";
import Navbar from "../components/CloudDeskImporters/Navbar";
import Hero from "../components/CloudDeskImporters/Hero";
import Fees from "../components/CloudDeskImporters/Fees";
import {
  ChevronDown,
  Linkedin,
  Twitter,
  Facebook,
  Phone,
  Mail,
  MapPin,
  HardHat,
  Magnet,
  Layers,
  Flame,
  Scroll,
  Cpu,
  ArrowRight,
  Headphones,
} from "lucide-react";
import { MainNavbar } from "../components/CloudDeskImporters/MainNavbar";
import { ModalEnroll } from "../components/CloudDeskImporters/ModalEnroll";
const CloudDeskImporters = () => {
    const [showEnrollModal, setShowEnrollModal] = useState({
      open: false,
      type: "",
    });
  
    const handleEnrollmentSubmit = (formData) => {
      console.log("Enrollment Submitted:", formData);
  
      // TODO → send API call
      // axios.post("/api/enroll", formData)
  
      alert("Form submitted — check console for data.");
    };
  return (
    <div className="bg-slate-50 text-slate-800">
      {/* Dynamic Sections */}
      <MainNavbar setShowEnrollModal={setShowEnrollModal} />
      <Navbar setShowEnrollModal={setShowEnrollModal} />
      <Hero setShowEnrollModal={setShowEnrollModal} />
      

      <ModalEnroll
        show={showEnrollModal.open}
        type={showEnrollModal.type}
        onClose={() => setShowEnrollModal({ open: false, type: "" })}
        onSubmit={handleEnrollmentSubmit}
      />

      {/* ---------- STATIC PAGE CONTENT BELOW ---------- */}

      <section id="ims" className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          {/* Header */}
          <div className="text-center mb-16">
            <span className="text-brand-600 font-bold uppercase tracking-wider text-sm">
              Regulatory Compliance
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mt-2">
              Import Monitoring Systems (IMS)
            </h2>
            <p className="text-slate-500 mt-2">
              Government mandated registration for specific commodities before
              import.
            </p>
          </div>

          {/* Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* SIMS */}
            <div className="bg-white rounded-xl shadow-sm p-6 hover:shadow-lg transition border-t-4 border-slate-800 group">
              <div className="flex justify-between items-start mb-4">
                <h3 className="font-bold text-lg text-slate-900">
                  Steel Import NOC (SIMS)
                </h3>
                <HardHat className="text-slate-400 text-2xl group-hover:text-slate-800 transition" />
              </div>
              <p className="text-sm text-slate-600 mb-4">
                Mandatory advance registration for all iron & steel imports (HS
                72, 73, 86). Fee based on value.
              </p>
              <a
                href="#contact"
                className="text-xs font-bold text-brand-600 hover:text-brand-800 uppercase tracking-wide flex items-center"
              >
                Get SIMS No <ArrowRight size={12} className="ml-1" />
              </a>
            </div>

            {/* Copper */}
            <div className="bg-white rounded-xl shadow-sm p-6 hover:shadow-lg transition border-t-4 border-orange-600 group">
              <div className="flex justify-between items-start mb-4">
                <h3 className="font-bold text-lg text-slate-900">
                  Copper (NFMIMS)
                </h3>
                <Magnet className="text-orange-400 text-2xl group-hover:text-orange-600 transition" />
              </div>
              <p className="text-sm text-slate-600 mb-4">
                For Copper items under <strong>HS Chapter 74</strong>{" "}
                (7401-7419). Registration required to track volume.
              </p>
              <a
                href="#contact"
                className="text-xs font-bold text-brand-600 hover:text-brand-800 uppercase tracking-wide flex items-center"
              >
                Register Copper <ArrowRight size={12} className="ml-1" />
              </a>
            </div>

            {/* Aluminium */}
            <div className="bg-white rounded-xl shadow-sm p-6 hover:shadow-lg transition border-t-4 border-slate-400 group">
              <div className="flex justify-between items-start mb-4">
                <h3 className="font-bold text-lg text-slate-900">
                  Aluminium (NFMIMS)
                </h3>
                <Layers className="text-slate-300 text-2xl group-hover:text-slate-500 transition" />
              </div>
              <p className="text-sm text-slate-600 mb-4">
                For Aluminium items under <strong>HS Chapter 76</strong>{" "}
                (7601-7616). Mandatory registration policy.
              </p>
              <a
                href="#contact"
                className="text-xs font-bold text-brand-600 hover:text-brand-800 uppercase tracking-wide flex items-center"
              >
                Register Aluminium <ArrowRight size={12} className="ml-1" />
              </a>
            </div>

            {/* CIMS */}
            <div className="bg-white rounded-xl shadow-sm p-6 hover:shadow-lg transition border-t-4 border-black group">
              <div className="flex justify-between items-start mb-4">
                <h3 className="font-bold text-lg text-slate-900">
                  Coal (CIMS)
                </h3>
                <Flame className="text-slate-400 text-2xl group-hover:text-black transition" />
              </div>
              <p className="text-sm text-slate-600 mb-4">
                Coal Import Monitoring System. Covers Anthracite, Bituminous,
                Coking Coal (<strong>HS 2701 to 2704</strong>).
              </p>
              <a
                href="#contact"
                className="text-xs font-bold text-brand-600 hover:text-brand-800 uppercase tracking-wide flex items-center"
              >
                Get CIMS No <ArrowRight size={12} className="ml-1" />
              </a>
            </div>

            {/* PIMS */}
            <div className="bg-white rounded-xl shadow-sm p-6 hover:shadow-lg transition border-t-4 border-blue-400 group">
              <div className="flex justify-between items-start mb-4">
                <h3 className="font-bold text-lg text-slate-900">
                  Paper (PIMS)
                </h3>
                <Scroll className="text-blue-300 text-2xl group-hover:text-blue-500 transition" />
              </div>
              <p className="text-sm text-slate-600 mb-4">
                Registration for import of paper products (Newsprint, Handmade,
                Tissue, etc.) under <strong>HS Chapter 48</strong>.
              </p>
              <a
                href="#contact"
                className="text-xs font-bold text-brand-600 hover:text-brand-800 uppercase tracking-wide flex items-center"
              >
                Get PIMS No <ArrowRight size={12} className="ml-1" />
              </a>
            </div>

            {/* CHIMS */}
            <div className="bg-white rounded-xl shadow-sm p-6 hover:shadow-lg transition border-t-4 border-green-500 group">
              <div className="flex justify-between items-start mb-4">
                <h3 className="font-bold text-lg text-slate-900">
                  Chip (CHIMS)
                </h3>
                <Cpu className="text-green-300 text-2xl group-hover:text-green-500 transition" />
              </div>
              <p className="text-sm text-slate-600 mb-4">
                Chip Import Monitoring System for Integrated Circuits (ICs)
                under
                <strong> HS Code 8542</strong>.
              </p>
              <a
                href="#contact"
                className="text-xs font-bold text-brand-600 hover:text-brand-800 uppercase tracking-wide flex items-center"
              >
                Register Chips <ArrowRight size={12} className="ml-1" />
              </a>
            </div>

            {/* Support box */}
            <div className="bg-brand-900 rounded-xl shadow-sm p-6 text-white flex flex-col justify-center items-center text-center lg:col-span-3">
              <Headphones className="text-4xl text-accent-400 mb-4" />
              <h3 className="font-bold text-lg mb-2">Need Help?</h3>
              <p className="text-xs text-slate-300 mb-4">
                Not sure which IMS applies to your HS Code?
              </p>
              <a
                href="#contact"
                className="bg-white text-brand-900 px-4 py-2 rounded-lg font-bold text-xs hover:bg-accent-400 transition"
              >
                Contact Expert
              </a>
            </div>
          </div>
        </div>
      </section>

      <Fees setShowEnrollModal={setShowEnrollModal} />

      {/* Footer */}
      <footer id="contact" className="bg-brand-900 text-slate-300 py-16">
        <div className="container mx-auto px-4 grid md:grid-cols-4 gap-12">
          {/* BRAND */}
          <div>
            <a className="text-2xl font-bold text-white mb-4 block">EXIMINQ</a>

            <p className="text-sm mb-6">
              EXIMINQ Contact: Your trusted partner for DGFT, Customs, and
              Logistics compliance.
            </p>

            <div className="flex gap-4">
              <a className="w-8 h-8 rounded bg-brand-800 flex items-center justify-center hover:bg-brand-700 transition">
                <Linkedin size={18} />
              </a>
              <a className="w-8 h-8 rounded bg-brand-800 flex items-center justify-center hover:bg-brand-700 transition">
                <Twitter size={18} />
              </a>
              <a className="w-8 h-8 rounded bg-brand-800 flex items-center justify-center hover:bg-brand-700 transition">
                <Facebook size={18} />
              </a>
            </div>
          </div>

          {/* QUICK LINKS */}
          <div>
            <h4 className="text-white font-bold mb-6">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <ul className="space-y-2 text-sm">
                <li>
                  <a href="#" className="hover:text-white transition">
                    SIMS Registration
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition">
                    NFMIMS Registration
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition">
                    CIMS Registration
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition">
                    PIMS Registration
                  </a>
                </li>
              </ul>
            </ul>
          </div>

          {/* OTHER SERVICES */}
          <div>
            <h4 className="text-white font-bold mb-6">Other Services</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="hover:text-white transition">
                  Fee Calculator
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  HSN Code List
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  DGFT Notifications
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  IMS FAQs
                </a>
              </li>
            </ul>
          </div>

          {/* CONTACT */}
          <div>
            <h4 className="text-white font-bold mb-6">Contact Us</h4>
            <ul className="space-y-4 text-sm">
              <li className="flex gap-3 items-center">
                <Phone size={18} className="text-brand-500" />
                +917400096950
              </li>

              <li className="flex gap-3 items-center">
                <Mail size={18} className="text-brand-500" />
                clouddesk@eximinq.in
              </li>

              <li className="flex gap-3 items-center">
                <MapPin size={18} className="text-brand-500" />
                Mumbai, India
              </li>
            </ul>
          </div>
        </div>

        {/* COPYRIGHT */}
        <div className="container mx-auto px-4 mt-12 pt-8 border-t border-brand-800 text-center text-xs text-slate-500">
          © 2025 EXIMINQ CloudDesk. All Rights Reserved. Not affiliated with
          DGFT.
        </div>
      </footer>
    </div>
  );
};

export default CloudDeskImporters;
