import { useState } from "react";
import { RefreshCw } from "lucide-react";
import { getApiUrl } from "../../utils/apiBaseUrl";

const QuickForm = () => {
  const [activeTab, setActiveTab] = useState("SB"); // "SB" or "IGST"

  // Single form state covering both tabs
  const [form, setForm] = useState({
    email: "",
    mobile: "",
    shippingBillNo: "",
    shippingBillDate: "",
    portCode: "",
    igstAmount: "",
    numberOfBills: "",
    igstPortCode: "",
    searchType: "SB",
  });

  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    // Clear specific field error on typing
    setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const handleTabChange = (tab) => {
    setActiveTab(tab);
    setForm((prev) => ({ ...prev, searchType: tab }));
    setErrors({}); // reset errors when switching tabs
  };

  const validate = () => {
    const newErrors = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!form.email.trim()) newErrors.email = "Email is required";
    else if (!emailRegex.test(form.email)) newErrors.email = "Invalid email";

    const mobileRegex = /^[6-9]\d{9}$/;
    if (!form.mobile.trim()) newErrors.mobile = "Mobile number required";
    else if (!mobileRegex.test(form.mobile)) newErrors.mobile = "10-digit mobile number";

    if (activeTab === "SB") {
      if (!form.shippingBillNo.trim()) newErrors.shippingBillNo = "Shipping Bill No. required";
      if (!form.shippingBillDate) newErrors.shippingBillDate = "Shipping Bill Date required";
      if (!form.portCode.trim()) newErrors.portCode = "Port Code required";
      else if (form.portCode.length < 4) newErrors.portCode = "Port code min 4 characters";
    } else {
      if (!form.igstAmount) newErrors.igstAmount = "IGST refund amount required";
      else if (parseFloat(form.igstAmount) <= 0) newErrors.igstAmount = "Amount > 0";
      if (!form.numberOfBills) newErrors.numberOfBills = "Number of shipping bills required";
      else if (parseInt(form.numberOfBills) <= 0) newErrors.numberOfBills = "Number > 0";
      if (!form.igstPortCode.trim()) newErrors.igstPortCode = "Port Code required";
      else if (form.igstPortCode.length < 4) newErrors.igstPortCode = "Port code min 4 characters";
    }
    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validate();
    setErrors(validationErrors);
    if (Object.keys(validationErrors).length > 0) return;

    setLoading(true);
    try {
      // Build payload based on active tab
      const payload = {
        email: form.email,
        mobile: form.mobile,
        searchType: form.searchType,
        type: "QUICK_FORM",
      };

      if (activeTab === "SB") {
        payload.shippingBillNo = form.shippingBillNo;
        payload.shippingBillDate = form.shippingBillDate;
        payload.portCode = form.portCode;
      } else {
        payload.igstAmount = form.igstAmount;
        payload.numberOfBills = form.numberOfBills;
        payload.portCode = form.igstPortCode;
      }

      const response = await fetch(
        getApiUrl("/api/igst-refund"),
        // "http://localhost:5000/api/igst-refund",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload),
        }
      );

      const data = await response.json();
      if (!response.ok || !data.success) {
        throw new Error(data.message || data.error || "Submission failed");
      }

      alert("Request submitted successfully!");

      // ✅ RESET ALL FIELDS (like a page refresh)
      setForm({
        email: "",
        mobile: "",
        shippingBillNo: "",
        shippingBillDate: "",
        portCode: "",
        igstAmount: "",
        numberOfBills: "",
        igstPortCode: "",
        searchType: activeTab,
      });
    } catch (err) {
      console.error(err);
      alert(err.message || "Submission failed. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-white text-slate-800 rounded-xl shadow-2xl p-6 md:p-8">
      <div className="flex items-center gap-3 mb-4">
        <RefreshCw className="text-brand-600 w-7 h-7" />
        <h3 className="text-2xl font-bold text-brand-900">Refund Status Check</h3>
      </div>
      <p className="text-slate-500 mb-6 text-sm">
        Find out why your IGST refund is stuck.
      </p>

      {/* TABS */}
      <div className="flex mb-6 border rounded-lg overflow-hidden">
        <button
          type="button"
          onClick={() => handleTabChange("SB")}
          className={`flex-1 py-2 text-sm font-bold transition ${
            activeTab === "SB"
              ? "bg-brand-600 text-white"
              : "bg-slate-100 text-slate-600 hover:bg-slate-200"
          }`}
        >
          Shipping Bill Wise
        </button>
        <button
          type="button"
          onClick={() => handleTabChange("IGST")}
          className={`flex-1 py-2 text-sm font-bold transition ${
            activeTab === "IGST"
              ? "bg-brand-600 text-white"
              : "bg-slate-100 text-slate-600 hover:bg-slate-200"
          }`}
        >
          IGST Refund Amount Wise
        </button>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        {/* SHIPPING BILL WISE FIELDS */}
        {activeTab === "SB" && (
          <>
            <div>
              <label className="block text-sm font-semibold mb-1">Shipping Bill No.</label>
              <input
                type="text"
                name="shippingBillNo"
                value={form.shippingBillNo}
                onChange={handleChange}
                className={`w-full border rounded px-3 py-2 ${
                  errors.shippingBillNo ? "border-red-500" : "border-slate-300"
                }`}
                placeholder="e.g. 1234567"
              />
              {errors.shippingBillNo && <p className="text-red-500 text-xs mt-1">{errors.shippingBillNo}</p>}
            </div>
            <div>
              <label className="block text-sm font-semibold mb-1">Shipping Bill Date</label>
              <input
                type="date"
                name="shippingBillDate"
                value={form.shippingBillDate}
                onChange={handleChange}
                className={`w-full border rounded px-3 py-2 ${
                  errors.shippingBillDate ? "border-red-500" : "border-slate-300"
                }`}
              />
              {errors.shippingBillDate && <p className="text-red-500 text-xs mt-1">{errors.shippingBillDate}</p>}
            </div>
            <div>
              <label className="block text-sm font-semibold mb-1">Port Code</label>
              <input
                type="text"
                name="portCode"
                value={form.portCode}
                onChange={handleChange}
                className={`w-full border rounded px-3 py-2 ${
                  errors.portCode ? "border-red-500" : "border-slate-300"
                }`}
                placeholder="e.g. INNSA1"
              />
              {errors.portCode && <p className="text-red-500 text-xs mt-1">{errors.portCode}</p>}
            </div>
          </>
        )}

        {/* IGST AMOUNT WISE FIELDS */}
        {activeTab === "IGST" && (
          <>
            <div>
              <label className="block text-sm font-semibold mb-1">Total IGST Refund Pending (₹)</label>
              <input
                type="number"
                name="igstAmount"
                value={form.igstAmount}
                onChange={handleChange}
                className={`w-full border rounded px-3 py-2 ${
                  errors.igstAmount ? "border-red-500" : "border-slate-300"
                }`}
                placeholder="e.g. 1250000"
                min="1"
              />
              {errors.igstAmount && <p className="text-red-500 text-xs mt-1">{errors.igstAmount}</p>}
            </div>
            <div>
              <label className="block text-sm font-semibold mb-1">No. of Shipping Bills</label>
              <input
                type="number"
                name="numberOfBills"
                value={form.numberOfBills}
                onChange={handleChange}
                className={`w-full border rounded px-3 py-2 ${
                  errors.numberOfBills ? "border-red-500" : "border-slate-300"
                }`}
                placeholder="e.g. 12"
                min="1"
              />
              {errors.numberOfBills && <p className="text-red-500 text-xs mt-1">{errors.numberOfBills}</p>}
            </div>
            <div>
              <label className="block text-sm font-semibold mb-1">Port Code</label>
              <input
                type="text"
                name="igstPortCode"
                value={form.igstPortCode}
                onChange={handleChange}
                className={`w-full border rounded px-3 py-2 ${
                  errors.igstPortCode ? "border-red-500" : "border-slate-300"
                }`}
                placeholder="e.g. INNSA1"
              />
              {errors.igstPortCode && <p className="text-red-500 text-xs mt-1">{errors.igstPortCode}</p>}
            </div>
          </>
        )}

        {/* COMMON FIELDS */}
        <div>
          <label className="block text-sm font-semibold mb-1">Email ID</label>
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            className={`w-full border rounded px-3 py-2 ${
              errors.email ? "border-red-500" : "border-slate-300"
            }`}
            placeholder="official@company.com"
          />
          {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
        </div>
        <div>
          <label className="block text-sm font-semibold mb-1">Mobile Number</label>
          <input
            type="tel"
            name="mobile"
            value={form.mobile}
            onChange={handleChange}
            className={`w-full border rounded px-3 py-2 ${
              errors.mobile ? "border-red-500" : "border-slate-300"
            }`}
            placeholder="9876543210"
            maxLength="10"
          />
          {errors.mobile && <p className="text-red-500 text-xs mt-1">{errors.mobile}</p>}
        </div>

        <button
          type="submit"
          disabled={loading}
          className="w-full bg-brand-600 hover:bg-brand-700 text-white font-bold py-3 rounded-lg transition disabled:opacity-50"
        >
          {loading ? "Submitting..." : "Get Status Report"}
        </button>
      </form>
    </div>
  );
};

export default QuickForm;
