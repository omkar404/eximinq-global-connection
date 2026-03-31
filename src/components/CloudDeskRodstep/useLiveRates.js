import { useState, useMemo } from "react";

/* =======================
   SLAB MASTER (SOURCE OF TRUTH)
======================= */
const SLABS = [
  {
    label: "₹15,00,000 & above",
    min: 1500000,
    max: null,
    rates: {
      rodtep: { buy: 98.05, sell: 98.85 },
      rosctl: { buy: 97.95, sell: 98.55 },
    },
  },
  {
    label: "₹10,00,000 – ₹14,99,999",
    min: 1000000,
    max: 1499999,
    rates: {
      rodtep: { buy: 97.40, sell: 98.60 },
      rosctl: { buy: 97.30, sell: 98.30 },
    },
  },
  {
    label: "₹5,00,000 – ₹9,99,999",
    min: 500000,
    max: 999999,
    rates: {
      rodtep: { buy: 96.75, sell: 98.35 },
      rosctl: { buy: 96.65, sell: 98.05 },
    },
  },
  {
    label: "₹1,00,000 – ₹4,99,999",
    min: 100000,
    max: 499999,
    rates: {
      rodtep: { buy: 96.10, sell: 98.10 },
      rosctl: { buy: 96.00, sell: 97.80 },
    },
  },
  {
    label: "₹10,000 – ₹99,999",
    min: 10000,
    max: 99999,
    rates: {
      rodtep: { buy: 95.45, sell: 97.85 },
      rosctl: { buy: 95.35, sell: 97.55 },
    },
  },
];

/* =======================
   HELPERS
======================= */
const getSlabByAmount = (amount) =>
  SLABS.find(
    (s) => amount >= s.min && (s.max === null || amount <= s.max)
  );

const getAppliedRate = (rates, calcType) => {
  // USER LOGIC (IMPORTANT)
  // calcType === "sell" → user sells → WE BUY
  // calcType === "buy"  → user buys  → WE SELL
  return calcType === "sell" ? rates.buy : rates.sell;
};

/* =======================
   HOOK
======================= */
const useLiveRates = () => {
  const [calcAmount, setCalcAmount] = useState(100000);
  const [calcType, setCalcType] = useState("sell"); // buy | sell
  const [calcScheme, setCalcScheme] = useState("rodtep"); // rodtep | rosctl

  const selectedSlab = useMemo(
    () => getSlabByAmount(calcAmount),
    [calcAmount]
  );

  const appliedRate = useMemo(() => {
    if (!selectedSlab) return 0;
    return getAppliedRate(
      selectedSlab.rates[calcScheme],
      calcType
    );
  }, [selectedSlab, calcScheme, calcType]);

  const calculateTotal = () => {
    if (!appliedRate || !calcAmount) return "₹0";
    return (calcAmount * (appliedRate / 100)).toLocaleString(
      "en-IN",
      {
        style: "currency",
        currency: "INR",
        maximumFractionDigits: 0,
      }
    );
  };

  return {
    // for UI display (top slab only)
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





