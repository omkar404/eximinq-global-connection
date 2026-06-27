import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  BadgeCheck,
  BookOpenCheck,
  BriefcaseBusiness,
  Building2,
  CheckCircle2,
  ChevronDown,
  ClipboardCheck,
  FileCheck2,
  FileSearch,
  Globe2,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  ShieldCheck,
  ShieldAlert,
  Sparkles,
  Target,
  Twitter,
  Facebook
} from "lucide-react";
import { MainNavbar } from "../components/CloudDeskSCOMET/MainNavbar";
import QuickForm from "../components/CloudDeskSCOMET/QuickForm";

const HIGHLIGHTS = [
  "SCOMET licence consultant India",
  "Dual-use goods classification and export authorisation support",
  "DGFT EMS filing, EUC review, and IMWG-facing documentation",
  "Compliance support for strategic trade controls and technology transfer risk"
];

const COVERAGE_AREAS = [
  {
    title: "SCOMET classification and category mapping",
    description:
      "We help classify goods, software, technology, components, systems, and sub-systems against the SCOMET list so exporters can determine whether a licence, declaration, or deeper review is required."
  },
  {
    title: "Export authorisation application support",
    description:
      "We assist with DGFT Export Management System filing, item descriptions, technical narratives, destination details, and supporting annexures required for SCOMET licence processing."
  },
  {
    title: "End-user and end-use documentation review",
    description:
      "We support review of End User Certificates, consignee declarations, product-use explanations, and transaction context to reduce preventable delays during scrutiny."
  },
  {
    title: "Internal compliance and shipment-readiness advisory",
    description:
      "We help businesses strengthen records, internal approvals, technical documentation, and export-control readiness where recurring SCOMET exposure exists."
  }
];

const BENEFITS = [
  "Reduces the risk of shipment holds, licensing mistakes, and misclassification for dual-use items, controlled technology, and strategic components.",
  "Improves transaction readiness by aligning product classification, destination review, end-use logic, and document structure before DGFT filing.",
  "Supports exporters, manufacturers, research-linked businesses, defence-adjacent suppliers, and advanced technology companies dealing with cross-border controlled items.",
  "Strengthens internal compliance posture where repeated exports, software transfers, technical support exports, or sensitive buyer jurisdictions are involved."
];

const ELIGIBILITY_POINTS = [
  "Exporters dealing in goods, software, technology, materials, equipment, chemicals, electronics, sensors, aerospace items, or other products that may fall under the SCOMET list.",
  "Businesses that are unsure whether a product is controlled, whether the destination or end-use creates risk, or whether an authorisation is required before export.",
  "Companies that need DGFT Export Management System support, item classification help, EUC review, licence filing support, or post-query response handling.",
  "Exporters building internal export-control discipline for recurring shipments, strategic customers, research collaborations, technical transfers, or dual-use product lines."
];

const DOCUMENTS_REQUIRED = [
  "IEC, entity records, authorised signatory details, buyer and consignee information, and transaction background.",
  "Technical write-up, datasheets, brochure, specifications, drawings, software notes, or item-description records sufficient for SCOMET classification review.",
  "End User Certificate, end-use declaration, purchase order or commercial transaction support, and destination-country details.",
  "Shipping pattern, previous export records, licence history where relevant, and any internal compliance or product-origin documents needed for a stronger filing set."
];

const PROCESS_STEPS = [
  {
    title: "Classification and risk screening",
    detail:
      "We begin by screening the item, software, or technology exposure against the SCOMET list, destination context, end-use risk, and transaction structure."
  },
  {
    title: "Document strategy and technical narrative",
    detail:
      "The technical write-up, item description, control-list logic, and supporting records are structured so the application tells a complete and defensible story."
  },
  {
    title: "DGFT EMS filing and annexure preparation",
    detail:
      "We support the online filing route, data entry, document sequencing, and annexure alignment required for smoother SCOMET authorisation processing."
  },
  {
    title: "EUC and transaction review",
    detail:
      "End-user documentation, destination details, and commercial context are reviewed carefully because these often influence scrutiny intensity and response quality."
  },
  {
    title: "Clarification handling and compliance continuity",
    detail:
      "Where required, we help respond to queries, strengthen internal records, and prepare the business for future SCOMET-linked export transactions."
  }
];

const TIMELINE_POINTS = [
  "Classification and initial risk review: usually 1 to 3 working days depending on technical complexity and document readiness.",
  "Document collation and application-preparation cycle: commonly 3 to 7 working days once the exporter provides technical and commercial records.",
  "Licence processing timeline: varies based on item sensitivity, destination, completeness of EUC and annexures, and inter-ministerial examination requirements.",
  "Complex strategic, software, or multi-country end-use cases may require additional review cycles and longer clarification timelines."
];

const FAQS = [
  {
    question: "What is a SCOMET licence in India?",
    answer:
      "A SCOMET licence is an export authorisation required for certain controlled goods, software, technology, materials, equipment, chemicals, and dual-use items regulated under India's strategic trade control framework."
  },
  {
    question: "Who needs SCOMET licensing support?",
    answer:
      "Exporters, manufacturers, research-linked companies, technology businesses, defence-adjacent suppliers, and any business dealing with potentially controlled items or technology transfers may need SCOMET review and authorisation support."
  },
  {
    question: "Is SCOMET relevant only for physical goods?",
    answer:
      "No. SCOMET exposure can extend beyond physical goods to software, technical data, technology transfer, and certain intangible transfer scenarios depending on the control-list context."
  },
  {
    question: "Why do SCOMET applications get delayed?",
    answer:
      "Delays often come from weak classification logic, incomplete technical write-ups, poor EUC quality, incomplete end-use explanation, inconsistent transaction details, or failure to anticipate scrutiny around destination and buyer profile."
  },
  {
    question: "Can exporters self-assess SCOMET classification?",
    answer:
      "Some exporters perform a preliminary internal review, but where the item is technical, defence-adjacent, software-linked, or commercially sensitive, specialist classification support reduces the risk of filing errors and shipment disruption."
  },
  {
    question: "Why can this page rank for SCOMET licence keywords?",
    answer:
      "Because it is built around actual user intent: classification, licensing, EUC review, DGFT filing, timelines, compliance risk, FAQs, and official references, instead of a short generic promotional page."
  }
];

const GOVERNMENT_REFERENCES = [
  {
    label: "DGFT Export Management System",
    href: "https://www.dgft.gov.in/CP/?opt=export-management-system"
  },
  {
    label: "DGFT SCOMET Guidelines",
    href: "https://www.dgft.gov.in/CP/?opt=scomet-guidelines"
  },
  {
    label: "Appendix 3 SCOMET List",
    href: "https://content.dgft.gov.in/Website/append3_0.pdf"
  },
  {
    label: "Handbook on India's Strategic Trade Control System 2026",
    href: "https://content.dgft.gov.in/Website/NCSTC%2B2026%2BHandbook%2Bon%2BIndia%27s%2BStrategic%2BTrade%2BControl%2BSystem%2B%2813.01.2026%29.pdf"
  },
  {
    label: "DGFT SCOMET FAQs",
    href: "https://content.dgft.gov.in/Website/DGFT_FAQs_SCOMET-v1.0.pdf"
  },
  {
    label: "Import, Export and SCOMET Policy",
    href: "https://www.dgft.gov.in/CP/?opt=itchs-import-export"
  },
  {
    label: "India's Strategic Trade Controls and SCOMET List - MEA",
    href: "https://www.mea.gov.in/India-Strategic-Trade-Controls-and-SCOMET-List"
  }
];

const RELATED_LINKS = [
  {
    href: "/services/defence-exim-license",
    title: "Defence Export and Import Licensing",
    description:
      "Relevant where controlled items, defence-adjacent products, or strategic buyer relationships need a broader licensing and approval strategy."
  },
  {
    href: "/services/compliance-audit",
    title: "Import Export Compliance Audit",
    description:
      "Helpful for businesses that want to review export-control process gaps, documentation controls, and recurring trade-compliance exposure."
  },
  {
    href: "/services/industrial-license",
    title: "Industrial Licence Support",
    description:
      "Useful where product sensitivity and licensing issues overlap with manufacturing, industrial approvals, or strategic sector obligations."
  },
  {
    href: "/foreign-trade-policy/regulatory-updates",
    title: "Regulatory Updates",
    description:
      "Important for businesses tracking policy changes, DGFT notices, and compliance signals that may affect sensitive export transactions."
  }
];

const CloudDeskSCOMET = () => {
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
          SCOMET Licence Consultant India | DGFT Export Authorisation for
          Dual-Use Goods, Software and Technology | EXIMINQ
        </title>
        <meta
          name="description"
          content="SCOMET licence consultant in India for DGFT export authorisation, SCOMET classification, EUC review, EMS filing, dual-use goods compliance, software and technology transfer review, and strategic trade control support."
        />
        <meta
          name="keywords"
          content="scomet licence consultant India, scomet licensing, dgft scomet authorisation, dual use export licence India, scomet classification consultant, export management system scomet, EUC for scomet licence, scomet software export"
        />
        <meta name="robots" content="index, follow, max-image-preview:large" />
        <link
          rel="canonical"
          href="https://eximinq.in/services/scomet-licensing"
        />
        <meta
          property="og:title"
          content="SCOMET Licence Consultant India | DGFT Export Authorisation for Dual-Use Goods, Software and Technology"
        />
        <meta
          property="og:description"
          content="Get expert support for SCOMET classification, EUC review, DGFT Export Management System filing, and strategic trade control compliance for dual-use exports."
        />
        <meta
          property="og:url"
          content="https://eximinq.in/services/scomet-licensing"
        />
        <meta property="og:type" content="article" />
        <meta name="twitter:card" content="summary_large_image" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@graph": [
              {
                "@type": "WebPage",
                "@id": "https://eximinq.in/services/scomet-licensing",
                url: "https://eximinq.in/services/scomet-licensing",
                name: "SCOMET Licence Consultant India | DGFT Export Authorisation for Dual-Use Goods, Software and Technology | EXIMINQ",
                description:
                  "SCOMET licence consultant in India for DGFT export authorisation, SCOMET classification, EUC review, EMS filing, dual-use goods compliance, software and technology transfer review, and strategic trade control support.",
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
                    name: "SCOMET Licensing",
                    item: "https://eximinq.in/services/scomet-licensing"
                  }
                ]
              },
              {
                "@type": "Service",
                serviceType: "SCOMET licensing and export authorisation support",
                name: "SCOMET Licence Consultant India",
                provider: {
                  "@type": "Organization",
                  name: "EXIMINQ",
                  url: "https://eximinq.in/"
                },
                areaServed: "India",
                url: "https://eximinq.in/services/scomet-licensing",
                description:
                  "Consulting support for SCOMET classification, DGFT export authorisation, EUC review, EMS filing, dual-use item compliance, and strategic trade control documentation."
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
        />

        <section className="relative overflow-hidden bg-gradient-to-br from-[#0f172a] via-[#1e3a8a] to-[#111827] pt-28 text-white">
          <div className="absolute inset-0 opacity-20">
            <div className="absolute left-[-8rem] top-10 h-64 w-64 rounded-full bg-cyan-400 blur-3xl" />
            <div className="absolute bottom-[-5rem] right-[-2rem] h-72 w-72 rounded-full bg-blue-300 blur-3xl" />
          </div>
          <div className="relative mx-auto grid max-w-7xl gap-12 px-4 pb-16 md:px-6 lg:grid-cols-[1.2fr_0.8fr] lg:px-8">
            <div>
              <p className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-semibold uppercase tracking-[0.2em] text-cyan-100">
                <Sparkles size={16} />
                Strategic Trade Controls
              </p>
              <h1 className="max-w-4xl text-4xl font-extrabold leading-tight md:text-5xl lg:text-6xl">
                SCOMET Licence Consultant India for DGFT Export Authorisation
                and Dual-Use Export Compliance
              </h1>
              <p className="mt-6 max-w-3xl text-lg leading-8 text-blue-50/95">
                We help exporters manage the real work behind SCOMET licensing:
                classification, technical write-up, EUC review, DGFT Export
                Management System filing, software and technology transfer risk,
                and strategic trade control compliance for sensitive exports.
              </p>

              <div className="mt-8 grid gap-3 sm:grid-cols-2">
                {HIGHLIGHTS.map((item) => (
                  <div
                    key={item}
                    className="flex items-start gap-3 rounded-2xl border border-white/15 bg-white/10 px-4 py-4 backdrop-blur"
                  >
                    <BadgeCheck className="mt-0.5 text-cyan-200" size={20} />
                    <p className="text-sm font-medium leading-6 text-white">
                      {item}
                    </p>
                  </div>
                ))}
              </div>

              <div className="mt-10 flex flex-wrap gap-4">
                <a
                  href="#consultation"
                  className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-bold text-slate-900 transition hover:bg-cyan-50"
                >
                  Get SCOMET Review
                  <ArrowRight size={18} />
                </a>
                <a
                  href="#references"
                  className="inline-flex items-center gap-2 rounded-full border border-white/30 px-6 py-3 text-sm font-bold text-white transition hover:bg-white/10"
                >
                  View Official References
                  <BookOpenCheck size={18} />
                </a>
              </div>
            </div>

            <div id="consultation" className="lg:pt-6">
              <QuickForm />
            </div>
          </div>
        </section>

        <section className="sticky top-[72px] z-20 border-y border-slate-200 bg-white/95 backdrop-blur">
          <div className="mx-auto flex max-w-7xl gap-3 overflow-x-auto px-4 py-3 md:px-6 lg:px-8">
            {[
              ["#overview", "Overview"],
              ["#coverage", "Coverage"],
              ["#eligibility", "Eligibility"],
              ["#documents", "Documents"],
              ["#process", "Process"],
              ["#references", "References"],
              ["#faqs", "FAQs"]
            ].map(([href, label]) => (
              <a
                key={href}
                href={href}
                className="whitespace-nowrap rounded-full border border-slate-200 px-4 py-2 text-sm font-semibold text-slate-700 transition hover:border-blue-300 hover:text-blue-700"
              >
                {label}
              </a>
            ))}
          </div>
        </section>

        <main className="mx-auto max-w-7xl px-4 py-14 md:px-6 lg:px-8">
          <section
            id="overview"
            className="grid gap-8 rounded-[2rem] bg-white p-8 shadow-[0_25px_80px_-50px_rgba(15,23,42,0.5)] lg:grid-cols-[1.1fr_0.9fr]"
          >
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.24em] text-blue-700">
                Why This Page Matters
              </p>
              <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-slate-900 md:text-4xl">
                A current SEO page for SCOMET licensing, classification, and
                strategic export compliance
              </h2>
              <div className="mt-6 space-y-5 text-base leading-8 text-slate-600">
                <p>
                  Searchers looking for a{" "}
                  <strong>SCOMET licence consultant</strong> usually need much
                  more than a simple explanation of the acronym. They need to
                  know whether an item is controlled, how classification should
                  be approached, what supporting records are required, how DGFT
                  filing works, and what can go wrong if the end-use story is
                  weak.
                </p>
                <p>
                  This page is built to satisfy that real search intent. It
                  combines current official references, exporter-focused
                  practical content, structured headings, deeper FAQs, internal
                  links, and conversion points that are useful for both Google
                  and compliance-focused users.
                </p>
                <p>
                  It also corrects a technical problem from the earlier version:
                  the canonical path is now aligned to the real route
                  `/services/scomet-licensing`, which strengthens indexability
                  and reduces canonical confusion for search engines.
                </p>
              </div>
            </div>

            <div className="grid gap-4">
              {[
                {
                  icon: ShieldAlert,
                  title: "Export-control risk intent",
                  text: "Built for users who need clarity on whether goods, software, technology, or components trigger controlled-export obligations."
                },
                {
                  icon: Target,
                  title: "Classification-first structure",
                  text: "Explains why category mapping, technical description, and destination context matter before filing starts."
                },
                {
                  icon: ClipboardCheck,
                  title: "DGFT EMS and EUC readiness",
                  text: "Connects search intent with actual filing needs, document sequencing, and end-user support records."
                },
                {
                  icon: ShieldCheck,
                  title: "Trust and crawl strength",
                  text: "Adds a clean canonical, stronger metadata, FAQ schema, breadcrumb schema, and official-reference-backed content."
                }
              ].map(({ icon: Icon, title, text }) => (
                <div
                  key={title}
                  className="rounded-3xl border border-slate-200 bg-slate-50 p-5"
                >
                  <Icon className="text-blue-700" size={24} />
                  <h3 className="mt-4 text-lg font-bold text-slate-900">
                    {title}
                  </h3>
                  <p className="mt-2 text-sm leading-7 text-slate-600">
                    {text}
                  </p>
                </div>
              ))}
            </div>
          </section>

          <section id="coverage" className="mt-14">
            <div className="mb-8">
              <p className="text-sm font-bold uppercase tracking-[0.24em] text-blue-700">
                Core Coverage
              </p>
              <h2 className="mt-3 text-3xl font-extrabold text-slate-900 md:text-4xl">
                What the SCOMET licensing page now covers for ranking and user intent
              </h2>
            </div>
            <div className="grid gap-5 md:grid-cols-2">
              {COVERAGE_AREAS.map((area) => (
                <div
                  key={area.title}
                  className="rounded-[1.75rem] border border-slate-200 bg-white p-6 shadow-sm"
                >
                  <Globe2 className="text-blue-700" size={22} />
                  <h3 className="mt-4 text-xl font-bold text-slate-900">
                    {area.title}
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-slate-600">
                    {area.description}
                  </p>
                </div>
              ))}
            </div>
          </section>

          <section id="benefits" className="mt-14">
            <div className="mb-8">
              <p className="text-sm font-bold uppercase tracking-[0.24em] text-blue-700">
                Benefits
              </p>
              <h2 className="mt-3 text-3xl font-extrabold text-slate-900 md:text-4xl">
                Why businesses invest in proper SCOMET licensing support
              </h2>
            </div>
            <div className="grid gap-5 md:grid-cols-2">
              {BENEFITS.map((benefit) => (
                <div
                  key={benefit}
                  className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm"
                >
                  <CheckCircle2 className="text-emerald-600" size={22} />
                  <p className="mt-4 text-base leading-8 text-slate-700">
                    {benefit}
                  </p>
                </div>
              ))}
            </div>
          </section>

          <section
            id="eligibility"
            className="mt-14 grid gap-8 rounded-[2rem] bg-gradient-to-br from-slate-950 via-slate-900 to-blue-950 p-8 text-white lg:grid-cols-[0.95fr_1.05fr]"
          >
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.24em] text-cyan-200">
                Eligibility
              </p>
              <h2 className="mt-3 text-3xl font-extrabold md:text-4xl">
                Who should review SCOMET exposure right now
              </h2>
              <p className="mt-5 text-base leading-8 text-slate-200">
                This page targets businesses with real controlled-export risk,
                not only companies that already know their exact SCOMET
                category. It is structured for users who need classification,
                licensing, and compliance clarity before transaction execution.
              </p>
            </div>
            <div className="grid gap-4">
              {ELIGIBILITY_POINTS.map((point) => (
                <div
                  key={point}
                  className="flex gap-4 rounded-3xl border border-white/10 bg-white/5 p-5"
                >
                  <CheckCircle2 className="mt-1 text-cyan-200" size={20} />
                  <p className="text-sm leading-7 text-slate-100">{point}</p>
                </div>
              ))}
            </div>
          </section>

          <section id="documents" className="mt-14 grid gap-10 lg:grid-cols-2">
            <div className="rounded-[2rem] border border-slate-200 bg-white p-8">
              <p className="text-sm font-bold uppercase tracking-[0.24em] text-blue-700">
                Documents Required
              </p>
              <h2 className="mt-3 text-3xl font-extrabold text-slate-900">
                Core records usually needed
              </h2>
              <div className="mt-6 space-y-4">
                {DOCUMENTS_REQUIRED.map((item) => (
                  <div key={item} className="flex gap-4 rounded-2xl bg-slate-50 p-4">
                    <FileCheck2 className="mt-1 text-blue-700" size={20} />
                    <p className="text-sm leading-7 text-slate-700">{item}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-[2rem] border border-slate-200 bg-white p-8">
              <p className="text-sm font-bold uppercase tracking-[0.24em] text-blue-700">
                Timelines
              </p>
              <h2 className="mt-3 text-3xl font-extrabold text-slate-900">
                Typical implementation flow
              </h2>
              <div className="mt-6 space-y-4">
                {TIMELINE_POINTS.map((item) => (
                  <div
                    key={item}
                    className="flex gap-4 rounded-2xl border border-slate-200 p-4"
                  >
                    <Target className="mt-1 text-blue-700" size={20} />
                    <p className="text-sm leading-7 text-slate-700">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section id="process" className="mt-14">
            <div className="mb-8">
              <p className="text-sm font-bold uppercase tracking-[0.24em] text-blue-700">
                Process Flow
              </p>
              <h2 className="mt-3 text-3xl font-extrabold text-slate-900 md:text-4xl">
                How we handle SCOMET classification and authorisation support
              </h2>
            </div>
            <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-5">
              {PROCESS_STEPS.map((step, index) => (
                <div
                  key={step.title}
                  className="rounded-[1.75rem] border border-slate-200 bg-white p-6 shadow-sm"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-bold text-blue-700">
                      Step {index + 1}
                    </span>
                    <ClipboardCheck className="text-blue-700" size={20} />
                  </div>
                  <h3 className="mt-4 text-lg font-bold text-slate-900">
                    {step.title}
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-slate-600">
                    {step.detail}
                  </p>
                </div>
              ))}
            </div>
          </section>

          <section
            id="references"
            className="mt-14 rounded-[2rem] bg-white p-8 shadow-[0_25px_80px_-50px_rgba(15,23,42,0.5)]"
          >
            <p className="text-sm font-bold uppercase tracking-[0.24em] text-blue-700">
              Official References
            </p>
            <h2 className="mt-3 text-3xl font-extrabold text-slate-900 md:text-4xl">
              Government references that strengthen accuracy and E-E-A-T
            </h2>
            <p className="mt-4 max-w-3xl text-base leading-8 text-slate-600">
              This page is intentionally aligned with official DGFT and
              government strategic trade control resources so the content stays
              useful, accurate, and more trustworthy for search engines
              evaluating policy-sensitive export topics.
            </p>
            <div className="mt-8 grid gap-4 md:grid-cols-2">
              {GOVERNMENT_REFERENCES.map((reference) => (
                <a
                  key={reference.href}
                  href={reference.href}
                  target="_blank"
                  rel="noreferrer"
                  className="group rounded-3xl border border-slate-200 bg-slate-50 p-5 transition hover:border-blue-300 hover:bg-blue-50"
                >
                  <FileSearch className="text-blue-700" size={22} />
                  <h3 className="mt-4 text-base font-bold text-slate-900 group-hover:text-blue-800">
                    {reference.label}
                  </h3>
                  <p className="mt-2 text-sm text-slate-500">
                    Open official source
                  </p>
                </a>
              ))}
            </div>
          </section>

          <section className="mt-14 rounded-[2rem] border border-slate-200 bg-white p-8">
            <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
              <div>
                <p className="text-sm font-bold uppercase tracking-[0.24em] text-blue-700">
                  Internal SEO Strength
                </p>
                <h2 className="mt-3 text-3xl font-extrabold text-slate-900">
                  Related service paths that reinforce topical authority
                </h2>
                <p className="mt-4 text-base leading-8 text-slate-600">
                  Internal linking helps Google understand that SCOMET licensing
                  is part of a wider export-controls, DGFT, compliance, and
                  strategic trade ecosystem across the site.
                </p>
              </div>
              <div className="grid gap-4">
                {RELATED_LINKS.map((link) => (
                  <Link
                    key={link.href}
                    to={link.href}
                    className="rounded-3xl border border-slate-200 p-5 transition hover:border-blue-300 hover:bg-blue-50"
                  >
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <h3 className="text-lg font-bold text-slate-900">
                          {link.title}
                        </h3>
                        <p className="mt-2 text-sm leading-7 text-slate-600">
                          {link.description}
                        </p>
                      </div>
                      <ArrowRight className="mt-1 text-blue-700" size={20} />
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </section>

          <section id="faqs" className="mt-14">
            <div className="mb-8">
              <p className="text-sm font-bold uppercase tracking-[0.24em] text-blue-700">
                FAQs
              </p>
              <h2 className="mt-3 text-3xl font-extrabold text-slate-900 md:text-4xl">
                Common search questions around SCOMET licensing
              </h2>
            </div>
            <div className="space-y-4">
              {FAQS.map((faq) => (
                <details
                  key={faq.question}
                  className="group rounded-3xl border border-slate-200 bg-white p-6 shadow-sm"
                >
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-left text-lg font-bold text-slate-900">
                    {faq.question}
                    <ChevronDown className="shrink-0 text-blue-700 transition group-open:rotate-180" />
                  </summary>
                  <p className="mt-4 text-sm leading-8 text-slate-600">
                    {faq.answer}
                  </p>
                </details>
              ))}
            </div>
          </section>

          <section className="mt-14 rounded-[2rem] bg-gradient-to-r from-blue-700 via-indigo-700 to-slate-900 p-8 text-white md:p-10">
            <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
              <div>
                <p className="text-sm font-bold uppercase tracking-[0.24em] text-cyan-200">
                  Conversion-Focused CTA
                </p>
                <h2 className="mt-3 text-3xl font-extrabold md:text-4xl">
                  Want a practical review of your SCOMET licensing exposure?
                </h2>
                <p className="mt-5 max-w-2xl text-base leading-8 text-blue-50">
                  We help exporters move from uncertainty to a usable controlled
                  export strategy. If your team needs classification support,
                  EUC review, DGFT filing guidance, or transaction-risk clarity,
                  we can review the case and define the next action path.
                </p>
                <div className="mt-8 flex flex-wrap gap-4">
                  <a
                    href="#consultation"
                    className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-bold text-slate-900 transition hover:bg-cyan-50"
                  >
                    Start Your Review
                    <ArrowRight size={18} />
                  </a>
                  <Link
                    to="/contact-us"
                    className="inline-flex items-center gap-2 rounded-full border border-white/30 px-6 py-3 text-sm font-bold text-white transition hover:bg-white/10"
                  >
                    Contact EXIMINQ
                    <Phone size={18} />
                  </Link>
                </div>
              </div>

              <div className="grid gap-4 rounded-[1.75rem] border border-white/10 bg-white/10 p-6 backdrop-blur">
                {[
                  {
                    icon: Building2,
                    label: "Best fit for",
                    text: "Manufacturers, technology exporters, defence-adjacent suppliers, electronics, chemicals, aerospace, and research-linked exporters."
                  },
                  {
                    icon: Globe2,
                    label: "Search intent covered",
                    text: "SCOMET licence, dual-use export authorisation, SCOMET classification, DGFT EMS filing, EUC review, and strategic trade control compliance."
                  },
                  {
                    icon: BriefcaseBusiness,
                    label: "Value delivered",
                    text: "Stronger classification clarity, cleaner filings, better documentation logic, and reduced export-control risk."
                  }
                ].map(({ icon: Icon, label, text }) => (
                  <div key={label} className="rounded-3xl bg-slate-950/20 p-5">
                    <Icon className="text-cyan-200" size={20} />
                    <p className="mt-3 text-sm font-bold uppercase tracking-[0.2em] text-cyan-100">
                      {label}
                    </p>
                    <p className="mt-2 text-sm leading-7 text-blue-50">{text}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </main>

        <footer className="bg-slate-950 text-slate-300">
          <div className="mx-auto grid max-w-7xl gap-10 px-4 py-12 md:grid-cols-[1.2fr_0.8fr_0.8fr] md:px-6 lg:px-8">
            <div>
              <h3 className="text-2xl font-extrabold text-white">EXIMINQ</h3>
              <p className="mt-4 max-w-xl text-sm leading-7 text-slate-400">
                Export consulting support for DGFT, customs, compliance,
                export-controls, and implementation-heavy trade operations
                across India.
              </p>
            </div>

            <div>
              <h4 className="text-sm font-bold uppercase tracking-[0.24em] text-slate-200">
                Quick Links
              </h4>
              <div className="mt-4 space-y-3 text-sm">
                <Link to="/services" className="block hover:text-white">
                  Explore Services
                </Link>
                <Link
                  to="/foreign-trade-policy/regulatory-updates"
                  className="block hover:text-white"
                >
                  Regulatory Updates
                </Link>
                <Link to="/about-us" className="block hover:text-white">
                  About EXIMINQ
                </Link>
              </div>
            </div>

            <div>
              <h4 className="text-sm font-bold uppercase tracking-[0.24em] text-slate-200">
                Contact
              </h4>
              <div className="mt-4 space-y-3 text-sm">
                <a href="tel:+917400096950" className="flex items-center gap-3 hover:text-white">
                  <Phone size={16} />
                  +91 74000 96950
                </a>
                <a
                  href="mailto:clouddesk@eximinq.in"
                  className="flex items-center gap-3 hover:text-white"
                >
                  <Mail size={16} />
                  clouddesk@eximinq.in
                </a>
                <div className="flex items-start gap-3">
                  <MapPin size={16} className="mt-1" />
                  <span>India-focused DGFT and strategic trade consulting support</span>
                </div>
              </div>
              <div className="mt-5 flex gap-3">
                <a
                  href="https://www.linkedin.com"
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-full border border-slate-700 p-2 hover:border-slate-500 hover:text-white"
                  aria-label="LinkedIn"
                >
                  <Linkedin size={18} />
                </a>
                <a
                  href="https://x.com"
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-full border border-slate-700 p-2 hover:border-slate-500 hover:text-white"
                  aria-label="X"
                >
                  <Twitter size={18} />
                </a>
                <a
                  href="https://www.facebook.com"
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-full border border-slate-700 p-2 hover:border-slate-500 hover:text-white"
                  aria-label="Facebook"
                >
                  <Facebook size={18} />
                </a>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
};

export default CloudDeskSCOMET;
