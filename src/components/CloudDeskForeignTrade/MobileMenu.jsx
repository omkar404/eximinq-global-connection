import React from "react";
import { X, Phone, Mail, MessageCircle } from "lucide-react";
import BrandLogo from "../BrandLogo/BrandLogo";

export function MobileMenu({ open, onClose }) {
  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50">
      {/* Overlay */}
      <div
        className="absolute inset-0 bg-black/40"
        onClick={onClose}
      />

      {/* Drawer */}
      <div className="absolute right-0 top-0 h-full w-72 bg-white shadow-2xl p-6 animate-slide-in">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <BrandLogo />
          <button onClick={onClose}>
            <X className="w-6 h-6 text-gray-700" />
          </button>
        </div>

        {/* Navigation */}
        <nav className="flex flex-col space-y-4 font-medium text-gray-800">
          <MobileLink label="Home" href="/" onClose={onClose} />
          <MobileLink label="Services" href="/services" onClose={onClose} />
          <MobileLink
            label="DGFT & Customs"
            href="/dgft-customs-consultancy"
            onClose={onClose}
          />
          <MobileLink
            label="COO"
            href="/certificate-of-origin"
            onClose={onClose}
          />
          <MobileLink
            label="Compliance"
            href="/compliance-trade-india"
            onClose={onClose}
          />
          <MobileLink
            label="Cloud Desk"
            href="/contact-us"
            onClose={onClose}
          />
          <MobileLink
            label="SAAS"
            href="/clouddesk-saas"
            onClose={onClose}
          />
        </nav>

        {/* Divider */}
        <div className="my-6 border-t" />

        {/* Contact Actions */}
        <div className="space-y-4">
          <ContactRow
            icon={<Phone className="w-4 h-4 text-blue-600" />}
            text="+91 74000 96950"
            href="tel:+917400096950"
          />
          <ContactRow
            icon={<Mail className="w-4 h-4 text-indigo-600" />}
            text="clouddesk@eximinq.in"
            href="mailto:clouddesk@eximinq.in"
          />
          <ContactRow
            icon={<MessageCircle className="w-4 h-4 text-green-600" />}
            text="WhatsApp Support"
            href="https://wa.me/917400096950"
          />
        </div>

        {/* CTA */}
        <button className="mt-6 w-full bg-gradient-to-r from-teal-600 to-indigo-700 text-white font-bold py-2.5 rounded-lg shadow hover:shadow-xl transition">
          Enroll Now
        </button>
      </div>
    </div>
  );
}

/* ---------------- Helpers ---------------- */

function MobileLink({ label, href, onClose }) {
  return (
    <a
      href={href}
      onClick={onClose}
      className="py-2 border-b border-gray-100 hover:text-teal-600 transition"
    >
      {label}
    </a>
  );
}

function ContactRow({ icon, text, href }) {
  return (
    <a
      href={href}
      className="flex items-center gap-3 text-sm text-gray-700 hover:text-blue-600 transition"
    >
      <span className="w-8 h-8 rounded-full bg-gray-50 flex items-center justify-center">
        {icon}
      </span>
      {text}
    </a>
  );
}
