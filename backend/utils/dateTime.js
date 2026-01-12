// src/utils/dateTime.js

const TIME_ZONE = "Asia/Kolkata";

/**
 * Get current IST Date object
 */
const getISTDate = () => {
  return new Date(
    new Date().toLocaleString("en-US", { timeZone: TIME_ZONE })
  );
};

/**
 * Get formatted IST time (12-hour)
 */
const getISTTime = () => {
  return new Date().toLocaleTimeString("en-IN", {
    timeZone: TIME_ZONE,
    hour: "2-digit",
    minute: "2-digit",
    hour12: true,
  });
};

/**
 * Get formatted IST date
 * Example: Wednesday, 7 January 2026
 */
const getISTDateString = () => {
  return new Date().toLocaleDateString("en-IN", {
    timeZone: TIME_ZONE,
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  });
};

/**
 * Get full IST timestamp (DB / logs)
 * Example: 2026-01-07T12:00:00
 */
const getISTTimestamp = () => {
  return new Date()
    .toLocaleString("sv-SE", { timeZone: TIME_ZONE })
    .replace(" ", "T");
};

module.exports = {
  getISTDate,
  getISTTime,
  getISTDateString,
  getISTTimestamp,
};
