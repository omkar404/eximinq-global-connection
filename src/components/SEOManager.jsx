import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useLocation } from 'react-router-dom';
import { seoRoutes, defaultSEO } from '../config/seoConfig';

const SEOManager = () => {
  const location = useLocation();
  const currentPath = location.pathname;

  // 1. Check if the exact path exists in config
  // 2. If not, try removing trailing slash
  // 3. Fallback to Default
  const meta = seoRoutes[currentPath] 
    || seoRoutes[currentPath.replace(/\/$/, "")] 
    || defaultSEO;

  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <title>{meta.title}</title>
      <meta name="description" content={meta.description} />
      
      {/* Canonical URL - Important for SEO to prevent duplicates */}
      <link rel="canonical" href={`https://eximinq.in${currentPath}`} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={`https://eximinq.in${currentPath}`} />
      <meta property="og:title" content={meta.title} />
      <meta property="og:description" content={meta.description} />
      <meta property="og:image" content="https://eximinq.in/assets/social-preview.jpg" />

      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={`https://eximinq.in${currentPath}`} />
      <meta property="twitter:title" content={meta.title} />
      <meta property="twitter:description" content={meta.description} />
      <meta property="twitter:image" content="https://eximinq.in/assets/social-preview.jpg" />
    </Helmet>
  );
};

export default SEOManager;