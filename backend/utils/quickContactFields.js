function cleanString(value) {
  return typeof value === "string" ? value.trim() : "";
}

function normalizeQuickContactFields(recordData, body) {
  const companyName = cleanString(body.companyName);
  const contactPersonName =
    cleanString(body.contactPersonName) || cleanString(body.personName);
  const email = cleanString(body.email).toLowerCase();

  recordData.companyName = recordData.companyName || companyName || null;
  recordData.contactPersonName =
    recordData.contactPersonName || contactPersonName || null;
  recordData.personName = recordData.personName || contactPersonName || null;
  recordData.email = recordData.email || email || null;

  return recordData;
}

module.exports = { normalizeQuickContactFields };
