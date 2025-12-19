const Fees = () => {
  return (
    <section id="fees" class="py-20 bg-slate-50">
        <div class="container mx-auto px-4 text-center">
            <h2 class="text-3xl font-bold text-slate-900 mb-8">IEC Registration Fees</h2>
            <div class="max-w-md mx-auto bg-white rounded-xl shadow-lg overflow-hidden border border-slate-200">
                <div class="bg-brand-900 text-white py-4">
                    <h3 class="text-xl font-bold">Standard Package</h3>
                </div>
                <div class="p-8">
                    <div class="flex justify-between items-center border-b border-slate-100 py-3">
                        <span class="text-slate-600">Government Fees</span>
                        <span class="font-bold text-slate-900">₹ 500</span>
                    </div>
                    <div class="flex justify-between items-center border-b border-slate-100 py-3">
                        <span class="text-slate-600">Professional Fees</span>
                        <span class="font-bold text-slate-900">₹ 1,500</span>
                    </div>
                    <div class="flex justify-between items-center pt-4">
                        <span class="text-lg font-bold text-brand-900">Total</span>
                        <span class="text-2xl font-bold text-accent-600">₹ 2,000</span>
                    </div>
                    <p class="text-xs text-slate-500 mt-2">*Fees exclusive of GST.</p>
                    <a href="#contact" class="block w-full bg-brand-600 text-white font-bold py-3 rounded-lg mt-6 hover:bg-brand-700 transition">
                        Get Started
                    </a>
                </div>
            </div>
        </div>
    </section>

  );
};

export default Fees;
