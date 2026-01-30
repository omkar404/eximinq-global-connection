import React from "react";
import { LayoutDashboard, PlayCircle } from "lucide-react";

const HeroSaas = ({ setShowModal }) => {
  return (
    <header className="relative bg-[#000000] text-white pt-40 pb-24 overflow-hidden">

      {/* Background Blobs */}
      <div className="absolute inset-0 z-0 opacity-20">
        <div className="absolute top-0 right-0 w-96 h-96 bg-teal-500 rounded-full mix-blend-multiply filter blur-3xl animate-blob" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-red-600 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000" />
        <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-indigo-500 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-4000" />

        {/* World Map Background */}
        <div className="absolute inset-0 bg-[url('https://upload.wikimedia.org/wikipedia/commons/e/ec/World_map_blank_without_borders.svg')] bg-cover bg-center opacity-10" />
      </div>

      {/* Container */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12">

          {/* LEFT SECTION — TEXT */}
          <div className="lg:w-1/2 mb-12 lg:mb-0">
            <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-teal-900/50 border border-teal-500/30 text-teal-300 text-xs font-bold uppercase tracking-wider mb-6">
              <span className="w-2 h-2 bg-teal-400 rounded-full mr-2 animate-ping"></span>
              Launching Now
            </div>

            <h1 className="text-5xl lg:text-6xl font-extrabold leading-tight mb-6">
              Trade Compliance <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-cyan-300">
                On Autopilot.
              </span>
            </h1>

            <p className="text-xl text-indigo-200 mb-8 max-w-lg leading-relaxed">
              Experience the future of EXIM management. Tailor-made SaaS solutions for Importers, Exporters, and CHAs with real-time progress tracking.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={() => setShowModal(true)}
                className="px-8 py-4 bg-teal-500 hover:bg-teal-400 text-white font-bold rounded-xl shadow-lg shadow-teal-900/20 transition transform hover:-translate-y-1 flex items-center justify-center"
              >
                <LayoutDashboard className="mr-2" size={20} /> 
                Get Early Access
              </button>

              <button
                className="px-8 py-4 bg-transparent border border-indigo-400 text-indigo-100 font-bold rounded-xl hover:bg-indigo-800/50 transition flex items-center justify-center"
              >
                <PlayCircle className="mr-2" size={20} />
                Watch Demo
              </button>
            </div>
          </div>

          {/* RIGHT SECTION — MOCK DASHBOARD */}
          <div className="lg:w-1/2 relative">
            <div className="relative z-10 bg-white rounded-2xl shadow-2xl border border-gray-200 overflow-hidden transform rotate-1 hover:rotate-0 transition duration-500">

              {/* Browser Header */}
              <div className="bg-gray-100 px-4 py-3 border-b border-gray-200 flex items-center space-x-2">
                <div className="w-3 h-3 rounded-full bg-red-400"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                <div className="w-3 h-3 rounded-full bg-green-400"></div>
                <div className="ml-4 text-xs text-gray-500 font-medium">CloudDesk Dashboard</div>
              </div>

              {/* Dashboard Content */}
              <div className="p-6 bg-gray-50">

                <div className="flex justify-between items-center mb-6">
                  <div>
                    <h3 className="text-lg font-bold text-gray-800">Active Services</h3>
                    <p className="text-xs text-gray-500">Updated 2 mins ago</p>
                  </div>
                  <div className="bg-indigo-100 text-indigo-700 px-3 py-1 rounded-full text-xs font-bold">
                    Premium Plan
                  </div>
                </div>

                <div className="space-y-4">

                  {/* Card 1 */}
                  <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-100 relative overflow-hidden group">
                    <div className="absolute left-0 top-0 bottom-0 w-1 bg-teal-500"></div>
                    <div className="flex justify-between items-start mb-2">
                      <div>
                        <h4 className="font-bold text-gray-700 text-sm">Advance License Application</h4>
                        <p className="text-xs text-gray-400">File ID: #ADV-2025-001</p>
                      </div>
                      <span className="text-xs font-bold text-teal-600 bg-teal-50 px-2 py-1 rounded">In Progress</span>
                    </div>

                    <div className="w-full bg-gray-200 rounded-full h-2 mb-2">
                      <div className="bg-teal-500 h-2 rounded-full" style={{ width: "75%" }}></div>
                    </div>

                    <div className="flex justify-between text-xs text-gray-500">
                      <span>Doc Review</span>
                      <span className="text-gray-800 font-bold">DGFT Submission (Current)</span>
                      <span>Approval</span>
                    </div>
                  </div>

                  {/* Card 2 */}
                  <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-100 relative overflow-hidden">
                    <div className="absolute left-0 top-0 bottom-0 w-1 bg-orange-500"></div>

                    <div className="flex justify-between items-start mb-2">
                      <div>
                        <h4 className="font-bold text-gray-700 text-sm">EPCG Closure Audit</h4>
                        <p className="text-xs text-gray-400">File ID: #EPCG-2024-892</p>
                      </div>
                      <span className="text-xs font-bold text-orange-600 bg-orange-50 px-2 py-1 rounded">Pending Action</span>
                    </div>

                    <div className="w-full bg-gray-200 rounded-full h-2 mb-2">
                      <div className="bg-orange-500 h-2 rounded-full" style={{ width: "40%" }}></div>
                    </div>

                    <div className="flex justify-between text-xs text-gray-500">
                      <span>Data Entry</span>
                      <span className="text-gray-800 font-bold">Upload Docs (Waiting)</span>
                      <span>Audit</span>
                    </div>
                  </div>

                </div>
              </div>
            </div>

            {/* Decorations */}
            <div className="absolute -right-10 -bottom-10 w-40 h-40 bg-teal-400/20 rounded-full filter blur-xl"></div>
            <div className="absolute -left-10 top-20 w-24 h-24 bg-indigo-400/20 rounded-full filter blur-xl"></div>
          </div>

        </div>
      </div>
    </header>
  );
};

export default HeroSaas;
