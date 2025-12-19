import {
  FileText,
  Award,
  DollarSign,
  ShieldCheck,
  CheckCircle,
  Database,
} from "lucide-react";

 export const dgftServices = [
    {
      id: 'd1',
      category: 'Issuance',
      title: 'Advance Authorisation',
      desc: 'Duty-free import of inputs physically incorporated in export products. We handle SION fixation and ratification.',
      icon: <FileText className="w-6 h-6 text-teal-600" />,
      steps: ['Application Filing', 'Norms Committee (if SION undefined)', 'License Issuance', 'Import Registration']
    },
    {
      id: 'd2',
      category: 'Issuance',
      title: 'EPCG Scheme',
      desc: 'Import capital goods at 0% duty for pre/post-production. Analysis of export obligation based on duty saved.',
      icon: <Award className="w-6 h-6 text-teal-600" />,
      steps: ['Capital Goods List Approval', 'Chartered Engineer Cert', 'License Issuance', 'Installation Cert']
    },
    {
      id: 'd3',
      category: 'Incentives',
      title: 'RoDTEP Scrips',
      desc: 'Claiming rebate on embedded taxes. Checking shipping bills for correct scheme codes and generating e-scrips.',
      icon: <DollarSign className="w-6 h-6 text-green-600" />,
      steps: ['Shipping Bill Verification', 'e-Scrip Generation', 'Ledger Transfer / Sale']
    },
    {
      id: 'd4',
      category: 'Regulatory',
      title: 'SCOMET Licensing',
      desc: 'End-to-end filing for dual-use items (Special Chemicals, Organisms, Materials, Equipment).',
      icon: <ShieldCheck className="w-6 h-6 text-red-600" />,
      steps: ['Product Classification', 'End User Certificate', 'IMWG Approval', 'License Grant']
    },
    {
      id: 'd5',
      category: 'Closure',
      title: 'License Redemption (EODC)',
      desc: 'Closure of Advance Auth & EPCG licenses after fulfilling export obligation. Release of Bond/BG from Customs.',
      icon: <CheckCircle className="w-6 h-6 text-teal-600" />,
      steps: ['Export Doc Compilation', 'ANF 4F/5B Filing', 'Deficiency Correction', 'EODC Issuance']
    },
    {
      id: 'd6',
      category: 'Issuance',
      title: 'Restricted Imports (SIMS/PIMS)',
      desc: 'Registration for Steel, Chips, Coal, and Paper imports under the import monitoring systems.',
      icon: <Database className="w-6 h-6 text-blue-600" />,
      steps: ['Invoice Details', 'Technical Specs', 'Online Regn', 'Unique Regn Number (URN)']
    }
  ];
