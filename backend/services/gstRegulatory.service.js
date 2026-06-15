const acts = require("../data/regulatory/gst/acts");
const rules = require("../data/regulatory/gst/rules");
const forms = require("../data/regulatory/gst/forms");
const notifications = require("../data/regulatory/gst/notifications");
const circulars = require("../data/regulatory/gst/circulars");
const instructions = require("../data/regulatory/gst/instructions");
const orders = require("../data/regulatory/gst/orders");

const gstData = {
  acts,
  rules,
  forms,
  notifications,
  circulars,
  instructions,
  orders,
};

function getGstDataByType(type) {
  if (!Object.prototype.hasOwnProperty.call(gstData, type) || type === "notifications") {
    throw new Error(`Unknown GST type: ${type}`);
  }

  return gstData[type];
}

function getNotificationsByCategory(category) {
  if (!Object.prototype.hasOwnProperty.call(gstData.notifications, category)) {
    throw new Error(`Unknown GST notification category: ${category}`);
  }

  return gstData.notifications[category];
}

function getAmendmentHistory(documentName) {
  const document = acts.find((item) => item.act === documentName);
  return document?.amendmentHistory || [];
}

function getAllGstData() {
  return {
    success: true,
    lastUpdated: new Date().toISOString(),
    data: gstData,
  };
}

module.exports = {
  getAllGstData,
  getAmendmentHistory,
  getGstDataByType,
  getNotificationsByCategory,
};

