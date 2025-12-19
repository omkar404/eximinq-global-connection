import React, { useState } from "react";
import {
  Send,
  User,
  Building,
  Mail,
  Phone,
  CheckCircle,
  Cloud,
  X,
} from "lucide-react";
import BrandLogo from "../../BrandLogo/BrandLogo";

const ContactSupportModal = ({ open, onClose }) => {
  // Hooks must ALWAYS be at top
  const [formData, setFormData] = useState({
    name: "",
    entityName: "",
    email: "",
    mobile: "",
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.entityName.trim())
      newErrors.entityName = "Entity Name is required";

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email || !emailRegex.test(formData.email)) {
      newErrors.email = "Valid Email ID is required";
    }

    const phoneRegex = /^[0-9]{10}$/;
    if (!formData.mobile || !phoneRegex.test(formData.mobile)) {
      newErrors.mobile = "Valid 10-digit Mobile No is required";
    }

    return newErrors;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    try {
      // LOG HERE — BEFORE FETCH
      console.log("API URL:", process.env.REACT_APP_API_URL);

      const res = await fetch(`${process.env.REACT_APP_API_URL}/api/support`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (data.success) {
        setIsSubmitted(true);
      }
    } catch (err) {
      console.log(err);
    }
  };

  const handleReset = () => {
    setIsSubmitted(false);
    setFormData({ name: "", entityName: "", email: "", mobile: "" });
    setErrors({});
  };

  // Don't change layout — just hide/show everything at once
  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[9999] bg-black/60 backdrop-blur-xl flex items-center justify-center p-4">
      {/* MODAL BOX */}
      <div className="relative bg-white rounded-2xl shadow-2xl w-full max-w-5xl flex flex-col md:flex-row overflow-hidden min-h-[600px] animate-fade-in">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 bg-white/30 hover:bg-white/50 p-2 rounded-full backdrop-blur-md transition"
        >
          <X className="w-6 h-6 text-slate-800" />
        </button>

        {/* Left Side - Branding & Info */}
        <div className="md:w-1/2 bg-blue-600 p-8 md:p-12 flex flex-col justify-between text-white relative overflow-hidden">
          {/* Top Section (Logo + Heading) */}
          <div className="relative z-10 flex flex-col space-y-8">
            {/* LOGO (Proper alignment fix) */}
            <div className="flex flex-col items-start space-y-3 -mt-2">
                       <a href="https://eximinq.in/" className="cursor-pointer">
            <BrandLogo />
          </a>
              {/* EXIMINQ + Global Connections */}
              {/* <svg
        viewBox="0 0 300 60"
        className="h-12 w-auto"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="mainGradient" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#0e7490" />
            <stop offset="50%" stopColor="#1e3a8a" />
            <stop offset="100%" stopColor="#7f1d1d" />
          </linearGradient>
        </defs>

        <text
          x="0"
          y="40"
          fontFamily="sans-serif"
          fontWeight="800"
          fontSize="42"
          fill="url(#mainGradient)"
        >
          EXIMINQ
        </text>

        <text
          x="2"
          y="58"
          fontFamily="sans-serif"
          fontWeight="600"
          fontSize="10"
          letterSpacing="0.28em"
          fill="#dbeafe"
        >
          GLOBAL CONNECTIONS
        </text>
      </svg> */}

              {/* Cloud Desk */}
              <div className="flex items-center space-x-3">
                {/* <svg viewBox="0 0 100 100" className="h-8 w-8 text-indigo-400" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M50 5 L90 25 L90 75 L50 95 L10 75 L10 25 Z" fill="rgba(99, 102, 241, 0.1)"/>
        <circle cx="50" cy="50" r="10" fill="currentColor" className="text-indigo-500" />
        <path d="M50 5 L50 25 M90 25 L70 35 M90 75 L70 65 M50 95 L50 75 M10 75 L30 65 M10 25 L30 35" strokeOpacity="0.5"/>
        <path d="M50 25 L70 35 L70 65 L50 75 L30 65 L30 35 Z" stroke="currentColor"/>
        <circle cx="50" cy="5" r="2" fill="currentColor"/>
        <circle cx="90" cy="25" r="2" fill="currentColor"/>
        <circle cx="90" cy="75" r="2" fill="currentColor"/>
        <circle cx="50" cy="95" r="2" fill="currentColor"/>
        <circle cx="10" cy="75" r="2" fill="currentColor"/>
        <circle cx="10" cy="25" r="2" fill="currentColor"/>
      </svg> */}

                {/* <div className="text-3xl font-bold tracking-tight leading-none">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-200 to-blue-200">
            Cloud
          </span>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-300 to-red-500 ml-1.5">
            Desk
          </span>
        </div> */}
              </div>
            </div>

            {/* Heading */}
            <h1 className="text-4xl md:text-5xl font-bold leading-tight">
              CHA Enrollment <br />
              <span className="text-blue-200">Made Simple.</span>
            </h1>

            {/* Description */}
            <p className="text-blue-100 text-lg leading-relaxed max-w-lg">
              Join the future of customs handling. Streamline your operations
              with our cloud-based solutions tailored for Custom House Agents.
            </p>
          </div>

          {/* Bottom tag */}
          <div className="relative z-10 mt-auto flex items-center space-x-4 text-sm text-blue-200">
            <div className="w-12 h-1 bg-blue-400 rounded-full"></div>
            <span>Secure Registration</span>
          </div>
        </div>

        {/* Right Side - Form */}
        <div className="md:w-1/2 p-8 md:p-12 bg-white flex flex-col justify-center">
          {isSubmitted ? (
            <div className="text-center animate-fade-in-up">
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle className="w-10 h-10 text-green-600" />
              </div>
              <h2 className="text-3xl font-bold text-slate-800 mb-4">
                Request Sent!
              </h2>
              <p className="text-slate-600 mb-8">
                Thank you for your interest. Our team will contact you at{" "}
                <span className="font-semibold text-slate-900">
                  {formData.email}
                </span>{" "}
                shortly.
              </p>
              <button
                onClick={handleReset}
                className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg"
              >
                Submit Another Request
              </button>
            </div>
          ) : (
            <>
              <div className="mb-8">
                <h2 className="text-2xl font-bold text-slate-800 mb-2">
                  Reach Us
                </h2>
                <p className="text-slate-500">
                  Fill in your details to start the enrollment process.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name */}
                <div>
                  <label className="flex items-center gap-2 text-sm font-medium text-slate-700">
                    <User className="w-4 h-4 text-slate-400" /> Name
                  </label>

                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Name"
                    className={`w-full px-4 py-3 rounded-lg border-2 font-semibold
        ${
          errors.name
            ? "border-red-500 bg-red-50"
            : "border-blue-500 bg-blue-50"
        }
        text-slate-900 placeholder-slate-600
        focus:border-blue-700 focus:ring-2 focus:ring-blue-300 transition
      `}
                  />

                  {errors.name && (
                    <p className="text-red-500 text-xs">{errors.name}</p>
                  )}
                </div>

                {/* Entity Name */}
                <div>
                  <label className="flex items-center gap-2 text-sm font-medium text-slate-700">
                    <Building className="w-4 h-4 text-slate-400" /> Entity Name
                  </label>

                  <input
                    type="text"
                    name="entityName"
                    value={formData.entityName}
                    onChange={handleChange}
                    placeholder="Company Name"
                    className={`w-full px-4 py-3 rounded-lg border-2 font-semibold
        ${
          errors.entityName
            ? "border-red-500 bg-red-50"
            : "border-blue-500 bg-blue-50"
        }
        text-slate-900 placeholder-slate-600
        focus:border-blue-700 focus:ring-2 focus:ring-blue-300 transition
      `}
                  />

                  {errors.entityName && (
                    <p className="text-red-500 text-xs">{errors.entityName}</p>
                  )}
                </div>

                {/* Email */}
                <div>
                  <label className="flex items-center gap-2 text-sm font-medium text-slate-700">
                    <Mail className="w-4 h-4 text-slate-400" /> Email
                  </label>

                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Email Id"
                    className={`w-full px-4 py-3 rounded-lg border-2 font-semibold
        ${
          errors.email
            ? "border-red-500 bg-red-50"
            : "border-blue-500 bg-blue-50"
        }
        text-slate-900 placeholder-slate-600
        focus:border-blue-700 focus:ring-2 focus:ring-blue-300 transition
      `}
                  />

                  {errors.email && (
                    <p className="text-red-500 text-xs">{errors.email}</p>
                  )}
                </div>

                {/* Mobile */}
                <div>
                  <label className="flex items-center gap-2 text-sm font-medium text-slate-700">
                    <Phone className="w-4 h-4 text-slate-400" /> Mobile
                  </label>

                  <input
                    type="tel"
                    name="mobile"
                    maxLength={10}
                    value={formData.mobile}
                    onChange={handleChange}
                    placeholder="mobile number"
                    className={`w-full px-4 py-3 rounded-lg border-2 font-semibold
        ${
          errors.mobile
            ? "border-red-500 bg-red-50"
            : "border-blue-500 bg-blue-50"
        }
        text-slate-900 placeholder-slate-600
        focus:border-blue-700 focus:ring-2 focus:ring-blue-300 transition
      `}
                  />

                  {errors.mobile && (
                    <p className="text-red-500 text-xs">{errors.mobile}</p>
                  )}
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 rounded-lg shadow-lg transition duration-200 mt-4 flex items-center justify-center gap-2"
                >
                  <Send className="w-5 h-5" />
                  Request Enrollment
                </button>
              </form>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default ContactSupportModal;
