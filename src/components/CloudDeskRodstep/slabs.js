export const SLABS = [
  {
    label: "Rs 15,00,000 and above",
    min: 1500000,
    max: null,
    rates: {
      rodtep: { buy: 97.25, sell: 99.05 },
      rosctl: { buy: 97.15, sell: 98.75 },
    },
  },
  {
    label: "Rs 10,00,000 to Rs 14,99,999",
    min: 1000000,
    max: 1499999,
    rates: {
      rodtep: { buy: 96.6, sell: 98.8 },
      rosctl: { buy: 96.5, sell: 98.5 },
    },
  },
  {
    label: "Rs 5,00,000 to Rs 9,99,999",
    min: 500000,
    max: 999999,
    rates: {
      rodtep: { buy: 95.95, sell: 98.55 },
      rosctl: { buy: 95.85, sell: 98.25 },
    },
  },
  {
    label: "Rs 1,00,000 to Rs 4,99,999",
    min: 100000,
    max: 499999,
    rates: {
      rodtep: { buy: 95.3, sell: 98.3 },
      rosctl: { buy: 95.2, sell: 98.0 },
    },
  },
  {
    label: "Rs 10,000 to Rs 99,999",
    min: 10000,
    max: 99999,
    rates: {
      rodtep: { buy: 94.65, sell: 98.05 },
      rosctl: { buy: 94.55, sell: 97.75 },
    },
  },
];

export const getSlabByAmount = (amount) =>
  SLABS.find((slab) => amount >= slab.min && (slab.max === null || amount <= slab.max));

export const getDisplayLabel = (slab) => slab?.label ?? "Rs 10,000 to Rs 99,999";
