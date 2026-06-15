export const SLABS = [
  {
    label: "Rs 15,00,001 and above",
    min: 1500001,
    max: null,
    rates: {
      rodtep: { buy: 97.25, sell: 99.05 },
      rosctl: { buy: 97.15, sell: 98.75 },
    },
  },
  {
    label: "Rs 10,00,001 to Rs 15,00,000",
    min: 1000001,
    max: 1500000,
    rates: {
      rodtep: { buy: 96.6, sell: 98.8 },
      rosctl: { buy: 96.5, sell: 98.5 },
    },
  },
  {
    label: "Rs 5,00,001 to Rs 10,00,000",
    min: 500001,
    max: 1000000,
    rates: {
      rodtep: { buy: 95.95, sell: 98.55 },
      rosctl: { buy: 95.85, sell: 98.25 },
    },
  },
  {
    label: "Rs 1,00,001 to Rs 5,00,000",
    min: 100001,
    max: 500000,
    rates: {
      rodtep: { buy: 95.3, sell: 98.3 },
      rosctl: { buy: 95.0, sell: 98.0 },
    },
  },
  {
    label: "Rs 10,001 to Rs 1,00,000",
    min: 10001,
    max: 100000,
    rates: {
      rodtep: { buy: 93.75, sell: 98.05 },
      rosctl: { buy: 93.6, sell: 97.75 },
    },
  },
  {
    label: "Rs 5,001 to Rs 10,000",
    min: 5001,
    max: 10000,
    rates: {
      rodtep: { buy: 75.5, sell: 85.25 },
      rosctl: { buy: 74.25, sell: 85.15 },
    },
  },
  {
    label: "Below Rs 5,000",
    min: 0,
    max: 5000,
    rates: {
      rodtep: { buy: 50.0, sell: 75.0 },
      rosctl: { buy: 50.0, sell: 75.0 },
    },
  },
];

export const getSlabByAmount = (amount) =>
  SLABS.find((slab) => amount >= slab.min && (slab.max === null || amount <= slab.max));

export const getDisplayLabel = (slab) => slab?.label ?? "Below Rs 5,000";
