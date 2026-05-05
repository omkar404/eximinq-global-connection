import { useMemo, useState } from "react";

const SLABS = [
  {
    label: "Rs 15,00,000 and above",
    min: 1500000,
    max: null,
    rates: {
      rodtep: { buy: 98.05, sell: 98.85 },
      rosctl: { buy: 97.95, sell: 98.55 },
    },
  },
  {
    label: "Rs 10,00,000 to Rs 14,99,999",
    min: 1000000,
    max: 1499999,
    rates: {
      rodtep: { buy: 97.4, sell: 98.6 },
      rosctl: { buy: 97.3, sell: 98.3 },
    },
  },
  {
    label: "Rs 5,00,000 to Rs 9,99,999",
    min: 500000,
    max: 999999,
    rates: {
      rodtep: { buy: 96.75, sell: 98.35 },
      rosctl: { buy: 96.65, sell: 98.05 },
    },
  },
  {
    label: "Rs 1,00,000 to Rs 4,99,999",
    min: 100000,
    max: 499999,
    rates: {
      rodtep: { buy: 96.1, sell: 98.1 },
      rosctl: { buy: 96.0, sell: 97.8 },
    },
  },
  {
    label: "Rs 10,000 to Rs 99,999",
    min: 10000,
    max: 99999,
    rates: {
      rodtep: { buy: 95.45, sell: 97.85 },
      rosctl: { buy: 95.35, sell: 97.55 },
    },
  },
];

const getSlabByAmount = (amount) =>
  SLABS.find((slab) => amount >= slab.min && (slab.max === null || amount <= slab.max));

const getAppliedRate = (rates, calcType) => {
  return calcType === "sell" ? rates.buy : rates.sell;
};

const formatCurrency = (amount) => {
  if (!Number.isFinite(amount) || amount <= 0) {
    return "₹0";
  }

  return new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(amount);
};

const useLiveRates = () => {
  const [calcAmount, setCalcAmount] = useState(100000);
  const [calcType, setCalcType] = useState("sell");
  const [calcScheme, setCalcScheme] = useState("rodtep");

  const selectedSlab = useMemo(() => getSlabByAmount(Number(calcAmount) || 0), [calcAmount]);

  const appliedRate = useMemo(() => {
    if (!selectedSlab) {
      return 0;
    }

    return getAppliedRate(selectedSlab.rates[calcScheme], calcType);
  }, [calcScheme, calcType, selectedSlab]);

  const calculateTotal = () => {
    const total = Number(calcAmount) * (Number(appliedRate) / 100);
    return formatCurrency(total);
  };

  return {
    rates: SLABS[0].rates,
    calcAmount,
    setCalcAmount,
    calcType,
    setCalcType,
    calcScheme,
    setCalcScheme,
    appliedRate,
    calculateTotal,
  };
};

export default useLiveRates;
