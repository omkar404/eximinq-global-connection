import React, { useState } from "react";
import { Mail, Phone } from "lucide-react";

const ContactAEO = () => {
  const [form, setForm] = useState({
    companyName: "",
    contactPerson: "",
    email: "",
    phone: "",
  });

  const [loading, setLoading] = useState(false);
  const [msg, setMsg] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!form.companyName || !form.contactPerson || !form.email || !form.phone) {
      setMsg("All fields are required.");
      return;
    }

    setLoading(true);
    setMsg("");

    try {

      const res= await fetch(`${process.env.REACT_APP_API_URL}/api/aeo-support`, {
        method : "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          companyName: form.companyName,
          contactPerson: form.contactPerson,
          email: form.email,
          phone: form.phone
        })
      });

      const data = await res.json();
      console.log(data);

      if (data.error) {
        throw new Error(data.error);
      }

      if (res.status !== 200) {
        throw new Error("Something went wrong. Try again.");
      }

      setMsg("Submitted successfully!");
      setForm({ companyName: "", contactPerson: "", email: "", phone: "" });

    } catch (err) {
      console.error(err);
      setMsg("Something went wrong. Try again.");
    }

    setLoading(false);
  };

  return (
    <section id="contact" className="bg-blue-900 text-white py-20">
      <div className="container mx-auto px-4">

        <div className="max-w-4xl mx-auto bg-blue-800 rounded-2xl overflow-hidden shadow-2xl flex flex-col md:flex-row">

          {/* LEFT */}
          <div className="p-10 md:w-1/2 flex flex-col justify-center">
            <h2 className="text-3xl font-bold mb-6">Contact Cloud Desk</h2>
            <p className="text-blue-200 mb-8">
              Secure your AEO status today.
            </p>

            <div className="space-y-6">
              {/* Email */}
              <a href="mailto:clouddesk@eximinq.in" className="flex items-center group">
                <div className="bg-blue-700 p-3 rounded-lg group-hover:bg-blue-600 transition">
                  <Mail className="w-6 h-6" />
                </div>
                <div className="ml-4">
                  <p className="text-sm text-blue-300">Email Us</p>
                  <p className="text-lg font-semibold">clouddesk@eximinq.in</p>
                </div>
              </a>

              {/* Phone */}
              <a href="tel:+917400096950" className="flex items-center group">
                <div className="bg-blue-700 p-3 rounded-lg group-hover:bg-blue-600 transition">
                  <Phone className="w-6 h-6" />
                </div>
                <div className="ml-4">
                  <p className="text-sm text-blue-300">Call or WhatsApp</p>
                  <p className="text-lg font-semibold">+917400096950</p>
                </div>
              </a>
            </div>
          </div>

          {/* FORM */}
          <div className="bg-white text-gray-800 p-10 md:w-1/2">
            <h3 className="text-2xl font-bold mb-6">Request Callback</h3>

            <form onSubmit={handleSubmit} className="space-y-4">
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Company Name
                </label>
                <input 
                  name="companyName"
                  value={form.companyName}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500" 
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Contact Person
                </label>
                <input 
                  name="contactPerson"
                  value={form.contactPerson}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500" 
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Email
                </label>
                <input 
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500" 
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Phone Number
                </label>
                <input 
                  name="phone"
                  value={form.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500" 
                />
              </div>

              <button 
                type="submit"
                disabled={loading}
                className="w-full bg-red-600 text-white font-bold py-3 rounded-lg hover:bg-red-700 transition shadow-lg"
              >
                {loading ? "Sending..." : "Get Started Now"}
              </button>

              {msg && (
                <p className="text-sm text-center mt-3 text-gray-700">{msg}</p>
              )}

            </form>
          </div>

        </div>

      </div>
    </section>
  );
};

export default ContactAEO;
