import React, { useState } from "react";
import { X, Handshake, Building, Mail } from "lucide-react";

export const ModalEnroll = ({ show, onClose, onSubmit, type }) => {
  const [form, setForm] = useState({
    name: "",
    mobile: "",
    entity: "",
    email: "",
    role: "",
    partner: false,
  });

  const [category, setCategory] = useState("");
  const [subCategory, setSubCategory] = useState("");
  const [issue, setIssue] = useState("");
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);

  /* SERVICE CONFIGURATION */
  const SERVICE_MAP = {
    UN_IIP_Coordination: {
      service: "UN IIP Coordination",
    },
  };

  const serviceConfig = SERVICE_MAP[type];
  const predefinedService = serviceConfig?.service;

  /* Show category dropdown for UN IIP Coordination */
  const showCategory = type === "UN_IIP_Coordination";

  /* Two-level UN IIP OPTIONS — label is used as the key, shortLabel for dropdown display */
  const UN_IIP_CATEGORIES = [
    {
      shortLabel: "Drums (Code: 1)",
      label: "Drums (Code: 1) - Cylindrical packagings with flat or convex heads",
      options: [
        "1A1: Steel drum, non-removable head (tight head)",
        "1A2: Steel drum, removable head (open head)",
        "1B1: Aluminum drum, non-removable head",
        "1B2: Aluminum drum, removable head",
        "1D: Plywood drum",
        "1G: Fibre drum",
        "1H1: Plastic drum, non-removable head",
        "1H2: Plastic drum, removable head",
        "1N1: Metal drum (other than steel/aluminum), non-removable head",
        "1N2: Metal drum (other than steel/aluminum), removable head",
      ],
    },
    {
      shortLabel: "Wooden Barrels (Code: 2)",
      label: "Wooden Barrels (Code: 2) - Originally for wooden barrels (largely obsolete/reserved in modern usage)",
      options: [
        "2C1: Wooden barrel, bung type",
        "2C2: Wooden barrel, slack type",
      ],
    },
    {
      shortLabel: "Jerricans (Code: 3)",
      label: "Jerricans (Code: 3) - Rectangular or polygonal cross-section containers (often used for fuels/chemicals)",
      options: [
        "3A1: Steel jerrican, non-removable head",
        "3A2: Steel jerrican, removable head",
        "3B1: Aluminum jerrican, non-removable head",
        "3B2: Aluminum jerrican, removable head",
        "3H1: Plastic jerrican, non-removable head",
        "3H2: Plastic jerrican, removable head",
      ],
    },
    {
      shortLabel: "Boxes (Code: 4)",
      label: "Boxes (Code: 4) - Rectangular containers with solid sides",
      options: [
        "4A: Steel box",
        "4B: Aluminum box",
        "4C1: Natural wood box, ordinary",
        "4C2: Natural wood box, with sift-proof walls",
        "4D: Plywood box",
        "4F: Reconstituted wood box",
        "4G: Fibreboard box (Most common cardboard carton for dangerous goods)",
        "4H1: Plastic box, expanded",
        "4H2: Plastic box, solid",
        "4N: Metal box (other than steel/aluminum)",
      ],
    },
    {
      shortLabel: "Bags (Code: 5)",
      label: "Bags (Code: 5) - Flexible packaging made of paper, plastic film, textiles, etc.",
      options: [
        "5H1: Woven plastic bag, unlined",
        "5H2: Woven plastic bag, sift-proof",
        "5H3: Woven plastic bag, water-resistant",
        "5H4: Plastic film bag",
        "5L1: Textile bag, unlined",
        "5L2: Textile bag, sift-proof",
        "5L3: Textile bag, water-resistant",
        "5M1: Paper bag, multi-wall",
        "5M2: Paper bag, multi-wall, water-resistant",
      ],
    },
    {
      shortLabel: "Composite Packaging (Code: 6)",
      label: "Composite Packaging (Code: 6) - Consists of an inner receptacle and an outer packaging (single unit)",
      options: [
        "6HA1: Plastic inner receptacle with Steel outer drum",
        "6HA2: Plastic inner receptacle with Steel outer crate/box",
        "6HG1: Plastic inner receptacle with Fibre outer drum",
        "6HG2: Plastic inner receptacle with Fibreboard outer box",
      ],
    },
  ];

  /* Find selected category using label as key */
  const selectedCategoryData = UN_IIP_CATEGORIES.find((c) => c.label === category);

  const resetForm = () => {
    setForm({
      name: "",
      mobile: "",
      entity: "",
      email: "",
      role: "",
      partner: false,
    });
    setCategory("");
    setSubCategory("");
    setIssue("");
  };

  const handleClose = () => {
    resetForm();
    onClose();
  };

  if (!show) return null;

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleCategoryChange = (e) => {
    setCategory(e.target.value);
    setSubCategory(""); // reset sub-category when category changes
  };

  const validate = () => {
    const newErrors = {};
    if (!form.name.trim()) newErrors.name = "Name is required.";
    if (!form.mobile.trim()) newErrors.mobile = "Mobile number is required.";
    if (!form.email.trim()) newErrors.email = "Email is required.";
    if (!form.role) newErrors.role = "Please select your role.";
    if (showCategory && !category) newErrors.category = "Please select a packaging category.";
    if (showCategory && category && !subCategory) newErrors.subCategory = "Please select a packaging type.";
    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const v = validate();
    setErrors(v);
    if (Object.keys(v).length > 0) return;

    setLoading(true);

    try {
      const finalType = type || "Enroll";
      const payload = {
        name: form.name,
        mobile: form.mobile,
        email: form.email,
        entity: form.entity,
        role: form.role,
        partner: form.partner,
        type: finalType,
        category: category || "",
        subCategory: subCategory || "",
        issue: issue || "",
        service: predefinedService || finalType,
      };

      console.log("Final Payload:", payload);

      if (typeof onSubmit === "function") {
        onSubmit(payload);
      }

      const res = await fetch(
        `${process.env.REACT_APP_API_URL}/api/un-iip-certification`,
        // "http://localhost:5000/api/un-iip-certification",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload),
        }
      );

      const data = await res.json();
      console.log("API Response:", data);

      if (res.ok) {
        alert("Registration submitted successfully!");
        resetForm();
        onClose();
      } else {
        alert(data.message || "Submission failed");
      }
    } catch (error) {
      console.error("Submission error:", error);
      alert("Submission failed. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center p-4 bg-gray-900/80 backdrop-blur-sm">
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-lg relative overflow-hidden">
        {/* HEADER */}
        <div className="bg-indigo-900 p-6 text-white flex justify-between items-start">
          <div>
            <h2 className="text-2xl font-bold flex items-center">
              <Handshake className="mr-2 text-teal-400" />
              Enroll Now
            </h2>
            <p className="text-indigo-200 text-sm mt-1">
              Join the CloudDesk Network
            </p>
          </div>
          <button
            onClick={handleClose}
            className="text-white/70 hover:text-white bg-white/10 hover:bg-white/20 rounded-full p-1 transition"
          >
            <X size={20} />
          </button>
        </div>

        {/* BODY */}
        <div className="p-6 md:p-8 overflow-y-auto max-h-[80vh]">
          <form className="space-y-5" onSubmit={handleSubmit}>

            {/* NAME + MOBILE */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold text-gray-700 mb-1 uppercase">
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={form.name}
                  onChange={handleChange}
                  className={`w-full p-3 rounded-lg border text-sm outline-none ${
                    errors.name
                      ? "border-red-400"
                      : "border-gray-300 focus:ring-2 focus:ring-teal-500"
                  }`}
                />
                {errors.name && (
                  <p className="text-xs text-red-500 mt-1">{errors.name}</p>
                )}
              </div>
              <div>
                <label className="block text-xs font-bold text-gray-700 mb-1 uppercase">
                  Mobile No
                </label>
                <input
                  type="tel"
                  name="mobile"
                  placeholder="+91 XXXXX XXXXX"
                  value={form.mobile}
                  onChange={handleChange}
                  className={`w-full p-3 rounded-lg border text-sm outline-none ${
                    errors.mobile
                      ? "border-red-400"
                      : "border-gray-300 focus:ring-2 focus:ring-teal-500"
                  }`}
                />
                {errors.mobile && (
                  <p className="text-xs text-red-500 mt-1">{errors.mobile}</p>
                )}
              </div>
            </div>

            {/* ENTITY NAME */}
            <div>
              <label className="block text-xs font-bold text-gray-700 mb-1 uppercase">
                Entity Name
              </label>
              <div className="relative">
                <Building className="absolute left-3 top-3 text-gray-400" size={16} />
                <input
                  type="text"
                  name="entity"
                  placeholder="Company / Firm Name"
                  value={form.entity}
                  onChange={handleChange}
                  className="w-full pl-10 p-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-teal-500 outline-none text-sm"
                />
              </div>
            </div>

            {/* EMAIL */}
            <div>
              <label className="block text-xs font-bold text-gray-700 mb-1 uppercase">
                Email ID
              </label>
              <div className="relative">
                <Mail className="absolute left-3 top-3 text-gray-400" size={16} />
                <input
                  type="email"
                  name="email"
                  placeholder="official@domain.com"
                  value={form.email}
                  onChange={handleChange}
                  className={`w-full pl-10 p-3 rounded-lg border text-sm outline-none ${
                    errors.email
                      ? "border-red-400"
                      : "border-gray-300 focus:ring-2 focus:ring-teal-500"
                  }`}
                />
              </div>
              {errors.email && (
                <p className="text-xs text-red-500 mt-1">{errors.email}</p>
              )}
            </div>

            {/* SERVICE TYPE (readonly) */}
            {predefinedService && (
              <div>
                <label className="block text-xs font-bold text-gray-700 mb-1 uppercase">
                  Service Type
                </label>
                <input
                  type="text"
                  value={predefinedService}
                  readOnly
                  className="w-full p-3 rounded-lg border bg-gray-100 text-sm"
                />
              </div>
            )}

            {/* STEP 1: PACKAGING CATEGORY — short label shown in dropdown, full label stored as value */}
            {showCategory && (
              <div>
                <label className="block text-xs font-bold text-gray-700 mb-1 uppercase">
                  Packaging Category
                </label>
                <select
                  value={category}
                  onChange={handleCategoryChange}
                  className={`w-full p-3 rounded-lg border text-sm outline-none ${
                    errors.category
                      ? "border-red-400"
                      : "border-gray-300 focus:ring-2 focus:ring-teal-500"
                  }`}
                >
                  <option value="">Select Category</option>
                  {UN_IIP_CATEGORIES.map((cat) => (
                    <option key={cat.label} value={cat.label}>
                      {cat.shortLabel}
                    </option>
                  ))}
                </select>
                {errors.category && (
                  <p className="text-xs text-red-500 mt-1">{errors.category}</p>
                )}
              </div>
            )}

            {/* SELECTED CATEGORY DISPLAY BOX — full label shown here */}
            {showCategory && category && selectedCategoryData && (
              <div className="bg-indigo-50 border border-indigo-200 rounded-lg px-4 py-2">
                <p className="text-xs font-bold text-indigo-700 uppercase mb-0.5">Selected Category</p>
                <p className="text-sm text-indigo-900 font-medium">{selectedCategoryData.label}</p>
              </div>
            )}

            {/* STEP 2: PACKAGING TYPE SUB-DROPDOWN */}
            {showCategory && category && selectedCategoryData && (
              <div>
                <label className="block text-xs font-bold text-gray-700 mb-1 uppercase">
                  Packaging Type
                </label>
                <select
                  value={subCategory}
                  onChange={(e) => setSubCategory(e.target.value)}
                  className={`w-full p-3 rounded-lg border text-sm outline-none ${
                    errors.subCategory
                      ? "border-red-400"
                      : "border-gray-300 focus:ring-2 focus:ring-teal-500"
                  }`}
                >
                  <option value="">Select Packaging Type</option>
                  {selectedCategoryData.options.map((opt) => (
                    <option key={opt} value={opt}>
                      {opt}
                    </option>
                  ))}
                </select>
                {errors.subCategory && (
                  <p className="text-xs text-red-500 mt-1">{errors.subCategory}</p>
                )}
              </div>
            )}

            {/* ROLE SELECTION */}
            <div>
              <label className="block text-xs font-bold text-gray-700 mb-2 uppercase">
                I am a:
              </label>
              <div className="grid grid-cols-2 gap-3">
                {["Importer / Exporter", "CHA", "Logistics", "Forwarder"].map((role) => {
                  const selected = form.role === role;
                  return (
                    <label
                      key={role}
                      className={`flex items-center p-3 border rounded-lg cursor-pointer ${
                        selected
                          ? "border-teal-500 bg-teal-50"
                          : "border-gray-200 hover:bg-indigo-50"
                      }`}
                    >
                      <input
                        type="radio"
                        name="role"
                        value={role}
                        checked={form.role === role}
                        onChange={handleChange}
                        className="w-4 h-4 text-teal-600"
                      />
                      <span className="ml-2 text-sm font-medium text-gray-700">
                        {role}
                      </span>
                    </label>
                  );
                })}
              </div>
              {errors.role && (
                <p className="text-xs text-red-500 mt-2">{errors.role}</p>
              )}
            </div>

            {/* PARTNER CHECKBOX */}
            <div className="bg-teal-50 p-4 rounded-lg border border-teal-100">
              <label className="flex items-start cursor-pointer">
                <input
                  type="checkbox"
                  name="partner"
                  checked={form.partner}
                  onChange={handleChange}
                  className="mt-1 w-5 h-5 text-teal-600"
                />
                <span className="ml-3 text-sm text-gray-800">
                  I am interested in being a
                  <span className="font-bold text-teal-700">
                    {" "}Partner with EXIMINQ CLOUDDESK
                  </span>
                </span>
              </label>
            </div>

            {/* SUBMIT BUTTON */}
            <button
              type="submit"
              disabled={loading}
              className="w-full py-4 bg-gradient-to-r from-teal-600 to-indigo-700 text-white font-bold rounded-xl shadow-lg hover:shadow-xl text-lg"
            >
              {loading ? "Submitting..." : "Submit Enrollment"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};