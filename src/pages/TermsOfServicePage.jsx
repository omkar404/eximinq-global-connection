import { Link } from "react-router-dom";
import React from "react";
import { useState, useEffect } from "react";
import { ScrollText, CheckCircle, CreditCard, Users, AlertOctagon, Gavel, HelpCircle } from 'lucide-react';

import { Phone, Mail, MessageCircle } from "lucide-react";
import BrandLogo from "../components/BrandLogo/BrandLogo";
import { ModalEnroll } from "../components/CloudDeskHome/ModalEnroll";

const TermsOfServicePage = () => {
  const lastUpdated = "October 24, 2025"; // Update as needed
  const [scrolled, setScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleEnrollmentSubmit = (formData) => {
    console.log("Enrollment Submitted:", formData);

    // TODO → send API call
    // axios.post("/api/enroll", formData)

    alert("Form submitted — check console for data.");
  };

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-800">
      {/* Navigation Mockup */}
      <nav
        className={`fixed w-full z-50 transition-all duration-300 ${
          scrolled ? "bg-white shadow-md py-2" : "bg-white py-2"
        }`}
      >
        <div className="container mx-auto px-4 md:px-8 flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center">
            {/* <a href="https://eximinq.in/" className="cursor-pointer">
              <BrandLogo />
            </a> */}
                                <Link to="/" className="cursor-pointer">
            <BrandLogo />
          </Link>
          </div>

          {/* Desktop menu */}
          <div className="hidden md:flex items-center space-x-8 font-medium text-gray-800">
            <a className="hover:text-teal-500" href="/">
              Home
            </a>
            <a className="hover:text-teal-500" href="/services">
              Services
            </a>
            <a className="hover:text-teal-500" href="/dgft-customs-consultancy">
              DGFT & Customs
            </a>
            <a className="hover:text-teal-500" href="/certificate-of-origin">
              COO
            </a>
            <a className="hover:text-teal-500" href="/compliance-trade-india">
              Compliance
            </a>
            <a className="hover:text-teal-500" href="/contact-us">
              Contact
            </a>
            <a className="hover:text-teal-500" href="/clouddesk-saas">
              SAAS
            </a>
          </div>

          {/* Desktop buttons */}

          <div className="hidden md:flex items-center space-x-6">
            {/* Contact Dropdown */}
            <div className="relative group hidden md:block">
              <div className="flex items-center gap-3 px-4 py-2 border border-blue-400 rounded-full cursor-pointer hover:bg-blue-50 transition">
                <Phone size={18} className="text-blue-600" />
                <Mail size={18} className="text-blue-600" />
                <MessageCircle size={18} className="text-green-500" />
              </div>

              <div className="absolute right-0 mt-4 w-[420px] bg-white rounded-2xl shadow-2xl p-6 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                <div className="grid grid-cols-3 gap-6 text-center">
                  <div className="flex flex-col items-center gap-3">
                    <div className="w-12 h-12 rounded-full bg-blue-50 flex items-center justify-center">
                      <Phone className="text-blue-600" />
                    </div>
                    <p className="font-semibold">Call</p>
                    <p className="text-sm text-gray-500">
                      Connect with us for legal assistance
                    </p>
                    <a
                      href="tel:+917400096950"
                      className="text-blue-600 font-medium text-sm hover:underline"
                    >
                      +917400096950 →
                    </a>
                  </div>

                  <div className="flex flex-col items-center gap-3">
                    <div className="w-12 h-12 rounded-full bg-indigo-50 flex items-center justify-center">
                      <Mail className="text-indigo-600" />
                    </div>
                    <p className="font-semibold">Email</p>
                    <p className="text-sm text-gray-500">
                      Need help? Drop us an email
                    </p>
                    <a
                      href="mailto:clouddesk@eximinq.in"
                      className="text-blue-600 font-medium text-sm hover:underline"
                    >
                      Email Us →
                    </a>
                  </div>

                  <div className="flex flex-col items-center gap-3">
                    <div className="w-12 h-12 rounded-full bg-green-50 flex items-center justify-center">
                      <MessageCircle className="text-green-600" />
                    </div>
                    <p className="font-semibold">WhatsApp</p>
                    <p className="text-sm text-gray-500">
                      Need a quick help? Leave a message
                    </p>
                    <a
                      href="https://wa.me/917400096950"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 font-medium text-sm hover:underline"
                    >
                      Text Us →
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <button
              onClick={() => setShowModal(true)}
              className="px-5 py-2 text-sm font-bold text-white bg-gradient-to-r from-teal-600 to-indigo-700 rounded-lg shadow-lg hover:shadow-xl"
            >
              Enroll Now
            </button>
          </div>

          {/* Hamburger */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className={`md:hidden text-3xl font-bold ${
              scrolled ? "text-gray-800" : "text-gray-800"
            }`}
          >
            {isMenuOpen ? "✕" : "☰"}
          </button>
        </div>
      </nav>

      {/* Header Section */}
      <main className="pt-20">
        <header className="bg-blue-900 text-white py-16">
          <div className="text-center">
            <h1 className="text-3xl md:text-4xl font-bold">
              Terms and Conditions
            </h1>
            <p className="text-blue-100 text-lg max-w-2xl mx-auto">
               These terms govern your use of Eximinq's Contact and trade compliance services.
            </p>
          </div>
        </header>
      </main>


      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 -mt-8">
        <div className="bg-white rounded-xl shadow-lg border border-slate-100 p-8 md:p-12 space-y-10">
          {/* Last Updated */}
          <div className="border-b border-slate-100 pb-6 text-sm text-slate-500 italic">
            Last Updated: {lastUpdated}
          </div>

          {/* Section 1: General Disclaimer */}
          <section className="space-y-4">
            <div className="flex items-start space-x-3">
              <ScrollText className="h-6 w-6 text-blue-600 flex-shrink-0 mt-1" />
              <div>
                <h2 className="text-xl font-bold text-slate-900 mb-2">1. Acceptance of Terms</h2>
                <p className="text-slate-600 leading-relaxed">
                  By accessing <strong>https://eximinq.in/</strong> or enrolling in our services, you agree to be bound by these Terms and Conditions. If you do not agree with any part of these terms, you must discontinue use of our services immediately. These terms apply to all visitors, users, and clients who access the Service.
                </p>
              </div>
            </div>
          </section>

          {/* Section 2: Service Scope */}
          <section className="space-y-4">
            <div className="flex items-start space-x-3">
              <CheckCircle className="h-6 w-6 text-blue-600 flex-shrink-0 mt-1" />
              <div>
                <h2 className="text-xl font-bold text-slate-900 mb-2">2. Scope of Services</h2>
                <p className="text-slate-600 leading-relaxed mb-3">
                  Eximinq acts as a facilitator and consultancy firm. Our services include:
                </p>
                <ul className="list-disc pl-5 space-y-2 text-slate-600">
                  <li>Assistance with DGFT (Directorate General of Foreign Trade) applications and filings.</li>
                  <li>Consultancy regarding Customs duties, HSN classification, and compliance.</li>
                  <li>Coordination with Logistics partners and Custom House Agents (CHAs).</li>
                </ul>
                <p className="text-slate-600 leading-relaxed mt-3 italic bg-slate-50 p-3 rounded border-l-4 border-blue-400">
                  <strong>Note:</strong> While we assist in filing, the final approval of any license, authorization, or clearance lies solely with the respective Government authorities. We cannot guarantee specific outcomes where government discretion is involved.
                </p>
              </div>
            </div>
          </section>

          {/* Section 3: User Obligations */}
          <section className="space-y-4">
            <div className="flex items-start space-x-3">
              <Users className="h-6 w-6 text-blue-600 flex-shrink-0 mt-1" />
              <div>
                <h2 className="text-xl font-bold text-slate-900 mb-2">3. User Obligations</h2>
                <p className="text-slate-600 leading-relaxed">
                  As a user of our services, you agree to:
                </p>
                <ul className="list-disc pl-5 mt-2 space-y-2 text-slate-600">
                  <li>Provide accurate, current, and complete documents (Invoices, IEC, Shipping Bills).</li>
                  <li>Ensure your business activities comply with the Foreign Trade Policy of India.</li>
                  <li>Maintain the confidentiality of your Contact login credentials.</li>
                  <li>Not use our services for any illegal import/export activities or restricted items without proper authorization.</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Section 4: Payments */}
          <section className="space-y-4">
            <div className="flex items-start space-x-3">
              <CreditCard className="h-6 w-6 text-blue-600 flex-shrink-0 mt-1" />
              <div>
                <h2 className="text-xl font-bold text-slate-900 mb-2">4. Payment & Fees</h2>
                <p className="text-slate-600 leading-relaxed">
                  Service fees for consultancy, filing assistance, or annual retainerships are due as per the invoice terms. Government fees, duties, and third-party logistics charges are separate and must be paid directly by the client or reimbursed to Eximinq as agreed. Failure to pay may result in suspension of services.
                </p>
              </div>
            </div>
          </section>

          {/* Section 5: Termination */}
          <section className="space-y-4">
            <div className="flex items-start space-x-3">
              <AlertOctagon className="h-6 w-6 text-red-500 flex-shrink-0 mt-1" />
              <div>
                <h2 className="text-xl font-bold text-slate-900 mb-2">5. Termination</h2>
                <p className="text-slate-600 leading-relaxed">
                  We reserve the right to terminate or suspend your access to our Contact immediately, without prior notice or liability, for any reason whatsoever, including without limitation if you breach the Terms. Upon termination, your right to use the Service will cease immediately.
                </p>
              </div>
            </div>
          </section>

          {/* Section 6: Governing Law */}
          <section className="space-y-4">
            <div className="flex items-start space-x-3">
              <Gavel className="h-6 w-6 text-blue-600 flex-shrink-0 mt-1" />
              <div>
                <h2 className="text-xl font-bold text-slate-900 mb-2">6. Governing Law</h2>
                <p className="text-slate-600 leading-relaxed">
                  These Terms shall be governed and construed in accordance with the laws of India. Any disputes arising out of or in connection with these terms shall be subject to the exclusive jurisdiction of the courts located in <strong>Mumbai, Maharashtra</strong>.
                </p>
              </div>
            </div>
          </section>

          {/* Contact Section */}
          <div className="bg-slate-50 p-6 rounded-lg border border-slate-200 mt-8 text-center">
            <div className="flex justify-center mb-3">
              <HelpCircle className="h-8 w-8 text-blue-600" />
            </div>
            <h3 className="text-lg font-semibold text-slate-800 mb-2">Questions about our Terms?</h3>
            <p className="text-slate-600 mb-4">Please contact our legal compliance team for clarifications.</p>
            <a href="mailto:support@eximinq.in" className="inline-block bg-blue-700 hover:bg-blue-800 text-white font-medium py-2 px-6 rounded-md transition-colors shadow-sm">
              Contact Us
            </a>
          </div>
        </div>
      </main>

      {/* Footer Mockup */}
      <footer className="bg-slate-900 text-slate-400 py-12 mt-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center md:text-left">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="col-span-1 md:col-span-2">
              <span className="text-2xl font-bold text-white tracking-tight block mb-4">
                EXIMINQ <span className="text-blue-500">CloudDesk </span>
              </span>
              <p className="text-sm leading-relaxed max-w-xs mx-auto md:mx-0">
          Your 24/7 dedicated Helpdesk for Importers, Exporters, CHA & Logistics.
            Simplifying DGFT, Customs & Compliance.
              </p>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Legal</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <a href="#" className="hover:text-white">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Terms of Service
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Disclaimer
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Contact</h4>
              <ul className="space-y-2 text-sm">
                <li>clouddesk@eximinq.in</li>
                <li>+917400096950</li>
                <li>Mumbai, India</li>
              </ul>
            </div>
          </div>
      <div className="container mx-auto px-4 mt-10 pt-6 border-t border-gray-800 text-center text-xs text-gray-500">
        © {new Date().getFullYear()} EXIMINQ CloudDesk. All Rights Reserved.
        <br />
        Disclaimer: Information provided is for guidance purposes only.
      </div>
        </div>
      </footer>

      <div>
        <ModalEnroll
          show={showModal}
          onClose={() => setShowModal(false)}
          onSubmit={handleEnrollmentSubmit}
        />
      </div>
    </div>
  );
};

export default TermsOfServicePage;
