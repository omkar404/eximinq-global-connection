export const SLABS = [
  {
    label: "Rs 15,00,000 and above",
    min: 1500000,
    max: null,
    rates: {
      rodtep: { buy: 98.0, sell: 98.9 },
      rosctl: { buy: 97.9, sell: 98.6 },
    },
  },
  {
    label: "Rs 10,00,000 to Rs 14,99,999",
    min: 1000000,
    max: 1499999,
    rates: {
      rodtep: { buy: 97.35, sell: 98.65 },
      rosctl: { buy: 97.25, sell: 98.35 },
    },
  },
  {
    label: "Rs 5,00,000 to Rs 9,99,999",
    min: 500000,
    max: 999999,
    rates: {
      rodtep: { buy: 96.7, sell: 98.4 },
      rosctl: { buy: 96.6, sell: 98.1 },
    },
  },
  {
    label: "Rs 1,00,000 to Rs 4,99,999",
    min: 100000,
    max: 499999,
    rates: {
      rodtep: { buy: 96.05, sell: 98.15 },
      rosctl: { buy: 95.95, sell: 97.85 },
    },
  },
  {
    label: "Rs 10,000 to Rs 99,999",
    min: 10000,
    max: 99999,
    rates: {
      rodtep: { buy: 95.4, sell: 97.9 },
      rosctl: { buy: 95.3, sell: 97.6 },
    },
  },
];

export const getSlabByAmount = (amount) =>
  SLABS.find((slab) => amount >= slab.min && (slab.max === null || amount <= slab.max));

export const getDisplayLabel = (slab) => slab?.label ?? "Rs 10,000 to Rs 99,999";
