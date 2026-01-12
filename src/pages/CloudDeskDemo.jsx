// import React, { useState, useEffect, useRef } from 'react';
// import { 
//   LayoutDashboard, 
//   Wallet, 
//   CreditCard,
//   FileText, 
//   Ship, 
//   Settings, 
//   Bell, 
//   Search, 
//   Plus, 
//   AlertTriangle, 
//   TrendingUp, 
//   CheckCircle, 
//   Clock, 
//   ChevronRight,
//   ShieldCheck,
//   Download,
//   FileBox,
//   Menu,
//   X,
//   Filter,
//   Folder,
//   MoreVertical,
//   Calculator,
//   Briefcase,
//   ArrowUpRight,
//   ArrowDownLeft,
//   MoreHorizontal,
//   Calendar,
//   Layers,
//   Scale,
//   Globe,
//   BookOpen,
//   UploadCloud,
//   FileCheck,
//   ClipboardCheck,
//   List,
//   User,
//   PieChart,
//   AlertOctagon,
//   Landmark,
//   Percent,
//   ArrowLeft,
//   Eye,
//   EyeOff,
//   Share2,
//   File,
//   Check,
//   Building,
//   Copy,
//   Lock,
//   MapPin,
//   MessageSquare,
//   Send,
//   HelpCircle,
//   Paperclip,
//   Receipt,
//   BarChart3,
//   FileSignature,
//   Award,
//   Activity, // Used in Service Catalog
//   Shield,   // Used in Service Catalog
//   FileWarning
// } from 'lucide-react';

// // --- MOCK DATA ---
// const INITIAL_WALLET_BALANCE = 42500;
// const INITIAL_CREDIT_LIMIT = 500000;
// const INITIAL_CREDIT_USED = 125000;

// const CLIENT_PROFILE = {
//   name: 'Acme Exports Pvt Ltd',
//   type: 'Private Limited',
//   constitution: 'Manufacturer Exporter',
//   email: 'compliance@acmeexports.com',
//   phone: '+91 98765 43210',
//   address: 'Plot No. 42, MIDC Industrial Area, Andheri East, Mumbai - 400093',
//   statutory: {
//     iec: { number: '0388921231', status: 'Active', issueDate: '12-Jan-2010' },
//     pan: { number: 'AAZCS1234K', status: 'Verified' },
//     gst: { number: '27AAZCS1234K1Z5', status: 'Active', filings: 'Monthly' },
//     rcmc: { number: 'EPC/ENG/2024/99', council: 'EEPC', validUntil: '31-Mar-2026', status: 'Active' },
//     msme: { number: 'UDYAM-MH-03-001292', status: 'Active' }
//   },
//   credentials: [
//     { id: 1, portal: 'DGFT (Directorate General of Foreign Trade)', url: 'dgft.gov.in', username: 'acme_exports_01', password: 'Password123!', lastLogin: 'Yesterday' },
//     { id: 2, portal: 'ICEGATE (Customs)', url: 'icegate.gov.in', username: 'ice_user_99', password: 'Customs#2025', lastLogin: '2 days ago' },
//     { id: 3, portal: 'GST Portal', url: 'gst.gov.in', username: 'acme_gst_filing', password: 'TaxPay@2024', lastLogin: 'Oct 20, 2025' },
//     { id: 4, portal: 'REX (Registered Exporter System)', url: 'customs.ec.europa.eu', username: 'rex_in_4421', password: 'EuExport$99', lastLogin: 'Never' },
//   ],
//   branches: [
//     { id: 1, type: 'Head Office', location: 'Mumbai, MH', gst: '27AAZCS...' },
//     { id: 2, type: 'Factory', location: 'Pune, MH', gst: '27AAZCS...' },
//     { id: 3, type: 'Warehouse', location: 'Nhava Sheva, MH', gst: '27AAZCS...' },
//   ]
// };

// // Analytics Data
// const SCHEME_ANALYTICS = {
//   epcg: {
//     total_licenses: 5,
//     duty_saved: '₹ 45.00 L',
//     total_obligation: 'USD 3,21,428',
//     fulfilled_value: 'USD 1,50,000',
//     overall_progress: 46,
//     active_licenses: [
//       { id: '0229100042', date: '10-Sep-2024', duty: '₹ 45L', obligation: 'USD 321,428', fulfilled: 'USD 150,000', progress: 46, status: 'Active' },
//       { id: '0229500110', date: '15-Mar-2023', duty: '₹ 12L', obligation: 'USD 85,000', fulfilled: 'USD 8,000', progress: 9, status: 'Risk' } 
//     ]
//   },
//   advance_auth: {
//     total_licenses: 2,
//     import_allowed: '5,000 Kg',
//     import_consumed: '4,200 Kg',
//     export_obligation: '6,500 Kg',
//     export_fulfilled: '3,000 Kg',
//     export_progress: 46,
//     details: [
//         { id: '3399120021', product: 'SS Coils', imp_validity: 'Expired', exp_validity: '15-Jul-2026', status: 'Redemption Pending' }
//     ]
//   },
//   benefits: {
//     rodtep: { available: '₹ 4,20,000', generated: '₹ 1,50,000', pending: '₹ 2,70,000' },
//     dbk: { filed: '₹ 12,50,000', received: '₹ 11,00,000', pending: '₹ 1,50,000' },
//     igst: { total_paid: '₹ 50,00,000', refunded: '₹ 45,00,000', error_count: 2, error_amt: '₹ 5,00,000' }
//   },
//   compliance: {
//     egm_pending_count: 12,
//     egm_pending_sbs: ['SB_992815', 'SB_992816', 'SB_992817'],
//     igst_error_codes: ['SB005 (Invoice Mismatch)', 'SB006 (Gateway EGM)']
//   },
//   export_house: {
//     status: 'One Star Export House',
//     cert_no: 'A/2023/001',
//     valid_until: '31-Mar-2028',
//     current_export_performance: 'USD 4.2 Million',
//     next_tier: 'Two Star Export House',
//     target: 'USD 25 Million',
//     gap: 'USD 20.8 Million',
//     entitlements: [
//       'Authorization and Customs Clearances on self-declaration basis',
//       'Exemption from furnishing Bank Guarantee for Schemes',
//       'Priority fixation of SION Norms',
//       'Exemption from compulsory negotiation of documents through banks'
//     ]
//   }
// };

// // Master Request Database
// const INITIAL_REQUESTS = [
//   { 
//     reqNo: 'REQ-2025-1008', 
//     service: 'Advance Auth Closure', 
//     category: 'Licensing', 
//     assignedTo: 'Rahul S. (Ops)', 
//     status: 'Needs Clarification', 
//     date: 'Oct 28, 2025', 
//     sla: 'Action Required',
//     details: {
//       description: 'Closure of AA No. 03399212. Pending EODC.',
//       amount: '5000 Credits',
//       timeline: [
//         { status: 'Request Initiated', date: 'Oct 28, 09:00 AM', done: true },
//         { status: 'Document Review', date: 'Oct 28, 11:00 AM', done: true },
//         { status: 'On Hold - Clarification', date: 'Oct 28, 12:30 PM', done: true }
//       ],
//       adminNote: 'Please upload the original EODC copy received from DGFT. The current copy is blurry.',
//       documents: ['AA_Original_License.pdf']
//     }
//   },
//   { 
//     reqNo: 'REQ-2025-1001', 
//     service: 'EPCG License', 
//     category: 'Licensing', 
//     assignedTo: 'Rahul S. (Ops)', 
//     status: 'Approval Pending', 
//     date: 'Oct 26, 2025', 
//     sla: 'On Track',
//     details: {
//       description: 'Import of Capital Goods for Textile Unit 2.',
//       amount: '10000 Credits',
//       timeline: [
//         { status: 'Request Initiated', date: 'Oct 26, 10:00 AM', done: true },
//         { status: 'Documents Verified', date: 'Oct 26, 02:30 PM', done: true },
//         { status: 'Draft Application Ready', date: 'Oct 26, 05:45 PM', done: true },
//         { status: 'Client Approval', date: 'Pending', done: false },
//         { status: 'Submission to DGFT', date: '-', done: false }
//       ],
//       documents: ['Proforma_Invoice.pdf', 'Nexus_Certificate.pdf']
//     }
//   },
//   { 
//     reqNo: 'REQ-2025-1002', 
//     service: 'Certificate of Origin', 
//     category: 'Transactional', 
//     assignedTo: 'Auto-Bot', 
//     status: 'Completed', 
//     date: 'Oct 27, 2025', 
//     sla: 'Met',
//     details: {
//       description: 'Preferential CoO for Export to UAE.',
//       amount: '800 Credits',
//       timeline: [
//         { status: 'Request Initiated', date: 'Oct 27, 09:00 AM', done: true },
//         { status: 'Auto-Verification', date: 'Oct 27, 09:05 AM', done: true },
//         { status: 'Certificate Generated', date: 'Oct 27, 09:10 AM', done: true }
//       ],
//       documents: ['Commercial_Invoice_992.pdf', 'Final_CoO_Cert.pdf']
//     }
//   },
//   { reqNo: 'REQ-2025-1003', service: 'Legal Reply (SCN)', category: 'Legal', assignedTo: 'Adv. Priya M.', status: 'Drafting', date: 'Oct 27, 2025', sla: 'Due Tomorrow', details: { description: 'Reply to Customs SCN dated 15 Oct.', amount: '15000 Credits', timeline: [{ status: 'Started', date: 'Oct 27', done: true }, { status: 'Drafting', date: 'In Progress', done: false }] } },
//   { reqNo: 'REQ-2025-1004', service: 'SCOMET Application', category: 'Licensing', assignedTo: 'Vikram Singh', status: 'Submitted', date: 'Oct 20, 2025', sla: 'On Track', details: { description: 'SCOMET for Drone Components export.', amount: '35000 Credits', timeline: [{ status: 'Submitted', date: 'Oct 20', done: true }] } },
//   { reqNo: 'REQ-2025-1005', service: 'AD Code Reg', category: 'Transactional', assignedTo: 'Rahul S. (Ops)', status: 'Completed', date: 'Oct 22, 2025', sla: 'Met', details: { description: 'AD Code Reg at Nhava Sheva.', amount: '2500 Credits', timeline: [{ status: 'Done', date: 'Oct 22', done: true }] } },
// ];

// const INITIAL_QUOTES = [
//   {
//     id: 'Q-2025-001', service: 'AEO T2 Cert', date: 'Oct 28, 2025', amount: 50000, status: 'Pending Approval', validUntil: 'Nov 05, 2025', description: 'Complete AEO T2 certification including site audit and SOP preparation.'
//   }
// ];

// const INITIAL_INVOICES = [
//   { id: 'INV-1001', reqNo: 'REQ-2025-1002', service: 'Certificate of Origin', date: 'Oct 27, 2025', amount: 800, status: 'Paid', mode: 'Wallet', dueDate: '-' },
//   { id: 'INV-1002', reqNo: 'REQ-2025-1005', service: 'AD Code Reg', date: 'Oct 22, 2025', amount: 2500, status: 'Paid', mode: 'Credit Line', dueDate: '-' },
//   { id: 'INV-1003', reqNo: 'REQ-2025-1006', service: 'RoDTEP Audit', date: 'Oct 10, 2025', amount: 5000, status: 'Unpaid', mode: '-', dueDate: 'Nov 10, 2025' },
//   { id: 'INV-1004', reqNo: 'REQ-2025-1003', service: 'Legal Reply (SCN)', date: 'Oct 28, 2025', amount: 15000, status: 'Unpaid', mode: '-', dueDate: 'Oct 30, 2025' },
// ];

// const AUDIT_DATA = {
//   score: 72,
//   riskLevel: 'Medium',
//   financialRisk: 1250000,
//   lastAuditDate: 'Oct 25, 2025',
//   riskCategories: [
//     { name: 'DGFT Licensing', score: 90, status: 'Good' },
//     { name: 'Customs / e-BRC', score: 45, status: 'Critical' },
//     { name: 'GST / LUT', score: 95, status: 'Excellent' }
//   ],
//   findings: [
//     { id: 1, severity: 'High', area: 'Export Obligation', issue: '3 EPCG Licenses Expired without EODC', impact: '₹ 8.5 Lakhs Penalty', status: 'Open' },
//     { id: 2, severity: 'High', area: 'Banking (e-BRC)', issue: '12 Shipping Bills > 9 months pending', impact: 'Caution Listing Risk', status: 'Open' },
//     { id: 3, severity: 'Medium', area: 'Incentives', issue: 'RoDTEP not claimed for HS 8504', impact: '₹ 2.1 Lakhs Loss', status: 'In Progress' },
//     { id: 4, severity: 'Low', area: 'Documentation', issue: 'Incorrect RCMC Validity in system', impact: 'Process Delay', status: 'Fixed' },
//   ]
// };

// const TRADE_SUMMARY = {
//   exports: { count: 1240, value: '₹ 145.2 Cr', trend: '+12%', lastUpdated: 'Oct 27, 2025' },
//   imports: { count: 315, value: '₹ 58.5 Cr', dutyPaid: '₹ 8.2 Cr', lastUpdated: 'Oct 27, 2025' },
//   incentives: { dutySaved: '₹ 12.8 Cr', claimed: '₹ 1.85 Cr', pending: '₹ 4.2 L' }
// };

// const ALERTS = [
//   { id: 1, type: 'critical', message: 'EPCG License #EXM-902 Expiring', subtext: 'Due in 15 Days. Submit Install Cert immediately.', action: 'Fix Now' },
//   { id: 2, type: 'critical', message: '12 Shipping Bills Pending e-BRC', subtext: 'Bank realization overdue > 9 months.', action: 'View List' },
//   { id: 3, type: 'warning', message: 'New DGFT Notification No. 52/2024', subtext: 'Impacts export of "Onions" & "Non-Basmati Rice".', action: 'Read Brief' },
// ];

// const SERVICE_CATALOG = [
//   { id: 'coo', title: 'Certificate of Origin', icon: FileText, cost: 800, sla: '4 Hours', category: 'Transactional', type: 'direct', desc: 'Issued digitally based on invoice data.' },
//   { id: 'iec', title: 'IEC Update', icon: Settings, cost: 1500, sla: '24 Hours', category: 'Transactional', type: 'direct', desc: 'Modification of director or address details.' },
//   { id: 'rcmc', title: 'RCMC Reg/Renewal', icon: FileSignature, cost: 2000, sla: '3 Days', category: 'Transactional', type: 'direct', desc: 'Renewal or Amendment of RCMC with Councils.' },
//   { id: 'lut', title: 'LUT Bond Filing', icon: FileCheck, cost: 1000, sla: '24 Hours', category: 'Transactional', type: 'direct', desc: 'Letter of Undertaking for Export without IGST.' },
//   { id: 'adcode', title: 'AD Code Registration', icon: Ship, cost: 2500, sla: '48 Hours', category: 'Transactional', type: 'direct', desc: 'Bank AD Code registration at customs port.' },
//   { id: 'epcg', title: 'EPCG License', icon: ShieldCheck, cost: 10000, sla: '5-7 Days', category: 'Licensing', type: 'direct', desc: 'Duty-free import of capital goods.' },
//   { id: 'adv_auth', title: 'Advance Auth', icon: FileBox, cost: 12000, sla: '7 Days', category: 'Licensing', type: 'direct', desc: 'Duty-free import of raw materials.' },
//   { id: 'lic_close', title: 'License Closure', icon: CheckCircle, cost: 5000, sla: '10-15 Days', category: 'Licensing', type: 'direct', desc: 'Redemption of Advance Auth or EPCG License (EODC).' },
//   { id: 'star_house', title: 'Export House Cert', icon: Award, cost: 8000, sla: '15 Days', category: 'Licensing', type: 'direct', desc: 'Star Export House Status Certification.' },
//   { id: 'scomet', title: 'SCOMET License', icon: Globe, cost: 'Quote', sla: '30-45 Days', category: 'Licensing', type: 'quote', desc: 'Authorization for Dual-Use items. Requires approval.' },
//   { id: 'legal_scn', title: 'Legal Reply (SCN)', icon: Scale, cost: 'Quote', sla: '3 Days', category: 'Legal', type: 'quote', desc: 'Drafting reply to Show Cause Notices based on complexity.' },
//   { id: 'risk_audit', title: 'Compliance Health Audit', icon: Activity, cost: 2500, sla: '24 Hours', category: 'Audit', type: 'direct', desc: 'Full risk assessment of data and finding gaps.' },
//   { id: 'rodtep_gen', title: 'RoDTEP Scrip Gen', icon: Receipt, cost: 1000, sla: 'Instant', category: 'Transactional', type: 'direct', desc: 'Generate electronic scrips for claiming benefits.' },
//   { id: 'aeo_cert', title: 'AEO T2 Certification', icon: Shield, cost: 'Quote', sla: '3-4 Months', category: 'Licensing', type: 'quote', desc: 'Authorized Economic Operator Status Certification.' },
// ];

// const KANBAN_GROUPS = {
//   'Licensing': [
//     { id: 'REQ-2025-1001', title: 'EPCG License - Machinery', stage: 'Approval Pending', progress: 60, assignee: 'Rahul S.' },
//     { id: 'REQ-2025-1008', title: 'AA Closure', stage: 'Needs Clarification', progress: 40, assignee: 'Rahul S.' },
//     { id: 'REQ-2025-1004', title: 'SCOMET - Drone Parts', stage: 'Submitted', progress: 80, assignee: 'Vikram S.' },
//   ],
//   'Transactional': [
//     { id: 'REQ-2025-1002', title: 'CoO - Batch A', stage: 'Completed', progress: 100, assignee: 'Auto-Bot' },
//   ],
//   'Legal': [
//     { id: 'REQ-2025-1003', title: 'SCN Reply - Customs', stage: 'Drafting', progress: 30, assignee: 'Priya M.' },
//   ]
// };

// const VAULT_FOLDERS = [
//   { id: 1, name: 'Shipping Bills (2024-25)', count: 842, size: '245 MB', type: 'folder' },
//   { id: 2, name: 'Bill of Entries (Imports)', count: 315, size: '180 MB', type: 'folder' },
//   { id: 3, name: 'Active Licenses (EPCG/AA)', count: 12, size: '4.5 MB', type: 'folder' },
//   { id: 4, name: 'Bank e-BRCs / FIRC', count: 650, size: '42 MB', type: 'folder' },
//   { id: 5, name: 'Legal Notices & Replies', count: 8, size: '12 MB', type: 'folder', color: 'red' },
//   { id: 6, name: 'Duty Credit Scrips', count: 15, size: '2 MB', type: 'folder' },
// ];

// const VAULT_FILES = {
//   1: [ 
//     { 
//       id: 'SB-1001', name: 'SB_992812.pdf', date: 'Oct 25, 2025', size: '1.2 MB', status: 'Verified', type: 'pdf',
//       details: {
//         sb_no: '992812', sb_date: '25-Oct-2025',
//         fob: 'USD 45,200', port: 'Nhava Sheva', invoice: 'INV-2025-001',
//         dbk: '₹ 12,500', igst: '₹ 45,000 (Paid)', rodtep: '₹ 4,200',
//         license: 'EPCG: 02291', ebrc: 'Issued'
//       }
//     },
//     { 
//       id: 'SB-1002', name: 'SB_992813.pdf', date: 'Oct 24, 2025', size: '1.1 MB', status: 'Pending e-BRC', type: 'pdf',
//       details: {
//         sb_no: '992813', sb_date: '24-Oct-2025',
//         fob: 'USD 12,000', port: 'Mundra', invoice: 'INV-2025-002',
//         dbk: '₹ 3,100', igst: 'LUT (Zero Rated)', rodtep: '₹ 950',
//         license: 'Adv Auth: AA-992', ebrc: 'Pending'
//       }
//     },
//   ],
//   2: [
//     {
//       id: 'BE-2001', name: 'BE_8821.pdf', date: 'Oct 20, 2025', size: '2.0 MB', status: 'Cleared', type: 'pdf',
//       details: {
//         boe_no: '882199', boe_date: '20-Oct-2025',
//         fob: 'USD 28,500', port: 'Mumbai Air', invoice: 'SUP-US-99',
//         dbk: '-', igst: '₹ 28,500', rodtep: '-',
//         duty_paid: '₹ 4,20,000', license: 'EPCG Debited', ebrc: '-'
//       }
//     },
//   ],
//   3: [ 
//     { 
//       id: 'LIC-001', name: 'EPCG_02291.pdf', date: 'Sep 10, 2024', size: '2.5 MB', status: 'Active', type: 'pdf',
//       details: {
//         lic_no: '0229100042', lic_date: '10-Sep-2024',
//         type: 'EPCG', duty_saved: '₹ 45,00,000',
//         obligation: 'USD 3,21,428', validity: '10-Sep-2030', status: 'Active - 1st Block'
//       }
//     },
//   ],
// };

// const TRANSACTIONS = [
//   { id: 'TX-1002', date: 'Oct 27, 2025', desc: 'Legal Consultation (SCN Reply)', type: 'Debit', amount: 15000, status: 'Success', source: 'credit_line' },
//   { id: 'TX-1001', date: 'Oct 27, 2025', desc: 'HS Code Classification (1 Item)', type: 'Debit', amount: 500, status: 'Success', source: 'wallet' },
//   { id: 'TX-992', date: 'Oct 26, 2025', desc: 'EPCG License Application Fee', type: 'Debit', amount: 10000, status: 'Success', source: 'wallet' },
// ];

// // --- Form & Helper ---
// const FORM_CONFIGS = {
//   'coo': { 
//     fields: [
//       { id: 'inv_no', label: 'Commercial Invoice Number', type: 'text', placeholder: 'e.g., INV-2025/001' }, 
//       { id: 'country', label: 'Destination Country', type: 'select', options: ['USA', 'UAE', 'UK', 'Germany', 'Australia'] }
//     ],
//     documents: [
//       { id: 'inv', label: 'Commercial Invoice Copy', type: 'file', required: true },
//       { id: 'pklist', label: 'Packing List', type: 'file', required: true },
//       { id: 'bl', label: 'Bill of Lading / Airway Bill', type: 'file', required: false }
//     ]
//   },
//   'iec': {
//     fields: [
//       { id: 'iec_no', label: 'IEC Number', type: 'text', placeholder: 'Enter IEC Number' },
//       { id: 'details', label: 'Modification Details', type: 'textarea', placeholder: 'Describe address or director changes...' }
//     ],
//     documents: [
//       { id: 'pan', label: 'Company PAN Card', type: 'file', required: true },
//       { id: 'inc_cert', label: 'Certificate of Incorporation', type: 'file', required: true },
//       { id: 'address_proof', label: 'Address Proof', type: 'file', required: true }
//     ]
//   },
//   'rcmc': {
//     fields: [
//       { id: 'council', label: 'Export Council', type: 'select', options: ['EEPC', 'CHEMEXCIL', 'APEDA', 'FIEO'] },
//       { id: 'rcmc_no', label: 'Existing RCMC No (if renewal)', type: 'text' }
//     ],
//     documents: [
//       { id: 'iec_copy', label: 'IEC Copy', type: 'file', required: true },
//       { id: 'turnover_cert', label: 'CA Certified Turnover', type: 'file', required: true }
//     ]
//   },
//   'lut': {
//     fields: [
//       { id: 'gstin', label: 'GSTIN', type: 'text', placeholder: 'Enter GSTIN' },
//       { id: 'fy', label: 'Financial Year', type: 'select', options: ['2024-25', '2025-26'] }
//     ],
//     documents: [
//       { id: 'witness_1', label: 'Witness 1 ID Proof', type: 'file', required: true },
//       { id: 'witness_2', label: 'Witness 2 ID Proof', type: 'file', required: true }
//     ]
//   },
//   'adcode': {
//     fields: [
//       { id: 'bank_name', label: 'Bank Name', type: 'text', placeholder: 'e.g., HDFC Bank' },
//       { id: 'ad_code', label: 'AD Code Number', type: 'text', placeholder: '14 Digit AD Code' },
//       { id: 'port', label: 'Port Name', type: 'text', placeholder: 'e.g., INNSA1' }
//     ],
//     documents: [
//       { id: 'bank_letter', label: 'Bank Authorization Letter', type: 'file', required: true },
//       { id: 'icegate_reg', label: 'ICEGATE Registration Copy', type: 'file', required: false }
//     ]
//   },
//   'epcg': {
//     fields: [
//       { id: 'sector', label: 'Industrial Sector', type: 'select', options: ['Textiles', 'Engineering', 'Pharmaceuticals', 'Chemicals'] },
//       { id: 'cif', label: 'CIF Value (USD)', type: 'number', placeholder: '0.00' }
//     ],
//     documents: [
//       { id: 'proforma', label: 'Proforma Invoice', type: 'file', required: true },
//       { id: 'nexus', label: 'Nexus Certificate (Chartered Engineer)', type: 'file', required: true },
//       { id: 'ssi', label: 'MSME / IEM Registration', type: 'file', required: true },
//       { id: 'catalogue', label: 'Machine Catalogue / Tech Specs', type: 'file', required: false }
//     ]
//   },
//   'adv_auth': {
//     fields: [
//       { id: 'product', label: 'Export Product', type: 'text', placeholder: 'e.g., Stainless Steel Coils' }
//     ],
//     documents: [
//       { id: 'sions', label: 'SION Norms Declaration', type: 'file', required: true },
//       { id: 'export_order', label: 'Export Order / Contract', type: 'file', required: true }
//     ]
//   },
//   'lic_close': {
//     fields: [
//       { id: 'lic_type', label: 'License Type', type: 'select', options: ['Advance Authorization', 'EPCG'] },
//       { id: 'lic_no', label: 'License Number', type: 'text', placeholder: 'Enter License No.' }
//     ],
//     documents: [
//       { id: 'eodc_app', label: 'EODC Application Form', type: 'file', required: true },
//       { id: 'shipping_bills', label: 'Export Shipping Bills', type: 'file', required: true },
//       { id: 'brc', label: 'e-BRC Copies', type: 'file', required: true }
//     ]
//   },
//   'star_house': {
//     fields: [
//        { id: 'current_status', label: 'Current Status', type: 'select', options: ['None', 'One Star', 'Two Star'] },
//        { id: 'fob_current', label: 'Current FY FOB (USD)', type: 'text' },
//        { id: 'fob_prev1', label: 'Previous FY 1 FOB', type: 'text' },
//        { id: 'fob_prev2', label: 'Previous FY 2 FOB', type: 'text' },
//     ],
//     documents: [
//        { id: 'ca_cert_export', label: 'CA Cert (Export Performance)', type: 'file', required: true },
//        { id: 'self_decl', label: 'Self Declaration', type: 'file', required: true }
//     ]
//   },
//   'rodtep_gen': {
//     fields: [
//       { id: 'period', label: 'Period', type: 'text', placeholder: 'e.g. Apr 2024 - Jun 2024' }
//     ],
//     documents: [
//        { id: 'sb_list', label: 'List of Shipping Bills', type: 'file', required: true }
//     ]
//   },
//   'scomet': {
//     fields: [
//       { id: 'eccn', label: 'ECCN Category', type: 'text', placeholder: 'e.g., 3A001' },
//       { id: 'end_user', label: 'End User Details', type: 'textarea', placeholder: 'Name and Address of ultimate consignee' }
//     ],
//     documents: [
//       { id: 'euc', label: 'End User Certificate (EUC)', type: 'file', required: true },
//       { id: 'tech_spec', label: 'Technical Specifications', type: 'file', required: true },
//       { id: 'po', label: 'Purchase Order', type: 'file', required: true }
//     ]
//   },
//   'legal_scn': {
//     fields: [
//       { id: 'scn_no', label: 'Show Cause Notice No.', type: 'text', placeholder: 'SCN/2025/...' },
//       { id: 'date', label: 'Date of Receipt', type: 'date' }
//     ],
//     documents: [
//       { id: 'scn_copy', label: 'Copy of Show Cause Notice', type: 'file', required: true },
//       { id: 'prev_reply', label: 'Previous Correspondence', type: 'file', required: false }
//     ]
//   },
//   'risk_audit': {
//     fields: [
//       { id: 'period', label: 'Audit Period', type: 'select', options: ['FY 2024-25', 'FY 2023-24', 'Last 3 Years'] }
//     ],
//     documents: [
//       { id: 'auth_letter', label: 'Authorization Letter', type: 'file', required: true }
//     ]
//   },
//   'aeo_cert': {
//     fields: [
//       { id: 'tier', label: 'AEO Tier', type: 'select', options: ['T1', 'T2', 'T3', 'LO'] },
//       { id: 'turnover', label: 'Annual Turnover', type: 'text', placeholder: 'INR Crores' }
//     ],
//     documents: [
//       { id: 'sop_manual', label: 'SOP Manual', type: 'file', required: true },
//       { id: 'site_plan', label: 'Site Plan / Layout', type: 'file', required: true },
//       { id: 'balance_sheet', label: 'Audited Balance Sheet', type: 'file', required: true }
//     ]
//   },
//   'default': { 
//     fields: [
//       { id: 'notes', label: 'Request Details', type: 'textarea', placeholder: 'Please describe your requirement...' }
//     ],
//     documents: [
//       { id: 'general_docs', label: 'Supporting Documents', type: 'file', required: true }
//     ]
//   }
// };

// function ActivityIcon(props) { return <TrendingUp {...props} />; }

// // --- Components ---
// const SidebarItem = ({ icon: Icon, label, active, onClick, collapsed }) => (
//   <button 
//     onClick={onClick}
//     className={`w-full flex items-center gap-3 px-4 py-3 transition-colors ${
//       active 
//         ? 'bg-blue-50 text-blue-700 border-r-4 border-blue-600' 
//         : 'text-slate-600 hover:bg-slate-50'
//     }`}
//   >
//     <Icon size={20} />
//     {!collapsed && <span className="font-medium text-sm">{label}</span>}
//   </button>
// );

// const StatusBadge = ({ status }) => {
//   const styles = {
//     'Completed': 'bg-green-100 text-green-700 border-green-200',
//     'Paid': 'bg-green-100 text-green-700 border-green-200',
//     'Approval Pending': 'bg-amber-100 text-amber-700 border-amber-200',
//     'Quote Pending': 'bg-amber-100 text-amber-700 border-amber-200',
//     'Needs Clarification': 'bg-orange-100 text-orange-700 border-orange-200',
//     'Submitted': 'bg-purple-100 text-purple-700 border-purple-200',
//     'Drafting': 'bg-blue-50 text-blue-600 border-blue-200',
//     'In Process': 'bg-blue-100 text-blue-700 border-blue-200',
//     'Open': 'bg-red-100 text-red-700 border-red-200',
//     'Unpaid': 'bg-red-50 text-red-700 border-red-200',
//     'Fixed': 'bg-green-100 text-green-700 border-green-200',
//     'Active': 'bg-green-100 text-green-700 border-green-200',
//     'Issued': 'bg-green-100 text-green-700 border-green-200',
//     'Pending': 'bg-amber-100 text-amber-700 border-amber-200',
//     'Redeemed': 'bg-blue-100 text-blue-700 border-blue-200',
//     'Risk': 'bg-red-50 text-red-700 border-red-200',
//     'Pending Approval': 'bg-blue-50 text-blue-600 border-blue-200',
//     'Pending Quote': 'bg-amber-100 text-amber-800 border-amber-200',
//   };
//   return (
//     <span className={`px-2.5 py-1 rounded-full text-xs font-semibold border ${styles[status] || styles['Drafting']}`}>
//       {status}
//     </span>
//   );
// };

// const Modal = ({ isOpen, onClose, title, children }) => {
//   if (!isOpen) return null;
//   return (
//     <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4 backdrop-blur-sm">
//       <div className="bg-white rounded-xl shadow-2xl max-w-lg w-full max-h-[90vh] overflow-y-auto animate-in fade-in zoom-in duration-200">
//         <div className="flex justify-between items-center p-5 border-b border-slate-100 sticky top-0 bg-white z-10">
//           <h3 className="font-bold text-lg text-slate-800">{title}</h3>
//           <button onClick={onClose} className="text-slate-400 hover:text-slate-600">
//             <X size={20} />
//           </button>
//         </div>
//         <div className="p-5">
//           {children}
//         </div>
//       </div>
//     </div>
//   );
// };

// const ChatBox = ({ isOpen, onClose, contextRequest }) => {
//   const [messages, setMessages] = useState([]);
//   const [inputValue, setInputValue] = useState('');
//   const messagesEndRef = useRef(null);

//   useEffect(() => {
//     if (contextRequest) {
//       let history = [];
//       if (contextRequest === 'REQ-2025-1008') {
//         history = [
//           { id: 1, text: "Automated: Request created.", sender: 'system', time: 'Oct 28, 09:00 AM' },
//           { id: 2, text: "Hello, we noticed the EODC copy is blurry. Can you please re-upload?", sender: 'bot', time: 'Oct 28, 12:30 PM' }
//         ];
//       } else if (contextRequest === 'REQ-2025-1001') {
//          history = [
//           { id: 1, text: "Automated: Request created for EPCG.", sender: 'system', time: 'Oct 26, 10:00 AM' },
//           { id: 2, text: "Draft application is ready for your review.", sender: 'bot', time: 'Oct 26, 05:45 PM' }
//         ];
//       } else {
//         history = [
//           { id: 1, text: `Ticket ${contextRequest} initialized.`, sender: 'system', time: 'Now' },
//           { id: 2, text: "How can we assist you with this specific request?", sender: 'bot', time: 'Now' }
//         ];
//       }
//       setMessages(history);
//     }
//   }, [contextRequest]);

//   useEffect(() => {
//     messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
//   }, [messages, isOpen]);

//   const handleSend = () => {
//     if (!inputValue.trim()) return;
//     const userMsg = { id: Date.now(), text: inputValue, sender: 'user', time: 'Now' };
//     setMessages(prev => [...prev, userMsg]);
//     setInputValue('');
//     setTimeout(() => {
//       setMessages(prev => [...prev, { id: Date.now(), text: "Received. We've added this note to the record.", sender: 'bot', time: 'Now' }]);
//     }, 1000);
//   };

//   if (!isOpen) return null;
//   return (
//     <div className="fixed bottom-0 right-0 h-full w-full md:w-[400px] bg-white shadow-2xl border-l border-slate-200 flex flex-col z-50 animate-in slide-in-from-right duration-300">
//       <div className="p-4 border-b border-slate-100 bg-slate-50 flex justify-between items-center shadow-sm">
//         <div>
//           <h3 className="font-bold text-slate-800">Request Chat</h3>
//           <p className="text-xs text-blue-600 font-mono font-medium">{contextRequest}</p>
//         </div>
//         <button onClick={onClose} className="p-2 hover:bg-slate-200 rounded-full"><X size={18} className="text-slate-500" /></button>
//       </div>
      
//       <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-slate-50/50">
//         <div className="flex justify-center">
//             <span className="text-[10px] text-slate-400 bg-slate-100 px-2 py-1 rounded-full">This chat is recorded for audit purposes</span>
//         </div>
//         {messages.map(msg => (
//           <div key={msg.id} className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
//             <div className={`max-w-[85%] p-3 rounded-xl text-sm shadow-sm ${
//               msg.sender === 'user' ? 'bg-blue-600 text-white rounded-br-none' : 
//               msg.sender === 'system' ? 'bg-amber-50 border border-amber-100 text-amber-800 text-center w-full text-xs font-semibold py-1' :
//               'bg-white border border-slate-200 text-slate-700 rounded-bl-none'
//             }`}>
//               {msg.text}
//               {msg.sender !== 'system' && <div className={`text-[10px] mt-1 text-right ${msg.sender === 'user' ? 'text-blue-100' : 'text-slate-400'}`}>{msg.time}</div>}
//             </div>
//           </div>
//         ))}
//         <div ref={messagesEndRef} />
//       </div>
//       <div className="p-4 border-t border-slate-100 bg-white">
//         <div className="flex items-center gap-2">
//           <button className="p-2 text-slate-400 hover:text-slate-600 hover:bg-slate-50 rounded-full transition-colors">
//             <Paperclip size={20} />
//           </button>
//           <input 
//             type="text" 
//             value={inputValue}
//             onChange={(e) => setInputValue(e.target.value)}
//             onKeyPress={(e) => e.key === 'Enter' && handleSend()}
//             placeholder="Type message..."
//             className="flex-1 px-4 py-2 border border-slate-200 rounded-full text-sm focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
//           />
//           <button onClick={handleSend} className="p-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 shadow-sm transition-colors">
//             <Send size={18} />
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default function EximinqDashboard() {
//   const [walletBalance, setWalletBalance] = useState(INITIAL_WALLET_BALANCE);
//   const [creditLimit, setCreditLimit] = useState(INITIAL_CREDIT_LIMIT);
//   const [creditUsed, setCreditUsed] = useState(INITIAL_CREDIT_USED);
//   const [paymentMode, setPaymentMode] = useState('wallet'); 

//   const [invoicePaymentMode, setInvoicePaymentMode] = useState('wallet'); 

//   // Dashboard Expansion States
//   const [dashboardDetail, setDashboardDetail] = useState(null); 
//   const [schemeDetail, setSchemeDetail] = useState(null); 

//   // Data States
//   const [invoices, setInvoices] = useState(INITIAL_INVOICES);
//   const [selectedInvoice, setSelectedInvoice] = useState(null);
//   const [requests, setRequests] = useState(INITIAL_REQUESTS);
//   const [quotes, setQuotes] = useState(INITIAL_QUOTES);

//   const [activeTab, setActiveTab] = useState('dashboard');
//   const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);
//   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
//   const [currentVaultFolder, setCurrentVaultFolder] = useState(null);
//   const [vaultSearchQuery, setVaultSearchQuery] = useState('');

//   // Track Requests State
//   const [selectedRequest, setSelectedRequest] = useState(null);
//   const [statusFilter, setStatusFilter] = useState('All');
//   const [isFilterDropdownOpen, setIsFilterDropdownOpen] = useState(false);

//   // Profile Credentials State
//   const [visiblePasswords, setVisiblePasswords] = useState({});

//   // Chat State
//   const [isChatOpen, setIsChatOpen] = useState(false);
//   const [chatContext, setChatContext] = useState(null);

//   // Modals state
//   const [showTopUpModal, setShowTopUpModal] = useState(false);
//   const [selectedService, setSelectedService] = useState(null);
//   const [notification, setNotification] = useState(null);
  
//   // File Upload State for Modal
//   const [uploadedDocs, setUploadedDocs] = useState({});

//   // Service Store Filter
//   const [serviceFilter, setServiceFilter] = useState('All');

//   const togglePasswordVisibility = (id) => {
//     setVisiblePasswords(prev => ({ ...prev, [id]: !prev[id] }));
//   };

//   const handleServiceRequest = (service) => {
//     setSelectedService(service);
//     setUploadedDocs({}); // Reset uploads
//   };

//   const handleFileUpload = (docId) => {
//     // Simulate upload delay
//     setTimeout(() => {
//         setUploadedDocs(prev => ({ ...prev, [docId]: true }));
//         showSuccess("Document Uploaded Successfully");
//     }, 800);
//   };

//   const openChatWithContext = (reqId) => {
//     setChatContext(reqId);
//     setIsChatOpen(true);
//   };

//   const handlePayInvoice = (invoice) => {
//     setSelectedInvoice(invoice);
//     setInvoicePaymentMode('wallet'); 
//   };

//   const confirmInvoicePayment = () => {
//     if (!selectedInvoice) return;
//     const amount = selectedInvoice.amount;
    
//     if (invoicePaymentMode === 'wallet') {
//       if (walletBalance >= amount) {
//         setWalletBalance(prev => prev - amount);
//         setInvoices(prev => prev.map(inv => inv.id === selectedInvoice.id ? { ...inv, status: 'Paid', mode: 'Wallet' } : inv));
//         showSuccess(`Invoice ${selectedInvoice.id} Paid via Wallet.`);
//       } else {
//         showError('Insufficient Wallet Balance.');
//         return;
//       }
//     } else {
//        showSuccess(`Redirecting to Bank Gateway... Payment Successful for ₹ ${amount.toLocaleString()}`);
//        setInvoices(prev => prev.map(inv => inv.id === selectedInvoice.id ? { ...inv, status: 'Paid', mode: 'Net Banking' } : inv));
//     }
//     setSelectedInvoice(null);
//   };

//   const confirmRequest = () => {
//     if (selectedService.type === 'quote') {
//         const newQuote = {
//             id: `Q-2025-${Math.floor(Math.random() * 1000)}`,
//             service: selectedService.title,
//             date: new Date().toLocaleDateString('en-US', { day: 'numeric', month: 'short', year: 'numeric' }),
//             amount: 'Calculating...',
//             status: 'Pending Quote',
//             validUntil: '-',
//             description: selectedService.desc
//         };
//         setQuotes(prev => [newQuote, ...prev]);
//         showSuccess("Quote Request Submitted. Check Pending Quotes.");
//     } else {
//         const cost = selectedService.cost;
//         if (paymentMode === 'wallet') {
//             if (walletBalance >= cost) {
//                 setWalletBalance(prev => prev - cost);
//                 showSuccess(`Processed via Wallet. Deducted ${cost} Credits.`);
//             } else {
//                 showError('Insufficient Wallet Balance.');
//                 return;
//             }
//         } else {
//             if ((creditLimit - creditUsed) >= cost) {
//                 setCreditUsed(prev => prev + cost);
//                 showSuccess(`Processed via Credit Line. Added ${cost} to Used Limit.`);
//             } else {
//                 showError('Credit Limit Exceeded.');
//                 return;
//             }
//         }
//         // Add to Active Requests (Simulation)
//         const newReq = {
//             reqNo: `REQ-2025-${Math.floor(Math.random() * 1000)}`,
//             service: selectedService.title,
//             category: selectedService.category,
//             assignedTo: 'System',
//             status: 'Submitted',
//             date: 'Just Now',
//             sla: selectedService.sla,
//             details: { description: 'New Request', amount: `${cost} Credits` }
//         };
//         setRequests(prev => [newReq, ...prev]);
//     }
//     setSelectedService(null);
//   };

//   const approveQuote = (quote) => {
//       // Simulate moving quote to invoice/active request
//       setQuotes(prev => prev.filter(q => q.id !== quote.id));
//       setRequests(prev => [{
//           reqNo: `REQ-${quote.id.split('-')[2]}`,
//           service: quote.service,
//           category: 'Licensing', // Assumed from context
//           assignedTo: 'Dedicated Agent',
//           status: 'In Process',
//           date: 'Just Now',
//           sla: 'Started',
//           details: { description: quote.description, amount: quote.amount }
//       }, ...prev]);
      
//       // Assume payment via Invoice generation
//       setInvoices(prev => [{
//           id: `INV-${Math.floor(Math.random() * 1000)}`,
//           reqNo: `REQ-${quote.id.split('-')[2]}`,
//           service: quote.service,
//           date: 'Today',
//           amount: typeof quote.amount === 'number' ? quote.amount : 0,
//           status: 'Unpaid',
//           mode: '-',
//           dueDate: 'Next Month'
//       }, ...prev]);

//       showSuccess(`Quote Approved. Invoice generated for request.`);
//   };

//   const showSuccess = (msg) => {
//     setNotification({ type: 'success', title: 'Success', message: msg });
//     setTimeout(() => setNotification(null), 4000);
//   };

//   const showError = (msg) => {
//     setNotification({ type: 'error', title: 'Failed', message: msg });
//     setTimeout(() => setNotification(null), 4000);
//   };

//   const copyToClipboard = (text) => {
//     navigator.clipboard.writeText(text);
//     setNotification({ type: 'success', title: 'Copied', message: 'Credential copied to clipboard.' });
//     setTimeout(() => setNotification(null), 2000);
//   };

//   // --- Dynamic Form Renderer ---
//   const renderServiceForm = (service) => {
//     const config = FORM_CONFIGS[service.id] || FORM_CONFIGS['default'];
    
//     return (
//       <div className="space-y-6">
//         {/* Input Fields Section */}
//         <div className="space-y-4">
//           {config.fields.map((field) => (
//             <div key={field.id} className="space-y-1.5">
//               <label className="text-sm font-semibold text-slate-700">{field.label}</label>
              
//               {field.type === 'select' && (
//                 <select className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-lg text-sm focus:ring-2 focus:ring-blue-500 focus:outline-none">
//                   <option value="">Select an option...</option>
//                   {field.options.map(opt => <option key={opt} value={opt}>{opt}</option>)}
//                 </select>
//               )}
//               {field.type === 'text' && (
//                 <input 
//                   type="text" 
//                   placeholder={field.placeholder} 
//                   className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-lg text-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
//                 />
//               )}
//               {field.type === 'number' && (
//                 <input 
//                   type="number" 
//                   placeholder={field.placeholder} 
//                   className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-lg text-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
//                 />
//               )}
//               {field.type === 'date' && (
//                 <input 
//                   type="date"
//                   className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-lg text-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
//                 />
//               )}
              
//               {field.type === 'textarea' && (
//                 <textarea 
//                   rows={3}
//                   placeholder={field.placeholder} 
//                   className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-lg text-sm focus:ring-2 focus:ring-blue-500 focus:outline-none resize-none"
//                 />
//               )}
//             </div>
//           ))}
//         </div>

//         {/* Documents Section */}
//         <div className="space-y-3">
//           <h4 className="text-sm font-bold text-slate-800 uppercase tracking-wider flex items-center gap-2">
//             <UploadCloud size={16} /> Required Documents
//           </h4>
//           <p className="text-xs text-slate-500 mb-2">Please upload the following documents separately to proceed.</p>
          
//           <div className="grid grid-cols-1 gap-3">
//             {config.documents.map((doc) => (
//               <div key={doc.id} className={`border rounded-lg p-3 transition-colors flex items-center justify-between group ${uploadedDocs[doc.id] ? 'bg-green-50 border-green-200' : 'border-slate-200 hover:bg-slate-50'}`}>
//                 <div className="flex items-center gap-3">
//                    <div className={`p-2 rounded-lg ${uploadedDocs[doc.id] ? 'bg-white text-green-600' : 'bg-slate-100 text-slate-400 group-hover:bg-white group-hover:text-blue-500'}`}>
//                      {uploadedDocs[doc.id] ? <CheckCircle size={20} /> : <FileText size={20} />}
//                    </div>
//                    <div>
//                      <p className="text-sm font-medium text-slate-700 flex items-center gap-2">
//                         {doc.label}
//                         {doc.required && !uploadedDocs[doc.id] && <span className="text-[10px] bg-red-100 text-red-600 px-1.5 py-0.5 rounded font-bold">REQ</span>}
//                      </p>
//                      <p className="text-[10px] text-slate-400">{uploadedDocs[doc.id] ? 'Uploaded' : 'Not Uploaded'}</p>
//                    </div>
//                 </div>
//                 {!uploadedDocs[doc.id] ? (
//                     <button 
//                         onClick={() => handleFileUpload(doc.id)}
//                         className="text-xs bg-white border border-slate-200 text-slate-600 px-3 py-1.5 rounded-md shadow-sm font-medium hover:text-blue-600 hover:border-blue-200"
//                     >
//                         Upload
//                     </button>
//                 ) : (
//                     <button className="text-xs text-green-700 font-medium px-3 py-1.5 flex items-center gap-1 cursor-default">
//                         <Check size={14} /> Done
//                     </button>
//                 )}
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     );
//   };

//   const isFormValid = () => {
//       if (!selectedService) return false;
//       const config = FORM_CONFIGS[selectedService.id] || FORM_CONFIGS['default'];
//       const missingDocs = config.documents.filter(doc => doc.required && !uploadedDocs[doc.id]);
//       return missingDocs.length === 0;
//   };

//   // --- Views ---
//   const DashboardView = () => {
//     if (dashboardDetail) {
//       return (
//         <div className="space-y-6 animate-in slide-in-from-right duration-300">
//           <button onClick={() => setDashboardDetail(null)} className="flex items-center gap-2 text-slate-500 hover:text-blue-600 mb-4">
//             <ArrowLeft size={20} /> Back to Command Center
//           </button>
          
//           <h2 className="text-2xl font-bold text-slate-800 capitalize mb-6">{dashboardDetail} Analysis</h2>

//           {dashboardDetail === 'health' && (
//             <div className="bg-white rounded-xl p-6 shadow-sm border border-slate-200">
//               <h3 className="font-bold text-lg mb-4">Comprehensive Risk Factor Analysis</h3>
//               <div className="space-y-4">
//                 {AUDIT_DATA.riskCategories.map(cat => (
//                   <div key={cat.name} className="p-4 border border-slate-100 rounded-lg bg-slate-50">
//                     <div className="flex justify-between items-center mb-2">
//                       <span className="font-semibold text-slate-700">{cat.name}</span>
//                       <StatusBadge status={cat.status} />
//                     </div>
//                     <div className="w-full bg-slate-200 h-2 rounded-full overflow-hidden">
//                       <div className="bg-blue-600 h-full" style={{ width: `${cat.score}%` }}></div>
//                     </div>
//                     <p className="text-xs text-slate-500 mt-2">Score: {cat.score}/100. Recommendations available in full audit report.</p>
//                   </div>
//                 ))}
//               </div>
//             </div>
//           )}

//           {dashboardDetail === 'payment' && (
//             <div className="bg-white rounded-xl p-6 shadow-sm border border-slate-200">
//               <h3 className="font-bold text-lg mb-4">Wallet & Credit Overview</h3>
//               <div className="grid grid-cols-2 gap-4">
//                 <div className="p-4 bg-blue-50 rounded-lg">
//                   <p className="text-sm text-blue-600 font-bold uppercase">Wallet Balance</p>
//                   <p className="text-2xl font-bold text-slate-800 mt-1">₹ {walletBalance.toLocaleString()}</p>
//                   <p className="text-xs text-slate-500 mt-2">Last top-up: Oct 25, 2025</p>
//                 </div>
//                 <div className="p-4 bg-purple-50 rounded-lg">
//                   <p className="text-sm text-purple-600 font-bold uppercase">Credit Line Usage</p>
//                   <p className="text-2xl font-bold text-slate-800 mt-1">₹ {creditUsed.toLocaleString()}</p>
//                   <p className="text-xs text-slate-500 mt-2">Limit: ₹ {INITIAL_CREDIT_LIMIT.toLocaleString()}</p>
//                 </div>
//               </div>
//             </div>
//           )}

//           {dashboardDetail === 'pending' && (
//             <div className="bg-white rounded-xl p-6 shadow-sm border border-slate-200">
//               <h3 className="font-bold text-lg mb-4">Action Items Queue</h3>
//               <table className="w-full text-sm text-left">
//                 <thead className="bg-slate-50">
//                   <tr>
//                     <th className="px-4 py-2">ID</th>
//                     <th className="px-4 py-2">Action</th>
//                     <th className="px-4 py-2">Due</th>
//                   </tr>
//                 </thead>
//                 <tbody>
//                   <tr className="border-b">
//                     <td className="px-4 py-3 font-mono text-blue-600">REQ-1008</td>
//                     <td className="px-4 py-3">Upload EODC Copy</td>
//                     <td className="px-4 py-3 text-red-600 font-bold">Today</td>
//                   </tr>
//                 </tbody>
//               </table>
//             </div>
//           )}

//           {dashboardDetail === 'risk' && (
//             <div className="bg-white rounded-xl p-6 shadow-sm border border-slate-200">
//               <h3 className="font-bold text-lg mb-4 text-red-700">Financial Exposure Breakdown</h3>
//               <div className="p-4 bg-red-50 border border-red-100 rounded-lg mb-4">
//                 <p className="text-sm text-red-800 font-medium">Total Risk Value: ₹ {(AUDIT_DATA.financialRisk / 100000).toFixed(2)} Lakhs</p>
//               </div>
//               <ul className="list-disc pl-5 space-y-2 text-sm text-slate-700">
//                 <li><span className="font-bold">EPCG:</span> ₹ 8.5 Lakhs (Expired Licenses)</li>
//                 <li><span className="font-bold">RoDTEP:</span> ₹ 2.1 Lakhs (Unclaimed)</li>
//                 <li><span className="font-bold">Customs:</span> ₹ 1.9 Lakhs (Penalty Risk)</li>
//               </ul>
//             </div>
//           )}
//         </div>
//       );
//     }

//     return (
//       <div className="space-y-6 animate-in fade-in duration-500">
//         {/* 1. Welcome & High-Level KPIs */}
//         <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
//           {/* Health Score - Premium Card */}
//           <div 
//             onClick={() => setDashboardDetail('health')}
//             className="bg-gradient-to-br from-indigo-900 to-slate-900 rounded-xl p-5 text-white shadow-lg relative overflow-hidden cursor-pointer hover:shadow-xl transition-shadow group"
//           >
//             <div className="absolute top-0 right-0 w-24 h-24 bg-white/10 rounded-full blur-2xl -mr-10 -mt-10"></div>
//             <div className="flex justify-between items-start">
//               <div>
//                 <p className="text-indigo-200 text-xs font-semibold uppercase tracking-wider group-hover:text-white transition-colors">Compliance Score</p>
//                 <div className="flex items-baseline gap-2 mt-1">
//                   <span className="text-3xl font-bold">{AUDIT_DATA.score}</span>
//                   <span className="text-sm text-indigo-300">/ 100</span>
//                 </div>
//               </div>
//               <div className="p-2 bg-white/10 rounded-lg backdrop-blur-sm">
//                 <ActivityIcon size={20} className="text-indigo-200" />
//               </div>
//             </div>
//             <div className="mt-4">
//               <div className="w-full bg-indigo-900/50 h-1.5 rounded-full overflow-hidden">
//                 <div className="bg-indigo-400 h-full rounded-full" style={{ width: `${AUDIT_DATA.score}%` }}></div>
//               </div>
//               <p className="text-xs text-indigo-300 mt-2 flex items-center gap-1 group-hover:text-white">
//                 Click for details
//               </p>
//             </div>
//           </div>

//           {/* Dynamic Payment Card */}
//           <div 
//             onClick={() => setDashboardDetail('payment')}
//             className={`rounded-xl p-5 border shadow-sm flex flex-col justify-between transition-all cursor-pointer hover:shadow-md ${
//             paymentMode === 'wallet' ? 'bg-white border-slate-200' : 'bg-slate-50 border-blue-200'
//           }`}>
//             <div className="flex justify-between items-start">
//               <div>
//                 <p className="text-slate-500 text-xs font-semibold uppercase tracking-wider">
//                   {paymentMode === 'wallet' ? 'Wallet Balance' : 'Available Credit'}
//                 </p>
//                 <h3 className="text-2xl font-bold text-slate-800 mt-1">
//                   {paymentMode === 'wallet' 
//                     ? walletBalance.toLocaleString() 
//                     : (creditLimit - creditUsed).toLocaleString()}
//                 </h3>
//               </div>
//               <div className={`p-2 rounded-lg ${paymentMode === 'wallet' ? 'bg-blue-50 text-blue-600' : 'bg-purple-50 text-purple-600'}`}>
//                 {paymentMode === 'wallet' ? <Wallet size={20} /> : <CreditCard size={20} />}
//               </div>
//             </div>
//             <p className="text-xs text-slate-400 mt-1">
//               Click to view history
//             </p>
//           </div>

//           {/* Pending Actions */}
//           <div 
//             onClick={() => setDashboardDetail('pending')}
//             className="bg-white rounded-xl p-5 border border-slate-200 shadow-sm flex flex-col justify-between cursor-pointer hover:shadow-md transition-shadow group"
//           >
//             <div className="flex justify-between items-start">
//               <div>
//                 <p className="text-slate-500 text-xs font-semibold uppercase tracking-wider group-hover:text-blue-600 transition-colors">Active Requests</p>
//                 <h3 className="text-2xl font-bold text-slate-800 mt-1">
//                   {requests.filter(r => r.status !== 'Completed').length}
//                 </h3>
//               </div>
//               <div className="p-2 bg-amber-50 text-amber-600 rounded-lg">
//                 <Layers size={20} />
//               </div>
//             </div>
//             <p className="text-xs text-slate-400 mt-1">
//               1 Action Required
//             </p>
//           </div>

//           {/* Financial Exposure */}
//           <div 
//             onClick={() => setDashboardDetail('risk')}
//             className="bg-white rounded-xl p-5 border border-slate-200 shadow-sm flex flex-col justify-between cursor-pointer hover:shadow-md transition-shadow group"
//           >
//             <div className="flex justify-between items-start">
//               <div>
//                 <p className="text-slate-500 text-xs font-semibold uppercase tracking-wider group-hover:text-red-600 transition-colors">Risk Exposure</p>
//                 <h3 className="text-2xl font-bold text-red-600 mt-1">₹ {(AUDIT_DATA.financialRisk / 100000).toFixed(2)} L</h3>
//               </div>
//               <div className="p-2 bg-red-50 text-red-600 rounded-lg">
//                 <AlertOctagon size={20} />
//               </div>
//             </div>
//             <p className="text-xs text-slate-400 mt-1">
//               Click for breakdown
//             </p>
//           </div>
//         </div>

//         {/* 2. Main Dashboard Grid */}
//         <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          
//           {/* Left Column (2/3 width): Detailed Stats & Activity */}
//           <div className="lg:col-span-2 space-y-6">
            
//             {/* Quote Requests Pending Approval */}
//             {quotes.length > 0 && (
//                 <div className="bg-white rounded-xl border border-blue-200 shadow-sm overflow-hidden">
//                     <div className="px-6 py-4 border-b border-blue-100 bg-blue-50 flex justify-between items-center">
//                         <h3 className="font-bold text-blue-900 flex items-center gap-2">
//                             <FileSignature size={18} /> Pending Quotes ({quotes.length})
//                         </h3>
//                     </div>
//                     <div className="divide-y divide-blue-50">
//                         {quotes.map(quote => (
//                             <div key={quote.id} className="p-4 flex items-center justify-between hover:bg-blue-50/50 transition-colors">
//                                 <div>
//                                     <div className="flex items-center gap-2">
//                                         <span className="font-bold text-slate-800">{quote.service}</span>
//                                         <span className="text-xs bg-blue-100 text-blue-700 px-2 py-0.5 rounded font-mono">{quote.id}</span>
//                                     </div>
//                                     <p className="text-xs text-slate-500 mt-1">{quote.description}</p>
//                                 </div>
//                                 <div className="flex items-center gap-4">
//                                     <div className="text-right">
//                                         <p className="text-lg font-bold text-slate-800">
//                                             {typeof quote.amount === 'number' ? `₹ ${quote.amount.toLocaleString()}` : quote.amount}
//                                         </p>
//                                         <p className="text-[10px] text-slate-400">Valid until {quote.validUntil}</p>
//                                     </div>
//                                     <button 
//                                         onClick={() => approveQuote(quote)}
//                                         className="bg-blue-600 text-white px-4 py-2 rounded-lg text-xs font-bold hover:bg-blue-700 shadow-sm"
//                                     >
//                                         Approve
//                                     </button>
//                                 </div>
//                             </div>
//                         ))}
//                     </div>
//                 </div>
//             )}

//             {/* Application Status Breakdown (Visual Chart) */}
//             <div className="bg-white rounded-xl border border-slate-200 shadow-sm p-6">
//               <div className="flex justify-between items-center mb-6">
//                 <h3 className="font-bold text-slate-800">Application Portfolio</h3>
//                 <button className="text-xs text-blue-600 font-medium hover:underline">View All</button>
//               </div>
              
//               <div className="flex items-end gap-2 h-32 mb-4">
//                 {/* Simulated Bar Chart */}
//                 <div className="flex-1 flex flex-col justify-end gap-1 group cursor-pointer">
//                   <div className="text-center text-xs text-slate-500 opacity-0 group-hover:opacity-100 transition-opacity">12</div>
//                   <div className="bg-blue-100 hover:bg-blue-200 h-[60%] rounded-t-lg w-full transition-all relative"></div>
//                   <p className="text-[10px] text-center text-slate-400 font-medium uppercase mt-1">Draft</p>
//                 </div>
//                 <div className="flex-1 flex flex-col justify-end gap-1 group cursor-pointer">
//                   <div className="text-center text-xs text-slate-500 opacity-0 group-hover:opacity-100 transition-opacity">5</div>
//                   <div className="bg-amber-100 hover:bg-amber-200 h-[40%] rounded-t-lg w-full transition-all"></div>
//                   <p className="text-[10px] text-center text-slate-400 font-medium uppercase mt-1">Pending</p>
//                 </div>
//                 <div className="flex-1 flex flex-col justify-end gap-1 group cursor-pointer">
//                   <div className="text-center text-xs text-slate-500 opacity-0 group-hover:opacity-100 transition-opacity">8</div>
//                   <div className="bg-purple-100 hover:bg-purple-200 h-[70%] rounded-t-lg w-full transition-all"></div>
//                   <p className="text-[10px] text-center text-slate-400 font-medium uppercase mt-1">Submitted</p>
//                 </div>
//                 <div className="flex-1 flex flex-col justify-end gap-1 group cursor-pointer">
//                   <div className="text-center text-xs text-slate-500 opacity-0 group-hover:opacity-100 transition-opacity">24</div>
//                   <div className="bg-green-100 hover:bg-green-200 h-[90%] rounded-t-lg w-full transition-all"></div>
//                   <p className="text-[10px] text-center text-slate-400 font-medium uppercase mt-1">Approved</p>
//                 </div>
//               </div>
//             </div>

//             {/* Recent Transactions / Activity */}
//             <div className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden">
//               <div className="p-5 border-b border-slate-100">
//                 <h3 className="font-bold text-slate-800">Recent Activity</h3>
//               </div>
//               <div className="divide-y divide-slate-100">
//                 {requests.slice(0, 3).map((req) => (
//                   <div key={req.reqNo} className="p-4 flex items-center justify-between hover:bg-slate-50 transition-colors">
//                     <div className="flex items-center gap-3">
//                       <div className={`p-2 rounded-full ${
//                         req.category === 'Licensing' ? 'bg-purple-50 text-purple-600' :
//                         req.category === 'Transactional' ? 'bg-blue-50 text-blue-600' :
//                         'bg-slate-50 text-slate-600'
//                       }`}>
//                         {req.category === 'Licensing' ? <ShieldCheck size={16} /> : <FileText size={16} />}
//                       </div>
//                       <div>
//                         <p className="text-sm font-semibold text-slate-800">{req.service}</p>
//                         <p className="text-xs text-slate-500">{req.reqNo} • {req.date}</p>
//                       </div>
//                     </div>
//                     <StatusBadge status={req.status} />
//                   </div>
//                 ))}
//               </div>
//               <button className="w-full py-3 text-xs text-slate-500 font-medium hover:bg-slate-50 hover:text-blue-600 transition-colors">
//                 View Activity Log
//               </button>
//             </div>
//           </div>

//           {/* Right Column (1/3 width): Opportunities & Quick Actions */}
//           <div className="space-y-6">
            
//             {/* Urgent Alerts Section moved to right column for better balance */}
//             {ALERTS.length > 0 && (
//               <div className="bg-red-50 rounded-xl p-4 border border-red-100">
//                 <h4 className="text-sm font-bold text-red-800 flex items-center gap-2 mb-3">
//                   <AlertTriangle size={16} /> Urgent Attention Required ({ALERTS.length})
//                 </h4>
//                 <div className="space-y-2">
//                   {ALERTS.map(alert => (
//                     <div key={alert.id} className="bg-white p-3 rounded-lg border border-red-100 flex flex-col gap-2 shadow-sm">
//                         <div>
//                           <p className="text-sm font-semibold text-slate-800">{alert.message}</p>
//                           <p className="text-xs text-slate-500">{alert.subtext}</p>
//                         </div>
//                       <button className="text-xs bg-red-100 text-red-700 px-3 py-1.5 rounded-md font-medium hover:bg-red-200 whitespace-nowrap self-start">
//                         {alert.action}
//                       </button>
//                     </div>
//                   ))}
//                 </div>
//               </div>
//             )}

//             {/* Quick Actions Grid */}
//             <div className="bg-white rounded-xl border border-slate-200 shadow-sm p-5">
//               <h3 className="font-bold text-slate-800 mb-4 text-sm">Quick Actions</h3>
//               <div className="grid grid-cols-2 gap-3">
//                 <button onClick={() => setActiveTab('services')} className="p-3 rounded-xl border border-slate-100 bg-slate-50 hover:bg-blue-50 hover:border-blue-200 transition-all flex flex-col items-center gap-2 text-center group">
//                   <div className="p-2 bg-white rounded-full shadow-sm text-blue-600 group-hover:scale-110 transition-transform">
//                     <Plus size={20} />
//                   </div>
//                   <span className="text-xs font-medium text-slate-700">New Request</span>
//                 </button>
//                 <button onClick={() => setActiveTab('vault')} className="p-3 rounded-xl border border-slate-100 bg-slate-50 hover:bg-blue-50 hover:border-blue-200 transition-all flex flex-col items-center gap-2 text-center group">
//                   <div className="p-2 bg-white rounded-full shadow-sm text-blue-600 group-hover:scale-110 transition-transform">
//                     <UploadCloud size={20} />
//                   </div>
//                   <span className="text-xs font-medium text-slate-700">Upload Doc</span>
//                 </button>
//                 <button onClick={() => setActiveTab('audit')} className="p-3 rounded-xl border border-slate-100 bg-slate-50 hover:bg-blue-50 hover:border-blue-200 transition-all flex flex-col items-center gap-2 text-center group">
//                   <div className="p-2 bg-white rounded-full shadow-sm text-blue-600 group-hover:scale-110 transition-transform">
//                     <FileCheck size={20} />
//                   </div>
//                   <span className="text-xs font-medium text-slate-700">Audit Check</span>
//                 </button>
//                 <button className="p-3 rounded-xl border border-slate-100 bg-slate-50 hover:bg-blue-50 hover:border-blue-200 transition-all flex flex-col items-center gap-2 text-center group">
//                   <div className="p-2 bg-white rounded-full shadow-sm text-blue-600 group-hover:scale-110 transition-transform">
//                     <BookOpen size={20} />
//                   </div>
//                   <span className="text-xs font-medium text-slate-700">Regulations</span>
//                 </button>
//               </div>
//             </div>

//             {/* Regulatory Updates Mini */}
//             <div className="bg-white rounded-xl border border-slate-200 shadow-sm p-5">
//               <h3 className="font-bold text-slate-800 mb-4 text-sm flex items-center gap-2">
//                 <Globe size={16} className="text-slate-400" /> Regulatory Feed
//               </h3>
//               <div className="space-y-4">
//                 <div className="relative pl-4 border-l-2 border-slate-200">
//                   <div className="absolute -left-[5px] top-1 w-2.5 h-2.5 bg-blue-500 rounded-full border-2 border-white"></div>
//                   <p className="text-xs font-semibold text-slate-800">DGFT Notif 52/2024</p>
//                   <p className="text-[10px] text-slate-500 mt-0.5">Restriction on Onion Exports extended.</p>
//                 </div>
//                 <div className="relative pl-4 border-l-2 border-slate-200">
//                   <div className="absolute -left-[5px] top-1 w-2.5 h-2.5 bg-slate-300 rounded-full border-2 border-white"></div>
//                   <p className="text-xs font-semibold text-slate-800">Exchange Rate Update</p>
//                   <p className="text-[10px] text-slate-500 mt-0.5">USD @ 84.10 for Import Customs.</p>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     );
//   };

//   const ServiceStoreView = () => {
//     // Filter services based on selected tab
//     const filteredServices = serviceFilter === 'All' 
//         ? SERVICE_CATALOG 
//         : SERVICE_CATALOG.filter(s => s.category === serviceFilter);

//     const categories = ['All', 'Licensing', 'Transactional', 'Legal', 'Audit'];

//     return (
//       <div className="space-y-6 animate-in fade-in duration-500">
//         <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
//           <div>
//             <h2 className="text-2xl font-bold text-slate-800">Service Store</h2>
//             <p className="text-slate-500">Select a service to initiate. Priority SLA applies.</p>
//           </div>
//           <div className="text-right">
//              <div className="text-sm text-slate-500">Wallet Balance</div>
//              <div className="font-bold text-xl text-blue-700">₹ {walletBalance.toLocaleString()}</div>
//           </div>
//         </div>

//         {/* Filter Tabs */}
//         <div className="flex gap-2 overflow-x-auto pb-2">
//             {categories.map(cat => (
//                 <button 
//                     key={cat}
//                     onClick={() => setServiceFilter(cat)}
//                     className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-colors ${
//                         serviceFilter === cat 
//                         ? 'bg-slate-800 text-white' 
//                         : 'bg-white text-slate-600 border border-slate-200 hover:bg-slate-50'
//                     }`}
//                 >
//                     {cat}
//                 </button>
//             ))}
//         </div>

//         {/* Box (Grid) View Layout */}
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//           {filteredServices.map(service => {
//             const Icon = service.icon;
//             return (
//               <div key={service.id} className="bg-white rounded-xl border border-slate-200 p-6 shadow-sm hover:shadow-md transition-all group flex flex-col">
//                 <div className="flex justify-between items-start mb-4">
//                   <div className="p-3 bg-blue-50 text-blue-600 rounded-xl">
//                     <Icon size={28} />
//                   </div>
//                   {service.type === 'quote' && (
//                       <span className="bg-amber-100 text-amber-700 text-[10px] font-bold px-2 py-1 rounded uppercase border border-amber-200">Quote Req</span>
//                   )}
//                 </div>
//                 <h3 className="font-bold text-lg text-slate-800 mb-1">{service.title}</h3>
//                 <p className="text-sm text-slate-500 mb-4 flex-1">{service.desc}</p>
                
//                 <div className="flex items-center gap-2 text-xs text-slate-500 mb-6 bg-slate-50 p-2 rounded-lg">
//                   <Clock size={14} /> 
//                   <span className="font-medium">SLA: {service.sla}</span>
//                 </div>
                
//                 <div className="flex items-center justify-between pt-4 border-t border-slate-100">
//                   <div className="font-bold text-xl text-slate-800">
//                       {service.type === 'quote' ? 'On Request' : service.cost} 
//                       {service.type !== 'quote' && <span className="text-xs text-slate-400 font-normal"> Credits</span>}
//                   </div>
//                   <button 
//                       onClick={() => handleServiceRequest(service)} 
//                       className="bg-slate-900 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-blue-600 transition-colors"
//                   >
//                       {service.type === 'quote' ? 'Request Quote' : 'Book Now'}
//                   </button>
//                 </div>
//               </div>
//             );
//           })}
//         </div>
//       </div>
//     );
//   };

//   const SchemesAnalyticsView = () => {
//     if (schemeDetail) {
//       return (
//         <div className="space-y-6 animate-in slide-in-from-right duration-300 pb-10">
//           <button onClick={() => setSchemeDetail(null)} className="flex items-center gap-2 text-slate-500 hover:text-blue-600 mb-4">
//             <ArrowLeft size={20} /> Back to Overview
//           </button>
          
//           <h2 className="text-2xl font-bold text-slate-800 uppercase mb-4">{schemeDetail} Details</h2>
          
//           {schemeDetail === 'igst' && (
//             <div className="bg-white rounded-xl border border-slate-200 p-6 shadow-sm">
//               <h3 className="font-bold text-lg mb-4 text-red-600 flex items-center gap-2">
//                 <AlertTriangle size={20} /> IGST Error Analysis
//               </h3>
//               <div className="overflow-x-auto">
//                 <table className="w-full text-sm text-left">
//                   <thead className="bg-red-50 text-red-800">
//                     <tr>
//                       <th className="px-4 py-2">Error Code</th>
//                       <th className="px-4 py-2">Description</th>
//                       <th className="px-4 py-2">Affected SBs</th>
//                       <th className="px-4 py-2">Action</th>
//                     </tr>
//                   </thead>
//                   <tbody>
//                     <tr className="border-b">
//                       <td className="px-4 py-3 font-mono">SB005</td>
//                       <td className="px-4 py-3">Invoice Mismatch with GSTN</td>
//                       <td className="px-4 py-3">5</td>
//                       <td className="px-4 py-3"><button className="text-blue-600 hover:underline">Correct Data</button></td>
//                     </tr>
//                     <tr className="border-b">
//                       <td className="px-4 py-3 font-mono">SB006</td>
//                       <td className="px-4 py-3">EGM Not Filed</td>
//                       <td className="px-4 py-3">7</td>
//                       <td className="px-4 py-3"><button className="text-blue-600 hover:underline">Check Gateway</button></td>
//                     </tr>
//                   </tbody>
//                 </table>
//               </div>
//             </div>
//           )}

//           {schemeDetail === 'epcg' && (
//             <div className="bg-white rounded-xl border border-slate-200 p-6 shadow-sm">
//               <h3 className="font-bold text-lg mb-4">EPCG License Portfolio</h3>
//               <div className="grid grid-cols-1 gap-4">
//                 {SCHEME_ANALYTICS.epcg.active_licenses.map(lic => (
//                   <div key={lic.id} className="border border-slate-200 rounded-lg p-4 flex justify-between items-center bg-slate-50">
//                     <div>
//                       <p className="font-mono font-bold text-slate-800">{lic.id}</p>
//                       <p className="text-xs text-slate-500">Issued: {lic.date}</p>
//                     </div>
//                     <div className="text-right">
//                       <p className="text-sm font-semibold text-slate-700">{lic.fulfilled} / {lic.obligation}</p>
//                       <StatusBadge status={lic.status} />
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             </div>
//           )}
//         </div>
//       );
//     }

//     return (
//       <div className="space-y-8 animate-in fade-in duration-500 pb-10">
//         <div className="flex justify-between items-center">
//           <div>
//             <h2 className="text-2xl font-bold text-slate-800">Schemes & Analytics</h2>
//             <p className="text-slate-500">Live tracking of export obligations, benefits, and operational health.</p>
//           </div>
//           <div className="text-sm bg-blue-50 text-blue-700 px-3 py-1 rounded-full font-medium">
//              Based on Vault Data
//           </div>
//         </div>

//         {/* Export House Status Section */}
//         <div className="bg-gradient-to-r from-slate-900 to-blue-900 rounded-xl p-6 text-white shadow-lg relative overflow-hidden">
//            <div className="absolute top-0 right-0 p-8 bg-white/5 rounded-full -mr-4 -mt-4">
//               <Award size={48} className="text-yellow-400" />
//            </div>
//            <div className="relative z-10">
//               <div className="flex items-center gap-2 mb-2">
//                  <span className="text-xs font-bold bg-yellow-500 text-black px-2 py-0.5 rounded uppercase tracking-wider">Status Holder</span>
//                  <p className="text-sm font-medium text-blue-200">Valid until {SCHEME_ANALYTICS.export_house.valid_until}</p>
//               </div>
//               <h3 className="text-3xl font-bold mb-4">{SCHEME_ANALYTICS.export_house.status}</h3>
              
//               <div className="grid grid-cols-1 md:grid-cols-3 gap-6 border-t border-white/10 pt-4">
//                  <div>
//                     <p className="text-xs text-blue-300 uppercase">Current Performance</p>
//                     <p className="text-lg font-bold">{SCHEME_ANALYTICS.export_house.current_export_performance}</p>
//                  </div>
//                  <div>
//                     <p className="text-xs text-blue-300 uppercase">Next Tier Target</p>
//                     <p className="text-lg font-bold">{SCHEME_ANALYTICS.export_house.target}</p>
//                     <p className="text-xs text-blue-200">({SCHEME_ANALYTICS.export_house.next_tier})</p>
//                  </div>
//                  <div>
//                     <p className="text-xs text-blue-300 uppercase">Shortfall</p>
//                     <p className="text-lg font-bold text-yellow-400">{SCHEME_ANALYTICS.export_house.gap}</p>
//                  </div>
//               </div>

//               <div className="mt-6">
//                  <p className="text-sm font-bold mb-2">Active Entitlements:</p>
//                  <div className="flex flex-wrap gap-2">
//                     {SCHEME_ANALYTICS.export_house.entitlements.map((ent, idx) => (
//                        <span key={idx} className="bg-white/10 text-xs px-3 py-1 rounded-full border border-white/10">{ent}</span>
//                     ))}
//                  </div>
//               </div>
//            </div>
//         </div>

//         {/* 1. Operational Health Cards (IGST & EGM) */}
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//            {/* IGST Health */}
//            <div 
//              onClick={() => setSchemeDetail('igst')}
//              className="bg-white border border-slate-200 rounded-xl p-5 shadow-sm cursor-pointer hover:shadow-md transition-shadow group"
//            >
//               <div className="flex justify-between items-start mb-4">
//                  <div>
//                     <h4 className="font-bold text-slate-800 flex items-center gap-2 group-hover:text-red-600 transition-colors">
//                        <AlertTriangle size={18} className="text-red-500" /> IGST Refunds
//                     </h4>
//                     <p className="text-xs text-slate-500 mt-1">Errors preventing refund scroll generation</p>
//                  </div>
//                  <div className="text-right">
//                     <span className="text-2xl font-bold text-red-600">{SCHEME_ANALYTICS.benefits.igst.error_count}</span>
//                     <p className="text-xs text-slate-400">Errors</p>
//                  </div>
//               </div>
              
//               <div className="space-y-2 mb-4">
//                  {SCHEME_ANALYTICS.compliance.igst_error_codes.map((err, idx) => (
//                     <div key={idx} className="bg-red-50 text-red-700 px-3 py-2 rounded text-xs font-medium flex justify-between">
//                        <span>{err}</span>
//                        <span className="font-bold">Action Req.</span>
//                     </div>
//                  ))}
//               </div>
//               <div className="flex justify-between items-center pt-3 border-t border-slate-100 text-xs">
//                  <span className="text-slate-500">Stuck Amount:</span>
//                  <span className="font-bold text-slate-800">{SCHEME_ANALYTICS.benefits.igst.error_amt}</span>
//               </div>
//            </div>

//            {/* EGM Status */}
//            <div className="bg-white border border-slate-200 rounded-xl p-5 shadow-sm">
//               <div className="flex justify-between items-start mb-4">
//                  <div>
//                     <h4 className="font-bold text-slate-800 flex items-center gap-2">
//                        <Ship size={18} className="text-amber-500" /> EGM Status
//                     </h4>
//                     <p className="text-xs text-slate-500 mt-1">Export General Manifest pending filing</p>
//                  </div>
//                  <div className="text-right">
//                     <span className="text-2xl font-bold text-amber-600">{SCHEME_ANALYTICS.compliance.egm_pending_count}</span>
//                     <p className="text-xs text-slate-400">Shipping Bills</p>
//                  </div>
//               </div>
              
//               <div className="space-y-2 mb-4">
//                  <p className="text-xs text-slate-500">Recent Pending SBs:</p>
//                  <div className="flex gap-2 flex-wrap">
//                     {SCHEME_ANALYTICS.compliance.egm_pending_sbs.map((sb, idx) => (
//                        <span key={idx} className="bg-amber-50 text-amber-700 px-2 py-1 rounded text-xs border border-amber-100">{sb}</span>
//                     ))}
//                  </div>
//               </div>
//               <div className="flex justify-between items-center pt-3 border-t border-slate-100 text-xs">
//                  <span className="text-slate-500">Impact:</span>
//                  <span className="font-bold text-slate-800">Delays RoDTEP & DBK</span>
//               </div>
//            </div>
//         </div>

//         {/* 2. License Performance (EPCG & Advance Auth) */}
//         <section>
//            <h3 className="font-bold text-slate-700 mb-4 flex items-center gap-2">
//               <ShieldCheck size={20} /> License Performance
//            </h3>
//            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              
//               {/* EPCG Card */}
//               <div 
//                 onClick={() => setSchemeDetail('epcg')}
//                 className="bg-white rounded-xl border border-slate-200 p-6 shadow-sm cursor-pointer hover:shadow-md transition-shadow group"
//               >
//                  <div className="flex justify-between items-center mb-6">
//                     <div>
//                        <h4 className="font-bold text-lg text-slate-800 group-hover:text-blue-600 transition-colors">EPCG Scheme</h4>
//                        <p className="text-xs text-slate-500">{SCHEME_ANALYTICS.epcg.total_licenses} Active Licenses</p>
//                     </div>
//                     <div className="text-right">
//                        <div className="text-xs text-slate-400">Total Obligation</div>
//                        <div className="font-bold text-slate-800">{SCHEME_ANALYTICS.epcg.total_obligation}</div>
//                     </div>
//                  </div>
//                  <div className="space-y-6">
//                     {SCHEME_ANALYTICS.epcg.active_licenses.map(lic => (
//                        <div key={lic.id}>
//                           <div className="flex justify-between text-xs mb-1">
//                              <span className="font-medium text-slate-700">Lic #{lic.id}</span>
//                              <span className={`font-bold ${lic.progress < 20 ? 'text-red-600' : 'text-green-600'}`}>{lic.progress}% Fulfilled</span>
//                           </div>
//                           <div className="w-full bg-slate-100 h-2 rounded-full overflow-hidden mb-1">
//                              <div className={`h-full rounded-full ${lic.progress < 20 ? 'bg-red-500' : 'bg-green-500'}`} style={{ width: `${lic.progress}%` }}></div>
//                           </div>
//                           <div className="flex justify-between text-[10px] text-slate-400">
//                              <span>Duty Saved: {lic.duty}</span>
//                              <span>{lic.fulfilled} / {lic.obligation}</span>
//                           </div>
//                        </div>
//                     ))}
//                  </div>
//               </div>

//               {/* Advance Auth Card */}
//               <div className="bg-white rounded-xl border border-slate-200 p-6 shadow-sm">
//                  <div className="flex justify-between items-center mb-6">
//                     <div>
//                        <h4 className="font-bold text-lg text-slate-800">Advance Authorization</h4>
//                        <p className="text-xs text-slate-500">{SCHEME_ANALYTICS.advance_auth.total_licenses} Open Authorizations</p>
//                     </div>
//                     <div className="text-right">
//                        <div className="text-xs text-slate-400">Imp Allowed</div>
//                        <div className="font-bold text-slate-800">{SCHEME_ANALYTICS.advance_auth.import_allowed}</div>
//                     </div>
//                  </div>

//                  <div className="flex items-center justify-center py-4">
//                     <div className="relative w-32 h-32">
//                        {/* Placeholder for a circular chart using CSS or SVG */}
//                        <svg className="w-full h-full" viewBox="0 0 36 36">
//                           <path
//                             className="text-slate-100"
//                             d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
//                             fill="none"
//                             stroke="currentColor"
//                             strokeWidth="3"
//                           />
//                           <path
//                             className="text-blue-600"
//                             strokeDasharray={`${SCHEME_ANALYTICS.advance_auth.export_progress}, 100`}
//                             d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
//                             fill="none"
//                             stroke="currentColor"
//                             strokeWidth="3"
//                           />
//                        </svg>
//                        <div className="absolute inset-0 flex items-center justify-center flex-col">
//                           <span className="text-2xl font-bold text-slate-800">{SCHEME_ANALYTICS.advance_auth.export_progress}%</span>
//                           <span className="text-[10px] text-slate-500">Export Done</span>
//                        </div>
//                     </div>
//                  </div>
                 
//                  <div className="mt-4 text-xs space-y-2 border-t border-slate-100 pt-4">
//                     <div className="flex justify-between">
//                        <span className="text-slate-500">Imports Consumed:</span>
//                        <span className="font-medium text-slate-800">{SCHEME_ANALYTICS.advance_auth.import_consumed}</span>
//                     </div>
//                     <div className="flex justify-between">
//                        <span className="text-slate-500">Exports Fulfilled:</span>
//                        <span className="font-medium text-green-600">{SCHEME_ANALYTICS.advance_auth.export_fulfilled} / {SCHEME_ANALYTICS.advance_auth.export_obligation}</span>
//                     </div>
//                  </div>
//               </div>
//            </div>
//         </section>

//         {/* 3. Financial Benefits Reconciliation */}
//         <section>
//            <h3 className="font-bold text-slate-700 mb-4 flex items-center gap-2">
//               <Landmark size={20} /> Benefits Reconciliation
//            </h3>
           
//            <div className="bg-white rounded-xl border border-slate-200 overflow-hidden shadow-sm">
//               <div className="grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-slate-100">
                 
//                  {/* RoDTEP Section */}
//                  <div className="p-6">
//                     <div className="flex justify-between items-start mb-4">
//                        <h4 className="font-bold text-slate-800">RoDTEP</h4>
//                        <span className="bg-green-100 text-green-700 text-[10px] font-bold px-2 py-1 rounded">Script Based</span>
//                     </div>
                    
//                     <div className="space-y-4">
//                        <div className="flex justify-between items-center">
//                           <span className="text-sm text-slate-500">Total Available (as per SBs)</span>
//                           <span className="text-sm font-bold text-slate-800">{SCHEME_ANALYTICS.benefits.rodtep.available}</span>
//                        </div>
//                        <div className="w-full bg-slate-100 h-2 rounded-full overflow-hidden flex">
//                           <div className="bg-green-500 h-full" style={{ width: '35%' }}></div> {/* Generated */}
//                           <div className="bg-slate-300 h-full" style={{ width: '65%' }}></div> {/* Pending */}
//                        </div>
//                        <div className="flex justify-between text-xs">
//                           <div className="flex items-center gap-1">
//                              <div className="w-2 h-2 rounded-full bg-green-500"></div>
//                              <span className="text-slate-600">Generated: {SCHEME_ANALYTICS.benefits.rodtep.generated}</span>
//                           </div>
//                           <div className="flex items-center gap-1">
//                              <div className="w-2 h-2 rounded-full bg-slate-300"></div>
//                              <span className="text-slate-400">Pending: {SCHEME_ANALYTICS.benefits.rodtep.pending}</span>
//                           </div>
//                        </div>
//                        <button className="w-full mt-2 border border-slate-200 text-slate-600 text-xs font-bold py-2 rounded hover:bg-slate-50">
//                           Generate Pending Scrips
//                        </button>
//                     </div>
//                  </div>

//                  {/* Drawback Section */}
//                  <div className="p-6">
//                     <div className="flex justify-between items-start mb-4">
//                        <h4 className="font-bold text-slate-800">Duty Drawback (DBK)</h4>
//                        <span className="bg-blue-100 text-blue-700 text-[10px] font-bold px-2 py-1 rounded">Direct Credit</span>
//                     </div>
                    
//                     <div className="space-y-4">
//                        <div className="flex justify-between items-center">
//                           <span className="text-sm text-slate-500">Total Filed</span>
//                           <span className="text-sm font-bold text-slate-800">{SCHEME_ANALYTICS.benefits.dbk.filed}</span>
//                        </div>
//                        <div className="w-full bg-slate-100 h-2 rounded-full overflow-hidden flex">
//                           <div className="bg-blue-600 h-full" style={{ width: '88%' }}></div> 
//                           <div className="bg-amber-400 h-full" style={{ width: '12%' }}></div> 
//                        </div>
//                        <div className="flex justify-between text-xs">
//                           <div className="flex items-center gap-1">
//                              <div className="w-2 h-2 rounded-full bg-blue-600"></div>
//                              <span className="text-slate-600">Received: {SCHEME_ANALYTICS.benefits.dbk.received}</span>
//                           </div>
//                           <div className="flex items-center gap-1">
//                              <div className="w-2 h-2 rounded-full bg-amber-400"></div>
//                              <span className="text-slate-400">Pending: {SCHEME_ANALYTICS.benefits.dbk.pending}</span>
//                           </div>
//                        </div>
//                        <button className="w-full mt-2 border border-slate-200 text-slate-600 text-xs font-bold py-2 rounded hover:bg-slate-50">
//                           View Bank Realization Status
//                        </button>
//                     </div>
//                  </div>
//               </div>
//            </div>
//         </section>
//       </div>
//     );
//   };

//   const TrackRequestsView = () => {
//     // Filter Logic
//     const filteredRequests = statusFilter === 'All'
//       ? requests
//       : requests.filter(r => r.status === statusFilter);
//     const uniqueStatuses = ['All', ...new Set(requests.map(r => r.status))];

//     if (selectedRequest) {
//       // Find invoice for this request
//       const relatedInvoice = invoices.find(inv => inv.reqNo === selectedRequest.reqNo);

//       return (
//         <div className="space-y-6 animate-in slide-in-from-right duration-300">
//           <div className="flex items-center gap-4">
//             <button onClick={() => setSelectedRequest(null)} className="p-2 rounded-full hover:bg-slate-200 text-slate-600">
//               <ArrowLeft size={24} />
//             </button>
//             <div>
//               <div className="flex items-center gap-3">
//                 <h2 className="text-2xl font-bold text-slate-800">{selectedRequest.reqNo}</h2>
//                 <StatusBadge status={selectedRequest.status} />
//               </div>
//               <p className="text-slate-500 text-sm mt-1">{selectedRequest.service} • {selectedRequest.category}</p>
//             </div>
            
//             {/* Primary Chat Button in Detail View */}
//             <button 
//               onClick={() => openChatWithContext(selectedRequest.reqNo)}
//               className="ml-auto flex items-center gap-2 bg-blue-600 text-white px-5 py-2.5 rounded-lg font-medium hover:bg-blue-700 shadow-md shadow-blue-200"
//             >
//               <MessageSquare size={18} /> Chat with Admin
//             </button>
//           </div>

//           {/* Alert for "Action Required" */}
//           {selectedRequest.status === 'Needs Clarification' && (
//             <div className="bg-orange-50 border border-orange-200 rounded-xl p-4 flex items-start gap-3">
//               <AlertTriangle className="text-orange-600 mt-0.5" size={20} />
//               <div>
//                 <h4 className="font-bold text-orange-800">Action Required: Additional Information Needed</h4>
//                 <p className="text-sm text-orange-700 mt-1">{selectedRequest.details.adminNote}</p>
//                 <button className="mt-2 text-xs bg-orange-600 text-white px-3 py-1.5 rounded font-medium hover:bg-orange-700">
//                   Upload Requested Document
//                 </button>
//               </div>
//             </div>
//           )}

//           <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
//             <div className="lg:col-span-2 space-y-6">
//               {/* Info Card */}
//               <div className="bg-white rounded-xl border border-slate-200 p-6 shadow-sm">
//                 <h3 className="font-bold text-slate-800 mb-4 border-b border-slate-100 pb-2">Request Details</h3>
//                 <div className="grid grid-cols-2 gap-y-4 text-sm">
//                   <div>
//                     <p className="text-slate-500 mb-1">Service Type</p>
//                     <p className="font-medium text-slate-800">{selectedRequest.service}</p>
//                   </div>
//                   <div>
//                     <p className="text-slate-500 mb-1">Assigned Agent</p>
//                     <p className="font-medium text-slate-800 flex items-center gap-2">
//                       <User size={14} /> {selectedRequest.assignedTo}
//                     </p>
//                   </div>
//                   <div>
//                     <p className="text-slate-500 mb-1">Initiated On</p>
//                     <p className="font-medium text-slate-800">{selectedRequest.date}</p>
//                   </div>
//                   <div>
//                     <p className="text-slate-500 mb-1">Cost</p>
//                     <p className="font-medium text-slate-800">{selectedRequest.details?.amount || 'N/A'}</p>
//                   </div>
//                   <div className="col-span-2">
//                     <p className="text-slate-500 mb-1">Description</p>
//                     <p className="font-medium text-slate-800 bg-slate-50 p-3 rounded-lg border border-slate-100">
//                       {selectedRequest.details?.description || 'No description provided.'}
//                     </p>
//                   </div>
//                 </div>
//               </div>

//               {/* Timeline */}
//               <div className="bg-white rounded-xl border border-slate-200 p-6 shadow-sm">
//                 <h3 className="font-bold text-slate-800 mb-6 flex items-center gap-2">
//                   <Clock size={18} /> Activity Timeline
//                 </h3>
//                 <div className="relative pl-4 space-y-8">
//                   <div className="absolute left-[19px] top-2 bottom-2 w-0.5 bg-slate-200"></div>
//                   {selectedRequest.details?.timeline ? (
//                     selectedRequest.details.timeline.map((event, index) => (
//                       <div key={index} className="relative flex items-start gap-4">
//                         <div className={`z-10 w-4 h-4 rounded-full border-2 ${event.done ? 'bg-blue-600 border-blue-600' : 'bg-white border-slate-300'} shrink-0 mt-1`}></div>
//                         <div>
//                           <p className={`text-sm font-semibold ${event.done ? 'text-slate-800' : 'text-slate-400'}`}>{event.status}</p>
//                           <p className="text-xs text-slate-500">{event.date}</p>
//                         </div>
//                       </div>
//                     ))
//                   ) : (
//                     <p className="text-sm text-slate-400 italic">Timeline not available.</p>
//                   )}
//                 </div>
//               </div>
//             </div>
            
//             {/* Documents & Invoice */}
//             <div className="space-y-6">
//               <div className="bg-white rounded-xl border border-slate-200 p-6 shadow-sm">
//                 <h3 className="font-bold text-slate-800 mb-4 flex items-center gap-2">
//                   <FileText size={18} /> Documents
//                 </h3>
//                 <div className="space-y-3">
//                   {selectedRequest.details?.documents?.map((doc, idx) => (
//                     <div key={idx} className="flex items-center justify-between p-3 bg-slate-50 rounded-lg border border-slate-100">
//                       <span className="text-sm text-slate-700 truncate">{doc}</span>
//                       <button className="text-slate-400 hover:text-blue-600"><Download size={16} /></button>
//                     </div>
//                   ))}
//                 </div>
//                 <button className="mt-4 w-full py-2 text-xs font-medium text-blue-600 border border-blue-200 rounded-lg hover:bg-blue-50">
//                   Upload Additional Files
//                 </button>
//               </div>

//                {relatedInvoice && (
//                 <div className="bg-white rounded-xl border border-slate-200 p-6 shadow-sm">
//                   <h3 className="font-bold text-slate-800 mb-4 flex items-center gap-2">
//                     <Receipt size={18} /> Invoice
//                   </h3>
//                   <div className="p-4 rounded-lg bg-slate-50 border border-slate-100">
//                     <div className="flex justify-between items-center mb-2">
//                       <span className="text-xs font-bold text-slate-500">{relatedInvoice.id}</span>
//                       <StatusBadge status={relatedInvoice.status} />
//                     </div>
//                     <div className="text-xl font-bold text-slate-800 mb-1">
//                       {relatedInvoice.amount.toLocaleString()} <span className="text-xs font-normal text-slate-500">Credits</span>
//                     </div>
//                     <p className="text-xs text-slate-500 mb-3">{relatedInvoice.date}</p>
                    
//                     {relatedInvoice.status === 'Unpaid' ? (
//                       <button 
//                         onClick={() => handlePayInvoice(relatedInvoice)}
//                         className="w-full bg-slate-900 text-white text-xs font-bold py-2 rounded hover:bg-slate-700"
//                       >
//                         Pay Now
//                       </button>
//                     ) : (
//                       <button className="w-full bg-white border border-slate-200 text-slate-600 text-xs font-bold py-2 rounded hover:bg-slate-50 flex items-center justify-center gap-2">
//                         <Download size={14} /> Download Receipt
//                       </button>
//                     )}
//                   </div>
//                 </div>
//               )}
//             </div>
//           </div>
//         </div>
//       );
//     }

//     return (
//       <div className="space-y-6 animate-in fade-in duration-500">
//         <div className="flex justify-between items-center">
//            <div><h2 className="text-2xl font-bold text-slate-800">Track Requests</h2></div>
           
//            <div className="relative">
//             <button 
//               onClick={() => setIsFilterDropdownOpen(!isFilterDropdownOpen)}
//               className="flex items-center gap-2 border px-4 py-2 rounded-lg text-slate-600 bg-white hover:bg-slate-50"
//             >
//                <Filter size={18} /> {statusFilter === 'All' ? 'Filter Status' : statusFilter}
//             </button>
            
//             {isFilterDropdownOpen && (
//               <div className="absolute right-0 mt-2 w-48 bg-white rounded-xl shadow-xl border border-slate-100 z-20">
//                 {uniqueStatuses.map(status => (
//                   <button key={status} onClick={() => { setStatusFilter(status); setIsFilterDropdownOpen(false); }} className="w-full text-left px-4 py-2 text-sm hover:bg-slate-50">
//                     {status}
//                   </button>
//                 ))}
//               </div>
//             )}
//           </div>
//         </div>

//         <div className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden">
//           <table className="w-full text-sm text-left">
//             <thead className="bg-slate-50 text-slate-500 uppercase text-xs font-semibold">
//               <tr>
//                 <th className="px-6 py-4">Request No</th>
//                 <th className="px-6 py-4">Service</th>
//                 <th className="px-6 py-4">Date</th>
//                 <th className="px-6 py-4">SLA</th>
//                 <th className="px-6 py-4">Status</th>
//                 <th className="px-6 py-4">Assigned To</th>
//               </tr>
//             </thead>
//             <tbody className="divide-y divide-slate-100">
//               {filteredRequests.map((req) => (
//                 <tr key={req.reqNo} onClick={() => setSelectedRequest(req)} className="hover:bg-blue-50/50 cursor-pointer">
//                   <td className="px-6 py-4 font-mono font-medium text-blue-600">{req.reqNo}</td>
//                   <td className="px-6 py-4">{req.service}</td>
//                   <td className="px-6 py-4 text-slate-500">{req.date}</td>
//                   <td className="px-6 py-4">
//                     <span className={`text-xs font-bold ${req.sla.includes('Action') ? 'text-red-600' : 'text-slate-600'}`}>
//                       {req.sla}
//                     </span>
//                   </td>
//                   <td className="px-6 py-4"><StatusBadge status={req.status} /></td>
//                   <td className="px-6 py-4">{req.assignedTo}</td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>
//       </div>
//     );
//   };

//   const BillingView = () => {
//     const totalDue = invoices.filter(i => i.status === 'Unpaid').reduce((acc, curr) => acc + curr.amount, 0);
//     const totalPaid = invoices.filter(i => i.status === 'Paid').reduce((acc, curr) => acc + curr.amount, 0);

//     return (
//       <div className="space-y-6 animate-in fade-in duration-500">
//         <div className="flex justify-between items-end">
//           <div>
//             <h2 className="text-2xl font-bold text-slate-800">Invoices & Billing</h2>
//             <p className="text-slate-500">Manage your payments and download tax invoices.</p>
//           </div>
//           <button className="flex items-center gap-2 bg-white border border-slate-200 text-slate-700 px-4 py-2 rounded-lg hover:bg-slate-50 text-sm font-medium">
//             <Download size={18} /> Statement
//           </button>
//         </div>

//         <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
//           <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm flex flex-col justify-between">
//             <div>
//               <p className="text-slate-500 text-xs font-semibold uppercase tracking-wider">Total Outstanding</p>
//               <h3 className="text-3xl font-bold text-slate-800 mt-2">{totalDue.toLocaleString()} <span className="text-sm font-normal text-slate-400">Cr</span></h3>
//             </div>
//             {totalDue > 0 && (
//               <div className="mt-4 pt-4 border-t border-slate-100">
//                 <p className="text-xs text-red-600 font-medium flex items-center gap-1">
//                   <AlertTriangle size={12} /> Payment Overdue
//                 </p>
//               </div>
//             )}
//           </div>
//           <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
//              <p className="text-slate-500 text-xs font-semibold uppercase tracking-wider">Total Paid (YTD)</p>
//              <h3 className="text-3xl font-bold text-green-600 mt-2">{totalPaid.toLocaleString()} <span className="text-sm font-normal text-green-200">Cr</span></h3>
//           </div>
//           <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
//              <p className="text-slate-500 text-xs font-semibold uppercase tracking-wider">Payment Method</p>
//              <div className="flex items-center gap-3 mt-3">
//                 <div className="p-2 bg-blue-50 text-blue-600 rounded-lg"><CreditCard size={24} /></div>
//                 <div>
//                    <p className="text-sm font-bold text-slate-800">Default: {paymentMode === 'wallet' ? 'Wallet' : 'Credit Line'}</p>
//                    <p className="text-xs text-slate-400">Switch global mode in header</p>
//                 </div>
//              </div>
//           </div>
//         </div>

//         <div className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden">
//           <table className="w-full text-sm text-left">
//             <thead className="bg-slate-50 text-slate-500 uppercase text-xs font-semibold">
//               <tr>
//                 <th className="px-6 py-4">Invoice ID</th>
//                 <th className="px-6 py-4">Service Request</th>
//                 <th className="px-6 py-4">Date</th>
//                 <th className="px-6 py-4">Amount</th>
//                 <th className="px-6 py-4">Status</th>
//                 <th className="px-6 py-4">Due Date</th>
//                 <th className="px-6 py-4 text-right">Actions</th>
//               </tr>
//             </thead>
//             <tbody className="divide-y divide-slate-100">
//               {invoices.map((inv) => (
//                 <tr key={inv.id} className="hover:bg-slate-50 transition-colors">
//                   <td className="px-6 py-4 font-mono font-medium text-slate-600">{inv.id}</td>
//                   <td className="px-6 py-4">
//                     <div className="font-medium text-slate-800">{inv.service}</div>
//                     <div className="text-xs text-slate-500 font-mono">{inv.reqNo}</div>
//                   </td>
//                   <td className="px-6 py-4 text-slate-600">{inv.date}</td>
//                   <td className="px-6 py-4 font-bold text-slate-800">{inv.amount.toLocaleString()}</td>
//                   <td className="px-6 py-4"><StatusBadge status={inv.status} /></td>
//                   <td className="px-6 py-4 text-slate-500 text-xs">{inv.dueDate}</td>
//                   <td className="px-6 py-4 text-right">
//                     {inv.status === 'Unpaid' ? (
//                       <button 
//                         onClick={() => handlePayInvoice(inv)}
//                         className="bg-slate-900 text-white px-4 py-2 rounded-lg text-xs font-bold hover:bg-slate-700 shadow-sm"
//                       >
//                         Pay Now
//                       </button>
//                     ) : (
//                       <button className="text-blue-600 hover:text-blue-800 font-medium text-xs flex items-center gap-1 justify-end w-full">
//                         <Download size={14} /> Invoice
//                       </button>
//                     )}
//                   </td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>
//       </div>
//     );
//   };

//   const ActiveWorkflowsView = () => (
//     <div className="space-y-8 animate-in fade-in duration-500">
//       <div className="flex justify-between items-center">
//         <div>
//           <h2 className="text-2xl font-bold text-slate-800">Active Workflows</h2>
//           <p className="text-slate-500">Kanban view categorized by service type.</p>
//         </div>
//       </div>

//       <div className="space-y-6">
//         {Object.entries(KANBAN_GROUPS).map(([category, items]) => (
//           <div key={category} className="bg-white rounded-xl border border-slate-200 p-6">
//              <h3 className="text-lg font-bold text-slate-700 mb-4 flex items-center gap-2">
//                <Layers size={18} /> {category} Workflows
//              </h3>
//              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
//                {items.map(item => (
//                  <div key={item.id} className="border border-slate-200 rounded-lg p-4 hover:shadow-md transition-shadow">
//                     <div className="flex justify-between items-start mb-2">
//                        <span className="text-[10px] font-mono text-slate-400">{item.id}</span>
//                        <StatusBadge status={item.stage} />
//                     </div>
//                     <h4 className="font-bold text-slate-800 mb-2">{item.title}</h4>
//                     <div className="w-full bg-slate-100 h-1.5 rounded-full overflow-hidden mb-3">
//                       <div className="bg-blue-600 h-full rounded-full" style={{ width: `${item.progress}%` }}></div>
//                     </div>
//                     <div className="flex justify-between items-center text-xs text-slate-500">
//                        <span className="flex items-center gap-1"><User size={12} /> {item.assignee}</span>
//                        <span>{item.progress}% Done</span>
//                     </div>
//                  </div>
//                ))}
//              </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );

//   const ComplianceAuditView = () => (
//     <div className="space-y-8 animate-in fade-in duration-500 pb-10">
//       <div className="flex justify-between items-center">
//         <div>
//           <h2 className="text-2xl font-bold text-slate-800">Compliance Audit Report</h2>
//           <p className="text-slate-500">Financial Liability & Risk Assessment (As on {AUDIT_DATA.lastAuditDate})</p>
//         </div>
//         <button className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 shadow-sm transition-colors">
//            <Download size={18} /> Download PDF Report
//         </button>
//       </div>

//       {/* 1. Trade Pulse Summary */}
//       <section>
//         <h3 className="text-sm font-bold text-slate-400 uppercase tracking-wider mb-4">Trade Pulse (YTD)</h3>
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
//           {/* Exports */}
//           <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
//              <div className="flex justify-between items-start mb-4">
//                <div className="p-2 bg-green-50 text-green-600 rounded-lg"><ArrowUpRight size={24} /></div>
//                <span className="text-xs font-medium text-green-600 bg-green-50 px-2 py-1 rounded-full">{TRADE_SUMMARY.exports.trend} vs LY</span>
//              </div>
//              <div className="space-y-1">
//                <p className="text-sm text-slate-500">Total Exports</p>
//                <h3 className="text-2xl font-bold text-slate-800">{TRADE_SUMMARY.exports.value}</h3>
//                <p className="text-xs text-slate-400 font-medium">{TRADE_SUMMARY.exports.count} Shipping Bills</p>
//              </div>
//           </div>

//           {/* Imports */}
//           <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
//              <div className="flex justify-between items-start mb-4">
//                <div className="p-2 bg-blue-50 text-blue-600 rounded-lg"><ArrowDownLeft size={24} /></div>
//              </div>
//              <div className="space-y-1">
//                <p className="text-sm text-slate-500">Total Imports</p>
//                <h3 className="text-2xl font-bold text-slate-800">{TRADE_SUMMARY.imports.value}</h3>
//                <p className="text-xs text-slate-400 font-medium">{TRADE_SUMMARY.imports.count} Bills of Entry</p>
//              </div>
//              <div className="mt-4 pt-4 border-t border-slate-100 flex justify-between items-center text-xs">
//                <span className="text-slate-500">Duty Paid:</span>
//                <span className="font-bold text-slate-700">{TRADE_SUMMARY.imports.dutyPaid}</span>
//              </div>
//           </div>

//           {/* Incentives & Savings */}
//           <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
//              <div className="flex justify-between items-start mb-4">
//                <div className="p-2 bg-purple-50 text-purple-600 rounded-lg"><Landmark size={24} /></div>
//              </div>
//              <div className="space-y-1">
//                <p className="text-sm text-slate-500">Duty Saved (Schemes)</p>
//                <h3 className="text-2xl font-bold text-slate-800">{TRADE_SUMMARY.incentives.dutySaved}</h3>
//                <p className="text-xs text-slate-400 font-medium">via EPCG, AA & MOOWR</p>
//              </div>
//              <div className="mt-4 pt-4 border-t border-slate-100 flex justify-between items-center text-xs">
//                <span className="text-slate-500">Incentives Claimed:</span>
//                <span className="font-bold text-green-600">{TRADE_SUMMARY.incentives.claimed}</span>
//              </div>
//           </div>
//         </div>
//       </section>

//       {/* 2. Compliance Health Matrix */}
//       <section>
//         <h3 className="text-sm font-bold text-slate-400 uppercase tracking-wider mb-4">Risk Breakdown</h3>
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
//           {/* Overall Score */}
//           <div className="bg-white p-6 rounded-xl border border-slate-200 flex flex-col items-center justify-center text-center">
//              <div className="w-32 h-32 rounded-full border-8 border-amber-500 flex items-center justify-center mb-4 relative">
//                 <div className="text-3xl font-bold text-slate-800">{AUDIT_DATA.score}</div>
//                 <div className="absolute -bottom-2 bg-amber-100 text-amber-700 text-xs px-2 py-0.5 rounded-full font-bold">Medium Risk</div>
//              </div>
//              <p className="text-sm text-slate-500">Compliance Health Score</p>
//           </div>

//           {/* Financial Liability */}
//           <div className="bg-white p-6 rounded-xl border border-slate-200 flex flex-col justify-center">
//              <div className="flex items-center gap-3 mb-4">
//                 <AlertOctagon className="text-red-500" size={24} />
//                 <h4 className="font-bold text-slate-700">Financial Risk</h4>
//              </div>
//              <div className="text-3xl font-bold text-red-600 mb-2">₹ {(AUDIT_DATA.financialRisk/100000).toFixed(2)} Lakhs</div>
//              <p className="text-xs text-slate-500">Potential penalty exposure if open findings are not resolved within 30 days.</p>
//           </div>

//           {/* Category Health */}
//           <div className="bg-white p-6 rounded-xl border border-slate-200 flex flex-col justify-center space-y-4">
//             {AUDIT_DATA.riskCategories.map((cat) => (
//               <div key={cat.name}>
//                  <div className="flex justify-between text-xs mb-1">
//                     <span className="font-medium text-slate-700">{cat.name}</span>
//                     <span className={`font-bold ${cat.status === 'Critical' ? 'text-red-600' : 'text-green-600'}`}>{cat.status}</span>
//                  </div>
//                  <div className="w-full bg-slate-100 h-2 rounded-full overflow-hidden">
//                     <div 
//                       className={`h-full rounded-full ${cat.score < 60 ? 'bg-red-500' : cat.score < 80 ? 'bg-amber-500' : 'bg-green-500'}`} 
//                       style={{ width: `${cat.score}%` }}
//                     ></div>
//                  </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* 3. Findings Table */}
//       <section className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden">
//         <div className="p-6 border-b border-slate-100 flex justify-between items-center">
//           <h3 className="font-bold text-lg text-slate-800">Detailed Audit Findings</h3>
//           <div className="flex gap-2">
//              <span className="text-xs font-medium text-red-600 bg-red-50 px-3 py-1 rounded-full">2 High Priority</span>
//              <span className="text-xs font-medium text-amber-600 bg-amber-50 px-3 py-1 rounded-full">1 Medium Priority</span>
//           </div>
//         </div>
//         <table className="w-full text-sm text-left">
//           <thead className="bg-slate-50 text-slate-500 uppercase text-xs font-semibold">
//             <tr>
//               <th className="px-6 py-4">Severity</th>
//               <th className="px-6 py-4">Compliance Area</th>
//               <th className="px-6 py-4">Observation / Issue</th>
//               <th className="px-6 py-4">Financial Impact</th>
//               <th className="px-6 py-4">Status</th>
//               <th className="px-6 py-4">Action</th>
//             </tr>
//           </thead>
//           <tbody className="divide-y divide-slate-100">
//             {AUDIT_DATA.findings.map((item) => (
//               <tr key={item.id} className="hover:bg-slate-50">
//                 <td className="px-6 py-4"><StatusBadge status={item.severity} /></td>
//                 <td className="px-6 py-4 font-medium text-slate-700">{item.area}</td>
//                 <td className="px-6 py-4 text-slate-600">{item.issue}</td>
//                 <td className="px-6 py-4 font-mono font-bold text-red-600">{item.impact}</td>
//                 <td className="px-6 py-4"><StatusBadge status={item.status} /></td>
//                 <td className="px-6 py-4">
//                   {item.status !== 'Fixed' && (
//                     <button className="text-xs bg-slate-900 text-white px-3 py-1.5 rounded hover:bg-slate-700">Fix</button>
//                   )}
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </section>
//     </div>
//   );

//   const SmartVaultView = () => {
//     // Filter functionality
//     const getFilteredFiles = () => {
//       if (!currentVaultFolder || !VAULT_FILES[currentVaultFolder.id]) return [];
      
//       const files = VAULT_FILES[currentVaultFolder.id];
//       if (!vaultSearchQuery.trim()) return files;
//       const query = vaultSearchQuery.toLowerCase();
      
//       return files.filter(file => {
//         // Basic match
//         if (file.name.toLowerCase().includes(query)) return true;
//         if (file.details) {
//           // Deep match in details object values
//           return Object.values(file.details).some(val => 
//             String(val).toLowerCase().includes(query)
//           );
//         }
//         return false;
//       });
//     };

//     const filteredFiles = getFilteredFiles();

//     return (
//       <div className="space-y-6 animate-in fade-in duration-500">
        
//         {currentVaultFolder ? (
//           // Detailed File View
//           <div className="space-y-6">
//             <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
//                <div className="flex items-center gap-3">
//                  <button onClick={() => { setCurrentVaultFolder(null); setVaultSearchQuery(''); }} className="p-2 hover:bg-slate-200 rounded-full transition-colors text-slate-600">
//                    <ArrowLeft size={24} />
//                  </button>
//                  <div>
//                    <h2 className="text-2xl font-bold text-slate-800">{currentVaultFolder.name}</h2>
//                    <p className="text-slate-500 text-sm">Browsing files in secure vault</p>
//                  </div>
//                </div>
               
//                <div className="flex items-center gap-3 w-full md:w-auto">
//                  <div className="relative flex-1 md:w-64">
//                     <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={16} />
//                     <input 
//                       type="text" 
//                       placeholder="Search SB No, Date, License..." 
//                       value={vaultSearchQuery}
//                       onChange={(e) => setVaultSearchQuery(e.target.value)}
//                       className="w-full pl-9 pr-4 py-2 border border-slate-200 rounded-lg text-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
//                     />
//                  </div>
//                  <button className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors whitespace-nowrap">
//                    <UploadCloud size={18} /> <span className="hidden sm:inline">Upload New</span>
//                  </button>
//                </div>
//             </div>

//             <div className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden overflow-x-auto">
//                {filteredFiles.length > 0 ? (
//                  <table className="w-full text-sm text-left">
//                     <thead className="bg-slate-50 text-slate-500 uppercase text-xs font-semibold">
//                       <tr>
//                         {/* Dynamic Headers based on Folder Type */}
//                         {(currentVaultFolder.id === 1) && <th className="px-6 py-4">SB No & Date</th>}
//                         {(currentVaultFolder.id === 2) && <th className="px-6 py-4">BOE No & Date</th>}
//                         {(currentVaultFolder.id === 3) && <th className="px-6 py-4">License No & Date</th>}
                        
//                         {(currentVaultFolder.id !== 1 && currentVaultFolder.id !== 2 && currentVaultFolder.id !== 3) && <th className="px-6 py-4">Document Name</th>}
                        
//                         {(currentVaultFolder.id === 1 || currentVaultFolder.id === 2) ? (
//                           <>
//                             <th className="px-6 py-4">Port & Invoice</th>
//                             <th className="px-6 py-4">Value</th>
//                             <th className="px-6 py-4">Financials & Duties</th>
//                             <th className="px-6 py-4">License / Scheme</th>
//                             {currentVaultFolder.id === 1 && <th className="px-6 py-4">e-BRC</th>}
//                           </>
//                         ) : currentVaultFolder.id === 3 ? (
//                           <>
//                             <th className="px-6 py-4">Type & Validity</th>
//                             <th className="px-6 py-4">Duty Saved</th>
//                             <th className="px-6 py-4">Export Obligation</th>
//                             <th className="px-6 py-4">Status</th>
//                           </>
//                         ) : (
//                           <>
//                             <th className="px-6 py-4">Upload Date</th>
//                             <th className="px-6 py-4">Size</th>
//                             <th className="px-6 py-4">Status</th>
//                           </>
//                         )}
                        
//                         <th className="px-6 py-4 text-right">Actions</th>
//                       </tr>
//                     </thead>
//                     <tbody className="divide-y divide-slate-100">
//                        {filteredFiles.map(file => (
//                          <tr key={file.id} className="hover:bg-slate-50 group">
                           
//                            {/* Specific Primary Column for SB (1), BOE (2), LIC (3) */}
//                            {(currentVaultFolder.id === 1) && (
//                              <td className="px-6 py-4">
//                                <div className="font-bold text-slate-800 text-base">{file.details.sb_no}</div>
//                                <div className="text-xs text-slate-500">{file.details.sb_date}</div>
//                              </td>
//                            )}
//                            {(currentVaultFolder.id === 2) && (
//                              <td className="px-6 py-4">
//                                <div className="font-bold text-slate-800 text-base">{file.details.boe_no}</div>
//                                <div className="text-xs text-slate-500">{file.details.boe_date}</div>
//                              </td>
//                            )}
//                            {(currentVaultFolder.id === 3) && (
//                              <td className="px-6 py-4">
//                                <div className="font-bold text-slate-800 text-base">{file.details.lic_no}</div>
//                                <div className="text-xs text-slate-500">{file.details.lic_date}</div>
//                              </td>
//                            )}

//                            {/* Default Primary Column */}
//                            {(currentVaultFolder.id !== 1 && currentVaultFolder.id !== 2 && currentVaultFolder.id !== 3) && (
//                              <td className="px-6 py-4 font-medium text-slate-800">
//                                <div className="flex items-center gap-2">
//                                  <FileText className="text-red-500 shrink-0" size={18} /> 
//                                  <div>
//                                    <div>{file.name}</div>
//                                    <div className="text-[10px] text-slate-400 font-normal">{file.date} • {file.size}</div>
//                                  </div>
//                                </div>
//                              </td>
//                            )}

//                            {/* Detailed Columns for SB (1) and BOE (2) */}
//                            {(currentVaultFolder.id === 1 || currentVaultFolder.id === 2) ? (
//                              <>
//                                <td className="px-6 py-4">
//                                  <div className="font-bold text-slate-700">{file.details.port}</div>
//                                  <div className="text-xs text-slate-500 font-mono">Inv: {file.details.invoice}</div>
//                                </td>
//                                <td className="px-6 py-4">
//                                  <div className="font-bold text-slate-800">{file.details.fob}</div>
//                                  <div className="text-[10px] text-slate-500 uppercase">FOB Value</div>
//                                </td>
//                                <td className="px-6 py-4 text-xs">
//                                  {currentVaultFolder.id === 1 ? (
//                                     <div className="space-y-1">
//                                       <div className="flex justify-between gap-4"><span className="text-slate-500">DBK:</span> <span className="font-medium">{file.details.dbk}</span></div>
//                                       <div className="flex justify-between gap-4"><span className="text-slate-500">IGST:</span> <span className="font-medium">{file.details.igst}</span></div>
//                                       <div className="flex justify-between gap-4"><span className="text-slate-500">RoDTEP:</span> <span className="font-medium">{file.details.rodtep}</span></div>
//                                     </div>
//                                  ) : (
//                                     <div className="space-y-1">
//                                       <div className="flex justify-between gap-4"><span className="text-slate-500">Duty Paid:</span> <span className="font-bold text-red-600">{file.details.duty_paid}</span></div>
//                                       <div className="flex justify-between gap-4"><span className="text-slate-500">IGST:</span> <span className="font-medium">{file.details.igst}</span></div>
//                                     </div>
//                                  )}
//                                </td>
//                                <td className="px-6 py-4">
//                                  <span className="bg-purple-50 text-purple-700 text-xs px-2 py-1 rounded font-medium border border-purple-100">
//                                    {file.details.license}
//                                  </span>
//                                </td>
//                                {currentVaultFolder.id === 1 && (
//                                  <td className="px-6 py-4">
//                                    <span className={`text-xs font-bold px-2 py-1 rounded-full ${
//                                       file.details.ebrc.includes('Issued') ? 'bg-green-100 text-green-700' : 'bg-amber-100 text-amber-700'
//                                    }`}>
//                                      {file.details.ebrc}
//                                    </span>
//                                  </td>
//                                )}
//                              </>
//                            ) : currentVaultFolder.id === 3 ? (
//                              // Specific Columns for Licenses (3)
//                              <>
//                                <td className="px-6 py-4">
//                                  <div className="font-medium text-slate-800">{file.details.type}</div>
//                                  <div className="text-xs text-slate-500">Valid till: {file.details.validity}</div>
//                                </td>
//                                <td className="px-6 py-4 font-bold text-green-700">
//                                  {file.details.duty_saved}
//                                </td>
//                                <td className="px-6 py-4 font-medium text-slate-700">
//                                  {file.details.obligation}
//                                </td>
//                                <td className="px-6 py-4"><StatusBadge status={file.details.status} /></td>
//                              </>
//                            ) : (
//                              // Default Columns for other folders
//                              <>
//                                <td className="px-6 py-4 text-slate-500">{file.date}</td>
//                                <td className="px-6 py-4 text-slate-500">{file.size}</td>
//                                <td className="px-6 py-4"><StatusBadge status={file.status} /></td>
//                              </>
//                            )}

//                            <td className="px-6 py-4 text-right">
//                               <div className="flex justify-end gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
//                                  <button className="p-2 text-slate-400 hover:text-blue-600 hover:bg-blue-50 rounded-lg"><Eye size={16} /></button>
//                                  <button className="p-2 text-slate-400 hover:text-green-600 hover:bg-green-50 rounded-lg"><Download size={16} /></button>
//                                  <button className="p-2 text-slate-400 hover:text-slate-600 hover:bg-slate-100 rounded-lg"><Share2 size={16} /></button>
//                               </div>
//                            </td>
//                          </tr>
//                        ))}
//                     </tbody>
//                  </table>
//                ) : (
//                   <div className="p-12 text-center text-slate-400">
//                      <Folder size={48} className="mx-auto mb-3 opacity-20" />
//                      <p>No documents found matching "{vaultSearchQuery}"</p>
//                   </div>
//                )}
//             </div>
//           </div>
//         ) : (
//           // Folder List View
//           <>
//             <div className="flex justify-between items-end">
//               <div>
//                 <h2 className="text-2xl font-bold text-slate-800">Smart Vault</h2>
//                 <p className="text-slate-500">Secure storage for your compliance documents.</p>
//               </div>
//               <button className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
//                 <Plus size={18} /> Upload Document
//               </button>
//             </div>

//             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
//               {VAULT_FOLDERS.map(folder => (
//                 <div 
//                   key={folder.id} 
//                   onClick={() => setCurrentVaultFolder(folder)}
//                   className={`bg-white p-6 rounded-xl border shadow-sm hover:shadow-md transition-all cursor-pointer group ${folder.color === 'red' ? 'border-red-100' : 'border-slate-200'}`}
//                 >
//                   <div className="flex justify-between items-start mb-4">
//                     <Folder size={40} className={`${folder.color === 'red' ? 'text-red-100 group-hover:text-red-400' : 'text-blue-100 group-hover:text-blue-500'} transition-colors fill-current`} />
//                     <button className="text-slate-400 hover:text-slate-600">
//                       <MoreVertical size={20} />
//                     </button>
//                   </div>
//                   <h3 className={`font-bold mb-1 truncate ${folder.color === 'red' ? 'text-red-700' : 'text-slate-800'}`}>{folder.name}</h3>
//                   <div className="flex items-center justify-between text-sm text-slate-500">
//                     <span>{folder.count} files</span>
//                     <span>{folder.size}</span>
//                   </div>
//                 </div>
//               ))}
//             </div>
            
//             <div className="bg-blue-50 rounded-xl p-8 text-center border border-blue-100 mt-8">
//               <h3 className="font-bold text-blue-900 text-lg mb-2">Drag & Drop to Upload</h3>
//               <p className="text-blue-700 mb-6 max-w-md mx-auto">
//                 We automatically categorize your documents (Shipping Bills, e-BRCs, Licenses) using AI.
//               </p>
//               <div className="inline-flex items-center gap-4">
//                 <button className="bg-white text-blue-700 border border-blue-200 px-6 py-2 rounded-lg font-medium hover:bg-blue-100 transition-colors">
//                   Browse Files
//                 </button>
//               </div>
//             </div>
//           </>
//         )}
//       </div>
//     );
//   };

//   const WalletView = () => {
//     // Filter transactions based on active payment mode
//     const filteredTransactions = TRANSACTIONS.filter(t => t.source === paymentMode);

//     return (
//       <div className="space-y-6 animate-in fade-in duration-500">
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
//           {/* Main Balance Card - Context Aware */}
//           <div className={`md:col-span-2 rounded-2xl p-8 text-white relative overflow-hidden shadow-xl ${
//             paymentMode === 'wallet' 
//               ? 'bg-gradient-to-br from-slate-900 to-slate-800' 
//               : 'bg-gradient-to-br from-purple-900 to-indigo-900'
//           }`}>
//             <div className={`absolute top-0 right-0 p-32 rounded-full blur-3xl opacity-20 -mr-16 -mt-16 ${
//               paymentMode === 'wallet' ? 'bg-blue-500' : 'bg-pink-500'
//             }`}></div>
            
//             <div className="relative z-10">
//               <div className="flex justify-between items-start mb-8">
//                  <div>
//                    <p className="text-white/70 text-sm font-medium mb-1">
//                      {paymentMode === 'wallet' ? 'Total Available Balance' : 'Available Credit Limit'}
//                    </p>
//                    <h2 className="text-4xl font-bold font-mono tracking-tight">
//                      {paymentMode === 'wallet' 
//                        ? walletBalance.toLocaleString() 
//                        : (creditLimit - creditUsed).toLocaleString()
//                      } 
//                      <span className="text-lg text-white/50 font-sans"> Credits</span>
//                    </h2>
//                    {paymentMode === 'credit_line' && (
//                      <p className="text-sm text-purple-200 mt-2 font-medium">
//                        Used: {creditUsed.toLocaleString()} / Total Limit: {creditLimit.toLocaleString()}
//                      </p>
//                    )}
//                  </div>
//                  <div className="p-3 bg-white/10 rounded-xl backdrop-blur-sm border border-white/10">
//                    {paymentMode === 'wallet' ? <Wallet size={32} className="text-blue-400" /> : <CreditCard size={32} className="text-purple-400" />}
//                  </div>
//               </div>
              
//               <div className="flex gap-4">
//                 <button 
//                   onClick={() => paymentMode === 'wallet' ? setShowTopUpModal(true) : null}
//                   className={`${
//                     paymentMode === 'wallet' 
//                       ? 'bg-blue-600 hover:bg-blue-500' 
//                       : 'bg-purple-500 hover:bg-purple-400'
//                   } text-white px-6 py-3 rounded-xl font-bold transition-all shadow-lg flex items-center gap-2`}
//                 >
//                   {paymentMode === 'wallet' ? <><Plus size={20} /> Add Credits</> : <><CheckCircle size={20} /> Repay Dues</>}
//                 </button>
//                 <button className="bg-white/10 hover:bg-white/20 text-white px-6 py-3 rounded-xl font-medium backdrop-blur-sm border border-white/10 transition-all flex items-center gap-2">
//                   <Download size={20} /> Statement
//                 </button>
//               </div>
//             </div>
//           </div>

//           {/* Quick Stats - Context Aware */}
//           <div className="space-y-6">
//              <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
//                <div className="flex items-center gap-3 mb-2">
//                  <div className={`p-2 rounded-lg ${
//                    paymentMode === 'wallet' ? 'bg-green-50 text-green-600' : 'bg-purple-50 text-purple-600'
//                  }`}>
//                    {paymentMode === 'wallet' ? <ArrowDownLeft size={20} /> : <Calendar size={20} />}
//                  </div>
//                  <span className="text-sm text-slate-500 font-medium">
//                    {paymentMode === 'wallet' ? 'Last Top-up' : 'Next Bill Date'}
//                  </span>
//                </div>
//                <div className="text-2xl font-bold text-slate-800">
//                  {paymentMode === 'wallet' ? '₹ 50,000' : 'Nov 05, 2025'}
//                </div>
//                <div className="text-xs text-slate-400 mt-1">
//                  {paymentMode === 'wallet' ? 'Oct 25, 2025' : 'Billing Cycle: 5th Monthly'}
//                </div>
//              </div>
//              <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
//                <div className="flex items-center gap-3 mb-2">
//                  <div className="p-2 bg-red-50 text-red-600 rounded-lg"><ArrowUpRight size={20} /></div>
//                  <span className="text-sm text-slate-500 font-medium">Usage (This Month)</span>
//                </div>
//                <div className="text-2xl font-bold text-slate-800">
//                  {paymentMode === 'wallet' ? '28,600 Cr' : '15,000 Cr'}
//                </div>
//                <div className="text-xs text-slate-400 mt-1">16 Transactions</div>
//              </div>
//           </div>
//         </div>

//         {/* Transaction Table */}
//         <div className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden">
//           <div className="p-6 border-b border-slate-100 flex justify-between items-center">
//             <h3 className="font-bold text-lg text-slate-800">
//               {paymentMode === 'wallet' ? 'Wallet Passbook' : 'Credit Line Statement'}
//             </h3>
//             <div className="flex gap-2">
//                <button className="p-2 text-slate-400 hover:bg-slate-50 rounded-lg"><Filter size={18} /></button>
//                <button className="p-2 text-slate-400 hover:bg-slate-50 rounded-lg"><Calendar size={18} /></button>
//             </div>
//           </div>
//           <div className="overflow-x-auto">
//             <table className="w-full text-sm text-left">
//               <thead className="bg-slate-50 text-slate-500 uppercase text-xs font-semibold">
//                 <tr>
//                   <th className="px-6 py-4">Transaction ID</th>
//                   <th className="px-6 py-4">Date</th>
//                   <th className="px-6 py-4">Description</th>
//                   <th className="px-6 py-4">Amount</th>
//                   <th className="px-6 py-4">Status</th>
//                   <th className="px-6 py-4 text-right">Invoice</th>
//                 </tr>
//               </thead>
//               <tbody className="divide-y divide-slate-100">
//                 {filteredTransactions.length > 0 ? (
//                   filteredTransactions.map((tx) => (
//                     <tr key={tx.id} className="hover:bg-slate-50 transition-colors">
//                       <td className="px-6 py-4 font-mono text-slate-500">{tx.id}</td>
//                       <td className="px-6 py-4 text-slate-600">{tx.date}</td>
//                       <td className="px-6 py-4 font-medium text-slate-800">{tx.desc}</td>
//                       <td className={`px-6 py-4 font-bold font-mono ${tx.type === 'Credit' ? 'text-green-600' : 'text-slate-800'}`}>
//                         {tx.type === 'Credit' ? '+' : '-'}{tx.amount.toLocaleString()}
//                       </td>
//                       <td className="px-6 py-4">
//                         <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
//                           {tx.status}
//                         </span>
//                       </td>
//                       <td className="px-6 py-4 text-right">
//                         <button className="text-blue-600 hover:text-blue-800 font-medium text-xs flex items-center gap-1 justify-end w-full">
//                           <Download size={14} /> PDF
//                         </button>
//                       </td>
//                     </tr>
//                   ))
//                 ) : (
//                   <tr>
//                     <td colSpan="6" className="px-6 py-8 text-center text-slate-400 italic">
//                       No transactions found for {paymentMode.replace('_', ' ')}.
//                     </td>
//                   </tr>
//                 )}
//               </tbody>
//             </table>
//           </div>
//         </div>
//       </div>
//     );
//   };

//   const ClientProfileView = () => (
//     <div className="space-y-8 animate-in fade-in duration-500 pb-10">
      
//       {/* Header */}
//       <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
//         <div>
//           <h2 className="text-2xl font-bold text-slate-800">{CLIENT_PROFILE.name}</h2>
//           <p className="text-slate-500 text-sm flex items-center gap-2 mt-1">
//             <Building size={14} /> {CLIENT_PROFILE.type} • {CLIENT_PROFILE.constitution}
//           </p>
//         </div>
//         <button className="bg-slate-100 text-slate-600 px-4 py-2 rounded-lg font-medium hover:bg-slate-200 transition-colors text-sm">
//           Edit Profile
//         </button>
//       </div>

//       {/* 1. Statutory Identity Card */}
//       <section>
//         <h3 className="text-sm font-bold text-slate-400 uppercase tracking-wider mb-4 flex items-center gap-2">
//           <ShieldCheck size={16} /> Statutory Identity
//         </h3>
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          
//           {/* IEC Card */}
//           <div className="bg-white rounded-xl border border-slate-200 p-5 shadow-sm relative overflow-hidden group hover:border-blue-300 transition-colors">
//             <div className="absolute top-0 right-0 p-3 opacity-10 group-hover:opacity-20 transition-opacity">
//               <Globe size={64} className="text-blue-600" />
//             </div>
//             <div className="flex justify-between items-start mb-2">
//               <span className="text-xs font-bold text-slate-500 uppercase">IEC Number</span>
//               <span className="bg-green-100 text-green-700 text-[10px] font-bold px-2 py-0.5 rounded-full">ACTIVE</span>
//             </div>
//             <div className="text-2xl font-mono font-bold text-slate-800 mb-4">{CLIENT_PROFILE.statutory.iec.number}</div>
//             <div className="text-xs text-slate-400">Issued: {CLIENT_PROFILE.statutory.iec.issueDate}</div>
//           </div>

//           {/* GST Card */}
//           <div className="bg-white rounded-xl border border-slate-200 p-5 shadow-sm relative overflow-hidden group hover:border-purple-300 transition-colors">
//             <div className="absolute top-0 right-0 p-3 opacity-10 group-hover:opacity-20 transition-opacity">
//               <Landmark size={64} className="text-purple-600" />
//             </div>
//             <div className="flex justify-between items-start mb-2">
//               <span className="text-xs font-bold text-slate-500 uppercase">GSTIN</span>
//               <span className="bg-green-100 text-green-700 text-[10px] font-bold px-2 py-0.5 rounded-full">ACTIVE</span>
//             </div>
//             <div className="text-2xl font-mono font-bold text-slate-800 mb-4">{CLIENT_PROFILE.statutory.gst.number}</div>
//             <div className="text-xs text-slate-400">Filing Status: {CLIENT_PROFILE.statutory.gst.filings}</div>
//           </div>

//           {/* RCMC Card */}
//           <div className="bg-white rounded-xl border border-slate-200 p-5 shadow-sm relative overflow-hidden group hover:border-amber-300 transition-colors">
//             <div className="absolute top-0 right-0 p-3 opacity-10 group-hover:opacity-20 transition-opacity">
//               <FileText size={64} className="text-amber-600" />
//             </div>
//             <div className="flex justify-between items-start mb-2">
//               <span className="text-xs font-bold text-slate-500 uppercase">RCMC ({CLIENT_PROFILE.statutory.rcmc.council})</span>
//               <span className="bg-green-100 text-green-700 text-[10px] font-bold px-2 py-0.5 rounded-full">VALID</span>
//             </div>
//             <div className="text-xl font-mono font-bold text-slate-800 mb-4 truncate" title={CLIENT_PROFILE.statutory.rcmc.number}>
//               {CLIENT_PROFILE.statutory.rcmc.number}
//             </div>
//             <div className="text-xs text-slate-400">Valid Until: {CLIENT_PROFILE.statutory.rcmc.validUntil}</div>
//           </div>
//         </div>
//       </section>

//       {/* 2. Secure Credentials Vault */}
//       <section>
//         <div className="flex justify-between items-end mb-4">
//           <h3 className="text-sm font-bold text-slate-400 uppercase tracking-wider flex items-center gap-2">
//             <Lock size={16} /> Government Portal Credentials
//           </h3>
//           <span className="text-xs text-slate-400 bg-slate-100 px-2 py-1 rounded flex items-center gap-1">
//             <Lock size={10} /> End-to-End Encrypted
//           </span>
//         </div>
        
//         <div className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden">
//           <table className="w-full text-sm text-left">
//             <thead className="bg-slate-50 text-slate-500 uppercase text-xs font-semibold">
//               <tr>
//                 <th className="px-6 py-4">Portal Name</th>
//                 <th className="px-6 py-4">User ID</th>
//                 <th className="px-6 py-4">Password</th>
//                 <th className="px-6 py-4">Last Login</th>
//                 <th className="px-6 py-4 text-right">Actions</th>
//               </tr>
//             </thead>
//             <tbody className="divide-y divide-slate-100">
//               {CLIENT_PROFILE.credentials.map((cred) => (
//                 <tr key={cred.id} className="hover:bg-slate-50 group transition-colors">
//                   <td className="px-6 py-4">
//                     <div className="font-medium text-slate-800">{cred.portal}</div>
//                     <div className="text-xs text-slate-400 font-mono">{cred.url}</div>
//                   </td>
//                   <td className="px-6 py-4 font-mono text-slate-600">
//                     <div className="flex items-center gap-2">
//                       {cred.username}
//                       <button 
//                         onClick={() => copyToClipboard(cred.username)}
//                         className="text-slate-300 hover:text-blue-600 opacity-0 group-hover:opacity-100 transition-opacity"
//                         title="Copy Username"
//                       >
//                         <Copy size={14} />
//                       </button>
//                     </div>
//                   </td>
//                   <td className="px-6 py-4 font-mono">
//                     <div className="flex items-center gap-2">
//                       <span className="text-slate-600">
//                         {visiblePasswords[cred.id] ? cred.password : '••••••••••••'}
//                       </span>
//                       <button 
//                         onClick={() => togglePasswordVisibility(cred.id)}
//                         className="text-slate-400 hover:text-blue-600 focus:outline-none"
//                       >
//                         {visiblePasswords[cred.id] ? <EyeOff size={16} /> : <Eye size={16} />}
//                       </button>
//                       <button 
//                         onClick={() => copyToClipboard(cred.password)}
//                         className="text-slate-300 hover:text-blue-600 opacity-0 group-hover:opacity-100 transition-opacity"
//                         title="Copy Password"
//                       >
//                         <Copy size={14} />
//                       </button>
//                     </div>
//                   </td>
//                   <td className="px-6 py-4 text-slate-500 text-xs">
//                     {cred.lastLogin}
//                   </td>
//                   <td className="px-6 py-4 text-right">
//                     <button className="text-xs font-medium text-blue-600 hover:bg-blue-50 px-3 py-1.5 rounded transition-colors">
//                       Update
//                     </button>
//                   </td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//           <div className="bg-slate-50 p-3 text-center border-t border-slate-100">
//             <button className="text-xs font-medium text-slate-500 hover:text-blue-600 flex items-center justify-center gap-1 w-full">
//               <Plus size={14} /> Add New Portal Credential
//             </button>
//           </div>
//         </div>
//       </section>

//       {/* 3. Branch Details */}
//       <section>
//         <h3 className="text-sm font-bold text-slate-400 uppercase tracking-wider mb-4 flex items-center gap-2">
//           <MapPin size={16} /> Registered Branches
//         </h3>
//         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
//           {CLIENT_PROFILE.branches.map(branch => (
//             <div key={branch.id} className="bg-white p-4 rounded-lg border border-slate-200 flex items-start gap-3">
//               <div className="p-2 bg-slate-100 rounded-lg text-slate-500">
//                 <Building size={18} />
//               </div>
//               <div>
//                 <p className="font-bold text-slate-800 text-sm">{branch.type}</p>
//                 <p className="text-xs text-slate-500">{branch.location}</p>
//                 <p className="text-[10px] text-slate-400 font-mono mt-1">GST: {branch.gst}</p>
//               </div>
//             </div>
//           ))}
//           <button className="border-2 border-dashed border-slate-200 rounded-lg flex flex-col items-center justify-center p-4 hover:bg-slate-50 hover:border-slate-300 transition-colors text-slate-400 hover:text-slate-600">
//             <Plus size={24} className="mb-1" />
//             <span className="text-xs font-medium">Add Branch</span>
//           </button>
//         </div>
//       </section>
//     </div>
//   );

//   // --- Main Render ---
//   return (
//     <div className="min-h-screen bg-slate-50 flex font-sans text-slate-800">
      
//       {/* Mobile Overlay */}
//       {isMobileMenuOpen && (
//         <div className="fixed inset-0 bg-black/50 z-40 lg:hidden" onClick={() => setIsMobileMenuOpen(false)} />
//       )}

//       {/* Sidebar */}
//       <aside className={`
//         fixed lg:static inset-y-0 left-0 z-50 bg-white border-r border-slate-200 transition-all duration-300 flex flex-col
//         ${isSidebarCollapsed ? 'w-20' : 'w-64'}
//         ${isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
//       `}>
//         <div className="h-16 flex items-center justify-center border-b border-slate-100">
//           <div className="flex items-center gap-2 font-bold text-xl text-blue-900 tracking-tight">
//             <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center text-white">E</div>
//             {!isSidebarCollapsed && <span>EXIMINQ</span>}
//           </div>
//         </div>

//         <div className="flex-1 py-6 space-y-1 overflow-y-auto">
//           <SidebarItem icon={LayoutDashboard} label="Command Center" active={activeTab === 'dashboard'} onClick={() => setActiveTab('dashboard')} collapsed={isSidebarCollapsed} />
//           <SidebarItem icon={List} label="Track Requests" active={activeTab === 'track_requests'} onClick={() => setActiveTab('track_requests')} collapsed={isSidebarCollapsed} />
//           <SidebarItem icon={Layers} label="Active Workflows" active={activeTab === 'workflows'} onClick={() => setActiveTab('workflows')} collapsed={isSidebarCollapsed} />
//           <SidebarItem icon={FileBox} label="Service Store" active={activeTab === 'services'} onClick={() => setActiveTab('services')} collapsed={isSidebarCollapsed} />
//           <SidebarItem icon={ClipboardCheck} label="Compliance Audit" active={activeTab === 'audit'} onClick={() => setActiveTab('audit')} collapsed={isSidebarCollapsed} />
//           <SidebarItem icon={BarChart3} label="Schemes & Analytics" active={activeTab === 'schemes'} onClick={() => setActiveTab('schemes')} collapsed={isSidebarCollapsed} />
//           <SidebarItem icon={FileText} label="Smart Vault" active={activeTab === 'vault'} onClick={() => setActiveTab('vault')} collapsed={isSidebarCollapsed} />
//           <SidebarItem icon={Receipt} label="Invoices & Billing" active={activeTab === 'billing'} onClick={() => setActiveTab('billing')} collapsed={isSidebarCollapsed} />
//           <SidebarItem icon={Wallet} label="Wallet" active={activeTab === 'wallet'} onClick={() => setActiveTab('wallet')} collapsed={isSidebarCollapsed} />
          
//           <div className="my-2 border-t border-slate-100 mx-4"></div>
          
//           <SidebarItem icon={User} label="Company Profile" active={activeTab === 'profile'} onClick={() => setActiveTab('profile')} collapsed={isSidebarCollapsed} />
//         </div>
//       </aside>

//       {/* Main Content */}
//       <main className="flex-1 flex flex-col min-w-0">
//         <header className="h-16 bg-white border-b border-slate-200 flex items-center justify-between px-4 lg:px-8 sticky top-0 z-30">
//           <button className="lg:hidden p-2 text-slate-600" onClick={() => setIsMobileMenuOpen(true)}>
//             <Menu size={24} />
//           </button>
          
//           <div className="flex-1 px-4 hidden md:block">
//             <h1 className="text-lg font-bold text-slate-800 capitalize">
//               {activeTab.replace('_', ' ')}
//             </h1>
//           </div>

//           <div className="flex items-center gap-4">
            
//             {/* Payment Toggle Switch */}
//             <div className="hidden md:flex bg-slate-100 rounded-lg p-1 border border-slate-200">
//               <button 
//                 onClick={() => setPaymentMode('wallet')}
//                 className={`px-3 py-1.5 text-xs font-bold rounded-md transition-all ${paymentMode === 'wallet' ? 'bg-white text-blue-600 shadow-sm' : 'text-slate-500 hover:text-slate-700'}`}
//               >
//                 Wallet
//               </button>
//               <button 
//                 onClick={() => setPaymentMode('credit_line')}
//                 className={`px-3 py-1.5 text-xs font-bold rounded-md transition-all ${paymentMode === 'credit_line' ? 'bg-white text-purple-600 shadow-sm' : 'text-slate-500 hover:text-slate-700'}`}
//               >
//                 Credit Line
//               </button>
//             </div>

//             <div className={`flex items-center gap-3 px-3 py-1.5 rounded-full border ${paymentMode === 'wallet' ? 'bg-blue-50 border-blue-100' : 'bg-purple-50 border-purple-100'}`}>
//               <div className="flex flex-col items-end leading-none">
//                 <span className={`text-[10px] font-bold uppercase ${paymentMode === 'wallet' ? 'text-blue-400' : 'text-purple-400'}`}>
//                   {paymentMode === 'wallet' ? 'Balance' : 'Available'}
//                 </span>
//                 <span className={`text-xs font-bold ${paymentMode === 'wallet' ? 'text-blue-700' : 'text-purple-700'}`}>
//                   ₹ {paymentMode === 'wallet' ? walletBalance.toLocaleString() : (creditLimit - creditUsed).toLocaleString()}
//                 </span>
//               </div>
//               {paymentMode === 'wallet' && (
//                 <button onClick={() => setShowTopUpModal(true)} className="bg-blue-600 text-white p-1 rounded-full"><Plus size={12} /></button>
//               )}
//             </div>

//             <div className="w-8 h-8 bg-slate-200 rounded-full flex items-center justify-center font-bold text-slate-600">AE</div>
//           </div>
//         </header>

//         {/* Dynamic Content */}
//         <div className="flex-1 overflow-auto p-4 lg:p-8">
//           {activeTab === 'dashboard' && <DashboardView />}
//           {activeTab === 'track_requests' && <TrackRequestsView />}
//           {activeTab === 'billing' && <BillingView />}
//           {activeTab === 'schemes' && <SchemesAnalyticsView />}
//           {activeTab === 'workflows' && <ActiveWorkflowsView />}
//           {activeTab === 'audit' && <ComplianceAuditView />}
//           {activeTab === 'services' && <ServiceStoreView />}
//           {activeTab === 'vault' && <SmartVaultView />}
//           {activeTab === 'wallet' && <WalletView />}
//           {activeTab === 'profile' && <ClientProfileView />}
//         </div>
//       </main>

//       {/* Chat Box Component (Drawer) */}
//       <ChatBox isOpen={isChatOpen} onClose={() => setIsChatOpen(false)} contextRequest={chatContext} />

//       {/* Top Up Modal */}
//       <Modal isOpen={showTopUpModal} onClose={() => setShowTopUpModal(false)} title="Add Credits">
//         <div className="space-y-4">
//           <p className="text-sm text-slate-600">Add funds to your wallet to pay for services instantly.</p>
//           <button onClick={() => { setWalletBalance(prev => prev + 10000); setShowTopUpModal(false); }} className="w-full bg-blue-600 text-white py-3 rounded-lg font-bold hover:bg-blue-700">Add ₹ 10,000</button>
//         </div>
//       </Modal>

//       {/* Invoice Payment Modal */}
//       <Modal isOpen={!!selectedInvoice} onClose={() => setSelectedInvoice(null)} title="Pay Invoice">
//         {selectedInvoice && (
//           <div className="space-y-6">
//             <div className="flex justify-between items-start pb-4 border-b border-slate-100">
//                <div>
//                   <h4 className="font-bold text-lg text-slate-800">{selectedInvoice.service}</h4>
//                   <p className="text-sm text-slate-500 font-mono">{selectedInvoice.reqNo}</p>
//                </div>
//                <div className="text-right">
//                   <p className="text-xs text-slate-500 uppercase font-bold">Total Due</p>
//                   <h2 className="text-2xl font-bold text-slate-800">{selectedInvoice.amount.toLocaleString()}</h2>
//                </div>
//             </div>

//             <div className="bg-slate-50 p-4 rounded-xl border border-slate-200">
//                <p className="text-sm font-semibold text-slate-700 mb-3">Select Payment Method</p>
//                <div className="flex gap-2">
//                  <button 
//                    onClick={() => setInvoicePaymentMode('wallet')} 
//                    className={`flex-1 py-3 px-4 rounded-lg border text-sm font-bold transition-all flex flex-col items-center gap-1 ${invoicePaymentMode === 'wallet' ? 'bg-white border-blue-500 text-blue-600 shadow-sm ring-2 ring-blue-100' : 'bg-slate-100 border-transparent text-slate-500 hover:bg-white hover:border-slate-200'}`}
//                  >
//                     <Wallet size={20} />
//                     Wallet
//                  </button>
//                  <button 
//                    onClick={() => setInvoicePaymentMode('net_banking')} 
//                    className={`flex-1 py-3 px-4 rounded-lg border text-sm font-bold transition-all flex flex-col items-center gap-1 ${invoicePaymentMode === 'net_banking' ? 'bg-white border-emerald-500 text-emerald-600 shadow-sm ring-2 ring-emerald-100' : 'bg-slate-100 border-transparent text-slate-500 hover:bg-white hover:border-slate-200'}`}
//                  >
//                     <Landmark size={20} />
//                     Net Banking
//                  </button>
//                </div>
//                <div className="mt-4 flex justify-between items-center text-xs">
//                  <span className="text-slate-500">{invoicePaymentMode === 'wallet' ? 'Available Balance:' : 'Bank Gateway:'}</span>
//                  <span className={`font-bold ${invoicePaymentMode === 'wallet' ? 'text-blue-600' : 'text-emerald-600'}`}>
//                     {invoicePaymentMode === 'wallet' ? `₹ ${walletBalance.toLocaleString()}` : 'Secure Redirect'}
//                  </span>
//                </div>
//             </div>

//             <button onClick={confirmInvoicePayment} className="w-full bg-slate-900 text-white py-3 rounded-lg font-bold hover:bg-slate-800 transition-colors">
//               {invoicePaymentMode === 'wallet' ? 'Confirm Payment' : 'Proceed to Gateway'}
//             </button>
//           </div>
//         )}
//       </Modal>

//       {/* Service Request Modal */}
//       <Modal isOpen={!!selectedService} onClose={() => setSelectedService(null)} title={selectedService?.title || 'Request'}>
//         {selectedService && (
//           <div>
//             <div className="mb-6">
//               {renderServiceForm(selectedService)}
//             </div>

//             <div className="bg-slate-50 p-4 rounded-lg mb-4 text-sm space-y-2">
//               <div className="flex justify-between">
//                 <span className="text-slate-600">Mode:</span>
//                 <span className="font-bold uppercase text-slate-800">{selectedService.type === 'quote' ? 'Quotation Request' : paymentMode.replace('_', ' ')}</span>
//               </div>
              
//               {selectedService.type !== 'quote' && (
//                   <div className="flex justify-between">
//                     <span className="text-slate-600">Cost:</span>
//                     <span className="font-bold text-red-600">- {selectedService.cost}</span>
//                   </div>
//               )}
              
//               {selectedService.type === 'quote' ? (
//                   <div className="flex items-center gap-2 pt-2 border-t border-slate-200 text-amber-700 text-xs">
//                       <AlertTriangle size={14} />
//                       <span>Quote will be sent for your approval before deduction.</span>
//                   </div>
//               ) : (
//                   <div className="flex justify-between pt-2 border-t border-slate-200">
//                     <span className="text-slate-600">{paymentMode === 'wallet' ? 'Remaining Balance' : 'Remaining Limit'}:</span>
//                     <span className="font-bold text-blue-600">
//                       ₹ {paymentMode === 'wallet' 
//                           ? (walletBalance - selectedService.cost).toLocaleString() 
//                           : (creditLimit - creditUsed - selectedService.cost).toLocaleString()}
//                     </span>
//                   </div>
//               )}
//             </div>

//             <button 
//                 onClick={confirmRequest} 
//                 disabled={!isFormValid()}
//                 className={`w-full py-3 rounded-lg font-bold transition-colors ${
//                     isFormValid() 
//                     ? 'bg-slate-900 text-white hover:bg-slate-800' 
//                     : 'bg-slate-200 text-slate-400 cursor-not-allowed'
//                 }`}
//             >
//               {selectedService.type === 'quote' ? 'Request Quote' : 'Confirm & Start Work'}
//             </button>
//             {!isFormValid() && (
//                 <p className="text-center text-xs text-red-500 mt-2">Please upload all required documents to proceed.</p>
//             )}
//           </div>
//         )}
//       </Modal>

//       {/* Notification */}
//       {notification && (
//         <div className={`fixed top-20 right-4 z-50 p-4 rounded-lg shadow-xl border-l-4 animate-in slide-in-from-right bg-white ${notification.type === 'success' ? 'border-green-500' : 'border-red-500'}`}>
//           <h4 className={`font-bold ${notification.type === 'success' ? 'text-green-600' : 'text-red-600'}`}>{notification.title}</h4>
//           <p className="text-sm text-slate-700">{notification.message}</p>
//         </div>
//       )}
//     </div>
//   );
// }