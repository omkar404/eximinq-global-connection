// src/data/navLinks.js

export const navLinks = [
  { name: "Home", path: "/" },

  { name: "About Us", path: "/about-us" },

  {
    name: "Services",
    path: "/services",
    isDropdown: true,
    children: [
      { name: "Strategic Solutions", path: "/services" },
      { name: "Foreign Trade Policy", path: "/foreign-trade-policy" },
      { name: "DGFT & Customs", path: "/dgft-customs-consultancy" },
      { name: "COO (Cert. of Origin)", path: "/certificate-of-origin" },
      { name: "Compliance Audit", path: "/compliance-trade-india" },
    ],
  },

  { name: "SAAS", path: "/clouddesk-saas" },

  { name: "Contact", path: "/contact-us" },
];
