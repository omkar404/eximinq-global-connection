import React, { useState } from "react";
import { CheckCircle2, ShieldCheck } from "lucide-react";
import { getApiUrl } from "../../utils/apiBaseUrl";

const AuditComplianceForm = () => {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    company: "",
    name: "",
    email: "",
    mobile: "",
    epcgActive: "",
    aaActive: "",
    igstPending: "",
    drawbackFrequency: "",
  });
  const [errors, setErrors] = useState({});

  const handleInputChange = (event) => {
    const { name, value } = event.target;

    if (name === "mobile") {
      // Keep only digits, cap at 10
      const digitsOnly = value.replace(/\D/g, "").slice(0, 10);
      setFormData((current) => ({ ...current, mobile: digitsOnly }));
      return;
    }

    setFormData((current) => ({ ...current, [name]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const validationErrors = {};
    if (!formData.company.trim()) validationErrors.company = "Company name is required.";
    if (!formData.name.trim()) validationErrors.name = "Full name is required.";
    if (!formData.email.trim()) validationErrors.email = "Work email is required.";
    if (!formData.mobile.trim()) {
      validationErrors.mobile = "Mobile number is required.";
    } else if (!/^[6-9]\d{9}$/.test(formData.mobile.trim())) {
      validationErrors.mobile = "Enter a valid 10-digit mobile number.";
    }
    if (formData.epcgActive === "") validationErrors.epcgActive = "Required.";
    if (formData.aaActive === "") validationErrors.aaActive = "Required.";
    if (!formData.igstPending.trim()) validationErrors.igstPending = "Required.";
    if (!formData.drawbackFrequency) validationErrors.drawbackFrequency = "Please select a frequency.";
    setErrors(validationErrors);
    if (Object.keys(validationErrors).length) return;

    const payload = {
      company: formData.company.trim(),
      name: formData.name.trim(),
      mobile: formData.mobile.trim(),
      epcgActive: String(formData.epcgActive),
      aaActive: String(formData.aaActive),
      igstPending: formData.igstPending.trim(),
      drawbackFrequency: formData.drawbackFrequency,
      email: formData.email.trim().toLowerCase(),
    };

    try {
      setIsSubmitting(true);
      setErrors({});

      const response = await fetch(getApiUrl("/api/submit-audit-form"), {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const contentType = response.headers.get("content-type") || "";
      const result = contentType.includes("application/json")
        ? await response.json()
        : { success: false, error: `API returned HTTP ${response.status}` };
      if (!response.ok || !result.success) {
        throw new Error(result.error || "Failed to submit form");
      }

      setFormSubmitted(true);
    } catch (error) {
      console.error("Error submitting audit form:", error);
      setErrors({ submit: "We could not submit the form. Please try again." });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div id="checklist" className="relative z-10 scroll-mt-32">
      <div className="bg-white rounded-xl shadow-2xl p-6 md:p-8 text-slate-800 border border-slate-100">
        {formSubmitted ? (
          <div className="text-center py-10">
            <CheckCircle2 className="w-14 h-14 text-green-500 mx-auto mb-4" />
            <h2 className="text-2xl font-bold text-brand-900 mb-2">Information Received</h2>
            <p className="text-sm text-slate-600">Our compliance team will contact you shortly.</p>
          </div>
        ) : (
          <>
            <div className="flex items-center gap-3 mb-6">
              <div className="bg-brand-50 text-brand-700 p-3 rounded-lg"><ShieldCheck size={24} /></div>
              <div>
                <h2 className="text-2xl font-bold text-brand-900">Request an Audit Review</h2>
                <p className="text-sm text-slate-500">Share the basics. We will help define the scope.</p>
              </div>
            </div>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid sm:grid-cols-2 gap-4">
                <label className="text-sm font-semibold text-slate-700">
                  Company Name
                  <input name="company" value={formData.company} onChange={handleInputChange} className="mt-1 w-full px-4 py-3 rounded-lg border border-slate-200 focus:ring-2 focus:ring-brand-200 focus:border-brand-500 outline-none" placeholder="Your company" />
                  {errors.company && <span className="block text-xs text-red-600 mt-1">{errors.company}</span>}
                </label>
                <label className="text-sm font-semibold text-slate-700">
                  Full Name
                  <input name="name" value={formData.name} onChange={handleInputChange} className="mt-1 w-full px-4 py-3 rounded-lg border border-slate-200 focus:ring-2 focus:ring-brand-200 focus:border-brand-500 outline-none" placeholder="Your name" />
                  {errors.name && <span className="block text-xs text-red-600 mt-1">{errors.name}</span>}
                </label>
              </div>
              <div className="grid sm:grid-cols-2 gap-4">
                <label className="text-sm font-semibold text-slate-700">
                  Work Email
                  <input type="email" name="email" value={formData.email} onChange={handleInputChange} className="mt-1 w-full px-4 py-3 rounded-lg border border-slate-200 focus:ring-2 focus:ring-brand-200 focus:border-brand-500 outline-none" placeholder="name@company.com" />
                  {errors.email && <span className="block text-xs text-red-600 mt-1">{errors.email}</span>}
                </label>
                <label className="text-sm font-semibold text-slate-700">
                  Mobile Number
                  <input
                    type="tel"
                    name="mobile"
                    inputMode="numeric"
                    value={formData.mobile}
                    onChange={handleInputChange}
                    maxLength={10}
                    className="mt-1 w-full px-4 py-3 rounded-lg border border-slate-200 focus:ring-2 focus:ring-brand-200 focus:border-brand-500 outline-none"
                    placeholder="10-digit mobile number"
                  />
                  {errors.mobile && <span className="block text-xs text-red-600 mt-1">{errors.mobile}</span>}
                </label>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <label className="text-xs font-semibold text-slate-700">
                  Active EPCG
                  <input type="number" min="0" name="epcgActive" value={formData.epcgActive} onChange={handleInputChange} className="mt-1 w-full px-3 py-3 rounded-lg border border-slate-200 focus:ring-2 focus:ring-brand-200 outline-none" placeholder="0" />
                  {errors.epcgActive && <span className="block text-xs text-red-600 mt-1">{errors.epcgActive}</span>}
                </label>
                <label className="text-xs font-semibold text-slate-700">
                  Active AA
                  <input type="number" min="0" name="aaActive" value={formData.aaActive} onChange={handleInputChange} className="mt-1 w-full px-3 py-3 rounded-lg border border-slate-200 focus:ring-2 focus:ring-brand-200 outline-none" placeholder="0" />
                  {errors.aaActive && <span className="block text-xs text-red-600 mt-1">{errors.aaActive}</span>}
                </label>
                <label className="text-xs font-semibold text-slate-700">
                  Pending IGST
                  <input name="igstPending" value={formData.igstPending} onChange={handleInputChange} className="mt-1 w-full px-3 py-3 rounded-lg border border-slate-200 focus:ring-2 focus:ring-brand-200 outline-none" placeholder="₹ value" />
                  {errors.igstPending && <span className="block text-xs text-red-600 mt-1">{errors.igstPending}</span>}
                </label>
              </div>
              <label className="block text-sm font-semibold text-slate-700">
                Drawback Claim Frequency
                <select
                  name="drawbackFrequency"
                  value={formData.drawbackFrequency}
                  onChange={handleInputChange}
                  className="mt-1 w-full px-4 py-3 rounded-lg border border-slate-200 bg-white focus:ring-2 focus:ring-brand-200 focus:border-brand-500 outline-none"
                >
                  <option value="" disabled>Select the drawback frequency</option>
                  <option>Weekly</option>
                  <option>Monthly</option>
                  <option>Quarterly</option>
                  <option>Sporadic</option>
                </select>
                {errors.drawbackFrequency && <span className="block text-xs text-red-600 mt-1">{errors.drawbackFrequency}</span>}
              </label>
              {errors.submit && <p className="text-sm text-red-600">{errors.submit}</p>}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-accent-500 hover:bg-accent-600 disabled:cursor-not-allowed disabled:opacity-70 text-white font-bold py-3 px-6 rounded-lg shadow-lg transition"
              >
                {isSubmitting ? "Submitting..." : "Submit Audit Request"}
              </button>
              <p className="text-center text-xs text-slate-400">Your information is used only to respond to this request.</p>
            </form>
          </>
        )}
      </div>
    </div>
  );
};

export default AuditComplianceForm;