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
  ClipboardCheck,
  FileCheck2,
  FileSearch,
  Landmark,
  Mail,
  MapPin,
  Phone,
  ShieldCheck,
  Sparkles,
  Target,
  WalletCards
} from "lucide-react";
import { MainNavbar } from "../components/ADCode/MainNavbar";
import QuickForm from "../components/ADCode/QuickForm";

const HIGHLIGHTS = [
  "AD Code registration consultant India",
  "ICEGATE bank account mapping and customs port registration support",
  "e-Sanchit document review, bank-letter validation, and multi-port setup",
  "AD Code not found, mismatch, rejection, and modification issue support"
];

const BENEFITS = [
  "Helps exporters register the correct bank AD Code against the correct customs location so shipping-bill and export-realisation workflows do not get blocked later.",
  "Reduces rejection risk caused by weak bank letters, incomplete authorisation records, wrong port mapping, or inconsistent exporter details across ICEGATE and customs submissions.",
  "Supports first-time port registration, port addition, modification, and recovery of transactions where the AD Code status is unclear or already failing operationally.",
  "Improves shipment readiness by aligning bank account details, exporter credentials, port code selection, document uploads, and customs-facing workflow before cargo movement."
];

const USE_CASES = [
  {
    title: "First-time AD Code registration",
    description:
      "For exporters who already have IEC and bank account readiness but need the AD Code to be registered correctly with customs or ICEGATE before export documentation can move smoothly."
  },
  {
    title: "Port-wise AD Code addition",
    description:
      "Useful where the exporter is expanding to a new seaport, airport, ICD, or CFS and needs the same authorised dealer bank account mapped again for that new location."
  },
  {
    title: "AD Code correction or modification",
    description:
      "Relevant when the bank account changes, the AD Code details are mismatched, or the exporter has to correct earlier records to avoid operational stoppages."
  },
  {
    title: "AD Code not found or rejected cases",
    description:
      "For cases where documents were submitted but customs systems, ICEGATE users, or CHA teams still cannot use the AD Code at the intended export port."
  }
];

const ELIGIBILITY_POINTS = [
  "Exporters with a valid IEC who need to map an authorised dealer bank account to a specific customs port for export transactions.",
  "Businesses adding one or more ports beyond their existing registration, including seaports, airports, ICDs, CFS locations, and other customs formations supported operationally.",
  "Companies changing their export bank account, modifying an existing AD Code mapping, or regularising mismatched bank details before further shipping-bill activity.",
  "Exporters whose CHA, freight team, or internal trade desk is facing an AD Code not found, inactive mapping, or rejection issue that is delaying customs processing."
];

const DOCUMENTS_REQUIRED = [
  "IEC details, GST or entity details where relevant operationally, authorised signatory credentials, and exporter master information used in customs-facing filings.",
  "Bank-issued AD Code letter in the required format, account details, IFSC information, branch confirmation, and supporting bank authorisation trail.",
  "Port selection details, customs location codes, exporter address records, authorisation documents, and any supporting undertaking or request letter needed for the target workflow.",
  "Previous rejection screenshots, deficient submissions, ICEGATE status proof, e-Sanchit IRN records, or customs communication if the case is a correction or revival matter."
];

const PROCESS_STEPS = [
  {
    title: "Document and port-readiness review",
    detail:
      "We first confirm exporter identity, bank documentation quality, target port selection, and whether the case is a new registration, a port addition, or a correction workflow."
  },
  {
    title: "Bank-letter and account validation",
    detail:
      "The AD Code letter, account details, authorised signatory support, and branch-level references are reviewed so the submission is commercially and procedurally usable."
  },
  {
    title: "Customs or ICEGATE submission support",
    detail:
      "Depending on the actual workflow, we help structure the registration path, e-Sanchit document set, and port-specific filing sequence for the target customs location."
  },
  {
    title: "Query handling and status follow-up",
    detail:
      "If the submission is held up, rejected, or showing inconsistent status, we help identify whether the gap is documentary, bank-side, port-side, or user-flow related."
  },
  {
    title: "Future-ready exporter setup",
    detail:
      "Where helpful, the case is aligned with ICEGATE registration, shipping-bill readiness, and export compliance support so future port additions become easier to manage."
  }
];

const TIMELINE_POINTS = [
  "Initial document and port-readiness review is usually possible within 1 to 2 working days once the exporter and bank record set is available.",
  "Straightforward AD Code registration or port-addition cases often move faster when the bank letter format and supporting details are already correct.",
  "Correction, rejection, or inactive-mapping cases can take longer because the root cause may sit with bank formatting, customs history, port-specific process expectations, or prior filing defects.",
  "Actual activation time depends on customs workload, port practice, document quality, and whether the case is new, modified, or being revived after rejection."
];

const COMMON_ISSUES = [
  {
    title: "AD Code not found at the export port",
    detail:
      "The exporter may have a bank account and an AD Code, but it is either not registered at the required port or not active in the way the shipment workflow expects."
  },
  {
    title: "Weak or inconsistent bank letter",
    detail:
      "A poorly formatted AD Code letter, missing branch details, or mismatch between exporter information and bank records can cause avoidable delay or rejection."
  },
  {
    title: "Port expansion was not planned properly",
    detail:
      "Many exporters assume one successful AD Code registration automatically covers every customs location, which creates friction when operations expand to new ports."
  },
  {
    title: "Status is unclear even after submission",
    detail:
      "The issue may be with e-Sanchit linkage, customs acceptance, user-side mapping visibility, or incomplete supporting records rather than the concept of AD Code itself."
  }
];

const FAQS = [
  {
    question: "What is AD Code registration in exports?",
    answer:
      "AD Code registration is the process of mapping the exporter’s authorised dealer bank account with the relevant customs port so export transactions and related banking workflows can move correctly."
  },
  {
    question: "Is AD Code registration port specific?",
    answer:
      "Yes. In practice, exporters often need the AD Code to be registered or mapped for each relevant customs location where export activity is planned."
  },
  {
    question: "Why does AD Code show as not found?",
    answer:
      "Common reasons include no port-wise mapping, document quality problems, bank-letter mismatch, inactive or incomplete submission history, or incorrect workflow assumptions."
  },
  {
    question: "Can the same exporter use AD Code at multiple ports?",
    answer:
      "Yes, but the required mapping and acceptance must usually be handled location-wise. Port expansion often needs separate operational follow-through."
  },
  {
    question: "What documents are usually needed for AD Code registration?",
    answer:
      "Typical requirements include IEC details, bank-issued AD Code letter, account and branch details, authorised signatory proof, port selection details, and any supporting request documentation used in the filing flow."
  },
  {
    question: "How does this page improve ranking potential for AD Code keywords?",
    answer:
      "Because it covers real exporter intent around AD Code registration: bank account mapping, port-wise setup, rejection causes, document requirements, official references, timelines, and related customs workflow support."
  }
];

const GOVERNMENT_REFERENCES = [
  {
    label: "ICEGATE Portal",
    href: "https://www.icegate.gov.in/"
  },
  {
    label: "ICEGATE Guidelines and Advisories",
    href: "https://www.icegate.gov.in/guidelines"
  },
  {
    label: "ICEGATE e-Sanchit Help and User Resources",
    href: "https://www.icegate.gov.in/e-sanchit"
  },
  {
    label: "CBIC Customs Portal",
    href: "https://www.cbic.gov.in/"
  }
];

const RELATED_LINKS = [
  {
    href: "/services/import-export-code/",
    title: "IEC Registration and DGFT Profile Support",
    description:
      "Useful where the exporter first needs IEC readiness or DGFT profile cleanup before customs-facing registration workflows are stabilised."
  },
  {
    href: "/services/icegate-registration/",
    title: "ICEGATE Registration Support",
    description:
      "Important where user access, customs login readiness, and document workflow setup need to be aligned with AD Code registration."
  },
  {
    href: "/services/e-sanchit-filing",
    title: "e-Sanchit Filing Support",
    description:
      "Relevant where the AD Code process depends on correctly structured digital document uploads and supporting IRN-ready records."
  },
  {
    href: "/services/shipping-bill-filing",
    title: "Shipping Bill Filing Support",
    description:
      "Helps exporters connect AD Code readiness with actual export filing execution, declaration quality, and port-level customs processing."
  }
];

const SECTION_LINKS = [
  { href: "#overview", label: "Overview" },
  { href: "#eligibility", label: "Eligibility" },
  { href: "#documents", label: "Documents" },
  { href: "#process", label: "Process" },
  { href: "#faqs", label: "FAQs" }
];

const CloudDeskADCode = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <Helmet>
        <title>
          AD Code Registration Consultant India | ICEGATE Bank Account Mapping,
          Customs Port Registration and e-Sanchit Support | EXIMINQ
        </title>
        <meta
          name="description"
          content="AD Code registration consultant in India for ICEGATE bank account mapping, customs port registration, e-Sanchit document support, multi-port setup, AD Code modification, and AD Code not found issue resolution."
        />
        <meta
          name="keywords"
          content="AD Code registration consultant India, AD Code registration, ICEGATE AD Code registration, customs port AD Code registration, bank AD Code mapping, AD Code not found, e-Sanchit AD Code support, port wise AD Code registration"
        />
        <meta name="robots" content="index, follow, max-image-preview:large" />
        <link
          rel="canonical"
          href="https://eximinq.in/services/ad-code-registration/"
        />
        <meta
          property="og:title"
          content="AD Code Registration Consultant India | ICEGATE, Customs Port and e-Sanchit Support"
        />
        <meta
          property="og:description"
          content="Get expert support for AD Code registration, ICEGATE bank mapping, customs port registration, multi-port additions, and AD Code rejection resolution."
        />
        <meta
          property="og:url"
          content="https://eximinq.in/services/ad-code-registration/"
        />
        <meta property="og:type" content="article" />
        <meta name="twitter:card" content="summary_large_image" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@graph": [
              {
                "@type": "WebPage",
                "@id": "https://eximinq.in/services/ad-code-registration/#webpage",
                url: "https://eximinq.in/services/ad-code-registration/",
                name: "AD Code Registration Consultant India | EXIMINQ",
                description:
                  "AD Code registration consultant in India for ICEGATE bank account mapping, customs port registration, e-Sanchit document support, multi-port setup, modification support, and rejection handling.",
                inLanguage: "en-IN"
              },
              {
                "@type": "BreadcrumbList",
                "@id": "https://eximinq.in/services/ad-code-registration/#breadcrumb",
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
                    name: "AD Code Registration",
                    item: "https://eximinq.in/services/ad-code-registration/"
                  }
                ]
              },
              {
                "@type": "Service",
                "@id": "https://eximinq.in/services/ad-code-registration/#service",
                name: "AD Code Registration Support",
                serviceType: "AD Code registration consultant",
                provider: {
                  "@type": "Organization",
                  name: "EXIMINQ",
                  url: "https://eximinq.in/"
                },
                areaServed: {
                  "@type": "Country",
                  name: "India"
                },
                description:
                  "Support for AD Code registration, ICEGATE bank account mapping, customs port registration, e-Sanchit document readiness, port-wise additions, and AD Code correction workflows.",
                offers: {
                  "@type": "Offer",
                  availability: "https://schema.org/InStock",
                  priceCurrency: "INR"
                }
              },
              {
                "@type": "FAQPage",
                "@id": "https://eximinq.in/services/ad-code-registration/#faq",
                mainEntity: FAQS.map((item) => ({
                  "@type": "Question",
                  name: item.question,
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: item.answer
                  }
                }))
              }
            ]
          })}
        </script>
      </Helmet>

      <div className="min-h-screen bg-slate-50 text-slate-900">
        <MainNavbar
          scrolled={scrolled}
          isMenuOpen={isMenuOpen}
          setIsMenuOpen={setIsMenuOpen}
        />

        <section className="relative overflow-hidden bg-gradient-to-br from-[#0f1d4b] via-[#1e3a8a] to-[#0f766e] text-white">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(255,255,255,0.16),_transparent_30%),radial-gradient(circle_at_bottom_left,_rgba(255,255,255,0.12),_transparent_28%)]" />
          <div className="relative mx-auto grid max-w-7xl gap-12 px-4 pb-16 pt-28 md:px-6 lg:grid-cols-[1.1fr_0.9fr] lg:px-8">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-semibold text-cyan-100">
                <Sparkles className="h-4 w-4" />
                Port-wise AD Code registration and correction support
              </div>
              <h1 className="mt-6 max-w-4xl text-4xl font-extrabold leading-tight md:text-5xl">
                AD Code Registration Consultant in India for ICEGATE, Customs
                Port Mapping, and e-Sanchit Readiness
              </h1>
              <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-100/90">
                Register your bank AD Code correctly at the right customs port,
                fix AD Code not found issues, and prepare your exporter account
                for smoother shipping-bill, documentation, and export-banking
                workflows.
              </p>

              <div className="mt-8 grid gap-3 sm:grid-cols-2">
                {HIGHLIGHTS.map((item) => (
                  <div
                    key={item}
                    className="flex items-start gap-3 rounded-2xl border border-white/15 bg-white/10 px-4 py-4 backdrop-blur"
                  >
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-cyan-200" />
                    <p className="text-sm leading-6 text-slate-100">{item}</p>
                  </div>
                ))}
              </div>

              <div className="mt-8 flex flex-wrap gap-4">
                <a
                  href="#quick-form"
                  className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-slate-900 transition hover:bg-cyan-50"
                >
                  Start AD Code Review
                  <ArrowRight className="h-4 w-4" />
                </a>
                <a
                  href="#faqs"
                  className="inline-flex items-center gap-2 rounded-full border border-white/30 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
                >
                  Read FAQs
                </a>
              </div>
            </div>

            <div
              id="quick-form"
              className="rounded-[32px] border border-white/15 bg-white/95 p-4 shadow-2xl shadow-slate-950/20 backdrop-blur"
            >
              <QuickForm />
            </div>
          </div>
        </section>

        <section className="sticky top-[84px] z-20 border-b border-slate-200 bg-white/95 backdrop-blur">
          <div className="mx-auto flex max-w-7xl flex-wrap gap-3 px-4 py-4 md:px-6 lg:px-8">
            {SECTION_LINKS.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="rounded-full border border-slate-200 px-4 py-2 text-sm font-medium text-slate-700 transition hover:border-blue-500 hover:text-blue-700"
              >
                {item.label}
              </a>
            ))}
          </div>
        </section>

        <main className="mx-auto max-w-7xl px-4 py-14 md:px-6 lg:px-8">
          <section
            id="overview"
            className="grid gap-8 lg:grid-cols-[1.15fr_0.85fr]"
          >
            <div className="rounded-[28px] bg-white p-8 shadow-sm ring-1 ring-slate-200">
              <div className="flex items-center gap-3 text-sm font-semibold uppercase tracking-[0.24em] text-blue-700">
                <Target className="h-4 w-4" />
                Service Overview
              </div>
              <h2 className="mt-4 text-3xl font-bold text-slate-900">
                Why AD Code registration matters for exporters
              </h2>
              <div className="mt-5 space-y-4 text-base leading-8 text-slate-600">
                <p>
                  AD Code registration is not just a banking formality. It is a
                  customs-facing exporter readiness step that connects the
                  authorised dealer bank account with the specific port where the
                  export transaction is being handled.
                </p>
                <p>
                  If the mapping is missing, weak, incomplete, or not active at
                  the required location, exporters often face confusion around
                  shipping-bill execution, customs document movement, or
                  bank-linked export process continuity. That is why search
                  intent around AD Code registration is usually high intent and
                  operationally urgent.
                </p>
                <p>
                  This page is built for exporters who need reliable support for
                  first-time AD Code registration, port additions, corrections,
                  and rejected or unclear cases where the workflow has already
                  started to fail.
                </p>
              </div>
            </div>

            <div className="grid gap-6">
              <div className="rounded-[28px] bg-gradient-to-br from-emerald-50 to-cyan-50 p-7 shadow-sm ring-1 ring-emerald-100">
                <div className="flex items-center gap-3 text-emerald-700">
                  <BadgeCheck className="h-5 w-5" />
                  <span className="text-sm font-semibold uppercase tracking-[0.22em]">
                    Key Benefits
                  </span>
                </div>
                <ul className="mt-5 space-y-4">
                  {BENEFITS.map((item) => (
                    <li key={item} className="flex gap-3 text-sm leading-7 text-slate-700">
                      <CheckCircle2 className="mt-1 h-4 w-4 shrink-0 text-emerald-600" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="rounded-[28px] bg-slate-900 p-7 text-white shadow-sm">
                <div className="flex items-center gap-3 text-cyan-200">
                  <WalletCards className="h-5 w-5" />
                  <span className="text-sm font-semibold uppercase tracking-[0.22em]">
                    Related Customs Workflows
                  </span>
                </div>
                <p className="mt-4 text-sm leading-7 text-slate-200">
                  AD Code readiness often works best when aligned with IEC,
                  ICEGATE, e-Sanchit, and shipping-bill execution instead of
                  being treated as an isolated formality.
                </p>
              </div>
            </div>
          </section>

          <section className="mt-14">
            <div className="mb-6 flex items-center gap-3 text-sm font-semibold uppercase tracking-[0.24em] text-blue-700">
              <Building2 className="h-4 w-4" />
              Use Cases
            </div>
            <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
              {USE_CASES.map((item) => (
                <article
                  key={item.title}
                  className="rounded-[26px] bg-white p-6 shadow-sm ring-1 ring-slate-200"
                >
                  <h3 className="text-xl font-semibold text-slate-900">
                    {item.title}
                  </h3>
                  <p className="mt-4 text-sm leading-7 text-slate-600">
                    {item.description}
                  </p>
                </article>
              ))}
            </div>
          </section>

          <section className="mt-14 grid gap-8 lg:grid-cols-2">
            <div className="rounded-[28px] bg-white p-8 shadow-sm ring-1 ring-slate-200">
              <div className="flex items-center gap-3 text-sm font-semibold uppercase tracking-[0.24em] text-blue-700">
                <ShieldCheck className="h-4 w-4" />
                Common Issues
              </div>
              <div className="mt-6 space-y-5">
                {COMMON_ISSUES.map((item) => (
                  <div
                    key={item.title}
                    className="rounded-2xl border border-rose-100 bg-rose-50/70 p-5"
                  >
                    <h3 className="text-lg font-semibold text-slate-900">
                      {item.title}
                    </h3>
                    <p className="mt-2 text-sm leading-7 text-slate-600">
                      {item.detail}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div
              id="eligibility"
              className="rounded-[28px] bg-white p-8 shadow-sm ring-1 ring-slate-200"
            >
              <div className="flex items-center gap-3 text-sm font-semibold uppercase tracking-[0.24em] text-blue-700">
                <ClipboardCheck className="h-4 w-4" />
                Eligibility
              </div>
              <h2 className="mt-4 text-3xl font-bold text-slate-900">
                Who usually needs AD Code registration support
              </h2>
              <ul className="mt-6 space-y-4">
                {ELIGIBILITY_POINTS.map((item) => (
                  <li key={item} className="flex gap-3 text-sm leading-7 text-slate-600">
                    <CheckCircle2 className="mt-1 h-4 w-4 shrink-0 text-blue-600" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </section>

          <section
            id="documents"
            className="mt-14 rounded-[30px] bg-gradient-to-br from-slate-950 to-slate-800 p-8 text-white shadow-sm"
          >
            <div className="flex items-center gap-3 text-sm font-semibold uppercase tracking-[0.24em] text-cyan-200">
              <FileCheck2 className="h-4 w-4" />
              Required Documents
            </div>
            <h2 className="mt-4 text-3xl font-bold">
              Documents typically checked before filing
            </h2>
            <div className="mt-8 grid gap-5 md:grid-cols-2">
              {DOCUMENTS_REQUIRED.map((item) => (
                <div
                  key={item}
                  className="rounded-2xl border border-white/10 bg-white/5 p-5"
                >
                  <p className="text-sm leading-7 text-slate-100/90">{item}</p>
                </div>
              ))}
            </div>
          </section>

          <section
            id="process"
            className="mt-14 rounded-[28px] bg-white p-8 shadow-sm ring-1 ring-slate-200"
          >
            <div className="flex items-center gap-3 text-sm font-semibold uppercase tracking-[0.24em] text-blue-700">
              <BookOpenCheck className="h-4 w-4" />
              Step-by-Step Process
            </div>
            <h2 className="mt-4 text-3xl font-bold text-slate-900">
              Practical AD Code registration workflow
            </h2>
            <div className="mt-8 grid gap-6 lg:grid-cols-5">
              {PROCESS_STEPS.map((item, index) => (
                <article
                  key={item.title}
                  className="rounded-[24px] border border-slate-200 bg-slate-50 p-5"
                >
                  <div className="text-sm font-bold text-blue-700">
                    Step {index + 1}
                  </div>
                  <h3 className="mt-3 text-lg font-semibold text-slate-900">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-slate-600">
                    {item.detail}
                  </p>
                </article>
              ))}
            </div>
          </section>

          <section className="mt-14 grid gap-8 lg:grid-cols-2">
            <div className="rounded-[28px] bg-white p-8 shadow-sm ring-1 ring-slate-200">
              <div className="flex items-center gap-3 text-sm font-semibold uppercase tracking-[0.24em] text-blue-700">
                <CalendarClock className="h-4 w-4" />
                Timelines
              </div>
              <ul className="mt-6 space-y-4">
                {TIMELINE_POINTS.map((item) => (
                  <li key={item} className="flex gap-3 text-sm leading-7 text-slate-600">
                    <CheckCircle2 className="mt-1 h-4 w-4 shrink-0 text-emerald-600" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-[28px] bg-white p-8 shadow-sm ring-1 ring-slate-200">
              <div className="flex items-center gap-3 text-sm font-semibold uppercase tracking-[0.24em] text-blue-700">
                <Landmark className="h-4 w-4" />
                Official References
              </div>
              <p className="mt-4 text-sm leading-7 text-slate-600">
                The page is strengthened with references to the primary customs
                and ICEGATE ecosystem so users and search engines can connect
                the service to authoritative workflow sources.
              </p>
              <div className="mt-6 space-y-4">
                {GOVERNMENT_REFERENCES.map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center justify-between rounded-2xl border border-slate-200 px-5 py-4 text-sm font-medium text-slate-700 transition hover:border-blue-500 hover:text-blue-700"
                  >
                    <span>{item.label}</span>
                    <ArrowRight className="h-4 w-4" />
                  </a>
                ))}
              </div>
            </div>
          </section>

          <section className="mt-14 rounded-[28px] bg-white p-8 shadow-sm ring-1 ring-slate-200">
            <div className="flex items-center gap-3 text-sm font-semibold uppercase tracking-[0.24em] text-blue-700">
              <FileSearch className="h-4 w-4" />
              Related Services
            </div>
            <div className="mt-6 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
              {RELATED_LINKS.map((item) => (
                <Link
                  key={item.href}
                  to={item.href}
                  className="group rounded-[24px] border border-slate-200 bg-slate-50 p-5 transition hover:border-blue-500 hover:bg-blue-50"
                >
                  <h3 className="text-lg font-semibold text-slate-900 group-hover:text-blue-700">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-slate-600">
                    {item.description}
                  </p>
                </Link>
              ))}
            </div>
          </section>

          <section
            id="faqs"
            className="mt-14 rounded-[28px] bg-white p-8 shadow-sm ring-1 ring-slate-200"
          >
            <div className="flex items-center gap-3 text-sm font-semibold uppercase tracking-[0.24em] text-blue-700">
              <BadgeCheck className="h-4 w-4" />
              FAQs
            </div>
            <h2 className="mt-4 text-3xl font-bold text-slate-900">
              Common questions about AD Code registration
            </h2>
            <div className="mt-8 grid gap-5 md:grid-cols-2">
              {FAQS.map((item) => (
                <article
                  key={item.question}
                  className="rounded-[24px] border border-slate-200 bg-slate-50 p-6"
                >
                  <h3 className="text-lg font-semibold text-slate-900">
                    {item.question}
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-slate-600">
                    {item.answer}
                  </p>
                </article>
              ))}
            </div>
          </section>

          <section className="mt-14 rounded-[32px] bg-gradient-to-r from-blue-700 via-cyan-700 to-emerald-600 p-8 text-white shadow-xl">
            <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
              <div>
                <div className="text-sm font-semibold uppercase tracking-[0.24em] text-cyan-100">
                  Conversion CTA
                </div>
                <h2 className="mt-4 text-3xl font-bold">
                  Need help with AD Code registration, port addition, or a
                  customs-side rejection?
                </h2>
                <p className="mt-4 max-w-3xl text-base leading-8 text-cyan-50">
                  We review the exporter profile, bank-letter quality, target
                  port workflow, and document readiness so the AD Code process
                  is handled with better commercial clarity and fewer avoidable
                  delays.
                </p>
                <div className="mt-6 flex flex-wrap gap-4 text-sm font-medium text-white">
                  <a
                    href="tel:+917400096950"
                    className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-5 py-3 hover:bg-white/20"
                  >
                    <Phone className="h-4 w-4" />
                    +91 74000 96950
                  </a>
                  <a
                    href="mailto:clouddesk@eximinq.in"
                    className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-5 py-3 hover:bg-white/20"
                  >
                    <Mail className="h-4 w-4" />
                    clouddesk@eximinq.in
                  </a>
                  <span className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-5 py-3">
                    <MapPin className="h-4 w-4" />
                    Mumbai, India
                  </span>
                </div>
              </div>

              <div className="flex flex-col gap-4">
                <a
                  href="#quick-form"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-slate-900 transition hover:bg-cyan-50"
                >
                  Start With Quick Form
                  <ArrowRight className="h-4 w-4" />
                </a>
                <Link
                  to="/contact-us"
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-white/30 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
                >
                  Speak With Our Team
                </Link>
              </div>
            </div>
          </section>
        </main>
      </div>
    </>
  );
};

export default CloudDeskADCode;
