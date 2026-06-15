import { useMemo, useState } from "react";
import { getSlabByAmount, SLABS } from "./slabs";

const getAppliedRate = (rates, calcType) => {
  return calcType === "buy" ? rates.buy : rates.sell;
};

const formatCurrency = (amount) => {
  if (!Number.isFinite(amount) || amount <= 0) {
    return "Rs 0";
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
  const [calcType, setCalcType] = useState("buy");
  const [calcScheme, setCalcScheme] = useState("rodtep");
  const [buyRows, setBuyRows] = useState([
    { id: 1, scripNo: "", scripDate: "", port: "", scripValue: 127000 },
  ]);

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

  const getRowRate = (scripValue) => {
    const slab = getSlabByAmount(Number(scripValue) || 0);
    if (!slab) return 0;
    return slab.rates[calcScheme].buy;
  };

  const getRowComputedValue = (scripValue) => {
    const numericValue = Number(scripValue) || 0;
    return (numericValue * getRowRate(numericValue)) / 100;
  };

  const buySummary = useMemo(() => {
    const totalFaceValue = buyRows.reduce((sum, row) => sum + (Number(row.scripValue) || 0), 0);
    const totalQuoteValue = buyRows.reduce((sum, row) => sum + getRowComputedValue(row.scripValue), 0);

    return {
      totalFaceValue,
      totalQuoteValue,
    };
  }, [buyRows, calcScheme]);

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
    buyRows,
    setBuyRows,
    getRowRate,
    getRowComputedValue,
    buySummary,
    formatCurrency,
  };
};

export default useLiveRates;
