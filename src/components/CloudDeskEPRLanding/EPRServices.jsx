import React, { useState } from 'react';
import { Mail, PhoneCall } from 'lucide-react';

export default function EPRServices() {
  const [formData, setFormData] = useState({
    companyName: '',
    Personname: '',
    email: '',
    mobile: '',
    requirement: '',
  });

  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);

  /* -----------------------------
     HANDLE INPUT CHANGE
  ----------------------------- */
  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    setErrors((prev) => ({
      ...prev,
      [name]: '',
    }));
  };

  /* -----------------------------
     VALIDATION
  ----------------------------- */
  const validate = () => {
    const newErrors = {};

    if (!formData.companyName.trim()) {
      newErrors.companyName = 'Company name is required';
    }

    if (!formData.Personname.trim()) {
      newErrors.Personname = 'person name is required';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(
        formData.email
      )
    ) {
      newErrors.email = 'Invalid email address';
    }

    if (!formData.mobile.trim()) {
      newErrors.mobile = 'Mobile number is required';
    } else if (!/^[6-9]\d{9}$/.test(formData.mobile)) {
      newErrors.mobile =
        'Enter valid 10 digit Indian mobile number';
    }

    if (!formData.requirement) {
      newErrors.requirement = 'Please select requirement';
    }

    return newErrors;
  };

  /* -----------------------------
     SUBMIT FORM
  ----------------------------- */
  const handleSubmit = async (e) => {
    e.preventDefault();

    const validationErrors = validate();

    setErrors(validationErrors);

    if (Object.keys(validationErrors).length > 0) {
      return;
    }

    setLoading(true);

    try {
      const payload = {
        companyName: formData.companyName,
        Personname: formData.Personname,
        email: formData.email,
        mobile: formData.mobile,

        // ✅ requirement + category
        requirement: formData.requirement,
        category: formData.requirement,

        type: 'QUICK_FORM',

        notifyEmails: [
          'crm@eximinq.com',
          'omkarmhetar100@gmail.com',
          'sheshnathyadav1827499@gmail.com',
        ],
      };

      console.log('📤 Sending Payload:', payload);

      const response = await fetch(
        `${process.env.REACT_APP_API_URL}/api/epr-annual-returns`,
        // 'http://localhost:5000/api/epr-annual-returns',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(payload),
        }
      );

      const data = await response.json();

      if (!response.ok || !data.success) {
        throw new Error(
          data.message || data.error || 'Submission failed'
        );
      }

      alert(
        `✅ Thank you, ${formData.Personname}! Our compliance expert will contact you within 2 hours.`
      );

      setFormData({
        companyName: '',
        Personname: '',
        email: '',
        mobile: '',
        requirement: '',
      });

      setErrors({});
    } catch (error) {
      console.error('❌ Error:', error);

      alert(`❌ ${error.message}`);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      id="contact"
      className="py-20 bg-white relative border-t border-slate-100"
    >
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          
          {/* LEFT SIDE */}
          <div className="w-full lg:w-1/2">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
              Secure Your Compliance Today.
            </h2>

            <p className="text-slate-600 mb-8 text-lg">
              Do not wait for a customs hold. Our experts
              handle the complex calculations and evidence
              linking required for successful EPR returns.
            </p>

            <div className="space-y-6">

              {/* EMAIL */}
              <div className="flex items-center p-4 bg-slate-50 rounded-lg border border-slate-100">
                <Mail className="w-8 h-8 text-sky-600 mr-4 shrink-0" />

                <div>
                  <div className="text-sm font-semibold text-slate-500 uppercase tracking-wider">
                    Email Us
                  </div>

                  <div className="text-lg font-bold text-slate-900">
                    clouddesk@eximinq.in
                  </div>
                </div>
              </div>

              {/* PHONE */}
              <div className="flex items-center p-4 bg-slate-50 rounded-lg border border-slate-100">
                <PhoneCall className="w-8 h-8 text-sky-600 mr-4 shrink-0" />

                <div>
                  <div className="text-sm font-semibold text-slate-500 uppercase tracking-wider">
                    Call or WhatsApp
                  </div>

                  <div className="text-lg font-bold text-slate-900">
                    +91 74000 96950
                  </div>
                </div>
              </div>

            </div>
          </div>

          {/* RIGHT SIDE */}
          <div className="w-full lg:w-1/2">
            <div className="bg-slate-900 rounded-2xl p-8 shadow-2xl">

              <h3 className="text-2xl font-bold text-white mb-6">
                Request Callback
              </h3>

              <form
                onSubmit={handleSubmit}
                className="space-y-5"
              >

                {/* COMPANY */}
                <div>
                  <input
                    type="text"
                    name="companyName"
                    value={formData.companyName}
                    onChange={handleChange}
                    placeholder="Company Name"
                    className={`w-full px-4 py-3 bg-slate-800 border rounded-lg text-white placeholder:text-slate-500 focus:outline-none focus:border-sky-500 ${
                      errors.companyName
                        ? 'border-red-500'
                        : 'border-slate-700'
                    }`}
                  />

                  {errors.companyName && (
                    <p className="text-red-400 text-xs mt-1">
                      {errors.companyName}
                    </p>
                  )}
                </div>

                {/* CONTACT PERSON */}
                <div>
                  <input
                    type="text"
                    name="Personname"
                    value={formData.Personname}
                    onChange={handleChange}
                    placeholder="Person Name"
                    className={`w-full px-4 py-3 bg-slate-800 border rounded-lg text-white placeholder:text-slate-500 focus:outline-none focus:border-sky-500 ${
                      errors.Personname
                        ? 'border-red-500'
                        : 'border-slate-700'
                    }`}
                  />

                  {errors.Personname && (
                    <p className="text-red-400 text-xs mt-1">
                      {errors.Personname}
                    </p>
                  )}
                </div>

                {/* EMAIL + MOBILE */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">

                  {/* EMAIL */}
                  <div>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="Email Address"
                      className={`w-full px-4 py-3 bg-slate-800 border rounded-lg text-white placeholder:text-slate-500 focus:outline-none focus:border-sky-500 ${
                        errors.email
                          ? 'border-red-500'
                          : 'border-slate-700'
                      }`}
                    />

                    {errors.email && (
                      <p className="text-red-400 text-xs mt-1">
                        {errors.email}
                      </p>
                    )}
                  </div>

                  {/* MOBILE */}
                  <div>
                    <input
                      type="tel"
                      name="mobile"
                      value={formData.mobile}
                      onChange={handleChange}
                      placeholder="Mobile Number"
                      maxLength={10}
                      className={`w-full px-4 py-3 bg-slate-800 border rounded-lg text-white placeholder:text-slate-500 focus:outline-none focus:border-sky-500 ${
                        errors.mobile
                          ? 'border-red-500'
                          : 'border-slate-700'
                      }`}
                    />

                    {errors.mobile && (
                      <p className="text-red-400 text-xs mt-1">
                        {errors.mobile}
                      </p>
                    )}
                  </div>
                </div>

                {/* REQUIREMENT */}
                <div>
                  <select
                    name="requirement"
                    value={formData.requirement}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 bg-slate-800 border rounded-lg text-slate-300 focus:outline-none focus:border-sky-500 ${
                      errors.requirement
                        ? 'border-red-500'
                        : 'border-slate-700'
                    }`}
                  >
                    <option value="">
                      Select Category Requirement
                    </option>

                    <option>
                      EPR Plastic Return (Importer)
                    </option>

                    <option>
                      EPR E-Waste Return (Importer)
                    </option>

                    <option>
                      Both
                    </option>
                  </select>

                  {errors.requirement && (
                    <p className="text-red-400 text-xs mt-1">
                      {errors.requirement}
                    </p>
                  )}
                </div>

                {/* SUBMIT BUTTON */}
                <button
                  type="submit"
                  disabled={loading}
                  className={`w-full py-4 text-white font-bold rounded-lg transition-colors text-lg mt-4 shadow-lg shadow-sky-900/50 ${
                    loading
                      ? 'bg-sky-800 cursor-not-allowed'
                      : 'bg-sky-600 hover:bg-sky-500'
                  }`}
                >
                  {loading
                    ? 'Submitting...'
                    : 'Get Started Now'}
                </button>

              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}