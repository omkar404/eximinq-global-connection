export default function CTA ({ setOpenSupport }) {
  return (
      <section className="py-20 bg-gradient-to-b from-slate-900 to-sky-900/20">
        <div className="container mx-auto px-6 text-center">
          <div className="max-w-3xl mx-auto bg-sky-600 rounded-3xl p-12 relative overflow-hidden shadow-2xl shadow-sky-900/50">
            {/* Decorative circles */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-900/20 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>

            <h2 className="text-3xl font-bold mb-4 relative z-10">Ready to Optimize Your Logistics?</h2>
            <p className="text-blue-100 mb-8 relative z-10">Get started with Eximinq Contact today and experience the difference in efficiency and cost.</p>
            
            <button 
            onClick={() => setOpenSupport(true)}
            className="bg-white text-sky-600 px-8 py-3 rounded-full font-bold hover:bg-blue-50 transition-all transform hover:scale-105 shadow-lg relative z-10">
              Contact Sales Team
            </button>
          </div>
        </div>
      </section>
  );
}
