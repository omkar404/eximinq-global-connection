import React, { useState, useEffect } from "react";
import {
  ShieldCheck,
  Ship,
  FileText,
  Globe,
  Award,
  Scale,
  Truck,
  Briefcase,
  ArrowRight,
  UserCheck,
  FileBadge,
  TrendingUp,
  AlertTriangle,
  Database,
  CreditCard,
  Gavel,
  UploadCloud,
  Anchor,
  DollarSign,
  Landmark,
  Plane,
  Warehouse,
  Container,
  Shield,
  Zap,
  Leaf,
  Radio,
  Utensils,
  FileCheck,
  BadgeCheck,
  ServerIcon,
  Building,
  GlobeIcon,
  Cuboid,
  ShoppingCart,
  Check,
  StarIcon,
  ArrowLeftRight,
  Import,
  File,
  ImportIcon,
  GitCompareArrows,
  BookCopy,
  Hash,
  Timer,
  Bubbles,
  Lightbulb,
  Image,
  Barcode,
  IdCard,
} from "lucide-react";
// COMPONENTS
import NavbarServices from "../components/CloudDeskServices/NavbarServices";
import MobileMenuServices from "../components/CloudDeskServices/MobileMenuServices";
import ModalEnrollServices from "../components/CloudDeskServices/ModalEnrollServices";
import HeroServices from "../components/CloudDeskServices/HeroServices";
import CategoriesTabs from "../components/CloudDeskServices/CategoriesTabs";
import ServicesGrid from "../components/CloudDeskServices/ServicesGrid";
import ProcessSteps from "../components/CloudDeskServices/ProcessSteps";
import CTASectionServices from "../components/CloudDeskServices/CTASectionServices";
import FooterServices from "../components/CloudDeskServices/FooterServices";
import CustomAlert from "../Common/CustomAlert"; 

const CloudDeskServices = () => {
  // -------------------------
  // UI STATE
  // -------------------------
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const [alert, setAlert] = useState(null);
  const [selectedService, setSelectedService] = useState(null);

  // -------------------------
  // NAVBAR SCROLL LISTENER
  // -------------------------
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  

  // --------------------------------------------------
  // STATIC DATA (Categories + Services)
  // --------------------------------------------------
  const categories = [
    "All",
    "Registration",
    "Licensing",
    "Customs Filing",
    "Logistics",
    "Incentives",
    "Compliance",
    "Dispute Resolution",
    "ISO & Trademark"
  ];

  const services = [
    // Registration
    {
      id: 101,
      category: "Registration",
      title: "IEC Management",
      description:
        "New Importer-Exporter Code (IEC) application, modification, annual updates, and Aadhaar linking services.",
      icon: <UserCheck className="w-8 h-8 text-blue-600" />,
      link: "https://eximinq.in/services/iec-registration",
      popular: true,
    },
    {
      id: 102,
      category: "Registration",
      title: "ICEGATE Registration",
      description:
        "Complete profile setup on ICEGATE, DSC (Digital Signature) registration, and PAN-Aadhaar linking for e-filing.",
      icon: <Database className="w-8 h-8 text-blue-600" />,
      popular: true,
      link: "https://eximinq.in/services/ice-registration",
    },
    {
      id: 103,
      category: "Registration",
      title: "AD Code Registration",
      description:
        "Registration of Authorised Dealer (AD) Code with Customs ports to enable foreign remittance and export incentives.",
      icon: <Landmark className="w-8 h-8 text-blue-600" />,
      popular: false,
      link: "https://eximinq.in/services/ad-code-registration",
    },
    {
      id: 104,
      category: "Registration",
      title: "E-RCMC Issuance",
      description:
        "Obtain and manage your Electronic Registration-Cum-Membership Certificate (RCMC) from Export Promotion Councils.",
      icon: <FileBadge className="w-8 h-8 text-blue-600" />,
      popular: false,
      link: "https://eximinq.in/services/e-rcmc-registration",
    },
    {
      id: 105,
      category: "Registration",
      title: "Import Management",
      description:
        "General registration services for managing import authorizations and compliance.",
      icon: <ShoppingCart className="w-8 h-8 text-blue-600" />,
      popular: false,
      link: "https://eximinq.in/services/import-management-registration",
    },
    {
      id: 106,
      category: "Registration",
      title: "Halal Certification",
      description:
        "Essential for export to Middle Eastern/Islamic countries.",
      icon: <Check className="w-8 h-8 text-blue-600" />,
      popular: false,
      link: "https://eximinq.in/services/halal-certification",
    },
    {
      id: 107,
      category: "Registration",
      title: "Star Export House",
      description:
        "DGFT status certificate based on performance, granting privileges like fast-track.",
      icon: <StarIcon className="w-8 h-8 text-blue-600" />,
      popular: false,
      link: "https://eximinq.in/services/star-export-house",
    },
    {
      id: 108,
      category: "Registration",
      title: "Defence Exim License",
      description:
        "Registration for exporting/importing SCOMET list or defense-related equipment.",
      icon: <Shield className="w-8 h-8 text-blue-600" />,
      popular: false,
      link: "https://eximinq.in/services/defence-exim-license",
    },
    {
      id: 109,
      category: "Registration",
      title: "GeM Registration",
      description:
        "Government e-Marketplace registration to sell directly to Indian government depts.",
      icon: <Briefcase className="w-8 h-8 text-blue-600" />,
      popular: false,
      link: "https://eximinq.in/services/gem-registration",
    },
    {
      id: 110,
      category: "Registration",
      title: "Horticulture",
      description:
        "Registration with National Horticulture Board for exporting agricultural produce.",
      icon: <Globe className="w-8 h-8 text-blue-600" />,
      popular: false,
      link: "https://eximinq.in/services/horticulture",
    },

    // Customs Filing
    {
      id: 201,
      category: "Customs Filing",
      title: "Bill of Entry (Import)",
      description:
        "Filing of Bill of Entry (Home Consumption/Warehouse) with HSN classification and duty assessment.",
      icon: <FileText className="w-8 h-8 text-blue-600" />,
      popular: true,
      link: "https://eximinq.in/services/bill-of-entry-filing",
    },
    {
      id: 202,
      category: "Customs Filing",
      title: "Shipping Bill (Export)",
      description:
        "Generation of Shipping Bills for export clearance, ensuring correct scheme codes (RoDTEP/Drawback).",
      icon: <Ship className="w-8 h-8 text-blue-600" />,
      popular: true,
      link: "https://eximinq.in/services/shipping-bill-filing",
    },
    {
      id: 203,
      category: "Customs Filing",
      title: "e-Sanchit Support",
      description:
        "Digital uploading of supporting documents (Invoice, Packing List, CoO) via e-Sanchit for paperless clearance.",
      icon: <UploadCloud className="w-8 h-8 text-blue-600" />,
      popular: false,
      link: "https://eximinq.in/services/e-sanchit-filing",
    },
    {
      id: 204,
      category: "Customs Filing",
      title: "Duty Payment (ECL)",
      description:
        "Management of Electronic Cash Ledger (ECL) for seamless payment of Basic Customs Duty and IGST.",
      icon: <DollarSign className="w-8 h-8 text-blue-600" />,
      popular: false,
      link: "https://eximinq.in/services/duty-payment-ecl",
    },
    {
      id: 205,
      category: "Customs Filing",
      title: "AEO Certification",
      description:
        "Consultancy for Authorized Economic Operator (T1/T2/T3) status for deferred duty and direct port delivery.",
      icon: <ShieldCheck className="w-8 h-8 text-blue-600" />,
      popular: true,
      link: "https://eximinq.in/services/aeo-certification",
    },
    {
      id: 206,
      category: "Customs Filing",
      title: "MOOWR Scheme",
      description:
        "Setup for Manufacturing and Other Operations in Warehouse Regulations to defer customs duty indefinitely.",
      icon: <Briefcase className="w-8 h-8 text-blue-600" />,
      popular: false,
      link: "https://eximinq.in/services/moowr-scheme",
    },
    {
      id: 207,
      category: "Customs Filing",
      title: "RMCC Alert Removal",
      description:
        'Removing "risky exporter" alerts that block IGST refunds and cause delays.',
      icon: <AlertTriangle className="w-8 h-8 text-blue-600" />,
      popular: false,
      link: "https://eximinq.in/services/rmcc-alert-removal",
    },
    {
      id: 208,
      category: "Customs Filing",
      title: "SVB Registration",
      description:
        'Mandatory for importers related to foreign suppliers to validate pricing.',
      icon: <FileText className="w-8 h-8 text-blue-600" />,
      popular: false,
      link: "https://eximinq.in/services/svb-registration",
    },

    // Logistics
    {
      id: "logistics-701",
      category: "Logistics",
      title: "Freight Forwarding",
      description:
        "End-to-end cargo booking for Sea (FCL/LCL) and Air shipments with competitive rate negotiation.",
      icon: <Plane className="w-8 h-8 text-orange-600" />,
      popular: true,
      link: "https://eximinq.in/services/freight-forwarding",
    },
    {
      id: 702,
      category: "Logistics",
      title: "CHA Services",
      description:
        "Dedicated Customs House Agent support for physical examination, sealing, and clearance at ports.",
      icon: <Anchor className="w-8 h-8 text-orange-600" />,
      popular: true,
      link: "https://eximinq.in/services/cha-services",
    },
    {
      id: 703,
      category: "Logistics",
      title: "Warehousing Solutions",
      description:
        "Access to Bonded and General warehouses near major ports for storage, labeling, and inventory management.",
      icon: <Warehouse className="w-8 h-8 text-orange-600" />,
      popular: false,
      link: "https://eximinq.in/services/warehousing-solutions",
    },
    {
      id: 704,
      category: "Logistics",
      title: "Inland Transportation",
      description:
        "First and last-mile connectivity via road/rail trailers for factory stuffing and port delivery.",
      icon: <Truck className="w-8 h-8 text-orange-600" />,
      popular: false,
      link: "https://eximinq.in/services/inland-transportation",
    },
    {
      id: 705,
      category: "Logistics",
      title: "Marine Insurance",
      description:
        "Comprehensive transit risk coverage against damage, theft, or loss during international shipping.",
      icon: <Shield className="w-8 h-8 text-orange-600" />,
      popular: false,
      link: "https://eximinq.in/services/marine-insurance",
    },
    {
      id: 706,
      category: "Logistics",
      title: "Project Cargo",
      description:
        "Specialized handling for Over Dimensional Cargo (ODC) and heavy machinery with route surveys.",
      icon: <Container className="w-8 h-8 text-orange-600" />,
      popular: false,
      link: "https://eximinq.in/services/project-cargo",
    },
    {
      id: 707,
      category: "Logistics",
      title: "DPD Registration",
      description:
        "Direct Port Delivery. Clear cargo directly from port within 48h to save costs.",
      icon: <AlertTriangle className="w-8 h-8 text-orange-600" />,
      popular: false,
      link: "https://eximinq.in/services/dpd-registration",
    },
    {
      id: 708,
      category: "Logistics",
      title: "Factory Stuffing",
      description:
        "Permission to pack export containers inside factory under Customs supervision.",
      icon: <BookCopy className="w-8 h-8 text-orange-600" />,
      popular: false,
      link: "https://eximinq.in/services/factory-stuffing",
    },

    // Licensing
    {
      id: 301,
      category: "Licensing",
      title: "Advance Authorisation",
      description:
        "Duty-free import of inputs physically incorporated in export products. Includes norm fixation and redemption.",
      icon: <FileText className="w-8 h-8 text-teal-600" />,
      popular: true,
      link: "https://eximinq.in/services/advance-authorisation",
    },
    {
      id: 302,
      category: "Licensing",
      title: "EPCG Scheme",
      description:
        "Zero duty import of capital goods for pre-production, production, and post-production.",
      icon: <Award className="w-8 h-8 text-teal-600" />,
      popular: true,
      link: "https://eximinq.in/services/epcg-scheme",
    },
    {
      id: 303,
      category: "Licensing",
      title: "SCOMET Licensing",
      description:
        "Specialized filing for Dual-Use items (Special Chemicals, Organisms, Materials, Equipment).",
      icon: <ShieldCheck className="w-8 h-8 text-teal-600" />,
      popular: false,
      link: "https://eximinq.in/services/scomet-licensing",
    },
    { 
      id: 304,
      category: "Licensing",
      title: "EOP Extension",
      description:
        "Export Obligation Period Extension for Advance Authorization or EPCG.",
      icon: <ArrowLeftRight className="w-8 h-8 text-teal-600" />,
      popular: false,
      link: "https://eximinq.in/services/eop-extension",
    },
    {
      id: 305,
      category: "Licensing",
      title: "Fertiliser Import",
      description:
        "ExSpecific license required to import fertilizers, regulated by Dept of Fertilizers.",
      icon: <ImportIcon className="w-8 h-8 text-teal-600" />,
      popular: false,
      link: "https://eximinq.in/services/fertiliser-import-license",
    },
    {
      id: 306,
      category: "Licensing",
      title: "DFIA License",
      description:
        "Duty Free Import Authorisation. Transferable license issued post-export.",
      icon: <File className="w-8 h-8 text-teal-600" />,
      popular: false,
      link: "https://eximinq.in/services/dfia-license",
    },
    {
      id: 307,
      category: "Licensing",
      title: "Customs License",
      description:
        "Continuity Bond, EPCG Lic, Adv License, Bank Guarantee registration at customs.",
      icon: <FileText className="w-8 h-8 text-teal-600" />,
      popular: false,
      link: "https://eximinq.in/services/customs-license-registration",
    },



    // Incentives
    {
      id: 401,
      category: "Incentives",
      title: "RoDTEP Scheme",
      description:
        "Remission of Duties and Taxes on Exported Products. Scrip generation and ledger transfer.",
      icon: <TrendingUp className="w-8 h-8 text-green-600" />,
      popular: true,
      link: "https://eximinq.in/services/rodtep-scheme",
    },
    {
      id: 402,
      category: "Incentives",
      title: "IGST Refund",
      description:
        "Resolution of IGST refund scrolls stuck due to PFMS mismatch, EGM errors, or non-transmission.",
      icon: <CreditCard className="w-8 h-8 text-green-600" />,
      popular: true,
      link: "https://eximinq.in/services/igst-refund",
    },
    {
      id: 403,
      category: "Incentives",
      title: "Duty Drawback",
      description:
        "Brand Rate fixation and Section 74 drawback claims for re-exports.",
      icon: <ArrowRight className="w-8 h-8 text-green-600" />,
      popular: false,
      link: "https://eximinq.in/services/duty-drawback",
    },
    {
      id: 404,
      category: "Incentives",
      title: "No Due Certificate",
      description:
        "Proof of no outstanding dues to government bodies to claim rebates.",
      icon: <Check className="w-8 h-8 text-green-600" />,
      popular: false,
      link: "https://eximinq.in/services/no-due-certificate",
    },
    {
      id: 405,
      category: "Incentives",
      title: "No Incentive Cert",
      description:
        "Verifies no other incentives were claimed to avoid double-dipping.",
      icon: <AlertTriangle className="w-8 h-8 text-green-600" />,
      popular: false,
      link: "https://eximinq.in/services/no-incentive-certificate",
    },
    {
      id: 406,
      category: "Incentives",
      title: "Interest Equalisation",
      description:
        "Scheme reducing the interest rate on pre/post-shipment export credit.",
      icon: <TrendingUp className="w-8 h-8 text-green-600" />,
      popular: false,
      link: "https://eximinq.in/services/interest-equalisation-scheme",
    },
    {
      id: 407,
      category: "Incentives",
      title: "Free Sale Cert",
      description:
        "States goods are freely sold in India, for medical/food product exports.",
      icon: <Globe className="w-8 h-8 text-green-600" />,
      popular: false,
      link: "https://eximinq.in/services/free-sale-certificate",
    },

    // Compliance
    {
      id: 801,
      category: "Compliance",
      title: "BIS Registration",
      description:
        "Mandatory BIS (ISI/CRS) certification for Steel, Electronics, Chemicals, and Toys imports.",
      icon: <Zap className="w-8 h-8 text-blue-700" />,
      popular: true,
      link: "https://eximinq.in/services/bis-registration",
    },
    {
      id: 802,
      category: "Compliance",
      title: "EPR Authorization",
      description:
        "Extended Producer Responsibility compliance for E-waste, Plastic, Battery, and Waste Tyre management.",
      icon: <Leaf className="w-8 h-8 text-green-700" />,
      popular: true,
      link: "https://eximinq.in/services/epr-authorization",
    },
    {
      id: 803,
      category: "Compliance",
      title: "FSSAI Licensing",
      description:
        "Food Import Clearance System (FICS) and Central Licensing for food importers.",
      icon: <Utensils className="w-8 h-8 text-orange-600" />,
      popular: false,
      link: "https://eximinq.in/services/fssai-licensing",
    },
    {
      id: 804,
      category: "Compliance",
      title: "WPC (ETA) License",
      description:
        "Equipment Type Approval (ETA) for wireless products (Bluetooth/Wi-Fi) from WPC Wing.",
      icon: <Radio className="w-8 h-8 text-blue-700" />,
      popular: false,
      link: "https://eximinq.in/services/wpc-license",
    },
    {
      id: 805,
      category: "Compliance",
      title: "Legal Metrology (LMPC)",
      description:
        "Registration for pre-packaged commodities to ensure MRP labeling compliance.",
      icon: <Scale className="w-8 h-8 text-blue-700" />,
      popular: false,
      link: "https://eximinq.in/services/lmpc-registration",
    },
    {
      id: 806,
      category: "Compliance",
      title: "EDPMS & e-BRC",
      description:
        "Export Data Processing and Monitoring System closure and e-BRC realization to avoid RBI caution listing.",
      icon: <Landmark className="w-8 h-8 text-indigo-700" />,
      popular: true,
      link: "https://eximinq.in/services/edpms-ebrc",
    },
    {
      id: 807,
      category: "Compliance",
      title: "AQCS & PQMS",
      description:
        "Animal & Plant Quarantine clearances for livestock and agricultural imports/exports.",
      icon: <Leaf className="w-8 h-8 text-green-700" />,
      popular: false,
      link: "https://eximinq.in/services/aqcs-pqms",
    },
    {
      id: 808,
      category: "Compliance",
      title: "Drug Controller (CDSCO)",
      description:
        "Import registration and licensing for drugs, medical devices, and cosmetics.",
      icon: <ShieldCheck className="w-8 h-8 text-red-700" />,
      popular: false,
      link: "https://eximinq.in/services/cdsco-compliance",
    },
    {
      id: 809,
      category: "Compliance",
      title: "Certificate of Origin",
      description:
        "Online issuance of Preferential (FTA/PTA) and Non-Preferential CoO.",
      icon: <BadgeCheck className="w-8 h-8 text-indigo-700" />,
      popular: true,
      link: "https://eximinq.in/services/certificate-of-origin",
    },
    {
      id: 810,
      category: "Compliance",
      title: "GST LUT Filing",
      description:
        "Letter of Undertaking filing for exports without payment of IGST.",
      icon: <FileCheck className="w-8 h-8 text-indigo-700" />,
      popular: false,
      link: "https://eximinq.in/services/gst-lut-filing",
    },
    {
      id: 811,
      category: "Compliance",
      title: "REX Registration",
      description:
        "Registered Exporter System registration for self-certification of origin under GSP.",
      icon: <Globe className="w-8 h-8 text-indigo-700" />,
      popular: false,
      link: "https://eximinq.in/services/rex-registration",
    },
    {
      id: 812,
      category: "Compliance",
      title: "DSC Services",
      description:
        "Digital Signature Certificate. Essential for filing online documents with DGFT, Customs, and GST.",
      icon: <ServerIcon className="w-8 h-8 text-orange-600" />,
      popular: false,
      link: "https://eximinq.in/services/dsc-services",
    },
        {
      id: 813,
      category: "Compliance",
      title: "IGCR Returns",
      description:
        "Import of Goods at Concessional Rate. Filing monthly returns for goods imported at lower duty.",
      icon: <ServerIcon className="w-8 h-8 text-orange-600" />,
      popular: false,
      link: "https://eximinq.in/services/igcr-returns",
    },
    {
      id: 814,
      category: "Compliance",
      title: "IEM Registration",
      description:
        "Industrial Entrepreneur Memorandum for undertakings exempted from licensing.",
      icon: <Building className="w-8 h-8 text-orange-600" />,
      popular: false,
      link: "https://eximinq.in/services/iem-registration",
    },
    {
      id: 816,
      category: "Compliance",
      title: "Industrial License",
      description:
        "Mandatory license for industries involved in hazardous chemicals or defense sectors.",
      icon: <Shield className="w-8 h-8 text-orange-600" />,
      popular: false,
      link: "https://eximinq.in/services/industrial-license",
    },
    {
      id: 817,
      category: "Compliance",
      title: "Factory License",
      description:
        "Approval from Chief Inspector of Factories ensuring safety and labor compliance.",
      icon: <Building className="w-8 h-8 text-orange-600" />,
      popular: false,
      link: "https://eximinq.in/services/factory-license",
    },
    {
      id: 818,
      category: "Compliance",
      title: "GST Returns",
      description:
        "Filing returns for claiming Input Tax Credit (ITC) and refunds for exporters.",
      icon: <ServerIcon className="w-8 h-8 text-orange-600" />,
      popular: false,
      link: "https://eximinq.in/services/gst-returns",
    },
    {
      id: 819,
      category: "Compliance",
      title: "Pollution Control",
      description:
        "Consent to Establish/Operate (CTE/CTO) from the Pollution Control Board.",
      icon: <GlobeIcon className="w-8 h-8 text-orange-600" />,
      popular: false,
      link: "https://eximinq.in/services/pollution-control",
    },
    {
      id: 820,
      category: "Compliance",
      title: "Warehouse License",
      description:
        "License for bonded warehouses (MOOWR) to store goods without immediate duty.",
      icon: <Warehouse className="w-8 h-8 text-orange-600" />,
      popular: false,
      link: "https://eximinq.in/services/warehouse-license",
    },
    {
      id: 821,
      category: "Compliance",
      title: "UN IIP Certification",
      description:
        "Certification for packages used to transport dangerous goods internationally.",
      icon: <Cuboid className="w-8 h-8 text-orange-600" />,
      popular: false,
      link: "https://eximinq.in/services/un-iip-certification",
    },
    {
      id: 822,
      category: "Compliance",
      title: "CA Certification",
      description:
        "Chartered Accountant certificates to verify financial data or consumption norms.",
      icon: <ServerIcon className="w-8 h-8 text-orange-600" />,
      popular: false,
      link: "https://eximinq.in/services/ca-certification-export-import",
    },
    {
      id: 823,
      category:"Compliance",
      title: "Compliance Audit",
      description:
        "Compliance Audit to ensure compliance with regulatory requirements.",
      icon: <ServerIcon className="w-8 h-8 text-orange-600" />,
      popular: false,
      // link: "https://eximinq.in/services/fssai-licensing",
    },

    // Dispute Resolution
    {
      id: 601,
      category: "Dispute Resolution",
      title: "Customs Adjudication",
      description:
        "Reply to Show Cause Notices (SCN) and representation in personal hearings.",
      icon: <Gavel className="w-8 h-8 text-red-600" />,
      popular: false,
      link: "https://eximinq.in/services/customs-adjudication",
    },
    {
      id: 602,
      category: "Dispute Resolution",
      title: "Policy Relaxation (PRC)",
      description:
        "Representing cases before the Policy Relaxation Committee for procedural lapses.",
      icon: <AlertTriangle className="w-8 h-8 text-red-600" />,
      popular: false,
      link: "https://eximinq.in/services/prc-relaxation",
    },
    // ISO & Trademark
    {
      id: "iso-701",
      category: "ISO & Trademark",
      title: "ISO Certification",
      description:
        "International standard certification ensuring quality management and compliance.",
      icon: <Check className="w-8 h-8 text-pink-600" />,
      popular: false,
      link: "https://eximinq.in/services/iso-certification",
    },
    {
      id: 702,
      category: "ISO & Trademark",
      title: "Trademark",
      description:
        "Intellectual Property protection for brand names and symbols.",
      icon: <Hash className="w-8 h-8 text-pink-600" />,
      popular: false,
      link: "https://eximinq.in/services/trademark-registration",
    },
    {
      id: 703,
      category: "ISO & Trademark",
      title: "Copyright",
      description:
        "Protection for original literary, artistic, or creative works.",
      icon: <Timer className="w-8 h-8 text-pink-600" />,
      popular: false,
      link: "https://eximinq.in/services/copyright-registration",
    },
    {
      id: 704,
      category: "ISO & Trademark",
      title: "Brand Copyright",
      description:
        "Specific legal protection for unique brand identity elements.",
      icon: <Lightbulb className="w-8 h-8 text-pink-600" />,
      popular: false,
      link: "https://eximinq.in/services/brand-copyright",
    },
    {
      id: 705,
      category: "ISO & Trademark",
      title: "Logo Copyright",
      description:
        "Specific legal protection for visual logos and graphic symbols.",
      icon: <Image className="w-8 h-8 text-pink-600" />,
      popular: false,
      link: "https://eximinq.in/services/logo-copyright",
    },
    {
      id: 706,
      category: "ISO & Trademark",
      title: "Barcode Reg.",
      description:
        "Specific legal protection for visual logos and graphic symbols.",
      icon: <Barcode className="w-8 h-8 text-pink-600" />,
      popular: false,
      link: "https://eximinq.in/services/barcode-registration",
    },
    {
      id: 707,
      category: "ISO & Trademark",
      title: "Design Reg.",
      description:
        "Protection of the aesthetic shape, pattern, or configuration of a product.",
      icon: <IdCard className="w-8 h-8 text-pink-600" />,
      popular: false,
      link: "https://eximinq.in/services/design-registration",
    },
  ];

  // --------------------------------------------------
  // FILTER LOGIC
  // --------------------------------------------------
  const filteredServices = services.filter((service) => {
    const matchCategory =
      activeCategory === "All" || service.category === activeCategory;

    const q = searchQuery.trim().toLowerCase();
    const matchQuery =
      q === "" ||
      service.title.toLowerCase().includes(q) ||
      service.description.toLowerCase().includes(q) ||
      service.category.toLowerCase().includes(q);

    return matchCategory && matchQuery;
  });

  // --------------------------------------------------
  // RENDER UI
  // --------------------------------------------------
  return (
    <div className="min-h-screen font-sans text-gray-800 bg-gray-50 flex flex-col relative">
      {/* MODAL */}
      {/* <ModalEnrollServices show={showModal} onClose={() => setShowModal(false)} /> */}

      {alert && (
        <CustomAlert
          type={alert.type}
          message={alert.message}
          onClose={() => setAlert(null)}
        />
      )}

      {/* NAVBAR */}
      <NavbarServices
        scrolled={scrolled}
        isMenuOpen={isMenuOpen}
        setIsMenuOpen={setIsMenuOpen}
        setShowModal={setShowModal}
      />

      {/* MOBILE MENU */}
      <MobileMenuServices
        isMenuOpen={isMenuOpen}
        setIsMenuOpen={setIsMenuOpen}
        setShowModal={setShowModal}
      />

      <ModalEnrollServices
        show={showModal}
        onClose={() => setShowModal(false)}
        selectedService={selectedService}
        setAlert={setAlert}
      />

      {/* HERO */}
      <HeroServices searchQuery={searchQuery} setSearchQuery={setSearchQuery} />

      {/* CATEGORY FILTER TABS */}
      <CategoriesTabs
        categories={categories}
        activeCategory={activeCategory}
        setActiveCategory={setActiveCategory}
      />

      {/* SERVICES GRID */}
        <ServicesGrid
          services={filteredServices}
          onStartProcess={(service) => {
            setSelectedService(service); 
            setShowModal(true);        
          }}
        />

      {/* PROCESS STEPS */}
      <ProcessSteps />

      {/* CTA SECTION */}
      <CTASectionServices openModal={() => setShowModal(true)} />

      {/* FOOTER */}
      <FooterServices openModal={() => setShowModal(true)} />
    </div>
  );
};

export default CloudDeskServices;
