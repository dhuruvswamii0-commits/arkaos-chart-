import * as XLSX from 'xlsx';
import { useState, useEffect } from 'react';
import {
  AlertTriangle,
  ArrowUpRight,
  Building2,
  CheckCircle2,
  Clock,
  Crown,
  Download,
  Zap,
  Snowflake,
  RotateCcw,
  Play,
  Pause,
  MessageSquare,
  Layers,
  Hash,
  Flame,
  ChevronRight,
  Calendar,
  BarChart3,
  FileSpreadsheet,
  FileText,
  Filter,
  PhoneCall,
  Plus,
  Search,
  ShieldAlert,
  ShieldCheck,
  Sparkles,
  TrendingUp,
  Upload,
  UserCheck,
} from 'lucide-react';

export type LeadTemperature = 'HOT' | 'WARM' | 'COLD';
export type LeadSource = 'Meta Ads' | 'Cold Calling' | 'Website / Inbound' | 'Referral' | string;

export interface IntegratedLead {
  id: string;
  companyName: string;
  contactName: string;
  phone: string;
  email: string;
  location: string;
  source: LeadSource;
  temperature: LeadTemperature;
  score: number;
  priority: 'HIGH' | 'MEDIUM' | 'LOW';
  status: 'NEW' | 'ASSIGNED' | 'CONTACTED' | 'NOT_CONTACTED' | 'INTERESTED' | 'QUALIFIED' | 'WON' | 'LOST';
  serviceInterest: string;
  nextAction: string | null;
  followUpDate: string;
  lastOutcome?: string;
  callMonth?: string;
  callDate?: string;
  callNotes?: string;
  sheetName?: string;
  batchLabel?: string;
  importedAt?: string;
  talkTimeSeconds?: number;
  callAttempts?: number;
}

const INITIAL_SCHOOL_LEADS: IntegratedLead[] = [
  {
    id: 'lead-1',
    companyName: 'Vishwa Venkateshwara International School',
    contactName: 'Admissions Cell — VVIS',
    phone: '+91 91413 00990',
    email: 'info@vvinternationalschool.com',
    location: 'Bengaluru (Kodipalya)',
    source: 'Meta Ads',
    temperature: 'HOT',
    score: 88,
    priority: 'HIGH',
    status: 'CONTACTED',
    serviceInterest: 'Admissions Meta Ads + Google Ads Funnel',
    nextAction: 'Send commercial proposal and campaign calendar',
    followUpDate: '2026-10-29',
    lastOutcome: 'SPOKE_INTERESTED',
    callMonth: '2026-10',
    callDate: '2026-10-28',
    callNotes: 'Spoke with admissions director. Need 150+ kindergarten nursery applications for 2027 batch.'
  },
  {
    id: 'lead-2',
    companyName: 'RNS International School',
    contactName: 'Principal Office — RNS International',
    phone: '+91 99004 55135',
    email: 'principal_rnsis@rnsgi.com',
    location: 'Bengaluru (Rajarajeshwari Nagar)',
    source: 'Cold Calling',
    temperature: 'WARM',
    score: 76,
    priority: 'HIGH',
    status: 'CONTACTED',
    serviceInterest: 'Admissions Performance Marketing + Reels + SEO',
    nextAction: 'Demo meeting scheduled for Friday 3 PM',
    followUpDate: '2026-10-31',
    lastOutcome: 'SPOKE_CALLBACK',
    callMonth: '2026-10',
    callDate: '2026-10-28',
    callNotes: 'Connected with admin head. Requested presentation on reel production for campus tour.'
  },
  {
    id: 'lead-3',
    companyName: 'Clarence Public School',
    contactName: 'Admin Desk — Clarence Public School',
    phone: '+91 80 2649 4420',
    email: 'clarencepublicschool.jp@gmail.com',
    location: 'Bengaluru (JP Nagar 4th Phase)',
    source: 'Cold Calling',
    temperature: 'COLD',
    score: 72,
    priority: 'HIGH',
    status: 'NOT_CONTACTED',
    serviceInterest: 'Reputation/Review Generation + SEO + Social Media',
    nextAction: 'Retry calling tomorrow morning 11:30 AM',
    followUpDate: '2026-10-29',
    lastOutcome: 'RINGING_NO_ANSWER',
    callMonth: '2026-10',
    callDate: '2026-10-28',
    callNotes: 'Call rang continuous no answer. Scheduled for morning calling sprint.'
  },
  {
    id: 'lead-4',
    companyName: 'SUN JUPITER INTERNATIONAL SCHOOL',
    contactName: 'Chairman Office — Sun Jupiter',
    phone: '+91 99006 81681',
    email: 'sunjupiterinternationalschool@gmail.com',
    location: 'Bengaluru (JP Nagar Phase 6)',
    source: 'Meta Ads',
    temperature: 'HOT',
    score: 92,
    priority: 'HIGH',
    status: 'INTERESTED',
    serviceInterest: 'Admissions Meta Lead Gen + GMB Optimization',
    nextAction: 'Final contract signing with Chairman',
    followUpDate: '2026-10-30',
    lastOutcome: 'SPOKE_INTERESTED',
    callMonth: '2026-10',
    callDate: '2026-10-27',
    callNotes: 'Lead generated via Facebook lead form. Highly responsive, wants immediate launch.'
  },
  {
    id: 'lead-5',
    companyName: 'Candor International School',
    contactName: 'Marketing Head — Candor',
    phone: '+91 94832 99999',
    email: 'admissions@candorschool.edu.in',
    location: 'Bengaluru (Bannerghatta Road)',
    source: 'Meta Ads',
    temperature: 'WARM',
    score: 84,
    priority: 'HIGH',
    status: 'NEW',
    serviceInterest: 'IB/IGCSE Premium Lead Funnel & Video Ads',
    nextAction: 'First exploratory outbound call',
    followUpDate: '2026-10-28',
    callMonth: '2026-10',
    callDate: '2026-10-28'
  },
  {
    id: 'lead-6',
    companyName: 'Glentree Academy School - Whitefield',
    contactName: 'Marketing Manager — Glentree Academy',
    phone: '+91 78997 38130',
    email: 'admission@glentreeacademy.com',
    location: 'Bengaluru (Whitefield)',
    source: 'Cold Calling',
    temperature: 'HOT',
    score: 85,
    priority: 'HIGH',
    status: 'CONTACTED',
    serviceInterest: 'Multi-Campus Performance Marketing & Reels',
    nextAction: 'Commercial quote approval call',
    followUpDate: '2026-10-29',
    lastOutcome: 'SPOKE_INTERESTED',
    callMonth: '2026-10',
    callDate: '2026-10-26',
    callNotes: '3 campuses. Budget approx ₹1.2L/month. Decision maker interested.'
  },
  {
    id: 'lead-7',
    companyName: 'St Thomas Aquinas School',
    contactName: 'Trustee Desk — St Thomas Aquinas',
    phone: '+91 80 2668 4756',
    email: 'info@stthomasaquinas.in',
    location: 'Bengaluru (BTM 1st Stage)',
    source: 'Meta Ads',
    temperature: 'HOT',
    score: 95,
    priority: 'HIGH',
    status: 'WON',
    serviceInterest: 'Admissions Meta Ads + Website Revamp Retainer',
    nextAction: 'Handed off to Accounts & Finance (Retainer ₹45k/mo)',
    followUpDate: '2026-11-01',
    lastOutcome: 'SPOKE_INTERESTED',
    callMonth: '2026-10',
    callDate: '2026-10-25'
  },
  {
    id: 'lead-8',
    companyName: 'Ekya School BTM Layout',
    contactName: 'Front Office — Ekya BTM',
    phone: '+91 80 4680 9000',
    email: 'btm@ekyaschools.com',
    location: 'Bengaluru (BTM 2nd Stage)',
    source: 'Cold Calling',
    temperature: 'COLD',
    score: 65,
    priority: 'MEDIUM',
    status: 'NOT_CONTACTED',
    serviceInterest: 'Campus Admissions Lead Gen',
    nextAction: 'Call again during admissions window 2 PM',
    followUpDate: '2026-10-29',
    lastOutcome: 'BUSY_NOT_REACHABLE',
    callMonth: '2026-10',
    callDate: '2026-10-28',
    callNotes: 'Line was engaged / busy multiple times.'
  }
];

export interface ArkaClientPaymentRecord {
  id: string;
  slNo: number;
  clientName: string;
  invoiceNo: string;
  invoiceDate: string;
  invoiceDueDate: string;
  amountPayable: number;
  paymentStatus: 'PAID' | 'PARTIALLY PAID' | 'PENDING';
  amountBalance: number;
  clearanceStatus: 'CLEARED' | 'NOT CLEARED' | 'PENDING';
  dateOfPayment: string;
  invoiceSent: boolean;
  month: 'OCTOBER' | 'SEPTEMBER' | 'AUGUST' | 'NOVEMBER' | string;
  colorTag?: 'orange' | 'red' | 'mustard' | 'normal';
  notes?: string;
}

export type IntegratedPaymentRecord = ArkaClientPaymentRecord;

export const INITIAL_ARKA_PAYMENT_RECORDS: ArkaClientPaymentRecord[] = [
  { id: 'pay-1', slNo: 1, clientName: 'Animal Gym', invoiceNo: 'AA', invoiceDate: '01.10.2026', invoiceDueDate: '05.10.2026', amountPayable: 22000, paymentStatus: 'PARTIALLY PAID', amountBalance: 11000, clearanceStatus: 'NOT CLEARED', dateOfPayment: '', invoiceSent: true, month: 'OCTOBER', colorTag: 'orange' },
  { id: 'pay-2', slNo: 2, clientName: 'FMA', invoiceNo: 'FMA', invoiceDate: '01.10.2026', invoiceDueDate: '05.10.2026', amountPayable: 22000, paymentStatus: 'PENDING', amountBalance: 22000, clearanceStatus: 'NOT CLEARED', dateOfPayment: '', invoiceSent: true, month: 'OCTOBER', colorTag: 'normal' },
  { id: 'pay-3', slNo: 3, clientName: 'Iron revolution', invoiceNo: 'IR', invoiceDate: '01.10.2026', invoiceDueDate: '05.10.2026', amountPayable: 10000, paymentStatus: 'PENDING', amountBalance: 10000, clearanceStatus: 'NOT CLEARED', dateOfPayment: '', invoiceSent: true, month: 'OCTOBER', colorTag: 'normal' },
  { id: 'pay-4', slNo: 4, clientName: 'Sutra fitness', invoiceNo: 'SF', invoiceDate: '15.10.2026', invoiceDueDate: '23.10.2026', amountPayable: 30000, paymentStatus: 'PENDING', amountBalance: 30000, clearanceStatus: 'NOT CLEARED', dateOfPayment: '', invoiceSent: false, month: 'OCTOBER', colorTag: 'normal' },
  { id: 'pay-5', slNo: 5, clientName: 'Bluecaps', invoiceNo: 'BSA', invoiceDate: '08.10.2026', invoiceDueDate: '13.10.2026', amountPayable: 47200, paymentStatus: 'PARTIALLY PAID', amountBalance: 23600, clearanceStatus: 'NOT CLEARED', dateOfPayment: '21.10.2026', invoiceSent: false, month: 'OCTOBER', colorTag: 'orange' },
  { id: 'pay-6', slNo: 6, clientName: 'Kick & hit', invoiceNo: 'KH', invoiceDate: '15.10.2026', invoiceDueDate: '20.10.2026', amountPayable: 15000, paymentStatus: 'PENDING', amountBalance: 15000, clearanceStatus: 'NOT CLEARED', dateOfPayment: '', invoiceSent: false, month: 'OCTOBER', colorTag: 'normal' },
  { id: 'pay-7', slNo: 7, clientName: 'Rocks fitness Balagere', invoiceNo: 'RF', invoiceDate: '01.10.2026', invoiceDueDate: '05.10.2026', amountPayable: 15000, paymentStatus: 'PENDING', amountBalance: 15000, clearanceStatus: 'NOT CLEARED', dateOfPayment: '', invoiceSent: true, month: 'OCTOBER', colorTag: 'normal' },
  { id: 'pay-8', slNo: 8, clientName: 'Rocks fitness Panathur', invoiceNo: 'RF', invoiceDate: '01.10.2026', invoiceDueDate: '05.10.2026', amountPayable: 15000, paymentStatus: 'PENDING', amountBalance: 15000, clearanceStatus: 'NOT CLEARED', dateOfPayment: '', invoiceSent: true, month: 'OCTOBER', colorTag: 'normal' },
  { id: 'pay-9', slNo: 9, clientName: 'Gravity fitness TC Palya', invoiceNo: 'GF', invoiceDate: '15.10.2026', invoiceDueDate: '20.10.2026', amountPayable: 13500, paymentStatus: 'PARTIALLY PAID', amountBalance: 7000, clearanceStatus: 'NOT CLEARED', dateOfPayment: '06.10.2026', invoiceSent: false, month: 'OCTOBER', colorTag: 'orange' },
  { id: 'pay-10', slNo: 10, clientName: 'HSR fitness world', invoiceNo: 'HFW', invoiceDate: '01.10.2026', invoiceDueDate: '05.10.2026', amountPayable: 22000, paymentStatus: 'PENDING', amountBalance: 22000, clearanceStatus: 'NOT CLEARED', dateOfPayment: '', invoiceSent: false, month: 'OCTOBER', colorTag: 'normal' },
  { id: 'pay-11', slNo: 11, clientName: 'Pilates HSR', invoiceNo: 'PH', invoiceDate: '20.10.2026', invoiceDueDate: '25.10.2026', amountPayable: 22000, paymentStatus: 'PENDING', amountBalance: 22000, clearanceStatus: 'NOT CLEARED', dateOfPayment: '', invoiceSent: false, month: 'OCTOBER', colorTag: 'red' },
  { id: 'pay-12', slNo: 12, clientName: 'Pilates equipments', invoiceNo: 'PH', invoiceDate: '20.10.2026', invoiceDueDate: '25.10.2026', amountPayable: 22000, paymentStatus: 'PENDING', amountBalance: 22000, clearanceStatus: 'NOT CLEARED', dateOfPayment: '', invoiceSent: false, month: 'OCTOBER', colorTag: 'red' },
  { id: 'pay-13', slNo: 13, clientName: 'Pilates bellandur', invoiceNo: 'PH', invoiceDate: '20.10.2026', invoiceDueDate: '25.10.2026', amountPayable: 30000, paymentStatus: 'PENDING', amountBalance: 30000, clearanceStatus: 'NOT CLEARED', dateOfPayment: '', invoiceSent: false, month: 'OCTOBER', colorTag: 'red' },
  { id: 'pay-14', slNo: 14, clientName: 'Pilates kormangala', invoiceNo: 'PH', invoiceDate: '20.10.2026', invoiceDueDate: '25.10.2026', amountPayable: 24000, paymentStatus: 'PENDING', amountBalance: 24000, clearanceStatus: 'NOT CLEARED', dateOfPayment: '', invoiceSent: false, month: 'OCTOBER', colorTag: 'red' },
  { id: 'pay-15', slNo: 15, clientName: 'Nail Co.', invoiceNo: 'NN', invoiceDate: '05.10.2026', invoiceDueDate: '10.10.2026', amountPayable: 15000, paymentStatus: 'PENDING', amountBalance: 15000, clearanceStatus: 'NOT CLEARED', dateOfPayment: '', invoiceSent: false, month: 'OCTOBER', colorTag: 'normal' },
  { id: 'pay-16', slNo: 16, clientName: 'Nail stories', invoiceNo: 'NS', invoiceDate: '20.10.2026', invoiceDueDate: '25.10.2026', amountPayable: 23000, paymentStatus: 'PENDING', amountBalance: 23000, clearanceStatus: 'NOT CLEARED', dateOfPayment: '', invoiceSent: false, month: 'OCTOBER', colorTag: 'normal' },
  { id: 'pay-17', slNo: 17, clientName: 'Aura unisex salon', invoiceNo: 'AUS', invoiceDate: '08.10.2026', invoiceDueDate: '13.10.2026', amountPayable: 20000, paymentStatus: 'PENDING', amountBalance: 20000, clearanceStatus: 'NOT CLEARED', dateOfPayment: '', invoiceSent: false, month: 'OCTOBER', colorTag: 'red' },
  { id: 'pay-18', slNo: 18, clientName: 'Smartlook', invoiceNo: '', invoiceDate: '01.10.2026', invoiceDueDate: '05.10.2026', amountPayable: 15000, paymentStatus: 'PAID', amountBalance: 0, clearanceStatus: 'CLEARED', dateOfPayment: '', invoiceSent: false, month: 'OCTOBER', colorTag: 'normal' },
  { id: 'pay-19', slNo: 19, clientName: 'Velvet & mirror', invoiceNo: 'VS', invoiceDate: '08.10.2026', invoiceDueDate: '13.10.2026', amountPayable: 15000, paymentStatus: 'PARTIALLY PAID', amountBalance: 10000, clearanceStatus: 'NOT CLEARED', dateOfPayment: '26.10.2026', invoiceSent: false, month: 'OCTOBER', colorTag: 'orange' },
  { id: 'pay-20', slNo: 20, clientName: 'Border bells', invoiceNo: 'TBB', invoiceDate: '12.10.2026', invoiceDueDate: '17.10.2026', amountPayable: 29500, paymentStatus: 'PENDING', amountBalance: 29500, clearanceStatus: 'NOT CLEARED', dateOfPayment: '', invoiceSent: false, month: 'OCTOBER', colorTag: 'normal' },
  { id: 'pay-21', slNo: 21, clientName: 'DNS grand party hall', invoiceNo: 'DNS', invoiceDate: '01.10.2026', invoiceDueDate: '05.10.2026', amountPayable: 18000, paymentStatus: 'PENDING', amountBalance: 18000, clearanceStatus: 'NOT CLEARED', dateOfPayment: '', invoiceSent: true, month: 'OCTOBER', colorTag: 'normal' },
  { id: 'pay-22', slNo: 22, clientName: 'Ashva the event venue', invoiceNo: 'KPAM', invoiceDate: '20.10.2026', invoiceDueDate: '25.10.2026', amountPayable: 27500, paymentStatus: 'PENDING', amountBalance: 27500, clearanceStatus: 'NOT CLEARED', dateOfPayment: '', invoiceSent: false, month: 'OCTOBER', colorTag: 'normal' },
  { id: 'pay-23', slNo: 23, clientName: 'Ahana silver studio', invoiceNo: 'AH', invoiceDate: '01.10.2026', invoiceDueDate: '05.10.2026', amountPayable: 30000, paymentStatus: 'PENDING', amountBalance: 30000, clearanceStatus: 'NOT CLEARED', dateOfPayment: '', invoiceSent: true, month: 'OCTOBER', colorTag: 'normal' },
  { id: 'pay-24', slNo: 24, clientName: 'Raagi', invoiceNo: 'RAA', invoiceDate: '15.10.2026', invoiceDueDate: '20.10.2026', amountPayable: 30000, paymentStatus: 'PENDING', amountBalance: 30000, clearanceStatus: 'NOT CLEARED', dateOfPayment: '', invoiceSent: false, month: 'OCTOBER', colorTag: 'orange' },
  { id: 'pay-25', slNo: 25, clientName: 'Just bake', invoiceNo: 'JB', invoiceDate: '25.10.2026', invoiceDueDate: '30.10.2026', amountPayable: 22000, paymentStatus: 'PENDING', amountBalance: 22000, clearanceStatus: 'NOT CLEARED', dateOfPayment: '', invoiceSent: false, month: 'OCTOBER', colorTag: 'normal' },
  { id: 'pay-26', slNo: 26, clientName: 'Hair care Banglore', invoiceNo: 'CS', invoiceDate: '20.10.2026', invoiceDueDate: '25.10.2026', amountPayable: 25000, paymentStatus: 'PENDING', amountBalance: 25000, clearanceStatus: 'NOT CLEARED', dateOfPayment: '', invoiceSent: false, month: 'OCTOBER', colorTag: 'mustard' },
  { id: 'pay-27', slNo: 27, clientName: 'Early school house', invoiceNo: 'ESH', invoiceDate: '15.10.2026', invoiceDueDate: '20.10.2026', amountPayable: 10000, paymentStatus: 'PENDING', amountBalance: 10000, clearanceStatus: 'NOT CLEARED', dateOfPayment: '', invoiceSent: false, month: 'OCTOBER', colorTag: 'normal' },
  { id: 'pay-28', slNo: 28, clientName: 'Cutisculpt healthcare', invoiceNo: 'CS', invoiceDate: '01.10.2026', invoiceDueDate: '05.10.2026', amountPayable: 15000, paymentStatus: 'PENDING', amountBalance: 15000, clearanceStatus: 'NOT CLEARED', dateOfPayment: '', invoiceSent: false, month: 'OCTOBER', colorTag: 'normal' },
  { id: 'pay-29', slNo: 29, clientName: 'Sri ram', invoiceNo: 'SR', invoiceDate: '26.10.2026', invoiceDueDate: '01.11.2026', amountPayable: 30000, paymentStatus: 'PENDING', amountBalance: 30000, clearanceStatus: 'NOT CLEARED', dateOfPayment: '', invoiceSent: false, month: 'OCTOBER', colorTag: 'normal' },
  { id: 'pay-30', slNo: 30, clientName: 'Clarus school', invoiceNo: 'CL', invoiceDate: '01.10.2026', invoiceDueDate: '05.10.2026', amountPayable: 30000, paymentStatus: 'PENDING', amountBalance: 30000, clearanceStatus: 'NOT CLEARED', dateOfPayment: '', invoiceSent: true, month: 'OCTOBER', colorTag: 'normal' }
];

export const INITIAL_FINANCE_RECORDS = INITIAL_ARKA_PAYMENT_RECORDS;

const formatINR = (n: number) =>
  new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR', maximumFractionDigits: 0 }).format(n);

export function NativeSalesCrmHub({
  actorName,
  actorRole,
  isAllowed,
  requiredRole,
}: {
  actorName: string;
  actorRole: string;
  isAllowed: boolean;
  requiredRole: string;
}) {
  // 1. Persistent Leads State
  const [leads, setLeads] = useState<IntegratedLead[]>(() => {
    try {
      const saved = localStorage.getItem('arka_sales_crm_leads');
      if (saved) {
        const parsed = JSON.parse(saved);
        if (Array.isArray(parsed) && parsed.length > 0) return parsed;
      }
    } catch {}
    return INITIAL_SCHOOL_LEADS;
  });

  // Persist leads whenever updated
  useEffect(() => {
    try {
      localStorage.setItem('arka_sales_crm_leads', JSON.stringify(leads));
    } catch {}
  }, [leads]);

  // 2. Filter & Navigation States
  const [queueTab, setQueueTab] = useState<'PENDING' | 'CONTACTED' | 'NOT_CONTACTED' | 'HOT' | 'ALL'>('PENDING');
  const [timeframe, setTimeframe] = useState<'TODAY' | 'WEEK' | 'MONTH' | 'LIFETIME'>('TODAY');
  const [selectedMonth, setSelectedMonth] = useState<string>('2026-10');
  const [selectedSheetFilter, setSelectedSheetFilter] = useState<string>('ALL');
  const [selectedBatchFilter, setSelectedBatchFilter] = useState<string>('ALL');
  const [selectedSource, setSelectedSource] = useState<string>('ALL');
  const [selectedTemperature, setSelectedTemperature] = useState<string>('ALL');
  const [searchQuery, setSearchQuery] = useState('');
  const [bannerMsg, setBannerMsg] = useState<string | null>(null);

  // 3. Power-Dialer & Active Call State
  const [activeLeadModal, setActiveLeadModal] = useState<IntegratedLead | null>(null);
  const [callTimerSeconds, setCallTimerSeconds] = useState<number>(0);
  const [isCallTimerRunning, setIsCallTimerRunning] = useState<boolean>(false);
  const [outcome, setOutcome] = useState('SPOKE_INTERESTED');
  const [outcomeTemp, setOutcomeTemp] = useState<LeadTemperature>('WARM');
  const [callNotes, setCallNotes] = useState('');
  const [nextActionText, setNextActionText] = useState('Send ARKA Admissions Pitch & Case Studies');
  const [followUpDate, setFollowUpDate] = useState('2026-10-30');

  // Call timer effect
  useEffect(() => {
    let interval: any = null;
    if (activeLeadModal && isCallTimerRunning) {
      interval = setInterval(() => {
        setCallTimerSeconds((prev) => prev + 1);
      }, 1000);
    }
    return () => {
      if (interval) clearInterval(interval);
    };
  }, [activeLeadModal, isCallTimerRunning]);

  const formatTimer = (secs: number) => {
    const m = Math.floor(secs / 60);
    const s = secs % 60;
    return `${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
  };

  // 4. Multi-Sheet Excel Importer State
  const [showExcelModal, setShowExcelModal] = useState(false);
  const [excelFileName, setExcelFileName] = useState('');
  const [customBatchName, setCustomBatchName] = useState('');
  const [discoveredSheets, setDiscoveredSheets] = useState<{ name: string; count: number }[]>([]);
  const [excelPreviewRows, setExcelPreviewRows] = useState<IntegratedLead[]>([]);
  const [previewActiveSheet, setPreviewActiveSheet] = useState<string>('ALL');

  if (!isAllowed) {
    return (
      <div className="flex min-h-[70vh] flex-col items-center justify-center p-8 text-center">
        <div className="flex size-16 items-center justify-center rounded-2xl bg-red-100 text-red-600">
          <ShieldAlert className="size-8" />
        </div>
        <h2 className="mt-4 text-2xl font-black text-slate-900">Access Restricted</h2>
        <p className="mt-2 max-w-md text-sm text-slate-500">
          Sales CRM is strictly restricted to <strong>{requiredRole}</strong>.
        </p>
      </div>
    );
  }

  // Multi-Sheet Excel Parsing Handler
  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const baseName = file.name.replace(/\.[^/.]+$/, '');
    setExcelFileName(file.name);
    setCustomBatchName(baseName);

    const reader = new FileReader();
    reader.onload = (evt) => {
      try {
        const bstr = evt.target?.result;
        const wb = XLSX.read(bstr, { type: 'binary' });

        const allMapped: IntegratedLead[] = [];
        const sheetStats: { name: string; count: number }[] = [];

        wb.SheetNames.forEach((sheetName) => {
          const ws = wb.Sheets[sheetName];
          const rawJson: any[] = XLSX.utils.sheet_to_json(ws);
          if (!rawJson || rawJson.length === 0) return;

          sheetStats.push({ name: sheetName, count: rawJson.length });

          rawJson.forEach((row, i) => {
            const comp = row['Company'] || row['School Name'] || row['Company Name'] || row['School'] || row['Client'] || row['Business'] || row['Account'] || `Lead #${allMapped.length + 1}`;
            const contact = row['Contact Person'] || row['Contact Name'] || row['Principal'] || row['Name'] || row['Director'] || row['Owner'] || 'Admin Desk';
            const ph = String(row['Phone'] || row['Mobile'] || row['Contact Number'] || row['Phone Number'] || row['Mobile No'] || row['Contact'] || '').trim();
            const loc = row['Location'] || row['Area'] || row['City'] || row['Address'] || 'Bengaluru';
            const email = row['Email'] || row['Email Address'] || row['Mail'] || 'admissions@school.edu';

            const srcRaw = String(row['Source'] || row['Lead Source'] || row['Channel'] || '').toLowerCase();
            const detectedSource: LeadSource = srcRaw.includes('meta') || srcRaw.includes('fb') || srcRaw.includes('ad') || srcRaw.includes('instagram') ? 'Meta Ads' : 'Cold Calling';

            const tempRaw = String(row['Temperature'] || row['Type'] || row['Status'] || row['Priority'] || '').toLowerCase();
            const detectedTemp: LeadTemperature = tempRaw.includes('hot') ? 'HOT' : tempRaw.includes('warm') ? 'WARM' : 'COLD';

            allMapped.push({
              id: `excel-lead-${Date.now()}-${allMapped.length}`,
              companyName: String(comp),
              contactName: String(contact),
              phone: ph || '+91 98450 00000',
              email: String(email),
              location: String(loc),
              source: detectedSource,
              temperature: detectedTemp,
              score: detectedTemp === 'HOT' ? 90 : detectedTemp === 'WARM' ? 75 : 60,
              priority: detectedTemp === 'HOT' ? 'HIGH' : 'MEDIUM',
              status: 'NEW',
              serviceInterest: row['Service'] || row['Interest'] || row['Requirements'] || 'Admissions Meta Ads + Lead Generation',
              nextAction: 'First calling outreach',
              followUpDate: new Date().toISOString().slice(0, 10),
              callMonth: new Date().toISOString().slice(0, 7),
              callDate: new Date().toISOString().slice(0, 10),
              sheetName: `Sheet: ${sheetName}`,
              batchLabel: baseName,
              importedAt: new Date().toISOString(),
              callAttempts: 0,
              talkTimeSeconds: 0
            });
          });
        });

        if (allMapped.length === 0) {
          alert('No lead rows found in the uploaded workbook.');
          return;
        }

        setDiscoveredSheets(sheetStats);
        setExcelPreviewRows(allMapped);
        setPreviewActiveSheet('ALL');
      } catch (err) {
        alert('Failed to parse Excel file. Please ensure it is a valid .xlsx, .xls, or .csv file.');
      }
    };
    reader.readAsBinaryString(file);
  };

  const handleConfirmExcelImport = () => {
    if (excelPreviewRows.length === 0) return;
    const taggedRows = excelPreviewRows.map(r => ({
      ...r,
      batchLabel: customBatchName.trim() || r.batchLabel
    }));

    setLeads(prev => [...taggedRows, ...prev]);
    setBannerMsg(`🎉 Imported ${taggedRows.length} leads across ${discoveredSheets.length} sheet(s) under batch "${customBatchName.trim() || excelFileName}"!`);
    setShowExcelModal(false);
    setExcelPreviewRows([]);
    setExcelFileName('');
    setDiscoveredSheets([]);
  };

  // Distinct Discovered Sheets and Batches for Filter Dropdowns
  const uniqueSheets = Array.from(new Set(leads.map(l => l.sheetName).filter(Boolean))) as string[];
  const uniqueBatches = Array.from(new Set(leads.map(l => l.batchLabel).filter(Boolean))) as string[];

  // Pending to Call vs Contacted Separation
  const pendingLeads = leads.filter(l => l.status === 'NEW' || l.status === 'ASSIGNED' || l.status === 'NOT_CONTACTED');
  const contactedLeads = leads.filter(l => l.status === 'CONTACTED' || l.status === 'INTERESTED' || l.status === 'WON');
  const unreachableLeads = leads.filter(l => l.status === 'NOT_CONTACTED');
  const hotLeads = leads.filter(l => l.temperature === 'HOT');

  // Filter visible leads for active queue
  const visibleLeads = leads.filter(l => {
    // Queue Tab Filter
    if (queueTab === 'PENDING' && (l.status === 'CONTACTED' || l.status === 'WON' || l.status === 'LOST')) return false;
    if (queueTab === 'CONTACTED' && !(l.status === 'CONTACTED' || l.status === 'INTERESTED' || l.status === 'WON')) return false;
    if (queueTab === 'NOT_CONTACTED' && l.status !== 'NOT_CONTACTED') return false;
    if (queueTab === 'HOT' && l.temperature !== 'HOT') return false;

    // Sheet Filter
    if (selectedSheetFilter !== 'ALL' && l.sheetName !== selectedSheetFilter) return false;
    // Batch Filter
    if (selectedBatchFilter !== 'ALL' && l.batchLabel !== selectedBatchFilter) return false;
    // Source Filter
    if (selectedSource !== 'ALL' && l.source !== selectedSource) return false;
    // Temperature Filter
    if (selectedTemperature !== 'ALL' && l.temperature !== selectedTemperature) return false;

    // Search Query
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      const match = (l.companyName || '').toLowerCase().includes(q) ||
                    (l.contactName || '').toLowerCase().includes(q) ||
                    l.phone.includes(q) ||
                    (l.location || '').toLowerCase().includes(q) ||
                    (l.sheetName && l.sheetName.toLowerCase().includes(q));
      if (!match) return false;
    }
    return true;
  });

  // Power-Dialer: Open Call Session
  const handleOpenCallModal = (lead: IntegratedLead) => {
    setActiveLeadModal(lead);
    setCallTimerSeconds(0);
    setIsCallTimerRunning(true);
    setOutcome(lead.lastOutcome || 'SPOKE_INTERESTED');
    setOutcomeTemp(lead.temperature || 'WARM');
    setNextActionText(lead.nextAction || 'Send ARKA Admissions Proposal');
    setFollowUpDate(lead.followUpDate || new Date().toISOString().slice(0, 10));
    setCallNotes(lead.callNotes || '');
  };

  // Power-Dialer: Save Call Outcome & Auto-Advance to Next Lead
  const handleSaveCallOutcome = (lead: IntegratedLead, advanceToNext: boolean = false) => {
    const isSpoke = outcome.startsWith('SPOKE') || outcome === 'WON';
    const isNoAnswer = outcome === 'RINGING_NO_ANSWER' || outcome === 'BUSY_NOT_REACHABLE';
    const isLost = outcome === 'NOT_INTERESTED';
    const isWon = outcome === 'WON';

    const newStatus = isWon ? 'WON' : isSpoke ? 'CONTACTED' : isLost ? 'LOST' : isNoAnswer ? 'NOT_CONTACTED' : lead.status;

    const updatedLead: IntegratedLead = {
      ...lead,
      status: newStatus,
      temperature: outcomeTemp,
      nextAction: nextActionText,
      followUpDate,
      lastOutcome: outcome,
      callDate: new Date().toISOString().slice(0, 10),
      callMonth: new Date().toISOString().slice(0, 7),
      callNotes: callNotes.trim() || lead.callNotes,
      talkTimeSeconds: (lead.talkTimeSeconds || 0) + callTimerSeconds,
      callAttempts: (lead.callAttempts || 0) + 1
    };

    setLeads(prev => prev.map(item => item.id === lead.id ? updatedLead : item));

    if (advanceToNext) {
      // Find remaining pending leads excluding the one just processed
      const remainingPending = leads.filter(l => l.id !== lead.id && (l.status === 'NEW' || l.status === 'ASSIGNED' || l.status === 'NOT_CONTACTED'));
      if (remainingPending.length > 0) {
        const nextLead = remainingPending[0];
        setActiveLeadModal(nextLead);
        setCallTimerSeconds(0);
        setIsCallTimerRunning(true);
        setOutcome(nextLead.lastOutcome || 'SPOKE_INTERESTED');
        setOutcomeTemp(nextLead.temperature || 'WARM');
        setNextActionText(nextLead.nextAction || 'Send ARKA Admissions Proposal');
        setFollowUpDate(nextLead.followUpDate || new Date().toISOString().slice(0, 10));
        setCallNotes(nextLead.callNotes || '');
        setBannerMsg(`⏭️ Saved "${lead.companyName}" (${newStatus}). Advanced to next lead: "${nextLead.companyName}"`);
      } else {
        setActiveLeadModal(null);
        setIsCallTimerRunning(false);
        setCallTimerSeconds(0);
        setCallNotes('');
        setBannerMsg(`🎉 Amazing Job! All pending leads in this queue have been called!`);
      }
    } else {
      setActiveLeadModal(null);
      setIsCallTimerRunning(false);
      setCallTimerSeconds(0);
      setCallNotes('');
      setBannerMsg(`✅ Saved call outcome for "${lead.companyName}". Status: ${newStatus} | Temp: ${outcomeTemp}`);
    }
  };

  // Export to Excel (.xlsx)
  const handleExportExcel = () => {
    const exportRows = visibleLeads.map(l => ({
      'Company Name': l.companyName,
      'Contact Person': l.contactName,
      'Phone': l.phone,
      'Email': l.email,
      'Location': l.location,
      'Status': l.status,
      'Temperature': l.temperature,
      'Source': l.source,
      'Last Outcome': l.lastOutcome || 'N/A',
      'Talk Time (Secs)': l.talkTimeSeconds || 0,
      'Call Attempts': l.callAttempts || 0,
      'Next Action': l.nextAction || 'N/A',
      'Follow-Up Date': l.followUpDate || 'N/A',
      'Call Date': l.callDate || 'N/A',
      'Notes': l.callNotes || '',
      'Sheet': l.sheetName || 'Main',
      'Batch': l.batchLabel || 'Default Batch'
    }));

    const ws = XLSX.utils.json_to_sheet(exportRows);
    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, "Calling Leads");
    XLSX.writeFile(wb, `ARKA_Calling_Report_${new Date().toISOString().slice(0, 10)}.xlsx`);
  };

  const handleDownloadSampleCsv = () => {
    const csvContent = "data:text/csv;charset=utf-8," + 
      "Company Name,Contact Person,Phone,Location,Source,Temperature,Service\\n" +
      "Oakridge International School,Admissions Director,+91 98450 11223,Bengaluru (Whitefield),Meta Ads,Hot,Admissions Lead Funnel\\n" +
      "Greenwood High Pre-School,Headmistress,+91 99000 44556,Bengaluru (Koramangala),Cold Calling,Warm,30-Reels Monthly Retainer\\n" +
      "Silver Oaks Academy,Admin Desk,+91 80 2555 8899,Bengaluru (Sarjapur),Cold Calling,Cold,Website & Google Local SEO\\n";
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", "ARKA_Sales_Calling_Template.csv");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  // Operational Intelligence Calculations
  const todayDate = new Date().toISOString().slice(0, 10);
  const todayCalls = leads.filter(l => l.callDate === todayDate || (l.callAttempts && l.callAttempts > 0));
  const todayContacted = todayCalls.filter(l => l.status === 'CONTACTED' || l.status === 'INTERESTED' || l.status === 'WON').length;
  const todayNotContacted = todayCalls.filter(l => l.status === 'NOT_CONTACTED').length;
  const todayTalkTimeSeconds = todayCalls.reduce((sum, l) => sum + (l.talkTimeSeconds || 0), 0);
  const dailyTarget = 50;
  const dailyCompleted = todayCalls.length;
  const dailyPending = Math.max(0, dailyTarget - dailyCompleted);
  const connectRate = dailyCompleted > 0 ? Math.round((todayContacted / dailyCompleted) * 100) : 0;

  return (
    <div className="space-y-6">
      {/* Executive Command Header - Emerald & Dark Palette */}
      <div className="rounded-3xl bg-[#10271f] border border-[#16634b]/40 p-6 text-white shadow-xl">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
          <div>
            <div className="flex items-center gap-2">
              <span className="text-[11px] font-black uppercase tracking-widest text-[#e2c48d]">
                ARKA SALES CRM · HIGH-VELOCITY CALLING ENGINE
              </span>
              <span className="rounded-full bg-[#16634b]/60 px-2.5 py-0.5 text-[10px] font-bold text-emerald-300 border border-[#16634b]">
                MULTI-SHEET & POWER-DIALER
              </span>
            </div>
            <h1 className="mt-2 text-2xl sm:text-3xl font-black tracking-tight text-white">
              Tele-Sales & Pipeline Queue
            </h1>
            <p className="mt-1 text-xs sm:text-sm text-slate-300">
              Power-dialing queue, automatic lead advancement, talk-time tracking, multi-sheet Excel ingestion, and 1-tap call/WhatsApp outreach.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-2.5">
            <button
              type="button"
              onClick={() => setShowExcelModal(true)}
              className="flex items-center gap-2 rounded-xl bg-[#16634b] hover:bg-[#16634b]/80 border border-[#e2c48d]/40 px-4 py-2.5 text-xs font-bold text-white transition shadow-sm cursor-pointer"
            >
              <Upload className="size-4 text-[#e2c48d]" />
              <span>Upload Excel / Calling Sheet</span>
            </button>

            <button
              type="button"
              onClick={handleExportExcel}
              className="flex items-center gap-2 rounded-xl border border-white/20 bg-white/10 px-3.5 py-2.5 text-xs font-bold text-white hover:bg-white/20 transition cursor-pointer"
              title="Export leads to Excel"
            >
              <Download className="size-4" />
              <span>Export Report (.xlsx)</span>
            </button>

            {pendingLeads.length > 0 && (
              <button
                type="button"
                onClick={() => handleOpenCallModal(pendingLeads[0])}
                className="flex items-center gap-2 rounded-xl bg-[#e2c48d] hover:bg-[#e2c48d]/90 text-slate-950 font-black px-4 py-2.5 text-xs transition shadow-sm cursor-pointer animate-pulse"
              >
                <PhoneCall className="size-4" />
                <span>Start Power-Dialing Queue ⏭️</span>
              </button>
            )}
          </div>
        </div>
      </div>

      {bannerMsg && (
        <div className="flex items-center justify-between rounded-2xl border border-emerald-300 bg-emerald-50 px-4 py-3 text-xs font-bold text-emerald-950 shadow-xs animate-in fade-in">
          <div className="flex items-center gap-2">
            <CheckCircle2 className="size-4 text-emerald-600 shrink-0" />
            <span>{bannerMsg}</span>
          </div>
          <button onClick={() => setBannerMsg(null)} className="text-emerald-700 hover:text-emerald-950 font-black ml-4">✕</button>
        </div>
      )}

      {/* Live Operational Intelligence: Daily Speedometer & Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {/* Daily Speedometer */}
        <div className="rounded-2xl border border-[#16634b]/30 bg-gradient-to-br from-white to-[#16634b]/5 p-5 shadow-xs">
          <div className="flex items-center justify-between text-xs font-bold text-slate-600 mb-2">
            <span className="uppercase tracking-wider">Today's Speedometer</span>
            <span className="bg-[#16634b]/10 text-[#16634b] px-2 py-0.5 rounded-full text-[10px] font-black border border-[#16634b]/20">
              Target: {dailyTarget}
            </span>
          </div>
          <div className="flex items-baseline gap-2">
            <span className="text-3xl font-black text-slate-950">{dailyCompleted}</span>
            <span className="text-xs font-bold text-slate-500">calls made today</span>
          </div>
          <div className="w-full bg-slate-200 rounded-full h-2 mt-3 overflow-hidden">
            <div
              className="bg-[#16634b] h-2 rounded-full transition-all duration-500"
              style={{ width: `${Math.min(100, (dailyCompleted / dailyTarget) * 100)}%` }}
            />
          </div>
          <div className="mt-2.5 flex items-center justify-between text-[11px] text-slate-600 font-semibold">
            <span className="text-emerald-700 font-bold">✓ {todayContacted} Contacted</span>
            <span className="text-slate-400">✗ {todayNotContacted} Ringing</span>
            <span className="text-[#16634b] font-bold">{connectRate}% Connect</span>
          </div>
        </div>

        {/* Talk Time Duration KPI */}
        <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-xs">
          <div className="flex items-center justify-between text-xs font-bold text-slate-500 mb-2">
            <span className="uppercase tracking-wider">Talk Time Logged</span>
            <Clock className="size-4 text-emerald-600" />
          </div>
          <div className="text-3xl font-black text-slate-900">
            {Math.floor(todayTalkTimeSeconds / 60)}m <span className="text-lg text-slate-400 font-bold">{todayTalkTimeSeconds % 60}s</span>
          </div>
          <div className="mt-3 flex items-center justify-between text-xs pt-3 border-t border-slate-100 text-slate-500">
            <span>Avg call: {dailyCompleted > 0 ? Math.round(todayTalkTimeSeconds / dailyCompleted) : 0}s</span>
            <span className="font-bold text-emerald-700">Active Rep: {actorName}</span>
          </div>
        </div>

        {/* Lead Temperature Breakdown */}
        <div className="rounded-2xl border border-amber-200 bg-amber-50/50 p-5 shadow-xs">
          <div className="text-xs font-bold uppercase tracking-wider text-amber-900 mb-2 flex items-center justify-between">
            <span>Lead Temperature</span>
            <span className="text-[10px] text-amber-700 font-semibold">Pipeline Health</span>
          </div>
          <div className="grid grid-cols-3 gap-2 mt-2 text-center">
            <button
              onClick={() => setSelectedTemperature(selectedTemperature === 'HOT' ? 'ALL' : 'HOT')}
              className={`rounded-xl p-2 border transition cursor-pointer ${
                selectedTemperature === 'HOT' ? 'border-rose-500 bg-rose-100 text-rose-950 font-black ring-2 ring-rose-400' : 'border-rose-200 bg-rose-50 text-rose-900'
              }`}
            >
              <div className="text-xl font-black">{hotLeads.length}</div>
              <div className="text-[10px] font-bold uppercase tracking-wider">🔥 Hot</div>
            </button>
            <button
              onClick={() => setSelectedTemperature(selectedTemperature === 'WARM' ? 'ALL' : 'WARM')}
              className={`rounded-xl p-2 border transition cursor-pointer ${
                selectedTemperature === 'WARM' ? 'border-amber-500 bg-amber-100 text-amber-950 font-black ring-2 ring-amber-400' : 'border-amber-200 bg-amber-50 text-amber-900'
              }`}
            >
              <div className="text-xl font-black">{leads.filter(l => l.temperature === 'WARM').length}</div>
              <div className="text-[10px] font-bold uppercase tracking-wider">⚡ Warm</div>
            </button>
            <button
              onClick={() => setSelectedTemperature(selectedTemperature === 'COLD' ? 'ALL' : 'COLD')}
              className={`rounded-xl p-2 border transition cursor-pointer ${
                selectedTemperature === 'COLD' ? 'border-sky-500 bg-sky-100 text-sky-950 font-black ring-2 ring-sky-400' : 'border-sky-200 bg-sky-50 text-sky-900'
              }`}
            >
              <div className="text-xl font-black">{leads.filter(l => l.temperature === 'COLD').length}</div>
              <div className="text-[10px] font-bold uppercase tracking-wider">❄️ Cold</div>
            </button>
          </div>
        </div>

        {/* Lead Source Breakdown */}
        <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-xs">
          <div className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">
            Channels
          </div>
          <div className="grid grid-cols-2 gap-2 mt-2">
            <button
              onClick={() => setSelectedSource(selectedSource === 'Meta Ads' ? 'ALL' : 'Meta Ads')}
              className={`rounded-xl p-2 border text-left transition cursor-pointer ${
                selectedSource === 'Meta Ads' ? 'border-blue-500 bg-blue-50 text-blue-950 font-black ring-2 ring-blue-400' : 'border-slate-200 bg-slate-50 hover:bg-slate-100 text-slate-800'
              }`}
            >
              <div className="text-[11px] font-bold text-blue-700">📱 Meta Ads</div>
              <div className="text-2xl font-black mt-0.5">{leads.filter(l => l.source === 'Meta Ads').length}</div>
            </button>

            <button
              onClick={() => setSelectedSource(selectedSource === 'Cold Calling' ? 'ALL' : 'Cold Calling')}
              className={`rounded-xl p-2 border text-left transition cursor-pointer ${
                selectedSource === 'Cold Calling' ? 'border-emerald-500 bg-emerald-50 text-emerald-950 font-black ring-2 ring-emerald-400' : 'border-slate-200 bg-slate-50 hover:bg-slate-100 text-slate-800'
              }`}
            >
              <div className="text-[11px] font-bold text-emerald-700">📞 Cold Call</div>
              <div className="text-2xl font-black mt-0.5">{leads.filter(l => l.source === 'Cold Calling').length}</div>
            </button>
          </div>
        </div>
      </div>

      {/* Main Calling Queue Card */}
      <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
        {/* Distinct Calling Queue Tabs */}
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 border-b border-slate-100 pb-5">
          <div className="flex flex-wrap items-center gap-1.5">
            <button
              onClick={() => setQueueTab('PENDING')}
              className={`rounded-xl px-4 py-2 text-xs font-black transition cursor-pointer flex items-center gap-1.5 ${
                queueTab === 'PENDING'
                  ? 'bg-amber-500 text-white shadow-sm ring-2 ring-amber-300'
                  : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
              }`}
            >
              <span>📞 Pending to Call</span>
              <span className="bg-white/30 px-1.5 py-0.2 rounded-full text-[10px] font-black">{pendingLeads.length}</span>
            </button>

            <button
              onClick={() => setQueueTab('CONTACTED')}
              className={`rounded-xl px-4 py-2 text-xs font-black transition cursor-pointer flex items-center gap-1.5 ${
                queueTab === 'CONTACTED'
                  ? 'bg-[#16634b] text-white shadow-sm ring-2 ring-emerald-300'
                  : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
              }`}
            >
              <span>✅ Contacted</span>
              <span className="bg-white/30 px-1.5 py-0.2 rounded-full text-[10px] font-black">{contactedLeads.length}</span>
            </button>

            <button
              onClick={() => setQueueTab('NOT_CONTACTED')}
              className={`rounded-xl px-3.5 py-2 text-xs font-black transition cursor-pointer flex items-center gap-1.5 ${
                queueTab === 'NOT_CONTACTED'
                  ? 'bg-rose-600 text-white shadow-sm ring-2 ring-rose-300'
                  : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
              }`}
            >
              <span>❌ Unreachable</span>
              <span className="bg-white/30 px-1.5 py-0.2 rounded-full text-[10px] font-black">{unreachableLeads.length}</span>
            </button>

            <button
              onClick={() => setQueueTab('HOT')}
              className={`rounded-xl px-3.5 py-2 text-xs font-black transition cursor-pointer flex items-center gap-1.5 ${
                queueTab === 'HOT'
                  ? 'bg-purple-600 text-white shadow-sm ring-2 ring-purple-300'
                  : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
              }`}
            >
              <span>🔥 Hot ({hotLeads.length})</span>
            </button>

            <button
              onClick={() => setQueueTab('ALL')}
              className={`rounded-xl px-3.5 py-2 text-xs font-black transition cursor-pointer ${
                queueTab === 'ALL'
                  ? 'bg-slate-900 text-white shadow-sm'
                  : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
              }`}
            >
              📋 All Leads ({leads.length})
            </button>
          </div>

          {/* Search & Filters */}
          <div className="flex flex-wrap items-center gap-2">
            {uniqueSheets.length > 0 && (
              <select
                value={selectedSheetFilter}
                onChange={(e) => setSelectedSheetFilter(e.target.value)}
                className="rounded-xl border border-slate-200 bg-slate-50 px-3 py-2 text-xs font-semibold outline-none focus:bg-white cursor-pointer"
              >
                <option value="ALL">All Sheets</option>
                {uniqueSheets.map(s => (
                  <option key={s} value={s}>{s}</option>
                ))}
              </select>
            )}

            {uniqueBatches.length > 0 && (
              <select
                value={selectedBatchFilter}
                onChange={(e) => setSelectedBatchFilter(e.target.value)}
                className="rounded-xl border border-slate-200 bg-slate-50 px-3 py-2 text-xs font-semibold outline-none focus:bg-white cursor-pointer"
              >
                <option value="ALL">All Batches</option>
                {uniqueBatches.map(b => (
                  <option key={b} value={b}>Batch: {b}</option>
                ))}
              </select>
            )}

            <div className="relative w-full sm:w-60">
              <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 size-4 text-slate-400" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search company, phone..."
                className="w-full rounded-xl border border-slate-200 bg-slate-50 pl-10 pr-4 py-2 text-xs font-medium outline-none focus:border-slate-900 focus:bg-white"
              />
            </div>
          </div>
        </div>

        {/* Lead Table */}
        <div className="mt-5 overflow-x-auto">
          {visibleLeads.length === 0 ? (
            <div className="py-16 text-center">
              <div className="mx-auto flex size-12 items-center justify-center rounded-full bg-slate-100 text-slate-400">
                <Filter className="size-6" />
              </div>
              <h3 className="mt-3 text-base font-bold text-slate-900">No leads in this view</h3>
              <p className="mt-1 text-xs text-slate-500">
                {queueTab === 'PENDING'
                  ? 'All pending leads have been contacted! Upload a new Excel sheet or check the Contacted tab.'
                  : 'Try adjusting filters or uploading an Excel sheet.'}
              </p>
              <button
                type="button"
                onClick={() => { setSelectedSource('ALL'); setSelectedTemperature('ALL'); setQueueTab('ALL'); setSelectedSheetFilter('ALL'); setSelectedBatchFilter('ALL'); setSearchQuery(''); }}
                className="mt-4 rounded-xl bg-slate-900 px-4 py-2 text-xs font-bold text-white hover:bg-slate-800"
              >
                Reset Filters
              </button>
            </div>
          ) : (
            <table className="w-full text-left text-xs border-collapse">
              <thead>
                <tr className="border-b border-slate-100 text-[10px] font-black uppercase tracking-wider text-slate-400">
                  <th className="py-3 px-3">Company / School</th>
                  <th className="py-3 px-3">Contact & Phone</th>
                  <th className="py-3 px-3">Sheet & Batch</th>
                  <th className="py-3 px-3">Source & Temp</th>
                  <th className="py-3 px-3">Status</th>
                  <th className="py-3 px-3">Talk Time</th>
                  <th className="py-3 px-3 text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {visibleLeads.map((lead) => (
                  <tr key={lead.id} className="hover:bg-slate-50/80 transition group">
                    <td className="py-3.5 px-3">
                      <div className="font-bold text-slate-900 text-sm">{lead.companyName}</div>
                      <div className="text-[11px] text-slate-500 flex items-center gap-1.5 mt-0.5">
                        <span>📍 {lead.location}</span>
                        <span>•</span>
                        <span className="text-slate-400">{lead.serviceInterest}</span>
                      </div>
                    </td>

                    <td className="py-3.5 px-3">
                      <div className="font-bold text-slate-800">{lead.contactName}</div>
                      <div className="text-emerald-700 font-mono font-bold text-xs mt-0.5">{lead.phone}</div>
                    </td>

                    <td className="py-3.5 px-3">
                      <div className="text-[10px] font-bold text-slate-600">
                        {lead.sheetName || 'Sheet: Main'}
                      </div>
                      <div className="text-[9px] text-slate-400">
                        {lead.batchLabel || 'Direct Entry'}
                      </div>
                    </td>

                    <td className="py-3.5 px-3">
                      <div className="flex flex-wrap items-center gap-1.5">
                        <span className={`px-2 py-0.5 rounded-full text-[10px] font-bold border ${
                          lead.source === 'Meta Ads'
                            ? 'bg-blue-50 text-blue-800 border-blue-200'
                            : 'bg-emerald-50 text-emerald-800 border-emerald-200'
                        }`}>
                          {lead.source === 'Meta Ads' ? '📱 Meta Ads' : '📞 Cold Calling'}
                        </span>

                        <span className={`px-2 py-0.5 rounded-full text-[10px] font-black border ${
                          lead.temperature === 'HOT'
                            ? 'bg-rose-50 text-rose-800 border-rose-300 animate-pulse'
                            : lead.temperature === 'WARM'
                            ? 'bg-amber-50 text-amber-800 border-amber-300'
                            : 'bg-sky-50 text-sky-800 border-sky-300'
                        }`}>
                          {lead.temperature === 'HOT' ? '🔥 Hot' : lead.temperature === 'WARM' ? '⚡ Warm' : '❄️ Cold'}
                        </span>
                      </div>
                    </td>

                    <td className="py-3.5 px-3">
                      <span className={`inline-block px-2.5 py-1 rounded-lg text-[10px] font-black ${
                        lead.status === 'CONTACTED'
                          ? 'bg-emerald-100 text-emerald-900 border border-emerald-200'
                          : lead.status === 'WON'
                          ? 'bg-purple-100 text-purple-900 border border-purple-200'
                          : lead.status === 'NOT_CONTACTED'
                          ? 'bg-rose-100 text-rose-900 border border-rose-200'
                          : 'bg-amber-100 text-amber-900 border border-amber-200'
                      }`}>
                        {lead.status === 'CONTACTED' ? '✓ Contacted' : lead.status === 'NOT_CONTACTED' ? '✗ Unreachable' : lead.status}
                      </span>
                    </td>

                    <td className="py-3.5 px-3">
                      <div className="font-mono text-xs font-bold text-slate-700">
                        {lead.talkTimeSeconds ? formatTimer(lead.talkTimeSeconds) : '—'}
                      </div>
                      <div className="text-[10px] text-slate-400">
                        {lead.callAttempts ? `${lead.callAttempts} attempt(s)` : '0 attempts'}
                      </div>
                    </td>

                    <td className="py-3.5 px-3 text-right">
                      <div className="flex items-center justify-end gap-1.5">
                        <a
                          href={`tel:${lead.phone.replace(/[^0-9+]/g, '')}`}
                          className="flex items-center gap-1 rounded-lg bg-[#16634b] px-2.5 py-1.5 text-xs font-bold text-white hover:bg-[#16634b]/80 transition shadow-xs"
                          title="Call Number"
                        >
                          <PhoneCall className="size-3" />
                          <span>Call</span>
                        </a>

                        <a
                          href={`https://wa.me/${lead.phone.replace(/[^0-9]/g, '')}?text=${encodeURIComponent(`Hi ${lead.contactName}, this is ARKA Digital Media following up on admissions marketing for ${lead.companyName}.`)}`}
                          target="_blank"
                          rel="noreferrer"
                          className="flex items-center gap-1 rounded-lg bg-[#25D366] px-2.5 py-1.5 text-xs font-bold text-white hover:brightness-105 transition shadow-xs"
                          title="Open WhatsApp"
                        >
                          <span>WhatsApp</span>
                        </a>

                        <button
                          type="button"
                          onClick={() => handleOpenCallModal(lead)}
                          className="rounded-lg border border-slate-200 bg-white px-2.5 py-1.5 text-xs font-bold text-slate-800 hover:bg-slate-100 transition cursor-pointer"
                        >
                          Log Call
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
      </div>

      {/* Multi-Sheet Excel Uploader Modal */}
      {showExcelModal && (
        <div className="fixed inset-0 z-50 grid place-items-center bg-black/70 backdrop-blur-xs p-4 animate-in fade-in">
          <div className="max-h-[90vh] w-full max-w-2xl overflow-y-auto rounded-3xl bg-white shadow-2xl p-6">
            <div className="flex items-center justify-between border-b border-slate-100 pb-4">
              <div>
                <h2 className="text-xl font-black text-slate-900">Multi-Sheet Excel Calling Importer</h2>
                <p className="text-xs text-slate-500 mt-0.5">
                  Parses all sheets in your Excel file without data loss. Tags each lead by Sheet & Batch label.
                </p>
              </div>
              <button
                type="button"
                onClick={() => { setShowExcelModal(false); setExcelPreviewRows([]); setDiscoveredSheets([]); }}
                className="rounded-lg p-1.5 text-slate-400 hover:bg-slate-100 text-lg font-bold"
              >
                ✕
              </button>
            </div>

            <div className="mt-5 space-y-4">
              {/* File Dropzone */}
              <div className="border-2 border-dashed border-[#16634b]/40 hover:border-[#16634b] rounded-2xl p-8 text-center bg-slate-50/50 transition">
                <input
                  type="file"
                  id="excelFileInput"
                  accept=".xlsx, .xls, .csv"
                  onChange={handleFileUpload}
                  className="hidden"
                />
                <label htmlFor="excelFileInput" className="cursor-pointer flex flex-col items-center">
                  <div className="size-14 rounded-full bg-[#16634b]/10 text-[#16634b] flex items-center justify-center mb-3">
                    <FileSpreadsheet className="size-7" />
                  </div>
                  <div className="font-black text-slate-900 text-sm">
                    {excelFileName ? excelFileName : 'Click to Browse or Drag & Drop Excel Sheet'}
                  </div>
                  <div className="text-xs text-slate-500 mt-1">
                    Supports multi-tab workbooks (.xlsx, .xls) and .csv
                  </div>
                </label>
              </div>

              {/* Batch Tag & Discovered Sheets Info */}
              {discoveredSheets.length > 0 && (
                <div className="rounded-2xl border border-emerald-200 bg-emerald-50/50 p-4 space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-black text-emerald-950">
                      Discovered {discoveredSheets.length} Sheet(s) • {excelPreviewRows.length} Total Leads
                    </span>
                    <span className="text-[10px] bg-emerald-200 text-emerald-900 font-bold px-2 py-0.5 rounded-full">
                      Zero Data Loss
                    </span>
                  </div>

                  <div className="flex flex-wrap gap-1.5">
                    {discoveredSheets.map(s => (
                      <span key={s.name} className="px-2.5 py-1 rounded-lg bg-white border border-emerald-300 text-emerald-900 text-[11px] font-bold shadow-xs">
                        📊 {s.name} ({s.count} leads)
                      </span>
                    ))}
                  </div>

                  <div>
                    <label className="block text-[11px] font-bold text-slate-700 mb-1">
                      Custom Campaign Batch Tag (to organize in CRM):
                    </label>
                    <input
                      type="text"
                      value={customBatchName}
                      onChange={(e) => setCustomBatchName(e.target.value)}
                      placeholder="e.g. October Bangalore CBSE Calling Drive"
                      className="w-full rounded-xl border border-slate-300 bg-white px-3 py-2 text-xs font-semibold outline-none focus:border-[#16634b]"
                    />
                  </div>
                </div>
              )}

              {/* Preview Table */}
              {excelPreviewRows.length > 0 && (
                <div className="space-y-2">
                  <div className="text-xs font-bold text-slate-700">Previewing First 5 Leads:</div>
                  <div className="max-h-40 overflow-y-auto border border-slate-200 rounded-xl">
                    <table className="w-full text-left text-[11px]">
                      <thead className="bg-slate-100 text-slate-700 font-bold">
                        <tr>
                          <th className="p-2">School / Company</th>
                          <th className="p-2">Contact</th>
                          <th className="p-2">Phone</th>
                          <th className="p-2">Sheet</th>
                          <th className="p-2">Temp</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-slate-100">
                        {excelPreviewRows.slice(0, 5).map((r, idx) => (
                          <tr key={idx}>
                            <td className="p-2 font-bold text-slate-900">{r.companyName}</td>
                            <td className="p-2 text-slate-700">{r.contactName}</td>
                            <td className="p-2 font-mono text-emerald-800">{r.phone}</td>
                            <td className="p-2 text-[10px] text-slate-500">{r.sheetName}</td>
                            <td className="p-2 font-black">{r.temperature}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              )}

              <div className="flex items-center justify-between pt-4 border-t border-slate-100">
                <button
                  type="button"
                  onClick={handleDownloadSampleCsv}
                  className="text-xs font-bold text-slate-600 hover:text-slate-900 flex items-center gap-1.5"
                >
                  <Download className="size-3.5" />
                  <span>Download Sample Format</span>
                </button>

                <div className="flex gap-2">
                  <button
                    type="button"
                    onClick={() => { setShowExcelModal(false); setExcelPreviewRows([]); setDiscoveredSheets([]); }}
                    className="rounded-xl border border-slate-200 px-4 py-2 text-xs font-bold text-slate-600 hover:bg-slate-100"
                  >
                    Cancel
                  </button>
                  <button
                    type="button"
                    disabled={excelPreviewRows.length === 0}
                    onClick={handleConfirmExcelImport}
                    className="rounded-xl bg-[#16634b] px-5 py-2 text-xs font-black text-white hover:bg-[#16634b]/90 disabled:opacity-50 disabled:cursor-not-allowed shadow-xs"
                  >
                    Import All {excelPreviewRows.length} Leads
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Power-Dialer / Call Session Modal */}
      {activeLeadModal && (
        <div className="fixed inset-0 z-50 grid place-items-center bg-black/75 backdrop-blur-xs p-4 animate-in fade-in">
          <div className="max-h-[92vh] w-full max-w-xl overflow-y-auto rounded-3xl bg-white shadow-2xl p-6 border border-slate-200">
            {/* Call Session Header with Timer */}
            <div className="flex items-start justify-between border-b border-slate-100 pb-4">
              <div>
                <div className="flex items-center gap-2">
                  <span className="text-[10px] font-black uppercase tracking-wider text-[#16634b] bg-emerald-100 px-2 py-0.5 rounded-md">
                    POWER-DIALER SESSION
                  </span>
                  <span className="text-[10px] font-bold text-slate-500">
                    {activeLeadModal.sheetName || 'Sheet: Main'}
                  </span>
                </div>
                <h2 className="text-xl font-black text-slate-900 mt-1">{activeLeadModal.companyName}</h2>
                <div className="text-xs text-slate-600 flex items-center gap-2 mt-0.5">
                  <span className="font-bold text-slate-800">{activeLeadModal.contactName}</span>
                  <span>•</span>
                  <span>📍 {activeLeadModal.location}</span>
                </div>
              </div>

              {/* Active Call Live Timer */}
              <div className="flex flex-col items-end">
                <div className="flex items-center gap-1.5 rounded-xl bg-slate-900 px-3 py-1.5 text-white shadow-xs">
                  <div className={`size-2 rounded-full ${isCallTimerRunning ? 'bg-emerald-400 animate-ping' : 'bg-slate-400'}`} />
                  <span className="font-mono text-sm font-black">{formatTimer(callTimerSeconds)}</span>
                </div>
                <button
                  type="button"
                  onClick={() => setIsCallTimerRunning(!isCallTimerRunning)}
                  className="text-[10px] font-bold text-slate-500 hover:text-slate-800 mt-1"
                >
                  {isCallTimerRunning ? '⏸️ Pause Timer' : '▶️ Resume Timer'}
                </button>
              </div>
            </div>

            {/* Direct 1-Tap Calling Bar */}
            <div className="my-4 p-3.5 rounded-2xl bg-slate-50 border border-slate-200 flex items-center justify-between">
              <div>
                <div className="text-[10px] font-bold uppercase tracking-wider text-slate-400">Phone Number</div>
                <div className="font-mono text-base font-black text-slate-900">{activeLeadModal.phone}</div>
              </div>

              <div className="flex items-center gap-2">
                <a
                  href={`tel:${activeLeadModal.phone.replace(/[^0-9+]/g, '')}`}
                  className="flex items-center gap-1.5 rounded-xl bg-[#16634b] px-4 py-2 text-xs font-black text-white hover:bg-[#16634b]/90 shadow-sm"
                >
                  <PhoneCall className="size-3.5" />
                  <span>Call Now</span>
                </a>

                <a
                  href={`https://wa.me/${activeLeadModal.phone.replace(/[^0-9]/g, '')}?text=${encodeURIComponent(`Hi ${activeLeadModal.contactName}, this is ARKA Digital Media reaching out regarding admissions marketing for ${activeLeadModal.companyName}.`)}`}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-1.5 rounded-xl bg-[#25D366] px-3.5 py-2 text-xs font-black text-white hover:brightness-105 shadow-sm"
                >
                  <span>WhatsApp</span>
                </a>
              </div>
            </div>

            {/* Outcome Form */}
            <div className="space-y-4 text-xs">
              <div>
                <label className="block text-xs font-bold text-slate-800 mb-1.5">Call Outcome *</label>
                <div className="grid grid-cols-2 gap-2">
                  <button
                    type="button"
                    onClick={() => { setOutcome('SPOKE_INTERESTED'); setOutcomeTemp('HOT'); }}
                    className={`p-2.5 rounded-xl border text-left font-bold transition cursor-pointer ${
                      outcome === 'SPOKE_INTERESTED' ? 'border-[#16634b] bg-emerald-50 text-emerald-950 ring-2 ring-[#16634b]' : 'border-slate-200 bg-white hover:bg-slate-50'
                    }`}
                  >
                    <div>✅ Spoke — Highly Interested</div>
                    <div className="text-[10px] font-normal text-slate-500">Marks Contacted & Hot 🔥</div>
                  </button>

                  <button
                    type="button"
                    onClick={() => { setOutcome('SPOKE_CALLBACK'); setOutcomeTemp('WARM'); }}
                    className={`p-2.5 rounded-xl border text-left font-bold transition cursor-pointer ${
                      outcome === 'SPOKE_CALLBACK' ? 'border-amber-600 bg-amber-50 text-amber-950 ring-2 ring-amber-500' : 'border-slate-200 bg-white hover:bg-slate-50'
                    }`}
                  >
                    <div>⏳ Spoke — Call Back</div>
                    <div className="text-[10px] font-normal text-slate-500">Follow-up needed ⚡</div>
                  </button>

                  <button
                    type="button"
                    onClick={() => { setOutcome('RINGING_NO_ANSWER'); setOutcomeTemp('COLD'); }}
                    className={`p-2.5 rounded-xl border text-left font-bold transition cursor-pointer ${
                      outcome === 'RINGING_NO_ANSWER' ? 'border-rose-600 bg-rose-50 text-rose-950 ring-2 ring-rose-500' : 'border-slate-200 bg-white hover:bg-slate-50'
                    }`}
                  >
                    <div>📞 Ringing / No Answer</div>
                    <div className="text-[10px] font-normal text-slate-500">Marks Unreachable</div>
                  </button>

                  <button
                    type="button"
                    onClick={() => { setOutcome('BUSY_NOT_REACHABLE'); setOutcomeTemp('COLD'); }}
                    className={`p-2.5 rounded-xl border text-left font-bold transition cursor-pointer ${
                      outcome === 'BUSY_NOT_REACHABLE' ? 'border-rose-600 bg-rose-50 text-rose-950 ring-2 ring-rose-500' : 'border-slate-200 bg-white hover:bg-slate-50'
                    }`}
                  >
                    <div>🚫 Busy / Switched Off</div>
                    <div className="text-[10px] font-normal text-slate-500">Marks Unreachable</div>
                  </button>

                  <button
                    type="button"
                    onClick={() => { setOutcome('NOT_INTERESTED'); setOutcomeTemp('COLD'); }}
                    className={`p-2.5 rounded-xl border text-left font-bold transition cursor-pointer ${
                      outcome === 'NOT_INTERESTED' ? 'border-slate-600 bg-slate-100 text-slate-900 ring-2 ring-slate-400' : 'border-slate-200 bg-white hover:bg-slate-50'
                    }`}
                  >
                    <div>❌ Not Interested</div>
                    <div className="text-[10px] font-normal text-slate-500">Marks Lost / Disqualified</div>
                  </button>

                  <button
                    type="button"
                    onClick={() => { setOutcome('WON'); setOutcomeTemp('HOT'); }}
                    className={`p-2.5 rounded-xl border text-left font-bold transition cursor-pointer ${
                      outcome === 'WON' ? 'border-purple-600 bg-purple-50 text-purple-950 ring-2 ring-purple-500' : 'border-slate-200 bg-white hover:bg-slate-50'
                    }`}
                  >
                    <div>🏆 Deal Won / Closed</div>
                    <div className="text-[10px] font-normal text-slate-500">Marks Closed Deal</div>
                  </button>
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-800 mb-1.5">Lead Temperature *</label>
                <div className="grid grid-cols-3 gap-2">
                  <button
                    type="button"
                    onClick={() => setOutcomeTemp('HOT')}
                    className={`py-2 rounded-xl border font-black text-center transition cursor-pointer ${
                      outcomeTemp === 'HOT' ? 'border-rose-500 bg-rose-100 text-rose-950 ring-2 ring-rose-400' : 'border-slate-200 bg-white'
                    }`}
                  >
                    🔥 Hot Lead
                  </button>
                  <button
                    type="button"
                    onClick={() => setOutcomeTemp('WARM')}
                    className={`py-2 rounded-xl border font-black text-center transition cursor-pointer ${
                      outcomeTemp === 'WARM' ? 'border-amber-500 bg-amber-100 text-amber-950 ring-2 ring-amber-400' : 'border-slate-200 bg-white'
                    }`}
                  >
                    ⚡ Warm Lead
                  </button>
                  <button
                    type="button"
                    onClick={() => setOutcomeTemp('COLD')}
                    className={`py-2 rounded-xl border font-black text-center transition cursor-pointer ${
                      outcomeTemp === 'COLD' ? 'border-sky-500 bg-sky-100 text-sky-950 ring-2 ring-sky-400' : 'border-slate-200 bg-white'
                    }`}
                  >
                    ❄️ Cold Lead
                  </button>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">Follow-up Date</label>
                  <input
                    type="date"
                    value={followUpDate}
                    onChange={(e) => setFollowUpDate(e.target.value)}
                    className="w-full rounded-xl border border-slate-200 bg-slate-50 p-2.5 text-xs font-semibold outline-none focus:bg-white"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">Next Action Required</label>
                  <input
                    type="text"
                    value={nextActionText}
                    onChange={(e) => setNextActionText(e.target.value)}
                    placeholder="e.g. Share commercial pitch deck"
                    className="w-full rounded-xl border border-slate-200 bg-slate-50 p-2.5 text-xs font-semibold outline-none focus:bg-white"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">Call Notes & Key Discussion</label>
                <textarea
                  rows={3}
                  value={callNotes}
                  onChange={(e) => setCallNotes(e.target.value)}
                  placeholder="Record admissions target, budget discussed, decision maker notes, objections, or commitments..."
                  className="w-full rounded-xl border border-slate-200 bg-slate-50 p-3 text-xs outline-none focus:bg-white"
                />
              </div>

              {/* Action Buttons: Save & Advance (Power Dialer) vs Save & Close */}
              <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-4 border-t border-slate-100">
                <button
                  type="button"
                  onClick={() => { setActiveLeadModal(null); setIsCallTimerRunning(false); }}
                  className="rounded-xl border border-slate-200 px-4 py-2.5 text-xs font-bold text-slate-600 hover:bg-slate-100"
                >
                  Cancel
                </button>

                <div className="flex items-center gap-2 w-full sm:w-auto">
                  <button
                    type="button"
                    onClick={() => handleSaveCallOutcome(activeLeadModal, false)}
                    className="flex-1 sm:flex-none rounded-xl border border-slate-900 bg-white px-4 py-2.5 text-xs font-bold text-slate-900 hover:bg-slate-50"
                  >
                    Save & Close
                  </button>

                  <button
                    type="button"
                    onClick={() => handleSaveCallOutcome(activeLeadModal, true)}
                    className="flex-1 sm:flex-none rounded-xl bg-[#16634b] hover:bg-[#16634b]/90 border border-[#e2c48d]/40 px-5 py-2.5 text-xs font-black text-white shadow-sm flex items-center justify-center gap-1.5"
                  >
                    <span>Save & Advance to Next Lead</span>
                    <span>⏭️</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export function NativeAccountsFinanceHub({
  actorName,
  actorRole,
  isAllowed,
  requiredRole,
  allClients,
}: {
  actorName: string;
  actorRole: string;
  isAllowed: boolean;
  requiredRole: string;
  allClients: string[];
}) {
  const [records, setRecords] = useState<ArkaClientPaymentRecord[]>(() => {
    try {
      const saved = localStorage.getItem('arka_client_payment_records');
      if (saved) return JSON.parse(saved);
    } catch {}
    return INITIAL_ARKA_PAYMENT_RECORDS;
  });

  const [activeMonth, setActiveMonth] = useState<string>('OCTOBER');
  const [clientSearch, setClientSearch] = useState('');
  const [statusFilter, setStatusFilter] = useState('ALL');
  const [clearanceFilter, setClearanceFilter] = useState('ALL');
  const [bannerMsg, setBannerMsg] = useState<string | null>(null);

  // Modals
  const [editingRecord, setEditingRecord] = useState<ArkaClientPaymentRecord | null>(null);
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [isExcelModalOpen, setIsExcelModalOpen] = useState(false);
  const [newRow, setNewRow] = useState<Partial<ArkaClientPaymentRecord>>({
    clientName: allClients[0] || 'Animal Gym',
    invoiceNo: 'AA',
    invoiceDate: '01.10.2026',
    invoiceDueDate: '05.10.2026',
    amountPayable: 25000,
    paymentStatus: 'PENDING',
    amountBalance: 25000,
    clearanceStatus: 'NOT CLEARED',
    dateOfPayment: '',
    invoiceSent: false,
    month: 'OCTOBER',
    colorTag: 'normal'
  });

  // Save to localStorage whenever records change
  useEffect(() => {
    try {
      localStorage.setItem('arka_client_payment_records', JSON.stringify(records));
    } catch {}
  }, [records]);

  if (!isAllowed) {
    return (
      <div className="flex min-h-[70vh] flex-col items-center justify-center p-8 text-center">
        <div className="flex size-16 items-center justify-center rounded-2xl bg-red-100 text-red-600">
          <ShieldAlert className="size-8" />
        </div>
        <h2 className="mt-4 text-2xl font-black text-slate-900">Access Restricted</h2>
        <p className="mt-2 max-w-md text-sm text-slate-500">
          This workspace is restricted to <strong>{requiredRole}</strong>.
        </p>
      </div>
    );
  }

  const isHr = actorRole === 'HR Manager';

  // Month-wise filter
  const monthFiltered = activeMonth === 'ALL MONTHS'
    ? records
    : records.filter((r) => r.month.toUpperCase() === activeMonth.toUpperCase());

  // Search & Status filters
  const filteredRecords = monthFiltered.filter((r) => {
    const matchSearch =
      !clientSearch ||
      r.(clientName || '').toLowerCase().includes(clientSearch.toLowerCase()) ||
      r.invoiceNo.toLowerCase().includes(clientSearch.toLowerCase()) ||
      r.dateOfPayment.toLowerCase().includes(clientSearch.toLowerCase());
    const matchStatus = statusFilter === 'ALL' || r.paymentStatus === statusFilter;
    const matchClearance = clearanceFilter === 'ALL' || r.clearanceStatus === clearanceFilter;
    return matchSearch && matchStatus && matchClearance;
  });

  // KPI Calculations
  const totalPayable = monthFiltered.reduce((s, r) => s + (Number(r.amountPayable) || 0), 0);
  const totalBalance = monthFiltered.reduce((s, r) => s + (Number(r.amountBalance) || 0), 0);
  const totalCollected = Math.max(0, totalPayable - totalBalance);
  const paidCount = monthFiltered.filter((r) => r.paymentStatus === 'PAID').length;
  const partialCount = monthFiltered.filter((r) => r.paymentStatus === 'PARTIALLY PAID').length;
  const pendingCount = monthFiltered.filter((r) => r.paymentStatus === 'PENDING').length;
  const clearedCount = monthFiltered.filter((r) => r.clearanceStatus === 'CLEARED').length;
  const invoiceSentCount = monthFiltered.filter((r) => r.invoiceSent).length;

  // Toggle invoice sent
  const handleToggleInvoiceSent = (id: string) => {
    setRecords((prev) =>
      prev.map((r) => (r.id === id ? { ...r, invoiceSent: !r.invoiceSent } : r))
    );
  };

  // Delete single row (Authorized for both Founder & HR Manager)
  const handleDeleteRow = (id: string) => {
    const target = records.find((r) => r.id === id);
    if (!target) return;
    if (confirm(`Delete payment record for "${target.clientName}" (SL. NO. ${target.slNo})?`)) {
      setRecords((prev) => {
        const next = prev.filter((r) => r.id !== id);
        try { localStorage.setItem('arka_client_payment_records', JSON.stringify(next)); } catch {}
        return next;
      });
      setBannerMsg(`Deleted record for ${target.clientName}.`);
    }
  };

  // Bulk Delete / Clear Month Records (Authorized for Founder & HR Manager)
  const handleClearMonthRecords = () => {
    const targetMonthStr = activeMonth === 'ALL MONTHS' ? 'ALL active months' : `month of ${activeMonth}`;
    if (confirm(`⚠️ Are you sure you want to delete ALL records for ${targetMonthStr}? This action removes them from the dashboard.`)) {
      setRecords((prev) => {
        const next = activeMonth === 'ALL MONTHS' ? [] : prev.filter((r) => r.month.toUpperCase() !== activeMonth.toUpperCase());
        try { localStorage.setItem('arka_client_payment_records', JSON.stringify(next)); } catch {}
        return next;
      });
      setBannerMsg(`🗑️ Cleared all payment records for ${targetMonthStr}.`);
    }
  };

  // Restore Default Authentic Sample Data
  const handleRestoreSampleData = () => {
    if (confirm("Restore the authentic 30 client records from the Google Sheet?")) {
      setRecords(INITIAL_ARKA_PAYMENT_RECORDS);
      try { localStorage.setItem('arka_client_payment_records', JSON.stringify(INITIAL_ARKA_PAYMENT_RECORDS)); } catch {}
      setBannerMsg("✅ Restored authentic 30 client records from the master spreadsheet.");
    }
  };

  // Save edit modal
  const handleSaveEdit = () => {
    if (!editingRecord) return;
    setRecords((prev) => prev.map((r) => (r.id === editingRecord.id ? editingRecord : r)));
    setBannerMsg(`Updated payment entry for ${editingRecord.clientName}.`);
    setEditingRecord(null);
  };

  // Add new row
  const handleAddRow = () => {
    if (!newRow.clientName) return;
    const created: ArkaClientPaymentRecord = {
      id: `pay-${Date.now()}`,
      slNo: records.filter((r) => r.month === (newRow.month || activeMonth)).length + 1,
      clientName: newRow.clientName || 'New Client',
      invoiceNo: newRow.invoiceNo || 'INV',
      invoiceDate: newRow.invoiceDate || '01.10.2026',
      invoiceDueDate: newRow.invoiceDueDate || '05.10.2026',
      amountPayable: Number(newRow.amountPayable) || 0,
      paymentStatus: (newRow.paymentStatus as any) || 'PENDING',
      amountBalance: Number(newRow.amountBalance) || Number(newRow.amountPayable) || 0,
      clearanceStatus: (newRow.clearanceStatus as any) || 'NOT CLEARED',
      dateOfPayment: newRow.dateOfPayment || '',
      invoiceSent: Boolean(newRow.invoiceSent),
      month: newRow.month || activeMonth,
      colorTag: (newRow.colorTag as any) || 'normal'
    };
    setRecords((prev) => [...prev, created]);
    setBannerMsg(`Added new payment row for ${created.clientName} under ${created.month}.`);
    setIsAddModalOpen(false);
  };

  // Multi-Sheet Excel / CSV Importer: captures ALL 11 columns
  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (evt) => {
      try {
        const data = new Uint8Array(evt.target?.result as ArrayBuffer);
        const wb = XLSX.read(data, { type: 'array' });

        const importedRows: ArkaClientPaymentRecord[] = [];
        const monthSheets = wb.SheetNames;

        monthSheets.forEach((sheetName) => {
          const ws = wb.Sheets[sheetName];
          const rawJson: any[] = XLSX.utils.sheet_to_json(ws, { header: 1 });
          if (!rawJson || rawJson.length < 2) return;

          // Determine month from sheet name (e.g. OCTOBER, SEPTEMBER, AUGUST, NOVEMBER)
          const sheetUpper = sheetName.toUpperCase().trim();
          let sheetMonth = 'OCTOBER';
          if (sheetUpper.includes('AUG')) sheetMonth = 'AUGUST';
          else if (sheetUpper.includes('SEP')) sheetMonth = 'SEPTEMBER';
          else if (sheetUpper.includes('OCT')) sheetMonth = 'OCTOBER';
          else if (sheetUpper.includes('NOV')) sheetMonth = 'NOVEMBER';
          else if (activeMonth !== 'ALL MONTHS') sheetMonth = activeMonth;

          // Find header row (usually row 0 or 1)
          let headerIdx = 0;
          for (let i = 0; i < Math.min(5, rawJson.length); i++) {
            const rowStr = (rawJson[i] || []).join(' ').toUpperCase();
            if (rowStr.includes('CLIENT') || rowStr.includes('INVOICE') || rowStr.includes('PAYABLE')) {
              headerIdx = i;
              break;
            }
          }

          const headers = (rawJson[headerIdx] || []).map((h: any) => String(h || '').trim().toUpperCase());

          const colSlNo = headers.findIndex((h: string) => h.includes('SL') || h.includes('NO'));
          const colClient = headers.findIndex((h: string) => h.includes('CLIENT'));
          const colInvNo = headers.findIndex((h: string) => h.includes('INVOICE NO') || h.includes('INV NO'));
          const colInvDate = headers.findIndex((h: string) => h === 'INVOICE DATE' || (h.includes('DATE') && !h.includes('DUE') && !h.includes('PAYMENT')));
          const colDueDate = headers.findIndex((h: string) => h.includes('DUE'));
          const colPayable = headers.findIndex((h: string) => h.includes('PAYABLE') || h.includes('AMOUNT'));
          const colPayStatus = headers.findIndex((h: string) => h.includes('PAYMENT STATUS'));
          const colBalance = headers.findIndex((h: string) => h.includes('BALANCE'));
          const colClearance = headers.findIndex((h: string) => h === 'STATUS' || h.includes('CLEAR'));
          const colDatePaid = headers.findIndex((h: string) => h.includes('DATE OF PAYMENT') || h.includes('PAID DATE'));
          const colSent = headers.findIndex((h: string) => h.includes('SENT'));

          for (let r = headerIdx + 1; r < rawJson.length; r++) {
            const row = rawJson[r];
            if (!row || row.length === 0) continue;

            const clientName = String(row[colClient !== -1 ? colClient : 1] || '').trim();
            if (!clientName) continue;

            const slNoRaw = row[colSlNo !== -1 ? colSlNo : 0];
            const slNo = Number(slNoRaw) || importedRows.length + 1;
            const invoiceNo = String(row[colInvNo !== -1 ? colInvNo : 2] || '').trim();
            const invoiceDate = String(row[colInvDate !== -1 ? colInvDate : 3] || '').trim();
            const invoiceDueDate = String(row[colDueDate !== -1 ? colDueDate : 4] || '').trim();

            const parseCleanAmount = (val: any) => {
              if (typeof val === 'number') return val;
              const clean = String(val || '').replace(/[^0-9.]/g, '');
              return Number(clean) || 0;
            };

            const amountPayable = parseCleanAmount(row[colPayable !== -1 ? colPayable : 5]);
            const rawPayStatus = String(row[colPayStatus !== -1 ? colPayStatus : 6] || '').toUpperCase().trim();
            let paymentStatus: 'PAID' | 'PARTIALLY PAID' | 'PENDING' = 'PENDING';
            if (rawPayStatus.includes('PARTIAL')) paymentStatus = 'PARTIALLY PAID';
            else if (rawPayStatus.includes('PAID')) paymentStatus = 'PAID';

            const amountBalance = colBalance !== -1 ? parseCleanAmount(row[colBalance]) : (paymentStatus === 'PAID' ? 0 : amountPayable);
            const rawClearance = String(row[colClearance !== -1 ? colClearance : 8] || '').toUpperCase().trim();
            const clearanceStatus: 'CLEARED' | 'NOT CLEARED' = (rawClearance.includes('CLEARED') && !rawClearance.includes('NOT')) || paymentStatus === 'PAID'
              ? 'CLEARED'
              : 'NOT CLEARED';

            const dateOfPayment = String(row[colDatePaid !== -1 ? colDatePaid : 9] || '').trim();
            const rawSent = String(row[colSent !== -1 ? colSent : 10] || '').toLowerCase().trim();
            const invoiceSent = rawSent.includes('sent') || rawSent === 'yes' || rawSent === 'true';

            // Automatic color detection matching Google Sheets
            let colorTag: 'orange' | 'red' | 'mustard' | 'normal' = 'normal';
            if ((clientName || '').toLowerCase().includes('pilates') || (clientName || '').toLowerCase().includes('aura')) {
              colorTag = 'red';
            } else if (paymentStatus === 'PARTIALLY PAID' || (clientName || '').toLowerCase().includes('bluecaps') || (clientName || '').toLowerCase().includes('raagi')) {
              colorTag = 'orange';
            } else if ((clientName || '').toLowerCase().includes('hair care')) {
              colorTag = 'mustard';
            }

            importedRows.push({
              id: `pay-imp-${Date.now()}-${Math.random().toString(36).substring(2, 6)}`,
              slNo,
              clientName,
              invoiceNo,
              invoiceDate,
              invoiceDueDate,
              amountPayable,
              paymentStatus,
              amountBalance,
              clearanceStatus,
              dateOfPayment,
              invoiceSent,
              month: sheetMonth,
              colorTag
            });
          }
        });

        if (importedRows.length > 0) {
          setRecords(importedRows);
          setBannerMsg(`✅ Successfully parsed and loaded ${importedRows.length} client payment records across ${monthSheets.length} sheet(s) with all 11 columns!`);
          setIsExcelModalOpen(false);
        } else {
          alert('Could not find valid client rows in the uploaded spreadsheet. Please check format.');
        }
      } catch (err: any) {
        console.error('Excel parse error:', err);
        alert('Error parsing Excel spreadsheet: ' + err.message);
      }
    };
    reader.readAsArrayBuffer(file);
  };

  // Export to Excel (.xlsx) with all 11 columns AND proper financial summary calculations
  const handleExportExcel = () => {
    const rows = filteredRecords.map((r) => ({
      'SL. NO.': r.slNo,
      'CLIENTS NAME': r.clientName,
      'INVOICE NO.': r.invoiceNo,
      'INVOICE DATE': r.invoiceDate,
      'INVOICE DUE DATE': r.invoiceDueDate,
      'AMOUNT PAYABLE': Number(r.amountPayable) || 0,
      'PAYMENT STATUS': r.paymentStatus,
      'AMOUNT BALANCE': Number(r.amountBalance) || 0,
      'STATUS': r.clearanceStatus,
      'DATE OF PAYMENT': r.dateOfPayment,
      'INVOICE SENT': r.invoiceSent ? 'Invoice sent' : ''
    }));

    // Calculate exact totals for proper financial calculation in the Excel sheet
    const sumPayable = rows.reduce((s, r) => s + r['AMOUNT PAYABLE'], 0);
    const sumBalance = rows.reduce((s, r) => s + r['AMOUNT BALANCE'], 0);
    const sumCollected = Math.max(0, sumPayable - sumBalance);

    // Append dedicated summary and calculation rows at the bottom of the worksheet
    const exportData: any[] = [
      ...rows,
      {
        'SL. NO.': '',
        'CLIENTS NAME': 'TOTAL PAYABLE (BILLED)',
        'INVOICE NO.': '',
        'INVOICE DATE': '',
        'INVOICE DUE DATE': '',
        'AMOUNT PAYABLE': sumPayable,
        'PAYMENT STATUS': '',
        'AMOUNT BALANCE': '',
        'STATUS': '',
        'DATE OF PAYMENT': '',
        'INVOICE SENT': ''
      },
      {
        'SL. NO.': '',
        'CLIENTS NAME': 'TOTAL BALANCE OUTSTANDING',
        'INVOICE NO.': '',
        'INVOICE DATE': '',
        'INVOICE DUE DATE': '',
        'AMOUNT PAYABLE': '',
        'PAYMENT STATUS': '',
        'AMOUNT BALANCE': sumBalance,
        'STATUS': '',
        'DATE OF PAYMENT': '',
        'INVOICE SENT': ''
      },
      {
        'SL. NO.': '',
        'CLIENTS NAME': 'TOTAL COLLECTED / SETTLED',
        'INVOICE NO.': '',
        'INVOICE DATE': '',
        'INVOICE DUE DATE': '',
        'AMOUNT PAYABLE': sumCollected,
        'PAYMENT STATUS': 'RECONCILED',
        'AMOUNT BALANCE': 0,
        'STATUS': 'CLEARED',
        'DATE OF PAYMENT': new Date().toLocaleDateString('en-GB'),
        'INVOICE SENT': ''
      }
    ];

    const ws = XLSX.utils.json_to_sheet(exportData);

    // Auto-fit column widths so Excel displays data cleanly
    ws['!cols'] = [
      { wch: 8 },  // SL. NO.
      { wch: 30 }, // CLIENTS NAME
      { wch: 15 }, // INVOICE NO.
      { wch: 15 }, // INVOICE DATE
      { wch: 18 }, // INVOICE DUE DATE
      { wch: 18 }, // AMOUNT PAYABLE
      { wch: 18 }, // PAYMENT STATUS
      { wch: 18 }, // AMOUNT BALANCE
      { wch: 15 }, // STATUS
      { wch: 18 }, // DATE OF PAYMENT
      { wch: 15 }, // INVOICE SENT
    ];

    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, activeMonth);
    XLSX.writeFile(wb, `ARKA_MEDIA_Clients_Details_Payments_${activeMonth}.xlsx`);
  };

  // Download Sample Template with all 11 columns
  const handleDownloadSampleTemplate = () => {
    const sampleRows = INITIAL_ARKA_PAYMENT_RECORDS.slice(0, 10).map((r) => ({
      'SL. NO.': r.slNo,
      'CLIENTS NAME': r.clientName,
      'INVOICE NO.': r.invoiceNo,
      'INVOICE DATE': r.invoiceDate,
      'INVOICE DUE DATE': r.invoiceDueDate,
      'AMOUNT PAYABLE': r.amountPayable,
      'PAYMENT STATUS': r.paymentStatus,
      'AMOUNT BALANCE': r.amountBalance,
      'STATUS': r.clearanceStatus,
      'DATE OF PAYMENT': r.dateOfPayment,
      'INVOICE SENT': r.invoiceSent ? 'Invoice sent' : ''
    }));
    const ws = XLSX.utils.json_to_sheet(sampleRows);
    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, 'OCTOBER');
    XLSX.writeFile(wb, 'ARKA_Client_Payments_Sample_Template.xlsx');
  };

  return (
    <div className="space-y-6">
      {/* Executive Command Header - Emerald & Gold */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 bg-gradient-to-r from-[#10271f] to-[#16634b] text-white p-6 rounded-3xl border border-[#e2c48d]/30 shadow-xl">
        <div>
          <div className="flex items-center gap-2">
            <span className="text-[11px] font-bold uppercase tracking-widest text-[#e2c48d]">
              ARKA MEDIA · ACCOUNTS, CLIENT PAYMENTS & COLLECTIONS
            </span>
            {isHr ? (
              <span className="text-[10px] font-extrabold uppercase tracking-wider bg-purple-900/80 text-purple-200 border border-purple-600 px-2.5 py-0.5 rounded-full flex items-center gap-1">
                <UserCheck className="h-3 w-3 text-purple-300" /> HR Oversight Mode
              </span>
            ) : (
              <span className="text-[10px] font-extrabold uppercase tracking-wider bg-[#e2c48d]/20 text-[#e2c48d] border border-[#e2c48d]/40 px-2.5 py-0.5 rounded-full flex items-center gap-1">
                <Crown className="h-3 w-3 text-[#e2c48d]" /> Founder Mode ({actorName})
              </span>
            )}
          </div>
          <h2 className="text-2xl sm:text-3xl font-black mt-1">Clients Details & Payments Ledger</h2>
          <p className="text-xs sm:text-sm text-slate-200 mt-1">
            Official monthly fee tracker, invoice due dates, clearance statuses, and Excel importer with all 11 columns.
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-2">
          <button
            type="button"
            onClick={() => setIsExcelModalOpen(true)}
            className="flex items-center gap-2 rounded-xl bg-white text-slate-900 font-bold px-3.5 py-2.5 text-xs shadow hover:bg-slate-100 transition cursor-pointer"
            title="Import payment records from Excel/CSV"
          >
            <Upload className="size-3.5 text-emerald-700" />
            <span>Upload Excel</span>
          </button>

          <button
            type="button"
            onClick={handleExportExcel}
            className="flex items-center gap-2 rounded-xl bg-[#10271f] border border-[#e2c48d]/50 text-[#e2c48d] font-bold px-3.5 py-2.5 text-xs shadow hover:bg-[#10271f]/80 transition cursor-pointer"
            title="Export Excel with automatic calculation formulas"
          >
            <Download className="size-3.5" />
            <span>Export .xlsx (Calculated)</span>
          </button>

          <button
            type="button"
            onClick={() => setIsAddModalOpen(true)}
            className="flex items-center gap-2 rounded-xl bg-[#e2c48d] text-slate-950 font-black px-3.5 py-2.5 text-xs shadow hover:bg-[#e2c48d]/90 transition cursor-pointer"
            title="Add a new client payment record"
          >
            <Plus className="size-3.5" />
            <span>+ Add Payment</span>
          </button>

          <button
            type="button"
            onClick={handleClearMonthRecords}
            className="flex items-center gap-1.5 rounded-xl bg-rose-500/20 border border-rose-400/40 text-rose-200 hover:bg-rose-600 hover:text-white font-bold px-3 py-2.5 text-xs transition cursor-pointer"
            title="Delete all records for active month"
          >
            <span>🗑️ Clear {activeMonth}</span>
          </button>
        </div>
      </div>

      {bannerMsg && (
        <div className="flex items-center justify-between rounded-2xl border border-emerald-300 bg-emerald-50 px-5 py-3.5 text-xs font-bold text-emerald-900 shadow-xs">
          <span>{bannerMsg}</span>
          <button onClick={() => setBannerMsg(null)} className="underline text-emerald-700 hover:text-emerald-900 font-bold">Dismiss</button>
        </div>
      )}

      {/* Month-Wise Tabs Matching Google Sheets */}
      <div className="flex flex-wrap items-center gap-1.5 p-1.5 bg-slate-200/70 rounded-2xl border border-slate-300">
        {['AUGUST', 'SEPTEMBER', 'OCTOBER', 'NOVEMBER', 'ALL MONTHS'].map((m) => {
          const isActive = activeMonth.toUpperCase() === m;
          const count = m === 'ALL MONTHS'
            ? records.length
            : records.filter((r) => r.month.toUpperCase() === m).length;

          return (
            <button
              key={m}
              type="button"
              onClick={() => setActiveMonth(m)}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-extrabold transition cursor-pointer ${
                isActive
                  ? 'bg-[#16634b] text-white shadow-md ring-2 ring-[#e2c48d]/40'
                  : 'text-slate-700 hover:bg-white/80'
              }`}
            >
              <span>{m}</span>
              <span className={`text-[10px] px-2 py-0.5 rounded-full font-black ${
                isActive ? 'bg-[#10271f] text-[#e2c48d]' : 'bg-slate-300/80 text-slate-700'
              }`}>
                {count}
              </span>
            </button>
          );
        })}
      </div>

      {/* KPI Financial Overview Cards */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="bg-white p-5 rounded-3xl border border-slate-200 shadow-xs ring-1 ring-slate-100">
          <span className="text-[11px] font-bold uppercase tracking-wider text-slate-500">Total Billed ({activeMonth})</span>
          <p className="text-2xl sm:text-3xl font-black text-slate-900 mt-2">{formatINR(totalPayable)}</p>
          <div className="mt-2 text-xs text-slate-500 font-semibold flex items-center justify-between">
            <span>{monthFiltered.length} Client Invoices</span>
            <span className="text-emerald-700 font-bold">{invoiceSentCount} Invoices Sent</span>
          </div>
        </div>

        <div className="bg-white p-5 rounded-3xl border border-emerald-200 shadow-xs bg-emerald-50/20">
          <span className="text-[11px] font-bold uppercase tracking-wider text-emerald-800">Total Collected / Settled</span>
          <p className="text-2xl sm:text-3xl font-black text-emerald-700 mt-2">{formatINR(totalCollected)}</p>
          <div className="mt-2 text-xs text-emerald-800 font-semibold flex items-center justify-between">
            <span>{paidCount} Fully Paid</span>
            <span className="text-blue-700 font-bold">{partialCount} Partially Paid</span>
          </div>
        </div>

        <div className="bg-white p-5 rounded-3xl border border-amber-200 shadow-xs bg-amber-50/20">
          <span className="text-[11px] font-bold uppercase tracking-wider text-amber-800">Total Balance Outstanding</span>
          <p className="text-2xl sm:text-3xl font-black text-amber-700 mt-2">{formatINR(totalBalance)}</p>
          <div className="mt-2 text-xs text-amber-800 font-semibold flex items-center justify-between">
            <span>{pendingCount} Pending Accounts</span>
            <span className="text-rose-700 font-bold">{monthFiltered.length - clearedCount} Unsettled</span>
          </div>
        </div>

        <div className="bg-white p-5 rounded-3xl border border-purple-200 shadow-xs bg-purple-50/20">
          <span className="text-[11px] font-bold uppercase tracking-wider text-purple-800">Clearance & Health</span>
          <p className="text-2xl sm:text-3xl font-black text-purple-700 mt-2">
            {clearedCount} <span className="text-sm font-bold text-slate-400">/ {monthFiltered.length} Cleared</span>
          </p>
          <div className="mt-2 text-xs text-purple-800 font-semibold flex items-center justify-between">
            <span className="text-emerald-700 font-bold">{Math.round((clearedCount / (monthFiltered.length || 1)) * 100)}% Cleared</span>
            <span className="text-rose-700 font-bold">{monthFiltered.length - clearedCount} Overdue / Red</span>
          </div>
        </div>
      </div>

      {/* Filter & Search Bar */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 bg-white p-4 rounded-2xl border border-slate-200 shadow-xs">
        <div className="flex flex-wrap items-center gap-2 flex-1">
          <div className="relative min-w-[220px]">
            <Search className="absolute left-3 top-2.5 size-4 text-slate-400" />
            <input
              type="text"
              placeholder="Search client, invoice #, date..."
              value={clientSearch}
              onChange={(e) => setClientSearch(e.target.value)}
              className="w-full rounded-xl border border-slate-200 pl-9 pr-3 py-2 text-xs bg-slate-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-emerald-500"
            />
          </div>

          <select
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value)}
            className="rounded-xl border border-slate-200 bg-slate-50 px-3 py-2 text-xs font-bold text-slate-700"
          >
            <option value="ALL">All Payment Statuses</option>
            <option value="PAID">PAID</option>
            <option value="PARTIALLY PAID">PARTIALLY PAID</option>
            <option value="PENDING">PENDING</option>
          </select>

          <select
            value={clearanceFilter}
            onChange={(e) => setClearanceFilter(e.target.value)}
            className="rounded-xl border border-slate-200 bg-slate-50 px-3 py-2 text-xs font-bold text-slate-700"
          >
            <option value="ALL">All Clearance Statuses</option>
            <option value="CLEARED">CLEARED</option>
            <option value="NOT CLEARED">NOT CLEARED</option>
          </select>
        </div>

        <div className="text-xs font-bold text-slate-500">
          Showing <span className="text-slate-900">{filteredRecords.length}</span> of {monthFiltered.length} records
        </div>
      </div>

      {/* Main Authentic Table Matching Google Sheets */}
      <div className="rounded-3xl border border-slate-200 bg-white shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs border-collapse">
            <thead>
              <tr className="bg-[#fef3c7] text-[#78350f] font-black uppercase text-[11px] border-b border-amber-300">
                <th className="px-3.5 py-3 text-center w-14">SL. NO.</th>
                <th className="px-4 py-3 min-w-[180px]">CLIENTS NAME</th>
                <th className="px-3 py-3 w-28">INVOICE NO.</th>
                <th className="px-3 py-3 w-28">INVOICE DATE</th>
                <th className="px-3 py-3 w-32">INVOICE DUE DATE</th>
                <th className="px-3 py-3 w-32 text-right">AMOUNT PAYABLE</th>
                <th className="px-3.5 py-3 w-36 text-center">PAYMENT STATUS</th>
                <th className="px-3 py-3 w-32 text-right">AMOUNT BALANCE</th>
                <th className="px-3.5 py-3 w-32 text-center">STATUS</th>
                <th className="px-3 py-3 w-32">DATE OF PAYMENT</th>
                <th className="px-3.5 py-3 w-32 text-center">INVOICE SENT</th>
                <th className="px-3 py-3 text-right w-24">ACTIONS</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {filteredRecords.map((r) => {
                // Determine styling based on colorTag matching Google Sheet screenshot
                let rowBgClass = 'hover:bg-slate-50/80 transition';
                if (r.colorTag === 'red') {
                  rowBgClass = 'bg-red-500/15 hover:bg-red-500/25 border-l-4 border-l-red-600 font-semibold';
                } else if (r.colorTag === 'orange') {
                  rowBgClass = 'bg-amber-400/20 hover:bg-amber-400/30 border-l-4 border-l-amber-500 font-semibold';
                } else if (r.colorTag === 'mustard') {
                  rowBgClass = 'bg-yellow-400/20 hover:bg-yellow-400/30 border-l-4 border-l-yellow-600 font-semibold';
                }

                return (
                  <tr key={r.id} className={rowBgClass}>
                    <td className="px-3.5 py-3 text-center font-bold text-slate-700">
                      {r.slNo}
                    </td>

                    <td className="px-4 py-3 font-extrabold text-slate-900">
                      {r.clientName}
                    </td>

                    <td className="px-3 py-3 font-mono font-bold text-slate-600">
                      {r.invoiceNo || '-'}
                    </td>

                    <td className="px-3 py-3 font-mono text-slate-600 text-[11px]">
                      {r.invoiceDate || '-'}
                    </td>

                    <td className="px-3 py-3 font-mono font-bold text-slate-700 text-[11px]">
                      {r.invoiceDueDate || '-'}
                    </td>

                    <td className="px-3 py-3 text-right font-black text-slate-900">
                      {formatINR(r.amountPayable)}
                    </td>

                    <td className="px-3.5 py-3 text-center">
                      {r.paymentStatus === 'PAID' ? (
                        <span className="inline-block rounded-md bg-emerald-600 px-3 py-1 text-[11px] font-black text-white shadow-xs">
                          PAID
                        </span>
                      ) : r.paymentStatus === 'PARTIALLY PAID' ? (
                        <span className="inline-block rounded-md bg-sky-200 border border-sky-400 px-2.5 py-1 text-[11px] font-extrabold text-sky-900 shadow-xs">
                          PARTIALLY PAID
                        </span>
                      ) : (
                        <span className="text-[11px] text-slate-400 font-medium">
                          -
                        </span>
                      )}
                    </td>

                    <td className="px-3 py-3 text-right font-black text-slate-800">
                      {r.amountBalance > 0 ? formatINR(r.amountBalance) : '-'}
                    </td>

                    <td className="px-3.5 py-3 text-center">
                      {r.clearanceStatus === 'CLEARED' ? (
                        <span className="inline-block rounded-md bg-emerald-700 px-2.5 py-1 text-[11px] font-black text-white shadow-xs">
                          CLEARED
                        </span>
                      ) : r.clearanceStatus === 'NOT CLEARED' && (r.amountBalance > 0 || r.colorTag === 'orange' || r.colorTag === 'red') ? (
                        <span className="inline-block rounded-md bg-red-700 px-2 py-1 text-[10px] font-black text-white shadow-xs">
                          NOT CLEARED
                        </span>
                      ) : (
                        <span className="text-[11px] text-slate-400 font-medium">-</span>
                      )}
                    </td>

                    <td className="px-3 py-3 font-mono text-slate-700 font-semibold text-[11px]">
                      {r.dateOfPayment || '-'}
                    </td>

                    <td className="px-3.5 py-3 text-center">
                      <button
                        type="button"
                        onClick={() => handleToggleInvoiceSent(r.id)}
                        className="cursor-pointer transition"
                        title="Click to toggle Invoice Sent status"
                      >
                        {r.invoiceSent ? (
                          <span className="inline-flex items-center gap-1 rounded bg-[#22c55e] px-2 py-1 text-[10px] font-black text-white shadow-xs">
                            ✓ Invoice sent
                          </span>
                        ) : (
                          <span className="text-[11px] text-slate-300 font-bold hover:text-slate-600">
                            -
                          </span>
                        )}
                      </button>
                    </td>

                    <td className="px-3 py-3 text-right">
                      <div className="flex items-center justify-end gap-1.5">
                        <button
                          type="button"
                          onClick={() => setEditingRecord(r)}
                          className="rounded-lg bg-slate-900 px-2.5 py-1 text-[10px] font-bold text-white hover:bg-slate-800 transition cursor-pointer"
                        >
                          Edit
                        </button>
                        <button
                          type="button"
                          onClick={() => handleDeleteRow(r.id)}
                          className="rounded-lg bg-red-100 p-1 text-red-600 hover:bg-red-200 transition cursor-pointer"
                          title="Delete record"
                        >
                          ✕
                        </button>
                      </div>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>

      {/* Edit Record Modal */}
      {editingRecord && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4">
          <div className="w-full max-w-lg rounded-3xl bg-white p-6 shadow-2xl space-y-4">
            <div className="flex items-center justify-between border-b pb-3">
              <div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-700">ACCOUNTS LEDGER UPDATE</span>
                <h3 className="text-lg font-black text-slate-900">Edit — {editingRecord.clientName}</h3>
              </div>
              <button onClick={() => setEditingRecord(null)} className="text-slate-400 hover:text-black font-bold">✕</button>
            </div>

            <div className="grid grid-cols-2 gap-3 text-xs">
              <div>
                <label className="font-bold block mb-1">Invoice Number</label>
                <input
                  value={editingRecord.invoiceNo}
                  onChange={(e) => setEditingRecord({ ...editingRecord, invoiceNo: e.target.value })}
                  className="w-full rounded-xl border border-slate-200 px-3 py-2 font-mono"
                />
              </div>

              <div>
                <label className="font-bold block mb-1">Due Date</label>
                <input
                  value={editingRecord.invoiceDueDate}
                  onChange={(e) => setEditingRecord({ ...editingRecord, invoiceDueDate: e.target.value })}
                  className="w-full rounded-xl border border-slate-200 px-3 py-2 font-mono"
                />
              </div>

              <div>
                <label className="font-bold block mb-1">Amount Payable (₹)</label>
                <input
                  type="number"
                  value={editingRecord.amountPayable}
                  onChange={(e) => setEditingRecord({ ...editingRecord, amountPayable: Number(e.target.value) || 0 })}
                  className="w-full rounded-xl border border-slate-200 px-3 py-2 font-bold"
                />
              </div>

              <div>
                <label className="font-bold block mb-1">Outstanding Balance (₹)</label>
                <input
                  type="number"
                  value={editingRecord.amountBalance}
                  onChange={(e) => setEditingRecord({ ...editingRecord, amountBalance: Number(e.target.value) || 0 })}
                  className="w-full rounded-xl border border-slate-200 px-3 py-2 font-bold"
                />
              </div>

              <div>
                <label className="font-bold block mb-1">Payment Status</label>
                <select
                  value={editingRecord.paymentStatus}
                  onChange={(e) => {
                    const status = e.target.value as any;
                    let bal = editingRecord.amountBalance;
                    let clearance = editingRecord.clearanceStatus;
                    if (status === 'PAID') {
                      bal = 0;
                      clearance = 'CLEARED';
                    } else if (status === 'PARTIALLY PAID' && bal === 0) {
                      bal = Math.round(editingRecord.amountPayable / 2);
                      clearance = 'NOT CLEARED';
                    }
                    setEditingRecord({ ...editingRecord, paymentStatus: status, amountBalance: bal, clearanceStatus: clearance });
                  }}
                  className="w-full rounded-xl border border-slate-200 px-3 py-2 font-bold"
                >
                  <option value="PENDING">PENDING</option>
                  <option value="PARTIALLY PAID">PARTIALLY PAID</option>
                  <option value="PAID">PAID</option>
                </select>
              </div>

              <div>
                <label className="font-bold block mb-1">Clearance Status</label>
                <select
                  value={editingRecord.clearanceStatus}
                  onChange={(e) => setEditingRecord({ ...editingRecord, clearanceStatus: e.target.value as any })}
                  className="w-full rounded-xl border border-slate-200 px-3 py-2 font-bold"
                >
                  <option value="NOT CLEARED">NOT CLEARED</option>
                  <option value="CLEARED">CLEARED</option>
                </select>
              </div>

              <div>
                <label className="font-bold block mb-1">Date of Payment</label>
                <input
                  placeholder="DD.MM.YYYY"
                  value={editingRecord.dateOfPayment}
                  onChange={(e) => setEditingRecord({ ...editingRecord, dateOfPayment: e.target.value })}
                  className="w-full rounded-xl border border-slate-200 px-3 py-2 font-mono"
                />
              </div>

              <div>
                <label className="font-bold block mb-1">Row Highlight</label>
                <select
                  value={editingRecord.colorTag || 'normal'}
                  onChange={(e) => setEditingRecord({ ...editingRecord, colorTag: e.target.value as any })}
                  className="w-full rounded-xl border border-slate-200 px-3 py-2 font-bold"
                >
                  <option value="normal">Normal (White)</option>
                  <option value="orange">Orange (Partial / Due)</option>
                  <option value="red">Red (Critical / Overdue)</option>
                  <option value="mustard">Mustard (Special)</option>
                </select>
              </div>
            </div>

            <div className="flex items-center gap-2 pt-2">
              <input
                type="checkbox"
                id="editInvoiceSent"
                checked={editingRecord.invoiceSent}
                onChange={(e) => setEditingRecord({ ...editingRecord, invoiceSent: e.target.checked })}
                className="size-4 rounded text-emerald-600"
              />
              <label htmlFor="editInvoiceSent" className="text-xs font-bold text-slate-800">
                Invoice Sent to Client
              </label>
            </div>

            <div className="flex justify-end gap-2 pt-3 border-t">
              <button
                type="button"
                onClick={() => setEditingRecord(null)}
                className="rounded-xl px-4 py-2 text-xs font-bold text-slate-600 hover:bg-slate-100"
              >
                Cancel
              </button>
              <button
                type="button"
                onClick={handleSaveEdit}
                className="rounded-xl bg-[#16634b] px-5 py-2 text-xs font-black text-white hover:bg-[#16634b]/90 shadow-xs"
              >
                Save Changes
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Add Client Payment Record Modal */}
      {isAddModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4">
          <div className="w-full max-w-lg rounded-3xl bg-white p-6 shadow-2xl space-y-4">
            <div className="flex items-center justify-between border-b pb-3">
              <div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-700">NEW CLIENT INVOICE</span>
                <h3 className="text-lg font-black text-slate-900">Add Payment Entry ({activeMonth})</h3>
              </div>
              <button onClick={() => setIsAddModalOpen(false)} className="text-slate-400 hover:text-black font-bold">✕</button>
            </div>

            <div className="grid grid-cols-2 gap-3 text-xs">
              <div className="col-span-2">
                <label className="font-bold block mb-1">Client Name</label>
                <input
                  placeholder="e.g. FitZone Elite"
                  value={newRow.clientName}
                  onChange={(e) => setNewRow({ ...newRow, clientName: e.target.value })}
                  className="w-full rounded-xl border border-slate-200 px-3 py-2 font-bold"
                />
              </div>

              <div>
                <label className="font-bold block mb-1">Invoice Code</label>
                <input
                  placeholder="e.g. FZE"
                  value={newRow.invoiceNo}
                  onChange={(e) => setNewRow({ ...newRow, invoiceNo: e.target.value })}
                  className="w-full rounded-xl border border-slate-200 px-3 py-2 font-mono"
                />
              </div>

              <div>
                <label className="font-bold block mb-1">Due Date</label>
                <input
                  placeholder="05.10.2026"
                  value={newRow.invoiceDueDate}
                  onChange={(e) => setNewRow({ ...newRow, invoiceDueDate: e.target.value })}
                  className="w-full rounded-xl border border-slate-200 px-3 py-2 font-mono"
                />
              </div>

              <div>
                <label className="font-bold block mb-1">Amount Payable (₹)</label>
                <input
                  type="number"
                  placeholder="25000"
                  value={newRow.amountPayable}
                  onChange={(e) => {
                    const amt = Number(e.target.value) || 0;
                    const bal = newRow.paymentStatus === 'PAID' ? 0 : amt;
                    setNewRow({ ...newRow, amountPayable: amt, amountBalance: bal });
                  }}
                  className="w-full rounded-xl border border-slate-200 px-3 py-2 font-bold"
                />
              </div>

              <div>
                <label className="font-bold block mb-1">Outstanding Balance (₹)</label>
                <input
                  type="number"
                  placeholder="25000"
                  value={newRow.amountBalance}
                  onChange={(e) => setNewRow({ ...newRow, amountBalance: Number(e.target.value) || 0 })}
                  className="w-full rounded-xl border border-slate-200 px-3 py-2 font-bold"
                />
              </div>

              <div>
                <label className="font-bold block mb-1">Payment Status</label>
                <select
                  value={newRow.paymentStatus || 'PENDING'}
                  onChange={(e) => {
                    const status = e.target.value as any;
                    const payable = Number(newRow.amountPayable) || 0;
                    let bal = Number(newRow.amountBalance) || payable;
                    let clearance: 'CLEARED' | 'NOT CLEARED' = 'NOT CLEARED';
                    if (status === 'PAID') {
                      bal = 0;
                      clearance = 'CLEARED';
                    } else if (status === 'PARTIALLY PAID') {
                      bal = Math.round(payable / 2);
                      clearance = 'NOT CLEARED';
                    } else {
                      bal = payable;
                      clearance = 'NOT CLEARED';
                    }
                    setNewRow({ ...newRow, paymentStatus: status, amountBalance: bal, clearanceStatus: clearance });
                  }}
                  className="w-full rounded-xl border border-slate-200 px-3 py-2 font-bold"
                >
                  <option value="PENDING">PENDING</option>
                  <option value="PARTIALLY PAID">PARTIALLY PAID</option>
                  <option value="PAID">PAID</option>
                </select>
              </div>

              <div>
                <label className="font-bold block mb-1">Payment Month</label>
                <select
                  value={newRow.month || activeMonth}
                  onChange={(e) => setNewRow({ ...newRow, month: e.target.value })}
                  className="w-full rounded-xl border border-slate-200 px-3 py-2 font-bold"
                >
                  <option value="OCTOBER">OCTOBER</option>
                  <option value="SEPTEMBER">SEPTEMBER</option>
                  <option value="AUGUST">AUGUST</option>
                  <option value="NOVEMBER">NOVEMBER</option>
                </select>
              </div>
            </div>

            <div className="flex justify-end gap-2 pt-3 border-t">
              <button
                type="button"
                onClick={() => setIsAddModalOpen(false)}
                className="rounded-xl px-4 py-2 text-xs font-bold text-slate-600 hover:bg-slate-100"
              >
                Cancel
              </button>
              <button
                type="button"
                onClick={handleAddRow}
                className="rounded-xl bg-[#16634b] px-5 py-2 text-xs font-black text-white hover:bg-[#16634b]/90 shadow-xs"
              >
                + Add Record
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Multi-Sheet Excel & CSV Importer Modal */}
      {isExcelModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4">
          <div className="w-full max-w-lg rounded-3xl bg-white p-6 shadow-2xl space-y-4">
            <div className="flex items-center justify-between border-b pb-3">
              <div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-700">MULTI-SHEET EXCEL / CSV UPLOADER</span>
                <h3 className="text-lg font-black text-slate-900">Import Client Payment Spreadsheet</h3>
              </div>
              <button onClick={() => setIsExcelModalOpen(false)} className="text-slate-400 hover:text-black font-bold">✕</button>
            </div>

            <div className="p-4 rounded-2xl bg-amber-50 border border-amber-200 text-xs text-amber-900 space-y-1.5 leading-relaxed">
              <p className="font-bold">✨ Captures ALL 11 Spreadsheet Columns Exactly as Shown:</p>
              <p className="font-mono text-[11px] text-amber-800">
                SL. NO. | CLIENTS NAME | INVOICE NO. | INVOICE DATE | INVOICE DUE DATE | AMOUNT PAYABLE | PAYMENT STATUS | AMOUNT BALANCE | STATUS | DATE OF PAYMENT | INVOICE SENT
              </p>
              <p className="text-[11px] text-amber-700">
                Supports multi-sheet workbooks (e.g. AUGUST, SEPTEMBER, OCTOBER, NOVEMBER tabs) and automatically tags rows to their respective months.
              </p>
            </div>

            <div className="border-2 border-dashed border-emerald-400 rounded-3xl p-8 text-center bg-emerald-50/30 hover:bg-emerald-50/60 transition cursor-pointer relative">
              <input
                type="file"
                accept=".xlsx,.xls,.csv"
                onChange={handleFileUpload}
                className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
              />
              <FileSpreadsheet className="size-12 text-emerald-600 mx-auto" />
              <p className="mt-3 text-sm font-extrabold text-slate-900">
                Click or drag & drop .xlsx, .xls, or .csv here
              </p>
              <p className="mt-1 text-xs text-slate-500">
                All client payment records will be parsed immediately
              </p>
            </div>

            <div className="flex items-center justify-between pt-2 border-t text-xs">
              <button
                type="button"
                onClick={handleDownloadSampleTemplate}
                className="text-emerald-700 font-bold hover:underline flex items-center gap-1"
              >
                <Download className="size-3.5" /> Download Sample Template
              </button>

              <button
                type="button"
                onClick={() => setIsExcelModalOpen(false)}
                className="rounded-xl px-4 py-2 font-bold text-slate-600 hover:bg-slate-100"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
