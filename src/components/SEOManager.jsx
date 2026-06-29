import { Helmet } from "react-helmet-async";
import { useLocation } from "react-router-dom";
import { seoRoutes, defaultSEO } from "../config/seoConfig";

const CANONICAL_ORIGIN = "https://eximinq.in";
const DEFAULT_IMAGE = `${CANONICAL_ORIGIN}/logo192.png`;

const titleCase = (value) =>
  value
    .split("-")
    .filter(Boolean)
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join(" ");

const sanitizePathname = (pathname) => {
  if (!pathname) return "/";

  const trimmed = pathname.trim().replace(/\s+/g, "");
  if (trimmed === "" || trimmed === "/") return "/";

  return trimmed.startsWith("/") ? trimmed : `/${trimmed}`;
};

const toCanonicalPath = (pathname) => {
  const sanitizedPath = sanitizePathname(pathname);
  return sanitizedPath === "/" || sanitizedPath.endsWith("/")
    ? sanitizedPath
    : `${sanitizedPath}/`;
};

const getRouteMeta = (pathname) => {
  const candidates = pathname === "/"
    ? ["/"]
    : [pathname, pathname.replace(/\/$/, ""), `${pathname.replace(/\/$/, "")}/`];

  for (const candidate of candidates) {
    if (seoRoutes[candidate]) {
      return seoRoutes[candidate];
    }
  }

  return null;
};

const buildFallbackMeta = (pathname) => {
  if (pathname === "/") {
    return defaultSEO;
  }

  const segments = pathname.split("/").filter(Boolean);
  const lastSegment = segments[segments.length - 1] || "";
  const label = titleCase(lastSegment);

  if (pathname.startsWith("/services/")) {
    return {
      title: `${label} Services | EXIMINQ`,
      description:
        `Explore EXIMINQ support for ${label.toLowerCase()} with DGFT, customs, trade compliance, and documentation assistance across India.`,
    };
  }

  if (pathname.startsWith("/tools/")) {
    return {
      title: `${label} Tool | EXIMINQ`,
      description:
        `Use the EXIMINQ ${label.toLowerCase()} tool to simplify export-import planning, calculations, and compliance workflows.`,
    };
  }

  if (pathname.includes("industry-import-export")) {
    return {
      title: `${label} Industry Import Export Support | EXIMINQ`,
      description:
        `Discover EXIMINQ trade, customs, and compliance solutions tailored for the ${label.toLowerCase()} sector in India.`,
    };
  }

  return {
    title: `${label} | EXIMINQ`,
    description:
      `Learn more about ${label.toLowerCase()} services, trade support, and compliance solutions from EXIMINQ.`,
  };
};

const SEOManager = () => {
  const { pathname } = useLocation();
  const normalizedPath = sanitizePathname(pathname.toLowerCase());
  const meta = getRouteMeta(normalizedPath) || buildFallbackMeta(normalizedPath);
  const canonicalUrl = `${CANONICAL_ORIGIN}${toCanonicalPath(normalizedPath)}`;

  return (
    <Helmet>
      <title>{meta.title}</title>
      <meta name="description" content={meta.description} />
      <meta name="robots" content="index, follow" />
      <link rel="canonical" href={canonicalUrl} />
      <meta property="og:site_name" content="EXIMINQ" />
      <meta property="og:title" content={meta.title} />
      <meta property="og:description" content={meta.description} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:type" content="website" />
      <meta property="og:image" content={DEFAULT_IMAGE} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={meta.title} />
      <meta name="twitter:description" content={meta.description} />
      <meta name="twitter:image" content={DEFAULT_IMAGE} />
    </Helmet>
  );
};

export default SEOManager;
