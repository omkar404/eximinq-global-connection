import React, { useState } from "react";

const RequestAuditForm = ({ onSubmit }) => {
  const [loading, setLoading] = useState(false);

  // Keep your exact original state structure
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    mobile: "",
    licenseType: "EPCG",
    licenseNumber: "",
    issueDesc: "Stuck at EODC Stage",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const {
      firstName,
      lastName,
      email,
      mobile,
      licenseType,
      licenseNumber,
      issueDesc,
    } = formData;

    if (!firstName || !lastName || !email || !mobile) {
      alert("Please fill all required fields");
      return;
    }

    try {
      setLoading(true);

      const payload = {
        name: `${firstName} ${lastName}`,
        mobile,
        email,
        type: "epcg_closure",
        licenseType, // ✅ correct field
        licenseNumber,
        issueDescription: issueDesc, // ✅ correct field
      };

      console.log("Correct Payload:", payload);

      const response = await fetch(
        `${process.env.REACT_APP_API_URL}/api/epcg-closure-services`,
        // "http://localhost:5000/api/epcg-closure-services",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(payload),
        },
      );

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message);
      }

      alert("Request submitted successfully!");
    } catch (error) {
      console.error(error);

      alert(error.message || "Submission failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="lg:w-1/2 w-full">
      <div className="bg-white rounded-2xl p-8 shadow-2xl text-slate-900 border border-slate-200">
        <h3 className="text-2xl font-bold mb-6 border-b pb-4 text-slate-800">
          Request Audit
        </h3>

        <form className="space-y-5" onSubmit={handleSubmit}>
          {/* Your EXACT original UI - NO CHANGES */}
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-bold text-slate-500 uppercase mb-1">
                First Name
              </label>
              <input
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                className="w-full border border-slate-300 rounded-lg px-4 py-3 focus:border-teal-500 focus:ring-2 focus:ring-teal-200 outline-none transition"
                placeholder="John"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-500 uppercase mb-1">
                Last Name
              </label>
              <input
                type="text"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                className="w-full border border-slate-300 rounded-lg px-4 py-3 focus:border-teal-500 focus:ring-2 focus:ring-teal-200 outline-none transition"
                placeholder="Doe"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-500 uppercase mb-1">
              Company Email
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full border border-slate-300 rounded-lg px-4 py-3 focus:border-teal-500 focus:ring-2 focus:ring-teal-200 outline-none transition"
              placeholder="john@company.com"
            />
          </div>

          {/* Add Mobile field - this was missing in your original UI */}
          <div>
            <label className="block text-xs font-bold text-slate-500 uppercase mb-1">
              Mobile Number
            </label>
            <input
              type="tel"
              name="mobile"
              value={formData.mobile}
              onChange={handleChange}
              className="w-full border border-slate-300 rounded-lg px-4 py-3 focus:border-teal-500 focus:ring-2 focus:ring-teal-200 outline-none transition"
              placeholder="9876543210"
            />
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-500 uppercase mb-1">
              License Type
            </label>
            <select
              name="licenseType"
              value={formData.licenseType}
              onChange={handleChange}
              className="w-full border border-slate-300 rounded-lg px-4 py-3 focus:border-teal-500 focus:ring-2 focus:ring-teal-200 outline-none bg-white transition"
            >
              <option value="EPCG">EPCG Scheme</option>
              <option value="AA">Advance Authorization (AA)</option>
              <option value="DFIA">DFIA License</option>
            </select>
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-500 uppercase mb-1">
              License Number (Optional)
            </label>
            <input
              type="text"
              name="licenseNumber"
              value={formData.licenseNumber}
              onChange={handleChange}
              className="w-full border border-slate-300 rounded-lg px-4 py-3 focus:border-teal-500 focus:ring-2 focus:ring-teal-200 outline-none transition"
              placeholder="e.g. 033000..."
            />
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-500 uppercase mb-1">
              Issue Description
            </label>
            <select
              name="issueDesc"
              value={formData.issueDesc}
              onChange={handleChange}
              className="w-full border border-slate-300 rounded-lg px-4 py-3 focus:border-teal-500 focus:ring-2 focus:ring-teal-200 outline-none bg-white transition"
            >
              <option>Stuck at EODC Stage</option>
              <option>Bond Cancellation Pending</option>
              <option>Shipping Bill Mismatch</option>
              <option>Lost Original License</option>
              <option>Block-wise Extension</option>
              <option>Annual Average Shortfall</option>
              <option>Other</option>
            </select>
          </div>

          <button
            type="submit"
            disabled={loading}
            className={`w-full bg-slate-900 text-white font-bold py-4 rounded-lg hover:bg-slate-800 transition shadow-lg mt-2 flex justify-center items-center group ${
              loading ? "opacity-50 cursor-not-allowed" : ""
            }`}
          >
            {loading ? (
              "Submitting..."
            ) : (
              <>
                Check My File
                <svg
                  className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </>
            )}
          </button>

          <p className="text-xs text-center text-slate-400 mt-4">
            We respect your privacy. Your data is never shared.
          </p>
        </form>
      </div>
    </div>
  );
};

export default RequestAuditForm;
