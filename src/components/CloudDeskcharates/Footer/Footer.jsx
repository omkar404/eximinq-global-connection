import BrandLogo from "../../BrandLogo/BrandLogo";

export default function Footer() {
  return (
    <footer className="bg-slate-950 py-12 border-t border-slate-900">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
                     <a href="https://eximinq.in/" className="cursor-pointer">
            <BrandLogo />
          </a>
          </div>
          <div className="flex flex-col md:items-end space-y-2 mt-4 md:mt-0 text-right">
            <div className="text-slate-400 text-sm">
              <a
                href="mailto:clouddesk@eximinq.in"
                className="block hover:text-sky-400 transition-colors"
              >
                clouddesk@eximinq.in
              </a>

              <a
                href="https://wa.me/917400096950"
                target="_blank"
                rel="noopener noreferrer"
                className="block hover:text-sky-400 transition-colors"
              >
                +917400096950
              </a>
            </div>

            <div className="flex space-x-6 text-slate-500 text-xs">
              <a href="#" className="hover:text-sky-400 transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-sky-400 transition-colors">
                Terms of Service
              </a>
              <a href="#" className="hover:text-sky-400 transition-colors">
                Support
              </a>
            </div>
          </div>
        </div>
        <div className="mt-8 text-center text-slate-600 text-sm">
          © {new Date().getFullYear()} Eximinq Global Connections. All rights
          reserved.
        </div>
      </div>
    </footer>
  );
}
