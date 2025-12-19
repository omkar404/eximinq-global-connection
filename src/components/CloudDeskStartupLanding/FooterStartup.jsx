import React from "react";
import BrandLogo from "../BrandLogo/BrandLogo";

const FooterStartup = () => {
  return (
    <footer className="bg-slate-950 py-16 border-t border-slate-900">
      <div className="container mx-auto px-6">

        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">

          <div className="md:col-span-2">
                                <a href="https://eximinq.in/" className="cursor-pointer">
            <BrandLogo />
          </a>
            <p className="text-slate-400 max-w-sm leading-relaxed mt-6">
              Eximinq Cloud Desk: Your partner in global trade.  
              We simplify compliance for new Indian entities venturing into exports.
            </p>
          </div>

          <div>
            <h4 className="text-white font-bold mb-4 uppercase text-sm tracking-wider">
              Quick Links
            </h4>
            <ul className="space-y-3 text-slate-400 text-sm">
              <li><a href="#solutions" className="hover:text-sky-400">Services</a></li>
              <li><a href="#make-in-india" className="hover:text-sky-400">Make in India</a></li>
              <li><a href="#contact" className="hover:text-sky-400">Contact</a></li>
              <li><a href="#" className="hover:text-sky-400">Login</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-4 uppercase text-sm tracking-wider">
              Contact Us
            </h4>
            <div className="space-y-3 text-slate-400 text-sm">
              <p className="flex items-center hover:text-sky-400 cursor-pointer">
                <span className="w-2 h-2 bg-sky-500 rounded-full mr-3"></span>
                clouddesk@eximinq.in
              </p>
              <p className="flex items-center hover:text-sky-400 cursor-pointer">
                <span className="w-2 h-2 bg-sky-500 rounded-full mr-3"></span>
                +917400096950
              </p>
              <p className="mt-4 text-xs text-slate-500">
                Mumbai • Delhi • Chennai • Kolkata
              </p>
            </div>
          </div>

        </div>

        <div className="pt-8 border-t border-slate-900 flex flex-col md:flex-row justify-between items-center text-xs text-slate-600">
          <p>© {new Date().getFullYear()} Eximinq Global Connections. All rights reserved.</p>

          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-slate-400">Privacy Policy</a>
            <a href="#" className="hover:text-slate-400">Terms of Service</a>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default FooterStartup;
