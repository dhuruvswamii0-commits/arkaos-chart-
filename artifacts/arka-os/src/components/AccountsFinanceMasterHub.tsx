import React, { useState, useEffect } from 'react';
import * as XLSX from 'xlsx';
import {
  Upload,
  Download,
  Plus,
  Trash2,
  Edit2,
  Check,
  X,
  Search,
  Filter,
  RefreshCw,
  FileSpreadsheet,
  Building2,
  Phone,
  Mail,
  Calendar,
  AlertTriangle,
  UserCheck,
  Crown,
  CheckCircle2,
  Clock,
  ArrowUpDown
} from 'lucide-react';
import {
  ArkaClientDataRecord,
  ArkaClientInfoRecord,
  ArkaExternalServiceRecord,
  ArkaClientPaymentRecord,
  INITIAL_CLIENTS_DATA,
  INITIAL_CLIENTS_INFO,
  INITIAL_EXTERNAL_SERVICES,
  INITIAL_ALL_PAYMENTS
} from '../data/arkaMasterSpreadsheets';

const formatINR = (n: number) =>
  new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR', maximumFractionDigits: 0 }).format(n || 0);

export function AccountsFinanceMasterHub({
  actorName,
  actorRole,
  isAllowed,
  requiredRole,
  allClients
}: {
  actorName: string;
  actorRole: string;
  isAllowed: boolean;
  requiredRole: string;
  allClients: string[];
}) {
  // 1. Current Active Sheet Tab
  const [activeTab, setActiveTab] = useState<string>('OCTOBER');

  // 2. State for each of the 7 authentic sheets
  const [clientsData, setClientsData] = useState<ArkaClientDataRecord[]>(() => {
    try {
      const saved = localStorage.getItem('arka_sheet_clients_data');
      if (saved) return JSON.parse(saved);
    } catch {}
    return INITIAL_CLIENTS_DATA;
  });

  const [clientsInfo, setClientsInfo] = useState<ArkaClientInfoRecord[]>(() => {
    try {
      const saved = localStorage.getItem('arka_sheet_clients_info');
      if (saved) return JSON.parse(saved);
    } catch {}
    return INITIAL_CLIENTS_INFO;
  });

  const [externalServices, setExternalServices] = useState<ArkaExternalServiceRecord[]>(() => {
    try {
      const saved = localStorage.getItem('arka_sheet_external_services');
      if (saved) return JSON.parse(saved);
    } catch {}
    return INITIAL_EXTERNAL_SERVICES;
  });

  const [paymentRecords, setPaymentRecords] = useState<ArkaClientPaymentRecord[]>(() => {
    try {
      const saved = localStorage.getItem('arka_sheet_monthly_payments');
      if (saved) return JSON.parse(saved);
    } catch {}
    return INITIAL_ALL_PAYMENTS;
  });

  // Inline editing state
  const [editingRowId, setEditingRowId] = useState<string | null>(null);
  const [editFormData, setEditFormData] = useState<any>({});

  // Search & Filter
  const [searchQuery, setSearchQuery] = useState('');
  const [statusFilter, setStatusFilter] = useState('ALL');
  const [bannerMsg, setBannerMsg] = useState<string | null>(null);

  // Excel Modal
  const [isExcelModalOpen, setIsExcelModalOpen] = useState(false);
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);

  // Sync to localStorage
  useEffect(() => {
    try { localStorage.setItem('arka_sheet_clients_data', JSON.stringify(clientsData)); } catch {}
  }, [clientsData]);

  useEffect(() => {
    try { localStorage.setItem('arka_sheet_clients_info', JSON.stringify(clientsInfo)); } catch {}
  }, [clientsInfo]);

  useEffect(() => {
    try { localStorage.setItem('arka_sheet_external_services', JSON.stringify(externalServices)); } catch {}
  }, [externalServices]);

  useEffect(() => {
    try { localStorage.setItem('arka_sheet_monthly_payments', JSON.stringify(paymentRecords)); } catch {}
  }, [paymentRecords]);

  if (!isAllowed) {
    return (
      <div className="flex min-h-[70vh] flex-col items-center justify-center p-8 text-center">
        <div className="flex size-16 items-center justify-center rounded-2xl bg-red-100 text-red-600">
          <AlertTriangle className="size-8" />
        </div>
        <h2 className="mt-4 text-2xl font-black text-slate-900">Access Restricted</h2>
        <p className="mt-2 max-w-md text-sm text-slate-500">
          This workspace is restricted to <strong>{requiredRole}</strong>.
        </p>
      </div>
    );
  }

  const isHr = actorRole === 'HR Manager';

  // Inline edit handlers
  const startEditing = (row: any) => {
    setEditingRowId(row.id);
    setEditFormData({ ...row });
  };

  const cancelEditing = () => {
    setEditingRowId(null);
    setEditFormData({});
  };

  const saveInlineEdit = () => {
    if (!editingRowId) return;

    if (activeTab === 'CLIENTS DATA') {
      setClientsData(prev => prev.map(r => r.id === editingRowId ? { ...r, ...editFormData } : r));
    } else if (activeTab === 'CLIENTS INFO') {
      setClientsInfo(prev => prev.map(r => r.id === editingRowId ? { ...r, ...editFormData } : r));
    } else if (activeTab === 'EXTERNAL SERVICE') {
      setExternalServices(prev => prev.map(r => r.id === editingRowId ? { ...r, ...editFormData } : r));
    } else {
      // Monthly Payment Sheets
      const updated = { ...editFormData };
      // Auto recalculate balance & clearance if payment status changed
      if (updated.paymentStatus === 'PAID') {
        updated.amountBalance = 0;
        updated.clearanceStatus = 'CLEARED';
      } else if (updated.paymentStatus === 'PARTIALLY PAID' && (!updated.amountBalance || updated.amountBalance === 0)) {
        updated.amountBalance = Math.round(Number(updated.amountPayable || 0) / 2);
        updated.clearanceStatus = 'NOT CLEARED';
      }
      setPaymentRecords(prev => prev.map(r => r.id === editingRowId ? { ...r, ...updated } : r));
    }

    setBannerMsg('✅ Changes saved successfully directly in the sheet!');
    setEditingRowId(null);
    setEditFormData({});
  };

  // Delete row handler (Founder & HR)
  const handleDeleteRow = (id: string, name: string) => {
    if (!confirm(`Delete record for "${name}" from ${activeTab}?`)) return;

    if (activeTab === 'CLIENTS DATA') {
      setClientsData(prev => prev.filter(r => r.id !== id));
    } else if (activeTab === 'CLIENTS INFO') {
      setClientsInfo(prev => prev.filter(r => r.id !== id));
    } else if (activeTab === 'EXTERNAL SERVICE') {
      setExternalServices(prev => prev.filter(r => r.id !== id));
    } else {
      setPaymentRecords(prev => prev.filter(r => r.id !== id));
    }
    setBannerMsg(`🗑️ Deleted record "${name}".`);
  };

  // Clear entire active sheet
  const handleClearSheet = () => {
    if (!confirm(`⚠️ Are you sure you want to delete ALL rows from "${activeTab}"?`)) return;

    if (activeTab === 'CLIENTS DATA') setClientsData([]);
    else if (activeTab === 'CLIENTS INFO') setClientsInfo([]);
    else if (activeTab === 'EXTERNAL SERVICE') setExternalServices([]);
    else setPaymentRecords(prev => prev.filter(r => r.month.toUpperCase() !== activeTab.toUpperCase()));

    setBannerMsg(`🗑️ Cleared all records from "${activeTab}".`);
  };

  // Reset to original authentic spreadsheet
  const handleResetMaster = () => {
    if (!confirm('Restore all 7 tabs back to authentic ARKA Google Sheets master dataset?')) return;
    setClientsData(INITIAL_CLIENTS_DATA);
    setClientsInfo(INITIAL_CLIENTS_INFO);
    setExternalServices(INITIAL_EXTERNAL_SERVICES);
    setPaymentRecords(INITIAL_ALL_PAYMENTS as ArkaClientPaymentRecord[]);
    setBannerMsg('✨ Restored all 7 sheets from master dataset.');
  };

  // Toggle invoice sent
  const handleToggleInvoiceSent = (id: string) => {
    setPaymentRecords(prev => prev.map(r => r.id === id ? { ...r, invoiceSent: !r.invoiceSent } : r));
  };

  // Export current tab or whole workbook to Excel
  const handleExportExcel = () => {
    const wb = XLSX.utils.book_new();

    if (activeTab === 'CLIENTS DATA') {
      const data = clientsData.map(r => ({
        'SL. NO.': r.slNo,
        'CLIENTS NAME': r.clientName,
        'INVOICE NO.': r.invoiceNo,
        'BILLING CYCLE': r.billingCycle,
        'AMOUNT': r.amount
      }));
      const ws = XLSX.utils.json_to_sheet(data);
      XLSX.utils.book_append_sheet(wb, ws, 'CLIENTS DATA');
    } else if (activeTab === 'CLIENTS INFO') {
      const data = clientsInfo.map(r => ({
        'BILLING CYCLE': r.billingCycle,
        'SL. NO.': r.slNo,
        'CLIENTS NAME': r.clientName,
        "CONTACT NO'S": r.contactNo,
        'MAIL ID': r.mailId
      }));
      const ws = XLSX.utils.json_to_sheet(data);
      XLSX.utils.book_append_sheet(wb, ws, 'CLIENTS INFO');
    } else if (activeTab === 'EXTERNAL SERVICE') {
      const data = externalServices.map(r => ({
        'SL. NO.': r.slNo,
        'CLIENTS NAME': r.clientName,
        'EXTERNAL SERVICE': r.externalService,
        'DATE TAKEN': r.dateTaken,
        'AMOUNT': r.amount,
        'PAYMENT DONE ON': r.paymentDoneOn,
        'STATUS': r.status,
        'CONTACT': r.contact
      }));
      const ws = XLSX.utils.json_to_sheet(data);
      XLSX.utils.book_append_sheet(wb, ws, 'EXTERNAL SERVICE');
    } else {
      // Monthly tab
      const currentMonthPayments = paymentRecords.filter(r => r.month.toUpperCase() === activeTab.toUpperCase());
      const rows = currentMonthPayments.map(r => ({
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

      const sumPayable = rows.reduce((s, r) => s + r['AMOUNT PAYABLE'], 0);
      const sumBalance = rows.reduce((s, r) => s + r['AMOUNT BALANCE'], 0);
      const sumCollected = Math.max(0, sumPayable - sumBalance);

      const exportWithTotals: any[] = [
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

      const ws = XLSX.utils.json_to_sheet(exportWithTotals);
      ws['!cols'] = [
        { wch: 8 }, { wch: 30 }, { wch: 15 }, { wch: 15 }, { wch: 18 },
        { wch: 18 }, { wch: 18 }, { wch: 18 }, { wch: 15 }, { wch: 18 }, { wch: 15 }
      ];
      XLSX.utils.book_append_sheet(wb, ws, activeTab);
    }

    XLSX.writeFile(wb, `ARKA_MEDIA_${activeTab.replace(/\s+/g, '_')}.xlsx`);
  };

  // Excel / CSV Importer with intelligent multi-sheet routing
  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (evt) => {
      try {
        const data = new Uint8Array(evt.target?.result as ArrayBuffer);
        const wb = XLSX.read(data, { type: 'array' });
        let totalImported = 0;

        wb.SheetNames.forEach(sheetName => {
          const ws = wb.Sheets[sheetName];
          const rawJson: any[] = XLSX.utils.sheet_to_json(ws, { header: 1 });
          if (!rawJson || rawJson.length < 2) return;

          const sUpper = sheetName.toUpperCase().trim();

          // Header search
          let headerIdx = 0;
          for (let i = 0; i < Math.min(5, rawJson.length); i++) {
            const rowStr = (rawJson[i] || []).join(' ').toUpperCase();
            if (rowStr.includes('CLIENT') || rowStr.includes('INVOICE') || rowStr.includes('CYCLE') || rowStr.includes('SERVICE')) {
              headerIdx = i;
              break;
            }
          }

          const headers = (rawJson[headerIdx] || []).map((h: any) => String(h || '').trim().toUpperCase());

          // Route 1: CLIENTS DATA
          if (sUpper.includes('CLIENTS DATA') || sUpper === 'DATA') {
            const imported: ArkaClientDataRecord[] = [];
            for (let r = headerIdx + 1; r < rawJson.length; r++) {
              const row = rawJson[r];
              if (!row || !row[1]) continue;
              imported.push({
                id: `cd-imp-${Date.now()}-${r}`,
                slNo: Number(row[0]) || r,
                clientName: String(row[1] || '').trim(),
                invoiceNo: String(row[2] || '').trim(),
                billingCycle: String(row[3] || '').trim(),
                amount: Number(String(row[4] || '').replace(/[^0-9]/g, '')) || 0
              });
            }
            if (imported.length > 0) {
              setClientsData(imported);
              totalImported += imported.length;
            }
          }
          // Route 2: CLIENTS INFO
          else if (sUpper.includes('CLIENTS INFO') || sUpper.includes('INFO') || sUpper.includes('CONTACT')) {
            const imported: ArkaClientInfoRecord[] = [];
            for (let r = headerIdx + 1; r < rawJson.length; r++) {
              const row = rawJson[r];
              if (!row || !row[2]) continue;
              imported.push({
                id: `ci-imp-${Date.now()}-${r}`,
                billingCycle: String(row[0] || '').trim(),
                slNo: Number(row[1]) || r,
                clientName: String(row[2] || '').trim(),
                contactNo: String(row[3] || '').trim(),
                mailId: String(row[4] || '').trim()
              });
            }
            if (imported.length > 0) {
              setClientsInfo(imported);
              totalImported += imported.length;
            }
          }
          // Route 3: EXTERNAL SERVICE
          else if (sUpper.includes('EXTERNAL') || sUpper.includes('SERVICE')) {
            const imported: ArkaExternalServiceRecord[] = [];
            for (let r = headerIdx + 1; r < rawJson.length; r++) {
              const row = rawJson[r];
              if (!row || !row[1]) continue;
              imported.push({
                id: `ext-imp-${Date.now()}-${r}`,
                slNo: Number(row[0]) || r,
                clientName: String(row[1] || '').trim(),
                externalService: String(row[2] || '').trim(),
                dateTaken: String(row[3] || '').trim(),
                amount: Number(String(row[4] || '').replace(/[^0-9]/g, '')) || 0,
                paymentDoneOn: String(row[5] || '').trim(),
                status: String(row[6] || '').trim(),
                contact: String(row[7] || '').trim()
              });
            }
            if (imported.length > 0) {
              setExternalServices(imported);
              totalImported += imported.length;
            }
          }
          // Route 4: MONTHLY INVOICE PAYMENT SHEETS
          else {
            let mName = 'OCTOBER';
            if (sUpper.includes('AUG')) mName = 'AUGUST';
            else if (sUpper.includes('SEP')) mName = 'SEPTEMBER';
            else if (sUpper.includes('OCT')) mName = 'OCTOBER';
            else if (sUpper.includes('NOV')) mName = 'NOVEMBER';

            const colSlNo = headers.findIndex((h: string) => h.includes('SL') || h.includes('NO'));
            const colClient = headers.findIndex((h: string) => h.includes('CLIENT'));
            const colInvNo = headers.findIndex((h: string) => h.includes('INVOICE NO') || h.includes('INV'));
            const colInvDate = headers.findIndex((h: string) => h === 'INVOICE DATE' || (h.includes('DATE') && !h.includes('DUE') && !h.includes('PAYMENT')));
            const colDueDate = headers.findIndex((h: string) => h.includes('DUE'));
            const colPayable = headers.findIndex((h: string) => h.includes('PAYABLE') || h.includes('AMOUNT'));
            const colPayStatus = headers.findIndex((h: string) => h.includes('PAYMENT STATUS'));
            const colBalance = headers.findIndex((h: string) => h.includes('BALANCE'));
            const colClearance = headers.findIndex((h: string) => h === 'STATUS' || h.includes('CLEAR'));
            const colDatePaid = headers.findIndex((h: string) => h.includes('DATE OF PAYMENT') || h.includes('PAID DATE'));
            const colSent = headers.findIndex((h: string) => h.includes('SENT'));

            const monthRows: ArkaClientPaymentRecord[] = [];
            for (let r = headerIdx + 1; r < rawJson.length; r++) {
              const row = rawJson[r];
              if (!row || !row[colClient !== -1 ? colClient : 1]) continue;

              const cName = String(row[colClient !== -1 ? colClient : 1] || '').trim();
              const payable = Number(String(row[colPayable !== -1 ? colPayable : 5] || '').replace(/[^0-9]/g, '')) || 0;
              const rawPayStatus = String(row[colPayStatus !== -1 ? colPayStatus : 6] || '').toUpperCase();
              let pStatus: 'PAID' | 'PARTIALLY PAID' | 'PENDING' = 'PENDING';
              if (rawPayStatus.includes('PARTIAL')) pStatus = 'PARTIALLY PAID';
              else if (rawPayStatus.includes('PAID') && !rawPayStatus.includes('NOT')) pStatus = 'PAID';

              const bal = colBalance !== -1 && row[colBalance] !== undefined
                ? Number(String(row[colBalance] || '').replace(/[^0-9]/g, '')) || 0
                : (pStatus === 'PAID' ? 0 : payable);

              let clr: 'CLEARED' | 'NOT CLEARED' = 'NOT CLEARED';
              const rawClr = String(row[colClearance !== -1 ? colClearance : 8] || '').toUpperCase();
              if ((rawClr.includes('CLEARED') && !rawClr.includes('NOT')) || pStatus === 'PAID') clr = 'CLEARED';

              const rawSent = String(row[colSent !== -1 ? colSent : 10] || '').toLowerCase();
              const sent = rawSent.includes('sent') || rawSent === 'yes' || rawSent === 'true';

              let colorTag: 'orange' | 'red' | 'mustard' | 'normal' = 'normal';
              if ((cName || '').toLowerCase().includes('pilates') || (cName || '').toLowerCase().includes('aura')) colorTag = 'red';
              else if (pStatus === 'PARTIALLY PAID' || (cName || '').toLowerCase().includes('bluecaps') || (cName || '').toLowerCase().includes('raagi')) colorTag = 'orange';
              else if ((cName || '').toLowerCase().includes('hair care')) colorTag = 'mustard';

              monthRows.push({
                id: `pay-imp-${(mName || '').toLowerCase()}-${Date.now()}-${r}`,
                slNo: Number(row[colSlNo !== -1 ? colSlNo : 0]) || r,
                clientName: cName,
                invoiceNo: String(row[colInvNo !== -1 ? colInvNo : 2] || '').trim(),
                invoiceDate: String(row[colInvDate !== -1 ? colInvDate : 3] || '').trim(),
                invoiceDueDate: String(row[colDueDate !== -1 ? colDueDate : 4] || '').trim(),
                amountPayable: payable,
                paymentStatus: pStatus,
                amountBalance: bal,
                clearanceStatus: clr,
                dateOfPayment: String(row[colDatePaid !== -1 ? colDatePaid : 9] || '').trim(),
                invoiceSent: sent,
                month: mName,
                colorTag
              });
            }

            if (monthRows.length > 0) {
              setPaymentRecords(prev => [...prev.filter(p => p.month.toUpperCase() !== mName.toUpperCase()), ...monthRows]);
              totalImported += monthRows.length;
            }
          }
        });

        setBannerMsg(`✅ Successfully imported and synchronized ${totalImported} spreadsheet rows with live editing!`);
        setIsExcelModalOpen(false);
      } catch (err: any) {
        alert('Error parsing Excel: ' + err.message);
      }
    };
    reader.readAsArrayBuffer(file);
  };

  // Monthly tab financial calculation helpers
  const isMonthTab = ['AUGUST', 'SEPTEMBER', 'OCTOBER', 'NOVEMBER'].includes(activeTab);
  const currentMonthPayments = paymentRecords.filter(r => r.month.toUpperCase() === activeTab.toUpperCase());
  const filteredPayments = currentMonthPayments.filter(r => {
    const matchSearch = !searchQuery || (r.clientName || '').toLowerCase().includes(searchQuery.toLowerCase()) || (r.invoiceNo || '').toLowerCase().includes(searchQuery.toLowerCase());
    const matchStatus = statusFilter === 'ALL' || r.paymentStatus === statusFilter;
    return matchSearch && matchStatus;
  });

  const totalPayable = currentMonthPayments.reduce((s, r) => s + (Number(r.amountPayable) || 0), 0);
  const totalBalance = currentMonthPayments.reduce((s, r) => s + (Number(r.amountBalance) || 0), 0);
  const totalCollected = Math.max(0, totalPayable - totalBalance);
  const paidCount = currentMonthPayments.filter(r => r.paymentStatus === 'PAID').length;
  const partialCount = currentMonthPayments.filter(r => r.paymentStatus === 'PARTIALLY PAID').length;
  const pendingCount = currentMonthPayments.filter(r => r.paymentStatus === 'PENDING').length;
  const clearedCount = currentMonthPayments.filter(r => r.clearanceStatus === 'CLEARED').length;
  const invoiceSentCount = currentMonthPayments.filter(r => r.invoiceSent).length;

  return (
    <div className="space-y-5">
      {/* Google Sheets Header & Control Bar */}
      <div className="rounded-3xl bg-gradient-to-r from-[#10271f] via-[#16634b] to-[#10271f] text-white p-6 shadow-xl border border-[#e2c48d]/40">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
          <div>
            <div className="flex items-center gap-2">
              <span className="text-[10px] font-black uppercase tracking-widest text-[#e2c48d] bg-[#10271f]/80 px-2.5 py-1 rounded-full border border-[#e2c48d]/30">
                ARKA MEDIA · SPREADSHEET ACCOUNTS ENGINE
              </span>
              {isHr ? (
                <span className="text-[10px] font-extrabold uppercase bg-purple-900/80 text-purple-200 border border-purple-500 px-2.5 py-1 rounded-full flex items-center gap-1">
                  <UserCheck className="size-3 text-purple-300" /> HR Oversight Mode
                </span>
              ) : (
                <span className="text-[10px] font-extrabold uppercase bg-[#e2c48d]/20 text-[#e2c48d] border border-[#e2c48d]/40 px-2.5 py-1 rounded-full flex items-center gap-1">
                  <Crown className="size-3 text-[#e2c48d]" /> Founder Mode ({actorName})
                </span>
              )}
            </div>
            <h2 className="text-2xl sm:text-3xl font-black mt-1.5 flex items-center gap-2.5">
              <span>Clients Details & Payments @ ARKA MEDIA</span>
              <span className="text-xs font-bold text-[#e2c48d] bg-[#10271f] px-2.5 py-0.5 rounded-lg border border-[#e2c48d]/30">
                Live Interactive Mode
              </span>
            </h2>
            <p className="text-xs sm:text-sm text-slate-200 mt-1">
              Exact authentic Google Sheets tabs, inline cell editing, 11-column financial formulas, and multi-sheet synchronization.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-2">
            <button
              type="button"
              onClick={() => setIsExcelModalOpen(true)}
              className="flex items-center gap-1.5 rounded-xl bg-white text-slate-900 font-extrabold px-3.5 py-2 text-xs shadow hover:bg-slate-100 transition cursor-pointer"
            >
              <Upload className="size-3.5 text-emerald-700" />
              <span>Import Excel</span>
            </button>

            <button
              type="button"
              onClick={handleExportExcel}
              className="flex items-center gap-1.5 rounded-xl bg-[#10271f] border border-[#e2c48d]/50 text-[#e2c48d] font-extrabold px-3.5 py-2 text-xs shadow hover:bg-[#10271f]/80 transition cursor-pointer"
            >
              <Download className="size-3.5" />
              <span>Export {activeTab} (.xlsx)</span>
            </button>

            <button
              type="button"
              onClick={handleClearSheet}
              className="flex items-center gap-1.5 rounded-xl bg-rose-500/20 border border-rose-400/40 text-rose-200 hover:bg-rose-600 hover:text-white font-bold px-3 py-2 text-xs transition cursor-pointer"
              title="Delete all data in active tab"
            >
              <Trash2 className="size-3.5" />
              <span>Clear {activeTab}</span>
            </button>

            <button
              type="button"
              onClick={handleResetMaster}
              className="flex items-center gap-1.5 rounded-xl bg-slate-800 text-slate-300 hover:text-white border border-slate-700 font-bold px-3 py-2 text-xs transition cursor-pointer"
              title="Reset all tabs to master template"
            >
              <RefreshCw className="size-3.5" />
              <span>Reset Master</span>
            </button>
          </div>
        </div>
      </div>

      {bannerMsg && (
        <div className="flex items-center justify-between rounded-2xl border border-emerald-300 bg-emerald-50 px-5 py-3 text-xs font-bold text-emerald-900 shadow-xs">
          <span>{bannerMsg}</span>
          <button onClick={() => setBannerMsg(null)} className="underline text-emerald-700 hover:text-emerald-900">Dismiss</button>
        </div>
      )}

      {/* Google Sheets Authentic Bottom / Top Tabs */}
      <div className="flex items-center gap-1 overflow-x-auto p-1.5 bg-[#e2e8f0] rounded-2xl border border-slate-300 shadow-inner">
        {[
          { id: 'CLIENTS DATA', label: 'CLIENTS Data', count: clientsData.length },
          { id: 'CLIENTS INFO', label: 'Clients info', count: clientsInfo.length },
          { id: 'EXTERNAL SERVICE', label: 'external service', count: externalServices.length },
          { id: 'AUGUST', label: 'AUGUST', count: paymentRecords.filter(r => r.month.toUpperCase() === 'AUGUST').length },
          { id: 'SEPTEMBER', label: 'SEPTEMBER', count: paymentRecords.filter(r => r.month.toUpperCase() === 'SEPTEMBER').length },
          { id: 'OCTOBER', label: 'OCTOBER', count: paymentRecords.filter(r => r.month.toUpperCase() === 'OCTOBER').length },
          { id: 'NOVEMBER', label: 'NOVEMBER', count: paymentRecords.filter(r => r.month.toUpperCase() === 'NOVEMBER').length },
        ].map(tab => {
          const isActive = activeTab === tab.id;
          return (
            <button
              key={tab.id}
              type="button"
              onClick={() => {
                setActiveTab(tab.id);
                setEditingRowId(null);
              }}
              className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-black transition cursor-pointer whitespace-nowrap ${
                isActive
                  ? 'bg-[#16634b] text-white shadow-md ring-2 ring-[#e2c48d]/50'
                  : 'bg-white/80 text-slate-700 hover:bg-white hover:text-black'
              }`}
            >
              <span>{tab.label}</span>
              <span className={`text-[10px] px-2 py-0.5 rounded-full font-black ${
                isActive ? 'bg-[#10271f] text-[#e2c48d]' : 'bg-slate-200 text-slate-700'
              }`}>
                {tab.count}
              </span>
            </button>
          );
        })}
      </div>

      {/* Month-Wise KPI Overview Cards (Shown on August, September, October, November) */}
      {isMonthTab && (
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3.5">
          <div className="bg-white p-4.5 rounded-2xl border border-slate-200 shadow-xs">
            <span className="text-[11px] font-bold uppercase tracking-wider text-slate-500">Total Billed ({activeTab})</span>
            <p className="text-2xl font-black text-slate-900 mt-1">{formatINR(totalPayable)}</p>
            <div className="mt-1 text-xs text-slate-500 font-semibold flex items-center justify-between">
              <span>{currentMonthPayments.length} Client Invoices</span>
              <span className="text-emerald-700 font-bold">{invoiceSentCount} Invoices Sent</span>
            </div>
          </div>

          <div className="bg-white p-4.5 rounded-2xl border border-emerald-200 shadow-xs bg-emerald-50/20">
            <span className="text-[11px] font-bold uppercase tracking-wider text-emerald-800">Total Collected / Settled</span>
            <p className="text-2xl font-black text-emerald-700 mt-1">{formatINR(totalCollected)}</p>
            <div className="mt-1 text-xs text-emerald-800 font-semibold flex items-center justify-between">
              <span>{paidCount} Fully Paid</span>
              <span className="text-blue-700 font-bold">{partialCount} Partially Paid</span>
            </div>
          </div>

          <div className="bg-white p-4.5 rounded-2xl border border-amber-200 shadow-xs bg-amber-50/20">
            <span className="text-[11px] font-bold uppercase tracking-wider text-amber-800">Total Balance Outstanding</span>
            <p className="text-2xl font-black text-amber-700 mt-1">{formatINR(totalBalance)}</p>
            <div className="mt-1 text-xs text-amber-800 font-semibold flex items-center justify-between">
              <span>{pendingCount} Pending Accounts</span>
              <span className="text-rose-700 font-bold">{currentMonthPayments.length - clearedCount} Unsettled</span>
            </div>
          </div>

          <div className="bg-white p-4.5 rounded-2xl border border-purple-200 shadow-xs bg-purple-50/20">
            <span className="text-[11px] font-bold uppercase tracking-wider text-purple-800">Clearance & Health</span>
            <p className="text-2xl font-black text-purple-700 mt-1">
              {clearedCount} <span className="text-xs font-bold text-slate-400">/ {currentMonthPayments.length} Cleared</span>
            </p>
            <div className="mt-1 text-xs text-purple-800 font-semibold flex items-center justify-between">
              <span className="text-emerald-700 font-bold">{Math.round((clearedCount / (currentMonthPayments.length || 1)) * 100)}% Cleared</span>
              <span className="text-rose-700 font-bold">{currentMonthPayments.length - clearedCount} Overdue / Red</span>
            </div>
          </div>
        </div>
      )}

      {/* Search and Filter toolbar */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 bg-white p-3.5 rounded-2xl border border-slate-200 shadow-xs">
        <div className="flex flex-wrap items-center gap-2 flex-1">
          <div className="relative min-w-[240px]">
            <Search className="absolute left-3 top-2.5 size-4 text-slate-400" />
            <input
              type="text"
              placeholder={`Search in ${activeTab}...`}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full rounded-xl border border-slate-200 pl-9 pr-3 py-2 text-xs bg-slate-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-emerald-500"
            />
          </div>

          {isMonthTab && (
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
          )}
        </div>

        <div className="text-xs font-bold text-slate-500">
          Double-click or click <Edit2 className="inline size-3 mx-1 text-slate-600" /> to edit cells directly
        </div>
      </div>

      {/* ========================================================================= */}
      {/* SPREADSHEET 1: CLIENTS DATA (SL. NO., CLIENTS NAME, INVOICE NO., BILLING CYCLE, AMOUNT) */}
      {/* ========================================================================= */}
      {activeTab === 'CLIENTS DATA' && (
        <div className="rounded-2xl border border-slate-200 bg-white shadow-sm overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs border-collapse">
              <thead>
                <tr className="bg-[#fef3c7] text-[#78350f] font-black uppercase text-[11px] border-b border-amber-300">
                  <th className="px-4 py-3 text-center w-16">SL. NO.</th>
                  <th className="px-4 py-3">CLIENTS NAME</th>
                  <th className="px-4 py-3 w-36">INVOICE NO.</th>
                  <th className="px-4 py-3 w-40">BILLING CYCLE</th>
                  <th className="px-4 py-3 w-36 text-right">AMOUNT (₹)</th>
                  <th className="px-4 py-3 text-right w-24">ACTIONS</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {clientsData
                  .filter(r => !searchQuery || (r.clientName || '').toLowerCase().includes(searchQuery.toLowerCase()) || (r.invoiceNo || '').toLowerCase().includes(searchQuery.toLowerCase()))
                  .map(row => {
                    const isEditing = editingRowId === row.id;
                    return (
                      <tr key={row.id} className="hover:bg-slate-50 transition">
                        <td className="px-4 py-3 text-center font-bold text-slate-700">{row.slNo}</td>

                        <td className="px-4 py-3 font-extrabold text-slate-900">
                          {isEditing ? (
                            <input
                              value={editFormData.clientName || ''}
                              onChange={(e) => setEditFormData({ ...editFormData, clientName: e.target.value })}
                              className="w-full rounded-lg border border-emerald-500 px-2 py-1 text-xs font-bold"
                            />
                          ) : (
                            row.clientName
                          )}
                        </td>

                        <td className="px-4 py-3 font-mono font-bold text-slate-600">
                          {isEditing ? (
                            <input
                              value={editFormData.invoiceNo || ''}
                              onChange={(e) => setEditFormData({ ...editFormData, invoiceNo: e.target.value })}
                              className="w-full rounded-lg border border-emerald-500 px-2 py-1 text-xs font-mono"
                            />
                          ) : (
                            row.invoiceNo || '-'
                          )}
                        </td>

                        <td className="px-4 py-3 font-semibold text-slate-700">
                          {isEditing ? (
                            <input
                              value={editFormData.billingCycle || ''}
                              onChange={(e) => setEditFormData({ ...editFormData, billingCycle: e.target.value })}
                              className="w-full rounded-lg border border-emerald-500 px-2 py-1 text-xs"
                            />
                          ) : (
                            row.billingCycle || '-'
                          )}
                        </td>

                        <td className="px-4 py-3 text-right font-black text-slate-900">
                          {isEditing ? (
                            <input
                              type="number"
                              value={editFormData.amount || 0}
                              onChange={(e) => setEditFormData({ ...editFormData, amount: Number(e.target.value) || 0 })}
                              className="w-full text-right rounded-lg border border-emerald-500 px-2 py-1 text-xs font-bold"
                            />
                          ) : (
                            formatINR(row.amount)
                          )}
                        </td>

                        <td className="px-4 py-3 text-right">
                          <div className="flex items-center justify-end gap-1.5">
                            {isEditing ? (
                              <>
                                <button onClick={saveInlineEdit} className="p-1 rounded bg-emerald-600 text-white hover:bg-emerald-700" title="Save">
                                  <Check className="size-3.5" />
                                </button>
                                <button onClick={cancelEditing} className="p-1 rounded bg-slate-300 text-slate-700 hover:bg-slate-400" title="Cancel">
                                  <X className="size-3.5" />
                                </button>
                              </>
                            ) : (
                              <>
                                <button onClick={() => startEditing(row)} className="p-1 rounded bg-slate-100 hover:bg-slate-200 text-slate-700" title="Edit row">
                                  <Edit2 className="size-3.5" />
                                </button>
                                <button onClick={() => handleDeleteRow(row.id, row.clientName)} className="p-1 rounded bg-red-100 hover:bg-red-200 text-red-600" title="Delete row">
                                  <Trash2 className="size-3.5" />
                                </button>
                              </>
                            )}
                          </div>
                        </td>
                      </tr>
                    );
                  })}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* ========================================================================= */}
      {/* SPREADSHEET 2: CLIENTS INFO (BILLING CYCLE, SL. NO., CLIENTS NAME, CONTACT NO'S, MAIL ID) */}
      {/* ========================================================================= */}
      {activeTab === 'CLIENTS INFO' && (
        <div className="rounded-2xl border border-slate-200 bg-white shadow-sm overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs border-collapse">
              <thead>
                <tr className="bg-[#fef3c7] text-[#78350f] font-black uppercase text-[11px] border-b border-amber-300">
                  <th className="px-4 py-3 w-36">BILLING CYCLE</th>
                  <th className="px-4 py-3 text-center w-16">SL. NO.</th>
                  <th className="px-4 py-3">CLIENTS NAME</th>
                  <th className="px-4 py-3 w-48">CONTACT NO'S</th>
                  <th className="px-4 py-3 w-64">MAIL ID</th>
                  <th className="px-4 py-3 text-right w-24">ACTIONS</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {clientsInfo
                  .filter(r => !searchQuery || (r.clientName || '').toLowerCase().includes(searchQuery.toLowerCase()) || r.contactNo.includes(searchQuery) || (r.mailId || '').toLowerCase().includes(searchQuery.toLowerCase()))
                  .map(row => {
                    const isEditing = editingRowId === row.id;
                    return (
                      <tr key={row.id} className="hover:bg-slate-50 transition">
                        <td className="px-4 py-3 font-semibold text-slate-700">
                          {isEditing ? (
                            <input
                              value={editFormData.billingCycle || ''}
                              onChange={(e) => setEditFormData({ ...editFormData, billingCycle: e.target.value })}
                              className="w-full rounded-lg border border-emerald-500 px-2 py-1 text-xs"
                            />
                          ) : (
                            row.billingCycle || '-'
                          )}
                        </td>

                        <td className="px-4 py-3 text-center font-bold text-slate-700">{row.slNo}</td>

                        <td className="px-4 py-3 font-extrabold text-slate-900">
                          {isEditing ? (
                            <input
                              value={editFormData.clientName || ''}
                              onChange={(e) => setEditFormData({ ...editFormData, clientName: e.target.value })}
                              className="w-full rounded-lg border border-emerald-500 px-2 py-1 text-xs font-bold"
                            />
                          ) : (
                            row.clientName
                          )}
                        </td>

                        <td className="px-4 py-3 font-mono text-slate-700">
                          {isEditing ? (
                            <input
                              value={editFormData.contactNo || ''}
                              onChange={(e) => setEditFormData({ ...editFormData, contactNo: e.target.value })}
                              className="w-full rounded-lg border border-emerald-500 px-2 py-1 text-xs font-mono"
                            />
                          ) : (
                            row.contactNo ? (
                              <a href={`tel:${(row.contactNo || '').split(/[\s,&()]+/)[0]}`} className="text-emerald-700 hover:underline flex items-center gap-1 font-bold">
                                <Phone className="size-3" /> {row.contactNo}
                              </a>
                            ) : '-'
                          )}
                        </td>

                        <td className="px-4 py-3 text-slate-600 font-mono">
                          {isEditing ? (
                            <input
                              value={editFormData.mailId || ''}
                              onChange={(e) => setEditFormData({ ...editFormData, mailId: e.target.value })}
                              className="w-full rounded-lg border border-emerald-500 px-2 py-1 text-xs font-mono"
                            />
                          ) : (
                            row.mailId ? (
                              <a href={`mailto:${row.mailId}`} className="text-blue-700 hover:underline flex items-center gap-1">
                                <Mail className="size-3" /> {row.mailId}
                              </a>
                            ) : '-'
                          )}
                        </td>

                        <td className="px-4 py-3 text-right">
                          <div className="flex items-center justify-end gap-1.5">
                            {isEditing ? (
                              <>
                                <button onClick={saveInlineEdit} className="p-1 rounded bg-emerald-600 text-white hover:bg-emerald-700" title="Save">
                                  <Check className="size-3.5" />
                                </button>
                                <button onClick={cancelEditing} className="p-1 rounded bg-slate-300 text-slate-700 hover:bg-slate-400" title="Cancel">
                                  <X className="size-3.5" />
                                </button>
                              </>
                            ) : (
                              <>
                                <button onClick={() => startEditing(row)} className="p-1 rounded bg-slate-100 hover:bg-slate-200 text-slate-700" title="Edit row">
                                  <Edit2 className="size-3.5" />
                                </button>
                                <button onClick={() => handleDeleteRow(row.id, row.clientName)} className="p-1 rounded bg-red-100 hover:bg-red-200 text-red-600" title="Delete row">
                                  <Trash2 className="size-3.5" />
                                </button>
                              </>
                            )}
                          </div>
                        </td>
                      </tr>
                    );
                  })}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* ========================================================================= */}
      {/* SPREADSHEET 3: EXTERNAL SERVICE */}
      {/* ========================================================================= */}
      {activeTab === 'EXTERNAL SERVICE' && (
        <div className="rounded-2xl border border-slate-200 bg-white shadow-sm overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs border-collapse">
              <thead>
                <tr className="bg-[#fef3c7] text-[#78350f] font-black uppercase text-[11px] border-b border-amber-300">
                  <th className="px-4 py-3 text-center w-16">SL. NO.</th>
                  <th className="px-4 py-3">CLIENTS NAME</th>
                  <th className="px-4 py-3">EXTERNAL SERVICE</th>
                  <th className="px-4 py-3 w-32">DATE TAKEN</th>
                  <th className="px-4 py-3 w-32 text-right">AMOUNT (₹)</th>
                  <th className="px-4 py-3 w-36">PAYMENT DONE ON</th>
                  <th className="px-4 py-3 w-28 text-center">STATUS</th>
                  <th className="px-4 py-3 w-40">CONTACT</th>
                  <th className="px-4 py-3 text-right w-24">ACTIONS</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {externalServices
                  .filter(r => !searchQuery || (r.clientName || '').toLowerCase().includes(searchQuery.toLowerCase()) || (r.externalService || '').toLowerCase().includes(searchQuery.toLowerCase()))
                  .map(row => {
                    const isEditing = editingRowId === row.id;
                    return (
                      <tr key={row.id} className="hover:bg-slate-50 transition">
                        <td className="px-4 py-3 text-center font-bold text-slate-700">{row.slNo}</td>

                        <td className="px-4 py-3 font-extrabold text-slate-900">
                          {isEditing ? (
                            <input
                              value={editFormData.clientName || ''}
                              onChange={(e) => setEditFormData({ ...editFormData, clientName: e.target.value })}
                              className="w-full rounded-lg border border-emerald-500 px-2 py-1 text-xs font-bold"
                            />
                          ) : (
                            row.clientName
                          )}
                        </td>

                        <td className="px-4 py-3 text-slate-700 font-semibold">
                          {isEditing ? (
                            <input
                              value={editFormData.externalService || ''}
                              onChange={(e) => setEditFormData({ ...editFormData, externalService: e.target.value })}
                              className="w-full rounded-lg border border-emerald-500 px-2 py-1 text-xs"
                            />
                          ) : (
                            row.externalService || '-'
                          )}
                        </td>

                        <td className="px-4 py-3 font-mono text-slate-600">
                          {isEditing ? (
                            <input
                              value={editFormData.dateTaken || ''}
                              onChange={(e) => setEditFormData({ ...editFormData, dateTaken: e.target.value })}
                              className="w-full rounded-lg border border-emerald-500 px-2 py-1 text-xs font-mono"
                            />
                          ) : (
                            row.dateTaken || '-'
                          )}
                        </td>

                        <td className="px-4 py-3 text-right font-black text-slate-900">
                          {isEditing ? (
                            <input
                              type="number"
                              value={editFormData.amount || 0}
                              onChange={(e) => setEditFormData({ ...editFormData, amount: Number(e.target.value) || 0 })}
                              className="w-full text-right rounded-lg border border-emerald-500 px-2 py-1 text-xs font-bold"
                            />
                          ) : (
                            row.amount > 0 ? formatINR(row.amount) : '-'
                          )}
                        </td>

                        <td className="px-4 py-3 font-mono text-slate-600">
                          {isEditing ? (
                            <input
                              value={editFormData.paymentDoneOn || ''}
                              onChange={(e) => setEditFormData({ ...editFormData, paymentDoneOn: e.target.value })}
                              className="w-full rounded-lg border border-emerald-500 px-2 py-1 text-xs font-mono"
                            />
                          ) : (
                            row.paymentDoneOn || '-'
                          )}
                        </td>

                        <td className="px-4 py-3 text-center">
                          {isEditing ? (
                            <input
                              value={editFormData.status || ''}
                              onChange={(e) => setEditFormData({ ...editFormData, status: e.target.value })}
                              className="w-full text-center rounded-lg border border-emerald-500 px-2 py-1 text-xs"
                            />
                          ) : (
                            row.status ? (
                              <span className="inline-block rounded px-2 py-0.5 text-[10px] font-bold bg-slate-100 text-slate-700">
                                {row.status}
                              </span>
                            ) : '-'
                          )}
                        </td>

                        <td className="px-4 py-3 text-slate-700 text-[11px]">
                          {isEditing ? (
                            <input
                              value={editFormData.contact || ''}
                              onChange={(e) => setEditFormData({ ...editFormData, contact: e.target.value })}
                              className="w-full rounded-lg border border-emerald-500 px-2 py-1 text-xs"
                            />
                          ) : (
                            row.contact || '-'
                          )}
                        </td>

                        <td className="px-4 py-3 text-right">
                          <div className="flex items-center justify-end gap-1.5">
                            {isEditing ? (
                              <>
                                <button onClick={saveInlineEdit} className="p-1 rounded bg-emerald-600 text-white hover:bg-emerald-700" title="Save">
                                  <Check className="size-3.5" />
                                </button>
                                <button onClick={cancelEditing} className="p-1 rounded bg-slate-300 text-slate-700 hover:bg-slate-400" title="Cancel">
                                  <X className="size-3.5" />
                                </button>
                              </>
                            ) : (
                              <>
                                <button onClick={() => startEditing(row)} className="p-1 rounded bg-slate-100 hover:bg-slate-200 text-slate-700" title="Edit row">
                                  <Edit2 className="size-3.5" />
                                </button>
                                <button onClick={() => handleDeleteRow(row.id, row.clientName)} className="p-1 rounded bg-red-100 hover:bg-red-200 text-red-600" title="Delete row">
                                  <Trash2 className="size-3.5" />
                                </button>
                              </>
                            )}
                          </div>
                        </td>
                      </tr>
                    );
                  })}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* ========================================================================= */}
      {/* SPREADSHEETS 4-7: MONTHLY PAYMENT INVOICES (AUGUST, SEPTEMBER, OCTOBER, NOVEMBER) */}
      {/* ========================================================================= */}
      {isMonthTab && (
        <div className="rounded-2xl border border-slate-200 bg-white shadow-sm overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs border-collapse">
              <thead>
                <tr className="bg-[#fef3c7] text-[#78350f] font-black uppercase text-[11px] border-b border-amber-300">
                  <th className="px-3.5 py-3 text-center w-14">SL. NO.</th>
                  <th className="px-4 py-3 min-w-[170px]">CLIENTS NAME</th>
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
                {filteredPayments.map(row => {
                  const isEditing = editingRowId === row.id;

                  let rowBgClass = 'hover:bg-slate-50 transition';
                  if (row.colorTag === 'red') {
                    rowBgClass = 'bg-red-500/15 hover:bg-red-500/25 border-l-4 border-l-red-600 font-semibold';
                  } else if (row.colorTag === 'orange') {
                    rowBgClass = 'bg-amber-400/20 hover:bg-amber-400/30 border-l-4 border-l-amber-500 font-semibold';
                  } else if (row.colorTag === 'mustard') {
                    rowBgClass = 'bg-yellow-400/20 hover:bg-yellow-400/30 border-l-4 border-l-yellow-600 font-semibold';
                  }

                  return (
                    <tr key={row.id} className={rowBgClass}>
                      <td className="px-3.5 py-3 text-center font-bold text-slate-700">{row.slNo}</td>

                      <td className="px-4 py-3 font-extrabold text-slate-900">
                        {isEditing ? (
                          <input
                            value={editFormData.clientName || ''}
                            onChange={(e) => setEditFormData({ ...editFormData, clientName: e.target.value })}
                            className="w-full rounded-lg border border-emerald-500 px-2 py-1 text-xs font-bold"
                          />
                        ) : (
                          row.clientName
                        )}
                      </td>

                      <td className="px-3 py-3 font-mono font-bold text-slate-600">
                        {isEditing ? (
                          <input
                            value={editFormData.invoiceNo || ''}
                            onChange={(e) => setEditFormData({ ...editFormData, invoiceNo: e.target.value })}
                            className="w-full rounded-lg border border-emerald-500 px-2 py-1 text-xs font-mono"
                          />
                        ) : (
                          row.invoiceNo || '-'
                        )}
                      </td>

                      <td className="px-3 py-3 font-mono text-slate-600 text-[11px]">
                        {isEditing ? (
                          <input
                            value={editFormData.invoiceDate || ''}
                            onChange={(e) => setEditFormData({ ...editFormData, invoiceDate: e.target.value })}
                            className="w-full rounded-lg border border-emerald-500 px-2 py-1 text-xs font-mono"
                          />
                        ) : (
                          row.invoiceDate || '-'
                        )}
                      </td>

                      <td className="px-3 py-3 font-mono font-bold text-slate-700 text-[11px]">
                        {isEditing ? (
                          <input
                            value={editFormData.invoiceDueDate || ''}
                            onChange={(e) => setEditFormData({ ...editFormData, invoiceDueDate: e.target.value })}
                            className="w-full rounded-lg border border-emerald-500 px-2 py-1 text-xs font-mono"
                          />
                        ) : (
                          row.invoiceDueDate || '-'
                        )}
                      </td>

                      <td className="px-3 py-3 text-right font-black text-slate-900">
                        {isEditing ? (
                          <input
                            type="number"
                            value={editFormData.amountPayable || 0}
                            onChange={(e) => setEditFormData({ ...editFormData, amountPayable: Number(e.target.value) || 0 })}
                            className="w-full text-right rounded-lg border border-emerald-500 px-2 py-1 text-xs font-bold"
                          />
                        ) : (
                          formatINR(row.amountPayable)
                        )}
                      </td>

                      <td className="px-3.5 py-3 text-center">
                        {isEditing ? (
                          <select
                            value={editFormData.paymentStatus || 'PENDING'}
                            onChange={(e) => setEditFormData({ ...editFormData, paymentStatus: e.target.value })}
                            className="w-full rounded-lg border border-emerald-500 px-2 py-1 text-xs font-bold"
                          >
                            <option value="PENDING">PENDING</option>
                            <option value="PARTIALLY PAID">PARTIALLY PAID</option>
                            <option value="PAID">PAID</option>
                          </select>
                        ) : (
                          row.paymentStatus === 'PAID' ? (
                            <span className="inline-block rounded-md bg-emerald-600 px-2.5 py-1 text-[11px] font-black text-white shadow-xs">
                              PAID
                            </span>
                          ) : row.paymentStatus === 'PARTIALLY PAID' ? (
                            <span className="inline-block rounded-md bg-sky-200 border border-sky-400 px-2 py-1 text-[10px] font-extrabold text-sky-900 shadow-xs">
                              PARTIALLY PAID
                            </span>
                          ) : (
                            <span className="text-[11px] text-slate-400 font-medium">-</span>
                          )
                        )}
                      </td>

                      <td className="px-3 py-3 text-right font-black text-slate-800">
                        {isEditing ? (
                          <input
                            type="number"
                            value={editFormData.amountBalance || 0}
                            onChange={(e) => setEditFormData({ ...editFormData, amountBalance: Number(e.target.value) || 0 })}
                            className="w-full text-right rounded-lg border border-emerald-500 px-2 py-1 text-xs font-bold"
                          />
                        ) : (
                          row.amountBalance > 0 ? formatINR(row.amountBalance) : '-'
                        )}
                      </td>

                      <td className="px-3.5 py-3 text-center">
                        {isEditing ? (
                          <select
                            value={editFormData.clearanceStatus || 'NOT CLEARED'}
                            onChange={(e) => setEditFormData({ ...editFormData, clearanceStatus: e.target.value })}
                            className="w-full rounded-lg border border-emerald-500 px-2 py-1 text-xs font-bold"
                          >
                            <option value="NOT CLEARED">NOT CLEARED</option>
                            <option value="CLEARED">CLEARED</option>
                          </select>
                        ) : (
                          row.clearanceStatus === 'CLEARED' ? (
                            <span className="inline-block rounded-md bg-emerald-700 px-2.5 py-1 text-[11px] font-black text-white shadow-xs">
                              CLEARED
                            </span>
                          ) : (row.amountBalance > 0 || row.colorTag === 'orange' || row.colorTag === 'red') ? (
                            <span className="inline-block rounded-md bg-red-700 px-2 py-1 text-[10px] font-black text-white shadow-xs">
                              NOT CLEARED
                            </span>
                          ) : (
                            <span className="text-[11px] text-slate-400 font-medium">-</span>
                          )
                        )}
                      </td>

                      <td className="px-3 py-3 font-mono text-slate-700 font-semibold text-[11px]">
                        {isEditing ? (
                          <input
                            placeholder="DD.MM.YYYY"
                            value={editFormData.dateOfPayment || ''}
                            onChange={(e) => setEditFormData({ ...editFormData, dateOfPayment: e.target.value })}
                            className="w-full rounded-lg border border-emerald-500 px-2 py-1 text-xs font-mono"
                          />
                        ) : (
                          row.dateOfPayment || '-'
                        )}
                      </td>

                      <td className="px-3.5 py-3 text-center">
                        <button
                          type="button"
                          onClick={() => handleToggleInvoiceSent(row.id)}
                          className="cursor-pointer transition"
                          title="Click to toggle Invoice Sent status"
                        >
                          {row.invoiceSent ? (
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
                          {isEditing ? (
                            <>
                              <button onClick={saveInlineEdit} className="p-1 rounded bg-emerald-600 text-white hover:bg-emerald-700" title="Save">
                                <Check className="size-3.5" />
                              </button>
                              <button onClick={cancelEditing} className="p-1 rounded bg-slate-300 text-slate-700 hover:bg-slate-400" title="Cancel">
                                <X className="size-3.5" />
                              </button>
                            </>
                          ) : (
                            <>
                              <button onClick={() => startEditing(row)} className="p-1 rounded bg-slate-100 hover:bg-slate-200 text-slate-700" title="Edit row">
                                <Edit2 className="size-3.5" />
                              </button>
                              <button onClick={() => handleDeleteRow(row.id, row.clientName)} className="p-1 rounded bg-red-100 hover:bg-red-200 text-red-600" title="Delete row">
                                <Trash2 className="size-3.5" />
                              </button>
                            </>
                          )}
                        </div>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
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
              <p className="font-bold">✨ Supports All 7 Authentic Worksheets:</p>
              <p className="font-mono text-[11px] text-amber-800">
                CLIENTS Data | Clients info | external service | AUGUST | SEPTEMBER | OCTOBER | NOVEMBER
              </p>
              <p className="text-[11px] text-amber-700">
                You can upload a single multi-tab workbook or individual monthly CSVs. All rows will be parsed, categorized, and made instantly editable!
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

            <div className="flex justify-end pt-2 border-t text-xs">
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
