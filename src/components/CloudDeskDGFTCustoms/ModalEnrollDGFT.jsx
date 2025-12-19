import React from "react";
import { X, Handshake, Building, Mail } from "lucide-react";
import CustomAlert from "../../Common/CustomAlert";

const ModalEnrollDGFT = ({
  show,
  onClose,
  activeTab,
  selectedService,
  setAlert,
}) => {
  if (!show) return null;

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);

    const payload = {
      name: formData.get("name"),
      mobile: formData.get("mobile"),
      entity: formData.get("entity"),
      email: formData.get("email"),
      role: formData.get("role"), // Importer / CHA / Logistics / Forwarder
      partner: formData.get("partner") === "on",
      context: `${activeTab} View - ${
        selectedService?.title || "General Enquiry"
      }`,
    };

    console.log("Submitting Payload:", payload);

    try {
      // DYNAMIC API ROUTE
      const url =
        activeTab === "DGFT" ? "/api/enquiry/dgft" : "/api/enquiry/customs";

      const res = await fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!res.ok) {
        const errorText = await res.text();
        console.error("API Error:", errorText);

        setAlert({
          type: "success",
          message: "Your request has been submitted successfully!",
        });

        return;
      }

      CustomAlert({
        type: "success",
        message: "Your request has been submitted successfully!",
      });

      onClose();
    } catch (err) {
      console.error("Request Failed:", err);
      CustomAlert({
        type: "error",
        message: "Unable to submit at the moment.",
      });
    }
  };

  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center p-4 bg-gray-900/80 backdrop-blur-sm">
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-lg relative overflow-hidden">
        {/* HEADER */}
        <div className="bg-indigo-900 p-6 text-white flex justify-between items-start">
          <div>
            <h2 className="text-2xl font-bold flex items-center">
              <Handshake className="mr-2 text-teal-400" /> Enroll Now
            </h2>
            <p className="text-indigo-200 text-xs mt-1">
              {activeTab} View — {selectedService?.title || "General Enquiry"}
            </p>
          </div>

          <button
            onClick={onClose}
            className="text-white/70 hover:text-white bg-white/10 hover:bg-white/20 rounded-full p-1 transition"
          >
            <X size={20} />
          </button>
        </div>

        {/* FORM */}
        <div className="p-6 md:p-8 overflow-y-auto max-h-[80vh]">
          <form className="space-y-5" onSubmit={handleSubmit}>
            {/* Name + Mobile */}
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold text-gray-700 mb-1 uppercase">
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  className="w-full p-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-teal-500 outline-none text-sm"
                  required
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-gray-700 mb-1 uppercase">
                  Mobile No
                </label>
                <input
                  type="tel"
                  name="mobile"
                  className="w-full p-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-teal-500 outline-none text-sm"
                  required
                />
              </div>
            </div>

            {/* Entity Name */}
            <div>
              <label className="block text-xs font-bold text-gray-700 mb-1 uppercase">
                Entity Name
              </label>
              <div className="relative">
                <Building
                  className="absolute left-3 top-3 text-gray-400"
                  size={16}
                />
                <input
                  type="text"
                  name="entity"
                  className="w-full pl-10 p-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-teal-500 outline-none text-sm"
                  required
                />
              </div>
            </div>

            {/* Email */}
            <div>
              <label className="block text-xs font-bold text-gray-700 mb-1 uppercase">
                Email ID
              </label>
              <div className="relative">
                <Mail
                  className="absolute left-3 top-3 text-gray-400"
                  size={16}
                />
                <input
                  type="email"
                  name="email"
                  className="w-full pl-10 p-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-teal-500 outline-none text-sm"
                  required
                />
              </div>
            </div>

            {/* ROLE SELECTION */}
            <div>
              <label className="block text-xs font-bold text-gray-700 mb-1 uppercase">
                I AM A:
              </label>
              <div className="grid grid-cols-2 gap-3">
                {["Importer / Exporter", "CHA", "Logistics", "Forwarder"].map(
                  (role) => (
                    <label
                      key={role}
                      className="flex items-center gap-2 border p-3 rounded-lg cursor-pointer hover:bg-gray-50"
                    >
                      <input type="radio" name="role" value={role} required />
                      <span className="text-sm">{role}</span>
                    </label>
                  )
                )}
              </div>
            </div>

            {/* PARTNER CHECKBOX */}
            <div className="bg-teal-50 p-4 rounded-lg border border-teal-100">
              <label className="flex items-start cursor-pointer">
                <input
                  type="checkbox"
                  name="partner"
                  className="mt-1 w-5 h-5"
                />
                <span className="ml-3 text-sm text-gray-800">
                  I am interested in being a{" "}
                  <strong className="text-teal-700">
                    Partner with EXIMINQ CLOUDDESK
                  </strong>
                  .
                </span>
              </label>
            </div>

            {/* SUBMIT BUTTON */}
            <button
              type="submit"
              className="w-full py-4 bg-gradient-to-r from-teal-600 to-indigo-700 text-white font-bold rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition text-lg"
            >
              Submit Enrollment
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ModalEnrollDGFT;
