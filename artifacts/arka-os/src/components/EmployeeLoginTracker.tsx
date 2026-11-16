import { useMemo, useState } from 'react';
import { 
  ArrowRight, 
  CalendarDays, 
  Clock3, 
  Coffee, 
  Search, 
  UserPlus, 
  Users 
} from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import type { Person, Presence, SessionRecord, WorkItem, WorkTask } from '../App';
import { getEffectivePresence } from '../App';

function hours(minutes: number) {
  return `${Math.floor(minutes / 60)}h ${minutes % 60}m`;
}

function formatTimestamp(isoString?: string | null) {
  if (!isoString) return '—';
  try {
    const d = new Date(isoString);
    if (isNaN(d.getTime())) return isoString;
    const now = new Date();
    const isToday = d.toDateString() === now.toDateString();
    const timeStr = d.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    return isToday ? `Today at ${timeStr}` : `${d.toLocaleDateString([], { month: 'short', day: 'numeric' })}, ${timeStr}`;
  } catch {
    return isoString;
  }
}

export interface EmployeeLoginTrackerProps {
  actor: Person;
  people: Person[];
  sessions?: SessionRecord[];
  work?: WorkItem[];
  tasks?: WorkTask[];
  onOpen?: (id: string) => void;
  onNavigate: (path: string) => void;
  onUpdatePresence?: (personId: string, presence: Presence) => void;
}

export function EmployeeLoginTracker({
  actor,
  people,
  sessions = [],
  work = [],
  tasks = [],
  onOpen,
  onNavigate,
  onUpdatePresence
}: EmployeeLoginTrackerProps) {
  const [search, setSearch] = useState('');
  const [filter, setFilter] = useState<'all' | 'online' | 'break' | 'loggedOut' | 'noLogin'>('all');

  const TODAY = new Date().toISOString().slice(0, 10);
  const localToday = new Date().toLocaleDateString('en-CA');
  const isFounderOrHR = actor.role === 'Founder' || actor.role === 'HR Manager';

  // Compute live tracking data for all people in scope
  const trackingData = useMemo(() => {
    // 1. Deduplicate people by email or canonical ID
    const dedupMap = new Map<string, Person>();
    (people || []).filter(Boolean).forEach((member) => {
      let displayName = member.name;
      if (member.id === 'person-abhishek-kn' || member.id === 'usr_abhishek_kn' || displayName === 'person-abhishek-kn') {
        displayName = 'Abhishek KN';
      } else if (member.id === 'person-ashwanth-b' || member.id === 'usr_ashwanth_b' || displayName === 'person-ashwanth-b') {
        displayName = 'Ashwanth b';
      } else if (member.id === 'usr_hr' || member.id === 'person-1789737883615') {
        displayName = 'Sanjana CK';
      }

      const cleanMember = { ...member, name: displayName };
      const key = (member.email || member.id).toLowerCase().trim();
      const existing = dedupMap.get(key);
      if (!existing) {
        dedupMap.set(key, cleanMember);
      } else {
        const existingOnline = existing.presence && existing.presence !== 'Offline';
        const memberOnline = cleanMember.presence && cleanMember.presence !== 'Offline';
        dedupMap.set(key, memberOnline ? cleanMember : existingOnline ? existing : cleanMember);
      }
    });

    const hasRealHR = Array.from(dedupMap.values()).some((p) => p.id !== 'usr_hr' && p.role === 'HR Manager');
    const uniquePeople = Array.from(dedupMap.values()).filter((p) => !(hasRealHR && p.id === 'usr_hr'));

    return uniquePeople.map((member) => {
      const effectivePres = getEffectivePresence(member, actor.id, sessions);
      const isAbhishek = member.id === 'person-abhishek-kn' || member.id === 'usr_abhishek_kn';
      const isAshwanth = member.id === 'person-ashwanth-b' || member.id === 'usr_ashwanth_b';

      // Member today sessions
      const todaySessions = (sessions || [])
        .filter((s) => {
          if (s.date !== TODAY && s.date !== localToday) return false;
          if (isAbhishek) return s.userId === 'person-abhishek-kn' || s.userId === 'usr_abhishek_kn';
          if (isAshwanth) return s.userId === 'person-ashwanth-b' || s.userId === 'usr_ashwanth_b';
          return s.userId === member.id;
        })
        .sort((a, b) => (a.loginAt || '').localeCompare(b.loginAt || ''));

      const activeSess = todaySessions.find((s) => !s.logoutAt);

      const firstLogin =
        todaySessions[0]?.loginAt ||
        (member.loginAt && (member.loginAt.startsWith(TODAY) || member.loginAt.startsWith(localToday))
          ? member.loginAt
          : null) ||
        (effectivePres === 'Online' ? member.loginAt || new Date().toISOString() : null);

      const lastLogout = member.logoutAt && todaySessions.length > 0 && !activeSess ? member.logoutAt : null;

      // Cumulative worked minutes today
      let totalWorkedMinutes = todaySessions.reduce((sum, s) => {
        if (!s.logoutAt) {
          const live = Math.max(0, Math.floor((Date.now() - new Date(s.loginAt).getTime()) / 60000));
          return sum + Math.min(840, live);
        }
        return sum + (s.durationMinutes || 0);
      }, 0);

      if (totalWorkedMinutes === 0 && effectivePres === 'Online' && firstLogin) {
        totalWorkedMinutes = Math.max(1, Math.floor((Date.now() - new Date(firstLogin).getTime()) / 60000));
      }

      // 9-Hour Shift Target (540 minutes)
      const shiftGoalMinutes = 540;
      const progressPercent = Math.min(100, Math.round((totalWorkedMinutes / shiftGoalMinutes) * 100));
      const isShiftCompleted = totalWorkedMinutes >= shiftGoalMinutes;
      const remainingMinutes = Math.max(0, shiftGoalMinutes - totalWorkedMinutes);

      let targetLogoutStr: string | null = null;
      if (firstLogin) {
        try {
          const targetD =
            activeSess && remainingMinutes > 0
              ? new Date(Date.now() + remainingMinutes * 60000)
              : new Date(new Date(firstLogin).getTime() + 9 * 60 * 60 * 1000);
          targetLogoutStr = targetD.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
        } catch {}
      }

      // Member current task / work
      const activeTask = tasks.find((t) => {
        if (t.stage === 'Completed' || t.stage === 'Approved') return false;
        if (isAbhishek) return t.assigneeId === 'person-abhishek-kn' || t.assigneeId === 'usr_abhishek_kn';
        if (isAshwanth) return t.assigneeId === 'person-ashwanth-b' || t.assigneeId === 'usr_ashwanth_b';
        return t.assigneeId === member.id;
      });
      const activeWork = activeTask
        ? work.find((w) => w.id === activeTask.workId)
        : work.find((w) => w.managerId === member.id && w.stage !== 'Completed');

      // Status classification
      const isOnline = effectivePres === 'Online';
      const isOnBreak = effectivePres === 'Break' || effectivePres === 'Lunch';
      const isLoggedOut = !isOnline && !isOnBreak && Boolean(firstLogin || todaySessions.length > 0);
      const isNoLogin = !isOnline && !isOnBreak && !isLoggedOut;

      const loginCount = Math.max(todaySessions.length, (firstLogin ? 1 : 0));

      return {
        member,
        effectivePres,
        firstLogin,
        lastLogout,
        totalWorkedMinutes,
        progressPercent,
        isShiftCompleted,
        remainingMinutes,
        targetLogoutStr,
        activeTask,
        activeWork,
        isOnline,
        isOnBreak,
        isLoggedOut,
        isNoLogin,
        loginCount,
        todaySessions
      };
    });
  }, [people, sessions, actor.id, localToday, tasks, work, TODAY]);

  // Aggregate counts
  const counts = useMemo(() => {
    return {
      total: trackingData.length,
      online: trackingData.filter((d) => d.isOnline).length,
      break: trackingData.filter((d) => d.isOnBreak).length,
      loggedOut: trackingData.filter((d) => d.isLoggedOut).length,
      noLogin: trackingData.filter((d) => d.isNoLogin).length,
    };
  }, [trackingData]);

  // Filtered rows
  const filteredRows = useMemo(() => {
    return trackingData.filter((row) => {
      if (filter === 'online' && !row.isOnline) return false;
      if (filter === 'break' && !row.isOnBreak) return false;
      if (filter === 'loggedOut' && !row.isLoggedOut) return false;
      if (filter === 'noLogin' && !row.isNoLogin) return false;

      if (search.trim()) {
        const q = search.toLowerCase();
        const matchesName = (row.member?.name || "").toLowerCase().includes(q);
        const matchesTitle = (row.member.title || '').toLowerCase().includes(q);
        const matchesRole = (row.member.role || '').toLowerCase().includes(q);
        const matchesEmail = (row.member.email || '').toLowerCase().includes(q);
        return matchesName || matchesTitle || matchesRole || matchesEmail;
      }
      return true;
    });
  }, [trackingData, filter, search]);

  return (
    <Card className="overflow-hidden border-[hsl(var(--border))] shadow-sm">
      {/* Top Header Banner */}
      <div className="border-b border-[hsl(var(--border))] bg-gradient-to-r from-slate-900 via-slate-950 to-black px-6 py-5 text-white">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div>
            <div className="flex items-center gap-2">
              <span className="flex size-2.5 items-center justify-center">
                <span className="relative flex size-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex size-2 rounded-full bg-emerald-500"></span>
                </span>
              </span>
              <span className="text-[10px] font-black uppercase tracking-[0.2em] text-[#f8c329]">
                Live Attendance & Login Monitor
              </span>
              <span className="rounded-md border border-white/15 bg-white/10 px-2 py-0.5 text-[10px] font-semibold text-white/80">
                {isFounderOrHR ? 'Super Admin Overview · All Employees' : 'Manager Admin · My Team'}
              </span>
            </div>
            <h2 className="mt-1.5 text-xl font-black tracking-tight text-white flex items-center gap-2">
              Employee Login & Shift Tracker
            </h2>
            <p className="mt-1 text-xs text-white/60">
              Real-time monitoring of employee login times, online presence, and 9-hour workday progress.
            </p>
          </div>

          <div className="flex items-center gap-2">
            {isFounderOrHR && (
              <Button
                variant="ghost"
                size="sm"
                onClick={() => onNavigate('/people')}
                className="border border-white/20 bg-white/5 text-white hover:bg-white/15 text-xs font-semibold"
              >
                <UserPlus className="size-3.5 mr-1" />
                Directory
              </Button>
            )}
            <Button
              variant="outline"
              size="sm"
              onClick={() => onNavigate('/attendance')}
              className="border-white/20 bg-white/10 text-white hover:bg-white/20 hover:text-white text-xs font-semibold"
            >
              <CalendarDays className="size-3.5 mr-1" />
              Full Attendance
              <ArrowRight className="size-3.5 ml-1" />
            </Button>
          </div>
        </div>

        {/* Live Stat Badges */}
        <div className="mt-5 grid grid-cols-2 gap-2 sm:grid-cols-4 lg:grid-cols-5">
          <div 
            onClick={() => setFilter('all')}
            className={`cursor-pointer rounded-xl border p-3 transition ${filter === 'all' ? 'border-[#f8c329] bg-white/15 shadow-sm' : 'border-white/10 bg-white/5 hover:bg-white/10'}`}
          >
            <div className="text-[10px] font-bold uppercase tracking-wider text-white/60">Total Tracked</div>
            <div className="mt-1 text-2xl font-black text-white">{counts.total}</div>
            <div className="text-[10px] text-white/40">Employees in scope</div>
          </div>

          <div 
            onClick={() => setFilter('online')}
            className={`cursor-pointer rounded-xl border p-3 transition ${filter === 'online' ? 'border-emerald-400 bg-emerald-950/40 shadow-sm' : 'border-white/10 bg-white/5 hover:bg-white/10'}`}
          >
            <div className="flex items-center justify-between">
              <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-300">Active Now</span>
              <span className="size-2 rounded-full bg-emerald-400 animate-pulse" />
            </div>
            <div className="mt-1 text-2xl font-black text-emerald-400">{counts.online}</div>
            <div className="text-[10px] text-emerald-200/60">Currently online</div>
          </div>

          <div 
            onClick={() => setFilter('break')}
            className={`cursor-pointer rounded-xl border p-3 transition ${filter === 'break' ? 'border-amber-400 bg-amber-950/40 shadow-sm' : 'border-white/10 bg-white/5 hover:bg-white/10'}`}
          >
            <div className="text-[10px] font-bold uppercase tracking-wider text-amber-300">On Break / Lunch</div>
            <div className="mt-1 text-2xl font-black text-amber-400">{counts.break}</div>
            <div className="text-[10px] text-amber-200/60">Stepped away</div>
          </div>

          <div 
            onClick={() => setFilter('loggedOut')}
            className={`cursor-pointer rounded-xl border p-3 transition ${filter === 'loggedOut' ? 'border-sky-400 bg-sky-950/40 shadow-sm' : 'border-white/10 bg-white/5 hover:bg-white/10'}`}
          >
            <div className="text-[10px] font-bold uppercase tracking-wider text-sky-300">Logged Out Today</div>
            <div className="mt-1 text-2xl font-black text-sky-400">{counts.loggedOut}</div>
            <div className="text-[10px] text-sky-200/60">Shift completed / left</div>
          </div>

          <div 
            onClick={() => setFilter('noLogin')}
            className={`cursor-pointer rounded-xl border p-3 transition ${filter === 'noLogin' ? 'border-slate-400 bg-slate-800/60 shadow-sm' : 'border-white/10 bg-white/5 hover:bg-white/10'}`}
          >
            <div className="text-[10px] font-bold uppercase tracking-wider text-slate-300">No Login Yet</div>
            <div className="mt-1 text-2xl font-black text-slate-300">{counts.noLogin}</div>
            <div className="text-[10px] text-white/40">Not signed in today</div>
          </div>
        </div>
      </div>

      {/* Filter Tabs & Search Controls */}
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-[hsl(var(--border))] bg-slate-50/70 p-4 px-6">
        <div className="flex flex-wrap items-center gap-1.5">
          <button
            type="button"
            onClick={() => setFilter('all')}
            className={`rounded-lg px-3 py-1.5 text-xs font-bold transition ${filter === 'all' ? 'bg-slate-900 text-white shadow-xs' : 'bg-white text-slate-600 border border-slate-200 hover:bg-slate-100'}`}
          >
            All ({counts.total})
          </button>
          <button
            type="button"
            onClick={() => setFilter('online')}
            className={`flex items-center gap-1.5 rounded-lg px-3 py-1.5 text-xs font-bold transition ${filter === 'online' ? 'bg-emerald-600 text-white shadow-xs' : 'bg-white text-emerald-700 border border-emerald-200 hover:bg-emerald-50'}`}
          >
            <span className="size-2 rounded-full bg-emerald-400 animate-pulse" />
            Online ({counts.online})
          </button>
          <button
            type="button"
            onClick={() => setFilter('break')}
            className={`flex items-center gap-1.5 rounded-lg px-3 py-1.5 text-xs font-bold transition ${filter === 'break' ? 'bg-amber-600 text-white shadow-xs' : 'bg-white text-amber-700 border border-amber-200 hover:bg-amber-50'}`}
          >
            <Coffee className="size-3" />
            Break / Lunch ({counts.break})
          </button>
          <button
            type="button"
            onClick={() => setFilter('loggedOut')}
            className={`flex items-center gap-1.5 rounded-lg px-3 py-1.5 text-xs font-bold transition ${filter === 'loggedOut' ? 'bg-sky-700 text-white shadow-xs' : 'bg-white text-slate-600 border border-slate-200 hover:bg-slate-100'}`}
          >
            Logged Out ({counts.loggedOut})
          </button>
          <button
            type="button"
            onClick={() => setFilter('noLogin')}
            className={`flex items-center gap-1.5 rounded-lg px-3 py-1.5 text-xs font-bold transition ${filter === 'noLogin' ? 'bg-slate-700 text-white shadow-xs' : 'bg-white text-slate-500 border border-slate-200 hover:bg-slate-100'}`}
          >
            No Login ({counts.noLogin})
          </button>
        </div>

        <div className="relative min-w-[240px] flex-1 max-w-sm">
          <Search className="absolute left-3 top-1/2 size-3.5 -translate-y-1/2 text-slate-400" />
          <input
            type="text"
            placeholder="Search employee by name, title, role..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full rounded-lg border border-slate-200 bg-white py-1.5 pl-9 pr-3 text-xs text-slate-800 placeholder-slate-400 outline-none transition focus:border-amber-500 focus:ring-1 focus:ring-amber-500"
          />
          {search && (
            <button
              onClick={() => setSearch('')}
              className="absolute right-2.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 text-xs font-bold"
            >
              ×
            </button>
          )}
        </div>
      </div>

      {/* Employee List Table */}
      <div className="divide-y divide-[hsl(var(--border))]">
        <div className="grid grid-cols-[1.4fr_0.9fr_1.3fr_1.4fr_1fr] bg-slate-100/70 px-6 py-2.5 text-[10px] font-bold uppercase tracking-[0.14em] text-slate-500">
          <span>Employee</span>
          <span>Live Presence</span>
          <span>Login / Logout Time</span>
          <span>9-Hour Shift Progress</span>
          <span>Active Task</span>
        </div>

        {filteredRows.map(({
          member,
          effectivePres,
          firstLogin,
          lastLogout,
          totalWorkedMinutes,
          progressPercent,
          isShiftCompleted,
          remainingMinutes,
          targetLogoutStr,
          activeTask,
          activeWork,
          isOnline,
          isOnBreak,
          isLoggedOut,
          loginCount
        }) => {
          return (
            <div
              key={member.id}
              onClick={() => onOpen?.(activeTask ? activeTask.workId : activeWork ? activeWork.id : '')}
              className="grid grid-cols-[1.4fr_0.9fr_1.3fr_1.4fr_1fr] items-center px-6 py-3.5 text-sm transition hover:bg-amber-50/30 cursor-pointer"
            >
              {/* Employee Column */}
              <div className="flex items-center gap-3 pr-2">
                <div className="grid size-9 shrink-0 place-items-center rounded-xl bg-slate-900 font-bold text-xs text-[#f8c329] shadow-xs">
                  {member.name.split(' ').filter(Boolean).map((p) => p[0]).join('').toUpperCase().slice(0, 2)}
                </div>
                <div className="min-w-0 flex-1">
                  <div className="font-bold text-slate-900 truncate hover:text-amber-700 flex items-center gap-1.5">
                    {member.name}
                    {member.role === 'Founder' && (
                      <span className="rounded bg-purple-100 px-1 py-0.2 text-[9px] font-bold text-purple-700">Founder</span>
                    )}
                    {member.role === 'Manager' && (
                      <span className="rounded bg-blue-100 px-1 py-0.2 text-[9px] font-bold text-blue-700">Manager</span>
                    )}
                    {member.role === 'HR Manager' && (
                      <span className="rounded bg-rose-100 px-1 py-0.2 text-[9px] font-bold text-rose-700">HR</span>
                    )}
                  </div>
                  <div className="text-xs text-slate-500 truncate">{member.title}</div>
                </div>
              </div>

              {/* Live Presence Column */}
              <div className="flex items-center gap-2" onClick={(e) => e.stopPropagation()}>
                <span className={`size-2.5 rounded-full ${
                  isOnline 
                    ? 'bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.8)]' 
                    : isOnBreak 
                    ? 'bg-amber-400 shadow-[0_0_8px_rgba(251,191,36,0.8)]' 
                    : isLoggedOut 
                    ? 'bg-sky-400' 
                    : 'bg-slate-300'
                }`} />

                {onUpdatePresence && isFounderOrHR ? (
                  <select
                    value={effectivePres}
                    onChange={(e) => onUpdatePresence(member.id, e.target.value as Presence)}
                    className="rounded-lg border border-slate-200 bg-white px-2 py-1 text-xs font-bold text-slate-800 outline-none hover:border-slate-400 focus:ring-1 focus:ring-amber-500 cursor-pointer shadow-2xs"
                  >
                    <option value="Online">🟢 Online</option>
                    <option value="Break">☕ Break</option>
                    <option value="Lunch">🍱 Lunch</option>
                    <option value="Idle">🟡 Idle</option>
                    <option value="Offline">⚪ Offline</option>
                  </select>
                ) : (
                  <span className={`text-xs font-bold px-2 py-0.5 rounded-full ${
                    isOnline 
                      ? 'bg-emerald-50 text-emerald-800 border border-emerald-200' 
                      : isOnBreak 
                      ? 'bg-amber-50 text-amber-800 border border-amber-200' 
                      : isLoggedOut 
                      ? 'bg-sky-50 text-sky-800 border border-sky-200' 
                      : 'bg-slate-100 text-slate-500'
                  }`}>
                    {effectivePres === 'Online' ? '🟢 Online' : effectivePres === 'Break' ? '☕ Break' : effectivePres === 'Lunch' ? '🍱 Lunch' : isLoggedOut ? '⚪ Logged Out' : 'Offline'}
                  </span>
                )}
              </div>

              {/* Login / Logout Time Column */}
              <div className="pr-2">
                {firstLogin ? (
                  <div className="space-y-1">
                    <div className="flex items-center gap-1.5 flex-wrap">
                      <span className="inline-flex items-center gap-1 rounded bg-emerald-50 border border-emerald-200/90 px-1.5 py-0.5 text-xs font-bold text-emerald-800">
                        In: {formatTimestamp(firstLogin)}
                      </span>
                      {loginCount > 1 ? (
                        <span className="inline-flex items-center gap-1 rounded bg-purple-50 border border-purple-200 px-1.5 py-0.5 text-[11px] font-black text-purple-800" title={`${loginCount} logins today. Work time resumed!`}>
                          🔄 {loginCount} Logins (Resumed)
                        </span>
                      ) : (
                        <span className="inline-flex items-center gap-1 rounded bg-slate-100 px-1.5 py-0.5 text-[10px] font-semibold text-slate-600">
                          1st Login
                        </span>
                      )}
                      {lastLogout && (
                        <span className="inline-flex items-center gap-1 rounded bg-slate-100 px-1.5 py-0.5 text-[11px] font-semibold text-slate-600">
                          Out: {formatTimestamp(lastLogout)}
                        </span>
                      )}
                      {isOnline && !lastLogout && (
                        <span className="text-[10px] font-bold text-emerald-600 flex items-center gap-1">
                          <span className="size-1.5 rounded-full bg-emerald-500 animate-pulse" /> Active
                        </span>
                      )}
                    </div>
                    {targetLogoutStr && (
                      <div className="text-[11px] text-slate-500">
                        Target Out: <strong className="text-slate-700">{targetLogoutStr}</strong>
                      </div>
                    )}
                  </div>
                ) : (
                  <div className="text-xs text-slate-400 italic">
                    Not logged in today
                    {member.lastActiveAt && (
                      <div className="text-[10px] text-slate-400 not-italic font-normal">
                        Last seen: {formatTimestamp(member.lastActiveAt)}
                      </div>
                    )}
                  </div>
                )}
              </div>

              {/* 9-Hour Shift Progress Column */}
              <div className="pr-4">
                {firstLogin ? (
                  <div className="space-y-1.5">
                    <div className="flex items-center justify-between text-xs">
                      <span className="font-extrabold text-slate-800 flex items-center gap-1">
                        <Clock3 className="size-3 text-slate-400" />
                        {hours(totalWorkedMinutes)} <span className="text-slate-400 font-normal">/ 9h</span>
                      </span>
                      <span className={`text-[11px] font-black ${isShiftCompleted ? 'text-emerald-700' : 'text-slate-600'}`}>
                        {progressPercent}%
                      </span>
                    </div>

                    {/* Progress Bar */}
                    <div className="h-2 w-full overflow-hidden rounded-full bg-slate-100 border border-slate-200/80">
                      <div 
                        className={`h-full transition-all duration-500 rounded-full ${
                          isShiftCompleted 
                            ? 'bg-gradient-to-r from-emerald-500 to-teal-500' 
                            : totalWorkedMinutes >= 270 
                            ? 'bg-gradient-to-r from-amber-400 to-emerald-500' 
                            : 'bg-gradient-to-r from-[#f8c329] to-amber-500'
                        }`} 
                        style={{ width: `${progressPercent}%` }}
                      />
                    </div>

                    <div className="text-[10px] text-slate-500 flex items-center justify-between">
                      {isShiftCompleted ? (
                        <span className="font-bold text-emerald-700">Full 9h Completed 🎉</span>
                      ) : (
                        <span>{hours(remainingMinutes)} remaining{loginCount > 1 ? ' · Resumed' : ''}</span>
                      )}
                      {targetLogoutStr && (
                        <span>{loginCount > 1 ? `${loginCount} Logins` : 'Goal: 9 Hours'}</span>
                      )}
                    </div>
                  </div>
                ) : (
                  <div className="text-xs text-slate-400">
                    <div className="h-1.5 w-full rounded-full bg-slate-100" />
                    <span className="text-[10px] text-slate-400 mt-1 block">0h 0m logged</span>
                  </div>
                )}
              </div>

              {/* Active Task Column */}
              <div>
                {activeTask ? (
                  <div 
                    onClick={(e) => { e.stopPropagation(); onOpen?.(activeTask.workId); }}
                    className="group flex flex-col text-left hover:text-amber-700"
                  >
                    <span className="font-semibold text-xs text-slate-900 group-hover:text-amber-700 truncate max-w-[150px]">
                      {activeTask.title}
                    </span>
                    <span className="text-[10px] text-slate-500 truncate max-w-[150px]">
                      {activeWork?.title || 'General Work'} · {activeTask.stage}
                    </span>
                  </div>
                ) : activeWork ? (
                  <div 
                    onClick={(e) => { e.stopPropagation(); onOpen?.(activeWork.id); }}
                    className="group flex flex-col text-left hover:text-amber-700"
                  >
                    <span className="font-semibold text-xs text-slate-900 group-hover:text-amber-700 truncate max-w-[150px]">
                      {activeWork.title}
                    </span>
                    <span className="text-[10px] text-slate-500">{activeWork.stage}</span>
                  </div>
                ) : (
                  <span className="text-xs text-slate-400">No active task</span>
                )}
              </div>
            </div>
          );
        })}

        {filteredRows.length === 0 && (
          <div className="py-12 text-center">
            <Users className="mx-auto size-8 text-slate-300" />
            <h3 className="mt-2 text-sm font-bold text-slate-700">No employees found</h3>
            <p className="mt-1 text-xs text-slate-400">
              {search ? `No employees match "${search}".` : 'No employees currently in this filter view.'}
            </p>
          </div>
        )}
      </div>
    </Card>
  );
}
