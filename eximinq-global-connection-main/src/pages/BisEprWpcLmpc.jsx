import React, { useState, useMemo } from 'react';
import { 
  Search, 
  Filter, 
  ShieldCheck, 
  AlertTriangle, 
  CheckCircle2, 
  Globe, 
  ChevronRight, 
  Zap, 
  Beaker, 
  Hammer, 
  Gamepad2, 
  Footprints, 
  Battery, 
  Download,
  Info,
  Menu,
  X,
  ArrowRight,
  Stethoscope,
  Wheat,
  HardHat,
  Car,
  Wrench,
  Shirt,
  Box,
  Recycle,
  Factory,
  TrendingUp,
  Calculator,
  Leaf,
  Wifi,
  Radio,
  Signal,
  Cpu,
  Router,
  Scale,
  Tag,
  Package,
  Ruler,
  FileCheck,
  Building2
} from 'lucide-react';
import TopBar from '../Common/TopBar';
import { Footer } from '../Common/Footer';

// --- Types ---
// Note: TypeScript type aliases and interfaces removed for plain .jsx usage.
// Reference shapes (for developer clarity):
// View: 'BIS' | 'EPR' | 'WPC' | 'LMPC'
// Sector: one of ('Electronics','Steel','Chemicals','Toys','Footwear','Solar','Batteries','Glass','Food & Agri','Construction','Automotive','Medical','Textiles','Machinery','Electrical')
// Product: { id, name, isNumber, sector, scheme, enforcementDate, riskLevel }



// --- Mock Data (BIS) ---
const PRODUCTS = [
  // ... (Existing BIS Data kept as is) ...
  // --- FOOD & AGRICULTURE ---
  { id: 1, name: 'Containers for Packaging of Natural Mineral Water and Packaged Drinking Water', isNumber: 'IS 15410', sector: 'Food & Agri', scheme: 'ISI', enforcementDate: '2021-04-01', riskLevel: 'High' },
  { id: 2, name: 'Skimmed Milk Powder - Standard Grade', isNumber: 'IS 13334 (Part 1)', sector: 'Food & Agri', scheme: 'ISI', enforcementDate: '2020-01-01', riskLevel: 'High' },
  { id: 3, name: 'Milk Powder', isNumber: 'IS 1165', sector: 'Food & Agri', scheme: 'ISI', enforcementDate: '2020-01-01', riskLevel: 'High' },
  { id: 6, name: 'Condensed Milk, Partly Skimmed And Skimmed Condensed Milk', isNumber: 'IS 1166', sector: 'Food & Agri', scheme: 'ISI', enforcementDate: '2020-01-01', riskLevel: 'High' },
  { id: 13, name: 'Biscuits', isNumber: 'IS 1011', sector: 'Food & Agri', scheme: 'ISI', enforcementDate: '2021-01-01', riskLevel: 'High' },
  { id: 17, name: 'Iodized Salt, Vacuum Evaporated Iodized Salt', isNumber: 'IS 7224', sector: 'Food & Agri', scheme: 'ISI', enforcementDate: '2021-01-01', riskLevel: 'High' },
  { id: 57, name: 'Infant Milk Substitutes', isNumber: 'IS 14433', sector: 'Food & Agri', scheme: 'ISI', enforcementDate: '2021-01-01', riskLevel: 'Critical' },
  { id: 63, name: 'Natural Cheese (hard Variety), Processed Cheese', isNumber: 'IS 2785', sector: 'Food & Agri', scheme: 'ISI', enforcementDate: '2021-01-01', riskLevel: 'High' },
  { id: 77, name: 'Milk-cereal Based Complementary Foods', isNumber: 'IS 1656', sector: 'Food & Agri', scheme: 'ISI', enforcementDate: '2021-01-01', riskLevel: 'Critical' },
  { id: 90, name: 'Compounded Feeds For Cattle', isNumber: 'IS 2052', sector: 'Food & Agri', scheme: 'ISI', enforcementDate: '2021-01-01', riskLevel: 'High' },
  // --- CONSTRUCTION & CEMENT ---
  { id: 7, name: 'Rotational Moulded Polyethylene Water Storage Tanks', isNumber: 'IS 12701', sector: 'Construction', scheme: 'ISI', enforcementDate: '2019-01-01', riskLevel: 'High' },
  { id: 8, name: 'High Density Polyethylene Pipe For Sewerage', isNumber: 'IS 14333', sector: 'Construction', scheme: 'ISI', enforcementDate: '2019-01-01', riskLevel: 'High' },
  { id: 14, name: 'Plywood For General Purposes', isNumber: 'IS 303', sector: 'Construction', scheme: 'ISI', enforcementDate: '2020-01-01', riskLevel: 'High' },
  { id: 23, name: 'Marine Plywood-specification', isNumber: 'IS 710', sector: 'Construction', scheme: 'ISI', enforcementDate: '2020-01-01', riskLevel: 'High' },
  { id: 45, name: 'Wooden Flush Door Shutters (solid Core Type)', isNumber: 'IS 2202 (Part 1)', sector: 'Construction', scheme: 'ISI', enforcementDate: '2020-01-01', riskLevel: 'High' },
  { id: 47, name: 'Plywood For Concrete Shuttering Work', isNumber: 'IS 4990', sector: 'Construction', scheme: 'ISI', enforcementDate: '2020-01-01', riskLevel: 'High' },
  { id: 50, name: 'Unplasticized Pvc Pipes For Potable Water Supplies', isNumber: 'IS 4985', sector: 'Construction', scheme: 'ISI', enforcementDate: '2019-01-01', riskLevel: 'High' },
  { id: 101, name: 'UPVC Pipes For Underground Drainage', isNumber: 'IS 15328', sector: 'Construction', scheme: 'ISI', enforcementDate: '2019-01-01', riskLevel: 'High' },
  { id: 180, name: 'Portland Cement Clinker', isNumber: 'IS 16353', sector: 'Construction', scheme: 'ISI', enforcementDate: '2020-01-01', riskLevel: 'Critical' },
  { id: 357, name: 'Concrete Masonry Units: Hollow And Solid Concrete Blocks', isNumber: 'IS 2185 (Part 1)', sector: 'Construction', scheme: 'ISI', enforcementDate: '2020-01-01', riskLevel: 'High' },
  { id: 720, name: 'Building Limes', isNumber: 'IS 712', sector: 'Construction', scheme: 'ISI', enforcementDate: '2020-01-01', riskLevel: 'High' },
  // --- STEEL & METAL ---
  { id: 15, name: 'Mild Steel And Medium Tensile Steel Bars For Concrete', isNumber: 'IS 432 (Part 2)', sector: 'Steel', scheme: 'ISI', enforcementDate: '2018-12-18', riskLevel: 'Critical' },
  { id: 38, name: 'Steel Tubes For Structural Purposes', isNumber: 'IS 1161', sector: 'Steel', scheme: 'ISI', enforcementDate: '2019-01-01', riskLevel: 'High' },
  { id: 42, name: 'High Strength Deformed Steel Bars/Wires For Concrete', isNumber: 'IS 1786', sector: 'Steel', scheme: 'ISI', enforcementDate: '2019-01-01', riskLevel: 'Critical' },
  { id: 46, name: 'Galvanized Steel Strips And Sheets (plain And Corrugated)', isNumber: 'IS 277', sector: 'Steel', scheme: 'ISI', enforcementDate: '2020-06-10', riskLevel: 'Critical' },
  { id: 54, name: 'Mild Steel Wire For General Engineering Purposes', isNumber: 'IS 280', sector: 'Steel', scheme: 'ISI', enforcementDate: '2020-06-10', riskLevel: 'High' },
  { id: 60, name: 'Hot Rolled Medium And High Tensile Structural Steel', isNumber: 'IS 2062', sector: 'Steel', scheme: 'ISI', enforcementDate: '2020-06-10', riskLevel: 'Critical' },
  { id: 243, name: 'Stainless Steel Plate, Sheet And Strip', isNumber: 'IS 6911', sector: 'Steel', scheme: 'ISI', enforcementDate: '2020-06-10', riskLevel: 'High' },
  { id: 632, name: 'Ferrosilicon', isNumber: 'IS 1110', sector: 'Steel', scheme: 'ISI', enforcementDate: '2020-04-23', riskLevel: 'Critical' },
  { id: 491, name: 'Copper', isNumber: 'IS 191', sector: 'Steel', scheme: 'ISI', enforcementDate: '2021-01-01', riskLevel: 'High' },
  // --- ELECTRICAL & ELECTRONICS (ISI/CRS) ---
  { id: 5, name: 'PVC Insulated Unsheathed And Sheathed Cables', isNumber: 'IS 694', sector: 'Electrical', scheme: 'ISI', enforcementDate: '2019-01-01', riskLevel: 'Critical' },
  { id: 16, name: 'Crosslinked Polyethylene Insulated Pvc Sheathed Cables', isNumber: 'IS 7098 (Part 1)', sector: 'Electrical', scheme: 'ISI', enforcementDate: '2019-01-01', riskLevel: 'Critical' },
  { id: 29, name: 'Plugs And Socket - Outlets (Up to 250V)', isNumber: 'IS 1293', sector: 'Electrical', scheme: 'ISI', enforcementDate: '2020-01-01', riskLevel: 'Critical' },
  { id: 30, name: 'PVC Insulated (heavy Duty) Electric Cables', isNumber: 'IS 1554 (Part 1)', sector: 'Electrical', scheme: 'ISI', enforcementDate: '2019-01-01', riskLevel: 'Critical' },
  { id: 32, name: 'Electric Instantaneous Water Heaters', isNumber: 'IS 8978', sector: 'Electrical', scheme: 'ISI', enforcementDate: '2020-01-01', riskLevel: 'High' },
  { id: 39, name: 'Electric Irons', isNumber: 'IS 366', sector: 'Electrical', scheme: 'ISI', enforcementDate: '2020-01-01', riskLevel: 'High' },
  { id: 41, name: 'Switches For Domestic And Similar Purposes', isNumber: 'IS 3854', sector: 'Electrical', scheme: 'ISI', enforcementDate: '2020-01-01', riskLevel: 'High' },
  { id: 86, name: 'AC Static Watthour Meters, Class 1 And 2', isNumber: 'IS 13779', sector: 'Electrical', scheme: 'ISI', enforcementDate: '2020-01-01', riskLevel: 'High' },
  { id: 102, name: 'Electric Ceiling Type Fans', isNumber: 'IS 374', sector: 'Electrical', scheme: 'ISI', enforcementDate: '2020-01-01', riskLevel: 'High' },
  { id: 112, name: 'Distribution Transformers Up To 2500 Kva', isNumber: 'IS 1180 (Part 1)', sector: 'Electrical', scheme: 'ISI', enforcementDate: '2020-01-01', riskLevel: 'Critical' },
  { id: 135, name: 'AC Static Transformer Operated Watthour Meters', isNumber: 'IS 14697', sector: 'Electrical', scheme: 'ISI', enforcementDate: '2020-01-01', riskLevel: 'High' },
  { id: 140, name: 'Circuit-breakers For Household (MCBs)', isNumber: 'IS/IEC 60898 (Part 1)', sector: 'Electrical', scheme: 'ISI', enforcementDate: '2020-01-01', riskLevel: 'Critical' },
  { id: 213, name: 'Tungsten Filament Lamp For General Lighting', isNumber: 'IS 418', sector: 'Electrical', scheme: 'ISI', enforcementDate: '2020-01-01', riskLevel: 'High' },
  { id: 358, name: 'Tubular Fluorescent Lamps', isNumber: 'IS 2418 (Part 2)', sector: 'Electrical', scheme: 'ISI', enforcementDate: '2020-01-01', riskLevel: 'High' },
  // --- CHEMICALS ---
  { id: 147, name: 'Caustic Soda', isNumber: 'IS 252', sector: 'Chemicals', scheme: 'ISI', enforcementDate: '2018-04-03', riskLevel: 'Critical' },
  { id: 291, name: 'Boric Acid', isNumber: 'IS 10116', sector: 'Chemicals', scheme: 'ISI', enforcementDate: '2019-06-12', riskLevel: 'High' },
  { id: 10022, name: 'Methylene Chloride', isNumber: 'IS 4566', sector: 'Chemicals', scheme: 'ISI', enforcementDate: '2021-05-20', riskLevel: 'High' },
  { id: 684, name: 'Acetone', isNumber: 'IS 170', sector: 'Chemicals', scheme: 'ISI', enforcementDate: '2020-09-14', riskLevel: 'High' },
  { id: 69, name: 'Stable Bleaching Powder', isNumber: 'IS 1065 (Part 1)', sector: 'Chemicals', scheme: 'ISI', enforcementDate: '2020-01-01', riskLevel: 'High' },
  { id: 104, name: 'Disinfectant Fluids, Phenolic Type', isNumber: 'IS 1061', sector: 'Chemicals', scheme: 'ISI', enforcementDate: '2020-01-01', riskLevel: 'High' },
  { id: 109, name: 'Chlorpyrifos Emulsifiable Concentrates', isNumber: 'IS 8944', sector: 'Chemicals', scheme: 'ISI', enforcementDate: '2020-01-01', riskLevel: 'High' },
  { id: 266, name: 'Imidacloprid SL', isNumber: 'IS 15335', sector: 'Chemicals', scheme: 'ISI', enforcementDate: '2020-01-01', riskLevel: 'High' },
  { id: 427, name: 'Sodium Metabisulphite, Food Grade', isNumber: 'IS 4752', sector: 'Chemicals', scheme: 'ISI', enforcementDate: '2020-01-01', riskLevel: 'High' },
  { id: 572, name: 'Sulphuric Acid', isNumber: 'IS 266', sector: 'Chemicals', scheme: 'ISI', enforcementDate: '2020-01-01', riskLevel: 'Critical' },
  // --- AUTOMOTIVE ---
  { id: 114, name: 'Pneumatic Tyres For Commercial Vehicles', isNumber: 'IS 15636', sector: 'Automotive', scheme: 'ISI', enforcementDate: '2020-10-01', riskLevel: 'Critical' },
  { id: 120, name: 'Tubes For Pneumatic Tyres', isNumber: 'IS 13098', sector: 'Automotive', scheme: 'ISI', enforcementDate: '2020-10-01', riskLevel: 'High' },
  { id: 136, name: 'Pneumatic Tyres For Passenger Cars', isNumber: 'IS 15633', sector: 'Automotive', scheme: 'ISI', enforcementDate: '2020-10-01', riskLevel: 'Critical' },
  { id: 210, name: 'Pneumatic Tyres For Two/Three-wheeled Vehicles', isNumber: 'IS 15627', sector: 'Automotive', scheme: 'ISI', enforcementDate: '2020-10-01', riskLevel: 'Critical' },
  { id: 359, name: 'Safety Glass For Road Transport', isNumber: 'IS 2553 (Part 2)', sector: 'Automotive', scheme: 'ISI', enforcementDate: '2021-04-01', riskLevel: 'High' },
  { id: 480, name: 'Wheel Rims For Two And Three Wheeled Vehicles', isNumber: 'IS 16192 (Part 1)', sector: 'Automotive', scheme: 'ISI', enforcementDate: '2020-10-01', riskLevel: 'Critical' },
  { id: 524, name: 'Wheels For Passenger Cars', isNumber: 'IS 9436', sector: 'Automotive', scheme: 'ISI', enforcementDate: '2020-10-01', riskLevel: 'High' },
  { id: 741, name: 'Diesel Engines - NOx Reduction Agent AUS 32', isNumber: 'IS 17042 (Part 1)', sector: 'Automotive', scheme: 'ISI', enforcementDate: '2021-04-01', riskLevel: 'High' },
  // --- MEDICAL & SAFETY ---
  { id: 94, name: 'Medical Textiles - Coveralls For Covid-19', isNumber: 'IS 17423', sector: 'Medical', scheme: 'ISI', enforcementDate: '2020-01-01', riskLevel: 'High' },
  { id: 96, name: 'Surgical Rubber Gloves', isNumber: 'IS 4148', sector: 'Medical', scheme: 'ISI', enforcementDate: '2020-01-01', riskLevel: 'Critical' },
  { id: 195, name: 'Protective Helmet For Two Wheeler Riders', isNumber: 'IS 4151', sector: 'Medical', scheme: 'ISI', enforcementDate: '2020-01-01', riskLevel: 'Critical' },
  { id: 189, name: 'Industrial Safety Helmets', isNumber: 'IS 2925', sector: 'Medical', scheme: 'ISI', enforcementDate: '2020-01-01', riskLevel: 'High' },
  { id: 279, name: 'Sanitary Napkins', isNumber: 'IS 5405', sector: 'Medical', scheme: 'ISI', enforcementDate: '2021-01-01', riskLevel: 'High' },
  { id: 387, name: 'Single-use Rubber Examination Gloves', isNumber: 'IS 15354 (Part 1)', sector: 'Medical', scheme: 'ISI', enforcementDate: '2021-01-01', riskLevel: 'High' },
  { id: 534, name: 'Cervical Collar', isNumber: 'IS 11569', sector: 'Medical', scheme: 'ISI', enforcementDate: '2021-01-01', riskLevel: 'Medium' },
  { id: 725, name: 'Respiratory Protective Devices (N95 Masks)', isNumber: 'IS 9473', sector: 'Medical', scheme: 'ISI', enforcementDate: '2020-01-01', riskLevel: 'Critical' },
  { id: 750, name: 'Protective Devices Against Medical X-radiation', isNumber: 'IS/IEC 61331 (Part 3)', sector: 'Medical', scheme: 'ISI', enforcementDate: '2021-01-01', riskLevel: 'Critical' },
  { id: 751, name: 'Blood-Glucose Monitoring System', isNumber: 'IS/ISO 15197', sector: 'Medical', scheme: 'ISI', enforcementDate: '2021-01-01', riskLevel: 'High' },
  // --- MACHINERY & PUMPS ---
  { id: 92, name: 'Submersible Pumpsets', isNumber: 'IS 8034', sector: 'Machinery', scheme: 'ISI', enforcementDate: '2019-01-01', riskLevel: 'High' },
  { id: 113, name: 'Openwell Submersible Pumpsets', isNumber: 'IS 14220', sector: 'Machinery', scheme: 'ISI', enforcementDate: '2019-01-01', riskLevel: 'High' },
  { id: 131, name: 'Induction Motors (IE Code) Efficiency Classes', isNumber: 'IS 12615', sector: 'Machinery', scheme: 'ISI', enforcementDate: '2019-01-01', riskLevel: 'High' },
  { id: 169, name: 'Horizontal Centrifugal Pumps For Clear Cold Water', isNumber: 'IS 6595 (Part 1)', sector: 'Machinery', scheme: 'ISI', enforcementDate: '2019-01-01', riskLevel: 'High' },
  { id: 256, name: 'Diesel Engines For Agricultural Purposes', isNumber: 'IS 11170', sector: 'Machinery', scheme: 'ISI', enforcementDate: '2019-01-01', riskLevel: 'High' },
  // --- TEXTILES & JUTE ---
  { id: 9, name: 'HDPE/PP Woven Sacks For Packing 50 Kg Foodgrains', isNumber: 'IS 14887', sector: 'Textiles', scheme: 'ISI', enforcementDate: '2018-01-01', riskLevel: 'High' },
  { id: 27, name: 'HDPE/PP Woven Sacks For 10-30 Kg Foodgrains', isNumber: 'IS 16208', sector: 'Textiles', scheme: 'ISI', enforcementDate: '2018-01-01', riskLevel: 'High' },
  { id: 37, name: 'HDPE/PP Woven Sacks For Packing Sugar', isNumber: 'IS 14968', sector: 'Textiles', scheme: 'ISI', enforcementDate: '2018-01-01', riskLevel: 'High' },
  { id: 51, name: 'HDPE/PP Woven Sacks For Packing Fertilizers', isNumber: 'IS 9755', sector: 'Textiles', scheme: 'ISI', enforcementDate: '2018-01-01', riskLevel: 'High' },
  { id: 67, name: 'HDPE/PP Woven Sacks For Packing Cement', isNumber: 'IS 11652', sector: 'Textiles', scheme: 'ISI', enforcementDate: '2018-01-01', riskLevel: 'High' },
  { id: 123, name: 'Jute Bags For Packing Sugar', isNumber: 'IS 15138', sector: 'Textiles', scheme: 'ISI', enforcementDate: '2018-01-01', riskLevel: 'High' },
  { id: 355, name: 'A-Twill Jute Bags', isNumber: 'IS 1943', sector: 'Textiles', scheme: 'ISI', enforcementDate: '2018-01-01', riskLevel: 'High' },
  // --- FOOTWEAR (ISI) ---
  { id: 209, name: 'Personal Protective Footwear', isNumber: 'IS 15298', sector: 'Footwear', scheme: 'ISI', enforcementDate: '2020-10-27', riskLevel: 'High' },
  { id: 704, name: 'Canvas Boots (Rubber Sole)', isNumber: 'IS 3735', sector: 'Footwear', scheme: 'ISI', enforcementDate: '2020-10-27', riskLevel: 'High' },
  { id: 735, name: 'Sports Footwear', isNumber: 'IS 15844', sector: 'Footwear', scheme: 'ISI', enforcementDate: '2023-07-01', riskLevel: 'High' },
  { id: 449, name: 'PVC Industrial Boots', isNumber: 'IS 12254', sector: 'Footwear', scheme: 'ISI', enforcementDate: '2020-10-27', riskLevel: 'High' },
  { id: 465, name: 'Protective Footwear (PPE Part 3)', isNumber: 'IS 15298 (Part 3)', sector: 'Footwear', scheme: 'ISI', enforcementDate: '2020-10-27', riskLevel: 'High' },
  { id: 733, name: 'High Ankle Tactical Boots With PU-Rubber Sole', isNumber: 'IS 17037', sector: 'Footwear', scheme: 'ISI', enforcementDate: '2023-01-01', riskLevel: 'High' },
  // --- TOYS (ISI) ---
  { id: 729, name: 'Electric Toys', isNumber: 'IS 15644', sector: 'Toys', scheme: 'ISI', enforcementDate: '2021-01-01', riskLevel: 'High' },
  { id: 31, name: 'Non-Electric Toys (Safety)', isNumber: 'IS 9873 (Part 1)', sector: 'Toys', scheme: 'ISI', enforcementDate: '2021-01-01', riskLevel: 'High' },
  // --- HOUSEHOLD & OTHERS ---
  { id: 187, name: 'Domestic Pressure Cookers', isNumber: 'IS 2347', sector: 'Machinery', scheme: 'ISI', enforcementDate: '2020-01-01', riskLevel: 'Critical' },
  { id: 73, name: 'Domestic Gas Stoves (LPG)', isNumber: 'IS 4246', sector: 'Machinery', scheme: 'ISI', enforcementDate: '2020-01-01', riskLevel: 'Critical' },
  { id: 100, name: 'Plastics Feeding Bottles', isNumber: 'IS 14625', sector: 'Toys', scheme: 'ISI', enforcementDate: '2020-01-01', riskLevel: 'Critical' },
  { id: 302, name: 'Dunnage Pallets', isNumber: 'IS 13714', sector: 'Machinery', scheme: 'ISI', enforcementDate: '2020-01-01', riskLevel: 'Medium' },
  { id: 508, name: 'Safes (Specification)', isNumber: 'IS 550 (Part 1)', sector: 'Construction', scheme: 'ISI', enforcementDate: '2020-01-01', riskLevel: 'High' },
  // --- ELECTRONICS (CRS - Existing) ---
  { id: 801, name: 'Laptops / Notebooks / Tablets', isNumber: 'IS 13252 (Part 1)', sector: 'Electronics', scheme: 'CRS', enforcementDate: '2013-07-03', riskLevel: 'High' },
  { id: 802, name: 'Mobile Phones / Smart Phones', isNumber: 'IS 13252 (Part 1)', sector: 'Electronics', scheme: 'CRS', enforcementDate: '2014-09-13', riskLevel: 'High' },
  { id: 803, name: 'Power Adapters / Chargers', isNumber: 'IS 13252 (Part 1)', sector: 'Electronics', scheme: 'CRS', enforcementDate: '2015-12-01', riskLevel: 'High' },
  { id: 804, name: 'LED Lamps (Self-Ballasted)', isNumber: 'IS 16102 (Part 1)', sector: 'Electronics', scheme: 'CRS', enforcementDate: '2015-12-01', riskLevel: 'High' },
  { id: 805, name: 'Smart Watches', isNumber: 'IS 13252 (Part 1)', sector: 'Electronics', scheme: 'CRS', enforcementDate: '2018-05-23', riskLevel: 'High' },
  { id: 806, name: 'CCTV Cameras', isNumber: 'IS 13252 (Part 1)', sector: 'Electronics', scheme: 'CRS', enforcementDate: '2018-05-23', riskLevel: 'High' }
];

// --- Mock Data (WPC) ---
const WPC_ETA_ITEMS = [
  { id: 'w1', name: 'Mobile Phones & Smart Phones', category: 'Mobile Devices', band: 'GSM/LTE/5G', type: 'Mandatory ETA' },
  { id: 'w2', name: 'Bluetooth Headphones / Earbuds', category: 'Accessories', band: '2.4 GHz', type: 'Mandatory ETA' },
  { id: 'w3', name: 'Wi-Fi Routers & Access Points', category: 'Networking', band: '2.4 GHz / 5 GHz', type: 'Mandatory ETA' },
  { id: 'w4', name: 'Smart Watches / Fitness Trackers', category: 'Wearables', band: '2.4 GHz (BLE)', type: 'Mandatory ETA' },
  { id: 'w5', name: 'Wireless Mouse & Keyboard', category: 'Peripherals', band: '2.4 GHz', type: 'Mandatory ETA' },
  { id: 'w6', name: 'RFID Readers / Tags', category: 'Industrial', band: '865-867 MHz', type: 'Mandatory ETA' },
  { id: 'w7', name: 'Drones (Remotely Piloted Aircraft)', category: 'Aviation', band: '2.4 GHz / 5.8 GHz', type: 'Mandatory ETA' },
  { id: 'w8', name: 'Car Remote Key (Keyless Entry)', category: 'Automotive', band: '433 MHz', type: 'Mandatory ETA' },
  { id: 'w9', name: 'Wireless Microphones', category: 'Audio', band: 'UHF / VHF', type: 'Mandatory ETA' },
  { id: 'w10', name: 'Smart Home Devices (Zigbee/Z-Wave)', category: 'IoT', band: '865 MHz / 2.4 GHz', type: 'Mandatory ETA' },
];

const WPC_EXEMPT_BANDS = [
  { id: 'e1', band: '2.4 - 2.4835 GHz', use: 'Wi-Fi, Bluetooth, Zigbee', limit: '1 Watt (30 dBm)', status: 'License-Free' },
  { id: 'e2', band: '5.150 - 5.350 GHz', use: 'Wi-Fi (Indoor Use Only)', limit: '200 mW (23 dBm)', status: 'License-Free' },
  { id: 'e3', band: '5.725 - 5.875 GHz', use: 'Wi-Fi (Outdoor/Indoor)', limit: '1 Watt (30 dBm)', status: 'License-Free' },
  { id: 'e4', band: '865 - 867 MHz', use: 'RFID, IoT, M2M', limit: '1 Watt (30 dBm)', status: 'License-Free' },
  { id: 'e5', band: '433 - 434 MHz', use: 'Low Power Devices (Remotes)', limit: '10 mW', status: 'License-Free' },
  { id: 'e6', band: '26.957 - 27.283 MHz', use: 'Model Control (Toys)', limit: 'Simplex Only', status: 'License-Free' },
];

// --- SECTORS ---
const SECTORS = [
  { id: 'Food & Agri', label: 'Food & Agriculture', icon: <Wheat className="w-4 h-4" /> },
  { id: 'Construction', label: 'Construction', icon: <HardHat className="w-4 h-4" /> },
  { id: 'Electronics', label: 'Electronics & IT', icon: <Zap className="w-4 h-4" /> },
  { id: 'Electrical', label: 'Electrical', icon: <Zap className="w-4 h-4" /> },
  { id: 'Steel', label: 'Steel & Iron', icon: <Hammer className="w-4 h-4" /> },
  { id: 'Chemicals', label: 'Chemicals', icon: <Beaker className="w-4 h-4" /> },
  { id: 'Medical', label: 'Medical', icon: <Stethoscope className="w-4 h-4" /> },
  { id: 'Automotive', label: 'Automotive', icon: <Car className="w-4 h-4" /> },
  { id: 'Machinery', label: 'Machinery', icon: <Wrench className="w-4 h-4" /> },
  { id: 'Textiles', label: 'Textiles', icon: <Shirt className="w-4 h-4" /> },
  { id: 'Toys', label: 'Toys', icon: <Gamepad2 className="w-4 h-4" /> },
  { id: 'Footwear', label: 'Footwear', icon: <Footprints className="w-4 h-4" /> },
  { id: 'Batteries', label: 'Batteries', icon: <Battery className="w-4 h-4" /> },
];

// --- Components ---

// Top bar navigation component
{/* <TopBar/> */}
const Navbar = ({ activeView, setActiveView }) => (
  <nav className="bg-[#0f172a] text-white shadow-xl sticky top-0 z-50 border-b border-slate-700">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex h-16 items-center justify-center">
        <div className="hidden md:flex items-center space-x-8 text-sm font-medium">
          <button
            onClick={() => setActiveView('BIS')}
            className={`transition-colors ${
              activeView === 'BIS'
                ? 'text-white border-b-2 border-blue-500 pb-5 pt-5'
                : 'text-slate-300 hover:text-white'
            }`}
          >
            BIS Product List
          </button>

          <button
            onClick={() => setActiveView('EPR')}
            className={`transition-colors ${
              activeView === 'EPR'
                ? 'text-white border-b-2 border-blue-500 pb-5 pt-5'
                : 'text-slate-300 hover:text-white'
            }`}
          >
            EPR Targets 2025
          </button>

          <button
            onClick={() => setActiveView('WPC')}
            className={`transition-colors ${
              activeView === 'WPC'
                ? 'text-white border-b-2 border-blue-500 pb-5 pt-5'
                : 'text-slate-300 hover:text-white'
            }`}
          >
            WPC & Wireless
          </button>

          <button
            onClick={() => setActiveView('LMPC')}
            className={`transition-colors ${
              activeView === 'LMPC'
                ? 'text-white border-b-2 border-blue-500 pb-5 pt-5'
                : 'text-slate-300 hover:text-white'
            }`}
          >
            LMPC & Labeling
          </button>
        </div>
      </div>
    </div>
  </nav>
);


const RiskBadge = ({ level }) => (
  <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-bold ${
    level === 'Critical' 
      ? 'bg-red-100 text-red-700 border border-red-200' 
      : 'bg-amber-100 text-amber-700 border border-amber-200'
  }`}>
    {level === 'Critical' ? <AlertTriangle className="w-3 h-3 mr-1" /> : <ShieldCheck className="w-3 h-3 mr-1" />}
    {level.toUpperCase()} RISK
  </span>
);

const SchemeBadge = ({ scheme }) => (
  <span className={`inline-flex items-center px-2 py-0.5 rounded text-xs font-semibold ${
    scheme === 'CRS' ? 'bg-blue-50 text-blue-700 border border-blue-200' : 'bg-purple-50 text-purple-700 border border-purple-200'
  }`}>
    {scheme === 'ISI' ? 'ISI MARK (Scheme I)' : 'CRS (Scheme II)'}
  </span>
);

// --- Sub-components for Views ---

const BisListView = ({ searchTerm, setSearchTerm, activeSector, setActiveSector, filteredProducts }) => (
  <>
    {/* Hero Section */}

    
    <div className="bg-slate-900 relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')] opacity-10 bg-cover bg-center" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 relative z-10">
        <div className="max-w-3xl">
          <h1 className="text-3xl md:text-5xl font-extrabold text-white tracking-tight mb-4">
            Mandatory BIS Certification List <br />
            <span className="text-blue-400 text-2xl md:text-4xl">Are your products compliant?</span>
          </h1>
          <p className="text-base text-slate-300 mb-8 leading-relaxed">
            Search the complete database of goods under Mandatory Certification (Scheme I & II). 
            Importing or selling without a valid BIS license can lead to <span className="text-white font-semibold">confiscation and heavy penalties</span>.
          </p>
          
          
          <div className="relative max-w-xl">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Search className="h-5 w-5 text-slate-400" />
            </div>
            <input
              type="text"
              className="block w-full pl-10 pr-3 py-4 border-none rounded-lg leading-5 bg-white text-slate-900 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-xl text-lg"
              placeholder="Search by Product Name (e.g., Cement) or IS Number..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <div className="absolute inset-y-0 right-0 pr-3 flex items-center">
                <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md text-sm font-bold">
                  Search
                </button>
            </div>
          </div>
        </div>
      </div>
    </div>

    <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Sector Tabs */}
      <div className="flex overflow-x-auto pb-4 gap-3 no-scrollbar mb-6">
        <button 
          onClick={() => setActiveSector('All')}
          className={`
            flex items-center px-5 py-2.5 rounded-full text-sm font-semibold whitespace-nowrap transition-all border
            ${activeSector === 'All' 
              ? 'bg-blue-600 text-white border-blue-600 shadow-md' 
              : 'bg-white text-slate-600 border-slate-200 hover:bg-slate-50 hover:border-slate-300'}
          `}
        >
          All Sectors
        </button>
        {SECTORS.map((sector) => (
          <button 
            key={sector.id}
            onClick={() => setActiveSector(sector.id)}
            className={`
              flex items-center px-5 py-2.5 rounded-full text-sm font-semibold whitespace-nowrap transition-all border
              ${activeSector === sector.id 
                ? 'bg-blue-600 text-white border-blue-600 shadow-md' 
                : 'bg-white text-slate-600 border-slate-200 hover:bg-slate-50 hover:border-slate-300'}
            `}
          >
            <span className={`mr-2 ${activeSector === sector.id ? 'text-white' : 'text-slate-400'}`}>
              {sector.icon}
            </span>
            {sector.label}
          </button>
        ))}
      </div>

      <div className="flex flex-col lg:flex-row gap-8">
        {/* Main List */}
        <div className="lg:w-3/4">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-bold text-slate-800">
              Product Database <span className="text-slate-400 font-normal text-base ml-2">({filteredProducts.length} items found)</span>
            </h2>
            <button className="text-blue-600 text-sm font-semibold flex items-center hover:underline">
              <Download className="w-4 h-4 mr-1" /> Download Full List
            </button>
          </div>

          <div className="bg-white rounded-xl shadow-sm border border-slate-200 divide-y divide-slate-100 max-h-[1000px] overflow-y-auto">
          {filteredProducts.length > 0 ? (
            filteredProducts.map((product) => (
                <div key={product.id} className="p-5 hover:bg-slate-50 transition-colors group">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                          <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">{product.sector}</span>
                          <RiskBadge level={product.riskLevel} />
                      </div>
                      <h3 className="text-lg font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                        {product.name}
                      </h3>
                      <div className="flex items-center gap-4 mt-2 text-sm text-slate-600">
                        <span className="flex items-center bg-slate-100 px-2 py-1 rounded text-xs font-mono font-medium border border-slate-200">
                          {product.isNumber}
                        </span>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-4 sm:border-l sm:border-slate-100 sm:pl-6">
                        <div className="text-center">
                          <SchemeBadge scheme={product.scheme} />
                          <div className="text-[10px] text-slate-400 mt-1 text-center uppercase tracking-wide">Requirement</div>
                        </div>
                        <button className="bg-white border border-slate-200 text-slate-700 hover:border-blue-500 hover:text-blue-600 px-4 py-2 rounded-lg text-sm font-semibold transition-all">
                          Check Cost
                        </button>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <div className="p-12 text-center">
                <div className="bg-slate-50 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Search className="w-8 h-8 text-slate-300" />
                </div>
                <h3 className="text-lg font-medium text-slate-900">No products found</h3>
                <p className="text-slate-500 mt-1">Try adjusting your search terms or filters.</p>
                <button onClick={() => {setSearchTerm(''); setActiveSector('All')}} className="mt-4 text-blue-600 font-medium hover:underline">
                  Clear all filters
                </button>
              </div>
            )}
          </div>
        </div>

        {/* Sidebar */}
        <div className="lg:w-1/4 space-y-6">
          <div className="bg-slate-900 text-white rounded-xl p-6 shadow-md">
            <h3 className="font-bold mb-4">Know Your Scheme</h3>
            <div className="space-y-4">
              <div className="bg-slate-800/50 p-3 rounded-lg border border-slate-700">
                <div className="flex items-center justify-between mb-1">
                  <span className="font-bold text-blue-400">CRS (Scheme II)</span>
                  <Zap className="w-4 h-4 text-slate-500" />
                </div>
                <p className="text-xs text-slate-400">Self-declaration based. Mainly for Electronics & IT goods. No factory audit required usually.</p>
              </div>
              <div className="bg-slate-800/50 p-3 rounded-lg border border-slate-700">
                  <div className="flex items-center justify-between mb-1">
                  <span className="font-bold text-purple-400">ISI (Scheme I)</span>
                  <Hammer className="w-4 h-4 text-slate-500" />
                </div>
                <p className="text-xs text-slate-400">Standard Mark. Requires factory audit, lab testing, and performance guarantee. Steel, Chemicals, Toys.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  </>
);

const EprView = () => {
  const [activeTab, setActiveTab] = useState('Plastic');
  const [importQty, setImportQty] = useState(0);
  
  // Simple calculation logic for 2025 targets
  const plasticObligation = Math.round(importQty * 0.6); // 60% for 2025-26
  const recycledContentObligation = Math.round(importQty * 0.3); // 30% for Rigid (Cat I)

  return (
    <div className="bg-slate-50 min-h-screen">
       <div className="bg-emerald-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')] opacity-10 bg-cover bg-center" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 relative z-10">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
            <div className="max-w-2xl">
              <div className="flex items-center gap-2 mb-2">
                 <span className="px-2 py-1 rounded bg-emerald-800 text-emerald-200 text-xs font-bold uppercase tracking-wider">Extended Producer Responsibility</span>
              </div>
              <h1 className="text-3xl md:text-5xl font-extrabold text-white tracking-tight mb-4">
                EPR Targets 2025-26
              </h1>
              <p className="text-lg text-emerald-100 leading-relaxed">
                New mandatory recycling and recycled content norms effective April 1, 2025. 
                Non-compliance attracts Environmental Compensation (EC) charges.
              </p>
            </div>
            <div className="bg-emerald-800/50 p-4 rounded-xl border border-emerald-700 backdrop-blur-sm">
               <div className="text-emerald-200 text-sm font-medium mb-1">Upcoming Deadline</div>
               <div className="text-2xl font-bold text-white mb-1">Jan 31, 2026</div>
               <div className="text-xs text-emerald-300">Plastic Waste Annual Returns (Extended)</div>
            </div>
          </div>
        </div>
      </div>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        
        {/* Tab Navigation */}
        <div className="flex border-b border-slate-200 mb-8">
          {['Plastic', 'E-Waste', 'Battery'].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-6 py-3 text-sm font-bold flex items-center gap-2 border-b-2 transition-all
                ${activeTab === tab 
                  ? 'border-emerald-600 text-emerald-700' 
                  : 'border-transparent text-slate-500 hover:text-slate-700 hover:border-slate-300'}
              `}
            >
              {tab === 'Plastic' && <Recycle className="w-4 h-4" />}
              {tab === 'E-Waste' && <Zap className="w-4 h-4" />}
              {tab === 'Battery' && <Battery className="w-4 h-4" />}
              {tab} Waste
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content Area */}
          <div className="lg:col-span-2 space-y-6">
            
            {activeTab === 'Plastic' && (
              <>
                 <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
                    <div className="p-6 border-b border-slate-100 bg-slate-50">
                      <h3 className="text-lg font-bold text-slate-900 flex items-center gap-2">
                        <Leaf className="w-5 h-5 text-emerald-600" />
                        Plastic Waste Targets (FY 2025-26)
                      </h3>
                    </div>
                    <div className="p-6 grid gap-6">
                       {/* Target 1: Recycling */}
                       <div>
                         <div className="flex justify-between items-end mb-2">
                           <div>
                             <h4 className="font-semibold text-slate-800">Recycling Obligation</h4>
                             <p className="text-xs text-slate-500">Percentage of total plastic packaging placed in market</p>
                           </div>
                           <span className="text-2xl font-bold text-emerald-600">60%</span>
                         </div>
                         <div className="w-full bg-slate-100 rounded-full h-3">
                           <div className="bg-emerald-500 h-3 rounded-full" style={{ width: '60%' }}></div>
                         </div>
                         <div className="mt-2 text-xs text-slate-400 flex justify-between">
                            <span>FY 24-25: 50%</span>
                            <span className="font-semibold text-emerald-700">Target for FY 25-26</span>
                            <span>FY 27-28: 80%</span>
                         </div>
                       </div>

                       {/* Target 2: Recycled Content */}
                       <div className="bg-amber-50 p-4 rounded-lg border border-amber-100">
                         <div className="flex items-start gap-3">
                           <AlertTriangle className="w-5 h-5 text-amber-600 mt-1" />
                           <div>
                             <h4 className="font-bold text-amber-900">New Mandate: Recycled Plastic Content</h4>
                             <p className="text-sm text-amber-800 mt-1">
                               Effective April 1, 2025, packaging MUST contain registered recycled plastic.
                             </p>
                             <div className="grid grid-cols-3 gap-4 mt-3">
                               <div className="bg-white p-2 rounded border border-amber-200 text-center">
                                 <div className="text-xs text-slate-500 font-medium">Cat I (Rigid)</div>
                                 <div className="text-xl font-bold text-amber-600">30%</div>
                               </div>
                               <div className="bg-white p-2 rounded border border-amber-200 text-center">
                                 <div className="text-xs text-slate-500 font-medium">Cat II (Flexible)</div>
                                 <div className="text-xl font-bold text-amber-600">10%</div>
                               </div>
                               <div className="bg-white p-2 rounded border border-amber-200 text-center">
                                 <div className="text-xs text-slate-500 font-medium">Cat III (Multi)</div>
                                 <div className="text-xl font-bold text-amber-600">10%</div>
                               </div>
                             </div>
                           </div>
                         </div>
                       </div>
                    </div>
                 </div>

                 {/* Categories Table */}
                 <div className="bg-white rounded-xl shadow-sm border border-slate-200">
                   <table className="w-full text-sm text-left">
                     <thead className="bg-slate-50 text-slate-500 font-semibold border-b border-slate-200">
                       <tr>
                         <th className="px-6 py-3">Category</th>
                         <th className="px-6 py-3">Description</th>
                         <th className="px-6 py-3">Recycling Target</th>
                       </tr>
                     </thead>
                     <tbody className="divide-y divide-slate-100">
                       <tr>
                         <td className="px-6 py-4 font-bold text-slate-800">Cat I</td>
                         <td className="px-6 py-4 text-slate-600">Rigid Plastic Packaging</td>
                         <td className="px-6 py-4 font-medium text-emerald-600">60%</td>
                       </tr>
                       <tr>
                         <td className="px-6 py-4 font-bold text-slate-800">Cat II</td>
                         <td className="px-6 py-4 text-slate-600">Flexible Plastic (Single/Multi layer)</td>
                         <td className="px-6 py-4 font-medium text-emerald-600">60%</td>
                       </tr>
                       <tr>
                         <td className="px-6 py-4 font-bold text-slate-800">Cat III</td>
                         <td className="px-6 py-4 text-slate-600">Multilayered (with at least one plastic layer)</td>
                         <td className="px-6 py-4 font-medium text-emerald-600">60%</td>
                       </tr>
                       <tr>
                         <td className="px-6 py-4 font-bold text-slate-800">Cat IV</td>
                         <td className="px-6 py-4 text-slate-600">Compostable Plastics</td>
                         <td className="px-6 py-4 font-medium text-blue-600">100% Processing</td>
                       </tr>
                     </tbody>
                   </table>
                 </div>
              </>
            )}

            {activeTab === 'E-Waste' && (
              <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
                <h3 className="text-lg font-bold text-slate-900 mb-4">E-Waste Management Rules (Schedule III)</h3>
                <div className="space-y-4">
                  <div className="p-4 bg-slate-50 rounded-lg border border-slate-200">
                    <h4 className="font-semibold text-slate-800">Target for 2024-2025 onwards</h4>
                    <div className="flex items-center gap-4 mt-2">
                       <div className="text-3xl font-bold text-blue-600">70%</div>
                       <p className="text-sm text-slate-600">
                         of the quantity of e-waste generated (calculated based on average life of product).
                       </p>
                    </div>
                  </div>
                  <ul className="list-disc pl-5 text-sm text-slate-600 space-y-2">
                    <li>Applicable to IT Equipment, Consumer Electronics, and Solar Photovoltaic Panels.</li>
                    <li>Producers must purchase EPR Certificates from recyclers to meet shortfall.</li>
                    <li>Delayed filings attract penalty of ₹5,000 - ₹30,000.</li>
                  </ul>
                </div>
              </div>
            )}
             
            {activeTab === 'Battery' && (
              <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
                <h3 className="text-lg font-bold text-slate-900 mb-4">Battery Waste Management Rules 2022</h3>
                <div className="grid grid-cols-2 gap-4">
                   <div className="p-4 border border-slate-200 rounded-lg">
                      <h4 className="text-xs font-bold text-slate-500 uppercase">Portable Batteries</h4>
                      <div className="text-2xl font-bold text-purple-600 mt-1">50%</div>
                      <div className="text-xs text-slate-400">Collection Target by 2024-25</div>
                   </div>
                   <div className="p-4 border border-slate-200 rounded-lg">
                      <h4 className="text-xs font-bold text-slate-500 uppercase">EV Batteries</h4>
                      <div className="text-2xl font-bold text-purple-600 mt-1">70%</div>
                      <div className="text-xs text-slate-400">Recovery Target by 2024-25</div>
                   </div>
                </div>
              </div>
            )}

          </div>

          {/* Sidebar Calculator */}
          <div className="lg:col-span-1">
             <div className="bg-white rounded-xl shadow-lg border border-slate-200 p-6 sticky top-24">
                <div className="flex items-center gap-2 mb-4">
                   <Calculator className="w-5 h-5 text-emerald-600" />
                   <h3 className="font-bold text-slate-900">Liability Calculator</h3>
                </div>
                
                <div className="space-y-4">
                   <div>
                     <label className="block text-xs font-semibold text-slate-500 mb-1">Annual Import/Mfg (MT)</label>
                     <input 
                       type="number" 
                       value={importQty}
                       onChange={(e) => setImportQty(Number(e.target.value))}
                       className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:outline-none"
                       placeholder="e.g. 1000"
                     />
                   </div>
                   
                   <div className="bg-slate-50 p-4 rounded-lg border border-slate-200 space-y-3">
                      <div>
                        <div className="text-xs text-slate-500">Recycling Obligation (60%)</div>
                        <div className="text-xl font-bold text-slate-800">{plasticObligation} MT</div>
                      </div>
                      <div className="pt-3 border-t border-slate-200">
                        <div className="text-xs text-slate-500 flex items-center gap-1">
                           Recycled Content (Rigid 30%)
                           <Info className="w-3 h-3 text-slate-400" />
                        </div>
                        <div className="text-xl font-bold text-emerald-600">{recycledContentObligation} MT</div>
                        <div className="text-[10px] text-emerald-600 mt-1 font-medium">
                          Must be sourced from registered recyclers
                        </div>
                      </div>
                   </div>

                   <button className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-3 rounded-lg shadow-md transition-all">
                     Get EPR Assistance
                   </button>
                   <p className="text-xs text-center text-slate-400">
                     *Estimates for FY 2025-26. Contact us for precise assessment.
                   </p>
                </div>
             </div>
          </div>
        </div>
      </main>
    </div>
  );
};

const WpcView = () => {
  const [activeTab, setActiveTab] = useState('ETA');

  return (
    <div className="bg-slate-50 min-h-screen">
      <div className="bg-indigo-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1544197150-b99a580bb7a8?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')] opacity-20 bg-cover bg-center" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-3xl md:text-5xl font-extrabold text-white tracking-tight mb-4">
              WPC Compliance & ETA
            </h1>
            <p className="text-lg text-indigo-100 leading-relaxed mb-6">
              Wireless Planning & Coordination (WPC) approval is mandatory for all wireless devices entering India.
              Check if your product requires Equipment Type Approval (ETA) or falls under license-free bands.
            </p>
            <div className="flex flex-wrap gap-3">
               <div className="bg-indigo-800/80 px-4 py-2 rounded-lg border border-indigo-500 flex items-center gap-2">
                 <Wifi className="w-4 h-4 text-indigo-300" />
                 <span className="text-sm font-medium">Wi-Fi & Bluetooth</span>
               </div>
               <div className="bg-indigo-800/80 px-4 py-2 rounded-lg border border-indigo-500 flex items-center gap-2">
                 <Radio className="w-4 h-4 text-indigo-300" />
                 <span className="text-sm font-medium">RFID</span>
               </div>
               <div className="bg-indigo-800/80 px-4 py-2 rounded-lg border border-indigo-500 flex items-center gap-2">
                 <Signal className="w-4 h-4 text-indigo-300" />
                 <span className="text-sm font-medium">IoT Devices</span>
               </div>
            </div>
          </div>
        </div>
      </div>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        
        {/* Toggle Tabs */}
        <div className="flex justify-center mb-8">
          <div className="bg-white p-1 rounded-full shadow-sm border border-slate-200 inline-flex">
            <button
              onClick={() => setActiveTab('ETA')}
              className={`px-8 py-2 rounded-full text-sm font-bold transition-all ${
                activeTab === 'ETA' 
                  ? 'bg-indigo-600 text-white shadow' 
                  : 'text-slate-600 hover:text-indigo-600'
              }`}
            >
              Mandatory ETA List
            </button>
            <button
              onClick={() => setActiveTab('Exempt')}
              className={`px-8 py-2 rounded-full text-sm font-bold transition-all ${
                activeTab === 'Exempt' 
                  ? 'bg-indigo-600 text-white shadow' 
                  : 'text-slate-600 hover:text-indigo-600'
              }`}
            >
              Exempt / License-Free Bands
            </button>
          </div>
        </div>

        {activeTab === 'ETA' ? (
          <div className="space-y-6">
            <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
              <div className="p-6 border-b border-slate-100 flex justify-between items-center">
                <h3 className="text-lg font-bold text-slate-900">Equipment Type Approval (ETA) Required</h3>
                <span className="text-xs bg-indigo-50 text-indigo-700 px-2 py-1 rounded-full font-semibold border border-indigo-100">
                  Self-Declaration Model Available
                </span>
              </div>
              <div className="grid divide-y divide-slate-100">
                {WPC_ETA_ITEMS.map((item) => (
                   <div key={item.id} className="p-5 flex items-center justify-between hover:bg-slate-50 transition-colors">
                     <div className="flex items-center gap-4">
                        <div className="bg-slate-100 p-2 rounded-lg text-slate-500">
                          {item.name.includes('Router') ? <Router className="w-5 h-5"/> : 
                           item.name.includes('Phone') ? <Zap className="w-5 h-5"/> : <Cpu className="w-5 h-5"/>}
                        </div>
                        <div>
                           <h4 className="font-bold text-slate-800">{item.name}</h4>
                           <p className="text-sm text-slate-500">{item.category} • {item.band}</p>
                        </div>
                     </div>
                     <button className="text-indigo-600 font-medium text-sm border border-indigo-200 px-4 py-2 rounded-lg hover:bg-indigo-50">
                       Check Process
                     </button>
                   </div>
                ))}
              </div>
            </div>
            
            <div className="bg-blue-50 border border-blue-200 rounded-xl p-6">
               <div className="flex items-start gap-4">
                 <Info className="w-6 h-6 text-blue-600 flex-shrink-0" />
                 <div>
                   <h4 className="font-bold text-blue-900">About Saral Sanchar (ETA Self-Declaration)</h4>
                   <p className="text-sm text-blue-800 mt-2">
                     For products operating in license-free bands (like Bluetooth & Wi-Fi), importers can obtain ETA through a simplified self-declaration process on the Saral Sanchar portal. 
                     <br/><br/>
                     <strong>Requirement:</strong> RF Test Report from an ILAC accredited laboratory is mandatory.
                   </p>
                 </div>
               </div>
            </div>
          </div>
        ) : (
          <div className="space-y-6">
             <div className="bg-white rounded-xl shadow-sm border border-slate-200">
                <div className="p-6 border-b border-slate-100">
                   <h3 className="text-lg font-bold text-slate-900">De-Licensed Frequency Bands (License-Free)</h3>
                   <p className="text-sm text-slate-500 mt-1">
                     Devices operating within these bands and power limits do not require a separate spectrum license, but still need ETA.
                   </p>
                </div>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm text-left">
                    <thead className="bg-slate-50 text-slate-500 font-semibold border-b border-slate-200">
                      <tr>
                        <th className="px-6 py-4">Frequency Band</th>
                        <th className="px-6 py-4">Common Applications</th>
                        <th className="px-6 py-4">Max Output Power</th>
                        <th className="px-6 py-4">Status</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100">
                      {WPC_EXEMPT_BANDS.map((band) => (
                        <tr key={band.id} className="hover:bg-slate-50">
                          <td className="px-6 py-4 font-bold text-indigo-900">{band.band}</td>
                          <td className="px-6 py-4 text-slate-600">{band.use}</td>
                          <td className="px-6 py-4 font-mono text-slate-500 bg-slate-50/50">{band.limit}</td>
                          <td className="px-6 py-4">
                            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-emerald-100 text-emerald-800 border border-emerald-200">
                              <CheckCircle2 className="w-3 h-3 mr-1" />
                              {band.status}
                            </span>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
             </div>

             <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
                   <h4 className="font-bold text-slate-800 mb-2">Import License (Exemptions)</h4>
                   <p className="text-sm text-slate-600">
                     A separate WPC Import License is <strong>NOT required</strong> for ETA holders importing finished goods in de-licensed bands. 
                     However, importing stand-alone RF modules or equipment in licensed bands still requires specific permissions.
                   </p>
                </div>
                <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
                   <h4 className="font-bold text-slate-800 mb-2">Penalties for Non-Compliance</h4>
                   <p className="text-sm text-slate-600">
                     Importing wireless equipment without a valid ETA is a violation of the Indian Wireless Telegraphy Act. 
                     Customs may seize goods, and penalties can include confiscation and fines.
                   </p>
                </div>
             </div>
          </div>
        )}
      </main>
    </div>
  );
};

const LmpcView = () => {
  return (
    <div className="bg-slate-50 min-h-screen">
      {/* Hero */}
      <div className="bg-orange-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1578575437130-527eed3abbec?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')] opacity-20 bg-cover bg-center" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-3xl md:text-5xl font-extrabold text-white tracking-tight mb-4">
              Legal Metrology (LMPC) Rules
            </h1>
            <p className="text-lg text-orange-100 leading-relaxed">
              Mandatory labeling requirements for all pre-packaged commodities imported into or manufactured in India.
              Compliance with the Legal Metrology (Packaged Commodities) Rules, 2011 is strictly enforced by Customs.
            </p>
          </div>
        </div>
      </div>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Main Content: Declarations */}
          <div className="lg:col-span-2 space-y-8">
            
            {/* Mandatory Declarations Grid */}
            <section>
              <div className="flex items-center gap-2 mb-4">
                <Tag className="w-6 h-6 text-orange-600" />
                <h2 className="text-xl font-bold text-slate-900">7 Mandatory Declarations</h2>
              </div>
              <div className="grid sm:grid-cols-2 gap-4">
                {[
                  { title: "Name & Address", desc: "Of Manufacturer, Packer, or Importer (with Rule 27 Registration)." },
                  { title: "Generic Name", desc: "Common or generic name of the commodity." },
                  { title: "Net Quantity", desc: "In standard units (kg, g, L, ml, pc) along with unit price." },
                  { title: "Month & Year", desc: "Of Manufacture, Packing, or Import." },
                  { title: "MRP", desc: "Maximum Retail Price (Inclusive of all taxes)." },
                  { title: "Customer Care", desc: "Name, Address, Phone No. & Email for consumer complaints." },
                  { title: "Country of Origin", desc: "Mandatory for imported goods." }
                ].map((item, idx) => (
                  <div key={idx} className="bg-white p-4 rounded-xl border border-slate-200 shadow-sm flex gap-3 items-start hover:border-orange-200 transition-colors">
                    <div className="w-6 h-6 rounded-full bg-orange-100 text-orange-600 flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5">
                      {idx + 1}
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-800 text-sm">{item.title}</h4>
                      <p className="text-xs text-slate-500 mt-1">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Font Size Table */}
            <section className="bg-white rounded-xl border border-slate-200 overflow-hidden">
              <div className="p-5 border-b border-slate-100 bg-slate-50 flex items-center gap-2">
                <Ruler className="w-5 h-5 text-slate-500" />
                <h3 className="font-bold text-slate-800">Minimum Font Height (Labeling)</h3>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full text-sm text-left">
                  <thead className="bg-white text-slate-500 font-semibold border-b border-slate-200">
                    <tr>
                      <th className="px-6 py-3">Area of Principal Display Panel (PDP)</th>
                      <th className="px-6 py-3">Min. Height (Normal)</th>
                      <th className="px-6 py-3">Min. Height (Bold/Capital)</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100">
                    <tr>
                      <td className="px-6 py-3 font-medium text-slate-800">Up to 50 cm²</td>
                      <td className="px-6 py-3">1.0 mm</td>
                      <td className="px-6 py-3">2.0 mm</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-3 font-medium text-slate-800">50 cm² to 200 cm²</td>
                      <td className="px-6 py-3">2.0 mm</td>
                      <td className="px-6 py-3">4.0 mm</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-3 font-medium text-slate-800">200 cm² to 500 cm²</td>
                      <td className="px-6 py-3">2.5 mm</td>
                      <td className="px-6 py-3">6.0 mm</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-3 font-medium text-slate-800">Above 500 cm²</td>
                      <td className="px-6 py-3">4.0 mm</td>
                      <td className="px-6 py-3">8.0 mm</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1 space-y-6">
            
            {/* Registration Box */}
            <div className="bg-white rounded-xl shadow-lg border border-slate-200 p-6 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-20 h-20 bg-orange-100 rounded-bl-full -mr-10 -mt-10 z-0"></div>
              <div className="relative z-10">
                <div className="flex items-center gap-2 mb-3">
                  <FileCheck className="w-5 h-5 text-orange-600" />
                  <h3 className="font-bold text-slate-900">Importer Registration</h3>
                </div>
                <p className="text-sm text-slate-600 mb-4">
                  Under <strong className="text-slate-800">Rule 27</strong>, every importer must register with the Director of Legal Metrology, New Delhi, or the Controller of Legal Metrology in the state where the import premises are located.
                </p>
                <div className="bg-orange-50 p-3 rounded-lg border border-orange-100 text-xs text-orange-800">
                  <strong>Penalty:</strong> Customs may hold shipments if the importer lacks a valid LMPC Certificate.
                </div>
              </div>
            </div>

            {/* Exemptions */}
            <div className="bg-slate-900 text-white rounded-xl p-6 shadow-md">
              <h3 className="font-bold mb-4 flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-green-400" />
                Exemptions
              </h3>
              <ul className="space-y-4 text-sm text-slate-300">
                <li className="flex gap-3">
                  <Building2 className="w-4 h-4 flex-shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-white">Industrial Consumers:</strong> Consumers who buy goods directly from the manufacturer for use in their own industry.
                  </span>
                </li>
                <li className="flex gap-3">
                  <Building2 className="w-4 h-4 flex-shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-white">Institutional Consumers:</strong> Service institutions (hotels, hospitals, railways) buying for direct use/service, not retail.
                  </span>
                </li>
                <li className="flex gap-3">
                  <Package className="w-4 h-4 flex-shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-white">Small Packages:</strong> Packages containing quantity less than 10g or 10ml (Not applicable for Tobacco/Pan Masala).
                  </span>
                </li>
              </ul>
            </div>

          </div>
        </div>
      </main>
    </div>
  );
};

export default function ComplianceApp() {
  const [activeView, setActiveView] = useState('BIS');
  const [searchTerm, setSearchTerm] = useState('');
  const [activeSector, setActiveSector] = useState('All');

  const filteredProducts = useMemo(() => {
    return PRODUCTS.filter(product => {
      const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          product.isNumber.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesSector = activeSector === 'All' || product.sector === activeSector;
      return matchesSearch && matchesSector;
    });
  }, [searchTerm, activeSector]);

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-800">
      <TopBar />
      <Navbar activeView={activeView} setActiveView={setActiveView} />
      
      {activeView === 'BIS' && (
        <BisListView 
           searchTerm={searchTerm}
           setSearchTerm={setSearchTerm}
           activeSector={activeSector}
           setActiveSector={setActiveSector}
           filteredProducts={filteredProducts}
        />
      )}
      
      {activeView === 'EPR' && <EprView />}
      
      {activeView === 'WPC' && <WpcView />}

      {activeView === 'LMPC' && <LmpcView />}

       <Footer />
    </div>
  );
}