import React, { useState, useEffect, useRef } from 'react';
import { 
  LayoutDashboard, 
  Wallet, 
  CreditCard,
  FileText, 
  Ship, 
  Settings, 
  Bell, 
  Search, 
  Plus, 
  AlertTriangle, 
  TrendingUp, 
  CheckCircle, 
  Clock, 
  ChevronRight,
  ShieldCheck,
  Download,
  FileBox,
  Menu,
  X,
  Filter,
  Folder,
  MoreVertical,
  Calculator,
  Briefcase,
  ArrowUpRight,
  ArrowDownLeft,
  MoreHorizontal,
  Calendar,
  Layers,
  Scale,
  Globe,
  BookOpen,
  UploadCloud,
  FileCheck,
  ClipboardCheck,
  List,
  User,
  PieChart,
  AlertOctagon,
  Landmark,
  Percent,
  ArrowLeft,
  Eye,
  EyeOff,
  Share2,
  File,
  Check,
  Building,
  Copy,
  Lock,
  MapPin,
  MessageSquare,
  Send,
  HelpCircle,
  Paperclip,
  Receipt,
  BarChart3 // Added for Analytics
} from 'lucide-react';

// --- Mock Data ---

const INITIAL_WALLET_BALANCE = 42500;
const INITIAL_CREDIT_LIMIT = 500000;
const INITIAL_CREDIT_USED = 125000;

const CLIENT_PROFILE = {
  name: 'Acme Exports Pvt Ltd',
  type: 'Private Limited',
  constitution: 'Manufacturer Exporter',
  email: 'compliance@acmeexports.com',
  phone: '+91 98765 43210',
  address: 'Plot No. 42, MIDC Industrial Area, Andheri East, Mumbai - 400093',
  statutory: {
    iec: { number: '0388921231', status: 'Active', issueDate: '12-Jan-2010' },
    pan: { number: 'AAZCS1234K', status: 'Verified' },
    gst: { number: '27AAZCS1234K1Z5', status: 'Active', filings: 'Monthly' },
    rcmc: { number: 'EPC/ENG/2024/99', council: 'EEPC', validUntil: '31-Mar-2026', status: 'Active' },
    msme: { number: 'UDYAM-MH-03-001292', status: 'Active' }
  },
  credentials: [
    { id: 1, portal: 'DGFT (Directorate General of Foreign Trade)', url: 'dgft.gov.in', username: 'acme_exports_01', password: 'Password123!', lastLogin: 'Yesterday' },
    { id: 2, portal: 'ICEGATE (Customs)', url: 'icegate.gov.in', username: 'ice_user_99', password: 'Customs#2025', lastLogin: '2 days ago' },
    { id: 3, portal: 'GST Portal', url: 'gst.gov.in', username: 'acme_gst_filing', password: 'TaxPay@2024', lastLogin: 'Oct 20, 2025' },
    { id: 4, portal: 'REX (Registered Exporter System)', url: 'customs.ec.europa.eu', username: 'rex_in_4421', password: 'EuExport$99', lastLogin: 'Never' },
  ],
  branches: [
    { id: 1, type: 'Head Office', location: 'Mumbai, MH', gst: '27AAZCS...' },
    { id: 2, type: 'Factory', location: 'Pune, MH', gst: '27AAZCS...' },
    { id: 3, type: 'Warehouse', location: 'Nhava Sheva, MH', gst: '27AAZCS...' },
  ]
};

// NEW: Analytics Data
const SCHEME_ANALYTICS = {
  epcg: {
    total_licenses: 5,
    duty_saved: '₹ 45.00 L',
    total_obligation: 'USD 3,21,428',
    fulfilled_value: 'USD 1,50,000',
    overall_progress: 46,
    active_licenses: [
      { id: '0229100042', date: '10-Sep-2024', duty: '₹ 45L', obligation: 'USD 321,428', fulfilled: 'USD 150,000', progress: 46, status: 'Active' },
      { id: '0229500110', date: '15-Mar-2023', duty: '₹ 12L', obligation: 'USD 85,000', fulfilled: 'USD 8,000', progress: 9, status: 'Risk' } 
    ]
  },
  advance_auth: {
    total_licenses: 2,
    import_allowed: '5,000 Kg',
    import_consumed: '4,200 Kg',
    export_obligation: '6,500 Kg',
    export_fulfilled: '3,000 Kg',
    export_progress: 46,
    details: [
        { id: '3399120021', product: 'SS Coils', imp_validity: 'Expired', exp_validity: '15-Jul-2026', status: 'Redemption Pending' }
    ]
  },
  benefits: {
    rodtep: { available: '₹ 4,20,000', generated: '₹ 1,50,000', pending: '₹ 2,70,000' },
    dbk: { filed: '₹ 12,50,000', received: '₹ 11,00,000', pending: '₹ 1,50,000' },
    igst: { total_paid: '₹ 50,00,000', refunded: '₹ 45,00,000', error_count: 2, error_amt: '₹ 5,00,000' }
  },
  compliance: {
    egm_pending_count: 12,
    egm_pending_sbs: ['SB_992815', 'SB_992816', 'SB_992817'],
    igst_error_codes: ['SB005 (Invoice Mismatch)', 'SB006 (Gateway EGM)']
  }
};

// Master Request Database
const MASTER_REQUESTS = [
  { 
    reqNo: 'REQ-2025-1008', 
    service: 'Advance Auth Closure', 
    category: 'Licensing', 
    assignedTo: 'Rahul S. (Ops)', 
    status: 'Needs Clarification', // New status
    date: 'Oct 28, 2025', 
    sla: 'Action Required',
    details: {
      description: 'Closure of AA No. 03399212. Pending EODC.',
      amount: '5000 Credits',
      timeline: [
        { status: 'Request Initiated', date: 'Oct 28, 09:00 AM', done: true },
        { status: 'Document Review', date: 'Oct 28, 11:00 AM', done: true },
        { status: 'On Hold - Clarification', date: 'Oct 28, 12:30 PM', done: true }
      ],
      adminNote: 'Please upload the original EODC copy received from DGFT. The current copy is blurry.', // Admin Note
      documents: ['AA_Original_License.pdf']
    }
  },
  { 
    reqNo: 'REQ-2025-1001', 
    service: 'EPCG License', 
    category: 'Licensing', 
    assignedTo: 'Rahul S. (Ops)', 
    status: 'Approval Pending', 
    date: 'Oct 26, 2025', 
    sla: 'On Track',
    details: {
      description: 'Import of Capital Goods for Textile Unit 2.',
      amount: '10000 Credits',
      timeline: [
        { status: 'Request Initiated', date: 'Oct 26, 10:00 AM', done: true },
        { status: 'Documents Verified', date: 'Oct 26, 02:30 PM', done: true },
        { status: 'Draft Application Ready', date: 'Oct 26, 05:45 PM', done: true },
        { status: 'Client Approval', date: 'Pending', done: false },
        { status: 'Submission to DGFT', date: '-', done: false }
      ],
      documents: ['Proforma_Invoice.pdf', 'Nexus_Certificate.pdf']
    }
  },
  { 
    reqNo: 'REQ-2025-1002', 
    service: 'Certificate of Origin', 
    category: 'Transactional', 
    assignedTo: 'Auto-Bot', 
    status: 'Completed', 
    date: 'Oct 27, 2025', 
    sla: 'Met',
    details: {
      description: 'Preferential CoO for Export to UAE.',
      amount: '800 Credits',
      timeline: [
        { status: 'Request Initiated', date: 'Oct 27, 09:00 AM', done: true },
        { status: 'Auto-Verification', date: 'Oct 27, 09:05 AM', done: true },
        { status: 'Certificate Generated', date: 'Oct 27, 09:10 AM', done: true }
      ],
      documents: ['Commercial_Invoice_992.pdf', 'Final_CoO_Cert.pdf']
    }
  },
  { reqNo: 'REQ-2025-1003', service: 'Legal Reply (SCN)', category: 'Legal', assignedTo: 'Adv. Priya M.', status: 'Drafting', date: 'Oct 27, 2025', sla: 'Due Tomorrow', details: { description: 'Reply to Customs SCN dated 15 Oct.', amount: '15000 Credits', timeline: [{ status: 'Started', date: 'Oct 27', done: true }, { status: 'Drafting', date: 'In Progress', done: false }] } },
  { reqNo: 'REQ-2025-1004', service: 'SCOMET Application', category: 'Licensing', assignedTo: 'Vikram Singh', status: 'Submitted', date: 'Oct 20, 2025', sla: 'On Track', details: { description: 'SCOMET for Drone Components export.', amount: '35000 Credits', timeline: [{ status: 'Submitted', date: 'Oct 20', done: true }] } },
  { reqNo: 'REQ-2025-1005', service: 'AD Code Reg', category: 'Transactional', assignedTo: 'Rahul S. (Ops)', status: 'Completed', date: 'Oct 22, 2025', sla: 'Met', details: { description: 'AD Code Reg at Nhava Sheva.', amount: '2500 Credits', timeline: [{ status: 'Done', date: 'Oct 22', done: true }] } },
  { reqNo: 'REQ-2025-1006', service: 'RoDTEP Audit', category: 'Audit', assignedTo: 'System AI', status: 'Completed', date: 'Oct 10, 2025', sla: 'Instant', details: { description: 'Audit for FY 23-24 Q1-Q2.', amount: '5000 Credits', timeline: [{ status: 'Report Generated', date: 'Oct 10', done: true }] } },
  { reqNo: 'REQ-2025-1007', service: 'AEO T2 Cert', category: 'Licensing', assignedTo: 'Ext. Consultant', status: 'In Process', date: 'Sep 15, 2025', sla: 'Delayed', details: { description: 'AEO T2 Certification Process.', amount: '50000 Credits', timeline: [{ status: 'Site Visit Pending', date: '-', done: false }] } },
];

const INITIAL_INVOICES = [
  { id: 'INV-1001', reqNo: 'REQ-2025-1002', service: 'Certificate of Origin', date: 'Oct 27, 2025', amount: 800, status: 'Paid', mode: 'Wallet', dueDate: '-' },
  { id: 'INV-1002', reqNo: 'REQ-2025-1005', service: 'AD Code Reg', date: 'Oct 22, 2025', amount: 2500, status: 'Paid', mode: 'Credit Line', dueDate: '-' },
  { id: 'INV-1003', reqNo: 'REQ-2025-1006', service: 'RoDTEP Audit', date: 'Oct 10, 2025', amount: 5000, status: 'Unpaid', mode: '-', dueDate: 'Nov 10, 2025' },
  { id: 'INV-1004', reqNo: 'REQ-2025-1003', service: 'Legal Reply (SCN)', date: 'Oct 28, 2025', amount: 15000, status: 'Unpaid', mode: '-', dueDate: 'Oct 30, 2025' },
];

const AUDIT_DATA = {
  score: 72,
  riskLevel: 'Medium',
  financialRisk: 1250000,
  lastAuditDate: 'Oct 25, 2025',
  riskCategories: [
    { name: 'DGFT Licensing', score: 90, status: 'Good' },
    { name: 'Customs / e-BRC', score: 45, status: 'Critical' },
    { name: 'GST / LUT', score: 95, status: 'Excellent' }
  ],
  findings: [
    { id: 1, severity: 'High', area: 'Export Obligation', issue: '3 EPCG Licenses Expired without EODC', impact: '₹ 8.5 Lakhs Penalty', status: 'Open' },
    { id: 2, severity: 'High', area: 'Banking (e-BRC)', issue: '12 Shipping Bills > 9 months pending', impact: 'Caution Listing Risk', status: 'Open' },
    { id: 3, severity: 'Medium', area: 'Incentives', issue: 'RoDTEP not claimed for HS 8504', impact: '₹ 2.1 Lakhs Loss', status: 'In Progress' },
    { id: 4, severity: 'Low', area: 'Documentation', issue: 'Incorrect RCMC Validity in system', impact: 'Process Delay', status: 'Fixed' },
  ]
};

const TRADE_SUMMARY = {
  exports: { count: 1240, value: '₹ 145.2 Cr', trend: '+12%', lastUpdated: 'Oct 27, 2025' },
  imports: { count: 315, value: '₹ 58.5 Cr', dutyPaid: '₹ 8.2 Cr', lastUpdated: 'Oct 27, 2025' },
  incentives: { dutySaved: '₹ 12.8 Cr', claimed: '₹ 1.85 Cr', pending: '₹ 4.2 L' }
};

const ALERTS = [
  { id: 1, type: 'critical', message: 'EPCG License #EXM-902 Expiring', subtext: 'Due in 15 Days. Submit Install Cert immediately.', action: 'Fix Now' },
  { id: 2, type: 'critical', message: '12 Shipping Bills Pending e-BRC', subtext: 'Bank realization overdue > 9 months.', action: 'View List' },
  { id: 3, type: 'warning', message: 'New DGFT Notification No. 52/2024', subtext: 'Impacts export of "Onions" & "Non-Basmati Rice".', action: 'Read Brief' },
];

const SERVICE_CATALOG = [
  { id: 'coo', title: 'Certificate of Origin', icon: FileText, cost: 800, sla: '4 Hours', category: 'Transactional', desc: 'Issued digitally based on invoice data.' },
  { id: 'iec', title: 'IEC / RCMC Update', icon: Settings, cost: 1500, sla: '24 Hours', category: 'Transactional', desc: 'Modification of director or address details.' },
  { id: 'adcode', title: 'AD Code Registration', icon: Ship, cost: 2500, sla: '48 Hours', category: 'Transactional', desc: 'Bank AD Code registration at customs port.' },
  { id: 'epcg', title: 'EPCG License', icon: ShieldCheck, cost: 10000, sla: '5-7 Days', category: 'Licensing', desc: 'Duty-free import of capital goods.' },
  { id: 'adv_auth', title: 'Advance Auth', icon: FileBox, cost: 12000, sla: '7 Days', category: 'Licensing', desc: 'Duty-free import of raw materials.' },
  { id: 'scomet', title: 'SCOMET License', icon: Globe, cost: 35000, sla: '30-45 Days', category: 'Licensing', desc: 'Authorization for Dual-Use items.' },
  { id: 'legal_scn', title: 'Legal Reply (SCN)', icon: Scale, cost: 15000, sla: '3 Days', category: 'Legal', desc: 'Drafting reply to Show Cause Notices.' },
  { id: 'risk_audit', title: 'Compliance Health', icon: ActivityIcon, cost: 2500, sla: '24 Hours', category: 'Audit', desc: 'Full risk assessment of data.' },
];

const KANBAN_GROUPS = {
  'Licensing': [
    { id: 'REQ-2025-1001', title: 'EPCG License - Machinery', stage: 'Approval Pending', progress: 60, assignee: 'Rahul S.' },
    { id: 'REQ-2025-1008', title: 'AA Closure', stage: 'Needs Clarification', progress: 40, assignee: 'Rahul S.' },
    { id: 'REQ-2025-1004', title: 'SCOMET - Drone Parts', stage: 'Submitted', progress: 80, assignee: 'Vikram S.' },
  ],
  'Transactional': [
    { id: 'REQ-2025-1002', title: 'CoO - Batch A', stage: 'Completed', progress: 100, assignee: 'Auto-Bot' },
  ],
  'Legal': [
    { id: 'REQ-2025-1003', title: 'SCN Reply - Customs', stage: 'Drafting', progress: 30, assignee: 'Priya M.' },
  ]
};

const VAULT_FOLDERS = [
  { id: 1, name: 'Shipping Bills (2024-25)', count: 842, size: '245 MB', type: 'folder' },
  { id: 2, name: 'Bill of Entries (Imports)', count: 315, size: '180 MB', type: 'folder' },
  { id: 3, name: 'Active Licenses (EPCG/AA)', count: 12, size: '4.5 MB', type: 'folder' },
  { id: 4, name: 'Bank e-BRCs / FIRC', count: 650, size: '42 MB', type: 'folder' },
  { id: 5, name: 'Legal Notices & Replies', count: 8, size: '12 MB', type: 'folder', color: 'red' },
  { id: 6, name: 'Duty Credit Scrips', count: 15, size: '2 MB', type: 'folder' },
];

const VAULT_FILES = {
  1: [ 
    { 
      id: 'SB-1001', name: 'SB_992812.pdf', date: 'Oct 25, 2025', size: '1.2 MB', status: 'Verified', type: 'pdf',
      details: {
        sb_no: '992812', sb_date: '25-Oct-2025',
        fob: 'USD 45,200', port: 'Nhava Sheva', invoice: 'INV-2025-001',
        dbk: '₹ 12,500', igst: '₹ 45,000 (Paid)', rodtep: '₹ 4,200',
        license: 'EPCG: 02291', ebrc: 'Issued'
      }
    },
    { 
      id: 'SB-1002', name: 'SB_992813.pdf', date: 'Oct 24, 2025', size: '1.1 MB', status: 'Pending e-BRC', type: 'pdf',
      details: {
        sb_no: '992813', sb_date: '24-Oct-2025',
        fob: 'USD 12,000', port: 'Mundra', invoice: 'INV-2025-002',
        dbk: '₹ 3,100', igst: 'LUT (Zero Rated)', rodtep: '₹ 950',
        license: 'Adv Auth: AA-992', ebrc: 'Pending'
      }
    },
  ],
  2: [
    {
      id: 'BE-2001', name: 'BE_8821.pdf', date: 'Oct 20, 2025', size: '2.0 MB', status: 'Cleared', type: 'pdf',
      details: {
        boe_no: '882199', boe_date: '20-Oct-2025',
        fob: 'USD 28,500', port: 'Mumbai Air', invoice: 'SUP-US-99',
        dbk: '-', igst: '₹ 28,500', rodtep: '-',
        duty_paid: '₹ 4,20,000', license: 'EPCG Debited', ebrc: '-'
      }
    },
    {
      id: 'BE-2002', name: 'BE_8825.pdf', date: 'Oct 18, 2025', size: '1.8 MB', status: 'Cleared', type: 'pdf',
      details: {
        boe_no: '882511', boe_date: '18-Oct-2025',
        fob: 'USD 10,000', port: 'Nhava Sheva', invoice: 'SUP-CN-12',
        dbk: '-', igst: '₹ 10,500', rodtep: '-',
        duty_paid: '₹ 85,000', license: 'Duty Paid', ebrc: '-'
      }
    }
  ],
  3: [ 
    { 
      id: 'LIC-001', name: 'EPCG_02291.pdf', date: 'Sep 10, 2024', size: '2.5 MB', status: 'Active', type: 'pdf',
      details: {
        lic_no: '0229100042', lic_date: '10-Sep-2024',
        type: 'EPCG', duty_saved: '₹ 45,00,000',
        obligation: 'USD 3,21,428', validity: '10-Sep-2030', status: 'Active - 1st Block'
      }
    },
    { 
      id: 'LIC-002', name: 'AA_339912.pdf', date: 'Jan 15, 2025', size: '1.1 MB', status: 'Redeemed', type: 'pdf',
      details: {
        lic_no: '3399120021', lic_date: '15-Jan-2025',
        type: 'Advance Auth', duty_saved: '₹ 12,00,000',
        obligation: 'Kg 5,000 (SS Coils)', validity: '15-Jul-2026', status: 'Redemption Pending'
      }
    },
  ],
};

const TRANSACTIONS = [
  { id: 'TX-1002', date: 'Oct 27, 2025', desc: 'Legal Consultation (SCN Reply)', type: 'Debit', amount: 15000, status: 'Success', source: 'credit_line' },
  { id: 'TX-1001', date: 'Oct 27, 2025', desc: 'HS Code Classification (1 Item)', type: 'Debit', amount: 500, status: 'Success', source: 'wallet' },
  { id: 'TX-992', date: 'Oct 26, 2025', desc: 'EPCG License Application Fee', type: 'Debit', amount: 10000, status: 'Success', source: 'wallet' },
];

// --- Form & Helper ---
const FORM_CONFIGS = {
  'coo': { 
    fields: [
      { id: 'inv_no', label: 'Commercial Invoice Number', type: 'text', placeholder: 'e.g., INV-2025/001' }, 
      { id: 'country', label: 'Destination Country', type: 'select', options: ['USA', 'UAE', 'UK', 'Germany', 'Australia'] }
    ],
    documents: [
      { id: 'inv', label: 'Commercial Invoice Copy', type: 'file' },
      { id: 'pklist', label: 'Packing List', type: 'file' },
      { id: 'bl', label: 'Bill of Lading / Airway Bill', type: 'file' }
    ]
  },
  'epcg': {
    fields: [
      { id: 'sector', label: 'Industrial Sector', type: 'select', options: ['Textiles', 'Engineering', 'Pharmaceuticals', 'Chemicals'] },
      { id: 'cif', label: 'CIF Value (USD)', type: 'number', placeholder: '0.00' }
    ],
    documents: [
      { id: 'proforma', label: 'Proforma Invoice', type: 'file' },
      { id: 'nexus', label: 'Nexus Certificate (Chartered Engineer)', type: 'file' },
      { id: 'ssi', label: 'MSME / IEM Registration', type: 'file' },
      { id: 'catalogue', label: 'Machine Catalogue / Tech Specs', type: 'file' }
    ]
  },
  'adv_auth': {
    fields: [
      { id: 'product', label: 'Export Product', type: 'text', placeholder: 'e.g., Stainless Steel Coils' }
    ],
    documents: [
      { id: 'sions', label: 'SION Norms Declaration', type: 'file' },
      { id: 'export_order', label: 'Export Order / Contract', type: 'file' }
    ]
  },
  'legal_scn': {
    fields: [
      { id: 'scn_no', label: 'Show Cause Notice No.', type: 'text', placeholder: 'SCN/2025/...' },
      { id: 'date', label: 'Date of Receipt', type: 'date' }
    ],
    documents: [
      { id: 'scn_copy', label: 'Copy of Show Cause Notice', type: 'file' },
      { id: 'prev_reply', label: 'Previous Correspondence', type: 'file' }
    ]
  },
  'default': { 
    fields: [
      { id: 'notes', label: 'Request Details', type: 'textarea', placeholder: 'Please describe your requirement...' }
    ],
    documents: [
      { id: 'general_docs', label: 'Supporting Documents', type: 'file' }
    ]
  }
};

function ActivityIcon(props) { return <TrendingUp {...props} />; }

// --- Components ---

const SidebarItem = ({ icon: Icon, label, active, onClick, collapsed }) => (
  <button 
    onClick={onClick}
    className={`w-full flex items-center gap-3 px-4 py-3 transition-colors ${
      active 
        ? 'bg-blue-50 text-blue-700 border-r-4 border-blue-600' 
        : 'text-slate-600 hover:bg-slate-50'
    }`}
  >
    <Icon size={20} />
    {!collapsed && <span className="font-medium text-sm">{label}</span>}
  </button>
);

const StatusBadge = ({ status }) => {
  const styles = {
    'Completed': 'bg-green-100 text-green-700 border-green-200',
    'Paid': 'bg-green-100 text-green-700 border-green-200',
    'Approval Pending': 'bg-amber-100 text-amber-700 border-amber-200',
    'Needs Clarification': 'bg-orange-100 text-orange-700 border-orange-200',
    'Submitted': 'bg-purple-100 text-purple-700 border-purple-200',
    'Drafting': 'bg-blue-50 text-blue-600 border-blue-200',
    'In Process': 'bg-blue-100 text-blue-700 border-blue-200',
    'Open': 'bg-red-100 text-red-700 border-red-200',
    'Unpaid': 'bg-red-50 text-red-700 border-red-200',
    'Fixed': 'bg-green-100 text-green-700 border-green-200',
    'Active': 'bg-green-100 text-green-700 border-green-200',
    'Issued': 'bg-green-100 text-green-700 border-green-200',
    'Pending': 'bg-amber-100 text-amber-700 border-amber-200',
    'Redeemed': 'bg-blue-100 text-blue-700 border-blue-200',
    'Risk': 'bg-red-50 text-red-700 border-red-200',
  };
  return (
    <span className={`px-2.5 py-1 rounded-full text-xs font-semibold border ${styles[status] || styles['Drafting']}`}>
      {status}
    </span>
  );
};

const Modal = ({ isOpen, onClose, title, children }) => {
  if (!isOpen) return null;
  return (
    <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4 backdrop-blur-sm">
      <div className="bg-white rounded-xl shadow-2xl max-w-lg w-full max-h-[90vh] overflow-y-auto animate-in fade-in zoom-in duration-200">
        <div className="flex justify-between items-center p-5 border-b border-slate-100 sticky top-0 bg-white z-10">
          <h3 className="font-bold text-lg text-slate-800">{title}</h3>
          <button onClick={onClose} className="text-slate-400 hover:text-slate-600">
            <X size={20} />
          </button>
        </div>
        <div className="p-5">
          {children}
        </div>
      </div>
    </div>
  );
};

const ChatBox = ({ isOpen, onClose, contextRequest }) => {
  const [messages, setMessages] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const messagesEndRef = useRef(null);

  // Mock chat history loader based on request ID
  useEffect(() => {
    if (contextRequest) {
      // Simulate fetching different histories
      let history = [];
      if (contextRequest === 'REQ-2025-1008') {
        history = [
          { id: 1, text: "Automated: Request created.", sender: 'system', time: 'Oct 28, 09:00 AM' },
          { id: 2, text: "Hello, we noticed the EODC copy is blurry. Can you please re-upload?", sender: 'bot', time: 'Oct 28, 12:30 PM' }
        ];
      } else if (contextRequest === 'REQ-2025-1001') {
         history = [
          { id: 1, text: "Automated: Request created for EPCG.", sender: 'system', time: 'Oct 26, 10:00 AM' },
          { id: 2, text: "Draft application is ready for your review.", sender: 'bot', time: 'Oct 26, 05:45 PM' }
        ];
      } else {
        history = [
          { id: 1, text: `Ticket ${contextRequest} initialized.`, sender: 'system', time: 'Now' },
          { id: 2, text: "How can we assist you with this specific request?", sender: 'bot', time: 'Now' }
        ];
      }
      setMessages(history);
    }
  }, [contextRequest]);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isOpen]);

  const handleSend = () => {
    if (!inputValue.trim()) return;
    const userMsg = { id: Date.now(), text: inputValue, sender: 'user', time: 'Now' };
    setMessages(prev => [...prev, userMsg]);
    setInputValue('');
    
    // Mock Response
    setTimeout(() => {
      setMessages(prev => [...prev, { id: Date.now(), text: "Received. We've added this note to the record.", sender: 'bot', time: 'Now' }]);
    }, 1000);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed bottom-0 right-0 h-full w-full md:w-[400px] bg-white shadow-2xl border-l border-slate-200 flex flex-col z-50 animate-in slide-in-from-right duration-300">
      <div className="p-4 border-b border-slate-100 bg-slate-50 flex justify-between items-center shadow-sm">
        <div>
          <h3 className="font-bold text-slate-800">Request Chat</h3>
          <p className="text-xs text-blue-600 font-mono font-medium">{contextRequest}</p>
        </div>
        <button onClick={onClose} className="p-2 hover:bg-slate-200 rounded-full"><X size={18} className="text-slate-500" /></button>
      </div>
      
      <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-slate-50/50">
        <div className="flex justify-center">
            <span className="text-[10px] text-slate-400 bg-slate-100 px-2 py-1 rounded-full">This chat is recorded for audit purposes</span>
        </div>
        {messages.map(msg => (
          <div key={msg.id} className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
            <div className={`max-w-[85%] p-3 rounded-xl text-sm shadow-sm ${
              msg.sender === 'user' ? 'bg-blue-600 text-white rounded-br-none' : 
              msg.sender === 'system' ? 'bg-amber-50 border border-amber-100 text-amber-800 text-center w-full text-xs font-semibold py-1' :
              'bg-white border border-slate-200 text-slate-700 rounded-bl-none'
            }`}>
              {msg.text}
              {msg.sender !== 'system' && <div className={`text-[10px] mt-1 text-right ${msg.sender === 'user' ? 'text-blue-100' : 'text-slate-400'}`}>{msg.time}</div>}
            </div>
          </div>
        ))}
        <div ref={messagesEndRef} />
      </div>

      <div className="p-4 border-t border-slate-100 bg-white">
        <div className="flex items-center gap-2">
          <button className="p-2 text-slate-400 hover:text-slate-600 hover:bg-slate-50 rounded-full transition-colors">
            <Paperclip size={20} />
          </button>
          <input 
            type="text" 
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && handleSend()}
            placeholder="Type message..."
            className="flex-1 px-4 py-2 border border-slate-200 rounded-full text-sm focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
          />
          <button onClick={handleSend} className="p-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 shadow-sm transition-colors">
            <Send size={18} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default function EximinqDashboard() {
  const [walletBalance, setWalletBalance] = useState(INITIAL_WALLET_BALANCE);
  const [creditLimit, setCreditLimit] = useState(INITIAL_CREDIT_LIMIT);
  const [creditUsed, setCreditUsed] = useState(INITIAL_CREDIT_USED);
  const [paymentMode, setPaymentMode] = useState('wallet'); // 'wallet' or 'credit_line'

  // Invoice State
  const [invoices, setInvoices] = useState(INITIAL_INVOICES);
  const [selectedInvoice, setSelectedInvoice] = useState(null);

  const [activeTab, setActiveTab] = useState('dashboard');
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [currentVaultFolder, setCurrentVaultFolder] = useState(null);
  
  // Vault Search State
  const [vaultSearchQuery, setVaultSearchQuery] = useState('');

  // Track Requests State
  const [selectedRequest, setSelectedRequest] = useState(null);
  const [statusFilter, setStatusFilter] = useState('All');
  const [isFilterDropdownOpen, setIsFilterDropdownOpen] = useState(false);

  // Profile Credentials State
  const [visiblePasswords, setVisiblePasswords] = useState({});

  // Chat State
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [chatContext, setChatContext] = useState(null);

  // Modals state
  const [showTopUpModal, setShowTopUpModal] = useState(false);
  const [selectedService, setSelectedService] = useState(null);
  const [notification, setNotification] = useState(null);

  const togglePasswordVisibility = (id) => {
    setVisiblePasswords(prev => ({ ...prev, [id]: !prev[id] }));
  };

  const handleServiceRequest = (service) => {
    setSelectedService(service);
  };

  const openChatWithContext = (reqId) => {
    setChatContext(reqId);
    setIsChatOpen(true);
  };

  const handlePayInvoice = (invoice) => {
    setSelectedInvoice(invoice);
  };

  const confirmInvoicePayment = () => {
    if (!selectedInvoice) return;
    const amount = selectedInvoice.amount;

    if (paymentMode === 'wallet') {
      if (walletBalance >= amount) {
        setWalletBalance(prev => prev - amount);
        setInvoices(prev => prev.map(inv => inv.id === selectedInvoice.id ? { ...inv, status: 'Paid', mode: 'Wallet' } : inv));
        showSuccess(`Invoice ${selectedInvoice.id} Paid via Wallet.`);
      } else {
        showError('Insufficient Wallet Balance.');
        return;
      }
    } else {
       if ((creditLimit - creditUsed) >= amount) {
        setCreditUsed(prev => prev + amount);
        setInvoices(prev => prev.map(inv => inv.id === selectedInvoice.id ? { ...inv, status: 'Paid', mode: 'Credit Line' } : inv));
        showSuccess(`Invoice ${selectedInvoice.id} Paid via Credit Line.`);
       } else {
        showError('Credit Limit Exceeded.');
        return;
       }
    }
    setSelectedInvoice(null);
  };

  const confirmRequest = () => {
    const cost = selectedService.cost;
    
    if (paymentMode === 'wallet') {
      if (walletBalance >= cost) {
        setWalletBalance(prev => prev - cost);
        showSuccess(`Processed via Wallet. Deducted ${cost} Credits.`);
      } else {
        showError('Insufficient Wallet Balance. Please top up or switch to Credit Line.');
        return;
      }
    } else {
      // Credit Line Logic
      if ((creditLimit - creditUsed) >= cost) {
        setCreditUsed(prev => prev + cost);
        showSuccess(`Processed via Credit Line. Added ${cost} to Used Limit.`);
      } else {
        showError('Credit Limit Exceeded.');
        return;
      }
    }
    setSelectedService(null);
  };

  const showSuccess = (msg) => {
    setNotification({ type: 'success', title: 'Success', message: msg });
    setTimeout(() => setNotification(null), 4000);
  };

  const showError = (msg) => {
    setNotification({ type: 'error', title: 'Failed', message: msg });
    setTimeout(() => setNotification(null), 4000);
  };

  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text);
    setNotification({ type: 'success', title: 'Copied', message: 'Credential copied to clipboard.' });
    setTimeout(() => setNotification(null), 2000);
  };

  // --- Dynamic Form Renderer ---
  const renderServiceForm = (service) => {
    const config = FORM_CONFIGS[service.id] || FORM_CONFIGS['default'];
    
    return (
      <div className="space-y-6">
        {/* Input Fields Section */}
        <div className="space-y-4">
          {config.fields.map((field) => (
            <div key={field.id} className="space-y-1.5">
              <label className="text-sm font-semibold text-slate-700">{field.label}</label>
              
              {field.type === 'select' && (
                <select className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-lg text-sm focus:ring-2 focus:ring-blue-500 focus:outline-none">
                  <option value="">Select an option...</option>
                  {field.options.map(opt => <option key={opt} value={opt}>{opt}</option>)}
                </select>
              )}

              {field.type === 'text' && (
                <input 
                  type="text" 
                  placeholder={field.placeholder} 
                  className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-lg text-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
                />
              )}

              {field.type === 'number' && (
                <input 
                  type="number" 
                  placeholder={field.placeholder} 
                  className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-lg text-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
                />
              )}

              {field.type === 'date' && (
                <input 
                  type="date"
                  className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-lg text-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
                />
              )}
              
              {field.type === 'textarea' && (
                <textarea 
                  rows={3}
                  placeholder={field.placeholder} 
                  className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-lg text-sm focus:ring-2 focus:ring-blue-500 focus:outline-none resize-none"
                />
              )}
            </div>
          ))}
        </div>

        {/* Documents Section */}
        <div className="space-y-3">
          <h4 className="text-sm font-bold text-slate-800 uppercase tracking-wider flex items-center gap-2">
            <UploadCloud size={16} /> Required Documents
          </h4>
          <p className="text-xs text-slate-500 mb-2">Please upload the following documents separately to proceed.</p>
          
          <div className="grid grid-cols-1 gap-3">
            {config.documents.map((doc) => (
              <div key={doc.id} className="border border-slate-200 rounded-lg p-3 hover:bg-slate-50 transition-colors flex items-center justify-between group">
                <div className="flex items-center gap-3">
                   <div className="p-2 bg-slate-100 rounded-lg text-slate-400 group-hover:bg-white group-hover:text-blue-500">
                     <FileText size={20} />
                   </div>
                   <div>
                     <p className="text-sm font-medium text-slate-700">{doc.label}</p>
                     <p className="text-[10px] text-slate-400">Not Uploaded</p>
                   </div>
                </div>
                <button className="text-xs bg-white border border-slate-200 text-slate-600 px-3 py-1.5 rounded-md shadow-sm font-medium hover:text-blue-600 hover:border-blue-200">
                   Browse
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  };

  // --- Views ---

  const DashboardView = () => (
    <div className="space-y-6 animate-in fade-in duration-500">
      {/* 1. Welcome & High-Level KPIs */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        {/* Health Score - Premium Card */}
        <div className="bg-gradient-to-br from-indigo-900 to-slate-900 rounded-xl p-5 text-white shadow-lg relative overflow-hidden">
          <div className="absolute top-0 right-0 w-24 h-24 bg-white/10 rounded-full blur-2xl -mr-10 -mt-10"></div>
          <div className="flex justify-between items-start">
            <div>
              <p className="text-indigo-200 text-xs font-semibold uppercase tracking-wider">Compliance Score</p>
              <div className="flex items-baseline gap-2 mt-1">
                <span className="text-3xl font-bold">{AUDIT_DATA.score}</span>
                <span className="text-sm text-indigo-300">/ 100</span>
              </div>
            </div>
            <div className="p-2 bg-white/10 rounded-lg backdrop-blur-sm">
              <ActivityIcon size={20} className="text-indigo-200" />
            </div>
          </div>
          <div className="mt-4">
            <div className="w-full bg-indigo-900/50 h-1.5 rounded-full overflow-hidden">
              <div className="bg-indigo-400 h-full rounded-full" style={{ width: `${AUDIT_DATA.score}%` }}></div>
            </div>
            <p className="text-xs text-indigo-300 mt-2 flex items-center gap-1">
              <CheckCircle size={10} /> {AUDIT_DATA.riskLevel} Risk Level
            </p>
          </div>
        </div>

        {/* Dynamic Payment Card */}
        <div className={`rounded-xl p-5 border shadow-sm flex flex-col justify-between transition-colors ${
          paymentMode === 'wallet' ? 'bg-white border-slate-200' : 'bg-slate-50 border-blue-200'
        }`}>
          <div className="flex justify-between items-start">
            <div>
              <p className="text-slate-500 text-xs font-semibold uppercase tracking-wider">
                {paymentMode === 'wallet' ? 'Wallet Balance' : 'Available Credit'}
              </p>
              <h3 className="text-2xl font-bold text-slate-800 mt-1">
                {paymentMode === 'wallet' 
                  ? walletBalance.toLocaleString() 
                  : (creditLimit - creditUsed).toLocaleString()}
              </h3>
            </div>
            <div className={`p-2 rounded-lg ${paymentMode === 'wallet' ? 'bg-blue-50 text-blue-600' : 'bg-purple-50 text-purple-600'}`}>
              {paymentMode === 'wallet' ? <Wallet size={20} /> : <CreditCard size={20} />}
            </div>
          </div>
          <p className="text-xs text-slate-400 mt-1">
            {paymentMode === 'wallet' ? 'Prepaid Credits' : `Used: ${creditUsed.toLocaleString()} / Limit: ${creditLimit.toLocaleString()}`}
          </p>
        </div>

        {/* Pending Actions */}
        <div className="bg-white rounded-xl p-5 border border-slate-200 shadow-sm flex flex-col justify-between">
          <div className="flex justify-between items-start">
            <div>
              <p className="text-slate-500 text-xs font-semibold uppercase tracking-wider">Active Requests</p>
              <h3 className="text-2xl font-bold text-slate-800 mt-1">
                {MASTER_REQUESTS.filter(r => r.status !== 'Completed').length}
              </h3>
            </div>
            <div className="p-2 bg-amber-50 text-amber-600 rounded-lg">
              <Layers size={20} />
            </div>
          </div>
          <p className="text-xs text-slate-400 mt-1">
            1 Action Required
          </p>
        </div>

        {/* Financial Exposure */}
        <div className="bg-white rounded-xl p-5 border border-slate-200 shadow-sm flex flex-col justify-between">
          <div className="flex justify-between items-start">
            <div>
              <p className="text-slate-500 text-xs font-semibold uppercase tracking-wider">Risk Exposure</p>
              <h3 className="text-2xl font-bold text-red-600 mt-1">₹ {(AUDIT_DATA.financialRisk / 100000).toFixed(2)} L</h3>
            </div>
            <div className="p-2 bg-red-50 text-red-600 rounded-lg">
              <AlertOctagon size={20} />
            </div>
          </div>
          <p className="text-xs text-slate-400 mt-1">
            Due to open Export Obligations
          </p>
        </div>
      </div>

      {/* 2. Main Dashboard Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        
        {/* Left Column (2/3 width): Detailed Stats & Activity */}
        <div className="lg:col-span-2 space-y-6">
          
          {/* Urgent Alerts Section */}
          {ALERTS.length > 0 && (
            <div className="bg-red-50 rounded-xl p-4 border border-red-100">
              <h4 className="text-sm font-bold text-red-800 flex items-center gap-2 mb-3">
                <AlertTriangle size={16} /> Urgent Attention Required ({ALERTS.length})
              </h4>
              <div className="space-y-2">
                {ALERTS.map(alert => (
                  <div key={alert.id} className="bg-white p-3 rounded-lg border border-red-100 flex items-center justify-between shadow-sm">
                    <div className="flex items-start gap-3">
                      <div className="mt-1 w-2 h-2 rounded-full bg-red-500 shrink-0"></div>
                      <div>
                        <p className="text-sm font-semibold text-slate-800">{alert.message}</p>
                        <p className="text-xs text-slate-500">{alert.subtext}</p>
                      </div>
                    </div>
                    <button className="text-xs bg-red-100 text-red-700 px-3 py-1.5 rounded-md font-medium hover:bg-red-200 whitespace-nowrap">
                      {alert.action}
                    </button>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Application Status Breakdown (Visual Chart) */}
          <div className="bg-white rounded-xl border border-slate-200 shadow-sm p-6">
            <div className="flex justify-between items-center mb-6">
              <h3 className="font-bold text-slate-800">Application Portfolio</h3>
              <button className="text-xs text-blue-600 font-medium hover:underline">View All</button>
            </div>
            
            <div className="flex items-end gap-2 h-32 mb-4">
              {/* Simulated Bar Chart */}
              <div className="flex-1 flex flex-col justify-end gap-1 group cursor-pointer">
                <div className="text-center text-xs text-slate-500 opacity-0 group-hover:opacity-100 transition-opacity">12</div>
                <div className="bg-blue-100 hover:bg-blue-200 h-[60%] rounded-t-lg w-full transition-all relative"></div>
                <p className="text-[10px] text-center text-slate-400 font-medium uppercase mt-1">Draft</p>
              </div>
              <div className="flex-1 flex flex-col justify-end gap-1 group cursor-pointer">
                <div className="text-center text-xs text-slate-500 opacity-0 group-hover:opacity-100 transition-opacity">5</div>
                <div className="bg-amber-100 hover:bg-amber-200 h-[40%] rounded-t-lg w-full transition-all"></div>
                <p className="text-[10px] text-center text-slate-400 font-medium uppercase mt-1">Pending</p>
              </div>
              <div className="flex-1 flex flex-col justify-end gap-1 group cursor-pointer">
                <div className="text-center text-xs text-slate-500 opacity-0 group-hover:opacity-100 transition-opacity">8</div>
                <div className="bg-purple-100 hover:bg-purple-200 h-[70%] rounded-t-lg w-full transition-all"></div>
                <p className="text-[10px] text-center text-slate-400 font-medium uppercase mt-1">Submitted</p>
              </div>
              <div className="flex-1 flex flex-col justify-end gap-1 group cursor-pointer">
                <div className="text-center text-xs text-slate-500 opacity-0 group-hover:opacity-100 transition-opacity">24</div>
                <div className="bg-green-100 hover:bg-green-200 h-[90%] rounded-t-lg w-full transition-all"></div>
                <p className="text-[10px] text-center text-slate-400 font-medium uppercase mt-1">Approved</p>
              </div>
            </div>
          </div>

          {/* Recent Transactions / Activity */}
          <div className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden">
            <div className="p-5 border-b border-slate-100">
              <h3 className="font-bold text-slate-800">Recent Activity</h3>
            </div>
            <div className="divide-y divide-slate-100">
              {MASTER_REQUESTS.slice(0, 3).map((req) => (
                <div key={req.reqNo} className="p-4 flex items-center justify-between hover:bg-slate-50 transition-colors">
                  <div className="flex items-center gap-3">
                    <div className={`p-2 rounded-full ${
                      req.category === 'Licensing' ? 'bg-purple-50 text-purple-600' :
                      req.category === 'Transactional' ? 'bg-blue-50 text-blue-600' :
                      'bg-slate-50 text-slate-600'
                    }`}>
                      {req.category === 'Licensing' ? <ShieldCheck size={16} /> : <FileText size={16} />}
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-slate-800">{req.service}</p>
                      <p className="text-xs text-slate-500">{req.reqNo} • {req.date}</p>
                    </div>
                  </div>
                  <StatusBadge status={req.status} />
                </div>
              ))}
            </div>
            <button className="w-full py-3 text-xs text-slate-500 font-medium hover:bg-slate-50 hover:text-blue-600 transition-colors">
              View Activity Log
            </button>
          </div>
        </div>

        {/* Right Column (1/3 width): Opportunities & Quick Actions */}
        <div className="space-y-6">
          
          {/* Financial Opportunity Card */}
          <div className="bg-gradient-to-br from-emerald-500 to-teal-600 rounded-xl p-6 text-white shadow-md relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mr-10 -mt-10 transition-transform group-hover:scale-110"></div>
            <div className="relative z-10">
              <div className="flex items-center gap-2 mb-2 opacity-90">
                <TrendingUp size={18} />
                <span className="text-xs font-bold uppercase tracking-wider">Benefit Unclaimed</span>
              </div>
              <h3 className="text-3xl font-bold mb-1">₹ 4.2 Lakhs</h3>
              <p className="text-sm opacity-90 mb-4">Pending RoDTEP (Q3 2024)</p>
              <button className="w-full bg-white text-emerald-700 py-2 rounded-lg text-sm font-bold shadow-sm hover:bg-emerald-50 transition-colors">
                Claim Now
              </button>
            </div>
          </div>

          {/* Quick Actions Grid */}
          <div className="bg-white rounded-xl border border-slate-200 shadow-sm p-5">
            <h3 className="font-bold text-slate-800 mb-4 text-sm">Quick Actions</h3>
            <div className="grid grid-cols-2 gap-3">
              <button onClick={() => setActiveTab('services')} className="p-3 rounded-xl border border-slate-100 bg-slate-50 hover:bg-blue-50 hover:border-blue-200 transition-all flex flex-col items-center gap-2 text-center group">
                <div className="p-2 bg-white rounded-full shadow-sm text-blue-600 group-hover:scale-110 transition-transform">
                  <Plus size={20} />
                </div>
                <span className="text-xs font-medium text-slate-700">New Request</span>
              </button>
              <button onClick={() => setActiveTab('vault')} className="p-3 rounded-xl border border-slate-100 bg-slate-50 hover:bg-blue-50 hover:border-blue-200 transition-all flex flex-col items-center gap-2 text-center group">
                <div className="p-2 bg-white rounded-full shadow-sm text-blue-600 group-hover:scale-110 transition-transform">
                  <UploadCloud size={20} />
                </div>
                <span className="text-xs font-medium text-slate-700">Upload Doc</span>
              </button>
              <button onClick={() => setActiveTab('audit')} className="p-3 rounded-xl border border-slate-100 bg-slate-50 hover:bg-blue-50 hover:border-blue-200 transition-all flex flex-col items-center gap-2 text-center group">
                <div className="p-2 bg-white rounded-full shadow-sm text-blue-600 group-hover:scale-110 transition-transform">
                  <FileCheck size={20} />
                </div>
                <span className="text-xs font-medium text-slate-700">Audit Check</span>
              </button>
              <button className="p-3 rounded-xl border border-slate-100 bg-slate-50 hover:bg-blue-50 hover:border-blue-200 transition-all flex flex-col items-center gap-2 text-center group">
                <div className="p-2 bg-white rounded-full shadow-sm text-blue-600 group-hover:scale-110 transition-transform">
                  <BookOpen size={20} />
                </div>
                <span className="text-xs font-medium text-slate-700">Regulations</span>
              </button>
            </div>
          </div>

          {/* Regulatory Updates Mini */}
          <div className="bg-white rounded-xl border border-slate-200 shadow-sm p-5">
            <h3 className="font-bold text-slate-800 mb-4 text-sm flex items-center gap-2">
              <Globe size={16} className="text-slate-400" /> Regulatory Feed
            </h3>
            <div className="space-y-4">
              <div className="relative pl-4 border-l-2 border-slate-200">
                <div className="absolute -left-[5px] top-1 w-2.5 h-2.5 bg-blue-500 rounded-full border-2 border-white"></div>
                <p className="text-xs font-semibold text-slate-800">DGFT Notif 52/2024</p>
                <p className="text-[10px] text-slate-500 mt-0.5">Restriction on Onion Exports extended.</p>
              </div>
              <div className="relative pl-4 border-l-2 border-slate-200">
                <div className="absolute -left-[5px] top-1 w-2.5 h-2.5 bg-slate-300 rounded-full border-2 border-white"></div>
                <p className="text-xs font-semibold text-slate-800">Exchange Rate Update</p>
                <p className="text-[10px] text-slate-500 mt-0.5">USD @ 84.10 for Import Customs.</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );

  const SchemesAnalyticsView = () => (
    <div className="space-y-8 animate-in fade-in duration-500 pb-10">
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-2xl font-bold text-slate-800">Schemes & Analytics</h2>
          <p className="text-slate-500">Live tracking of export obligations, benefits, and operational health.</p>
        </div>
        <div className="text-sm bg-blue-50 text-blue-700 px-3 py-1 rounded-full font-medium">
           Based on Vault Data
        </div>
      </div>

      {/* 1. Operational Health Cards (IGST & EGM) */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
         {/* IGST Health */}
         <div className="bg-white border border-slate-200 rounded-xl p-5 shadow-sm">
            <div className="flex justify-between items-start mb-4">
               <div>
                  <h4 className="font-bold text-slate-800 flex items-center gap-2">
                     <AlertTriangle size={18} className="text-red-500" /> IGST Refunds
                  </h4>
                  <p className="text-xs text-slate-500 mt-1">Errors preventing refund scroll generation</p>
               </div>
               <div className="text-right">
                  <span className="text-2xl font-bold text-red-600">{SCHEME_ANALYTICS.benefits.igst.error_count}</span>
                  <p className="text-xs text-slate-400">Errors</p>
               </div>
            </div>
            
            <div className="space-y-2 mb-4">
               {SCHEME_ANALYTICS.compliance.igst_error_codes.map((err, idx) => (
                  <div key={idx} className="bg-red-50 text-red-700 px-3 py-2 rounded text-xs font-medium flex justify-between">
                     <span>{err}</span>
                     <span className="font-bold">Action Req.</span>
                  </div>
               ))}
            </div>
            <div className="flex justify-between items-center pt-3 border-t border-slate-100 text-xs">
               <span className="text-slate-500">Stuck Amount:</span>
               <span className="font-bold text-slate-800">{SCHEME_ANALYTICS.benefits.igst.error_amt}</span>
            </div>
         </div>

         {/* EGM Status */}
         <div className="bg-white border border-slate-200 rounded-xl p-5 shadow-sm">
            <div className="flex justify-between items-start mb-4">
               <div>
                  <h4 className="font-bold text-slate-800 flex items-center gap-2">
                     <Ship size={18} className="text-amber-500" /> EGM Status
                  </h4>
                  <p className="text-xs text-slate-500 mt-1">Export General Manifest pending filing</p>
               </div>
               <div className="text-right">
                  <span className="text-2xl font-bold text-amber-600">{SCHEME_ANALYTICS.compliance.egm_pending_count}</span>
                  <p className="text-xs text-slate-400">Shipping Bills</p>
               </div>
            </div>
            
            <div className="space-y-2 mb-4">
               <p className="text-xs text-slate-500">Recent Pending SBs:</p>
               <div className="flex gap-2 flex-wrap">
                  {SCHEME_ANALYTICS.compliance.egm_pending_sbs.map((sb, idx) => (
                     <span key={idx} className="bg-amber-50 text-amber-700 px-2 py-1 rounded text-xs border border-amber-100">{sb}</span>
                  ))}
               </div>
            </div>
            <div className="flex justify-between items-center pt-3 border-t border-slate-100 text-xs">
               <span className="text-slate-500">Impact:</span>
               <span className="font-bold text-slate-800">Delays RoDTEP & DBK</span>
            </div>
         </div>
      </div>

      {/* 2. License Performance (EPCG & Advance Auth) */}
      <section>
         <h3 className="font-bold text-slate-700 mb-4 flex items-center gap-2">
            <ShieldCheck size={20} /> License Performance
         </h3>
         <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            
            {/* EPCG Card */}
            <div className="bg-white rounded-xl border border-slate-200 p-6 shadow-sm">
               <div className="flex justify-between items-center mb-6">
                  <div>
                     <h4 className="font-bold text-lg text-slate-800">EPCG Scheme</h4>
                     <p className="text-xs text-slate-500">{SCHEME_ANALYTICS.epcg.total_licenses} Active Licenses</p>
                  </div>
                  <div className="text-right">
                     <div className="text-xs text-slate-400">Total Obligation</div>
                     <div className="font-bold text-slate-800">{SCHEME_ANALYTICS.epcg.total_obligation}</div>
                  </div>
               </div>

               <div className="space-y-6">
                  {SCHEME_ANALYTICS.epcg.active_licenses.map(lic => (
                     <div key={lic.id}>
                        <div className="flex justify-between text-xs mb-1">
                           <span className="font-medium text-slate-700">Lic #{lic.id}</span>
                           <span className={`font-bold ${lic.progress < 20 ? 'text-red-600' : 'text-green-600'}`}>{lic.progress}% Fulfilled</span>
                        </div>
                        <div className="w-full bg-slate-100 h-2 rounded-full overflow-hidden mb-1">
                           <div className={`h-full rounded-full ${lic.progress < 20 ? 'bg-red-500' : 'bg-green-500'}`} style={{ width: `${lic.progress}%` }}></div>
                        </div>
                        <div className="flex justify-between text-[10px] text-slate-400">
                           <span>Duty Saved: {lic.duty}</span>
                           <span>{lic.fulfilled} / {lic.obligation}</span>
                        </div>
                     </div>
                  ))}
               </div>
            </div>

            {/* Advance Auth Card */}
            <div className="bg-white rounded-xl border border-slate-200 p-6 shadow-sm">
               <div className="flex justify-between items-center mb-6">
                  <div>
                     <h4 className="font-bold text-lg text-slate-800">Advance Authorization</h4>
                     <p className="text-xs text-slate-500">{SCHEME_ANALYTICS.advance_auth.total_licenses} Open Authorizations</p>
                  </div>
                  <div className="text-right">
                     <div className="text-xs text-slate-400">Imp Allowed</div>
                     <div className="font-bold text-slate-800">{SCHEME_ANALYTICS.advance_auth.import_allowed}</div>
                  </div>
               </div>

               <div className="flex items-center justify-center py-4">
                  <div className="relative w-32 h-32">
                     {/* Placeholder for a circular chart using CSS or SVG */}
                     <svg className="w-full h-full" viewBox="0 0 36 36">
                        <path
                          className="text-slate-100"
                          d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="3"
                        />
                        <path
                          className="text-blue-600"
                          strokeDasharray={`${SCHEME_ANALYTICS.advance_auth.export_progress}, 100`}
                          d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="3"
                        />
                     </svg>
                     <div className="absolute inset-0 flex items-center justify-center flex-col">
                        <span className="text-2xl font-bold text-slate-800">{SCHEME_ANALYTICS.advance_auth.export_progress}%</span>
                        <span className="text-[10px] text-slate-500">Export Done</span>
                     </div>
                  </div>
               </div>
               
               <div className="mt-4 text-xs space-y-2 border-t border-slate-100 pt-4">
                  <div className="flex justify-between">
                     <span className="text-slate-500">Imports Consumed:</span>
                     <span className="font-medium text-slate-800">{SCHEME_ANALYTICS.advance_auth.import_consumed}</span>
                  </div>
                  <div className="flex justify-between">
                     <span className="text-slate-500">Exports Fulfilled:</span>
                     <span className="font-medium text-green-600">{SCHEME_ANALYTICS.advance_auth.export_fulfilled} / {SCHEME_ANALYTICS.advance_auth.export_obligation}</span>
                  </div>
               </div>
            </div>

         </div>
      </section>

      {/* 3. Financial Benefits Reconciliation */}
      <section>
         <h3 className="font-bold text-slate-700 mb-4 flex items-center gap-2">
            <Landmark size={20} /> Benefits Reconciliation
         </h3>
         
         <div className="bg-white rounded-xl border border-slate-200 overflow-hidden shadow-sm">
            <div className="grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-slate-100">
               
               {/* RoDTEP Section */}
               <div className="p-6">
                  <div className="flex justify-between items-start mb-4">
                     <h4 className="font-bold text-slate-800">RoDTEP</h4>
                     <span className="bg-green-100 text-green-700 text-[10px] font-bold px-2 py-1 rounded">Script Based</span>
                  </div>
                  
                  <div className="space-y-4">
                     <div className="flex justify-between items-center">
                        <span className="text-sm text-slate-500">Total Available (as per SBs)</span>
                        <span className="text-sm font-bold text-slate-800">{SCHEME_ANALYTICS.benefits.rodtep.available}</span>
                     </div>
                     <div className="w-full bg-slate-100 h-2 rounded-full overflow-hidden flex">
                        <div className="bg-green-500 h-full" style={{ width: '35%' }}></div> {/* Generated */}
                        <div className="bg-slate-300 h-full" style={{ width: '65%' }}></div> {/* Pending */}
                     </div>
                     <div className="flex justify-between text-xs">
                        <div className="flex items-center gap-1">
                           <div className="w-2 h-2 rounded-full bg-green-500"></div>
                           <span className="text-slate-600">Generated: {SCHEME_ANALYTICS.benefits.rodtep.generated}</span>
                        </div>
                        <div className="flex items-center gap-1">
                           <div className="w-2 h-2 rounded-full bg-slate-300"></div>
                           <span className="text-slate-400">Pending: {SCHEME_ANALYTICS.benefits.rodtep.pending}</span>
                        </div>
                     </div>
                     <button className="w-full mt-2 border border-slate-200 text-slate-600 text-xs font-bold py-2 rounded hover:bg-slate-50">
                        Generate Pending Scrips
                     </button>
                  </div>
               </div>

               {/* Drawback Section */}
               <div className="p-6">
                  <div className="flex justify-between items-start mb-4">
                     <h4 className="font-bold text-slate-800">Duty Drawback (DBK)</h4>
                     <span className="bg-blue-100 text-blue-700 text-[10px] font-bold px-2 py-1 rounded">Direct Credit</span>
                  </div>
                  
                  <div className="space-y-4">
                     <div className="flex justify-between items-center">
                        <span className="text-sm text-slate-500">Total Filed</span>
                        <span className="text-sm font-bold text-slate-800">{SCHEME_ANALYTICS.benefits.dbk.filed}</span>
                     </div>
                     <div className="w-full bg-slate-100 h-2 rounded-full overflow-hidden flex">
                        <div className="bg-blue-600 h-full" style={{ width: '88%' }}></div> 
                        <div className="bg-amber-400 h-full" style={{ width: '12%' }}></div> 
                     </div>
                     <div className="flex justify-between text-xs">
                        <div className="flex items-center gap-1">
                           <div className="w-2 h-2 rounded-full bg-blue-600"></div>
                           <span className="text-slate-600">Received: {SCHEME_ANALYTICS.benefits.dbk.received}</span>
                        </div>
                        <div className="flex items-center gap-1">
                           <div className="w-2 h-2 rounded-full bg-amber-400"></div>
                           <span className="text-slate-400">Pending: {SCHEME_ANALYTICS.benefits.dbk.pending}</span>
                        </div>
                     </div>
                     <button className="w-full mt-2 border border-slate-200 text-slate-600 text-xs font-bold py-2 rounded hover:bg-slate-50">
                        View Bank Realization Status
                     </button>
                  </div>
               </div>

            </div>
         </div>
      </section>
    </div>
  );

  const ServiceStoreView = () => (
    <div className="space-y-6 animate-in fade-in duration-500">
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-2xl font-bold text-slate-800">Service Store</h2>
          <p className="text-slate-500">Select a service to initiate. Priority SLA applies.</p>
        </div>
        <div className="text-right">
           <div className="text-sm text-slate-500">Wallet Balance</div>
           <div className="font-bold text-xl text-blue-700">₹ {walletBalance.toLocaleString()}</div>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {SERVICE_CATALOG.map(service => {
          const Icon = service.icon;
          return (
            <div key={service.id} className="bg-white rounded-xl border border-slate-200 p-6 shadow-sm hover:shadow-md transition-all group flex flex-col">
              <div className="flex justify-between items-start mb-4">
                <div className="p-3 bg-blue-50 text-blue-600 rounded-xl">
                  <Icon size={28} />
                </div>
              </div>
              <h3 className="font-bold text-lg text-slate-800 mb-1">{service.title}</h3>
              <p className="text-sm text-slate-500 mb-4 flex-1">{service.desc}</p>
              <div className="flex items-center gap-2 text-xs text-slate-500 mb-6 bg-slate-50 p-2 rounded-lg">
                <Clock size={14} /> 
                <span className="font-medium">SLA: {service.sla}</span>
              </div>
              <div className="flex items-center justify-between pt-4 border-t border-slate-100">
                <div className="font-bold text-xl text-slate-800">{service.cost} <span className="text-xs text-slate-400 font-normal">Credits</span></div>
                <button onClick={() => handleServiceRequest(service)} className="bg-slate-900 text-white px-6 py-2 rounded-lg font-medium hover:bg-blue-600 transition-colors">Request</button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );

  const TrackRequestsView = () => {
    // Filter Logic
    const filteredRequests = statusFilter === 'All'
      ? MASTER_REQUESTS
      : MASTER_REQUESTS.filter(r => r.status === statusFilter);

    const uniqueStatuses = ['All', ...new Set(MASTER_REQUESTS.map(r => r.status))];

    if (selectedRequest) {
      // Find invoice for this request
      const relatedInvoice = invoices.find(inv => inv.reqNo === selectedRequest.reqNo);

      return (
        <div className="space-y-6 animate-in slide-in-from-right duration-300">
          <div className="flex items-center gap-4">
            <button onClick={() => setSelectedRequest(null)} className="p-2 rounded-full hover:bg-slate-200 text-slate-600">
              <ArrowLeft size={24} />
            </button>
            <div>
              <div className="flex items-center gap-3">
                <h2 className="text-2xl font-bold text-slate-800">{selectedRequest.reqNo}</h2>
                <StatusBadge status={selectedRequest.status} />
              </div>
              <p className="text-slate-500 text-sm mt-1">{selectedRequest.service} • {selectedRequest.category}</p>
            </div>
            
            {/* Primary Chat Button in Detail View */}
            <button 
              onClick={() => openChatWithContext(selectedRequest.reqNo)}
              className="ml-auto flex items-center gap-2 bg-blue-600 text-white px-5 py-2.5 rounded-lg font-medium hover:bg-blue-700 shadow-md shadow-blue-200"
            >
              <MessageSquare size={18} /> Chat with Admin
            </button>
          </div>

          {/* Alert for "Action Required" */}
          {selectedRequest.status === 'Needs Clarification' && (
            <div className="bg-orange-50 border border-orange-200 rounded-xl p-4 flex items-start gap-3">
              <AlertTriangle className="text-orange-600 mt-0.5" size={20} />
              <div>
                <h4 className="font-bold text-orange-800">Action Required: Additional Information Needed</h4>
                <p className="text-sm text-orange-700 mt-1">{selectedRequest.details.adminNote}</p>
                <button className="mt-2 text-xs bg-orange-600 text-white px-3 py-1.5 rounded font-medium hover:bg-orange-700">
                  Upload Requested Document
                </button>
              </div>
            </div>
          )}

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2 space-y-6">
              {/* Info Card */}
              <div className="bg-white rounded-xl border border-slate-200 p-6 shadow-sm">
                <h3 className="font-bold text-slate-800 mb-4 border-b border-slate-100 pb-2">Request Details</h3>
                <div className="grid grid-cols-2 gap-y-4 text-sm">
                  <div>
                    <p className="text-slate-500 mb-1">Service Type</p>
                    <p className="font-medium text-slate-800">{selectedRequest.service}</p>
                  </div>
                  <div>
                    <p className="text-slate-500 mb-1">Assigned Agent</p>
                    <p className="font-medium text-slate-800 flex items-center gap-2">
                      <User size={14} /> {selectedRequest.assignedTo}
                    </p>
                  </div>
                  <div>
                    <p className="text-slate-500 mb-1">Initiated On</p>
                    <p className="font-medium text-slate-800">{selectedRequest.date}</p>
                  </div>
                  <div>
                    <p className="text-slate-500 mb-1">Cost</p>
                    <p className="font-medium text-slate-800">{selectedRequest.details?.amount || 'N/A'}</p>
                  </div>
                  <div className="col-span-2">
                    <p className="text-slate-500 mb-1">Description</p>
                    <p className="font-medium text-slate-800 bg-slate-50 p-3 rounded-lg border border-slate-100">
                      {selectedRequest.details?.description || 'No description provided.'}
                    </p>
                  </div>
                </div>
              </div>

              {/* Timeline */}
              <div className="bg-white rounded-xl border border-slate-200 p-6 shadow-sm">
                <h3 className="font-bold text-slate-800 mb-6 flex items-center gap-2">
                  <Clock size={18} /> Activity Timeline
                </h3>
                <div className="relative pl-4 space-y-8">
                  <div className="absolute left-[19px] top-2 bottom-2 w-0.5 bg-slate-200"></div>
                  {selectedRequest.details?.timeline ? (
                    selectedRequest.details.timeline.map((event, index) => (
                      <div key={index} className="relative flex items-start gap-4">
                        <div className={`z-10 w-4 h-4 rounded-full border-2 ${event.done ? 'bg-blue-600 border-blue-600' : 'bg-white border-slate-300'} shrink-0 mt-1`}></div>
                        <div>
                          <p className={`text-sm font-semibold ${event.done ? 'text-slate-800' : 'text-slate-400'}`}>{event.status}</p>
                          <p className="text-xs text-slate-500">{event.date}</p>
                        </div>
                      </div>
                    ))
                  ) : (
                    <p className="text-sm text-slate-400 italic">Timeline not available.</p>
                  )}
                </div>
              </div>
            </div>
            
            {/* Documents & Invoice */}
            <div className="space-y-6">
              <div className="bg-white rounded-xl border border-slate-200 p-6 shadow-sm">
                <h3 className="font-bold text-slate-800 mb-4 flex items-center gap-2">
                  <FileText size={18} /> Documents
                </h3>
                <div className="space-y-3">
                  {selectedRequest.details?.documents?.map((doc, idx) => (
                    <div key={idx} className="flex items-center justify-between p-3 bg-slate-50 rounded-lg border border-slate-100">
                      <span className="text-sm text-slate-700 truncate">{doc}</span>
                      <button className="text-slate-400 hover:text-blue-600"><Download size={16} /></button>
                    </div>
                  ))}
                </div>
                <button className="mt-4 w-full py-2 text-xs font-medium text-blue-600 border border-blue-200 rounded-lg hover:bg-blue-50">
                  Upload Additional Files
                </button>
              </div>

               {relatedInvoice && (
                <div className="bg-white rounded-xl border border-slate-200 p-6 shadow-sm">
                  <h3 className="font-bold text-slate-800 mb-4 flex items-center gap-2">
                    <Receipt size={18} /> Invoice
                  </h3>
                  <div className="p-4 rounded-lg bg-slate-50 border border-slate-100">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-xs font-bold text-slate-500">{relatedInvoice.id}</span>
                      <StatusBadge status={relatedInvoice.status} />
                    </div>
                    <div className="text-xl font-bold text-slate-800 mb-1">
                      {relatedInvoice.amount.toLocaleString()} <span className="text-xs font-normal text-slate-500">Credits</span>
                    </div>
                    <p className="text-xs text-slate-500 mb-3">{relatedInvoice.date}</p>
                    
                    {relatedInvoice.status === 'Unpaid' ? (
                      <button 
                        onClick={() => handlePayInvoice(relatedInvoice)}
                        className="w-full bg-slate-900 text-white text-xs font-bold py-2 rounded hover:bg-slate-700"
                      >
                        Pay Now
                      </button>
                    ) : (
                      <button className="w-full bg-white border border-slate-200 text-slate-600 text-xs font-bold py-2 rounded hover:bg-slate-50 flex items-center justify-center gap-2">
                        <Download size={14} /> Download Receipt
                      </button>
                    )}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      );
    }

    return (
      <div className="space-y-6 animate-in fade-in duration-500">
        <div className="flex justify-between items-center">
           <div><h2 className="text-2xl font-bold text-slate-800">Track Requests</h2></div>
           <div className="relative">
            <button 
              onClick={() => setIsFilterDropdownOpen(!isFilterDropdownOpen)}
              className="flex items-center gap-2 border px-4 py-2 rounded-lg text-slate-600 bg-white hover:bg-slate-50"
            >
               <Filter size={18} /> {statusFilter === 'All' ? 'Filter Status' : statusFilter}
            </button>
            {isFilterDropdownOpen && (
              <div className="absolute right-0 mt-2 w-48 bg-white rounded-xl shadow-xl border border-slate-100 z-20">
                {uniqueStatuses.map(status => (
                  <button key={status} onClick={() => { setStatusFilter(status); setIsFilterDropdownOpen(false); }} className="w-full text-left px-4 py-2 text-sm hover:bg-slate-50">
                    {status}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>
        <div className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden">
          <table className="w-full text-sm text-left">
            <thead className="bg-slate-50 text-slate-500 uppercase text-xs font-semibold">
              <tr>
                <th className="px-6 py-4">Request No</th>
                <th className="px-6 py-4">Service</th>
                <th className="px-6 py-4">Date</th>
                <th className="px-6 py-4">SLA</th>
                <th className="px-6 py-4">Status</th>
                <th className="px-6 py-4">Assigned To</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {filteredRequests.map((req) => (
                <tr key={req.reqNo} onClick={() => setSelectedRequest(req)} className="hover:bg-blue-50/50 cursor-pointer">
                  <td className="px-6 py-4 font-mono font-medium text-blue-600">{req.reqNo}</td>
                  <td className="px-6 py-4">{req.service}</td>
                  <td className="px-6 py-4 text-slate-500">{req.date}</td>
                  <td className="px-6 py-4">
                    <span className={`text-xs font-bold ${req.sla.includes('Action') ? 'text-red-600' : 'text-slate-600'}`}>
                      {req.sla}
                    </span>
                  </td>
                  <td className="px-6 py-4"><StatusBadge status={req.status} /></td>
                  <td className="px-6 py-4">{req.assignedTo}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  };

  const BillingView = () => {
    const totalDue = invoices.filter(i => i.status === 'Unpaid').reduce((acc, curr) => acc + curr.amount, 0);
    const totalPaid = invoices.filter(i => i.status === 'Paid').reduce((acc, curr) => acc + curr.amount, 0);

    return (
      <div className="space-y-6 animate-in fade-in duration-500">
        <div className="flex justify-between items-end">
          <div>
            <h2 className="text-2xl font-bold text-slate-800">Invoices & Billing</h2>
            <p className="text-slate-500">Manage your payments and download tax invoices.</p>
          </div>
          <button className="flex items-center gap-2 bg-white border border-slate-200 text-slate-700 px-4 py-2 rounded-lg hover:bg-slate-50 text-sm font-medium">
            <Download size={18} /> Statement
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm flex flex-col justify-between">
            <div>
              <p className="text-slate-500 text-xs font-semibold uppercase tracking-wider">Total Outstanding</p>
              <h3 className="text-3xl font-bold text-slate-800 mt-2">{totalDue.toLocaleString()} <span className="text-sm font-normal text-slate-400">Cr</span></h3>
            </div>
            {totalDue > 0 && (
              <div className="mt-4 pt-4 border-t border-slate-100">
                <p className="text-xs text-red-600 font-medium flex items-center gap-1">
                  <AlertTriangle size={12} /> Payment Overdue
                </p>
              </div>
            )}
          </div>
          <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
             <p className="text-slate-500 text-xs font-semibold uppercase tracking-wider">Total Paid (YTD)</p>
             <h3 className="text-3xl font-bold text-green-600 mt-2">{totalPaid.toLocaleString()} <span className="text-sm font-normal text-green-200">Cr</span></h3>
          </div>
          <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
             <p className="text-slate-500 text-xs font-semibold uppercase tracking-wider">Payment Method</p>
             <div className="flex items-center gap-3 mt-3">
                <div className="p-2 bg-blue-50 text-blue-600 rounded-lg"><CreditCard size={24} /></div>
                <div>
                   <p className="text-sm font-bold text-slate-800">Default: {paymentMode === 'wallet' ? 'Wallet' : 'Credit Line'}</p>
                   <p className="text-xs text-slate-400">Switch global mode in header</p>
                </div>
             </div>
          </div>
        </div>

        <div className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden">
          <table className="w-full text-sm text-left">
            <thead className="bg-slate-50 text-slate-500 uppercase text-xs font-semibold">
              <tr>
                <th className="px-6 py-4">Invoice ID</th>
                <th className="px-6 py-4">Service Request</th>
                <th className="px-6 py-4">Date</th>
                <th className="px-6 py-4">Amount</th>
                <th className="px-6 py-4">Status</th>
                <th className="px-6 py-4">Due Date</th>
                <th className="px-6 py-4 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {invoices.map((inv) => (
                <tr key={inv.id} className="hover:bg-slate-50 transition-colors">
                  <td className="px-6 py-4 font-mono font-medium text-slate-600">{inv.id}</td>
                  <td className="px-6 py-4">
                    <div className="font-medium text-slate-800">{inv.service}</div>
                    <div className="text-xs text-slate-500 font-mono">{inv.reqNo}</div>
                  </td>
                  <td className="px-6 py-4 text-slate-600">{inv.date}</td>
                  <td className="px-6 py-4 font-bold text-slate-800">{inv.amount.toLocaleString()}</td>
                  <td className="px-6 py-4"><StatusBadge status={inv.status} /></td>
                  <td className="px-6 py-4 text-slate-500 text-xs">{inv.dueDate}</td>
                  <td className="px-6 py-4 text-right">
                    {inv.status === 'Unpaid' ? (
                      <button 
                        onClick={() => handlePayInvoice(inv)}
                        className="bg-slate-900 text-white px-4 py-2 rounded-lg text-xs font-bold hover:bg-slate-700 shadow-sm"
                      >
                        Pay Now
                      </button>
                    ) : (
                      <button className="text-blue-600 hover:text-blue-800 font-medium text-xs flex items-center gap-1 justify-end w-full">
                        <Download size={14} /> Invoice
                      </button>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  };

  const ActiveWorkflowsView = () => (
    <div className="space-y-8 animate-in fade-in duration-500">
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-2xl font-bold text-slate-800">Active Workflows</h2>
          <p className="text-slate-500">Kanban view categorized by service type.</p>
        </div>
      </div>

      <div className="space-y-6">
        {Object.entries(KANBAN_GROUPS).map(([category, items]) => (
          <div key={category} className="bg-white rounded-xl border border-slate-200 p-6">
             <h3 className="text-lg font-bold text-slate-700 mb-4 flex items-center gap-2">
               <Layers size={18} /> {category} Workflows
             </h3>
             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
               {items.map(item => (
                 <div key={item.id} className="border border-slate-200 rounded-lg p-4 hover:shadow-md transition-shadow">
                    <div className="flex justify-between items-start mb-2">
                       <span className="text-[10px] font-mono text-slate-400">{item.id}</span>
                       <StatusBadge status={item.stage} />
                    </div>
                    <h4 className="font-bold text-slate-800 mb-2">{item.title}</h4>
                    <div className="w-full bg-slate-100 h-1.5 rounded-full overflow-hidden mb-3">
                      <div className="bg-blue-600 h-full rounded-full" style={{ width: `${item.progress}%` }}></div>
                    </div>
                    <div className="flex justify-between items-center text-xs text-slate-500">
                       <span className="flex items-center gap-1"><User size={12} /> {item.assignee}</span>
                       <span>{item.progress}% Done</span>
                    </div>
                 </div>
               ))}
             </div>
          </div>
        ))}
      </div>
    </div>
  );

  const ComplianceAuditView = () => (
    <div className="space-y-8 animate-in fade-in duration-500 pb-10">
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-2xl font-bold text-slate-800">Compliance Audit Report</h2>
          <p className="text-slate-500">Financial Liability & Risk Assessment (As on {AUDIT_DATA.lastAuditDate})</p>
        </div>
        <button className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 shadow-sm transition-colors">
           <Download size={18} /> Download PDF Report
        </button>
      </div>

      {/* 1. Trade Pulse Summary */}
      <section>
        <h3 className="text-sm font-bold text-slate-400 uppercase tracking-wider mb-4">Trade Pulse (YTD)</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Exports */}
          <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
             <div className="flex justify-between items-start mb-4">
               <div className="p-2 bg-green-50 text-green-600 rounded-lg"><ArrowUpRight size={24} /></div>
               <span className="text-xs font-medium text-green-600 bg-green-50 px-2 py-1 rounded-full">{TRADE_SUMMARY.exports.trend} vs LY</span>
             </div>
             <div className="space-y-1">
               <p className="text-sm text-slate-500">Total Exports</p>
               <h3 className="text-2xl font-bold text-slate-800">{TRADE_SUMMARY.exports.value}</h3>
               <p className="text-xs text-slate-400 font-medium">{TRADE_SUMMARY.exports.count} Shipping Bills</p>
             </div>
          </div>

          {/* Imports */}
          <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
             <div className="flex justify-between items-start mb-4">
               <div className="p-2 bg-blue-50 text-blue-600 rounded-lg"><ArrowDownLeft size={24} /></div>
             </div>
             <div className="space-y-1">
               <p className="text-sm text-slate-500">Total Imports</p>
               <h3 className="text-2xl font-bold text-slate-800">{TRADE_SUMMARY.imports.value}</h3>
               <p className="text-xs text-slate-400 font-medium">{TRADE_SUMMARY.imports.count} Bills of Entry</p>
             </div>
             <div className="mt-4 pt-4 border-t border-slate-100 flex justify-between items-center text-xs">
               <span className="text-slate-500">Duty Paid:</span>
               <span className="font-bold text-slate-700">{TRADE_SUMMARY.imports.dutyPaid}</span>
             </div>
          </div>

          {/* Incentives & Savings */}
          <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
             <div className="flex justify-between items-start mb-4">
               <div className="p-2 bg-purple-50 text-purple-600 rounded-lg"><Landmark size={24} /></div>
             </div>
             <div className="space-y-1">
               <p className="text-sm text-slate-500">Duty Saved (Schemes)</p>
               <h3 className="text-2xl font-bold text-slate-800">{TRADE_SUMMARY.incentives.dutySaved}</h3>
               <p className="text-xs text-slate-400 font-medium">via EPCG, AA & MOOWR</p>
             </div>
             <div className="mt-4 pt-4 border-t border-slate-100 flex justify-between items-center text-xs">
               <span className="text-slate-500">Incentives Claimed:</span>
               <span className="font-bold text-green-600">{TRADE_SUMMARY.incentives.claimed}</span>
             </div>
          </div>
        </div>
      </section>

      {/* 2. Compliance Health Matrix */}
      <section>
        <h3 className="text-sm font-bold text-slate-400 uppercase tracking-wider mb-4">Risk Breakdown</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* Overall Score */}
          <div className="bg-white p-6 rounded-xl border border-slate-200 flex flex-col items-center justify-center text-center">
             <div className="w-32 h-32 rounded-full border-8 border-amber-500 flex items-center justify-center mb-4 relative">
                <div className="text-3xl font-bold text-slate-800">{AUDIT_DATA.score}</div>
                <div className="absolute -bottom-2 bg-amber-100 text-amber-700 text-xs px-2 py-0.5 rounded-full font-bold">Medium Risk</div>
             </div>
             <p className="text-sm text-slate-500">Compliance Health Score</p>
          </div>

          {/* Financial Liability */}
          <div className="bg-white p-6 rounded-xl border border-slate-200 flex flex-col justify-center">
             <div className="flex items-center gap-3 mb-4">
                <AlertOctagon className="text-red-500" size={24} />
                <h4 className="font-bold text-slate-700">Financial Risk</h4>
             </div>
             <div className="text-3xl font-bold text-red-600 mb-2">₹ {(AUDIT_DATA.financialRisk/100000).toFixed(2)} Lakhs</div>
             <p className="text-xs text-slate-500">Potential penalty exposure if open findings are not resolved within 30 days.</p>
          </div>

          {/* Category Health */}
          <div className="bg-white p-6 rounded-xl border border-slate-200 flex flex-col justify-center space-y-4">
            {AUDIT_DATA.riskCategories.map((cat) => (
              <div key={cat.name}>
                 <div className="flex justify-between text-xs mb-1">
                    <span className="font-medium text-slate-700">{cat.name}</span>
                    <span className={`font-bold ${cat.status === 'Critical' ? 'text-red-600' : 'text-green-600'}`}>{cat.status}</span>
                 </div>
                 <div className="w-full bg-slate-100 h-2 rounded-full overflow-hidden">
                    <div 
                      className={`h-full rounded-full ${cat.score < 60 ? 'bg-red-500' : cat.score < 80 ? 'bg-amber-500' : 'bg-green-500'}`} 
                      style={{ width: `${cat.score}%` }}
                    ></div>
                 </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 3. Findings Table */}
      <section className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden">
        <div className="p-6 border-b border-slate-100 flex justify-between items-center">
          <h3 className="font-bold text-lg text-slate-800">Detailed Audit Findings</h3>
          <div className="flex gap-2">
             <span className="text-xs font-medium text-red-600 bg-red-50 px-3 py-1 rounded-full">2 High Priority</span>
             <span className="text-xs font-medium text-amber-600 bg-amber-50 px-3 py-1 rounded-full">1 Medium Priority</span>
          </div>
        </div>
        <table className="w-full text-sm text-left">
          <thead className="bg-slate-50 text-slate-500 uppercase text-xs font-semibold">
            <tr>
              <th className="px-6 py-4">Severity</th>
              <th className="px-6 py-4">Compliance Area</th>
              <th className="px-6 py-4">Observation / Issue</th>
              <th className="px-6 py-4">Financial Impact</th>
              <th className="px-6 py-4">Status</th>
              <th className="px-6 py-4">Action</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100">
            {AUDIT_DATA.findings.map((item) => (
              <tr key={item.id} className="hover:bg-slate-50">
                <td className="px-6 py-4"><StatusBadge status={item.severity} /></td>
                <td className="px-6 py-4 font-medium text-slate-700">{item.area}</td>
                <td className="px-6 py-4 text-slate-600">{item.issue}</td>
                <td className="px-6 py-4 font-mono font-bold text-red-600">{item.impact}</td>
                <td className="px-6 py-4"><StatusBadge status={item.status} /></td>
                <td className="px-6 py-4">
                  {item.status !== 'Fixed' && (
                    <button className="text-xs bg-slate-900 text-white px-3 py-1.5 rounded hover:bg-slate-700">Fix</button>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>
    </div>
  );

  const SmartVaultView = () => {
    // Filter functionality
    const getFilteredFiles = () => {
      if (!currentVaultFolder || !VAULT_FILES[currentVaultFolder.id]) return [];
      
      const files = VAULT_FILES[currentVaultFolder.id];
      if (!vaultSearchQuery.trim()) return files;

      const query = vaultSearchQuery.toLowerCase();
      return files.filter(file => {
        // Basic match
        if (file.name.toLowerCase().includes(query)) return true;
        if (file.details) {
          // Deep match in details object values
          return Object.values(file.details).some(val => 
            String(val).toLowerCase().includes(query)
          );
        }
        return false;
      });
    };

    const filteredFiles = getFilteredFiles();

    return (
      <div className="space-y-6 animate-in fade-in duration-500">
        
        {currentVaultFolder ? (
          // Detailed File View
          <div className="space-y-6">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
               <div className="flex items-center gap-3">
                 <button onClick={() => { setCurrentVaultFolder(null); setVaultSearchQuery(''); }} className="p-2 hover:bg-slate-200 rounded-full transition-colors text-slate-600">
                   <ArrowLeft size={24} />
                 </button>
                 <div>
                   <h2 className="text-2xl font-bold text-slate-800">{currentVaultFolder.name}</h2>
                   <p className="text-slate-500 text-sm">Browsing files in secure vault</p>
                 </div>
               </div>
               
               <div className="flex items-center gap-3 w-full md:w-auto">
                 <div className="relative flex-1 md:w-64">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={16} />
                    <input 
                      type="text" 
                      placeholder="Search SB No, Date, License..." 
                      value={vaultSearchQuery}
                      onChange={(e) => setVaultSearchQuery(e.target.value)}
                      className="w-full pl-9 pr-4 py-2 border border-slate-200 rounded-lg text-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
                    />
                 </div>
                 <button className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors whitespace-nowrap">
                   <UploadCloud size={18} /> <span className="hidden sm:inline">Upload New</span>
                 </button>
               </div>
            </div>

            <div className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden overflow-x-auto">
               {filteredFiles.length > 0 ? (
                 <table className="w-full text-sm text-left">
                    <thead className="bg-slate-50 text-slate-500 uppercase text-xs font-semibold">
                      <tr>
                        {/* Dynamic Headers based on Folder Type */}
                        {(currentVaultFolder.id === 1) && <th className="px-6 py-4">SB No & Date</th>}
                        {(currentVaultFolder.id === 2) && <th className="px-6 py-4">BOE No & Date</th>}
                        {(currentVaultFolder.id === 3) && <th className="px-6 py-4">License No & Date</th>}
                        
                        {(currentVaultFolder.id !== 1 && currentVaultFolder.id !== 2 && currentVaultFolder.id !== 3) && <th className="px-6 py-4">Document Name</th>}
                        
                        {(currentVaultFolder.id === 1 || currentVaultFolder.id === 2) ? (
                          <>
                            <th className="px-6 py-4">Port & Invoice</th>
                            <th className="px-6 py-4">Value</th>
                            <th className="px-6 py-4">Financials & Duties</th>
                            <th className="px-6 py-4">License / Scheme</th>
                            {currentVaultFolder.id === 1 && <th className="px-6 py-4">e-BRC</th>}
                          </>
                        ) : currentVaultFolder.id === 3 ? (
                          <>
                            <th className="px-6 py-4">Type & Validity</th>
                            <th className="px-6 py-4">Duty Saved</th>
                            <th className="px-6 py-4">Export Obligation</th>
                            <th className="px-6 py-4">Status</th>
                          </>
                        ) : (
                          <>
                            <th className="px-6 py-4">Upload Date</th>
                            <th className="px-6 py-4">Size</th>
                            <th className="px-6 py-4">Status</th>
                          </>
                        )}
                        
                        <th className="px-6 py-4 text-right">Actions</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100">
                       {filteredFiles.map(file => (
                         <tr key={file.id} className="hover:bg-slate-50 group">
                           
                           {/* Specific Primary Column for SB (1), BOE (2), LIC (3) */}
                           {(currentVaultFolder.id === 1) && (
                             <td className="px-6 py-4">
                               <div className="font-bold text-slate-800 text-base">{file.details.sb_no}</div>
                               <div className="text-xs text-slate-500">{file.details.sb_date}</div>
                             </td>
                           )}
                           {(currentVaultFolder.id === 2) && (
                             <td className="px-6 py-4">
                               <div className="font-bold text-slate-800 text-base">{file.details.boe_no}</div>
                               <div className="text-xs text-slate-500">{file.details.boe_date}</div>
                             </td>
                           )}
                           {(currentVaultFolder.id === 3) && (
                             <td className="px-6 py-4">
                               <div className="font-bold text-slate-800 text-base">{file.details.lic_no}</div>
                               <div className="text-xs text-slate-500">{file.details.lic_date}</div>
                             </td>
                           )}

                           {/* Default Primary Column */}
                           {(currentVaultFolder.id !== 1 && currentVaultFolder.id !== 2 && currentVaultFolder.id !== 3) && (
                             <td className="px-6 py-4 font-medium text-slate-800">
                               <div className="flex items-center gap-2">
                                 <FileText className="text-red-500 shrink-0" size={18} /> 
                                 <div>
                                   <div>{file.name}</div>
                                   <div className="text-[10px] text-slate-400 font-normal">{file.date} • {file.size}</div>
                                 </div>
                               </div>
                             </td>
                           )}

                           {/* Detailed Columns for SB (1) and BOE (2) */}
                           {(currentVaultFolder.id === 1 || currentVaultFolder.id === 2) ? (
                             <>
                               <td className="px-6 py-4">
                                 <div className="font-bold text-slate-700">{file.details.port}</div>
                                 <div className="text-xs text-slate-500 font-mono">Inv: {file.details.invoice}</div>
                               </td>
                               <td className="px-6 py-4">
                                 <div className="font-bold text-slate-800">{file.details.fob}</div>
                                 <div className="text-[10px] text-slate-500 uppercase">FOB Value</div>
                               </td>
                               <td className="px-6 py-4 text-xs">
                                 {currentVaultFolder.id === 1 ? (
                                    <div className="space-y-1">
                                      <div className="flex justify-between gap-4"><span className="text-slate-500">DBK:</span> <span className="font-medium">{file.details.dbk}</span></div>
                                      <div className="flex justify-between gap-4"><span className="text-slate-500">IGST:</span> <span className="font-medium">{file.details.igst}</span></div>
                                      <div className="flex justify-between gap-4"><span className="text-slate-500">RoDTEP:</span> <span className="font-medium">{file.details.rodtep}</span></div>
                                    </div>
                                 ) : (
                                    <div className="space-y-1">
                                      <div className="flex justify-between gap-4"><span className="text-slate-500">Duty Paid:</span> <span className="font-bold text-red-600">{file.details.duty_paid}</span></div>
                                      <div className="flex justify-between gap-4"><span className="text-slate-500">IGST:</span> <span className="font-medium">{file.details.igst}</span></div>
                                    </div>
                                 )}
                               </td>
                               <td className="px-6 py-4">
                                 <span className="bg-purple-50 text-purple-700 text-xs px-2 py-1 rounded font-medium border border-purple-100">
                                   {file.details.license}
                                 </span>
                               </td>
                               {currentVaultFolder.id === 1 && (
                                 <td className="px-6 py-4">
                                   <span className={`text-xs font-bold px-2 py-1 rounded-full ${
                                      file.details.ebrc.includes('Issued') ? 'bg-green-100 text-green-700' : 'bg-amber-100 text-amber-700'
                                   }`}>
                                     {file.details.ebrc}
                                   </span>
                                 </td>
                               )}
                             </>
                           ) : currentVaultFolder.id === 3 ? (
                             // Specific Columns for Licenses (3)
                             <>
                               <td className="px-6 py-4">
                                 <div className="font-medium text-slate-800">{file.details.type}</div>
                                 <div className="text-xs text-slate-500">Valid till: {file.details.validity}</div>
                               </td>
                               <td className="px-6 py-4 font-bold text-green-700">
                                 {file.details.duty_saved}
                               </td>
                               <td className="px-6 py-4 font-medium text-slate-700">
                                 {file.details.obligation}
                               </td>
                               <td className="px-6 py-4"><StatusBadge status={file.details.status} /></td>
                             </>
                           ) : (
                             // Default Columns for other folders
                             <>
                               <td className="px-6 py-4 text-slate-500">{file.date}</td>
                               <td className="px-6 py-4 text-slate-500">{file.size}</td>
                               <td className="px-6 py-4"><StatusBadge status={file.status} /></td>
                             </>
                           )}

                           <td className="px-6 py-4 text-right">
                              <div className="flex justify-end gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                                 <button className="p-2 text-slate-400 hover:text-blue-600 hover:bg-blue-50 rounded-lg"><Eye size={16} /></button>
                                 <button className="p-2 text-slate-400 hover:text-green-600 hover:bg-green-50 rounded-lg"><Download size={16} /></button>
                                 <button className="p-2 text-slate-400 hover:text-slate-600 hover:bg-slate-100 rounded-lg"><Share2 size={16} /></button>
                              </div>
                           </td>
                         </tr>
                       ))}
                    </tbody>
                 </table>
               ) : (
                  <div className="p-12 text-center text-slate-400">
                     <Folder size={48} className="mx-auto mb-3 opacity-20" />
                     <p>No documents found matching "{vaultSearchQuery}"</p>
                  </div>
               )}
            </div>
          </div>
        ) : (
          // Folder List View
          <>
            <div className="flex justify-between items-end">
              <div>
                <h2 className="text-2xl font-bold text-slate-800">Smart Vault</h2>
                <p className="text-slate-500">Secure storage for your compliance documents.</p>
              </div>
              <button className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
                <Plus size={18} /> Upload Document
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {VAULT_FOLDERS.map(folder => (
                <div 
                  key={folder.id} 
                  onClick={() => setCurrentVaultFolder(folder)}
                  className={`bg-white p-6 rounded-xl border shadow-sm hover:shadow-md transition-all cursor-pointer group ${folder.color === 'red' ? 'border-red-100' : 'border-slate-200'}`}
                >
                  <div className="flex justify-between items-start mb-4">
                    <Folder size={40} className={`${folder.color === 'red' ? 'text-red-100 group-hover:text-red-400' : 'text-blue-100 group-hover:text-blue-500'} transition-colors fill-current`} />
                    <button className="text-slate-400 hover:text-slate-600">
                      <MoreVertical size={20} />
                    </button>
                  </div>
                  <h3 className={`font-bold mb-1 truncate ${folder.color === 'red' ? 'text-red-700' : 'text-slate-800'}`}>{folder.name}</h3>
                  <div className="flex items-center justify-between text-sm text-slate-500">
                    <span>{folder.count} files</span>
                    <span>{folder.size}</span>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="bg-blue-50 rounded-xl p-8 text-center border border-blue-100 mt-8">
              <h3 className="font-bold text-blue-900 text-lg mb-2">Drag & Drop to Upload</h3>
              <p className="text-blue-700 mb-6 max-w-md mx-auto">
                We automatically categorize your documents (Shipping Bills, e-BRCs, Licenses) using AI.
              </p>
              <div className="inline-flex items-center gap-4">
                <button className="bg-white text-blue-700 border border-blue-200 px-6 py-2 rounded-lg font-medium hover:bg-blue-100 transition-colors">
                  Browse Files
                </button>
              </div>
            </div>
          </>
        )}
      </div>
    );
  };

  const WalletView = () => {
    // Filter transactions based on active payment mode
    const filteredTransactions = TRANSACTIONS.filter(t => t.source === paymentMode);

    return (
      <div className="space-y-6 animate-in fade-in duration-500">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Main Balance Card - Context Aware */}
          <div className={`md:col-span-2 rounded-2xl p-8 text-white relative overflow-hidden shadow-xl ${
            paymentMode === 'wallet' 
              ? 'bg-gradient-to-br from-slate-900 to-slate-800' 
              : 'bg-gradient-to-br from-purple-900 to-indigo-900'
          }`}>
            <div className={`absolute top-0 right-0 p-32 rounded-full blur-3xl opacity-20 -mr-16 -mt-16 ${
              paymentMode === 'wallet' ? 'bg-blue-500' : 'bg-pink-500'
            }`}></div>
            
            <div className="relative z-10">
              <div className="flex justify-between items-start mb-8">
                 <div>
                   <p className="text-white/70 text-sm font-medium mb-1">
                     {paymentMode === 'wallet' ? 'Total Available Balance' : 'Available Credit Limit'}
                   </p>
                   <h2 className="text-4xl font-bold font-mono tracking-tight">
                     {paymentMode === 'wallet' 
                       ? walletBalance.toLocaleString() 
                       : (creditLimit - creditUsed).toLocaleString()
                     } 
                     <span className="text-lg text-white/50 font-sans"> Credits</span>
                   </h2>
                   {paymentMode === 'credit_line' && (
                     <p className="text-sm text-purple-200 mt-2 font-medium">
                       Used: {creditUsed.toLocaleString()} / Total Limit: {creditLimit.toLocaleString()}
                     </p>
                   )}
                 </div>
                 <div className="p-3 bg-white/10 rounded-xl backdrop-blur-sm border border-white/10">
                   {paymentMode === 'wallet' ? <Wallet size={32} className="text-blue-400" /> : <CreditCard size={32} className="text-purple-400" />}
                 </div>
              </div>
              
              <div className="flex gap-4">
                <button 
                  onClick={() => paymentMode === 'wallet' ? setShowTopUpModal(true) : null}
                  className={`${
                    paymentMode === 'wallet' 
                      ? 'bg-blue-600 hover:bg-blue-500' 
                      : 'bg-purple-500 hover:bg-purple-400'
                  } text-white px-6 py-3 rounded-xl font-bold transition-all shadow-lg flex items-center gap-2`}
                >
                  {paymentMode === 'wallet' ? <><Plus size={20} /> Add Credits</> : <><CheckCircle size={20} /> Repay Dues</>}
                </button>
                <button className="bg-white/10 hover:bg-white/20 text-white px-6 py-3 rounded-xl font-medium backdrop-blur-sm border border-white/10 transition-all flex items-center gap-2">
                  <Download size={20} /> Statement
                </button>
              </div>
            </div>
          </div>

          {/* Quick Stats - Context Aware */}
          <div className="space-y-6">
             <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
               <div className="flex items-center gap-3 mb-2">
                 <div className={`p-2 rounded-lg ${
                   paymentMode === 'wallet' ? 'bg-green-50 text-green-600' : 'bg-purple-50 text-purple-600'
                 }`}>
                   {paymentMode === 'wallet' ? <ArrowDownLeft size={20} /> : <Calendar size={20} />}
                 </div>
                 <span className="text-sm text-slate-500 font-medium">
                   {paymentMode === 'wallet' ? 'Last Top-up' : 'Next Bill Date'}
                 </span>
               </div>
               <div className="text-2xl font-bold text-slate-800">
                 {paymentMode === 'wallet' ? '₹ 50,000' : 'Nov 05, 2025'}
               </div>
               <div className="text-xs text-slate-400 mt-1">
                 {paymentMode === 'wallet' ? 'Oct 25, 2025' : 'Billing Cycle: 5th Monthly'}
               </div>
             </div>
             <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
               <div className="flex items-center gap-3 mb-2">
                 <div className="p-2 bg-red-50 text-red-600 rounded-lg"><ArrowUpRight size={20} /></div>
                 <span className="text-sm text-slate-500 font-medium">Usage (This Month)</span>
               </div>
               <div className="text-2xl font-bold text-slate-800">
                 {paymentMode === 'wallet' ? '28,600 Cr' : '15,000 Cr'}
               </div>
               <div className="text-xs text-slate-400 mt-1">16 Transactions</div>
             </div>
          </div>
        </div>

        {/* Transaction Table */}
        <div className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden">
          <div className="p-6 border-b border-slate-100 flex justify-between items-center">
            <h3 className="font-bold text-lg text-slate-800">
              {paymentMode === 'wallet' ? 'Wallet Passbook' : 'Credit Line Statement'}
            </h3>
            <div className="flex gap-2">
               <button className="p-2 text-slate-400 hover:bg-slate-50 rounded-lg"><Filter size={18} /></button>
               <button className="p-2 text-slate-400 hover:bg-slate-50 rounded-lg"><Calendar size={18} /></button>
            </div>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-sm text-left">
              <thead className="bg-slate-50 text-slate-500 uppercase text-xs font-semibold">
                <tr>
                  <th className="px-6 py-4">Transaction ID</th>
                  <th className="px-6 py-4">Date</th>
                  <th className="px-6 py-4">Description</th>
                  <th className="px-6 py-4">Amount</th>
                  <th className="px-6 py-4">Status</th>
                  <th className="px-6 py-4 text-right">Invoice</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {filteredTransactions.length > 0 ? (
                  filteredTransactions.map((tx) => (
                    <tr key={tx.id} className="hover:bg-slate-50 transition-colors">
                      <td className="px-6 py-4 font-mono text-slate-500">{tx.id}</td>
                      <td className="px-6 py-4 text-slate-600">{tx.date}</td>
                      <td className="px-6 py-4 font-medium text-slate-800">{tx.desc}</td>
                      <td className={`px-6 py-4 font-bold font-mono ${tx.type === 'Credit' ? 'text-green-600' : 'text-slate-800'}`}>
                        {tx.type === 'Credit' ? '+' : '-'}{tx.amount.toLocaleString()}
                      </td>
                      <td className="px-6 py-4">
                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                          {tx.status}
                        </span>
                      </td>
                      <td className="px-6 py-4 text-right">
                        <button className="text-blue-600 hover:text-blue-800 font-medium text-xs flex items-center gap-1 justify-end w-full">
                          <Download size={14} /> PDF
                        </button>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="6" className="px-6 py-8 text-center text-slate-400 italic">
                      No transactions found for {paymentMode.replace('_', ' ')}.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  };

  const ClientProfileView = () => (
    <div className="space-y-8 animate-in fade-in duration-500 pb-10">
      
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h2 className="text-2xl font-bold text-slate-800">{CLIENT_PROFILE.name}</h2>
          <p className="text-slate-500 text-sm flex items-center gap-2 mt-1">
            <Building size={14} /> {CLIENT_PROFILE.type} • {CLIENT_PROFILE.constitution}
          </p>
        </div>
        <button className="bg-slate-100 text-slate-600 px-4 py-2 rounded-lg font-medium hover:bg-slate-200 transition-colors text-sm">
          Edit Profile
        </button>
      </div>

      {/* 1. Statutory Identity Card */}
      <section>
        <h3 className="text-sm font-bold text-slate-400 uppercase tracking-wider mb-4 flex items-center gap-2">
          <ShieldCheck size={16} /> Statutory Identity
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          
          {/* IEC Card */}
          <div className="bg-white rounded-xl border border-slate-200 p-5 shadow-sm relative overflow-hidden group hover:border-blue-300 transition-colors">
            <div className="absolute top-0 right-0 p-3 opacity-10 group-hover:opacity-20 transition-opacity">
              <Globe size={64} className="text-blue-600" />
            </div>
            <div className="flex justify-between items-start mb-2">
              <span className="text-xs font-bold text-slate-500 uppercase">IEC Number</span>
              <span className="bg-green-100 text-green-700 text-[10px] font-bold px-2 py-0.5 rounded-full">ACTIVE</span>
            </div>
            <div className="text-2xl font-mono font-bold text-slate-800 mb-4">{CLIENT_PROFILE.statutory.iec.number}</div>
            <div className="text-xs text-slate-400">Issued: {CLIENT_PROFILE.statutory.iec.issueDate}</div>
          </div>

          {/* GST Card */}
          <div className="bg-white rounded-xl border border-slate-200 p-5 shadow-sm relative overflow-hidden group hover:border-purple-300 transition-colors">
            <div className="absolute top-0 right-0 p-3 opacity-10 group-hover:opacity-20 transition-opacity">
              <Landmark size={64} className="text-purple-600" />
            </div>
            <div className="flex justify-between items-start mb-2">
              <span className="text-xs font-bold text-slate-500 uppercase">GSTIN</span>
              <span className="bg-green-100 text-green-700 text-[10px] font-bold px-2 py-0.5 rounded-full">ACTIVE</span>
            </div>
            <div className="text-2xl font-mono font-bold text-slate-800 mb-4">{CLIENT_PROFILE.statutory.gst.number}</div>
            <div className="text-xs text-slate-400">Filing Status: {CLIENT_PROFILE.statutory.gst.filings}</div>
          </div>

          {/* RCMC Card */}
          <div className="bg-white rounded-xl border border-slate-200 p-5 shadow-sm relative overflow-hidden group hover:border-amber-300 transition-colors">
            <div className="absolute top-0 right-0 p-3 opacity-10 group-hover:opacity-20 transition-opacity">
              <FileText size={64} className="text-amber-600" />
            </div>
            <div className="flex justify-between items-start mb-2">
              <span className="text-xs font-bold text-slate-500 uppercase">RCMC ({CLIENT_PROFILE.statutory.rcmc.council})</span>
              <span className="bg-green-100 text-green-700 text-[10px] font-bold px-2 py-0.5 rounded-full">VALID</span>
            </div>
            <div className="text-xl font-mono font-bold text-slate-800 mb-4 truncate" title={CLIENT_PROFILE.statutory.rcmc.number}>
              {CLIENT_PROFILE.statutory.rcmc.number}
            </div>
            <div className="text-xs text-slate-400">Valid Until: {CLIENT_PROFILE.statutory.rcmc.validUntil}</div>
          </div>

        </div>
      </section>

      {/* 2. Secure Credentials Vault */}
      <section>
        <div className="flex justify-between items-end mb-4">
          <h3 className="text-sm font-bold text-slate-400 uppercase tracking-wider flex items-center gap-2">
            <Lock size={16} /> Government Portal Credentials
          </h3>
          <span className="text-xs text-slate-400 bg-slate-100 px-2 py-1 rounded flex items-center gap-1">
            <Lock size={10} /> End-to-End Encrypted
          </span>
        </div>
        
        <div className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden">
          <table className="w-full text-sm text-left">
            <thead className="bg-slate-50 text-slate-500 uppercase text-xs font-semibold">
              <tr>
                <th className="px-6 py-4">Portal Name</th>
                <th className="px-6 py-4">User ID</th>
                <th className="px-6 py-4">Password</th>
                <th className="px-6 py-4">Last Login</th>
                <th className="px-6 py-4 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {CLIENT_PROFILE.credentials.map((cred) => (
                <tr key={cred.id} className="hover:bg-slate-50 group transition-colors">
                  <td className="px-6 py-4">
                    <div className="font-medium text-slate-800">{cred.portal}</div>
                    <div className="text-xs text-slate-400 font-mono">{cred.url}</div>
                  </td>
                  <td className="px-6 py-4 font-mono text-slate-600">
                    <div className="flex items-center gap-2">
                      {cred.username}
                      <button 
                        onClick={() => copyToClipboard(cred.username)}
                        className="text-slate-300 hover:text-blue-600 opacity-0 group-hover:opacity-100 transition-opacity"
                        title="Copy Username"
                      >
                        <Copy size={14} />
                      </button>
                    </div>
                  </td>
                  <td className="px-6 py-4 font-mono">
                    <div className="flex items-center gap-2">
                      <span className="text-slate-600">
                        {visiblePasswords[cred.id] ? cred.password : '••••••••••••'}
                      </span>
                      <button 
                        onClick={() => togglePasswordVisibility(cred.id)}
                        className="text-slate-400 hover:text-blue-600 focus:outline-none"
                      >
                        {visiblePasswords[cred.id] ? <EyeOff size={16} /> : <Eye size={16} />}
                      </button>
                      <button 
                        onClick={() => copyToClipboard(cred.password)}
                        className="text-slate-300 hover:text-blue-600 opacity-0 group-hover:opacity-100 transition-opacity"
                        title="Copy Password"
                      >
                        <Copy size={14} />
                      </button>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-slate-500 text-xs">
                    {cred.lastLogin}
                  </td>
                  <td className="px-6 py-4 text-right">
                    <button className="text-xs font-medium text-blue-600 hover:bg-blue-50 px-3 py-1.5 rounded transition-colors">
                      Update
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="bg-slate-50 p-3 text-center border-t border-slate-100">
            <button className="text-xs font-medium text-slate-500 hover:text-blue-600 flex items-center justify-center gap-1 w-full">
              <Plus size={14} /> Add New Portal Credential
            </button>
          </div>
        </div>
      </section>

      {/* 3. Branch Details */}
      <section>
        <h3 className="text-sm font-bold text-slate-400 uppercase tracking-wider mb-4 flex items-center gap-2">
          <MapPin size={16} /> Registered Branches
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {CLIENT_PROFILE.branches.map(branch => (
            <div key={branch.id} className="bg-white p-4 rounded-lg border border-slate-200 flex items-start gap-3">
              <div className="p-2 bg-slate-100 rounded-lg text-slate-500">
                <Building size={18} />
              </div>
              <div>
                <p className="font-bold text-slate-800 text-sm">{branch.type}</p>
                <p className="text-xs text-slate-500">{branch.location}</p>
                <p className="text-[10px] text-slate-400 font-mono mt-1">GST: {branch.gst}</p>
              </div>
            </div>
          ))}
          <button className="border-2 border-dashed border-slate-200 rounded-lg flex flex-col items-center justify-center p-4 hover:bg-slate-50 hover:border-slate-300 transition-colors text-slate-400 hover:text-slate-600">
            <Plus size={24} className="mb-1" />
            <span className="text-xs font-medium">Add Branch</span>
          </button>
        </div>
      </section>

    </div>
  );

  // --- Main Render ---

  return (
    <div className="min-h-screen bg-slate-50 flex font-sans text-slate-800">
      
      {/* Mobile Overlay */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 bg-black/50 z-40 lg:hidden" onClick={() => setIsMobileMenuOpen(false)} />
      )}

      {/* Sidebar */}
      <aside className={`
        fixed lg:static inset-y-0 left-0 z-50 bg-white border-r border-slate-200 transition-all duration-300 flex flex-col
        ${isSidebarCollapsed ? 'w-20' : 'w-64'}
        ${isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
      `}>
        <div className="h-16 flex items-center justify-center border-b border-slate-100">
          <div className="flex items-center gap-2 font-bold text-xl text-blue-900 tracking-tight">
            <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center text-white">E</div>
            {!isSidebarCollapsed && <span>EXIMINQ</span>}
          </div>
        </div>

        <div className="flex-1 py-6 space-y-1 overflow-y-auto">
          <SidebarItem icon={LayoutDashboard} label="Command Center" active={activeTab === 'dashboard'} onClick={() => setActiveTab('dashboard')} collapsed={isSidebarCollapsed} />
          <SidebarItem icon={List} label="Track Requests" active={activeTab === 'track_requests'} onClick={() => setActiveTab('track_requests')} collapsed={isSidebarCollapsed} />
          <SidebarItem icon={Receipt} label="Invoices & Billing" active={activeTab === 'billing'} onClick={() => setActiveTab('billing')} collapsed={isSidebarCollapsed} />
          <SidebarItem icon={BarChart3} label="Schemes & Analytics" active={activeTab === 'schemes'} onClick={() => setActiveTab('schemes')} collapsed={isSidebarCollapsed} />
          <SidebarItem icon={Layers} label="Active Workflows" active={activeTab === 'workflows'} onClick={() => setActiveTab('workflows')} collapsed={isSidebarCollapsed} />
          <SidebarItem icon={FileBox} label="Service Store" active={activeTab === 'services'} onClick={() => setActiveTab('services')} collapsed={isSidebarCollapsed} />
          <SidebarItem icon={ClipboardCheck} label="Compliance Audit" active={activeTab === 'audit'} onClick={() => setActiveTab('audit')} collapsed={isSidebarCollapsed} />
          <SidebarItem icon={FileText} label="Smart Vault" active={activeTab === 'vault'} onClick={() => setActiveTab('vault')} collapsed={isSidebarCollapsed} />
          <SidebarItem icon={Wallet} label="Wallet" active={activeTab === 'wallet'} onClick={() => setActiveTab('wallet')} collapsed={isSidebarCollapsed} />
          
          <div className="my-2 border-t border-slate-100 mx-4"></div>
          
          <SidebarItem icon={User} label="Company Profile" active={activeTab === 'profile'} onClick={() => setActiveTab('profile')} collapsed={isSidebarCollapsed} />
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 flex flex-col min-w-0">
        <header className="h-16 bg-white border-b border-slate-200 flex items-center justify-between px-4 lg:px-8 sticky top-0 z-30">
          <button className="lg:hidden p-2 text-slate-600" onClick={() => setIsMobileMenuOpen(true)}>
            <Menu size={24} />
          </button>
          <div className="flex-1 px-4 hidden md:block">
            <h1 className="text-lg font-bold text-slate-800 capitalize">
              {activeTab.replace('_', ' ')}
            </h1>
          </div>
          <div className="flex items-center gap-4">
            
            {/* Payment Toggle Switch */}
            <div className="hidden md:flex bg-slate-100 rounded-lg p-1 border border-slate-200">
              <button 
                onClick={() => setPaymentMode('wallet')}
                className={`px-3 py-1.5 text-xs font-bold rounded-md transition-all ${paymentMode === 'wallet' ? 'bg-white text-blue-600 shadow-sm' : 'text-slate-500 hover:text-slate-700'}`}
              >
                Wallet
              </button>
              <button 
                onClick={() => setPaymentMode('credit_line')}
                className={`px-3 py-1.5 text-xs font-bold rounded-md transition-all ${paymentMode === 'credit_line' ? 'bg-white text-purple-600 shadow-sm' : 'text-slate-500 hover:text-slate-700'}`}
              >
                Credit Line
              </button>
            </div>

            <div className={`flex items-center gap-3 px-3 py-1.5 rounded-full border ${paymentMode === 'wallet' ? 'bg-blue-50 border-blue-100' : 'bg-purple-50 border-purple-100'}`}>
              <div className="flex flex-col items-end leading-none">
                <span className={`text-[10px] font-bold uppercase ${paymentMode === 'wallet' ? 'text-blue-400' : 'text-purple-400'}`}>
                  {paymentMode === 'wallet' ? 'Balance' : 'Available'}
                </span>
                <span className={`text-xs font-bold ${paymentMode === 'wallet' ? 'text-blue-700' : 'text-purple-700'}`}>
                  ₹ {paymentMode === 'wallet' ? walletBalance.toLocaleString() : (creditLimit - creditUsed).toLocaleString()}
                </span>
              </div>
              {paymentMode === 'wallet' && (
                <button onClick={() => setShowTopUpModal(true)} className="bg-blue-600 text-white p-1 rounded-full"><Plus size={12} /></button>
              )}
            </div>

            <div className="w-8 h-8 bg-slate-200 rounded-full flex items-center justify-center font-bold text-slate-600">AE</div>
          </div>
        </header>

        {/* Dynamic Content */}
        <div className="flex-1 overflow-auto p-4 lg:p-8">
          {activeTab === 'dashboard' && <DashboardView />}
          {activeTab === 'track_requests' && <TrackRequestsView />}
          {activeTab === 'billing' && <BillingView />}
          {activeTab === 'schemes' && <SchemesAnalyticsView />}
          {activeTab === 'workflows' && <ActiveWorkflowsView />}
          {activeTab === 'audit' && <ComplianceAuditView />}
          {activeTab === 'services' && <ServiceStoreView />}
          {activeTab === 'vault' && <SmartVaultView />}
          {activeTab === 'wallet' && <WalletView />}
          {activeTab === 'profile' && <ClientProfileView />}
        </div>
      </main>

      {/* Chat Box Component (Drawer) */}
      <ChatBox isOpen={isChatOpen} onClose={() => setIsChatOpen(false)} contextRequest={chatContext} />

      {/* Top Up Modal */}
      <Modal isOpen={showTopUpModal} onClose={() => setShowTopUpModal(false)} title="Add Credits">
        <div className="space-y-4">
          <p className="text-sm text-slate-600">Add funds to your wallet to pay for services instantly.</p>
          <button onClick={() => { setWalletBalance(prev => prev + 10000); setShowTopUpModal(false); }} className="w-full bg-blue-600 text-white py-3 rounded-lg font-bold hover:bg-blue-700">Add ₹ 10,000</button>
        </div>
      </Modal>

      {/* Invoice Payment Modal */}
      <Modal isOpen={!!selectedInvoice} onClose={() => setSelectedInvoice(null)} title="Pay Invoice">
        {selectedInvoice && (
          <div className="space-y-6">
            <div className="flex justify-between items-start pb-4 border-b border-slate-100">
               <div>
                  <h4 className="font-bold text-lg text-slate-800">{selectedInvoice.service}</h4>
                  <p className="text-sm text-slate-500 font-mono">{selectedInvoice.reqNo}</p>
               </div>
               <div className="text-right">
                  <p className="text-xs text-slate-500 uppercase font-bold">Total Due</p>
                  <h2 className="text-2xl font-bold text-slate-800">{selectedInvoice.amount.toLocaleString()}</h2>
               </div>
            </div>

            <div className="bg-slate-50 p-4 rounded-xl border border-slate-200">
               <p className="text-sm font-semibold text-slate-700 mb-3">Select Payment Method</p>
               <div className="flex gap-2">
                 <button 
                   onClick={() => setPaymentMode('wallet')} 
                   className={`flex-1 py-3 px-4 rounded-lg border text-sm font-bold transition-all flex flex-col items-center gap-1 ${paymentMode === 'wallet' ? 'bg-white border-blue-500 text-blue-600 shadow-sm ring-2 ring-blue-100' : 'bg-slate-100 border-transparent text-slate-500 hover:bg-white hover:border-slate-200'}`}
                 >
                    <Wallet size={20} />
                    Wallet
                 </button>
                 <button 
                   onClick={() => setPaymentMode('credit_line')} 
                   className={`flex-1 py-3 px-4 rounded-lg border text-sm font-bold transition-all flex flex-col items-center gap-1 ${paymentMode === 'credit_line' ? 'bg-white border-purple-500 text-purple-600 shadow-sm ring-2 ring-purple-100' : 'bg-slate-100 border-transparent text-slate-500 hover:bg-white hover:border-slate-200'}`}
                 >
                    <CreditCard size={20} />
                    Credit Line
                 </button>
               </div>
               <div className="mt-4 flex justify-between items-center text-xs">
                 <span className="text-slate-500">Available Balance:</span>
                 <span className={`font-bold ${paymentMode === 'wallet' ? 'text-blue-600' : 'text-purple-600'}`}>
                    ₹ {paymentMode === 'wallet' ? walletBalance.toLocaleString() : (creditLimit - creditUsed).toLocaleString()}
                 </span>
               </div>
            </div>

            <button onClick={confirmInvoicePayment} className="w-full bg-slate-900 text-white py-3 rounded-lg font-bold hover:bg-slate-800 transition-colors">
              Confirm Payment of ₹ {selectedInvoice.amount.toLocaleString()}
            </button>
          </div>
        )}
      </Modal>

      {/* Service Request Modal */}
      <Modal isOpen={!!selectedService} onClose={() => setSelectedService(null)} title={selectedService?.title || 'Request'}>
        {selectedService && (
          <div>
            <div className="mb-6">
              {renderServiceForm(selectedService)}
            </div>

            <div className="bg-slate-50 p-4 rounded-lg mb-4 text-sm space-y-2">
              <div className="flex justify-between">
                <span className="text-slate-600">Payment Mode:</span>
                <span className="font-bold uppercase text-slate-800">{paymentMode.replace('_', ' ')}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-600">Cost:</span>
                <span className="font-bold text-red-600">- {selectedService.cost}</span>
              </div>
              <div className="flex justify-between pt-2 border-t border-slate-200">
                <span className="text-slate-600">{paymentMode === 'wallet' ? 'Remaining Balance' : 'Remaining Limit'}:</span>
                <span className="font-bold text-blue-600">
                  ₹ {paymentMode === 'wallet' 
                      ? (walletBalance - selectedService.cost).toLocaleString() 
                      : (creditLimit - creditUsed - selectedService.cost).toLocaleString()}
                </span>
              </div>
            </div>
            <button onClick={confirmRequest} className="w-full bg-slate-900 text-white py-3 rounded-lg font-bold hover:bg-slate-800">
              Confirm & Start Work
            </button>
          </div>
        )}
      </Modal>

      {/* Notification */}
      {notification && (
        <div className={`fixed top-20 right-4 z-50 p-4 rounded-lg shadow-xl border-l-4 animate-in slide-in-from-right bg-white ${notification.type === 'success' ? 'border-green-500' : 'border-red-500'}`}>
          <h4 className={`font-bold ${notification.type === 'success' ? 'text-green-600' : 'text-red-600'}`}>{notification.title}</h4>
          <p className="text-sm text-slate-700">{notification.message}</p>
        </div>
      )}
    </div>
  );
}






//Admin Dashboard

// import React, { useState, useEffect, useMemo } from 'react';
// import { 
//   LayoutDashboard, 
//   Users, 
//   FileText, 
//   Settings, 
//   Bell, 
//   Search, 
//   CheckCircle, 
//   XCircle, 
//   Clock, 
//   MoreVertical, 
//   ArrowUpRight, 
//   ArrowDownLeft, 
//   Filter, 
//   MessageSquare, 
//   ChevronRight, 
//   Shield, 
//   Briefcase, 
//   DollarSign, 
//   PieChart, 
//   Activity, 
//   Menu, 
//   X, 
//   LogOut, 
//   Download, 
//   AlertCircle, 
//   Eye, 
//   EyeOff,
//   Send, 
//   UserCheck, 
//   Building, 
//   CreditCard, 
//   Wallet, 
//   Globe, 
//   Lock,
//   Layers, 
//   Plus,
//   Copy,
//   Edit2,
//   Trash2,
//   FileCheck,
//   AlertTriangle,
//   Save,
//   BarChart3,
//   TrendingUp,
//   Calendar,
//   Flag,
//   PenTool,
//   Hash,
//   FileBox,
//   Megaphone,
//   RefreshCw,
//   FileInput,
//   Folder,
//   ChevronDown,
//   Receipt,
//   Landmark,
//   UploadCloud,
//   ChevronUp,
//   AlertOctagon,
//   Wrench
// } from 'lucide-react';

// // --- MOCK DATA ---

// const ADMIN_STATS = {
//   totalRevenue: '₹ 1.2 Cr',
//   revenueGrowth: '+12.5%',
//   activeClients: 142,
//   pendingRequests: 18,
//   avgSlaCompliance: '94%',
//   systemHealth: 'Optimal',
//   agentsOnline: 8
// };

// const COMPLIANCE_AUDITS_DB = [
//   {
//     clientId: 'C-001',
//     clientName: 'Acme Exports Pvt Ltd',
//     score: 72,
//     riskLevel: 'Medium',
//     financialRisk: 1250000,
//     lastAuditDate: 'Oct 25, 2025',
//     categories: [
//       { name: 'DGFT Licensing', score: 90, status: 'Good' },
//       { name: 'Customs / e-BRC', score: 45, status: 'Critical' },
//       { name: 'GST / LUT', score: 95, status: 'Excellent' }
//     ],
//     findings: [
//       { id: 1, severity: 'High', area: 'Export Obligation', issue: '3 EPCG Licenses Expired without EODC', impact: '₹ 8.5 Lakhs Penalty', status: 'Open' },
//       { id: 2, severity: 'High', area: 'Banking (e-BRC)', issue: '12 Shipping Bills > 9 months pending', impact: 'Caution Listing Risk', status: 'Open' },
//       { id: 3, severity: 'Medium', area: 'Incentives', issue: 'RoDTEP not claimed for HS 8504', impact: '₹ 2.1 Lakhs Loss', status: 'In Progress' }
//     ]
//   },
//   {
//     clientId: 'C-002',
//     clientName: 'Global Traders Inc',
//     score: 45,
//     riskLevel: 'High',
//     financialRisk: 4500000,
//     lastAuditDate: 'Oct 20, 2025',
//     categories: [
//       { name: 'DGFT Licensing', score: 30, status: 'Critical' },
//       { name: 'Customs / e-BRC', score: 50, status: 'Risk' },
//       { name: 'GST / LUT', score: 60, status: 'Fair' }
//     ],
//     findings: [
//       { id: 1, severity: 'Critical', area: 'Advance Auth', issue: 'Unaccounted Imports vs Exports', impact: '₹ 35 Lakhs Duty + Interest', status: 'Open' },
//       { id: 2, severity: 'High', area: 'GST', issue: 'ITC Mismatch in 3B vs 2A', impact: 'Notice Received', status: 'Open' }
//     ]
//   }
// ];

// const AGENTS_DB = [
//   { 
//     id: 'A-001', name: 'Rahul S.', role: 'Senior Ops', activeTasks: 12, completedThisMonth: 45, productivity: 94, avgCompletionTime: '1.2 Days', rating: 4.8, status: 'Online',
//     tasks: [
//       { 
//           id: 'REQ-1001', service: 'EPCG License', client: 'Acme Exports', status: 'In Process', sla: 'On Track', due: '2 Days',
//           clientDocs: [
//               { name: 'Proforma_Invoice.pdf', date: 'Oct 26, 2025' },
//               { name: 'Nexus_Certificate.pdf', date: 'Oct 26, 2025' }
//           ]
//       },
//       { 
//           id: 'REQ-1008', service: 'AA Closure', client: 'Acme Exports', status: 'Needs Clarification', sla: 'Delayed', due: 'Overdue 4h',
//           clientDocs: [
//               { name: 'AA_Original_License.pdf', date: 'Oct 28, 2025' }
//           ]
//       },
//     ]
//   },
//   { 
//     id: 'A-002', name: 'Vikram Singh', role: 'Licensing Expert', activeTasks: 8, completedThisMonth: 32, productivity: 88, avgCompletionTime: '2.5 Days', rating: 4.5, status: 'Busy',
//     tasks: [
//       { 
//           id: 'REQ-1004', service: 'SCOMET', client: 'Global Traders', status: 'Submitted', sla: 'On Track', due: '5 Days',
//           clientDocs: [
//               { name: 'End_User_Certificate.pdf', date: 'Oct 20, 2025' },
//               { name: 'Tech_Specs.pdf', date: 'Oct 20, 2025' }
//           ]
//       },
//     ]
//   },
//   { id: 'A-003', name: 'Priya M.', role: 'Legal Consultant', activeTasks: 15, completedThisMonth: 28, productivity: 96, avgCompletionTime: '3.0 Days', rating: 4.9, status: 'Online', tasks: [] },
//   { id: 'A-004', name: 'Auto-Bot', role: 'Automation', activeTasks: 120, completedThisMonth: 500, productivity: 100, avgCompletionTime: '0.01 Days', rating: 5.0, status: 'Online', tasks: [] },
// ];

// const CLIENTS_DB = [
//   { 
//     id: 'C-001', 
//     name: 'Acme Exports Pvt Ltd', 
//     iec: '0588291022',
//     type: 'Private Limited',
//     tier: 'Platinum', 
//     walletBalance: 42500, 
//     creditLimit: 500000, 
//     creditUsed: 125000, 
//     email: 'compliance@acmeexports.com',
//     phone: '+91 98765 43210',
//     address: 'Plot 42, MIDC, Mumbai',
//     status: 'Active',
//     riskScore: 72,
//     serviceStats: { submitted: 15, inProcess: 5, completed: 120, needsAction: 2 },
//     monthlyUsage: [24, 30, 45, 32, 28, 50],
//     statutory: {
//         pan: 'AAZCS1234K',
//         gst: '27AAZCS1234K1Z5',
//         rcmc: 'EPC/ENG/2024/99 (EEPC)',
//         msme: 'UDYAM-MH-03-001292'
//     },
//     credentials: [
//       { id: 1, portal: 'DGFT', username: 'acme_dgft', password: 'Password123!', lastLogin: 'Yesterday' },
//       { id: 2, portal: 'ICEGATE', username: 'acme_ice', password: 'IcePassword!', lastLogin: '2 days ago' },
//       { id: 3, portal: 'Eximinq Portal', username: 'acme_admin', password: 'TempUser@2025', lastLogin: 'Today' }
//     ],
//     branches: [
//         { id: 1, name: 'Mumbai HO', gst: '27AAZCS...' },
//         { id: 2, name: 'Pune Factory', gst: '27AAZCS...' }
//     ]
//   },
//   { 
//     id: 'C-002', 
//     name: 'Global Traders Inc', 
//     iec: '0339921211', 
//     type: 'Partnership', 
//     tier: 'Gold', 
//     walletBalance: 1200, 
//     creditLimit: 200000, 
//     creditUsed: 190000, 
//     status: 'Risk', 
//     riskScore: 45, 
//     serviceStats: { submitted: 8, inProcess: 2, completed: 45, needsAction: 5 },
//     monthlyUsage: [10, 12, 15, 18, 20, 22],
//     credentials: [] 
//   },
// ];

// const VAULT_FOLDERS = [
//   { id: 1, name: 'Shipping Bills', count: 842, type: 'folder' },
//   { id: 2, name: 'Bill of Entries', count: 315, type: 'folder' },
//   { id: 3, name: 'Active Licenses', count: 12, type: 'folder' },
//   { id: 4, name: 'Bank e-BRCs', count: 650, type: 'folder' },
// ];

// const VAULT_FILES = {
//   1: [
//     { 
//       id: 'SB-1001', name: 'SB_4276784.pdf', date: 'Aug 05, 2020', size: '1.2 MB', status: 'Verified', dataEntered: true,
//       details: { sb_no: '4276784', sb_date: '05-Aug-2020', fob: 'USD 20,700', port: 'INCOK1', invoice: 'BLL/EX-40', dbk: '₹ 0', igst: 'LUT', rodtep: '₹ 0', license: '1010060567', ebrc: 'Pending' }
//     },
//     { 
//       id: 'SB-1002', name: 'SB_992813.pdf', date: 'Oct 24, 2025', size: '1.1 MB', status: 'Pending e-BRC', dataEntered: false,
//       details: { sb_no: '992813', sb_date: '24-Oct-2025', fob: 'USD 12,000', port: 'Mundra', invoice: 'INV-2025-002', dbk: '₹ 3,100', igst: 'LUT', rodtep: '₹ 950', license: 'Adv Auth: AA-992', ebrc: 'Pending' }
//     },
//   ],
//   2: [
//     {
//       id: 'BE-2001', name: 'BE_9493099.pdf', date: 'Nov 08, 2020', size: '2.0 MB', status: 'Cleared', dataEntered: true,
//       details: { boe_no: '9493099', boe_date: '08-Nov-2020', fob: 'USD 14,212', port: 'INCOK1', invoice: 'BB200820', dbk: '-', igst: '₹ 0', rodtep: '-', duty_paid: '₹ 0', license: '1010060567', ebrc: '-' }
//     },
//   ],
//   3: [
//     { 
//       id: 'LIC-001', name: 'EPCG_02291.pdf', date: 'Sep 10, 2024', size: '2.5 MB', status: 'Active', dataEntered: true,
//       details: { lic_no: '0229100042', lic_date: '10-Sep-2024', type: 'EPCG', duty_saved: '₹ 45,00,000', obligation: 'USD 3,21,428', validity: '10-Sep-2030', status: 'Active - 1st Block' }
//     },
//     { 
//       id: 'LIC-002', name: 'AA_1011000666.pdf', date: 'Dec 02, 2021', size: '1.8 MB', status: 'Active', dataEntered: true,
//       details: { lic_no: '1011000666', lic_date: '02-Dec-2021', type: 'Adv Auth', duty_saved: '₹ 95,404,926', obligation: 'USD 1,509,196', validity: '02-Jun-2023', status: 'Expired' }
//     },
//   ]
// };

// const MASTER_REQUESTS = [
//   { 
//     id: 'REQ-2025-1008', clientId: 'C-001', clientName: 'Acme Exports', service: 'Advance Auth Closure', category: 'Licensing', status: 'Needs Clarification', priority: 'High', assignee: 'Rahul S.', 
//     submissionTime: '2025-10-28T09:00:00', slaHours: 48, cost: 5000, isBilled: false, documents: [{ id: 1, type: 'EODC', docNo: 'EODC-9921', date: '2025-10-20', status: 'Blurry', name: 'eodc_scan.pdf' }], messages: [],
//     outputs: []
//   },
//   { 
//     id: 'REQ-2025-1001', clientId: 'C-001', clientName: 'Acme Exports', service: 'EPCG License', category: 'Licensing', status: 'Approval Pending', priority: 'Medium', assignee: 'Rahul S.', 
//     submissionTime: '2025-10-26T14:30:00', slaHours: 72, cost: 10000, isBilled: false, documents: [], messages: [], outputs: []
//   },
//   { 
//     id: 'REQ-2025-1009', clientId: 'C-002', clientName: 'Global Traders', service: 'Certificate of Origin', category: 'Transactional', status: 'Completed', priority: 'Low', assignee: 'Auto-Bot', 
//     submissionTime: '2025-10-29T09:15:00', slaHours: 4, cost: 800, isBilled: true, documents: [], messages: [], 
//     outputs: [{id: 1, name: 'Final_CoO_Certificate.pdf', type: 'Certificate', docNo: 'COO-2025-001', date: '2025-10-29'}]
//   },
//   { 
//     id: 'REQ-2025-1015', clientId: 'C-001', clientName: 'Acme Exports', service: 'Legal Reply (SCN)', category: 'Legal', status: 'Completed', priority: 'High', assignee: 'Priya M.', 
//     submissionTime: '2025-10-25T14:00:00', slaHours: 72, cost: 15000, isBilled: false, documents: [], messages: [], outputs: []
//   },
//   { 
//     id: 'REQ-2025-1016', clientId: 'C-001', clientName: 'Acme Exports', service: 'RoDTEP Scrip Issuance', category: 'Schemes', status: 'Submitted', priority: 'Medium', assignee: 'Unassigned', 
//     submissionTime: '2025-10-30T10:00:00', slaHours: 24, cost: 2500, isBilled: false, documents: [], messages: [], outputs: []
//   }
// ];

// const COMPLIANCE_FIX_REQUESTS = [
//     { id: 'FIX-9001', clientId: 'C-001', clientName: 'Acme Exports', issue: 'EPCG EODC Pending', source: 'Audit Report', status: 'Quote Required', requestedDate: 'Oct 28, 2025', description: 'Lic No 02291 expired. Client requests closure services.' },
//     { id: 'FIX-9002', clientId: 'C-002', clientName: 'Global Traders', issue: 'e-BRC Pending > 9 months', source: 'Schemes Analytics', status: 'Quote Sent', requestedDate: 'Oct 27, 2025', description: 'Assistance needed for bank realization of 12 SBs.' }
// ];

// const MASTER_QUOTES = [
//     { id: 'Q-2025-001', client: 'Global Traders', service: 'AEO T2 Certification', category: 'Licensing', amount: 50000, date: 'Oct 28, 2025', status: 'Pending Approval', description: 'Complete end-to-end AEO T2 certification including site audit.' },
//     { id: 'Q-2025-002', client: 'Acme Exports', service: 'Legal Reply (High Court)', category: 'Legal', amount: 75000, date: 'Oct 29, 2025', status: 'Pending Approval', description: 'Drafting and filing writ petition.' },
//     { id: 'Q-2025-003', client: 'TechFlow', service: 'SCOMET', category: 'Licensing', amount: 35000, date: 'Oct 25, 2025', status: 'Approved', description: 'SCOMET Application' }
// ];

// const RECENT_TRANSACTIONS = [
//   { id: 'TX-9912', client: 'Acme Exports', type: 'Credit', amount: 15000, date: '2025-10-28', method: 'Wallet Top-up', service: 'Wallet Top-up' },
//   { id: 'TX-9913', client: 'Global Traders', type: 'Debit', amount: 800, date: '2025-10-28', method: 'Wallet Usage', service: 'Certificate of Origin' },
//   { id: 'TX-9914', client: 'Acme Exports', type: 'Debit', amount: 5000, date: '2025-10-27', method: 'Credit Line', service: 'Advisory' },
//   { id: 'TX-9915', client: 'TechFlow', type: 'Debit', amount: 1200, date: '2025-10-25', method: 'Wallet Usage', service: 'IEC Update' },
// ];

// const INITIAL_INVOICES = [
//   { id: 'INV-1001', client: 'Acme Exports', reqNo: 'REQ-2025-1002', service: 'Certificate of Origin', category: 'Transactional', date: '2025-10-27', amount: 800, status: 'Paid', mode: 'Wallet', dueDate: '-', details: [{item: 'Professional Fees', cost: 600}, {item: 'Govt Fees', cost: 100}, {item: 'GST (18%)', cost: 100}] },
//   { id: 'INV-1002', client: 'Global Traders', reqNo: 'REQ-2025-1005', service: 'AD Code Reg', category: 'Transactional', date: '2025-10-22', amount: 2500, status: 'Paid', mode: 'Credit Line', dueDate: '-', details: [{item: 'Professional Fees', cost: 2000}, {item: 'GST (18%)', cost: 500}] },
//   { id: 'INV-1003', client: 'Acme Exports', reqNo: 'REQ-2025-1006', service: 'RoDTEP Audit', category: 'Audit', date: '2025-10-10', amount: 5000, status: 'Unpaid', mode: '-', dueDate: '2025-11-10', details: [{item: 'Audit Fees', cost: 5000}] },
// ];

// // --- HELPERS ---

// const calculateSlaStatus = (submissionTime, slaHours) => {
//     const start = new Date(submissionTime);
//     const mockNow = new Date('2025-10-30T12:00:00'); 
//     const diffMs = mockNow - start;
//     const diffHrs = diffMs / (1000 * 60 * 60);
//     const remaining = slaHours - diffHrs;

//     if (remaining < 0) return { status: 'Breached', label: `${Math.abs(Math.round(remaining))}h Overdue`, color: 'text-red-600 bg-red-50 border-red-100' };
//     if (remaining < 4) return { status: 'Risk', label: `${Math.round(remaining)}h Left`, color: 'text-orange-600 bg-orange-50 border-orange-100' };
//     return { status: 'On Track', label: `${Math.round(remaining)}h Left`, color: 'text-green-600 bg-green-50 border-green-100' };
// };

// // --- SHARED COMPONENTS ---

// const StatusBadge = ({ status }) => {
//   const styles = {
//     'Completed': 'bg-emerald-100 text-emerald-800 border-emerald-200',
//     'Paid': 'bg-emerald-100 text-emerald-800 border-emerald-200',
//     'Approved': 'bg-emerald-100 text-emerald-800 border-emerald-200',
//     'Active': 'bg-emerald-100 text-emerald-800 border-emerald-200',
//     'Good': 'bg-emerald-100 text-emerald-800 border-emerald-200',
//     'Excellent': 'bg-emerald-100 text-emerald-800 border-emerald-200',
//     'Submitted': 'bg-blue-50 text-blue-700 border-blue-200',
//     'In Process': 'bg-blue-100 text-blue-800 border-blue-200',
//     'Drafting': 'bg-slate-100 text-slate-600 border-slate-200',
//     'Approval Pending': 'bg-indigo-50 text-indigo-700 border-indigo-200',
//     'Pending Approval': 'bg-indigo-50 text-indigo-700 border-indigo-200',
//     'Needs Clarification': 'bg-orange-50 text-orange-700 border-orange-200',
//     'Risk': 'bg-red-50 text-red-700 border-red-200',
//     'Critical': 'bg-red-50 text-red-700 border-red-200',
//     'High': 'bg-orange-100 text-orange-700 border-orange-200',
//     'Medium': 'bg-amber-100 text-amber-700 border-amber-200',
//     'Online': 'bg-green-100 text-green-700 border-green-200',
//     'Busy': 'bg-amber-100 text-amber-700 border-amber-200',
//     'Invoice Write-Off': 'bg-slate-100 text-slate-700 border-slate-300',
//     'Unpaid': 'bg-red-50 text-red-700 border-red-200',
//     'Open': 'bg-red-50 text-red-700 border-red-200',
//     'Quote Required': 'bg-purple-100 text-purple-700 border-purple-200',
//     'Quote Sent': 'bg-blue-100 text-blue-700 border-blue-200',
//   };
//   return (
//     <span className={`px-2.5 py-1 rounded text-[11px] uppercase font-bold border tracking-wide ${styles[status] || styles['Drafting']}`}>
//       {status}
//     </span>
//   );
// };

// const StatCard = ({ title, value, subtext, icon: Icon, color, actions }) => (
//   <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow group relative overflow-hidden">
//     <div className={`absolute top-0 right-0 w-20 h-20 bg-${color}-50 rounded-full -mr-10 -mt-10 transition-transform group-hover:scale-110`}></div>
//     <div className="flex justify-between items-start mb-2 relative z-10">
//       <div className={`p-2 rounded-lg ${color === 'blue' ? 'bg-blue-50 text-blue-600' : color === 'purple' ? 'bg-purple-50 text-purple-600' : color === 'amber' ? 'bg-amber-50 text-amber-600' : 'bg-slate-50 text-slate-600'}`}>
//         <Icon size={20} />
//       </div>
//     </div>
//     <div className="relative z-10">
//       <h3 className="text-2xl font-bold text-slate-800">{value}</h3>
//       <p className="text-xs font-medium text-slate-500 uppercase tracking-wider mt-1">{title}</p>
//       {subtext && <p className="text-xs text-slate-400 mt-1">{subtext}</p>}
      
//       {actions && (
//           <div className="mt-4 flex gap-2">
//               {actions}
//           </div>
//       )}
//     </div>
//   </div>
// );

// const SidebarItem = ({ id, label, icon: Icon, activeTab, setActiveTab, isSidebarOpen }) => (
//   <button 
//     onClick={() => setActiveTab(id)}
//     className={`w-full flex items-center gap-3 px-4 py-3 text-sm font-medium transition-colors border-l-4 ${
//       activeTab === id 
//       ? 'bg-slate-800 text-white border-blue-500' 
//       : 'text-slate-400 hover:bg-slate-800 hover:text-slate-200 border-transparent'
//     }`}
//   >
//     <Icon size={18} />
//     {isSidebarOpen && <span>{label}</span>}
//   </button>
// );

// const Modal = ({ isOpen, onClose, title, children, maxWidth = 'max-w-lg' }) => {
//   if (!isOpen) return null;
//   return (
//     <div className="fixed inset-0 bg-slate-900/40 backdrop-blur-sm z-50 flex items-center justify-center p-4">
//       <div className={`bg-white rounded-xl shadow-2xl w-full ${maxWidth} max-h-[90vh] flex flex-col animate-in fade-in zoom-in duration-200`}>
//         <div className="px-6 py-4 border-b border-slate-100 flex justify-between items-center bg-slate-50/50 sticky top-0">
//           <h3 className="font-bold text-lg text-slate-800">{title}</h3>
//           <button onClick={onClose} className="p-1 hover:bg-slate-200 rounded-full transition-colors text-slate-500">
//             <X size={20} />
//           </button>
//         </div>
//         <div className="p-6 overflow-y-auto custom-scrollbar">
//           {children}
//         </div>
//       </div>
//     </div>
//   );
// };

// // --- SUB-VIEW COMPONENTS ---

// const ComplianceAuditViewComponent = ({ setSelectedAudit }) => {
//   return (
//     <div className="space-y-6 animate-in fade-in">
//         <div className="flex justify-between items-center">
//             <h2 className="text-lg font-bold text-slate-800">Compliance Audit Overview</h2>
//             <button className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-bold hover:bg-blue-700">
//                 <Plus size={16} /> New Audit
//             </button>
//         </div>

//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//             {COMPLIANCE_AUDITS_DB.map(audit => (
//                 <div key={audit.clientId} className="bg-white rounded-xl border border-slate-200 shadow-sm p-6 hover:shadow-md transition-all cursor-pointer" onClick={() => setSelectedAudit(audit)}>
//                     <div className="flex justify-between items-start mb-4">
//                         <div className="flex items-center gap-3">
//                             <div className="w-10 h-10 bg-slate-100 rounded-full flex items-center justify-center font-bold text-slate-600">
//                                 {audit.clientName.substring(0,1)}
//                             </div>
//                             <div>
//                                 <h3 className="font-bold text-slate-800 text-sm">{audit.clientName}</h3>
//                                 <p className="text-xs text-slate-500 font-mono">{audit.clientId}</p>
//                             </div>
//                         </div>
//                         <StatusBadge status={audit.riskLevel} />
//                     </div>
                    
//                     <div className="flex items-center justify-between mb-4">
//                         <div className="text-center">
//                             <div className={`text-2xl font-bold ${audit.score > 70 ? 'text-green-600' : 'text-red-600'}`}>{audit.score}</div>
//                             <div className="text-xs text-slate-400">Health Score</div>
//                         </div>
//                         <div className="text-center">
//                             <div className="text-xl font-bold text-slate-800">₹ {(audit.financialRisk/100000).toFixed(2)} L</div>
//                             <div className="text-xs text-slate-400">Financial Risk</div>
//                         </div>
//                     </div>

//                     <div className="space-y-2">
//                         {audit.categories.map((cat, idx) => (
//                             <div key={idx} className="flex justify-between text-xs">
//                                 <span className="text-slate-600">{cat.name}</span>
//                                 <span className={`font-bold ${cat.status === 'Critical' ? 'text-red-600' : 'text-green-600'}`}>{cat.status}</span>
//                             </div>
//                         ))}
//                     </div>
                    
//                     <div className="mt-4 pt-4 border-t border-slate-100 text-center">
//                         <button className="text-blue-600 text-xs font-bold hover:underline">View Full Report</button>
//                     </div>
//                 </div>
//             ))}
//         </div>
//     </div>
//   );
// };

// const WalletCreditDashboard = ({ requests }) => {
//     const [filterClient, setFilterClient] = useState('All');
//     const [filterService, setFilterService] = useState('All');
//     const [dateFrom, setDateFrom] = useState('');
//     const [dateTo, setDateTo] = useState('');

//     const unbilledTasks = requests.filter(r => r.status === 'Completed' && !r.isBilled);
    
//     const filteredTransactions = RECENT_TRANSACTIONS.filter(tx => {
//         const matchesClient = filterClient === 'All' || tx.client === filterClient;
//         const matchesService = filterService === 'All' || tx.service.includes(filterService);
//         const matchesDate = (!dateFrom || tx.date >= dateFrom) && (!dateTo || tx.date <= dateTo);
//         return matchesClient && matchesService && matchesDate;
//     });

//     const totalUsage = filteredTransactions.reduce((acc, curr) => curr.type === 'Debit' ? acc + curr.amount : acc, 0);

//     return (
//         <div className="space-y-6 animate-in fade-in">
//             <div className="flex justify-between items-center">
//                 <h2 className="text-lg font-bold text-slate-800">Wallet & Credit Analytics</h2>
//             </div>

//             <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-sm flex flex-wrap gap-4 items-end">
//                 <div className="flex-1 min-w-[150px]">
//                     <label className="text-xs font-bold text-slate-500 mb-1 block">Client</label>
//                     <select className="w-full text-sm border p-2 rounded bg-white text-slate-700" value={filterClient} onChange={(e) => setFilterClient(e.target.value)}>
//                         <option value="All">All Clients</option>
//                         {CLIENTS_DB.map(c => <option key={c.id} value={c.name}>{c.name}</option>)}
//                     </select>
//                 </div>
//                 <div className="flex-1 min-w-[150px]">
//                     <label className="text-xs font-bold text-slate-500 mb-1 block">Service</label>
//                     <select className="w-full text-sm border p-2 rounded bg-white text-slate-700" value={filterService} onChange={(e) => setFilterService(e.target.value)}>
//                         <option value="All">All Services</option>
//                         <option value="Certificate">Certificates</option>
//                         <option value="License">Licensing</option>
//                         <option value="Legal">Legal</option>
//                     </select>
//                 </div>
//                 <div>
//                     <label className="text-xs font-bold text-slate-500 mb-1 block">From</label>
//                     <input type="date" className="text-sm border p-2 rounded text-slate-700" value={dateFrom} onChange={(e) => setDateFrom(e.target.value)} />
//                 </div>
//                 <div>
//                     <label className="text-xs font-bold text-slate-500 mb-1 block">To</label>
//                     <input type="date" className="text-sm border p-2 rounded text-slate-700" value={dateTo} onChange={(e) => setDateTo(e.target.value)} />
//                 </div>
//             </div>
            
//             <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//                 <div className="bg-white rounded-xl border border-slate-200 p-6 shadow-sm">
//                     <div className="flex justify-between items-start mb-6">
//                         <div className="flex items-center gap-3">
//                             <div className="p-3 bg-blue-50 text-blue-600 rounded-lg"><Wallet size={24} /></div>
//                             <div><h3 className="font-bold text-slate-800">Usage Summary</h3><p className="text-xs text-slate-500">Based on filters</p></div>
//                         </div>
//                     </div>
//                     <div className="text-3xl font-bold text-slate-800 mb-2">₹ {totalUsage.toLocaleString()}</div>
//                     <p className="text-xs text-slate-500">Total consumption in period</p>
//                 </div>
                
//                 <div className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden">
//                     <div className="p-4 border-b border-slate-100 bg-amber-50 flex justify-between items-center">
//                         <h3 className="font-bold text-amber-900 text-sm">Completed Tasks Pending Billing</h3>
//                     </div>
//                     <div className="overflow-y-auto max-h-48">
//                         <table className="w-full text-sm text-left">
//                             <thead className="bg-slate-50 text-slate-500 uppercase text-xs font-bold">
//                                 <tr>
//                                     <th className="px-4 py-2">Client</th>
//                                     <th className="px-4 py-2">Service</th>
//                                     <th className="px-4 py-2 text-right">Action</th>
//                                 </tr>
//                             </thead>
//                             <tbody className="divide-y divide-slate-100">
//                                 {unbilledTasks.map(task => (
//                                     <tr key={task.id}>
//                                         <td className="px-4 py-2 text-xs">{task.clientName}</td>
//                                         <td className="px-4 py-2 text-xs">{task.service}</td>
//                                         <td className="px-4 py-2 text-right">
//                                             <button className="bg-blue-600 text-white px-2 py-1 rounded text-[10px] font-bold">Invoice</button>
//                                         </td>
//                                     </tr>
//                                 ))}
//                                 {unbilledTasks.length === 0 && (
//                                     <tr><td colSpan="3" className="text-center py-4 text-slate-400 italic">No pending tasks.</td></tr>
//                                 )}
//                             </tbody>
//                         </table>
//                     </div>
//                 </div>
//             </div>

//             <div className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden">
//                 <div className="p-4 border-b border-slate-100">
//                     <h3 className="font-bold text-slate-800 text-sm">Usage Logs</h3>
//                 </div>
//                 <table className="w-full text-sm text-left">
//                     <thead className="bg-slate-50 text-slate-500 uppercase text-xs font-bold">
//                         <tr>
//                             <th className="px-6 py-3">ID</th>
//                             <th className="px-6 py-3">Client</th>
//                             <th className="px-6 py-3">Date</th>
//                             <th className="px-6 py-3">Service</th>
//                             <th className="px-6 py-3">Type</th>
//                             <th className="px-6 py-3 text-right">Amount</th>
//                         </tr>
//                     </thead>
//                     <tbody className="divide-y divide-slate-100">
//                         {filteredTransactions.map(tx => (
//                             <tr key={tx.id} className="hover:bg-slate-50">
//                                 <td className="px-6 py-3 font-mono text-xs">{tx.id}</td>
//                                 <td className="px-6 py-3">{tx.client}</td>
//                                 <td className="px-6 py-3 text-slate-500">{tx.date}</td>
//                                 <td className="px-6 py-3">{tx.service}</td>
//                                 <td className="px-6 py-3"><span className={`text-[10px] font-bold px-2 py-0.5 rounded ${tx.type === 'Credit' ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>{tx.type}</span></td>
//                                 <td className={`px-6 py-3 text-right font-bold ${tx.type === 'Credit' ? 'text-green-600' : 'text-slate-800'}`}>
//                                     {tx.type === 'Credit' ? '+' : '-'} {tx.amount.toLocaleString()}
//                                 </td>
//                             </tr>
//                         ))}
//                     </tbody>
//                 </table>
//             </div>
//         </div>
//     );
// };

// const InvoiceBillingDashboard = ({ invoices }) => {
//     const [period, setPeriod] = useState('Monthly');
//     const [filterClient, setFilterClient] = useState('All');
//     const [filterServiceCat, setFilterServiceCat] = useState('All');
//     const [expandedInvoice, setExpandedInvoice] = useState(null);

//     const filteredInvoices = invoices.filter(inv => {
//         const matchesClient = filterClient === 'All' || inv.client === filterClient;
//         const matchesCat = filterServiceCat === 'All' || inv.category === filterServiceCat;
//         return matchesClient && matchesCat;
//     });

//     const totalDue = filteredInvoices.filter(i => i.status === 'Unpaid').reduce((acc, curr) => acc + curr.amount, 0);
//     const totalPaid = filteredInvoices.filter(i => i.status === 'Paid').reduce((acc, curr) => acc + curr.amount, 0);
//     const totalWriteOff = filteredInvoices.filter(i => i.status === 'Invoice Write-Off').reduce((acc, curr) => acc + curr.amount, 0);

//     return (
//         <div className="space-y-6 animate-in fade-in">
//             <div className="flex justify-between items-center">
//                 <h2 className="text-lg font-bold text-slate-800">Invoice & Billing Analytics</h2>
//                 <div className="flex bg-slate-100 rounded-lg p-1">
//                     {['Daily', 'Weekly', 'Monthly'].map(p => (
//                         <button key={p} onClick={() => setPeriod(p)} className={`px-4 py-1.5 text-xs font-bold rounded ${period === p ? 'bg-white shadow text-slate-800' : 'text-slate-500 hover:text-slate-700'}`}>{p}</button>
//                     ))}
//                 </div>
//             </div>

//             <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-sm flex gap-4">
//                 <select className="text-sm border p-2 rounded bg-white text-slate-700" value={filterClient} onChange={(e) => setFilterClient(e.target.value)}>
//                     <option value="All">All Clients</option>
//                     {CLIENTS_DB.map(c => <option key={c.id} value={c.name}>{c.name}</option>)}
//                 </select>
//                 <select className="text-sm border p-2 rounded bg-white text-slate-700" value={filterServiceCat} onChange={(e) => setFilterServiceCat(e.target.value)}>
//                     <option value="All">All Categories</option>
//                     <option value="Licensing">Licensing</option>
//                     <option value="Transactional">Transactional</option>
//                     <option value="Legal">Legal</option>
//                     <option value="Audit">Audit</option>
//                 </select>
//             </div>

//             <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
//                 <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
//                     <p className="text-xs text-slate-500 uppercase font-bold">Outstanding (Filtered)</p>
//                     <h3 className="text-2xl font-bold text-red-600 mt-2">₹ {totalDue.toLocaleString()}</h3>
//                 </div>
//                 <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
//                     <p className="text-xs text-slate-500 uppercase font-bold">Paid (Filtered)</p>
//                     <h3 className="text-2xl font-bold text-green-600 mt-2">₹ {totalPaid.toLocaleString()}</h3>
//                 </div>
//                 <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
//                     <p className="text-xs text-slate-500 uppercase font-bold">Invoice Write-Off (Filtered)</p>
//                     <h3 className="text-2xl font-bold text-slate-700 mt-2">₹ {totalWriteOff.toLocaleString()}</h3>
//                 </div>
//             </div>

//             <div className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden">
//                 <table className="w-full text-sm text-left">
//                     <thead className="bg-slate-50 text-slate-500 uppercase text-xs font-bold">
//                         <tr>
//                             <th className="px-6 py-3"></th>
//                             <th className="px-6 py-3">Invoice ID</th>
//                             <th className="px-6 py-3">Client</th>
//                             <th className="px-6 py-3">Service</th>
//                             <th className="px-6 py-3">Amount</th>
//                             <th className="px-6 py-3">Date</th>
//                             <th className="px-6 py-3">Status</th>
//                         </tr>
//                     </thead>
//                     <tbody className="divide-y divide-slate-100">
//                         {filteredInvoices.map(inv => (
//                             <React.Fragment key={inv.id}>
//                                 <tr className="hover:bg-slate-50 cursor-pointer" onClick={() => setExpandedInvoice(expandedInvoice === inv.id ? null : inv.id)}>
//                                     <td className="px-6 py-3 text-slate-400">
//                                         {expandedInvoice === inv.id ? <ChevronDown size={16} /> : <ChevronRight size={16} />}
//                                     </td>
//                                     <td className="px-6 py-3 font-mono text-slate-600">{inv.id}</td>
//                                     <td className="px-6 py-3 font-medium">{inv.client}</td>
//                                     <td className="px-6 py-3">{inv.service}</td>
//                                     <td className="px-6 py-3 font-bold">₹ {inv.amount.toLocaleString()}</td>
//                                     <td className="px-6 py-3 text-slate-500">{inv.date}</td>
//                                     <td className="px-6 py-3"><StatusBadge status={inv.status} /></td>
//                                 </tr>
//                                 {expandedInvoice === inv.id && (
//                                     <tr className="bg-slate-50">
//                                         <td colSpan="7" className="px-6 py-4">
//                                             <div className="text-xs space-y-2">
//                                                 <p className="font-bold uppercase text-slate-500">Breakdown</p>
//                                                 {inv.details.map((d, i) => (
//                                                     <div key={i} className="flex justify-between w-64">
//                                                         <span>{d.item}</span>
//                                                         <span className="font-mono">₹ {d.cost}</span>
//                                                     </div>
//                                                 ))}
//                                                 <div className="flex justify-between w-64 pt-2 border-t border-slate-200 font-bold">
//                                                     <span>Total</span>
//                                                     <span>₹ {inv.amount}</span>
//                                                 </div>
//                                             </div>
//                                         </td>
//                                     </tr>
//                                 )}
//                             </React.Fragment>
//                         ))}
//                     </tbody>
//                 </table>
//             </div>
//         </div>
//     );
// };

// const DashboardViewComponent = ({ requests, quotes, setActiveTab, openQuoteModal, openActionModal }) => (
//   <div className="space-y-6 animate-in fade-in">
//     <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
//       <StatCard 
//         title="Revenue" 
//         value={ADMIN_STATS.totalRevenue} 
//         subtext={`${ADMIN_STATS.revenueGrowth} vs last month`} 
//         icon={DollarSign} 
//         color="blue" 
//         actions={<button onClick={() => setActiveTab('finance_billing')} className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded hover:bg-blue-200">View Invoices</button>} 
//       />
//       <StatCard title="Workforce" value={`${ADMIN_STATS.agentsOnline} Online`} subtext="Avg Productivity: 94%" icon={Users} color="purple" actions={<button onClick={() => setActiveTab('workforce')} className="text-xs bg-purple-100 text-purple-700 px-2 py-1 rounded hover:bg-purple-200">Track Agents</button>} />
//       <StatCard title="Requests" value={requests.filter(r => !['Completed', 'Invoice Write-Off'].includes(r.status)).length} subtext="5 Critical SLA Risk" icon={Layers} color="amber" actions={<button onClick={() => setActiveTab('requests')} className="text-xs bg-amber-100 text-amber-700 px-2 py-1 rounded hover:bg-amber-200">Board</button>} />
//       <StatCard title="System Health" value={ADMIN_STATS.systemHealth} subtext="DGFT API: 42ms Latency" icon={Activity} />
//     </div>
//     <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
//       <div className="lg:col-span-2 space-y-6">
//           <div className="bg-white border border-slate-200 rounded-xl shadow-sm p-5">
//               <h3 className="font-bold text-slate-800 mb-4 text-sm uppercase tracking-wider flex items-center gap-2"><PenTool size={16} /> Command Center Actions</h3>
//               <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
//                   <button onClick={() => openActionModal('new_request')} className="p-3 border border-slate-200 rounded-lg hover:bg-blue-50 hover:border-blue-200 flex flex-col items-center gap-2 transition-colors"><div className="w-8 h-8 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center"><Plus size={18} /></div><span className="text-xs font-bold text-slate-700">New Request</span></button>
//                   <button onClick={() => openActionModal('verify_client')} className="p-3 border border-slate-200 rounded-lg hover:bg-emerald-50 hover:border-emerald-200 flex flex-col items-center gap-2 transition-colors"><div className="w-8 h-8 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center"><UserCheck size={18} /></div><span className="text-xs font-bold text-slate-700">Verify Client</span></button>
//                   <button onClick={() => openActionModal('broadcast')} className="p-3 border border-slate-200 rounded-lg hover:bg-amber-50 hover:border-amber-200 flex flex-col items-center gap-2 transition-colors"><div className="w-8 h-8 bg-amber-100 text-amber-600 rounded-full flex items-center justify-center"><Megaphone size={18} /></div><span className="text-xs font-bold text-slate-700">Broadcast</span></button>
//                   <button onClick={() => openActionModal('bulk_import')} className="p-3 border border-slate-200 rounded-lg hover:bg-purple-50 hover:border-purple-200 flex flex-col items-center gap-2 transition-colors"><div className="w-8 h-8 bg-purple-100 text-purple-600 rounded-full flex items-center justify-center"><FileBox size={18} /></div><span className="text-xs font-bold text-slate-700">Bulk Import</span></button>
//                   <button onClick={() => openActionModal('report')} className="p-3 border border-slate-200 rounded-lg hover:bg-indigo-50 hover:border-indigo-200 flex flex-col items-center gap-2 transition-colors"><div className="w-8 h-8 bg-indigo-100 text-indigo-600 rounded-full flex items-center justify-center"><FileText size={18} /></div><span className="text-xs font-bold text-slate-700">Generate Report</span></button>
//                   <button onClick={() => openActionModal('rates')} className="p-3 border border-slate-200 rounded-lg hover:bg-pink-50 hover:border-pink-200 flex flex-col items-center gap-2 transition-colors"><div className="w-8 h-8 bg-pink-100 text-pink-600 rounded-full flex items-center justify-center"><RefreshCw size={18} /></div><span className="text-xs font-bold text-slate-700">Update Rates</span></button>
//                   <button onClick={() => openActionModal('alert')} className="p-3 border border-slate-200 rounded-lg hover:bg-red-50 hover:border-red-200 flex flex-col items-center gap-2 transition-colors"><div className="w-8 h-8 bg-red-100 text-red-600 rounded-full flex items-center justify-center"><AlertTriangle size={18} /></div><span className="text-xs font-bold text-slate-700">System Alert</span></button>
//                   <button onClick={() => openActionModal('team')} className="p-3 border border-slate-200 rounded-lg hover:bg-teal-50 hover:border-teal-200 flex flex-col items-center gap-2 transition-colors"><div className="w-8 h-8 bg-teal-100 text-teal-600 rounded-full flex items-center justify-center"><Users size={18} /></div><span className="text-xs font-bold text-slate-700">Team Meet</span></button>
//               </div>
//           </div>
//           <div className="bg-white border border-slate-200 rounded-xl shadow-sm overflow-hidden flex flex-col">
//             <div className="p-5 border-b border-slate-100 flex justify-between items-center"><h3 className="font-bold text-slate-800 flex items-center gap-2"><Clock size={18} className="text-blue-600" /> Recent Activity</h3><button onClick={() => setActiveTab('requests')} className="text-xs font-medium text-blue-600 hover:underline flex items-center gap-1">Expand All <ChevronRight size={14} /></button></div>
//             <div className="divide-y divide-slate-100">
//                 {requests.slice(0, 4).map(req => (
//                 <div key={req.id} className="p-4 flex items-center justify-between hover:bg-slate-50 transition-colors">
//                     <div className="flex items-center gap-4">
//                     <div className="font-mono text-xs font-bold text-slate-500 bg-slate-100 px-2 py-1 rounded">{req.id}</div>
//                     <div><h4 className="text-sm font-semibold text-slate-800">{req.service}</h4><p className="text-xs text-slate-500">{req.clientName}</p></div>
//                     </div>
//                     <StatusBadge status={req.status} />
//                 </div>
//                 ))}
//             </div>
//           </div>
//       </div>
//       <div className="space-y-6">
//         <div className="bg-white border border-slate-200 rounded-xl shadow-sm p-5">
//           <div className="flex justify-between items-center mb-4"><h3 className="font-bold text-slate-800 text-sm uppercase tracking-wide">Pending Quotes</h3><button onClick={openQuoteModal} className="text-blue-600 hover:bg-blue-50 p-1 rounded"><ArrowUpRight size={16} /></button></div>
//           <div className="space-y-3">
//             {quotes.filter(q => q.status === 'Pending Approval').length > 0 ? quotes.filter(q => q.status === 'Pending Approval').map(quote => (
//                 <div key={quote.id} className="flex gap-3 p-3 bg-indigo-50 rounded-lg border border-indigo-100"><FileCheck className="text-indigo-600 shrink-0" size={18} /><div className="flex-1"><p className="text-sm font-bold text-indigo-800">{quote.client}</p><p className="text-xs text-indigo-600 mt-1">{quote.service} - ₹{quote.amount.toLocaleString()}</p></div></div>
//             )) : <p className="text-xs text-slate-400">No pending quotes.</p>}
//           </div>
//         </div>
//       </div>
//     </div>
//   </div>
// );

// const WorkforceViewComponent = ({ selectedAgent, setSelectedAgent }) => {
//   const [taskStatusFilter, setTaskStatusFilter] = useState('All');
//   const [selectedTask, setSelectedTask] = useState(null);
//   const getFilteredTasks = (agent) => {
//       if (taskStatusFilter === 'All') return agent.tasks;
//       return agent.tasks.filter(t => t.status === taskStatusFilter);
//   };
//   return (
//   <div className="space-y-6 animate-in fade-in">
//       <div className="flex justify-between items-center"><h2 className="text-lg font-bold text-slate-800">Workforce & Productivity</h2><div className="flex gap-2"><button className="bg-white border border-slate-200 text-slate-600 px-3 py-1.5 rounded-lg text-sm font-medium">Daily</button><button className="bg-slate-800 text-white px-3 py-1.5 rounded-lg text-sm font-medium">Monthly</button></div></div>
//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
//          {AGENTS_DB.map(agent => (
//              <div key={agent.id} onClick={() => { setSelectedAgent(agent); setSelectedTask(null); }} className={`bg-white border cursor-pointer transition-all rounded-xl p-5 shadow-sm hover:shadow-md ${selectedAgent?.id === agent.id ? 'border-blue-500 ring-1 ring-blue-500' : 'border-slate-200'}`}>
//                  <div className="flex justify-between items-start mb-4"><div className="flex items-center gap-3"><div className="w-10 h-10 bg-slate-100 rounded-full flex items-center justify-center font-bold text-slate-600">{agent.name.substring(0,1)}</div><div><h4 className="font-bold text-slate-800 text-sm">{agent.name}</h4><p className="text-xs text-slate-500">{agent.role}</p></div></div><StatusBadge status={agent.status} /></div>
//                  <div className="space-y-3"><div><div className="flex justify-between text-xs mb-1"><span className="text-slate-500">Productivity</span><span className="font-bold text-slate-700">{agent.productivity}%</span></div><div className="w-full bg-slate-100 h-1.5 rounded-full overflow-hidden"><div className="bg-blue-600 h-full rounded-full" style={{ width: `${agent.productivity}%` }}></div></div></div><div className="bg-slate-50 rounded-lg p-2 text-center mt-2"><p className="text-xs font-mono text-slate-500">Active Tasks: <span className="font-bold text-slate-800">{agent.activeTasks}</span></p></div></div>
//              </div>
//          ))}
//       </div>
//       {selectedAgent && (
//           <div className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm animate-in slide-in-from-bottom duration-300">
//               <div className="flex justify-between items-center mb-4"><h3 className="font-bold text-slate-800 flex items-center gap-2"><Users size={18} /> Tasks: {selectedAgent.name}</h3><div className="flex items-center gap-2"><select value={taskStatusFilter} onChange={(e) => setTaskStatusFilter(e.target.value)} className="text-xs border border-slate-200 rounded p-1"><option value="All">All Tasks</option><option value="In Process">In Process</option><option value="Submitted">Submitted</option><option value="Needs Clarification">Clarification</option></select><button onClick={() => setSelectedAgent(null)} className="text-slate-400 hover:text-slate-600"><X size={18} /></button></div></div>
//               <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
//                   <div>{getFilteredTasks(selectedAgent).length > 0 ? (<table className="w-full text-sm text-left"><thead className="bg-slate-50 text-slate-500 uppercase text-xs font-bold"><tr><th className="px-4 py-2">Task ID</th><th className="px-4 py-2">Service</th><th className="px-4 py-2">Status</th><th className="px-4 py-2">Due</th></tr></thead><tbody>{getFilteredTasks(selectedAgent).map(task => (<tr key={task.id} onClick={() => setSelectedTask(task)} className={`border-b border-slate-100 hover:bg-slate-50 cursor-pointer ${selectedTask?.id === task.id ? 'bg-blue-50' : ''}`}><td className="px-4 py-3 font-mono text-blue-600">{task.id}</td><td className="px-4 py-3"><div className="font-medium text-slate-800">{task.service}</div><div className="text-xs text-slate-500">{task.client}</div></td><td className="px-4 py-3"><StatusBadge status={task.status} /></td><td className="px-4 py-3"><span className={`text-[10px] font-bold px-2 py-0.5 rounded ${task.sla === 'Delayed' ? 'bg-red-100 text-red-700' : 'bg-green-100 text-green-700'}`}>{task.due}</span></td></tr>))}</tbody></table>) : (<p className="text-slate-400 text-sm italic py-4 text-center">No tasks match the filter.</p>)}</div>
//                   {selectedTask ? (<div className="border-l border-slate-100 pl-6 animate-in slide-in-from-right"><h4 className="font-bold text-slate-800 text-sm mb-2 flex items-center gap-2"><FileText size={16} /> Client Documents ({selectedTask.clientDocs?.length || 0})</h4><div className="space-y-2 mb-4">{selectedTask.clientDocs && selectedTask.clientDocs.length > 0 ? (selectedTask.clientDocs.map((doc, idx) => (<div key={idx} className="flex justify-between items-center p-2 bg-slate-50 rounded border border-slate-100 text-sm"><span className="text-slate-700">{doc.name}</span><span className="text-xs text-slate-400">{doc.date}</span></div>))) : (<p className="text-xs text-slate-400 italic">No documents attached.</p>)}</div><div className="bg-slate-50 p-3 rounded text-xs text-slate-500"><p><span className="font-bold">SLA Status:</span> {selectedTask.sla}</p><p><span className="font-bold">Client:</span> {selectedTask.client}</p></div></div>) : (<div className="flex items-center justify-center text-slate-400 text-sm italic border-l border-slate-100">Select a task to view details.</div>)}
//               </div>
//           </div>
//       )}
//   </div>
//   );
// };

// const SmartVaultViewComponent = ({ currentVaultFolder, setCurrentVaultFolder, setVaultDocToEdit }) => (
//   <div className="space-y-6 animate-in fade-in">
//       <div className="flex justify-between items-center"><h2 className="text-lg font-bold text-slate-800">Client Portal Smart Vault (Admin Access)</h2><div className="flex items-center gap-2"><span className="text-xs font-bold text-slate-500">Accessing Vault for:</span><select className="text-sm border border-slate-200 rounded-lg p-1.5 bg-white font-medium text-slate-800"><option>Acme Exports Pvt Ltd (C-001)</option><option>Global Traders (C-002)</option></select></div></div>
//       {!currentVaultFolder ? (<div className="grid grid-cols-1 md:grid-cols-4 gap-6">{VAULT_FOLDERS.map(folder => (<div key={folder.id} onClick={() => setCurrentVaultFolder(folder)} className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm hover:shadow-md transition-all cursor-pointer group"><div className="flex justify-between items-start mb-4"><Folder size={40} className="text-blue-100 group-hover:text-blue-500 transition-colors fill-current" /><span className="text-xs font-bold bg-slate-100 text-slate-500 px-2 py-1 rounded">{folder.count}</span></div><h3 className="font-bold text-slate-800 mb-1">{folder.name}</h3></div>))}</div>) : (
//           <div className="space-y-4">
//               <button onClick={() => setCurrentVaultFolder(null)} className="flex items-center gap-2 text-sm text-slate-500 hover:text-blue-600"><ArrowUpRight className="rotate-180" size={16} /> Back to Folders</button><h3 className="font-bold text-xl text-slate-800">{currentVaultFolder.name}</h3>
//               <div className="bg-white rounded-xl border border-slate-200 overflow-hidden"><table className="w-full text-sm text-left"><thead className="bg-slate-50 text-slate-500 text-xs font-bold uppercase"><tr>{(currentVaultFolder.id === 1) && <th className="px-6 py-4">SB No & Date</th>}{(currentVaultFolder.id === 2) && <th className="px-6 py-4">BOE No & Date</th>}{(currentVaultFolder.id === 3) && <th className="px-6 py-4">License No & Date</th>}{(currentVaultFolder.id !== 1 && currentVaultFolder.id !== 2 && currentVaultFolder.id !== 3) && <th className="px-6 py-4">Document Name</th>}{(currentVaultFolder.id === 1 || currentVaultFolder.id === 2) ? (<><th className="px-6 py-4">Port & Invoice</th><th className="px-6 py-4">Value</th><th className="px-6 py-4">Financials & Duties</th><th className="px-6 py-4">License / Scheme</th>{currentVaultFolder.id === 1 && <th className="px-6 py-4">e-BRC</th>}</>) : currentVaultFolder.id === 3 ? (<><th className="px-6 py-4">Type & Validity</th><th className="px-6 py-4">Duty Saved</th><th className="px-6 py-4">Export Obligation</th><th className="px-6 py-4">Status</th></>) : (<><th className="px-6 py-4">Upload Date</th><th className="px-6 py-4">Size</th><th className="px-6 py-4">Status</th></>)}<th className="px-6 py-4 text-right">Actions</th></tr></thead><tbody className="divide-y divide-slate-100">{VAULT_FILES[currentVaultFolder.id]?.map(file => (<tr key={file.id} className="hover:bg-slate-50">{(currentVaultFolder.id === 1) && (<td className="px-6 py-4"><div className="font-bold text-slate-800 text-base">{file.details.sb_no}</div><div className="text-xs text-slate-500">{file.details.sb_date}</div></td>)}{(currentVaultFolder.id === 2) && (<td className="px-6 py-4"><div className="font-bold text-slate-800 text-base">{file.details.boe_no}</div><div className="text-xs text-slate-500">{file.details.boe_date}</div></td>)}{(currentVaultFolder.id === 3) && (<td className="px-6 py-4"><div className="font-bold text-slate-800 text-base">{file.details.lic_no}</div><div className="text-xs text-slate-500">{file.details.lic_date}</div></td>)}{(currentVaultFolder.id !== 1 && currentVaultFolder.id !== 2 && currentVaultFolder.id !== 3) && (<td className="px-6 py-4 font-medium text-slate-800"><div className="flex items-center gap-2"><FileText className="text-red-500 shrink-0" size={18} /> <div><div>{file.name}</div><div className="text-[10px] text-slate-400 font-normal">{file.date} • {file.size}</div></div></div></td>)}{(currentVaultFolder.id === 1 || currentVaultFolder.id === 2) ? (<><td className="px-6 py-4"><div className="font-bold text-slate-700">{file.details.port}</div><div className="text-xs text-slate-500 font-mono">Inv: {file.details.invoice}</div></td><td className="px-6 py-4"><div className="font-bold text-slate-800">{file.details.fob}</div><div className="text-[10px] text-slate-500 uppercase">FOB Value</div></td><td className="px-6 py-4 text-xs">{currentVaultFolder.id === 1 ? (<div className="space-y-1"><div className="flex justify-between gap-4"><span className="text-slate-500">DBK:</span> <span className="font-medium">{file.details.dbk}</span></div><div className="flex justify-between gap-4"><span className="text-slate-500">IGST:</span> <span className="font-medium">{file.details.igst}</span></div><div className="flex justify-between gap-4"><span className="text-slate-500">RoDTEP:</span> <span className="font-medium">{file.details.rodtep}</span></div></div>) : (<div className="space-y-1"><div className="flex justify-between gap-4"><span className="text-slate-500">Duty Paid:</span> <span className="font-bold text-red-600">{file.details.duty_paid}</span></div><div className="flex justify-between gap-4"><span className="text-slate-500">IGST:</span> <span className="font-medium">{file.details.igst}</span></div></div>)}</td><td className="px-6 py-4"><span className="bg-purple-50 text-purple-700 text-xs px-2 py-1 rounded font-medium border border-purple-100">{file.details.license}</span></td>{currentVaultFolder.id === 1 && (<td className="px-6 py-4"><span className={`text-xs font-bold px-2 py-1 rounded-full ${file.details.ebrc.includes('Issued') ? 'bg-green-100 text-green-700' : 'bg-amber-100 text-amber-700'}`}>{file.details.ebrc}</span></td>)}</>) : currentVaultFolder.id === 3 ? (<><td className="px-6 py-4"><div className="font-medium text-slate-800">{file.details.type}</div><div className="text-xs text-slate-500">Valid till: {file.details.validity}</div></td><td className="px-6 py-4 font-bold text-green-700">{file.details.duty_saved}</td><td className="px-6 py-4 font-medium text-slate-700">{file.details.obligation}</td><td className="px-6 py-4"><StatusBadge status={file.details.status} /></td></>) : null}<td className="px-6 py-3 text-right"><button onClick={() => setVaultDocToEdit(file)} className="text-xs font-bold text-blue-600 border border-blue-200 px-3 py-1.5 rounded hover:bg-blue-50 flex items-center gap-1 ml-auto"><FileInput size={14} /> Input Data</button></td></tr>))}</tbody></table></div></div>
//       )}
//   </div>
// );

// const RequestsViewComponent = ({ requests, openChat, setSelectedRequest, handleSendQuote }) => {
//     const [filterStatus, setFilterStatus] = useState('All');
//     const [filterCategory, setFilterCategory] = useState('All');
//     const [searchQuery, setSearchQuery] = useState('');
//     const [viewMode, setViewMode] = useState('active'); // 'active' or 'compliance_fix'

//     const filteredReqs = requests.filter(req => {
//         const matchesStatus = filterStatus === 'All' || req.status === filterStatus;
//         const matchesCategory = filterCategory === 'All' || req.category === filterCategory;
//         const matchesSearch = req.id.toLowerCase().includes(searchQuery.toLowerCase()) || req.clientName.toLowerCase().includes(searchQuery.toLowerCase()) || req.clientId.toLowerCase().includes(searchQuery.toLowerCase());
//         return matchesStatus && matchesCategory && matchesSearch;
//     });

//     return (
//         <div className="space-y-4 animate-in fade-in">
//             {/* Toggle Header */}
//             <div className="flex gap-4 border-b border-slate-200 pb-2 mb-2">
//                 <button onClick={() => setViewMode('active')} className={`pb-2 text-sm font-bold ${viewMode === 'active' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-slate-500'}`}>Active Requests</button>
//                 <button onClick={() => setViewMode('compliance_fix')} className={`pb-2 text-sm font-bold flex items-center gap-2 ${viewMode === 'compliance_fix' ? 'text-amber-600 border-b-2 border-amber-600' : 'text-slate-500'}`}><Wrench size={14} /> Compliance Fix Requests</button>
//             </div>

//             {viewMode === 'active' ? (
//                 <>
//                     <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-sm flex flex-col md:flex-row gap-4 justify-between items-center"><div className="relative w-full md:w-80"><Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={18} /><input type="text" placeholder="Search requests..." value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} className="w-full pl-10 pr-4 py-2 bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm" /></div><div className="flex items-center gap-2 w-full md:w-auto"><select value={filterCategory} onChange={(e) => setFilterCategory(e.target.value)} className="px-4 py-2 bg-slate-50 border border-slate-200 rounded-lg text-sm font-medium text-slate-700 focus:outline-none focus:ring-2 focus:ring-blue-500"><option value="All">All Categories</option><option value="Licensing">Licensing</option><option value="Transactional">Transactional</option><option value="Legal">Legal</option></select><select value={filterStatus} onChange={(e) => setFilterStatus(e.target.value)} className="px-4 py-2 bg-slate-50 border border-slate-200 rounded-lg text-sm font-medium text-slate-700 focus:outline-none focus:ring-2 focus:ring-blue-500"><option value="All">All Status</option><option value="Submitted">Submitted</option><option value="Needs Clarification">Clarification</option><option value="Invoice Write-Off">Invoice Write-Off</option><option value="Completed">Completed</option></select></div></div>
//                     <div className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden"><div className="overflow-x-auto"><table className="w-full text-sm text-left"><thead className="bg-slate-50 text-slate-500 uppercase text-xs font-bold tracking-wider"><tr><th className="px-6 py-4">Request ID</th><th className="px-6 py-4">Client</th><th className="px-6 py-4">Service</th><th className="px-6 py-4">Submission Time</th><th className="px-6 py-4">SLA Tracker</th><th className="px-6 py-4">Status</th><th className="px-6 py-4">Issuance</th><th className="px-6 py-4 text-right">Actions</th></tr></thead><tbody className="divide-y divide-slate-100">{filteredReqs.map(req => {const sla = calculateSlaStatus(req.submissionTime, req.slaHours); return (<tr key={req.id} className="hover:bg-blue-50/30 transition-colors"><td className="px-6 py-4 font-mono font-medium text-blue-600">{req.id}</td><td className="px-6 py-4"><div className="font-medium text-slate-800">{req.clientName}</div><div className="text-xs text-slate-500 font-mono">{req.clientId}</div></td><td className="px-6 py-4"><div className="text-slate-800">{req.service}</div><div className="text-xs text-slate-400">{req.category}</div></td><td className="px-6 py-4 text-xs text-slate-500">{new Date(req.submissionTime).toLocaleString('en-US', { month: 'short', day: 'numeric', hour: '2-digit', minute: '2-digit' })}</td><td className="px-6 py-4"><span className={`text-[10px] font-bold px-2 py-0.5 rounded ${sla.color} border border-transparent`}>{sla.label}</span></td><td className="px-6 py-4"><StatusBadge status={req.status} /></td><td className="px-6 py-4 text-xs font-mono">{req.outputs?.[0]?.docNo || '-'}</td><td className="px-6 py-4 text-right"><div className="flex justify-end gap-2"><button onClick={() => openChat(req)} className="p-1.5 text-slate-400 hover:text-blue-600 hover:bg-blue-50 rounded"><MessageSquare size={16} /></button><button onClick={() => setSelectedRequest(req)} className="p-1.5 text-slate-400 hover:text-slate-800 hover:bg-slate-100 rounded"><MoreVertical size={16} /></button></div></td></tr>);})}</tbody></table></div></div>
//                 </>
//             ) : (
//                 // Compliance Fix Requests View
//                 <div className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden">
//                     <div className="p-4 border-b border-slate-100 bg-amber-50 flex items-center gap-2 text-amber-800">
//                         <AlertOctagon size={18} /> <span className="font-bold text-sm">Discrepancy Fix Requests from Clients</span>
//                     </div>
//                     <table className="w-full text-sm text-left">
//                         <thead className="bg-slate-50 text-slate-500 uppercase text-xs font-bold tracking-wider">
//                             <tr><th className="px-6 py-4">Fix ID</th><th className="px-6 py-4">Client</th><th className="px-6 py-4">Issue Description</th><th className="px-6 py-4">Source</th><th className="px-6 py-4">Date</th><th className="px-6 py-4">Status</th><th className="px-6 py-4 text-right">Action</th></tr>
//                         </thead>
//                         <tbody className="divide-y divide-slate-100">
//                             {COMPLIANCE_FIX_REQUESTS.map(fix => (
//                                 <tr key={fix.id} className="hover:bg-amber-50/30">
//                                     <td className="px-6 py-4 font-mono font-medium text-amber-700">{fix.id}</td>
//                                     <td className="px-6 py-4"><div className="font-medium text-slate-800">{fix.clientName}</div><div className="text-xs text-slate-500 font-mono">{fix.clientId}</div></td>
//                                     <td className="px-6 py-4"><div className="text-slate-800">{fix.issue}</div><div className="text-xs text-slate-500 truncate w-48" title={fix.description}>{fix.description}</div></td>
//                                     <td className="px-6 py-4 text-xs text-slate-500 font-medium bg-slate-100 px-2 py-1 rounded w-fit">{fix.source}</td>
//                                     <td className="px-6 py-4 text-xs text-slate-500">{fix.requestedDate}</td>
//                                     <td className="px-6 py-4"><StatusBadge status={fix.status} /></td>
//                                     <td className="px-6 py-4 text-right">
//                                         {fix.status === 'Quote Required' ? (
//                                             <button 
//                                                 onClick={() => handleSendQuote(fix)}
//                                                 className="bg-blue-600 text-white px-3 py-1.5 rounded text-xs font-bold hover:bg-blue-700 shadow-sm"
//                                             >
//                                                 Send Quote
//                                             </button>
//                                         ) : (
//                                             <span className="text-xs text-slate-400 italic">Quote Sent</span>
//                                         )}
//                                     </td>
//                                 </tr>
//                             ))}
//                         </tbody>
//                     </table>
//                 </div>
//             )}
//         </div>
//     );
// };

// const ClientsViewComponent = ({ clients, setIsNewClientModalOpen, setSelectedClient }) => {
//     const [searchQuery, setSearchQuery] = useState('');
//     const filteredClients = clients.filter(client => client.id.toLowerCase().includes(searchQuery.toLowerCase()) || client.name.toLowerCase().includes(searchQuery.toLowerCase()) || client.iec.includes(searchQuery));
    
//     return (
//       <div className="space-y-6 animate-in fade-in">
//           <div className="flex justify-between items-center"><h2 className="text-lg font-bold text-slate-800">Client Management</h2><div className="flex gap-4"><div className="relative"><Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={16} /><input type="text" placeholder="Search Client ID, Name, IEC..." value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} className="pl-9 pr-4 py-2 border border-slate-200 rounded-lg text-sm w-64" /></div><button onClick={() => setIsNewClientModalOpen(true)} className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-bold hover:bg-blue-700"><Plus size={18} /> Add New Client</button></div></div>
//           <div className="grid grid-cols-1 md:grid-cols-3 gap-6">{filteredClients.map(client => (
//               <div key={client.id} className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden hover:shadow-md transition-shadow">
//                   <div className="p-5 border-b border-slate-100 bg-slate-50 flex justify-between items-start">
//                       <div className="flex items-center gap-3">
//                           <div className="w-10 h-10 bg-slate-900 text-white rounded-lg flex items-center justify-center font-bold text-lg">{client.name.substring(0,1)}</div>
//                           <div><h3 className="font-bold text-slate-800 text-sm">{client.name}</h3><p className="text-xs text-slate-500 font-mono">{client.id}</p></div>
//                       </div>
//                       <StatusBadge status={client.status} />
//                   </div>
//                   <div className="p-5 space-y-4">
//                       <div className="grid grid-cols-2 gap-4">
//                           <div className="bg-slate-50 p-2 rounded border border-slate-100">
//                               <p className="text-[10px] text-slate-500 uppercase font-bold">Credit Limit</p>
//                               <p className="font-bold text-slate-800">₹ {client.creditLimit.toLocaleString()}</p>
//                           </div>
//                           <div className="bg-slate-50 p-2 rounded border border-slate-100">
//                               <p className="text-[10px] text-slate-500 uppercase font-bold">Wallet</p>
//                               <p className="font-bold text-slate-800">₹ {client.walletBalance.toLocaleString()}</p>
//                           </div>
//                       </div>
//                       <div className="flex items-center justify-between text-xs text-slate-500 border-t border-slate-100 pt-3">
//                           <span>Active Requests: <b>{client.serviceStats?.inProcess || 0}</b></span>
//                           <span>Risk: <b className={client.riskScore < 50 ? 'text-red-600' : 'text-green-600'}>{client.riskScore}/100</b></span>
//                       </div>
//                       <button onClick={() => setSelectedClient(client)} className="w-full bg-white border border-slate-200 text-slate-700 py-2 rounded-lg text-xs font-bold hover:bg-slate-50">View Profile</button>
//                   </div>
//               </div>
//           ))}</div>
//       </div>
//     );
// };

// export default function AdminPanel() {
//   const [activeTab, setActiveTab] = useState('dashboard');
  
//   // Data States
//   const [requests, setRequests] = useState(MASTER_REQUESTS);
//   const [quotes, setQuotes] = useState(MASTER_QUOTES);
//   const [clients, setClients] = useState(CLIENTS_DB);
//   const [invoices, setInvoices] = useState(INITIAL_INVOICES);
//   const [complianceFixes, setComplianceFixes] = useState(COMPLIANCE_FIX_REQUESTS);
  
//   // Selection States
//   const [selectedRequest, setSelectedRequest] = useState(null);
//   const [selectedClient, setSelectedClient] = useState(null);
//   const [selectedAudit, setSelectedAudit] = useState(null);
//   const [selectedAgent, setSelectedAgent] = useState(null);
//   const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);
//   const [isNewClientModalOpen, setIsNewClientModalOpen] = useState(false);
//   const [actionModalType, setActionModalType] = useState(null);
  
//   // Vault & Data Input States
//   const [currentVaultFolder, setCurrentVaultFolder] = useState(null);
//   const [vaultDocToEdit, setVaultDocToEdit] = useState(null);
  
//   // New Client Form State
//   const [newClientData, setNewClientData] = useState({ name: '', email: '', phone: '', type: 'Private Limited' });
//   const [generatedClientCreds, setGeneratedClientCreds] = useState(null);

//   // UI States
//   const [isSidebarOpen, setIsSidebarOpen] = useState(true);
//   const [quoteFilter, setQuoteFilter] = useState('All');
  
//   // Function States
//   const [clarificationNote, setClarificationNote] = useState('');
//   const [showPassword, setShowPassword] = useState({});
//   const [docFormData, setDocFormData] = useState({});
  
//   // Chat States
//   const [isChatOpen, setIsChatOpen] = useState(false);
//   const [chatMessage, setChatMessage] = useState('');
//   const [chatHistory, setChatHistory] = useState([]);

//   // --- HANDLERS ---

//   const handleStatusChange = (reqId, newStatus) => {
//     const request = requests.find(r => r.id === reqId);

//     setRequests(prev => prev.map(r => r.id === reqId ? { ...r, status: newStatus } : r));
//     if (selectedRequest && selectedRequest.id === reqId) {
//       setSelectedRequest(prev => ({ ...prev, status: newStatus }));
//     }

//     setInvoices(prev => {
//       const existingInvoice = prev.find(inv => inv.reqNo === reqId);

//       if (newStatus !== 'Invoice Write-Off') {
//         return prev.filter(inv => !(inv.reqNo === reqId && inv.status === 'Invoice Write-Off' && inv.mode === 'Write-Off'));
//       }

//       if (!request) return prev;

//       const writeOffInvoice = {
//         id: existingInvoice?.id || `WO-${reqId.replace(/^REQ-/, '')}`,
//         client: request.clientName,
//         reqNo: request.id,
//         service: request.service,
//         category: request.category,
//         date: new Date().toISOString().slice(0, 10),
//         amount: request.cost || 0,
//         status: 'Invoice Write-Off',
//         mode: 'Write-Off',
//         dueDate: '-',
//         details: [{ item: 'Invoice Write-Off', cost: request.cost || 0 }]
//       };

//       if (existingInvoice) {
//         return prev.map(inv => inv.reqNo === reqId ? { ...inv, ...writeOffInvoice } : inv);
//       }

//       return [writeOffInvoice, ...prev];
//     });
//   };

//   const handleApproveQuote = (quote) => {
//       setQuotes(prev => prev.map(q => q.id === quote.id ? { ...q, status: 'Approved' } : q));
//       // Add to Requests
//       const newReq = {
//           id: `REQ-${Math.floor(Math.random()*10000)}`,
//           clientId: 'C-002',
//           clientName: quote.client,
//           service: quote.service,
//           category: quote.category || 'Compliance Fix',
//           status: 'Submitted',
//           priority: 'High',
//           assignee: 'Unassigned',
//           submissionTime: new Date().toISOString(),
//           slaHours: 48,
//           cost: quote.amount,
//           isBilled: false,
//           documents: [],
//           outputs: [],
//           messages: [{id: 1, sender: 'system', text: `Generated from approved quote ${quote.id}`}]
//       };
//       setRequests(prev => [newReq, ...prev]);
//   };

//   const handleSendQuoteForFix = (fix) => {
//       // 1. Update Fix Status
//       setComplianceFixes(prev => prev.map(f => f.id === fix.id ? { ...f, status: 'Quote Sent' } : f));
//       // 2. Create Quote
//       const newQuote = {
//           id: `Q-${Math.floor(Math.random()*1000)}`,
//           client: fix.clientName,
//           service: `Compliance Fix: ${fix.issue}`,
//           category: 'Compliance',
//           amount: 15000, // Mock amount
//           date: new Date().toLocaleDateString('en-US', {month:'short', day:'numeric', year:'numeric'}),
//           status: 'Pending Approval',
//           description: fix.description
//       };
//       setQuotes(prev => [newQuote, ...prev]);
//       setIsQuoteModalOpen(true); // Open modal to show it's added
//   };

//   const handleDocDataSave = () => {
//       setVaultDocToEdit(null);
//       setDocFormData({});
//   };

//   const handleCreateClient = (e) => {
//       e.preventDefault();
//       const newId = `C-${Math.floor(Math.random() * 10000)}`;
//       const loginId = newClientData.name.toLowerCase().replace(/\s+/g, '_') + '_' + Math.floor(Math.random()*100);
//       const tempPass = Math.random().toString(36).slice(-8).toUpperCase();
      
//       const newClient = {
//           id: newId,
//           name: newClientData.name,
//           iec: 'PENDING',
//           type: newClientData.type,
//           tier: 'Silver',
//           walletBalance: 0,
//           creditLimit: 0,
//           creditUsed: 0,
//           status: 'Active',
//           riskScore: 100, // Default safe
//           serviceStats: { submitted: 0, inProcess: 0, completed: 0, needsAction: 0 },
//           monthlyUsage: [0,0,0,0,0,0],
//           statutory: {},
//           credentials: [
//               { id: Date.now(), portal: 'Eximinq Portal', username: loginId, password: tempPass, lastLogin: 'Never' }
//           ],
//           branches: []
//       };
      
//       setClients([...clients, newClient]);
//       setGeneratedClientCreds({ id: newId, login: loginId, password: tempPass });
//   };

//   const openChat = (req) => {
//     setSelectedRequest(req);
//     setChatHistory(req.messages || []);
//     setIsChatOpen(true);
//   };

//   const sendChatMessage = () => {
//     if (!chatMessage.trim()) return;
//     const newMsg = { id: Date.now(), sender: 'admin', text: chatMessage };
//     const updatedHistory = [...chatHistory, newMsg];
//     setChatHistory(updatedHistory);
//     setRequests(prev => prev.map(r => r.id === selectedRequest.id ? { ...r, messages: updatedHistory } : r));
//     setChatMessage('');
//   };

//   // --- RENDER ---

//   return (
//     <div className="min-h-screen bg-slate-900 flex text-slate-100 font-sans">
      
//       {/* Sidebar */}
//       <aside className={`bg-slate-900 border-r border-slate-800 flex flex-col transition-all duration-300 ${isSidebarOpen ? 'w-64' : 'w-20'}`}>
//         <div className="h-16 flex items-center px-6 border-b border-slate-800">
//           <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center font-bold text-white shrink-0">A</div>
//           {isSidebarOpen && <span className="ml-3 font-bold text-lg tracking-tight">Admin<span className="text-blue-500">Panel</span></span>}
//         </div>

//         <div className="flex-1 py-6 space-y-1 overflow-y-auto custom-scrollbar">
//           <SidebarItem id="dashboard" label="Command Center" icon={LayoutDashboard} activeTab={activeTab} setActiveTab={setActiveTab} isSidebarOpen={isSidebarOpen} />
//           <SidebarItem id="workforce" label="Workforce" icon={Users} activeTab={activeTab} setActiveTab={setActiveTab} isSidebarOpen={isSidebarOpen} />
//           <SidebarItem id="requests" label="Request Board" icon={Layers} activeTab={activeTab} setActiveTab={setActiveTab} isSidebarOpen={isSidebarOpen} />
//           <SidebarItem id="clients" label="Client Management" icon={Building} activeTab={activeTab} setActiveTab={setActiveTab} isSidebarOpen={isSidebarOpen} />
//           <SidebarItem id="vault" label="Smart Vault" icon={FileBox} activeTab={activeTab} setActiveTab={setActiveTab} isSidebarOpen={isSidebarOpen} />
//           <SidebarItem id="wallet_usage" label="Wallet & Credit" icon={Wallet} activeTab={activeTab} setActiveTab={setActiveTab} isSidebarOpen={isSidebarOpen} />
//           <SidebarItem id="finance_billing" label="Invoice & Billing" icon={Receipt} activeTab={activeTab} setActiveTab={setActiveTab} isSidebarOpen={isSidebarOpen} />
//           <SidebarItem id="audit" label="Compliance Audits" icon={Shield} activeTab={activeTab} setActiveTab={setActiveTab} isSidebarOpen={isSidebarOpen} />
//         </div>

//         <div className="p-4 border-t border-slate-800">
//           <button onClick={() => setIsSidebarOpen(!isSidebarOpen)} className="w-full flex items-center justify-center p-2 text-slate-400 hover:text-white hover:bg-slate-800 rounded-lg transition-colors">
//             {isSidebarOpen ? <ArrowDownLeft className="rotate-45" size={20} /> : <ArrowUpRight className="rotate-45" size={20} />}
//           </button>
//         </div>
//       </aside>

//       {/* Main Content */}
//       <main className="flex-1 flex flex-col min-w-0 bg-slate-50 text-slate-900">
//         <header className="h-16 bg-white border-b border-slate-200 flex items-center justify-between px-6 sticky top-0 z-30 shadow-sm">
//           <h1 className="font-bold text-slate-800 text-xl capitalize">{activeTab.replace('_', ' ')}</h1>
//           <div className="flex items-center gap-4">
//              <button className="p-2 text-slate-400 hover:text-blue-600 hover:bg-blue-50 rounded-full transition-colors relative">
//                 <Bell size={20} />
//                 <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-red-500 rounded-full border border-white"></span>
//              </button>
//              <div className="h-8 w-px bg-slate-200"></div>
//              <div className="flex items-center gap-3">
//                 <div className="text-right hidden md:block">
//                    <p className="text-sm font-bold text-slate-800">Admin User</p>
//                    <p className="text-xs text-slate-500">Super Admin</p>
//                 </div>
//                 <div className="w-9 h-9 bg-slate-800 rounded-full flex items-center justify-center text-white font-bold">AD</div>
//              </div>
//           </div>
//         </header>

//         {/* Content Area */}
//         <div className="flex-1 overflow-auto p-6 custom-scrollbar">
//            {activeTab === 'dashboard' && <DashboardViewComponent requests={requests} quotes={quotes} setActiveTab={setActiveTab} openQuoteModal={() => setIsQuoteModalOpen(true)} openActionModal={setActionModalType} />}
//            {activeTab === 'workforce' && <WorkforceViewComponent selectedAgent={selectedAgent} setSelectedAgent={setSelectedAgent} />}
//            {activeTab === 'requests' && <RequestsViewComponent requests={requests} openChat={openChat} setSelectedRequest={setSelectedRequest} handleSendQuote={handleSendQuoteForFix} />}
//            {activeTab === 'vault' && <SmartVaultViewComponent currentVaultFolder={currentVaultFolder} setCurrentVaultFolder={setCurrentVaultFolder} setVaultDocToEdit={setVaultDocToEdit} />}
//            {activeTab === 'clients' && <ClientsViewComponent clients={clients} setIsNewClientModalOpen={setIsNewClientModalOpen} setSelectedClient={setSelectedClient} />}
//            {activeTab === 'wallet_usage' && <WalletCreditDashboard requests={requests} />}
//            {activeTab === 'finance_billing' && <InvoiceBillingDashboard invoices={invoices} />}
//            {activeTab === 'audit' && <ComplianceAuditViewComponent setSelectedAudit={setSelectedAudit} />}
//         </div>
//       </main>

//       {/* MODAL: ADD NEW CLIENT */}
//       <Modal isOpen={isNewClientModalOpen} onClose={() => { setIsNewClientModalOpen(false); setGeneratedClientCreds(null); }} title="Add New Client">
//           {!generatedClientCreds ? (
//               <form onSubmit={handleCreateClient} className="space-y-4">
//                   <div><label className="text-sm font-bold text-slate-700">Company Name</label><input required type="text" className="w-full p-2 border border-slate-200 rounded mt-1 bg-white text-slate-800" value={newClientData.name} onChange={e => setNewClientData({...newClientData, name: e.target.value})} placeholder="e.g. Alpha Exports" /></div>
//                   <div className="grid grid-cols-2 gap-4">
//                       <div><label className="text-sm font-bold text-slate-700">Phone</label><input required type="text" className="w-full p-2 border border-slate-200 rounded mt-1 bg-white text-slate-800" value={newClientData.phone} onChange={e => setNewClientData({...newClientData, phone: e.target.value})} placeholder="+91..." /></div>
//                       <div><label className="text-sm font-bold text-slate-700">Type</label><select className="w-full p-2 border border-slate-200 rounded mt-1 bg-white text-slate-800" value={newClientData.type} onChange={e => setNewClientData({...newClientData, type: e.target.value})}><option value="Private Limited">Private Limited</option><option value="Partnership">Partnership</option><option value="Proprietorship">Proprietorship</option></select></div>
//                   </div>
//                   <div><label className="text-sm font-bold text-slate-700">Email</label><input required type="email" className="w-full p-2 border border-slate-200 rounded mt-1 bg-white text-slate-800" value={newClientData.email} onChange={e => setNewClientData({...newClientData, email: e.target.value})} placeholder="admin@alpha.com" /></div>
//                   <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded font-bold hover:bg-blue-700 mt-4">Create Client Account</button>
//               </form>
//           ) : (
//               <div className="space-y-4 text-center">
//                   <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-4"><CheckCircle size={32} /></div>
//                   <h3 className="text-xl font-bold text-slate-800">Client Created Successfully!</h3>
//                   <div className="bg-slate-50 p-4 rounded border border-slate-200 text-left space-y-2">
//                       <div className="flex justify-between"><span className="text-slate-500">Client ID:</span><span className="font-mono font-bold text-slate-800">{generatedClientCreds.id}</span></div>
//                       <div className="flex justify-between"><span className="text-slate-500">Login ID:</span><span className="font-mono font-bold text-blue-600">{generatedClientCreds.login}</span></div>
//                       <div className="flex justify-between"><span className="text-slate-500">Temp Password:</span><span className="font-mono font-bold text-red-600">{generatedClientCreds.password}</span></div>
//                   </div>
//                   <p className="text-xs text-slate-400">Share these credentials securely with the client.</p>
//                   <button onClick={() => { setIsNewClientModalOpen(false); setGeneratedClientCreds(null); }} className="w-full bg-slate-800 text-white py-2 rounded font-bold hover:bg-slate-700">Close</button>
//               </div>
//           )}
//       </Modal>

//       {/* MODAL: ADMIN DATA INPUT FOR VAULT (Enhanced with Document Fields) */}
//       <Modal isOpen={!!vaultDocToEdit} onClose={() => setVaultDocToEdit(null)} title="Data Entry & Audit Input">
//           {vaultDocToEdit && (
//               <div className="space-y-4">
//                   <div className="bg-blue-50 p-3 rounded flex items-center gap-3 border border-blue-100"><FileText size={20} className="text-blue-600" /><div className="text-sm"><p className="font-bold text-slate-800">{vaultDocToEdit.name}</p><p className="text-xs text-slate-500">Extraction for Analytics & Compliance</p></div></div>
                  
//                   <div className="grid grid-cols-2 gap-4">
//                       <div><label className="text-[10px] font-bold text-slate-500 uppercase">Document No</label><input type="text" className="w-full border p-1.5 rounded text-sm font-mono text-slate-800" defaultValue={vaultDocToEdit.details?.sb_no || vaultDocToEdit.details?.boe_no || vaultDocToEdit.details?.lic_no} /></div>
//                       <div><label className="text-[10px] font-bold text-slate-500 uppercase">Date</label><input type="text" className="w-full border p-1.5 rounded text-sm text-slate-800" defaultValue={vaultDocToEdit.details?.sb_date || vaultDocToEdit.details?.boe_date || vaultDocToEdit.details?.lic_date} /></div>
//                   </div>

//                   <h4 className="text-xs font-bold text-slate-400 uppercase border-b border-slate-100 pb-1 mt-2">Logistics & Valuation</h4>
//                   <div className="grid grid-cols-2 gap-3">
//                       <div><label className="text-[10px] font-bold text-slate-500 uppercase">Port of Loading</label><input type="text" className="w-full border p-1.5 rounded text-sm text-slate-800" defaultValue={vaultDocToEdit.details?.port} placeholder="e.g. INNSA1" /></div>
//                       <div><label className="text-[10px] font-bold text-slate-500 uppercase">Country Discharge</label><input type="text" className="w-full border p-1.5 rounded text-sm text-slate-800" placeholder="e.g. US" /></div>
//                       <div><label className="text-[10px] font-bold text-slate-500 uppercase">FOB Value (FC)</label><input type="number" className="w-full border p-1.5 rounded text-sm text-slate-800" defaultValue={vaultDocToEdit.details?.fob?.replace(/[^0-9.]/g, '')} placeholder="0.00" /></div>
//                       <div><label className="text-[10px] font-bold text-slate-500 uppercase">Freight</label><input type="number" className="w-full border p-1.5 rounded text-sm text-slate-800" placeholder="0.00" /></div>
//                       <div><label className="text-[10px] font-bold text-slate-500 uppercase">Insurance</label><input type="number" className="w-full border p-1.5 rounded text-sm text-slate-800" placeholder="0.00" /></div>
//                       <div><label className="text-[10px] font-bold text-slate-500 uppercase">Exchange Rate</label><input type="number" className="w-full border p-1.5 rounded text-sm text-slate-800" placeholder="e.g. 84.50" /></div>
//                   </div>

//                   <h4 className="text-xs font-bold text-slate-400 uppercase border-b border-slate-100 pb-1 mt-2">Schemes & Benefits</h4>
//                   <div className="grid grid-cols-2 gap-3">
//                       <div><label className="text-[10px] font-bold text-slate-500 uppercase">Scheme Code</label><input type="text" className="w-full border p-1.5 rounded text-sm text-slate-800" placeholder="e.g. 19" /></div>
//                       <div><label className="text-[10px] font-bold text-slate-500 uppercase">License No</label><input type="text" className="w-full border p-1.5 rounded text-sm text-slate-800" defaultValue={vaultDocToEdit.details?.license} /></div>
//                       <div><label className="text-[10px] font-bold text-slate-500 uppercase">DBK Amt (₹)</label><input type="number" className="w-full border p-1.5 rounded text-sm text-slate-800" defaultValue={vaultDocToEdit.details?.dbk?.replace(/[^0-9.]/g, '')} /></div>
//                       <div><label className="text-[10px] font-bold text-slate-500 uppercase">RoDTEP Amt (₹)</label><input type="number" className="w-full border p-1.5 rounded text-sm text-slate-800" defaultValue={vaultDocToEdit.details?.rodtep?.replace(/[^0-9.]/g, '')} /></div>
//                   </div>
                  
//                   <div className="pt-4 flex gap-3"><button onClick={() => setVaultDocToEdit(null)} className="flex-1 py-2 border border-slate-200 rounded text-slate-600 text-sm font-bold hover:bg-slate-50">Cancel</button><button onClick={handleDocDataSave} className="flex-1 py-2 bg-blue-600 text-white rounded text-sm font-bold hover:bg-blue-700">Save & Calc Audit</button></div>
//               </div>
//           )}
//       </Modal>

//       {/* CLIENT PROFILE MODAL (Enhanced) */}
//       <Modal isOpen={!!selectedClient} onClose={() => { setSelectedClient(null); setShowPassword({}); }} title="Client Profile" maxWidth="max-w-3xl">
//          {selectedClient && (
//             <div className="space-y-6">
//                <div className="flex items-start justify-between pb-4 border-b border-slate-100"><div className="flex items-center gap-4"><div className="w-14 h-14 bg-blue-100 text-blue-700 rounded-xl flex items-center justify-center font-bold text-2xl">{selectedClient.name.substring(0,1)}</div><div><h3 className="font-bold text-slate-800 text-xl">{selectedClient.name}</h3><div className="flex items-center gap-3 mt-1"><span className="text-sm text-slate-500 font-mono bg-slate-100 px-2 py-0.5 rounded">ID: {selectedClient.id}</span><span className="text-sm font-bold text-blue-700 bg-blue-50 px-2 py-0.5 rounded border border-blue-100">IEC: {selectedClient.iec}</span></div></div></div></div>
               
//                {/* Credit Line Section */}
//                <div className="bg-gradient-to-r from-slate-900 to-slate-800 rounded-xl p-4 text-white flex justify-between items-center">
//                    <div>
//                        <p className="text-slate-400 text-xs uppercase font-bold">Available Credit Line</p>
//                        <p className="text-2xl font-mono font-bold">₹ {(selectedClient.creditLimit - selectedClient.creditUsed).toLocaleString()}</p>
//                        <p className="text-xs text-slate-500 mt-1">Total Limit: ₹ {selectedClient.creditLimit.toLocaleString()}</p>
//                    </div>
//                    <div className="text-right">
//                        <p className="text-slate-400 text-xs uppercase font-bold">Wallet Balance</p>
//                        <p className="text-xl font-mono font-bold text-blue-400">₹ {selectedClient.walletBalance.toLocaleString()}</p>
//                    </div>
//                </div>

//                {/* Service Stats */}
//                <div className="grid grid-cols-4 gap-4 text-center">
//                    <div className="p-3 bg-blue-50 rounded-lg border border-blue-100"><p className="text-2xl font-bold text-blue-700">{selectedClient.serviceStats?.submitted || 0}</p><p className="text-[10px] text-blue-600 uppercase font-bold">Submitted</p></div>
//                    <div className="p-3 bg-amber-50 rounded-lg border border-amber-100"><p className="text-2xl font-bold text-amber-700">{selectedClient.serviceStats?.inProcess || 0}</p><p className="text-[10px] text-amber-600 uppercase font-bold">In Process</p></div>
//                    <div className="p-3 bg-green-50 rounded-lg border border-green-100"><p className="text-2xl font-bold text-green-700">{selectedClient.serviceStats?.completed || 0}</p><p className="text-[10px] text-green-600 uppercase font-bold">Completed</p></div>
//                    <div className="p-3 bg-red-50 rounded-lg border border-red-100"><p className="text-2xl font-bold text-red-700">{selectedClient.serviceStats?.needsAction || 0}</p><p className="text-[10px] text-red-600 uppercase font-bold">Action Req</p></div>
//                </div>

//                {/* Monthly Usage Graph (Mock) */}
//                <div>
//                    <h4 className="font-bold text-slate-800 text-sm mb-3 flex items-center gap-2"><TrendingUp size={16} /> Monthly Service Usage</h4>
//                    <div className="flex items-end h-24 gap-2 border-b border-slate-200 pb-2 px-2">
//                        {selectedClient.monthlyUsage?.map((count, i) => (
//                            <div key={i} className="flex-1 bg-slate-100 rounded-t hover:bg-blue-200 transition-colors relative group">
//                                <div className="absolute bottom-0 w-full bg-blue-600 rounded-t" style={{height: `${count * 2}%`}}></div>
//                                <span className="absolute -top-6 left-1/2 -translate-x-1/2 text-xs font-bold bg-slate-800 text-white px-1.5 rounded opacity-0 group-hover:opacity-100 transition-opacity">{count}</span>
//                            </div>
//                        ))}
//                    </div>
//                    <div className="flex justify-between text-[10px] text-slate-400 mt-1 px-2"><span>May</span><span>Jun</span><span>Jul</span><span>Aug</span><span>Sep</span><span>Oct</span></div>
//                </div>

//                {/* Standard Credentials & Statutory */}
//                <div className="grid grid-cols-2 gap-4"><div className="p-3 border border-slate-200 rounded-lg"><p className="text-xs text-slate-500 uppercase">GSTIN</p><p className="font-mono font-bold text-slate-800">{selectedClient.statutory?.gst || 'N/A'}</p></div><div className="p-3 border border-slate-200 rounded-lg"><p className="text-xs text-slate-500 uppercase">PAN</p><p className="font-mono font-bold text-slate-800">{selectedClient.statutory?.pan || 'N/A'}</p></div></div>
               
//                <div><h4 className="font-bold text-slate-800 mb-3 flex items-center gap-2"><Lock size={16} /> Portal Credentials</h4><div className="border border-slate-200 rounded-lg overflow-hidden"><table className="w-full text-sm text-left"><thead className="bg-slate-50 text-slate-500 text-xs font-bold uppercase"><tr><th className="px-4 py-2">Portal</th><th className="px-4 py-2">Username</th><th className="px-4 py-2">Password</th></tr></thead><tbody className="divide-y divide-slate-100">{selectedClient.credentials.map(cred => (<tr key={cred.id}><td className="px-4 py-3 font-medium">{cred.portal}</td><td className="px-4 py-3 font-mono text-slate-600">{cred.username}</td><td className="px-4 py-3 font-mono"><div className="flex items-center gap-2"><span>{showPassword[cred.id] ? cred.password : '••••••••'}</span><button onClick={() => setShowPassword({...showPassword, [cred.id]: !showPassword[cred.id]})} className="text-slate-400 hover:text-blue-600">{showPassword[cred.id] ? <EyeOff size={14} /> : <Eye size={14} />}</button></div></td></tr>))}</tbody></table></div></div>
//             </div>
//          )}
//       </Modal>

//       {/* ... (Other Modals: Quote Management, Request Detail - implicitly included same as before) ... */}
//       <Modal isOpen={!!selectedRequest && !isChatOpen} onClose={() => { setSelectedRequest(null); setClarificationNote(''); }} title={`Manage Request: ${selectedRequest?.id}`} maxWidth="max-w-4xl">
//         {selectedRequest && (
//           <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
//             <div className="lg:col-span-2 space-y-6"><div className="grid grid-cols-2 gap-4 text-sm bg-slate-50 p-4 rounded-xl border border-slate-100"><div><p className="text-slate-500 mb-1">Client ID</p><p className="font-mono font-bold text-blue-700">{selectedRequest.clientId}</p></div><div><p className="text-slate-500 mb-1">Service Type</p><p className="font-bold text-slate-800">{selectedRequest.service}</p></div><div><p className="text-slate-500 mb-1">Submission Time</p><p className="font-medium text-slate-800">{new Date(selectedRequest.submissionTime).toLocaleString()}</p></div><div><p className="text-slate-500 mb-1">Cost</p><p className="font-medium text-slate-800">₹ {selectedRequest.cost.toLocaleString()}</p></div></div><div><h4 className="font-bold text-slate-800 mb-3 flex items-center gap-2"><FileCheck size={18} /> Smart Vault Documents</h4>{selectedRequest.documents && selectedRequest.documents.length > 0 ? (<div className="border border-slate-200 rounded-lg overflow-hidden"><table className="w-full text-sm text-left"><thead className="bg-slate-100 text-slate-600 text-xs uppercase font-bold"><tr><th className="px-4 py-2">Doc Type</th><th className="px-4 py-2">Ref No.</th><th className="px-4 py-2">Date</th><th className="px-4 py-2">Status</th><th className="px-4 py-2 text-right">Action</th></tr></thead><tbody className="divide-y divide-slate-100">{selectedRequest.documents.map(doc => (<tr key={doc.id}><td className="px-4 py-2 font-medium">{doc.type}</td><td className="px-4 py-2 font-mono text-xs">{doc.docNo}</td><td className="px-4 py-2 text-xs text-slate-500">{doc.date}</td><td className="px-4 py-2"><span className={`text-[10px] font-bold px-2 py-0.5 rounded ${doc.status === 'Verified' ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>{doc.status}</span></td><td className="px-4 py-2 text-right text-blue-600 hover:underline cursor-pointer text-xs">View</td></tr>))}</tbody></table></div>) : <p className="text-slate-400 italic text-sm">No documents uploaded yet.</p>}</div>
//             {/* Output Files Section */}
//             {selectedRequest.status === 'Completed' && (
//                 <div>
//                     <h4 className="font-bold text-slate-800 mb-3 flex items-center gap-2"><UploadCloud size={18} /> Deliverables & Output</h4>
//                     <div className="bg-green-50 rounded-lg p-4 border border-green-100">
//                         {selectedRequest.outputs && selectedRequest.outputs.length > 0 ? (
//                             <div className="space-y-2">
//                                 {selectedRequest.outputs.map((out, i) => (
//                                     <div key={i} className="flex justify-between items-center bg-white p-2 rounded border border-green-100">
//                                         <div>
//                                             <p className="text-sm font-bold text-green-800">{out.name}</p>
//                                             <p className="text-xs text-green-600 font-mono">{out.type} • {out.docNo}</p>
//                                         </div>
//                                         <button className="text-xs text-slate-500 hover:text-red-600"><Trash2 size={14} /></button>
//                                     </div>
//                                 ))}
//                             </div>
//                         ) : <p className="text-xs text-green-700 italic mb-2">No output files uploaded yet.</p>}
                        
//                         <div className="mt-4 pt-4 border-t border-green-200">
//                             <label className="text-xs font-bold text-green-800 mb-1 block">Upload New Deliverable</label>
//                             <div className="grid grid-cols-2 gap-2 mb-2">
//                                 <input className="text-xs border p-1 rounded" placeholder="Doc No / Issuance No" />
//                                 <input type="date" className="text-xs border p-1 rounded" />
//                             </div>
//                             <div className="flex gap-2">
//                                 <button className="flex-1 bg-white border border-green-300 text-green-700 text-xs font-bold py-2 rounded hover:bg-green-100">Select File</button>
//                                 <button className="flex-1 bg-green-600 text-white text-xs font-bold py-2 rounded hover:bg-green-700">Upload</button>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             )}
//             </div>
//             <div className="space-y-4"><div className="bg-white border border-slate-200 rounded-xl p-4 shadow-sm"><label className="text-sm font-bold text-slate-700 block mb-2">Update Status</label><select value={selectedRequest.status} onChange={(e) => handleStatusChange(selectedRequest.id, e.target.value)} className="w-full p-2.5 border border-slate-300 rounded-lg text-sm bg-white text-slate-800 focus:ring-2 focus:ring-blue-500 focus:outline-none"><option value="Submitted">Submitted</option><option value="In Process">In Process</option><option value="Quote Requested">Quote Requested</option><option value="Approval Pending">Approval Pending</option><option value="Needs Clarification">Needs Clarification</option><option value="Invoice Write-Off">Invoice Write-Off</option><option value="Completed">Completed</option></select>{selectedRequest.status === 'Needs Clarification' && (<div className="mt-4 animate-in fade-in"><label className="text-xs font-bold text-orange-700 mb-1 block">Required Details / Missing Docs</label><textarea value={clarificationNote} onChange={(e) => setClarificationNote(e.target.value)} className="w-full p-2 text-sm border border-orange-200 rounded-lg focus:outline-none focus:border-orange-500 bg-orange-50 placeholder-orange-300" rows="3" placeholder="E.g., Please upload original EODC copy..." /></div>)}</div><div className="bg-blue-50 p-4 rounded-xl border border-blue-100"><h4 className="text-sm font-bold text-blue-800 mb-2">Admin Actions</h4><div className="flex flex-col gap-2"><button className="w-full bg-white border border-blue-200 text-blue-700 py-2 rounded font-medium text-xs hover:bg-blue-100">Generate Invoice</button><button className="w-full bg-white border border-blue-200 text-blue-700 py-2 rounded font-medium text-xs hover:bg-blue-100">Upload Output Doc</button></div></div><button onClick={() => setSelectedRequest(null)} className="w-full bg-slate-900 text-white py-3 rounded-lg font-bold hover:bg-slate-800">Save Changes</button></div>
//           </div>
//         )}
//       </Modal>

//       <Modal isOpen={!!actionModalType} onClose={() => setActionModalType(null)} title={actionModalType?.replace('_', ' ').toUpperCase()} maxWidth="max-w-md">
//           <div className="space-y-4">
//               <p className="text-slate-600 text-sm">Action functionality placeholder for: <b>{actionModalType}</b></p>
//               {actionModalType === 'broadcast' && <textarea className="w-full p-2 border border-slate-200 rounded text-sm" placeholder="Type broadcast message..." rows={3}></textarea>}
//               <div className="flex justify-end gap-2 pt-2"><button onClick={() => setActionModalType(null)} className="px-4 py-2 text-sm text-slate-500 hover:bg-slate-50 rounded">Cancel</button><button onClick={() => setActionModalType(null)} className="px-4 py-2 text-sm bg-blue-600 text-white rounded hover:bg-blue-700">Proceed</button></div>
//           </div>
//       </Modal>

//       <Modal isOpen={isQuoteModalOpen} onClose={() => setIsQuoteModalOpen(false)} title="Quote Management" maxWidth="max-w-4xl">
//           <div className="space-y-6">
//               <div className="grid grid-cols-3 gap-4 mb-4"><div className="bg-slate-50 p-4 rounded-lg border border-slate-200 text-center"><p className="text-xs font-bold text-slate-500 uppercase">Total Requested</p><p className="text-2xl font-bold text-slate-800">{quotes.length}</p></div><div className="bg-green-50 p-4 rounded-lg border border-green-200 text-center"><p className="text-xs font-bold text-green-700 uppercase">Approved</p><p className="text-2xl font-bold text-green-800">{quotes.filter(q => q.status === 'Approved').length}</p></div><div className="bg-amber-50 p-4 rounded-lg border border-amber-200 text-center"><p className="text-xs font-bold text-amber-700 uppercase">Pending Action</p><p className="text-2xl font-bold text-amber-800">{quotes.filter(q => q.status === 'Pending Approval').length}</p></div></div>
//               <div className="flex justify-between items-center"><h4 className="font-bold text-slate-800">Requests</h4><select value={quoteFilter} onChange={(e) => setQuoteFilter(e.target.value)} className="text-sm border border-slate-200 rounded-lg p-2 bg-white"><option value="All">All Categories</option><option value="Licensing">Licensing</option><option value="Legal">Legal</option><option value="Transactional">Transactional</option></select></div>
//               {quotes.filter(q => quoteFilter === 'All' || q.category === quoteFilter).map(quote => (<div key={quote.id} className="border border-slate-200 rounded-xl p-5 flex flex-col md:flex-row gap-6 hover:shadow-sm transition-shadow"><div className="flex-1"><div className="flex items-center gap-3 mb-2"><h3 className="font-bold text-slate-800 text-lg">{quote.service}</h3><span className={`text-xs px-2 py-0.5 rounded font-bold ${quote.status === 'Approved' ? 'bg-green-100 text-green-700' : 'bg-indigo-100 text-indigo-700'}`}>{quote.status}</span><span className="text-xs bg-slate-100 text-slate-500 px-2 py-0.5 rounded">{quote.category}</span></div><p className="text-sm font-medium text-slate-600 mb-2">Client: {quote.client}</p><p className="text-sm text-slate-500 bg-slate-50 p-3 rounded-lg">{quote.description}</p></div><div className="flex flex-col items-end justify-center gap-3 min-w-[150px]"><div className="text-right"><p className="text-xs text-slate-400 uppercase font-bold">Quoted Amount</p><p className="text-2xl font-bold text-slate-800">₹ {quote.amount.toLocaleString()}</p></div>{quote.status !== 'Approved' && (<button onClick={() => handleApproveQuote(quote)} className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-bold hover:bg-blue-700 shadow-sm w-full">Approve & Convert</button>)}</div></div>))}
//               {quotes.length === 0 && <div className="text-center py-10 text-slate-400">No quotes found.</div>}
//           </div>
//       </Modal>

//       {/* CHAT DRAWER */}
//       {isChatOpen && selectedRequest && (
//         <div className="fixed inset-y-0 right-0 w-full md:w-96 bg-white shadow-2xl z-50 border-l border-slate-200 flex flex-col animate-in slide-in-from-right duration-300">
//           <div className="p-4 border-b border-slate-100 flex justify-between items-center bg-slate-50"><div><h3 className="font-bold text-slate-800">Support Chat</h3><p className="text-xs text-blue-600 font-mono">{selectedRequest.id}</p></div><button onClick={() => setIsChatOpen(false)} className="p-2 hover:bg-slate-200 rounded-full text-slate-500"><X size={20} /></button></div>
//           <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-slate-50/50 custom-scrollbar">{chatHistory.length === 0 && <div className="text-center text-slate-400 text-sm py-8">No messages yet. Start a conversation.</div>}{chatHistory.map((msg, idx) => (<div key={idx} className={`flex ${msg.sender === 'admin' ? 'justify-end' : 'justify-start'}`}><div className={`max-w-[85%] p-3 rounded-xl text-sm shadow-sm ${msg.sender === 'admin' ? 'bg-blue-600 text-white rounded-br-none' : 'bg-white border border-slate-200 text-slate-800 rounded-bl-none'}`}>{msg.text}</div></div>))}</div>
//           <div className="p-4 border-t border-slate-100 bg-white"><div className="flex gap-2"><input type="text" value={chatMessage} onChange={(e) => setChatMessage(e.target.value)} onKeyPress={(e) => e.key === 'Enter' && sendChatMessage()} placeholder="Type a reply..." className="flex-1 px-4 py-2 border border-slate-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500" /><button onClick={sendChatMessage} className="p-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"><Send size={20} /></button></div></div>
//         </div>
//       )}

//     </div>
//   );
// }


//Agent Dashboard

// import React, { useState, useEffect, useMemo } from 'react';
// import { 
//   LayoutDashboard, 
//   FileText, 
//   Settings, 
//   Bell, 
//   Search, 
//   CheckCircle, 
//   XCircle, 
//   Clock, 
//   MoreVertical, 
//   ArrowUpRight, 
//   ArrowDownLeft, 
//   Filter, 
//   MessageSquare, 
//   ChevronRight, 
//   Shield, 
//   Briefcase, 
//   PieChart, 
//   Activity, 
//   Menu, 
//   X, 
//   LogOut, 
//   Download, 
//   AlertCircle, 
//   Eye, 
//   EyeOff,
//   Send, 
//   UserCheck, 
//   Building, 
//   Wallet, 
//   Globe, 
//   Lock,
//   Layers, 
//   Plus,
//   Copy,
//   Edit2,
//   Trash2,
//   FileCheck,
//   AlertTriangle,
//   Save,
//   BarChart3,
//   TrendingUp,
//   Calendar,
//   Flag,
//   PenTool,
//   Hash,
//   FileBox,
//   Megaphone,
//   RefreshCw,
//   FileInput,
//   Folder,
//   ChevronDown,
//   UploadCloud,
//   ChevronUp,
//   AlertOctagon,
//   Wrench,
//   CheckSquare,
//   Award // Added missing import
// } from 'lucide-react';

// // --- MOCK DATA FOR AGENT CONTEXT ---

// const AGENT_PROFILE = {
//   id: 'A-002',
//   name: 'Vikram Singh',
//   role: 'Licensing Expert',
//   avatar: 'VS',
//   stats: {
//     pending: 8,
//     completedMonth: 32,
//     rating: 4.5,
//     productivity: 88,
//     avgTime: '2.5 Days'
//   }
// };

// const MY_TASKS = [
//   { 
//     id: 'REQ-2025-1004', clientId: 'C-001', clientName: 'Acme Exports', service: 'SCOMET Application', category: 'Licensing', status: 'Submitted', priority: 'Critical', 
//     submissionTime: '2025-10-20T10:00:00', slaHours: 120, slaStatus: 'On Track', 
//     documents: [
//        { id: 1, type: 'Tech Specs', docNo: 'TS-9921', date: '2025-10-20', status: 'Verified', name: 'tech_specs.pdf' }
//     ],
//     messages: []
//   },
//   { 
//     id: 'REQ-2025-1008', clientId: 'C-001', clientName: 'Acme Exports', service: 'Advance Auth Closure', category: 'Licensing', status: 'Needs Clarification', priority: 'High', 
//     submissionTime: '2025-10-28T09:00:00', slaHours: 48, slaStatus: 'Risk',
//     documents: [{ id: 1, type: 'EODC', docNo: 'EODC-9921', date: '2025-10-20', status: 'Blurry', name: 'eodc_scan.pdf' }], 
//     messages: [{id: 1, sender: 'agent', text: 'Please re-upload EODC, scan is blurry.'}]
//   },
//   { 
//     id: 'REQ-2025-1011', clientId: 'C-002', clientName: 'Global Traders', service: 'EPCG License', category: 'Licensing', status: 'In Process', priority: 'Medium', 
//     submissionTime: '2025-10-29T11:00:00', slaHours: 72, slaStatus: 'On Track',
//     documents: [],
//     messages: []
//   }
// ];

// const COMPLIANCE_AUDIT_TASKS = [
//     { id: 'AUD-TASK-001', client: 'Acme Exports', type: 'Quarterly Audit', status: 'Pending', dueDate: 'Nov 05, 2025', progress: 30 },
//     { id: 'AUD-TASK-002', client: 'Global Traders', type: 'Transaction Audit', status: 'In Progress', dueDate: 'Nov 02, 2025', progress: 65 }
// ];

// const VAULT_FOLDERS = [
//   { id: 1, name: 'Shipping Bills', count: 842, type: 'folder' },
//   { id: 2, name: 'Bill of Entries', count: 315, type: 'folder' },
//   { id: 3, name: 'Active Licenses', count: 12, type: 'folder' },
//   { id: 4, name: 'Bank e-BRCs', count: 650, type: 'folder' },
// ];

// const VAULT_FILES = {
//   1: [
//     { 
//       id: 'SB-1001', name: 'SB_4276784.pdf', date: 'Aug 05, 2020', size: '1.2 MB', status: 'Verified', dataEntered: true,
//       details: { sb_no: '4276784', sb_date: '05-Aug-2020', fob: 'USD 20,700', port: 'INCOK1', invoice: 'BLL/EX-40', dbk: '₹ 0', igst: 'LUT', rodtep: '₹ 0', license: '1010060567', ebrc: 'Pending' }
//     },
//   ],
//   2: [
//     {
//       id: 'BE-2001', name: 'BE_9493099.pdf', date: 'Nov 08, 2020', size: '2.0 MB', status: 'Cleared', dataEntered: true,
//       details: { boe_no: '9493099', boe_date: '08-Nov-2020', fob: 'USD 14,212', port: 'INCOK1', invoice: 'BB200820', dbk: '-', igst: '₹ 0', rodtep: '-', duty_paid: '₹ 0', license: '1010060567', ebrc: '-' }
//     },
//   ],
//   3: [
//     { 
//       id: 'LIC-001', name: 'EPCG_02291.pdf', date: 'Sep 10, 2024', size: '2.5 MB', status: 'Active', dataEntered: true,
//       details: { lic_no: '0229100042', lic_date: '10-Sep-2024', type: 'EPCG', duty_saved: '₹ 45,00,000', obligation: 'USD 3,21,428', validity: '10-Sep-2030', status: 'Active - 1st Block' }
//     },
//   ]
// };

// // --- COMPONENTS ---

// const StatusBadge = ({ status }) => {
//   const styles = {
//     'Completed': 'bg-emerald-100 text-emerald-800 border-emerald-200',
//     'Submitted': 'bg-blue-50 text-blue-700 border-blue-200',
//     'In Process': 'bg-blue-100 text-blue-800 border-blue-200',
//     'Drafting': 'bg-slate-100 text-slate-600 border-slate-200',
//     'Needs Clarification': 'bg-orange-50 text-orange-700 border-orange-200',
//     'Critical': 'bg-red-50 text-red-700 border-red-200',
//     'High': 'bg-orange-100 text-orange-700 border-orange-200',
//     'Medium': 'bg-amber-100 text-amber-700 border-amber-200',
//     'Verified': 'bg-green-100 text-green-700 border-green-200',
//     'Blurry': 'bg-red-100 text-red-700 border-red-200',
//   };
//   return (
//     <span className={`px-2.5 py-1 rounded text-[11px] uppercase font-bold border tracking-wide ${styles[status] || styles['Drafting']}`}>
//       {status}
//     </span>
//   );
// };

// const StatCard = ({ title, value, subtext, icon: Icon, color }) => (
//   <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow group relative overflow-hidden">
//     <div className={`absolute top-0 right-0 w-20 h-20 bg-${color}-50 rounded-full -mr-10 -mt-10 transition-transform group-hover:scale-110`}></div>
//     <div className="flex justify-between items-start mb-2 relative z-10">
//       <div className={`p-2 rounded-lg ${color === 'blue' ? 'bg-blue-50 text-blue-600' : color === 'purple' ? 'bg-purple-50 text-purple-600' : 'bg-amber-50 text-amber-600'}`}>
//         <Icon size={20} />
//       </div>
//     </div>
//     <div className="relative z-10">
//       <h3 className="text-2xl font-bold text-slate-800">{value}</h3>
//       <p className="text-xs font-medium text-slate-500 uppercase tracking-wider mt-1">{title}</p>
//       {subtext && <p className="text-xs text-slate-400 mt-1">{subtext}</p>}
//     </div>
//   </div>
// );

// const SidebarItem = ({ id, label, icon: Icon, activeTab, setActiveTab, isSidebarOpen }) => (
//   <button 
//     onClick={() => setActiveTab(id)}
//     className={`w-full flex items-center gap-3 px-4 py-3 text-sm font-medium transition-colors border-l-4 ${
//       activeTab === id 
//       ? 'bg-slate-800 text-white border-blue-500' 
//       : 'text-slate-400 hover:bg-slate-800 hover:text-slate-200 border-transparent'
//     }`}
//   >
//     <Icon size={18} />
//     {isSidebarOpen && <span>{label}</span>}
//   </button>
// );

// const Modal = ({ isOpen, onClose, title, children, maxWidth = 'max-w-lg' }) => {
//   if (!isOpen) return null;
//   return (
//     <div className="fixed inset-0 bg-slate-900/40 backdrop-blur-sm z-50 flex items-center justify-center p-4">
//       <div className={`bg-white rounded-xl shadow-2xl w-full ${maxWidth} max-h-[90vh] flex flex-col animate-in fade-in zoom-in duration-200`}>
//         <div className="px-6 py-4 border-b border-slate-100 flex justify-between items-center bg-slate-50/50 sticky top-0">
//           <h3 className="font-bold text-lg text-slate-800">{title}</h3>
//           <button onClick={onClose} className="p-1 hover:bg-slate-200 rounded-full transition-colors text-slate-500">
//             <X size={20} />
//           </button>
//         </div>
//         <div className="p-6 overflow-y-auto custom-scrollbar">
//           {children}
//         </div>
//       </div>
//     </div>
//   );
// };

// // --- SUB-VIEW COMPONENTS ---

// const DashboardViewComponent = ({ requests, setActiveTab, openTask }) => (
//   <div className="space-y-6 animate-in fade-in">
//     {/* Agent Personal Stats */}
//     <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
//       <StatCard title="My Pending Tasks" value={AGENT_PROFILE.stats.pending} subtext="2 High Priority" icon={CheckSquare} color="blue" />
//       <StatCard title="Completed (Month)" value={AGENT_PROFILE.stats.completedMonth} subtext="Top 10% of Agents" icon={CheckCircle} color="green" />
//       <StatCard title="Productivity Score" value={`${AGENT_PROFILE.stats.productivity}%`} subtext="Avg Time: 2.5 Days" icon={Activity} color="purple" />
//       <StatCard title="Rating" value={`${AGENT_PROFILE.stats.rating} ★`} subtext="Client Feedback" icon={Award} color="amber" />
//     </div>

//     <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
//       {/* Priority Task Feed */}
//       <div className="lg:col-span-2 bg-white border border-slate-200 rounded-xl shadow-sm overflow-hidden flex flex-col">
//         <div className="p-5 border-b border-slate-100 flex justify-between items-center">
//             <h3 className="font-bold text-slate-800 flex items-center gap-2">
//             <AlertCircle size={18} className="text-red-500" /> Urgent Attention
//             </h3>
//             <button onClick={() => setActiveTab('tasks')} className="text-xs font-medium text-blue-600 hover:underline flex items-center gap-1">
//                 View All Tasks <ChevronRight size={14} />
//             </button>
//         </div>
//         <div className="divide-y divide-slate-100">
//             {requests.slice(0, 3).map(req => (
//             <div key={req.id} onClick={() => openTask(req)} className="p-4 flex items-center justify-between hover:bg-slate-50 transition-colors cursor-pointer group">
//                 <div className="flex items-center gap-4">
//                 <div className={`w-10 h-10 rounded-full flex items-center justify-center text-xs font-bold ${
//                     req.priority === 'Critical' ? 'bg-red-100 text-red-700' : 'bg-slate-100 text-slate-600'
//                 }`}>
//                     {req.priority.substring(0,1)}
//                 </div>
//                 <div>
//                     <h4 className="text-sm font-semibold text-slate-800 group-hover:text-blue-600">{req.service}</h4>
//                     <p className="text-xs text-slate-500">{req.clientName} • {req.slaStatus === 'Risk' ? <span className="text-red-600 font-bold">SLA Risk</span> : req.slaStatus}</p>
//                 </div>
//                 </div>
//                 <div className="flex items-center gap-3">
//                     <StatusBadge status={req.status} />
//                     <ChevronRight size={16} className="text-slate-300 group-hover:text-blue-500" />
//                 </div>
//             </div>
//             ))}
//         </div>
//       </div>

//       {/* Quick Actions & Audit Tasks */}
//       <div className="space-y-6">
//         <div className="bg-white border border-slate-200 rounded-xl shadow-sm p-5">
//             <h3 className="font-bold text-slate-800 mb-4 text-sm uppercase tracking-wide">Quick Actions</h3>
//             <div className="grid grid-cols-2 gap-3">
//                 <button className="p-3 border border-slate-200 rounded-lg hover:bg-blue-50 text-center transition-colors">
//                     <FileText size={20} className="mx-auto text-blue-600 mb-2" />
//                     <span className="text-xs font-bold text-slate-700 block">New Report</span>
//                 </button>
//                 <button className="p-3 border border-slate-200 rounded-lg hover:bg-purple-50 text-center transition-colors">
//                     <MessageSquare size={20} className="mx-auto text-purple-600 mb-2" />
//                     <span className="text-xs font-bold text-slate-700 block">Client Msg</span>
//                 </button>
//             </div>
//         </div>

//         <div className="bg-white border border-slate-200 rounded-xl shadow-sm p-5">
//             <h3 className="font-bold text-slate-800 mb-4 text-sm uppercase tracking-wide">Assigned Audits</h3>
//             <div className="space-y-3">
//                 {COMPLIANCE_AUDIT_TASKS.map(task => (
//                     <div key={task.id} className="p-3 bg-slate-50 rounded-lg border border-slate-100">
//                         <div className="flex justify-between mb-1">
//                             <span className="text-xs font-bold text-slate-700">{task.client}</span>
//                             <span className="text-xs text-slate-500">{task.dueDate}</span>
//                         </div>
//                         <p className="text-xs text-slate-500 mb-2">{task.type}</p>
//                         <div className="w-full bg-slate-200 h-1.5 rounded-full overflow-hidden">
//                             <div className="bg-blue-600 h-full rounded-full" style={{ width: `${task.progress}%` }}></div>
//                         </div>
//                     </div>
//                 ))}
//             </div>
//         </div>
//       </div>
//     </div>
//   </div>
// );

// const MyTasksViewComponent = ({ requests, openTask }) => {
//     const [filterStatus, setFilterStatus] = useState('All');
//     const [searchQuery, setSearchQuery] = useState('');

//     const filteredReqs = requests.filter(req => {
//         const matchesStatus = filterStatus === 'All' || req.status === filterStatus;
//         const matchesSearch = req.id.toLowerCase().includes(searchQuery.toLowerCase()) || req.clientName.toLowerCase().includes(searchQuery.toLowerCase());
//         return matchesStatus && matchesSearch;
//     });

//     return (
//         <div className="space-y-4 animate-in fade-in">
//             <div className="flex justify-between items-center">
//                 <h2 className="text-lg font-bold text-slate-800">My Task Board</h2>
//                 <div className="flex gap-2">
//                     <div className="relative">
//                         <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={16} />
//                         <input 
//                             type="text" 
//                             placeholder="Search tasks..." 
//                             value={searchQuery}
//                             onChange={(e) => setSearchQuery(e.target.value)}
//                             className="pl-9 pr-4 py-2 border border-slate-200 rounded-lg text-sm w-64 focus:ring-2 focus:ring-blue-500 focus:outline-none" 
//                         />
//                     </div>
//                     <select 
//                         value={filterStatus} 
//                         onChange={(e) => setFilterStatus(e.target.value)}
//                         className="px-4 py-2 bg-white border border-slate-200 rounded-lg text-sm font-medium text-slate-700 focus:outline-none"
//                     >
//                         <option value="All">All Status</option>
//                         <option value="Submitted">Submitted</option>
//                         <option value="In Process">In Process</option>
//                         <option value="Needs Clarification">Clarification</option>
//                     </select>
//                 </div>
//             </div>

//             <div className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden">
//                 <table className="w-full text-sm text-left">
//                     <thead className="bg-slate-50 text-slate-500 uppercase text-xs font-bold tracking-wider">
//                         <tr>
//                             <th className="px-6 py-4">Request ID</th>
//                             <th className="px-6 py-4">Client</th>
//                             <th className="px-6 py-4">Service</th>
//                             <th className="px-6 py-4">Due By</th>
//                             <th className="px-6 py-4">Status</th>
//                             <th className="px-6 py-4 text-right">Action</th>
//                         </tr>
//                     </thead>
//                     <tbody className="divide-y divide-slate-100">
//                         {filteredReqs.map(req => (
//                             <tr key={req.id} onClick={() => openTask(req)} className="hover:bg-blue-50/30 transition-colors cursor-pointer group">
//                                 <td className="px-6 py-4 font-mono font-medium text-blue-600">{req.id}</td>
//                                 <td className="px-6 py-4 font-medium text-slate-800">{req.clientName}</td>
//                                 <td className="px-6 py-4">
//                                     <div className="text-slate-800">{req.service}</div>
//                                     <div className="text-xs text-slate-400">{req.category}</div>
//                                 </td>
//                                 <td className="px-6 py-4">
//                                     <span className={`text-xs font-bold ${req.slaStatus === 'Risk' ? 'text-red-600' : 'text-green-600'}`}>
//                                         {new Date(new Date(req.submissionTime).getTime() + req.slaHours*3600*1000).toLocaleDateString()}
//                                     </span>
//                                 </td>
//                                 <td className="px-6 py-4"><StatusBadge status={req.status} /></td>
//                                 <td className="px-6 py-4 text-right">
//                                     <button className="p-2 text-slate-400 group-hover:text-blue-600 hover:bg-blue-50 rounded-full transition-colors">
//                                         <Edit2 size={16} />
//                                     </button>
//                                 </td>
//                             </tr>
//                         ))}
//                     </tbody>
//                 </table>
//             </div>
//         </div>
//     );
// };

// const SmartVaultViewComponent = ({ currentVaultFolder, setCurrentVaultFolder, setVaultDocToEdit }) => (
//   <div className="space-y-6 animate-in fade-in">
//       <div className="flex justify-between items-center"><h2 className="text-lg font-bold text-slate-800">Client Documents & Data Entry</h2><div className="flex items-center gap-2"><span className="text-xs font-bold text-slate-500">View for:</span><select className="text-sm border border-slate-200 rounded-lg p-1.5 bg-white font-medium text-slate-800"><option>Acme Exports Pvt Ltd (C-001)</option><option>Global Traders (C-002)</option></select></div></div>
//       {!currentVaultFolder ? (<div className="grid grid-cols-1 md:grid-cols-4 gap-6">{VAULT_FOLDERS.map(folder => (<div key={folder.id} onClick={() => setCurrentVaultFolder(folder)} className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm hover:shadow-md transition-all cursor-pointer group"><div className="flex justify-between items-start mb-4"><Folder size={40} className="text-blue-100 group-hover:text-blue-500 transition-colors fill-current" /><span className="text-xs font-bold bg-slate-100 text-slate-500 px-2 py-1 rounded">{folder.count}</span></div><h3 className="font-bold text-slate-800 mb-1">{folder.name}</h3></div>))}</div>) : (
//           <div className="space-y-4">
//               <button onClick={() => setCurrentVaultFolder(null)} className="flex items-center gap-2 text-sm text-slate-500 hover:text-blue-600"><ArrowUpRight className="rotate-180" size={16} /> Back to Folders</button><h3 className="font-bold text-xl text-slate-800">{currentVaultFolder.name}</h3>
//               <div className="bg-white rounded-xl border border-slate-200 overflow-hidden"><table className="w-full text-sm text-left"><thead className="bg-slate-50 text-slate-500 text-xs font-bold uppercase"><tr>{(currentVaultFolder.id === 1) && <th className="px-6 py-4">SB No & Date</th>}{(currentVaultFolder.id === 2) && <th className="px-6 py-4">BOE No & Date</th>}{(currentVaultFolder.id === 3) && <th className="px-6 py-4">License No & Date</th>}{(currentVaultFolder.id !== 1 && currentVaultFolder.id !== 2 && currentVaultFolder.id !== 3) && <th className="px-6 py-4">Document Name</th>}{(currentVaultFolder.id === 1 || currentVaultFolder.id === 2) ? (<><th className="px-6 py-4">Port & Invoice</th><th className="px-6 py-4">Value</th><th className="px-6 py-4">Financials & Duties</th><th className="px-6 py-4">License / Scheme</th>{currentVaultFolder.id === 1 && <th className="px-6 py-4">e-BRC</th>}</>) : currentVaultFolder.id === 3 ? (<><th className="px-6 py-4">Type & Validity</th><th className="px-6 py-4">Duty Saved</th><th className="px-6 py-4">Export Obligation</th><th className="px-6 py-4">Status</th></>) : (<><th className="px-6 py-4">Upload Date</th><th className="px-6 py-4">Size</th><th className="px-6 py-4">Status</th></>)}<th className="px-6 py-4 text-right">Actions</th></tr></thead><tbody className="divide-y divide-slate-100">{VAULT_FILES[currentVaultFolder.id]?.map(file => (<tr key={file.id} className="hover:bg-slate-50">{(currentVaultFolder.id === 1) && (<td className="px-6 py-4"><div className="font-bold text-slate-800 text-base">{file.details.sb_no}</div><div className="text-xs text-slate-500">{file.details.sb_date}</div></td>)}{(currentVaultFolder.id === 2) && (<td className="px-6 py-4"><div className="font-bold text-slate-800 text-base">{file.details.boe_no}</div><div className="text-xs text-slate-500">{file.details.boe_date}</div></td>)}{(currentVaultFolder.id === 3) && (<td className="px-6 py-4"><div className="font-bold text-slate-800 text-base">{file.details.lic_no}</div><div className="text-xs text-slate-500">{file.details.lic_date}</div></td>)}{(currentVaultFolder.id !== 1 && currentVaultFolder.id !== 2 && currentVaultFolder.id !== 3) && (<td className="px-6 py-4 font-medium text-slate-800"><div className="flex items-center gap-2"><FileText className="text-red-500 shrink-0" size={18} /> <div><div>{file.name}</div><div className="text-[10px] text-slate-400 font-normal">{file.date} • {file.size}</div></div></div></td>)}{(currentVaultFolder.id === 1 || currentVaultFolder.id === 2) ? (<><td className="px-6 py-4"><div className="font-bold text-slate-700">{file.details.port}</div><div className="text-xs text-slate-500 font-mono">Inv: {file.details.invoice}</div></td><td className="px-6 py-4"><div className="font-bold text-slate-800">{file.details.fob}</div><div className="text-[10px] text-slate-500 uppercase">FOB Value</div></td><td className="px-6 py-4 text-xs">{currentVaultFolder.id === 1 ? (<div className="space-y-1"><div className="flex justify-between gap-4"><span className="text-slate-500">DBK:</span> <span className="font-medium">{file.details.dbk}</span></div><div className="flex justify-between gap-4"><span className="text-slate-500">IGST:</span> <span className="font-medium">{file.details.igst}</span></div><div className="flex justify-between gap-4"><span className="text-slate-500">RoDTEP:</span> <span className="font-medium">{file.details.rodtep}</span></div></div>) : (<div className="space-y-1"><div className="flex justify-between gap-4"><span className="text-slate-500">Duty Paid:</span> <span className="font-bold text-red-600">{file.details.duty_paid}</span></div><div className="flex justify-between gap-4"><span className="text-slate-500">IGST:</span> <span className="font-medium">{file.details.igst}</span></div></div>)}</td><td className="px-6 py-4"><span className="bg-purple-50 text-purple-700 text-xs px-2 py-1 rounded font-medium border border-purple-100">{file.details.license}</span></td>{currentVaultFolder.id === 1 && (<td className="px-6 py-4"><span className={`text-xs font-bold px-2 py-1 rounded-full ${file.details.ebrc.includes('Issued') ? 'bg-green-100 text-green-700' : 'bg-amber-100 text-amber-700'}`}>{file.details.ebrc}</span></td>)}</>) : currentVaultFolder.id === 3 ? (<><td className="px-6 py-4"><div className="font-medium text-slate-800">{file.details.type}</div><div className="text-xs text-slate-500">Valid till: {file.details.validity}</div></td><td className="px-6 py-4 font-bold text-green-700">{file.details.duty_saved}</td><td className="px-6 py-4 font-medium text-slate-700">{file.details.obligation}</td><td className="px-6 py-4"><StatusBadge status={file.details.status} /></td></>) : null}<td className="px-6 py-3 text-right"><button onClick={() => setVaultDocToEdit(file)} className="text-xs font-bold text-blue-600 border border-blue-200 px-3 py-1.5 rounded hover:bg-blue-50 flex items-center gap-1 ml-auto"><FileInput size={14} /> Input Data</button></td></tr>))}</tbody></table></div></div>
//       )}
//   </div>
// );

// export default function AgentPanel() {
//   const [activeTab, setActiveTab] = useState('dashboard');
  
//   // Data States
//   const [requests, setRequests] = useState(MY_TASKS);
  
//   // Selection States
//   const [selectedRequest, setSelectedRequest] = useState(null);
  
//   // Vault & Data Input States
//   const [currentVaultFolder, setCurrentVaultFolder] = useState(null);
//   const [vaultDocToEdit, setVaultDocToEdit] = useState(null);
  
//   // UI States
//   const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  
//   // Function States
//   const [clarificationNote, setClarificationNote] = useState('');
//   const [docFormData, setDocFormData] = useState({});
  
//   // Chat States
//   const [isChatOpen, setIsChatOpen] = useState(false);
//   const [chatMessage, setChatMessage] = useState('');
//   const [chatHistory, setChatHistory] = useState([]);

//   // --- HANDLERS ---

//   const handleStatusChange = (reqId, newStatus) => {
//     setRequests(prev => prev.map(r => r.id === reqId ? { ...r, status: newStatus } : r));
//     if (selectedRequest && selectedRequest.id === reqId) {
//       setSelectedRequest(prev => ({ ...prev, status: newStatus }));
//     }
//   };

//   const handleDocDataSave = () => {
//       setVaultDocToEdit(null);
//       setDocFormData({});
//   };

//   const openChat = (req) => {
//     setSelectedRequest(req);
//     setChatHistory(req.messages || []);
//     setIsChatOpen(true);
//   };

//   const sendChatMessage = () => {
//     if (!chatMessage.trim()) return;
//     const newMsg = { id: Date.now(), sender: 'agent', text: chatMessage };
//     const updatedHistory = [...chatHistory, newMsg];
//     setChatHistory(updatedHistory);
//     setRequests(prev => prev.map(r => r.id === selectedRequest.id ? { ...r, messages: updatedHistory } : r));
//     setChatMessage('');
//   };

//   // --- RENDER ---

//   return (
//     <div className="min-h-screen bg-slate-900 flex text-slate-100 font-sans">
      
//       {/* Sidebar */}
//       <aside className={`bg-slate-900 border-r border-slate-800 flex flex-col transition-all duration-300 ${isSidebarOpen ? 'w-64' : 'w-20'}`}>
//         <div className="h-16 flex items-center px-6 border-b border-slate-800">
//           <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center font-bold text-white shrink-0">E</div>
//           {isSidebarOpen && <span className="ml-3 font-bold text-lg tracking-tight">Agent<span className="text-blue-500">Workspace</span></span>}
//         </div>

//         <div className="flex-1 py-6 space-y-1 overflow-y-auto custom-scrollbar">
//           <SidebarItem id="dashboard" label="My Dashboard" icon={LayoutDashboard} activeTab={activeTab} setActiveTab={setActiveTab} isSidebarOpen={isSidebarOpen} />
//           <SidebarItem id="tasks" label="My Tasks" icon={CheckSquare} activeTab={activeTab} setActiveTab={setActiveTab} isSidebarOpen={isSidebarOpen} />
//           <SidebarItem id="vault" label="Data Entry" icon={FileBox} activeTab={activeTab} setActiveTab={setActiveTab} isSidebarOpen={isSidebarOpen} />
//           <SidebarItem id="audit" label="Conduct Audits" icon={Shield} activeTab={activeTab} setActiveTab={setActiveTab} isSidebarOpen={isSidebarOpen} />
//         </div>

//         <div className="p-4 border-t border-slate-800">
//           <button onClick={() => setIsSidebarOpen(!isSidebarOpen)} className="w-full flex items-center justify-center p-2 text-slate-400 hover:text-white hover:bg-slate-800 rounded-lg transition-colors">
//             {isSidebarOpen ? <ArrowDownLeft className="rotate-45" size={20} /> : <ArrowUpRight className="rotate-45" size={20} />}
//           </button>
//         </div>
//       </aside>

//       {/* Main Content */}
//       <main className="flex-1 flex flex-col min-w-0 bg-slate-50 text-slate-900">
//         <header className="h-16 bg-white border-b border-slate-200 flex items-center justify-between px-6 sticky top-0 z-30 shadow-sm">
//           <h1 className="font-bold text-slate-800 text-xl capitalize">{activeTab === 'dashboard' ? 'My Dashboard' : activeTab.replace('_', ' ')}</h1>
//           <div className="flex items-center gap-4">
//              <button className="p-2 text-slate-400 hover:text-blue-600 hover:bg-blue-50 rounded-full transition-colors relative">
//                 <Bell size={20} />
//                 <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-red-500 rounded-full border border-white"></span>
//              </button>
//              <div className="h-8 w-px bg-slate-200"></div>
//              <div className="flex items-center gap-3">
//                 <div className="text-right hidden md:block">
//                    <p className="text-sm font-bold text-slate-800">{AGENT_PROFILE.name}</p>
//                    <p className="text-xs text-slate-500">{AGENT_PROFILE.role}</p>
//                 </div>
//                 <div className="w-9 h-9 bg-slate-800 rounded-full flex items-center justify-center text-white font-bold">{AGENT_PROFILE.avatar}</div>
//              </div>
//           </div>
//         </header>

//         {/* Content Area */}
//         <div className="flex-1 overflow-auto p-6 custom-scrollbar">
//            {activeTab === 'dashboard' && <DashboardViewComponent requests={requests} setActiveTab={setActiveTab} openTask={setSelectedRequest} />}
//            {activeTab === 'tasks' && <MyTasksViewComponent requests={requests} openTask={setSelectedRequest} />}
//            {activeTab === 'vault' && <SmartVaultViewComponent currentVaultFolder={currentVaultFolder} setCurrentVaultFolder={setCurrentVaultFolder} setVaultDocToEdit={setVaultDocToEdit} />}
//            {activeTab === 'audit' && (
//                <div className="flex flex-col items-center justify-center h-full text-slate-400">
//                    <Shield size={48} className="mb-4 opacity-50" />
//                    <h3 className="text-lg font-bold">Audit Tools</h3>
//                    <p>Select a client from the dashboard to start an audit.</p>
//                </div>
//            )}
//         </div>
//       </main>

//       {/* MODAL: AGENT DATA INPUT FOR VAULT */}
//       <Modal isOpen={!!vaultDocToEdit} onClose={() => setVaultDocToEdit(null)} title="Data Extraction & Entry">
//           {vaultDocToEdit && (
//               <div className="space-y-4">
//                   <div className="bg-blue-50 p-3 rounded flex items-center gap-3 border border-blue-100"><FileText size={20} className="text-blue-600" /><div className="text-sm"><p className="font-bold text-slate-800">{vaultDocToEdit.name}</p><p className="text-xs text-slate-500">Extraction for Analytics & Compliance</p></div></div>
                  
//                   <div className="grid grid-cols-2 gap-4">
//                       <div><label className="text-[10px] font-bold text-slate-500 uppercase">Document No</label><input type="text" className="w-full border p-1.5 rounded text-sm font-mono text-slate-800" defaultValue={vaultDocToEdit.details?.sb_no || vaultDocToEdit.details?.boe_no || vaultDocToEdit.details?.lic_no} /></div>
//                       <div><label className="text-[10px] font-bold text-slate-500 uppercase">Date</label><input type="text" className="w-full border p-1.5 rounded text-sm text-slate-800" defaultValue={vaultDocToEdit.details?.sb_date || vaultDocToEdit.details?.boe_date || vaultDocToEdit.details?.lic_date} /></div>
//                   </div>

//                   <h4 className="text-xs font-bold text-slate-400 uppercase border-b border-slate-100 pb-1 mt-2">Logistics & Valuation</h4>
//                   <div className="grid grid-cols-2 gap-3">
//                       <div><label className="text-[10px] font-bold text-slate-500 uppercase">Port of Loading</label><input type="text" className="w-full border p-1.5 rounded text-sm text-slate-800" defaultValue={vaultDocToEdit.details?.port} placeholder="e.g. INNSA1" /></div>
//                       <div><label className="text-[10px] font-bold text-slate-500 uppercase">Country Discharge</label><input type="text" className="w-full border p-1.5 rounded text-sm text-slate-800" placeholder="e.g. US" /></div>
//                       <div><label className="text-[10px] font-bold text-slate-500 uppercase">FOB Value (FC)</label><input type="number" className="w-full border p-1.5 rounded text-sm text-slate-800" defaultValue={vaultDocToEdit.details?.fob?.replace(/[^0-9.]/g, '')} placeholder="0.00" /></div>
//                       <div><label className="text-[10px] font-bold text-slate-500 uppercase">Freight</label><input type="number" className="w-full border p-1.5 rounded text-sm text-slate-800" placeholder="0.00" /></div>
//                       <div><label className="text-[10px] font-bold text-slate-500 uppercase">Insurance</label><input type="number" className="w-full border p-1.5 rounded text-sm text-slate-800" placeholder="0.00" /></div>
//                       <div><label className="text-[10px] font-bold text-slate-500 uppercase">Exchange Rate</label><input type="number" className="w-full border p-1.5 rounded text-sm text-slate-800" placeholder="e.g. 84.50" /></div>
//                   </div>

//                   <h4 className="text-xs font-bold text-slate-400 uppercase border-b border-slate-100 pb-1 mt-2">Schemes & Benefits</h4>
//                   <div className="grid grid-cols-2 gap-3">
//                       <div><label className="text-[10px] font-bold text-slate-500 uppercase">Scheme Code</label><input type="text" className="w-full border p-1.5 rounded text-sm text-slate-800" placeholder="e.g. 19" /></div>
//                       <div><label className="text-[10px] font-bold text-slate-500 uppercase">License No</label><input type="text" className="w-full border p-1.5 rounded text-sm text-slate-800" defaultValue={vaultDocToEdit.details?.license} /></div>
//                       <div><label className="text-[10px] font-bold text-slate-500 uppercase">DBK Amt (₹)</label><input type="number" className="w-full border p-1.5 rounded text-sm text-slate-800" defaultValue={vaultDocToEdit.details?.dbk?.replace(/[^0-9.]/g, '')} /></div>
//                       <div><label className="text-[10px] font-bold text-slate-500 uppercase">RoDTEP Amt (₹)</label><input type="number" className="w-full border p-1.5 rounded text-sm text-slate-800" defaultValue={vaultDocToEdit.details?.rodtep?.replace(/[^0-9.]/g, '')} /></div>
//                   </div>
                  
//                   <div className="pt-4 flex gap-3"><button onClick={() => setVaultDocToEdit(null)} className="flex-1 py-2 border border-slate-200 rounded text-slate-600 text-sm font-bold hover:bg-slate-50">Cancel</button><button onClick={handleDocDataSave} className="flex-1 py-2 bg-blue-600 text-white rounded text-sm font-bold hover:bg-blue-700">Save & Sync</button></div>
//               </div>
//           )}
//       </Modal>

//       {/* TASK EXECUTION MODAL */}
//       <Modal isOpen={!!selectedRequest && !isChatOpen} onClose={() => { setSelectedRequest(null); setClarificationNote(''); }} title={`Work Request: ${selectedRequest?.id}`} maxWidth="max-w-4xl">
//         {selectedRequest && (
//           <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
//             <div className="lg:col-span-2 space-y-6">
//                 {/* Task Details */}
//                 <div className="grid grid-cols-2 gap-4 text-sm bg-slate-50 p-4 rounded-xl border border-slate-100">
//                     <div><p className="text-slate-500 mb-1">Client</p><p className="font-bold text-slate-800">{selectedRequest.clientName}</p></div>
//                     <div><p className="text-slate-500 mb-1">Service Type</p><p className="font-bold text-slate-800">{selectedRequest.service}</p></div>
//                     <div><p className="text-slate-500 mb-1">Submission</p><p className="font-medium text-slate-800">{new Date(selectedRequest.submissionTime).toLocaleString()}</p></div>
//                     <div><p className="text-slate-500 mb-1">Priority</p><span className={`text-xs font-bold px-2 py-0.5 rounded ${selectedRequest.priority === 'Critical' ? 'bg-red-100 text-red-700' : 'bg-orange-100 text-orange-700'}`}>{selectedRequest.priority}</span></div>
//                 </div>

//                 {/* Docs for Verification */}
//                 <div>
//                    <h4 className="font-bold text-slate-800 mb-3 flex items-center gap-2"><FileCheck size={18} /> Documents to Verify</h4>
//                    {selectedRequest.documents && selectedRequest.documents.length > 0 ? (
//                        <div className="border border-slate-200 rounded-lg overflow-hidden">
//                            <table className="w-full text-sm text-left">
//                                <thead className="bg-slate-100 text-slate-600 text-xs uppercase font-bold"><tr><th className="px-4 py-2">Doc Type</th><th className="px-4 py-2">Status</th><th className="px-4 py-2 text-right">Action</th></tr></thead>
//                                <tbody className="divide-y divide-slate-100">
//                                    {selectedRequest.documents.map(doc => (
//                                        <tr key={doc.id}>
//                                            <td className="px-4 py-2 font-medium">{doc.type}<br/><span className="text-xs text-slate-400">{doc.name}</span></td>
//                                            <td className="px-4 py-2"><span className={`text-[10px] font-bold px-2 py-0.5 rounded ${doc.status === 'Verified' ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>{doc.status}</span></td>
//                                            <td className="px-4 py-2 text-right text-blue-600 hover:underline cursor-pointer text-xs">Verify</td>
//                                        </tr>
//                                    ))}
//                                </tbody>
//                            </table>
//                        </div>
//                    ) : <p className="text-slate-400 italic text-sm">No documents to verify.</p>}
//                 </div>

//                 {/* Output Section */}
//                 <div>
//                     <h4 className="font-bold text-slate-800 mb-3 flex items-center gap-2"><UploadCloud size={18} /> Upload Deliverables</h4>
//                     <div className="bg-slate-50 rounded-lg p-4 border border-slate-100 border-dashed">
//                         <div className="grid grid-cols-2 gap-2 mb-2">
//                             <input className="text-xs border p-2 rounded" placeholder="Document Number / ID" />
//                             <input type="date" className="text-xs border p-2 rounded" />
//                         </div>
//                         <div className="flex gap-2 items-center justify-center border-2 border-dashed border-slate-200 rounded-lg p-4 bg-white cursor-pointer hover:bg-blue-50 hover:border-blue-200 transition-colors">
//                             <div className="text-center">
//                                 <UploadCloud size={24} className="text-slate-400 mx-auto mb-1" />
//                                 <span className="text-xs text-slate-500 font-bold">Click to upload Final Output</span>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>

//             {/* Right Col: Action & Chat */}
//             <div className="space-y-4">
//                <div className="bg-white border border-slate-200 rounded-xl p-4 shadow-sm">
//                    <label className="text-sm font-bold text-slate-700 block mb-2">Update Status</label>
//                    <select 
//                      value={selectedRequest.status}
//                      onChange={(e) => handleStatusChange(selectedRequest.id, e.target.value)}
//                      className="w-full p-2.5 border border-slate-300 rounded-lg text-sm bg-white text-slate-800 focus:ring-2 focus:ring-blue-500 focus:outline-none"
//                    >
//                      <option value="Submitted">Submitted</option>
//                      <option value="In Process">In Process</option>
//                      <option value="Needs Clarification">Needs Clarification</option>
//                      <option value="Completed">Completed</option>
//                    </select>

//                    {selectedRequest.status === 'Needs Clarification' && (
//                        <div className="mt-4 animate-in fade-in">
//                            <label className="text-xs font-bold text-orange-700 mb-1 block">Specify Issue for Client</label>
//                            <textarea value={clarificationNote} onChange={(e) => setClarificationNote(e.target.value)} className="w-full p-2 text-sm border border-orange-200 rounded-lg focus:outline-none focus:border-orange-500 bg-orange-50 placeholder-orange-300" rows="3" placeholder="E.g., Please upload original EODC copy..." />
//                        </div>
//                    )}
//                </div>
               
//                <button onClick={() => openChat(selectedRequest)} className="w-full bg-blue-50 text-blue-700 py-3 rounded-lg font-bold hover:bg-blue-100 flex items-center justify-center gap-2">
//                    <MessageSquare size={18} /> Chat with Client
//                </button>

//                <button onClick={() => setSelectedRequest(null)} className="w-full bg-slate-900 text-white py-3 rounded-lg font-bold hover:bg-slate-800">
//                    Save & Close
//                </button>
//             </div>
//           </div>
//         )}
//       </Modal>

//       {/* CHAT DRAWER */}
//       {isChatOpen && selectedRequest && (
//         <div className="fixed inset-y-0 right-0 w-full md:w-96 bg-white shadow-2xl z-50 border-l border-slate-200 flex flex-col animate-in slide-in-from-right duration-300">
//           <div className="p-4 border-b border-slate-100 flex justify-between items-center bg-slate-50"><div><h3 className="font-bold text-slate-800">Support Chat</h3><p className="text-xs text-blue-600 font-mono">{selectedRequest.id}</p></div><button onClick={() => setIsChatOpen(false)} className="p-2 hover:bg-slate-200 rounded-full text-slate-500"><X size={20} /></button></div>
//           <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-slate-50/50 custom-scrollbar">{chatHistory.length === 0 && <div className="text-center text-slate-400 text-sm py-8">No messages yet. Start a conversation.</div>}{chatHistory.map((msg, idx) => (<div key={idx} className={`flex ${msg.sender === 'agent' ? 'justify-end' : 'justify-start'}`}><div className={`max-w-[85%] p-3 rounded-xl text-sm shadow-sm ${msg.sender === 'agent' ? 'bg-blue-600 text-white rounded-br-none' : 'bg-white border border-slate-200 text-slate-800 rounded-bl-none'}`}>{msg.text}</div></div>))}</div>
//           <div className="p-4 border-t border-slate-100 bg-white"><div className="flex gap-2"><input type="text" value={chatMessage} onChange={(e) => setChatMessage(e.target.value)} onKeyPress={(e) => e.key === 'Enter' && sendChatMessage()} placeholder="Type a reply..." className="flex-1 px-4 py-2 border border-slate-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500" /><button onClick={sendChatMessage} className="p-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"><Send size={20} /></button></div></div>
//         </div>
//       )}

//     </div>
//   );
// }

