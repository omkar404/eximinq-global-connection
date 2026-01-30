export default function calculateDuty(hsnCode, value, currency, db) {
  const exchange = { USD: 83.5, EUR: 90, GBP: 105, INR: 1 };
  const baseValueINR = Number(value) * (exchange[currency] || 1);

  const clean = hsnCode.replace(/\s/g, "");
  const match =
    db.find((x) => x.hsn === clean) ||
    db.find((x) => x.hsn.startsWith(clean.substring(0, 4)));

  const bcdRate = match?.bcd ?? 10;
  const aidcRate = match?.aidc ?? 0;
  const swsRate = 10;
  const igstRate = 18;

  const bcd = baseValueINR * (bcdRate / 100);
  const aidc = baseValueINR * (aidcRate / 100);
  const sws = bcd * (swsRate / 100);
  const igst = (baseValueINR + bcd + aidc + sws) * (igstRate / 100);

  const totalDuty = bcd + aidc + sws + igst;
  const landedCost = baseValueINR + totalDuty;

  return {
    desc: match?.desc || "Standard Rate Applied",
    baseValue: baseValueINR,
    bcd,
    aidc,
    sws,
    igst,
    totalDuty,
    landedCost,
    rates: { bcd: bcdRate, aidc: aidcRate, sws: swsRate, igst: igstRate },
  };
}
