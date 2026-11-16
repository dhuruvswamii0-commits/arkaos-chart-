import { initializeApp, getApps, getApp, type FirebaseApp } from 'firebase/app';
import { getAuth, type Auth } from 'firebase/auth';
import {
  getFirestore,
  collection,
  doc,
  setDoc,
  getDocs,
  getDoc,
  updateDoc,
  deleteDoc,
  onSnapshot,
  query,
  orderBy,
  type Firestore,
  type Unsubscribe,
} from 'firebase/firestore';

const env = import.meta.env;

// Allow stored custom Firebase config if founder configured one in UI
function getActiveFirebaseConfig() {
  try {
    if (typeof window !== 'undefined') {
      const stored = localStorage.getItem('arka_custom_firebase_config');
      if (stored) {
        const parsed = JSON.parse(stored);
        if (parsed.apiKey && parsed.projectId) return parsed;
      }
    }
  } catch {}

  return {
    apiKey: env.VITE_FIREBASE_API_KEY || "AIzaSyArkaOsProductionUnifiedKey2026",
    authDomain: env.VITE_FIREBASE_AUTH_DOMAIN || "arka-os-production.firebaseapp.com",
    projectId: env.VITE_FIREBASE_PROJECT_ID || "arka-os-production",
    storageBucket: env.VITE_FIREBASE_STORAGE_BUCKET || "arka-os-production.appspot.com",
    messagingSenderId: env.VITE_FIREBASE_MESSAGING_SENDER_ID || "1029384756",
    appId: env.VITE_FIREBASE_APP_ID || "1:1029384756:web:arka7890abcdef",
  };
}

export const firebaseConfig = getActiveFirebaseConfig();

let app: FirebaseApp;
try {
  app = getApps().length > 0 ? getApp() : initializeApp(firebaseConfig);
} catch (e) {
  console.warn('Firebase init warning:', e);
  app = initializeApp(firebaseConfig);
}

export const firebaseApp = app;
export const auth: Auth = getAuth(app);
export const db: Firestore = getFirestore(app);

// Data Types
export interface FirebasePerson {
  id: string;
  name: string;
  email: string;
  password?: string;
  role: 'Founder' | 'Manager' | 'Team member' | 'HR Manager';
  title: string;
  department?: string;
  managerId: string | null;
  presence: 'Online' | 'Break' | 'Lunch' | 'Idle' | 'Offline';
  lastActiveAt: string;
  loginAt?: string | null;
  logoutAt?: string | null;
  sessionMinutes: number;
  taskMinutes: number;
}

// Initial Clean Data - ONLY Monika S & Eshwar SP as Founders
export const INITIAL_FOUNDER_PEOPLE: FirebasePerson[] = [
  {
    id: 'usr_founder',
    name: 'Monika S',
    email: 'monika@arkadigitalmedia.com',
    password: 'admin1234',
    role: 'Founder',
    title: 'Founder / CEO',
    department: 'Executive',
    managerId: null,
    presence: 'Offline',
    lastActiveAt: new Date().toISOString(),
    sessionMinutes: 0,
    taskMinutes: 0,
  },
  {
    id: 'usr_founder_eshwar',
    name: 'Eshwar SP',
    email: 'eshwar@arkadigitalmedia.com',
    password: 'admin1234',
    role: 'Founder',
    title: 'Co-Founder & COO',
    department: 'Executive',
    managerId: null,
    presence: 'Offline',
    lastActiveAt: new Date().toISOString(),
    sessionMinutes: 0,
    taskMinutes: 0,
  },
];

// Helper to sanitize Firestore documents (Firestore does not accept undefined values)
function sanitizeForFirestore<T>(data: T): Record<string, any> {
  const clean: Record<string, any> = {};
  for (const [k, v] of Object.entries(data as any)) {
    if (v !== undefined) {
      clean[k] = v;
    } else {
      clean[k] = null;
    }
  }
  return clean;
}

// ======================== FIRESTORE USER OPERATIONS ========================
export async function syncUserToFirestore(user: any): Promise<void> {
  try {
    const userDocRef = doc(db, 'users', user.id);
    await setDoc(userDocRef, { ...sanitizeForFirestore(user), updatedAt: new Date().toISOString() }, { merge: true });
  } catch (err) {
    console.warn('Firestore syncUser warning:', err);
  }
}

// Real-time Firestore Users Listener (Instantly broadcasts online presence across devices)
export function subscribeToUsersFromFirestore(onUpdate: (users: any[]) => void): Unsubscribe {
  try {
    const q = collection(db, 'users');
    return onSnapshot(q, (snapshot) => {
      const items: any[] = [];
      snapshot.forEach((d) => items.push({ id: d.id, ...d.data() }));
      if (items.length > 0) {
        onUpdate(items);
      }
    }, (err) => {
      console.warn('Realtime Firestore user subscription notice:', err);
    });
  } catch (err) {
    console.warn('Realtime Firestore subscription setup error:', err);
    return () => {};
  }
}

export async function fetchUsersFromFirestore(): Promise<any[]> {
  try {
    const snapshot = await getDocs(collection(db, 'users'));
    if (!snapshot.empty) {
      const items: any[] = [];
      snapshot.forEach((d) => items.push({ id: d.id, ...d.data() }));
      return items;
    }
  } catch (err) {
    console.warn('Firestore fetchUsers warning:', err);
  }
  return [];
}

export async function deleteUserFromFirestore(userId: string): Promise<void> {
  try {
    await deleteDoc(doc(db, 'users', userId));
  } catch (err) {
    console.warn('Firestore deleteUser warning:', err);
  }
}

// ======================== FIRESTORE WORK DELIVERABLES ========================
export async function syncWorkToFirestore(work: any): Promise<void> {
  try {
    const workDocRef = doc(db, 'work', work.id);
    await setDoc(workDocRef, { ...sanitizeForFirestore(work), updatedAt: new Date().toISOString() }, { merge: true });
  } catch (err) {
    console.warn('Firestore syncWork warning:', err);
  }
}

export async function deleteWorkFromFirestore(workId: string): Promise<void> {
  try {
    await deleteDoc(doc(db, 'work', workId));
  } catch (err) {
    console.warn('Firestore deleteWork warning:', err);
  }
}

export async function fetchWorkFromFirestore(): Promise<any[]> {
  try {
    const snapshot = await getDocs(collection(db, 'work'));
    if (!snapshot.empty) {
      const items: any[] = [];
      snapshot.forEach((d) => items.push(d.data()));
      return items;
    }
  } catch (err) {
    console.warn('Firestore fetchWork warning:', err);
  }
  return [];
}

export function subscribeToWorkFromFirestore(onUpdate: (work: any[]) => void): Unsubscribe {
  try {
    const colRef = collection(db, 'work');
    return onSnapshot(colRef, (snapshot) => {
      const items: any[] = [];
      snapshot.forEach((d) => items.push({ id: d.id, ...d.data() }));
      if (items.length > 0) {
        onUpdate(items);
      }
    }, (err) => {
      console.warn('Work subscription error:', err);
    });
  } catch (err) {
    console.warn('subscribeToWork error:', err);
    return () => {};
  }
}

// ======================== FIRESTORE TASKS ========================
export async function syncTaskToFirestore(task: any): Promise<void> {
  try {
    const taskDocRef = doc(db, 'tasks', task.id);
    await setDoc(taskDocRef, { ...sanitizeForFirestore(task), updatedAt: new Date().toISOString() }, { merge: true });
  } catch (err) {
    console.warn('Firestore syncTask warning:', err);
  }
}

export function subscribeToTasksFromFirestore(onUpdate: (tasks: any[]) => void): Unsubscribe {
  try {
    const colRef = collection(db, 'tasks');
    return onSnapshot(colRef, (snapshot) => {
      const items: any[] = [];
      snapshot.forEach((d) => items.push({ id: d.id, ...d.data() }));
      if (items.length > 0) {
        onUpdate(items);
      }
    }, (err) => {
      console.warn('Tasks subscription error:', err);
    });
  } catch (err) {
    console.warn('subscribeToTasks error:', err);
    return () => {};
  }
}

export async function deleteTaskFromFirestore(taskId: string): Promise<void> {
  try {
    await deleteDoc(doc(db, 'tasks', taskId));
  } catch (err) {
    console.warn('Firestore deleteTask warning:', err);
  }
}

export async function fetchTasksFromFirestore(): Promise<any[]> {
  try {
    const snapshot = await getDocs(collection(db, 'tasks'));
    if (!snapshot.empty) {
      const items: any[] = [];
      snapshot.forEach((d) => items.push({ id: d.id, ...d.data() }));
      return items;
    }
  } catch (err) {
    console.warn('Firestore fetchTasks warning:', err);
  }
  return [];
}

// ======================== FIRESTORE PRESENCE & SESSIONS ========================
export async function syncPresenceToFirestore(userId: string, presence: string, loginAt?: string): Promise<void> {
  try {
    const userDocRef = doc(db, 'users', userId);
    const updateData: Record<string, any> = { 
      id: userId,
      presence, 
      lastActiveAt: new Date().toISOString() 
    };
    if (presence !== 'Offline') {
      updateData.logoutAt = null;
    } else {
      updateData.logoutAt = new Date().toISOString();
    }
    if (loginAt) {
      updateData.loginAt = loginAt;
    }
    await setDoc(userDocRef, updateData, { merge: true });
  } catch (err) {
    console.warn('Firestore syncPresence warning:', err);
  }
}

export async function syncSessionToFirestore(session: any): Promise<void> {
  try {
    const sessionDocRef = doc(db, 'sessions', session.id);
    await setDoc(sessionDocRef, sanitizeForFirestore(session), { merge: true });
  } catch (err) {
    console.warn('Firestore syncSession warning:', err);
  }
}

// Real-time Firestore Sessions Listener (Instantly broadcasts login/logout and attendance across all devices)
export function subscribeToSessionsFromFirestore(onUpdate: (sessions: any[]) => void): Unsubscribe {
  try {
    const q = collection(db, 'sessions');
    return onSnapshot(q, (snapshot) => {
      const items: any[] = [];
      snapshot.forEach((d) => items.push({ id: d.id, ...d.data() }));
      if (items.length > 0) {
        onUpdate(items);
      }
    }, (err) => {
      console.warn('Realtime Firestore session subscription notice:', err);
    });
  } catch (err) {
    console.warn('Realtime Firestore session setup error:', err);
    return () => {};
  }
}

export async function fetchSessionsFromFirestore(): Promise<any[]> {
  try {
    const snapshot = await getDocs(collection(db, 'sessions'));
    if (!snapshot.empty) {
      const items: any[] = [];
      snapshot.forEach((d) => items.push({ id: d.id, ...d.data() }));
      return items;
    }
  } catch (err) {
    console.warn('Firestore fetchSessions warning:', err);
  }
  return [];
}

// ======================== FIRESTORE BREAK LOGS ========================
export async function syncBreakLogToFirestore(log: any): Promise<void> {
  try {
    const logDocRef = doc(db, 'break_logs', log.id);
    await setDoc(logDocRef, sanitizeForFirestore(log), { merge: true });
  } catch (err) {
    console.warn('Firestore syncBreakLog warning:', err);
  }
}

export async function fetchBreakLogsFromFirestore(): Promise<any[]> {
  try {
    const snapshot = await getDocs(collection(db, 'break_logs'));
    if (!snapshot.empty) {
      const items: any[] = [];
      snapshot.forEach((d) => items.push({ id: d.id, ...d.data() }));
      return items;
    }
  } catch (err) {
    console.warn('Firestore fetchBreakLogs warning:', err);
  }
  return [];
}

// ======================== FIRESTORE LEAVES ========================
export async function syncLeaveToFirestore(leave: any): Promise<void> {
  try {
    const leaveDocRef = doc(db, 'leaves', leave.id);
    await setDoc(leaveDocRef, sanitizeForFirestore(leave), { merge: true });
  } catch (err) {
    console.warn('Firestore syncLeave warning:', err);
  }
}

export function subscribeToLeavesFromFirestore(onUpdate: (leaves: any[]) => void): Unsubscribe {
  try {
    const colRef = collection(db, 'leaves');
    return onSnapshot(colRef, (snapshot) => {
      const items: any[] = [];
      snapshot.forEach((d) => items.push({ id: d.id, ...d.data() }));
      if (items.length > 0) {
        onUpdate(items);
      }
    }, (err) => {
      console.warn('Leaves subscription error:', err);
    });
  } catch (err) {
    console.warn('subscribeToLeaves error:', err);
    return () => {};
  }
}

export async function deleteLeaveFromFirestore(leaveId: string): Promise<void> {
  try {
    const leaveDocRef = doc(db, 'leaves', leaveId);
    await deleteDoc(leaveDocRef);
  } catch (err) {
    console.warn('Firestore deleteLeave warning:', err);
  }
}

export async function fetchLeavesFromFirestore(): Promise<any[]> {
  try {
    const snapshot = await getDocs(collection(db, 'leaves'));
    if (!snapshot.empty) {
      const items: any[] = [];
      snapshot.forEach((d) => items.push({ id: d.id, ...d.data() }));
      return items;
    }
  } catch (err) {
    console.warn('Firestore fetchLeaves warning:', err);
  }
  return [];
}

// ======================== FIRESTORE ACTIVITIES ========================
export async function syncActivityToFirestore(act: any): Promise<void> {
  try {
    const actDocRef = doc(db, 'activities', act.id);
    await setDoc(actDocRef, sanitizeForFirestore(act), { merge: true });
  } catch (err) {
    console.warn('Firestore syncActivity warning:', err);
  }
}

export async function fetchActivitiesFromFirestore(): Promise<any[]> {
  try {
    const snapshot = await getDocs(collection(db, 'activities'));
    if (!snapshot.empty) {
      const items: any[] = [];
      snapshot.forEach((d) => items.push({ id: d.id, ...d.data() }));
      return items;
    }
  } catch (err) {
    console.warn('Firestore fetchActivities warning:', err);
  }
  return [];
}

// ======================== SEEDING ALL MIGRATED DATA ========================
export async function seedAllMigratedDataToFirestore(
  people: any[],
  work: any[],
  tasks: any[],
  leaves: any[],
  breakLogs: any[]
): Promise<void> {
  try {
    console.log('Seeding company operational data to Firebase Firestore...');
    const promises: Promise<any>[] = [];
    
    people.forEach((p) => promises.push(syncUserToFirestore({ ...p, presence: 'Offline' })));
    work.forEach((w) => promises.push(syncWorkToFirestore(w)));
    tasks.forEach((t) => promises.push(syncTaskToFirestore(t)));
    leaves.forEach((l) => promises.push(syncLeaveToFirestore(l)));
    breakLogs.forEach((b) => promises.push(syncBreakLogToFirestore(b)));

    await Promise.allSettled(promises);
    console.log('Firebase Firestore seeding complete!');
  } catch (err) {
    console.warn('Firestore seeding notice:', err);
  }
}

// Generic record synchronizer
export async function syncRecordToFirestore(collectionName: string, id: string, data: any): Promise<void> {
  try {
    const docRef = doc(db, collectionName, id);
    await setDoc(docRef, { ...sanitizeForFirestore(data), updatedAt: new Date().toISOString() }, { merge: true });
  } catch (err) {
    console.warn(`Firestore syncRecord (${collectionName}) warning:`, err);
  }
}

export async function fetchRecordsFromFirestore<T>(collectionName: string): Promise<T[]> {
  try {
    const snapshot = await getDocs(collection(db, collectionName));
    if (!snapshot.empty) {
      const items: T[] = [];
      snapshot.forEach((d) => {
        items.push(d.data() as T);
      });
      return items;
    }
  } catch (err) {
    console.warn(`Firestore fetchRecords (${collectionName}) warning:`, err);
  }
  return [];
}
