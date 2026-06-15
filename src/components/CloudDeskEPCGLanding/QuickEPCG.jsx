import React, { useState } from 'react';
import { Mail, PhoneCall } from 'lucide-react';

export default function QuickEPCG() {
  const [formData, setFormData] = useState({
    companyName: '', licenseNumber: '', email: '', mobile: '', requirement: ''
  });
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    setErrors(prev => ({ ...prev, [name]: '' }));
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.companyName.trim()) newErrors.companyName = "Company name is required";
    if (!formData.email.trim()) newErrors.email = "Email is required";
    if (!formData.mobile) newErrors.mobile = "Mobile is required";
    else if (!/^[6-9]\d{9}$/.test(formData.mobile)) newErrors.mobile = "Enter valid 10 digit mobile number";
    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validate();
    setErrors(validationErrors);
    if (Object.keys(validationErrors).length > 0) return;
    setLoading(true);
    try {
      const payload = {
        ...formData,
        type: "QUICK_FORM",
        notifyEmails: ["crm@eximinq.com", "omkarmhetar100@gmail.com", "sheshnathyadav1827499@gmail.com"],
      };
      const response = await fetch(
        `${process.env.REACT_APP_API_URL}/api/epcg-redemption`,
        // "http://localhost:5000/api/epcg-redemption",
     {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const data = await response.json();
      if (!response.ok || !data.success) throw new Error(data.error || "Something went wrong");
      alert(`✅ Thank you! Our expert will contact you within 2 hours.`);
      setFormData({ companyName: '', licenseNumber: '', email: '', mobile: '', requirement: '' });
    } catch (err) {
      alert(`❌ Submission failed: ${err.message}`);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="py-20 bg-slate-900 border-t border-slate-800">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          <div className="w-full lg:w-1/2 text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Let Experts Handle the Math.</h2>
            <p className="text-slate-400 mb-8 text-lg">
              EPCG closure is heavily scrutinized. A single mismatch in shipping bills, e-BRCs, or Nexus certificates can derail the redemption.
            </p>
            <div className="space-y-6">
              <div className="flex items-center p-4 bg-slate-800 rounded-lg border border-slate-700">
                <Mail className="w-8 h-8 text-blue-400 mr-4 shrink-0" />
                <div>
                  <div className="text-sm font-semibold text-slate-500 uppercase tracking-wider">Email Us</div>
                  <div className="text-lg font-bold text-white">clouddesk@eximinq.in</div>
                </div>
              </div>
              <div className="flex items-center p-4 bg-slate-800 rounded-lg border border-slate-700">
                <PhoneCall className="w-8 h-8 text-blue-400 mr-4 shrink-0" />
                <div>
                  <div className="text-sm font-semibold text-slate-500 uppercase tracking-wider">Call or WhatsApp</div>
                  <div className="text-lg font-bold text-white">+91 74000 96950</div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full lg:w-1/2">
            <div className="bg-white rounded-2xl p-8 shadow-2xl">
              <h3 className="text-2xl font-bold text-slate-900 mb-6">Request EPCG Status Audit</h3>
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <input type="text" name="companyName" value={formData.companyName} onChange={handleChange}
                    placeholder="Company Name"
                    className={`w-full px-4 py-3 bg-slate-50 border rounded-lg text-slate-900 focus:outline-none focus:border-blue-500 ${errors.companyName ? 'border-red-500' : 'border-slate-200'}`} />
                  {errors.companyName && <p className="text-red-500 text-xs mt-1">{errors.companyName}</p>}
                </div>
                <div>
                  <input type="text" name="licenseNumber" value={formData.licenseNumber} onChange={handleChange}
                    placeholder="EPCG License Number"
                    className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-lg text-slate-900 focus:outline-none focus:border-blue-500" />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div>
                    <input type="email" name="email" value={formData.email} onChange={handleChange}
                      placeholder="Email Address"
                      className={`w-full px-4 py-3 bg-slate-50 border rounded-lg text-slate-900 focus:outline-none focus:border-blue-500 ${errors.email ? 'border-red-500' : 'border-slate-200'}`} />
                    {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
                  </div>
                  <div>
                    <input type="tel" name="mobile" value={formData.mobile} onChange={handleChange}
                      placeholder="Phone Number" maxLength={10}
                      className={`w-full px-4 py-3 bg-slate-50 border rounded-lg text-slate-900 focus:outline-none focus:border-blue-500 ${errors.mobile ? 'border-red-500' : 'border-slate-200'}`} />
                    {errors.mobile && <p className="text-red-500 text-xs mt-1">{errors.mobile}</p>}
                  </div>
                </div>
                <select name="requirement" value={formData.requirement} onChange={handleChange}
                  className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-lg text-slate-700 focus:outline-none focus:border-blue-500">
                  <option value="">Select Requirement</option>
                  <option>EPCG Redemption / EODC</option>
                  <option>EOP Extension Application</option>
                  <option>EO Status Audit</option>
                </select>
                <button type="submit" disabled={loading}
                  className={`w-full py-4 text-white font-bold rounded-lg transition-colors text-lg mt-4 shadow-lg shadow-blue-500/50 ${loading ? 'bg-blue-400 cursor-not-allowed' : 'bg-blue-600 hover:bg-blue-500'}`}>
                  {loading ? "Submitting..." : "Get Expert Assistance"}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}