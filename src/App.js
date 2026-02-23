import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import AnalyticsTracker from "./AnalyticsTracker";
import Home from "./pages/Home";
import ContactSupport from "./components/CloudDeskcharates/ContactSupport/ContactSupport";
import CloudDeskHome from "./pages/CloudDeskHome";
import CloudDeskServices from "./pages/CloudDeskServices";
import CloudDeskDGFTCustoms from "./pages/CloudDeskDGFTCustoms";
import CloudDeskCompliance from "./pages/CloudDeskCompliance";
import CloudDeskCoo from "./pages/CloudDeskCOO";
import CloudDeskContact from "./pages/CloudDeskContact";
import CloudDeskSaasLanding from "./pages/CloudDeskSaasLanding";
import CloudDeskCorpLanding from "./pages/CloudDeskCorpLanding";
import CloudDeskStartupLanding from "./pages/CloudDeskStartupLanding";
import PageNotFound from "./pages/PageNotFound";
import CloudDeskAEOLanding from "./pages/CloudDeskAEOLanding"
import CloudDeskHSN from "./pages/CloudDeskHSN";
import DutyCalculator from "./components/CloudDeskDutyCalculator/DutyCalculator";
import CloudDeskDutyCalculator from "./pages/CloudDeskDutyCalculator";
import CloudDeskIceManagement from "./pages/CloudDeskIceManagement"
import CloudDeskICERegistration from "./pages/CloudDeskIceRegistration"
import CloudDeskADCode from "./pages/CloudDeskADCode"
import CloudDeskERCMC from "./pages/CloudDeskERCMC"
import CloudDeskBankEntry from "./pages/CloudDeskBankEntry"
import CloudDeskShippingBills from "./pages/CloudDeskShippingBills"
import CloudDeskESANCHIT from "./pages/CloudDeskESANCHIT"
import CloudDeskDutyPayment from "./pages/CloudDeskDutyPayment"
import CloudDeskAEOCertificate from "./pages/CloudDeskAEOCertificate"
import CloudDeskMoowr from "./pages/CloudDeskMoowr"
import CloudDeskGlobalTrade from "./pages/CloudDeskGlobalTrade"
import CloudDeskCHAServices from "./pages/CloudDeskCHAServices"
import CloudDeskWarehousing from "./pages/CloudDeskWarehousing"
import CloudDeskInlandTransport from "./pages/CloudDeskInlandTransport"
import CloudDeskMarine from "./pages/CloudDeskMarine"
import CloudDeskProjectCargo from "./pages/CloudDeskProjectCargo"
import CloudDeskAdvanceAuthority from "./pages/CloudDeskAdvanceAuthority"
import CloudDeskZeroDuty from "./pages/CloudDeskZeroDuty"
import CloudDeskSCOMET from "./pages/CloudDeskSCOMET"
import CloudDeskRodtep from "./pages/CloudDeskRodtep"
import CloudDeskIGSTRefunds from "./pages/CloudDeskIGSTRefunds"
import CloudDeskDutyDrawBack from "./pages/CloudDeskDutyDrawBack"
import CloudDeskBisRegistration from "./pages/CloudDeskBisRegistration"
import CloudDeskEPRAuthorization from "./pages/CloudDeskEPRAuthorization"
import CloudDeskFSSAILicensing from "./pages/CloudDeskFSSAILicensing"
import CloudDeskWPCETA from "./pages/CloudDeskWPCETA"
import CloudDeskLegalMetrology from "./pages/CloudDeskLegalMetrology"
import CloudDeskEDPMS from "./pages/CloudDeskEDPMS"
import CloudDeskEBRC from "./pages/CloudDeskEBRC"
import CloudDeskCDSCO from "./pages/CloudDeskCDSCO"
import CloudDeskCertificate from "./pages/CloudDeskCertificate"
import CloudDeskGSTLUT from "./pages/CloudDeskGSTLUT"
import CloudDeskREX from "./pages/CloudDeskREX"
import CloudDeskCustomsAdjudication from "./pages/CloudDeskCustomsAdjudication"
import CloudDeskPolicyRelaxation from "./pages/CloudDeskPolicyRelaxation"
import CloudDeskDigitalSignatures from "./pages/CloudDeskDigitalSignatures"
import CloudDeskImporters from "./pages/CloudDeskImporters"
import CloudDeskNoDue from "./pages/CloudDeskNoDue"
import CloudDeskNoIncentive from "./pages/CloudDeskNoIncentive"
import CloudDeskDisclaimer from "./pages/CloudDeskDisclaimer"
import CloudDeskPrivacy from "./pages/CloudDeskPrivacy"
import CloudDeskIES from "./pages/CloudDeskIES"
import CloudDeskInvoice from "./pages/CloudDeskInvoice";
import CloudDeskEOP from "./pages/CloudDeskEOP";
import CloudDeskHalal from "./pages/CloudDeskHalal";
import CloudDeskIGCR from "./pages/CloudDeskIGCR";
import CloudDeskISO from "./pages/CloudDeskISO";
import CloudDeskFertilizer from "./pages/CloudDeskFertilizer"
import TermsOfServicePage from "./pages/TermsOfServicePage"
import CloudDeskDFIA from "./pages/CloudDeskDFIA"
import CloudDeskFreeSale from "./pages/CloudDeskFreeSale";
import CloudDeskExportHouse from "./pages/CloudDeskExportHouse"
import CloudDeskForeignTrade from "./pages/CloudDeskForeignTrade"
import RegulatoryUpdates from "./pages/RegulatoryUpdates";
import ExchangeRates from "./pages/ExchangeRates";
import CloudDeskDefenceEXIM from "./pages/CloudDeskDefenceEXIM";
import CloudDeskIEM from "./pages/CloudDeskIEM";
import CloudDeskIndustrial from "./pages/CloudDeskIndustrial";
import CloudDeskDPD from "./pages/CloudDeskDPD";
import CloudDeskFactory from "./pages/CloudDeskFactory";
import CloudDeskFactoryStuffing from "./pages/CloudDeskFactoryStuffing"
import CloudDeskCertifiedGovernment from "./pages/CloudDeskCertifiedGovernment"
import CloudDeskGSTFiling from "./pages/CloudDeskGSTFiling"
import CloudDeskHorticulture from "./pages/CloudDeskHorticulture"
import CloudDeskPollution from "./pages/CloudDeskPollution"
import CloudDeskBrand from "./pages/CloudDeskBrand";
import CloudDeskCopyright from "./pages/CloudDeskCopyright"
import CloudDeskBrandCopyright from "./pages/CloudDeskBrandCopyright"
import CloudDeskLogoDesign from "./pages/CloudDeskLogoDesign";
import CloudDeskBarcode from "./pages/CloudDeskBarcode"
import CloudDeskDesign from "./pages/CloudDeskDesign";
import CloudDeskRMCC from "./pages/CloudDeskRMCC";
import CloudDeskSVB from "./pages/CloudDeskSVB"
import CloudDeskWarehouse from "./pages/CloudDeskWarehouse"
import CloudDeskUN from "./pages/CloudDeskUN";
import CloudDeskCA from "./pages/CloudDeskCA";
import CloudDeskEPCG from "./pages/CloudDeskEPCG"
import CloudDeskRodstep from "./pages/CloudDeskRodstep";
import EximinqPharma from "./pages/EximinqPharma";
import EximinqEngineering from "./pages/EximinqEngineering";
import EximinqElectronics from "./pages/EximinqElectronics";
import EximinqChemicals from "./pages/EximinqChemicals";
import TradeSolutionsTextiles from "./pages/TradeSolutionsTextiles";
import EximinqAgro from "./pages/EximinqAgro";
import EximinqSolar from "./pages/EximinqSolar";
import EximinqDefense from "./pages/EximinqDefense";
import EximinqEcommerce from "./pages/EximinqEcommerce";
import ComplianceCalendar from "./pages/ComplianceCalendar"
import BisEprWpcLmpc from "./pages/BisEprWpcLmpc";
import CloudDeskComplianceAudit from "./pages/CloudDeskComplianceAudit";
import CloudDeskDemo from "./pages/CloudDeskDemo";
import SEOManager from "./components/SEOManager";
import CloudDeskAbout from "./pages/CloudDeskAbout";
import CloudDeskStrategic from "./pages/CloudDeskStrategic";
import CloudDeskRefund from "./pages/CloudDeskRefund";
import CloudDeskEPCGClosure from "./pages/CloudDeskEPCGClosure";

function App() {
  return (
    <BrowserRouter>
      <AnalyticsTracker />
      <SEOManager />
      <Routes>
        {/* Charates Routes */}
        <Route path="/charates" element={<Home />} />
        <Route path="/contact-us-support" element={<ContactSupport />} />

        {/* Corp Routes */}
        <Route path="/corp" element={<CloudDeskCorpLanding />} />

        {/* startup Routes */}
        <Route path="/startup" element={<CloudDeskStartupLanding />} />

        {/*AEO Routes  */}
        <Route path="/aeo" element={<CloudDeskAEOLanding />} />

        {/* ICE Management */}
        <Route path="/services/import-export-code" element={<CloudDeskIceManagement />} />

        {/*ICE Registration */}
        <Route path="/services/icegate-registration" element={<CloudDeskICERegistration />} />

      {/* OLD URL REDIRECTS */}
        <Route
          path="/services/iec-registration"
          element={<Navigate to="/services/import-export-code" replace />}
        />

        <Route
          path="/services/ice-registration"
          element={<Navigate to="/services/icegate-registration" replace />}
        />

        {/* AD CODE */}
        <Route path="/services/ad-code-registration" element={<CloudDeskADCode />} />

        {/* E-RCMC */}
        <Route path="/services/e-rcmc-registration" element={<CloudDeskERCMC />} />

        {/* {Bill of Entry} */}
        <Route path="/services/bill-of-entry-filing" element={<CloudDeskBankEntry />} />

        {/* Shipping Bills */}
        <Route path="/services/shipping-bill-filing" element={<CloudDeskShippingBills />} />

        {/* E-Sanchit */}
        <Route path="/services/e-sanchit-filing" element={<CloudDeskESANCHIT />} />

        {/* Duty Payment */}
        <Route path="/services/duty-payment-ecl" element={<CloudDeskDutyPayment />} />

        {/* AEO Certificate */}
        <Route path="/services/aeo-certification" element={<CloudDeskAEOCertificate />} />

        {/* Moowr */}
        <Route path="/services/moowr-scheme" element={<CloudDeskMoowr />} />

        {/* Global Trade */}
        <Route path="/services/freight-forwarding" element={<CloudDeskGlobalTrade />} />

        {/* CHA Services */}
        <Route path="/services/cha-services" element={<CloudDeskCHAServices />} />

        {/* Inland Transportation */}
        <Route path="/services/warehousing-solutions" element={<CloudDeskWarehousing />} />

        {/* Inland Transportation */}
        <Route path="/services/inland-transportation" element={<CloudDeskInlandTransport />} />

        {/* Marine Insrance */}
        <Route path="/services/marine-insurance" element={<CloudDeskMarine />} />

        {/* Project Cargo */}
        <Route path="/services/project-cargo" element={<CloudDeskProjectCargo />} />

        {/* Advance Authority */}
        <Route path="/services/advance-authorisation" element={<CloudDeskAdvanceAuthority />} />

        {/* Zero Duty */}
        <Route path="/services/epcg-scheme" element={<CloudDeskZeroDuty />} />

        {/* SCOMET Licensing */}
        <Route path="/services/scomet-licensing" element={<CloudDeskSCOMET />} />

        {/* RoDTEP  */}
        <Route path="/services/rodtep-scheme" element={<CloudDeskRodtep />} />

        {/* IGST Refunds */}
        <Route path="/services/igst-refund" element={<CloudDeskIGSTRefunds />} />

        {/* Duty DrawBack */}
        <Route path="/services/duty-drawback" element={<CloudDeskDutyDrawBack />} />

        {/* BIS Certification */}
        <Route path="/services/bis-registration" element={<CloudDeskBisRegistration />} />

        {/* EPR Authorization */}
        <Route path="/services/epr-authorization" element={<CloudDeskEPRAuthorization />} />

        {/* FSSAI Licensing */}
        <Route path="/services/fssai-licensing" element={<CloudDeskFSSAILicensing />} />

        {/* WPC (ETA) */}
        <Route path="/services/wpc-license" element={<CloudDeskWPCETA />} />

        {/* Legal Metrology */}
        <Route path="/services/lmpc-registration" element={<CloudDeskLegalMetrology />} />

        {/* EDPMS  */}
        <Route path="/services/edpms-ebrc" element={<CloudDeskEDPMS />} />

        {/* EDPMS & e-BRC */}
        <Route path="/services/aqcs-pqms" element={<CloudDeskEBRC />} />

        {/* CDSCO Registration */}
        <Route path="/services/cdsco-compliance" element={<CloudDeskCDSCO />} />

        {/* Certificate of Origin */}
        <Route path="/services/certificate-of-origin" element={<CloudDeskCertificate />} />

        {/* GST LUT Filing */}
        <Route path="/services/gst-lut-filing" element={<CloudDeskGSTLUT />} />

        {/* REX Registration */}
        <Route path="/services/rex-registration" element={<CloudDeskREX />} />

        {/* Customs Adjudication */}
        <Route path="/services/customs-adjudication" element={<CloudDeskCustomsAdjudication />} />

        {/* Policy Relaxation (PRC) */}
        <Route path="/services/prc-relaxation" element={<CloudDeskPolicyRelaxation />} />

        {/* --------------------------------------------------------------------- */}

        {/* invoice */}
        <Route path="/invoice" element={<CloudDeskInvoice />} />


        {/* ----------------------------------------------------------------------------------- */}

        {/* Digital Signatures */}
        <Route path="/services/dsc-services" element={<CloudDeskDigitalSignatures />} />

        {/* Import Management */}
        <Route path="/services/import-management-registration" element={<CloudDeskImporters />} />

        {/* No Due Certificate */}
        <Route path="/services/no-due-certificate" element={<CloudDeskNoDue />} />

        {/* No Incentive Certificate */}
        <Route path="/services/no-incentive-certificate" element={<CloudDeskNoIncentive />} />

        {/* Interest Equalisation  */}
        <Route path="/services/interest-equalisation-scheme" element={<CloudDeskIES />} />

        {/* Export Obligation Period (EOP) */}
        <Route path="/services/eop-extension" element={<CloudDeskEOP />} />

        {/* Halal Certification */}
        <Route path="/services/halal-certification" element={<CloudDeskHalal />} />

        {/* IGCR Returns */}
        <Route path="/services/igcr-returns" element={<CloudDeskIGCR />} />

        {/* Boost Credibility with ISO Certification */}
        <Route path="/services/iso-certification" element={<CloudDeskISO />} />

        {/* Fertiliser Import License & Compliance */}
        <Route path="/services/fertiliser-import-license" element={<CloudDeskFertilizer />} />

        {/* Free Sale Certificate */}
        <Route path="/services/free-sale-certificate" element={<CloudDeskFreeSale />} />

        {/* DFIA License */}
        <Route path="/services/dfia-license" element={<CloudDeskDFIA />} />

        {/* Export House */}
        <Route path="/services/star-export-house" element={<CloudDeskExportHouse />} />

        {/* Defence EXIM  */}
        <Route path="/services/defence-exim-license" element={<CloudDeskDefenceEXIM />} />

        {/* IEM Registration */}
        <Route path="/services/iem-registration" element={<CloudDeskIEM />} />

        {/* Industrial License */}
        <Route path="/services/industrial-license" element={<CloudDeskIndustrial />} />

        {/* Direct Port Delivery (DPD) Registration */}
        <Route path="/services/dpd-registration" element={<CloudDeskDPD />} />

        {/* Factory License */}
        <Route path="/services/factory-license" element={<CloudDeskFactory />} />

        {/* Factory Stuffing */}
        <Route path="/services/factory-stuffing" element={<CloudDeskFactoryStuffing />} />

        {/* Become a Certified Government */}
        <Route path="/services/gem-registration" element={<CloudDeskCertifiedGovernment />} />

        {/* GST Filing */}
        <Route path="/services/gst-returns" element={<CloudDeskGSTFiling />} />

        {/* Horticulture Export License */}
        <Route path="/services/horticulture" element={<CloudDeskHorticulture />} />

        {/* Pollution Control Board Registration */}
        <Route path="/services/pollution-control" element={<CloudDeskPollution />} />

        {/* Secure Your Brand Identity */}
        <Route path="/services/trademark-registration" element={<CloudDeskBrand />} />

        {/* Copyright Registration */}
        <Route path="/services/copyright-registration" element={<CloudDeskCopyright />} />

        {/* Logo Design */}
        <Route path="/services/brand-copyright" element={<CloudDeskBrandCopyright />} />

        {/* Logo Design  */}
        <Route path="/services/logo-copyright" element={<CloudDeskLogoDesign />} />

        {/* Official Barcode Registration */}
        <Route path="/services/barcode-registration" element={<CloudDeskBarcode />} />

        {/* Design Registration */}
        <Route path="/services/design-registration" element={<CloudDeskDesign />} />

        {/* RMCC Alert Removal */}
        <Route path="/services/rmcc-alert-removal" element={<CloudDeskRMCC />} />

        {/* Svb Registration */}
        <Route path="/services/svb-registration" element={<CloudDeskSVB />} />

        {/* Warehouse License */}
        <Route path="/services/warehouse-license" element={<CloudDeskWarehouse />} />

        {/* UN IIP Certification */}
        <Route path="/services/un-iip-certification" element={<CloudDeskUN />} />

        {/* ca-certification-export-import */}
        <Route path="/services/ca-certification-export-import" element={<CloudDeskCA />} />

        {/* Customs Registration for EPCG */}
        <Route path="/services/customs-license-registration" element={<CloudDeskEPCG />} />

        {/* rodtep-rosctl-trading */}
        <Route path="/services/rodtep-rosctl-trading" element={<CloudDeskRodstep />} />

        {/* Compliance Audit */}
        <Route path="/services/compliance-audit" element={<CloudDeskComplianceAudit />} />


        {/* ----------Home page inner page ---------------------- */}

        {/* EximinqPharma */}
        <Route path="/pharmaceuticals-industry-import-export" element={<EximinqPharma />} />

        {/* EximinqEngineering */}
        <Route path="/engineering-industry-import-export" element={<EximinqEngineering />} />

        {/* EximinqElectronics */}
        <Route path="/electronics-it-industry-import-export" element={<EximinqElectronics />} />

        {/* EximinqChemicals */}
        <Route path="/chemicals-industry-import-export" element={<EximinqChemicals />} />

        {/* TradeSolutionsTextiles  */}
        <Route path="/textiles-apparels-industry-import-export" element={<TradeSolutionsTextiles />} />

        {/* EximinqAgro */}
        <Route path="/food-agro-industry-import-export" element={<EximinqAgro />} />

        {/* EximinqSolar */}
        <Route path="/solar-and-renewables-industry-import-export" element={<EximinqSolar />} />

        {/* EximinqDefense */}
        <Route path="/defense-aerospace-industry-import-export" element={<EximinqDefense />} />

        {/* EximinqEcommerce */}
        <Route path="/ecommerce-industry-import-export" element={<EximinqEcommerce />} />

        {/* ComplianceCalendar.jsx */}
        <Route path="/trade-compliance-calendar" element={<ComplianceCalendar />} />

        {/*bis-epr-wpc-lmpc */}
        <Route path="/bis-epr-wpc-lmpc" element={<BisEprWpcLmpc />} />

        {/* Demo of Contact */}
        <Route path="/demo-of-clouddesk" element={<CloudDeskDemo />} />

        {/* Contact Routes */}
        <Route path="/" element={<CloudDeskHome />} />
        <Route path="/about-us" element={<CloudDeskAbout />} />
        <Route path="/strategic-solutions" element={<CloudDeskStrategic />} />
        <Route path="/services" element={<CloudDeskServices />} />
        <Route path="/foreign-trade-policy" element={<CloudDeskForeignTrade />} />
          <Route path="/foreign-trade-policy/regulatory-updates" element={<RegulatoryUpdates />} />
          <Route path="/foreign-trade-policy/exchange-rates" element={<ExchangeRates />} />
          <Route path="/dgft-customs-consultancy" element={<CloudDeskDGFTCustoms />} />
          <Route path="/certificate-of-origin" element={<CloudDeskCoo />} />
          <Route path="/compliance-trade-india" element={<CloudDeskCompliance />} />
        <Route path="/contact-us" element={<CloudDeskContact />} />
        <Route path="/clouddesk-saas" element={<CloudDeskSaasLanding />} />

        {/* Footer Routes */}
        <Route path="/tools/hs-code-finder" element={<CloudDeskHSN />} />
        {/* Disclaimer */}
        <Route path="/disclaimer" element={<CloudDeskDisclaimer />} />
        {/* Privacy Policy */}
        <Route path="/privacy-policy" element={<CloudDeskPrivacy />} />

        {/* Terms of Service */}
        <Route path="/terms-of-service" element={<TermsOfServicePage />} />

        {/* {DutyCalculator} */}
        <Route path="/tools/duty-calculator-finder" element={<CloudDeskDutyCalculator />} />

        <Route path="/rodtep-refund-recovery" element={<CloudDeskRefund />} />

        <Route path="/epcg-closure-services" element={<CloudDeskEPCGClosure />} />

        {/* Thank You Page */}
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
