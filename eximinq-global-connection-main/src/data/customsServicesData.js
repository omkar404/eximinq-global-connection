import {
  Anchor,
  ShieldCheck,
  Scale,
  RefreshCw,
  Briefcase,
  Ship,
} from "lucide-react";

export const customsServices = [
  {
    id: "c1",
    category: "Clearance",
    title: "Import Clearance (Bill of Entry)",
    desc: "Filing BE (Home / Warehouse), HSN classification & duty assessment.",
    icon: <Anchor className="w-6 h-6 text-indigo-600" />,
    steps: [
      "Docs Collection",
      "Checklist Approval",
      "BE Filing",
      "Duty Payment",
      "OOC Issuance"
    ]
  },

  {
    id: "c2",
    category: "Facilitation",
    title: "AEO Certification",
    desc: "Consultancy for AEO T1/T2/T3 with SOP drafting & security gap analysis.",
    icon: <ShieldCheck className="w-6 h-6 text-indigo-600" />,
    steps: [
      "Gap Analysis",
      "Application Filing",
      "Physical Verification",
      "AEO Certification"
    ]
  },

  {
    id: "c3",
    category: "Facilitation",
    title: "SVB Proceedings",
    desc: "Related-party valuation cases handled for customs assessment.",
    icon: <Scale className="w-6 h-6 text-indigo-600" />,
    steps: [
      "Questionnaire Filing",
      "Provisional Assessment",
      "Hearing",
      "Final Order"
    ]
  },

  {
    id: "c4",
    category: "Refunds",
    title: "IGST Refunds",
    desc: "Resolution of SB005 / SB006 errors & scroll mismatch coordination.",
    icon: <RefreshCw className="w-6 h-6 text-green-600" />,
    steps: [
      "Error Identification",
      "Annexure Filing",
      "Officer Rectification",
      "Refund Scroll"
    ]
  },

  {
    id: "c5",
    category: "Facilitation",
    title: "MOOWR Scheme",
    desc: "Manufacturing in bonded warehouse with indefinite duty deferment.",
    icon: <Briefcase className="w-6 h-6 text-indigo-600" />,
    steps: [
      "Unit Setup",
      "License Application",
      "Bond Execution",
      "Manufacturing in Bond"
    ]
  },

  {
    id: "c6",
    category: "Clearance",
    title: "Export Clearance (Shipping Bill)",
    desc: "Filing SB with correct drawback / RoDTEP codes & ensuring LEO.",
    icon: <Ship className="w-6 h-6 text-indigo-600" />,
    steps: [
      "Docs Collection",
      "Checklist",
      "SB Filing",
      "Goods Registration",
      "LEO"
    ]
  }
];
