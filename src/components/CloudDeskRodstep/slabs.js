export const RATES_AS_OF = "10-08-2026";

export const SLABS = [
  {
    label: "₹15,00,001-Above",
    min: 1500001,
    max: null,
    rates: {
      rodtep: { buy: 98.1, sell: 98.9 },
      rosctl: { buy: 98.0, sell: 98.75 },
    },
  },
  {
    label: "₹10,00,001-₹15,00,000",
    min: 1000001,
    max: 1500000,
    rates: {
      rodtep: { buy: 97.55, sell: 98.45 },
      rosctl: { buy: 97.25, sell: 98.35 },
    },
  },
  {
    label: "₹5,00,001-₹10,00,000",
    min: 500001,
    max: 1000000,
    rates: {
      rodtep: { buy: 97.05, sell: 98.1 },
      rosctl: { buy: 97.0, sell: 98.0 },
    },
  },
  {
    label: "₹1,00,001-₹5,00,000",
    min: 100001,
    max: 500000,
    rates: {
      rodtep: { buy: 96.5, sell: 97.6 },
      rosctl: { buy: 96.15, sell: 97.4 },
    },
  },
  {
    label: "₹10,001-₹1,00,000",
    min: 10001,
    max: 100000,
    rates: {
      rodtep: { buy: 95.1, sell: 97.1 },
      rosctl: { buy: 94.6, sell: 96.95 },
    },
  },
  {
    label: "₹5,001-₹10,000",
    min: 5001,
    max: 10000,
    rates: {
      rodtep: { buy: 90.25, sell: 95.25 },
      rosctl: { buy: 90.05, sell: 95.0 },
    },
  },
  {
    label: "Below ₹5,000",
    min: 0,
    max: 5000,
    rates: {
      rodtep: { buy: 82.5, sell: 92.25 },
      rosctl: { buy: 80.5, sell: 91.0 },
    },
  },
];

export const getSlabByAmount = (amount) =>
  SLABS.find((slab) => amount >= slab.min && (slab.max === null || amount <= slab.max));

export const getDisplayLabel = (slab) => slab?.label ?? "Below ₹5,000";
