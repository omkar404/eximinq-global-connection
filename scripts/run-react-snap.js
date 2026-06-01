const fs = require("fs");
const path = require("path");
const { spawnSync } = require("child_process");

const ROOT_DIR = path.resolve(__dirname, "..");
const CRITICAL_ROUTE_FILE = path.join(
  ROOT_DIR,
  "build",
  "advance-authorization-redemption",
  "index.html"
);
const REQUIRED_MARKERS = [
  "Advance Authorisation Redemption & EODC Closure | EXIMINQ",
  'href="https://eximinq.in/advance-authorization-redemption"',
  'type="application/ld+json"',
  "ANF 4F",
];

const reactSnap = spawnSync("npx.cmd", ["react-snap"], {
  cwd: ROOT_DIR,
  stdio: "inherit",
  shell: false,
});

if (!fs.existsSync(CRITICAL_ROUTE_FILE)) {
  console.error(
    `Critical prerender missing: ${path.relative(ROOT_DIR, CRITICAL_ROUTE_FILE)}`
  );
  process.exit(reactSnap.status || 1);
}

const html = fs.readFileSync(CRITICAL_ROUTE_FILE, "utf8");
const missingMarkers = REQUIRED_MARKERS.filter((marker) => !html.includes(marker));

if (missingMarkers.length > 0) {
  console.error(
    `Critical prerender incomplete. Missing markers: ${missingMarkers.join(", ")}`
  );
  process.exit(reactSnap.status || 1);
}

if (reactSnap.status !== 0) {
  console.warn(
    "react-snap reported non-critical route errors, but the Advance Authorisation redemption page was prerendered successfully."
  );
}
