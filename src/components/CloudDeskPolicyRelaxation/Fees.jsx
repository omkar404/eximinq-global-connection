import { Check } from "lucide-react";
const Fees = ({setShowEnrollModal}) => {
  return (
    //    <!-- Pricing Section -->
    <section id="pricing" class="py-20 bg-slate-50">
      <div class="container mx-auto px-4 text-center">
        <h2 class="text-3xl font-bold text-slate-900 mb-8">
          Professional Fees
        </h2>
        <div class="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <div class="bg-white rounded-xl shadow-lg overflow-hidden border border-slate-200">
            <div class="bg-brand-900 text-white py-4">
              <h3 class="text-xl font-bold">Drafting &amp; Filing</h3>
              <p class="text-sm opacity-80">Petition Preparation</p>
            </div>
            <div class="p-8">
              <div class="text-3xl font-bold text-slate-900 mb-2">
                Request Quote
              </div>
              <p class="text-slate-500 text-sm mb-6">Depends on complexity</p>
              <ul class="text-left space-y-3 mb-8 text-sm text-slate-600 pl-8">
                <li class="flex gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="lucide lucide-check text-green-500"
                    aria-hidden="true"
                  >
                    <path d="M20 6 9 17l-5-5"></path>
                  </svg>{" "}
                  Legal Analysis of Rejection
                </li>
                <li class="flex gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="lucide lucide-check text-green-500"
                    aria-hidden="true"
                  >
                    <path d="M20 6 9 17l-5-5"></path>
                  </svg>{" "}
                  Drafting ANF-2D
                </li>
                <li class="flex gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="lucide lucide-check text-green-500"
                    aria-hidden="true"
                  >
                    <path d="M20 6 9 17l-5-5"></path>
                  </svg>{" "}
                  Hardship Justification
                </li>
                <li class="flex gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="lucide lucide-check text-green-500"
                    aria-hidden="true"
                  >
                    <path d="M20 6 9 17l-5-5"></path>
                  </svg>{" "}
                  Online Filing Support
                </li>
              </ul>
              {/* <button class="block w-full bg-brand-600 text-white font-bold py-3 rounded-lg hover:bg-brand-700 transition">
                Get Estimate
              </button> */}
            <button
                onClick={() =>
                  setShowEnrollModal({
                    open: true,
                    type: "Drafting_Filing",
                  })
                }
                className="block w-full bg-brand-600 text-white font-bold py-3 rounded-lg hover:bg-brand-700 transition"
              >
                Get Estimate
          </button>
            </div>
          </div>
          <div class="bg-white rounded-xl shadow-lg overflow-hidden border border-slate-200">
            <div class="bg-brand-900 text-white py-4">
              <h3 class="text-xl font-bold">Personal Representation</h3>
              <p class="text-sm opacity-80">Hearing at DGFT HQ</p>
            </div>
            <div class="p-8">
              <div class="text-3xl font-bold text-slate-900 mb-2">
                Request Quote
              </div>
              <p class="text-slate-500 text-sm mb-6">Per Visit / Hearing</p>
              <ul class="text-left space-y-3 mb-8 text-sm text-slate-600 pl-8">
                <li class="flex gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="lucide lucide-check text-green-500"
                    aria-hidden="true"
                  >
                    <path d="M20 6 9 17l-5-5"></path>
                  </svg>{" "}
                  Appointment Management
                </li>
                <li class="flex gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="lucide lucide-check text-green-500"
                    aria-hidden="true"
                  >
                    <path d="M20 6 9 17l-5-5"></path>
                  </svg>{" "}
                  Physical Representation
                </li>
                <li class="flex gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="lucide lucide-check text-green-500"
                    aria-hidden="true"
                  >
                    <path d="M20 6 9 17l-5-5"></path>
                  </svg>{" "}
                  Verbal Arguments
                </li>
                <li class="flex gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="lucide lucide-check text-green-500"
                    aria-hidden="true"
                  >
                    <path d="M20 6 9 17l-5-5"></path>
                  </svg>{" "}
                  Liaison with Section Officer
                </li>
              </ul>
              {/* <button class="block w-full bg-brand-600 text-white font-bold py-3 rounded-lg hover:bg-legal-800 transition">
                Book Consultant
              </button> */}
            <button
                onClick={() =>
                  setShowEnrollModal({
                    open: true,
                    type: "Personal_Representation",
                  })
                }
                className="block w-full bg-brand-600 text-white font-bold py-3 rounded-lg hover:bg-legal-800 transition"
              >
                Book Consultant
          </button>
            </div>
          </div>
        </div>
        <p class="text-sm text-slate-500 mt-8">
          *Government Fee for PRC Appeal is ₹ 2,000.
        </p>
      </div>
    </section>
  );
};

export default Fees;
