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
  'href="https://eximinq.in/advance-authorization-redemption/"',
  "ANF 4F",
];

const browserCandidates =
  process.platform === "darwin"
    ? [
        "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome",
        "/Applications/Chromium.app/Contents/MacOS/Chromium",
      ]
    : [
        "/usr/bin/google-chrome",
        "/usr/bin/google-chrome-stable",
        "/usr/bin/chromium",
        "/usr/bin/chromium-browser",
      ];

const browserPath =
  process.env.PUPPETEER_EXECUTABLE_PATH ||
  browserCandidates.find((candidate) => fs.existsSync(candidate));

if (!browserPath) {
  console.error(
    "Chrome or Chromium was not found. Install Google Chrome or set PUPPETEER_EXECUTABLE_PATH before running the build."
  );
  process.exit(1);
}

const reactSnapCli = require.resolve("react-snap/run.js");
const reactSnap = spawnSync(process.execPath, [reactSnapCli], {
  cwd: ROOT_DIR,
  stdio: "inherit",
  env: {
    ...process.env,
    PUPPETEER_EXECUTABLE_PATH: browserPath,
    PUPPETEER_SKIP_CHROMIUM_DOWNLOAD: "true",
  },
});

if (reactSnap.error) {
  console.error(`Unable to start react-snap: ${reactSnap.error.message}`);
  process.exit(1);
}

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
