import React from "react";
import { MessageSquare } from "lucide-react";

const HeroContact = () => {
  return (
    <header className="bg-indigo-900 text-white pt-32 pb-20 relative overflow-hidden">
      <div className="absolute top-0 right-0 opacity-10">
        <MessageSquare size={300} />
      </div>

      <div className="container mx-auto px-4 text-center relative z-10">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">Get in Touch</h1>
        <p className="text-xl text-indigo-100 max-w-2xl mx-auto">
          Need assistance with DGFT, Customs, or Compliance? Our experts team is ready to help you 24/7.
        </p>
      </div>
    </header>
  );
};

export default HeroContact;
