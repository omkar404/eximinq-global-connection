import React, { useState } from "react";
import {
    History,
    CheckCircle2,
    ShieldCheck,
    Lock
} from "lucide-react";

const AuditComplianceForm = () => {
    const [formSubmitted, setFormSubmitted] = useState(false);

    const [formData, setFormData] = useState({
        company: "",
        name: "",
        epcgActive: "",
        aaActive: "",
        igstPending: "",
        drawbackFrequency: "Monthly",
        email: ""
    });

    const [errors, setErrors] = useState({});

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value
        }));
    };

    const validate = () => {
        const e = {};

        if (!formData.company.trim())
            e.company = "Company name is required.";

        if (!formData.name.trim())
            e.name = "Full name is required.";

        if (!formData.epcgActive)
            e.epcgActive = "Active EPCG licenses count is required.";

        if (!formData.aaActive)
            e.aaActive = "Active AA auths count is required.";

        if (!formData.igstPending.trim())
            e.igstPending = "Pending IGST refund value is required.";

        if (!formData.email.trim())
            e.email = "Work email is required.";

        return e;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log("Form submit triggered");
        const validationErrors = validate();
        setErrors(validationErrors);

        if (Object.keys(validationErrors).length > 0) return;

        try {
            const payload = {
                ...formData,
            };

            console.log("Payload:", payload);

            const response = await fetch(
                `${process.env.REACT_APP_API_URL}/api/submit-audit-form`,
                // "http://localhost:5000/api/submit-audit-form",
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(payload),
                }
            );

            if (!response.ok) {
                throw new Error("Failed to submit form");
            }

            await response.json();

            setFormSubmitted(true);

        } catch (error) {
            console.error("Error submitting audit form:", error);
        }
    };

    return (
        <section
            id="checklist"
            className="py-24 bg-slate-50 relative overflow-hidden scroll-mt-28"
        >
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="bg-white rounded-[5rem] border border-slate-200 shadow-[0_50px_100px_-20px_rgba(0,0,0,0.1)] overflow-hidden">

                    {/* Header */}
                    <div className="bg-[#1E40AF] p-20 text-white text-center relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-80 h-80 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2"></div>

                        <div className="inline-flex items-center space-x-2 text-blue-200 font-black text-[10px] uppercase tracking-[0.4em] mb-10">
                            <History className="w-4 h-4" />
                            <span>Pre-Audit Diagnostic System</span>
                        </div>

                        <h2 className="text-6xl font-black mb-6 tracking-tighter leading-none">
                            Audit Readiness <br />Checklist
                        </h2>

                        <p className="text-blue-100 text-lg font-medium opacity-80 uppercase tracking-widest text-[11px] font-bold max-w-sm mx-auto">
                            Preliminary Portfolio Risk Assessment for Exporters
                        </p>
                    </div>

                    {/* Body */}
                    <div className="p-20 pt-16">
                        {formSubmitted ? (
                            <div className="text-center py-10">
                                <div className="w-24 h-24 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-8 border border-emerald-200">
                                    <CheckCircle2 className="w-12 h-12 text-emerald-600" />
                                </div>

                                <h3 className="text-4xl font-black text-slate-900 mb-4">
                                    Information Received!
                                </h3>

                                <p className="text-slate-600 mb-10 font-medium max-w-sm mx-auto leading-relaxed">
                                    Our forensic auditors are reviewing your data. We will reach out within 4 working hours with your health score.
                                </p>

                                <button
                                    onClick={() => {
                                        setFormSubmitted(false);
                                        setErrors({});
                                    }}
                                    className="bg-slate-900 text-white px-8 py-4 rounded-xl font-black text-[10px] uppercase tracking-widest"
                                >
                                    Start New Assessment
                                </button>
                            </div>
                        ) : (
                            <form onSubmit={handleSubmit} className="space-y-16">

                                <div className="grid md:grid-cols-2 gap-10">
                                    <div>
                                        <label className="block text-[11px] font-black text-slate-500 uppercase tracking-widest mb-4">
                                            Organization Identity
                                        </label>
                                        <input
                                            type="text"
                                            name="company"
                                            value={formData.company}
                                            onChange={handleInputChange}
                                            className="w-full px-8 py-5 rounded-2xl bg-slate-50 border border-slate-100 focus:ring-4 focus:ring-blue-100 focus:border-blue-600 outline-none font-bold text-slate-800 text-lg"
                                            placeholder="Reliance Industries / Tata Steel"
                                        />
                                        {errors.company && (
                                            <p className="text-red-500 text-sm mt-2">{errors.company}</p>
                                        )}
                                    </div>

                                    <div>
                                        <label className="block text-[11px] font-black text-slate-500 uppercase tracking-widest mb-4">
                                            Official Full Name
                                        </label>
                                        <input
                                            type="text"
                                            name="name"
                                            value={formData.name}
                                            onChange={handleInputChange}
                                            className="w-full px-8 py-5 rounded-2xl bg-slate-50 border border-slate-100 focus:ring-4 focus:ring-blue-100 focus:border-blue-600 outline-none font-bold text-slate-800 text-lg"
                                            placeholder="Amit Kumar"
                                        />
                                        {errors.name && (
                                            <p className="text-red-500 text-sm mt-2">{errors.name}</p>
                                        )}
                                    </div>
                                </div>

                                <div className="p-12 bg-[#F8FAFC] rounded-[4rem] border border-slate-100 shadow-inner">
                                    <h4 className="text-[11px] font-black text-blue-600 uppercase tracking-widest mb-12 text-center">
                                        Current License Inventory
                                    </h4>

                                    <div className="grid md:grid-cols-3 gap-10">
                                        <div>
                                            <span className="text-[11px] font-black text-slate-400 uppercase block mb-4">
                                                Active EPCG Licenses
                                            </span>
                                            <input
                                                type="number"
                                                name="epcgActive"
                                                onChange={handleInputChange}
                                                className="w-full bg-white p-6 rounded-2xl font-black text-slate-900 border border-slate-200 focus:border-blue-600 text-2xl"
                                                placeholder="0"
                                            />
                                        </div>

                                        <div>
                                            <span className="text-[11px] font-black text-slate-400 uppercase block mb-4">
                                                Active AA Auths
                                            </span>
                                            <input
                                                type="number"
                                                name="aaActive"
                                                onChange={handleInputChange}
                                                className="w-full bg-white p-6 rounded-2xl font-black text-slate-900 border border-slate-200 focus:border-blue-600 text-2xl"
                                                placeholder="0"
                                            />
                                        </div>

                                        <div>
                                            <span className="text-[11px] font-black text-slate-400 uppercase block mb-4">
                                                Pending IGST Refund
                                            </span>
                                            <div className="relative">
                                                <span className="absolute left-4 top-6 text-2xl font-bold text-slate-400">₹</span>
                                                <input
                                                    type="text"
                                                    name="igstPending"
                                                    onChange={handleInputChange}
                                                    className="w-full bg-white p-6 pl-10 rounded-2xl font-black text-slate-900 border border-slate-200 focus:border-blue-600 text-2xl"
                                                    placeholder="Value"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div>
                                    <label className="block text-[11px] font-black text-slate-500 uppercase tracking-widest mb-8 text-center sm:text-left">
                                        Export Frequency Profile
                                    </label>

                                    <div className="flex flex-wrap gap-4 justify-center sm:justify-start">
                                        {["Weekly", "Monthly", "Quarterly", "Sporadic"].map((freq) => (
                                            <button
                                                key={freq}
                                                type="button"
                                                onClick={() =>
                                                    setFormData((p) => ({ ...p, drawbackFrequency: freq }))
                                                }
                                                className={`px-10 py-4 rounded-full border-2 text-xs font-black transition-all ${formData.drawbackFrequency === freq
                                                    ? "bg-blue-600 border-blue-600 text-white shadow-xl shadow-blue-100 scale-105"
                                                    : "bg-white border-slate-100 text-slate-400 hover:border-blue-200"
                                                    }`}
                                            >
                                                {freq}
                                            </button>
                                        ))}
                                    </div>
                                </div>

                                <div>
                                    <label className="block text-[11px] font-black text-slate-500 uppercase tracking-widest mb-4">
                                        Verified Work Email
                                    </label>

                                    <input
                                        type="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleInputChange}
                                        className="w-full px-8 py-5 rounded-2xl bg-slate-50 border border-slate-100 focus:ring-4 focus:ring-blue-100 focus:border-blue-600 outline-none font-bold text-slate-800 text-lg"
                                        placeholder="compliance.head@company.com"
                                    />

                                    {errors.email && (
                                        <p className="text-red-500 text-sm mt-2">{errors.email}</p>
                                    )}
                                </div>

                                <button
                                    type="submit"
                                    className="w-full bg-blue-600 text-white py-8 rounded-[2.5rem] font-black text-2xl hover:bg-slate-900 transition-all shadow-2xl shadow-blue-200 flex items-center justify-center space-x-4"
                                >
                                    <span>Initiate Diagnostic Audit</span>
                                    <ShieldCheck className="w-10 h-10" />
                                </button>

                                <div className="text-center flex items-center justify-center space-x-3 text-slate-400 border-t border-slate-100 pt-10">
                                    <Lock className="w-4 h-4" />
                                    <span className="text-[11px] font-black uppercase tracking-[0.2em]">
                                        Confidentiality Assured via Secured NDA Protocols.
                                    </span>
                                </div>

                            </form>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AuditComplianceForm;