import React from "react";

const formatINR = (val) =>
  new Intl.NumberFormat("en-IN", { style: "currency", currency: "INR" }).format(val);

const DutyResult = ({ result }) => {
  return (
    <div className="mt-6 p-4 border-t text-sm">

      <h4 className="font-bold text-gray-600 uppercase mb-3">
        Estimated Breakdown
      </h4>

      <div className="space-y-2">
        <Row label="Assessable Value" value={formatINR(result.baseValue)} />
        <Row label={`BCD (${result.rates.bcd}%)`} value={`+ ${formatINR(result.bcd)}`} />
        {result.rates.aidc > 0 && (
          <Row label={`AIDC (${result.rates.aidc}%)`} value={`+ ${formatINR(result.aidc)}`} />
        )}
        <Row label="SWS (10% of BCD)" value={`+ ${formatINR(result.sws)}`} />
        <Row label={`IGST (${result.rates.igst}%)`} value={`+ ${formatINR(result.igst)}`} />

        <div className="p-4 bg-indigo-50 rounded-lg mt-4 flex justify-between">
          <span className="text-indigo-700 font-bold">Total Landed Cost</span>
          <span className="text-indigo-900 font-extrabold text-xl font-mono">
            {formatINR(result.landedCost)}
          </span>
        </div>
      </div>
    </div>
  );
};

const Row = ({ label, value }) => (
  <div className="flex justify-between">
    <span className="text-gray-600">{label}</span>
    <span className="font-mono">{value}</span>
  </div>
);

export default DutyResult;
