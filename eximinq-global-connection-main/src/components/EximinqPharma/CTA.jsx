const CTA = ({ setShowEnrollModal }) => {
  return (
    <section className="py-20 bg-teal-600 text-white">
      <div className="max-w-4xl mx-auto text-center px-4">
        {/* Headline */}
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          Ready to streamline your Pharma Exports?
        </h2>

        {/* Subtext */}
        <p className="text-teal-100 text-lg mb-10">
          Join 500+ pharmaceutical companies trusting Eximinq for DGFT, Customs,
          and Factory Compliance.
        </p>

        {/* Actions */}
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <button
            onClick={() =>
              setShowEnrollModal({
                open: true,
                type: "pharmaceuticals_industry_import_export",
              })
            }
            className="bg-white text-teal-700 hover:bg-teal-50 px-8 py-4 rounded-lg font-bold text-lg shadow-lg transition-all"
          >
            Get Free Consultation
          </button>

          <a
            href="https://eximinq.in/services"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block border-2 border-white/30 hover:bg-white/10 px-8 py-4 rounded-lg font-bold text-lg transition-all"
          >
            Explore Services
          </a>
        </div>
      </div>
    </section>
  );
};

export default CTA;
