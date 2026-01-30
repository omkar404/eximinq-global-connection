import React from "react";
import { CheckCircle, AlertTriangle, Search } from "lucide-react";

const ResultsHSN = ({ results, setShowModal }) => {
  return (
    <div className="container mx-auto px-4 py-12">
      
      <h2 className="text-xl font-bold mb-5 flex items-center">
        {results.length ? (
          <CheckCircle className="text-teal-500 mr-2" />
        ) : (
          <AlertTriangle className="text-red-500 mr-2" />
        )}
        Results ({results.length})
      </h2>

      {/* No Results */}
      {!results.length && (
        <div className="bg-white p-10 rounded-xl border text-center shadow">
          <Search size={40} className="mx-auto text-gray-300" />
          <p className="mt-4 text-gray-600">No results found.</p>
          <button
            onClick={() => setShowModal(true)}
            className="mt-4 px-6 py-2 bg-indigo-600 text-white rounded-lg"
          >
            Request Manual Help
          </button>
        </div>
      )}

      {/* Results Table */}
      {!!results.length && (
        <div className="bg-white rounded-xl shadow overflow-hidden border">
          
          <table className="w-full text-sm">
            <thead className="bg-gray-100 text-gray-500 uppercase text-xs">
              <tr>
                <th className="p-3">HS Code</th>
                <th className="p-3">Description</th>
                <th className="p-3">Duty</th>
                <th className="p-3">AIDC</th>
                <th className="p-3">RoDTEP</th>
                <th className="p-3">GST</th>
                <th className="p-3">Import</th>
                <th className="p-3">Export</th>
              </tr>
            </thead>

            <tbody>
              {results.map((i, idx) => (
                <tr key={idx} className="border-t hover:bg-indigo-50/30">

                  <td className="p-3 font-mono text-indigo-700 font-bold">{i.code}</td>
                  <td className="p-3">{i.description}</td>
                  <td className="p-3 text-red-600 font-bold">{i.duty}</td>
                  <td className="p-3">{i.aidc}</td>
                  <td className="p-3 text-green-700 font-bold">{i.rodtep}</td>
                  <td className="p-3">{i.gst}</td>

                  <td className="p-3">
                    <span
                      className={`px-2 py-1 rounded text-xs font-bold ${
                        i.importPolicy.includes("Free")
                          ? "bg-green-100 text-green-700"
                          : "bg-orange-100 text-orange-700"
                      }`}
                    >
                      {i.importPolicy}
                    </span>
                  </td>

                  <td className="p-3">
                    <span
                      className={`px-2 py-1 rounded text-xs font-bold ${
                        i.exportPolicy.includes("Free")
                          ? "bg-green-100 text-green-700"
                          : "bg-red-100 text-red-700"
                      }`}
                    >
                      {i.exportPolicy}
                    </span>
                  </td>

                </tr>
              ))}
            </tbody>
          </table>

          <div className="p-4 bg-gray-50 border-t text-center">
            <button
              onClick={() => setShowModal(true)}
              className="text-indigo-600 font-bold text-sm hover:underline"
            >
              Unlock 12,000+ HSN Codes →
            </button>
          </div>

        </div>
      )}
    </div>
  );
};

export default ResultsHSN;
