import { Mail, Phone } from "lucide-react";

const TopBar = () => {
  return (
    <div className="bg-brand-900 text-white text-xs py-2 sticky top-0 z-50">
      <div className="container mx-auto px-4 flex justify-between items-center">

        <div className="hidden md:flex gap-4">
          <span className="flex items-center gap-1">
            <Mail size={12} className="text-accent-400" />
            clouddesk@eximinq.in
          </span>

          <span className="flex items-center gap-1">
            <Phone size={12} className="text-accent-400" />
            +917400096950
          </span>
        </div>

        <div className="flex gap-4 ml-auto">
          <a href="#" className="hover:text-accent-400">DGFT Notifications</a>
          <a href="#" className="hover:text-accent-400">Cloud Desk Login</a>
        </div>

      </div>
    </div>
  );
};

export default TopBar;
