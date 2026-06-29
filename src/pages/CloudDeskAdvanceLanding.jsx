import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import NavbarAdvance from "../components/CloudDeskAdvanceLanding/NavbarAdvance";
import HeroAdvance from "../components/CloudDeskAdvanceLanding/HeroAdvance";
import AdvanceServices from "../components/CloudDeskAdvanceLanding/AdvanceServices";
import QuickAdvance from "../components/CloudDeskAdvanceLanding/QuickAdvance";
import FooterAdvance from "../components/CloudDeskAdvanceLanding/FooterAdvance";
import { ModalEnrollAdvance } from "../components/CloudDeskAdvanceLanding/ModelEnrollAdvance";
import { AlertTriangle } from 'lucide-react';

export default function CloudDeskAdvanceLanding() {
  const [scrolled, setScrolled] = useState(false);
  const [showEnrollModal, setShowEnrollModal] = useState({ open: false, type: "" });
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
    <Helmet>
      <title>Advance Authorisation Redemption & EODC Closure | EXIMINQ</title>
      <meta
        name="description"
        content="Advance Authorisation redemption, EODC filing, ANF 4F documentation, export obligation closure, customs bond cancellation, and bank guarantee release support in India."
      />
      <meta name="robots" content="index, follow" />
      <link rel="canonical" href="https://eximinq.in/advance-authorization-redemption/" />
      <meta property="og:title" content="Advance Authorisation Redemption & EODC Closure | EXIMINQ" />
      <meta
        property="og:description"
        content="Close pending Advance Authorisation licenses with EODC filing, DGFT documentation, value addition checks, and customs bond cancellation support."
      />
      <meta property="og:url" content="https://eximinq.in/advance-authorization-redemption/" />
      <meta property="og:type" content="website" />
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "BreadcrumbList",
              "itemListElement": [
                {
                  "@type": "ListItem",
                  "position": 1,
                  "name": "Home",
                  "item": "https://eximinq.in/"
                },
                {
                  "@type": "ListItem",
                  "position": 2,
                  "name": "Services",
                  "item": "https://eximinq.in/services/"
                },
                {
                  "@type": "ListItem",
                  "position": 3,
                  "name": "Advance Authorisation Redemption",
                  "item": "https://eximinq.in/advance-authorization-redemption/"
                }
              ]
            },
            {
              "@type": "Service",
              "name": "Advance Authorisation Redemption and EODC Closure",
              "serviceType": "DGFT Export Obligation Discharge Certificate filing",
              "description": "Consultancy for Advance Authorisation redemption, ANF 4F filing, Appendix 4H or 4I documentation, value addition verification, customs bond cancellation, and bank guarantee release.",
              "provider": {
                "@type": "Organization",
                "name": "EXIMINQ",
                "url": "https://eximinq.in/"
              },
              "areaServed": {
                "@type": "Country",
                "name": "India"
              },
              "url": "https://eximinq.in/advance-authorization-redemption/"
            },
            {
              "@type": "FAQPage",
              "mainEntity": [
                {
                  "@type": "Question",
                  "name": "What is Advance Authorisation redemption?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Advance Authorisation redemption is the DGFT process of proving export obligation fulfillment and obtaining the Export Obligation Discharge Certificate, also called EODC."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Which documents are required for EODC closure?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Common documents include ANF 4F, shipping bills, e-BRCs, bills of entry, CA certificates such as Appendix 4H or 4I, license copies, and proof of value addition."
                  }
                },
                {
                  "@type": "Question",
                  "name": "What happens if Advance Authorisation is not redeemed?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Unredeemed licenses can lead to customs duty recovery, interest, DGFT deficiency notices, bank guarantee blockage, and restrictions on future authorisations."
                  }
                }
              ]
            }
          ]
        })}
      </script>
    </Helmet>
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans selection:bg-blue-500 selection:text-white">

      {/* Urgency Banner */}
      {/* <div className="bg-red-600 text-white py-2 px-4 text-center text-sm font-bold tracking-wide z-50 relative flex items-center justify-center gap-2">
        <AlertTriangle className="w-4 h-4 shrink-0" />
        WARNING: Failure to close Advance Authorisation licenses invites DRI audits, SCNs, and demands for Customs Duty + 15% Interest.
      </div> */}

      <NavbarAdvance
        scrolled={scrolled}
        setShowEnrollModal={setShowEnrollModal}
        isMenuOpen={isMenuOpen}
        setIsMenuOpen={setIsMenuOpen}
      />

      <HeroAdvance setShowEnrollModal={setShowEnrollModal} />
      <AdvanceServices setShowEnrollModal={setShowEnrollModal} />
      <QuickAdvance />

      <FooterAdvance onEnrollClick={() => setShowEnrollModal({ open: true, type: "Enroll" })} />

      {showEnrollModal.open && (
        <ModalEnrollAdvance
          show={showEnrollModal.open}
          onClose={() => setShowEnrollModal({ open: false, type: "" })}
          type={showEnrollModal.type}
        />
      )}
    </div>
    </>
  );
}
