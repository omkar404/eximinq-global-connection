import React from "react";
import { Phone, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 pt-12 pb-8 border-t border-gray-800 mt-16">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        {/* Brand */}
        <div>
          <h4 className="text-2xl font-bold text-white mb-4">
            EXIMINQ <span className="text-teal-500">CloudDesk</span>
          </h4>
          <p className="text-sm text-gray-400 mb-4 leading-relaxed">
            Your 24/7 dedicated Helpdesk for Importers, Exporters, CHA & Logistics.
            Simplifying DGFT, Customs & Compliance.
          </p>

          <div className="space-y-2 mb-4 text-sm">
            <div className="flex items-center font-medium text-teal-400">
              <Phone size={16} className="mr-2" />
              +91 74000 96950
            </div>
            <div className="flex items-center font-medium text-teal-400">
              <Mail size={16} className="mr-2" />
              clouddesk@eximinq.in
            </div>
          </div>

          {/* Social */}
          <div className="flex space-x-3 mt-4">
            <SocialIcon label="X">X</SocialIcon>
            <SocialIcon label="LinkedIn">in</SocialIcon>
            <SocialIcon label="Facebook">fb</SocialIcon>
          </div>
        </div>

        {/* Services */}
        <FooterLinks
          title="Services"
          links={[
            "DGFT Consultancy",
            "Customs Clearance Support",
            "Logistics Coordination",
            "Compliance Audit",
          ]}
        />

        {/* Resources */}
        <FooterLinks
          title="Resources"
          links={[
            {
              label: "HSN Code Search",
              href: "https://eximinq.in/tools/hs-code-finder",
              external: true,
            },
            {
              label: "Duty Calculator",
              href: "https://eximinq.in/tools/duty-calculator-finder",
              external: true,
            },
            { label: "Export Incentives" },
            { label: "Public Notices" },
          ]}
        />

        {/* Policies */}
        <FooterLinks
          title="Disclaimer Policy and Term"
          links={[
            { label: "Disclaimer", href: "/disclaimer" },
            { label: "Privacy Policy", href: "/privacy-policy" },
            { label: "Terms & Conditions", href: "/privacy-policy" },
          ]}
        />
      </div>

      {/* Bottom bar */}
      <div className="container mx-auto px-4 mt-10 pt-6 border-t border-gray-800 text-center text-xs text-gray-500">
        © {new Date().getFullYear()} EXIMINQ CloudDesk. All Rights Reserved.
        <br />
        Disclaimer: Information provided is for guidance purposes only.
      </div>
    </footer>
  );
};

const FooterLinks = ({ title, links }) => {
  return (
    <div>
      <h5 className="text-white font-bold mb-4">{title}</h5>
      <ul className="space-y-2 text-sm">
        {links.map((link, index) => {
          if (typeof link === "string") {
            return (
              <li key={index}>
                <a href="#" className="hover:text-teal-400">
                  {link}
                </a>
              </li>
            );
          }

          return (
            <li key={index}>
              <a
                href={link.href || "#"}
                target={link.external ? "_blank" : undefined}
                rel={link.external ? "noreferrer" : undefined}
                className="hover:text-teal-400"
              >
                {link.label}
              </a>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

const SocialIcon = ({ children, label }) => {
  return (
    <button
      aria-label={`Visit ${label}`}
      className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center
      hover:bg-teal-600 transition text-xs font-bold"
    >
      {children}
    </button>
  );
};

export default Footer;
