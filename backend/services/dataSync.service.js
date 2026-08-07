const chokidar = require("chokidar");
const fs = require("fs");
const path = require("path");

const DATA_ROOT = path.join(__dirname, "../PDF_DOC");
const SUPPORTED_FILE_PATTERN = /\.(?:xlsx?|xls|csv|json|pdf)$/i;

let revision = 1;
let lastChangedAt = new Date().toISOString();
let lastChange = null;
let watcher = null;

function isSupportedFile(filePath) {
  const fileName = path.basename(filePath || "");
  return SUPPORTED_FILE_PATTERN.test(fileName) && !fileName.startsWith("~$") && !fileName.startsWith("._");
}

function markChanged(event, filePath) {
  if (!isSupportedFile(filePath)) return;

  revision += 1;
  lastChangedAt = new Date().toISOString();
  lastChange = {
    event,
    file: path.relative(DATA_ROOT, filePath).split(path.sep).join("/"),
  };
  console.log(`[data-sync] ${event}: ${lastChange.file} (revision ${revision})`);
}

function startDataSyncWatcher() {
  if (watcher) return watcher;

  fs.mkdirSync(DATA_ROOT, { recursive: true });
  watcher = chokidar.watch(DATA_ROOT, {
    persistent: true,
    ignoreInitial: true,
    depth: 12,
    awaitWriteFinish: { stabilityThreshold: 1000, pollInterval: 100 },
  });

  ["add", "change", "unlink"].forEach((event) => {
    watcher.on(event, (filePath) => markChanged(event, filePath));
  });
  watcher.on("error", (error) => console.error("[data-sync] watcher error:", error.message));
  return watcher;
}

function getDataSyncStatus() {
  return {
    success: true,
    revision,
    lastChangedAt,
    lastChange,
  };
}

module.exports = {
  getDataSyncStatus,
  startDataSyncWatcher,
};
