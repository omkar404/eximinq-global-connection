import { Check } from "lucide-react";

const Fees = ({ setShowEnrollModal }) => {
return (
<section id="fees" className="py-20 bg-brand-50">
  <div className="container mx-auto px-4 text-center">
    {/* Heading */}
    <h2 className="text-3xl font-bold text-brand-900 mb-8">
      Professional Services
    </h2>

    {/* Card */}
    <div className="max-w-md mx-auto bg-white rounded-xl shadow-lg overflow-hidden border border-slate-200">

      {/* Card Header */}
      <div className="bg-brand-800 text-white py-4">
        <h3 className="text-xl font-bold">
          Design Registration
        </h3>

        <p className="text-sm opacity-80">
          Consultancy & Filing
        </p>
      </div>

      {/* Card Body */}
      <div className="p-8">

        {/* Price */}
        <div className="text-3xl font-bold text-brand-900 mb-2">
          Request Quote
        </div>

        <p className="text-slate-500 text-sm mb-6">
          Govt Fees Separate*
        </p>

        {/* Features */}
        <ul className="text-left space-y-3 mb-8 text-sm text-slate-600 pl-2">

          <li className="flex gap-2 items-start">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="text-green-500 mt-0.5"
            >
              <path d="M20 6 9 17l-5-5"></path>
            </svg>

            Novelty Search & Opinion
          </li>

          <li className="flex gap-2 items-start">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="text-green-500 mt-0.5"
            >
              <path d="M20 6 9 17l-5-5"></path>
            </svg>

            Locarno Classification
          </li>

          <li className="flex gap-2 items-start">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="text-green-500 mt-0.5"
            >
              <path d="M20 6 9 17l-5-5"></path>
            </svg>

            Drawing Preparation Guidance
          </li>

          <li className="flex gap-2 items-start">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="text-green-500 mt-0.5"
            >
              <path d="M20 6 9 17l-5-5"></path>
            </svg>

            Examination Report Reply
          </li>

          <li className="flex gap-2 items-start">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="text-green-500 mt-0.5"
            >
              <path d="M20 6 9 17l-5-5"></path>
            </svg>

            Registration of Proprietorship / Company
          </li>

        </ul>

        {/* Button */}
        {/* <button className="block w-full bg-brand-600 text-white font-bold py-3 rounded-lg hover:bg-brand-700 transition">
          Start Filing
        </button> */}

            <button
                onClick={() =>
                  setShowEnrollModal({
                    open: true,
                    type: "Design_Registration",
                  })
                }
                className="block w-full bg-brand-600 text-white font-bold py-3 rounded-lg hover:bg-brand-700 transition"
              >
                Start Filing
          </button>        

      </div>
    </div>

    {/* Footer Note */}
    <div className="mt-8 text-sm text-slate-500 max-w-2xl mx-auto bg-white p-4 rounded border">

      <strong>*Government Fees:</strong>

      <div className="mt-2 space-y-1">
        <p>Natural Person: ₹ 1,000</p>
        <p>Small Entity / Start-up: ₹ 2,000</p>
        <p>Other (Large Entity): ₹ 4,000</p>
      </div>

    </div>

  </div>
</section>
);
};
export default Fees;