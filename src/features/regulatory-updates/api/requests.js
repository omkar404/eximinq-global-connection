import { DGFT_FTP_TABS } from "../config/dgft";
import { CBIC_TAB_CONFIG } from "../config/cbic";
import { GST_TAB_CONFIG } from "../config/gst";
import { getRegulatoryApiBase } from "../utils/apiBase";

export const SNAPSHOT_EVENT = "regulatory-updates:snapshot-ready";

function getAuthorityTabConfig(authority, tabKey) {
  if (authority === "gst") return GST_TAB_CONFIG[tabKey] || GST_TAB_CONFIG.acts;
  if (authority === "customs") return CBIC_TAB_CONFIG[tabKey] || CBIC_TAB_CONFIG.acts;
  return null;
}

function applyClientFilter(items, clientFilter) {
  if (!clientFilter) return items;

  const acceptedValues = new Set((clientFilter.values || []).map((value) => String(value).toLowerCase()));
  return items.filter((item) =>
    acceptedValues.has(String(item?.[clientFilter.field] || "").toLowerCase())
  );
}

export function getRequestUrl(authority, tabKey) {
  const apiBase = getRegulatoryApiBase();

  if (authority === "dgft") {
    if (DGFT_FTP_TABS.has(tabKey)) {
      return `${apiBase}/api/ftp/data/${tabKey}`;
    }

    return `${apiBase}/api/dgft/notices?type=${tabKey}`;
  }

  if (authority === "gst") {
    const tabConfig = getAuthorityTabConfig(authority, tabKey);
    return tabConfig.notificationCategory
      ? `${apiBase}/api/gst/notifications/category/${tabConfig.notificationCategory}`
      : `${apiBase}/api/gst/${tabConfig.apiType}`;
  }

  const tabConfig = getAuthorityTabConfig(authority, tabKey);
  return tabConfig.notificationCategory
    ? `${apiBase}/api/customs/notifications/category/${tabConfig.notificationCategory}`
    : `${apiBase}/api/customs/${tabConfig.apiType}`;
}

export async function fetchRegulatoryData(authority, tabKey) {
  const response = await fetch(getRequestUrl(authority, tabKey), {
    cache: "no-store",
    headers: { "Content-Type": "application/json" },
  });
  const payload = await response.json();

  if (!response.ok || !payload.success) {
    throw new Error(payload.message || `Failed to fetch ${authority.toUpperCase()} data`);
  }

  if (authority === "dgft" && !DGFT_FTP_TABS.has(tabKey)) {
    return Array.isArray(payload.data)
      ? payload.data.filter((item) => item.type === tabKey)
      : [];
  }

  const items = Array.isArray(payload.data) ? payload.data : [];
  const tabConfig = getAuthorityTabConfig(authority, tabKey);
  return applyClientFilter(items, tabConfig?.clientFilter);
}

async function fetchGstLegalEndpoint(type, path) {
  const apiBase = getRegulatoryApiBase();
  const response = await fetch(`${apiBase}/api/gst/${type}/${path}`, {
    cache: "no-store",
    headers: { "Content-Type": "application/json" },
  });
  const payload = await response.json();

  if (!response.ok || !payload.success) {
    throw new Error(payload.message || `Failed to fetch GST ${type}`);
  }

  return payload.data;
}

export function fetchGstActsCatalog() {
  return fetchGstLegalEndpoint("acts", "catalog");
}

export function fetchGstActDetail(actId) {
  return fetchGstLegalEndpoint("acts", encodeURIComponent(actId));
}

export function fetchGstRulesCatalog() {
  return fetchGstLegalEndpoint("rules", "catalog");
}

export function fetchGstRuleDetail(ruleId) {
  return fetchGstLegalEndpoint("rules", encodeURIComponent(ruleId));
}
