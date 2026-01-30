
import React ,{ useState } from "react";
import { Phone, Mail } from "lucide-react";


const ContactCTA = () => {

  const [form, setForm] = useState({
    companyName: "",
    mobile: "",
    scripType: "RODTEP",
    action: "Selling",
  });

  const [loading, setLoading] = useState(false);

    const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  
  const handleSubmit = async (e) => {
  e.preventDefault();

  if (!form.companyName || !form.mobile) {
    alert("Company name and mobile are required");
    return;
  }

  try {
    setLoading(true);

const payload = {
  companyName: form.companyName,
  scheme: form.scripType,   // "RODTEP" | "RoSCTL"
  action: form.action,      // "Selling" | "Buying"
  mobile: form.mobile,
};


    const res = await fetch(
      `${process.env.REACT_APP_API_URL}/api/rodtep-rosctl-trading`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      }
    );

    const data = await res.json();

    if (!res.ok || !data.success) {
      throw new Error(data.error || "API failed");
    }

    alert("Request submitted successfully");

    setForm({
      companyName: "",
      mobile: "",
      scripType: "RODTEP",
      action: "Selling",
    });

  } catch (err) {
    console.error("Submit error:", err);
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
      <div className="max-w-4xl mx-auto bg-blue-600 rounded-3xl overflow-hidden shadow-2xl flex flex-col md:flex-row">
        {/* Left side */}
        <div className="p-10 md:w-1/2 bg-blue-700 text-white flex flex-col justify-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Trade?</h2>
          <p className="text-blue-100 mb-8 text-lg">
            Lock in today’s rates with our CloudDesk. We manage the complete
            documentation and settlement process.
          </p>

          <div className="space-y-4">
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center">
                <Phone size={20} />
              </div>
              <div>
                <p className="text-xs uppercase font-bold text-blue-200 tracking-wider">
                  Call Us 24/7
                </p>
                <p className="text-xl font-bold">+91 74000 96950</p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center">
                <Mail size={20} />
              </div>
              <div>
                <p className="text-xs uppercase font-bold text-blue-200 tracking-wider">
                  Email Us
                </p>
                <p className="text-xl font-bold">clouddesk@eximinq.in</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right side - form */}
        <div className="p-10 md:w-1/2 bg-white">
<form className="space-y-4" onSubmit={handleSubmit}>

            <h3 className="text-xl font-bold text-slate-900 mb-4">
              Request Callback
            </h3>

            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">
                Company Name
              </label>
<input
  type="text"
  name="companyName"
  value={form.companyName}
  onChange={handleChange}
  placeholder="Enter company name"
  className="w-full px-4 py-2 rounded-lg border"
/>

            </div>

            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">
                Mobile Number
              </label>
<input
  type="tel"
  name="mobile"
  value={form.mobile}
  onChange={handleChange}
  placeholder="+91"
  className="w-full px-4 py-2 rounded-lg border"
/>

            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">
                  Scrip Type
                </label>
<select
  name="scripType"
  value={form.scripType}
  onChange={handleChange}
  className="w-full px-4 py-2 rounded-lg border"
>
  <option>RODTEP</option>
  <option>RoSCTL</option>
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
  className="w-full px-4 py-2 rounded-lg border"
>
  <option>Selling</option>
  <option>Buying</option>
</select>

              </div>
            </div>

<button
  type="submit"
  disabled={loading}
  className="w-full bg-slate-900 text-white font-bold py-3 rounded-lg"
>
  {loading ? "Submitting..." : "Submit Request"}
</button>

          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactCTA;
