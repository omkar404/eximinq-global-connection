import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  Award,
  BadgeCheck,
  BookOpenCheck,
  BriefcaseBusiness,
  Building2,
  CheckCircle2,
  ChevronDown,
  CircleDollarSign,
  FileCheck2,
  FileSearch,
  Globe2,
  Landmark,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  ShieldCheck,
  Star,
  TrendingUp,
  Twitter,
  Facebook
} from "lucide-react";
import { MainNavbar } from "../components/CloudDeskDigitalSignatures/MainNavbar";
import QuickForm from "../components/CloudDeskExportHouse/QuickForm";

const STATUS_THRESHOLDS = [
  {
    title: "One Star Export House",
    threshold: "USD 3 million",
    stars: 1,
    note: "Base eligibility category for recognised exporters under the current FTP framework."
  },
  {
    title: "Two Star Export House",
    threshold: "USD 15 million",
    stars: 2,
    note: "For businesses that have scaled exports materially across the review period."
  },
  {
    title: "Three Star Export House",
    threshold: "USD 50 million",
    stars: 3,
    note: "Relevant for established exporters with a larger multi-year export base."
  },
  {
    title: "Four Star Export House",
    threshold: "USD 200 million",
    stars: 4,
    note: "Suited to major export houses with substantial transaction volume and scale."
  },
  {
    title: "Five Star Export House",
    threshold: "USD 800 million",
    stars: 5,
    note: "The highest recognition tier for exporters with very large performance history."
  }
];

const BENEFITS = [
  "Recognised status under DGFT that improves institutional credibility with banks, counterparties, customs, and overseas buyers.",
  "Operational ease across selected foreign-trade transactions where status-holder standing strengthens documentation and process readiness.",
  "Eligibility-driven advantages under relevant DGFT and customs procedures, including reduced friction in certain guarantees or fulfilment pathways where applicable.",
  "Stronger market positioning for exporters building long-term trade relationships, tender profiles, and international credibility."
];

const ELIGIBILITY_POINTS = [
  "An active IEC and verifiable export performance computed over the current and previous three financial years as per the applicable Foreign Trade Policy framework.",
  "FOB or FOR export performance that meets the threshold for the star category being applied for.",
  "Correct treatment of merchant exports, manufacturer exports, service-linked records where applicable, and supporting realisation data.",
  "A clean documentary trail to substantiate the export-performance claim and the category being requested."
];

const DOUBLE_WEIGHTAGE = [
  "Double weightage applies only for grant of One Star Export House status under the current FTP position.",
  "It does not apply for Two Star, Three Star, Four Star, or Five Star category recognition.",
  "Eligibility should be checked carefully against the recognised categories and the documentary basis accepted under DGFT."
];

const DOCUMENTS_REQUIRED = [
  "IEC details, applicant entity profile, constitution documents, and authorised signatory details.",
  "Shipping bills, export invoices, e-BRC or BRC data, and financial-year-wise export-performance working.",
  "Supporting records for merchanting, manufacturer linkage, and any claim that depends on category-specific treatment.",
  "Past status-holder certificate data, amendments, correspondence, and any DGFT clarification trail if the applicant is renewing or upgrading."
];

const PROCESS_STEPS = [
  {
    title: "Export-performance diagnostic",
    detail:
      "We examine whether the exporter is realistically eligible for One Star, Two Star, Three Star, Four Star, or Five Star category before the application is filed."
  },
  {
    title: "Threshold and record validation",
    detail:
      "Performance working is aligned with the relevant financial years, export values, and supporting e-BRC or BRC evidence."
  },
  {
    title: "Application preparation",
    detail:
      "The application pack, declarations, and portal-side inputs are organised so the filing is clean, defensible, and less likely to attract avoidable objections."
  },
  {
    title: "DGFT filing and follow-up",
    detail:
      "We support submission, deficiency handling, clarification response, and portal-side issue resolution where the filing needs intervention."
  },
  {
    title: "Post-approval guidance",
    detail:
      "After grant of status, the exporter receives support on practical use, renewals, category planning, and alignment with related DGFT and customs benefits."
  }
];

const FAQS = [
  {
    question: "What is a Star Export House certificate?",
    answer:
      "A Star Export House certificate, also called Status Holder recognition, is a DGFT-issued recognition for exporters that meet defined export-performance thresholds under the Foreign Trade Policy."
  },
  {
    question: "How is Star Export House eligibility calculated?",
    answer:
      "Eligibility is assessed on export performance over the current and previous three financial years, subject to the applicable FTP provisions, category thresholds, and supporting export records."
  },
  {
    question: "What are the current Star Export House thresholds?",
    answer:
      "Under the current FTP framework, the thresholds are generally USD 3 million for One Star, USD 15 million for Two Star, USD 50 million for Three Star, USD 200 million for Four Star, and USD 800 million for Five Star recognition."
  },
  {
    question: "Does double weightage apply for all star categories?",
    answer:
      "No. Double weightage is available only for One Star Export House status under the current FTP position and does not extend to higher categories."
  },
  {
    question: "How long does the Star Export House application process take?",
    answer:
      "The timeline depends on document readiness, export-data cleanliness, and whether the DGFT filing triggers clarification or deficiency queries. A clean, validated application usually moves faster."
  },
  {
    question: "Can EXIMINQ help if my threshold calculation or records are unclear?",
    answer:
      "Yes. We can validate export-performance working, reconcile documentary support, prepare the filing set, and help respond to deficiency or clarification requests."
  }
];

const GOVERNMENT_REFERENCES = [
  {
    label: "DGFT Status Holder Certificate Portal",
    href: "https://www.dgft.gov.in/CP/?opt=Status_Holder_Certificate"
  },
  {
    label: "Foreign Trade Policy 2023",
    href: "https://content.dgft.gov.in/Website/dgftprod/61d61bc2-272e-4880-b96c-c8f685a3b244/Foreign%20Trade%20Policy%202023.pdf"
  },
  {
    label: "Handbook of Procedures 2023",
    href: "https://content.dgft.gov.in/Website/dgftprod/e1cb52ea-0c3a-4c2a-8cd7-dd992e9bdc98/HBP_2023.pdf"
  }
];

const RELATED_LINKS = [
  {
    href: "/services/advance-authorisation/",
    title: "Advance Authorisation Support",
    description:
      "Useful for exporters aligning status planning with duty-saving authorisation strategy, redemption readiness, and documentation discipline."
  },
  {
    href: "/services/epcg-scheme",
    title: "EPCG Scheme Support",
    description:
      "Relevant where export growth, capital-goods planning, and fulfilment discipline need to work together with status-holder strategy."
  },
  {
    href: "/services/certificate-of-origin/",
    title: "Certificate of Origin Support",
    description:
      "Helpful for exporters building stronger shipment documentation and buyer-facing trade credibility across multiple markets."
  },
  {
    href: "/services/import-export-code/",
    title: "IEC and DGFT Profile Support",
    description:
      "Important for businesses that need clean IEC records and portal readiness before applying for higher DGFT recognitions."
  }
];

const StarRow = ({ count }) => (
  <div className="flex items-center gap-1 text-amber-500">
    {Array.from({ length: count }).map((_, index) => (
      <Star key={index} className="h-4 w-4 fill-current" />
    ))}
  </div>
);

const CloudDeskExportHouse = () => {
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
          Star Export House Consultant India | DGFT Status Holder Certificate,
          Thresholds & Application Support | EXIMINQ
        </title>
        <meta
          name="description"
          content="Star Export House consultant in India for DGFT Status Holder Certificate filing, threshold validation, export-performance review, One Star to Five Star strategy, and deficiency-response support."
        />
        <meta
          name="keywords"
          content="star export house consultant India, status holder certificate consultant, DGFT star export house, one star export house, export house certificate, status holder application, export performance threshold, star export house registration"
        />
        <meta name="robots" content="index, follow, max-image-preview:large" />
        <link
          rel="canonical"
          href="https://eximinq.in/services/star-export-house"
        />
        <meta
          property="og:title"
          content="Star Export House Consultant India | DGFT Status Holder Certificate Support"
        />
        <meta
          property="og:description"
          content="Get expert support for Star Export House certificate filing, threshold validation, export-performance review, and DGFT deficiency handling for One Star to Five Star category recognition."
        />
        <meta
          property="og:url"
          content="https://eximinq.in/services/star-export-house"
        />
        <meta property="og:type" content="article" />
        <meta name="twitter:card" content="summary_large_image" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@graph": [
              {
                "@type": "WebPage",
                "@id": "https://eximinq.in/services/star-export-house",
                url: "https://eximinq.in/services/star-export-house",
                name: "Star Export House Consultant India | DGFT Status Holder Certificate, Thresholds & Application Support | EXIMINQ",
                description:
                  "Star Export House consultant in India for DGFT Status Holder Certificate filing, threshold validation, export-performance review, One Star to Five Star strategy, and deficiency-response support.",
                isPartOf: {
                  "@type": "WebSite",
                  name: "EXIMINQ",
                  url: "https://eximinq.in"
                }
              },
              {
                "@type": "BreadcrumbList",
                itemListElement: [
                  {
                    "@type": "ListItem",
                    position: 1,
                    name: "Home",
                    item: "https://eximinq.in"
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
                    name: "Star Export House",
                    item: "https://eximinq.in/services/star-export-house"
                  }
                ]
              },
              {
                "@type": "Service",
                name: "Star Export House Certificate Support",
                serviceType: "DGFT Status Holder Certificate Filing",
                provider: {
                  "@type": "Organization",
                  name: "EXIMINQ",
                  url: "https://eximinq.in"
                },
                areaServed: {
                  "@type": "Country",
                  name: "India"
                },
                description:
                  "Consulting support for Star Export House or Status Holder Certificate applications, export-performance threshold validation, category strategy, and deficiency response."
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

      <div className="min-h-screen bg-slate-50 text-slate-800">
        <MainNavbar
          scrolled={scrolled}
          setScrolled={setScrolled}
          isMenuOpen={isMenuOpen}
          setIsMenuOpen={setIsMenuOpen}
        />

        <section className="relative overflow-hidden bg-[radial-gradient(circle_at_top_left,_rgba(37,99,235,0.14),_transparent_30%),linear-gradient(135deg,#0f172a_0%,#172554_44%,#1d4ed8_100%)] pt-32 text-white">
          <div className="absolute inset-0 opacity-20">
            <div className="absolute left-0 top-12 h-64 w-64 rounded-full bg-sky-400 blur-3xl" />
            <div className="absolute bottom-0 right-0 h-72 w-72 rounded-full bg-indigo-400 blur-3xl" />
          </div>

          <div className="relative mx-auto grid max-w-7xl gap-12 px-4 pb-20 lg:grid-cols-[1.15fr_0.85fr] lg:px-8">
            <div className="pt-4">
              <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-medium text-blue-100 backdrop-blur">
                <BadgeCheck className="h-4 w-4" />
                DGFT Status Holder Certificate Support
              </div>

              <h1 className="max-w-4xl font-serif text-4xl font-semibold leading-tight text-white md:text-5xl lg:text-6xl">
                Star Export House Consultant India for DGFT Status Holder
                Certificate, Threshold Review, and Application Strategy
              </h1>

              <p className="mt-6 max-w-3xl text-lg leading-8 text-blue-100">
                Get expert help to evaluate eligibility, validate export
                performance, structure the application, and respond to DGFT
                deficiencies for One Star to Five Star Export House recognition.
              </p>

              <div className="mt-8 grid gap-3 sm:grid-cols-2">
                {[
                  "Threshold validation based on the current and previous three financial years",
                  "One Star to Five Star category assessment and filing support",
                  "Double-weightage guidance for One Star applications where applicable",
                  "Deficiency and clarification response support after filing"
                ].map((item) => (
                  <div
                    key={item}
                    className="flex items-start gap-3 rounded-2xl border border-white/15 bg-white/10 px-4 py-3 text-sm text-blue-50 backdrop-blur"
                  >
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-cyan-300" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              <div className="mt-9 flex flex-wrap gap-4">
                <a
                  href="#calculator"
                  className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 font-semibold text-slate-900 shadow-lg shadow-blue-900/20 transition hover:-translate-y-0.5"
                >
                  Check Category Eligibility
                  <ArrowRight className="h-4 w-4" />
                </a>
                <a
                  href="#process"
                  className="inline-flex items-center gap-2 rounded-full border border-white/25 px-6 py-3 font-semibold text-white transition hover:bg-white/10"
                >
                  Understand the Filing Process
                </a>
              </div>
            </div>

            <div id="calculator" className="lg:pt-8">
              <QuickForm />
            </div>
          </div>
        </section>

        <section className="sticky top-[72px] z-20 border-b border-slate-200 bg-white/90 backdrop-blur">
          <div className="mx-auto flex max-w-7xl gap-3 overflow-x-auto px-4 py-4 text-sm font-medium text-slate-600 lg:px-8">
            {[
              ["overview", "Overview"],
              ["thresholds", "Thresholds"],
              ["benefits", "Benefits"],
              ["documents", "Documents"],
              ["process", "Process"],
              ["references", "References"],
              ["faqs", "FAQs"]
            ].map(([id, label]) => (
              <a
                key={id}
                href={`#${id}`}
                className="whitespace-nowrap rounded-full border border-slate-200 px-4 py-2 transition hover:border-blue-200 hover:bg-blue-50 hover:text-blue-700"
              >
                {label}
              </a>
            ))}
          </div>
        </section>

        <section id="overview" className="mx-auto max-w-7xl px-4 py-16 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr]">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-blue-700">
                Search-Intent Overview
              </p>
              <h2 className="mt-3 font-serif text-3xl font-semibold text-slate-900 md:text-4xl">
                A stronger Star Export House page needs more than a category list
              </h2>
              <div className="mt-6 space-y-5 text-lg leading-8 text-slate-600">
                <p>
                  Businesses looking for a <strong>Star Export House consultant</strong>,
                  <strong> status holder certificate support</strong>, or
                  <strong> DGFT export house registration</strong> usually want
                  two things at the same time: correct interpretation of the
                  threshold rules and a filing strategy that will not fail due to
                  poor record preparation.
                </p>
                <p>
                  This page is now built around that exact commercial intent. It
                  explains the recognition framework, current thresholds,
                  application pathway, documentary expectations, and where export
                  performance reviews usually become risky or unclear.
                </p>
                <p>
                  For Google, this makes the page more useful and easier to
                  classify. For users, it reduces uncertainty before they submit
                  a Star Export House or status-holder filing.
                </p>
              </div>
            </div>

            <div className="grid gap-4">
              {[
                {
                  icon: TrendingUp,
                  title: "Keyword coverage",
                  detail:
                    "Covers Star Export House consultant, DGFT Status Holder Certificate, export-performance threshold, and One Star to Five Star category intent."
                },
                {
                  icon: ShieldCheck,
                  title: "Filing confidence",
                  detail:
                    "Explains how threshold validation, documentary review, and deficiency handling reduce rejection or delay risk."
                },
                {
                  icon: Globe2,
                  title: "Commercial relevance",
                  detail:
                    "Frames status recognition not as generic branding, but as a practical export-growth and trade-positioning milestone."
                }
              ].map(({ icon: Icon, title, detail }) => (
                <div
                  key={title}
                  className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm"
                >
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-50 text-blue-700">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-semibold text-slate-900">{title}</h3>
                  <p className="mt-2 leading-7 text-slate-600">{detail}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="thresholds" className="bg-white py-16">
          <div className="mx-auto max-w-7xl px-4 lg:px-8">
            <div className="max-w-3xl">
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-blue-700">
                Current Threshold Structure
              </p>
              <h2 className="mt-3 font-serif text-3xl font-semibold text-slate-900 md:text-4xl">
                Star Export House categories should match the current FTP framework
              </h2>
              <p className="mt-5 text-lg leading-8 text-slate-600">
                Under the current policy position, status recognition depends on
                export performance across the current and previous three
                financial years. Higher star categories require progressively
                larger export-performance history and a stronger documentary
                base to support the claim.
              </p>
            </div>

            <div className="mt-10 overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
              <div className="grid grid-cols-1 divide-y divide-slate-200 lg:grid-cols-[1.2fr_0.55fr_0.45fr] lg:divide-x lg:divide-y-0">
                <div className="bg-slate-900 px-6 py-5 text-sm font-semibold uppercase tracking-[0.18em] text-white">
                  Status Category
                </div>
                <div className="bg-slate-900 px-6 py-5 text-sm font-semibold uppercase tracking-[0.18em] text-white">
                  Threshold
                </div>
                <div className="bg-slate-900 px-6 py-5 text-sm font-semibold uppercase tracking-[0.18em] text-white">
                  Star Level
                </div>

                {STATUS_THRESHOLDS.map((item) => (
                  <React.Fragment key={item.title}>
                    <div className="px-6 py-6">
                      <h3 className="text-lg font-semibold text-slate-900">
                        {item.title}
                      </h3>
                      <p className="mt-2 leading-7 text-slate-600">{item.note}</p>
                    </div>
                    <div className="px-6 py-6 text-lg font-semibold text-blue-700">
                      {item.threshold}
                    </div>
                    <div className="px-6 py-6">
                      <StarRow count={item.stars} />
                    </div>
                  </React.Fragment>
                ))}
              </div>
            </div>

            <div className="mt-8 grid gap-6 lg:grid-cols-2">
              <div className="rounded-3xl border border-amber-200 bg-amber-50 p-6">
                <div className="flex items-center gap-3 text-amber-900">
                  <Award className="h-6 w-6" />
                  <h3 className="text-xl font-semibold">Double-weightage note</h3>
                </div>
                <div className="mt-4 space-y-3 text-slate-700">
                  {DOUBLE_WEIGHTAGE.map((item) => (
                    <div key={item} className="flex gap-3">
                      <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-amber-700" />
                      <p>{item}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="rounded-3xl border border-slate-200 bg-slate-50 p-6">
                <div className="flex items-center gap-3 text-slate-900">
                  <Building2 className="h-6 w-6" />
                  <h3 className="text-xl font-semibold">Why threshold validation matters</h3>
                </div>
                <p className="mt-4 leading-7 text-slate-600">
                  Many applications fail not because the exporter is ineligible,
                  but because the category calculation, supporting records,
                  financial-year mapping, or filing logic is weak. Correct
                  threshold validation improves both the quality of the
                  application and the probability of smooth processing.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="benefits" className="mx-auto max-w-7xl px-4 py-16 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr]">
            <div className="rounded-[2rem] bg-gradient-to-br from-slate-950 via-slate-900 to-blue-950 p-8 text-white shadow-xl">
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-cyan-300">
                Business Impact
              </p>
              <h2 className="mt-3 font-serif text-3xl font-semibold">
                Why exporters pursue Status Holder recognition
              </h2>
              <p className="mt-5 text-lg leading-8 text-slate-200">
                Searchers rarely want the certificate only for symbolic value.
                They want stronger market positioning, better credibility, and
                practical ease in trade-facing workflows that reward structured,
                trusted exporters.
              </p>
            </div>

            <div className="grid gap-4">
              {BENEFITS.map((benefit) => (
                <div
                  key={benefit}
                  className="flex gap-4 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm"
                >
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-emerald-50 text-emerald-700">
                    <CircleDollarSign className="h-6 w-6" />
                  </div>
                  <p className="leading-7 text-slate-700">{benefit}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-white py-16">
          <div className="mx-auto grid max-w-7xl gap-8 px-4 lg:grid-cols-2 lg:px-8">
            <div className="rounded-3xl border border-slate-200 bg-slate-50 p-8">
              <div className="mb-4 flex items-center gap-3 text-slate-900">
                <FileCheck2 className="h-6 w-6 text-blue-700" />
                <h2 className="text-2xl font-semibold">Eligibility checklist</h2>
              </div>
              <div className="space-y-4">
                {ELIGIBILITY_POINTS.map((item) => (
                  <div key={item} className="flex gap-3">
                    <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-blue-700" />
                    <p className="leading-7 text-slate-600">{item}</p>
                  </div>
                ))}
              </div>
            </div>

            <div id="documents" className="rounded-3xl border border-slate-200 bg-slate-50 p-8">
              <div className="mb-4 flex items-center gap-3 text-slate-900">
                <FileSearch className="h-6 w-6 text-blue-700" />
                <h2 className="text-2xl font-semibold">Documents generally reviewed</h2>
              </div>
              <div className="space-y-4">
                {DOCUMENTS_REQUIRED.map((item) => (
                  <div key={item} className="flex gap-3">
                    <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-blue-700" />
                    <p className="leading-7 text-slate-600">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="process" className="mx-auto max-w-7xl px-4 py-16 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-blue-700">
              Application Process
            </p>
            <h2 className="mt-3 font-serif text-3xl font-semibold text-slate-900 md:text-4xl">
              A structured filing process reduces the risk of deficiency and delay
            </h2>
            <p className="mt-5 text-lg leading-8 text-slate-600">
              A high-performing page should answer the exact practical question
              users have: what happens from eligibility review to certificate
              grant? This process map gives that clarity while also strengthening
              topical coverage for high-intent search terms.
            </p>
          </div>

          <div className="mt-10 grid gap-5 lg:grid-cols-5">
            {PROCESS_STEPS.map((step, index) => (
              <div
                key={step.title}
                className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm"
              >
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-2xl bg-blue-700 font-semibold text-white">
                  {index + 1}
                </div>
                <h3 className="text-lg font-semibold text-slate-900">
                  {step.title}
                </h3>
                <p className="mt-3 leading-7 text-slate-600">{step.detail}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="references" className="bg-white py-16">
          <div className="mx-auto max-w-7xl px-4 lg:px-8">
            <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.24em] text-blue-700">
                  Government References
                </p>
                <h2 className="mt-3 font-serif text-3xl font-semibold text-slate-900">
                  Reference pages that strengthen trust and topical authority
                </h2>
                <p className="mt-5 text-lg leading-8 text-slate-600">
                  Linking the page narrative to official DGFT resources improves
                  credibility, helps users verify policy context, and reinforces
                  the page&apos;s trust signals in a regulatory topic.
                </p>
              </div>

              <div className="grid gap-4">
                {GOVERNMENT_REFERENCES.map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    target="_blank"
                    rel="noreferrer"
                    className="group rounded-3xl border border-slate-200 bg-slate-50 p-6 transition hover:border-blue-200 hover:bg-blue-50"
                  >
                    <div className="flex items-center gap-3 text-slate-900">
                      <Landmark className="h-5 w-5 text-blue-700" />
                      <span className="text-lg font-semibold">{item.label}</span>
                    </div>
                    <p className="mt-3 break-all text-sm text-slate-500">
                      {item.href}
                    </p>
                    <div className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-blue-700">
                      Open reference
                      <ArrowRight className="h-4 w-4 transition group-hover:translate-x-0.5" />
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="faqs" className="mx-auto max-w-7xl px-4 py-16 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-blue-700">
              Frequently Asked Questions
            </p>
            <h2 className="mt-3 font-serif text-3xl font-semibold text-slate-900 md:text-4xl">
              Questions exporters ask before filing for Star Export House recognition
            </h2>
          </div>

          <div className="mt-10 grid gap-4">
            {FAQS.map((faq) => (
              <details
                key={faq.question}
                className="group rounded-3xl border border-slate-200 bg-white p-6 shadow-sm"
              >
                <summary className="flex cursor-pointer list-none items-start justify-between gap-6 text-lg font-semibold text-slate-900">
                  <span>{faq.question}</span>
                  <ChevronDown className="mt-1 h-5 w-5 shrink-0 text-slate-400 transition group-open:rotate-180" />
                </summary>
                <p className="mt-4 max-w-4xl leading-8 text-slate-600">
                  {faq.answer}
                </p>
              </details>
            ))}
          </div>
        </section>

        <section className="bg-white py-16">
          <div className="mx-auto max-w-7xl px-4 lg:px-8">
            <div className="mb-8 flex items-end justify-between gap-6">
              <div className="max-w-3xl">
                <p className="text-sm font-semibold uppercase tracking-[0.24em] text-blue-700">
                  Related Services
                </p>
                <h2 className="mt-3 font-serif text-3xl font-semibold text-slate-900">
                  Internal links that strengthen service-cluster relevance
                </h2>
                <p className="mt-5 text-lg leading-8 text-slate-600">
                  Strong internal linking helps both users and Google understand
                  how Star Export House strategy connects with the broader DGFT,
                  export documentation, and trade-compliance ecosystem.
                </p>
              </div>
            </div>

            <div className="grid gap-5 md:grid-cols-2">
              {RELATED_LINKS.map((link) => (
                <Link
                  key={link.href}
                  to={link.href}
                  className="group rounded-3xl border border-slate-200 bg-slate-50 p-6 transition hover:border-blue-200 hover:bg-blue-50"
                >
                  <div className="flex items-center gap-3 text-slate-900">
                    <BookOpenCheck className="h-5 w-5 text-blue-700" />
                    <h3 className="text-xl font-semibold">{link.title}</h3>
                  </div>
                  <p className="mt-3 leading-7 text-slate-600">{link.description}</p>
                  <div className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-blue-700">
                    Explore related service
                    <ArrowRight className="h-4 w-4 transition group-hover:translate-x-0.5" />
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-[linear-gradient(135deg,#111827_0%,#172554_100%)] py-16 text-white">
          <div className="mx-auto grid max-w-7xl gap-10 px-4 lg:grid-cols-[1fr_0.95fr] lg:px-8">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-cyan-300">
                Conversion-Focused CTA
              </p>
              <h2 className="mt-3 font-serif text-3xl font-semibold md:text-4xl">
                Want to know which Star Export House category your business can defend?
              </h2>
              <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-200">
                We can review your export-performance profile, validate category
                eligibility, and help you move toward a stronger DGFT filing with
                cleaner records and clearer threshold logic.
              </p>

              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                {[
                  {
                    icon: Phone,
                    title: "Call us",
                    detail: "+91 74000 96950"
                  },
                  {
                    icon: Mail,
                    title: "Email us",
                    detail: "clouddesk@eximinq.in"
                  },
                  {
                    icon: MapPin,
                    title: "Office",
                    detail: "Mumbai, India"
                  },
                  {
                    icon: BriefcaseBusiness,
                    title: "Use case",
                    detail: "Status Holder filing and export-performance review"
                  }
                ].map(({ icon: Icon, title, detail }) => (
                  <div
                    key={title}
                    className="rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur"
                  >
                    <div className="mb-2 flex items-center gap-3">
                      <Icon className="h-5 w-5 text-cyan-300" />
                      <span className="font-semibold text-white">{title}</span>
                    </div>
                    <p className="text-slate-200">{detail}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-[2rem] border border-white/10 bg-white/10 p-8 backdrop-blur">
              <h3 className="text-2xl font-semibold">What this page now does better for SEO</h3>
              <div className="mt-5 space-y-4 text-slate-200">
                {[
                  "Targets commercial-intent keywords such as Star Export House consultant, status holder certificate, DGFT export house registration, and One Star to Five Star filing support.",
                  "Adds real depth with thresholds, double-weightage logic, eligibility, documents, process, FAQs, and official-reference links.",
                  "Strengthens crawlability and clarity through canonical, schema, section anchors, and related-service linking."
                ].map((item) => (
                  <div key={item} className="flex gap-3">
                    <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-cyan-300" />
                    <p>{item}</p>
                  </div>
                ))}
              </div>
              <a
                href="#calculator"
                className="mt-8 inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 font-semibold text-slate-900 transition hover:-translate-y-0.5"
              >
                Start with the status calculator
                <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </div>
        </section>

        <footer className="bg-slate-950 py-10 text-slate-300">
          <div className="mx-auto flex max-w-7xl flex-col gap-6 px-4 lg:flex-row lg:items-center lg:justify-between lg:px-8">
            <div>
              <p className="text-lg font-semibold text-white">EXIMINQ Global Connections</p>
              <p className="mt-2 max-w-2xl text-sm leading-7 text-slate-400">
                Search-focused DGFT, customs, and trade-compliance support for
                exporters who need better documentation, better execution, and
                better commercial positioning.
              </p>
            </div>

            <div className="flex items-center gap-4">
              {[
                {
                  href: "https://www.linkedin.com",
                  label: "LinkedIn",
                  icon: Linkedin
                },
                {
                  href: "https://x.com",
                  label: "X",
                  icon: Twitter
                },
                {
                  href: "https://www.facebook.com",
                  label: "Facebook",
                  icon: Facebook
                }
              ].map(({ href, label, icon: Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={label}
                  className="flex h-11 w-11 items-center justify-center rounded-full border border-slate-800 bg-slate-900 text-slate-300 transition hover:border-blue-500 hover:text-white"
                >
                  <Icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>
        </footer>
      </div>
    </>
  );
};

export default CloudDeskExportHouse;
