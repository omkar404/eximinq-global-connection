
import { Search, ArrowRight, ShieldCheck, Globe, Zap, ChevronDown, LayoutGrid, FileText, TrendingUp, Users, CheckCircle, Calendar, AlertTriangle, ChevronLeft, ChevronRight, Clock } from 'lucide-react';


// SERVICE CATALOG
export const SERVICE_CATALOG = [
  // REGISTRATIONS
  { title: "IEC Registration & Updates", category: "Registration", description: "Essential Import Export Code issuance and modification services." },
  { title: "RCMC Registration", category: "Registration", description: "Registration with Export Promotion Councils to avail benefits." },
  { title: "GST & LUT Registration", category: "Registration", description: "Goods & Services Tax registration and Letter of Undertaking filing." },
  { title: "AD Code / IFSC Registration", category: "Registration", description: "Bank AD Code registration at customs ports for export processing." },
  { title: "MSME / NSIC Registration", category: "Registration", description: "Government registrations for small and medium enterprise benefits." },
  { title: "ICEGATE Registration", category: "Registration", description: "Portal registration for e-filing services with Customs." },

  // LICENSING & SCHEMES
  { title: "Advance License", category: "Licensing", description: "Duty-free import of inputs for export production (New & Redemption)." },
  { title: "EPCG Scheme", category: "Licensing", description: "Zero duty import of capital goods for pre-production, production, and post-production." },
  { title: "DFIA Issuance", category: "Licensing", description: "Duty Free Import Authorisation for fuel, oil, energy sources, and catalysts." },
  { title: "Restricted Licenses", category: "Licensing", description: "Special licenses for restricted import or export items." },
  { title: "SCOMET License", category: "Licensing", description: "Special Chemicals, Organisms, Materials, Equipment and Technologies export license." },
  { title: "Export House Status", category: "Licensing", description: "Star Export House certification (1-5 Star) for status holder privileges." },

  // COMPLIANCE & CERTIFICATION
  { title: "EPR Registration", category: "Compliance", description: "Extended Producer Responsibility for Plastic, Battery, and E-Waste management." },
  { title: "BIS Registration", category: "Compliance", description: "Bureau of Indian Standards certification for quality compliance." },
  { title: "FSSAI License", category: "Compliance", description: "Food safety licensing for import/export of food products." },
  { title: "Certificate of Origin", category: "Compliance", description: "Preferential and Non-Preferential COO issuance." },
  { title: "Free Sale Certification", category: "Compliance", description: "Certification for exports confirming goods are freely sold in India." },
  { title: "Digital Signature (DSC)", category: "Compliance", description: "Class II & III DSC for DGFT and ICEGATE secure filings." },
  { title: "Plant Quarantine / Seed License", category: "Compliance", description: "Specialized clearances for agricultural imports/exports." },
  { title: "Legal Metrology (LMPC)", category: "Compliance", description: "Compliance for pre-packaged commodities." },

  // REFUNDS & INCENTIVES
  { title: "RoDTEP / RoSCTL", category: "Incentives", description: "Remission of Duties and Taxes on Exported Products scrip generation." },
  { title: "Duty Drawback", category: "Incentives", description: "Refund of customs duties paid on imported materials used in exports." },
  { title: "IGST Refund", category: "Incentives", description: "Refund of Integrated GST paid on exported goods." },
  { title: "Interest Equalisation", category: "Incentives", description: "Interest subvention scheme benefits for exporters." },
  { title: "Brand Rate Fixation", category: "Incentives", description: "Fixation of drawback rates for specific export products." },

  // SPECIALIZED ADVISORY
  { title: "AEO Certification", category: "Advisory", description: "Authorized Economic Operator (T1, T2, T3) status for fast-track clearance." },
  { title: "SVB Orders", category: "Advisory", description: "Special Valuation Branch proceedings for related party transactions." },
  { title: "Factory Licensing", category: "Advisory", description: "Factory setup compliances, renewals, and stuffing permissions." },
  { title: "Pollution Control", category: "Advisory", description: "State Pollution Control Board consents and renewals." },
  { title: "Industrial Licenses", category: "Advisory", description: "IEM and other industrial setup approvals." },

];

export const CATEGORIES = [
  "All",
  "Registration",
  "Licensing",
  "Compliance",
  "Incentives",
  "Advisory",
];

// COMPLIANCE FLASH CARDS
export const COMPLIANCE_FLASH_CARDS = [
 {
    id: 1,
    title: "Monthly GST Compliance",
    date: "11th & 20th Monthly",
    description: "File GSTR-1 by the 11th and GSTR-3B by the 20th of every month. Late filing blocks E-Way Bill generation and delays IGST refunds.",
    icon: Calendar,
    color: "bg-blue-600"
  },
  {
    id: 2,
    title: "IGCR Quarterly Returns",
    date: "10th of Next Quarter",
    description: "Importing at concessional duty rates? Form IGCR-3 (Quarterly Return) must be filed by the 10th of the month following the quarter end.",
    icon: FileText,
    color: "bg-indigo-600"
  },
  {
    id: 3,
    title: "EPR Plastic Annual Returns",
    date: "Extended to Dec 31",
    description: "Deadline for filing Annual Returns for Plastic Packaging Waste has been extended. Ensure compliance to avoid environmental compensation.",
    icon: AlertTriangle,
    color: "bg-orange-600"
  },
  {
    id: 7,
    title: "EPR E-Waste Returns",
    date: "June 30th Annually",
    description: "Annual returns for E-Waste Management must be filed by June 30th of the following financial year on the CPCB portal.",
    icon: Zap,
    color: "bg-teal-600"
  },
  {
    id: 4,
    title: "RoDTEP / RoSCTL Claims",
    date: "1 Year from Shipping Bill",
    description: "Don't lose your incentives! Applications for RoDTEP and RoSCTL scrips must be filed within one year from the LEO date of the Shipping Bill.",
    icon: TrendingUp,
    color: "bg-green-600"
  },
  {
    id: 5,
    title: "EPCG Installation Certificate",
    date: "6 Months from Import",
    description: "Capital goods imported under EPCG? Installation Certificate from a Chartered Engineer must be submitted within 6 months to avoid penalty proceedings.",
    icon: ShieldCheck,
    color: "bg-red-600"
  },
  {
    id: 6,
    title: "AEO Annual Declaration",
    date: "Dec 31, 2025",
    description: "Mandatory annual compliance specifically for AEO T1 holders. Submit your Annual Declaration to maintain your 'Trusted Trader' status.",
    icon: CheckCircle,
    color: "bg-purple-600"
  }
];
