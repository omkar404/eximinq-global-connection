// mockHSNData.js
// Clean dataset extracted from your master HSN list.
// You can extend this anytime with more rows.

const HSN_DATA = [
    // --- SECTION I: Live Animals; Animal Products (Ch 1-5) ---
    { chapter: "01", code: "0101 21 00", description: "Live Horses - Pure-bred breeding animals", gst: "Nil", importPolicy: "Restricted", exportPolicy: "Restricted", duty: "0%", aidc: "Nil", rodtep: "Nil" },
    { chapter: "01", code: "0102 21 10", description: "Live Bovine Animals - Bulls (Pure-bred breeding)", gst: "Nil", importPolicy: "Restricted", exportPolicy: "Restricted", duty: "5%", aidc: "Nil", rodtep: "Nil" },
    { chapter: "02", code: "0201 10 00", description: "Meat of bovine animals, fresh or chilled - Carcasses", gst: "Nil", importPolicy: "Restricted", exportPolicy: "Free", duty: "30%", aidc: "Nil", rodtep: "0.5%" },
    { chapter: "03", code: "0302 11 00", description: "Trout (Salmo trutta), fresh or chilled", gst: "5%", importPolicy: "Free", exportPolicy: "Free", duty: "30%", aidc: "Nil", rodtep: "2.5%" },
    { chapter: "03", code: "0306 17 90", description: "Other Shrimps and Prawns, Frozen", gst: "5%", importPolicy: "Free", exportPolicy: "Free", duty: "30%", aidc: "Nil", rodtep: "2.5%" },
    { chapter: "04", code: "0401 10 00", description: "Milk and cream, fat content <= 1%", gst: "5%", importPolicy: "Free", exportPolicy: "Free", duty: "30%", aidc: "Nil", rodtep: "0.5%" },
    { chapter: "04", code: "0402 10 10", description: "Skimmed Milk Powder", gst: "5%", importPolicy: "Free", exportPolicy: "Prohibited", duty: "60%", aidc: "Nil", rodtep: "Nil" },
    { chapter: "04", code: "0409 00 00", description: "Natural Honey", gst: "5%", importPolicy: "Free", exportPolicy: "Free", duty: "60%", aidc: "Nil", rodtep: "1%" },
    { chapter: "05", code: "0501 00 10", description: "Human hair, unworked", gst: "Nil", importPolicy: "Free", exportPolicy: "Free", duty: "30%", aidc: "Nil", rodtep: "0.5%" },
    { chapter: "05", code: "0508 00 10", description: "Coral, unworked or simply prepared", gst: "5%", importPolicy: "Restricted", exportPolicy: "Free", duty: "30%", aidc: "Nil", rodtep: "Nil" },

    // --- SECTION II: Vegetable Products (Ch 6-14) ---
    { chapter: "06", code: "0603 11 00", description: "Cut Flowers - Roses, Fresh", gst: "Nil", importPolicy: "Free", exportPolicy: "Free", duty: "60%", aidc: "Nil", rodtep: "1%" },
    { chapter: "07", code: "0701 10 00", description: "Potatoes - Seed", gst: "5%", importPolicy: "Restricted", exportPolicy: "Restricted", duty: "30%", aidc: "Nil", rodtep: "Nil" },
    { chapter: "07", code: "0703 10 10", description: "Onions, Fresh or Chilled", gst: "Nil", importPolicy: "Free", exportPolicy: "Prohibited (Seasonal)", duty: "30%", aidc: "Nil", rodtep: "1% (when allowed)" },
    { chapter: "07", code: "0713 40 00", description: "Lentils (Mosur), Dried and Shelled", gst: "5%", importPolicy: "Free", exportPolicy: "Free", duty: "10%", aidc: "20%", rodtep: "0.5%" },
    { chapter: "08", code: "0801 31 00", description: "Cashew Nuts, in shell", gst: "5%", importPolicy: "Free", exportPolicy: "Free", duty: "2.5%", aidc: "Nil", rodtep: "0.5%" },
    { chapter: "08", code: "0804 10 20", description: "Dates, soft (Khajur)", gst: "12%", importPolicy: "Free", exportPolicy: "Free", duty: "20%", aidc: "Nil", rodtep: "0.5%" },
    { chapter: "09", code: "0901 11 11", description: "Coffee A Grade", gst: "5%", importPolicy: "Free", exportPolicy: "Free", duty: "100%", aidc: "Nil", rodtep: "1%" },
    { chapter: "09", code: "0902 40 20", description: "Black tea, leaf in bulk", gst: "5%", importPolicy: "Free", exportPolicy: "Free", duty: "100%", aidc: "Nil", rodtep: "1.7%" },
    { chapter: "10", code: "1001 11 00", description: "Durum Wheat: Seed", gst: "Nil", importPolicy: "Restricted", exportPolicy: "Restricted", duty: "100%", aidc: "Nil", rodtep: "Nil" },
    { chapter: "10", code: "1006 30 20", description: "Basmati Rice", gst: "5%", importPolicy: "Free", exportPolicy: "Free (Subject to MEP)", duty: "70%", aidc: "Nil", rodtep: "Rs 1500/MT" },
    { chapter: "11", code: "1101 00 00", description: "Wheat or meslin flour", gst: "5%", importPolicy: "Free", exportPolicy: "Free", duty: "30%", aidc: "Nil", rodtep: "0.5%" },
    { chapter: "12", code: "1201 10 00", description: "Soya Beans, Seed", gst: "5%", importPolicy: "Free", exportPolicy: "Free", duty: "45%", aidc: "Nil", rodtep: "1%" },
    { chapter: "12", code: "1209 91 10", description: "Vegetable seeds for sowing (Cabbage)", gst: "5%", importPolicy: "Restricted", exportPolicy: "Free", duty: "5%", aidc: "Nil", rodtep: "Nil" },
    { chapter: "13", code: "1301 20 00", description: "Gum Arabic", gst: "5%", importPolicy: "Free", exportPolicy: "Free", duty: "30%", aidc: "Nil", rodtep: "0.5%" },
    { chapter: "14", code: "1401 10 00", description: "Bamboos", gst: "5%", importPolicy: "Free", exportPolicy: "Free", duty: "25%", aidc: "Nil", rodtep: "0.5%" },

    // --- SECTION III: Animal or Vegetable Fats (Ch 15) ---
    { chapter: "15", code: "1507 10 00", description: "Soya bean crude oil", gst: "5%", importPolicy: "Free", exportPolicy: "Free", duty: "15%", aidc: "20%", rodtep: "0.5%" },
    { chapter: "15", code: "1511 10 00", description: "Crude Palm Oil", gst: "5%", importPolicy: "Free", exportPolicy: "Free", duty: "15%", aidc: "17.5%", rodtep: "0.5%" },
    { chapter: "15", code: "1511 90 20", description: "Refined bleached deodorised palmolein", gst: "12%", importPolicy: "Free", exportPolicy: "Free", duty: "54%", aidc: "Nil", rodtep: "1%" },
    { chapter: "15", code: "1521 10 11", description: "Vegetable Waxes - Edible grade", gst: "18%", importPolicy: "Free", exportPolicy: "Free", duty: "30%", aidc: "Nil", rodtep: "0.5%" },

    // --- SECTION IV: Prepared Foodstuffs; Beverages (Ch 16-24) ---
    { chapter: "16", code: "1601 00 00", description: "Sausages and similar products of meat", gst: "12%", importPolicy: "Restricted (FSSAI)", exportPolicy: "Free", duty: "100%", aidc: "Nil", rodtep: "0.5%" },
    { chapter: "17", code: "1701 14 90", description: "Cane Sugar, Other", gst: "5%", importPolicy: "Restricted", exportPolicy: "Restricted", duty: "100%", aidc: "Nil", rodtep: "Rs 50/MT" },
    { chapter: "18", code: "1806 31 00", description: "Chocolate - Filled blocks/slabs", gst: "18%", importPolicy: "Free", exportPolicy: "Free", duty: "30%", aidc: "Nil", rodtep: "1.2%" },
    { chapter: "19", code: "1905 31 00", description: "Sweet biscuits", gst: "18%", importPolicy: "Free", exportPolicy: "Free", duty: "30%", aidc: "Nil", rodtep: "1.5%" },
    { chapter: "20", code: "2009 11 00", description: "Orange Juice, Frozen", gst: "12%", importPolicy: "Free", exportPolicy: "Free", duty: "35%", aidc: "Nil", rodtep: "1.5%" },
    { chapter: "21", code: "2106 90 20", description: "Pan masala", gst: "28%", importPolicy: "Free", exportPolicy: "Free", duty: "50%", aidc: "Nil", rodtep: "0.5%" },
    { chapter: "22", code: "2203 00 00", description: "Beer made from malt", gst: "18%", importPolicy: "Free", exportPolicy: "Free", duty: "100%", aidc: "Nil", rodtep: "0.5%" },
    { chapter: "22", code: "2208 30 12", description: "Scotch Whisky", gst: "150% (Customs)", importPolicy: "Free", exportPolicy: "Free", duty: "150%", aidc: "100%", rodtep: "0.5%" },
    { chapter: "23", code: "2309 10 00", description: "Dog or cat food, retail sale", gst: "18%", importPolicy: "Free", exportPolicy: "Free", duty: "20%", aidc: "Nil", rodtep: "0.5%" },
    { chapter: "24", code: "2402 20 30", description: "Filter cigarettes > 60mm", gst: "28% + Cess", importPolicy: "Restricted", exportPolicy: "Free", duty: "30%", aidc: "Nil", rodtep: "0.5%" },

    // --- SECTION V: Mineral Products (Ch 25-27) ---
    { chapter: "25", code: "2501 00 10", description: "Common Salt", gst: "Nil", importPolicy: "Free", exportPolicy: "Free", duty: "0%", aidc: "Nil", rodtep: "0.5%" },
    { chapter: "25", code: "2523 29 10", description: "Ordinary Portland Cement", gst: "28%", importPolicy: "Free (BIS Required)", exportPolicy: "Free", duty: "10%", aidc: "Nil", rodtep: "0.5%" },
    { chapter: "26", code: "2601 11 19", description: "Iron Ore Fines (65% Fe and above)", gst: "5%", importPolicy: "Free", exportPolicy: "Restricted (Export Duty)", duty: "2.5%", aidc: "Nil", rodtep: "Nil" },
    { chapter: "27", code: "2701 11 00", description: "Anthracite Coal", gst: "5%", importPolicy: "Free", exportPolicy: "Free", duty: "1%", aidc: "1.5%", rodtep: "Nil" },
    { chapter: "27", code: "2701 19 10", description: "Coking Coal", gst: "5%", importPolicy: "Free", exportPolicy: "Free", duty: "1%", aidc: "1.5%", rodtep: "Nil" },
    { chapter: "27", code: "2709 00 00", description: "Petroleum oils, Crude", gst: "5%", importPolicy: "Steered (IOC)", exportPolicy: "Restricted", duty: "Rs 1/tonne", aidc: "Rs 50/tonne", rodtep: "Nil" },
    { chapter: "27", code: "2710 19 20", description: "Aviation Turbine Fuel (ATF)", gst: "18%", importPolicy: "Free", exportPolicy: "Free", duty: "5%", aidc: "5%", rodtep: "0.5%" },
    { chapter: "27", code: "2711 11 00", description: "Natural Gas, Liquefied (LNG)", gst: "5%", importPolicy: "Free", exportPolicy: "Free", duty: "2.5%", aidc: "Nil", rodtep: "Nil" },

    // --- SECTION VI: Chemicals (Ch 28-38) ---
    { chapter: "28", code: "2801 10 00", description: "Chlorine", gst: "18%", importPolicy: "Free", exportPolicy: "Free", duty: "5%", aidc: "Nil", rodtep: "0.8%" },
    { chapter: "28", code: "2807 00 10", description: "Sulphuric Acid", gst: "18%", importPolicy: "Free", exportPolicy: "Free", duty: "7.5%", aidc: "Nil", rodtep: "1.2%" },
    { chapter: "28", code: "2844 10 00", description: "Natural Uranium and compounds", gst: "5%", importPolicy: "Restricted (DAE)", exportPolicy: "Restricted", duty: "7.5%", aidc: "Nil", rodtep: "Nil" },
    { chapter: "29", code: "2901 10 00", description: "Saturated Acyclic Hydrocarbons", gst: "18%", importPolicy: "Free", exportPolicy: "Free", duty: "2.5%", aidc: "Nil", rodtep: "0.8%" },
    { chapter: "30", code: "3002 20 11", description: "Vaccines for Cholera and Typhoid", gst: "5%", importPolicy: "Free", exportPolicy: "Free", duty: "10%", aidc: "5%", rodtep: "1.5%" },
    { chapter: "30", code: "3004 90 11", description: "Medicaments of Ayurvedic System", gst: "12%", importPolicy: "Free", exportPolicy: "Free", duty: "10%", aidc: "5%", rodtep: "1.5%" },
    { chapter: "31", code: "3102 10 00", description: "Urea", gst: "5%", importPolicy: "Steered (STC)", exportPolicy: "Restricted", duty: "5%", aidc: "5%", rodtep: "Nil" },
    { chapter: "31", code: "3105 30 00", description: "Diammonium Phosphate (DAP)", gst: "5%", importPolicy: "Free", exportPolicy: "Restricted", duty: "5%", aidc: "Nil", rodtep: "0.5%" },
    { chapter: "32", code: "3204 11 11", description: "Disperse Dyes", gst: "18%", importPolicy: "Free", exportPolicy: "Free", duty: "7.5%", aidc: "Nil", rodtep: "1.3%" },
    { chapter: "33", code: "3304 99 10", description: "Face Creams", gst: "18%", importPolicy: "Free (CDSCO)", exportPolicy: "Free", duty: "20%", aidc: "Nil", rodtep: "2%" },
    { chapter: "34", code: "3401 11 10", description: "Medicated Toilet Soaps", gst: "18%", importPolicy: "Free", exportPolicy: "Free", duty: "10%", aidc: "Nil", rodtep: "1.5%" },
    { chapter: "38", code: "3808 91 10", description: "Insecticides (Aluminium Phosphide)", gst: "18%", importPolicy: "Restricted (CIB)", exportPolicy: "Free", duty: "10%", aidc: "Nil", rodtep: "2%" },

    // --- SECTION VII: Plastics & Rubber (Ch 39-40) ---
    { chapter: "39", code: "3901 10 10", description: "LLDPE (Linear Low Density Polyethylene)", gst: "18%", importPolicy: "Free", exportPolicy: "Free", duty: "7.5%", aidc: "Nil", rodtep: "0.8%" },
    { chapter: "39", code: "3923 21 00", description: "Sacks and bags of polyethylene", gst: "18%", importPolicy: "Free", exportPolicy: "Free", duty: "15%", aidc: "Nil", rodtep: "1.2%" },
    { chapter: "39", code: "3926 90 99", description: "Other articles of plastics", gst: "18%", importPolicy: "Free", exportPolicy: "Free", duty: "15%", aidc: "Nil", rodtep: "1.2%" },
    { chapter: "40", code: "4011 10 10", description: "New Pneumatic Tyres for Motor Cars", gst: "28%", importPolicy: "Restricted (BIS Mandatory)", exportPolicy: "Free", duty: "15%", aidc: "Nil", rodtep: "1.2%" },
    { chapter: "40", code: "4011 20 10", description: "Radials for buses/lorries", gst: "28%", importPolicy: "Restricted (BIS)", exportPolicy: "Free", duty: "15%", aidc: "Nil", rodtep: "1.2%" },

    // --- SECTION VIII: Leather (Ch 41-43) ---
    { chapter: "41", code: "4101 20 10", description: "Raw hides of cow", gst: "Nil", importPolicy: "Free", exportPolicy: "Restricted (Export Duty)", duty: "0%", aidc: "Nil", rodtep: "Nil" },
    { chapter: "42", code: "4202 21 10", description: "Handbags of leather", gst: "18%", importPolicy: "Free", exportPolicy: "Free", duty: "15%", aidc: "Nil", rodtep: "2.5%" },
    { chapter: "43", code: "4303 10 10", description: "Apparel of Wild Animals (Furskin)", gst: "18%", importPolicy: "Prohibited", exportPolicy: "Prohibited", duty: "10%", aidc: "3%", rodtep: "Nil" },

    // --- SECTION IX: Wood (Ch 44-46) ---
    { chapter: "44", code: "4403 49 10", description: "Teak Wood in rough", gst: "18%", importPolicy: "Free", exportPolicy: "Prohibited", duty: "5%", aidc: "Nil", rodtep: "Nil" },
    { chapter: "44", code: "4408 31 10", description: "Veneer sheets for plywood", gst: "18%", importPolicy: "Free", exportPolicy: "Free", duty: "10%", aidc: "Nil", rodtep: "1.5%" },
    { chapter: "45", code: "4503 10 00", description: "Corks and stoppers", gst: "12%", importPolicy: "Free", exportPolicy: "Free", duty: "10%", aidc: "Nil", rodtep: "0.5%" },

    // --- SECTION X: Paper (Ch 47-49) ---
    { chapter: "47", code: "4707 10 00", description: "Waste and scrap of unbleached kraft paper", gst: "5%", importPolicy: "Free", exportPolicy: "Free", duty: "10%", aidc: "Nil", rodtep: "Nil" },
    { chapter: "48", code: "4801 00 10", description: "Newsprint, Glazed", gst: "5%", importPolicy: "Free (Actual User)", exportPolicy: "Free", duty: "10%", aidc: "Nil", rodtep: "Nil" },
    { chapter: "48", code: "4819 10 10", description: "Cartons/Boxes of Corrugated Paper", gst: "12%", importPolicy: "Free", exportPolicy: "Free", duty: "10%", aidc: "Nil", rodtep: "1.2%" },
    { chapter: "49", code: "4901 10 10", description: "Printed Books", gst: "Nil", importPolicy: "Free", exportPolicy: "Free", duty: "5%", aidc: "Nil", rodtep: "0.5%" },

    // --- SECTION XI: Textiles (Ch 50-63) ---
    { chapter: "50", code: "5001 00 00", description: "Silk-worm cocoons", gst: "Nil", importPolicy: "Free", exportPolicy: "Free", duty: "30%", aidc: "3%", rodtep: "1%" },
    { chapter: "50", code: "5007 20 10", description: "Silk Sarees", gst: "5%", importPolicy: "Free", exportPolicy: "Free", duty: "20%", aidc: "Nil", rodtep: "2.5%" },
    { chapter: "52", code: "5201 00 15", description: "Indian Cotton, staple length 28.5mm", gst: "5%", importPolicy: "Free", exportPolicy: "Free", duty: "5%", aidc: "5%", rodtep: "0.5%" },
    { chapter: "52", code: "5208 11 10", description: "Cotton Dhoti", gst: "5%", importPolicy: "Free", exportPolicy: "Free", duty: "10%", aidc: "7%", rodtep: "3%" },
    { chapter: "54", code: "5402 19 10", description: "Nylon Tyre Yarn", gst: "18%", importPolicy: "Free", exportPolicy: "Free", duty: "5%", aidc: "7%", rodtep: "1.8%" },
    { chapter: "57", code: "5701 10 10", description: "Carpets of wool, handmade", gst: "12%", importPolicy: "Free", exportPolicy: "Free", duty: "20%", aidc: "7%", rodtep: "4%" },
    { chapter: "61", code: "6105 10 20", description: "Men's Cotton Knit Shirts", gst: "5% / 12%", importPolicy: "Free", exportPolicy: "Free", duty: "20%", aidc: "Nil", rodtep: "3.5%" },
    { chapter: "62", code: "6203 11 00", description: "Suits of wool", gst: "12%", importPolicy: "Free", exportPolicy: "Free", duty: "20%", aidc: "Nil", rodtep: "3.5%" },
    { chapter: "63", code: "6302 60 10", description: "Terry Towel, Handloom", gst: "5%", importPolicy: "Free", exportPolicy: "Free", duty: "10%", aidc: "Nil", rodtep: "3.8%" },

    // --- SECTION XII: Footwear (Ch 64-67) ---
    { chapter: "64", code: "6403 19 10", description: "Leather footwear with leather sole", gst: "18%", importPolicy: "Free", exportPolicy: "Free", duty: "35%", aidc: "7%", rodtep: "2.5%" },
    { chapter: "66", code: "6601 10 00", description: "Garden Umbrellas", gst: "12%", importPolicy: "Free", exportPolicy: "Free", duty: "10%", aidc: "Nil", rodtep: "1.2%" },
    { chapter: "67", code: "6704 11 00", description: "Complete Wigs of synthetic material", gst: "18%", importPolicy: "Free", exportPolicy: "Free", duty: "10%", aidc: "5%", rodtep: "1%" },

    // --- SECTION XIII: Stone, Glass, Ceramics (Ch 68-70) ---
    { chapter: "68", code: "6802 21 10", description: "Marble blocks/tiles", gst: "18%", importPolicy: "Restricted (MIP)", exportPolicy: "Free", duty: "40%", aidc: "Nil", rodtep: "0.5%" },
    { chapter: "69", code: "6907 21 00", description: "Ceramic Tiles < 0.5% water absorption", gst: "18%", importPolicy: "Free", exportPolicy: "Free", duty: "15%", aidc: "Nil", rodtep: "1.2%" },
    { chapter: "70", code: "7005 10 10", description: "Tinted Float Glass", gst: "18%", importPolicy: "Free", exportPolicy: "Free", duty: "10%", aidc: "Nil", rodtep: "1%" },

    // --- SECTION XIV: Precious Metals (Ch 71) ---
    { chapter: "71", code: "7102 10 00", description: "Diamonds, unsorted", gst: "0.25%", importPolicy: "Free (KPC)", exportPolicy: "Free", duty: "0%", aidc: "Nil", rodtep: "Nil" },
    { chapter: "71", code: "7108 12 00", description: "Gold, unwrought (Other)", gst: "3%", importPolicy: "Restricted (RBI)", exportPolicy: "Free", duty: "12.5%", aidc: "2.5%", rodtep: "Nil" },
    { chapter: "71", code: "7113 19 10", description: "Gold Jewellery, unstudded", gst: "3%", importPolicy: "Free", exportPolicy: "Free", duty: "20%", aidc: "Nil", rodtep: "Rs 250/g" },

    // --- SECTION XV: Base Metals (Ch 72-83) ---
    { chapter: "72", code: "7204 49 00", description: "Ferrous Waste and Scrap", gst: "18%", importPolicy: "Restricted (PSIC)", exportPolicy: "Free", duty: "0%", aidc: "Nil", rodtep: "Nil" },
    { chapter: "72", code: "7208 10 00", description: "Flat-rolled iron/steel, hot-rolled coils", gst: "18%", importPolicy: "Free", exportPolicy: "Free", duty: "7.5%", aidc: "Nil", rodtep: "1%" },
    { chapter: "73", code: "7308 20 11", description: "Transmission towers of iron/steel", gst: "18%", importPolicy: "Free", exportPolicy: "Free", duty: "10%", aidc: "Nil", rodtep: "1.5%" },
    { chapter: "74", code: "7403 11 00", description: "Copper Cathodes", gst: "18%", importPolicy: "Free", exportPolicy: "Free", duty: "5%", aidc: "Nil", rodtep: "0.5%" },
    { chapter: "76", code: "7601 10 10", description: "Aluminium Ingots", gst: "18%", importPolicy: "Free", exportPolicy: "Free", duty: "7.5%", aidc: "Nil", rodtep: "0.5%" },
    { chapter: "82", code: "8201 10 00", description: "Spades and Shovels", gst: "18%", importPolicy: "Free", exportPolicy: "Free", duty: "10%", aidc: "Nil", rodtep: "1%" },
    { chapter: "83", code: "8301 10 00", description: "Padlocks", gst: "18%", importPolicy: "Free", exportPolicy: "Free", duty: "20%", aidc: "7%", rodtep: "1.2%" },

    // --- SECTION XVI: Machinery & Electronics (Ch 84-85) ---
    { chapter: "84", code: "8407 10 00", description: "Aircraft engines", gst: "5%", importPolicy: "Free", exportPolicy: "Free", duty: "2.5%", aidc: "Nil", rodtep: "0.5%" },
    { chapter: "84", code: "8414 51 20", description: "Ceiling Fans", gst: "18%", importPolicy: "Free", exportPolicy: "Free", duty: "20%", aidc: "Nil", rodtep: "1.5%" },
    { chapter: "84", code: "8415 10 10", description: "Split Air Conditioner", gst: "28%", importPolicy: "Prohibited (if with refrigerant)", exportPolicy: "Free", duty: "20%", aidc: "Nil", rodtep: "1.2%" },
    { chapter: "84", code: "8443 31 00", description: "Multifunction Printer (Print/Copy/Scan)", gst: "18%", importPolicy: "Free (BIS)", exportPolicy: "Free", duty: "0%", aidc: "Nil", rodtep: "0.5%" },
    { chapter: "84", code: "8471 30 10", description: "Personal Computer (Laptop)", gst: "18%", importPolicy: "Restricted", exportPolicy: "Free", duty: "0%", aidc: "Nil", rodtep: "0.5%" },
    { chapter: "85", code: "8504 23 10", description: "Transformers > 10000 kVA", gst: "18%", importPolicy: "Free", exportPolicy: "Free", duty: "10%", aidc: "Nil", rodtep: "1%" },
    { chapter: "85", code: "8517 12 11", description: "Mobile phones", gst: "18%", importPolicy: "Free", exportPolicy: "Free", duty: "20%", aidc: "Nil", rodtep: "0.8%" },
    { chapter: "85", code: "8523 80 20", description: "IT Software", gst: "18%", importPolicy: "Free", exportPolicy: "Free", duty: "0%", aidc: "Nil", rodtep: "Nil" },
    { chapter: "85", code: "8541 40 11", description: "Solar Cells", gst: "12%", importPolicy: "Free (ALMM)", exportPolicy: "Free", duty: "25%", aidc: "Nil", rodtep: "0.5%" },
    { chapter: "85", code: "8542 31 00", description: "Processors and Controllers (Chips)", gst: "18%", importPolicy: "Free", exportPolicy: "Free", duty: "0%", aidc: "Nil", rodtep: "Nil" },

    // --- SECTION XVII: Vehicles & Aircraft (Ch 86-89) ---
    { chapter: "86", code: "8601 10 00", description: "Rail Locomotives (Electric)", gst: "12%", importPolicy: "Restricted (Railways)", exportPolicy: "Free", duty: "10%", aidc: "Nil", rodtep: "Nil" },
    { chapter: "87", code: "8703 21 91", description: "Motor cars < 1000cc", gst: "28% + Cess", importPolicy: "Restricted (Homologation)", exportPolicy: "Free", duty: "60%", aidc: "Nil", rodtep: "0.5%" },
    { chapter: "87", code: "8708 99 00", description: "Parts & Accessories of Motor Vehicles", gst: "28%", importPolicy: "Free", exportPolicy: "Free", duty: "15%", aidc: "Nil", rodtep: "1%" },
    { chapter: "87", code: "8711 20 29", description: "Motorcycles > 75cc to 250cc", gst: "28%", importPolicy: "Free", exportPolicy: "Free", duty: "60%", aidc: "Nil", rodtep: "1%" },
    { chapter: "88", code: "8802 20 00", description: "Aeroplanes < 2000 kg", gst: "5%", importPolicy: "Free (DGCA)", exportPolicy: "Free", duty: "0%", aidc: "Nil", rodtep: "Nil" },
    { chapter: "89", code: "8901 90 00", description: "Cargo Ships / Vessels", gst: "5%", importPolicy: "Free", exportPolicy: "Free", duty: "0%", aidc: "Nil", rodtep: "Nil" },

    // --- SECTION XVIII: Optical, Medical, Clocks (Ch 90-92) ---
    { chapter: "90", code: "9018 31 00", description: "Syringes, with or without needles", gst: "12%", importPolicy: "Free", exportPolicy: "Free", duty: "7.5%", aidc: "Nil", rodtep: "1.1%" },
    { chapter: "90", code: "9027 80 90", description: "Chemical Analysis Instruments", gst: "18%", importPolicy: "Free", exportPolicy: "Free", duty: "0%", aidc: "Nil", rodtep: "1%" },
    { chapter: "91", code: "9101 11 00", description: "Wrist-watches, precious metal", gst: "18%", importPolicy: "Free", exportPolicy: "Free", duty: "20%", aidc: "Nil", rodtep: "2%" },
    { chapter: "92", code: "9201 10 00", description: "Upright Pianos", gst: "18%", importPolicy: "Free", exportPolicy: "Free", duty: "10%", aidc: "Nil", rodtep: "1%" },

    // --- SECTION XIX: Arms & Ammunition (Ch 93) ---
    { chapter: "93", code: "9302 00 00", description: "Revolvers and Pistols", gst: "18%", importPolicy: "Restricted (MHA)", exportPolicy: "Restricted", duty: "10%", aidc: "Nil", rodtep: "Nil" },

    // --- SECTION XX: Misc Manufactured (Ch 94-96) ---
    { chapter: "94", code: "9403 60 00", description: "Wooden Furniture", gst: "18%", importPolicy: "Free", exportPolicy: "Free", duty: "25%", aidc: "Nil", rodtep: "1.5%" },
    { chapter: "95", code: "9503 00 30", description: "Toys of Plastics", gst: "18%", importPolicy: "Restricted (BIS)", exportPolicy: "Free", duty: "60%", aidc: "Nil", rodtep: "0.8%" },
    { chapter: "96", code: "9608 10 19", description: "Ball Point Pens", gst: "18%", importPolicy: "Free", exportPolicy: "Free", duty: "10%", aidc: "5%", rodtep: "1.2%" },

    // --- SECTION XXI: Works of Art (Ch 97) ---
    { chapter: "97", code: "9701 10 00", description: "Paintings, drawings and pastels", gst: "12%", importPolicy: "Restricted", exportPolicy: "Free", duty: "10%", aidc: "5%", rodtep: "Nil" },
    { chapter: "97", code: "9706 00 00", description: "Antiques of an age > 100 years", gst: "12%", importPolicy: "Restricted (ASI)", exportPolicy: "Restricted", duty: "10%", aidc: "5%", rodtep: "Nil" }
  ];


export default HSN_DATA;
