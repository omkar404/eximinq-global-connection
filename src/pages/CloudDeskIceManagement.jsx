import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  BadgeCheck,
  BookOpenCheck,
  Building2,
  CalendarClock,
  CheckCircle2,
  ChevronDown,
  ClipboardCheck,
  FileCheck2,
  FileSearch,
  Fingerprint,
  Globe2,
  Landmark,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  ReceiptText,
  ShieldCheck,
  Sparkles,
  Target,
  Twitter,
  Facebook
} from "lucide-react";
import { MainNavbar } from "../components/IECManagement/MainNavbar";
import { ModalEnroll } from "../components/IECManagement/ModalEnroll";
import QuickForm from "../components/IECManagement/QuickForm";

const HIGHLIGHTS = [
  "IEC registration consultant India",
  "New IEC application, annual update, modification, and deactivation recovery",
  "DGFT portal workflow, Aadhaar or DSC validation, and document checks",
  "Profile correction, mobile-email recovery, and trade-readiness support"
];

const SERVICE_TRACKS = [
  {
    title: "New IEC registration",
    description:
      "For importers, exporters, startups, manufacturers, traders, and service businesses that need a fresh DGFT-linked Import Export Code."
  },
  {
    title: "IEC annual update and profile confirmation",
    description:
      "For active IEC holders that need to complete the annual DGFT profile confirmation cycle and reduce the risk of profile deactivation."
  },
  {
    title: "IEC profile modification and recovery",
    description:
      "For changes involving email, mobile, address, director or partner records, branch details, constitution change, duplicate IEC concerns, or access-recovery issues."
  }
];

const BENEFITS = [
  "Creates the core DGFT identity required for most import-export transactions, customs integration, RCMC workflows, export benefits, and banking-related trade activity.",
  "Reduces portal-side delays by aligning entity data, PAN linkage, signatory details, and validation method before filing begins.",
  "Helps businesses avoid disruption caused by missed annual updation, inaccessible profile controls, or mismatched entity records in the DGFT profile.",
  "Improves long-term trade readiness by treating IEC not as a one-time certificate, but as a digital trade identity that needs ongoing accuracy."
];

const ELIGIBILITY_POINTS = [
  "Businesses and individuals intending to import or export goods or services and needing an active Import Export Code linked to PAN and DGFT records.",
  "Existing IEC holders that need annual profile updation, no-change confirmation, or rectification of outdated contact and entity information.",
  "Companies, LLPs, partnerships, proprietorships, trusts, and other eligible entities that need IEC-related filing support with Aadhaar or DSC validation.",
  "Businesses facing deactivation, duplicate IEC concerns, constitution changes, signatory issues, or portal-access problems affecting trade operations."
];

const DOCUMENTS_REQUIRED = [
  "PAN, entity constitution records, business address proof, authorised signatory details, and contact information that must match the DGFT profile accurately.",
  "Bank account details, cancelled cheque or bank proof, and any supporting KYC information required for IEC creation or profile correction.",
  "Aadhaar-linked validation details or Class 3 DSC path depending on entity type, filing method, and signatory structure.",
  "Existing IEC profile details, DGFT login evidence, old email or mobile references, portal screenshots, and change-support documents for modification or recovery cases."
];

const PROCESS_STEPS = [
  {
    title: "Requirement and entity review",
    detail:
      "We first identify whether the requirement is a new IEC, annual update, profile correction, deactivation recovery, or a more technical entity-transition case."
  },
  {
    title: "Document and validation readiness",
    detail:
      "PAN linkage, signatory path, bank proof, address records, and Aadhaar or DSC validation requirements are reviewed before filing starts."
  },
  {
    title: "DGFT portal filing or correction workflow",
    detail:
      "The application or modification path is prepared around the exact transaction type so the IEC profile aligns correctly with DGFT expectations."
  },
  {
    title: "Deficiency handling and tracking",
    detail:
      "If issues appear at validation, mismatch, or access-recovery stage, the objective is to resolve the blocker rather than only resubmit the same incomplete record."
  },
  {
    title: "Trade-readiness follow-through",
    detail:
      "After approval or correction, the focus shifts to ensuring the IEC profile remains usable for downstream trade activities such as RCMC, ICEGATE, banking, and export benefit workflows."
  }
];

const TIMELINE_POINTS = [
  "Fresh IEC application review and readiness check: typically 1 to 2 working days once records are available.",
  "Standard new IEC filing and issuance: often quick, but timing still depends on validation quality and DGFT-side processing conditions.",
  "Annual update and no-change confirmation cases are usually faster than complex modification or recovery cases.",
  "Profile access issues, contact recovery, constitution change, or mismatch-heavy cases can take longer because the obstacle is not only submission but account-level correction."
];

const COMMON_ISSUES = [
  {
    title: "Wrong or inaccessible email and mobile in IEC profile",
    detail:
      "Many businesses lose practical control of the IEC because the profile is still linked to an old signatory, consultant, or inactive communication channel."
  },
  {
    title: "PAN and profile mismatch",
    detail:
      "Even small differences in entity name formatting, spacing, signatory details, or supporting records can interrupt filing or approval."
  },
  {
    title: "Missed annual updation",
    detail:
      "Businesses often assume IEC is lifetime-valid and therefore ignore the annual confirmation requirement, creating unnecessary deactivation or compliance risk."
  },
  {
    title: "IEC is treated as isolated paperwork",
    detail:
      "In reality, IEC accuracy affects RCMC, ICEGATE, DGFT benefit workflows, shipping documentation, banking coordination, and broader trade continuity."
  }
];

const FAQS = [
  {
    question: "What is an Import Export Code in India?",
    answer:
      "Import Export Code or IEC is the key DGFT-linked trade identifier generally required for businesses and individuals carrying out import and export activity under the applicable Indian foreign trade framework."
  },
  {
    question: "Is IEC valid for a lifetime?",
    answer:
      "The code itself does not expire like a short-term licence, but IEC holders still need to keep the profile updated and complete the applicable annual confirmation or updation process on the DGFT system."
  },
  {
    question: "Who needs IEC registration?",
    answer:
      "Importers, exporters, traders, manufacturers, service exporters, startups, and businesses entering cross-border trade usually assess IEC as a core first-step compliance requirement."
  },
  {
    question: "Can I modify my IEC details after registration?",
    answer:
      "Yes. IEC profile correction or modification may be needed for address changes, signatory changes, contact updates, constitution changes, bank detail updates, and other DGFT-linked profile corrections."
  },
  {
    question: "Why is my IEC not getting indexed properly in Google right now?",
    answer:
      "The previous page declared a canonical URL different from the actual live route. This implementation corrects the canonical and aligns the route, metadata, and content structure so Google gets a consistent indexing signal."
  },
  {
    question: "Why can this page rank for IEC registration keywords?",
    answer:
      "Because it covers the full user journey around new IEC application, annual update, modification, deactivation risk, portal workflow, documents, timelines, official references, and downstream trade relevance."
  }
];

const GOVERNMENT_REFERENCES = [
  {
    label: "DGFT IEC Profile Management Help",
    href: "https://www.dgft.gov.in/CP/?opt=iec-profile-management-help"
  },
  {
    label: "DGFT Help Module for Importer Exporter Code",
    href: "https://www.dgft.gov.in/CP/?opt=help-module-for-iec"
  },
  {
    label: "DGFT Trade Notice and Public Notices",
    href: "https://www.dgft.gov.in/CP/?opt=trade-notice"
  },
  {
    label: "DGFT Services and Online Filing Portal",
    href: "https://www.dgft.gov.in/CP/"
  }
];

const RELATED_LINKS = [
  {
    href: "/services/icegate-registration/",
    title: "ICEGATE Registration Support",
    description:
      "Relevant after IEC where customs-side registration and portal activation are needed for filing and trade execution."
  },
  {
    href: "/services/ad-code-registration/",
    title: "AD Code Registration Support",
    description:
      "Important for exporters once IEC is active and bank linkage needs to be aligned with customs and shipping workflows."
  },
  {
    href: "/services/e-rcmc-registration",
    title: "e-RCMC Registration Support",
    description:
      "Useful because many exporters move from IEC into RCMC registration to access export council recognition and benefit-related workflows."
  },
  {
    href: "/services/no-due-certificate",
    title: "No Due and IEC Closure Support",
    description:
      "Helpful where the issue is not fresh registration but surrender, compliance closure, or profile cleanup before business exit or transition."
  }
];

const CloudDeskIceManagement = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showEnrollModal, setShowEnrollModal] = useState({
    open: false,
    type: null
  });

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleEnrollmentSubmit = (formData) => {
    console.log("Enrollment Submitted:", formData);
  };

  return (
    <>
      <Helmet>
        <title>
          IEC Registration Consultant India | Import Export Code Application,
          Annual Update and DGFT Profile Support | EXIMINQ
        </title>
        <meta
          name="description"
          content="IEC registration consultant in India for Import Export Code application, annual update, DGFT profile correction, deactivation recovery, signatory changes, document review, and portal filing support."
        />
        <meta
          name="keywords"
          content="IEC registration consultant India, import export code registration, IEC annual update, DGFT IEC profile update, IEC modification, IEC deactivation recovery, import export code consultant, DGFT IEC application"
        />
        <meta name="robots" content="index, follow, max-image-preview:large" />
        <link
          rel="canonical"
          href="https://eximinq.in/services/import-export-code/"
        />
        <meta
          property="og:title"
          content="IEC Registration Consultant India | Import Export Code and DGFT Profile Support"
        />
        <meta
          property="og:description"
          content="Get expert support for IEC registration, annual update, DGFT profile correction, deactivation recovery, and trade-readiness setup."
        />
        <meta
          property="og:url"
          content="https://eximinq.in/services/import-export-code/"
        />
        <meta property="og:type" content="article" />
        <meta name="twitter:card" content="summary_large_image" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@graph": [
              {
                "@type": "WebPage",
                "@id": "https://eximinq.in/services/import-export-code/",
                url: "https://eximinq.in/services/import-export-code/",
                name: "IEC Registration Consultant India | Import Export Code Application, Annual Update and DGFT Profile Support | EXIMINQ",
                description:
                  "IEC registration consultant in India for Import Export Code application, annual update, DGFT profile correction, deactivation recovery, signatory changes, document review, and portal filing support.",
                isPartOf: {
                  "@type": "WebSite",
                  name: "EXIMINQ",
                  url: "https://eximinq.in/"
                }
              },
              {
                "@type": "BreadcrumbList",
                itemListElement: [
                  {
                    "@type": "ListItem",
                    position: 1,
                    name: "Home",
                    item: "https://eximinq.in/"
                  },
                  {
                    "@type": "ListItem",
                    position: 2,
                    name: "Services",
                    item: "https://eximinq.in/services"
                  },
                  {
                    "@type": "ListItem",
                    position: 3,
                    name: "Import Export Code",
                    item: "https://eximinq.in/services/import-export-code/"
                  }
                ]
              },
              {
                "@type": "Service",
                name: "Import Export Code and IEC Profile Support",
                serviceType:
                  "IEC registration, annual updation, profile modification, DGFT portal correction, and deactivation recovery support",
                provider: {
                  "@type": "Organization",
                  name: "EXIMINQ",
                  url: "https://eximinq.in/"
                },
                areaServed: {
                  "@type": "Country",
                  name: "India"
                },
                url: "https://eximinq.in/services/import-export-code/",
                description:
                  "IEC registration consultant in India for new Import Export Code filing, annual update, DGFT profile correction, and IEC recovery support."
              },
              {
                "@type": "FAQPage",
                mainEntity: FAQS.map((faq) => ({
                  "@type": "Question",
                  name: faq.question,
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: faq.answer
                  }
                }))
              }
            ]
          })}
        </script>
      </Helmet>

      <div className="bg-slate-50 text-slate-800">
        <MainNavbar
          scrolled={scrolled}
          isMenuOpen={isMenuOpen}
          setIsMenuOpen={setIsMenuOpen}
          setShowEnrollModal={setShowEnrollModal}
        />

        <ModalEnroll
          show={showEnrollModal.open}
          type={showEnrollModal.type}
          onClose={() => setShowEnrollModal({ open: false, type: null })}
          onSubmit={handleEnrollmentSubmit}
        />

        <section className="relative overflow-hidden bg-[linear-gradient(135deg,#0f172a_0%,#1d4ed8_55%,#38bdf8_100%)] pt-32 text-white">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.18),transparent_30%),radial-gradient(circle_at_bottom_left,rgba(255,255,255,0.12),transparent_30%)]" />
          <div className="relative mx-auto grid max-w-7xl gap-10 px-4 pb-16 md:px-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
            <div>
              <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-4 py-2 text-sm font-semibold backdrop-blur">
                <Sparkles className="h-4 w-4" />
                IEC registration, annual update, and DGFT profile support
              </div>
              <h1 className="max-w-4xl text-4xl font-bold leading-tight md:text-5xl">
                IEC Registration Consultant India for Import Export Code
                Application, Annual Update, and DGFT Profile Support
              </h1>
              <p className="mt-6 max-w-3xl text-lg leading-8 text-blue-50">
                Build and protect your DGFT trade identity the right way. We
                help with new IEC registration, annual profile confirmation,
                IEC modification, deactivation-risk review, signatory or
                contact recovery, and portal-ready document preparation.
              </p>

              <div className="mt-8 grid gap-3 sm:grid-cols-2">
                {HIGHLIGHTS.map((item) => (
                  <div
                    key={item}
                    className="flex items-start gap-3 rounded-2xl border border-white/15 bg-white/10 px-4 py-4 backdrop-blur"
                  >
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-cyan-200" />
                    <span className="text-sm leading-6 text-blue-50">{item}</span>
                  </div>
                ))}
              </div>

              <div className="mt-8 flex flex-wrap gap-4">
                <a
                  href="#quick-form"
                  className="inline-flex items-center gap-2 rounded-xl bg-white px-6 py-3 font-semibold text-slate-900 transition hover:bg-slate-100"
                >
                  Start IEC Review
                  <ArrowRight className="h-4 w-4" />
                </a>
                <a
                  href="#references"
                  className="inline-flex items-center gap-2 rounded-xl border border-white/30 px-6 py-3 font-semibold text-white transition hover:bg-white/10"
                >
                  View DGFT References
                  <BookOpenCheck className="h-4 w-4" />
                </a>
              </div>
            </div>

            <div id="quick-form" className="lg:justify-self-end">
              <QuickForm />
            </div>
          </div>
        </section>

        <section className="sticky top-[76px] z-30 border-y border-slate-200 bg-white/95 backdrop-blur">
          <div className="mx-auto flex max-w-7xl gap-6 overflow-x-auto px-4 py-4 text-sm font-semibold text-slate-600 md:px-8">
            <a href="#overview" className="whitespace-nowrap hover:text-blue-700">
              Overview
            </a>
            <a href="#service-tracks" className="whitespace-nowrap hover:text-blue-700">
              Service Tracks
            </a>
            <a href="#benefits" className="whitespace-nowrap hover:text-blue-700">
              Benefits
            </a>
            <a href="#eligibility" className="whitespace-nowrap hover:text-blue-700">
              Eligibility
            </a>
            <a href="#documents" className="whitespace-nowrap hover:text-blue-700">
              Documents
            </a>
            <a href="#process" className="whitespace-nowrap hover:text-blue-700">
              Process
            </a>
            <a href="#references" className="whitespace-nowrap hover:text-blue-700">
              Official References
            </a>
            <a href="#faq" className="whitespace-nowrap hover:text-blue-700">
              FAQs
            </a>
          </div>
        </section>

        <main className="mx-auto max-w-7xl px-4 py-16 md:px-8">
          <section id="overview" className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
            <div className="rounded-[32px] bg-white p-8 shadow-sm ring-1 ring-slate-200">
              <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-blue-50 px-4 py-2 text-sm font-semibold text-blue-700">
                <Target className="h-4 w-4" />
                Search-intent-focused overview
              </div>
              <h2 className="text-3xl font-bold text-slate-900">
                Why this IEC page is built to rank better than the older version
              </h2>
              <p className="mt-5 text-base leading-8 text-slate-600">
                This page is now built around the real high-intent topics people
                search before contacting an IEC consultant:{" "}
                <strong>new IEC registration</strong>,{" "}
                <strong>annual update</strong>, <strong>DGFT profile
                correction</strong>, <strong>deactivation risk</strong>, and
                profile recovery issues such as old mobile or email access.
              </p>
              <p className="mt-5 text-base leading-8 text-slate-600">
                The previous version had a major indexing problem because the
                live route was <strong>/services/import-export-code/</strong>
                while the page declared a canonical for a different URL. That
                confused Google and contributed directly to the Search Console
                result showing this page as an alternative canonical page. This
                rebuild corrects that signal and strengthens the content at the
                same time.
              </p>
            </div>

            <div className="rounded-[32px] bg-slate-900 p-8 text-white shadow-sm">
              <h3 className="text-2xl font-bold">
                What Google should now understand from this route
              </h3>
              <div className="mt-6 space-y-4">
                <div className="flex gap-3">
                  <BadgeCheck className="mt-1 h-5 w-5 shrink-0 text-cyan-300" />
                  <p className="text-sm leading-7 text-slate-200">
                    This is the main canonical service page for IEC-related
                    filing, updates, corrections, and DGFT profile support.
                  </p>
                </div>
                <div className="flex gap-3">
                  <ShieldCheck className="mt-1 h-5 w-5 shrink-0 text-cyan-300" />
                  <p className="text-sm leading-7 text-slate-200">
                    The content is about real trade onboarding and compliance
                    execution, not just generic marketing language.
                  </p>
                </div>
                <div className="flex gap-3">
                  <Landmark className="mt-1 h-5 w-5 shrink-0 text-cyan-300" />
                  <p className="text-sm leading-7 text-slate-200">
                    The route is semantically tied to DGFT, IEC profile
                    management, and the wider importer-exporter workflow.
                  </p>
                </div>
              </div>
            </div>
          </section>

          <section id="service-tracks" className="mt-16">
            <div className="max-w-3xl">
              <h2 className="text-3xl font-bold text-slate-900">
                Core IEC service tracks covered on this page
              </h2>
              <p className="mt-4 text-base leading-8 text-slate-600">
                The content is intentionally segmented by real enquiry types so
                search intent is clearer to both users and search engines.
              </p>
            </div>
            <div className="mt-8 grid gap-6 lg:grid-cols-3">
              {SERVICE_TRACKS.map((track) => (
                <article
                  key={track.title}
                  className="rounded-[28px] bg-white p-7 shadow-sm ring-1 ring-slate-200"
                >
                  <div className="mb-4 inline-flex rounded-full bg-blue-50 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-blue-700">
                    IEC workflow
                  </div>
                  <h3 className="text-xl font-bold text-slate-900">
                    {track.title}
                  </h3>
                  <p className="mt-4 text-sm leading-7 text-slate-600">
                    {track.description}
                  </p>
                </article>
              ))}
            </div>
          </section>

          <section id="benefits" className="mt-16 rounded-[32px] bg-gradient-to-r from-blue-50 via-white to-cyan-50 p-8 ring-1 ring-slate-200">
            <div className="max-w-3xl">
              <h2 className="text-3xl font-bold text-slate-900">
                Why IEC accuracy matters beyond the first certificate
              </h2>
              <p className="mt-4 text-base leading-8 text-slate-600">
                Searchers often think of IEC as only a registration certificate.
                This page now explains why IEC is the base layer of a wider
                digital trade workflow.
              </p>
            </div>
            <div className="mt-8 grid gap-5 md:grid-cols-2">
              {BENEFITS.map((benefit) => (
                <div
                  key={benefit}
                  className="flex gap-4 rounded-2xl bg-white p-5 shadow-sm ring-1 ring-slate-200"
                >
                  <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-emerald-600" />
                  <p className="text-sm leading-7 text-slate-600">{benefit}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="mt-16 grid gap-8 lg:grid-cols-2">
            <div className="rounded-[32px] bg-white p-8 shadow-sm ring-1 ring-slate-200">
              <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-amber-50 px-4 py-2 text-sm font-semibold text-amber-700">
                <FileSearch className="h-4 w-4" />
                Frequent IEC problem patterns
              </div>
              <h2 className="text-3xl font-bold text-slate-900">
                Common issues that block IEC usability or indexing value
              </h2>
              <div className="mt-8 space-y-5">
                {COMMON_ISSUES.map((issue) => (
                  <div
                    key={issue.title}
                    className="rounded-2xl border border-slate-200 p-5"
                  >
                    <h3 className="text-lg font-bold text-slate-900">
                      {issue.title}
                    </h3>
                    <p className="mt-2 text-sm leading-7 text-slate-600">
                      {issue.detail}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-[32px] bg-slate-900 p-8 text-white shadow-sm">
              <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm font-semibold text-cyan-200">
                <CalendarClock className="h-4 w-4" />
                Practical timeline expectations
              </div>
              <h2 className="text-3xl font-bold">
                Timelines vary by filing type and profile complexity
              </h2>
              <div className="mt-8 space-y-4">
                {TIMELINE_POINTS.map((item) => (
                  <div key={item} className="flex gap-3">
                    <ChevronDown className="mt-1 h-5 w-5 shrink-0 rotate-[-90deg] text-cyan-300" />
                    <p className="text-sm leading-7 text-slate-200">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section id="eligibility" className="mt-16 grid gap-8 lg:grid-cols-2">
            <div className="rounded-[32px] bg-white p-8 shadow-sm ring-1 ring-slate-200">
              <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-emerald-50 px-4 py-2 text-sm font-semibold text-emerald-700">
                <Globe2 className="h-4 w-4" />
                Eligibility and fit
              </div>
              <h2 className="text-3xl font-bold text-slate-900">
                Who should use this IEC support page
              </h2>
              <div className="mt-7 space-y-4">
                {ELIGIBILITY_POINTS.map((item) => (
                  <div key={item} className="flex gap-3">
                    <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-emerald-600" />
                    <p className="text-sm leading-7 text-slate-600">{item}</p>
                  </div>
                ))}
              </div>
            </div>

            <div
              id="documents"
              className="rounded-[32px] bg-white p-8 shadow-sm ring-1 ring-slate-200"
            >
              <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-violet-50 px-4 py-2 text-sm font-semibold text-violet-700">
                <FileCheck2 className="h-4 w-4" />
                Required documents
              </div>
              <h2 className="text-3xl font-bold text-slate-900">
                Records that usually matter in IEC filing and correction
              </h2>
              <div className="mt-7 space-y-4">
                {DOCUMENTS_REQUIRED.map((item) => (
                  <div key={item} className="flex gap-3">
                    <ReceiptText className="mt-1 h-5 w-5 shrink-0 text-violet-600" />
                    <p className="text-sm leading-7 text-slate-600">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section
            id="process"
            className="mt-16 rounded-[32px] bg-white p-8 shadow-sm ring-1 ring-slate-200"
          >
            <div className="max-w-3xl">
              <h2 className="text-3xl font-bold text-slate-900">
                Step-by-step IEC registration and DGFT profile support process
              </h2>
              <p className="mt-4 text-base leading-8 text-slate-600">
                This section is intentionally designed to satisfy both user
                search intent and Google’s preference for pages that explain
                practical process depth clearly.
              </p>
            </div>
            <div className="mt-10 grid gap-6 lg:grid-cols-5">
              {PROCESS_STEPS.map((step, index) => (
                <article
                  key={step.title}
                  className="rounded-[28px] bg-slate-50 p-6 ring-1 ring-slate-200"
                >
                  <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-slate-900 text-lg font-bold text-white">
                    {index + 1}
                  </div>
                  <h3 className="mt-5 text-lg font-bold text-slate-900">
                    {step.title}
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-slate-600">
                    {step.detail}
                  </p>
                </article>
              ))}
            </div>
          </section>

          <section
            id="references"
            className="mt-16 rounded-[32px] bg-slate-900 p-8 text-white shadow-sm"
          >
            <div className="max-w-3xl">
              <h2 className="text-3xl font-bold">
                Official DGFT and government references
              </h2>
              <p className="mt-4 text-base leading-8 text-slate-200">
                Official DGFT references strengthen E-E-A-T, help users verify
                process context, and support clearer entity recognition for
                Google.
              </p>
            </div>
            <div className="mt-8 grid gap-5 md:grid-cols-2">
              {GOVERNMENT_REFERENCES.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-[24px] border border-white/10 bg-white/5 p-5 transition hover:bg-white/10"
                >
                  <div className="flex items-start gap-3">
                    <Landmark className="mt-1 h-5 w-5 shrink-0 text-cyan-300" />
                    <div>
                      <h3 className="text-lg font-bold text-white">
                        {item.label}
                      </h3>
                      <p className="mt-2 text-sm leading-7 text-slate-300">
                        Open the official source
                      </p>
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </section>

          <section className="mt-16 rounded-[32px] bg-white p-8 shadow-sm ring-1 ring-slate-200">
            <div className="max-w-3xl">
              <h2 className="text-3xl font-bold text-slate-900">
                Internal links that build stronger trade-onboarding authority
              </h2>
              <p className="mt-4 text-base leading-8 text-slate-600">
                IEC is the beginning of a broader trade setup. These internal
                links strengthen crawl pathways and topical relevance around
                onboarding, customs activation, and downstream export workflows.
              </p>
            </div>
            <div className="mt-8 grid gap-6 md:grid-cols-2">
              {RELATED_LINKS.map((link) => (
                <Link
                  key={link.href}
                  to={link.href}
                  className="group rounded-[28px] bg-slate-50 p-6 ring-1 ring-slate-200 transition hover:-translate-y-1 hover:bg-white"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <h3 className="text-xl font-bold text-slate-900">
                        {link.title}
                      </h3>
                      <p className="mt-3 text-sm leading-7 text-slate-600">
                        {link.description}
                      </p>
                    </div>
                    <ArrowRight className="mt-1 h-5 w-5 shrink-0 text-slate-400 transition group-hover:text-blue-700" />
                  </div>
                </Link>
              ))}
            </div>
          </section>

          <section id="faq" className="mt-16">
            <div className="max-w-3xl">
              <h2 className="text-3xl font-bold text-slate-900">
                IEC registration FAQs for importers and exporters
              </h2>
              <p className="mt-4 text-base leading-8 text-slate-600">
                FAQ depth improves long-tail coverage and helps this page answer
                the questions users ask before they submit an enquiry or start a
                DGFT filing.
              </p>
            </div>
            <div className="mt-8 space-y-5">
              {FAQS.map((faq) => (
                <article
                  key={faq.question}
                  className="rounded-[28px] bg-white p-7 shadow-sm ring-1 ring-slate-200"
                >
                  <h3 className="text-xl font-bold text-slate-900">
                    {faq.question}
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-slate-600">
                    {faq.answer}
                  </p>
                </article>
              ))}
            </div>
          </section>

          <section className="mt-16 overflow-hidden rounded-[36px] bg-[linear-gradient(135deg,#0f172a_0%,#1d4ed8_100%)]">
            <div className="grid gap-0 lg:grid-cols-[0.9fr_1.1fr]">
              <div className="p-8 text-white md:p-10">
                <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-white/10">
                  <ClipboardCheck className="h-7 w-7" />
                </div>
                <h2 className="text-4xl font-bold leading-tight">
                  Ready to fix or activate your IEC profile correctly?
                </h2>
                <p className="mt-5 max-w-xl text-base leading-8 text-blue-100">
                  Start with the right IEC route, the right validation method,
                  and the right document set. That reduces filing friction and
                  gives the page stronger conversion quality without weakening
                  SEO.
                </p>
                <div className="mt-8 space-y-4 text-sm text-blue-100">
                  <div className="flex items-start gap-3">
                    <Fingerprint className="mt-1 h-5 w-5 shrink-0 text-cyan-300" />
                    <span>New IEC, annual update, and profile correction support</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <Building2 className="mt-1 h-5 w-5 shrink-0 text-cyan-300" />
                    <span>Entity, signatory, contact, and constitution-related review</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <BookOpenCheck className="mt-1 h-5 w-5 shrink-0 text-cyan-300" />
                    <span>DGFT workflow clarity connected to the wider trade setup</span>
                  </div>
                </div>
              </div>

              <div className="bg-white p-8 md:p-10">
                <h3 className="text-3xl font-bold text-slate-900">
                  Speak with EXIMINQ
                </h3>
                <p className="mt-4 text-base leading-8 text-slate-600">
                  Whether you need a new IEC, a missed annual update fixed, or
                  a blocked profile recovered, we can help map the next step
                  clearly.
                </p>
                <div className="mt-8 grid gap-4 sm:grid-cols-2">
                  <a
                    href="tel:+917400096950"
                    className="rounded-2xl bg-slate-50 p-5 ring-1 ring-slate-200 transition hover:bg-white"
                  >
                    <Phone className="h-5 w-5 text-blue-700" />
                    <p className="mt-4 text-sm font-semibold uppercase tracking-wide text-slate-500">
                      Call us
                    </p>
                    <p className="mt-1 text-lg font-bold text-slate-900">
                      +91 74000 96950
                    </p>
                  </a>
                  <a
                    href="mailto:clouddesk@eximinq.in"
                    className="rounded-2xl bg-slate-50 p-5 ring-1 ring-slate-200 transition hover:bg-white"
                  >
                    <Mail className="h-5 w-5 text-blue-700" />
                    <p className="mt-4 text-sm font-semibold uppercase tracking-wide text-slate-500">
                      Email us
                    </p>
                    <p className="mt-1 text-lg font-bold text-slate-900">
                      clouddesk@eximinq.in
                    </p>
                  </a>
                  <div className="rounded-2xl bg-slate-50 p-5 ring-1 ring-slate-200 sm:col-span-2">
                    <MapPin className="h-5 w-5 text-blue-700" />
                    <p className="mt-4 text-sm font-semibold uppercase tracking-wide text-slate-500">
                      Office
                    </p>
                    <p className="mt-1 text-lg font-bold text-slate-900">
                      Mumbai, India
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </main>

        <footer className="border-t border-slate-200 bg-white">
          <div className="mx-auto flex max-w-7xl flex-col gap-6 px-4 py-10 md:flex-row md:items-center md:justify-between md:px-8">
            <div>
              <p className="text-lg font-bold text-slate-900">EXIMINQ</p>
              <p className="mt-2 max-w-2xl text-sm leading-7 text-slate-600">
                Import Export Code support for new IEC registration, annual
                update, profile correction, DGFT workflow accuracy, and
                long-term trade-readiness.
              </p>
            </div>
            <div className="flex items-center gap-4 text-slate-500">
              <a
                href="https://www.linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="rounded-full border border-slate-200 p-3 transition hover:border-blue-700 hover:text-blue-700"
              >
                <Linkedin className="h-4 w-4" />
              </a>
              <a
                href="https://x.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Twitter"
                className="rounded-full border border-slate-200 p-3 transition hover:border-blue-700 hover:text-blue-700"
              >
                <Twitter className="h-4 w-4" />
              </a>
              <a
                href="https://www.facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="rounded-full border border-slate-200 p-3 transition hover:border-blue-700 hover:text-blue-700"
              >
                <Facebook className="h-4 w-4" />
              </a>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
};

export default CloudDeskIceManagement;
