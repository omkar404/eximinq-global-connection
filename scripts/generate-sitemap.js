const fs = require("fs");
const path = require("path");

const ROOT_DIR = path.resolve(__dirname, "..");
const APP_FILE = path.join(ROOT_DIR, "src", "App.js");
const PACKAGE_FILE = path.join(ROOT_DIR, "package.json");
const SITEMAP_FILE = path.join(ROOT_DIR, "public", "sitemap.xml");

const SITE_URL = "https://eximinq.in";
const EXCLUDED_PUBLIC_ROUTES = new Set(["/demo-of-clouddesk/"]);
const REACT_SNAP_PRIORITY_ROUTES = [
  "/advance-authorization-redemption/",
  "/services/advance-authorisation/",
  "/services/",
  "/",
];

function toCanonicalRoutePath(routePath) {
  return routePath === "/" || routePath.endsWith("/")
    ? routePath
    : `${routePath}/`;
}

function toPosixPath(filePath) {
  return filePath.replace(/\\/g, "/");
}

function formatDate(date) {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
}

function getRecentDateOffset(seed, maxOffsetDays) {
  return Array.from(seed).reduce(
    (total, character) => total + character.charCodeAt(0),
    0
  ) % (maxOffsetDays + 1);
}

function escapeXml(value) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}

function getRouteMetadata(routePath) {
  if (routePath === "/") {
    return { changefreq: "daily", priority: "1.0" };
  }

  if (routePath === "/services") {
    return { changefreq: "weekly", priority: "0.9" };
  }

  if (
    routePath === "/foreign-trade-policy" ||
    routePath === "/dgft-customs-consultancy" ||
    routePath === "/certificate-of-origin" ||
    routePath === "/compliance-trade-india" ||
    routePath === "/clouddesk-saas" ||
    routePath === "/advance-authorization-redemption"
  ) {
    return { changefreq: "weekly", priority: "0.8" };
  }

  if (
    routePath === "/contact-us" ||
    routePath === "/contact-us-support" ||
    routePath === "/demo-of-clouddesk"
  ) {
    return { changefreq: "monthly", priority: "0.5" };
  }

  if (routePath === "/about-us" || routePath === "/strategic-solutions") {
    return { changefreq: "monthly", priority: "0.7" };
  }

  if (
    routePath === "/invoice" ||
    routePath === "/disclaimer" ||
    routePath === "/privacy-policy" ||
    routePath === "/terms-of-service"
  ) {
    return { changefreq: "yearly", priority: "0.3" };
  }

  if (routePath.startsWith("/services/")) {
    return { changefreq: "weekly", priority: "0.8" };
  }

  if (
    routePath.startsWith("/tools/") ||
    routePath === "/trade-compliance-calendar" ||
    routePath === "/bis-epr-wpc-lmpc" ||
    routePath === "/rodtep-refund-recovery" ||
    routePath === "/epcg-closure-services"
  ) {
    return { changefreq: "monthly", priority: "0.7" };
  }

  return { changefreq: "monthly", priority: "0.7" };
}

function getImportMap(appSource) {
  const importMap = new Map();
  const importRegex = /^import\s+([A-Za-z0-9_]+)\s+from\s+"([^"]+)";/gm;
  let match;

  while ((match = importRegex.exec(appSource)) !== null) {
    const [, componentName, importPath] = match;

    if (!importPath.startsWith(".")) {
      continue;
    }

    const resolvedBase = path.resolve(path.dirname(APP_FILE), importPath);
    const candidatePaths = [
      resolvedBase,
      `${resolvedBase}.js`,
      `${resolvedBase}.jsx`,
      path.join(resolvedBase, "index.js"),
      path.join(resolvedBase, "index.jsx"),
    ];

    const resolvedPath = candidatePaths.find((candidate) => fs.existsSync(candidate));
    if (resolvedPath) {
      importMap.set(componentName, resolvedPath);
    }
  }

  return importMap;
}

function getRoutes(appSource, importMap) {
  const routes = [];
  const routeRegex = /<Route\s+path="([^"]+)"\s+element={<([A-Za-z0-9_]+)/g;
  let match;

  while ((match = routeRegex.exec(appSource)) !== null) {
    const [, routePath, componentName] = match;

    if (routePath === "*" || componentName === "Navigate") {
      continue;
    }

    routes.push({
      path: routePath,
      componentName,
      componentFile: importMap.get(componentName) || null,
    });
  }

  return routes;
}

function getLastModified(route) {
  const recentDate = new Date();
  const offsetDays = getRecentDateOffset(route.path, 5);
  recentDate.setDate(recentDate.getDate() - offsetDays);

  return formatDate(recentDate);
}

function buildSitemapXml(routes) {
  const lines = [
    '<?xml version="1.0" encoding="UTF-8"?>',
    '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">',
  ];

  routes.forEach((route) => {
    const metadataPath = route.path === "/" ? "/" : route.path.replace(/\/$/, "");
    const { changefreq, priority } = getRouteMetadata(metadataPath);
    lines.push("  <url>");
    lines.push(`    <loc>${escapeXml(`${SITE_URL}${route.path}`)}</loc>`);
    lines.push(`    <lastmod>${route.lastmod}</lastmod>`);
    lines.push(`    <changefreq>${changefreq}</changefreq>`);
    lines.push(`    <priority>${priority}</priority>`);
    lines.push("  </url>");
  });

  lines.push("</urlset>");
  lines.push("");

  return lines.join("\n");
}

function updateReactSnapInclude(routePaths) {
  const packageJson = JSON.parse(fs.readFileSync(PACKAGE_FILE, "utf8"));
  packageJson.reactSnap = packageJson.reactSnap || {};
  const routeSet = new Set(
    routePaths.filter((routePath) => !EXCLUDED_PUBLIC_ROUTES.has(routePath))
  );
  packageJson.reactSnap.include = [
    ...REACT_SNAP_PRIORITY_ROUTES.filter((routePath) => routeSet.delete(routePath)),
    ...routeSet,
  ];
  fs.writeFileSync(PACKAGE_FILE, `${JSON.stringify(packageJson, null, 2)}\n`);
}

function main() {
  const appSource = fs.readFileSync(APP_FILE, "utf8");
  const importMap = getImportMap(appSource);
  const routes = getRoutes(appSource, importMap)
    .map((route) => ({
      ...route,
      path: toCanonicalRoutePath(route.path),
      lastmod: getLastModified(route),
    }))
    .filter((route) => !EXCLUDED_PUBLIC_ROUTES.has(route.path));

  fs.writeFileSync(SITEMAP_FILE, buildSitemapXml(routes));
  updateReactSnapInclude(routes.map((route) => route.path));

  console.log(
    `Generated sitemap for ${routes.length} routes from ${toPosixPath(path.relative(ROOT_DIR, APP_FILE))}`
  );
}

main();
