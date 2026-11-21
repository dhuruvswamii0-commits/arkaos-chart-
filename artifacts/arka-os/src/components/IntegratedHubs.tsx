import * as XLSX from 'xlsx';
import { useState, useEffect, useMemo, useRef } from 'react';
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
  Phone,
  Mail,
  MapPin,
  CalendarDays,
  Check,
  X,
  Trash2,
  Edit3,
  ExternalLink,
  Send,
  History,
  FileDown
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
  const TODAY = new Date().toISOString().slice(0, 10);
  const CURRENT_MONTH = new Date().toISOString().slice(0, 7); // e.g. "2026-11"

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

  // Persist leads locally
  useEffect(() => {
    try {
      localStorage.setItem('arka_sales_crm_leads', JSON.stringify(leads));
    } catch {}
  }, [leads]);

  // Background live sync with Hostinger API
  useEffect(() => {
    let isMounted = true;
    async function loadRemoteLeads() {
      try {
        const syncUrl = typeof window !== 'undefined' && window.location.protocol === 'file:'
          ? 'https://hub.arkadigitalmedia.com/api/sync.php?action=get'
          : `${window.location.origin}/api/sync.php?action=get`;
        const res = await fetch(`${syncUrl}&_t=${Date.now()}`);
        if (res.ok) {
          const data = await res.json();
          if (data?.ok && Array.isArray(data.leads) && data.leads.length > 0 && isMounted) {
            setLeads(prev => {
              const map = new Map<string, IntegratedLead>(prev.map(l => [l.id, l]));
              data.leads.forEach((rl: IntegratedLead) => {
                if (rl && rl.id) {
                  const existing = map.get(rl.id);
                  map.set(rl.id, existing ? { ...existing, ...rl } : rl);
                }
              });
              return Array.from(map.values());
            });
          }
        }
      } catch {}
    }
    void loadRemoteLeads();
    return () => { isMounted = false; };
  }, []);

  // Helper to sync lead change to Hostinger backend
  const pushLeadSync = async (updatedLead: IntegratedLead) => {
    try {
      const syncUrl = typeof window !== 'undefined' && window.location.protocol === 'file:'
        ? 'https://hub.arkadigitalmedia.com/api/sync.php'
        : `${window.location.origin}/api/sync.php`;
      await fetch(syncUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ type: 'addLead', lead: updatedLead })
      });
    } catch {}
  };

  // Helper to sync lead deletion to Hostinger
  const pushLeadDelete = async (leadId: string) => {
    try {
      const syncUrl = typeof window !== 'undefined' && window.location.protocol === 'file:'
        ? 'https://hub.arkadigitalmedia.com/api/sync.php'
        : `${window.location.origin}/api/sync.php`;
      await fetch(syncUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ type: 'deleteLead', id: leadId })
      });
    } catch {}
  };

  // 2. Navigation & Filter States
  const [queueTab, setQueueTab] = useState<'ALL' | 'NEW' | 'CALLED' | 'REPLIERS' | 'FOLLOW_UPS' | 'HOT_WON'>('ALL');
  const [followUpFilter, setFollowUpFilter] = useState<'ALL' | 'OVERDUE' | 'TODAY' | 'TOMORROW' | 'THIS_WEEK' | 'THIS_MONTH'>('ALL');
  const [selectedMonth, setSelectedMonth] = useState<string>('ALL');
  const [selectedSheetFilter, setSelectedSheetFilter] = useState<string>('ALL');
  const [selectedBatchFilter, setSelectedBatchFilter] = useState<string>('ALL');
  const [selectedTemperature, setSelectedTemperature] = useState<string>('ALL');
  const [selectedSource, setSelectedSource] = useState<string>('ALL');
  const [searchQuery, setSearchQuery] = useState('');
  const [bannerMsg, setBannerMsg] = useState<string | null>(null);

  // 3. Power-Dialer / Call Logger Modal State
  const [activeLeadModal, setActiveLeadModal] = useState<IntegratedLead | null>(null);
  const [callTimerSeconds, setCallTimerSeconds] = useState<number>(0);
  const [isCallTimerRunning, setIsCallTimerRunning] = useState<boolean>(false);
  const [outcome, setOutcome] = useState('SPOKE_INTERESTED');
  const [outcomeTemp, setOutcomeTemp] = useState<LeadTemperature>('HOT');
  const [callNotes, setCallNotes] = useState('');
  const [nextActionText, setNextActionText] = useState('Send ARKA Performance Marketing Pitch');
  const [modalFollowUpDate, setModalFollowUpDate] = useState(() => {
    const d = new Date();
    d.setDate(d.getDate() + 2);
    return d.toISOString().slice(0, 10);
  });
  const [modalFollowUpTime, setModalFollowUpTime] = useState('11:00 AM');

  // 4. Quick Reschedule Modal State
  const [rescheduleLead, setRescheduleLead] = useState<IntegratedLead | null>(null);
  const [quickDate, setQuickDate] = useState(TODAY);
  const [quickTime, setQuickTime] = useState('11:00 AM');
  const [quickNote, setQuickNote] = useState('');

  // 5. Manual Single Lead Modal State
  const [showAddLeadModal, setShowAddLeadModal] = useState(false);
  const [newLeadForm, setNewLeadForm] = useState({
    companyName: '',
    contactName: '',
    phone: '',
    email: '',
    location: 'Bengaluru',
    serviceInterest: 'Performance Marketing & Lead Gen',
    source: 'Cold Calling',
    temperature: 'WARM' as LeadTemperature,
    followUpDate: TODAY,
    followUpTime: '11:00 AM',
    notes: '',
    estimatedValue: '₹50,000 / month'
  });

  // 6. Multi-Sheet Excel Importer State
  const [showExcelModal, setShowExcelModal] = useState(false);
  const [excelFileName, setExcelFileName] = useState('');
  const [customBatchName, setCustomBatchName] = useState('');
  const [discoveredSheets, setDiscoveredSheets] = useState<{ name: string; count: number }[]>([]);
  const [excelPreviewRows, setExcelPreviewRows] = useState<IntegratedLead[]>([]);

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

  // Open Dialer for a lead
  const handleOpenDialer = (lead: IntegratedLead) => {
    setActiveLeadModal(lead);
    setCallTimerSeconds(0);
    setIsCallTimerRunning(true);
    setOutcome(lead.lastOutcome || 'SPOKE_INTERESTED');
    setOutcomeTemp(lead.temperature || 'HOT');
    setCallNotes('');
    setNextActionText(lead.nextAction || 'Send commercial pitch and case studies');
    setModalFollowUpDate(lead.followUpDate || TODAY);
    setModalFollowUpTime(lead.followUpTime || '11:00 AM');
  };

  // Save Call / Interaction
  const handleSaveCallOutcome = () => {
    if (!activeLeadModal) return;

    let computedStatus: IntegratedLead['status'] = 'CONTACTED';
    let isReplier = false;

    if (outcome === 'SPOKE_INTERESTED' || outcome === 'SPOKE_CALLBACK' || outcome === 'PROPOSAL_SENT') {
      computedStatus = 'INTERESTED';
      isReplier = true;
    } else if (outcome === 'WON') {
      computedStatus = 'WON';
      isReplier = true;
    } else if (outcome === 'NOT_INTERESTED') {
      computedStatus = 'LOST';
    } else {
      computedStatus = 'CONTACTED';
    }

    const followMonth = modalFollowUpDate ? modalFollowUpDate.slice(0, 7) : CURRENT_MONTH;

    const newHistoryItem = {
      id: `call-${Date.now()}`,
      timestamp: new Date().toISOString(),
      callerName: actorName || 'Sales Team',
      outcome,
      outcomeLabel: outcome.replace(/_/g, ' '),
      notes: callNotes.trim() || 'Call completed',
      nextFollowUp: `${modalFollowUpDate} ${modalFollowUpTime}`,
      durationSeconds: callTimerSeconds
    };

    const updatedLead: IntegratedLead = {
      ...activeLeadModal,
      status: computedStatus,
      temperature: outcomeTemp,
      lastOutcome: outcome,
      callNotes: callNotes.trim() || activeLeadModal.callNotes,
      nextAction: nextActionText.trim() || activeLeadModal.nextAction,
      followUpDate: modalFollowUpDate,
      followUpTime: modalFollowUpTime,
      followUpMonth: followMonth,
      callDate: TODAY,
      callMonth: CURRENT_MONTH,
      callAttempts: (activeLeadModal.callAttempts || 0) + 1,
      talkTimeSeconds: (activeLeadModal.talkTimeSeconds || 0) + callTimerSeconds,
      callHistory: [newHistoryItem, ...(activeLeadModal.callHistory || [])]
    };

    setLeads(prev => prev.map(l => (l.id === updatedLead.id ? updatedLead : l)));
    void pushLeadSync(updatedLead);

    setBannerMsg(`✅ Call logged for ${updatedLead.companyName} (${isReplier ? '💬 Marked as Replier / Interested' : 'Status: ' + computedStatus}) — Follow-up: ${modalFollowUpDate}`);
    setActiveLeadModal(null);
    setIsCallTimerRunning(false);
  };

  // Quick Reschedule Confirm
  const handleConfirmReschedule = () => {
    if (!rescheduleLead) return;

    const followMonth = quickDate ? quickDate.slice(0, 7) : CURRENT_MONTH;
    const updatedLead: IntegratedLead = {
      ...rescheduleLead,
      followUpDate: quickDate,
      followUpTime: quickTime,
      followUpMonth: followMonth,
      nextAction: quickNote.trim() ? quickNote.trim() : rescheduleLead.nextAction,
      callHistory: [
        {
          id: `reschedule-${Date.now()}`,
          timestamp: new Date().toISOString(),
          callerName: actorName || 'Sales Team',
          outcome: 'RESCHEDULED',
          outcomeLabel: 'Follow-up Rescheduled',
          notes: quickNote.trim() || `Rescheduled to ${quickDate} at ${quickTime}`,
          nextFollowUp: `${quickDate} ${quickTime}`
        },
        ...(rescheduleLead.callHistory || [])
      ]
    };

    setLeads(prev => prev.map(l => (l.id === updatedLead.id ? updatedLead : l)));
    void pushLeadSync(updatedLead);

    setBannerMsg(`📅 Follow-up for ${updatedLead.companyName} rescheduled to ${quickDate} (${quickTime})`);
    setRescheduleLead(null);
  };

  // Manual Add Lead Submit
  const handleAddNewLead = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newLeadForm.companyName.trim()) {
      alert('Please enter a Company or Client Name.');
      return;
    }

    const followMonth = newLeadForm.followUpDate ? newLeadForm.followUpDate.slice(0, 7) : CURRENT_MONTH;
    const newLead: IntegratedLead = {
      id: `lead-manual-${Date.now()}`,
      companyName: newLeadForm.companyName.trim(),
      contactName: newLeadForm.contactName.trim() || 'Decision Maker',
      phone: newLeadForm.phone.trim() || '+91 98000 00000',
      email: newLeadForm.email.trim() || '',
      location: newLeadForm.location.trim() || 'Bengaluru',
      serviceInterest: newLeadForm.serviceInterest.trim() || 'Performance Marketing',
      source: newLeadForm.source,
      temperature: newLeadForm.temperature,
      score: newLeadForm.temperature === 'HOT' ? 92 : newLeadForm.temperature === 'WARM' ? 78 : 60,
      priority: newLeadForm.temperature === 'HOT' ? 'HIGH' : 'MEDIUM',
      status: 'NEW',
      nextAction: newLeadForm.notes.trim() || 'Initial Discovery Call',
      followUpDate: newLeadForm.followUpDate || TODAY,
      followUpTime: newLeadForm.followUpTime || '11:00 AM',
      followUpMonth: followMonth,
      callNotes: newLeadForm.notes.trim(),
      estimatedValue: newLeadForm.estimatedValue,
      batchLabel: 'Manual Entry',
      importedAt: new Date().toISOString(),
      callAttempts: 0,
      talkTimeSeconds: 0,
      callHistory: [
        {
          id: `init-${Date.now()}`,
          timestamp: new Date().toISOString(),
          callerName: actorName || 'Sales Team',
          outcome: 'LEAD_CREATED',
          outcomeLabel: 'Lead Created',
          notes: `Created manually by ${actorName} (${actorRole})`,
          nextFollowUp: `${newLeadForm.followUpDate} ${newLeadForm.followUpTime}`
        }
      ]
    };

    setLeads(prev => [newLead, ...prev]);
    void pushLeadSync(newLead);

    setBannerMsg(`🎉 Added lead: "${newLead.companyName}" (${newLead.contactName})!`);
    setShowAddLeadModal(false);
    setNewLeadForm({
      companyName: '',
      contactName: '',
      phone: '',
      email: '',
      location: 'Bengaluru',
      serviceInterest: 'Performance Marketing & Lead Gen',
      source: 'Cold Calling',
      temperature: 'WARM',
      followUpDate: TODAY,
      followUpTime: '11:00 AM',
      notes: '',
      estimatedValue: '₹50,000 / month'
    });
  };

  // Delete Lead
  const handleDeleteLead = (id: string, name: string) => {
    if (confirm(`Are you sure you want to delete lead "${name}" from the CRM?`)) {
      setLeads(prev => prev.filter(l => l.id !== id));
      void pushLeadDelete(id);
      setBannerMsg(`🗑️ Lead "${name}" removed.`);
    }
  };

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

          rawJson.forEach((row) => {
            const comp = row['Company'] || row['Company Name'] || row['School Name'] || row['School'] || row['Client'] || row['Business'] || row['Account'] || row['Lead Name'] || row['Lead'] || `Lead #${allMapped.length + 1}`;
            const contact = row['Contact Person'] || row['Contact Name'] || row['Principal'] || row['Name'] || row['Director'] || row['Owner'] || row['POC'] || 'Decision Maker';
            const ph = String(row['Phone'] || row['Mobile'] || row['Contact Number'] || row['Phone Number'] || row['Mobile No'] || row['Contact'] || row['WhatsApp'] || '').trim();
            const loc = row['Location'] || row['Area'] || row['City'] || row['Address'] || 'Bengaluru';
            const email = row['Email'] || row['Email Address'] || row['Mail'] || '';

            const srcRaw = String(row['Source'] || row['Lead Source'] || row['Channel'] || '').toLowerCase();
            const detectedSource: LeadSource = srcRaw.includes('meta') || srcRaw.includes('fb') || srcRaw.includes('ad') || srcRaw.includes('instagram') ? 'Meta Ads' : 'Cold Calling';

            const tempRaw = String(row['Temperature'] || row['Type'] || row['Priority'] || '').toLowerCase();
            const detectedTemp: LeadTemperature = tempRaw.includes('hot') ? 'HOT' : tempRaw.includes('warm') ? 'WARM' : 'COLD';

            // Check if status is replied or interested in sheet
            const statusRaw = String(row['Status'] || row['Stage'] || row['Outcome'] || '').toLowerCase();
            let initialStatus: IntegratedLead['status'] = 'NEW';
            if (statusRaw.includes('repli') || statusRaw.includes('interest') || statusRaw.includes('spoke')) {
              initialStatus = 'INTERESTED';
            } else if (statusRaw.includes('call') || statusRaw.includes('contact')) {
              initialStatus = 'CONTACTED';
            } else if (statusRaw.includes('won') || statusRaw.includes('close')) {
              initialStatus = 'WON';
            }

            const rawDate = row['Follow-up Date'] || row['Followup'] || row['Next Call'] || row['Date'] || TODAY;
            const followDate = String(rawDate).slice(0, 10);
            const followMonth = followDate.length >= 7 ? followDate.slice(0, 7) : CURRENT_MONTH;

            allMapped.push({
              id: `excel-${Date.now()}-${allMapped.length}`,
              companyName: String(comp).trim(),
              contactName: String(contact).trim(),
              phone: ph || '+91 98450 00000',
              email: String(email).trim(),
              location: String(loc).trim(),
              source: detectedSource,
              temperature: detectedTemp,
              score: detectedTemp === 'HOT' ? 90 : detectedTemp === 'WARM' ? 75 : 60,
              priority: detectedTemp === 'HOT' ? 'HIGH' : 'MEDIUM',
              status: initialStatus,
              serviceInterest: row['Service'] || row['Interest'] || row['Requirement'] || row['Requirements'] || 'Performance Marketing & Lead Gen',
              nextAction: row['Next Action'] || (initialStatus === 'INTERESTED' ? 'Follow up with commercial pitch' : 'First calling outreach'),
              followUpDate: followDate,
              followUpTime: row['Follow-up Time'] || '11:00 AM',
              followUpMonth: followMonth,
              callMonth: CURRENT_MONTH,
              callDate: TODAY,
              sheetName: `Sheet: ${sheetName}`,
              batchLabel: baseName,
              importedAt: new Date().toISOString(),
              callAttempts: 0,
              talkTimeSeconds: 0,
              estimatedValue: row['Value'] || row['Budget'] || '₹50,000 / mo',
              callNotes: row['Notes'] || row['Remarks'] || ''
            });
          });
        });

        if (allMapped.length === 0) {
          alert('No lead rows found in the uploaded workbook.');
          return;
        }

        setDiscoveredSheets(sheetStats);
        setExcelPreviewRows(allMapped);
      } catch (err) {
        alert('Failed to parse Excel file. Please ensure it is a valid .xlsx, .xls, or .csv file.');
      }
    };
    reader.readAsBinaryString(file);
  };

  const handleConfirmExcelImport = () => {
    if (excelPreviewRows.length === 0) return;
    const finalBatch = customBatchName.trim() || excelFileName || 'Uploaded Batch';
    const taggedRows = excelPreviewRows.map(r => ({
      ...r,
      batchLabel: finalBatch
    }));

    setLeads(prev => [...taggedRows, ...prev]);
    taggedRows.forEach(r => void pushLeadSync(r));

    setBannerMsg(`🎉 Successfully imported ${taggedRows.length} leads across ${discoveredSheets.length} sheet(s) into CRM under batch "${finalBatch}"!`);
    setShowExcelModal(false);
    setExcelPreviewRows([]);
    setExcelFileName('');
    setDiscoveredSheets([]);
  };

  // Download Sample Excel Template
  const handleDownloadTemplate = () => {
    try {
      const sampleData = [
        {
          'Company Name': 'Example International School',
          'Contact Person': 'Dr. Rajesh Sharma (Director)',
          'Phone': '+91 98450 12345',
          'Email': 'admissions@exampleschool.com',
          'Location': 'Bengaluru (HSR Layout)',
          'Service Required': 'Admissions Meta Ads + Reels Production',
          'Lead Stage': 'NEW',
          'Follow-up Date': TODAY,
          'Follow-up Time': '11:00 AM',
          'Estimated Value': '₹60,000 / month',
          'Notes': 'Interested in boosting nursery and Grade 1 admissions.'
        },
        {
          'Company Name': 'Apex Fitness Club',
          'Contact Person': 'Vikram Reddy (Owner)',
          'Phone': '+91 99000 54321',
          'Email': 'vikram@apexfitness.in',
          'Location': 'Bengaluru (Koramangala)',
          'Service Required': 'Lead Generation + Google Ads',
          'Lead Stage': 'INTERESTED',
          'Follow-up Date': TODAY,
          'Follow-up Time': '03:00 PM',
          'Estimated Value': '₹45,000 / month',
          'Notes': 'Needs 100+ annual gym memberships before new year.'
        },
        {
          'Company Name': 'Aura Wellness Clinic',
          'Contact Person': 'Dr. Priya Mehta',
          'Phone': '+91 91234 56789',
          'Email': 'info@aurawellness.com',
          'Location': 'Bengaluru (Indiranagar)',
          'Service Required': 'Branding + Performance Marketing',
          'Lead Stage': 'NEW',
          'Follow-up Date': TODAY,
          'Follow-up Time': '12:00 PM',
          'Estimated Value': '₹75,000 / month',
          'Notes': 'Expanding to second clinic branch next month.'
        }
      ];

      const ws = XLSX.utils.json_to_sheet(sampleData);
      const wb = XLSX.utils.book_new();
      XLSX.utils.book_append_sheet(wb, ws, 'Sample_Leads');
      XLSX.writeFile(wb, 'ARKA_Sales_CRM_Sample_Template.xlsx');
    } catch (e) {
      alert('Unable to generate template download in this environment.');
    }
  };

  // Export Current Filtered Leads to Excel
  const handleExportCurrentLeads = (dataToExport: IntegratedLead[]) => {
    try {
      const rows = dataToExport.map(l => ({
        'ID': l.id,
        'Company Name': l.companyName,
        'Contact Person': l.contactName,
        'Phone': l.phone,
        'Email': l.email,
        'Location': l.location,
        'Stage / Status': l.status,
        'Temperature': l.temperature,
        'Source': l.source,
        'Service Interest': l.serviceInterest,
        'Next Action': l.nextAction,
        'Follow-up Date': l.followUpDate,
        'Follow-up Time': l.followUpTime || '11:00 AM',
        'Follow-up Month': l.followUpMonth || l.callMonth || '',
        'Estimated Value': l.estimatedValue || '',
        'Call Attempts': l.callAttempts || 0,
        'Last Outcome': l.lastOutcome || '',
        'Call Notes': l.callNotes || '',
        'Sheet Name': l.sheetName || '',
        'Campaign Batch': l.batchLabel || ''
      }));

      const ws = XLSX.utils.json_to_sheet(rows);
      const wb = XLSX.utils.book_new();
      XLSX.utils.book_append_sheet(wb, ws, 'CRM_Leads');
      XLSX.writeFile(wb, `ARKA_Sales_CRM_Leads_${new Date().toISOString().slice(0, 10)}.xlsx`);
    } catch {
      alert('Export failed. Please check browser permissions.');
    }
  };

  // 7. Dynamic Month List from Leads
  const availableMonths = useMemo(() => {
    const monthsSet = new Set<string>();
    monthsSet.add(CURRENT_MONTH);
    leads.forEach(l => {
      if (l.followUpMonth) monthsSet.add(l.followUpMonth);
      if (l.followUpDate && l.followUpDate.length >= 7) monthsSet.add(l.followUpDate.slice(0, 7));
      if (l.callMonth) monthsSet.add(l.callMonth);
    });
    return Array.from(monthsSet).sort().reverse();
  }, [leads, CURRENT_MONTH]);

  // Unique sheets and batches for filters
  const uniqueSheets = useMemo(() => {
    const s = new Set<string>();
    leads.forEach(l => { if (l.sheetName) s.add(l.sheetName); });
    return Array.from(s);
  }, [leads]);

  const uniqueBatches = useMemo(() => {
    const b = new Set<string>();
    leads.forEach(l => { if (l.batchLabel) b.add(l.batchLabel); });
    return Array.from(b);
  }, [leads]);

  // 8. Filter Logic
  const filteredLeads = useMemo(() => {
    return leads.filter(l => {
      // Search
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase().trim();
        const m = (l.companyName || '').toLowerCase().includes(q) ||
                  (l.contactName || '').toLowerCase().includes(q) ||
                  (l.phone || '').includes(q) ||
                  (l.email || '').toLowerCase().includes(q) ||
                  (l.location || '').toLowerCase().includes(q) ||
                  (l.callNotes || '').toLowerCase().includes(q) ||
                  (l.serviceInterest || '').toLowerCase().includes(q);
        if (!m) return false;
      }

      // Sheet filter
      if (selectedSheetFilter !== 'ALL' && l.sheetName !== selectedSheetFilter) return false;
      // Batch filter
      if (selectedBatchFilter !== 'ALL' && l.batchLabel !== selectedBatchFilter) return false;
      // Temperature filter
      if (selectedTemperature !== 'ALL' && l.temperature !== selectedTemperature) return false;
      // Source filter
      if (selectedSource !== 'ALL' && l.source !== selectedSource) return false;

      // Month filter (checks followUpMonth or callMonth)
      if (selectedMonth !== 'ALL') {
        const leadMonth = l.followUpMonth || (l.followUpDate ? l.followUpDate.slice(0, 7) : '') || l.callMonth;
        if (leadMonth !== selectedMonth) return false;
      }

      // Primary Queue Tab Filter
      if (queueTab === 'NEW') {
        return l.status === 'NEW' || l.status === 'NOT_CONTACTED';
      }
      if (queueTab === 'CALLED') {
        return l.status === 'CONTACTED';
      }
      if (queueTab === 'REPLIERS') {
        // The Repliers: answered and expressed interest / ongoing discussion
        return l.status === 'INTERESTED' || l.lastOutcome === 'SPOKE_INTERESTED' || l.lastOutcome === 'SPOKE_CALLBACK' || l.lastOutcome === 'PROPOSAL_SENT';
      }
      if (queueTab === 'FOLLOW_UPS') {
        if (!l.followUpDate) return false;
        if (followUpFilter === 'OVERDUE') {
          return l.followUpDate < TODAY && l.status !== 'WON' && l.status !== 'LOST';
        }
        if (followUpFilter === 'TODAY') {
          return l.followUpDate === TODAY;
        }
        if (followUpFilter === 'TOMORROW') {
          const tm = new Date();
          tm.setDate(tm.getDate() + 1);
          const tomorrowStr = tm.toISOString().slice(0, 10);
          return l.followUpDate === tomorrowStr;
        }
        if (followUpFilter === 'THIS_WEEK') {
          const wk = new Date();
          wk.setDate(wk.getDate() + 7);
          const weekStr = wk.toISOString().slice(0, 10);
          return l.followUpDate >= TODAY && l.followUpDate <= weekStr;
        }
        if (followUpFilter === 'THIS_MONTH') {
          return l.followUpDate.slice(0, 7) === CURRENT_MONTH;
        }
        return true;
      }
      if (queueTab === 'HOT_WON') {
        return l.temperature === 'HOT' || l.status === 'WON';
      }

      return true;
    });
  }, [leads, searchQuery, queueTab, followUpFilter, selectedMonth, selectedSheetFilter, selectedBatchFilter, selectedTemperature, selectedSource, TODAY, CURRENT_MONTH]);

  // Lead metrics
  const stats = useMemo(() => {
    const total = leads.length;
    const newLeads = leads.filter(l => l.status === 'NEW' || l.status === 'NOT_CONTACTED').length;
    const called = leads.filter(l => l.status === 'CONTACTED').length;
    const repliers = leads.filter(l => l.status === 'INTERESTED' || l.lastOutcome === 'SPOKE_INTERESTED' || l.lastOutcome === 'SPOKE_CALLBACK' || l.lastOutcome === 'PROPOSAL_SENT').length;
    const followUpsToday = leads.filter(l => l.followUpDate === TODAY).length;
    const followUpsOverdue = leads.filter(l => l.followUpDate && l.followUpDate < TODAY && l.status !== 'WON' && l.status !== 'LOST').length;
    const won = leads.filter(l => l.status === 'WON').length;
    return { total, newLeads, called, repliers, followUpsToday, followUpsOverdue, won };
  }, [leads, TODAY]);

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

  return (
    <div className="min-h-screen bg-[#f8fafc] text-slate-900 p-4 sm:p-6 lg:p-8 space-y-6">
      {/* Top Banner Alert if any */}
      {bannerMsg && (
        <div className="flex items-center justify-between rounded-2xl bg-emerald-600 text-white px-5 py-3.5 shadow-lg shadow-emerald-600/20 animate-in fade-in">
          <div className="flex items-center gap-2.5 text-sm font-bold">
            <CheckCircle2 className="size-5 shrink-0" />
            <span>{bannerMsg}</span>
          </div>
          <button type="button" onClick={() => setBannerMsg(null)} className="rounded-lg p-1 hover:bg-white/20 text-xs font-black">
            ✕
          </button>
        </div>
      )}

      {/* Main CRM Header */}
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between rounded-3xl bg-white p-6 shadow-xs border border-slate-200">
        <div>
          <div className="flex items-center gap-2.5">
            <div className="flex size-11 items-center justify-center rounded-2xl bg-[#16634b] text-[#f8c329] shadow-md shadow-[#16634b]/20">
              <TrendingUp className="size-6" />
            </div>
            <div>
              <h1 className="text-2xl font-black tracking-tight text-slate-900">
                ARKA Sales & Business Development CRM
              </h1>
              <p className="text-xs font-semibold text-slate-500 mt-0.5">
                Multi-Sheet Excel Outreach, Call Logs, & Follow-up Scheduler
              </p>
            </div>
          </div>
          <div className="mt-3 flex flex-wrap items-center gap-2 text-xs">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-50 px-3 py-1 font-bold text-emerald-800 border border-emerald-200">
              <UserCheck className="size-3.5 text-emerald-600" />
              Logged in: <strong>{actorName}</strong> ({actorRole})
            </span>
            <span className="inline-flex items-center gap-1.5 rounded-full bg-slate-100 px-3 py-1 font-semibold text-slate-700">
              <Sparkles className="size-3.5 text-[#f8c329]" />
              Multi-Device Real-Time Sync Active
            </span>
          </div>
        </div>

        {/* Action Buttons: Excel Upload, Download Template, Export, Add Lead */}
        <div className="flex flex-wrap items-center gap-2.5">
          <button
            type="button"
            onClick={handleDownloadTemplate}
            title="Download formatted sample Excel sheet"
            className="inline-flex items-center gap-1.5 rounded-xl border border-slate-200 bg-white px-3.5 py-2.5 text-xs font-bold text-slate-700 shadow-xs hover:bg-slate-50 transition"
          >
            <FileDown className="size-4 text-slate-500" />
            Excel Template
          </button>

          <button
            type="button"
            onClick={() => handleExportCurrentLeads(filteredLeads)}
            title="Export filtered leads to Excel sheet"
            className="inline-flex items-center gap-1.5 rounded-xl border border-slate-200 bg-white px-3.5 py-2.5 text-xs font-bold text-slate-700 shadow-xs hover:bg-slate-50 transition"
          >
            <Download className="size-4 text-slate-500" />
            Export (.xlsx)
          </button>

          <button
            type="button"
            onClick={() => setShowExcelModal(true)}
            className="inline-flex items-center gap-2 rounded-xl bg-[#16634b] px-4 py-2.5 text-xs font-bold text-white shadow-md shadow-[#16634b]/20 hover:bg-[#12503c] transition"
          >
            <FileSpreadsheet className="size-4 text-[#f8c329]" />
            Upload Excel Sheet
          </button>

          <button
            type="button"
            onClick={() => setShowAddLeadModal(true)}
            className="inline-flex items-center gap-1.5 rounded-xl bg-black px-4 py-2.5 text-xs font-bold text-white shadow-md hover:bg-slate-800 transition"
          >
            <Plus className="size-4 text-[#f8c329]" />
            Add Single Lead
          </button>
        </div>
      </div>

      {/* Metric Cards Row */}
      <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
        <div onClick={() => setQueueTab('ALL')} className={`cursor-pointer rounded-2xl p-4 transition border ${queueTab === 'ALL' ? 'bg-slate-900 text-white border-slate-900 shadow-md' : 'bg-white text-slate-900 border-slate-200 hover:border-slate-300'}`}>
          <div className="text-[11px] font-bold uppercase tracking-wider opacity-70">Total Leads</div>
          <div className="mt-1 text-2xl font-black">{stats.total}</div>
          <div className="text-[10px] opacity-60 mt-0.5">Across all sheets</div>
        </div>

        <div onClick={() => setQueueTab('NEW')} className={`cursor-pointer rounded-2xl p-4 transition border ${queueTab === 'NEW' ? 'bg-blue-600 text-white border-blue-600 shadow-md' : 'bg-white text-slate-900 border-slate-200 hover:border-slate-300'}`}>
          <div className="text-[11px] font-bold uppercase tracking-wider opacity-70">New / Uncalled</div>
          <div className={`mt-1 text-2xl font-black ${queueTab === 'NEW' ? 'text-white' : 'text-blue-600'}`}>{stats.newLeads}</div>
          <div className="text-[10px] opacity-60 mt-0.5">Ready for outreach</div>
        </div>

        <div onClick={() => setQueueTab('CALLED')} className={`cursor-pointer rounded-2xl p-4 transition border ${queueTab === 'CALLED' ? 'bg-indigo-600 text-white border-indigo-600 shadow-md' : 'bg-white text-slate-900 border-slate-200 hover:border-slate-300'}`}>
          <div className="text-[11px] font-bold uppercase tracking-wider opacity-70">Called Leads</div>
          <div className={`mt-1 text-2xl font-black ${queueTab === 'CALLED' ? 'text-white' : 'text-indigo-600'}`}>{stats.called}</div>
          <div className="text-[10px] opacity-60 mt-0.5">Contact established</div>
        </div>

        <div onClick={() => setQueueTab('REPLIERS')} className={`cursor-pointer rounded-2xl p-4 transition border ${queueTab === 'REPLIERS' ? 'bg-emerald-600 text-white border-emerald-600 shadow-md' : 'bg-white text-slate-900 border-slate-200 hover:border-emerald-300'}`}>
          <div className="flex items-center justify-between">
            <span className="text-[11px] font-bold uppercase tracking-wider opacity-70">The Repliers</span>
            <span className="size-2 rounded-full bg-emerald-500 animate-pulse" />
          </div>
          <div className={`mt-1 text-2xl font-black ${queueTab === 'REPLIERS' ? 'text-white' : 'text-emerald-600'}`}>{stats.repliers}</div>
          <div className="text-[10px] opacity-75 mt-0.5 font-bold">💬 Highly Interested</div>
        </div>

        <div onClick={() => { setQueueTab('FOLLOW_UPS'); setFollowUpFilter('TODAY'); }} className={`cursor-pointer rounded-2xl p-4 transition border ${queueTab === 'FOLLOW_UPS' && followUpFilter === 'TODAY' ? 'bg-amber-500 text-white border-amber-500 shadow-md' : 'bg-white text-slate-900 border-slate-200 hover:border-amber-300'}`}>
          <div className="text-[11px] font-bold uppercase tracking-wider opacity-70">Follow-ups Today</div>
          <div className={`mt-1 text-2xl font-black ${queueTab === 'FOLLOW_UPS' && followUpFilter === 'TODAY' ? 'text-white' : 'text-amber-600'}`}>{stats.followUpsToday}</div>
          {stats.followUpsOverdue > 0 ? (
            <div className={`text-[10px] font-bold ${queueTab === 'FOLLOW_UPS' && followUpFilter === 'TODAY' ? 'text-white' : 'text-red-600'}`}>
              ⚠️ {stats.followUpsOverdue} Overdue
            </div>
          ) : (
            <div className="text-[10px] opacity-60 mt-0.5">Scheduled for today</div>
          )}
        </div>

        <div onClick={() => setQueueTab('HOT_WON')} className={`cursor-pointer rounded-2xl p-4 transition border ${queueTab === 'HOT_WON' ? 'bg-purple-600 text-white border-purple-600 shadow-md' : 'bg-white text-slate-900 border-slate-200 hover:border-purple-300'}`}>
          <div className="text-[11px] font-bold uppercase tracking-wider opacity-70">Won Deals</div>
          <div className={`mt-1 text-2xl font-black ${queueTab === 'HOT_WON' ? 'text-white' : 'text-purple-600'}`}>{stats.won}</div>
          <div className="text-[10px] opacity-60 mt-0.5">🏆 Closed Clients</div>
        </div>
      </div>

      {/* Filter & Navigation Bar */}
      <div className="rounded-3xl bg-white p-5 shadow-xs border border-slate-200 space-y-4">
        {/* Main Queue Tabs */}
        <div className="flex flex-wrap items-center gap-2 border-b border-slate-100 pb-3">
          {[
            { id: 'ALL', label: 'All Leads', count: stats.total, icon: Layers },
            { id: 'NEW', label: 'New / Uncalled', count: stats.newLeads, icon: Sparkles },
            { id: 'CALLED', label: 'Called', count: stats.called, icon: PhoneCall },
            { id: 'REPLIERS', label: '💬 The Repliers (Interested)', count: stats.repliers, icon: MessageSquare, highlight: true },
            { id: 'FOLLOW_UPS', label: '📅 Follow-ups', count: stats.followUpsToday + stats.followUpsOverdue, icon: CalendarDays },
            { id: 'HOT_WON', label: '🔥 Hot & Won', count: stats.won, icon: Flame }
          ].map(tab => {
            const Icon = tab.icon;
            const isActive = queueTab === tab.id;
            return (
              <button
                key={tab.id}
                type="button"
                onClick={() => setQueueTab(tab.id as any)}
                className={`inline-flex items-center gap-2 rounded-xl px-3.5 py-2 text-xs font-bold transition ${
                  isActive
                    ? 'bg-black text-white shadow-xs'
                    : tab.highlight
                    ? 'bg-emerald-50 text-emerald-800 border border-emerald-200 hover:bg-emerald-100'
                    : 'text-slate-600 hover:bg-slate-100'
                }`}
              >
                <Icon className="size-4" />
                <span>{tab.label}</span>
                <span className={`rounded-full px-2 py-0.5 text-[10px] font-black ${
                  isActive ? 'bg-white/20 text-white' : 'bg-slate-200 text-slate-700'
                }`}>
                  {tab.count}
                </span>
              </button>
            );
          })}
        </div>

        {/* Sub-Filters: Search, Month Picker, Follow-up timeframe, Sheet Filter, Temperature */}
        <div className="flex flex-wrap items-center justify-between gap-3 pt-1">
          {/* Search Box */}
          <div className="relative min-w-[240px] flex-1 max-w-md">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 size-4 text-slate-400" />
            <input
              type="text"
              placeholder="Search by company, contact, phone, location, notes..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full rounded-xl border border-slate-200 bg-slate-50/50 pl-10 pr-4 py-2 text-xs font-medium placeholder-slate-400 focus:border-[#16634b] focus:bg-white focus:outline-hidden"
            />
            {searchQuery && (
              <button
                type="button"
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-slate-400 hover:text-slate-700 font-bold"
              >
                ✕
              </button>
            )}
          </div>

          <div className="flex flex-wrap items-center gap-2">
            {/* Dedicated Month Filter (Addresses user request for dates and months!) */}
            <div className="flex items-center gap-1.5 rounded-xl border border-slate-200 bg-white px-3 py-1.5 shadow-xs">
              <Calendar className="size-3.5 text-[#16634b]" />
              <label className="text-[11px] font-bold text-slate-600">Month:</label>
              <select
                value={selectedMonth}
                onChange={(e) => setSelectedMonth(e.target.value)}
                className="bg-transparent text-xs font-bold text-slate-900 focus:outline-hidden cursor-pointer"
              >
                <option value="ALL">All Months ({availableMonths.length})</option>
                {availableMonths.map(m => (
                  <option key={m} value={m}>
                    {m} {m === CURRENT_MONTH ? '(Current Month)' : ''}
                  </option>
                ))}
              </select>
            </div>

            {/* Sheet Filter (if Excel sheets exist) */}
            {uniqueSheets.length > 0 && (
              <div className="flex items-center gap-1.5 rounded-xl border border-slate-200 bg-white px-3 py-1.5 shadow-xs">
                <FileSpreadsheet className="size-3.5 text-slate-500" />
                <label className="text-[11px] font-bold text-slate-600">Sheet:</label>
                <select
                  value={selectedSheetFilter}
                  onChange={(e) => setSelectedSheetFilter(e.target.value)}
                  className="bg-transparent text-xs font-bold text-slate-900 focus:outline-hidden cursor-pointer max-w-[140px] truncate"
                >
                  <option value="ALL">All Sheets ({uniqueSheets.length})</option>
                  {uniqueSheets.map(s => (
                    <option key={s} value={s}>{s}</option>
                  ))}
                </select>
              </div>
            )}

            {/* Campaign Batch Filter */}
            {uniqueBatches.length > 0 && (
              <div className="flex items-center gap-1.5 rounded-xl border border-slate-200 bg-white px-3 py-1.5 shadow-xs">
                <Hash className="size-3.5 text-slate-500" />
                <label className="text-[11px] font-bold text-slate-600">Batch:</label>
                <select
                  value={selectedBatchFilter}
                  onChange={(e) => setSelectedBatchFilter(e.target.value)}
                  className="bg-transparent text-xs font-bold text-slate-900 focus:outline-hidden cursor-pointer max-w-[130px] truncate"
                >
                  <option value="ALL">All Batches</option>
                  {uniqueBatches.map(b => (
                    <option key={b} value={b}>{b}</option>
                  ))}
                </select>
              </div>
            )}

            {/* Temperature Filter */}
            <div className="flex items-center gap-1.5 rounded-xl border border-slate-200 bg-white px-3 py-1.5 shadow-xs">
              <Flame className="size-3.5 text-orange-500" />
              <select
                value={selectedTemperature}
                onChange={(e) => setSelectedTemperature(e.target.value)}
                className="bg-transparent text-xs font-bold text-slate-900 focus:outline-hidden cursor-pointer"
              >
                <option value="ALL">All Priority</option>
                <option value="HOT">🔥 Hot Only</option>
                <option value="WARM">☀️ Warm Only</option>
                <option value="COLD">❄️ Cold Only</option>
              </select>
            </div>
          </div>
        </div>

        {/* Specialized Follow-up Sub-Tabs (shown when in FOLLOW_UPS tab) */}
        {queueTab === 'FOLLOW_UPS' && (
          <div className="flex flex-wrap items-center gap-2 rounded-2xl bg-amber-50/70 border border-amber-200 p-3 animate-in fade-in">
            <span className="text-xs font-black text-amber-950 flex items-center gap-1.5 mr-2">
              <Clock className="size-4 text-amber-600" />
              Follow-up Timeline:
            </span>
            {[
              { id: 'ALL', label: 'All Scheduled' },
              { id: 'OVERDUE', label: `🚨 Overdue (${stats.followUpsOverdue})`, alert: stats.followUpsOverdue > 0 },
              { id: 'TODAY', label: `🔥 Due Today (${stats.followUpsToday})` },
              { id: 'TOMORROW', label: '📅 Due Tomorrow' },
              { id: 'THIS_WEEK', label: '🗓️ Next 7 Days' },
              { id: 'THIS_MONTH', label: '📆 This Month' },
            ].map(f => (
              <button
                key={f.id}
                type="button"
                onClick={() => setFollowUpFilter(f.id as any)}
                className={`rounded-xl px-3 py-1.5 text-xs font-bold transition ${
                  followUpFilter === f.id
                    ? 'bg-amber-600 text-white shadow-xs'
                    : f.alert
                    ? 'bg-red-100 text-red-700 border border-red-300 hover:bg-red-200'
                    : 'bg-white text-slate-700 hover:bg-amber-100 border border-amber-200'
                }`}
              >
                {f.label}
              </button>
            ))}
          </div>
        )}
      </div>

      {/* Leads Table & Cards Container */}
      <div className="rounded-3xl bg-white shadow-xs border border-slate-200 overflow-hidden">
        {/* Header Count Bar */}
        <div className="flex items-center justify-between border-b border-slate-100 px-6 py-4 bg-slate-50/60">
          <div className="flex items-center gap-2">
            <span className="text-xs font-black uppercase tracking-wider text-slate-700">
              Showing {filteredLeads.length} Lead{filteredLeads.length === 1 ? '' : 's'}
            </span>
            {selectedMonth !== 'ALL' && (
              <span className="rounded-lg bg-emerald-100 text-emerald-800 text-[10px] font-black px-2 py-0.5">
                Month: {selectedMonth}
              </span>
            )}
            {queueTab === 'REPLIERS' && (
              <span className="rounded-lg bg-emerald-600 text-white text-[10px] font-black px-2 py-0.5">
                💬 The Repliers Tab
              </span>
            )}
          </div>
          <span className="text-xs text-slate-400 font-medium">
            Click "Call / Log" on any lead to open power-dialer & record response
          </span>
        </div>

        {/* Lead Rows */}
        {filteredLeads.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-16 px-4 text-center">
            <div className="flex size-14 items-center justify-center rounded-2xl bg-slate-100 text-slate-400">
              <Search className="size-7" />
            </div>
            <h3 className="mt-4 text-base font-bold text-slate-900">No leads match this view</h3>
            <p className="mt-1 max-w-sm text-xs text-slate-500">
              Try switching tabs, clearing the search query, or upload an Excel sheet (.xlsx) of new leads above.
            </p>
            <div className="mt-5 flex gap-2">
              <button
                type="button"
                onClick={() => { setQueueTab('ALL'); setSelectedMonth('ALL'); setSearchQuery(''); }}
                className="rounded-xl border border-slate-200 bg-white px-4 py-2 text-xs font-bold hover:bg-slate-50"
              >
                Reset All Filters
              </button>
              <button
                type="button"
                onClick={() => setShowExcelModal(true)}
                className="rounded-xl bg-[#16634b] px-4 py-2 text-xs font-bold text-white hover:bg-[#12503c]"
              >
                Upload Excel Sheet
              </button>
            </div>
          </div>
        ) : (
          <div className="divide-y divide-slate-100">
            {filteredLeads.map((lead) => {
              const isOverdue = lead.followUpDate && lead.followUpDate < TODAY && lead.status !== 'WON' && lead.status !== 'LOST';
              const isToday = lead.followUpDate === TODAY;
              const isReplier = lead.status === 'INTERESTED' || lead.lastOutcome === 'SPOKE_INTERESTED' || lead.lastOutcome === 'SPOKE_CALLBACK';

              return (
                <div
                  key={lead.id}
                  className={`flex flex-col lg:flex-row lg:items-center justify-between p-5 gap-4 transition hover:bg-slate-50/80 ${
                    isOverdue ? 'bg-red-50/20' : isToday ? 'bg-amber-50/20' : ''
                  }`}
                >
                  {/* Lead Main Details */}
                  <div className="space-y-1.5 flex-1 min-w-[280px]">
                    <div className="flex flex-wrap items-center gap-2">
                      <h4 className="text-sm font-black text-slate-900 hover:text-[#16634b] transition cursor-pointer" onClick={() => handleOpenDialer(lead)}>
                        {lead.companyName}
                      </h4>

                      {/* Temperature Badge */}
                      <span className={`rounded-md px-2 py-0.5 text-[10px] font-black uppercase ${
                        lead.temperature === 'HOT'
                          ? 'bg-red-100 text-red-700 border border-red-200'
                          : lead.temperature === 'WARM'
                          ? 'bg-amber-100 text-amber-800 border border-amber-200'
                          : 'bg-slate-100 text-slate-600'
                      }`}>
                        {lead.temperature === 'HOT' ? '🔥 HOT' : lead.temperature === 'WARM' ? '☀️ WARM' : '❄️ COLD'}
                      </span>

                      {/* Replier Tag */}
                      {isReplier && (
                        <span className="rounded-md bg-emerald-600 text-white text-[10px] font-black px-2 py-0.5 shadow-xs">
                          💬 REPLIER
                        </span>
                      )}

                      {/* Status Tag */}
                      <span className={`rounded-md px-2 py-0.5 text-[10px] font-bold ${
                        lead.status === 'WON'
                          ? 'bg-purple-100 text-purple-800 font-black'
                          : lead.status === 'INTERESTED'
                          ? 'bg-emerald-100 text-emerald-800'
                          : lead.status === 'CONTACTED'
                          ? 'bg-indigo-100 text-indigo-700'
                          : 'bg-slate-100 text-slate-600'
                      }`}>
                        {lead.status.replace(/_/g, ' ')}
                      </span>

                      {/* Sheet Name Badge */}
                      {lead.sheetName && (
                        <span className="text-[10px] font-medium text-slate-500 bg-slate-100 px-2 py-0.5 rounded-md">
                          {lead.sheetName}
                        </span>
                      )}
                    </div>

                    <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-slate-600">
                      <span className="font-semibold text-slate-900">
                        👤 {lead.contactName}
                      </span>
                      <a href={`tel:${lead.phone}`} className="font-bold text-[#16634b] hover:underline flex items-center gap-1">
                        <Phone className="size-3" />
                        {lead.phone}
                      </a>
                      {lead.email && (
                        <a href={`mailto:${lead.email}`} className="text-slate-500 hover:underline flex items-center gap-1">
                          <Mail className="size-3" />
                          {lead.email}
                        </a>
                      )}
                      <span className="text-slate-500 flex items-center gap-1">
                        <MapPin className="size-3" />
                        {lead.location}
                      </span>
                      {lead.estimatedValue && (
                        <span className="font-bold text-slate-900 bg-slate-100 px-1.5 py-0.5 rounded text-[11px]">
                          💰 {lead.estimatedValue}
                        </span>
                      )}
                    </div>

                    {/* Requirement & Next Action Note */}
                    <div className="flex flex-wrap items-center gap-2 pt-0.5 text-xs">
                      <span className="text-slate-500 font-medium">
                        Service: <strong className="text-slate-800">{lead.serviceInterest}</strong>
                      </span>
                      <span className="text-slate-300">•</span>
                      <span className="text-slate-500">
                        Next Action: <strong className="text-slate-800">{lead.nextAction || 'Outreach call'}</strong>
                      </span>
                    </div>

                    {lead.callNotes && (
                      <div className="text-xs bg-slate-100/80 rounded-xl px-3 py-1.5 text-slate-700 font-medium mt-1">
                        💬 <em>"{lead.callNotes}"</em>
                      </div>
                    )}
                  </div>

                  {/* Follow-up Date Pill & Quick Action Buttons */}
                  <div className="flex flex-wrap items-center gap-3 self-start lg:self-center">
                    {/* Follow-up Date Badge */}
                    <div
                      onClick={() => { setRescheduleLead(lead); setQuickDate(lead.followUpDate || TODAY); setQuickTime(lead.followUpTime || '11:00 AM'); }}
                      title="Click to reschedule follow-up date"
                      className={`cursor-pointer rounded-2xl px-3 py-2 text-center border transition shadow-xs hover:scale-105 ${
                        isOverdue
                          ? 'bg-red-50 border-red-300 text-red-700'
                          : isToday
                          ? 'bg-amber-50 border-amber-300 text-amber-800'
                          : 'bg-emerald-50 border-emerald-200 text-emerald-800'
                      }`}
                    >
                      <div className="text-[10px] font-black uppercase tracking-wider flex items-center justify-center gap-1">
                        <Clock className="size-3" />
                        {isOverdue ? 'Overdue!' : isToday ? 'Due Today' : 'Follow-up'}
                      </div>
                      <div className="text-xs font-black mt-0.5">
                        {lead.followUpDate ? lead.followUpDate : 'Not Scheduled'}
                      </div>
                      <div className="text-[10px] opacity-75">
                        {lead.followUpTime || '11:00 AM'} • Edit ✏️
                      </div>
                    </div>

                    {/* Action Buttons: Call, WhatsApp, Email, Delete */}
                    <div className="flex items-center gap-1.5">
                      <button
                        type="button"
                        onClick={() => handleOpenDialer(lead)}
                        className="inline-flex items-center gap-1.5 rounded-xl bg-[#16634b] px-3.5 py-2 text-xs font-bold text-white shadow-xs hover:bg-[#12503c] transition"
                      >
                        <PhoneCall className="size-3.5 text-[#f8c329]" />
                        Call / Log
                      </button>

                      <a
                        href={`https://wa.me/${lead.phone.replace(/[^0-9]/g, '')}?text=${encodeURIComponent(`Hi ${lead.contactName}, this is ${actorName} from ARKA Digital Media regarding ${lead.serviceInterest}. When is a good time for a brief discussion?`)}`}
                        target="_blank"
                        rel="noreferrer"
                        title="Chat on WhatsApp"
                        className="inline-flex size-9 items-center justify-center rounded-xl bg-emerald-50 text-emerald-700 border border-emerald-200 hover:bg-emerald-600 hover:text-white transition"
                      >
                        <MessageSquare className="size-4" />
                      </a>

                      <button
                        type="button"
                        onClick={() => handleDeleteLead(lead.id, lead.companyName)}
                        title="Delete Lead"
                        className="inline-flex size-9 items-center justify-center rounded-xl text-slate-400 hover:bg-red-50 hover:text-red-600 transition"
                      >
                        <Trash2 className="size-4" />
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>

      {/* -------------------- POWER-DIALER & ACTIVE CALL MODAL -------------------- */}
      {activeLeadModal && (
        <div className="fixed inset-0 z-50 grid place-items-center bg-black/70 backdrop-blur-xs p-4 animate-in fade-in">
          <div className="max-h-[92vh] w-full max-w-2xl overflow-y-auto rounded-3xl bg-white shadow-2xl p-6 sm:p-8 space-y-5">
            {/* Modal Header */}
            <div className="flex items-start justify-between border-b border-slate-100 pb-4">
              <div>
                <span className="text-[10px] font-black uppercase tracking-wider text-[#16634b] bg-emerald-50 px-2.5 py-1 rounded-full border border-emerald-200">
                  ARKA Power-Dialer & Interaction Logger
                </span>
                <h2 className="mt-2 text-xl font-black text-slate-900">
                  {activeLeadModal.companyName}
                </h2>
                <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-slate-500 mt-1">
                  <span>👤 {activeLeadModal.contactName}</span>
                  <a href={`tel:${activeLeadModal.phone}`} className="font-bold text-[#16634b]">
                    📞 {activeLeadModal.phone}
                  </a>
                  <span>📍 {activeLeadModal.location}</span>
                </div>
              </div>

              {/* Call Timer Counter */}
              <div className="flex flex-col items-end">
                <div className="flex items-center gap-2 rounded-2xl bg-slate-900 text-white px-4 py-2 shadow-md">
                  <div className={`size-2.5 rounded-full ${isCallTimerRunning ? 'bg-red-500 animate-ping' : 'bg-slate-400'}`} />
                  <span className="text-lg font-black font-mono tracking-wider">
                    {formatTimer(callTimerSeconds)}
                  </span>
                  <button
                    type="button"
                    onClick={() => setIsCallTimerRunning(!isCallTimerRunning)}
                    className="ml-1 text-xs text-slate-300 hover:text-white font-bold"
                  >
                    {isCallTimerRunning ? <Pause className="size-3.5" /> : <Play className="size-3.5" />}
                  </button>
                </div>
                <span className="text-[10px] text-slate-400 mt-1 font-semibold">Active Call Duration</span>
              </div>
            </div>

            {/* Quick Action Dialing Links */}
            <div className="grid grid-cols-3 gap-2">
              <a
                href={`tel:${activeLeadModal.phone}`}
                className="flex items-center justify-center gap-2 rounded-xl bg-emerald-600 px-3 py-2.5 text-xs font-bold text-white shadow-sm hover:bg-emerald-700 transition"
              >
                <Phone className="size-3.5" />
                Click to Dial
              </a>
              <a
                href={`https://wa.me/${activeLeadModal.phone.replace(/[^0-9]/g, '')}?text=${encodeURIComponent(`Hi ${activeLeadModal.contactName}, this is ${actorName} from ARKA Digital Media regarding ${activeLeadModal.serviceInterest}. When is a good time to connect?`)}`}
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-center gap-2 rounded-xl bg-[#25D366] px-3 py-2.5 text-xs font-bold text-white shadow-sm hover:brightness-105 transition"
              >
                <MessageSquare className="size-3.5" />
                WhatsApp Message
              </a>
              {activeLeadModal.email ? (
                <a
                  href={`mailto:${activeLeadModal.email}?subject=${encodeURIComponent(`ARKA Digital Media — ${activeLeadModal.serviceInterest}`)}`}
                  className="flex items-center justify-center gap-2 rounded-xl bg-slate-800 px-3 py-2.5 text-xs font-bold text-white shadow-sm hover:bg-black transition"
                >
                  <Mail className="size-3.5" />
                  Send Email
                </a>
              ) : (
                <div className="flex items-center justify-center text-xs text-slate-400 border border-slate-200 rounded-xl">
                  No Email on record
                </div>
              )}
            </div>

            {/* Select Call Outcome (The Repliers!) */}
            <div className="space-y-2">
              <label className="block text-xs font-black uppercase tracking-wider text-slate-700">
                1. Select Call / Discussion Outcome:
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                {[
                  { id: 'SPOKE_INTERESTED', label: '💬 Spoke — Replied (Interested)', desc: 'Mark as Replier', color: 'emerald' },
                  { id: 'SPOKE_CALLBACK', label: '📞 Spoke — Callback Requested', desc: 'Call back later', color: 'blue' },
                  { id: 'PROPOSAL_SENT', label: '📄 Proposal / Quote Sent', desc: 'Commercial sent', color: 'purple' },
                  { id: 'WON', label: '🏆 Closed Won!', desc: 'Deal Signed', color: 'indigo' },
                  { id: 'BUSY_CALLBACK', label: '⏳ Busy / In Meeting', desc: 'Ring back later', color: 'amber' },
                  { id: 'RINGING_NO_ANSWER', label: '🔕 Ringing / No Answer', desc: 'Retry sprint', color: 'slate' },
                  { id: 'NOT_INTERESTED', label: '❌ Not Interested', desc: 'Closed Lost', color: 'red' },
                  { id: 'INVALID_NUMBER', label: '⚠️ Invalid / Wrong Number', desc: 'Remove from pool', color: 'rose' }
                ].map(opt => (
                  <button
                    key={opt.id}
                    type="button"
                    onClick={() => {
                      setOutcome(opt.id);
                      if (opt.id === 'SPOKE_INTERESTED' || opt.id === 'WON') setOutcomeTemp('HOT');
                      else if (opt.id === 'SPOKE_CALLBACK' || opt.id === 'PROPOSAL_SENT') setOutcomeTemp('WARM');
                      else setOutcomeTemp('COLD');
                    }}
                    className={`rounded-xl p-3 text-left border transition ${
                      outcome === opt.id
                        ? 'border-[#16634b] bg-emerald-50/70 shadow-sm ring-2 ring-[#16634b]'
                        : 'border-slate-200 bg-white hover:border-slate-300'
                    }`}
                  >
                    <div className="text-xs font-bold text-slate-900 leading-snug">{opt.label}</div>
                    <div className="text-[10px] text-slate-500 mt-0.5">{opt.desc}</div>
                  </button>
                ))}
              </div>
            </div>

            {/* Set Next Follow-up Date & Time (Crucial for Dates & Months tracking!) */}
            <div className="rounded-2xl border border-amber-200 bg-amber-50/50 p-4 space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-black uppercase tracking-wider text-amber-950 flex items-center gap-1.5">
                  <Calendar className="size-4 text-amber-600" />
                  2. Schedule Next Follow-up Date & Time:
                </span>
                <span className="text-[10px] font-bold text-amber-800 bg-amber-100 px-2 py-0.5 rounded-md">
                  Tracked in Monthly View
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-[11px] font-bold text-slate-700 mb-1">
                    Follow-up Date:
                  </label>
                  <input
                    type="date"
                    value={modalFollowUpDate}
                    onChange={(e) => setModalFollowUpDate(e.target.value)}
                    className="w-full rounded-xl border border-slate-300 bg-white px-3 py-2 text-xs font-bold text-slate-900 focus:border-[#16634b] focus:outline-hidden"
                  />
                </div>
                <div>
                  <label className="block text-[11px] font-bold text-slate-700 mb-1">
                    Follow-up Time:
                  </label>
                  <select
                    value={modalFollowUpTime}
                    onChange={(e) => setModalFollowUpTime(e.target.value)}
                    className="w-full rounded-xl border border-slate-300 bg-white px-3 py-2 text-xs font-bold text-slate-900 focus:border-[#16634b] focus:outline-hidden"
                  >
                    <option value="10:00 AM">10:00 AM (Morning Sprint)</option>
                    <option value="11:00 AM">11:00 AM (Mid Morning)</option>
                    <option value="12:00 PM">12:00 PM (Noon)</option>
                    <option value="02:30 PM">02:30 PM (Post Lunch)</option>
                    <option value="03:30 PM">03:30 PM (Afternoon)</option>
                    <option value="04:30 PM">04:30 PM (Evening Catchup)</option>
                    <option value="05:30 PM">05:30 PM (Wrap-up Call)</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Next Action & Discussion Notes */}
            <div className="space-y-3">
              <div>
                <label className="block text-xs font-black uppercase tracking-wider text-slate-700 mb-1">
                  3. Next Action To Execute:
                </label>
                <input
                  type="text"
                  value={nextActionText}
                  onChange={(e) => setNextActionText(e.target.value)}
                  placeholder="e.g. Send WhatsApp proposal deck, Call with Principal on Friday, Demo meeting..."
                  className="w-full rounded-xl border border-slate-300 bg-slate-50/50 px-3.5 py-2 text-xs font-medium focus:border-[#16634b] focus:bg-white focus:outline-hidden"
                />
              </div>

              <div>
                <label className="block text-xs font-black uppercase tracking-wider text-slate-700 mb-1">
                  4. Discussion / Meeting Notes:
                </label>
                <textarea
                  rows={3}
                  value={callNotes}
                  onChange={(e) => setCallNotes(e.target.value)}
                  placeholder="What was discussed? What did they reply? What is their current pain point or requirement?"
                  className="w-full rounded-xl border border-slate-300 bg-slate-50/50 p-3 text-xs font-medium focus:border-[#16634b] focus:bg-white focus:outline-hidden"
                />
              </div>
            </div>

            {/* Past History if available */}
            {activeLeadModal.callHistory && activeLeadModal.callHistory.length > 0 && (
              <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4 space-y-2">
                <span className="text-[11px] font-black uppercase tracking-wider text-slate-700 flex items-center gap-1.5">
                  <History className="size-3.5 text-slate-500" />
                  Past Interaction History ({activeLeadModal.callHistory.length}):
                </span>
                <div className="max-h-32 overflow-y-auto space-y-2 pr-1 custom-scrollbar text-xs">
                  {activeLeadModal.callHistory.map(h => (
                    <div key={h.id} className="rounded-xl bg-white p-2.5 border border-slate-200/60 shadow-xs">
                      <div className="flex items-center justify-between font-bold text-slate-800 text-[11px]">
                        <span>{h.outcomeLabel || h.outcome}</span>
                        <span className="text-slate-400 font-normal">{new Date(h.timestamp).toLocaleDateString('en-GB')} {new Date(h.timestamp).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</span>
                      </div>
                      <div className="text-slate-600 mt-0.5">{h.notes}</div>
                      {h.nextFollowUp && (
                        <div className="text-[10px] text-amber-700 font-semibold mt-0.5">
                          Follow-up: {h.nextFollowUp}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Modal Buttons */}
            <div className="flex items-center justify-end gap-3 border-t border-slate-100 pt-4">
              <button
                type="button"
                onClick={() => { setActiveLeadModal(null); setIsCallTimerRunning(false); }}
                className="rounded-xl border border-slate-200 bg-white px-5 py-2.5 text-xs font-bold text-slate-700 hover:bg-slate-50 transition"
              >
                Cancel
              </button>
              <button
                type="button"
                onClick={handleSaveCallOutcome}
                className="rounded-xl bg-[#16634b] px-6 py-2.5 text-xs font-bold text-white shadow-md shadow-[#16634b]/20 hover:bg-[#12503c] transition"
              >
                Save Call & Update CRM
              </button>
            </div>
          </div>
        </div>
      )}

      {/* -------------------- MULTI-SHEET EXCEL UPLOADER MODAL -------------------- */}
      {showExcelModal && (
        <div className="fixed inset-0 z-50 grid place-items-center bg-black/70 backdrop-blur-xs p-4 animate-in fade-in">
          <div className="max-h-[92vh] w-full max-w-2xl overflow-y-auto rounded-3xl bg-white shadow-2xl p-6 sm:p-8 space-y-5">
            <div className="flex items-start justify-between border-b border-slate-100 pb-4">
              <div>
                <span className="text-[10px] font-black uppercase tracking-wider text-[#16634b] bg-emerald-50 px-2.5 py-1 rounded-full border border-emerald-200">
                  Direct Excel & CSV Calling Importer
                </span>
                <h2 className="mt-2 text-xl font-black text-slate-900">
                  Upload Excel Sheet (.xlsx, .xls, .csv)
                </h2>
                <p className="text-xs text-slate-500 mt-1">
                  Automatically parses all sheets in your workbook. Zero data loss. Auto-maps contact names, phones, follow-up dates, and requirements.
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

            {/* Dropzone */}
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

            {/* Discovered Sheets & Preview */}
            {discoveredSheets.length > 0 && (
              <div className="rounded-2xl border border-emerald-200 bg-emerald-50/50 p-4 space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-black text-emerald-950">
                    Discovered {discoveredSheets.length} Sheet(s) • {excelPreviewRows.length} Total Leads Found
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
                    Custom Campaign / Outreach Batch Name:
                  </label>
                  <input
                    type="text"
                    value={customBatchName}
                    onChange={(e) => setCustomBatchName(e.target.value)}
                    placeholder="e.g. Bangalore Schools Nov 2026, Gym Leads, Meta Ad Retargeting..."
                    className="w-full rounded-xl border border-emerald-300 bg-white px-3 py-2 text-xs font-bold text-slate-900 focus:border-[#16634b] focus:outline-hidden"
                  />
                </div>

                {/* Table Preview */}
                <div className="max-h-40 overflow-y-auto rounded-xl border border-slate-200 bg-white text-xs">
                  <table className="w-full text-left">
                    <thead className="bg-slate-100 text-[10px] font-black uppercase tracking-wider text-slate-600 sticky top-0">
                      <tr>
                        <th className="p-2">Company / School</th>
                        <th className="p-2">Contact</th>
                        <th className="p-2">Phone</th>
                        <th className="p-2">Follow-up</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100">
                      {excelPreviewRows.slice(0, 8).map((r, i) => (
                        <tr key={i} className="hover:bg-slate-50">
                          <td className="p-2 font-bold text-slate-900">{r.companyName}</td>
                          <td className="p-2 text-slate-600">{r.contactName}</td>
                          <td className="p-2 font-mono text-[#16634b]">{r.phone}</td>
                          <td className="p-2 text-slate-500">{r.followUpDate}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                  {excelPreviewRows.length > 8 && (
                    <div className="p-2 text-center text-[10px] font-bold text-slate-400 bg-slate-50">
                      + {excelPreviewRows.length - 8} more leads ready for import
                    </div>
                  )}
                </div>
              </div>
            )}

            {/* Modal Buttons */}
            <div className="flex items-center justify-between border-t border-slate-100 pt-4">
              <button
                type="button"
                onClick={handleDownloadTemplate}
                className="inline-flex items-center gap-1.5 text-xs font-bold text-slate-600 hover:text-black"
              >
                <Download className="size-3.5" />
                Download Sample Format (.xlsx)
              </button>

              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={() => { setShowExcelModal(false); setExcelPreviewRows([]); setDiscoveredSheets([]); }}
                  className="rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-xs font-bold text-slate-700 hover:bg-slate-50"
                >
                  Cancel
                </button>
                <button
                  type="button"
                  disabled={excelPreviewRows.length === 0}
                  onClick={handleConfirmExcelImport}
                  className="rounded-xl bg-[#16634b] px-6 py-2.5 text-xs font-bold text-white shadow-md shadow-[#16634b]/20 hover:bg-[#12503c] transition disabled:opacity-50"
                >
                  Import {excelPreviewRows.length} Leads into CRM
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* -------------------- MANUAL ADD SINGLE LEAD MODAL -------------------- */}
      {showAddLeadModal && (
        <div className="fixed inset-0 z-50 grid place-items-center bg-black/70 backdrop-blur-xs p-4 animate-in fade-in">
          <div className="max-h-[92vh] w-full max-w-lg overflow-y-auto rounded-3xl bg-white shadow-2xl p-6 sm:p-8 space-y-5">
            <div className="flex items-start justify-between border-b border-slate-100 pb-3">
              <div>
                <h3 className="text-lg font-black text-slate-900">Add New Lead to CRM</h3>
                <p className="text-xs text-slate-500 mt-0.5">Direct manual lead registration</p>
              </div>
              <button
                type="button"
                onClick={() => setShowAddLeadModal(false)}
                className="rounded-lg p-1 text-slate-400 hover:bg-slate-100 text-base font-bold"
              >
                ✕
              </button>
            </div>

            <form onSubmit={handleAddNewLead} className="space-y-4 text-xs">
              <div>
                <label className="block font-bold text-slate-700 mb-1">Company / Client / School Name *</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Cambridge High School, Gravity Fitness..."
                  value={newLeadForm.companyName}
                  onChange={(e) => setNewLeadForm({ ...newLeadForm, companyName: e.target.value })}
                  className="w-full rounded-xl border border-slate-300 p-2.5 font-bold text-slate-900 focus:border-[#16634b] focus:outline-hidden"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block font-bold text-slate-700 mb-1">Contact Person Name</label>
                  <input
                    type="text"
                    placeholder="e.g. Ramesh Kumar (Director)"
                    value={newLeadForm.contactName}
                    onChange={(e) => setNewLeadForm({ ...newLeadForm, contactName: e.target.value })}
                    className="w-full rounded-xl border border-slate-300 p-2.5 font-medium text-slate-900 focus:border-[#16634b] focus:outline-hidden"
                  />
                </div>
                <div>
                  <label className="block font-bold text-slate-700 mb-1">Phone Number *</label>
                  <input
                    type="text"
                    required
                    placeholder="+91 98450 12345"
                    value={newLeadForm.phone}
                    onChange={(e) => setNewLeadForm({ ...newLeadForm, phone: e.target.value })}
                    className="w-full rounded-xl border border-slate-300 p-2.5 font-mono font-bold text-slate-900 focus:border-[#16634b] focus:outline-hidden"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block font-bold text-slate-700 mb-1">Email Address</label>
                  <input
                    type="email"
                    placeholder="contact@company.com"
                    value={newLeadForm.email}
                    onChange={(e) => setNewLeadForm({ ...newLeadForm, email: e.target.value })}
                    className="w-full rounded-xl border border-slate-300 p-2.5 font-medium text-slate-900 focus:border-[#16634b] focus:outline-hidden"
                  />
                </div>
                <div>
                  <label className="block font-bold text-slate-700 mb-1">Location / City</label>
                  <input
                    type="text"
                    placeholder="e.g. Bengaluru (Indiranagar)"
                    value={newLeadForm.location}
                    onChange={(e) => setNewLeadForm({ ...newLeadForm, location: e.target.value })}
                    className="w-full rounded-xl border border-slate-300 p-2.5 font-medium text-slate-900 focus:border-[#16634b] focus:outline-hidden"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block font-bold text-slate-700 mb-1">Service Required</label>
                  <input
                    type="text"
                    placeholder="e.g. Meta Ads, Video Production..."
                    value={newLeadForm.serviceInterest}
                    onChange={(e) => setNewLeadForm({ ...newLeadForm, serviceInterest: e.target.value })}
                    className="w-full rounded-xl border border-slate-300 p-2.5 font-medium text-slate-900 focus:border-[#16634b] focus:outline-hidden"
                  />
                </div>
                <div>
                  <label className="block font-bold text-slate-700 mb-1">Estimated Deal Value</label>
                  <input
                    type="text"
                    placeholder="e.g. ₹50,000 / month"
                    value={newLeadForm.estimatedValue}
                    onChange={(e) => setNewLeadForm({ ...newLeadForm, estimatedValue: e.target.value })}
                    className="w-full rounded-xl border border-slate-300 p-2.5 font-bold text-slate-900 focus:border-[#16634b] focus:outline-hidden"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block font-bold text-slate-700 mb-1">Initial Priority / Heat</label>
                  <select
                    value={newLeadForm.temperature}
                    onChange={(e) => setNewLeadForm({ ...newLeadForm, temperature: e.target.value as any })}
                    className="w-full rounded-xl border border-slate-300 p-2.5 font-bold text-slate-900 focus:border-[#16634b] focus:outline-hidden"
                  >
                    <option value="HOT">🔥 Hot (High Priority)</option>
                    <option value="WARM">☀️ Warm (Standard)</option>
                    <option value="COLD">❄️ Cold (Nurture)</option>
                  </select>
                </div>
                <div>
                  <label className="block font-bold text-slate-700 mb-1">Lead Source</label>
                  <select
                    value={newLeadForm.source}
                    onChange={(e) => setNewLeadForm({ ...newLeadForm, source: e.target.value })}
                    className="w-full rounded-xl border border-slate-300 p-2.5 font-bold text-slate-900 focus:border-[#16634b] focus:outline-hidden"
                  >
                    <option value="Cold Calling">Cold Calling</option>
                    <option value="Meta Ads">Meta Ads (Facebook/Instagram)</option>
                    <option value="Website / Inbound">Website / Inbound</option>
                    <option value="Referral">Client Referral</option>
                    <option value="WhatsApp Outreach">WhatsApp Outreach</option>
                    <option value="LinkedIn">LinkedIn</option>
                  </select>
                </div>
              </div>

              {/* Follow-up Date & Time */}
              <div className="grid grid-cols-2 gap-3 p-3 bg-amber-50 rounded-2xl border border-amber-200">
                <div>
                  <label className="block font-bold text-amber-950 mb-1">Initial Follow-up Date</label>
                  <input
                    type="date"
                    value={newLeadForm.followUpDate}
                    onChange={(e) => setNewLeadForm({ ...newLeadForm, followUpDate: e.target.value })}
                    className="w-full rounded-xl border border-slate-300 bg-white p-2 font-bold text-slate-900 focus:outline-hidden"
                  />
                </div>
                <div>
                  <label className="block font-bold text-amber-950 mb-1">Follow-up Time</label>
                  <select
                    value={newLeadForm.followUpTime}
                    onChange={(e) => setNewLeadForm({ ...newLeadForm, followUpTime: e.target.value })}
                    className="w-full rounded-xl border border-slate-300 bg-white p-2 font-bold text-slate-900 focus:outline-hidden"
                  >
                    <option value="10:00 AM">10:00 AM</option>
                    <option value="11:00 AM">11:00 AM</option>
                    <option value="12:00 PM">12:00 PM</option>
                    <option value="02:30 PM">02:30 PM</option>
                    <option value="03:30 PM">03:30 PM</option>
                    <option value="04:30 PM">04:30 PM</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block font-bold text-slate-700 mb-1">Initial Notes / Context</label>
                <textarea
                  rows={2}
                  placeholder="Any background notes or requirements discussed..."
                  value={newLeadForm.notes}
                  onChange={(e) => setNewLeadForm({ ...newLeadForm, notes: e.target.value })}
                  className="w-full rounded-xl border border-slate-300 p-2.5 font-medium focus:border-[#16634b] focus:outline-hidden"
                />
              </div>

              <div className="flex items-center justify-end gap-2.5 border-t border-slate-100 pt-4">
                <button
                  type="button"
                  onClick={() => setShowAddLeadModal(false)}
                  className="rounded-xl border border-slate-200 bg-white px-4 py-2.5 font-bold text-slate-700 hover:bg-slate-50"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="rounded-xl bg-[#16634b] px-6 py-2.5 font-bold text-white shadow-md shadow-[#16634b]/20 hover:bg-[#12503c] transition"
                >
                  Add Lead to CRM
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* -------------------- QUICK RESCHEDULE MODAL -------------------- */}
      {rescheduleLead && (
        <div className="fixed inset-0 z-50 grid place-items-center bg-black/70 backdrop-blur-xs p-4 animate-in fade-in">
          <div className="w-full max-w-md rounded-3xl bg-white shadow-2xl p-6 space-y-4">
            <div className="flex items-start justify-between border-b border-slate-100 pb-3">
              <div>
                <span className="text-[10px] font-black uppercase text-amber-700 bg-amber-100 px-2 py-0.5 rounded-md">
                  Quick Follow-up Rescheduler
                </span>
                <h3 className="text-base font-black text-slate-900 mt-1">
                  {rescheduleLead.companyName}
                </h3>
                <p className="text-xs text-slate-500">{rescheduleLead.contactName} • {rescheduleLead.phone}</p>
              </div>
              <button
                type="button"
                onClick={() => setRescheduleLead(null)}
                className="text-slate-400 hover:text-slate-700 font-bold"
              >
                ✕
              </button>
            </div>

            <div className="space-y-3 text-xs">
              <div>
                <label className="block font-bold text-slate-700 mb-1">New Follow-up Date:</label>
                <input
                  type="date"
                  value={quickDate}
                  onChange={(e) => setQuickDate(e.target.value)}
                  className="w-full rounded-xl border border-slate-300 p-2.5 font-bold text-slate-900 focus:outline-hidden"
                />
              </div>

              <div>
                <label className="block font-bold text-slate-700 mb-1">Follow-up Time:</label>
                <select
                  value={quickTime}
                  onChange={(e) => setQuickTime(e.target.value)}
                  className="w-full rounded-xl border border-slate-300 p-2.5 font-bold text-slate-900 focus:outline-hidden"
                >
                  <option value="10:00 AM">10:00 AM (Morning Sprint)</option>
                  <option value="11:00 AM">11:00 AM (Mid Morning)</option>
                  <option value="12:00 PM">12:00 PM (Noon)</option>
                  <option value="02:30 PM">02:30 PM (Post Lunch)</option>
                  <option value="03:30 PM">03:30 PM (Afternoon)</option>
                  <option value="04:30 PM">04:30 PM (Evening Catchup)</option>
                </select>
              </div>

              <div>
                <label className="block font-bold text-slate-700 mb-1">Follow-up Goal / Note:</label>
                <input
                  type="text"
                  placeholder="e.g. Call decision maker, send case study..."
                  value={quickNote}
                  onChange={(e) => setQuickNote(e.target.value)}
                  className="w-full rounded-xl border border-slate-300 p-2.5 font-medium text-slate-900 focus:outline-hidden"
                />
              </div>
            </div>

            <div className="flex items-center justify-end gap-2 border-t border-slate-100 pt-3">
              <button
                type="button"
                onClick={() => setRescheduleLead(null)}
                className="rounded-xl border border-slate-200 px-4 py-2 text-xs font-bold text-slate-700 hover:bg-slate-50"
              >
                Cancel
              </button>
              <button
                type="button"
                onClick={handleConfirmReschedule}
                className="rounded-xl bg-[#16634b] px-5 py-2 text-xs font-bold text-white hover:bg-[#12503c]"
              >
                Confirm Reschedule
              </button>
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
      (r.clientName || '').toLowerCase().includes(clientSearch.toLowerCase()) ||
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
