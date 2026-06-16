import React, { useEffect, useMemo, useState } from "react";
import { Phone, Mail } from "lucide-react";

const getApiBase = () => {
  const raw = (process.env.REACT_APP_API_URL || "").trim().replace(/\/$/, "");

  if (typeof window !== "undefined") {
    const browserHost = window.location.hostname;
    const isLocalBrowser = browserHost === "localhost" || browserHost === "127.0.0.1";

    if (!isLocalBrowser) {
      return window.location.origin.replace(/\/$/, "");
    }

    if (raw) {
      try {
        const parsed = new URL(raw, window.location.origin);
        const envHost = parsed.hostname;
        const envPort = parsed.port;

        if (isLocalBrowser && envHost === "localhost" && envPort === "3000") {
          return "http://localhost:5000";
        }

        return parsed.origin.replace(/\/$/, "");
      } catch (_error) {
        return raw;
      }
    }

    return "http://localhost:5000";
  }

  return raw || "http://localhost:5000";
};

const renderFieldValue = (value) => value || "Not provided";

const QuoteDetailsSummary = ({ quoteDetails }) => {
  if (!quoteDetails) return null;

  if (quoteDetails.type === "portfolio") {
    return (
      <div className="space-y-4">
        <div className="grid gap-3 md:grid-cols-2">
          <SummaryLine label="Scheme" value={quoteDetails.scheme} />
          <SummaryLine label="Action" value={quoteDetails.action} />
          <SummaryLine
            label="Total Face Value"
            value={quoteDetails.totals?.totalFaceValue}
          />
          <SummaryLine
            label="Total Quote Value"
            value={quoteDetails.totals?.totalQuoteValue}
          />
        </div>

        <div className="overflow-x-auto rounded-2xl border border-emerald-100">
          <table className="min-w-full text-sm">
            <thead className="bg-emerald-50 text-slate-700">
              <tr>
                <th className="px-3 py-3 text-left font-semibold">#</th>
                <th className="px-3 py-3 text-left font-semibold">Scrip No</th>
                <th className="px-3 py-3 text-left font-semibold">Scrip Date</th>
                <th className="px-3 py-3 text-left font-semibold">Port</th>
                <th className="px-3 py-3 text-left font-semibold">Face Value</th>
                <th className="px-3 py-3 text-left font-semibold">Rate</th>
                <th className="px-3 py-3 text-left font-semibold">Quote Value</th>
              </tr>
            </thead>
            <tbody>
              {quoteDetails.rows?.map((row) => (
                <tr key={`${row.lineNo}-${row.scripNo || "row"}`} className="border-t border-emerald-100 bg-white">
                  <td className="px-3 py-3">{row.lineNo}</td>
                  <td className="px-3 py-3">{renderFieldValue(row.scripNo)}</td>
                  <td className="px-3 py-3">{renderFieldValue(row.scripDate)}</td>
                  <td className="px-3 py-3">{renderFieldValue(row.port)}</td>
                  <td className="px-3 py-3">{renderFieldValue(row.scripValue)}</td>
                  <td className="px-3 py-3">{renderFieldValue(row.rate)}</td>
                  <td className="px-3 py-3">{renderFieldValue(row.quoteValue)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  }

  return (
    <div className="grid gap-3 md:grid-cols-2">
      <SummaryLine label="Scheme" value={quoteDetails.scheme} />
      <SummaryLine label="Action" value={quoteDetails.action} />
      <SummaryLine label="Face Value" value={quoteDetails.faceValue} />
      <SummaryLine label="Applied Rate" value={quoteDetails.appliedRate} />
      <SummaryLine
        label="Total Quote Value"
        value={quoteDetails.totalQuoteValue}
      />
    </div>
  );
};

function SummaryLine({ label, value }) {
  return (
    <div className="rounded-xl bg-white/80 px-4 py-3">
      <p className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-500">
        {label}
      </p>
      <p className="mt-1 text-sm font-semibold text-slate-900">
        {renderFieldValue(value)}
      </p>
    </div>
  );
}

const ContactCTA = ({
  selectedAction = "Selling",
  selectedScheme = "RODTEP",
  quoteDetails = null,
}) => {
  const [form, setForm] = useState({
    name: "",
    companyName: "",
    mobile: "",
    email: "",
    icegateId: "",
    iecNo: "",
    scripType: selectedScheme,
    action: selectedAction,
  });
  const [loading, setLoading] = useState(false);
  const [submissionResult, setSubmissionResult] = useState(null);

  useEffect(() => {
    setForm((previous) => ({
      ...previous,
      scripType: selectedScheme,
      action: selectedAction,
    }));
  }, [selectedAction, selectedScheme]);

  const actionCopy = useMemo(() => {
    return form.action === "Buying"
      ? {
          heading: "Request Official Buy Quote",
          subheading: "Share your scrip details and our desk will validate the live buying rate.",
          button: "Submit Buy Request",
        }
      : {
          heading: "Request Official Sell Quote",
          subheading: "Lock in the live selling rate and let our desk handle settlement support.",
          button: "Submit Sell Request",
        };
  }, [form.action]);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setForm((previous) => ({ ...previous, [name]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!form.companyName || !form.mobile) {
      alert("Company name and mobile are required");
      return;
    }

    try {
      setLoading(true);

      const payload = {
        name: form.name,
        companyName: form.companyName,
        scheme: form.scripType,
        action: form.action,
        mobile: form.mobile,
        email: form.email,
        icegateId: form.icegateId,
        iecNo: form.iecNo,
        quoteDetails,
      };

      const response = await fetch(`${getApiBase()}/api/rodtep-rosctl-trading`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const data = await response.json();

      if (!response.ok || !data.success) {
        throw new Error(data.error || "API failed");
      }

      setSubmissionResult(data.data || null);
      setForm((previous) => ({
        ...previous,
        name: "",
        companyName: "",
        mobile: "",
        email: "",
        icegateId: "",
        iecNo: "",
      }));
    } catch (error) {
      console.error("Submit error:", error);
      setSubmissionResult(null);
      alert("Submission failed. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      id="contact"
      className="bg-slate-900 py-20 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-6xl mx-auto bg-white rounded-[2rem] overflow-hidden shadow-2xl flex flex-col lg:flex-row">
        <div className="p-10 lg:w-[46%] bg-blue-700 text-white flex flex-col justify-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Trade?</h2>
          <p className="text-blue-100 mb-8 text-lg leading-relaxed">
            Lock in today&apos;s rates with our CloudDesk. We manage the complete
            documentation and settlement process.
          </p>

          <div className="space-y-5">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-blue-600 flex items-center justify-center">
                <Phone size={20} />
              </div>
              <div>
                <p className="text-xs uppercase font-bold text-blue-200 tracking-wider">
                  Call Us 24/7
                </p>
                <p className="text-2xl font-bold">+91 74000 96950</p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-blue-600 flex items-center justify-center">
                <Mail size={20} />
              </div>
              <div>
                <p className="text-xs uppercase font-bold text-blue-200 tracking-wider">
                  Email Us
                </p>
                <p className="text-2xl font-bold">clouddesk@eximinq.in</p>
              </div>
            </div>
          </div>
        </div>

        <div className="p-10 lg:w-[54%] bg-white">
          <form className="space-y-4" onSubmit={handleSubmit}>
            <h3 className="text-2xl font-bold text-slate-900">
              {actionCopy.heading}
            </h3>
            <p className="text-sm text-slate-500">
              {actionCopy.subheading}
            </p>

            {quoteDetails && (
              <div className="rounded-2xl border border-blue-100 bg-blue-50 px-4 py-3 text-sm">
                <p className="font-semibold text-blue-800">
                  Selected Summary
                </p>
                <p className="mt-1 text-blue-700">
                  Scheme: {quoteDetails.scheme} | Action: {quoteDetails.action}
                </p>
                {quoteDetails.totalFaceValue ? (
                  <p className="text-blue-700">
                    Face Value: {quoteDetails.totalFaceValue} | Quote Value: {quoteDetails.totalQuoteValue}
                  </p>
                ) : (
                  <p className="text-blue-700">
                    Face Value: {quoteDetails.faceValue} | Applied Rate: {quoteDetails.appliedRate}
                  </p>
                )}
              </div>
            )}

            <div className="grid md:grid-cols-2 gap-4">
              <Field
                label="Contact Name"
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="Enter full name"
              />
              <Field
                label="Company Name"
                name="companyName"
                value={form.companyName}
                onChange={handleChange}
                placeholder="Enter company name"
              />
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <Field
                label="Mobile Number"
                name="mobile"
                value={form.mobile}
                onChange={handleChange}
                placeholder="+91"
              />
              <Field
                label="Email ID"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="Enter email address"
              />
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">
                  Scrip Type
                </label>
                <select
                  name="scripType"
                  value={form.scripType}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl border border-slate-200"
                >
                  <option value="RODTEP">RODTEP</option>
                  <option value="RoSCTL">RoSCTL</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">
                  Action
                </label>
                <select
                  name="action"
                  value={form.action}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl border border-slate-200"
                >
                  <option value="Buying">Buying</option>
                  <option value="Selling">Selling</option>
                </select>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <Field
                label="Icegate ID"
                name="icegateId"
                value={form.icegateId}
                onChange={handleChange}
                placeholder="Enter Icegate ID"
              />
              <Field
                label="IEC No"
                name="iecNo"
                value={form.iecNo}
                onChange={handleChange}
                placeholder="Enter IEC No"
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-slate-900 text-white font-bold py-4 rounded-xl hover:bg-slate-800"
            >
              {loading ? "Submitting..." : actionCopy.button}
            </button>

            {submissionResult && (
              <div className="rounded-[1.5rem] border border-emerald-200 bg-emerald-50 p-5">
                <div className="flex flex-col gap-2 border-b border-emerald-200 pb-4">
                  <p className="text-xs font-bold uppercase tracking-[0.18em] text-emerald-700">
                    Submission Received
                  </p>
                  <h4 className="text-xl font-bold text-slate-900">
                    Quote request submitted successfully
                  </h4>
                  <p className="text-sm text-slate-600">
                    Request ID: {submissionResult.id}
                  </p>
                  <p className="text-sm text-slate-600">
                    Submitted (IST): {submissionResult.submittedAt?.ist || "Not available"}
                  </p>
                </div>

                <div className="mt-4 grid gap-3 md:grid-cols-2">
                  <SummaryLine label="Contact Name" value={submissionResult.name} />
                  <SummaryLine label="Company Name" value={submissionResult.companyName} />
                  <SummaryLine label="Mobile Number" value={submissionResult.mobile} />
                  <SummaryLine label="Email ID" value={submissionResult.email} />
                  <SummaryLine label="Icegate ID" value={submissionResult.icegateId} />
                  <SummaryLine label="IEC No" value={submissionResult.iecNo} />
                </div>

                <div className="mt-5 rounded-2xl border border-emerald-100 bg-white/70 p-4">
                  <p className="text-sm font-bold text-slate-900 mb-3">
                    Quote Details
                  </p>
                  <QuoteDetailsSummary quoteDetails={submissionResult.quoteDetails} />
                </div>
              </div>
            )}
          </form>
        </div>
      </div>
    </section>
  );
};

function Field({ label, name, value, onChange, placeholder }) {
  return (
    <div>
      <label className="block text-sm font-medium text-slate-700 mb-1">
        {label}
      </label>
      <input
        type="text"
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="w-full px-4 py-3 rounded-xl border border-slate-200"
      />
    </div>
  );
}

export default ContactCTA;
