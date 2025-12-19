import { Check } from "lucide-react";

const Fees = ({ setShowEnrollModal, setEnrollSource }) => {
  return (
    <section id="contact" className="py-20 bg-slate-50">
      <div className="container mx-auto px-4 text-center">

        <h2 className="text-3xl font-bold text-slate-900 mb-8">
          Professional Consultancy
        </h2>

        <div className="max-w-md mx-auto bg-white rounded-xl shadow-lg overflow-hidden border border-slate-200">

          {/* Header */}
          <div className="bg-green-600 text-white py-4">
            <h3 className="text-xl font-bold">Halal Certification</h3>
            <p className="text-sm opacity-90">End-to-End Support</p>
          </div>

          {/* Body */}
          <div className="p-8">
            <div className="text-3xl font-bold text-slate-900 mb-2">
              Request Quote
            </div>

            <p className="text-slate-500 text-sm mb-6">
              Depends on Product Count & Facility
            </p>

            <ul className="text-left space-y-3 mb-8 text-sm text-slate-600 pl-6">
              {[
                "Ingredient Verification",
                "Pre-Audit Documentation",
                "Halal Assurance System (HAS) Setup",
                "Laboratory Coordination",
                "Liaison with Certification Body",
              ].map((item) => (
                <li key={item} className="flex gap-2 items-start">
                  <Check size={16} className="text-green-600 mt-0.5" />
                  {item}
                </li>
              ))}
            </ul>

            {/* CTA */}
            {/* <button
              onClick={() => {
                setEnrollSource("Halal Certification - Start Application");
                setShowEnrollModal(true);
              }}
              className="block w-full bg-brand-900 text-white font-bold py-3 
                         rounded-lg hover:bg-brand-800 transition"
            >
              Start Application
            </button> */}
            <a href = "#Home" className="block w-full bg-brand-900 text-white font-bold py-3 
                         rounded-lg hover:bg-brand-800 transition">Start Application</a>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Fees;
