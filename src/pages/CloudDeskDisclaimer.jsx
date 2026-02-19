import { Link } from "react-router-dom";
import React from "react";
import { useState, useEffect } from "react";
import {
  Shield,
  AlertTriangle,
  FileText,
  ExternalLink,
  Scale,
  Building2,
} from "lucide-react";
import { Phone, Mail, MessageCircle } from "lucide-react";
import BrandLogo from "../components/BrandLogo/BrandLogo";
import { ModalEnroll } from "../components/CloudDeskHome/ModalEnroll";
import { navLinks } from "../Common/navLinks";

const DisclaimerPage = () => {
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
        className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? "bg-white shadow-md py-2" : "bg-white py-2"
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
          <div className="hidden md:flex items-center gap-8 font-smedium text-gray-800">
            {navLinks.map((link) =>
              link.isDropdown ? (
                <div key={link.name} className="relative group">
                  <span className="cursor-pointer hover:text-teal-500">
                    {link.name}
                  </span>

                  {/* Dropdown */}
                  <div className="absolute left-0 mt-4 w-72 
                      bg-gray-100 rounded-2xl shadow-xl 
                      opacity-0 invisible 
                      group-hover:opacity-100 group-hover:visible 
                      transition-all duration-200 
                      p-6 z-50">

                    <div className="flex flex-col space-y-6">
                      {link.children.map((child) => (
                        <Link
                          key={child.path}
                          to={child.path}
                          className="text-gray-600 text-lg hover:text-teal-600 transition"
                        >
                          {child.name}
                        </Link>
                      ))}
                    </div>

                  </div>
                </div>
              ) : (
                <Link
                  key={link.path}
                  to={link.path}
                  className="hover:text-teal-500"
                >
                  {link.name}
                </Link>
              )
            )}

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
            className={`md:hidden text-3xl font-bold ${scrolled ? "text-gray-800" : "text-gray-800"
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
              Disclaimer & Legal Notice
            </h1>
            <p className="text-blue-100 text-lg max-w-2xl mx-auto">
              Please read these terms carefully before using our trade
              compliance and Contact services.
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
              <Shield className="h-6 w-6 text-blue-600 flex-shrink-0 mt-1" />
              <div>
                <h2 className="text-xl font-bold text-slate-900 mb-2">
                  1. General Information Disclaimer
                </h2>
                <p className="text-slate-600 leading-relaxed">
                  The information provided on{" "}
                  <strong>https://eximinq.in/</strong> (hereinafter referred to
                  as "the Website") is for general informational and educational
                  purposes only. While Eximinq strives to keep the information
                  up to date and correct, we make no representations or
                  warranties of any kind, express or implied, about the
                  completeness, accuracy, reliability, suitability, or
                  availability of the website or the information, products,
                  services, or related graphics contained on the website for any
                  purpose.
                </p>
              </div>
            </div>
          </section>

          {/* Section 2: Not Government Affiliation */}
          <section className="space-y-4 bg-amber-50 p-6 rounded-lg border border-amber-100">
            <div className="flex items-start space-x-3">
              <AlertTriangle className="h-6 w-6 text-amber-600 flex-shrink-0 mt-1" />
              <div>
                <h2 className="text-xl font-bold text-slate-900 mb-2">
                  2. Non-Government Affiliation
                </h2>
                <p className="text-slate-700 leading-relaxed">
                  Eximinq is a private consultancy and Contact service
                  provider. We are <strong>not</strong> a government entity, nor
                  are we directly affiliated with the Directorate General of
                  Foreign Trade (DGFT), Central Board of Indirect Taxes and
                  Customs (CBIC), or any other government body. Any references
                  to government forms, notifications, or procedures are for
                  compliance assistance purposes only.
                </p>
              </div>
            </div>
          </section>

          {/* Section 3: Professional Advice */}
          <section className="space-y-4">
            <div className="flex items-start space-x-3">
              <FileText className="h-6 w-6 text-blue-600 flex-shrink-0 mt-1" />
              <div>
                <h2 className="text-xl font-bold text-slate-900 mb-2">
                  3. Not Legal or Professional Advice
                </h2>
                <p className="text-slate-600 leading-relaxed">
                  The content on this Website regarding import/export policies,
                  HSN codes, duty structures, and compliance audits does not
                  constitute legal or professional advice. Trade laws and
                  regulations in India are subject to frequent changes. You
                  should not rely exclusively on the information on this website
                  for making business decisions. We recommend consulting with
                  our certified experts or a qualified legal professional for
                  your specific business needs.
                </p>
              </div>
            </div>
          </section>

          {/* Section 4: Limitation of Liability */}
          <section className="space-y-4">
            <div className="flex items-start space-x-3">
              <Scale className="h-6 w-6 text-blue-600 flex-shrink-0 mt-1" />
              <div>
                <h2 className="text-xl font-bold text-slate-900 mb-2">
                  4. Limitation of Liability
                </h2>
                <p className="text-slate-600 leading-relaxed">
                  In no event will Eximinq be liable for any loss or damage
                  including without limitation, indirect or consequential loss
                  or damage, or any loss or damage whatsoever arising from loss
                  of data or profits arising out of, or in connection with, the
                  use of this website. This includes delays in customs clearance
                  or DGFT approvals that may occur despite our best assistance
                  efforts, as these processes involve third-party government
                  agencies.
                </p>
              </div>
            </div>
          </section>

          {/* Section 5: External Links */}
          <section className="space-y-4">
            <div className="flex items-start space-x-3">
              <ExternalLink className="h-6 w-6 text-blue-600 flex-shrink-0 mt-1" />
              <div>
                <h2 className="text-xl font-bold text-slate-900 mb-2">
                  5. External Links & Third-Party Logistics
                </h2>
                <p className="text-slate-600 leading-relaxed">
                  Through this website, you may be able to link to other
                  websites or portals (such as logistics trackers, port portals,
                  or government gateways) which are not under the control of
                  Eximinq. We have no control over the nature, content, and
                  availability of those sites. The inclusion of any links does
                  not necessarily imply a recommendation or endorse the views
                  expressed within them.
                </p>
              </div>
            </div>
          </section>

          {/* Contact Section */}
          <div className="bg-slate-50 p-6 rounded-lg border border-slate-200 mt-8 text-center">
            <h3 className="text-lg font-semibold text-slate-800 mb-2">
              Have questions about this disclaimer?
            </h3>
            <p className="text-slate-600 mb-4">
              If you require any more information or have questions about our
              site's disclaimer, please feel free to contact us.
            </p>
            <button className="bg-blue-700 hover:bg-blue-800 text-white font-medium py-2 px-6 rounded-md transition-colors shadow-sm">
              Contact Support
            </button>
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

export default DisclaimerPage;
