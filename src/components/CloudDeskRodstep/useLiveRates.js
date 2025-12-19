import { useEffect, useState } from "react";

const useLiveRates = () => {
  // Calculator state
  const [calcAmount, setCalcAmount] = useState(100000);
  const [calcType, setCalcType] = useState("sell"); // buy | sell
  const [calcScheme, setCalcScheme] = useState("rodtep"); // rodtep | rosctl

  // Live rates state
  const [rates, setRates] = useState({
    rodtep: { buy: 98.25, sell: 98.85 },
    rosctl: { buy: 98.1, sell: 98.7 },
  });

  /**
   * Simulate live market movement
   * NOTE:
   * This belongs in a hook, not a component.
   */
  useEffect(() => {
    const interval = setInterval(() => {
      setRates((prev) => ({
        rodtep: {
          buy: adjustRate(prev.rodtep.buy),
          sell: adjustRate(prev.rodtep.sell),
        },
        rosctl: {
          buy: adjustRate(prev.rosctl.buy),
          sell: adjustRate(prev.rosctl.sell),
        },
      }));
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  /**
   * Calculator output
   */
  const calculateTotal = () => {
    const rate = rates[calcScheme][calcType];
    return (calcAmount * (rate / 100)).toLocaleString("en-IN", {
      style: "currency",
      currency: "INR",
      maximumFractionDigits: 0,
    });
  };

  return {
    rates,
    calcAmount,
    setCalcAmount,
    calcType,
    setCalcType,
    calcScheme,
    setCalcScheme,
    calculateTotal,
  };
};

/**
 * Small helper — keeps hook readable
 */
const adjustRate = (current) => {
  const delta = Math.random() * 0.04 - 0.02; // ±0.02
  return +(current + delta).toFixed(2);
};

export default useLiveRates;
