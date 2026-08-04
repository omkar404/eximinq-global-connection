import React, { useEffect, useMemo, useState } from "react";
import {
  ArrowDownToLine,
  ArrowUpFromLine,
  CreditCard,
  Plus,
  Trash2,
  TrendingUp,
} from "lucide-react";
import { getSlabByAmount } from "./slabs";
import InfoSection from "./InfoSection";

const currency = (value) =>
  new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 0,
  }).format(Number(value) || 0);
const rateText = (value) => `${Number(value || 0).toFixed(2)}%`;
const schemeLabel = (scheme) => (scheme === "rosctl" ? "RoSCTL" : "RODTEP");
const getApiBase = () => {
  const raw = (process.env.REACT_APP_API_URL || "").trim().replace(/\/$/, "");
  return !raw || /^https?:\/\/localhost(?::\d+)?$/i.test(raw) ? "" : raw;
};

const readApiResponse = async (response) => {
  const contentType = response.headers.get("content-type") || "";
  if (contentType.includes("application/json")) return response.json();

  return {
    success: false,
    error: response.status === 404
      ? "This form service is not available on the server yet."
      : "The server returned an unexpected response. Please try again.",
  };
};

const Calculator = ({ requestedTrade, onSendQuote }) => (
  <div id="calculator">
    <SellCalculator requestedTrade={requestedTrade} onSendQuote={onSendQuote} />
    <InfoSection />
    <BuyCalculator requestedTrade={requestedTrade} onSendQuote={onSendQuote} />
  </div>
);

function SellCalculator({ requestedTrade, onSendQuote }) {
  const [scheme, setScheme] = useState("rodtep");
  const [rows, setRows] = useState([
    { id: 1, scripNo: "", scripDate: "", port: "", scripValue: 127000 },
  ]);
  const [errors, setErrors] = useState({});

  useEffect(() => {
    if (requestedTrade?.workflow === "sell") setScheme(requestedTrade.scheme);
  }, [requestedTrade]);

  const rowRate = (value) =>
    getSlabByAmount(Number(value) || 0)?.rates?.[scheme]?.buy || 0;
  const rowQuote = (value) => ((Number(value) || 0) * rowRate(value)) / 100;
  const totals = useMemo(
    () =>
      rows.reduce(
        (sum, row) => ({
          face: sum.face + (Number(row.scripValue) || 0),
          quote: sum.quote + rowQuote(row.scripValue),
        }),
        { face: 0, quote: 0 },
      ),
    [rows, scheme],
  );

  const updateRow = (id, field, value) => {
    const nextValue =
      field === "scripNo"
        ? String(value).replace(/\D/g, "").slice(0, 10)
        : value;
    setRows((previous) =>
      previous.map((row) =>
        row.id === id ? { ...row, [field]: nextValue } : row,
      ),
    );
  };

  const submit = () => {
    const nextErrors = {};
    rows.forEach((row, index) => {
      if (
        !/^\d{10}$/.test(row.scripNo) ||
        !row.scripDate ||
        !row.port.trim() ||
        !(Number(row.scripValue) > 0)
      )
        nextErrors[row.id] = `Complete all fields for Scrip Entry ${index + 1}`;
    });
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length) return;
    onSendQuote?.(
      {
        action: "Sell to EXIMINQ",
        scheme: schemeLabel(scheme),
        rows: rows.map((row) => ({
          ...row,
          rate: rowRate(row.scripValue),
          quoteValue: rowQuote(row.scripValue),
        })),
        totalFaceValue: currency(totals.face),
        totalQuoteValue: currency(totals.quote),
      },
      "sell",
    );
  };

  return (
    <section
      id="sell-calculator"
      className="relative overflow-hidden bg-blue-900 py-20 text-white"
    >
      <div className="absolute right-0 top-0 h-full w-1/2 translate-x-20 -skew-x-12 bg-blue-800/30" />
      <div className="relative z-10 mx-auto grid max-w-[1500px] items-start gap-12 px-4 sm:px-6 lg:grid-cols-[0.8fr_1.4fr] lg:px-8">
        <CalculatorIntro
          icon={ArrowDownToLine}
          eyebrow="Dedicated seller workflow"
          title="Sell Scrips to EXIMINQ"
          text="Enter the exact scrips in your ICEGATE ledger and receive an estimated payout before official verification."
        />
        <div className="rounded-[2rem] border border-white/50 bg-white/95 p-6 text-slate-800 shadow-2xl sm:p-8">
          <SchemeSelector scheme={scheme} setScheme={setScheme} accent="blue" />
          <div className="mt-6 space-y-4">
            {rows.map((row, index) => (
              <SellRow
                key={row.id}
                row={row}
                index={index}
                error={errors[row.id]}
                updateRow={updateRow}
                rate={rowRate(row.scripValue)}
                quote={rowQuote(row.scripValue)}
                remove={() =>
                  setRows((previous) =>
                    previous.length === 1
                      ? previous
                      : previous.filter((item) => item.id !== row.id),
                  )
                }
              />
            ))}
          </div>
          <div className="mt-5 grid gap-3 rounded-2xl bg-slate-100 p-4 sm:grid-cols-2">
            <Total label="Total Face Value" value={currency(totals.face)} />
            <Total
              label="Estimated Payout"
              value={currency(totals.quote)}
              featured
            />
          </div>
          <div className="mt-5 flex flex-col gap-3 sm:flex-row sm:justify-between">
            <button
              type="button"
              onClick={() =>
                setRows((previous) => [
                  ...previous,
                  {
                    id: Date.now(),
                    scripNo: "",
                    scripDate: "",
                    port: "",
                    scripValue: "",
                  },
                ])
              }
              className="inline-flex items-center justify-center gap-2 rounded-xl border border-blue-200 bg-blue-50 px-5 py-3 font-semibold text-blue-700"
            >
              <Plus size={16} /> Add Another Scrip
            </button>
            <button
              type="button"
              onClick={submit}
              className="rounded-xl bg-slate-900 px-6 py-3.5 font-semibold text-white"
            >
              Continue to Sell Request
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

function BuyCalculator({ requestedTrade }) {
  const [scheme, setScheme] = useState("rodtep");
  const [form, setForm] = useState({
    name: "",
    companyName: "",
    mobile: "",
    email: "",
    requiredValue: "",
  });
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState(null);

  useEffect(() => {
    if (requestedTrade?.workflow === "buy") setScheme(requestedTrade.scheme);
  }, [requestedTrade]);

  const updateForm = (event) => {
    const { name, value } = event.target;
    setForm((previous) => ({ ...previous, [name]: value }));
  };

  const submit = async (event) => {
    event.preventDefault();
    const nextErrors = {};
    if (!form.name.trim()) nextErrors.name = "Contact name is required";
    if (!form.companyName.trim())
      nextErrors.companyName = "Company name is required";
    if (String(form.mobile).replace(/\D/g, "").length < 10)
      nextErrors.mobile = "Enter a valid mobile number";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim()))
      nextErrors.email = "Enter a valid email address";
    if (!(Number(form.requiredValue) > 0))
      nextErrors.requiredValue =
        "Required face value must be greater than zero";
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length) return;

    setLoading(true);
    setResult(null);
    try {
      const requestBody = { ...form, scheme: schemeLabel(scheme) };
      let response = await fetch(
        `${getApiBase()}/api/rodtep-rosctl-trading/buy-request`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(requestBody),
        },
      );

      // Production may briefly run the older API during a staged frontend/backend deploy.
      // Preserve submissions through the existing combined endpoint until it is restarted.
      if (response.status === 404) {
        response = await fetch(`${getApiBase()}/api/rodtep-rosctl-trading`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            ...requestBody,
            action: "Buying",
            quoteDetails: {
              scheme: schemeLabel(scheme),
              action: "Buying",
              workflow: "buy",
              requiredValue: Number(form.requiredValue),
              faceValue: currency(form.requiredValue),
              totalQuoteValue: "Not applicable",
            },
          }),
        });
      }

      const data = await readApiResponse(response);
      if (!response.ok || !data.success)
        throw new Error(data.error || "Buy request failed");
      setResult(data.data);
      setForm({
        name: "",
        companyName: "",
        mobile: "",
        email: "",
        requiredValue: "",
      });
    } catch (error) {
      setErrors({ submit: error.message || "Unable to submit buy request" });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="buy-calculator" className="bg-slate-100 py-20">
      <div className="mx-auto grid max-w-[1500px] items-start gap-12 px-4 sm:px-6 lg:grid-cols-[0.8fr_1.4fr] lg:px-8">
        <div className="text-slate-900">
          <CalculatorIntro
            icon={ArrowUpFromLine}
            eyebrow="Dedicated buyer workflow"
            title="Buy Scrips from EXIMINQ"
            text="Send your purchase requirement directly to our trading desk for availability and rate confirmation."
            dark
          />
        </div>
        <form
          onSubmit={submit}
          className="rounded-[2rem] border border-slate-200 bg-white p-6 text-slate-800 shadow-xl sm:p-8"
          noValidate
        >
          <h3 className="text-2xl font-bold text-slate-900">
            Request Scrip Purchase
          </h3>
          <p className="mt-2 text-sm text-slate-500">
            Complete the form and our team will contact you with availability
            and the official rate.
          </p>
          <div className="mt-6 grid gap-5 sm:grid-cols-2">
            <BuyField
              label="Company Name"
              name="companyName"
              value={form.companyName}
              onChange={updateForm}
              error={errors.companyName}
              placeholder="Enter company name"
            />
            <BuyField
              label="Contact Name"
              name="name"
              value={form.name}
              onChange={updateForm}
              error={errors.name}
              placeholder="Enter contact name"
            />
            <BuyField
              label="Mobile Number"
              name="mobile"
              value={form.mobile}
              onChange={updateForm}
              error={errors.mobile}
              placeholder="Enter mobile number"
            />
            <BuyField
              label="Email ID"
              name="email"
              type="email"
              value={form.email}
              onChange={updateForm}
              error={errors.email}
              placeholder="Enter email address"
            />
            <BuyField
              label="Required Scrip Face Value (₹)"
              name="requiredValue"
              type="number"
              value={form.requiredValue}
              onChange={updateForm}
              error={errors.requiredValue}
              placeholder="Enter required face value"
            />
            <div>
              <label className="block text-sm font-semibold text-slate-700">
                Selected Scrip Type
              </label>
              <select
                value={scheme}
                onChange={(event) => setScheme(event.target.value)}
                className="mt-2 w-full rounded-xl border border-slate-200 px-4 py-3 outline-none focus:ring-2 focus:ring-indigo-500"
              >
                <option value="rodtep">RODTEP</option>
                <option value="rosctl">RoSCTL</option>
              </select>
            </div>
          </div>
          {errors.submit && (
            <p className="mt-4 rounded-xl bg-red-50 p-3 text-sm text-red-700">
              {errors.submit}
            </p>
          )}
          {result && (
            <div className="mt-4 rounded-xl border border-emerald-200 bg-emerald-50 p-4">
              <p className="font-bold text-emerald-800">Buy request received</p>
              <p className="text-sm text-emerald-700">
                Request ID: {result.id}
              </p>
            </div>
          )}
          <button
            type="submit"
            disabled={loading}
            className="mt-6 w-full rounded-xl bg-indigo-700 px-6 py-4 font-bold text-white transition hover:bg-indigo-800 disabled:opacity-60"
          >
            {loading ? "Submitting..." : "Submit Buy Request"}
          </button>
        </form>
      </div>
    </section>
  );
}

function CalculatorIntro({ icon: Icon, eyebrow, title, text, dark = false }) {
  return (
    <div className="lg:pt-6">
      <span
        className={`inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-bold uppercase tracking-wider ${dark ? "bg-indigo-100 text-indigo-700" : "bg-white/10 text-blue-100"}`}
      >
        <Icon size={15} /> {eyebrow}
      </span>
      <h2 className="mt-5 text-3xl font-bold sm:text-4xl">{title}</h2>
      <p
        className={`mt-5 text-lg leading-relaxed ${dark ? "text-slate-600" : "text-blue-200"}`}
      >
        {text}
      </p>
      <ul className="mt-8 space-y-4">
        <li className="flex items-center gap-3">
          <TrendingUp className="text-emerald-400" size={20} /> Slab-based live
          rates
        </li>
        <li className="flex items-center gap-3">
          <CreditCard className="text-emerald-400" size={20} /> Transparent
          quote calculation
        </li>
      </ul>
    </div>
  );
}

function SchemeSelector({ scheme, setScheme, accent }) {
  return (
    <div>
      <p className="mb-2 text-sm font-semibold">Select Scheme</p>
      <div className="grid grid-cols-2 gap-4">
        {["rodtep", "rosctl"].map((value) => (
          <button
            type="button"
            key={value}
            onClick={() => setScheme(value)}
            className={`rounded-xl border-2 px-4 py-3 font-semibold ${scheme === value ? (accent === "blue" ? "border-blue-600 bg-blue-50 text-blue-700" : "border-indigo-600 bg-indigo-50 text-indigo-700") : "border-slate-200"}`}
          >
            {schemeLabel(value)}
          </button>
        ))}
      </div>
    </div>
  );
}

function SellRow({ row, index, error, updateRow, rate, quote, remove }) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
      <div className="mb-4 flex items-center justify-between">
        <div>
          <p className="font-bold">Scrip Entry {index + 1}</p>
          <p className="text-xs text-slate-500">
            Complete ownership details for this scrip.
          </p>
        </div>
        <button
          type="button"
          onClick={remove}
          className="rounded-lg border p-2 text-slate-500 hover:text-red-600"
          aria-label={`Remove scrip entry ${index + 1}`}
        >
          <Trash2 size={16} />
        </button>
      </div>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <Field
          label="Scrip No"
          value={row.scripNo}
          onChange={(event) => updateRow(row.id, "scripNo", event.target.value)}
          placeholder="10 digits"
        />
        <Field
          label="Scrip Date"
          type="date"
          value={row.scripDate}
          onChange={(event) =>
            updateRow(row.id, "scripDate", event.target.value)
          }
        />
        <Field
          label="Port"
          value={row.port}
          onChange={(event) => updateRow(row.id, "port", event.target.value)}
          placeholder="INNSA1"
        />
        <Field
          label="Scrip Value"
          type="number"
          value={row.scripValue}
          onChange={(event) =>
            updateRow(row.id, "scripValue", event.target.value)
          }
        />
      </div>
      {error && <p className="mt-3 text-sm text-red-600">{error}</p>}
      <div className="mt-4 grid gap-3 sm:grid-cols-2">
        <Total label="Applied Buying Rate" value={rateText(rate)} />
        <Total label="Estimated Payout" value={currency(quote)} featured />
      </div>
    </div>
  );
}

function Field({ label, value, onChange, type = "text", placeholder }) {
  return (
    <label className="block text-xs font-semibold text-slate-600">
      {label}
      <input
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="mt-2 w-full rounded-xl border border-slate-200 px-4 py-3 text-base font-normal text-slate-900 outline-none focus:ring-2 focus:ring-blue-500"
      />
    </label>
  );
}
function BuyField({
  label,
  name,
  value,
  onChange,
  error,
  type = "text",
  placeholder,
}) {
  return (
    <div>
      <label className="block text-sm font-semibold text-slate-700">
        {label}
      </label>
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className={`mt-2 w-full rounded-xl border px-4 py-3 outline-none focus:ring-2 focus:ring-indigo-500 ${error ? "border-red-400" : "border-slate-200"}`}
      />
      {error && <p className="mt-1 text-xs text-red-600">{error}</p>}
    </div>
  );
}
function Total({ label, value, featured = false }) {
  return (
    <div
      className={`rounded-xl border p-4 ${featured ? "border-emerald-100 bg-emerald-50" : "border-blue-100 bg-blue-50"}`}
    >
      <p className="text-xs font-bold uppercase tracking-wider text-slate-500">
        {label}
      </p>
      <p className="mt-2 text-2xl font-extrabold text-slate-900">{value}</p>
    </div>
  );
}

export default Calculator;
