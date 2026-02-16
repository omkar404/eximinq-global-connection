// src/config/seoConfig.js

export const defaultSEO = {
  title: "EXIMINQ - DGFT Consultant & Export CloudDesk Mumbai",
  description: "India's first SaaS CloudDesk for Exporters. Automate Advance Authorisation, RoDTEP audits, and buy expert DGFT services in Mumbai.",
};

export const seoRoutes = {
  // --- CORE PAGES ---
  // "/": {
  //   title: "EXIMINQ - DGFT Consultant & Export CloudDesk Mumbai",
  //   description: "India's first SaaS CloudDesk for Exporters. Automate Advance Authorisation, run RoDTEP audits, and buy expert DGFT services in Mumbai."
  // },
  "/about-us": {
    title: "About EXIMINQ - DGFT Experts & CloudDesk Team Mumbai",
    description: "Meet the team behind India's first Export CloudDesk. Combining 15+ years of DGFT consultancy expertise with modern SaaS technology."
  },
  "/contact-us": {
    title: "Contact EXIMINQ - DGFT Consultant Mumbai & CloudDesk Support",
    description: "Visit our Mumbai office for expert DGFT & Customs advice. Get technical support for CloudDesk, make sales inquiries, or book a demo."
  },
  "/refund-policy": {
    title: "Refund & Cancellation Policy | EXIMINQ",
    description: "Read the Refund Policy for Consultancy Services and CloudDesk SaaS subscriptions. Includes cancellation terms for government fee payments."
  },

  // homepage 
  "/compliance-trade-india": {
    title: "Compliance & Trade Consultancy India | EXIMINQ",
    description: "Comprehensive Export-Import compliance services. Expert consultancy for DGFT, Customs, FSSAI, BIS, WPC, and more to ensure smooth trade operations.",
  },

  "/clouddesk-saas": {
    title: "CloudDesk SaaS - Export Compliance Software | EXIMINQ",
    description: "India's first SaaS CloudDesk for Exporters. Automate Advance Authorisation, run RoDTEP audits, and buy expert DGFT services in Mumbai.",
  },

  // --- SAAS FEATURES ---
  "/features/compliance-audit": {
    title: "Export Compliance Audit Tool - AI Risk Check | EXIMINQ",
    description: "Automated Shipping Bill & License Audit. Detect non-compliance risks in export data before Customs does. Get a Risk Score in 60 seconds."
  },
  "/features/document-vault": {
    title: "Digital Export Document Vault - Cloud Storage | EXIMINQ",
    description: "Secure cloud storage for Shipping Bills, e-BRCs, and Licenses. One-click sync with ICEGATE. Never lose a trade document again."
  },
  "/features/duty-calculator": {
    title: "Export Duty Calculator - RoDTEP & Drawback | EXIMINQ",
    description: "Calculate exact export profit. Live Duty Drawback, RoDTEP, and SION rates calculator for Indian exporters. Plan pricing accurately."
  },

  // --- DGFT SERVICES ---
    "/services/import-export-code": {
    title: "IEC Profile Deactivation & KYC Update | DGFT Helpdesk Mumbai",
    description: "Fix IEC Profile Deactivation, Duplicate IEC issues, and IEC Surrender Process. Expert help for IEC KYC Update and Merger and Acquisition IEC transfer."
  },
  "/services/advance-authorisation": {
    title: "Advance Authorisation Consultant Mumbai | EXIMINQ",
    description: "Zero Duty Import of raw materials. Handle SION Norms, License issuance, and Redemption (EODC) to close files without penalties."
  },
  "/services/epcg-scheme": {
    title: "EPCG License Consultant Mumbai - 0% Duty Import | EXIMINQ",
    description: "Import Capital Goods at Zero Duty. Services include Application filing, Installation Certificate generation, and Export Obligation (EO) Discharge."
  },
  "/services/iec-code-management": {
    title: "IEC Code Registration & Annual Update Mumbai | EXIMINQ",
    description: "Apply for new IEC or file the mandatory annual update. Prevent IEC deactivation by DGFT. Expert Import Export Code modification in Mumbai."
  },
  "/services/rcmc-registration": {
    title: "E-RCMC Registration Consultant Mumbai - FIEO & EPCs | EXIMINQ",
    description: "Apply for mandatory E-RCMC from FIEO, CHEMEXCIL, EEPC, or APEDA. Handle DGFT portal registration and renewal for export incentives."
  },
  "/services/star-export-house": {
    title: "Star Export House Consultant Mumbai - BG Exemption | EXIMINQ",
    description: "Get 1-Star to 5-Star Export House Status. Claim Double Weightage for MSMEs/ISO to fast-track status. Enjoy 100% Bank Guarantee waiver at Customs."
  },
  "/services/rodtep-rosctl-trading": {
    title: "Sell RoDTEP & RoSCTL Scrips - Best Rates | EXIMINQ",
    description: "Sell RoDTEP & RoSCTL scrips at 98.50%. Instant cash settlement for exporters in Mumbai. Check today's live buying rates here."
  },
  "/services/rodtep-scheme-application": {
    title: "RoDTEP Scheme Application & Scroll Generation | EXIMINQ",
    description: "Scrip not generated? Fix Class Mapping errors, Invoice mismatches, and Scroll Generation issues on ICEGATE to credit RoDTEP to the ledger."
  },
  "/services/duty-drawback": {
    title: "Duty Drawback Consultant Mumbai - AIR & Brand Rate | EXIMINQ",
    description: "Claim unclaimed Duty Drawback on exports. Handle All Industry Rate (AIR) claims and Brand Rate Fixation with Ministry of Finance for Mumbai exporters."
  },
  "/services/scomet-licensing": {
    title: "SCOMET License Consultant India - Dual Use Items | EXIMINQ",
    description: "Exporting dual-use technology? Secure SCOMET Authorization from DGFT/MEA for chemicals, aerospace, and electronics to prevent customs hold."
  },
  "/services/defence-export-license": {
    title: "Defence Exim License & SCOMET Consultant India | EXIMINQ",
    description: "Exporting military items? Handle End User Certificates (EUC) and DGFT/MOD licensing for defence exports."
  },
  "/services/dfia-license": {
    title: "DFIA License Consultant - Transferable Duty Credit | EXIMINQ",
    description: "Get Duty Free Import Authorization (DFIA). Handle SION norms, Transferability Endorsement, and license sale for post-export duty benefits."
  },
  "/services/restricted-import-license": {
    title: "Restricted Import License Agent (DGFT & Customs) | EXIMINQ",
    description: "Importing Restricted Items (Tyres, Gold, Chemicals)? Secure specific DGFT Import Licenses to clear cargo without penalty."
  },
  "/services/gem-registration": {
    title: "GeM Portal Registration & Vendor Assessment | EXIMINQ",
    description: "Register as a Seller on Government e-Marketplace (GeM). Handle OEM Panel creation, Catalog Upload, and Vendor Assessment for government tenders."
  },
  "/services/policy-relaxation-prc": {
    title: "Policy Relaxation Committee (PRC) Representation | EXIMINQ",
    description: "Rejected by DGFT? Get representation at the Policy Relaxation Committee (PRC) in New Delhi to condone delays and fix genuine procedural errors."
  },
  "/services/eop-extension": {
    title: "Export Obligation (EOP) Extension Consultant | EXIMINQ",
    description: "Missed export deadline? File EOP Extension for Advance & EPCG licenses at DGFT to save on heavy Customs Duty & Interest penalties."
  },
  "/services/interest-equalisation": {
    title: "Interest Equalisation Scheme (IES) Consultant | EXIMINQ",
    description: "Claim 2% or 3% Interest Subvention. Generate the Unique IES UIN from DGFT and link it with the bank to reduce pre-shipment loan interest."
  },

  // --- CUSTOMS SERVICES ---
  "/services/icegate-registration": {
    title: "ICEGATE Registration & AD Code Consultant Mumbai | EXIMINQ",
    description: "Stuck with ICEGATE registration? Handle Simplified Registration, DSC Mapping, and AD Code Registration for Mumbai exporters. Fix Java errors instantly."
  },
  "/services/ad-code-registration": {
    title: "AD Code Registration at Customs & ICEGATE Mumbai | EXIMINQ",
    description: "Mandatory AD Code Registration for Exporters. Register Bank AD Code at Nhava Sheva, Mundra, & Air Cargo. Fix 'AD Code Not Found' errors instantly."
  },
  "/import-management-registration":{
    title: "Import Management Registration Consultant Mumbai | EXIMINQ",
    description: "Stuck with Import Management Registration? Handle Simplified Registration, DSC Mapping, and AD Code Registration for Mumbai exporters. Fix Java errors instantly."
  },
  "/services/aeo-certification": {
    title: "AEO T1, T2, T3 Certification Consultant Mumbai | EXIMINQ",
    description: "Get AEO Status for faster Customs clearance. Handle AEO T1, T2 & LO Application, Annexure filling, and Physical Verification support."
  },
  "/services/moowr-scheme": {
    title: "MOOWR Scheme Consultant Mumbai - Bonded Warehouse | EXIMINQ",
    description: "Defer Customs Duty on raw materials with MOOWR Scheme. Expert consultancy for Section 65 Bonded Warehouse manufacturing in Mumbai."
  },
  "/services/svb-valuation": {
    title: "SVB Consultant Mumbai - Related Party Import Valuation | EXIMINQ",
    description: "Got an SVB Notice? Expert Special Valuation Branch consultancy for Related Party Imports. Handle Questionnaire reply, EDD refund, and Final Order."
  },
  "/services/rmcc-alert-removal": {
    title: "RMCC Alert & Customs Hold Removal Consultant | EXIMINQ",
    description: "Shipment stuck due to RMCC Alert? Handle immediate Alert Revocation and legal replies to DGFT/Customs to clear cargo at Mumbai ports."
  },
  "/services/project-cargo": {
    title: "Project Cargo & ODC Handling Agent Mumbai | EXIMINQ",
    description: "Expert clearance for Over Dimensional Cargo (ODC) & Heavy Machinery. Handle Breakbulk, Flat Racks, and Project Logistics at Nhava Sheva & Mumbai Port."
  },
  "/services/dpd-registration": {
    title: "DPD Registration Consultant Nhava Sheva (JNPT) | EXIMINQ",
    description: "Save CFS costs with Direct Port Delivery (DPD). Register importers at JNPT for DPD status to get container delivery in < 48 hours."
  },
  "/services/factory-stuffing": {
    title: "Factory Stuffing Permission & Self Sealing | EXIMINQ",
    description: "Stuff containers at factory premises. Handle Factory Stuffing permission, RFID E-Seal registration, and Officer deputation (MoT) for exporters."
  },
  "/services/bill-of-entry-import": {
    title: "Bill of Entry (BE) Filing Agent Mumbai - Import | EXIMINQ",
    description: "Expert Bill of Entry filing for Home Consumption or Warehousing. Correct HS Code classification and Duty calculation at Nhava Sheva & Air Cargo."
  },
  "/services/shipping-bill-export": {
    title: "Shipping Bill Filing Agent Mumbai - Export LEO | EXIMINQ",
    description: "Generate Shipping Bills instantly. Handle Checklist approval, LEO (Let Export Order), and export query replies on ICEGATE to move cargo fast."
  },
  "/services/e-sanchit-support": {
    title: "e-Sanchit Document Upload & IRN Generation | EXIMINQ",
    description: "Fix Digital Signature errors on e-Sanchit. Upload Invoices/Packing Lists to ICEGATE, generate IRNs, and link them to the Bill of Entry."
  },
  "/services/customs-duty-payment": {
    title: "Customs Duty Payment & ECL Wallet Manager | EXIMINQ",
    description: "Stuck with ICEGATE payments? Manage the Electronic Cash Ledger (ECL). Generate Challans, top-up wallets, and pay Customs Duty without failures."
  },
  "/services/igst-refund": {
    title: "IGST Refund Consultant - Export with Payment of Duty | EXIMINQ",
    description: "IGST Refund stuck? Resolve 'Invoice Mismatch', EGM errors, and Scroll Status (SB005) to get tax refunds credited to the bank."
  },
  "/services/bond-cancellation": {
    title: "Bond Cancellation & No Due Certificate (NDC) | EXIMINQ",
    description: "Release Bank Guarantee (BG). Handle Bond Cancellation and procure No Due Certificates (NDC) from Customs after Export Obligation is met."
  },
  "/services/non-availment-certificate": {
    title: "Non-Availment Certificate (Re-Import) Consultant | EXIMINQ",
    description: "Re-importing rejected goods? Issue Non-Availment Certificates to prove no incentives were claimed, saving payment of Import Duty."
  },

  // --- LOGISTICS SERVICES ---
  "/services/freight-forwarding": {
    title: "International Freight Forwarding Agent Mumbai | EXIMINQ",
    description: "Sea & Air Freight Forwarding from Mumbai (Nhava Sheva / Sahar). Best rates for FCL/LCL export containers and import consolidation."
  },
  "/services/cha-services": {
    title: "CHA & Customs Broker Services Nhava Sheva | EXIMINQ",
    description: "Licensed Customs House Agent (CHA) in Mumbai. Expert clearance for Import/Export cargo at JNPT, Air Cargo, and Mundra. Fast LEO & OOC generation."
  },
  "/services/warehousing-solutions": {
    title: "Export-Import Warehousing & Bonded Storage Mumbai | EXIMINQ",
    description: "Secure warehousing for export cargo near JNPT & Bhiwandi. Offer General Warehousing, Bonded Storage, and Palletization services."
  },
  "/services/inland-transportation": {
    title: "Inland Container Transportation (Transport) Mumbai | EXIMINQ",
    description: "Reliable trucking for Export Containers. First-mile pickup from factory to JNPT/Air Cargo. GPS-tracked 20ft/40ft trailers and LCVs."
  },
  "/services/marine-insurance": {
    title: "Marine Cargo Insurance Policy for Exporters | EXIMINQ",
    description: "Protect shipments against loss or damage. Instant Marine Insurance policy issuance (ICC-A, ICC-B) for Sea and Air cargo."
  },

  // --- REGULATORY SERVICES ---
  "/services/import-management": {
    title: "Import Management & Compliance Consultant Mumbai | EXIMINQ",
    description: "End-to-end import compliance. Handle SIMS, NIMS, PIMS registration, Restricted Import Licenses, and BIS/QCO compliance for Mumbai importers."
  },
  "/services/halal-certification": {
    title: "Halal Certification Consultant India - i-CAS Accredited | EXIMINQ",
    description: "Exporting to UAE/Saudi? Get Halal Certification from Jamiat & i-CAS accredited bodies. Handle audit preparation & documentation for Food, Meat & Pharma."
  },
  "/services/fertiliser-import": {
    title: "Fertiliser Import Registration (FCO) Consultant | EXIMINQ",
    description: "Importing Urea, NPK, or Organics? Handle Fertiliser Control Order (FCO) Registration, Lab Testing, and Port Clearance in Mumbai."
  },
  "/services/horticulture-export": {
    title: "Horticulture Export & Plant Quarantine Consultant | EXIMINQ",
    description: "Exporting fruits or vegetables? Handle APEDA Registration, Phytosanitary Certificates (Phyto), and Plant Quarantine (PQ) clearance at Mumbai Air Cargo."
  },
  "/services/free-sale-certificate": {
    title: "Free Sale Certificate Consultant (DGFT & Health) | EXIMINQ",
    description: "Exporting Medical Devices or Food? Procure Free Sale Certificates from DGFT, CDSCO, or State Licensing Authorities for global market access."
  },
  "/services/bis-registration": {
    title: "BIS Registration (ISI Mark) Consultant for Import | EXIMINQ",
    description: "Mandatory BIS Registration for Steel, Electronics & Toys. Handle Factory Audit, Lab Testing, and QCO Compliance to clear goods at Customs."
  },
  "/services/epr-authorization": {
    title: "EPR Authorization Consultant (Plastic & E-Waste) | EXIMINQ",
    description: "Importing plastic packaging or electronics? Get Mandatory EPR Registration on CPCB portal. Handle target setting and annual filing to avoid penalties."
  },
  "/services/fssai-licensing": {
    title: "FSSAI Import License & Food Safety Consultant | EXIMINQ",
    description: "Importing Food Products? Handle FSSAI Central License and FICS Clearance at the port. Resolve labeling defects and non-conformance queries."
  },
  "/services/wpc-eta-license": {
    title: "WPC (ETA) License Consultant - Wireless Imports | EXIMINQ",
    description: "Importing Bluetooth/WiFi devices? Get WPC Equipment Type Approval (ETA) and Import License. Fix 'WPC Hold' status at Customs instantly."
  },
  "/services/legal-metrology-lmpc": {
    title: "LMPC Certificate Consultant - Legal Metrology | EXIMINQ",
    description: "Importing pre-packaged goods? Mandatory LMPC Registration is required before shipment. Ensure MRP stickers comply with Indian packaging laws."
  },
  "/services/edpms-ebrc": {
    title: "EDPMS & e-BRC Reconciliation Consultant | EXIMINQ",
    description: "Removed from RBI Caution List. Reconcile pending Shipping Bills in EDPMS, generate e-BRCs, and close open export entries with the bank."
  },
  "/services/aqcs-pqms": {
    title: "AQCS & PQMS Clearance Agent (Animal & Plant) | EXIMINQ",
    description: "Importing Leather, Pet Food, or Plants? Handle AQCS (Animal Quarantine) and PQMS (Plant Quarantine) clearance and NOC at Mumbai ports."
  },
  "/services/cdsco-drug-controller": {
    title: "CDSCO Import Registration (Form 41/10) Agent | EXIMINQ",
    description: "Importing Cosmetics, Drugs, or Medical Devices? Handle CDSCO Port Registration, ADC NOC, and Test License (Form 11) for fast clearance."
  },
  "/services/certificate-of-origin": {
    title: "Certificate of Origin (CoO) - Preferential & Non-Pref | EXIMINQ",
    description: "Get CoO from Chamber of Commerce or Export Council. Handle GSP, SAPTA, APTA, and Generic CoO issuance for reduced import duty abroad."
  },
  "/services/gst-lut-filing": {
    title: "GST LUT Filing for Exporters (Letter of Undertaking) | EXIMINQ",
    description: "Export without paying IGST. File annual GST LUT (Form RFD-11) instantly. Mandatory for all Zero-Rated Supply exports."
  },
  "/services/rex-registration": {
    title: "REX Registration Consultant - Export to EU | EXIMINQ",
    description: "Exporting to Europe? Get Registered Exporter (REX) number for self-certification. Mandatory for claiming GSP duty benefits in EU/UK markets."
  },
  "/services/dsc-services": {
    title: "Class 3 Digital Signature (DSC) for DGFT & ICEGATE | EXIMINQ",
    description: "Buy Class 3 Combo DSC (Sign + Encrypt). Handle DSC mapping errors on DGFT, ICEGATE, and GST portals. Same-day token delivery in Mumbai."
  },
  "/services/igcr-returns": {
    title: "IGCR Rules 2022 Compliance & Monthly Returns | EXIMINQ",
    description: "Importing at Concessional Duty? Manage IGCR Intimation, Bond execution, and file mandatory Monthly Returns (IGCR-3) to prevent duty recovery."
  },
  "/services/iem-registration": {
    title: "IEM Registration Consultant (Industrial Entrepreneur) | EXIMINQ",
    description: "Setting up a factory? File IEM Part A (Intent) and Part B (Production) with DPIIT. Mandatory for large-scale industries not under MSME."
  },
  "/services/industrial-license": {
    title: "Industrial License Consultant (IDRA) India | EXIMINQ",
    description: "Manufacturing Explosives, Chemicals, or Defence items? Secure Compulsory Industrial License (IL) from DPIIT and Ministry of Home Affairs."
  },
  "/services/factory-license": {
    title: "Factory License Registration (DISH) Consultant Mumbai | EXIMINQ",
    description: "Get Factory Plan Approval & License from DISH (Directorate of Industrial Safety). Handle compliance for factories with >10 workers in Maharashtra."
  },
  "/services/gst-returns": {
    title: "GST Return Filing for Exporters (GSTR-1, 3B, 9) | EXIMINQ",
    description: "Expert GST Filing for Exporters. Ensure correct reporting of Zero-Rated Supplies (Table 6A) in GSTR-1 to ensure IGST Refund is never blocked."
  },
  "/services/pollution-control": {
    title: "Pollution Control Board (MPCB) Consent Agent Mumbai | EXIMINQ",
    description: "Get Consent to Establish (CTE) & Operate (CTO) from MPCB. Handle Pollution Control compliance for Red, Orange & Green category industries."
  },
  "/services/warehouse-license": {
    title: "Public & Private Bonded Warehouse License (Sec 57/58) | EXIMINQ",
    description: "Set up a Customs Bonded Warehouse. Secure Section 57 (Public) and Section 58 (Private) Licenses from Customs for duty-free storage."
  },
  "/services/un-iip-certification": {
    title: "UN IIP Certification Consultant - Dangerous Goods | EXIMINQ",
    description: "Exporting Hazardous Chemicals? Get UN IIP Certificate for packaging. Handle Indian Institute of Packaging (IIP) testing and certification."
  },
  "/services/ca-certification": {
    title: "CA Certificate for DGFT & Customs (Net Worth) | EXIMINQ",
    description: "Instant CA Certificates for Export. Issue Net Worth Certificates, turnover certificates for Star Status, and Utilization Certificates for EPCG/Advance."
  },
  "/services/compliance-audit": {
    title: "Export-Import Transactional Audit & Health Check | EXIMINQ",
    description: "Risk of Customs Notice? Conduct deep Transactional Audit of past 5 years' imports/exports to find duty shortfalls before DRI does."
  },
  "/services/customs-adjudication": {
    title: "Customs Adjudication & Appeal Consultant Mumbai | EXIMINQ",
    description: "Received a Show Cause Notice (SCN)? Draft legal replies, attend Personal Hearings (PH), and handle appeals at Commissioner (Appeals) & CESTAT."
  },
  "/services/iso-certification": {
    title: "ISO 9001, 14001, 45001 Certification Consultant | EXIMINQ",
    description: "Get ISO Certified in 3 days. Handle documentation and audit for ISO 9001 (Quality), 14001 (Environment), and 45001 (Safety) to boost export credibility."
  },

  // --- IPR SERVICES ---
  "/services/trademark-registration": {
    title: "Trademark Registration Consultant Mumbai | EXIMINQ",
    description: "Protect brand identity. Expert Trademark filing in Mumbai for Class 5, 9, 35 & more. Fast approval & objection handling."
  },
  "/services/copyright-registration": {
    title: "Copyright Registration Consultant Mumbai - Artwork & Code | EXIMINQ",
    description: "Protect creative work. Handle Copyright Registration for Software Code, Literary works, and Artistic designs. Lifetime validity for IP."
  },
  "/services/logo-brand-copyright": {
    title: "Logo & Brand Copyright Registration (Artistic Work) | EXIMINQ",
    description: "Don't just Trademark it, Copyright it. Secure Logo's artistic design under the Copyright Act to prevent unauthorized reproduction by competitors."
  },
  "/services/barcode-registration": {
    title: "Barcode Registration (GS1 India) & GTIN Consultant | EXIMINQ",
    description: "Need Barcodes for Retail Export? Register products with GS1 India to generate GTIN/EAN codes. Mandatory for Amazon & Global Retail chains."
  },
  "/services/design-registration": {
    title: "Industrial Design Registration Consultant Mumbai | EXIMINQ",
    description: "Protect the shape and look of products. File Design Registration (Patents Office) to stop competitors from copying product aesthetics."
  }
};