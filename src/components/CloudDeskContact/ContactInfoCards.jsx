import React, { useEffect, useState } from "react";
const ContactInfoCards = () => {
  const [showMapEmbed, setShowMapEmbed] = useState(false);
  const [form, setForm] = useState({
    firstname: "",
    lastName: "",
    email: "",
    issuecategory: "",
    details: "",
  });

  const resetForm = () => {
    setForm({
      firstname: "",
      lastName: "",
      email: "",
      issuecategory: "",
      details: "",
    });
  };

  const validateForm = () => {
    if (!form.firstname || !form.lastName || !form.email || !form.details) {
      alert("Please fill in all required fields.");
      return false;
    }
    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validateForm()) {
      const payload = {
        firstname: form.firstname,
        lastName: form.lastName,
        email: form.email,
        issuecategory: form.issuecategory,
        details: form.details,
      };
      const response = await fetch(
        `${process.env.REACT_APP_API_URL}/api/contact-us`,
        // "http://localhost:5000/api/contact-us",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload),
        }
      );

      const data = await response.json()

      if (!response.ok || !data.success) {
        alert("There was an error submitting your message. Please try again.");
      } else {
        alert("Your message has been sent successfully!");
      }
      resetForm();
    }
  };

  useEffect(() => {
    setShowMapEmbed(true);
  }, []);

  return (
    <section id="consult-form" className="py-24 bg-slate-950 relative">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col lg:flex-row gap-12">

          {/* FORM */}
          <div className="lg:w-1/2 reveal">
            <h2 className="text-3xl font-bold text-white mb-2">
              Open a Compliance Ticket
            </h2>
            <p className="text-slate-400 mb-8 text-sm">
              Route your query directly to a Senior Consultant.
            </p>

            <form className="space-y-6" onSubmit={handleSubmit}>

              <div className="grid grid-cols-2 gap-6">
                <div className="group">
                  <label className="block text-xs font-bold text-slate-500 uppercase mb-2 group-focus-within:text-brand-teal transition">
                    First Name
                  </label>
                  <input
                    type="text"
                    name="firstname"
                    value={form.firstname}
                    onChange={(e) => setForm({ ...form, firstname: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg input-tech"
                    placeholder="Your Name"
                  />
                </div>

                <div className="group">
                  <label className="block text-xs font-bold text-slate-500 uppercase mb-2 group-focus-within:text-brand-teal transition">
                    Last Name
                  </label>
                  <input
                    type="text"
                    name="lastName"
                    value={form.lastName}
                    onChange={(e) => setForm({ ...form, lastName: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg input-tech"
                    placeholder="Your Last Name"
                  />
                </div>
              </div>

              <div className="group">
                <label className="block text-xs font-bold text-slate-500 uppercase mb-2 group-focus-within:text-brand-teal transition">
                  Work Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg input-tech"
                  placeholder="your@company.com"
                />
              </div>

              <div className="group">
                <label className="block text-xs font-bold text-slate-500 uppercase mb-2 group-focus-within:text-brand-teal transition">
                  Issue Category
                </label>

                <div className="relative">
                  <select
                    value={form.issuecategory}
                    onChange={(e) =>
                      setForm({ ...form, issuecategory: e.target.value })
                    }
                    className="w-full px-4 py-3 rounded-lg input-tech appearance-none cursor-pointer"
                    required
                  >
                    <option value="">Select Issue Category</option>
                    <option value="EPCG / Advance Auth Closure">
                      EPCG / Advance Auth Closure
                    </option>
                    <option value="RoDTEP / Refund Recovery">
                      RoDTEP / Refund Recovery
                    </option>
                    <option value="AEO Certification Audit">
                      AEO Certification Audit
                    </option>
                    <option value="Retainer (Virtual Desk)">
                      Retainer (Virtual Desk)
                    </option>
                    <option value="Urgent Customs Clearance">
                      Urgent Customs Clearance
                    </option>
                  </select>

                  <div className="absolute inset-y-0 right-0 flex items-center px-4 pointer-events-none text-slate-500">
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </div>
                </div>
              </div>

              <div className="group">
                <label className="block text-xs font-bold text-slate-500 uppercase mb-2 group-focus-within:text-brand-teal transition">
                  Details
                </label>

                <textarea
                  name="details"
                  value={form.details}
                  onChange={(e) => setForm({ ...form, details: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg input-tech h-32"
                  placeholder="License No / Error Code / Description..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-teal-600 to-teal-500 hover:from-teal-500 hover:to-teal-400 text-white font-bold py-4 rounded-lg transition shadow-lg shadow-teal-500/20 flex justify-center items-center gap-2 transform hover:-translate-y-1"
              >
                Create Ticket
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  />
                </svg>
              </button>

            </form>
          </div>

          {/* MAP */}
          <div id="map" className="lg:w-1/2 reveal">
            <div className="h-full bg-slate-900 rounded-2xl overflow-hidden border border-slate-800 min-h-[500px] relative group">

              {showMapEmbed ? (
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6822.328794049008!2d72.84620049357912!3d19.1313594!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b7cecfe0f0fd%3A0x82655eeb16d16558!2sHubtown%20Viva!5e1!3m2!1sen!2sin!4v1776704877694!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{
                    border: 0,
                    filter: "invert(90%) hue-rotate(180deg) contrast(90%)",
                  }}
                  allowFullScreen=""
                  loading="lazy"
                  className="opacity-80 group-hover:opacity-100 transition-opacity duration-500"
                  title="Google Map"
                ></iframe>
              ) : (
                <div className="absolute inset-0 flex items-center justify-center bg-slate-950/80 px-8 text-center">
                  <div>
                    <p className="text-xs font-bold text-teal-400 uppercase tracking-wide">
                      Mumbai Operations Base
                    </p>
                    <p className="mt-3 text-sm font-semibold text-white">
                      EXIMINQ, 1010, Hubtown Viva, Near Mogra Metro Station,
                      Jogeshwari East, Mumbai, Maharashtra 400060
                    </p>
                    <p className="mt-3 text-sm text-slate-400">
                      Interactive map loads after the page becomes active in the browser.
                    </p>
                  </div>
                </div>
              )}

              <div className="absolute bottom-6 left-6 right-6 glass-panel p-4 rounded-xl flex items-center justify-between">
                <div>
                  <p className="text-xs font-bold text-teal-400 uppercase tracking-wide">
                    Location Detected
                  </p>
                  <p className="text-sm font-semibold text-white">
                    EXIMINQ, 1010, 
                    Hubtown Viva,
                    Near Mogra Metro Station, 
                    Jogeshwari East, Mumbai, Maharashtra 400060
                  </p>
                </div>

                <a
                  href="https://goo.gl/maps/XYZ"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-brand-teal rounded-lg flex items-center justify-center text-white hover:bg-white hover:text-brand-teal transition"
                >
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                  </svg>
                </a>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ContactInfoCards;
