import { DGFT_FTP_TABS } from "../config/dgft";
import { CBIC_TAB_CONFIG } from "../config/cbic";
import { GST_TAB_CONFIG } from "../config/gst";
import { getRegulatoryApiBase } from "../utils/apiBase";

export const SNAPSHOT_EVENT = "regulatory-updates:snapshot-ready";
const DATA_SYNC_POLL_INTERVAL = 5000;

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
  const requestUrl = new URL(getRequestUrl(authority, tabKey), window.location.origin);
  requestUrl.searchParams.set("_fresh", Date.now().toString());
  const response = await fetch(requestUrl.toString(), {
    cache: "no-store",
    headers: { Accept: "application/json", "Cache-Control": "no-cache" },
  });
  const contentType = response.headers.get("content-type") || "";
  if (!contentType.includes("application/json")) throw new Error("The regulatory data service returned an invalid response");
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

export function subscribeToDataSync(onChange) {
  const apiBase = getRegulatoryApiBase();
  let lastRevision = null;

  const poll = async () => {
    try {
      const response = await fetch(`${apiBase}/api/data-sync/status?_fresh=${Date.now()}`, {
        cache: "no-store",
        headers: { Accept: "application/json", "Cache-Control": "no-cache" },
      });
      if (!response.ok) return;
      const payload = await response.json();
      if (!payload.success) return;

      if (lastRevision !== null && payload.revision !== lastRevision) onChange(payload);
      lastRevision = payload.revision;
    } catch (_error) {
      // The next poll retries automatically; page data remains usable meanwhile.
    }
  };

  poll();
  const intervalId = window.setInterval(poll, DATA_SYNC_POLL_INTERVAL);
  return () => {
    window.clearInterval(intervalId);
  };
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
