const fs = require("fs");
const path = require("path");

const pdfFileCache = new Map();

function normalizeText(value) {
  return String(value || "")
    .toLowerCase()
    .replace(/&/g, "and")
    .replace(/[()]/g, " ")
    .replace(/[^a-z0-9]+/g, "");
}

function listPdfFilesRecursive(baseFolder) {
  if (!baseFolder || !fs.existsSync(baseFolder)) return [];

  if (pdfFileCache.has(baseFolder)) {
    return pdfFileCache.get(baseFolder);
  }

  const results = [];

  function walk(currentFolder) {
    const entries = fs.readdirSync(currentFolder, { withFileTypes: true });
    entries.forEach((entry) => {
      const entryPath = path.join(currentFolder, entry.name);
      if (entry.isDirectory()) {
        walk(entryPath);
        return;
      }

      if (!entry.name.startsWith("._") && path.extname(entry.name).toLowerCase() === ".pdf") {
        results.push(entryPath);
      }
    });
  }

  walk(baseFolder);
  pdfFileCache.set(baseFolder, results);
  return results;
}

function clearPdfCache(baseFolder) {
  if (baseFolder) {
    pdfFileCache.delete(baseFolder);
    return;
  }

  pdfFileCache.clear();
}

function buildPdfDownloadUrl(routePath, baseFolder, filePath) {
  if (!routePath || !baseFolder || !filePath) return null;

  const relativePath = path.relative(baseFolder, filePath);
  if (!relativePath || relativePath.startsWith("..")) return null;

  return `${routePath}?file=${encodeURIComponent(relativePath.split(path.sep).join("/"))}`;
}

function resolvePdfDownloadPath(baseFolder, relativeFilePath) {
  if (!baseFolder || !relativeFilePath) return null;

  const decodedPath = decodeURIComponent(String(relativeFilePath));
  const normalizedRelativePath = decodedPath.replace(/\//g, path.sep);
  const absolutePath = path.resolve(baseFolder, normalizedRelativePath);
  const normalizedBasePath = path.resolve(baseFolder);

  if (!absolutePath.startsWith(normalizedBasePath)) return null;
  if (!fs.existsSync(absolutePath)) return null;

  return absolutePath;
}

function buildCandidateList(values) {
  const candidates = [];

  values.filter(Boolean).forEach((value) => {
    const text = String(value).trim();
    if (!text) return;

    candidates.push(text);
    candidates.push(text.replace(/\//g, "-"));
    candidates.push(text.replace(/\//g, " "));
    candidates.push(text.replace(/-/g, " "));
  });

  return [...new Set(candidates.filter(Boolean))];
}

function findBestPdfMatch(baseFolder, values, options = {}) {
  const candidates = buildCandidateList(Array.isArray(values) ? values : [values]);
  if (!candidates.length) return null;

  const pathHints = (options.pathHints || []).map(normalizeText).filter(Boolean);
  const pdfFiles = listPdfFilesRecursive(baseFolder);

  let scopedFiles = pdfFiles;
  if (pathHints.length) {
    scopedFiles = pdfFiles.filter((filePath) => {
      const normalizedRelativePath = normalizeText(path.relative(baseFolder, filePath));
      return pathHints.every((hint) => normalizedRelativePath.includes(hint));
    });
  }

  if (!scopedFiles.length) scopedFiles = pdfFiles;

  const normalizedCandidates = candidates.map(normalizeText).filter(Boolean);
  if (!normalizedCandidates.length) return null;

  const exactMatch = scopedFiles.find((filePath) => {
    const normalizedName = normalizeText(path.parse(filePath).name);
    return normalizedCandidates.includes(normalizedName);
  });
  if (exactMatch) return exactMatch;

  const containsMatch = scopedFiles.find((filePath) => {
    const normalizedName = normalizeText(path.parse(filePath).name);
    return normalizedCandidates.some(
      (candidate) =>
        normalizedName.includes(candidate) || candidate.includes(normalizedName)
    );
  });
  if (containsMatch) return containsMatch;

  const pathContainsMatch = scopedFiles.find((filePath) => {
    const normalizedRelativePath = normalizeText(path.relative(baseFolder, filePath));
    return normalizedCandidates.some(
      (candidate) =>
        normalizedRelativePath.includes(candidate) || candidate.includes(normalizedRelativePath)
    );
  });

  return pathContainsMatch || null;
}

module.exports = {
  normalizeText,
  listPdfFilesRecursive,
  clearPdfCache,
  buildPdfDownloadUrl,
  resolvePdfDownloadPath,
  findBestPdfMatch,
};
