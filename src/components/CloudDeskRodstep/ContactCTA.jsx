import React, { useEffect, useState } from "react";
import { Mail, Phone, X } from "lucide-react";

const getApiBase = () => {
  const raw = (process.env.REACT_APP_API_URL || "").trim().replace(/\/$/, "");
  if (!raw || /^https?:\/\/localhost(?::\d+)?$/i.test(raw)) return "";
  return raw;
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

const initialSellForm = {
  name: "",
  companyName: "",
  mobile: "",
  email: "",
  icegateId: "",
  iecNo: "",
  scheme: "RODTEP",
};

const initialBuyForm = {
  name: "",
  companyName: "",
  mobile: "",
  email: "",
  requiredValue: "",
  scheme: "RODTEP",
};

const isEmail = (value) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
const mobileDigits = (value) => String(value || "").replace(/\D/g, "");

const ContactCTA = ({
  selectedWorkflow = "sell",
  selectedScheme = "RODTEP",
  quoteDetails = null,
  onClose,
}) => {
  const [workflow, setWorkflow] = useState(selectedWorkflow);
  const [sellForm, setSellForm] = useState(initialSellForm);
  const [buyForm, setBuyForm] = useState(initialBuyForm);
  const [sellErrors, setSellErrors] = useState({});
  const [buyErrors, setBuyErrors] = useState({});
  const [sellLoading, setSellLoading] = useState(false);
  const [buyLoading, setBuyLoading] = useState(false);
  const [sellResult, setSellResult] = useState(null);
  const [buyResult, setBuyResult] = useState(null);

  useEffect(() => setWorkflow(selectedWorkflow), [selectedWorkflow]);

  useEffect(() => {
    setSellForm((previous) => ({ ...previous, scheme: selectedScheme }));
    setBuyForm((previous) => ({
      ...previous,
      scheme: selectedScheme,
      requiredValue: quoteDetails?.faceValueAmount || previous.requiredValue,
    }));
  }, [selectedScheme, quoteDetails]);

  useEffect(() => {
    if (!quoteDetails) return undefined;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const closeOnEscape = (event) => {
      if (event.key === "Escape") onClose?.();
    };
    window.addEventListener("keydown", closeOnEscape);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", closeOnEscape);
    };
  }, [quoteDetails, onClose]);

  const updateForm = (setter) => (event) => {
    const { name, value } = event.target;
    setter((previous) => ({ ...previous, [name]: value }));
  };

  const validateSell = () => {
    const errors = {};
    if (!sellForm.name.trim()) errors.name = "Contact name is required";
    if (!sellForm.companyName.trim()) errors.companyName = "Company name is required";
    if (mobileDigits(sellForm.mobile).length < 10) errors.mobile = "Enter a valid mobile number";
    if (!isEmail(sellForm.email.trim())) errors.email = "Enter a valid email address";
    if (!sellForm.icegateId.trim()) errors.icegateId = "ICEGATE ID is required to sell scrips";
    if (!sellForm.iecNo.trim()) errors.iecNo = "IEC number is required";
    setSellErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const validateBuy = () => {
    const errors = {};
    if (!buyForm.name.trim()) errors.name = "Contact name is required";
    if (!buyForm.companyName.trim()) errors.companyName = "Company name is required";
    if (mobileDigits(buyForm.mobile).length < 10) errors.mobile = "Enter a valid mobile number";
    if (!isEmail(buyForm.email.trim())) errors.email = "Enter a valid email address";
    if (!(Number(buyForm.requiredValue) > 0)) errors.requiredValue = "Enter the required purchase value";
    setBuyErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const submitSellRequest = async (event) => {
    event.preventDefault();
    if (!validateSell()) return;
    setSellLoading(true);
    setSellResult(null);
    try {
      const requestBody = { ...sellForm, quoteDetails };
      let response = await fetch(`${getApiBase()}/api/rodtep-rosctl-trading/sell-request`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(requestBody),
      });

      if (response.status === 404) {
        response = await fetch(`${getApiBase()}/api/rodtep-rosctl-trading`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ ...requestBody, action: "Selling" }),
        });
      }

      const data = await readApiResponse(response);
      if (!response.ok || !data.success) throw new Error(data.error || "Sell request failed");
      setSellResult(data.data);
      setSellForm({ ...initialSellForm, scheme: sellForm.scheme });
    } catch (error) {
      setSellErrors({ submit: error.message || "Unable to submit sell request" });
    } finally {
      setSellLoading(false);
    }
  };

  const submitBuyRequest = async (event) => {
    event.preventDefault();
    if (!validateBuy()) return;
    setBuyLoading(true);
    setBuyResult(null);
    try {
      const requestBody = { ...buyForm, quoteDetails };
      let response = await fetch(`${getApiBase()}/api/rodtep-rosctl-trading/buy-request`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(requestBody),
      });

      if (response.status === 404) {
        response = await fetch(`${getApiBase()}/api/rodtep-rosctl-trading`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            ...requestBody,
            action: "Buying",
            quoteDetails: {
              ...quoteDetails,
              scheme: buyForm.scheme,
              action: "Buying",
              workflow: "buy",
              requiredValue: Number(buyForm.requiredValue),
              faceValue: new Intl.NumberFormat("en-IN", {
                style: "currency",
                currency: "INR",
                maximumFractionDigits: 0,
              }).format(Number(buyForm.requiredValue)),
              totalQuoteValue: "Not applicable",
            },
          }),
        });
      }

      const data = await readApiResponse(response);
      if (!response.ok || !data.success) throw new Error(data.error || "Buy request failed");
      setBuyResult(data.data);
      setBuyForm({ ...initialBuyForm, scheme: buyForm.scheme });
    } catch (error) {
      setBuyErrors({ submit: error.message || "Unable to submit buy request" });
    } finally {
      setBuyLoading(false);
    }
  };

  if (!quoteDetails) return null;

  return (
    <div
      id="contact"
      className="fixed inset-0 z-[120] flex items-center justify-center overflow-y-auto bg-slate-950/80 p-3 backdrop-blur-sm sm:p-6"
      role="dialog"
      aria-modal="true"
      aria-label={workflow === "sell" ? "Sell scrip request" : "Buy scrip request"}
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) onClose?.();
      }}
    >
      <div className="relative my-auto flex max-h-[94vh] w-full max-w-6xl flex-col overflow-y-auto rounded-[2rem] bg-white shadow-2xl lg:flex-row">
        <button type="button" onClick={onClose} className="absolute right-4 top-4 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-slate-900/10 text-slate-700 transition hover:bg-slate-900 hover:text-white" aria-label="Close request form">
          <X size={20} />
        </button>
        <TradeSupportPanel workflow={workflow} />
        <div className="bg-white p-6 sm:p-10 lg:w-[54%]">
          {workflow === "sell" ? (
            <SellRequestForm
              form={sellForm}
              errors={sellErrors}
              loading={sellLoading}
              result={sellResult}
              quoteDetails={selectedWorkflow === "sell" ? quoteDetails : null}
              onChange={updateForm(setSellForm)}
              onSubmit={submitSellRequest}
            />
          ) : (
            <BuyRequestForm
              form={buyForm}
              errors={buyErrors}
              loading={buyLoading}
              result={buyResult}
              quoteDetails={selectedWorkflow === "buy" ? quoteDetails : null}
              onChange={updateForm(setBuyForm)}
              onSubmit={submitBuyRequest}
            />
          )}
        </div>
      </div>
    </div>
  );
};

function TradeSupportPanel({ workflow }) {
  const isSell = workflow === "sell";
  return (
    <div className={`${isSell ? "bg-blue-700" : "bg-indigo-700"} flex flex-col justify-center p-8 text-white sm:p-10 lg:w-[46%]`}>
      <p className="text-xs font-bold uppercase tracking-[0.2em] text-blue-200">{isSell ? "Seller workflow" : "Buyer workflow"}</p>
      <h2 className="mt-3 text-4xl font-bold">{isSell ? "Sell Your Scrips" : "Buy Duty Scrips"}</h2>
      <p className="mt-5 text-lg leading-relaxed text-blue-100">
        {isSell ? "Submit verified scrip and ICEGATE details for rate confirmation, transfer coordination, and settlement." : "Tell us your required value and port so our trading desk can source an eligible scrip and confirm purchase cost."}
      </p>
      <div className="mt-8 space-y-5">
        <ContactLine icon={Phone} eyebrow="Call us 24/7" value="+91 74000 96950" />
        <ContactLine icon={Mail} eyebrow="Email us" value="clouddesk@eximinq.in" />
      </div>
    </div>
  );
}

function ContactLine({ icon: Icon, eyebrow, value }) {
  return <div className="flex items-center gap-4"><span className="flex h-12 w-12 items-center justify-center rounded-full bg-white/10"><Icon size={20} /></span><div><p className="text-xs font-bold uppercase tracking-wider text-blue-200">{eyebrow}</p><p className="text-lg font-bold sm:text-2xl">{value}</p></div></div>;
}

function SellRequestForm({ form, errors, loading, result, quoteDetails, onChange, onSubmit }) {
  return (
    <form className="space-y-4" onSubmit={onSubmit} noValidate>
      <FormHeading title="Request Official Sell Quote" text="Share your ownership and scrip details. Our desk will validate the live payout rate." />
      <QuoteSummary quoteDetails={quoteDetails} />
      <div className="grid gap-4 md:grid-cols-2"><Field label="Contact Name" name="name" value={form.name} onChange={onChange} error={errors.name} /><Field label="Company Name" name="companyName" value={form.companyName} onChange={onChange} error={errors.companyName} /></div>
      <div className="grid gap-4 md:grid-cols-2"><Field label="Mobile Number" name="mobile" value={form.mobile} onChange={onChange} error={errors.mobile} placeholder="+91" /><Field label="Email ID" name="email" type="email" value={form.email} onChange={onChange} error={errors.email} /></div>
      <SchemeField value={form.scheme} onChange={onChange} />
      <div className="grid gap-4 md:grid-cols-2"><Field label="ICEGATE ID" name="icegateId" value={form.icegateId} onChange={onChange} error={errors.icegateId} /><Field label="IEC No" name="iecNo" value={form.iecNo} onChange={onChange} error={errors.iecNo} /></div>
      <SubmitButton loading={loading} label="Submit Sell Request" />
      <SubmissionMessage result={result} error={errors.submit} workflow="sell" />
    </form>
  );
}

function BuyRequestForm({ form, errors, loading, result, quoteDetails, onChange, onSubmit }) {
  return (
    <form className="space-y-4" onSubmit={onSubmit} noValidate>
      <FormHeading title="Request Official Buy Quote" text="Share your purchase requirement and our desk will confirm availability and contact you." />
      <div className="grid gap-4 md:grid-cols-2"><Field label="Contact Name" name="name" value={form.name} onChange={onChange} error={errors.name} /><Field label="Company Name" name="companyName" value={form.companyName} onChange={onChange} error={errors.companyName} /></div>
      <div className="grid gap-4 md:grid-cols-2"><Field label="Mobile Number" name="mobile" value={form.mobile} onChange={onChange} error={errors.mobile} placeholder="+91" /><Field label="Email ID" name="email" type="email" value={form.email} onChange={onChange} error={errors.email} /></div>
      <SchemeField value={form.scheme} onChange={onChange} />
      <Field label="Required Scrip Face Value (₹)" name="requiredValue" type="number" value={form.requiredValue} onChange={onChange} error={errors.requiredValue} />
      <SubmitButton loading={loading} label="Submit Buy Request" />
      <SubmissionMessage result={result} error={errors.submit} workflow="buy" />
    </form>
  );
}

function FormHeading({ title, text }) { return <div><h3 className="text-2xl font-bold text-slate-900">{title}</h3><p className="mt-2 text-sm text-slate-500">{text}</p></div>; }

function SchemeField({ value }) { return <div><label className="mb-1 block text-sm font-medium text-slate-700">Selected Scrip Type</label><input value={value} readOnly className="w-full rounded-xl border border-blue-200 bg-blue-50 px-4 py-3 font-semibold text-blue-800" /><p className="mt-1 text-xs text-slate-500">Carried forward automatically from your calculator selection.</p></div>; }

function Field({ label, name, value, onChange, error, placeholder, type = "text" }) {
  return <div><label className="mb-1 block text-sm font-medium text-slate-700">{label}</label><input type={type} name={name} value={value} onChange={onChange} placeholder={placeholder || `Enter ${label.toLowerCase()}`} className={`w-full rounded-xl border px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500 ${error ? "border-red-400" : "border-slate-200"}`} />{error && <p className="mt-1 text-xs text-red-600">{error}</p>}</div>;
}

function SubmitButton({ loading, label }) { return <button type="submit" disabled={loading} className="w-full rounded-xl bg-slate-900 py-4 font-bold text-white transition hover:bg-slate-800 disabled:cursor-not-allowed disabled:opacity-60">{loading ? "Submitting..." : label}</button>; }

function QuoteSummary({ quoteDetails }) {
  if (!quoteDetails) return null;
  return <div className="rounded-xl border border-blue-100 bg-blue-50 p-3 text-sm text-blue-800"><p className="font-bold">Selected calculator details</p><p className="mt-1">Scrip Type: {quoteDetails.scheme}</p><p>{quoteDetails.rows?.length ? `Scrip Entries: ${quoteDetails.rows.length} · ` : ""}Face Value: {quoteDetails.totalFaceValue || quoteDetails.faceValue}</p><p>Estimated Quote: {quoteDetails.totalQuoteValue}</p>{quoteDetails.preferredPort && <p>Preferred Port: {quoteDetails.preferredPort}</p>}</div>;
}

function SubmissionMessage({ result, error, workflow }) {
  if (error) return <p className="rounded-xl bg-red-50 p-3 text-sm text-red-700">{error}</p>;
  if (!result) return null;
  return <div className="rounded-xl border border-emerald-200 bg-emerald-50 p-4"><p className="font-bold text-emerald-800">{workflow === "sell" ? "Sell" : "Buy"} request received</p><p className="mt-1 text-sm text-emerald-700">Request ID: {result.id}</p><p className="text-sm text-emerald-700">Submitted: {result.submittedAt?.ist}</p></div>;
}

export default ContactCTA;
