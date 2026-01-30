import React, { useState } from "react";
import * as XLSX from "xlsx";

const Invoice = () => {
  const [taxMode, setTaxMode] = useState("INTRA"); // INTRA = CGST/SGST, INTER = IGST
  const TAX_RATE = 0.18;

  const [rows, setRows] = useState([
    { desc: "DGFT Consultancy Services - EPCG License", sac: "998311", qty: 10, rate: 2500 },
    { desc: "LMPC Certification Handling Fees", sac: "998313", qty: 1, rate: 15000 },
  ]);

  // Format 25000 → 25,000.00
  const formatAmount = (num) =>
    num.toLocaleString("en-IN", {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    });

  // Totals calculation (React-safe)
  const totals = (() => {
    const subtotal = rows.reduce((sum, r) => sum + r.qty * r.rate, 0);
    const tax = subtotal * TAX_RATE;
    const grand = subtotal + tax;

    return {
      subtotal: formatAmount(subtotal),
      cgst: formatAmount(tax / 2),
      sgst: formatAmount(tax / 2),
      igst: formatAmount(tax),
      grand: formatAmount(grand),
    };
  })();

  // Proper React Add Row
  const addRow = () => {
    setRows((prev) => [...prev, { desc: "New Item", sac: "", qty: 1, rate: 0 }]);
  };

  // Proper React Remove Row
  const removeRow = (index) => {
    setRows((prev) => prev.filter((_, i) => i !== index));
  };

  // Update QTY or RATE
  const updateRow = (index, field, value) => {
    setRows((prev) =>
      prev.map((row, i) =>
        i === index ? { ...row, [field]: Number(value) || 0 } : row
      )
    );
  };

  // Export Excel
  const exportToExcel = () => {
    const data = [
      ["INVOICE EXPORT"],
      [],
      ["DESCRIPTION", "SAC", "QTY", "RATE", "TOTAL"],
    ];

    rows.forEach((r) =>
      data.push([
        r.desc,
        r.sac,
        r.qty,
        r.rate,
        formatAmount(r.qty * r.rate),
      ])
    );

    data.push([]);
    data.push(["Subtotal", totals.subtotal]);

    if (taxMode === "INTRA") {
      data.push(["CGST", totals.cgst]);
      data.push(["SGST", totals.sgst]);
    } else {
      data.push(["IGST", totals.igst]);
    }

    data.push(["Grand Total", totals.grand]);

    const ws = XLSX.utils.aoa_to_sheet(data);
    ws["!cols"] = [{ wch: 40 }, { wch: 15 }, { wch: 10 }, { wch: 15 }, { wch: 20 }];

    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, "Invoice");
    XLSX.writeFile(wb, "Invoice.xlsx");
  };

  return (
    <div className="bg-gray-100 min-h-screen py-8 px-4 flex flex-col items-center">

      {/* HEADER CONTROLS */}
      <div className="w-full max-w-[210mm] mb-6 flex justify-between items-center no-print">
        <h1 className="text-lg font-bold">Sidebar Invoice</h1>

        <div className="flex gap-3">
          <button
            onClick={() => setTaxMode(taxMode === "INTRA" ? "INTER" : "INTRA")}
            className="bg-white border border-teal-200 text-teal-700 px-4 py-2 rounded-lg text-sm"
          >
            {taxMode === "INTRA" ? "Switch to IGST" : "Switch to CGST/SGST"}
          </button>

          <button
            onClick={exportToExcel}
            className="bg-green-600 text-white px-4 py-2 rounded-lg text-sm"
          >
            Export Excel
          </button>

          <button
            onClick={() => window.print()}
            className="bg-teal-800 text-white px-6 py-2 rounded-lg text-sm"
          >
            Print PDF
          </button>
        </div>
      </div>

      {/* INVOICE BODY */}
      <div className="print-container w-full max-w-[210mm] bg-white shadow-2xl min-h-[297mm] flex">

        {/* LEFT SIDEBAR */}
        <div className="w-[35%] bg-teal-50 p-8 border-r border-teal-100 flex flex-col">

          <div className="mb-10 bg-white p-4 rounded-xl shadow-sm">
            <img src="/LOGO FINAL.jpg" alt="Logo" className="h-14 mx-auto" />
          </div>

          {/* FROM SECTION */}
          <div class="mb-8">
                <h3 class="text-xs font-bold text-teal-800 uppercase tracking-wider mb-3 pb-1 border-b border-teal-200">From</h3>
                <div class="text-sm text-gray-600 space-y-1 editable" contenteditable="true" id="fromDetails">
                    <p class="font-bold text-gray-800 text-lg mb-1">EXIMINQ</p>
                    <p>123 Business Park, Andheri East</p>
                    <p>Mumbai, Maharashtra, 400069</p>
                    <p class="mt-2 text-teal-700 font-medium">ac@eximinq.com</p>
                    <p>+91 74002 96950</p>
                    <p class="mt-2 text-xs">GSTIN: 27AABCT1234K1Z5</p>
                </div>
            </div>

            {/* <!-- To --> */}
            <div class="mb-8">
                <h3 class="text-xs font-bold text-teal-800 uppercase tracking-wider mb-3 pb-1 border-b border-teal-200">Bill To</h3>
                <div class="text-sm text-gray-600 space-y-1 editable" contenteditable="true" id="billToDetails">
                    <p class="font-bold text-gray-800">TechSolutions Pvt Ltd</p>
                    <p>45, IT Park Phase 2</p>
                    <p>Hinjewadi, Pune</p>
                    <p>Maharashtra 411057</p>
                    <p class="mt-1 text-xs">GSTIN: 27XYZDE1234F1Z8</p>
                </div>
            </div>


          {/* BANK DETAILS */}
          <div className="mt-auto bg-teal-100 p-4 rounded-lg border border-teal-200">
            <h3 className="text-xs font-bold text-teal-800 uppercase mb-1">Bank Details</h3>
            <p>Bank: HDFC Bank</p>
            <p>A/c: 502000XXXXXXX</p>
            <p>IFSC: HDFC0000123</p>
            <p>Branch: Andheri East</p>
          </div>
        </div>

        {/* MAIN CONTENT */}
        <div className="w-[65%] p-10 flex flex-col">

          {/* HEADER */}
          <div className="flex justify-between mb-8">
            <div>
              <h1 className="text-5xl font-light text-teal-900">INVOICE</h1>
              <p className="text-sm text-teal-600">Original for Recipient</p>
            </div>
            <div className="text-right">
              <span className="block text-xs font-bold text-gray-400">Invoice No</span>
              <span className="text-lg font-bold">INV-2025-001</span>
            </div>
          </div>

          {/* SUBJECT */}
          <div className="mb-6">
            <span className="text-xs font-bold text-teal-800 uppercase">Subject</span>
            <p className="text-sm text-gray-700 font-medium">
              Professional Services for DGFT Licensing and Export Documentation
            </p>
          </div>

          {/* TABLE */}
          <table className="w-full text-left mb-8">
            <thead>
              <tr className="border-b-2 border-teal-900">
                <th className="py-2 text-xs font-bold uppercase">Description</th>
                <th className="py-2 text-xs font-bold uppercase text-center">SAC</th>
                <th className="py-2 text-xs font-bold uppercase text-right">Qty</th>
                <th className="py-2 text-xs font-bold uppercase text-right">Rate</th>
                <th className="py-2 text-xs font-bold uppercase text-right">Total</th>
                <th className="w-8 no-print"></th>
              </tr>
            </thead>

            <tbody>
              {rows.map((row, i) => (
                <tr key={i} className="border-b">
                  <td className="py-3">{row.desc}</td>
                  <td className="py-3 text-center">{row.sac}</td>

                  <td className="py-3 text-right">
                    <input
                      type="number"
                      value={row.qty}
                      onChange={(e) => updateRow(i, "qty", e.target.value)}
                      className="w-16 text-right bg-gray-50 border rounded px-1"
                    />
                  </td>

                  <td className="py-3 text-right">
                    <input
                      type="number"
                      value={row.rate}
                      onChange={(e) => updateRow(i, "rate", e.target.value)}
                      className="w-20 text-right bg-gray-50 border rounded px-1"
                    />
                  </td>

                  <td className="py-3 text-right font-medium">
                    {formatAmount(row.qty * row.rate)}
                  </td>

                  <td className="text-center no-print">
                    <button onClick={() => removeRow(i)} className="text-red-600">×</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          <button
            onClick={addRow}
            className="text-xs text-teal-700 font-bold no-print"
          >
            + Add Item
          </button>

          {/* TOTALS */}
          <div className="mt-8 border-t pt-8 flex justify-between">

            <div></div>

            <div className="w-1/2 space-y-2">
              <div className="flex justify-between">
                <span>Subtotal</span>
                <span>{totals.subtotal}</span>
              </div>

              {taxMode === "INTRA" ? (
                <>
                  <div className="flex justify-between">
                    <span>CGST (9%)</span>
                    <span>{totals.cgst}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>SGST (9%)</span>
                    <span>{totals.sgst}</span>
                  </div>
                </>
              ) : (
                <div className="flex justify-between">
                  <span>IGST (18%)</span>
                  <span>{totals.igst}</span>
                </div>
              )}

              <div className="flex justify-between text-xl font-bold text-teal-900 border-t pt-3 mt-3">
                <span>Total</span>
                <span>{totals.grand}</span>
              </div>

              {/* Stamp + Signature */}
              <div className="relative w-40 h-20 mt-4">
                <img
                  src="/image_5e6f8a.png"
                  alt="Stamp"
                  className="absolute top-0 right-0 h-20 opacity-80 -rotate-12"
                />
                <img
                  src="/image_5e7326.png"
                  alt="Signature"
                  className="absolute bottom-1 right-2 h-12 z-10"
                />
              </div>

              <p className="text-[10px] font-bold text-gray-400 uppercase">
                Authorized Signatory
              </p>
            </div>
          </div>

        </div>
      </div>

    </div>
  );
};

export default Invoice;
