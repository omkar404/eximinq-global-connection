import { Link } from "react-router-dom";
import { useState } from "react";

export default function ServicesDirectory() {
  const [search, setSearch] = useState("");

  const services = [
    {
      category: "DGFT & Export Licenses",
      id: "dgft",
      items: [
        {
          title: "IEC Registration & Updates",
          desc: "New Issuance, Amendment, Activation",
          path: "/services/import-export-code",
        },
        {
          title: "EOP Extension",
          desc: "Extension of Export Obligation Period",
          path: "/services/eop-extension",
        },
      ],
    },
    {
      category: "Customs, Port & AEO",
      id: "customs",
      items: [
        {
          title: "ICEGATE Registration",
          desc: "User Registration & Profile Management",
          path: "/services/icegate-registration",
        },
        {
          title: "AEO Certification",
          desc: "T1, T2, T3 & LEO Status",
          path: "/services/aeo-certification",
        },
      ],
    },
  ];

  const filtered = services.map((section) => ({
    ...section,
    items: section.items.filter(
      (item) =>
        item.title.toLowerCase().includes(search) ||
        item.desc.toLowerCase().includes(search)
    ),
  }));

  return (
    <div className="bg-gray-50 text-gray-800">
      {/* Hero */}
      <div className="bg-gradient-to-r from-slate-900 to-blue-900 text-white py-16">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-4">
            Master Service Directory
          </h1>
          <p className="text-blue-100 mb-8">
            Search over 100+ Trade Compliance & Regulatory Services
          </p>

          <input
            type="text"
            placeholder="Search services..."
            className="w-full max-w-xl px-5 py-4 rounded-full text-gray-800"
            onChange={(e) => setSearch(e.target.value.toLowerCase())}
          />
        </div>
      </div>

      {/* Content */}
      <main className="max-w-7xl mx-auto px-4 py-12 space-y-16">
        {filtered.map(
          (section) =>
            section.items.length > 0 && (
              <section key={section.id}>
                <h2 className="text-2xl font-bold mb-6">
                  {section.category}
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {section.items.map((item) => (
                    <Link
                      key={item.path}
                      to={item.path}
                      className="block bg-white p-5 rounded-lg border shadow-sm hover:border-blue-400 transition"
                    >
                      <h3 className="font-semibold text-blue-900">
                        {item.title}
                      </h3>
                      <p className="text-xs text-gray-500 mt-1">
                        {item.desc}
                      </p>
                    </Link>
                  ))}
                </div>
              </section>
            )
        )}
      </main>
    </div>
  );
}
