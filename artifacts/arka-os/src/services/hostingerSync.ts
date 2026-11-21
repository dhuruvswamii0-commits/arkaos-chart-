// Hostinger Multi-Device Real-Time Synchronization Service
import type { Presence, SessionRecord } from '../App';

function getSyncApiUrl(action: string): string {
  if (typeof window !== 'undefined') {
    if (window.location.protocol === 'file:') {
      return `https://hub.arkadigitalmedia.com/api/sync.php?action=${action}`;
    }
    return `${window.location.origin}/api/sync.php?action=${action}`;
  }
  return `https://hub.arkadigitalmedia.com/api/sync.php?action=${action}`;
}

export async function syncPresenceToHostinger(
  userId: string,
  presence: Presence,
  loginAt?: string | null,
  logoutAt?: string | null,
  name?: string | null,
  role?: string | null
): Promise<void> {
  try {
    const url = getSyncApiUrl('presence');
    await fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ userId, presence, loginAt, logoutAt, name, role })
    });
  } catch {}
}

export async function sendHeartbeatToHostinger(
  userId: string,
  presence: Presence,
  name?: string,
  role?: string
): Promise<void> {
  try {
    const url = getSyncApiUrl('heartbeat');
    await fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ userId, presence, name, role })
    });
  } catch {}
}

export async function syncSessionToHostinger(session: SessionRecord): Promise<void> {
  try {
    const url = getSyncApiUrl('session');
    await fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ session })
    });
  } catch {}
}

// User Sync
export async function syncUserToHostinger(user: any): Promise<void> {
  try {
    const url = getSyncApiUrl('addUser');
    await fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ user })
    });
  } catch (e) {
    console.warn('Hostinger syncUser warning:', e);
  }
}

export async function syncDeleteUserFromHostinger(userId: string): Promise<void> {
  try {
    const url = getSyncApiUrl('deleteUser');
    await fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ userId })
    });
  } catch (e) {
    console.warn('Hostinger deleteUser warning:', e);
  }
}

// Task Sync
export async function syncTaskToHostinger(task: any): Promise<void> {
  try {
    const url = getSyncApiUrl('addTask');
    await fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ task })
    });
  } catch (e) {
    console.warn('Hostinger syncTask warning:', e);
  }
}

export async function syncUpdateTaskToHostinger(taskId: string, patch: any): Promise<void> {
  try {
    const url = getSyncApiUrl('updateTask');
    await fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ taskId, patch })
    });
  } catch (e) {
    console.warn('Hostinger updateTask warning:', e);
  }
}

export async function syncDeleteTaskFromHostinger(taskId: string): Promise<void> {
  try {
    const url = getSyncApiUrl('deleteTask');
    await fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ taskId })
    });
  } catch (e) {
    console.warn('Hostinger deleteTask warning:', e);
  }
}

// Work Sync
export async function syncWorkToHostinger(work: any): Promise<void> {
  try {
    const url = getSyncApiUrl('addWork');
    await fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ work })
    });
  } catch (e) {
    console.warn('Hostinger syncWork warning:', e);
  }
}

export async function syncUpdateWorkToHostinger(workId: string, patch: any): Promise<void> {
  try {
    const url = getSyncApiUrl('updateWork');
    await fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ workId, patch })
    });
  } catch (e) {
    console.warn('Hostinger updateWork warning:', e);
  }
}

export async function syncDeleteWorkFromHostinger(workId: string): Promise<void> {
  try {
    const url = getSyncApiUrl('deleteWork');
    await fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ workId })
    });
  } catch (e) {
    console.warn('Hostinger deleteWork warning:', e);
  }
}

// Calendar & Shoots Sync
export async function syncCalendarItemToHostinger(item: any): Promise<void> {
  try {
    const url = getSyncApiUrl('addCalendar');
    await fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ item })
    });
  } catch (e) {
    console.warn('Hostinger syncCalendar warning:', e);
  }
}

export async function syncDeleteCalendarItemFromHostinger(id: string): Promise<void> {
  try {
    const url = getSyncApiUrl('deleteCalendar');
    await fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ id })
    });
  } catch (e) {
    console.warn('Hostinger deleteCalendar warning:', e);
  }
}

// Leaves & Shift Flex Sync
export async function syncLeaveToHostinger(leave: any): Promise<void> {
  try {
    const url = getSyncApiUrl('addLeave');
    await fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ leave })
    });
  } catch (e) {
    console.warn('Hostinger syncLeave warning:', e);
  }
}

export async function syncUpdateLeaveToHostinger(leaveId: string, patch: any): Promise<void> {
  try {
    const url = getSyncApiUrl('updateLeave');
    await fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ leaveId, patch })
    });
  } catch (e) {
    console.warn('Hostinger updateLeave warning:', e);
  }
}

export async function syncDeleteLeaveFromHostinger(leaveId: string): Promise<void> {
  try {
    const url = getSyncApiUrl('deleteLeave');
    await fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ leaveId })
    });
  } catch (e) {
    console.warn('Hostinger deleteLeave warning:', e);
  }
}

// Leave Balances & Quotas Sync
export async function syncLeaveBalanceToHostinger(balance: any): Promise<void> {
  try {
    const url = getSyncApiUrl('updateLeaveBalance');
    await fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ balance })
    });
  } catch (e) {
    console.warn('Hostinger syncLeaveBalance warning:', e);
  }
}

export async function fetchLiveSyncFromHostinger(): Promise<{
  users: Record<string, any>;
  sessions: SessionRecord[];
  tasks?: any[];
  work?: any[];
  calendar?: any[];
  leaves?: any[];
  leave_balances?: Record<string, any>;
  leads?: any[];
} | null> {
  try {
    const url = `${getSyncApiUrl('get')}&_t=${Date.now()}`;
    const res = await fetch(url, { cache: 'no-store' });
    if (res.ok) {
      const data = await res.json();
      if (data?.ok) {
        return data;
      }
    }
  } catch {}
  return null;
}

export async function syncLeadToHostinger(lead: any): Promise<void> {
  try {
    const url = getSyncApiUrl('addLead');
    await fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ lead })
    });
  } catch {}
}

export async function syncDeleteLeadFromHostinger(leadId: string): Promise<void> {
  try {
    const url = getSyncApiUrl('deleteLead');
    await fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ id: leadId })
    });
  } catch {}
}
