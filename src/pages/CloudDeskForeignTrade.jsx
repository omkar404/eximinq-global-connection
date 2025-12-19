import React from "react";

import { Navbar } from "../components/CloudDeskForeignTrade/Navbar";
import { MobileMenu } from "../components/CloudDeskForeignTrade/MobileMenu";
import { Hero } from "../components/CloudDeskForeignTrade/Hero";
import { NewsTicker } from "../components/CloudDeskForeignTrade/NewsTicker";
import { Footer } from "../components/CloudDeskForeignTrade/Footer";

import { ExchangeRates } from "../components/CloudDeskForeignTrade/ExchangeRates";
import { PublicNotices } from "../components/CloudDeskForeignTrade/PublicNotices";
import { ResourceLibrary } from "../components/CloudDeskForeignTrade/ResourceLibrary";
import { EximInqSupport } from "../components/CloudDeskForeignTrade/EximInqSupport";

import { FTP2023 } from "../components/CloudDeskForeignTrade/FTP2023";
import { ProceduresCompliance } from "../components/CloudDeskForeignTrade/ProceduresCompliance";
import { Tools } from "../components/CloudDeskForeignTrade/Tools";


export default function CloudDeskForeignTrade() {
  return (
    <div className="min-h-screen flex flex-col bg-slate-50">
      <Navbar />
       <div className="h-[30px]" />
      <MobileMenu />
      <NewsTicker />
      <Hero />

      <main className="container mx-auto px-4 py-16 grid grid-cols-1 lg:grid-cols-12 gap-10">
        {/* LEFT SIDE */}
        <aside className="lg:col-span-3 space-y-8">
          <ExchangeRates />
          <PublicNotices />
          <ResourceLibrary />
          <EximInqSupport />
        </aside>

        {/* RIGHT SIDE */}
        <section className="lg:col-span-9 space-y-12">
          <FTP2023 />
          <ProceduresCompliance />

          <section className="grid grid-cols-1 md:grid-cols-1 gap-8 ">
            <Tools/>
          </section>
        </section>
      </main>

      <Footer />
    </div>
  );
}
