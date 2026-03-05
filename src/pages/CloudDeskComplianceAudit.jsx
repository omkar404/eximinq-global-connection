// https://gemini.google.com/share/bae7b72253cd
import React, { useState, useEffect } from 'react';
import {
  ShieldCheck,
  BarChart3,
  FileText,
  RefreshCcw,
  LayoutDashboard,
  CheckCircle2,
  AlertCircle,
  ArrowRight,
  Database,
  Search,
  ChevronRight,
  TrendingDown,
  Clock,
  Lock,
  Zap,
  HardHat,
  History,
  ShoppingCart,
  Star,
  ArrowUpRight,
  Wallet,
  Activity,
  Briefcase,
  Layers,
  Target
} from 'lucide-react';
import BrandLogo from '../components/BrandLogo/BrandLogo';
import MainNavbar from '../Common/MainNavbar';
import TopBar from '../Common/TopBar';
import { Footer } from '../Common/Footer';
import AuditComplianceForm from '../components/CloudDeskComplianceAudit/auditcomplianceform';


const App = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    epcgActive: '',
    aaActive: '',
    igstPending: '',
    drawbackFrequency: 'Monthly',
    auditType: 'Full Compliance'
  });

  const [formSubmitted, setFormSubmitted] = useState(false);
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0 });

  // Clouddesk Launch: April 19, 2026
  const launchDate = new Date('April 19, 2026 09:00:00');

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date();
      const diff = launchDate - now;
      if (diff > 0) {
        setTimeLeft({
          days: Math.floor(diff / (1000 * 60 * 60 * 24)),
          hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((diff / 1000 / 60) % 60)
        });
      }
    }, 1000);
    return () => clearInterval(timer);
  }, [launchDate]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  return (
    <div className="bg-slate-50 text-slate-800">

      <TopBar />

      <div className="pt-24">

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center relative">

          {/* Center Links */}
          <div className="absolute left-1/2 -translate-x-1/2 hidden lg:flex space-x-10 text-[11px] font-black uppercase tracking-widest text-slate-500">
            <a href="#forensics" className="hover:text-blue-600 transition-colors">Forensic Scope</a>
            <a href="#clouddesk" className="hover:text-blue-600 transition-colors">Clouddesk SaaS</a>
            <a href="#service-store" className="hover:text-blue-600 transition-colors">Service Store</a>
            <a href="#checklist" className="hover:text-blue-600 transition-colors">Audit Checklist</a>
          </div>

          {/* Right Buttons */}
          <div className="ml-auto flex items-center space-x-4">
            <button className="hidden md:flex items-center space-x-2 text-slate-600 font-bold text-xs bg-slate-100 px-4 py-2 rounded-lg hover:bg-slate-200 border border-slate-200">
              <Lock className="w-3.5 h-3.5" />
              <span>PORTAL LOGIN</span>
            </button>
            <button className="bg-blue-600 text-white px-6 py-2.5 rounded-full text-sm font-bold hover:bg-blue-700 transition-all shadow-xl shadow-blue-100">
              Get Started
            </button>
          </div>

        </div>

      </div>


      {/* Hero Section */}
      <section className="relative pt-10 pb-32 overflow-hidden bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center lg:text-left">
          <div className="flex flex-col lg:flex-row items-center gap-20">
            <div className="lg:w-3/5">
              <div className="inline-flex items-center space-x-2 py-2 px-4 rounded-full bg-blue-50 text-blue-700 text-[10px] font-black uppercase tracking-widest mb-10 border border-blue-100">
                <Target className="w-3.5 h-3.5" />
                <span>Forensic Compliance for One-Star to Five-Star Houses</span>
              </div>
              <h1 className="text-6xl md:text-8xl font-black text-slate-900 mb-8 leading-[0.9] tracking-tighter">
                Compliance is <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">Risk Mitigation.</span>
              </h1>
              <p className="text-xl text-slate-500 max-w-xl mb-12 font-medium leading-relaxed">
                We perform forensic audits of your <span className="text-slate-900 font-bold">EPCG, Advance Auth, and IGST</span> data to find gaps before the authorities do. Tech-enabled. Expert-led.
              </p>
              <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
                <a href="#checklist" className="bg-blue-600 text-white px-10 py-5 rounded-2xl font-black text-lg hover:bg-blue-700 transition-all shadow-2xl shadow-blue-200 flex items-center group">
                  Fill Audit Checklist <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </a>
                <div className="flex items-center space-x-4 px-6 border-l border-slate-200 ml-2">
                  <div className="text-left">
                    <div className="text-2xl font-black text-slate-900 leading-none tracking-tighter">{timeLeft.days}d : {timeLeft.hours}h</div>
                    <div className="text-[10px] font-bold text-blue-600 uppercase tracking-widest mt-1">SaaS Launch: April 19, 2026</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Dashboard Glimpse Overlay (From image_d72100 & image_d7213d) */}
            <div className="lg:w-2/5 relative">
              <div className="bg-slate-50 rounded-[4rem] p-10 border border-slate-100 shadow-2xl relative">
                <div className="space-y-6">
                  <div className="bg-white p-6 rounded-3xl shadow-sm border border-slate-100 flex items-center space-x-6 transform -rotate-1">
                    <div className="relative w-16 h-16 flex items-center justify-center">
                      <svg className="w-full h-full transform -rotate-90">
                        <circle cx="32" cy="32" r="28" stroke="currentColor" strokeWidth="6" fill="transparent" className="text-slate-100" />
                        <circle cx="32" cy="32" r="28" stroke="currentColor" strokeWidth="6" fill="transparent" strokeDasharray="175.8" strokeDashoffset="49" className="text-amber-500" />
                      </svg>
                      <span className="absolute text-lg font-black">72</span>
                    </div>
                    <div>
                      <div className="font-black text-slate-900">Health Score: Medium</div>
                      <div className="text-[10px] text-slate-400 font-bold uppercase tracking-widest mt-1 underline">Audit in Progress</div>
                    </div>
                  </div>

                  <div className="bg-white p-6 rounded-3xl shadow-sm border border-slate-100 transform translate-x-4">
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-[10px] font-black text-red-500 bg-red-50 px-2 py-0.5 rounded">HIGH RISK</span>
                      <span className="text-[10px] font-bold text-slate-400">EPCG LICENSE #EXM-902</span>
                    </div>
                    <div className="text-2xl font-black text-slate-900">₹ 8.5 Lakhs Penalty</div>
                    <div className="text-[10px] text-slate-500 font-bold uppercase mt-1 tracking-wider leading-none">Potential Exposure detected</div>
                  </div>

                  <div className="bg-slate-900 p-6 rounded-3xl shadow-xl text-white flex items-center space-x-4 transform rotate-1">
                    <div className="p-3 bg-blue-600/20 rounded-xl text-blue-400"><History className="w-6 h-6" /></div>
                    <div>
                      <div className="font-bold tracking-tight">EGM Status: Pending</div>
                      <div className="text-[10px] opacity-60 uppercase font-black tracking-widest mt-1">12 Shipping Bills Pending</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Forensic Verticals (The Consulting Gaps) */}
      <section id="forensics" className="py-24 bg-slate-50 border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-24">
            <span className="text-blue-600 font-black tracking-[0.3em] text-[10px] uppercase block mb-4">Consultative Diagnostic</span>
            <h2 className="text-5xl font-black text-slate-900 mb-6 tracking-tighter uppercase leading-none text-center">Audit finds Gaps. <br /><span className="text-blue-600">The Store executes Requests.</span></h2>
            <p className="text-slate-500 max-w-2xl mx-auto font-medium leading-relaxed italic">"Forensic findings are useless without execution. We provide both."</p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {[
              {
                title: "EPCG (Capital Goods)",
                subtitle: "Asset Obligation Audit",
                desc: "Forensic verification of 50% Block-wise EO. We audit Installation Certificates & nexus requirements to prevent redemption hurdles.",
                points: ["50% Block-wise Verification", "Annual Progress Reports (APR) Audit", "Redemption Readiness Check"],
                risk: "Risk: 15% Interest + 100% Duty Penalty.",
                icon: <ShieldCheck />
              },
              {
                title: "Advance Auth (AA)",
                subtitle: "Raw Material Forensics",
                desc: "Meticulous SION Norms verification. We audit your actual consumption vs. import allowance to prevent 'Dead Stock' notices.",
                points: ["SION & Ad-hoc Norms Matching", "By-product accounting", "EODC Closure Forensics"],
                risk: "Risk: Custom Duty Clawback + Revenue Intelligence (DRI) Scrutiny.",
                icon: <Database />
              },
              {
                title: "IGST & EGM Refunds",
                subtitle: "Capital Recovery Audit",
                desc: "Technical reconciliation of GSTR-1 vs. Table 6A. We identify and resolve SB005 (Invoice Mismatch) and SB006 (Gateway EGM) errors.",
                points: ["SB005/SB006 Error Resolution", "Scroll Generation Monitoring", "Transmission Flow Audits"],
                risk: "Risk: 12-24 Month Fund Blockage.",
                icon: <BarChart3 />
              },
              {
                title: "Duty Drawback",
                subtitle: "Revenue Leakage Audit",
                desc: "Auditing Section 74 vs 75 claims. We track BRC/e-BRC realization to prevent drawback recoveries with heavy interest.",
                points: ["AIR vs. Brand Rate Audit", "BRC Overdue Matching", "Bank Realization Tracking"],
                risk: "Risk: Refund recovery with 18% Interest.",
                icon: <RefreshCcw />
              }
            ].map((item, idx) => (
              <div key={idx} className="group p-12 rounded-[3.5rem] bg-white border border-slate-100 hover:border-blue-500 transition-all hover:shadow-2xl">
                <div className="flex justify-between items-start mb-10">
                  <div className="w-16 h-16 bg-slate-50 rounded-2xl flex items-center justify-center text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-all shadow-sm">
                    {item.icon}
                  </div>
                  <div className="text-right">
                    <span className="text-blue-600 font-black text-[11px] uppercase tracking-widest mb-1 block">{item.subtitle}</span>
                    <h3 className="text-3xl font-black text-slate-900 tracking-tight leading-none">{item.title}</h3>
                  </div>
                </div>
                <p className="text-slate-500 font-medium leading-relaxed mb-10">{item.desc}</p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10">
                  {item.points.map((p, i) => (
                    <div key={i} className="flex items-center space-x-3 text-sm font-bold text-slate-700">
                      <CheckCircle2 className="w-4 h-4 text-emerald-500 flex-shrink-0" />
                      <span>{p}</span>
                    </div>
                  ))}
                </div>
                <div className="pt-8 border-t border-slate-100">
                  <div className="flex items-center text-[11px] font-black text-red-500 uppercase tracking-widest bg-red-50 p-3 rounded-xl border border-red-100">
                    <AlertCircle className="w-4 h-4 mr-2" /> {item.risk}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Clouddesk SaaS (Based on image_d78dfd.png) */}
      <section id="clouddesk" className="py-24 bg-slate-900 text-white overflow-hidden relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-20">
            <div className="lg:w-1/2">
              <span className="text-blue-400 font-bold tracking-[0.5em] text-[10px] uppercase mb-4 block leading-none">The Operating System</span>
              <h2 className="text-5xl md:text-6xl font-black mt-6 mb-8 tracking-tighter leading-[0.9]">Clouddesk SaaS: <br />Launching <span className="text-blue-500">April 19, 2026</span></h2>
              <p className="text-slate-400 text-lg mb-12 leading-relaxed font-medium opacity-80 max-w-lg">
                The manual spreadsheet era of EXIM is over. Clouddesk is the operating system for India's Status Holder export houses.
              </p>

              <div className="grid grid-cols-2 gap-10 mb-10">
                <div className="space-y-4">
                  <div className="p-3 bg-white/5 w-fit rounded-xl text-blue-400"><TrendingDown className="w-6 h-6" /></div>
                  <h4 className="font-bold text-lg text-white">Live EO Sentinel</h4>
                  <p className="text-xs text-slate-500 leading-relaxed font-medium">Automated tracking of export obligations per shipping bill.</p>
                </div>
                <div className="space-y-4">
                  <div className="p-3 bg-white/5 w-fit rounded-xl text-indigo-400"><Clock className="w-6 h-6" /></div>
                  <h4 className="font-bold text-lg text-white">License Expiry Radar</h4>
                  <p className="text-xs text-slate-500 leading-relaxed font-medium">90-day countdown for license renewals and bond revalidations.</p>
                </div>
                <div className="space-y-4">
                  <div className="p-3 bg-white/5 w-fit rounded-xl text-emerald-400"><Lock className="w-6 h-6" /></div>
                  <h4 className="font-bold text-lg text-white">Secure Vaulting</h4>
                  <p className="text-xs text-slate-500 leading-relaxed font-medium">Permanent repository for DGFT-compliant installation certs.</p>
                </div>
                <div className="space-y-4">
                  <div className="p-3 bg-white/5 w-fit rounded-xl text-amber-400"><Zap className="w-6 h-6" /></div>
                  <h4 className="font-bold text-lg text-white">Instant EGM Alerts</h4>
                  <p className="text-xs text-slate-500 leading-relaxed font-medium">Pre-emptive detection of SB005/SB006 refund blocks.</p>
                </div>
              </div>
            </div>

            {/* Dashboard Terminal Visual (Inspired by image_d78dfd & image_d72160) */}
            <div className="lg:w-1/2">
              <div className="bg-[#1A1F2C] rounded-[4rem] border border-white/10 shadow-3xl p-12 relative overflow-hidden">
                <div className="flex justify-between items-center mb-12 pb-6 border-b border-white/5">
                  <div className="flex space-x-2">
                    <div className="w-3 h-3 rounded-full bg-red-500/50"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500/50"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500/50"></div>
                  </div>
                  <span className="text-[10px] font-black text-slate-500 tracking-[0.4em]">EXIMINQ CLOUDDESK v4.2</span>
                </div>

                <div className="space-y-10">
                  <div className="bg-gradient-to-br from-blue-900/40 to-indigo-900/40 p-8 rounded-[2.5rem] border border-blue-600/20">
                    <div className="flex justify-between items-center mb-6">
                      <span className="text-[10px] font-bold text-blue-400 uppercase tracking-widest">Star Performance Tracking</span>
                      <div className="flex items-center space-x-2 bg-blue-400/10 px-3 py-1 rounded-full border border-blue-400/20">
                        <Star className="w-3 h-3 text-blue-400 fill-current" />
                        <span className="text-[10px] font-black text-blue-400">ONE STAR HOUSE</span>
                      </div>
                    </div>
                    <div className="flex justify-between items-end">
                      <div>
                        <div className="text-[10px] text-slate-500 font-bold uppercase mb-1">Current Turnover Performance</div>
                        <div className="text-4xl font-black text-white">$4.2 Million</div>
                      </div>
                      <div className="text-right">
                        <div className="text-[10px] text-slate-500 font-bold uppercase mb-1">Next Tier Target (2-Star)</div>
                        <div className="text-2xl font-black text-slate-400">$25 Million</div>
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-8">
                    <div className="p-8 bg-slate-900/80 rounded-3xl border border-white/5 hover:border-blue-500/20 transition-colors group">
                      <div className="text-[10px] font-bold text-slate-500 uppercase mb-4 leading-none tracking-widest group-hover:text-blue-400 transition-colors">Pending e-BRC</div>
                      <div className="text-4xl font-black text-white">12 SB</div>
                      <div className="text-[10px] font-bold text-red-500 uppercase mt-4 tracking-widest leading-none">Caution List Warning</div>
                    </div>
                    <div className="p-8 bg-slate-900/80 rounded-3xl border border-white/5 hover:border-blue-500/20 transition-colors group">
                      <div className="text-[10px] font-bold text-slate-500 uppercase mb-4 leading-none tracking-widest group-hover:text-blue-400 transition-colors">IGST Stuck Amount</div>
                      <div className="text-4xl font-black text-white">₹ 5.0 L</div>
                      <div className="text-[10px] font-bold text-amber-500 uppercase mt-4 tracking-widest leading-none">SB005 Mismatch Detected</div>
                    </div>
                  </div>
                </div>

                <div className="mt-12 text-center">
                  <button className="text-[11px] font-black uppercase tracking-[0.4em] text-blue-400 hover:text-white transition-colors flex items-center justify-center w-full group">
                    EARLY ACCESS SIGN-UP <ChevronRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Store Execution (Based on image_d78e35.png) */}
      <section id="service-store" className="py-24 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <div className="inline-flex items-center justify-center p-6 rounded-[2rem] bg-blue-50 border border-blue-100 mb-12 shadow-inner">
            <ShoppingCart className="text-blue-600 w-12 h-12" />
          </div>
          <h2 className="text-5xl md:text-6xl font-black text-slate-900 mb-8 tracking-tighter uppercase leading-[1.1]">Forensic Findings are useless <br />without execution.</h2>
          <p className="text-slate-500 max-w-2xl mx-auto font-medium mb-20 leading-relaxed text-lg">
            Audit identifies gaps; the Service Store closes them. Access expert compliance services with 1-click authorization and credit line integration.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
            {[
              { icon: <ShieldCheck className="w-6 h-6" />, title: "AEO T2 Certification", desc: "Site Audit & SOP Prep." },
              { icon: <BarChart3 className="w-6 h-6" />, title: "Brand Rate Fixation", desc: "Custom Drawback Audits." },
              { icon: <RefreshCcw className="w-6 h-6" />, title: "Duty Drawback Recovery", desc: "Section 74/75 Filing." },
              { icon: <Briefcase className="w-6 h-6" />, title: "DGFT Representation", desc: "EODC/Redemption Cases." }
            ].map((svc, i) => (
              <div key={i} className="p-12 bg-slate-50 rounded-[3.5rem] border border-slate-100 flex flex-col items-center group hover:bg-white hover:border-blue-500 transition-all hover:-translate-y-3">
                <div className="w-16 h-16 bg-white rounded-3xl shadow-sm mb-8 flex items-center justify-center text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-all">
                  {svc.icon}
                </div>
                <h4 className="font-black text-slate-900 mb-2 leading-none text-xl tracking-tight">{svc.title}</h4>
                <p className="text-[10px] text-slate-500 font-bold uppercase tracking-[0.2em]">{svc.desc}</p>
              </div>
            ))}
          </div>

          <button className="bg-slate-900 text-white px-14 py-6 rounded-3xl font-black text-sm uppercase tracking-[0.2em] hover:bg-blue-600 transition-all shadow-2xl shadow-slate-200">
            Explore Service Store Hub
          </button>
        </div>
      </section>

<AuditComplianceForm />

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default App;


