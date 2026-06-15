import React, { useState } from "react";
const SecureSaas = () => {
    const [form, setForm] = useState({
        name: "",
        email: "",
        mobile: "",
        interest: "Annual SaaS Subscription only",
    });

    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);

    const resetForm = () => {
        setForm({
            name: "",
            email: "",
            mobile: "",
            interest: "Annual SaaS Subscription only",
        });
        setError("");
        setLoading(false);
    };

    const validateForm = () => {
        const { name, email, mobile, interest } = form;

        if (!name.trim()) {
            setError("Name is required.");
            return false;
        }
        if (!email.trim()) {
            setError("Email is required.");
            return false;
        }
        if (!mobile.trim()) {
            setError("Mobile number is required.");
            return false;
        }
        if (!interest) {
            setError("Please select your interest.");
            return false;
        }

        setError("");
        return true;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!validateForm()) return;

        try {
            setLoading(true);
            const payload = {
                ...form,
            };
            const res = await fetch(
                `${process.env.REACT_APP_API_URL}/api/saas-enrollment`,
                // `http://localhost:5000/api/saas-enrollment`,
                {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify(payload),
                });
            const data = await res.json();
            console.log(data);
            if (data.error) {
                throw new Error(data.error);
            }
            resetForm();
        } catch (error) {
            setError(error.message);
        } finally {
            setLoading(false);
        }
    };

    return (
        <section id="early-access" className="py-24 bg-white relative">
            <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="bg-blue-50 border border-blue-100 rounded-3xl p-8 md:p-12 shadow-xl">
                    <div className="text-center mb-10">
                        <h2 className="text-3xl font-bold text-slate-900 mb-4">Secure Your Launch Offer</h2>
                        <p className="text-slate-600">
                            Join the waiting list for <strong>August 15, 2026</strong>. Early sign-ups get a <span className="text-blue-600 font-bold">20% Discount</span> on "Historical Data Clean-up" packages.
                        </p>
                    </div>

                    <form className="space-y-5" onSubmit={handleSubmit}>
                        <div className="grid md:grid-cols-2 gap-5">
                            <div>
                                <label className="block text-sm font-semibold text-slate-700 mb-2">Name</label>
                                <input type="text"
                                    name="name"
                                    value={form.name}
                                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                                    className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition" placeholder="Your Name"
                                />
                                {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
                            </div>
                            <div>
                                <label className="block text-sm font-semibold text-slate-700 mb-2">Mobile</label>
                                <input type="text"
                                    name="mobile"
                                    value={form.mobile}
                                    onChange={(e) => setForm({ ...form, mobile: e.target.value })}
                                    className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition" placeholder="+91 98765 43210" />
                                {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
                            </div>
                        </div>
                        <div>
                            <label className="block text-sm font-semibold text-slate-700 mb-2">Work Email</label>
                            <input type="email"
                                name="email"
                                value={form.email}
                                onChange={(e) => setForm({ ...form, email: e.target.value })}
                                className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition" placeholder="you@company.com" />
                            {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
                        </div>
                        <div>
                            <label className="block text-sm font-semibold text-slate-700 mb-2">Interest</label>
                            <select
                                name="interest"
                                value={form.interest}
                                onChange={(e) => setForm({ ...form, interest: e.target.value })}
                                className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition bg-white"
                            >
                                <option disabled selected>
                                    Select your interest
                                </option>
                                <option>Annual SaaS Subscription only</option>
                                <option>1-Year Data Clean-up + SaaS</option>
                                <option>2-Year Data Clean-up + SaaS</option>
                                <option>3-Year Audit Shield + SaaS</option>
                                <option>6-Year Archive + SaaS</option>
                            </select>
                            {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
                        </div>
                        <button
                            type="submit"
                            disabled={loading}
                            className="w-full bg-slate-900 text-white font-bold py-4 rounded-xl shadow-lg hover:bg-slate-800 transition transform hover:-translate-y-1">
                            {loading ? "Joining..." : "Join Priority List"}
                        </button>
                        <p className="text-center text-xs text-slate-500 mt-4">We respect your inbox. Zero spam.</p>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default SecureSaas;
