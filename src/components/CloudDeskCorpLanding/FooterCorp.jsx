import React from "react";
import BrandLogo from "../BrandLogo/BrandLogo";

const FooterCorp = () => {
  return (
    <footer className="bg-slate-950 py-16 border-t border-slate-900">
      <div className="container mx-auto px-6">

        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">

          <div className="md:col-span-2">
                                <a href="https://eximinq.in/" className="cursor-pointer">
            <BrandLogo />
          </a>
            <p className="text-slate-400 mt-4 max-w-sm">
              Eximinq Cloud Desk provides modernized trade compliance
              & logistics solutions for growing businesses.
            </p>
          </div>

          <div>
            <h4 className="text-white font-bold mb-4 text-sm uppercase tracking-wider">
              Quick Links
            </h4>
            <ul className="space-y-2 text-slate-400 text-sm">
              <li><a href="#solutions" className="hover:text-sky-400">Services</a></li>
              <li><a href="#why-us" className="hover:text-sky-400">About Us</a></li>
              <li><a href="#contact" className="hover:text-sky-400">Contact</a></li>
              <li><a href="#" className="hover:text-sky-400">Client Login</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-4 text-sm uppercase tracking-wider">
              Contact Us
            </h4>
            <p className="text-slate-400 hover:text-sky-400 cursor-pointer">
              clouddesk@eximinq.in
            </p>
            <p className="text-slate-400 hover:text-sky-400 cursor-pointer mt-2">
              +917400096950
            </p>
            <p className="text-xs text-slate-500 mt-4">
              Mumbai • Delhi • Chennai • Kolkata
            </p>
          </div>

        </div>

        <div className="flex justify-between text-xs text-slate-600 border-t border-slate-900 pt-8">
          <p>© {new Date().getFullYear()} Eximinq Global Connections</p>
          <div className="flex space-x-6">
            <a href="#" className="hover:text-slate-400">Privacy Policy</a>
            <a href="#" className="hover:text-slate-400">Terms of Service</a>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default FooterCorp;
