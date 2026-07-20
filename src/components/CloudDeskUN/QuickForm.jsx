import { useState } from "react";
import { AlertTriangle, Building2, Mail, Phone, User } from "lucide-react";
import { submitServiceQuickForm } from "../../utils/submitServiceQuickForm";

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

const QuickForm = () => {
  const [form, setForm] = useState({
    companyName: "",
    contactPersonName: "",
    email: "",
    unNumber: "",
    packagingType: "",
    mobile: "",
  });

  const [category, setCategory] = useState("");
  const [packagingType, setPackagingType] = useState("");
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);

  /* Find sub-options for selected category */
  const selectedCategoryData = UN_IIP_CATEGORIES.find((c) => c.label === category);

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "mobile") {
      const digitsOnly = value.replace(/\D/g, "").slice(0, 10);
      setForm((prev) => ({ ...prev, [name]: digitsOnly }));
    } else {
      setForm((prev) => ({ ...prev, [name]: value }));
    }
    setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const handleCategoryChange = (e) => {
    setCategory(e.target.value);
    setPackagingType(""); // reset sub-type on category change
    setErrors((prev) => ({ ...prev, category: "", packagingType: "" }));
  };

  /*----------------------
    VALIDATION
  -----------------------*/
  const validate = () => {
    const newErrors = {};

    if (!form.companyName.trim()) {
      newErrors.companyName = "Company name is required";
    }

    if (!form.contactPersonName.trim()) {
      newErrors.contactPersonName = "Contact person name is required";
    }

    if (!form.email.trim()) {
      newErrors.email = "Email ID is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim())) {
      newErrors.email = "Enter a valid email ID";
    }

    if (!form.unNumber) {
      newErrors.unNumber = "UN Number is required";
    }

    if (!category) {
      newErrors.category = "Please select a packaging category";
    }

    if (category && !packagingType) {
      newErrors.packagingType = "Please select a packaging type";
    }

    if (!form.mobile) {
      newErrors.mobile = "Mobile number is required";
    } else if (!/^[6-9]\d{9}$/.test(form.mobile)) {
      newErrors.mobile = "Enter valid 10 digit Indian mobile number";
    }

    return newErrors;
  };

  /*----------------------
    SUBMIT HANDLER
  -----------------------*/
  const handleSubmit = async (e) => {
    e.preventDefault();

    const validationErrors = validate();
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length > 0) return;

    setLoading(true);

    try {
      const payload = {
        serviceKey: "un-iip-certification",
        serviceLabel: "UN IIP Packaging Certification",
        companyName: form.companyName.trim(),
        contactPersonName: form.contactPersonName.trim(),
        email: form.email.trim(),
        mobile: form.mobile.trim(),
        type: "QUICK_FORM",
        source: "UN IIP DG Cargo Assessment",
        details: {
          "Company Name": form.companyName.trim(),
          "Contact Person Name": form.contactPersonName.trim(),
          "Email ID": form.email.trim(),
          "UN Number / Name": form.unNumber.trim(),
          "Packaging Category": category,
          "Packaging Type": packagingType,
          "Mobile Number": form.mobile.trim(),
        },
      };

      console.log("📤 Sending data:", payload);

      await submitServiceQuickForm(payload);

      alert("✅ Request submitted successfully");

      setForm({
        companyName: "",
        contactPersonName: "",
        email: "",
        unNumber: "",
        packagingType: "",
        mobile: "",
      });
      setCategory("");
      setPackagingType("");
    } catch (err) {
      console.error("❌ Error:", err);
      alert(`❌ Submission failed: ${err.message}`);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-white text-slate-800 rounded-xl shadow-2xl p-6 md:p-8">
      {/* Heading */}
      <div className="flex items-center gap-3 mb-2">
        <AlertTriangle className="text-brand-600" size={26} />
        <h3 className="text-2xl font-bold text-brand-900">
          DG Cargo Assessment
        </h3>
      </div>

      <p className="text-slate-500 mb-6 text-sm">
        Find the required Packaging Group for your product.
      </p>

      <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Company Name */}
        <div>
          <label className="block text-sm font-semibold mb-1">
            Company Name <span className="text-red-500">*</span>
          </label>
          <div className="relative">
            <Building2
              size={16}
              className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
            />
            <input
              type="text"
              name="companyName"
              value={form.companyName}
              onChange={handleChange}
              placeholder="e.g. ABC Chemicals Pvt Ltd"
              className={`w-full pl-9 border rounded px-3 py-2 focus:outline-none focus:border-brand-500 ${
                errors.companyName ? "border-red-500" : "border-slate-300"
              }`}
            />
          </div>
          {errors.companyName && (
            <p className="text-red-500 text-xs mt-1">{errors.companyName}</p>
          )}
        </div>

        {/* Contact Person */}
        <div>
          <label className="block text-sm font-semibold mb-1">
            Contact Person Name <span className="text-red-500">*</span>
          </label>
          <div className="relative">
            <User
              size={16}
              className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
            />
            <input
              type="text"
              name="contactPersonName"
              value={form.contactPersonName}
              onChange={handleChange}
              placeholder="e.g. Rohan Mehta"
              className={`w-full pl-9 border rounded px-3 py-2 focus:outline-none focus:border-brand-500 ${
                errors.contactPersonName ? "border-red-500" : "border-slate-300"
              }`}
            />
          </div>
          {errors.contactPersonName && (
            <p className="text-red-500 text-xs mt-1">{errors.contactPersonName}</p>
          )}
        </div>

        {/* Email ID */}
        <div>
          <label className="block text-sm font-semibold mb-1">
            Email ID <span className="text-red-500">*</span>
          </label>
          <div className="relative">
            <Mail
              size={16}
              className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
            />
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="official@company.com"
              className={`w-full pl-9 border rounded px-3 py-2 focus:outline-none focus:border-brand-500 ${
                errors.email ? "border-red-500" : "border-slate-300"
              }`}
            />
          </div>
          {errors.email && (
            <p className="text-red-500 text-xs mt-1">{errors.email}</p>
          )}
        </div>

        {/* UN Number */}
        <div>
          <label className="block text-sm font-semibold mb-1">
            UN Number / Name
          </label>
          <input
            type="text"
            name="unNumber"
            value={form.unNumber}
            onChange={handleChange}
            placeholder="e.g. UN 1263 (Paint) / Class 3"
            className={`w-full border rounded px-3 py-2 focus:outline-none focus:border-brand-500 ${
              errors.unNumber ? "border-red-500" : "border-slate-300"
            }`}
          />
          {errors.unNumber && (
            <p className="text-red-500 text-xs mt-1">{errors.unNumber}</p>
          )}
        </div>

        {/* STEP 1: Packaging Category */}
        <div>
          <label className="block text-sm font-semibold mb-1">
            Packaging Category
          </label>
          <select
            value={category}
            onChange={handleCategoryChange}
            className={`w-full border rounded px-3 py-2 focus:outline-none focus:border-brand-500 ${
              errors.category ? "border-red-500" : "border-slate-300"
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
            <p className="text-red-500 text-xs mt-1">{errors.category}</p>
          )}
        </div>

        {/* SELECTED CATEGORY DISPLAY */}
        {category && selectedCategoryData && (
          <div className="md:col-span-2 bg-blue-50 border border-blue-200 rounded-lg px-4 py-2">
            <p className="text-xs font-bold text-blue-700 uppercase mb-0.5">Selected Category</p>
            <p className="text-sm text-blue-900 font-medium">{selectedCategoryData.label}</p>
          </div>
        )}

        {/* STEP 2: Packaging Type — appears after category selected */}
        {category && selectedCategoryData && (
          <div>
            <label className="block text-sm font-semibold mb-1">
              Packaging Type
            </label>
            <select
              value={packagingType}
              onChange={(e) => {
                setPackagingType(e.target.value);
                setErrors((prev) => ({ ...prev, packagingType: "" }));
              }}
              className={`w-full border rounded px-3 py-2 focus:outline-none focus:border-brand-500 ${
                errors.packagingType ? "border-red-500" : "border-slate-300"
              }`}
            >
              <option value="">Select Packaging Type</option>
              {selectedCategoryData.options.map((opt) => (
                <option key={opt} value={opt}>
                  {opt}
                </option>
              ))}
            </select>
            {errors.packagingType && (
              <p className="text-red-500 text-xs mt-1">{errors.packagingType}</p>
            )}
          </div>
        )}

        {/* Mobile */}
        <div>
          <label className="block text-sm font-semibold mb-1">
            Mobile Number <span className="text-red-500">*</span>
          </label>
          <div className="relative">
            <Phone
              size={16}
              className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
            />
            <input
              type="tel"
              name="mobile"
              value={form.mobile}
              onChange={handleChange}
              placeholder="e.g. 9876543210"
              maxLength={10}
              className={`w-full pl-9 border rounded px-3 py-2 focus:outline-none focus:border-brand-500 ${
                errors.mobile ? "border-red-500" : "border-slate-300"
              }`}
            />
          </div>
          {errors.mobile && (
            <p className="text-red-500 text-xs mt-1">{errors.mobile}</p>
          )}
        </div>

        {/* Submit */}
        <button
          type="submit"
          disabled={loading}
          className={`md:col-span-2 w-full text-white font-bold py-3 rounded-lg transition ${
            loading
              ? "bg-brand-400 cursor-not-allowed"
              : "bg-brand-600 hover:bg-brand-700"
          }`}
        >
          {loading ? "Submitting..." : "Get Packaging Specification"}
        </button>
      </form>
    </div>
  );
};

export default QuickForm;
