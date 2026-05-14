const Fees = ({setShowEnrollModal}) => {
  return (
    <section id="fees" class="py-20 bg-slate-50">
      <div class="container mx-auto px-4 text-center">
        <h2 class="text-3xl font-bold text-slate-900 mb-8">
          Professional Consultancy
        </h2>
        <div class="max-w-md mx-auto bg-white rounded-xl shadow-lg overflow-hidden border border-slate-200">
          <div class="bg-brand-900 text-white py-4">
            <h3 class="text-xl font-bold">MOOWR Implementation</h3>
            <p class="text-sm opacity-80">End-to-End Setup</p>
          </div>
          <div class="p-8">
            <p class="text-slate-500 text-sm mb-6">
              Converting an existing factory into a Private Bonded Warehouse
              requires strict adherence to Customs regulations. We handle the
              entire licensing and compliance lifecycle.
            </p>
            <ul class="text-left space-y-3 mb-8 text-sm text-slate-600 pl-8">
              <li class="flex gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
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
                </svg>
                Feasibility Report &amp; Savings Analysis
              </li>
              <li class="flex gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
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
                </svg>
                Application Filing (Annexure A)
              </li>
              <li class="flex gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
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
                </svg>
                Execution of Triple Duty Bond
              </li>
              <li class="flex gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
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
                </svg>
                Compliance Software Setup (Annexure B)
              </li>
              <li class="flex gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
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
                </svg>
                Monthly Return Filing
              </li>
            </ul>
            {/* <button class="block w-full bg-brand-600 text-white font-bold py-3 rounded-lg hover:bg-brand-700 transition">
              Process Payment
            </button> */}
            <button
                onClick={() =>
                  setShowEnrollModal({
                    open: true,
                    type: "MOOWR_Implementation",
                  })
                }
                className="block w-full bg-brand-600 text-white font-bold py-3 rounded-lg hover:bg-brand-700 transition"
              >
                Process Payment
          </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Fees;
