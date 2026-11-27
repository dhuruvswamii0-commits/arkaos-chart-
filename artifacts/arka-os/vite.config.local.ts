import path from 'path';
import fs from 'fs';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';
import { defineConfig, Plugin } from 'vite';

const port = Number(process.env.PORT || 5173);
const basePath = process.env.BASE_PATH || '/';

function localSyncPlugin(): Plugin {
  const storePath = path.resolve(import.meta.dirname, 'public/api/presence_store.json');

  function loadStore() {
    try {
      if (fs.existsSync(storePath)) {
        return JSON.parse(fs.readFileSync(storePath, 'utf8'));
      }
    } catch (e) {
      console.warn('Error reading local presence_store.json:', e);
    }
    return { users: {}, sessions: [], tasks: [], work: [], calendar: [], leaves: [], leave_balances: {}, breakLogs: [] };
  }

  function saveStore(data: any) {
    try {
      fs.mkdirSync(path.dirname(storePath), { recursive: true });
      fs.writeFileSync(storePath, JSON.stringify(data, null, 2), 'utf8');
      const distStorePath = path.resolve(import.meta.dirname, 'dist/public/api/presence_store.json');
      if (fs.existsSync(path.dirname(distStorePath))) {
        fs.writeFileSync(distStorePath, JSON.stringify(data, null, 2), 'utf8');
      }
    } catch (e) {
      console.warn('Error writing local presence_store.json:', e);
    }
  }

  return {
    name: 'local-sync-backend-plugin',
    configureServer(server) {
      server.middlewares.use((req, res, next) => {
        const urlObj = new URL(req.url || '', 'http://' + (req.headers.host || 'localhost'));
        const pathname = urlObj.pathname;

        res.setHeader('Access-Control-Allow-Origin', '*');
        res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PATCH, DELETE, OPTIONS');
        res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization, X-Requested-With');

        if (req.method === 'OPTIONS') {
          res.statusCode = 200;
          res.end();
          return;
        }

        // Handle /api/sync.php
        if (pathname === '/api/sync.php' || pathname === '/public/api/sync.php') {
          const action = urlObj.searchParams.get('action') || 'get';

          if (req.method === 'GET' && action === 'get') {
            const store = loadStore();
            res.setHeader('Content-Type', 'application/json');
            res.statusCode = 200;
            res.end(JSON.stringify({ ok: true, ...store }));
            return;
          }

          if (req.method === 'POST') {
            let bodyStr = '';
            req.on('data', chunk => { bodyStr += chunk; });
            req.on('end', () => {
              let body: any = {};
              try { body = JSON.parse(bodyStr || '{}'); } catch {}
              const store = loadStore();

              if (action === 'presence') {
                const { userId, presence, loginAt, logoutAt, name, role } = body;
                if (userId) {
                  store.users = store.users || {};
                  store.users[userId] = store.users[userId] || { id: userId, name: name || userId, role: role || 'Team member' };
                  store.users[userId].presence = presence || 'Online';
                  if (loginAt) store.users[userId].loginAt = loginAt;
                  if (logoutAt !== undefined) store.users[userId].logoutAt = logoutAt;
                  store.users[userId].lastActiveAt = new Date().toISOString();
                  saveStore(store);
                }
                res.setHeader('Content-Type', 'application/json');
                res.end(JSON.stringify({ ok: true, user: store.users[userId] }));
                return;
              }

              if (action === 'heartbeat') {
                const { userId, presence } = body;
                if (userId) {
                  store.users = store.users || {};
                  store.users[userId] = store.users[userId] || { id: userId, name: userId, role: 'Team member' };
                  if (presence) store.users[userId].presence = presence;
                  store.users[userId].lastActiveAt = new Date().toISOString();
                  saveStore(store);
                }
                res.setHeader('Content-Type', 'application/json');
                res.end(JSON.stringify({ ok: true }));
                return;
              }

              if (action === 'session') {
                const { session } = body;
                if (session && session.id) {
                  store.sessions = store.sessions || [];
                  const idx = store.sessions.findIndex((s: any) => s.id === session.id);
                  if (idx >= 0) store.sessions[idx] = session;
                  else store.sessions.unshift(session);
                  saveStore(store);
                }
                res.setHeader('Content-Type', 'application/json');
                res.end(JSON.stringify({ ok: true }));
                return;
              }

              if (action === 'addTask') {
                const { task } = body;
                if (task && task.id) {
                  store.tasks = store.tasks || [];
                  const idx = store.tasks.findIndex((t: any) => t.id === task.id);
                  if (idx >= 0) store.tasks[idx] = { ...store.tasks[idx], ...task };
                  else store.tasks.unshift(task);
                  saveStore(store);
                }
                res.setHeader('Content-Type', 'application/json');
                res.end(JSON.stringify({ ok: true }));
                return;
              }

              if (action === 'updateTask') {
                const { taskId, patch } = body;
                if (taskId) {
                  store.tasks = store.tasks || [];
                  const idx = store.tasks.findIndex((t: any) => t.id === taskId);
                  if (idx >= 0) {
                    store.tasks[idx] = { ...store.tasks[idx], ...patch };
                    saveStore(store);
                  }
                }
                res.setHeader('Content-Type', 'application/json');
                res.end(JSON.stringify({ ok: true }));
                return;
              }

              if (action === 'deleteTask') {
                const { taskId } = body;
                if (taskId) {
                  store.tasks = (store.tasks || []).filter((t: any) => t.id !== taskId);
                  saveStore(store);
                }
                res.setHeader('Content-Type', 'application/json');
                res.end(JSON.stringify({ ok: true }));
                return;
              }

              if (action === 'addWork') {
                const { work } = body;
                if (work && work.id) {
                  store.work = store.work || [];
                  const idx = store.work.findIndex((w: any) => w.id === work.id);
                  if (idx >= 0) store.work[idx] = { ...store.work[idx], ...work };
                  else store.work.unshift(work);
                  saveStore(store);
                }
                res.setHeader('Content-Type', 'application/json');
                res.end(JSON.stringify({ ok: true }));
                return;
              }

              if (action === 'updateWork') {
                const { workId, patch } = body;
                if (workId) {
                  store.work = store.work || [];
                  const idx = store.work.findIndex((w: any) => w.id === workId);
                  if (idx >= 0) {
                    store.work[idx] = { ...store.work[idx], ...patch };
                    saveStore(store);
                  }
                }
                res.setHeader('Content-Type', 'application/json');
                res.end(JSON.stringify({ ok: true }));
                return;
              }

              if (action === 'deleteWork') {
                const { workId } = body;
                if (workId) {
                  store.work = (store.work || []).filter((w: any) => w.id !== workId);
                  store.tasks = (store.tasks || []).filter((t: any) => t.workId !== workId);
                  saveStore(store);
                }
                res.setHeader('Content-Type', 'application/json');
                res.end(JSON.stringify({ ok: true }));
                return;
              }

              if (action === 'addLeave') {
                const { leave } = body;
                if (leave && leave.id) {
                  store.leaves = store.leaves || [];
                  const idx = store.leaves.findIndex((l: any) => l.id === leave.id);
                  if (idx >= 0) store.leaves[idx] = { ...store.leaves[idx], ...leave };
                  else store.leaves.unshift(leave);
                  saveStore(store);
                }
                res.setHeader('Content-Type', 'application/json');
                res.end(JSON.stringify({ ok: true }));
                return;
              }

              if (action === 'updateLeave') {
                const { leaveId, patch } = body;
                if (leaveId) {
                  store.leaves = store.leaves || [];
                  const idx = store.leaves.findIndex((l: any) => l.id === leaveId);
                  if (idx >= 0) {
                    store.leaves[idx] = { ...store.leaves[idx], ...patch };
                    saveStore(store);
                  }
                }
                res.setHeader('Content-Type', 'application/json');
                res.end(JSON.stringify({ ok: true }));
                return;
              }

              if (action === 'deleteLeave') {
                const { leaveId } = body;
                if (leaveId) {
                  store.leaves = (store.leaves || []).filter((l: any) => l.id !== leaveId);
                  saveStore(store);
                }
                res.setHeader('Content-Type', 'application/json');
                res.end(JSON.stringify({ ok: true }));
                return;
              }

              if (action === 'updateLeaveBalance') {
                const { balance } = body;
                if (balance && balance.userId) {
                  store.leave_balances = store.leave_balances || {};
                  store.leave_balances[balance.userId] = {
                    ...(store.leave_balances[balance.userId] || {}),
                    ...balance,
                    updatedAt: new Date().toISOString()
                  };
                  saveStore(store);
                }
                res.setHeader('Content-Type', 'application/json');
                res.end(JSON.stringify({ ok: true }));
                return;
              }

              if (action === 'addCalendar') {
                const { item } = body;
                if (item && item.id) {
                  store.calendar = store.calendar || [];
                  const idx = store.calendar.findIndex((c: any) => c.id === item.id);
                  if (idx >= 0) store.calendar[idx] = { ...store.calendar[idx], ...item };
                  else store.calendar.unshift(item);
                  saveStore(store);
                }
                res.setHeader('Content-Type', 'application/json');
                res.end(JSON.stringify({ ok: true }));
                return;
              }

              if (action === 'deleteCalendar') {
                const { id } = body;
                if (id) {
                  store.calendar = (store.calendar || []).filter((c: any) => c.id !== id);
                  saveStore(store);
                }
                res.setHeader('Content-Type', 'application/json');
                res.end(JSON.stringify({ ok: true }));
                return;
              }

              if (action === 'addUser') {
                const { user } = body;
                if (user && user.id) {
                  store.users[user.id] = { ...(store.users[user.id] || {}), ...user };
                  saveStore(store);
                }
                res.setHeader('Content-Type', 'application/json');
                res.end(JSON.stringify({ ok: true }));
                return;
              }

              if (action === 'deleteUser') {
                const { userId } = body;
                if (userId && store.users[userId]) {
                  delete store.users[userId];
                  saveStore(store);
                }
                res.setHeader('Content-Type', 'application/json');
                res.end(JSON.stringify({ ok: true }));
                return;
              }

              if (action === 'login') {
                const { email, password } = body;
                const clean = (email || '').trim().toLowerCase();
                const pfx = clean.split('@')[0].replace(/[^a-z0-9]/g, '');
                const userList = Object.values(store.users || {});
                const found: any = userList.find((u: any) => {
                  const uEmail = (u.email || '').trim().toLowerCase();
                  const uName = (u.name || '').trim().toLowerCase().replace(/[^a-z0-9]/g, '');
                  const uId = (u.id || '').toLowerCase();
                  return uEmail === clean || uId === clean || uName === clean || (pfx && (uEmail.includes(pfx) || uName.includes(pfx)));
                });
                if (found) {
                  res.setHeader('Content-Type', 'application/json');
                  res.end(JSON.stringify({ ok: true, user: found }));
                  return;
                }
                res.setHeader('Content-Type', 'application/json');
                res.statusCode = 404;
                res.end(JSON.stringify({ ok: false, error: 'User not found' }));
                return;
              }

              res.setHeader('Content-Type', 'application/json');
              res.end(JSON.stringify({ ok: true }));
            });
            return;
          }
        }

        // Handle generic /api/content-calendar, /api/tasks, etc.
        if (pathname.startsWith('/api/')) {
          const store = loadStore();
          if (pathname === '/api/content-calendar') {
            if (req.method === 'GET') {
              res.setHeader('Content-Type', 'application/json');
              res.end(JSON.stringify({ items: store.calendar || [] }));
              return;
            }
            if (req.method === 'POST') {
              let bodyStr = '';
              req.on('data', chunk => { bodyStr += chunk; });
              req.on('end', () => {
                let item = JSON.parse(bodyStr || '{}');
                store.calendar = store.calendar || [];
                store.calendar.unshift(item);
                saveStore(store);
                res.setHeader('Content-Type', 'application/json');
                res.end(JSON.stringify({ ok: true, item }));
              });
              return;
            }
          }

          if (pathname.startsWith('/api/content-calendar/')) {
            const calId = pathname.split('/')[3];
            if (req.method === 'PATCH') {
              let bodyStr = '';
              req.on('data', chunk => { bodyStr += chunk; });
              req.on('end', () => {
                let patch = JSON.parse(bodyStr || '{}');
                store.calendar = store.calendar || [];
                const idx = store.calendar.findIndex((c: any) => c.id === calId);
                if (idx >= 0) {
                  store.calendar[idx] = { ...store.calendar[idx], ...patch };
                  saveStore(store);
                }
                res.setHeader('Content-Type', 'application/json');
                res.end(JSON.stringify({ ok: true }));
              });
              return;
            }
            if (req.method === 'DELETE') {
              store.calendar = (store.calendar || []).filter((c: any) => c.id !== calId);
              saveStore(store);
              res.setHeader('Content-Type', 'application/json');
              res.end(JSON.stringify({ ok: true }));
              return;
            }
          }

          if (pathname === '/api/work') {
            if (req.method === 'GET') {
              res.setHeader('Content-Type', 'application/json');
              res.end(JSON.stringify({ items: store.work || [] }));
              return;
            }
            if (req.method === 'POST') {
              let bodyStr = '';
              req.on('data', chunk => { bodyStr += chunk; });
              req.on('end', () => {
                let workItem = JSON.parse(bodyStr || '{}');
                store.work = store.work || [];
                const idx = store.work.findIndex((w: any) => w.id === workItem.id);
                if (idx >= 0) store.work[idx] = { ...store.work[idx], ...workItem };
                else store.work.unshift(workItem);
                saveStore(store);
                res.setHeader('Content-Type', 'application/json');
                res.end(JSON.stringify({ ok: true, item: workItem }));
              });
              return;
            }
          }

          if (pathname.startsWith('/api/work/')) {
            const workId = pathname.split('/')[3];
            if (req.method === 'PATCH') {
              let bodyStr = '';
              req.on('data', chunk => { bodyStr += chunk; });
              req.on('end', () => {
                let patch = JSON.parse(bodyStr || '{}');
                store.work = store.work || [];
                const idx = store.work.findIndex((w: any) => w.id === workId);
                if (idx >= 0) {
                  store.work[idx] = { ...store.work[idx], ...patch };
                  saveStore(store);
                }
                res.setHeader('Content-Type', 'application/json');
                res.end(JSON.stringify({ ok: true }));
              });
              return;
            }
            if (req.method === 'DELETE') {
              store.work = (store.work || []).filter((w: any) => w.id !== workId);
              store.tasks = (store.tasks || []).filter((t: any) => t.workId !== workId);
              saveStore(store);
              res.setHeader('Content-Type', 'application/json');
              res.end(JSON.stringify({ ok: true }));
              return;
            }
          }

          if (pathname === '/api/tasks') {
            if (req.method === 'GET') {
              res.setHeader('Content-Type', 'application/json');
              res.end(JSON.stringify({ items: store.tasks || [] }));
              return;
            }
            if (req.method === 'POST') {
              let bodyStr = '';
              req.on('data', chunk => { bodyStr += chunk; });
              req.on('end', () => {
                let task = JSON.parse(bodyStr || '{}');
                store.tasks = store.tasks || [];
                const idx = store.tasks.findIndex((t: any) => t.id === task.id);
                if (idx >= 0) store.tasks[idx] = { ...store.tasks[idx], ...task };
                else store.tasks.unshift(task);
                saveStore(store);
                res.setHeader('Content-Type', 'application/json');
                res.end(JSON.stringify({ ok: true, item: task }));
              });
              return;
            }
          }

          if (pathname.startsWith('/api/tasks/')) {
            const taskId = pathname.split('/')[3];
            if (req.method === 'PATCH') {
              let bodyStr = '';
              req.on('data', chunk => { bodyStr += chunk; });
              req.on('end', () => {
                let patch = JSON.parse(bodyStr || '{}');
                store.tasks = store.tasks || [];
                const idx = store.tasks.findIndex((t: any) => t.id === taskId);
                if (idx >= 0) {
                  store.tasks[idx] = { ...store.tasks[idx], ...patch };
                  saveStore(store);
                }
                res.setHeader('Content-Type', 'application/json');
                res.end(JSON.stringify({ ok: true }));
              });
              return;
            }
            if (req.method === 'DELETE') {
              store.tasks = (store.tasks || []).filter((t: any) => t.id !== taskId);
              saveStore(store);
              res.setHeader('Content-Type', 'application/json');
              res.end(JSON.stringify({ ok: true }));
              return;
            }
          }

          if (pathname === '/api/people') {
            if (req.method === 'GET') {
              res.setHeader('Content-Type', 'application/json');
              res.end(JSON.stringify({ items: Object.values(store.users || {}) }));
              return;
            }
            if (req.method === 'POST') {
              let bodyStr = '';
              req.on('data', chunk => { bodyStr += chunk; });
              req.on('end', () => {
                const user = JSON.parse(bodyStr || '{}');
                if (user && user.id) {
                  store.users = store.users || {};
                  store.users[user.id] = { ...(store.users[user.id] || {}), ...user };
                  saveStore(store);
                }
                res.setHeader('Content-Type', 'application/json');
                res.end(JSON.stringify({ ok: true, item: user }));
              });
              return;
            }
          }

          if (pathname.startsWith('/api/people/')) {
            const parts = pathname.split('/');
            const personId = parts[3];
            const subAction = parts[4]; // e.g. 'password' or 'role'

            if (req.method === 'DELETE') {
              if (personId && store.users && store.users[personId]) {
                delete store.users[personId];
                if (store.tasks) {
                  store.tasks = store.tasks.filter((t: any) => t.assigneeId !== personId);
                }
                saveStore(store);
              }
              res.setHeader('Content-Type', 'application/json');
              res.end(JSON.stringify({ ok: true, deleted: personId }));
              return;
            }

            if (req.method === 'PATCH') {
              let bodyStr = '';
              req.on('data', chunk => { bodyStr += chunk; });
              req.on('end', () => {
                const patch = JSON.parse(bodyStr || '{}');
                if (personId && store.users && store.users[personId]) {
                  if (subAction === 'password' && patch.password) {
                    store.users[personId].password = patch.password;
                  } else if (subAction === 'role' && patch.role) {
                    store.users[personId].role = patch.role;
                  } else {
                    store.users[personId] = { ...store.users[personId], ...patch };
                  }
                  saveStore(store);
                }
                res.setHeader('Content-Type', 'application/json');
                res.end(JSON.stringify({ ok: true }));
              });
              return;
            }
          }

          if (pathname === '/api/leaves') {
            if (req.method === 'GET') {
              res.setHeader('Content-Type', 'application/json');
              res.end(JSON.stringify({ items: store.leaves || [] }));
              return;
            }
            if (req.method === 'POST') {
              let bodyStr = '';
              req.on('data', chunk => { bodyStr += chunk; });
              req.on('end', () => {
                const leave = JSON.parse(bodyStr || '{}');
                if (!leave.id) {
                  leave.id = `leave-${Date.now()}-${Math.random().toString(36).slice(2, 7)}`;
                }
                if (!leave.status) leave.status = 'Pending';
                if (!leave.createdAt) leave.createdAt = new Date().toISOString();
                store.leaves = store.leaves || [];
                const idx = store.leaves.findIndex((l: any) => l.id === leave.id);
                if (idx >= 0) store.leaves[idx] = { ...store.leaves[idx], ...leave };
                else store.leaves.unshift(leave);
                saveStore(store);
                res.setHeader('Content-Type', 'application/json');
                res.end(JSON.stringify({ ok: true, item: leave }));
              });
              return;
            }
          }

          if (pathname.startsWith('/api/leaves/')) {
            const leaveId = pathname.split('/')[3];
            if (req.method === 'PATCH') {
              let bodyStr = '';
              req.on('data', chunk => { bodyStr += chunk; });
              req.on('end', () => {
                const patch = JSON.parse(bodyStr || '{}');
                store.leaves = store.leaves || [];
                const idx = store.leaves.findIndex((l: any) => l.id === leaveId);
                if (idx >= 0) {
                  store.leaves[idx] = { ...store.leaves[idx], ...patch };
                  saveStore(store);
                  res.setHeader('Content-Type', 'application/json');
                  res.end(JSON.stringify({ ok: true, item: store.leaves[idx] }));
                  return;
                }
                res.setHeader('Content-Type', 'application/json');
                res.statusCode = 404;
                res.end(JSON.stringify({ ok: false, error: 'Leave not found' }));
              });
              return;
            }
            if (req.method === 'DELETE') {
              store.leaves = (store.leaves || []).filter((l: any) => l.id !== leaveId);
              saveStore(store);
              res.setHeader('Content-Type', 'application/json');
              res.end(JSON.stringify({ ok: true }));
              return;
            }
          }

          if (pathname === '/api/leave-balances') {
            if (req.method === 'GET') {
              res.setHeader('Content-Type', 'application/json');
              res.end(JSON.stringify({ items: Object.values(store.leave_balances || {}) }));
              return;
            }
            if (req.method === 'POST') {
              let bodyStr = '';
              req.on('data', chunk => { bodyStr += chunk; });
              req.on('end', () => {
                const balance = JSON.parse(bodyStr || '{}');
                if (balance && balance.userId) {
                  store.leave_balances = store.leave_balances || {};
                  store.leave_balances[balance.userId] = {
                    ...(store.leave_balances[balance.userId] || {}),
                    ...balance,
                    updatedAt: new Date().toISOString()
                  };
                  saveStore(store);
                }
                res.setHeader('Content-Type', 'application/json');
                res.end(JSON.stringify({ ok: true, balance }));
              });
              return;
            }
          }

          if (pathname === '/api/sessions') {
            if (req.method === 'GET') {
              res.setHeader('Content-Type', 'application/json');
              res.end(JSON.stringify({ items: store.sessions || [] }));
              return;
            }
            if (req.method === 'POST') {
              let bodyStr = '';
              req.on('data', chunk => { bodyStr += chunk; });
              req.on('end', () => {
                const sess = JSON.parse(bodyStr || '{}');
                if (sess && sess.id) {
                  store.sessions = store.sessions || [];
                  const idx = store.sessions.findIndex((s: any) => s.id === sess.id);
                  if (idx >= 0) store.sessions[idx] = { ...store.sessions[idx], ...sess };
                  else store.sessions.unshift(sess);
                  saveStore(store);
                }
                res.setHeader('Content-Type', 'application/json');
                res.end(JSON.stringify({ ok: true, item: sess }));
              });
              return;
            }
          }

          if (pathname === '/api/activities') {
            res.setHeader('Content-Type', 'application/json');
            res.end(JSON.stringify({ items: store.activities || [] }));
            return;
          }

          if (pathname === '/api/comments') {
            res.setHeader('Content-Type', 'application/json');
            res.end(JSON.stringify({ items: store.comments || [] }));
            return;
          }

          if (pathname === '/api/reports') {
            res.setHeader('Content-Type', 'application/json');
            res.end(JSON.stringify({ items: store.reports || [] }));
            return;
          }

          if (pathname === '/api/break-logs') {
            res.setHeader('Content-Type', 'application/json');
            res.end(JSON.stringify({ items: store.break_logs || [] }));
            return;
          }

          // Fallback for ANY /api/ route to prevent Vite HTML SPA index.html fallback
          res.setHeader('Content-Type', 'application/json');
          res.end(JSON.stringify({ ok: true, items: [] }));
          return;
        }

        next();
      });
    }
  };
}

export default defineConfig({
  base: basePath,
  plugins: [
    react(),
    tailwindcss(),
    localSyncPlugin(),
  ],
  resolve: {
    alias: {
      '@': path.resolve(import.meta.dirname, 'src'),
      '@assets': path.resolve(
        import.meta.dirname,
        '..',
        '..',
        'attached_assets',
      ),
    },
    dedupe: ['react', 'react-dom'],
  },
  root: path.resolve(import.meta.dirname),
  build: {
    outDir: path.resolve(import.meta.dirname, 'dist/public'),
    emptyOutDir: true,
  },
  define: {
    'process.env.REACT_APP_HOSTINGER': JSON.stringify(process.env.REACT_APP_HOSTINGER || ''),
  },
  server: {
    port,
    strictPort: false,
    host: '0.0.0.0',
    allowedHosts: true,
    watch: {
      ignored: ['**/downloads/**', '**/*.exe', '**/dist/**', '**/safe_update/**'],
    },
    fs: {
      strict: true,
    },
  },
  preview: {
    port,
    host: '0.0.0.0',
    allowedHosts: true,
  },
});
