import { Helmet } from "react-helmet-async";
import { useLocation } from "react-router-dom";
import { seoRoutes, defaultSEO } from "../config/seoConfig";

const SEOManager = () => {
  const { pathname } = useLocation();

  const normalizedPath = pathname.toLowerCase().replace(/\/$/, "");
  const isHome = normalizedPath === "" || normalizedPath === "/";

  const meta = isHome
    ? defaultSEO
    : seoRoutes[normalizedPath] || defaultSEO;

  const canonicalUrl = `https://www.eximinq.in${
    isHome ? "/" : normalizedPath
  }`;

  return (
    <Helmet>
      <title>{meta.title}</title>
      <meta name="description" content={meta.description} />
      <link rel="canonical" href={canonicalUrl} />
    </Helmet>
  );
};

export default SEOManager;
