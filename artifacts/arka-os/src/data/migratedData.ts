// Migrated live production data from https://hub.arkadigitalmedia.com/
// Fetched directly from https://arka-api-w9o0.onrender.com/api
import type { Person, WorkItem, WorkTask, SessionRecord, LeaveRequest, BreakLog, Activity } from '../App';

export const MIGRATED_CLIENTS: string[] = [
  "3M car care",
  "Ahana silver studio",
  "Arka digital marketing",
  "Ashpire Tennis",
  "Ashva - The Event Venue",
  "Aura Unisex Salon",
  "BlueCaps",
  "Border Bells",
  "Clarus International School",
  "DNS",
  "Gravity Fitness",
  "Hsr Fitness",
  "Just Bakes",
  "Kick & Hit",
  "Motoflix Automobiles",
  "Nail stories",
  "Paripoorna PU College",
  "PilatesHub Bellandur",
  "PilatesHub Equipments",
  "PilatesHub HSR",
  "PilatesHub Koramangala",
  "RAAGI",
  "Ratavat Creations",
  "Rocks fitness - Balagere",
  "Rocks fitness - panathur",
  "Sri Ram Public School",
  "Sutra hybrid club",
  "The Nailco",
  "Velvet & mirror unisex salon",
  "Yaletis Infra",
  "accounts ans sales crm build",
  "amora signature perfume",
  "animal gym",
  "dhurthi",
  "early schoolhouse",
  "fma gym",
  "iron revolution gym",
  "smartlook unisex salon"
];

export const MIGRATED_PEOPLE: Person[] = [
  {
    "id": "person-1791175695081",
    "name": "Akhil Kumar",
    "email": "akhilkumar123bk@gmail.com",
    "role": "Team member",
    "title": "Graphic Designer",
    "managerId": "person-1789544813478",
    "presence": "Offline",
    "loginAt": "2026-10-17T04:34:53.015Z",
    "logoutAt": "2026-10-17T13:35:00.017Z",
    "lastActiveAt": "2026-10-17T07:12:53.981Z",
    "sessionMinutes": 0,
    "taskMinutes": 0,
    "activeSessionId": null,
    "password": "123456"
  },
  {
    "id": "person-1789544813478",
    "name": "Batul",
    "email": "batulwork0710@gmail.com",
    "role": "Manager",
    "title": "Social Media Manager",
    "managerId": null,
    "presence": "Offline",
    "loginAt": "2026-10-28T04:24:14.186Z",
    "logoutAt": "2026-10-27T13:55:51.594Z",
    "lastActiveAt": "2026-10-28T12:51:47.682Z",
    "sessionMinutes": 0,
    "taskMinutes": 0,
    "activeSessionId": null,
    "password": "123456"
  },
  {
    "id": "person-1789544851698",
    "name": "Dhuruv Swamy",
    "email": "dhuruvswamy7@gmail.com",
    "role": "Team member",
    "title": "Business Development",
    "managerId": "usr_founder",
    "presence": "Offline",
    "loginAt": "2026-10-26T05:38:32.426Z",
    "logoutAt": "2026-10-27T05:39:00.005Z",
    "lastActiveAt": "2026-10-27T05:38:21.674Z",
    "sessionMinutes": 0,
    "taskMinutes": 0,
    "activeSessionId": null,
    "password": "123456"
  },
  {
    "id": "usr_founder_eshwar",
    "name": "Eshwar SP",
    "email": "eshwar@arkadigitalmedia.com",
    "role": "Founder",
    "title": "Co-Founder & COO",
    "managerId": null,
    "presence": "Offline",
    "loginAt": "2026-10-26T05:38:37.721Z",
    "logoutAt": "2026-10-21T13:18:39.614Z",
    "lastActiveAt": "2026-10-27T05:38:21.689Z",
    "sessionMinutes": 0,
    "taskMinutes": 0,
    "activeSessionId": null,
    "password": "admin1234"
  },
  {
    "id": "person-1789549176116",
    "name": "Meena M",
    "email": "meenakshiammu369@gmail.com",
    "role": "Team member",
    "title": "Graphic Designer",
    "managerId": "person-1789544813478",
    "presence": "Offline",
    "loginAt": "2026-10-28T11:58:38.869Z",
    "logoutAt": "2026-10-28T11:51:00.005Z",
    "lastActiveAt": "2026-10-28T12:51:31.956Z",
    "sessionMinutes": 0,
    "taskMinutes": 0,
    "activeSessionId": null,
    "password": "123456"
  },
  {
    "id": "person-1789544916637",
    "name": "Midhlaj M T P",
    "email": "midhlajmtp@gmail.com",
    "role": "Team member",
    "title": "Video Editor",
    "managerId": "person-1789544813478",
    "presence": "Offline",
    "loginAt": "2026-10-27T05:17:14.325Z",
    "logoutAt": "2026-10-27T14:18:00.017Z",
    "lastActiveAt": "2026-10-27T14:07:42.008Z",
    "sessionMinutes": 0,
    "taskMinutes": 0,
    "activeSessionId": null,
    "password": "123456"
  },
  {
    "id": "usr_founder",
    "name": "Monika S",
    "email": "monika@arkadigitalmedia.com",
    "role": "Founder",
    "title": "Founder / CEO",
    "managerId": null,
    "presence": "Offline",
    "loginAt": "2026-10-08T12:26:14.590Z",
    "logoutAt": "2026-10-08T12:26:22.804Z",
    "lastActiveAt": "2026-10-08T12:26:14.590Z",
    "sessionMinutes": 0,
    "taskMinutes": 0,
    "activeSessionId": null,
    "password": "admin1234"
  },
  {
    "id": "person-1790246663190",
    "name": "Naveen",
    "email": "naveensh1242001@gmail.com",
    "role": "Team member",
    "title": "Videographer",
    "managerId": "person-1789544813478",
    "presence": "Offline",
    "loginAt": "2026-09-24T10:44:42.575Z",
    "logoutAt": "2026-09-24T10:47:56.528Z",
    "lastActiveAt": "2026-09-24T10:47:56.528Z",
    "sessionMinutes": 0,
    "taskMinutes": 0,
    "activeSessionId": null,
    "password": "123456"
  },
  {
    "id": "person-1789555841194",
    "name": "Nilesh Rawat",
    "email": "nileshrawat1325@gmail.com",
    "role": "Team member",
    "title": "Sales Head",
    "managerId": "usr_founder",
    "presence": "Offline",
    "loginAt": "2026-10-27T05:59:55.383Z",
    "logoutAt": "2026-10-28T04:20:00.493Z",
    "lastActiveAt": "2026-10-27T08:02:53.134Z",
    "sessionMinutes": 0,
    "taskMinutes": 0,
    "activeSessionId": null,
    "password": "123456"
  },
  {
    "id": "person-1789737883615",
    "name": "Sanjana CK",
    "email": "sanjana.jetty1469@gmail.com",
    "role": "HR Manager",
    "title": "Head of People & HR Operations",
    "managerId": null,
    "presence": "Offline",
    "loginAt": "2026-10-28T04:24:47.523Z",
    "logoutAt": "2026-10-27T13:35:43.000Z",
    "lastActiveAt": "2026-10-28T12:52:06.357Z",
    "sessionMinutes": 0,
    "taskMinutes": 0,
    "activeSessionId": null,
    "password": "123456"
  },
  {
    "id": "person-1789737923403",
    "name": "Supreeth BK",
    "email": "iamsupreethbk@gmail.com",
    "role": "Team member",
    "title": "Graphic Designer",
    "managerId": "person-1789544813478",
    "presence": "Offline",
    "loginAt": "2026-10-28T04:42:47.347Z",
    "logoutAt": "2026-10-26T13:18:13.201Z",
    "lastActiveAt": "2026-10-28T12:52:02.141Z",
    "sessionMinutes": 0,
    "taskMinutes": 0,
    "activeSessionId": null,
    "password": "123456"
  },
  {
    "id": "person-1789738156900",
    "name": "Swathi C",
    "email": "swathi.lautner@gmail.com",
    "role": "Manager",
    "title": "Social Media Manager",
    "managerId": null,
    "presence": "Offline",
    "loginAt": "2026-10-28T05:56:56.944Z",
    "logoutAt": "2026-10-27T09:53:00.005Z",
    "lastActiveAt": "2026-10-28T12:51:52.616Z",
    "sessionMinutes": 0,
    "taskMinutes": 0,
    "activeSessionId": null,
    "password": "123456"
  },
  {
    "id": "person-1789738443448",
    "name": "Tejas Govi",
    "email": "tejasgovi123@gmail.com",
    "role": "Team member",
    "title": "Video Editor",
    "managerId": "person-1789544813478",
    "presence": "Offline",
    "loginAt": "2026-10-28T04:25:12.412Z",
    "logoutAt": "2026-10-26T13:40:00.010Z",
    "lastActiveAt": "2026-10-28T12:51:29.384Z",
    "sessionMinutes": 0,
    "taskMinutes": 0,
    "activeSessionId": null,
    "password": "123456"
  },
  {
    "id": "person-abhishek-kn",
    "name": "Abhishek KN",
    "email": "abhishekknabhishekkn5@gmail.com",
    "role": "Team member",
    "title": "Team member",
    "managerId": "person-1789544813478",
    "presence": "Offline",
    "lastActiveAt": "2026-11-13T10:00:00.000Z",
    "sessionMinutes": 0,
    "taskMinutes": 0,
    "activeSessionId": null,
    "password": "1234"
  },
  {
    "id": "person-ashwanth-b",
    "name": "Ashwanth b",
    "email": "armonashwanth@gmail.com",
    "role": "Team member",
    "title": "Team member",
    "managerId": "usr_founder_eshwar",
    "presence": "Offline",
    "lastActiveAt": "2026-11-13T10:00:00.000Z",
    "sessionMinutes": 0,
    "taskMinutes": 0,
    "activeSessionId": null,
    "password": "1234"
  }
];

export const MIGRATED_WORK: WorkItem[] = [
  {
    "id": "work-general",
    "title": "General Operations & Team Tasks",
    "description": "General operational assignments, ongoing deliverables, client requests and team tasks.",
    "client": "Internal / Direct",
    "workType": "Operations",
    "priority": "Medium",
    "dueDate": "2026-12-31",
    "founderId": "usr_founder",
    "managerId": null,
    "directAssigneeId": null,
    "stage": "In Progress",
    "progress": 50,
    "createdAt": "2026-10-01"
  },
  {
    "id": "work-1792648233049",
    "title": "Sutra hybrid club",
    "description": "Work assigned to Batul",
    "client": "Sutra hybrid club",
    "workType": "Other",
    "priority": "Medium",
    "dueDate": "2026-10-22",
    "founderId": "usr_founder_eshwar",
    "managerId": "person-1789544813478",
    "directAssigneeId": null,
    "stage": "Planning",
    "progress": 0,
    "createdAt": "2026-10-22"
  },
  {
    "id": "work-1792648312319",
    "title": "3M car care",
    "description": "Work assigned to Swathi C",
    "client": "3M car care",
    "workType": "Other",
    "priority": "Medium",
    "dueDate": "2026-10-22",
    "founderId": "usr_founder_eshwar",
    "managerId": "person-1789738156900",
    "directAssigneeId": null,
    "stage": "Planning",
    "progress": 0,
    "createdAt": "2026-10-22"
  },
  {
    "id": "work-1792648286754",
    "title": "Yaletis Infra",
    "description": "Work assigned to Batul",
    "client": "Yaletis Infra",
    "workType": "Other",
    "priority": "Medium",
    "dueDate": "2026-10-22",
    "founderId": "usr_founder_eshwar",
    "managerId": "person-1789544813478",
    "directAssigneeId": null,
    "stage": "Planning",
    "progress": 0,
    "createdAt": "2026-10-22"
  },
  {
    "id": "work-1792648276749",
    "title": "Motoflix Automobiles",
    "description": "Work assigned to Batul",
    "client": "Motoflix Automobiles",
    "workType": "Other",
    "priority": "Medium",
    "dueDate": "2026-10-22",
    "founderId": "usr_founder_eshwar",
    "managerId": "person-1789544813478",
    "directAssigneeId": null,
    "stage": "Planning",
    "progress": 0,
    "createdAt": "2026-10-22"
  },
  {
    "id": "work-1792648261747",
    "title": "Ratavat Creations",
    "description": "Work assigned to Batul",
    "client": "Ratavat Creations",
    "workType": "Other",
    "priority": "Medium",
    "dueDate": "2026-10-22",
    "founderId": "usr_founder_eshwar",
    "managerId": "person-1789544813478",
    "directAssigneeId": null,
    "stage": "Planning",
    "progress": 0,
    "createdAt": "2026-10-22"
  },
  {
    "id": "work-1792648248405",
    "title": "dhurthi",
    "description": "Work assigned to Batul",
    "client": "dhurthi",
    "workType": "Other",
    "priority": "Medium",
    "dueDate": "2026-10-22",
    "founderId": "usr_founder_eshwar",
    "managerId": "person-1789544813478",
    "directAssigneeId": null,
    "stage": "Planning",
    "progress": 0,
    "createdAt": "2026-10-22"
  },
  {
    "id": "work-1789981533617",
    "title": "Arka digital marketing",
    "description": "Work assigned to Batul",
    "client": "Arka digital marketing",
    "workType": "Other",
    "priority": "Medium",
    "dueDate": "2026-09-21",
    "founderId": "usr_founder",
    "managerId": "person-1789544813478",
    "directAssigneeId": null,
    "stage": "Planning",
    "progress": 0,
    "createdAt": "2026-09-21"
  },
  {
    "id": "work-1789981516632",
    "title": "amora signature perfume",
    "description": "Work assigned to Batul",
    "client": "amora signature perfume",
    "workType": "Other",
    "priority": "Medium",
    "dueDate": "2026-09-21",
    "founderId": "usr_founder",
    "managerId": "person-1789544813478",
    "directAssigneeId": null,
    "stage": "Planning",
    "progress": 0,
    "createdAt": "2026-09-21"
  },
  {
    "id": "work-1789981428986",
    "title": "smartlook unisex salon",
    "description": "Work assigned to Batul",
    "client": "smartlook unisex salon",
    "workType": "Other",
    "priority": "Medium",
    "dueDate": "2026-09-21",
    "founderId": "usr_founder",
    "managerId": "person-1789544813478",
    "directAssigneeId": null,
    "stage": "Planning",
    "progress": 0,
    "createdAt": "2026-09-21"
  },
  {
    "id": "work-1789975198149",
    "title": "accounts ans sales crm build",
    "description": "Work assigned to Dhuruv Swamy",
    "client": "accounts ans sales crm build",
    "workType": "Other",
    "priority": "Medium",
    "dueDate": "2026-09-21",
    "founderId": "usr_founder",
    "managerId": null,
    "directAssigneeId": "person-1789544851698",
    "stage": "Assigned",
    "progress": 0,
    "createdAt": "2026-09-21"
  },
  {
    "id": "work-1789970845317",
    "title": "Paripoorna PU College",
    "description": "Work assigned to Swathi C",
    "client": "Paripoorna PU College",
    "workType": "Other",
    "priority": "Medium",
    "dueDate": "2026-09-21",
    "founderId": "usr_founder",
    "managerId": "person-1789738156900",
    "directAssigneeId": null,
    "stage": "Planning",
    "progress": 0,
    "createdAt": "2026-09-21"
  },
  {
    "id": "work-1789817738758",
    "title": "Rocks fitness - Balagere",
    "description": "Work assigned to Swathi C",
    "client": "Rocks fitness - Balagere",
    "workType": "Other",
    "priority": "Medium",
    "dueDate": "2026-09-19",
    "founderId": "usr_founder",
    "managerId": "person-1789738156900",
    "directAssigneeId": null,
    "stage": "Planning",
    "progress": 0,
    "createdAt": "2026-09-19"
  },
  {
    "id": "work-1789817765948",
    "title": "Rocks fitness - panathur",
    "description": "Work assigned to Swathi C",
    "client": "Rocks fitness - panathur",
    "workType": "Other",
    "priority": "Medium",
    "dueDate": "2026-09-19",
    "founderId": "usr_founder",
    "managerId": "person-1789738156900",
    "directAssigneeId": null,
    "stage": "Planning",
    "progress": 0,
    "createdAt": "2026-09-19"
  },
  {
    "id": "work-1789817812002",
    "title": "Border Bells",
    "description": "Work assigned to Swathi C",
    "client": "Border Bells",
    "workType": "Other",
    "priority": "Medium",
    "dueDate": "2026-09-19",
    "founderId": "usr_founder",
    "managerId": "person-1789738156900",
    "directAssigneeId": null,
    "stage": "Planning",
    "progress": 0,
    "createdAt": "2026-09-19"
  },
  {
    "id": "work-1789817842103",
    "title": "Hsr Fitness",
    "description": "Work assigned to Swathi C",
    "client": "Hsr Fitness",
    "workType": "Other",
    "priority": "Medium",
    "dueDate": "2026-09-19",
    "founderId": "usr_founder",
    "managerId": "person-1789738156900",
    "directAssigneeId": null,
    "stage": "Planning",
    "progress": 0,
    "createdAt": "2026-09-19"
  },
  {
    "id": "work-1789817864292",
    "title": "DNS",
    "description": "Work assigned to Swathi C",
    "client": "DNS",
    "workType": "Other",
    "priority": "Medium",
    "dueDate": "2026-09-19",
    "founderId": "usr_founder",
    "managerId": "person-1789738156900",
    "directAssigneeId": null,
    "stage": "Planning",
    "progress": 0,
    "createdAt": "2026-09-19"
  },
  {
    "id": "work-1789817890821",
    "title": "Ahana silver studio",
    "description": "Work assigned to Swathi C",
    "client": "Ahana silver studio",
    "workType": "Other",
    "priority": "Medium",
    "dueDate": "2026-09-19",
    "founderId": "usr_founder",
    "managerId": "person-1789738156900",
    "directAssigneeId": null,
    "stage": "Planning",
    "progress": 0,
    "createdAt": "2026-09-19"
  },
  {
    "id": "work-1789817695400",
    "title": "Kick & Hit",
    "description": "Work assigned to Swathi C",
    "client": "Kick & Hit",
    "workType": "Other",
    "priority": "Medium",
    "dueDate": "2026-09-19",
    "founderId": "usr_founder",
    "managerId": "person-1789738156900",
    "directAssigneeId": null,
    "stage": "Planning",
    "progress": 0,
    "createdAt": "2026-09-19"
  },
  {
    "id": "work-1789817911426",
    "title": "Ashpire Tennis",
    "description": "Work assigned to Swathi C",
    "client": "Ashpire Tennis",
    "workType": "Other",
    "priority": "Medium",
    "dueDate": "2026-09-19",
    "founderId": "usr_founder",
    "managerId": "person-1789738156900",
    "directAssigneeId": null,
    "stage": "Planning",
    "progress": 0,
    "createdAt": "2026-09-19"
  },
  {
    "id": "work-1789817935592",
    "title": "Gravity Fitness",
    "description": "Work assigned to Swathi C",
    "client": "Gravity Fitness",
    "workType": "Other",
    "priority": "Medium",
    "dueDate": "2026-09-19",
    "founderId": "usr_founder",
    "managerId": "person-1789738156900",
    "directAssigneeId": null,
    "stage": "Planning",
    "progress": 0,
    "createdAt": "2026-09-19"
  },
  {
    "id": "work-1789796177804",
    "title": "PilatesHub Bellandur",
    "description": "New operational work assigned from the command center.",
    "client": "PilatesHub Bellandur",
    "workType": "Other",
    "priority": "Medium",
    "dueDate": "2026-09-25",
    "founderId": "usr_founder",
    "managerId": "person-1789544813478",
    "directAssigneeId": null,
    "stage": "Planning",
    "progress": 5,
    "createdAt": "2026-09-15"
  },
  {
    "id": "work-1789796204394",
    "title": "PilatesHub Koramangala",
    "description": "New operational work assigned from the command center.",
    "client": "PilatesHub Koramangala",
    "workType": "Other",
    "priority": "Medium",
    "dueDate": "2026-09-25",
    "founderId": "usr_founder",
    "managerId": "person-1789544813478",
    "directAssigneeId": null,
    "stage": "Planning",
    "progress": 5,
    "createdAt": "2026-09-15"
  },
  {
    "id": "work-1789796225969",
    "title": "Clarus International School",
    "description": "New operational work assigned from the command center.",
    "client": "Clarus International School",
    "workType": "Other",
    "priority": "Medium",
    "dueDate": "2026-09-25",
    "founderId": "usr_founder",
    "managerId": "person-1789544813478",
    "directAssigneeId": null,
    "stage": "Planning",
    "progress": 5,
    "createdAt": "2026-09-15"
  },
  {
    "id": "work-1789796247298",
    "title": "PilatesHub Equipments",
    "description": "New operational work assigned from the command center.",
    "client": "PilatesHub Equipments",
    "workType": "Other",
    "priority": "Medium",
    "dueDate": "2026-09-25",
    "founderId": "usr_founder",
    "managerId": "person-1789544813478",
    "directAssigneeId": null,
    "stage": "Planning",
    "progress": 5,
    "createdAt": "2026-09-15"
  },
  {
    "id": "work-1789795890326",
    "title": "fma gym ",
    "description": "New operational work assigned from the command center.",
    "client": "fma gym ",
    "workType": "Other",
    "priority": "Medium",
    "dueDate": "2026-09-25",
    "founderId": "usr_founder",
    "managerId": "person-1789544813478",
    "directAssigneeId": null,
    "stage": "Planning",
    "progress": 5,
    "createdAt": "2026-09-15"
  },
  {
    "id": "work-1789795870518",
    "title": "iron revolution gym",
    "description": "New operational work assigned from the command center.",
    "client": "iron revolution gym",
    "workType": "Other",
    "priority": "Medium",
    "dueDate": "2026-09-25",
    "founderId": "usr_founder",
    "managerId": "person-1789544813478",
    "directAssigneeId": null,
    "stage": "Planning",
    "progress": 5,
    "createdAt": "2026-09-15"
  },
  {
    "id": "work-1789795821322",
    "title": "animal gym ",
    "description": "New operational work assigned from the command center.",
    "client": "animal gym ",
    "workType": "Other",
    "priority": "Medium",
    "dueDate": "2026-09-25",
    "founderId": "usr_founder",
    "managerId": "person-1789544813478",
    "directAssigneeId": null,
    "stage": "Planning",
    "progress": 5,
    "createdAt": "2026-09-15"
  },
  {
    "id": "work-1789796075803",
    "title": "Velvet & mirror unisex salon",
    "description": "New operational work assigned from the command center.",
    "client": "Velvet & mirror unisex salon",
    "workType": "Other",
    "priority": "Medium",
    "dueDate": "2026-09-25",
    "founderId": "usr_founder",
    "managerId": "person-1789544813478",
    "directAssigneeId": null,
    "stage": "Planning",
    "progress": 5,
    "createdAt": "2026-09-15"
  },
  {
    "id": "work-1789796051170",
    "title": "Aura Unisex Salon",
    "description": "New operational work assigned from the command center.",
    "client": "Aura Unisex Salon",
    "workType": "Other",
    "priority": "Medium",
    "dueDate": "2026-09-25",
    "founderId": "usr_founder",
    "managerId": "person-1789544813478",
    "directAssigneeId": null,
    "stage": "Planning",
    "progress": 5,
    "createdAt": "2026-09-15"
  },
  {
    "id": "work-1789796033110",
    "title": "BlueCaps",
    "description": "New operational work assigned from the command center.",
    "client": "BlueCaps",
    "workType": "Other",
    "priority": "Medium",
    "dueDate": "2026-09-25",
    "founderId": "usr_founder",
    "managerId": "person-1789544813478",
    "directAssigneeId": null,
    "stage": "Planning",
    "progress": 5,
    "createdAt": "2026-09-15"
  },
  {
    "id": "work-1789796016154",
    "title": "Ashva - The Event Venue ",
    "description": "New operational work assigned from the command center.",
    "client": "Ashva - The Event Venue ",
    "workType": "Other",
    "priority": "Medium",
    "dueDate": "2026-09-25",
    "founderId": "usr_founder",
    "managerId": "person-1789544813478",
    "directAssigneeId": null,
    "stage": "Planning",
    "progress": 5,
    "createdAt": "2026-09-15"
  },
  {
    "id": "work-1789795990634",
    "title": "Nail stories",
    "description": "New operational work assigned from the command center.",
    "client": "Nail stories",
    "workType": "Other",
    "priority": "Medium",
    "dueDate": "2026-09-25",
    "founderId": "usr_founder",
    "managerId": "person-1789544813478",
    "directAssigneeId": null,
    "stage": "Planning",
    "progress": 5,
    "createdAt": "2026-09-15"
  },
  {
    "id": "work-1789795957113",
    "title": "The Nailco",
    "description": "New operational work assigned from the command center.",
    "client": "The Nailco",
    "workType": "Other",
    "priority": "Medium",
    "dueDate": "2026-09-25",
    "founderId": "usr_founder",
    "managerId": "person-1789544813478",
    "directAssigneeId": null,
    "stage": "Planning",
    "progress": 5,
    "createdAt": "2026-09-15"
  },
  {
    "id": "work-1789795935505",
    "title": "early schoolhouse",
    "description": "New operational work assigned from the command center.",
    "client": "early schoolhouse",
    "workType": "Other",
    "priority": "Medium",
    "dueDate": "2026-09-25",
    "founderId": "usr_founder",
    "managerId": "person-1789544813478",
    "directAssigneeId": null,
    "stage": "Planning",
    "progress": 5,
    "createdAt": "2026-09-15"
  },
  {
    "id": "work-1789795912456",
    "title": "RAAGI ",
    "description": "New operational work assigned from the command center.",
    "client": "RAAGI ",
    "workType": "Other",
    "priority": "Medium",
    "dueDate": "2026-09-25",
    "founderId": "usr_founder",
    "managerId": "person-1789544813478",
    "directAssigneeId": null,
    "stage": "Planning",
    "progress": 5,
    "createdAt": "2026-09-15"
  },
  {
    "id": "work-1789796093199",
    "title": "Sri Ram Public School",
    "description": "New operational work assigned from the command center.",
    "client": "Sri Ram Public School",
    "workType": "Other",
    "priority": "Medium",
    "dueDate": "2026-09-25",
    "founderId": "usr_founder",
    "managerId": "person-1789544813478",
    "directAssigneeId": null,
    "stage": "Planning",
    "progress": 5,
    "createdAt": "2026-09-15"
  },
  {
    "id": "work-1789796124081",
    "title": "Just Bakes",
    "description": "New operational work assigned from the command center.",
    "client": "Just Bakes",
    "workType": "Other",
    "priority": "Medium",
    "dueDate": "2026-09-25",
    "founderId": "usr_founder",
    "managerId": "person-1789544813478",
    "directAssigneeId": null,
    "stage": "Planning",
    "progress": 5,
    "createdAt": "2026-09-15"
  },
  {
    "id": "work-1789796147144",
    "title": "PilatesHub HSR",
    "description": "New operational work assigned from the command center.",
    "client": "PilatesHub HSR",
    "workType": "Other",
    "priority": "Medium",
    "dueDate": "2026-09-25",
    "founderId": "usr_founder",
    "managerId": "person-1789544813478",
    "directAssigneeId": null,
    "stage": "Planning",
    "progress": 5,
    "createdAt": "2026-09-15"
  }
];

export const MIGRATED_TASKS: WorkTask[] = [
  {
    "id": "task-1789796572076",
    "workId": "work-1789795890326",
    "title": "fma sticker design ",
    "instructions": "3 sticker desgin given yesterday ",
    "assigneeId": "person-1789549176116",
    "dueDate": "2026-09-19",
    "priority": "Medium",
    "stage": "Review",
    "progress": 100,
    "timeMinutes": 0,
    "estimatedMinutes": 60,
    "submittedAt": "Manager Approved (Batul)",
    "revisionNote": null
  },
  {
    "id": "task-1789796363584",
    "workId": "work-1789795957113",
    "title": "nailco carousel design",
    "instructions": "reference: 1. https://www.instagram.com/p/DdYeHVemXIk/?stkn=MTNxY2F4azdhaTFmNQ== Slide 1 (cover) Cool things we do that make us, us 💅 Slide 2 Remember your go-to shade before you even sit down Slide 3 Book you in for a fresh set the moment you say \"next time\" Slide 4 Take the time to get every tip and cuticle just right Slide 5 Send you off with nails you can't stop looking at ✨",
    "assigneeId": "person-1789549176116",
    "dueDate": "2026-09-19",
    "priority": "Medium",
    "stage": "Review",
    "progress": 100,
    "timeMinutes": 0,
    "estimatedMinutes": 30,
    "submittedAt": "Manager Approved (Batul)",
    "revisionNote": "Update the hero section and mobile spacing."
  },
  {
    "id": "task-1789986316072",
    "workId": "work-1789796033110",
    "title": "changes for previous creative (badminton)",
    "instructions": "check whatsapp for changes",
    "assigneeId": "person-1789549176116",
    "dueDate": "2026-09-21",
    "priority": "Medium",
    "stage": "Review",
    "progress": 100,
    "timeMinutes": 0,
    "estimatedMinutes": 10,
    "submittedAt": "Manager Approved (Batul)",
    "revisionNote": null
  },
  {
    "id": "task-1789986355549",
    "workId": "work-1789796033110",
    "title": "changes from previous work (Badminton)",
    "instructions": "check whatsapp for details in changes",
    "assigneeId": "person-1789549176116",
    "dueDate": "2026-09-21",
    "priority": "Medium",
    "stage": "Review",
    "progress": 100,
    "timeMinutes": 0,
    "estimatedMinutes": 10,
    "submittedAt": "Manager Approved (Batul)",
    "revisionNote": null
  },
  {
    "id": "task-1789973851057",
    "workId": "work-1789817911426",
    "title": "Story Creative Edit ",
    "instructions": "Change Turn into Prepare early, Change meet the ball in the front to - Contact in the front use client suggested images",
    "assigneeId": "person-1789738156900",
    "dueDate": "2026-09-21",
    "priority": "Medium",
    "stage": "Assigned",
    "progress": 0,
    "timeMinutes": 0,
    "estimatedMinutes": 240,
    "submittedAt": null,
    "revisionNote": null
  },
  {
    "id": "task-1789971163501",
    "workId": "work-1789796204394",
    "title": "parking post for pilates ",
    "instructions": "parking post",
    "assigneeId": "person-1789549176116",
    "dueDate": "2026-09-21",
    "priority": "Medium",
    "stage": "Review",
    "progress": 100,
    "timeMinutes": 0,
    "estimatedMinutes": 30,
    "submittedAt": "Manager Approved (Batul)",
    "revisionNote": "change bg color "
  },
  {
    "id": "task-1789984121787",
    "workId": "work-1789981533617",
    "title": "reviewing clients weekly report ",
    "instructions": "",
    "assigneeId": "person-1789737883615",
    "dueDate": "2026-09-23",
    "priority": "Medium",
    "stage": "Assigned",
    "progress": 0,
    "timeMinutes": 0,
    "estimatedMinutes": 240,
    "submittedAt": null,
    "revisionNote": null
  },
  {
    "id": "task-1789796508445",
    "workId": "work-1789795957113",
    "title": "nailco 2nd carousel design ",
    "instructions": "reference: 2. https://www.instagram.com/p/DdI97bUjx-r/?stkn=MXZoYmExY2c0eHhpaw== use https://drive.google.com/drive/folders/1t5BO8BuNHpiWc39x44dhpg1irBUGPpUy?usp=sharing this drive for this reference but also add people face",
    "assigneeId": "person-1789549176116",
    "dueDate": "2026-09-19",
    "priority": "Medium",
    "stage": "Review",
    "progress": 100,
    "timeMinutes": 0,
    "estimatedMinutes": 30,
    "submittedAt": "Manager Approved (Batul)",
    "revisionNote": null
  },
  {
    "id": "task-1789986195247",
    "workId": "work-1789795990634",
    "title": "changes for previous design ",
    "instructions": "pls check whatsappp for details ",
    "assigneeId": "person-1789549176116",
    "dueDate": "2026-09-21",
    "priority": "Medium",
    "stage": "Review",
    "progress": 100,
    "timeMinutes": 0,
    "estimatedMinutes": 30,
    "submittedAt": "Manager Approved (Batul)",
    "revisionNote": null
  },
  {
    "id": "task-1790061964880",
    "workId": "work-1789796147144",
    "title": "1 post reference for design :https://in.pinterest.com/pin/651614639874313883/",
    "instructions": "Whoever said Pilates was easy?  Come try it at PilatesHub DRIVE:https://drive.google.com/drive/u/0/folders/1HdP_qW1kyKTRZBG-OALSb1plpvjy5To1       https://drive.google.com/drive/u/0/folders/1jGD-syxBba6wDMNRrGT7_B0aEYUsKI9X   show a picture in which a pilates pose looks difficult ",
    "assigneeId": "person-1789549176116",
    "dueDate": "2026-09-22",
    "priority": "Medium",
    "stage": "Review",
    "progress": 100,
    "timeMinutes": 0,
    "estimatedMinutes": 30,
    "submittedAt": "Manager Approved (Batul)",
    "revisionNote": null
  },
  {
    "id": "task-1790054504965",
    "workId": "work-1789796075803",
    "title": "edit one video",
    "instructions": "edit one video from the drive",
    "assigneeId": "person-1789544916637",
    "dueDate": "2026-09-22",
    "priority": "Medium",
    "stage": "Assigned",
    "progress": 0,
    "timeMinutes": 0,
    "estimatedMinutes": 240,
    "submittedAt": null,
    "revisionNote": null
  },
  {
    "id": "task-1789975198432",
    "workId": "work-1789975198149",
    "title": "accounts ans sales crm build",
    "instructions": "Work assigned to Dhuruv Swamy",
    "assigneeId": "person-1789544851698",
    "dueDate": "2026-09-21",
    "priority": "Medium",
    "stage": "Completed",
    "progress": 100,
    "timeMinutes": 0,
    "estimatedMinutes": 240,
    "submittedAt": "2026-10-21T12:14:48.072Z",
    "revisionNote": null
  },
  {
    "id": "task-1790658630734",
    "workId": "work-1789817695400",
    "title": "1 video edit ",
    "instructions": "drive link already shared ",
    "assigneeId": "person-1789738443448",
    "dueDate": "2026-09-29",
    "priority": "Medium",
    "stage": "Revision",
    "progress": 70,
    "timeMinutes": 0,
    "estimatedMinutes": 240,
    "submittedAt": "Submitted today",
    "revisionNote": "text for kick & Hit \nWhere young champions begin — Kick & Hit\n\n*Reel 2*\nBuilding young champions at Kick & Hit."
  },
  {
    "id": "task-1789986152658",
    "workId": "work-1789796051170",
    "title": "one video edit ",
    "instructions": "https://drive.google.com/drive/folders/1sJwG4mwGysRXV2tjO71aVLYe5Suouxhj?usp=sharing drive link . REFERENCE FOR EDIT: https://in.pinterest.com/pin/950470696366516543/",
    "assigneeId": "person-1789544916637",
    "dueDate": "2026-09-21",
    "priority": "Medium",
    "stage": "Review",
    "progress": 100,
    "timeMinutes": 0,
    "estimatedMinutes": 45,
    "submittedAt": "Manager Approved (Batul)",
    "revisionNote": null
  },
  {
    "id": "task-1789983187332",
    "workId": "work-1789981428986",
    "title": "video from the previous folder ",
    "instructions": "one video ",
    "assigneeId": "person-1789544916637",
    "dueDate": "2026-09-21",
    "priority": "Medium",
    "stage": "Review",
    "progress": 100,
    "timeMinutes": 0,
    "estimatedMinutes": 45,
    "submittedAt": "Manager Approved (Batul)",
    "revisionNote": null
  },
  {
    "id": "task-1789986729427",
    "workId": "work-1789981516632",
    "title": "1 video edit ",
    "instructions": "DRIVE LINK: https://drive.google.com/drive/folders/1lKW1uet9pP5J8WulNna5bIrLbtudZJiX?usp=sharing. Check your whatsapp for references and script  ",
    "assigneeId": "person-1789544916637",
    "dueDate": "2026-09-21",
    "priority": "Medium",
    "stage": "Review",
    "progress": 100,
    "timeMinutes": 0,
    "estimatedMinutes": 45,
    "submittedAt": "Manager Approved (Batul)",
    "revisionNote": "change in edit "
  },
  {
    "id": "task-1789985308246",
    "workId": "work-1789795990634",
    "title": "video editing of nail stories malleshwaram branch ",
    "instructions": "nail stories malleshwaram have shared you clips on wahstapp with reference reels please edit 2 of them with help of reference ",
    "assigneeId": "person-1789544916637",
    "dueDate": "2026-09-21",
    "priority": "Medium",
    "stage": "Review",
    "progress": 100,
    "timeMinutes": 0,
    "estimatedMinutes": 45,
    "submittedAt": "2026-10-22T04:57:03.073Z",
    "revisionNote": null
  },
  {
    "id": "task-1789796735452",
    "workId": "work-1789796075803",
    "title": "video editing ",
    "instructions": "edit 1 velvet video from the drive given yesterday",
    "assigneeId": "person-1789544916637",
    "dueDate": "2026-09-19",
    "priority": "Medium",
    "stage": "Review",
    "progress": 100,
    "timeMinutes": 0,
    "estimatedMinutes": 45,
    "submittedAt": "Manager Approved (Batul)",
    "revisionNote": null
  },
  {
    "id": "task-1790054341648",
    "workId": "work-1789795821322",
    "title": "edit 3 videos from the drive. 1. script talking 2. one trainer explaining a yoga 3. a yoga edit with trainer and model with song",
    "instructions": "DRIVE: https://drive.google.com/drive/folders/1FjfNrVDMDmYYpG0pQmHM8B5Qf71Trz4H?usp=sharing. ",
    "assigneeId": "person-1789544916637",
    "dueDate": "2026-09-22",
    "priority": "Medium",
    "stage": "Review",
    "progress": 100,
    "timeMinutes": 0,
    "estimatedMinutes": 90,
    "submittedAt": "Manager Approved (Batul)",
    "revisionNote": null
  },
  {
    "id": "task-1790663118996",
    "workId": "work-1789795957113",
    "title": "client review edit",
    "instructions": "video is sent on whatsapp ",
    "assigneeId": "person-1789544916637",
    "dueDate": "2026-09-29",
    "priority": "Medium",
    "stage": "Review",
    "progress": 100,
    "timeMinutes": 0,
    "estimatedMinutes": 240,
    "submittedAt": "Manager Approved (Batul)",
    "revisionNote": null
  },
  {
    "id": "task-1789970960311",
    "workId": "work-1789817812002",
    "title": "Change Mackerel to Coastal Food",
    "instructions": "Change Mackerel to Coastal Food",
    "assigneeId": "person-1789737923403",
    "dueDate": "2026-09-21",
    "priority": "Medium",
    "stage": "Review",
    "progress": 100,
    "timeMinutes": 0,
    "estimatedMinutes": 240,
    "submittedAt": "Manager Approved (Swathi C)",
    "revisionNote": null
  },
  {
    "id": "task-1789796702328",
    "workId": "work-1789796051170",
    "title": "aura video editing ",
    "instructions": "edit 1 aura video from the drive i hhave given yesterday",
    "assigneeId": "person-1789544916637",
    "dueDate": "2026-09-19",
    "priority": "Medium",
    "stage": "Review",
    "progress": 100,
    "timeMinutes": 0,
    "estimatedMinutes": 45,
    "submittedAt": "Manager Approved (Batul)",
    "revisionNote": "Update the hero section and mobile spacing."
  },
  {
    "id": "task-1789796656665",
    "workId": "work-1789795912456",
    "title": "raagi video editing ",
    "instructions": "voiceover raagi video editing ",
    "assigneeId": "person-1789544916637",
    "dueDate": "2026-09-19",
    "priority": "Medium",
    "stage": "Review",
    "progress": 100,
    "timeMinutes": 0,
    "estimatedMinutes": 45,
    "submittedAt": "Manager Approved (Batul)",
    "revisionNote": "change the factory clip "
  },
  {
    "id": "task-1790662401072",
    "workId": "work-1789796075803",
    "title": "men offer changes ",
    "instructions": "re design men offer x3 ",
    "assigneeId": "person-1789549176116",
    "dueDate": "2026-09-29",
    "priority": "Medium",
    "stage": "Review",
    "progress": 100,
    "timeMinutes": 0,
    "estimatedMinutes": 240,
    "submittedAt": "Manager Approved (Batul)",
    "revisionNote": null
  },
  {
    "id": "task-1789975682330",
    "workId": "work-1789817738758",
    "title": "Beginners Transform ",
    "instructions": "Poster",
    "assigneeId": "person-1789737923403",
    "dueDate": "2026-09-21",
    "priority": "Medium",
    "stage": "Review",
    "progress": 100,
    "timeMinutes": 0,
    "estimatedMinutes": 240,
    "submittedAt": "2026-10-28T05:36:48.242Z",
    "revisionNote": null
  },
  {
    "id": "task-1789970844493",
    "workId": "work-1789817738758",
    "title": "Poster - Transformation  Package ",
    "instructions": "Same content but logo should be different",
    "assigneeId": "person-1789737923403",
    "dueDate": "2026-09-21",
    "priority": "Medium",
    "stage": "Review",
    "progress": 100,
    "timeMinutes": 0,
    "estimatedMinutes": 240,
    "submittedAt": "2026-10-28T05:36:38.729Z",
    "revisionNote": null
  },
  {
    "id": "task-1789970873786",
    "workId": "work-1789817765948",
    "title": "Poster - Transformation Package ",
    "instructions": "Same content but logo should be different",
    "assigneeId": "person-1789737923403",
    "dueDate": "2026-09-21",
    "priority": "Medium",
    "stage": "Review",
    "progress": 100,
    "timeMinutes": 0,
    "estimatedMinutes": 240,
    "submittedAt": "2026-10-28T05:36:54.198Z",
    "revisionNote": null
  },
  {
    "id": "task-1789970928983",
    "workId": "work-1789970845317",
    "title": "Carousel 01: 5 Things Parents Should Check Before Choosing a PU College",
    "instructions": "Visual Reference Concept: Pinterest Inspiration (https://www.pinterest.com/pin/181551428723652657/) —   Slide 1 — Hook Choosing a PU College for Your Child? Here are 5 things every parent should check first. Slide 2 — Academic Foundation 1. Strong Academic Support Look for a college that focuses on clear concepts, consistent learning and academic guidance — not just marks. 2. Competitive Exam Preparation Integrated preparation can help students balance PU academics with entrance exam goals. Slide 3 — Career & Student Support 3. Stream-to-Career Clarity PCMB, PCMC or Commerce should align with your child’s interests and future goals. 4. Personal Attention A supportive learning environment helps students stay focused, confident and consistent. Slide 4 — Closing 5. A College That Prepares Them for What’s Next At Paripoorna Prajna, integrated education brings academics, competitive preparation and career-focused learning together. Admissions Open 2026–27 Paripoorna Prajna Integrated PU College",
    "assigneeId": "person-1789737923403",
    "dueDate": "2026-09-20",
    "priority": "Medium",
    "stage": "Review",
    "progress": 100,
    "timeMinutes": 0,
    "estimatedMinutes": 240,
    "submittedAt": "Manager Approved (Swathi C)",
    "revisionNote": null
  },
  {
    "id": "task-1789997135287",
    "workId": "work-1789795912456",
    "title": "linkedin desgin ",
    "instructions": "follow the pdf and design a linkedin carousel for raagi",
    "assigneeId": "person-1789549176116",
    "dueDate": "2026-09-21",
    "priority": "Medium",
    "stage": "Review",
    "progress": 100,
    "timeMinutes": 0,
    "estimatedMinutes": 30,
    "submittedAt": "Manager Approved (Batul)",
    "revisionNote": null
  },
  {
    "id": "task-1789796538548",
    "workId": "work-1789795957113",
    "title": "nailco 3rd carosel design ",
    "instructions": "reference: 3. https://www.instagram.com/p/DcRCXBbDdhs/?stkn=MTI2OHkxZWpraTJweA== for this reference show the work and the ambience according to the content given below  Slide 1 (cover) Bad Reviews ⭐ ft. Naico Nail Studio  Slide 2 ⭐ Too many designs to choose from. I spent 40 mins deciding and now I want to come back for all of them.  Slide 3 ⭐ My set lasted so long I almost forgot what my natural nails look like. Rude.  Slide 4 ⭐  I asked for something simple, they gave me nails I can't stop staring at instead.  Slide 5 ⭐  My friend doesn't even do her nails. Now she's fighting me for Naico's number.  Slide 6 ⭐ Came in for one finger fix, walked out with a full set. No regrets. Only compliments.",
    "assigneeId": "person-1789549176116",
    "dueDate": "2026-09-19",
    "priority": "Medium",
    "stage": "Review",
    "progress": 100,
    "timeMinutes": 0,
    "estimatedMinutes": 30,
    "submittedAt": "Manager Approved (Batul)",
    "revisionNote": "changes in images"
  },
  {
    "id": "task-1790058718345",
    "workId": "work-1789981533617",
    "title": "preparing invoices for clients @ september ",
    "instructions": "",
    "assigneeId": "person-1789737883615",
    "dueDate": "2026-09-24",
    "priority": "Medium",
    "stage": "Review",
    "progress": 100,
    "timeMinutes": 25,
    "estimatedMinutes": 240,
    "submittedAt": "Submitted today",
    "revisionNote": null
  },
  {
    "id": "task-1790063345423",
    "workId": "work-1789796075803",
    "title": "reference: https://www.instagram.com/p/DXhNXl7AeaX/?igsi=bmZ5bm84eTlxMDV4&img_index=1",
    "instructions": "drive: https://drive.google.com/drive/u/0/folders/1LZfC1Ad3jqKYFAh-klx7YqJJiFccbgr4",
    "assigneeId": "person-1789737923403",
    "dueDate": "2026-09-22",
    "priority": "Medium",
    "stage": "Review",
    "progress": 100,
    "timeMinutes": 0,
    "estimatedMinutes": 45,
    "submittedAt": "Manager Approved (Batul)",
    "revisionNote": null
  },
  {
    "id": "task-1790052614457",
    "workId": "work-1789796033110",
    "title": "linkedin post design ",
    "instructions": "HOOK: Another team outing. Still watching, not playing? Slide 2 Watching a cricket match together doesn’t mean you’re playing as a team.  Slide 3 An outing should give everyone a part to play.  Slide 4 Shared fumbles can break the ice faster than polite small talk.  Slide 5 Forget job titles—who’s taking the next over?  Slide 6 You don’t need great players, just games that welcome everyone.  Slide 7 Make your next offsite a team effort at Blue Caps Turf Arena.....use their images and in some slides and other slides you can generatre imges if required. DRIVE: https://drive.google.com/drive/folders/1FIme_AXJrvf3sWlUSFQ7me0CKFBZ5rX-?usp=sharing",
    "assigneeId": "person-1789549176116",
    "dueDate": "2026-09-22",
    "priority": "Medium",
    "stage": "Review",
    "progress": 100,
    "timeMinutes": 0,
    "estimatedMinutes": 30,
    "submittedAt": "Manager Approved (Batul)",
    "revisionNote": null
  },
  {
    "id": "task-1790409619950",
    "workId": "work-1789796075803",
    "title": "ads poster women 1:1 ",
    "instructions": "VELVET MIRROR UNISEX SALON HOOK: Ladies, Your Glow-Up Starts at ₹299!  BODY: Clean-Up — ₹299 Any Haircut — ₹399 Hydra Facial — ₹1,500 Any Hair Colour — ₹1,999  CTA: Book Your Appointment Now! (add location and contact details)",
    "assigneeId": "person-1789549176116",
    "dueDate": "2026-09-26",
    "priority": "Medium",
    "stage": "Review",
    "progress": 100,
    "timeMinutes": 25,
    "estimatedMinutes": 240,
    "submittedAt": "Manager Approved (Batul)",
    "revisionNote": null
  },
  {
    "id": "task-1790062036164",
    "workId": "work-1789796147144",
    "title": "post design reference: https://in.pinterest.com/pin/1127518456785408231/",
    "instructions": "You don’t have to be good at Pilates to start. That’s what the first class atPilatesHub is for ",
    "assigneeId": "person-1789549176116",
    "dueDate": "2026-09-22",
    "priority": "Medium",
    "stage": "Review",
    "progress": 100,
    "timeMinutes": 0,
    "estimatedMinutes": 30,
    "submittedAt": "Manager Approved (Batul)",
    "revisionNote": null
  },
  {
    "id": "task-1790053918964",
    "workId": "work-1789796204394",
    "title": "insta post designing",
    "instructions": "I need one poster newly opened Pulates Hub Kormangala, With contact number  Location want put -100 metres from Nexus mall Kormangala,100 metres from prestige acropolis",
    "assigneeId": "person-1789549176116",
    "dueDate": "2026-09-22",
    "priority": "Medium",
    "stage": "Review",
    "progress": 100,
    "timeMinutes": 0,
    "estimatedMinutes": 45,
    "submittedAt": "Manager Approved (Batul)",
    "revisionNote": null
  },
  {
    "id": "task-1790062429883",
    "workId": "work-1789796147144",
    "title": "post design video type",
    "instructions": "Nobody talks about the coordination It takes to breathe and count at the same time . try video post for this one. add a video form the drive that matches this sentence.",
    "assigneeId": "person-1789549176116",
    "dueDate": "2026-09-22",
    "priority": "Medium",
    "stage": "Review",
    "progress": 100,
    "timeMinutes": 0,
    "estimatedMinutes": 30,
    "submittedAt": "Manager Approved (Batul)",
    "revisionNote": null
  },
  {
    "id": "task-1790052798304",
    "workId": "work-1789981533617",
    "title": "weekly reports & clients data review ",
    "instructions": "",
    "assigneeId": "person-1789737883615",
    "dueDate": "2026-09-22",
    "priority": "Medium",
    "stage": "Review",
    "progress": 100,
    "timeMinutes": 0,
    "estimatedMinutes": 240,
    "submittedAt": "Submitted today",
    "revisionNote": null
  },
  {
    "id": "task-1790076110773",
    "workId": "work-1789796093199",
    "title": "ads post content 1:1 size ",
    "instructions": "Drive: https://drive.google.com/drive/u/0/folders/1HsMpJ5swAGSX6rz8GWMvg8yaMnQ-Fc7e. content: POST 1  HOOK A Strong Foundation for Your Child’s Growing Years.  BODY Admissions Open 2027–28 (mention big) • CBSE-affiliated school • Focus on value-based education • Spacious classrooms • Sports facilities for physical development • Extracurricular activities to explore interests  CTA Enroll Today Call 9513626610 / 8197545450",
    "assigneeId": "person-1789549176116",
    "dueDate": "2026-09-22",
    "priority": "Medium",
    "stage": "Review",
    "progress": 100,
    "timeMinutes": 0,
    "estimatedMinutes": 30,
    "submittedAt": "Manager Approved (Batul)",
    "revisionNote": null
  },
  {
    "id": "task-1790076189485",
    "workId": "work-1789796093199",
    "title": "ads post 1:1 size ",
    "instructions": "POST 2  HOOK See Where Your Child Can Learn, Play and Grow.  BODY Admissions Open 2027–28 (mention big)  • Spacious classrooms and a dedicated play area • Sports and extracurricular activities • Value-based education • Pick-up and drop facilities on available routes  CBSE Affiliation No. 831402  CTAPlan a School Visit. Call 9513626610 / 8197545450  Sarjapura, Bangalore – 562125",
    "assigneeId": "person-1789549176116",
    "dueDate": "2026-09-22",
    "priority": "Medium",
    "stage": "Review",
    "progress": 100,
    "timeMinutes": 0,
    "estimatedMinutes": 30,
    "submittedAt": "Manager Approved (Batul)",
    "revisionNote": null
  },
  {
    "id": "task-1790062914423",
    "workId": "work-1789795990634",
    "title": "add new clips ",
    "instructions": "in the old video you have already edited add the new constructions videos i had sent ",
    "assigneeId": "person-1789544916637",
    "dueDate": "2026-09-22",
    "priority": "Medium",
    "stage": "Review",
    "progress": 100,
    "timeMinutes": 0,
    "estimatedMinutes": 15,
    "submittedAt": "2026-10-22T04:57:15.135Z",
    "revisionNote": null
  },
  {
    "id": "task-1790227258269",
    "workId": "work-1789796147144",
    "title": "8 stories",
    "instructions": "DRIVE1:https://drive.google.com/drive/u/0/folders/18tnIi5-fWz2x2zjUrhG1JpULZLQT1Dd_ DRIVE2: https://drive.google.com/drive/u/0/folders/1IFuBFdXE6-MUoVhu87nZeZi2JYMyxBHL DRIVE3: http://drive.google.com/drive/u/0/folders/1EXVdeqCMB0TeHIOgzL8mUpQoRKZnPfr3",
    "assigneeId": "person-1789549176116",
    "dueDate": "2026-09-24",
    "priority": "Medium",
    "stage": "Review",
    "progress": 100,
    "timeMinutes": 0,
    "estimatedMinutes": 240,
    "submittedAt": "Manager Approved (Batul)",
    "revisionNote": null
  },
  {
    "id": "task-1790573003236",
    "workId": "work-1789796075803",
    "title": "velvet unisex salon seperate offer posters ",
    "instructions": "women offer poster 2 ",
    "assigneeId": "person-1789549176116",
    "dueDate": "2026-09-28",
    "priority": "Medium",
    "stage": "Review",
    "progress": 100,
    "timeMinutes": 0,
    "estimatedMinutes": 240,
    "submittedAt": "Manager Approved (Batul)",
    "revisionNote": null
  },
  {
    "id": "task-1790140323135",
    "workId": "work-1789796204394",
    "title": "stories 8 ",
    "instructions": "1. **The “Too Much Tension” Check**     **Visual:** A workout photo with small arrows pointing towards the shoulders and jaw.     **Text:**      “Quick tension check 👀      Relax your jaw.      Let your shoulders settle.      Keep breathing.”     **Poll:** “Were you holding extra tension?”      **Options:** “Caught me 😅” / “Feeling relaxed”   2. **Which One Makes an Exercise Harder?**     **Visual:** A photo of someone performing a Pilates exercise, with the question above it.     **Text:**      ��Which can make a Pilates move more challenging?”     **Quiz options:**      A. Moving faster      B. Slowing down with control ✅      C. Holding your breath   3. **Pilates “Cheat Code”**     **Visual:** A cropped workout photo with the tip in a clear text box.     **Text:**      “Feeling the exercise in the wrong place?          Make the movement smaller.      Slow down.      Check your position with your instructor.”     **Small footer:** “If it hurts, pause.”   4. **Pick Your Pilates Challenge**     **Visual:** Two existing workout photos side by side.     **Text:**      “Pick your focus for today’s Pilates class 👇”     **Poll options:**      “Balance ✨” / “Control 💪”   5. **Breathing Challenge**     **Visual:** A calm studio photo with plenty of space around the text.     **Text:**      “Pause before your next set.          Take 3 gentle breaths.      Relax your shoulders.      Breathe at your own pace.”     **Poll:** “How do you feel?”      **Options:** “More relaxed 😌” / “About the same”   6. **Pilates Reality Check**     **Visual:** An existing class photo with the text over a plain, readable background.     **Text:**      “Your Pilates doesn’t have to look perfect.          Move with control.      Take a reset when you need one.      Listen to your body.”     **Emoji slider:** “Needed this reminder?” 💛   7. **You’re the Instructor**     **Visual:** A Pilates exercise photo with a small label: “Imagine this scenario”.     **Text:**      “You’re the instructor 👀          Someone is rushing and losing control.      What would you correct first?”     **Quiz options:**      A. Their speed ✅      B. Their outfit      C. Their rep count     **Designer note:** Don’t label the person in the photo as doing the exercise incorrectly.   8. **Don’t Count Every Rep the Same**     **Visual:** A clear workout photo with “Make every rep count” in large text.     **Text:**      “Make every rep count.          Keep your pace steady.      Use a range you can control.      Pay attention to the return.”     **Poll:** “What’s your focus today?”      **Options:** “Steady pace” / “Better control”",
    "assigneeId": "person-1789737923403",
    "dueDate": "2026-09-23",
    "priority": "Medium",
    "stage": "Review",
    "progress": 100,
    "timeMinutes": 0,
    "estimatedMinutes": 45,
    "submittedAt": "Manager Approved (Batul)",
    "revisionNote": null
  },
  {
    "id": "task-1790157668111",
    "workId": "work-1789795912456",
    "title": "linkedin post ",
    "instructions": "refer pdf i gave and instructions to be folllowed for designing as given yesterdya for raagi ",
    "assigneeId": "person-1789549176116",
    "dueDate": "2026-09-23",
    "priority": "Medium",
    "stage": "Review",
    "progress": 100,
    "timeMinutes": 0,
    "estimatedMinutes": 45,
    "submittedAt": "Manager Approved (Batul)",
    "revisionNote": null
  },
  {
    "id": "task-1790234750501",
    "workId": "work-1789796177804",
    "title": "stories changes ",
    "instructions": "change design of stories of pilates 8",
    "assigneeId": "person-1789549176116",
    "dueDate": "2026-09-24",
    "priority": "Medium",
    "stage": "Review",
    "progress": 100,
    "timeMinutes": 0,
    "estimatedMinutes": 30,
    "submittedAt": "Manager Approved (Batul)",
    "revisionNote": null
  },
  {
    "id": "task-1790409685649",
    "workId": "work-1789796075803",
    "title": "men ads offer poster 1:1 ",
    "instructions": "HOOK: Men's Grooming Combo at Just ₹999! BODY: Haircut + Clean-Up + Hair Spa — ₹999 Hydra Facial — ₹1,500  CTA: Book Your Appointment Now!",
    "assigneeId": "person-1789549176116",
    "dueDate": "2026-09-26",
    "priority": "Medium",
    "stage": "Review",
    "progress": 100,
    "timeMinutes": 0,
    "estimatedMinutes": 240,
    "submittedAt": "Manager Approved (Batul)",
    "revisionNote": null
  },
  {
    "id": "task-1790244036590",
    "workId": "work-1789981516632",
    "title": "insta post",
    "instructions": "drive: https://drive.google.com/drive/u/0/folders/1xAY4Fa_4Yed246xEsgOpaozFGySPH7c7",
    "assigneeId": "person-1789549176116",
    "dueDate": "2026-09-24",
    "priority": "Medium",
    "stage": "Review",
    "progress": 100,
    "timeMinutes": 0,
    "estimatedMinutes": 240,
    "submittedAt": "Manager Approved (Batul)",
    "revisionNote": null
  },
  {
    "id": "task-1790408871259",
    "workId": "work-1789981533617",
    "title": "Cutiscuplt carousel same ads",
    "instructions": "check whatsapp for carousel content ",
    "assigneeId": "person-1789549176116",
    "dueDate": "2026-09-26",
    "priority": "Medium",
    "stage": "Review",
    "progress": 100,
    "timeMinutes": 0,
    "estimatedMinutes": 240,
    "submittedAt": "Manager Approved (Batul)",
    "revisionNote": null
  },
  {
    "id": "task-1790410199944",
    "workId": "work-1789981533617",
    "title": "lakme kanakpura poster ads 1:1 ",
    "instructions": "content on whatsapp",
    "assigneeId": "person-1789737923403",
    "dueDate": "2026-09-26",
    "priority": "Medium",
    "stage": "Review",
    "progress": 100,
    "timeMinutes": 0,
    "estimatedMinutes": 240,
    "submittedAt": "Manager Approved (Batul)",
    "revisionNote": null
  },
  {
    "id": "task-1790408709565",
    "workId": "work-1789981533617",
    "title": "client name cutiscuplt ",
    "instructions": "content given on whatsapp ",
    "assigneeId": "person-1789549176116",
    "dueDate": "2026-09-26",
    "priority": "Medium",
    "stage": "Approved",
    "progress": 100,
    "timeMinutes": 0,
    "estimatedMinutes": 240,
    "submittedAt": "Approved by Founder (Arka Founder)",
    "revisionNote": null
  },
  {
    "id": "task-1790573019558",
    "workId": "work-1789796075803",
    "title": "velvet unisex salon seperate offer posters ",
    "instructions": "women offer poster 3 ",
    "assigneeId": "person-1789549176116",
    "dueDate": "2026-09-28",
    "priority": "Medium",
    "stage": "Review",
    "progress": 100,
    "timeMinutes": 0,
    "estimatedMinutes": 240,
    "submittedAt": "Manager Approved (Batul)",
    "revisionNote": null
  },
  {
    "id": "task-1790573035533",
    "workId": "work-1789796075803",
    "title": "velvet unisex salon seperate offer posters ",
    "instructions": "women offer poster 4 ",
    "assigneeId": "person-1789549176116",
    "dueDate": "2026-09-28",
    "priority": "Medium",
    "stage": "Review",
    "progress": 100,
    "timeMinutes": 0,
    "estimatedMinutes": 240,
    "submittedAt": "Manager Approved (Batul)",
    "revisionNote": null
  },
  {
    "id": "task-1790573093701",
    "workId": "work-1789796075803",
    "title": "velvet unisex salon seperate offer posters ",
    "instructions": "men offer post 4 ",
    "assigneeId": "person-1789549176116",
    "dueDate": "2026-09-28",
    "priority": "Medium",
    "stage": "Review",
    "progress": 100,
    "timeMinutes": 0,
    "estimatedMinutes": 240,
    "submittedAt": "Manager Approved (Batul)",
    "revisionNote": null
  },
  {
    "id": "task-1790573052158",
    "workId": "work-1789796075803",
    "title": "velvet unisex salon seperate offer posters ",
    "instructions": "men offer poster 1 ",
    "assigneeId": "person-1789549176116",
    "dueDate": "2026-09-28",
    "priority": "Medium",
    "stage": "Review",
    "progress": 100,
    "timeMinutes": 0,
    "estimatedMinutes": 240,
    "submittedAt": "Manager Approved (Batul)",
    "revisionNote": null
  },
  {
    "id": "task-1790573080794",
    "workId": "work-1789796075803",
    "title": "velvet unisex salon seperate offer posters ",
    "instructions": "men offer post 3 ",
    "assigneeId": "person-1789549176116",
    "dueDate": "2026-09-28",
    "priority": "Medium",
    "stage": "Review",
    "progress": 100,
    "timeMinutes": 0,
    "estimatedMinutes": 240,
    "submittedAt": "Manager Approved (Batul)",
    "revisionNote": null
  },
  {
    "id": "task-1790572937725",
    "workId": "work-1789981533617",
    "title": "velvet unisex salon seperate offer posters ",
    "instructions": "women poster 1",
    "assigneeId": "person-1789549176116",
    "dueDate": "2026-09-28",
    "priority": "Medium",
    "stage": "Review",
    "progress": 100,
    "timeMinutes": 0,
    "estimatedMinutes": 240,
    "submittedAt": "Manager Approved (Batul)",
    "revisionNote": null
  },
  {
    "id": "task-1790399003087",
    "workId": "work-1789795935505",
    "title": "design cover pages for all reels on the page",
    "instructions": "instagram acc : https://www.instagram.com/earlyschoolhouse/ make sure the content is aesthetic only one simple line for the thumbnail and fonts minimal ",
    "assigneeId": "person-1789549176116",
    "dueDate": "2026-09-26",
    "priority": "Medium",
    "stage": "Review",
    "progress": 100,
    "timeMinutes": 0,
    "estimatedMinutes": 240,
    "submittedAt": "Manager Approved (Batul)",
    "revisionNote": null
  },
  {
    "id": "task-1790573067034",
    "workId": "work-1789796075803",
    "title": "velvet unisex salon seperate offer posters ",
    "instructions": "men offer post 2 ",
    "assigneeId": "person-1789549176116",
    "dueDate": "2026-09-28",
    "priority": "Medium",
    "stage": "Review",
    "progress": 100,
    "timeMinutes": 0,
    "estimatedMinutes": 240,
    "submittedAt": "Manager Approved (Batul)",
    "revisionNote": null
  },
  {
    "id": "task-1790595580828",
    "workId": "work-1789796093199",
    "title": "one carousel ",
    "instructions": "reference and content sent on whatsapp",
    "assigneeId": "person-1789549176116",
    "dueDate": "2026-09-28",
    "priority": "Medium",
    "stage": "Review",
    "progress": 100,
    "timeMinutes": 0,
    "estimatedMinutes": 240,
    "submittedAt": "Manager Approved (Batul)",
    "revisionNote": null
  },
  {
    "id": "task-1790658566516",
    "workId": "work-1789981428986",
    "title": "1 smartlook vide edit ",
    "instructions": "",
    "assigneeId": "person-1789738443448",
    "dueDate": "2026-09-29",
    "priority": "Medium",
    "stage": "Assigned",
    "progress": 0,
    "timeMinutes": 0,
    "estimatedMinutes": 240,
    "submittedAt": null,
    "revisionNote": null
  },
  {
    "id": "task-1790658587778",
    "workId": "work-1789981428986",
    "title": "1 video edit ",
    "instructions": "",
    "assigneeId": "person-1789738443448",
    "dueDate": "2026-09-29",
    "priority": "Medium",
    "stage": "Assigned",
    "progress": 0,
    "timeMinutes": 0,
    "estimatedMinutes": 240,
    "submittedAt": null,
    "revisionNote": null
  },
  {
    "id": "task-1790573325229",
    "workId": "work-1789795935505",
    "title": "2 videos from drive (parents review)",
    "instructions": "Drive: https://drive.google.com/drive/folders/1ksYKLPVAilNYVsygDDOSu2H-ubla4GTO?usp=sharing",
    "assigneeId": "person-1789544916637",
    "dueDate": "2026-09-28",
    "priority": "Medium",
    "stage": "Review",
    "progress": 100,
    "timeMinutes": 0,
    "estimatedMinutes": 240,
    "submittedAt": "Manager Approved (Batul)",
    "revisionNote": null
  },
  {
    "id": "task-1790398330398",
    "workId": "work-1789981516632",
    "title": "try doing something from the drive (give reference what you can do we can discuss)",
    "instructions": "one amora video",
    "assigneeId": "person-1789544916637",
    "dueDate": "2026-09-26",
    "priority": "Medium",
    "stage": "Review",
    "progress": 100,
    "timeMinutes": 0,
    "estimatedMinutes": 240,
    "submittedAt": "Manager Approved (Batul)",
    "revisionNote": null
  },
  {
    "id": "task-1790573250549",
    "workId": "work-1789981428986",
    "title": "2 new videos reference sent on whatsapp ",
    "instructions": "Drive: https://drive.google.com/drive/u/0/folders/14sRrVn9xQHWXdGP4XsQp61jpwh3qdeFI",
    "assigneeId": "person-1789544916637",
    "dueDate": "2026-09-28",
    "priority": "Medium",
    "stage": "Review",
    "progress": 100,
    "timeMinutes": 0,
    "estimatedMinutes": 240,
    "submittedAt": "Manager Approved (Batul)",
    "revisionNote": null
  },
  {
    "id": "task-1790573191562",
    "workId": "work-1789796033110",
    "title": "2 new videos ",
    "instructions": "drive: https://drive.google.com/drive/u/0/folders/1689Zducvv3T0Ol26RggyJ3IFRdIg2gyL",
    "assigneeId": "person-1789544916637",
    "dueDate": "2026-09-28",
    "priority": "Medium",
    "stage": "Review",
    "progress": 100,
    "timeMinutes": 0,
    "estimatedMinutes": 240,
    "submittedAt": "Manager Approved (Batul)",
    "revisionNote": null
  },
  {
    "id": "task-1790745656037",
    "workId": "work-1789981533617",
    "title": "gandhi jaynati stories ",
    "instructions": "Gandhi jayanti stories  PLEASE KEEP IT SIMPLE AND DO NOT RELATE IT TO THE BRAND JUST HAPPY GANDHI JAYANTI STORIES AND ONE LINE  1. Paripoorna (poster) 2. rocks fitness panathur  3. rocks fitness baalgere  4. velet mirror salon 5. animal gym 6. arka  7. ashpire  8. dns 9. fma gym  10. gravity fitness tc palya 11. hsr fitness 12. kick and hit",
    "assigneeId": "person-1789737923403",
    "dueDate": "2026-09-30",
    "priority": "Medium",
    "stage": "Review",
    "progress": 100,
    "timeMinutes": 0,
    "estimatedMinutes": 240,
    "submittedAt": "Manager Approved (Batul)",
    "revisionNote": null
  },
  {
    "id": "task-1790662470942",
    "workId": "work-1789795912456",
    "title": "linkedin post ",
    "instructions": "design linkedin post",
    "assigneeId": "person-1789549176116",
    "dueDate": "2026-09-29",
    "priority": "Medium",
    "stage": "Review",
    "progress": 100,
    "timeMinutes": 0,
    "estimatedMinutes": 240,
    "submittedAt": "Manager Approved (Batul)",
    "revisionNote": null
  },
  {
    "id": "task-1790831709158",
    "workId": "work-1789795821322",
    "title": "story designing ",
    "instructions": "8 story designing content shared on whatsapp",
    "assigneeId": "person-1789737923403",
    "dueDate": "2026-10-01",
    "priority": "Medium",
    "stage": "Assigned",
    "progress": 0,
    "timeMinutes": 0,
    "estimatedMinutes": 240,
    "submittedAt": null,
    "revisionNote": null
  },
  {
    "id": "task-1790831880241",
    "workId": "work-1789795890326",
    "title": "story designing ",
    "instructions": "8 stories designing content shared on whatsapp",
    "assigneeId": "person-1789737923403",
    "dueDate": "2026-10-01",
    "priority": "Medium",
    "stage": "Assigned",
    "progress": 0,
    "timeMinutes": 0,
    "estimatedMinutes": 240,
    "submittedAt": null,
    "revisionNote": null
  },
  {
    "id": "task-1790658609971",
    "workId": "work-1789817695400",
    "title": "1 video edit ",
    "instructions": "drive already provided",
    "assigneeId": "person-1789738443448",
    "dueDate": "2026-09-29",
    "priority": "Medium",
    "stage": "Revision",
    "progress": 70,
    "timeMinutes": 0,
    "estimatedMinutes": 240,
    "submittedAt": "Submitted today",
    "revisionNote": "text for kick & Hit \nWhere young champions begin — Kick & Hit\n\n*Reel 2*\nBuilding young champions at Kick & Hit."
  },
  {
    "id": "task-1790683835272",
    "workId": "work-1789796033110",
    "title": "winner poster ",
    "instructions": "content and image has been shared on whatsapp",
    "assigneeId": "person-1789549176116",
    "dueDate": "2026-09-29",
    "priority": "Medium",
    "stage": "Review",
    "progress": 100,
    "timeMinutes": 0,
    "estimatedMinutes": 240,
    "submittedAt": "Manager Approved (Batul)",
    "revisionNote": null
  },
  {
    "id": "task-1790745607483",
    "workId": "work-1789981533617",
    "title": "gandhi jayanti stories ",
    "instructions": "gandhi jayanti stories  1. sri ram (poster) 2. clarus (poster) 3. pilates hub hsr  4. pilates hub bellandur  5. ahana 6. ashva 7. bluecaps 8. border bells  9. earlt schoolhouse  10. iron rev 11. nail stories  12. nailco",
    "assigneeId": "person-1789549176116",
    "dueDate": "2026-09-30",
    "priority": "Medium",
    "stage": "Review",
    "progress": 100,
    "timeMinutes": 0,
    "estimatedMinutes": 240,
    "submittedAt": "Manager Approved (Batul)",
    "revisionNote": null
  },
  {
    "id": "task-1790761345829",
    "workId": "work-1789817812002",
    "title": "one tv video ",
    "instructions": "explained already ",
    "assigneeId": "person-1789738443448",
    "dueDate": "2026-09-30",
    "priority": "Medium",
    "stage": "Assigned",
    "progress": 0,
    "timeMinutes": 0,
    "estimatedMinutes": 240,
    "submittedAt": null,
    "revisionNote": null
  },
  {
    "id": "task-1790761372942",
    "workId": "work-1789817812002",
    "title": "border bells tv video",
    "instructions": "already explained",
    "assigneeId": "person-1789738443448",
    "dueDate": "2026-09-30",
    "priority": "Medium",
    "stage": "Assigned",
    "progress": 0,
    "timeMinutes": 0,
    "estimatedMinutes": 240,
    "submittedAt": null,
    "revisionNote": null
  },
  {
    "id": "task-1790762578158",
    "workId": "work-1789817812002",
    "title": "border bells 1 reel edit",
    "instructions": "already explained",
    "assigneeId": "person-1789738443448",
    "dueDate": "2026-09-30",
    "priority": "Medium",
    "stage": "Assigned",
    "progress": 0,
    "timeMinutes": 0,
    "estimatedMinutes": 240,
    "submittedAt": null,
    "revisionNote": null
  },
  {
    "id": "task-1790762701848",
    "workId": "work-1789817842103",
    "title": "2 hsr reels",
    "instructions": "explained already",
    "assigneeId": "person-1789544916637",
    "dueDate": "2026-09-30",
    "priority": "Medium",
    "stage": "Assigned",
    "progress": 0,
    "timeMinutes": 0,
    "estimatedMinutes": 240,
    "submittedAt": null,
    "revisionNote": null
  },
  {
    "id": "task-1791285495185",
    "workId": "work-1789796033110",
    "title": "4 story designing ",
    "instructions": "details and content already shared",
    "assigneeId": "person-1789549176116",
    "dueDate": "2026-10-06",
    "priority": "Medium",
    "stage": "Assigned",
    "progress": 0,
    "timeMinutes": 0,
    "estimatedMinutes": 240,
    "submittedAt": null,
    "revisionNote": null
  },
  {
    "id": "task-1791284844526",
    "workId": "work-1789981533617",
    "title": "Paripoorna admission open poster",
    "instructions": "Paripoorna admission open poster",
    "assigneeId": "person-1791175695081",
    "dueDate": "2026-10-06",
    "priority": "Medium",
    "stage": "In Progress",
    "progress": 10,
    "timeMinutes": 0,
    "estimatedMinutes": 240,
    "submittedAt": null,
    "revisionNote": null
  },
  {
    "id": "task-1791270609942",
    "workId": "work-1789796225969",
    "title": "post designing",
    "instructions": "details shared on whatsapp",
    "assigneeId": "person-1789549176116",
    "dueDate": "2026-10-06",
    "priority": "Medium",
    "stage": "Review",
    "progress": 100,
    "timeMinutes": 0,
    "estimatedMinutes": 240,
    "submittedAt": "Manager Approved (Batul)",
    "revisionNote": null
  },
  {
    "id": "task-1790831676740",
    "workId": "work-1789795870518",
    "title": "story designing ",
    "instructions": "8 story designing shared on whatsapp",
    "assigneeId": "person-1789737923403",
    "dueDate": "2026-10-01",
    "priority": "Medium",
    "stage": "Review",
    "progress": 100,
    "timeMinutes": 0,
    "estimatedMinutes": 240,
    "submittedAt": "Manager Approved (Batul)",
    "revisionNote": null
  },
  {
    "id": "task-1791267201880",
    "workId": "work-1789817911426",
    "title": "banner designing ",
    "instructions": "details given already",
    "assigneeId": "person-1789549176116",
    "dueDate": "2026-10-06",
    "priority": "Medium",
    "stage": "Assigned",
    "progress": 0,
    "timeMinutes": 0,
    "estimatedMinutes": 240,
    "submittedAt": null,
    "revisionNote": null
  },
  {
    "id": "task-1791435989063",
    "workId": "work-1789981533617",
    "title": "Bespoke Poster ",
    "instructions": "Leh Ladak LEH LADAKH Discover the mountains beyond the ordinary  4 Nights / 5 Days Leh • Nubra Valley • Pangong Lake  From ₹10,499 per person*  Stay • Breakfast & dinner Sightseeing & transfers • Inner Line Permit PLAN YOUR LADAKH ADVENTURE *Starting rate for a group of 12. BOOKINGS & ENQUIRIES  📞 +91 8884747567 | +91 9980433316 ✉️ info@bespokeodyssey.com",
    "assigneeId": "person-1791175695081",
    "dueDate": "2026-10-08",
    "priority": "Medium",
    "stage": "Assigned",
    "progress": 0,
    "timeMinutes": 0,
    "estimatedMinutes": 240,
    "submittedAt": null,
    "revisionNote": null
  },
  {
    "id": "task-1791435917038",
    "workId": "work-1789981533617",
    "title": "Bespoke catalogue",
    "instructions": "ROYAL RAJASTHAN Heritage, palaces & timeless beauty  4 Nights / 5 Days Jaipur • Jodhpur • Udaipur  From ₹12,999 per person Standard • Deluxe • Luxury options Hotel stay • Meals as per package • Private transfers & sightseeing BOOK YOUR ROYAL ESCAPE BOOKINGS & ENQUIRIES  📞 +91 8884747567 | +91 9980433316 ✉️ info@bespokeodyssey.com",
    "assigneeId": "person-1791175695081",
    "dueDate": "2026-10-08",
    "priority": "Medium",
    "stage": "Assigned",
    "progress": 0,
    "timeMinutes": 0,
    "estimatedMinutes": 240,
    "submittedAt": null,
    "revisionNote": null
  },
  {
    "id": "task-1791435936106",
    "workId": "work-1789981533617",
    "title": "Bespoke Poster ",
    "instructions": "Kashmir  KASHMIR Your escape to paradise  4 Nights / 5 Days Srinagar • Sonamarg • Gulmarg • Pahalgam  From ₹8,000 per person* 3-Star Hotel + Deluxe Houseboat  Breakfast & dinner • Shikara ride • Private transfers & sightseeing  PLAN YOUR KASHMIR GETAWAY *Starting rate for a group of 12. BOOKINGS & ENQUIRIES",
    "assigneeId": "person-1791175695081",
    "dueDate": "2026-10-08",
    "priority": "Medium",
    "stage": "Assigned",
    "progress": 0,
    "timeMinutes": 0,
    "estimatedMinutes": 240,
    "submittedAt": null,
    "revisionNote": null
  },
  {
    "id": "task-1791435968526",
    "workId": "work-1789981533617",
    "title": "Bespoke  Poster ",
    "instructions": "Goa GOA WITH YOUR GANG Beach days. Cruise nights. Great memories.  3 Nights / 4 Days  ₹5,000 per person* For a group of 4 friends  Hotel stay & breakfast • Dinner cruise South Goa sightseeing • Water sports  Complimentary scooty access for 2 days BOOK YOUR GOA GETAWAY *Rate applies to a group of 4. BOOKINGS & ENQUIRIES  📞 +91 8884747567 | +91 9980433316 ✉️ info@bespokeodyssey.com",
    "assigneeId": "person-1791175695081",
    "dueDate": "2026-10-08",
    "priority": "Medium",
    "stage": "Assigned",
    "progress": 0,
    "timeMinutes": 0,
    "estimatedMinutes": 240,
    "submittedAt": null,
    "revisionNote": null
  },
  {
    "id": "task-1791270589806",
    "workId": "work-1789796225969",
    "title": "clarus post design ",
    "instructions": "details explained on whatsapp",
    "assigneeId": "person-1789549176116",
    "dueDate": "2026-10-06",
    "priority": "Medium",
    "stage": "Review",
    "progress": 100,
    "timeMinutes": 0,
    "estimatedMinutes": 240,
    "submittedAt": "Manager Approved (Batul)",
    "revisionNote": null
  },
  {
    "id": "task-1791267752104",
    "workId": "work-1789795912456",
    "title": "story designing",
    "instructions": "8 story designing ",
    "assigneeId": "person-1789549176116",
    "dueDate": "2026-10-06",
    "priority": "Medium",
    "stage": "Review",
    "progress": 100,
    "timeMinutes": 0,
    "estimatedMinutes": 240,
    "submittedAt": "Manager Approved (Batul)",
    "revisionNote": null
  },
  {
    "id": "task-1791349114025",
    "workId": "work-1789795935505",
    "title": "admission poster ",
    "instructions": "changes with the poster",
    "assigneeId": "person-1789549176116",
    "dueDate": "2026-10-07",
    "priority": "Medium",
    "stage": "Revision",
    "progress": 70,
    "timeMinutes": 0,
    "estimatedMinutes": 240,
    "submittedAt": "Submitted today",
    "revisionNote": "Please update and revise."
  },
  {
    "id": "task-1791867794005",
    "workId": "work-1789796093199",
    "title": "how is my child doing ",
    "instructions": "carousel content shared on whatsapp",
    "assigneeId": "person-1789549176116",
    "dueDate": "2026-10-13",
    "priority": "Medium",
    "stage": "Review",
    "progress": 100,
    "timeMinutes": 0,
    "estimatedMinutes": 240,
    "submittedAt": "Manager Approved (Batul)",
    "revisionNote": null
  },
  {
    "id": "task-1790762652217",
    "workId": "work-1789795935505",
    "title": "1 reel edit ",
    "instructions": "clips and content given by client ",
    "assigneeId": "person-1789544916637",
    "dueDate": "2026-09-30",
    "priority": "Medium",
    "stage": "Review",
    "progress": 100,
    "timeMinutes": 0,
    "estimatedMinutes": 240,
    "submittedAt": "Manager Approved (Batul)",
    "revisionNote": null
  },
  {
    "id": "task-1791269574624",
    "workId": "work-1789796093199",
    "title": "post design",
    "instructions": "details shared on whatsapp",
    "assigneeId": "person-1789549176116",
    "dueDate": "2026-10-06",
    "priority": "Medium",
    "stage": "Review",
    "progress": 100,
    "timeMinutes": 0,
    "estimatedMinutes": 240,
    "submittedAt": "Manager Approved (Batul)",
    "revisionNote": null
  },
  {
    "id": "task-1790829560464",
    "workId": "work-1789795990634",
    "title": "nail stories rate card ",
    "instructions": "details and content has been provided on whatsapp pls check ",
    "assigneeId": "person-1789549176116",
    "dueDate": "2026-10-01",
    "priority": "Medium",
    "stage": "Review",
    "progress": 100,
    "timeMinutes": 0,
    "estimatedMinutes": 240,
    "submittedAt": "Manager Approved (Batul)",
    "revisionNote": null
  },
  {
    "id": "task-1790762674483",
    "workId": "work-1789795957113",
    "title": "nailco reel ",
    "instructions": "client sent clips and content",
    "assigneeId": "person-1789544916637",
    "dueDate": "2026-09-30",
    "priority": "Medium",
    "stage": "Review",
    "progress": 100,
    "timeMinutes": 0,
    "estimatedMinutes": 240,
    "submittedAt": "Manager Approved (Batul)",
    "revisionNote": null
  },
  {
    "id": "task-1791867766032",
    "workId": "work-1789796247298",
    "title": "for your professional space ",
    "instructions": "content shared on whatsapp",
    "assigneeId": "person-1789549176116",
    "dueDate": "2026-10-13",
    "priority": "Medium",
    "stage": "Review",
    "progress": 100,
    "timeMinutes": 0,
    "estimatedMinutes": 240,
    "submittedAt": "Manager Approved (Batul)",
    "revisionNote": null
  },
  {
    "id": "task-1791269530945",
    "workId": "work-1789796093199",
    "title": "sri ram post design",
    "instructions": "details shared on whatsapp",
    "assigneeId": "person-1789549176116",
    "dueDate": "2026-10-06",
    "priority": "Medium",
    "stage": "Review",
    "progress": 100,
    "timeMinutes": 0,
    "estimatedMinutes": 240,
    "submittedAt": "Manager Approved (Batul)",
    "revisionNote": null
  },
  {
    "id": "task-1791436120936",
    "workId": "work-1789981533617",
    "title": "bespoke poster",
    "instructions": "Lakshadweep LAKSHADWEEP Turquoise waters. Peaceful island days.  3 Nights / 4 Days Agatti • Kalpetti Island  From ₹10,500 per person* Homestay • Beach Homestay • Beach Cottage  Stay & meals • Entry permit • Island sightseeing Kayaking • Shore snorkelling • Glass-bottom boat ride  BOOK YOUR ISLAND ESCAPE *Starting rate for 6 adults on double sharing. Flights and scuba diving excluded. BOOKINGS & ENQUIRIES  📞 +91 8884747567 | +91 9980433316 ✉️ info@bespokeodyssey.com",
    "assigneeId": "person-1791175695081",
    "dueDate": "2026-10-08",
    "priority": "Medium",
    "stage": "Assigned",
    "progress": 0,
    "timeMinutes": 0,
    "estimatedMinutes": 240,
    "submittedAt": null,
    "revisionNote": null
  },
  {
    "id": "task-1791436264604",
    "workId": "work-1789981533617",
    "title": "Bespoke poster ",
    "instructions": "Africa AFRICAN HUNTING EXPERIENCE A guided adventure in the African wilderness  7-Day Package USD 4,200*  Accommodation & meals • Airport transfers Professional guides • Hunting vehicles Training & selected hunting activities  Complimentary visa assistance  ENQUIRE FOR PACKAGE DETAILS *Confirm pricing basis and included activities when booking. BOOKINGS & ENQUIRIES",
    "assigneeId": "person-1791175695081",
    "dueDate": "2026-10-08",
    "priority": "Medium",
    "stage": "Assigned",
    "progress": 0,
    "timeMinutes": 0,
    "estimatedMinutes": 240,
    "submittedAt": null,
    "revisionNote": null
  },
  {
    "id": "task-1791787575072",
    "workId": "work-1789795870518",
    "title": "post design ",
    "instructions": "content instructions shared on whatsapp",
    "assigneeId": "person-1789737923403",
    "dueDate": "2026-10-12",
    "priority": "Medium",
    "stage": "Assigned",
    "progress": 0,
    "timeMinutes": 0,
    "estimatedMinutes": 240,
    "submittedAt": null,
    "revisionNote": null
  },
  {
    "id": "task-1791787657261",
    "workId": "work-1789795870518",
    "title": "post design ",
    "instructions": "https://www.instagram.com/p/DbGReIRCOYs/?stkn=aWRnNTllaGo4a3pl&img_index=1",
    "assigneeId": "person-1789737923403",
    "dueDate": "2026-10-12",
    "priority": "Medium",
    "stage": "Assigned",
    "progress": 0,
    "timeMinutes": 0,
    "estimatedMinutes": 240,
    "submittedAt": null,
    "revisionNote": null
  },
  {
    "id": "task-1791440418874",
    "workId": "work-1789795912456",
    "title": "raagi linkedin post ",
    "instructions": "designing linkedin post ",
    "assigneeId": "person-1789549176116",
    "dueDate": "2026-10-08",
    "priority": "Medium",
    "stage": "Review",
    "progress": 100,
    "timeMinutes": 0,
    "estimatedMinutes": 240,
    "submittedAt": "Manager Approved (Batul)",
    "revisionNote": null
  },
  {
    "id": "task-1791786850927",
    "workId": "work-1789795821322",
    "title": "redesign poster ",
    "instructions": "\"4. Build your post-workout plate 🍽️” Slides: Cover → choose a protein source → add carbs → include vegetables or fruit → hydrate → show three easy meal combinations. CTA: “Which would you pick: dal-rice with curd, a paneer wrap or chicken with rice?”\"",
    "assigneeId": "person-1789549176116",
    "dueDate": "2026-10-12",
    "priority": "Medium",
    "stage": "Review",
    "progress": 100,
    "timeMinutes": 0,
    "estimatedMinutes": 240,
    "submittedAt": "Manager Approved (Batul)",
    "revisionNote": null
  },
  {
    "id": "task-1791440506897",
    "workId": "work-1789795935505",
    "title": "admission poster changes",
    "instructions": "change image ",
    "assigneeId": "person-1789549176116",
    "dueDate": "2026-10-08",
    "priority": "Medium",
    "stage": "Revision",
    "progress": 70,
    "timeMinutes": 0,
    "estimatedMinutes": 240,
    "submittedAt": "Submitted today",
    "revisionNote": "design change"
  },
  {
    "id": "task-1790745764126",
    "workId": "work-1789981533617",
    "title": "Story ",
    "instructions": "Kick & Hit Story  Reference: https://in.pinterest.com/pin/476396466856818475/  Aspire Tennis Reference: https://in.pinterest.com/pin/11540542795310823/ https://in.pinterest.com/pin/1119848263585596958/",
    "assigneeId": "person-1789737923403",
    "dueDate": "2026-09-30",
    "priority": "Urgent",
    "stage": "Review",
    "progress": 100,
    "timeMinutes": 75,
    "estimatedMinutes": 240,
    "submittedAt": "Submitted today",
    "revisionNote": null
  },
  {
    "id": "task-1791440530330",
    "workId": "work-1789796225969",
    "title": "carousel image chnages",
    "instructions": "image change",
    "assigneeId": "person-1789549176116",
    "dueDate": "2026-10-08",
    "priority": "Medium",
    "stage": "Review",
    "progress": 100,
    "timeMinutes": 0,
    "estimatedMinutes": 240,
    "submittedAt": "Manager Approved (Batul)",
    "revisionNote": null
  },
  {
    "id": "task-1791436392908",
    "workId": "work-1789981533617",
    "title": "Bespoke Poster",
    "instructions": "Andaman ANDAMAN ISLAND ESCAPE Discover a beautiful side of island life  5 Nights / 6 Days Port Blair • Havelock • Neil Island  From ₹19,442 per person* Budget • Deluxe • Super Deluxe • Luxury  Stay • Breakfast & dinner • Island transfers Cellular Jail Sound & Light Show Radhanagar Beach • Elephant Beach • Neil Island sightseeing  BOOK YOUR ANDAMAN GETAWAY *Starting rate for 6 adults on double sharing. BOOKINGS & ENQUIRIES  📞 +91 8884747567 | +91 9980433316 ✉️ info@bespokeodyssey.com",
    "assigneeId": "person-1789737923403",
    "dueDate": "2026-10-08",
    "priority": "Medium",
    "stage": "Review",
    "progress": 100,
    "timeMinutes": 0,
    "estimatedMinutes": 240,
    "submittedAt": "Submitted today",
    "revisionNote": null
  },
  {
    "id": "task-1791787236440",
    "workId": "work-1789795821322",
    "title": "new post design ",
    "instructions": "https://in.pinterest.com/pin/8585055536882288/",
    "assigneeId": "person-1789549176116",
    "dueDate": "2026-10-12",
    "priority": "Medium",
    "stage": "Review",
    "progress": 100,
    "timeMinutes": 0,
    "estimatedMinutes": 240,
    "submittedAt": "Manager Approved (Batul)",
    "revisionNote": null
  },
  {
    "id": "task-1791440458153",
    "workId": "work-1789796225969",
    "title": "clarus post deisgning ",
    "instructions": "https://www.instagram.com/p/DZekfBYgnic/?stkn=d2lsYzQ4YzdyZWNn",
    "assigneeId": "person-1789549176116",
    "dueDate": "2026-10-08",
    "priority": "Medium",
    "stage": "Review",
    "progress": 100,
    "timeMinutes": 0,
    "estimatedMinutes": 240,
    "submittedAt": "Manager Approved (Batul)",
    "revisionNote": null
  },
  {
    "id": "task-1791783339660",
    "workId": "work-1789796225969",
    "title": "poster changes ",
    "instructions": "",
    "assigneeId": "person-1789549176116",
    "dueDate": "2026-10-12",
    "priority": "Medium",
    "stage": "Review",
    "progress": 100,
    "timeMinutes": 0,
    "estimatedMinutes": 240,
    "submittedAt": "Manager Approved (Batul)",
    "revisionNote": null
  },
  {
    "id": "task-1791436435756",
    "workId": "work-1789981533617",
    "title": "Bespoke poster",
    "instructions": "Lakshadweep LAKSHADWEEP Turquoise waters. Peaceful island days.  3 Nights / 4 Days Agatti • Kalpetti Island  From ₹10,500 per person* Homestay • Beach Homestay • Beach Cottage  Stay & meals • Entry permit • Island sightseeing Kayaking • Shore snorkelling • Glass-bottom boat ride  BOOK YOUR ISLAND ESCAPE *Starting rate for 6 adults on double sharing. Flights and scuba diving excluded. BOOKINGS & ENQUIRIES  📞 +91 8884747567 | +91 9980433316 ✉️ info@bespokeodyssey.com",
    "assigneeId": "person-1789737923403",
    "dueDate": "2026-10-08",
    "priority": "Medium",
    "stage": "Review",
    "progress": 100,
    "timeMinutes": 0,
    "estimatedMinutes": 240,
    "submittedAt": "Manager Approved (Batul)",
    "revisionNote": null
  },
  {
    "id": "task-1791783352144",
    "workId": "work-1789796225969",
    "title": "poster changes",
    "instructions": "",
    "assigneeId": "person-1789549176116",
    "dueDate": "2026-10-12",
    "priority": "Medium",
    "stage": "Review",
    "progress": 100,
    "timeMinutes": 0,
    "estimatedMinutes": 240,
    "submittedAt": "Manager Approved (Batul)",
    "revisionNote": null
  },
  {
    "id": "task-1791440487474",
    "workId": "work-1789796225969",
    "title": "post designing ",
    "instructions": "https://www.instagram.com/p/DbhkX4EDGLN/?stkn=MWh5eGpnc2o0eGVrbA==",
    "assigneeId": "person-1789549176116",
    "dueDate": "2026-10-08",
    "priority": "Medium",
    "stage": "Review",
    "progress": 100,
    "timeMinutes": 0,
    "estimatedMinutes": 240,
    "submittedAt": "Manager Approved (Batul)",
    "revisionNote": null
  },
  {
    "id": "task-1791867620570",
    "workId": "work-1789796033110",
    "title": "did you know carousel content ",
    "instructions": "content shared on whatsapp",
    "assigneeId": "person-1791175695081",
    "dueDate": "2026-10-13",
    "priority": "Medium",
    "stage": "Assigned",
    "progress": 0,
    "timeMinutes": 0,
    "estimatedMinutes": 240,
    "submittedAt": null,
    "revisionNote": null
  },
  {
    "id": "task-1791867647069",
    "workId": "work-1789796033110",
    "title": "soooo...(engaging content)",
    "instructions": "content and reference shared on whatsapp",
    "assigneeId": "person-1791175695081",
    "dueDate": "2026-10-13",
    "priority": "Medium",
    "stage": "Assigned",
    "progress": 0,
    "timeMinutes": 0,
    "estimatedMinutes": 240,
    "submittedAt": null,
    "revisionNote": null
  },
  {
    "id": "task-1791867683264",
    "workId": "work-1789817935592",
    "title": "gravity 7,999 ads carousel",
    "instructions": "content shared on whatsapp",
    "assigneeId": "person-1791175695081",
    "dueDate": "2026-10-13",
    "priority": "Medium",
    "stage": "Assigned",
    "progress": 0,
    "timeMinutes": 0,
    "estimatedMinutes": 240,
    "submittedAt": null,
    "revisionNote": null
  },
  {
    "id": "task-1791783274286",
    "workId": "work-1789796247298",
    "title": "post design",
    "instructions": "Slide 1-\"Look closer.\" Slowly move towards a full piece of equipment. Slide 2 - \"[Wood type].\" Glide across the wooden frame to reveal its grain. Slide 3 - \"[Upholstery material].\" Show a hand gently pressing the upholstery. Slide 4 - \"[Material name].\" Show a close-up of the springs, fittings or frame. How the audience sees it: Tight crops and slow movement help viewers examine the actual materials, even on a small screen.",
    "assigneeId": "person-1789549176116",
    "dueDate": "2026-10-12",
    "priority": "Medium",
    "stage": "Revision",
    "progress": 70,
    "timeMinutes": 0,
    "estimatedMinutes": 240,
    "submittedAt": "Submitted today",
    "revisionNote": "change in content "
  },
  {
    "id": "task-1791783299124",
    "workId": "work-1789796247298",
    "title": "post design 2 ",
    "instructions": "Slide 1 - \"Imported wood.\" Trace the finished wooden frame with a slow camera movement. Slide 2 - \"Equipment made in India.\" Show the finished joints, edges and assembly details. Slide 3 - \"See the details.\" Pull back to reveal the complete equipment in the studio. How the audience sees it: The close-up-to-wide sequence connects the wood to the finished product. Text explains its origin without needing workshop footage.",
    "assigneeId": "person-1789549176116",
    "dueDate": "2026-10-12",
    "priority": "Medium",
    "stage": "Revision",
    "progress": 70,
    "timeMinutes": 0,
    "estimatedMinutes": 240,
    "submittedAt": "Submitted today",
    "revisionNote": "change in conten "
  },
  {
    "id": "task-1791787449145",
    "workId": "work-1789795870518",
    "title": "client review carousel",
    "instructions": "cotnent proivded on whatsapp",
    "assigneeId": "person-1791175695081",
    "dueDate": "2026-10-12",
    "priority": "Medium",
    "stage": "Review",
    "progress": 100,
    "timeMinutes": 0,
    "estimatedMinutes": 240,
    "submittedAt": "Manager Approved (Batul)",
    "revisionNote": null
  },
  {
    "id": "task-1791867866557",
    "workId": "work-1789817935592",
    "title": "ads video testimonial",
    "instructions": "script shared on whatsapp",
    "assigneeId": "person-1789738443448",
    "dueDate": "2026-10-13",
    "priority": "Medium",
    "stage": "Assigned",
    "progress": 0,
    "timeMinutes": 0,
    "estimatedMinutes": 240,
    "submittedAt": null,
    "revisionNote": null
  },
  {
    "id": "task-1792648994523",
    "workId": "work-1789796147144",
    "title": "1 carousel for hsr ",
    "instructions": "content shared on whatsapp",
    "assigneeId": "person-1789549176116",
    "dueDate": "2026-10-22",
    "priority": "Medium",
    "stage": "Assigned",
    "progress": 0,
    "timeMinutes": 0,
    "estimatedMinutes": 240,
    "submittedAt": null,
    "revisionNote": null
  },
  {
    "id": "task-1792649222234",
    "workId": "work-1789796147144",
    "title": "pilates hsr carousel ",
    "instructions": "content shared on whatsapp",
    "assigneeId": "person-1789549176116",
    "dueDate": "2026-10-22",
    "priority": "Medium",
    "stage": "Assigned",
    "progress": 0,
    "timeMinutes": 0,
    "estimatedMinutes": 240,
    "submittedAt": null,
    "revisionNote": null
  },
  {
    "id": "task-1792649611900",
    "workId": "work-1789796147144",
    "title": "carousel pilates hsr",
    "instructions": "content shared on whatsapp",
    "assigneeId": "person-1789549176116",
    "dueDate": "2026-10-22",
    "priority": "Medium",
    "stage": "Assigned",
    "progress": 0,
    "timeMinutes": 0,
    "estimatedMinutes": 240,
    "submittedAt": null,
    "revisionNote": null
  },
  {
    "id": "task-1791867741320",
    "workId": "work-1789796247298",
    "title": "know your cover ",
    "instructions": "content shared on whatsapp",
    "assigneeId": "person-1789549176116",
    "dueDate": "2026-10-13",
    "priority": "Medium",
    "stage": "Revision",
    "progress": 70,
    "timeMinutes": 0,
    "estimatedMinutes": 240,
    "submittedAt": "Submitted today",
    "revisionNote": "change in content "
  },
  {
    "id": "task-1791783319230",
    "workId": "work-1789796247298",
    "title": "post design 3 ",
    "instructions": "Slide 1 - \"See it in motion.\" A qualified trainer demonstrates a controlled movement. Slide 2 - \"Follow the movement.\" Show the carriage moving in close-up. Slide 3 - \"Explore the adjustments.\" Show the trainer adjusting an available setting. Slide 4 - \"Find your setup.\" Finish with a wider view of the trainer and equipment.",
    "assigneeId": "person-1789549176116",
    "dueDate": "2026-10-12",
    "priority": "Medium",
    "stage": "Revision",
    "progress": 70,
    "timeMinutes": 0,
    "estimatedMinutes": 240,
    "submittedAt": "Submitted today",
    "revisionNote": "change in content "
  },
  {
    "id": "task-1791867818638",
    "workId": "work-1789796033110",
    "title": "im busy content",
    "instructions": "content shared on whatsapp",
    "assigneeId": "person-1789549176116",
    "dueDate": "2026-10-13",
    "priority": "Medium",
    "stage": "Review",
    "progress": 100,
    "timeMinutes": 0,
    "estimatedMinutes": 240,
    "submittedAt": "Manager Approved (Batul)",
    "revisionNote": null
  },
  {
    "id": "task-1791867846712",
    "workId": "work-1789796033110",
    "title": "pickleball carousel this and........",
    "instructions": "content shared on whatsapp",
    "assigneeId": "person-1789549176116",
    "dueDate": "2026-10-13",
    "priority": "Medium",
    "stage": "Revision",
    "progress": 70,
    "timeMinutes": 0,
    "estimatedMinutes": 240,
    "submittedAt": "Submitted today",
    "revisionNote": "font change will let u know"
  },
  {
    "id": "task-1792645001727",
    "workId": "work-1789796075803",
    "title": "offer posters x4 ",
    "instructions": "4 static posters content shared on whatsapp",
    "assigneeId": "person-1789737923403",
    "dueDate": "2026-10-22",
    "priority": "Medium",
    "stage": "Review",
    "progress": 100,
    "timeMinutes": 0,
    "estimatedMinutes": 240,
    "submittedAt": "Manager Approved (Batul)",
    "revisionNote": null
  },
  {
    "id": "task-1790600908208",
    "workId": "work-1789981533617",
    "title": "automation tool",
    "instructions": "",
    "assigneeId": "person-1789544851698",
    "dueDate": "2026-10-21",
    "priority": "Medium",
    "stage": "Review",
    "progress": 100,
    "timeMinutes": 0,
    "estimatedMinutes": 240,
    "submittedAt": "2026-10-21T12:41:06.862Z",
    "revisionNote": null
  },
  {
    "id": "task-1792644602908",
    "workId": "work-1789981533617",
    "title": "sutra 1 carousel",
    "instructions": "content shared on whatsapp ",
    "assigneeId": "person-1789549176116",
    "dueDate": "2026-10-22",
    "priority": "Medium",
    "stage": "Assigned",
    "progress": 0,
    "timeMinutes": 0,
    "estimatedMinutes": 240,
    "submittedAt": null,
    "revisionNote": null
  },
  {
    "id": "task-1790832224249",
    "workId": "work-1789796247298",
    "title": "story designing ",
    "instructions": "8 stories designing content shared on whatsapp",
    "assigneeId": "person-1789549176116",
    "dueDate": "2026-10-01",
    "priority": "Medium",
    "stage": "Review",
    "progress": 100,
    "timeMinutes": 0,
    "estimatedMinutes": 240,
    "submittedAt": "Manager Approved (Batul)",
    "revisionNote": null
  },
  {
    "id": "task-1790073725927",
    "workId": "work-1789796225969",
    "title": "ads video ",
    "instructions": "clarus walkthrough script text based Step into a world of possibilities (Move through the school entrance; reveal the campus)  CBSE Curriculum Learning beyond textbooks (Classrooms with teachers and students engaged in learning)  Explore. Experiment. Discover. Hands-on STEM learning  Space to play. Room to grow. (Walk onto sports areas; show basketball, football and skating)  Creativity comes alive Music • Dance • Art (Transition into music, dance and art activities)  A caring campus. Confident learners CLARUS INTERNATIONAL SCHOOL ADMISSIONS OPEN 2027–28 Enquire Today +91 70226 45999  drive:https://drive.google.com/drive/folders/1iwR1KMW9mhZc6F45Tjq0YhmhKZM_03Ek?usp=sharing https://drive.google.com/drive/folders/1ysk2LFnXGnOCc6Zk45V9n0p9hQO0i8sC?usp=sharing search videos in more drives and edit this video its for ads so make sure there is hook in the video pls",
    "assigneeId": "person-1789544916637",
    "dueDate": "2026-09-22",
    "priority": "Medium",
    "stage": "Review",
    "progress": 100,
    "timeMinutes": 0,
    "estimatedMinutes": 60,
    "submittedAt": "Manager Approved (Batul)",
    "revisionNote": null
  },
  {
    "id": "task-1791867906412",
    "workId": "work-1789795957113",
    "title": "font changes of all videos",
    "instructions": "",
    "assigneeId": "person-1789544916637",
    "dueDate": "2026-10-13",
    "priority": "Medium",
    "stage": "Review",
    "progress": 100,
    "timeMinutes": 0,
    "estimatedMinutes": 240,
    "submittedAt": "Manager Approved (Batul)",
    "revisionNote": null
  },
  {
    "id": "task-1793082469374",
    "workId": "work-1789817695400",
    "title": "Poster ",
    "instructions": "https://www.pinterest.com/pin/727049933636986529/  We don't Find Talent we build it  * Football & Cricket coaching  * At kick & Hit   For children aged 3–18 years.   Learn the skills.   Build confidence. Enjoy the game.    ENROLL NOW!",
    "assigneeId": "person-1789737923403",
    "dueDate": "2026-10-27",
    "priority": "Medium",
    "stage": "Assigned",
    "progress": 0,
    "timeMinutes": 0,
    "estimatedMinutes": 240,
    "submittedAt": null,
    "revisionNote": null
  },
  {
    "id": "task-1791867890747",
    "workId": "work-1789795935505",
    "title": "nishit talking video music changes",
    "instructions": "",
    "assigneeId": "person-1789544916637",
    "dueDate": "2026-10-13",
    "priority": "Medium",
    "stage": "Review",
    "progress": 100,
    "timeMinutes": 0,
    "estimatedMinutes": 240,
    "submittedAt": "Manager Approved (Batul)",
    "revisionNote": null
  },
  {
    "id": "task-1790762593521",
    "workId": "work-1789795990634",
    "title": "1 reel edit ",
    "instructions": "explained already",
    "assigneeId": "person-1789544916637",
    "dueDate": "2026-09-30",
    "priority": "Medium",
    "stage": "Review",
    "progress": 100,
    "timeMinutes": 0,
    "estimatedMinutes": 240,
    "submittedAt": "Manager Approved (Batul)",
    "revisionNote": null
  },
  {
    "id": "task-1792647492151",
    "workId": "work-1789981533617",
    "title": "ratavat creations 2 posters",
    "instructions": "content shared on whatsapp",
    "assigneeId": "person-1789549176116",
    "dueDate": "2026-10-22",
    "priority": "Medium",
    "stage": "Assigned",
    "progress": 0,
    "timeMinutes": 0,
    "estimatedMinutes": 240,
    "submittedAt": null,
    "revisionNote": null
  },
  {
    "id": "task-1792647550569",
    "workId": "work-1789981533617",
    "title": "ratavat creation 2 videos ",
    "instructions": "video drive and content shared on whatsapp",
    "assigneeId": "person-1789544916637",
    "dueDate": "2026-10-22",
    "priority": "Medium",
    "stage": "Assigned",
    "progress": 0,
    "timeMinutes": 0,
    "estimatedMinutes": 240,
    "submittedAt": null,
    "revisionNote": null
  },
  {
    "id": "task-1792648190963",
    "workId": "work-1789981533617",
    "title": "sutra logo reveal carousel",
    "instructions": "content shared on whatsapp",
    "assigneeId": "person-1789549176116",
    "dueDate": "2026-10-22",
    "priority": "Medium",
    "stage": "Assigned",
    "progress": 0,
    "timeMinutes": 0,
    "estimatedMinutes": 240,
    "submittedAt": null,
    "revisionNote": null
  },
  {
    "id": "task-1790398757152",
    "workId": "work-1789796033110",
    "title": "drive: https://drive.google.com/drive/u/0/folders/1689Zducvv3T0Ol26RggyJ3IFRdIg2gyL",
    "instructions": "ill send you pdf pls check and finish the videos all of them by today ",
    "assigneeId": "person-1789544916637",
    "dueDate": "2026-09-26",
    "priority": "Medium",
    "stage": "Review",
    "progress": 100,
    "timeMinutes": 0,
    "estimatedMinutes": 240,
    "submittedAt": "Manager Approved (Batul)",
    "revisionNote": null
  },
  {
    "id": "task-1793079187544",
    "workId": "work-1789796016154",
    "title": "Carousel ",
    "instructions": "*Ashva Venue Event* @Eshwar Arka   *Plan 01* *Carousel*  *Slide 1*: When you finally find a venue that doesn’t make your event planning a nightmare…  Swipe to see why Ashva is Bengaluru's favorite celebration spot  *Slide 2:* \"Will everyone fit?\"   Yes. All 350+ of them  • 7,000 Sq. Ft. Total versatile event space • 2 Distinct Halls: 3,000 Sq. Ft. & 4,000 Sq. Ft • 350+ Guests? Zero compromises  *Slide 3* One Space. Endless Vibe Shifts.   From intimate family traditions to big celebratory bashes: • Birthdays & Haldi Functions • Engagements & Receptions • Brand Launches & Milestone Parties  *Slide 4* Because \"That venue was pretty, BUT...\" is not in our dictionary.   • Spotless, ultra-clean washrooms • Well-maintained, comfortable rooms for host prep • Top-tier guest experience from start to finish  *Slide 5* Easy to find, impossible to forget.  Padmanabhanagar, Bengaluru (Right beside Deccan International School  Planning your next big celebration? Send us a DM or Call 9900580068 to check date availability",
    "assigneeId": "person-1789549176116",
    "dueDate": "2026-10-27",
    "priority": "High",
    "stage": "Review",
    "progress": 100,
    "timeMinutes": 0,
    "estimatedMinutes": 240,
    "submittedAt": "Submitted today",
    "revisionNote": null
  },
  {
    "id": "task-1793161626711",
    "workId": "work-1789796033110",
    "title": "complete 3 videos from the references shared",
    "instructions": "",
    "assigneeId": "person-1789544916637",
    "dueDate": "2026-10-28",
    "priority": "Medium",
    "stage": "Assigned",
    "progress": 0,
    "timeMinutes": 0,
    "estimatedMinutes": 240,
    "submittedAt": null,
    "revisionNote": null
  },
  {
    "id": "task-1793161644896",
    "workId": "work-1792648248405",
    "title": "5 pending videos ",
    "instructions": "",
    "assigneeId": "person-1789738443448",
    "dueDate": "2026-10-28",
    "priority": "Medium",
    "stage": "Assigned",
    "progress": 0,
    "timeMinutes": 0,
    "estimatedMinutes": 240,
    "submittedAt": null,
    "revisionNote": null
  },
  {
    "id": "task-1793162187640",
    "workId": "work-1789796033110",
    "title": "linkedin carousel ",
    "instructions": "content shared on whatsapp",
    "assigneeId": "person-1789549176116",
    "dueDate": "2026-10-28",
    "priority": "Medium",
    "stage": "Completed",
    "progress": 100,
    "timeMinutes": 0,
    "estimatedMinutes": 240,
    "submittedAt": "2026-10-28T05:56:56.515Z",
    "revisionNote": null
  },
  {
    "id": "task-1793167158172",
    "workId": "work-1792648233049",
    "title": "Nail stories ",
    "instructions": "Nail Posters",
    "assigneeId": "person-1789549176116",
    "dueDate": "2026-10-28",
    "priority": "Medium",
    "stage": "Assigned",
    "progress": 0,
    "timeMinutes": 0,
    "estimatedMinutes": 240,
    "submittedAt": null,
    "revisionNote": null
  },
  {
    "id": "task-1793167536871",
    "workId": "work-1789817890821",
    "title": "Video - 2 ",
    "instructions": "2 Videos ",
    "assigneeId": "person-1789738443448",
    "dueDate": "2026-10-28",
    "priority": "Medium",
    "stage": "Assigned",
    "progress": 0,
    "timeMinutes": 0,
    "estimatedMinutes": 240,
    "submittedAt": null,
    "revisionNote": null
  },
  {
    "id": "task-1793167071542",
    "workId": "work-1792648233049",
    "title": "Balagere Posters ",
    "instructions": "Plan 01  Reference: https://www.instagram.com/p/DJwlsJoxJUt/?img_index=3 Tips to boost your mind   Plan 02 Reference: https://www.pinterest.com/pin/982629212422016473/ Change the design of the poster   Plan 03 Reference: https://www.pinterest.com/pin/918241811566174194/ Don't skip your warm up   Plan 04 Reference: https://www.pinterest.com/pin/918241811566143339/ Stop rushing your reps   Plan 05 Reference: https://www.pinterest.com/pin/918241811566058015/ Discipline = Motivation   Plan 06 Reference: https://www.pinterest.com/pin/918241811566058008/ No Excuses",
    "assigneeId": "person-1789737923403",
    "dueDate": "2026-10-28",
    "priority": "Medium",
    "stage": "In Progress",
    "progress": 0,
    "timeMinutes": 0,
    "estimatedMinutes": 240,
    "submittedAt": null,
    "revisionNote": null
  }
];

export const MIGRATED_SESSIONS: SessionRecord[] = [
  {
    "id": "ses-1793188718869-dxlgk7",
    "userId": "person-1789549176116",
    "date": "2026-10-28",
    "loginAt": "2026-10-28T11:58:38.869Z",
    "logoutAt": null,
    "durationMinutes": 0
  },
  {
    "id": "ses-1793167016944-qj4zl1",
    "userId": "person-1789738156900",
    "date": "2026-10-28",
    "loginAt": "2026-10-28T05:56:56.944Z",
    "logoutAt": null,
    "durationMinutes": 0
  },
  {
    "id": "ses-1793162567347-j642e9",
    "userId": "person-1789737923403",
    "date": "2026-10-28",
    "loginAt": "2026-10-28T04:42:47.347Z",
    "logoutAt": null,
    "durationMinutes": 0
  },
  {
    "id": "ses-1793161512412-40rpbe",
    "userId": "person-1789738443448",
    "date": "2026-10-28",
    "loginAt": "2026-10-28T04:25:12.412Z",
    "logoutAt": null,
    "durationMinutes": 0
  },
  {
    "id": "ses-1793161487523-zdxhve",
    "userId": "person-1789737883615",
    "date": "2026-10-28",
    "loginAt": "2026-10-28T04:24:47.523Z",
    "logoutAt": null,
    "durationMinutes": 0
  },
  {
    "id": "ses-1793161454186-e1pliv",
    "userId": "person-1789544813478",
    "date": "2026-10-28",
    "loginAt": "2026-10-28T04:24:14.186Z",
    "logoutAt": null,
    "durationMinutes": 0
  },
  {
    "id": "ses-1793100469849-15d8tq",
    "userId": "person-1789737883615",
    "date": "2026-10-27",
    "loginAt": "2026-10-27T11:27:49.849Z",
    "logoutAt": "2026-10-27T13:35:43.000Z",
    "durationMinutes": 128
  },
  {
    "id": "ses-1793092374157-mh5b19",
    "userId": "person-1789549176116",
    "date": "2026-10-27",
    "loginAt": "2026-10-27T09:12:54.157Z",
    "logoutAt": "2026-10-28T04:20:00.587Z",
    "durationMinutes": 1147
  },
  {
    "id": "ses-1793080795383-xk2gt2",
    "userId": "person-1789555841194",
    "date": "2026-10-27",
    "loginAt": "2026-10-27T05:59:55.383Z",
    "logoutAt": "2026-10-28T04:20:00.493Z",
    "durationMinutes": 1340
  },
  {
    "id": "ses-1793078234325-5r3tbx",
    "userId": "person-1789544916637",
    "date": "2026-10-27",
    "loginAt": "2026-10-27T05:17:14.325Z",
    "logoutAt": "2026-10-27T14:18:00.017Z",
    "durationMinutes": 541
  },
  {
    "id": "ses-1793076871639-u14smv",
    "userId": "person-1789544813478",
    "date": "2026-10-27",
    "loginAt": "2026-10-27T04:54:31.639Z",
    "logoutAt": "2026-10-27T13:55:00.004Z",
    "durationMinutes": 540
  },
  {
    "id": "ses-1793076256150-hpj3q5",
    "userId": "person-1789737883615",
    "date": "2026-10-27",
    "loginAt": "2026-10-27T04:44:16.150Z",
    "logoutAt": "2026-10-27T11:27:49.849Z",
    "durationMinutes": 404
  },
  {
    "id": "ses-1793008361186-3el3jt",
    "userId": "person-1789738156900",
    "date": "2026-10-26",
    "loginAt": "2026-10-26T09:52:41.186Z",
    "logoutAt": "2026-10-26T14:17:00.025Z",
    "durationMinutes": 264
  },
  {
    "id": "ses-1792993117721-4gy2t3",
    "userId": "usr_founder_eshwar",
    "date": "2026-10-26",
    "loginAt": "2026-10-26T05:38:37.721Z",
    "logoutAt": null,
    "durationMinutes": 0
  },
  {
    "id": "ses-1792993112426-zevfrf",
    "userId": "person-1789544851698",
    "date": "2026-10-26",
    "loginAt": "2026-10-26T05:38:32.426Z",
    "logoutAt": "2026-10-27T03:40:00.005Z",
    "durationMinutes": 1321
  },
  {
    "id": "ses-1792991813292-5vq954",
    "userId": "person-1789738156900",
    "date": "2026-10-26",
    "loginAt": "2026-10-26T05:16:53.292Z",
    "logoutAt": "2026-10-26T09:48:39.445Z",
    "durationMinutes": 272
  },
  {
    "id": "ses-1792991029997-ou4be0",
    "userId": "person-1789544916637",
    "date": "2026-10-26",
    "loginAt": "2026-10-26T05:03:49.997Z",
    "logoutAt": "2026-10-26T14:04:00.004Z",
    "durationMinutes": 540
  },
  {
    "id": "ses-1792989994114-gs6bap",
    "userId": "person-1789737883615",
    "date": "2026-10-26",
    "loginAt": "2026-10-26T04:46:34.114Z",
    "logoutAt": "2026-10-26T13:35:48.651Z",
    "durationMinutes": 529
  },
  {
    "id": "ses-1792989555787-0x7qey",
    "userId": "person-1789738443448",
    "date": "2026-10-26",
    "loginAt": "2026-10-26T04:39:15.787Z",
    "logoutAt": "2026-10-26T13:40:00.010Z",
    "durationMinutes": 541
  },
  {
    "id": "ses-1792989521461-y6o44x",
    "userId": "person-1789549176116",
    "date": "2026-10-26",
    "loginAt": "2026-10-26T04:38:41.461Z",
    "logoutAt": "2026-10-26T13:39:00.008Z",
    "durationMinutes": 540
  },
  {
    "id": "ses-1792989513846-2lm2of",
    "userId": "person-1789544813478",
    "date": "2026-10-26",
    "loginAt": "2026-10-26T04:38:33.846Z",
    "logoutAt": "2026-10-26T13:39:00.013Z",
    "durationMinutes": 540
  },
  {
    "id": "ses-1792989488414-s9z1na",
    "userId": "person-1789544813478",
    "date": "2026-10-26",
    "loginAt": "2026-10-26T04:38:08.414Z",
    "logoutAt": "2026-10-26T04:38:33.846Z",
    "durationMinutes": 1
  },
  {
    "id": "ses-1792988262293-3o4th1",
    "userId": "person-1789737923403",
    "date": "2026-10-26",
    "loginAt": "2026-10-26T04:17:42.293Z",
    "logoutAt": "2026-10-26T13:18:00.004Z",
    "durationMinutes": 540
  },
  {
    "id": "ses-1792847099282-arop1o",
    "userId": "usr_founder_eshwar",
    "date": "2026-10-24",
    "loginAt": "2026-10-24T13:04:59.282Z",
    "logoutAt": "2026-10-26T05:38:37.721Z",
    "durationMinutes": 2434
  },
  {
    "id": "ses-1792847058384-2e3txe",
    "userId": "person-1789544851698",
    "date": "2026-10-24",
    "loginAt": "2026-10-24T13:04:18.384Z",
    "logoutAt": "2026-10-24T13:04:38.236Z",
    "durationMinutes": 1
  },
  {
    "id": "ses-1792846645361-v7o80z",
    "userId": "usr_founder_eshwar",
    "date": "2026-10-24",
    "loginAt": "2026-10-24T12:57:25.361Z",
    "logoutAt": "2026-10-24T13:04:59.282Z",
    "durationMinutes": 8
  },
  {
    "id": "ses-1792831595196-j2mi8m",
    "userId": "person-1789544916637",
    "date": "2026-10-24",
    "loginAt": "2026-10-24T08:46:35.196Z",
    "logoutAt": "2026-10-26T04:18:00.007Z",
    "durationMinutes": 2611
  },
  {
    "id": "ses-1792830709044-xucyvy",
    "userId": "person-1789737883615",
    "date": "2026-10-24",
    "loginAt": "2026-10-24T08:31:49.044Z",
    "logoutAt": "2026-10-24T13:26:12.575Z",
    "durationMinutes": 294
  },
  {
    "id": "ses-1792819356730-gaamil",
    "userId": "person-1789738156900",
    "date": "2026-10-24",
    "loginAt": "2026-10-24T05:22:36.730Z",
    "logoutAt": "2026-10-26T04:18:00.014Z",
    "durationMinutes": 2815
  },
  {
    "id": "ses-1792757772562-lj9a4z",
    "userId": "person-1789544813478",
    "date": "2026-10-23",
    "loginAt": "2026-10-23T12:16:12.562Z",
    "logoutAt": "2026-10-24T05:23:00.013Z",
    "durationMinutes": 1027
  },
  {
    "id": "ses-1792737942967-v6wujs",
    "userId": "person-1789737883615",
    "date": "2026-10-23",
    "loginAt": "2026-10-23T06:45:42.967Z",
    "logoutAt": "2026-10-23T13:28:00.004Z",
    "durationMinutes": 402
  },
  {
    "id": "ses-1792734355511-1yonhx",
    "userId": "person-1789544851698",
    "date": "2026-10-23",
    "loginAt": "2026-10-23T05:45:55.511Z",
    "logoutAt": "2026-10-23T13:31:00.007Z",
    "durationMinutes": 465
  },
  {
    "id": "ses-1792732140047-mi759z",
    "userId": "person-1789555841194",
    "date": "2026-10-23",
    "loginAt": "2026-10-23T05:09:00.047Z",
    "logoutAt": "2026-10-24T05:23:00.006Z",
    "durationMinutes": 1454
  },
  {
    "id": "ses-1792732105026-rv7u06",
    "userId": "person-1789737883615",
    "date": "2026-10-23",
    "loginAt": "2026-10-23T05:08:25.026Z",
    "logoutAt": "2026-10-23T06:27:15.463Z",
    "durationMinutes": 79
  },
  {
    "id": "ses-1792729815657-i500j2",
    "userId": "person-1789549176116",
    "date": "2026-10-23",
    "loginAt": "2026-10-23T04:30:15.657Z",
    "logoutAt": "2026-10-23T13:30:40.356Z",
    "durationMinutes": 540
  },
  {
    "id": "ses-1792729813571-zmjefg",
    "userId": "person-1789544851698",
    "date": "2026-10-23",
    "loginAt": "2026-10-23T04:30:13.571Z",
    "logoutAt": "2026-10-23T05:45:55.511Z",
    "durationMinutes": 76
  },
  {
    "id": "ses-1792729654501-pga7d0",
    "userId": "person-1789737883615",
    "date": "2026-10-23",
    "loginAt": "2026-10-23T04:27:34.501Z",
    "logoutAt": "2026-10-23T05:08:25.026Z",
    "durationMinutes": 41
  },
  {
    "id": "ses-1792729455539-5pxv3t",
    "userId": "person-1789737923403",
    "date": "2026-10-23",
    "loginAt": "2026-10-23T04:24:15.539Z",
    "logoutAt": "2026-10-23T13:24:18.401Z",
    "durationMinutes": 540
  },
  {
    "id": "ses-1792666739451-pmcpy3",
    "userId": "person-1789738156900",
    "date": "2026-10-22",
    "loginAt": "2026-10-22T10:58:59.451Z",
    "logoutAt": "2026-10-23T03:29:00.005Z",
    "durationMinutes": 990
  },
  {
    "id": "ses-1792666704955-jj8c1o",
    "userId": "person-1789544916637",
    "date": "2026-10-22",
    "loginAt": "2026-10-22T10:58:24.955Z",
    "logoutAt": "2026-10-23T03:29:00.012Z",
    "durationMinutes": 991
  },
  {
    "id": "ses-1792664409864-7v86ia",
    "userId": "person-1789544813478",
    "date": "2026-10-22",
    "loginAt": "2026-10-22T10:20:09.864Z",
    "logoutAt": "2026-10-22T13:39:00.004Z",
    "durationMinutes": 199
  },
  {
    "id": "ses-1792652771699-gc3zkp",
    "userId": "person-1789544813478",
    "date": "2026-10-22",
    "loginAt": "2026-10-22T07:06:11.699Z",
    "logoutAt": "2026-10-22T10:13:02.710Z",
    "durationMinutes": 187
  },
  {
    "id": "ses-1792648846357-zx1li1",
    "userId": "person-1789555841194",
    "date": "2026-10-22",
    "loginAt": "2026-10-22T06:00:46.357Z",
    "logoutAt": "2026-10-23T03:29:00.017Z",
    "durationMinutes": 1288
  },
  {
    "id": "ses-1792644306937-ohdmya",
    "userId": "person-1789544851698",
    "date": "2026-10-22",
    "loginAt": "2026-10-22T04:45:06.937Z",
    "logoutAt": "2026-10-22T05:01:26.065Z",
    "durationMinutes": 16
  },
  {
    "id": "ses-1792643928590-fm8dlk",
    "userId": "person-1789544813478",
    "date": "2026-10-22",
    "loginAt": "2026-10-22T04:38:48.590Z",
    "logoutAt": "2026-10-22T06:30:02.927Z",
    "durationMinutes": 111
  },
  {
    "id": "ses-1792643805362-nqii7d",
    "userId": "person-1789738443448",
    "date": "2026-10-22",
    "loginAt": "2026-10-22T04:36:45.362Z",
    "logoutAt": "2026-10-22T13:37:00.023Z",
    "durationMinutes": 540
  },
  {
    "id": "ses-1792643629629-egvk5c",
    "userId": "person-1789737883615",
    "date": "2026-10-22",
    "loginAt": "2026-10-22T04:33:49.629Z",
    "logoutAt": "2026-10-22T13:34:00.006Z",
    "durationMinutes": 540
  },
  {
    "id": "ses-1792643504429-e79tna",
    "userId": "person-1789549176116",
    "date": "2026-10-22",
    "loginAt": "2026-10-22T04:31:44.429Z",
    "logoutAt": "2026-10-22T13:31:42.740Z",
    "durationMinutes": 540
  },
  {
    "id": "ses-1792643105273-k4n1id",
    "userId": "person-1789737923403",
    "date": "2026-10-22",
    "loginAt": "2026-10-22T04:25:05.273Z",
    "logoutAt": "2026-10-22T13:26:00.003Z",
    "durationMinutes": 541
  },
  {
    "id": "ses-1792589254571-xzlfmh",
    "userId": "usr_founder_eshwar",
    "date": "2026-10-21",
    "loginAt": "2026-10-21T13:27:34.571Z",
    "logoutAt": "2026-10-24T12:57:25.361Z",
    "durationMinutes": 4290
  },
  {
    "id": "ses-1792588032171-qoilsv",
    "userId": "person-1789737883615",
    "date": "2026-10-21",
    "loginAt": "2026-10-21T13:07:12.171Z",
    "logoutAt": "2026-10-21T13:24:00.010Z",
    "durationMinutes": 17
  },
  {
    "id": "ses-1792584756357-gkx9je",
    "userId": "person-1789555841194",
    "date": "2026-10-21",
    "loginAt": "2026-10-21T12:12:36.357Z",
    "logoutAt": "2026-10-21T12:13:06.112Z",
    "durationMinutes": 1
  },
  {
    "id": "ses-1792579697832-z80yj5",
    "userId": "person-1789738443448",
    "date": "2026-10-21",
    "loginAt": "2026-10-21T10:48:17.832Z",
    "logoutAt": "2026-10-22T03:44:00.063Z",
    "durationMinutes": 1016
  },
  {
    "id": "ses-1792578713335-pir4gh",
    "userId": "person-1789737883615",
    "date": "2026-10-21",
    "loginAt": "2026-10-21T10:31:53.335Z",
    "logoutAt": "2026-10-21T13:06:59.934Z",
    "durationMinutes": 155
  },
  {
    "id": "ses-1792576648212-psiyny",
    "userId": "person-1789737883615",
    "date": "2026-10-21",
    "loginAt": "2026-10-21T09:57:28.212Z",
    "logoutAt": "2026-10-21T10:15:27.520Z",
    "durationMinutes": 18
  },
  {
    "id": "ses-1792576301821-t8a6lt",
    "userId": "usr_founder_eshwar",
    "date": "2026-10-21",
    "loginAt": "2026-10-21T09:51:41.821Z",
    "logoutAt": "2026-10-21T13:18:39.614Z",
    "durationMinutes": 207
  },
  {
    "id": "ses-1792576078826-dzt9et",
    "userId": "person-1789555841194",
    "date": "2026-10-21",
    "loginAt": "2026-10-21T09:47:58.826Z",
    "logoutAt": "2026-10-21T09:48:08.426Z",
    "durationMinutes": 1
  },
  {
    "id": "ses-1792571570942-4pkq1s",
    "userId": "usr_founder_eshwar",
    "date": "2026-10-21",
    "loginAt": "2026-10-21T08:32:50.942Z",
    "logoutAt": "2026-10-21T08:33:48.171Z",
    "durationMinutes": 1
  },
  {
    "id": "ses-1792570121806-jg9cdb",
    "userId": "person-1789737883615",
    "date": "2026-10-21",
    "loginAt": "2026-10-21T08:08:41.806Z",
    "logoutAt": "2026-10-21T08:32:22.269Z",
    "durationMinutes": 24
  },
  {
    "id": "ses-1792570096457-7t1egk",
    "userId": "person-1789544851698",
    "date": "2026-10-21",
    "loginAt": "2026-10-21T08:08:16.457Z",
    "logoutAt": "2026-10-21T08:08:34.954Z",
    "durationMinutes": 1
  },
  {
    "id": "ses-1792570014087-oefgy5",
    "userId": "person-1789549176116",
    "date": "2026-10-21",
    "loginAt": "2026-10-21T08:06:54.087Z",
    "logoutAt": "2026-10-21T13:30:42.452Z",
    "durationMinutes": 324
  },
  {
    "id": "ses-1792569728509-7za0q6",
    "userId": "person-1789544851698",
    "date": "2026-10-21",
    "loginAt": "2026-10-21T08:02:08.509Z",
    "logoutAt": "2026-10-21T08:08:16.457Z",
    "durationMinutes": 6
  },
  {
    "id": "ses-1792560477193-qodinr",
    "userId": "person-1789738156900",
    "date": "2026-10-21",
    "loginAt": "2026-10-21T05:27:57.193Z",
    "logoutAt": "2026-10-21T16:01:00.013Z",
    "durationMinutes": 633
  },
  {
    "id": "ses-1792558806760-epzeev",
    "userId": "person-1789544916637",
    "date": "2026-10-21",
    "loginAt": "2026-10-21T05:00:06.760Z",
    "logoutAt": "2026-10-21T14:01:00.020Z",
    "durationMinutes": 541
  },
  {
    "id": "ses-1792557348128-muocuy",
    "userId": "person-1789544851698",
    "date": "2026-10-21",
    "loginAt": "2026-10-21T04:35:48.128Z",
    "logoutAt": "2026-10-21T08:02:08.509Z",
    "durationMinutes": 206
  },
  {
    "id": "ses-1792557266624-qrhim4",
    "userId": "usr_founder_eshwar",
    "date": "2026-10-21",
    "loginAt": "2026-10-21T04:34:26.624Z",
    "logoutAt": "2026-10-21T08:32:50.942Z",
    "durationMinutes": 238
  },
  {
    "id": "ses-1792556863758-d6afph",
    "userId": "person-1789737923403",
    "date": "2026-10-21",
    "loginAt": "2026-10-21T04:27:43.758Z",
    "logoutAt": "2026-10-21T13:28:00.048Z",
    "durationMinutes": 540
  },
  {
    "id": "ses-1792556617751-jvz540",
    "userId": "person-1789737883615",
    "date": "2026-10-21",
    "loginAt": "2026-10-21T04:23:37.751Z",
    "logoutAt": "2026-10-21T08:08:41.806Z",
    "durationMinutes": 225
  },
  {
    "id": "ses-1792556123710-0glvik",
    "userId": "person-1789544813478",
    "date": "2026-10-21",
    "loginAt": "2026-10-21T04:15:23.710Z",
    "logoutAt": "2026-10-21T13:16:00.005Z",
    "durationMinutes": 541
  },
  {
    "id": "ses-1792412330898-fwiaxa",
    "userId": "person-1789549176116",
    "date": "2026-10-19",
    "loginAt": "2026-10-19T12:18:50.898Z",
    "logoutAt": "2026-10-19T13:33:00.005Z",
    "durationMinutes": 74
  },
  {
    "id": "ses-1792403111480-1iqzl8",
    "userId": "person-1789737883615",
    "date": "2026-10-19",
    "loginAt": "2026-10-19T09:45:11.480Z",
    "logoutAt": "2026-10-19T13:32:00.009Z",
    "durationMinutes": 227
  },
  {
    "id": "ses-1792403081904-omjyap",
    "userId": "person-1789544813478",
    "date": "2026-10-19",
    "loginAt": "2026-10-19T09:44:41.904Z",
    "logoutAt": "2026-10-19T13:19:00.004Z",
    "durationMinutes": 214
  },
  {
    "id": "ses-1792402095697-u3y1dw",
    "userId": "person-1789738156900",
    "date": "2026-10-19",
    "loginAt": "2026-10-19T09:28:15.697Z",
    "logoutAt": "2026-10-19T13:54:31.403Z",
    "durationMinutes": 266
  },
  {
    "id": "ses-1792399203719-rehyfr",
    "userId": "person-1789544813478",
    "date": "2026-10-19",
    "loginAt": "2026-10-19T08:40:03.719Z",
    "logoutAt": "2026-10-19T09:41:07.609Z",
    "durationMinutes": 61
  },
  {
    "id": "ses-1792397674233-rvjxbm",
    "userId": "person-1789555841194",
    "date": "2026-10-19",
    "loginAt": "2026-10-19T08:14:34.233Z",
    "logoutAt": "2026-10-21T04:15:00.021Z",
    "durationMinutes": 2640
  },
  {
    "id": "ses-1792390158005-1diz1k",
    "userId": "person-1789544813478",
    "date": "2026-10-19",
    "loginAt": "2026-10-19T06:09:18.005Z",
    "logoutAt": "2026-10-19T08:40:03.719Z",
    "durationMinutes": 151
  },
  {
    "id": "ses-1792388294979-77w8d6",
    "userId": "person-1789544916637",
    "date": "2026-10-19",
    "loginAt": "2026-10-19T05:38:14.979Z",
    "logoutAt": "2026-10-19T12:56:00.009Z",
    "durationMinutes": 438
  },
  {
    "id": "ses-1792387959354-b499fr",
    "userId": "person-1789738156900",
    "date": "2026-10-19",
    "loginAt": "2026-10-19T05:32:39.354Z",
    "logoutAt": "2026-10-19T09:24:36.881Z",
    "durationMinutes": 232
  },
  {
    "id": "ses-1792384347383-gk88uj",
    "userId": "person-1789549176116",
    "date": "2026-10-19",
    "loginAt": "2026-10-19T04:32:27.383Z",
    "logoutAt": "2026-10-19T12:07:45.041Z",
    "durationMinutes": 455
  },
  {
    "id": "ses-1792384274318-ybqb1x",
    "userId": "person-1789737883615",
    "date": "2026-10-19",
    "loginAt": "2026-10-19T04:31:14.318Z",
    "logoutAt": "2026-10-19T09:43:54.655Z",
    "durationMinutes": 313
  },
  {
    "id": "ses-1792383727274-ib80rm",
    "userId": "person-1789738443448",
    "date": "2026-10-19",
    "loginAt": "2026-10-19T04:22:07.274Z",
    "logoutAt": "2026-10-19T13:23:00.008Z",
    "durationMinutes": 541
  },
  {
    "id": "ses-1792383522787-29gr6g",
    "userId": "person-1789544813478",
    "date": "2026-10-19",
    "loginAt": "2026-10-19T04:18:42.787Z",
    "logoutAt": "2026-10-19T05:55:30.909Z",
    "durationMinutes": 97
  },
  {
    "id": "ses-1792382141811-6vr41t",
    "userId": "person-1789544916637",
    "date": "2026-10-19",
    "loginAt": "2026-10-19T03:55:41.811Z",
    "logoutAt": "2026-10-19T05:38:14.979Z",
    "durationMinutes": 103
  },
  {
    "id": "ses-1792242842410-79686y",
    "userId": "person-1789737883615",
    "date": "2026-10-17",
    "loginAt": "2026-10-17T13:14:02.410Z",
    "logoutAt": "2026-10-17T13:33:03.395Z",
    "durationMinutes": 19
  },
  {
    "id": "ses-1792242627845-18ftqy",
    "userId": "person-1789737883615",
    "date": "2026-10-17",
    "loginAt": "2026-10-17T13:10:27.845Z",
    "logoutAt": "2026-10-17T13:14:02.410Z",
    "durationMinutes": 4
  },
  {
    "id": "ses-1792241832273-h5ur2y",
    "userId": "person-1789544851698",
    "date": "2026-10-17",
    "loginAt": "2026-10-17T12:57:12.273Z",
    "logoutAt": "2026-10-17T13:35:00.022Z",
    "durationMinutes": 38
  },
  {
    "id": "ses-1792241823827-6pxtj8",
    "userId": "person-1789544851698",
    "date": "2026-10-17",
    "loginAt": "2026-10-17T12:57:03.827Z",
    "logoutAt": "2026-10-17T12:57:12.273Z",
    "durationMinutes": 1
  },
  {
    "id": "ses-1792241808340-o0rnfk",
    "userId": "person-1789544851698",
    "date": "2026-10-17",
    "loginAt": "2026-10-17T12:56:48.340Z",
    "logoutAt": "2026-10-17T12:57:03.827Z",
    "durationMinutes": 1
  },
  {
    "id": "ses-1792241453651-x2grwf",
    "userId": "usr_founder_eshwar",
    "date": "2026-10-17",
    "loginAt": "2026-10-17T12:50:53.651Z",
    "logoutAt": "2026-10-21T04:34:26.624Z",
    "durationMinutes": 5264
  },
  {
    "id": "ses-1792241426190-97s0sp",
    "userId": "person-1789544851698",
    "date": "2026-10-17",
    "loginAt": "2026-10-17T12:50:26.190Z",
    "logoutAt": "2026-10-17T12:50:38.084Z",
    "durationMinutes": 1
  },
  {
    "id": "ses-1792241371818-3ebqrc",
    "userId": "person-1789544851698",
    "date": "2026-10-17",
    "loginAt": "2026-10-17T12:49:31.818Z",
    "logoutAt": "2026-10-17T12:50:26.190Z",
    "durationMinutes": 1
  },
  {
    "id": "ses-1792241295406-pef7b3",
    "userId": "person-1789544851698",
    "date": "2026-10-17",
    "loginAt": "2026-10-17T12:48:15.406Z",
    "logoutAt": "2026-10-17T12:49:31.818Z",
    "durationMinutes": 1
  },
  {
    "id": "ses-1792241086174-j1ybi2",
    "userId": "person-1789544851698",
    "date": "2026-10-17",
    "loginAt": "2026-10-17T12:44:46.174Z",
    "logoutAt": "2026-10-17T12:48:15.406Z",
    "durationMinutes": 3
  },
  {
    "id": "ses-1792239308844-d3iy05",
    "userId": "person-1789738443448",
    "date": "2026-10-17",
    "loginAt": "2026-10-17T12:15:08.844Z",
    "logoutAt": "2026-10-17T13:23:00.003Z",
    "durationMinutes": 68
  },
  {
    "id": "ses-1792238822330-3oq0yb",
    "userId": "person-1789544851698",
    "date": "2026-10-17",
    "loginAt": "2026-10-17T12:07:02.330Z",
    "logoutAt": "2026-10-17T12:07:27.005Z",
    "durationMinutes": 1
  },
  {
    "id": "ses-1792238745324-l6k66k",
    "userId": "usr_founder_eshwar",
    "date": "2026-10-17",
    "loginAt": "2026-10-17T12:05:45.324Z",
    "logoutAt": "2026-10-17T12:06:49.934Z",
    "durationMinutes": 1
  },
  {
    "id": "ses-1792236672933-ut2edf",
    "userId": "person-1789544851698",
    "date": "2026-10-17",
    "loginAt": "2026-10-17T11:31:12.933Z",
    "logoutAt": "2026-10-17T12:07:02.330Z",
    "durationMinutes": 36
  },
  {
    "id": "ses-1792233623341-jigecu",
    "userId": "person-1789737923403",
    "date": "2026-10-17",
    "loginAt": "2026-10-17T10:40:23.341Z",
    "logoutAt": "2026-10-17T13:15:00.003Z",
    "durationMinutes": 155
  },
  {
    "id": "ses-1792226486762-p9i7oa",
    "userId": "person-1789544851698",
    "date": "2026-10-17",
    "loginAt": "2026-10-17T08:41:26.762Z",
    "logoutAt": "2026-10-17T11:31:12.933Z",
    "durationMinutes": 170
  },
  {
    "id": "ses-1792226416704-3z1vol",
    "userId": "person-1789555841194",
    "date": "2026-10-17",
    "loginAt": "2026-10-17T08:40:16.705Z",
    "logoutAt": "2026-10-19T03:56:00.019Z",
    "durationMinutes": 2596
  },
  {
    "id": "ses-1792217582493-y05lyg",
    "userId": "person-1789544813478",
    "date": "2026-10-17",
    "loginAt": "2026-10-17T06:13:02.493Z",
    "logoutAt": "2026-10-17T10:57:11.148Z",
    "durationMinutes": 284
  },
  {
    "id": "ses-1792216785483-ctbu2y",
    "userId": "person-1789549176116",
    "date": "2026-10-17",
    "loginAt": "2026-10-17T05:59:45.483Z",
    "logoutAt": "2026-10-19T03:56:00.006Z",
    "durationMinutes": 2756
  },
  {
    "id": "ses-1792215641650-qwu0jr",
    "userId": "person-1789738156900",
    "date": "2026-10-17",
    "loginAt": "2026-10-17T05:40:41.650Z",
    "logoutAt": "2026-10-19T03:56:00.015Z",
    "durationMinutes": 2775
  },
  {
    "id": "ses-1792215601478-b2pre2",
    "userId": "person-1789549176116",
    "date": "2026-10-17",
    "loginAt": "2026-10-17T05:40:01.478Z",
    "logoutAt": "2026-10-17T05:56:43.442Z",
    "durationMinutes": 17
  },
  {
    "id": "ses-1792214067151-c2mpjk",
    "userId": "person-1789544813478",
    "date": "2026-10-17",
    "loginAt": "2026-10-17T05:14:27.151Z",
    "logoutAt": "2026-10-17T05:57:11.825Z",
    "durationMinutes": 43
  },
  {
    "id": "ses-1792211695802-58487v",
    "userId": "person-1789738443448",
    "date": "2026-10-17",
    "loginAt": "2026-10-17T04:34:55.802Z",
    "logoutAt": "2026-10-17T12:15:08.844Z",
    "durationMinutes": 460
  },
  {
    "id": "ses-1792211694015-a7el08",
    "userId": "person-1789544851698",
    "date": "2026-10-17",
    "loginAt": "2026-10-17T04:34:54.015Z",
    "logoutAt": "2026-10-17T08:41:26.762Z",
    "durationMinutes": 247
  },
  {
    "id": "ses-1792211693015-cdyi2b",
    "userId": "person-1791175695081",
    "date": "2026-10-17",
    "loginAt": "2026-10-17T04:34:53.015Z",
    "logoutAt": "2026-10-17T13:35:00.017Z",
    "durationMinutes": 540
  },
  {
    "id": "ses-1792211621617-hkdgi0",
    "userId": "person-1789737883615",
    "date": "2026-10-17",
    "loginAt": "2026-10-17T04:33:41.617Z",
    "logoutAt": "2026-10-17T13:10:27.845Z",
    "durationMinutes": 517
  },
  {
    "id": "ses-1792210935969-ai2d7n",
    "userId": "person-1789738443448",
    "date": "2026-10-17",
    "loginAt": "2026-10-17T04:22:15.969Z",
    "logoutAt": "2026-10-17T04:34:37.136Z",
    "durationMinutes": 12
  },
  {
    "id": "ses-1792210499793-xom4qm",
    "userId": "person-1789737923403",
    "date": "2026-10-17",
    "loginAt": "2026-10-17T04:14:59.793Z",
    "logoutAt": "2026-10-17T10:40:10.738Z",
    "durationMinutes": 385
  },
  {
    "id": "ses-1792154447092-mqcdkl",
    "userId": "person-1789544851698",
    "date": "2026-10-16",
    "loginAt": "2026-10-16T12:40:47.092Z",
    "logoutAt": "2026-10-16T13:32:00.005Z",
    "durationMinutes": 51
  },
  {
    "id": "ses-1792153035972-dg3bcu",
    "userId": "person-1789544813478",
    "date": "2026-10-16",
    "loginAt": "2026-10-16T12:17:15.972Z",
    "logoutAt": "2026-10-16T13:40:54.402Z",
    "durationMinutes": 84
  },
  {
    "id": "ses-1792152967867-j2faz7",
    "userId": "person-1789738156900",
    "date": "2026-10-16",
    "loginAt": "2026-10-16T12:16:07.867Z",
    "logoutAt": "2026-10-16T14:37:00.018Z",
    "durationMinutes": 141
  },
  {
    "id": "ses-1792152871792-dd2d3m",
    "userId": "person-1789549176116",
    "date": "2026-10-16",
    "loginAt": "2026-10-16T12:14:31.792Z",
    "logoutAt": "2026-10-16T13:20:00.008Z",
    "durationMinutes": 65
  },
  {
    "id": "ses-1792147447303-o5nl4k",
    "userId": "person-1791175695081",
    "date": "2026-10-16",
    "loginAt": "2026-10-16T10:44:07.303Z",
    "logoutAt": "2026-10-16T13:43:00.009Z",
    "durationMinutes": 179
  },
  {
    "id": "ses-1792146728019-prt3ce",
    "userId": "person-1789544813478",
    "date": "2026-10-16",
    "loginAt": "2026-10-16T10:32:08.019Z",
    "logoutAt": "2026-10-16T12:07:07.562Z",
    "durationMinutes": 95
  },
  {
    "id": "ses-1792145695557-08cq8l",
    "userId": "person-1789737923403",
    "date": "2026-10-16",
    "loginAt": "2026-10-16T10:14:55.557Z",
    "logoutAt": "2026-10-16T13:13:00.005Z",
    "durationMinutes": 178
  },
  {
    "id": "ses-1792136392560-ql5hyh",
    "userId": "person-1789737923403",
    "date": "2026-10-16",
    "loginAt": "2026-10-16T07:39:52.560Z",
    "logoutAt": "2026-10-16T10:14:12.430Z",
    "durationMinutes": 154
  },
  {
    "id": "ses-1792135718607-u9s8r2",
    "userId": "person-1789738443448",
    "date": "2026-10-16",
    "loginAt": "2026-10-16T07:28:38.607Z",
    "logoutAt": "2026-10-16T13:42:00.004Z",
    "durationMinutes": 373
  },
  {
    "id": "ses-1792133695950-puw1rn",
    "userId": "person-1789544851698",
    "date": "2026-10-16",
    "loginAt": "2026-10-16T06:54:55.950Z",
    "logoutAt": "2026-10-16T10:35:36.131Z",
    "durationMinutes": 221
  },
  {
    "id": "ses-1792132680204-o1uadd",
    "userId": "usr_founder_eshwar",
    "date": "2026-10-16",
    "loginAt": "2026-10-16T06:38:00.204Z",
    "logoutAt": "2026-10-17T12:05:45.324Z",
    "durationMinutes": 1768
  },
  {
    "id": "ses-1792132515866-kzjo20",
    "userId": "person-1789555841194",
    "date": "2026-10-16",
    "loginAt": "2026-10-16T06:35:15.866Z",
    "logoutAt": "2026-10-17T03:40:00.007Z",
    "durationMinutes": 1265
  },
  {
    "id": "ses-1792132110440-ioc91p",
    "userId": "person-1789544916637",
    "date": "2026-10-16",
    "loginAt": "2026-10-16T06:28:30.440Z",
    "logoutAt": "2026-10-17T03:40:00.014Z",
    "durationMinutes": 1271
  },
  {
    "id": "ses-1792131640506-odorbz",
    "userId": "person-1789738443448",
    "date": "2026-10-16",
    "loginAt": "2026-10-16T06:20:40.506Z",
    "logoutAt": "2026-10-16T07:28:38.607Z",
    "durationMinutes": 68
  },
  {
    "id": "ses-1792130959844-i46x1i",
    "userId": "person-1789738156900",
    "date": "2026-10-16",
    "loginAt": "2026-10-16T06:09:19.844Z",
    "logoutAt": "2026-10-16T12:07:29.071Z",
    "durationMinutes": 358
  },
  {
    "id": "ses-1792130945213-60g2qa",
    "userId": "person-1789544813478",
    "date": "2026-10-16",
    "loginAt": "2026-10-16T06:09:05.213Z",
    "logoutAt": "2026-10-16T10:26:11.939Z",
    "durationMinutes": 257
  },
  {
    "id": "ses-1792130500657-vu9nfx",
    "userId": "person-1789737883615",
    "date": "2026-10-16",
    "loginAt": "2026-10-16T06:01:40.657Z",
    "logoutAt": "2026-10-16T13:34:00.005Z",
    "durationMinutes": 452
  },
  {
    "id": "ses-1792128988406-g3qvx2",
    "userId": "person-1789738156900",
    "date": "2026-10-16",
    "loginAt": "2026-10-16T05:36:28.406Z",
    "logoutAt": "2026-10-16T05:53:28.986Z",
    "durationMinutes": 17
  },
  {
    "id": "ses-1792128984118-wrhqya",
    "userId": "person-1789544813478",
    "date": "2026-10-16",
    "loginAt": "2026-10-16T05:36:24.118Z",
    "logoutAt": "2026-10-16T05:53:12.025Z",
    "durationMinutes": 17
  },
  {
    "id": "ses-1792125772122-mc7c20",
    "userId": "person-1791175695081",
    "date": "2026-10-16",
    "loginAt": "2026-10-16T04:42:52.122Z",
    "logoutAt": "2026-10-16T10:43:51.564Z",
    "durationMinutes": 361
  },
  {
    "id": "ses-1792125717852-9b0qgs",
    "userId": "person-1789738443448",
    "date": "2026-10-16",
    "loginAt": "2026-10-16T04:41:57.852Z",
    "logoutAt": "2026-10-16T05:53:36.986Z",
    "durationMinutes": 72
  },
  {
    "id": "ses-1792125289137-j6qehz",
    "userId": "person-1789544851698",
    "date": "2026-10-16",
    "loginAt": "2026-10-16T04:34:49.137Z",
    "logoutAt": "2026-10-16T06:54:55.950Z",
    "durationMinutes": 140
  },
  {
    "id": "ses-1792125235257-p5xaqr",
    "userId": "person-1789737883615",
    "date": "2026-10-16",
    "loginAt": "2026-10-16T04:33:55.257Z",
    "logoutAt": "2026-10-16T05:52:31.080Z",
    "durationMinutes": 79
  },
  {
    "id": "ses-1792125104635-0yfmoq",
    "userId": "person-1789544851698",
    "date": "2026-10-16",
    "loginAt": "2026-10-16T04:31:44.635Z",
    "logoutAt": "2026-10-16T04:34:49.137Z",
    "durationMinutes": 3
  },
  {
    "id": "ses-1792124385876-w74h3t",
    "userId": "person-1789549176116",
    "date": "2026-10-16",
    "loginAt": "2026-10-16T04:19:45.876Z",
    "logoutAt": "2026-10-16T12:04:50.136Z",
    "durationMinutes": 465
  },
  {
    "id": "ses-1792123956814-ph6m5h",
    "userId": "person-1789737923403",
    "date": "2026-10-16",
    "loginAt": "2026-10-16T04:12:36.814Z",
    "logoutAt": "2026-10-16T07:07:08.513Z",
    "durationMinutes": 175
  },
  {
    "id": "ses-1792059447358-dxmn1u",
    "userId": "person-1789544916637",
    "date": "2026-10-15",
    "loginAt": "2026-10-15T10:17:27.358Z",
    "logoutAt": "2026-10-16T03:42:00.037Z",
    "durationMinutes": 1045
  },
  {
    "id": "ses-1792054598764-sf68lh",
    "userId": "person-1789738443448",
    "date": "2026-10-15",
    "loginAt": "2026-10-15T08:56:38.765Z",
    "logoutAt": "2026-10-16T03:42:00.031Z",
    "durationMinutes": 1125
  },
  {
    "id": "ses-1792045774210-le6q0p",
    "userId": "usr_founder_eshwar",
    "date": "2026-10-15",
    "loginAt": "2026-10-15T06:29:34.210Z",
    "logoutAt": "2026-10-16T06:38:00.204Z",
    "durationMinutes": 1448
  },
  {
    "id": "ses-1792045675646-091wlr",
    "userId": "person-1789737883615",
    "date": "2026-10-15",
    "loginAt": "2026-10-15T06:27:55.646Z",
    "logoutAt": "2026-10-15T13:30:33.841Z",
    "durationMinutes": 423
  },
  {
    "id": "ses-1792039620166-c4r2hr",
    "userId": "person-1789737883615",
    "date": "2026-10-15",
    "loginAt": "2026-10-15T04:47:00.166Z",
    "logoutAt": "2026-10-15T06:19:29.848Z",
    "durationMinutes": 92
  },
  {
    "id": "ses-1792039591500-gev7zx",
    "userId": "person-1789549176116",
    "date": "2026-10-15",
    "loginAt": "2026-10-15T04:46:31.500Z",
    "logoutAt": "2026-10-15T13:47:00.019Z",
    "durationMinutes": 540
  },
  {
    "id": "ses-1792039461223-rfjcjw",
    "userId": "person-1789544813478",
    "date": "2026-10-15",
    "loginAt": "2026-10-15T04:44:21.223Z",
    "logoutAt": "2026-10-15T13:45:00.020Z",
    "durationMinutes": 541
  },
  {
    "id": "ses-1792039196111-cyc9qj",
    "userId": "person-1789544851698",
    "date": "2026-10-15",
    "loginAt": "2026-10-15T04:39:56.111Z",
    "logoutAt": "2026-10-15T13:40:00.020Z",
    "durationMinutes": 540
  },
  {
    "id": "ses-1792038113408-0d7huo",
    "userId": "person-1789737923403",
    "date": "2026-10-15",
    "loginAt": "2026-10-15T04:21:53.408Z",
    "logoutAt": "2026-10-15T12:33:02.675Z",
    "durationMinutes": 491
  },
  {
    "id": "ses-1791969528016-2getp1",
    "userId": "person-1789738156900",
    "date": "2026-10-14",
    "loginAt": "2026-10-14T09:18:48.016Z",
    "logoutAt": "2026-10-14T13:40:00.021Z",
    "durationMinutes": 261
  },
  {
    "id": "ses-1791964633325-y5o6of",
    "userId": "person-1789549176116",
    "date": "2026-10-14",
    "loginAt": "2026-10-14T07:57:13.325Z",
    "logoutAt": "2026-10-14T13:38:00.020Z",
    "durationMinutes": 341
  },
  {
    "id": "ses-1791962293605-caqt0j",
    "userId": "person-1791175695081",
    "date": "2026-10-14",
    "loginAt": "2026-10-14T07:18:13.605Z",
    "logoutAt": "2026-10-14T13:22:00.004Z",
    "durationMinutes": 364
  },
  {
    "id": "ses-1791957345970-exf28i",
    "userId": "person-1789738443448",
    "date": "2026-10-14",
    "loginAt": "2026-10-14T05:55:45.970Z",
    "logoutAt": "2026-10-15T04:14:00.005Z",
    "durationMinutes": 1338
  },
  {
    "id": "ses-1791952799575-wh9bvg",
    "userId": "person-1789738156900",
    "date": "2026-10-14",
    "loginAt": "2026-10-14T04:39:59.575Z",
    "logoutAt": "2026-10-14T08:59:06.430Z",
    "durationMinutes": 259
  },
  {
    "id": "ses-1791952677652-6rgu1w",
    "userId": "person-1789549176116",
    "date": "2026-10-14",
    "loginAt": "2026-10-14T04:37:57.652Z",
    "logoutAt": "2026-10-14T07:56:54.094Z",
    "durationMinutes": 199
  },
  {
    "id": "ses-1791952637060-k7l7q4",
    "userId": "person-1789549176116",
    "date": "2026-10-14",
    "loginAt": "2026-10-14T04:37:17.060Z",
    "logoutAt": "2026-10-14T04:37:51.673Z",
    "durationMinutes": 1
  },
  {
    "id": "ses-1791952598320-3dnomn",
    "userId": "person-1789544916637",
    "date": "2026-10-14",
    "loginAt": "2026-10-14T04:36:38.320Z",
    "logoutAt": "2026-10-14T13:37:00.027Z",
    "durationMinutes": 540
  },
  {
    "id": "ses-1791952273812-gkt4ab",
    "userId": "person-1789737883615",
    "date": "2026-10-14",
    "loginAt": "2026-10-14T04:31:13.812Z",
    "logoutAt": "2026-10-14T13:31:13.869Z",
    "durationMinutes": 540
  },
  {
    "id": "ses-1791952196697-h3luv3",
    "userId": "person-1789737923403",
    "date": "2026-10-14",
    "loginAt": "2026-10-14T04:29:56.697Z",
    "logoutAt": "2026-10-14T13:30:00.004Z",
    "durationMinutes": 540
  },
  {
    "id": "ses-1791951673474-2m1ibl",
    "userId": "person-1791175695081",
    "date": "2026-10-14",
    "loginAt": "2026-10-14T04:21:13.474Z",
    "logoutAt": "2026-10-14T07:11:52.929Z",
    "durationMinutes": 171
  },
  {
    "id": "ses-1791950379716-dgiybp",
    "userId": "person-1789544813478",
    "date": "2026-10-14",
    "loginAt": "2026-10-14T03:59:39.716Z",
    "logoutAt": "2026-10-14T13:00:00.007Z",
    "durationMinutes": 540
  },
  {
    "id": "ses-1791949787521-gfcvy8",
    "userId": "person-1789544851698",
    "date": "2026-10-14",
    "loginAt": "2026-10-14T03:49:47.521Z",
    "logoutAt": "2026-10-14T03:49:48.197Z",
    "durationMinutes": 1
  },
  {
    "id": "ses-1791893111451-7hrfex",
    "userId": "person-1789544851698",
    "date": "2026-10-13",
    "loginAt": "2026-10-13T12:05:11.451Z",
    "logoutAt": "2026-10-13T13:47:00.025Z",
    "durationMinutes": 102
  },
  {
    "id": "ses-1791884632133-h6jtcv",
    "userId": "person-1789737923403",
    "date": "2026-10-13",
    "loginAt": "2026-10-13T09:43:52.133Z",
    "logoutAt": "2026-10-13T13:35:00.007Z",
    "durationMinutes": 231
  },
  {
    "id": "ses-1791879608352-ipbufb",
    "userId": "person-1791175695081",
    "date": "2026-10-13",
    "loginAt": "2026-10-13T08:20:08.352Z",
    "logoutAt": "2026-10-14T03:29:00.012Z",
    "durationMinutes": 1149
  },
  {
    "id": "ses-1791874725912-i5zsyj",
    "userId": "person-1789737923403",
    "date": "2026-10-13",
    "loginAt": "2026-10-13T06:58:45.912Z",
    "logoutAt": "2026-10-13T09:43:28.849Z",
    "durationMinutes": 165
  },
  {
    "id": "ses-1791872529384-1rlhmv",
    "userId": "person-1789544851698",
    "date": "2026-10-13",
    "loginAt": "2026-10-13T06:22:09.384Z",
    "logoutAt": "2026-10-13T12:05:11.451Z",
    "durationMinutes": 343
  },
  {
    "id": "ses-1791871677989-z3bmzp",
    "userId": "person-1789737883615",
    "date": "2026-10-13",
    "loginAt": "2026-10-13T06:07:57.989Z",
    "logoutAt": "2026-10-13T13:29:00.007Z",
    "durationMinutes": 441
  },
  {
    "id": "ses-1791871152402-0zs1ew",
    "userId": "person-1789738443448",
    "date": "2026-10-13",
    "loginAt": "2026-10-13T05:59:12.402Z",
    "logoutAt": "2026-10-14T03:29:00.006Z",
    "durationMinutes": 1290
  },
  {
    "id": "ses-1791866818194-hwq0px",
    "userId": "person-1789555841194",
    "date": "2026-10-13",
    "loginAt": "2026-10-13T04:46:58.194Z",
    "logoutAt": "2026-10-13T13:47:00.020Z",
    "durationMinutes": 540
  },
  {
    "id": "ses-1791866790572-veqw1e",
    "userId": "person-1789544851698",
    "date": "2026-10-13",
    "loginAt": "2026-10-13T04:46:30.572Z",
    "logoutAt": "2026-10-13T06:22:09.384Z",
    "durationMinutes": 96
  },
  {
    "id": "ses-1791866057689-eau3d1",
    "userId": "person-1789737923403",
    "date": "2026-10-13",
    "loginAt": "2026-10-13T04:34:17.689Z",
    "logoutAt": "2026-10-13T06:58:25.924Z",
    "durationMinutes": 144
  },
  {
    "id": "ses-1791865694424-q24hlw",
    "userId": "person-1789737883615",
    "date": "2026-10-13",
    "loginAt": "2026-10-13T04:28:14.424Z",
    "logoutAt": "2026-10-13T06:07:00.004Z",
    "durationMinutes": 99
  },
  {
    "id": "ses-1791865548822-4hl8p2",
    "userId": "person-1789549176116",
    "date": "2026-10-13",
    "loginAt": "2026-10-13T04:25:48.822Z",
    "logoutAt": "2026-10-13T13:26:00.008Z",
    "durationMinutes": 540
  },
  {
    "id": "ses-1791812387798-u6lekw",
    "userId": "person-1789544813478",
    "date": "2026-10-12",
    "loginAt": "2026-10-12T13:39:47.798Z",
    "logoutAt": "2026-10-13T04:10:00.010Z",
    "durationMinutes": 870
  },
  {
    "id": "ses-1791811563377-cc6lwb",
    "userId": "person-1789738443448",
    "date": "2026-10-12",
    "loginAt": "2026-10-12T13:26:03.377Z",
    "logoutAt": "2026-10-12T13:34:00.009Z",
    "durationMinutes": 8
  },
  {
    "id": "ses-1791806169911-20c3t4",
    "userId": "person-1789737883615",
    "date": "2026-10-12",
    "loginAt": "2026-10-12T11:56:09.911Z",
    "logoutAt": "2026-10-12T13:32:08.232Z",
    "durationMinutes": 96
  },
  {
    "id": "ses-1791806136781-yd7o9m",
    "userId": "person-1789544851698",
    "date": "2026-10-12",
    "loginAt": "2026-10-12T11:55:36.781Z",
    "logoutAt": "2026-10-12T13:26:21.270Z",
    "durationMinutes": 91
  },
  {
    "id": "ses-1791805834646-ix96mb",
    "userId": "person-1789549176116",
    "date": "2026-10-12",
    "loginAt": "2026-10-12T11:50:34.646Z",
    "logoutAt": "2026-10-12T13:34:00.004Z",
    "durationMinutes": 103
  },
  {
    "id": "ses-1791796939880-2m94ua",
    "userId": "person-1789738156900",
    "date": "2026-10-12",
    "loginAt": "2026-10-12T09:22:19.880Z",
    "logoutAt": "2026-10-12T13:46:00.014Z",
    "durationMinutes": 264
  },
  {
    "id": "ses-1791796939455-xxqnjv",
    "userId": "person-1789544813478",
    "date": "2026-10-12",
    "loginAt": "2026-10-12T09:22:19.455Z",
    "logoutAt": "2026-10-12T13:39:44.620Z",
    "durationMinutes": 257
  },
  {
    "id": "ses-1791796863866-8605i3",
    "userId": "person-1789737883615",
    "date": "2026-10-12",
    "loginAt": "2026-10-12T09:21:03.866Z",
    "logoutAt": "2026-10-12T11:45:00.003Z",
    "durationMinutes": 144
  },
  {
    "id": "ses-1791792693645-j7d0w8",
    "userId": "person-1791175695081",
    "date": "2026-10-12",
    "loginAt": "2026-10-12T08:11:33.645Z",
    "logoutAt": "2026-10-12T13:28:00.004Z",
    "durationMinutes": 316
  },
  {
    "id": "ses-1791790352147-e6zm49",
    "userId": "person-1789737923403",
    "date": "2026-10-12",
    "loginAt": "2026-10-12T07:32:32.147Z",
    "logoutAt": "2026-10-12T13:38:00.004Z",
    "durationMinutes": 365
  },
  {
    "id": "ses-1791785698560-e0vcp5",
    "userId": "person-1789737883615",
    "date": "2026-10-12",
    "loginAt": "2026-10-12T06:14:58.560Z",
    "logoutAt": "2026-10-12T09:21:03.866Z",
    "durationMinutes": 186
  },
  {
    "id": "ses-1791785507439-g66onf",
    "userId": "usr_founder_eshwar",
    "date": "2026-10-12",
    "loginAt": "2026-10-12T06:11:47.439Z",
    "logoutAt": "2026-10-15T06:29:34.210Z",
    "durationMinutes": 4338
  },
  {
    "id": "ses-1791785482839-7cpehx",
    "userId": "person-1789544851698",
    "date": "2026-10-12",
    "loginAt": "2026-10-12T06:11:22.839Z",
    "logoutAt": "2026-10-12T11:55:36.781Z",
    "durationMinutes": 344
  },
  {
    "id": "ses-1791785029299-hw1yao",
    "userId": "person-1789738156900",
    "date": "2026-10-12",
    "loginAt": "2026-10-12T06:03:49.299Z",
    "logoutAt": "2026-10-12T09:04:10.784Z",
    "durationMinutes": 180
  },
  {
    "id": "ses-1791784997429-g1f14n",
    "userId": "person-1789544813478",
    "date": "2026-10-12",
    "loginAt": "2026-10-12T06:03:17.429Z",
    "logoutAt": "2026-10-12T09:07:34.035Z",
    "durationMinutes": 184
  },
  {
    "id": "ses-1791781743703-4gwzf5",
    "userId": "person-1789544916637",
    "date": "2026-10-12",
    "loginAt": "2026-10-12T05:09:03.703Z",
    "logoutAt": "2026-10-13T04:10:00.015Z",
    "durationMinutes": 1381
  },
  {
    "id": "ses-1791781685798-wumxbq",
    "userId": "person-1789544851698",
    "date": "2026-10-12",
    "loginAt": "2026-10-12T05:08:05.798Z",
    "logoutAt": "2026-10-12T06:11:10.151Z",
    "durationMinutes": 63
  },
  {
    "id": "ses-1791781323133-64ywoq",
    "userId": "person-1789555841194",
    "date": "2026-10-12",
    "loginAt": "2026-10-12T05:02:03.133Z",
    "logoutAt": "2026-10-13T04:10:00.005Z",
    "durationMinutes": 1388
  },
  {
    "id": "ses-1791781079881-uouic7",
    "userId": "person-1789544813478",
    "date": "2026-10-12",
    "loginAt": "2026-10-12T04:57:59.881Z",
    "logoutAt": "2026-10-12T05:58:11.842Z",
    "durationMinutes": 60
  },
  {
    "id": "ses-1791780346528-tacmxn",
    "userId": "person-1789738156900",
    "date": "2026-10-12",
    "loginAt": "2026-10-12T04:45:46.528Z",
    "logoutAt": "2026-10-12T05:58:13.731Z",
    "durationMinutes": 72
  },
  {
    "id": "ses-1791779869702-sz535x",
    "userId": "person-1789737923403",
    "date": "2026-10-12",
    "loginAt": "2026-10-12T04:37:49.702Z",
    "logoutAt": "2026-10-12T07:32:17.287Z",
    "durationMinutes": 174
  },
  {
    "id": "ses-1791779608659-26euqs",
    "userId": "person-1789738443448",
    "date": "2026-10-12",
    "loginAt": "2026-10-12T04:33:28.659Z",
    "logoutAt": "2026-10-12T11:39:40.309Z",
    "durationMinutes": 426
  },
  {
    "id": "ses-1791779601783-dx58b4",
    "userId": "person-1789549176116",
    "date": "2026-10-12",
    "loginAt": "2026-10-12T04:33:21.783Z",
    "logoutAt": "2026-10-12T11:41:03.695Z",
    "durationMinutes": 428
  },
  {
    "id": "ses-1791779564137-genppw",
    "userId": "person-1789737883615",
    "date": "2026-10-12",
    "loginAt": "2026-10-12T04:32:44.137Z",
    "logoutAt": "2026-10-12T06:14:58.560Z",
    "durationMinutes": 102
  },
  {
    "id": "ses-1791779249411-s0m506",
    "userId": "person-1791175695081",
    "date": "2026-10-12",
    "loginAt": "2026-10-12T04:27:29.411Z",
    "logoutAt": "2026-10-12T06:01:00.004Z",
    "durationMinutes": 94
  },
  {
    "id": "ses-1791630235250-j9jmwj",
    "userId": "person-1789544813478",
    "date": "2026-10-10",
    "loginAt": "2026-10-10T11:03:55.250Z",
    "logoutAt": "2026-10-10T13:45:00.007Z",
    "durationMinutes": 161
  },
  {
    "id": "ses-1791629875530-21yxz8",
    "userId": "person-1789737883615",
    "date": "2026-10-10",
    "loginAt": "2026-10-10T10:57:55.530Z",
    "logoutAt": "2026-10-10T13:31:00.004Z",
    "durationMinutes": 153
  },
  {
    "id": "ses-1791625846653-7i9nki",
    "userId": "person-1791175695081",
    "date": "2026-10-10",
    "loginAt": "2026-10-10T09:50:46.653Z",
    "logoutAt": "2026-10-10T13:17:00.005Z",
    "durationMinutes": 206
  },
  {
    "id": "ses-1791625716896-yvl7gv",
    "userId": "person-1789737923403",
    "date": "2026-10-10",
    "loginAt": "2026-10-10T09:48:36.896Z",
    "logoutAt": "2026-10-10T13:17:00.010Z",
    "durationMinutes": 208
  },
  {
    "id": "ses-1791622058846-bs4prl",
    "userId": "person-1791175695081",
    "date": "2026-10-10",
    "loginAt": "2026-10-10T08:47:38.846Z",
    "logoutAt": "2026-10-10T09:48:44.122Z",
    "durationMinutes": 61
  },
  {
    "id": "ses-1791615053572-5ehfuc",
    "userId": "person-1789737923403",
    "date": "2026-10-10",
    "loginAt": "2026-10-10T06:50:53.572Z",
    "logoutAt": "2026-10-10T09:48:30.761Z",
    "durationMinutes": 178
  },
  {
    "id": "ses-1791613247436-qqefxc",
    "userId": "person-1789737883615",
    "date": "2026-10-10",
    "loginAt": "2026-10-10T06:20:47.436Z",
    "logoutAt": "2026-10-10T10:15:00.004Z",
    "durationMinutes": 234
  },
  {
    "id": "ses-1791611177271-qrsshk",
    "userId": "person-1789738156900",
    "date": "2026-10-10",
    "loginAt": "2026-10-10T05:46:17.271Z",
    "logoutAt": "2026-10-10T13:47:38.562Z",
    "durationMinutes": 481
  },
  {
    "id": "ses-1791607469383-8b3p70",
    "userId": "person-1789555841194",
    "date": "2026-10-10",
    "loginAt": "2026-10-10T04:44:29.383Z",
    "logoutAt": "2026-10-10T13:45:00.012Z",
    "durationMinutes": 541
  },
  {
    "id": "ses-1791607462412-9yamr8",
    "userId": "person-1789544813478",
    "date": "2026-10-10",
    "loginAt": "2026-10-10T04:44:22.412Z",
    "logoutAt": "2026-10-10T10:14:43.815Z",
    "durationMinutes": 330
  },
  {
    "id": "ses-1791606600012-38k4mm",
    "userId": "person-1789737883615",
    "date": "2026-10-10",
    "loginAt": "2026-10-10T04:30:00.012Z",
    "logoutAt": "2026-10-10T06:07:00.003Z",
    "durationMinutes": 97
  },
  {
    "id": "ses-1791605814863-irraby",
    "userId": "person-1789737923403",
    "date": "2026-10-10",
    "loginAt": "2026-10-10T04:16:54.863Z",
    "logoutAt": "2026-10-10T06:50:27.832Z",
    "durationMinutes": 154
  },
  {
    "id": "ses-1791605797671-1m2dm5",
    "userId": "person-1791175695081",
    "date": "2026-10-10",
    "loginAt": "2026-10-10T04:16:37.671Z",
    "logoutAt": "2026-10-10T06:51:02.686Z",
    "durationMinutes": 154
  },
  {
    "id": "ses-1791562107555-7xxcbz",
    "userId": "usr_founder_eshwar",
    "date": "2026-10-09",
    "loginAt": "2026-10-09T16:08:27.555Z",
    "logoutAt": "2026-10-12T06:11:47.439Z",
    "durationMinutes": 3723
  },
  {
    "id": "ses-1791549699451-vkefay",
    "userId": "person-1789544916637",
    "date": "2026-10-09",
    "loginAt": "2026-10-09T12:41:39.451Z",
    "logoutAt": "2026-10-10T04:17:00.007Z",
    "durationMinutes": 935
  },
  {
    "id": "ses-1791537044543-2i6bia",
    "userId": "person-1791175695081",
    "date": "2026-10-09",
    "loginAt": "2026-10-09T09:10:44.543Z",
    "logoutAt": "2026-10-09T13:32:44.144Z",
    "durationMinutes": 262
  },
  {
    "id": "ses-1791537020874-p6dd6v",
    "userId": "person-1789737923403",
    "date": "2026-10-09",
    "loginAt": "2026-10-09T09:10:20.875Z",
    "logoutAt": "2026-10-10T04:16:47.809Z",
    "durationMinutes": 1146
  },
  {
    "id": "ses-1791527939104-etphr8",
    "userId": "person-1789555841194",
    "date": "2026-10-09",
    "loginAt": "2026-10-09T06:38:59.104Z",
    "logoutAt": "2026-10-09T15:50:00.010Z",
    "durationMinutes": 551
  },
  {
    "id": "ses-1791526260968-du34xo",
    "userId": "person-1789544813478",
    "date": "2026-10-09",
    "loginAt": "2026-10-09T06:11:00.968Z",
    "logoutAt": "2026-10-09T15:50:00.018Z",
    "durationMinutes": 579
  },
  {
    "id": "ses-1791521774949-x476i8",
    "userId": "person-1789738443448",
    "date": "2026-10-09",
    "loginAt": "2026-10-09T04:56:14.949Z",
    "logoutAt": "2026-10-09T13:57:00.007Z",
    "durationMinutes": 541
  },
  {
    "id": "ses-1791521769917-o3esr6",
    "userId": "person-1789544851698",
    "date": "2026-10-09",
    "loginAt": "2026-10-09T04:56:09.917Z",
    "logoutAt": "2026-10-09T13:57:00.012Z",
    "durationMinutes": 541
  },
  {
    "id": "ses-1791521729297-x1lq0p",
    "userId": "person-1789737883615",
    "date": "2026-10-09",
    "loginAt": "2026-10-09T04:55:29.297Z",
    "logoutAt": "2026-10-09T12:12:50.609Z",
    "durationMinutes": 437
  },
  {
    "id": "ses-1791521228386-5yayel",
    "userId": "person-1789737923403",
    "date": "2026-10-09",
    "loginAt": "2026-10-09T04:47:08.386Z",
    "logoutAt": "2026-10-09T08:57:32.290Z",
    "durationMinutes": 250
  },
  {
    "id": "ses-1791520363203-fwdmo1",
    "userId": "person-1791175695081",
    "date": "2026-10-09",
    "loginAt": "2026-10-09T04:32:43.203Z",
    "logoutAt": "2026-10-09T09:10:30.141Z",
    "durationMinutes": 278
  },
  {
    "id": "ses-1791520149234-f8ovml",
    "userId": "person-1789738156900",
    "date": "2026-10-09",
    "loginAt": "2026-10-09T04:29:09.234Z",
    "logoutAt": "2026-10-09T13:30:00.005Z",
    "durationMinutes": 541
  },
  {
    "id": "ses-1791517633423-54r7eu",
    "userId": "person-1789549176116",
    "date": "2026-10-09",
    "loginAt": "2026-10-09T03:47:13.423Z",
    "logoutAt": "2026-10-09T12:47:15.202Z",
    "durationMinutes": 540
  },
  {
    "id": "ses-1791517621833-w1ddua",
    "userId": "person-1789549176116",
    "date": "2026-10-09",
    "loginAt": "2026-10-09T03:47:01.833Z",
    "logoutAt": "2026-10-09T03:47:02.627Z",
    "durationMinutes": 1
  },
  {
    "id": "ses-1791465817467-lyawu0",
    "userId": "person-1791175695081",
    "date": "2026-10-08",
    "loginAt": "2026-10-08T13:23:37.467Z",
    "logoutAt": "2026-10-09T03:32:00.014Z",
    "durationMinutes": 848
  },
  {
    "id": "ses-1791462402245-7u1lvn",
    "userId": "usr_founder_eshwar",
    "date": "2026-10-08",
    "loginAt": "2026-10-08T12:26:42.245Z",
    "logoutAt": "2026-10-09T16:08:27.555Z",
    "durationMinutes": 1662
  },
  {
    "id": "ses-1791462374590-l5o5h5",
    "userId": "usr_founder",
    "date": "2026-10-08",
    "loginAt": "2026-10-08T12:26:14.590Z",
    "logoutAt": "2026-10-08T12:26:22.804Z",
    "durationMinutes": 1
  },
  {
    "id": "ses-1791452470531-xzq2k1",
    "userId": "person-1789737883615",
    "date": "2026-10-08",
    "loginAt": "2026-10-08T09:41:10.531Z",
    "logoutAt": "2026-10-08T13:37:46.694Z",
    "durationMinutes": 237
  },
  {
    "id": "ses-1791441148650-5xoo4m",
    "userId": "person-1789555841194",
    "date": "2026-10-08",
    "loginAt": "2026-10-08T06:32:28.650Z",
    "logoutAt": "2026-10-09T03:32:00.007Z",
    "durationMinutes": 1260
  },
  {
    "id": "ses-1791439979387-ymw94i",
    "userId": "person-1791175695081",
    "date": "2026-10-08",
    "loginAt": "2026-10-08T06:12:59.387Z",
    "logoutAt": "2026-10-08T10:52:43.735Z",
    "durationMinutes": 280
  },
  {
    "id": "ses-1791437596658-rpw5k1",
    "userId": "person-1789737923403",
    "date": "2026-10-08",
    "loginAt": "2026-10-08T05:33:16.658Z",
    "logoutAt": "2026-10-08T14:34:00.023Z",
    "durationMinutes": 541
  },
  {
    "id": "ses-1791437015894-1cfl9a",
    "userId": "person-1789738443448",
    "date": "2026-10-08",
    "loginAt": "2026-10-08T05:23:35.894Z",
    "logoutAt": "2026-10-08T14:24:00.041Z",
    "durationMinutes": 540
  },
  {
    "id": "ses-1791435553443-kwa91x",
    "userId": "person-1789738156900",
    "date": "2026-10-08",
    "loginAt": "2026-10-08T04:59:13.443Z",
    "logoutAt": "2026-10-08T13:59:41.514Z",
    "durationMinutes": 540
  },
  {
    "id": "ses-1791434709693-meaj6s",
    "userId": "person-1789544813478",
    "date": "2026-10-08",
    "loginAt": "2026-10-08T04:45:09.693Z",
    "logoutAt": "2026-10-08T13:46:00.008Z",
    "durationMinutes": 541
  },
  {
    "id": "ses-1791434367109-b1g4f3",
    "userId": "usr_founder",
    "date": "2026-10-08",
    "loginAt": "2026-10-08T04:39:27.109Z",
    "logoutAt": "2026-10-08T12:26:09.045Z",
    "durationMinutes": 467
  },
  {
    "id": "ses-1791434357611-mihg67",
    "userId": "person-1789544851698",
    "date": "2026-10-08",
    "loginAt": "2026-10-08T04:39:17.611Z",
    "logoutAt": "2026-10-08T13:39:31.671Z",
    "durationMinutes": 540
  },
  {
    "id": "ses-1791434223654-svyvyb",
    "userId": "person-1789737883615",
    "date": "2026-10-08",
    "loginAt": "2026-10-08T04:37:03.654Z",
    "logoutAt": "2026-10-08T09:41:05.423Z",
    "durationMinutes": 304
  },
  {
    "id": "ses-1791434085382-p90btf",
    "userId": "person-1789549176116",
    "date": "2026-10-08",
    "loginAt": "2026-10-08T04:34:45.382Z",
    "logoutAt": "2026-10-08T13:35:00.006Z",
    "durationMinutes": 540
  },
  {
    "id": "ses-1791433807687-dyjg6y",
    "userId": "person-1789544916637",
    "date": "2026-10-08",
    "loginAt": "2026-10-08T04:30:07.687Z",
    "logoutAt": "2026-10-08T13:31:00.006Z",
    "durationMinutes": 541
  },
  {
    "id": "ses-1791380455848-kwycdh",
    "userId": "person-1789738156900",
    "date": "2026-10-07",
    "loginAt": "2026-10-07T13:40:55.848Z",
    "logoutAt": "2026-10-07T13:40:56.435Z",
    "durationMinutes": 1
  },
  {
    "id": "ses-1791380442061-uk2dde",
    "userId": "person-1789738156900",
    "date": "2026-10-07",
    "loginAt": "2026-10-07T13:40:42.061Z",
    "logoutAt": "2026-10-07T13:40:42.662Z",
    "durationMinutes": 1
  },
  {
    "id": "ses-1791367987951-hko79g",
    "userId": "person-1791175695081",
    "date": "2026-10-07",
    "loginAt": "2026-10-07T10:13:07.952Z",
    "logoutAt": "2026-10-07T19:14:00.022Z",
    "durationMinutes": 541
  },
  {
    "id": "ses-1791355147368-yaa07h",
    "userId": "person-1791175695081",
    "date": "2026-10-07",
    "loginAt": "2026-10-07T06:39:07.368Z",
    "logoutAt": "2026-10-07T08:55:15.411Z",
    "durationMinutes": 136
  },
  {
    "id": "ses-1791351904170-vycfwl",
    "userId": "person-1789555841194",
    "date": "2026-10-07",
    "loginAt": "2026-10-07T05:45:04.170Z",
    "logoutAt": "2026-10-07T14:46:00.021Z",
    "durationMinutes": 541
  },
  {
    "id": "ses-1791349724939-l1tz8x",
    "userId": "person-1789544916637",
    "date": "2026-10-07",
    "loginAt": "2026-10-07T05:08:44.939Z",
    "logoutAt": "2026-10-07T14:09:00.027Z",
    "durationMinutes": 540
  },
  {
    "id": "ses-1791348638619-1oc00u",
    "userId": "person-1789544813478",
    "date": "2026-10-07",
    "loginAt": "2026-10-07T04:50:38.619Z",
    "logoutAt": "2026-10-07T13:51:00.018Z",
    "durationMinutes": 540
  },
  {
    "id": "ses-1791348606764-zs7z83",
    "userId": "person-1789737883615",
    "date": "2026-10-07",
    "loginAt": "2026-10-07T04:50:06.764Z",
    "logoutAt": "2026-10-07T13:45:04.676Z",
    "durationMinutes": 535
  },
  {
    "id": "ses-1791348019806-qsxa4u",
    "userId": "person-1789544851698",
    "date": "2026-10-07",
    "loginAt": "2026-10-07T04:40:19.806Z",
    "logoutAt": "2026-10-07T13:41:00.004Z",
    "durationMinutes": 541
  },
  {
    "id": "ses-1791347971573-a8duzm",
    "userId": "person-1789738156900",
    "date": "2026-10-07",
    "loginAt": "2026-10-07T04:39:31.573Z",
    "logoutAt": "2026-10-07T13:39:42.661Z",
    "durationMinutes": 540
  },
  {
    "id": "ses-1791347671686-tr2287",
    "userId": "person-1789738443448",
    "date": "2026-10-07",
    "loginAt": "2026-10-07T04:34:31.686Z",
    "logoutAt": "2026-10-07T13:35:00.007Z",
    "durationMinutes": 540
  },
  {
    "id": "ses-1791347472448-o2gfno",
    "userId": "person-1789549176116",
    "date": "2026-10-07",
    "loginAt": "2026-10-07T04:31:12.448Z",
    "logoutAt": "2026-10-07T13:32:00.004Z",
    "durationMinutes": 541
  },
  {
    "id": "ses-1791346204334-gw9cg6",
    "userId": "usr_founder",
    "date": "2026-10-07",
    "loginAt": "2026-10-07T04:10:04.334Z",
    "logoutAt": "2026-10-08T04:39:27.109Z",
    "durationMinutes": 1469
  },
  {
    "id": "ses-1791285574870-zp5c2k",
    "userId": "person-1789544813478",
    "date": "2026-10-06",
    "loginAt": "2026-10-06T11:19:34.870Z",
    "logoutAt": "2026-10-06T13:41:20.191Z",
    "durationMinutes": 142
  },
  {
    "id": "ses-1791284274737-wkgtp8",
    "userId": "person-1789544813478",
    "date": "2026-10-06",
    "loginAt": "2026-10-06T10:57:54.737Z",
    "logoutAt": "2026-10-06T11:19:34.870Z",
    "durationMinutes": 22
  },
  {
    "id": "ses-1791284254847-fxda4o",
    "userId": "person-1789738156900",
    "date": "2026-10-06",
    "loginAt": "2026-10-06T10:57:34.847Z",
    "logoutAt": "2026-10-06T19:58:00.020Z",
    "durationMinutes": 540
  },
  {
    "id": "ses-1791283770243-i0ek11",
    "userId": "person-1789737883615",
    "date": "2026-10-06",
    "loginAt": "2026-10-06T10:49:30.243Z",
    "logoutAt": "2026-10-06T13:30:05.608Z",
    "durationMinutes": 161
  },
  {
    "id": "ses-1791283621585-ue176x",
    "userId": "person-1789549176116",
    "date": "2026-10-06",
    "loginAt": "2026-10-06T10:47:01.585Z",
    "logoutAt": "2026-10-06T13:31:57.581Z",
    "durationMinutes": 165
  },
  {
    "id": "ses-1791281677280-bkp7w7",
    "userId": "person-1791175695081",
    "date": "2026-10-06",
    "loginAt": "2026-10-06T10:14:37.280Z",
    "logoutAt": "2026-10-06T13:31:09.577Z",
    "durationMinutes": 197
  },
  {
    "id": "ses-1791270710038-57zg9m",
    "userId": "person-1789555841194",
    "date": "2026-10-06",
    "loginAt": "2026-10-06T07:11:50.038Z",
    "logoutAt": "2026-10-06T16:30:00.024Z",
    "durationMinutes": 558
  },
  {
    "id": "ses-1791266212687-hvtssu",
    "userId": "usr_founder",
    "date": "2026-10-06",
    "loginAt": "2026-10-06T05:56:52.687Z",
    "logoutAt": "2026-10-07T04:10:04.334Z",
    "durationMinutes": 1333
  },
  {
    "id": "ses-1791266178354-0i1skq",
    "userId": "usr_founder",
    "date": "2026-10-06",
    "loginAt": "2026-10-06T05:56:18.354Z",
    "logoutAt": "2026-10-06T05:56:44.514Z",
    "durationMinutes": 1
  },
  {
    "id": "ses-1791266072077-j8zwb9",
    "userId": "usr_founder",
    "date": "2026-10-06",
    "loginAt": "2026-10-06T05:54:32.077Z",
    "logoutAt": "2026-10-06T05:56:18.354Z",
    "durationMinutes": 2
  },
  {
    "id": "ses-1791266047110-ze86c1",
    "userId": "usr_founder",
    "date": "2026-10-06",
    "loginAt": "2026-10-06T05:54:07.110Z",
    "logoutAt": "2026-10-06T05:54:32.077Z",
    "durationMinutes": 1
  },
  {
    "id": "ses-1791266040760-rcrhx8",
    "userId": "usr_founder",
    "date": "2026-10-06",
    "loginAt": "2026-10-06T05:54:00.760Z",
    "logoutAt": "2026-10-06T05:54:07.110Z",
    "durationMinutes": 1
  },
  {
    "id": "ses-1791266006744-dv635f",
    "userId": "usr_founder",
    "date": "2026-10-06",
    "loginAt": "2026-10-06T05:53:26.744Z",
    "logoutAt": "2026-10-06T05:53:57.374Z",
    "durationMinutes": 1
  },
  {
    "id": "ses-1791262727317-unemml",
    "userId": "person-1789738156900",
    "date": "2026-10-06",
    "loginAt": "2026-10-06T04:58:47.317Z",
    "logoutAt": "2026-10-06T10:37:45.986Z",
    "durationMinutes": 339
  },
  {
    "id": "ses-1791261796886-daq2ot",
    "userId": "person-1789544916637",
    "date": "2026-10-06",
    "loginAt": "2026-10-06T04:43:16.886Z",
    "logoutAt": "2026-10-06T13:44:00.007Z",
    "durationMinutes": 541
  },
  {
    "id": "ses-1791261623043-ip5zx2",
    "userId": "person-1789544813478",
    "date": "2026-10-06",
    "loginAt": "2026-10-06T04:40:23.043Z",
    "logoutAt": "2026-10-06T10:37:06.846Z",
    "durationMinutes": 357
  },
  {
    "id": "ses-1791261443374-2mbrn0",
    "userId": "usr_founder",
    "date": "2026-10-06",
    "loginAt": "2026-10-06T04:37:23.374Z",
    "logoutAt": "2026-10-06T05:53:01.529Z",
    "durationMinutes": 76
  },
  {
    "id": "ses-1791261408083-2nsqn4",
    "userId": "person-1789544851698",
    "date": "2026-10-06",
    "loginAt": "2026-10-06T04:36:48.083Z",
    "logoutAt": "2026-10-06T13:37:00.005Z",
    "durationMinutes": 540
  },
  {
    "id": "ses-1791261290880-vwer72",
    "userId": "person-1789549176116",
    "date": "2026-10-06",
    "loginAt": "2026-10-06T04:34:50.880Z",
    "logoutAt": "2026-10-06T10:46:32.955Z",
    "durationMinutes": 372
  },
  {
    "id": "ses-1791261205550-6wg2xt",
    "userId": "person-1789549176116",
    "date": "2026-10-06",
    "loginAt": "2026-10-06T04:33:25.550Z",
    "logoutAt": "2026-10-06T04:33:26.363Z",
    "durationMinutes": 1
  },
  {
    "id": "ses-1791261188233-rykjaf",
    "userId": "person-1789549176116",
    "date": "2026-10-06",
    "loginAt": "2026-10-06T04:33:08.233Z",
    "logoutAt": "2026-10-06T04:33:08.893Z",
    "durationMinutes": 1
  },
  {
    "id": "ses-1791261157095-3tm7gh",
    "userId": "person-1789549176116",
    "date": "2026-10-06",
    "loginAt": "2026-10-06T04:32:37.095Z",
    "logoutAt": "2026-10-06T04:32:37.719Z",
    "durationMinutes": 1
  },
  {
    "id": "ses-1791261114359-zk6gfu",
    "userId": "person-1789549176116",
    "date": "2026-10-06",
    "loginAt": "2026-10-06T04:31:54.359Z",
    "logoutAt": "2026-10-06T04:31:54.990Z",
    "durationMinutes": 1
  },
  {
    "id": "ses-1791261068230-25lkso",
    "userId": "person-1791175695081",
    "date": "2026-10-06",
    "loginAt": "2026-10-06T04:31:08.230Z",
    "logoutAt": "2026-10-06T10:14:25.890Z",
    "durationMinutes": 343
  },
  {
    "id": "ses-1791261003752-z9havw",
    "userId": "person-1789737883615",
    "date": "2026-10-06",
    "loginAt": "2026-10-06T04:30:03.752Z",
    "logoutAt": "2026-10-06T10:37:19.102Z",
    "durationMinutes": 367
  },
  {
    "id": "ses-1791260779203-bdctex",
    "userId": "person-1789738443448",
    "date": "2026-10-06",
    "loginAt": "2026-10-06T04:26:19.203Z",
    "logoutAt": "2026-10-06T13:26:20.879Z",
    "durationMinutes": 540
  },
  {
    "id": "ses-1791208042216-swbapf",
    "userId": "person-1789737923403",
    "date": "2026-10-05",
    "loginAt": "2026-10-05T13:47:22.216Z",
    "logoutAt": "2026-10-05T13:47:22.833Z",
    "durationMinutes": 1
  },
  {
    "id": "ses-1791208031973-7f0qyn",
    "userId": "person-1789737923403",
    "date": "2026-10-05",
    "loginAt": "2026-10-05T13:47:11.973Z",
    "logoutAt": "2026-10-05T13:47:12.660Z",
    "durationMinutes": 1
  },
  {
    "id": "ses-1791206101786-jf8q6b",
    "userId": "person-1789549176116",
    "date": "2026-10-05",
    "loginAt": "2026-10-05T13:15:01.786Z",
    "logoutAt": "2026-10-05T13:15:02.517Z",
    "durationMinutes": 1
  },
  {
    "id": "ses-1791206093743-f5rq7b",
    "userId": "person-1789549176116",
    "date": "2026-10-05",
    "loginAt": "2026-10-05T13:14:53.743Z",
    "logoutAt": "2026-10-05T13:14:54.416Z",
    "durationMinutes": 1
  },
  {
    "id": "ses-1791197338122-q6l5ye",
    "userId": "person-1789737923403",
    "date": "2026-10-05",
    "loginAt": "2026-10-05T10:48:58.122Z",
    "logoutAt": "2026-10-05T13:36:38.753Z",
    "durationMinutes": 168
  },
  {
    "id": "ses-1791196392333-zf7l83",
    "userId": "person-1789544813478",
    "date": "2026-10-05",
    "loginAt": "2026-10-05T10:33:12.333Z",
    "logoutAt": "2026-10-06T03:26:00.025Z",
    "durationMinutes": 1013
  },
  {
    "id": "ses-1791195146525-aogqn7",
    "userId": "person-1791175695081",
    "date": "2026-10-05",
    "loginAt": "2026-10-05T10:12:26.525Z",
    "logoutAt": "2026-10-06T03:26:00.013Z",
    "durationMinutes": 1034
  },
  {
    "id": "ses-1791191439221-n40kc2",
    "userId": "person-1789737923403",
    "date": "2026-10-05",
    "loginAt": "2026-10-05T09:10:39.221Z",
    "logoutAt": "2026-10-05T10:11:38.814Z",
    "durationMinutes": 61
  },
  {
    "id": "ses-1791186438444-ck89u1",
    "userId": "person-1791175695081",
    "date": "2026-10-05",
    "loginAt": "2026-10-05T07:47:18.444Z",
    "logoutAt": "2026-10-05T10:11:19.744Z",
    "durationMinutes": 144
  },
  {
    "id": "ses-1791179067002-vd6vkb",
    "userId": "person-1789738156900",
    "date": "2026-10-05",
    "loginAt": "2026-10-05T05:44:27.002Z",
    "logoutAt": "2026-10-06T03:26:00.031Z",
    "durationMinutes": 1302
  },
  {
    "id": "ses-1791179056969-spxylc",
    "userId": "person-1789544813478",
    "date": "2026-10-05",
    "loginAt": "2026-10-05T05:44:16.970Z",
    "logoutAt": "2026-10-05T10:16:48.517Z",
    "durationMinutes": 273
  },
  {
    "id": "ses-1791177926488-j8io12",
    "userId": "person-1789544813478",
    "date": "2026-10-05",
    "loginAt": "2026-10-05T05:25:26.488Z",
    "logoutAt": "2026-10-05T05:40:35.133Z",
    "durationMinutes": 15
  },
  {
    "id": "ses-1791177430090-atbbch",
    "userId": "person-1789738156900",
    "date": "2026-10-05",
    "loginAt": "2026-10-05T05:17:10.090Z",
    "logoutAt": "2026-10-05T05:41:48.617Z",
    "durationMinutes": 25
  },
  {
    "id": "ses-1791175742679-9e2u9d",
    "userId": "person-1791175695081",
    "date": "2026-10-05",
    "loginAt": "2026-10-05T04:49:02.679Z",
    "logoutAt": "2026-10-05T07:47:05.468Z",
    "durationMinutes": 178
  },
  {
    "id": "ses-1791175588263-wfftkh",
    "userId": "person-1789738443448",
    "date": "2026-10-05",
    "loginAt": "2026-10-05T04:46:28.263Z",
    "logoutAt": "2026-10-05T13:47:00.003Z",
    "durationMinutes": 541
  },
  {
    "id": "ses-1791174960509-tc0qxr",
    "userId": "person-1789737923403",
    "date": "2026-10-05",
    "loginAt": "2026-10-05T04:36:00.509Z",
    "logoutAt": "2026-10-05T07:52:00.002Z",
    "durationMinutes": 196
  },
  {
    "id": "ses-1791174910847-bambun",
    "userId": "person-1789544851698",
    "date": "2026-10-05",
    "loginAt": "2026-10-05T04:35:10.847Z",
    "logoutAt": "2026-10-05T13:36:00.004Z",
    "durationMinutes": 541
  },
  {
    "id": "ses-1791174885283-d187uh",
    "userId": "usr_founder",
    "date": "2026-10-05",
    "loginAt": "2026-10-05T04:34:45.283Z",
    "logoutAt": "2026-10-06T04:37:23.374Z",
    "durationMinutes": 1443
  },
  {
    "id": "ses-1791174639848-07w57v",
    "userId": "person-1789737883615",
    "date": "2026-10-05",
    "loginAt": "2026-10-05T04:30:39.848Z",
    "logoutAt": "2026-10-05T13:31:00.004Z",
    "durationMinutes": 540
  },
  {
    "id": "ses-1791174524541-f98shx",
    "userId": "person-1789544916637",
    "date": "2026-10-05",
    "loginAt": "2026-10-05T04:28:44.541Z",
    "logoutAt": "2026-10-05T13:28:56.521Z",
    "durationMinutes": 540
  },
  {
    "id": "ses-1791173563854-coun59",
    "userId": "person-1789549176116",
    "date": "2026-10-05",
    "loginAt": "2026-10-05T04:12:43.854Z",
    "logoutAt": "2026-10-05T13:12:38.683Z",
    "durationMinutes": 540
  },
  {
    "id": "ses-1791173545468-e3jbyy",
    "userId": "person-1789549176116",
    "date": "2026-10-05",
    "loginAt": "2026-10-05T04:12:25.468Z",
    "logoutAt": "2026-10-05T04:12:26.118Z",
    "durationMinutes": 1
  },
  {
    "id": "ses-1791173528706-z8omt9",
    "userId": "person-1789549176116",
    "date": "2026-10-05",
    "loginAt": "2026-10-05T04:12:08.706Z",
    "logoutAt": "2026-10-05T04:12:09.573Z",
    "durationMinutes": 1
  },
  {
    "id": "ses-1791006129527-oet8h9",
    "userId": "person-1789544916637",
    "date": "2026-10-03",
    "loginAt": "2026-10-03T05:42:09.527Z",
    "logoutAt": "2026-10-03T15:42:00.020Z",
    "durationMinutes": 600
  },
  {
    "id": "ses-1791006124687-ojjgiu",
    "userId": "person-1789738443448",
    "date": "2026-10-03",
    "loginAt": "2026-10-03T05:42:04.687Z",
    "logoutAt": "2026-10-03T15:42:00.010Z",
    "durationMinutes": 600
  },
  {
    "id": "ses-1791004307840-hjw2gs",
    "userId": "person-1789544916637",
    "date": "2026-10-03",
    "loginAt": "2026-10-03T05:11:47.840Z",
    "logoutAt": "2026-10-03T05:34:14.929Z",
    "durationMinutes": 22
  },
  {
    "id": "ses-1791003037559-l238b2",
    "userId": "person-1789555841194",
    "date": "2026-10-03",
    "loginAt": "2026-10-03T04:50:37.559Z",
    "logoutAt": "2026-10-03T15:42:00.005Z",
    "durationMinutes": 651
  },
  {
    "id": "ses-1791002997356-ed34gf",
    "userId": "person-1789738156900",
    "date": "2026-10-03",
    "loginAt": "2026-10-03T04:49:57.356Z",
    "logoutAt": "2026-10-03T15:42:00.015Z",
    "durationMinutes": 652
  },
  {
    "id": "ses-1791002195979-a3meh1",
    "userId": "person-1789738443448",
    "date": "2026-10-03",
    "loginAt": "2026-10-03T04:36:35.979Z",
    "logoutAt": "2026-10-03T05:41:57.123Z",
    "durationMinutes": 65
  },
  {
    "id": "ses-1791001711596-2atvp9",
    "userId": "person-1789549176116",
    "date": "2026-10-03",
    "loginAt": "2026-10-03T04:28:31.596Z",
    "logoutAt": "2026-10-03T13:29:00.005Z",
    "durationMinutes": 540
  },
  {
    "id": "ses-1791001308794-p5wpf4",
    "userId": "person-1789737883615",
    "date": "2026-10-03",
    "loginAt": "2026-10-03T04:21:48.794Z",
    "logoutAt": "2026-10-03T13:21:49.567Z",
    "durationMinutes": 540
  },
  {
    "id": "ses-1790933092540-ziu5bq",
    "userId": "person-1789544851698",
    "date": "2026-10-02",
    "loginAt": "2026-10-02T09:24:52.540Z",
    "logoutAt": "2026-10-02T09:25:37.474Z",
    "durationMinutes": 1
  },
  {
    "id": "ses-1790932966407-h8hu9d",
    "userId": "usr_founder",
    "date": "2026-10-02",
    "loginAt": "2026-10-02T09:22:46.407Z",
    "logoutAt": "2026-10-05T04:34:45.283Z",
    "durationMinutes": 4032
  },
  {
    "id": "ses-1790869639536-e0hvbt",
    "userId": "person-1789549176116",
    "date": "2026-10-01",
    "loginAt": "2026-10-01T15:47:19.536Z",
    "logoutAt": "2026-10-01T15:48:23.248Z",
    "durationMinutes": 1
  },
  {
    "id": "ses-1790863879669-o3u1bh",
    "userId": "person-1789737923403",
    "date": "2026-10-01",
    "loginAt": "2026-10-01T14:11:19.669Z",
    "logoutAt": "2026-10-02T09:23:00.006Z",
    "durationMinutes": 1152
  },
  {
    "id": "ses-1790857770852-ozc5as",
    "userId": "person-1789544813478",
    "date": "2026-10-01",
    "loginAt": "2026-10-01T12:29:30.852Z",
    "logoutAt": "2026-10-01T13:36:26.810Z",
    "durationMinutes": 67
  },
  {
    "id": "ses-1790848696918-25y9xg",
    "userId": "person-1789549176116",
    "date": "2026-10-01",
    "loginAt": "2026-10-01T09:58:16.918Z",
    "logoutAt": "2026-10-01T15:47:19.536Z",
    "durationMinutes": 349
  },
  {
    "id": "ses-1790839792259-doxdai",
    "userId": "person-1789549176116",
    "date": "2026-10-01",
    "loginAt": "2026-10-01T07:29:52.259Z",
    "logoutAt": "2026-10-01T07:32:03.818Z",
    "durationMinutes": 2
  },
  {
    "id": "ses-1790839785389-0cl88n",
    "userId": "person-1789544851698",
    "date": "2026-10-01",
    "loginAt": "2026-10-01T07:29:45.389Z",
    "logoutAt": "2026-10-01T16:30:00.025Z",
    "durationMinutes": 540
  },
  {
    "id": "ses-1790837586972-i2f44x",
    "userId": "person-1789737883615",
    "date": "2026-10-01",
    "loginAt": "2026-10-01T06:53:06.972Z",
    "logoutAt": "2026-10-01T13:31:40.457Z",
    "durationMinutes": 399
  },
  {
    "id": "ses-1790834891199-bz7d7a",
    "userId": "person-1789737923403",
    "date": "2026-10-01",
    "loginAt": "2026-10-01T06:08:11.199Z",
    "logoutAt": "2026-10-01T11:46:44.477Z",
    "durationMinutes": 339
  },
  {
    "id": "ses-1790834890734-byug9t",
    "userId": "person-1789738156900",
    "date": "2026-10-01",
    "loginAt": "2026-10-01T06:08:10.734Z",
    "logoutAt": "2026-10-01T15:08:26.280Z",
    "durationMinutes": 540
  },
  {
    "id": "ses-1790833439614-tsjtpw",
    "userId": "person-1789555841194",
    "date": "2026-10-01",
    "loginAt": "2026-10-01T05:43:59.614Z",
    "logoutAt": "2026-10-01T14:44:00.016Z",
    "durationMinutes": 540
  },
  {
    "id": "ses-1790829625680-w6vey0",
    "userId": "person-1789544916637",
    "date": "2026-10-01",
    "loginAt": "2026-10-01T04:40:25.680Z",
    "logoutAt": "2026-10-01T13:41:00.015Z",
    "durationMinutes": 541
  },
  {
    "id": "ses-1790829582435-a78g2n",
    "userId": "person-1789549176116",
    "date": "2026-10-01",
    "loginAt": "2026-10-01T04:39:42.435Z",
    "logoutAt": "2026-10-01T04:41:53.447Z",
    "durationMinutes": 2
  },
  {
    "id": "ses-1790829336669-pqh4vt",
    "userId": "person-1789544813478",
    "date": "2026-10-01",
    "loginAt": "2026-10-01T04:35:36.669Z",
    "logoutAt": "2026-10-01T12:04:00.015Z",
    "durationMinutes": 448
  },
  {
    "id": "ses-1790829074481-ke6jnc",
    "userId": "person-1789737883615",
    "date": "2026-10-01",
    "loginAt": "2026-10-01T04:31:14.481Z",
    "logoutAt": "2026-10-01T06:52:41.141Z",
    "durationMinutes": 141
  },
  {
    "id": "ses-1790829048415-mjrdb6",
    "userId": "person-1789738443448",
    "date": "2026-10-01",
    "loginAt": "2026-10-01T04:30:48.415Z",
    "logoutAt": "2026-10-01T13:31:00.014Z",
    "durationMinutes": 540
  },
  {
    "id": "ses-1790828326454-nw0tjg",
    "userId": "person-1789544851698",
    "date": "2026-10-01",
    "loginAt": "2026-10-01T04:18:46.454Z",
    "logoutAt": "2026-10-01T06:27:24.098Z",
    "durationMinutes": 129
  },
  {
    "id": "ses-1790828133181-655yu6",
    "userId": "person-1789544851698",
    "date": "2026-10-01",
    "loginAt": "2026-10-01T04:15:33.181Z",
    "logoutAt": "2026-10-01T04:17:21.607Z",
    "durationMinutes": 2
  },
  {
    "id": "ses-1790827780525-j7p4p4",
    "userId": "person-1789544851698",
    "date": "2026-10-01",
    "loginAt": "2026-10-01T04:09:40.525Z",
    "logoutAt": "2026-10-01T04:11:21.688Z",
    "durationMinutes": 2
  },
  {
    "id": "ses-1790827534119-a3ba0a",
    "userId": "person-1789544851698",
    "date": "2026-10-01",
    "loginAt": "2026-10-01T04:05:34.119Z",
    "logoutAt": "2026-10-01T04:07:21.569Z",
    "durationMinutes": 2
  },
  {
    "id": "ses-1790826786961-x65fyv",
    "userId": "person-1789544851698",
    "date": "2026-10-01",
    "loginAt": "2026-10-01T03:53:06.961Z",
    "logoutAt": "2026-10-01T04:00:21.598Z",
    "durationMinutes": 7
  },
  {
    "id": "ses-1790826764508-lmbgzy",
    "userId": "usr_founder",
    "date": "2026-10-01",
    "loginAt": "2026-10-01T03:52:44.508Z",
    "logoutAt": "2026-10-02T09:22:46.407Z",
    "durationMinutes": 1770
  },
  {
    "id": "ses-1790775437404-lxs9jb",
    "userId": "person-1789737923403",
    "date": "2026-09-30",
    "loginAt": "2026-09-30T13:37:17.404Z",
    "logoutAt": "2026-09-30T13:37:25.793Z",
    "durationMinutes": 1
  },
  {
    "id": "ses-1790774056257-mpquw5",
    "userId": "person-1789544851698",
    "date": "2026-09-30",
    "loginAt": "2026-09-30T13:14:16.257Z",
    "logoutAt": "2026-09-30T13:16:21.801Z",
    "durationMinutes": 2
  },
  {
    "id": "ses-1790773667901-6eiyr9",
    "userId": "person-1789544851698",
    "date": "2026-09-30",
    "loginAt": "2026-09-30T13:07:47.901Z",
    "logoutAt": "2026-09-30T13:11:21.865Z",
    "durationMinutes": 4
  },
  {
    "id": "ses-1790771125910-fpkffo",
    "userId": "person-1789544851698",
    "date": "2026-09-30",
    "loginAt": "2026-09-30T12:25:25.910Z",
    "logoutAt": "2026-09-30T12:27:21.797Z",
    "durationMinutes": 2
  },
  {
    "id": "ses-1790769270469-cz3rc2",
    "userId": "person-1789555841194",
    "date": "2026-09-30",
    "loginAt": "2026-09-30T11:54:30.469Z",
    "logoutAt": "2026-09-30T11:56:18.936Z",
    "durationMinutes": 2
  },
  {
    "id": "ses-1790769254694-w717rj",
    "userId": "person-1789555841194",
    "date": "2026-09-30",
    "loginAt": "2026-09-30T11:54:14.694Z",
    "logoutAt": "2026-09-30T11:54:23.900Z",
    "durationMinutes": 1
  },
  {
    "id": "ses-1790760831271-79iqji",
    "userId": "person-1789544851698",
    "date": "2026-09-30",
    "loginAt": "2026-09-30T09:33:51.271Z",
    "logoutAt": "2026-09-30T12:19:21.971Z",
    "durationMinutes": 166
  },
  {
    "id": "ses-1790760770607-fnv5op",
    "userId": "person-1789737883615",
    "date": "2026-09-30",
    "loginAt": "2026-09-30T09:32:50.607Z",
    "logoutAt": "2026-09-30T13:31:36.054Z",
    "durationMinutes": 239
  },
  {
    "id": "ses-1790753091826-t64n53",
    "userId": "person-1789737923403",
    "date": "2026-09-30",
    "loginAt": "2026-09-30T07:24:51.826Z",
    "logoutAt": "2026-09-30T13:37:11.145Z",
    "durationMinutes": 372
  },
  {
    "id": "ses-1790749076003-eo6wgf",
    "userId": "person-1789544916637",
    "date": "2026-09-30",
    "loginAt": "2026-09-30T06:17:56.003Z",
    "logoutAt": "2026-10-01T03:53:00.013Z",
    "durationMinutes": 1295
  },
  {
    "id": "ses-1790748089408-vtw2td",
    "userId": "person-1789544851698",
    "date": "2026-09-30",
    "loginAt": "2026-09-30T06:01:29.408Z",
    "logoutAt": "2026-09-30T09:28:00.004Z",
    "durationMinutes": 207
  },
  {
    "id": "ses-1790747971057-4ot26w",
    "userId": "person-1789737883615",
    "date": "2026-09-30",
    "loginAt": "2026-09-30T05:59:31.057Z",
    "logoutAt": "2026-09-30T09:23:00.004Z",
    "durationMinutes": 203
  },
  {
    "id": "ses-1790747956420-a19zce",
    "userId": "person-1789738443448",
    "date": "2026-09-30",
    "loginAt": "2026-09-30T05:59:16.420Z",
    "logoutAt": "2026-10-01T03:53:00.007Z",
    "durationMinutes": 1314
  },
  {
    "id": "ses-1790746218671-li2213",
    "userId": "person-1789544916637",
    "date": "2026-09-30",
    "loginAt": "2026-09-30T05:30:18.671Z",
    "logoutAt": "2026-09-30T05:48:55.979Z",
    "durationMinutes": 19
  },
  {
    "id": "ses-1790745659943-lsiu07",
    "userId": "person-1789738156900",
    "date": "2026-09-30",
    "loginAt": "2026-09-30T05:20:59.943Z",
    "logoutAt": "2026-09-30T14:21:00.026Z",
    "durationMinutes": 540
  },
  {
    "id": "ses-1790745488083-825uj5",
    "userId": "usr_founder",
    "date": "2026-09-30",
    "loginAt": "2026-09-30T05:18:08.083Z",
    "logoutAt": "2026-10-01T03:52:44.508Z",
    "durationMinutes": 1355
  },
  {
    "id": "ses-1790743837873-87ln2j",
    "userId": "person-1789544851698",
    "date": "2026-09-30",
    "loginAt": "2026-09-30T04:50:37.873Z",
    "logoutAt": "2026-09-30T05:47:05.727Z",
    "durationMinutes": 56
  },
  {
    "id": "ses-1790743522466-s5pgwu",
    "userId": "person-1789544813478",
    "date": "2026-09-30",
    "loginAt": "2026-09-30T04:45:22.466Z",
    "logoutAt": "2026-09-30T13:46:00.016Z",
    "durationMinutes": 541
  },
  {
    "id": "ses-1790742683788-yv9sto",
    "userId": "person-1789737883615",
    "date": "2026-09-30",
    "loginAt": "2026-09-30T04:31:23.788Z",
    "logoutAt": "2026-09-30T05:52:00.003Z",
    "durationMinutes": 81
  },
  {
    "id": "ses-1790742640919-hfeyko",
    "userId": "person-1789738443448",
    "date": "2026-09-30",
    "loginAt": "2026-09-30T04:30:40.919Z",
    "logoutAt": "2026-09-30T05:47:14.780Z",
    "durationMinutes": 77
  },
  {
    "id": "ses-1790742291431-s3qbfh",
    "userId": "person-1789737923403",
    "date": "2026-09-30",
    "loginAt": "2026-09-30T04:24:51.431Z",
    "logoutAt": "2026-09-30T07:19:00.003Z",
    "durationMinutes": 174
  },
  {
    "id": "ses-1790740308420-3zh89v",
    "userId": "person-1789549176116",
    "date": "2026-09-30",
    "loginAt": "2026-09-30T03:51:48.420Z",
    "logoutAt": "2026-09-30T12:52:00.004Z",
    "durationMinutes": 540
  },
  {
    "id": "ses-1790683814539-1s8lrn",
    "userId": "person-1789544813478",
    "date": "2026-09-29",
    "loginAt": "2026-09-29T12:10:14.539Z",
    "logoutAt": "2026-09-30T04:45:19.942Z",
    "durationMinutes": 995
  },
  {
    "id": "ses-1790683439330-a09t45",
    "userId": "person-1789738443448",
    "date": "2026-09-29",
    "loginAt": "2026-09-29T12:03:59.330Z",
    "logoutAt": "2026-09-30T04:30:35.297Z",
    "durationMinutes": 987
  },
  {
    "id": "ses-1790682590170-3snu7i",
    "userId": "person-1789737883615",
    "date": "2026-09-29",
    "loginAt": "2026-09-29T11:49:50.170Z",
    "logoutAt": "2026-09-29T13:44:41.091Z",
    "durationMinutes": 115
  },
  {
    "id": "ses-1790681521318-p9qw6p",
    "userId": "person-1789737923403",
    "date": "2026-09-29",
    "loginAt": "2026-09-29T11:32:01.318Z",
    "logoutAt": "2026-09-29T13:28:27.942Z",
    "durationMinutes": 116
  },
  {
    "id": "ses-1790678942949-9x0u8j",
    "userId": "person-1789549176116",
    "date": "2026-09-29",
    "loginAt": "2026-09-29T10:49:02.949Z",
    "logoutAt": "2026-09-30T03:51:40.215Z",
    "durationMinutes": 1023
  },
  {
    "id": "ses-1790678598930-kqgdvi",
    "userId": "person-1789544916637",
    "date": "2026-09-29",
    "loginAt": "2026-09-29T10:43:18.930Z",
    "logoutAt": "2026-09-30T05:14:00.016Z",
    "durationMinutes": 1111
  },
  {
    "id": "ses-1790678511170-94c7mk",
    "userId": "person-1789737883615",
    "date": "2026-09-29",
    "loginAt": "2026-09-29T10:41:51.170Z",
    "logoutAt": "2026-09-29T11:42:00.002Z",
    "durationMinutes": 60
  },
  {
    "id": "ses-1790678268550-c6r1kj",
    "userId": "usr_founder",
    "date": "2026-09-29",
    "loginAt": "2026-09-29T10:37:48.550Z",
    "logoutAt": "2026-09-30T05:18:06.435Z",
    "durationMinutes": 1120
  },
  {
    "id": "ses-1790678260755-1hfcgw",
    "userId": "person-1789544851698",
    "date": "2026-09-29",
    "loginAt": "2026-09-29T10:37:40.755Z",
    "logoutAt": "2026-09-30T04:50:35.972Z",
    "durationMinutes": 1093
  },
  {
    "id": "ses-1790678245546-fv5pft",
    "userId": "person-1789544851698",
    "date": "2026-09-29",
    "loginAt": "2026-09-29T10:37:25.546Z",
    "logoutAt": "2026-09-29T10:37:40.755Z",
    "durationMinutes": 1
  },
  {
    "id": "ses-1790678231180-na4doe",
    "userId": "usr_founder",
    "date": "2026-09-29",
    "loginAt": "2026-09-29T10:37:11.180Z",
    "logoutAt": "2026-09-29T10:37:48.550Z",
    "durationMinutes": 1
  },
  {
    "id": "ses-1790678221165-3gcq7a",
    "userId": "person-1789737883615",
    "date": "2026-09-29",
    "loginAt": "2026-09-29T10:37:01.165Z",
    "logoutAt": "2026-09-29T10:41:51.170Z",
    "durationMinutes": 5
  },
  {
    "id": "ses-1790678220623-eh912s",
    "userId": "usr_founder",
    "date": "2026-09-29",
    "loginAt": "2026-09-29T10:37:00.623Z",
    "logoutAt": "2026-09-29T10:37:11.180Z",
    "durationMinutes": 1
  },
  {
    "id": "ses-1790676523545-btguhq",
    "userId": "person-1789544851698",
    "date": "2026-09-29",
    "loginAt": "2026-09-29T10:08:43.545Z",
    "logoutAt": "2026-09-29T10:37:25.546Z",
    "durationMinutes": 29
  },
  {
    "id": "ses-1790660835917-nych79",
    "userId": "person-1789737883615",
    "date": "2026-09-29",
    "loginAt": "2026-09-29T05:47:15.917Z",
    "logoutAt": "2026-09-29T10:37:01.165Z",
    "durationMinutes": 290
  },
  {
    "id": "ses-1790660828789-sqztwa",
    "userId": "person-1789738443448",
    "date": "2026-09-29",
    "loginAt": "2026-09-29T05:47:08.789Z",
    "logoutAt": "2026-09-29T12:03:59.330Z",
    "durationMinutes": 377
  },
  {
    "id": "ses-1790660826898-1ipnw0",
    "userId": "person-1789544851698",
    "date": "2026-09-29",
    "loginAt": "2026-09-29T05:47:06.898Z",
    "logoutAt": "2026-09-29T10:08:43.545Z",
    "durationMinutes": 262
  },
  {
    "id": "ses-1790660817854-azgk0i",
    "userId": "person-1789544813478",
    "date": "2026-09-29",
    "loginAt": "2026-09-29T05:46:57.854Z",
    "logoutAt": "2026-09-29T11:39:31.329Z",
    "durationMinutes": 353
  },
  {
    "id": "ses-1790657270453-wzuufg",
    "userId": "person-1789544916637",
    "date": "2026-09-29",
    "loginAt": "2026-09-29T04:47:50.453Z",
    "logoutAt": "2026-09-29T10:43:18.930Z",
    "durationMinutes": 355
  },
  {
    "id": "ses-1790657260532-sgrzxu",
    "userId": "person-1789738443448",
    "date": "2026-09-29",
    "loginAt": "2026-09-29T04:47:40.532Z",
    "logoutAt": "2026-09-29T05:38:29.140Z",
    "durationMinutes": 51
  },
  {
    "id": "ses-1790657164406-ls8dai",
    "userId": "person-1789737883615",
    "date": "2026-09-29",
    "loginAt": "2026-09-29T04:46:04.406Z",
    "logoutAt": "2026-09-29T05:42:00.005Z",
    "durationMinutes": 56
  },
  {
    "id": "ses-1790656795844-1vso2k",
    "userId": "person-1789737883615",
    "date": "2026-09-29",
    "loginAt": "2026-09-29T04:39:55.844Z",
    "logoutAt": "2026-09-29T04:42:25.339Z",
    "durationMinutes": 2
  },
  {
    "id": "ses-1790656747139-4zgb58",
    "userId": "person-1789544813478",
    "date": "2026-09-29",
    "loginAt": "2026-09-29T04:39:07.139Z",
    "logoutAt": "2026-09-29T05:38:39.636Z",
    "durationMinutes": 60
  },
  {
    "id": "ses-1790656708170-zk76k8",
    "userId": "person-1789737883615",
    "date": "2026-09-29",
    "loginAt": "2026-09-29T04:38:28.170Z",
    "logoutAt": "2026-09-29T04:39:55.844Z",
    "durationMinutes": 1
  },
  {
    "id": "ses-1790655943253-rbrcy4",
    "userId": "person-1789544851698",
    "date": "2026-09-29",
    "loginAt": "2026-09-29T04:25:43.253Z",
    "logoutAt": "2026-09-29T05:46:53.243Z",
    "durationMinutes": 81
  },
  {
    "id": "ses-1790655934700-yoymf7",
    "userId": "person-1789737923403",
    "date": "2026-09-29",
    "loginAt": "2026-09-29T04:25:34.700Z",
    "logoutAt": "2026-09-29T11:22:00.002Z",
    "durationMinutes": 416
  },
  {
    "id": "ses-1790653702575-h5sa9f",
    "userId": "person-1789549176116",
    "date": "2026-09-29",
    "loginAt": "2026-09-29T03:48:22.575Z",
    "logoutAt": "2026-09-29T10:49:02.949Z",
    "durationMinutes": 421
  },
  {
    "id": "ses-1790653691082-z2hqp6",
    "userId": "person-1789549176116",
    "date": "2026-09-29",
    "loginAt": "2026-09-29T03:48:11.082Z",
    "logoutAt": "2026-09-29T03:48:22.575Z",
    "durationMinutes": 1
  },
  {
    "id": "ses-1790594711199-dopc7r",
    "userId": "person-1789555841194",
    "date": "2026-09-28",
    "loginAt": "2026-09-28T11:25:11.199Z",
    "logoutAt": "2026-09-29T05:39:00.005Z",
    "durationMinutes": 1094
  },
  {
    "id": "ses-1790588841807-4y8b1p",
    "userId": "person-1789544813478",
    "date": "2026-09-28",
    "loginAt": "2026-09-28T09:47:21.807Z",
    "logoutAt": "2026-09-28T14:28:08.022Z",
    "durationMinutes": 281
  },
  {
    "id": "ses-1790581808705-j92646",
    "userId": "person-1789737883615",
    "date": "2026-09-28",
    "loginAt": "2026-09-28T07:50:08.705Z",
    "logoutAt": "2026-09-28T13:30:38.772Z",
    "durationMinutes": 341
  },
  {
    "id": "ses-1790580932989-dr4mff",
    "userId": "person-1789737883615",
    "date": "2026-09-28",
    "loginAt": "2026-09-28T07:35:32.989Z",
    "logoutAt": "2026-09-28T07:41:06.864Z",
    "durationMinutes": 6
  },
  {
    "id": "ses-1790578144594-m2bed8",
    "userId": "person-1789738443448",
    "date": "2026-09-28",
    "loginAt": "2026-09-28T06:49:04.594Z",
    "logoutAt": "2026-09-29T04:47:34.744Z",
    "durationMinutes": 1319
  },
  {
    "id": "ses-1790578087521-f62at4",
    "userId": "person-1789738156900",
    "date": "2026-09-28",
    "loginAt": "2026-09-28T06:48:07.521Z",
    "logoutAt": "2026-09-30T05:14:00.010Z",
    "durationMinutes": 2786
  },
  {
    "id": "ses-1790578016731-ud2b5c",
    "userId": "person-1789544813478",
    "date": "2026-09-28",
    "loginAt": "2026-09-28T06:46:56.731Z",
    "logoutAt": "2026-09-28T09:02:33.007Z",
    "durationMinutes": 136
  },
  {
    "id": "ses-1790577341349-hgan4y",
    "userId": "person-1789737923403",
    "date": "2026-09-28",
    "loginAt": "2026-09-28T06:35:41.349Z",
    "logoutAt": "2026-09-28T13:41:10.126Z",
    "durationMinutes": 425
  },
  {
    "id": "ses-1790577337469-lhrd8d",
    "userId": "person-1789555841194",
    "date": "2026-09-28",
    "loginAt": "2026-09-28T06:35:37.469Z",
    "logoutAt": "2026-09-28T06:35:37.469Z",
    "durationMinutes": 1
  },
  {
    "id": "ses-1790577334754-c8kg4q",
    "userId": "person-1789544851698",
    "date": "2026-09-28",
    "loginAt": "2026-09-28T06:35:34.754Z",
    "logoutAt": "2026-09-29T04:25:41.690Z",
    "durationMinutes": 1310
  },
  {
    "id": "ses-1790577315037-sbe1uo",
    "userId": "person-1789737883615",
    "date": "2026-09-28",
    "loginAt": "2026-09-28T06:35:15.037Z",
    "logoutAt": "2026-09-28T06:55:07.243Z",
    "durationMinutes": 20
  },
  {
    "id": "ses-1790572270992-iapduc",
    "userId": "person-1789544813478",
    "date": "2026-09-28",
    "loginAt": "2026-09-28T05:11:10.992Z",
    "logoutAt": "2026-09-28T05:54:32.472Z",
    "durationMinutes": 43
  },
  {
    "id": "ses-1790571934821-w2w1h0",
    "userId": "person-1789737883615",
    "date": "2026-09-28",
    "loginAt": "2026-09-28T05:05:34.821Z",
    "logoutAt": "2026-09-28T05:35:06.948Z",
    "durationMinutes": 30
  },
  {
    "id": "ses-1790571443117-baddpx",
    "userId": "person-1789544851698",
    "date": "2026-09-28",
    "loginAt": "2026-09-28T04:57:23.117Z",
    "logoutAt": "2026-09-28T05:55:02.710Z",
    "durationMinutes": 58
  },
  {
    "id": "ses-1790571435971-ymkjj8",
    "userId": "usr_founder",
    "date": "2026-09-28",
    "loginAt": "2026-09-28T04:57:15.971Z",
    "logoutAt": "2026-09-28T05:55:02.741Z",
    "durationMinutes": 58
  },
  {
    "id": "ses-1790571429797-7jacza",
    "userId": "usr_founder",
    "date": "2026-09-28",
    "loginAt": "2026-09-28T04:57:09.797Z",
    "logoutAt": "2026-09-28T04:57:13.887Z",
    "durationMinutes": 1
  },
  {
    "id": "ses-1790571311439-5btyda",
    "userId": "person-1789737923403",
    "date": "2026-09-28",
    "loginAt": "2026-09-28T04:55:11.439Z",
    "logoutAt": "2026-09-28T05:06:36.669Z",
    "durationMinutes": 11
  },
  {
    "id": "ses-1790570347287-309z3s",
    "userId": "person-1789555841194",
    "date": "2026-09-28",
    "loginAt": "2026-09-28T04:39:07.287Z",
    "logoutAt": "2026-09-28T04:39:07.287Z",
    "durationMinutes": 1
  },
  {
    "id": "ses-1790570222378-6zxq75",
    "userId": "person-1789544916637",
    "date": "2026-09-28",
    "loginAt": "2026-09-28T04:37:02.378Z",
    "logoutAt": "2026-09-28T05:54:15.988Z",
    "durationMinutes": 77
  },
  {
    "id": "ses-1790570115900-vi2ws0",
    "userId": "person-1789544851698",
    "date": "2026-09-28",
    "loginAt": "2026-09-28T04:35:15.900Z",
    "logoutAt": "2026-09-28T04:51:39.906Z",
    "durationMinutes": 16
  },
  {
    "id": "ses-1790568726192-o2lhr0",
    "userId": "person-1789549176116",
    "date": "2026-09-28",
    "loginAt": "2026-09-28T04:12:06.192Z",
    "logoutAt": "2026-09-29T03:48:11.082Z",
    "durationMinutes": 1416
  },
  {
    "id": "ses-1790568237726-lrn1uz",
    "userId": "person-1789549176116",
    "date": "2026-09-28",
    "loginAt": "2026-09-28T04:03:57.726Z",
    "logoutAt": "2026-09-28T04:03:57.726Z",
    "durationMinutes": 1
  },
  {
    "id": "ses-1790429419836-c6ssph",
    "userId": "person-1789737883615",
    "date": "2026-09-26",
    "loginAt": "2026-09-26T13:30:19.836Z",
    "logoutAt": "2026-09-26T13:30:32.222Z",
    "durationMinutes": 1
  },
  {
    "id": "ses-1790426730052-v21j7q",
    "userId": "person-1789737883615",
    "date": "2026-09-26",
    "loginAt": "2026-09-26T12:45:30.052Z",
    "logoutAt": "2026-09-26T12:50:09.979Z",
    "durationMinutes": 5
  },
  {
    "id": "ses-1790426151449-xfgf13",
    "userId": "person-1789737883615",
    "date": "2026-09-26",
    "loginAt": "2026-09-26T12:35:51.449Z",
    "logoutAt": "2026-09-26T12:39:12.336Z",
    "durationMinutes": 3
  },
  {
    "id": "ses-1790423287574-qksafm",
    "userId": "person-1789737883615",
    "date": "2026-09-26",
    "loginAt": "2026-09-26T11:48:07.574Z",
    "logoutAt": "2026-09-26T12:21:09.481Z",
    "durationMinutes": 33
  },
  {
    "id": "ses-1790417068131-g6jskk",
    "userId": "person-1789738156900",
    "date": "2026-09-26",
    "loginAt": "2026-09-26T10:04:28.131Z",
    "logoutAt": "2026-09-26T13:34:41.602Z",
    "durationMinutes": 210
  },
  {
    "id": "ses-1790416851531-ld81gm",
    "userId": "person-1789544813478",
    "date": "2026-09-26",
    "loginAt": "2026-09-26T10:00:51.531Z",
    "logoutAt": "2026-09-26T13:06:10.977Z",
    "durationMinutes": 185
  },
  {
    "id": "ses-1790414899347-ocri2s",
    "userId": "person-1789737923403",
    "date": "2026-09-26",
    "loginAt": "2026-09-26T09:28:19.347Z",
    "logoutAt": "2026-09-26T10:46:47.117Z",
    "durationMinutes": 78
  },
  {
    "id": "ses-1790414825040-donr6f",
    "userId": "person-1789737883615",
    "date": "2026-09-26",
    "loginAt": "2026-09-26T09:27:05.040Z",
    "logoutAt": "2026-09-26T09:48:10.335Z",
    "durationMinutes": 21
  },
  {
    "id": "ses-1790413566370-vj41lk",
    "userId": "person-1789737883615",
    "date": "2026-09-26",
    "loginAt": "2026-09-26T09:06:06.370Z",
    "logoutAt": "2026-09-26T09:11:10.312Z",
    "durationMinutes": 5
  },
  {
    "id": "ses-1790412509535-6ro1d9",
    "userId": "person-1789737883615",
    "date": "2026-09-26",
    "loginAt": "2026-09-26T08:48:29.535Z",
    "logoutAt": "2026-09-26T08:54:09.757Z",
    "durationMinutes": 6
  },
  {
    "id": "ses-1790411841466-5erql2",
    "userId": "person-1789737883615",
    "date": "2026-09-26",
    "loginAt": "2026-09-26T08:37:21.466Z",
    "logoutAt": "2026-09-26T08:43:09.935Z",
    "durationMinutes": 6
  },
  {
    "id": "ses-1790411003495-m2qgyr",
    "userId": "person-1789737883615",
    "date": "2026-09-26",
    "loginAt": "2026-09-26T08:23:23.495Z",
    "logoutAt": "2026-09-26T08:28:09.831Z",
    "durationMinutes": 5
  },
  {
    "id": "ses-1790407097429-tb9bxx",
    "userId": "person-1789737883615",
    "date": "2026-09-26",
    "loginAt": "2026-09-26T07:18:17.429Z",
    "logoutAt": "2026-09-26T07:34:10.438Z",
    "durationMinutes": 16
  },
  {
    "id": "ses-1790406214176-3kza7b",
    "userId": "person-1789544851698",
    "date": "2026-09-26",
    "loginAt": "2026-09-26T07:03:34.176Z",
    "logoutAt": "2026-09-26T07:36:09.786Z",
    "durationMinutes": 33
  },
  {
    "id": "ses-1790404981388-pwf2dy",
    "userId": "person-1789737883615",
    "date": "2026-09-26",
    "loginAt": "2026-09-26T06:43:01.388Z",
    "logoutAt": "2026-09-26T07:00:09.970Z",
    "durationMinutes": 17
  },
  {
    "id": "ses-1790403955761-wi62yx",
    "userId": "person-1789737883615",
    "date": "2026-09-26",
    "loginAt": "2026-09-26T06:25:55.761Z",
    "logoutAt": "2026-09-26T06:34:16.962Z",
    "durationMinutes": 8
  },
  {
    "id": "ses-1790401993135-or5mal",
    "userId": "person-1789737883615",
    "date": "2026-09-26",
    "loginAt": "2026-09-26T05:53:13.135Z",
    "logoutAt": "2026-09-26T06:21:10.090Z",
    "durationMinutes": 28
  },
  {
    "id": "ses-1790400307106-sf8hgs",
    "userId": "person-1789737883615",
    "date": "2026-09-26",
    "loginAt": "2026-09-26T05:25:07.106Z",
    "logoutAt": "2026-09-26T05:30:10.151Z",
    "durationMinutes": 5
  },
  {
    "id": "ses-1790400284978-i6ibcf",
    "userId": "person-1789738443448",
    "date": "2026-09-26",
    "loginAt": "2026-09-26T05:24:44.978Z",
    "logoutAt": "2026-09-26T05:39:11.085Z",
    "durationMinutes": 14
  },
  {
    "id": "ses-1790399254964-0vv619",
    "userId": "person-1789737883615",
    "date": "2026-09-26",
    "loginAt": "2026-09-26T05:07:34.964Z",
    "logoutAt": "2026-09-26T05:11:45.533Z",
    "durationMinutes": 4
  },
  {
    "id": "ses-1790399221213-u79sn1",
    "userId": "person-1789555841194",
    "date": "2026-09-26",
    "loginAt": "2026-09-26T05:07:01.213Z",
    "logoutAt": "2026-09-26T05:07:52.112Z",
    "durationMinutes": 1
  },
  {
    "id": "ses-1790397531594-n3ttkb",
    "userId": "usr_founder",
    "date": "2026-09-26",
    "loginAt": "2026-09-26T04:38:51.594Z",
    "logoutAt": "2026-09-26T05:56:26.636Z",
    "durationMinutes": 78
  },
  {
    "id": "ses-1790397526369-s3mchn",
    "userId": "person-1789544851698",
    "date": "2026-09-26",
    "loginAt": "2026-09-26T04:38:46.369Z",
    "logoutAt": "2026-09-26T05:56:26.621Z",
    "durationMinutes": 78
  },
  {
    "id": "ses-1790397121383-4hyekw",
    "userId": "person-1789737923403",
    "date": "2026-09-26",
    "loginAt": "2026-09-26T04:32:01.383Z",
    "logoutAt": "2026-09-26T05:50:47.332Z",
    "durationMinutes": 79
  },
  {
    "id": "ses-1790396907793-6xn6yz",
    "userId": "person-1789737883615",
    "date": "2026-09-26",
    "loginAt": "2026-09-26T04:28:27.793Z",
    "logoutAt": "2026-09-26T04:42:10.198Z",
    "durationMinutes": 14
  },
  {
    "id": "ses-1790396834500-pwzhnj",
    "userId": "person-1789544813478",
    "date": "2026-09-26",
    "loginAt": "2026-09-26T04:27:14.500Z",
    "logoutAt": "2026-09-26T08:50:35.830Z",
    "durationMinutes": 263
  },
  {
    "id": "ses-1790394094883-jyfezj",
    "userId": "person-1789549176116",
    "date": "2026-09-26",
    "loginAt": "2026-09-26T03:41:34.883Z",
    "logoutAt": "2026-09-26T13:30:49.335Z",
    "durationMinutes": 589
  },
  {
    "id": "ses-1790343027143-nzbfk0",
    "userId": "person-1789544813478",
    "date": "2026-09-25",
    "loginAt": "2026-09-25T13:30:27.143Z",
    "logoutAt": "2026-09-25T13:30:52.684Z",
    "durationMinutes": 1
  },
  {
    "id": "ses-1790328589566-jx0o6o",
    "userId": "person-1789544813478",
    "date": "2026-09-25",
    "loginAt": "2026-09-25T09:29:49.566Z",
    "logoutAt": "2026-09-25T11:44:41.178Z",
    "durationMinutes": 135
  },
  {
    "id": "ses-1790318568396-g1ate1",
    "userId": "person-1789737883615",
    "date": "2026-09-25",
    "loginAt": "2026-09-25T06:42:48.396Z",
    "logoutAt": "2026-09-25T06:43:28.581Z",
    "durationMinutes": 1
  },
  {
    "id": "ses-1790316889087-hhm2r4",
    "userId": "person-1789737883615",
    "date": "2026-09-25",
    "loginAt": "2026-09-25T06:14:49.087Z",
    "logoutAt": "2026-09-25T06:32:10.834Z",
    "durationMinutes": 17
  },
  {
    "id": "ses-1790314770606-zwuo8q",
    "userId": "person-1789544916637",
    "date": "2026-09-25",
    "loginAt": "2026-09-25T05:39:30.606Z",
    "logoutAt": "2026-09-25T07:24:41.577Z",
    "durationMinutes": 105
  },
  {
    "id": "ses-1790313456391-0q6c3c",
    "userId": "person-1789737923403",
    "date": "2026-09-25",
    "loginAt": "2026-09-25T05:17:36.391Z",
    "logoutAt": "2026-09-25T05:26:12.635Z",
    "durationMinutes": 9
  },
  {
    "id": "ses-1790313374426-wn2j99",
    "userId": "person-1789737883615",
    "date": "2026-09-25",
    "loginAt": "2026-09-25T05:16:14.426Z",
    "logoutAt": "2026-09-25T05:19:11.865Z",
    "durationMinutes": 3
  },
  {
    "id": "ses-1790312302835-ozf57e",
    "userId": "person-1789737883615",
    "date": "2026-09-25",
    "loginAt": "2026-09-25T04:58:22.835Z",
    "logoutAt": "2026-09-25T05:08:12.424Z",
    "durationMinutes": 10
  },
  {
    "id": "ses-1790311216435-42n35l",
    "userId": "usr_founder",
    "date": "2026-09-25",
    "loginAt": "2026-09-25T04:40:16.435Z",
    "logoutAt": "2026-09-25T08:37:26.544Z",
    "durationMinutes": 237
  },
  {
    "id": "ses-1790311211582-7kr93v",
    "userId": "person-1789544851698",
    "date": "2026-09-25",
    "loginAt": "2026-09-25T04:40:11.582Z",
    "logoutAt": "2026-09-25T08:14:26.444Z",
    "durationMinutes": 214
  },
  {
    "id": "ses-1790311107196-5ltwkw",
    "userId": "person-1789544813478",
    "date": "2026-09-25",
    "loginAt": "2026-09-25T04:38:27.196Z",
    "logoutAt": "2026-09-25T09:29:41.175Z",
    "durationMinutes": 291
  },
  {
    "id": "ses-1790311005803-g21262",
    "userId": "person-1789738443448",
    "date": "2026-09-25",
    "loginAt": "2026-09-25T04:36:45.803Z",
    "logoutAt": "2026-09-25T04:53:13.254Z",
    "durationMinutes": 16
  },
  {
    "id": "ses-1790310905833-4jte4i",
    "userId": "person-1789544916637",
    "date": "2026-09-25",
    "loginAt": "2026-09-25T04:35:05.833Z",
    "logoutAt": "2026-09-25T04:54:44.682Z",
    "durationMinutes": 20
  },
  {
    "id": "ses-1790310316424-uk6ojp",
    "userId": "person-1789549176116",
    "date": "2026-09-25",
    "loginAt": "2026-09-25T04:25:16.424Z",
    "logoutAt": "2026-09-25T11:54:04.800Z",
    "durationMinutes": 449
  },
  {
    "id": "ses-1790256407581-ykoybs",
    "userId": "person-1789737883615",
    "date": "2026-09-24",
    "loginAt": "2026-09-24T13:26:47.581Z",
    "logoutAt": "2026-09-24T13:31:22.196Z",
    "durationMinutes": 5
  },
  {
    "id": "ses-1790252463229-qxgopn",
    "userId": "person-1789737883615",
    "date": "2026-09-24",
    "loginAt": "2026-09-24T12:21:03.229Z",
    "logoutAt": "2026-09-24T12:43:13.831Z",
    "durationMinutes": 22
  },
  {
    "id": "ses-1790246682575-reeisz",
    "userId": "person-1790246663190",
    "date": "2026-09-24",
    "loginAt": "2026-09-24T10:44:42.575Z",
    "logoutAt": "2026-09-24T10:47:56.528Z",
    "durationMinutes": 3
  },
  {
    "id": "ses-1790245504829-e4ii0q",
    "userId": "person-1789737883615",
    "date": "2026-09-24",
    "loginAt": "2026-09-24T10:25:04.829Z",
    "logoutAt": "2026-09-24T10:34:13.618Z",
    "durationMinutes": 9
  },
  {
    "id": "ses-1790244015387-kcghgz",
    "userId": "person-1789544813478",
    "date": "2026-09-24",
    "loginAt": "2026-09-24T10:00:15.387Z",
    "logoutAt": "2026-09-24T13:47:49.224Z",
    "durationMinutes": 228
  },
  {
    "id": "ses-1790243365393-d58fm5",
    "userId": "person-1789549176116",
    "date": "2026-09-24",
    "loginAt": "2026-09-24T09:49:25.393Z",
    "logoutAt": "2026-09-24T13:40:06.306Z",
    "durationMinutes": 231
  },
  {
    "id": "ses-1790242870988-3erirv",
    "userId": "person-1789737883615",
    "date": "2026-09-24",
    "loginAt": "2026-09-24T09:41:10.988Z",
    "logoutAt": "2026-09-24T09:46:13.596Z",
    "durationMinutes": 5
  },
  {
    "id": "ses-1790239281732-2mf69a",
    "userId": "person-1789737883615",
    "date": "2026-09-24",
    "loginAt": "2026-09-24T08:41:21.732Z",
    "logoutAt": "2026-09-24T08:45:57.398Z",
    "durationMinutes": 5
  },
  {
    "id": "ses-1790236995101-66gvje",
    "userId": "person-1789737883615",
    "date": "2026-09-24",
    "loginAt": "2026-09-24T08:03:15.101Z",
    "logoutAt": "2026-09-24T08:35:14.307Z",
    "durationMinutes": 32
  },
  {
    "id": "ses-1790235056531-fqp25z",
    "userId": "person-1789737883615",
    "date": "2026-09-24",
    "loginAt": "2026-09-24T07:30:56.531Z",
    "logoutAt": "2026-09-24T07:35:07.801Z",
    "durationMinutes": 4
  },
  {
    "id": "ses-1790234354853-22wdgt",
    "userId": "person-1789737883615",
    "date": "2026-09-24",
    "loginAt": "2026-09-24T07:19:14.853Z",
    "logoutAt": "2026-09-24T07:24:13.779Z",
    "durationMinutes": 5
  },
  {
    "id": "ses-1790232759150-yikfqn",
    "userId": "person-1789737883615",
    "date": "2026-09-24",
    "loginAt": "2026-09-24T06:52:39.150Z",
    "logoutAt": "2026-09-24T07:12:13.807Z",
    "durationMinutes": 20
  },
  {
    "id": "ses-1790230980236-9d98bd",
    "userId": "person-1789544851698",
    "date": "2026-09-24",
    "loginAt": "2026-09-24T06:23:00.236Z",
    "logoutAt": "2026-09-24T08:23:28.683Z",
    "durationMinutes": 120
  },
  {
    "id": "ses-1790230920559-cna0nl",
    "userId": "person-1789737883615",
    "date": "2026-09-24",
    "loginAt": "2026-09-24T06:22:00.559Z",
    "logoutAt": "2026-09-24T06:28:14.092Z",
    "durationMinutes": 6
  },
  {
    "id": "ses-1790229896097-3xzo6b",
    "userId": "person-1789544813478",
    "date": "2026-09-24",
    "loginAt": "2026-09-24T06:04:56.097Z",
    "logoutAt": "2026-09-24T08:47:01.875Z",
    "durationMinutes": 162
  },
  {
    "id": "ses-1790229748593-uf05oj",
    "userId": "person-1789737883615",
    "date": "2026-09-24",
    "loginAt": "2026-09-24T06:02:28.593Z",
    "logoutAt": "2026-09-24T06:06:13.908Z",
    "durationMinutes": 4
  },
  {
    "id": "ses-1790226839131-mkjguc",
    "userId": "person-1789737883615",
    "date": "2026-09-24",
    "loginAt": "2026-09-24T05:13:59.131Z",
    "logoutAt": "2026-09-24T05:29:49.756Z",
    "durationMinutes": 16
  },
  {
    "id": "ses-1790226811802-6gdra7",
    "userId": "person-1789544851698",
    "date": "2026-09-24",
    "loginAt": "2026-09-24T05:13:31.802Z",
    "logoutAt": "2026-09-24T05:38:28.618Z",
    "durationMinutes": 25
  },
  {
    "id": "ses-1790226180636-7152rw",
    "userId": "person-1789737883615",
    "date": "2026-09-24",
    "loginAt": "2026-09-24T05:03:00.636Z",
    "logoutAt": "2026-09-24T05:08:14.057Z",
    "durationMinutes": 5
  },
  {
    "id": "ses-1790225132031-bxngea",
    "userId": "person-1789737883615",
    "date": "2026-09-24",
    "loginAt": "2026-09-24T04:45:32.031Z",
    "logoutAt": "2026-09-24T04:55:14.272Z",
    "durationMinutes": 10
  },
  {
    "id": "ses-1790224762608-ais453",
    "userId": "person-1789544813478",
    "date": "2026-09-24",
    "loginAt": "2026-09-24T04:39:22.608Z",
    "logoutAt": "2026-09-24T05:42:43.861Z",
    "durationMinutes": 63
  },
  {
    "id": "ses-1790224748558-zpbwvy",
    "userId": "usr_founder",
    "date": "2026-09-24",
    "loginAt": "2026-09-24T04:39:08.558Z",
    "logoutAt": "2026-09-24T05:38:28.626Z",
    "durationMinutes": 59
  },
  {
    "id": "ses-1790224734557-ghwnc5",
    "userId": "person-1789544851698",
    "date": "2026-09-24",
    "loginAt": "2026-09-24T04:38:54.557Z",
    "logoutAt": "2026-09-24T05:05:32.326Z",
    "durationMinutes": 27
  },
  {
    "id": "ses-1790224304634-ad21wi",
    "userId": "person-1789738443448",
    "date": "2026-09-24",
    "loginAt": "2026-09-24T04:31:44.634Z",
    "logoutAt": "2026-09-24T04:46:10.155Z",
    "durationMinutes": 14
  },
  {
    "id": "ses-1790222685170-5u1nyf",
    "userId": "person-1789549176116",
    "date": "2026-09-24",
    "loginAt": "2026-09-24T04:04:45.170Z",
    "logoutAt": "2026-09-24T08:58:33.231Z",
    "durationMinutes": 294
  },
  {
    "id": "ses-1790165264445-w4w8q4",
    "userId": "person-1789737883615",
    "date": "2026-09-23",
    "loginAt": "2026-09-23T12:07:44.445Z",
    "logoutAt": "2026-09-23T12:42:06.795Z",
    "durationMinutes": 34
  },
  {
    "id": "ses-1790163980758-093vz3",
    "userId": "person-1789737883615",
    "date": "2026-09-23",
    "loginAt": "2026-09-23T11:46:20.758Z",
    "logoutAt": "2026-09-23T12:03:06.394Z",
    "durationMinutes": 17
  },
  {
    "id": "ses-1790160793987-h5pto0",
    "userId": "person-1789737883615",
    "date": "2026-09-23",
    "loginAt": "2026-09-23T10:53:13.987Z",
    "logoutAt": "2026-09-23T11:24:05.407Z",
    "durationMinutes": 31
  },
  {
    "id": "ses-1790158811570-48vl58",
    "userId": "person-1789737883615",
    "date": "2026-09-23",
    "loginAt": "2026-09-23T10:20:11.570Z",
    "logoutAt": "2026-09-23T10:39:06.550Z",
    "durationMinutes": 19
  },
  {
    "id": "ses-1790157831936-px295u",
    "userId": "person-1789737883615",
    "date": "2026-09-23",
    "loginAt": "2026-09-23T10:03:51.936Z",
    "logoutAt": "2026-09-23T10:09:42.530Z",
    "durationMinutes": 6
  },
  {
    "id": "ses-1790153383682-nps3kj",
    "userId": "person-1789737883615",
    "date": "2026-09-23",
    "loginAt": "2026-09-23T08:49:43.682Z",
    "logoutAt": "2026-09-23T08:54:06.712Z",
    "durationMinutes": 4
  },
  {
    "id": "ses-1790152796545-t7wx57",
    "userId": "person-1789544851698",
    "date": "2026-09-23",
    "loginAt": "2026-09-23T08:39:56.545Z",
    "logoutAt": "2026-09-23T11:00:30.548Z",
    "durationMinutes": 141
  },
  {
    "id": "ses-1790152731980-8q9ps9",
    "userId": "person-1789737883615",
    "date": "2026-09-23",
    "loginAt": "2026-09-23T08:38:51.980Z",
    "logoutAt": "2026-09-23T08:44:42.512Z",
    "durationMinutes": 6
  },
  {
    "id": "ses-1790152407967-gskd6y",
    "userId": "person-1789549176116",
    "date": "2026-09-23",
    "loginAt": "2026-09-23T08:33:27.967Z",
    "logoutAt": "2026-09-23T13:28:08.326Z",
    "durationMinutes": 295
  },
  {
    "id": "ses-1790149174420-q4c2xu",
    "userId": "person-1789544813478",
    "date": "2026-09-23",
    "loginAt": "2026-09-23T07:39:34.420Z",
    "logoutAt": "2026-09-23T13:42:30.583Z",
    "durationMinutes": 363
  },
  {
    "id": "ses-1790147109215-o6eba3",
    "userId": "person-1789549176116",
    "date": "2026-09-23",
    "loginAt": "2026-09-23T07:05:09.215Z",
    "logoutAt": "2026-09-23T07:27:08.042Z",
    "durationMinutes": 22
  },
  {
    "id": "ses-1790146943162-17byfn",
    "userId": "person-1789544916637",
    "date": "2026-09-23",
    "loginAt": "2026-09-23T07:02:23.162Z",
    "logoutAt": "2026-09-23T08:17:47.730Z",
    "durationMinutes": 75
  },
  {
    "id": "ses-1790146907539-711zcp",
    "userId": "person-1789544851698",
    "date": "2026-09-23",
    "loginAt": "2026-09-23T07:01:47.539Z",
    "logoutAt": "2026-09-23T07:57:30.133Z",
    "durationMinutes": 56
  },
  {
    "id": "ses-1790146883528-djxmpu",
    "userId": "usr_founder",
    "date": "2026-09-23",
    "loginAt": "2026-09-23T07:01:23.528Z",
    "logoutAt": "2026-09-23T07:57:14.135Z",
    "durationMinutes": 56
  },
  {
    "id": "ses-1790145805042-t7izjz",
    "userId": "usr_founder",
    "date": "2026-09-23",
    "loginAt": "2026-09-23T06:43:25.042Z",
    "logoutAt": "2026-09-23T06:56:58.607Z",
    "durationMinutes": 14
  },
  {
    "id": "ses-1790145764959-elvqmg",
    "userId": "person-1789544851698",
    "date": "2026-09-23",
    "loginAt": "2026-09-23T06:42:44.959Z",
    "logoutAt": "2026-09-23T06:43:16.402Z",
    "durationMinutes": 1
  },
  {
    "id": "ses-1790145642649-hosqeb",
    "userId": "usr_founder",
    "date": "2026-09-23",
    "loginAt": "2026-09-23T06:40:42.649Z",
    "logoutAt": "2026-09-23T06:41:00.635Z",
    "durationMinutes": 1
  },
  {
    "id": "ses-1790144416140-i9s3fw",
    "userId": "person-1789555841194",
    "date": "2026-09-23",
    "loginAt": "2026-09-23T06:20:16.140Z",
    "logoutAt": "2026-09-23T06:21:07.454Z",
    "durationMinutes": 1
  },
  {
    "id": "ses-1790144382249-29gc4w",
    "userId": "person-1789737883615",
    "date": "2026-09-23",
    "loginAt": "2026-09-23T06:19:42.249Z",
    "logoutAt": "2026-09-23T06:24:30.982Z",
    "durationMinutes": 5
  },
  {
    "id": "ses-1790143584466-aeh15i",
    "userId": "person-1789544813478",
    "date": "2026-09-23",
    "loginAt": "2026-09-23T06:06:24.466Z",
    "logoutAt": "2026-09-23T07:39:32.239Z",
    "durationMinutes": 93
  },
  {
    "id": "ses-1790140509674-6tma6o",
    "userId": "person-1789737923403",
    "date": "2026-09-23",
    "loginAt": "2026-09-23T05:15:09.674Z",
    "logoutAt": "2026-09-23T05:21:09.354Z",
    "durationMinutes": 6
  },
  {
    "id": "ses-1790139254655-o1detq",
    "userId": "person-1789555841194",
    "date": "2026-09-23",
    "loginAt": "2026-09-23T04:54:14.655Z",
    "logoutAt": "2026-09-23T04:54:40.401Z",
    "durationMinutes": 1
  },
  {
    "id": "ses-1790139181239-pmrvc3",
    "userId": "person-1789738156900",
    "date": "2026-09-23",
    "loginAt": "2026-09-23T04:53:01.239Z",
    "logoutAt": "2026-09-23T07:42:07.567Z",
    "durationMinutes": 169
  },
  {
    "id": "ses-1790138806753-ys1vxj",
    "userId": "person-1789544851698",
    "date": "2026-09-23",
    "loginAt": "2026-09-23T04:46:46.753Z",
    "logoutAt": "2026-09-23T05:39:30.061Z",
    "durationMinutes": 53
  },
  {
    "id": "ses-1790138774331-ncxt3n",
    "userId": "usr_founder",
    "date": "2026-09-23",
    "loginAt": "2026-09-23T04:46:14.331Z",
    "logoutAt": "2026-09-23T05:39:35.502Z",
    "durationMinutes": 53
  },
  {
    "id": "ses-1790138476829-dncw7w",
    "userId": "person-1789737883615",
    "date": "2026-09-23",
    "loginAt": "2026-09-23T04:41:16.829Z",
    "logoutAt": "2026-09-23T06:03:56.949Z",
    "durationMinutes": 83
  },
  {
    "id": "ses-1790138391344-0cb8g0",
    "userId": "person-1789544813478",
    "date": "2026-09-23",
    "loginAt": "2026-09-23T04:39:51.344Z",
    "logoutAt": "2026-09-23T05:29:08.910Z",
    "durationMinutes": 49
  },
  {
    "id": "ses-1790134889056-fowprx",
    "userId": "person-1789549176116",
    "date": "2026-09-23",
    "loginAt": "2026-09-23T03:41:29.056Z",
    "logoutAt": "2026-09-23T07:04:59.229Z",
    "durationMinutes": 204
  },
  {
    "id": "ses-1790084317526-gtwaxo",
    "userId": "person-1789544813478",
    "date": "2026-09-22",
    "loginAt": "2026-09-22T13:38:37.526Z",
    "logoutAt": "2026-09-22T14:01:08.320Z",
    "durationMinutes": 23
  },
  {
    "id": "ses-1790083058981-dkmaca",
    "userId": "usr_founder",
    "date": "2026-09-22",
    "loginAt": "2026-09-22T13:17:38.981Z",
    "logoutAt": "2026-09-22T13:39:04.484Z",
    "durationMinutes": 21
  },
  {
    "id": "ses-1790074089827-15hhlk",
    "userId": "usr_founder",
    "date": "2026-09-22",
    "loginAt": "2026-09-22T10:48:09.827Z",
    "logoutAt": "2026-09-22T11:47:30.252Z",
    "durationMinutes": 59
  },
  {
    "id": "ses-1790071666105-46rb2u",
    "userId": "person-1789555841194",
    "date": "2026-09-22",
    "loginAt": "2026-09-22T10:07:46.105Z",
    "logoutAt": "2026-09-22T10:11:05.302Z",
    "durationMinutes": 3
  },
  {
    "id": "ses-1790060984471-x8r7nw",
    "userId": "person-1789738156900",
    "date": "2026-09-22",
    "loginAt": "2026-09-22T07:09:44.471Z",
    "logoutAt": "2026-09-22T08:38:42.680Z",
    "durationMinutes": 89
  },
  {
    "id": "ses-1790060267092-uemgsv",
    "userId": "person-1789738156900",
    "date": "2026-09-22",
    "loginAt": "2026-09-22T06:57:47.092Z",
    "logoutAt": "2026-09-22T07:09:14.716Z",
    "durationMinutes": 11
  },
  {
    "id": "ses-1790060204367-vrze7h",
    "userId": "person-1789544851698",
    "date": "2026-09-22",
    "loginAt": "2026-09-22T06:56:44.367Z",
    "logoutAt": "2026-09-22T08:49:32.325Z",
    "durationMinutes": 113
  },
  {
    "id": "ses-1790058902071-guakbp",
    "userId": "person-1789544813478",
    "date": "2026-09-22",
    "loginAt": "2026-09-22T06:35:02.071Z",
    "logoutAt": "2026-09-22T08:21:44.177Z",
    "durationMinutes": 107
  },
  {
    "id": "ses-1790054522643-6qp6ue",
    "userId": "person-1789544916637",
    "date": "2026-09-22",
    "loginAt": "2026-09-22T05:22:02.643Z",
    "logoutAt": "2026-09-22T06:35:05.358Z",
    "durationMinutes": 73
  },
  {
    "id": "ses-1790052785232-x07us1",
    "userId": "person-1789544851698",
    "date": "2026-09-22",
    "loginAt": "2026-09-22T04:53:05.232Z",
    "logoutAt": "2026-09-22T05:03:56.626Z",
    "durationMinutes": 11
  },
  {
    "id": "ses-1790052718756-dfxusl",
    "userId": "person-1789737883615",
    "date": "2026-09-22",
    "loginAt": "2026-09-22T04:51:58.756Z",
    "logoutAt": "2026-09-22T13:43:04.580Z",
    "durationMinutes": 531
  },
  {
    "id": "ses-1790052124158-t1v8rd",
    "userId": "person-1789738443448",
    "date": "2026-09-22",
    "loginAt": "2026-09-22T04:42:04.158Z",
    "logoutAt": "2026-09-22T04:47:42.766Z",
    "durationMinutes": 6
  },
  {
    "id": "ses-1790051719295-xqag0a",
    "userId": "person-1789738156900",
    "date": "2026-09-22",
    "loginAt": "2026-09-22T04:35:19.295Z",
    "logoutAt": "2026-09-22T06:08:55.795Z",
    "durationMinutes": 94
  },
  {
    "id": "ses-1790051590395-ai3rbd",
    "userId": "person-1789544813478",
    "date": "2026-09-22",
    "loginAt": "2026-09-22T04:33:10.395Z",
    "logoutAt": "2026-09-22T06:08:46.686Z",
    "durationMinutes": 96
  },
  {
    "id": "ses-1790051471232-fexhz4",
    "userId": "person-1789737923403",
    "date": "2026-09-22",
    "loginAt": "2026-09-22T04:31:11.232Z",
    "logoutAt": "2026-09-22T08:41:50.656Z",
    "durationMinutes": 251
  },
  {
    "id": "ses-1790048590183-fme8ke",
    "userId": "person-1789549176116",
    "date": "2026-09-22",
    "loginAt": "2026-09-22T03:43:10.183Z",
    "logoutAt": "2026-09-22T08:39:10.430Z",
    "durationMinutes": 296
  },
  {
    "id": "ses-1789995425043-3lkf7g",
    "userId": "person-1789555841194",
    "date": "2026-09-21",
    "loginAt": "2026-09-21T12:57:05.043Z",
    "logoutAt": "2026-09-21T12:58:17.008Z",
    "durationMinutes": 1
  },
  {
    "id": "ses-1789994742648-ljw3ds",
    "userId": "person-1789738443448",
    "date": "2026-09-21",
    "loginAt": "2026-09-21T12:45:42.648Z",
    "logoutAt": "2026-09-21T12:45:42.648Z",
    "durationMinutes": 1
  },
  {
    "id": "ses-1789982898632-a5j5zc",
    "userId": "usr_founder",
    "date": "2026-09-21",
    "loginAt": "2026-09-21T09:28:18.632Z",
    "logoutAt": "2026-09-21T11:22:10.601Z",
    "durationMinutes": 114
  },
  {
    "id": "ses-1789982248085-shppru",
    "userId": "person-1789544916637",
    "date": "2026-09-21",
    "loginAt": "2026-09-21T09:17:28.085Z",
    "logoutAt": "2026-09-21T11:46:06.460Z",
    "durationMinutes": 149
  },
  {
    "id": "ses-1789981475922-2o77fr",
    "userId": "person-1789737923403",
    "date": "2026-09-21",
    "loginAt": "2026-09-21T09:04:35.922Z",
    "logoutAt": "2026-09-21T10:28:52.571Z",
    "durationMinutes": 84
  },
  {
    "id": "ses-1789981391068-2h5ijr",
    "userId": "person-1789737923403",
    "date": "2026-09-21",
    "loginAt": "2026-09-21T09:03:11.068Z",
    "logoutAt": "2026-09-21T09:04:30.063Z",
    "durationMinutes": 1
  },
  {
    "id": "ses-1789981369504-mewm14",
    "userId": "person-1789544851698",
    "date": "2026-09-21",
    "loginAt": "2026-09-21T09:02:49.504Z",
    "logoutAt": "2026-09-21T11:22:21.677Z",
    "durationMinutes": 140
  },
  {
    "id": "ses-1789981351345-pofwpx",
    "userId": "person-1789544813478",
    "date": "2026-09-21",
    "loginAt": "2026-09-21T09:02:31.345Z",
    "logoutAt": "2026-09-21T11:11:32.185Z",
    "durationMinutes": 129
  },
  {
    "id": "ses-1789981329386-w0wo6u",
    "userId": "person-1789738156900",
    "date": "2026-09-21",
    "loginAt": "2026-09-21T09:02:09.386Z",
    "logoutAt": "2026-09-21T11:11:05.612Z",
    "durationMinutes": 129
  },
  {
    "id": "ses-1789977940522-ehhdc9",
    "userId": "person-1789544851698",
    "date": "2026-09-21",
    "loginAt": "2026-09-21T08:05:40.522Z",
    "logoutAt": "2026-09-21T08:25:10.553Z",
    "durationMinutes": 20
  },
  {
    "id": "ses-1789970761428-oqwjtl",
    "userId": "person-1789737923403",
    "date": "2026-09-21",
    "loginAt": "2026-09-21T06:06:01.428Z",
    "logoutAt": "2026-09-21T06:14:52.592Z",
    "durationMinutes": 9
  },
  {
    "id": "ses-1789970221676-ipjmk0",
    "userId": "person-1789738156900",
    "date": "2026-09-21",
    "loginAt": "2026-09-21T05:57:01.676Z",
    "logoutAt": "2026-09-21T06:35:05.756Z",
    "durationMinutes": 38
  },
  {
    "id": "ses-1789970168942-ypfv0v",
    "userId": "person-1789555841194",
    "date": "2026-09-21",
    "loginAt": "2026-09-21T05:56:08.942Z",
    "logoutAt": "2026-09-21T05:56:13.370Z",
    "durationMinutes": 1
  },
  {
    "id": "ses-1789970096398-r6htjp",
    "userId": "person-1789544813478",
    "date": "2026-09-21",
    "loginAt": "2026-09-21T05:54:56.398Z",
    "logoutAt": "2026-09-21T08:12:51.447Z",
    "durationMinutes": 138
  },
  {
    "id": "ses-1789968648989-fv3ipe",
    "userId": "person-1789737923403",
    "date": "2026-09-21",
    "loginAt": "2026-09-21T05:30:48.989Z",
    "logoutAt": "2026-09-21T05:34:52.680Z",
    "durationMinutes": 4
  },
  {
    "id": "ses-1789968377410-a8omw6",
    "userId": "person-1789555841194",
    "date": "2026-09-21",
    "loginAt": "2026-09-21T05:26:17.410Z",
    "logoutAt": "2026-09-21T05:29:13.086Z",
    "durationMinutes": 3
  },
  {
    "id": "ses-1789968371008-xyiwli",
    "userId": "person-1789544916637",
    "date": "2026-09-21",
    "loginAt": "2026-09-21T05:26:11.008Z",
    "logoutAt": "2026-09-21T09:04:46.579Z",
    "durationMinutes": 219
  },
  {
    "id": "ses-1789967749758-yydem8",
    "userId": "person-1789738156900",
    "date": "2026-09-21",
    "loginAt": "2026-09-21T05:15:49.758Z",
    "logoutAt": "2026-09-21T05:32:06.065Z",
    "durationMinutes": 16
  },
  {
    "id": "ses-1789967609114-f5bxv1",
    "userId": "person-1789737923403",
    "date": "2026-09-21",
    "loginAt": "2026-09-21T05:13:29.114Z",
    "logoutAt": "2026-09-21T05:23:52.682Z",
    "durationMinutes": 10
  },
  {
    "id": "ses-1789967158780-sva2kr",
    "userId": "person-1789544813478",
    "date": "2026-09-21",
    "loginAt": "2026-09-21T05:05:58.780Z",
    "logoutAt": "2026-09-21T05:31:24.365Z",
    "durationMinutes": 25
  },
  {
    "id": "ses-1789966820116-b07tdu",
    "userId": "person-1789555841194",
    "date": "2026-09-21",
    "loginAt": "2026-09-21T05:00:20.116Z",
    "logoutAt": "2026-09-21T05:04:55.989Z",
    "durationMinutes": 5
  },
  {
    "id": "ses-1789966271773-qkdhpk",
    "userId": "person-1789738443448",
    "date": "2026-09-21",
    "loginAt": "2026-09-21T04:51:11.773Z",
    "logoutAt": "2026-09-21T05:12:40.789Z",
    "durationMinutes": 21
  },
  {
    "id": "ses-1789966060061-xa0tcb",
    "userId": "person-1789549176116",
    "date": "2026-09-21",
    "loginAt": "2026-09-21T04:47:40.061Z",
    "logoutAt": "2026-09-21T13:41:31.407Z",
    "durationMinutes": 534
  },
  {
    "id": "ses-1789966048368-lwyoij",
    "userId": "person-1789737923403",
    "date": "2026-09-21",
    "loginAt": "2026-09-21T04:47:28.368Z",
    "logoutAt": "2026-09-21T04:53:52.766Z",
    "durationMinutes": 6
  },
  {
    "id": "ses-1789966031300-qgqstz",
    "userId": "person-1789544916637",
    "date": "2026-09-21",
    "loginAt": "2026-09-21T04:47:11.300Z",
    "logoutAt": "2026-09-21T05:13:06.584Z",
    "durationMinutes": 26
  },
  {
    "id": "ses-1789965987135-6evm8z",
    "userId": "person-1789737883615",
    "date": "2026-09-21",
    "loginAt": "2026-09-21T04:46:27.135Z",
    "logoutAt": "2026-09-21T13:52:31.429Z",
    "durationMinutes": 546
  },
  {
    "id": "ses-1789965152296-ohtql8",
    "userId": "person-1789544851698",
    "date": "2026-09-21",
    "loginAt": "2026-09-21T04:32:32.296Z",
    "logoutAt": "2026-09-21T08:05:38.432Z",
    "durationMinutes": 213
  },
  {
    "id": "ses-1789965136192-8dqu91",
    "userId": "usr_founder",
    "date": "2026-09-21",
    "loginAt": "2026-09-21T04:32:16.192Z",
    "logoutAt": "2026-09-21T08:25:10.549Z",
    "durationMinutes": 233
  },
  {
    "id": "ses-1789815128286-g59via",
    "userId": "person-1789544851698",
    "date": "2026-09-19",
    "loginAt": "2026-09-19T10:52:08.286Z",
    "logoutAt": "2026-09-19T11:06:10.712Z",
    "durationMinutes": 14
  },
  {
    "id": "ses-1789814788400-k5o1zy",
    "userId": "person-1789737883615",
    "date": "2026-09-19",
    "loginAt": "2026-09-19T10:46:28.400Z",
    "logoutAt": "2026-09-19T13:31:07.444Z",
    "durationMinutes": 165
  },
  {
    "id": "ses-1789814739543-9mi8mk",
    "userId": "person-1789737883615",
    "date": "2026-09-19",
    "loginAt": "2026-09-19T10:45:39.543Z",
    "logoutAt": "2026-09-19T10:46:28.400Z",
    "durationMinutes": 1
  },
  {
    "id": "ses-1789814723201-lxkrjc",
    "userId": "usr_founder",
    "date": "2026-09-19",
    "loginAt": "2026-09-19T10:45:23.201Z",
    "logoutAt": "2026-09-19T10:51:21.770Z",
    "durationMinutes": 6
  },
  {
    "id": "ses-1789814463998-auvc0b",
    "userId": "usr_founder",
    "date": "2026-09-19",
    "loginAt": "2026-09-19T10:41:03.998Z",
    "logoutAt": "2026-09-19T10:41:03.998Z",
    "durationMinutes": 1
  },
  {
    "id": "ses-1789809557853-by6d2i",
    "userId": "person-1789737883615",
    "date": "2026-09-19",
    "loginAt": "2026-09-19T09:19:17.853Z",
    "logoutAt": "2026-09-19T10:45:39.543Z",
    "durationMinutes": 86
  },
  {
    "id": "ses-1789809137421-446a3j",
    "userId": "person-1789737883615",
    "date": "2026-09-19",
    "loginAt": "2026-09-19T09:12:17.421Z",
    "logoutAt": "2026-09-19T09:17:17.396Z",
    "durationMinutes": 5
  },
  {
    "id": "ses-1789808108497-13gwj8",
    "userId": "person-1789544916637",
    "date": "2026-09-19",
    "loginAt": "2026-09-19T08:55:08.497Z",
    "logoutAt": "2026-09-19T09:00:39.702Z",
    "durationMinutes": 6
  },
  {
    "id": "ses-1789798310910-mazs87",
    "userId": "person-1789544916637",
    "date": "2026-09-19",
    "loginAt": "2026-09-19T06:11:50.910Z",
    "logoutAt": "2026-09-19T07:00:11.677Z",
    "durationMinutes": 48
  },
  {
    "id": "ses-1789798115130-vu5lqg",
    "userId": "usr_founder",
    "date": "2026-09-19",
    "loginAt": "2026-09-19T06:08:35.130Z",
    "logoutAt": "2026-09-19T07:30:51.680Z",
    "durationMinutes": 82
  },
  {
    "id": "ses-1789796733903-auef9m",
    "userId": "person-1789737923403",
    "date": "2026-09-19",
    "loginAt": "2026-09-19T05:45:33.903Z",
    "logoutAt": "2026-09-19T06:05:46.133Z",
    "durationMinutes": 20
  },
  {
    "id": "ses-1789796661811-i63nbb",
    "userId": "person-1789555841194",
    "date": "2026-09-19",
    "loginAt": "2026-09-19T05:44:21.811Z",
    "logoutAt": "2026-09-19T05:44:25.300Z",
    "durationMinutes": 1
  },
  {
    "id": "ses-1789796542120-pvsyuk",
    "userId": "person-1789738156900",
    "date": "2026-09-19",
    "loginAt": "2026-09-19T05:42:22.120Z",
    "logoutAt": "2026-09-19T06:01:02.682Z",
    "durationMinutes": 19
  },
  {
    "id": "ses-1789796034620-moad9y",
    "userId": "person-1789737923403",
    "date": "2026-09-19",
    "loginAt": "2026-09-19T05:33:54.620Z",
    "logoutAt": "2026-09-19T05:36:26.158Z",
    "durationMinutes": 3
  },
  {
    "id": "ses-1789794289000-qdixdp",
    "userId": "person-1789544851698",
    "date": "2026-09-19",
    "loginAt": "2026-09-19T05:04:49.000Z",
    "logoutAt": "2026-09-19T06:07:10.697Z",
    "durationMinutes": 62
  },
  {
    "id": "ses-1789793979240-v6t5q9",
    "userId": "person-1789555841194",
    "date": "2026-09-19",
    "loginAt": "2026-09-19T04:59:39.240Z",
    "logoutAt": "2026-09-19T05:20:22.068Z",
    "durationMinutes": 21
  },
  {
    "id": "ses-1789793664749-tvuzn2",
    "userId": "person-1789555841194",
    "date": "2026-09-19",
    "loginAt": "2026-09-19T04:54:24.749Z",
    "logoutAt": "2026-09-19T04:54:50.450Z",
    "durationMinutes": 1
  },
  {
    "id": "ses-1789793630920-ydt3mf",
    "userId": "person-1789544916637",
    "date": "2026-09-19",
    "loginAt": "2026-09-19T04:53:50.920Z",
    "logoutAt": "2026-09-19T06:11:50.910Z",
    "durationMinutes": 78
  },
  {
    "id": "ses-1789793548764-a555g0",
    "userId": "person-1789737883615",
    "date": "2026-09-19",
    "loginAt": "2026-09-19T04:52:28.764Z",
    "logoutAt": "2026-09-19T09:12:15.141Z",
    "durationMinutes": 260
  },
  {
    "id": "ses-1789793473073-22qh6i",
    "userId": "person-1789544813478",
    "date": "2026-09-19",
    "loginAt": "2026-09-19T04:51:13.073Z",
    "logoutAt": "2026-09-19T06:01:51.716Z",
    "durationMinutes": 71
  },
  {
    "id": "ses-1789793456196-olreyf",
    "userId": "person-1789549176116",
    "date": "2026-09-19",
    "loginAt": "2026-09-19T04:50:56.196Z",
    "logoutAt": "2026-09-19T06:58:17.271Z",
    "durationMinutes": 127
  },
  {
    "id": "ses-1789793404381-ywot4a",
    "userId": "person-1789737923403",
    "date": "2026-09-19",
    "loginAt": "2026-09-19T04:50:04.381Z",
    "logoutAt": "2026-09-19T04:57:46.207Z",
    "durationMinutes": 8
  },
  {
    "id": "ses-1789792371808-8bnztx",
    "userId": "usr_founder",
    "date": "2026-09-19",
    "loginAt": "2026-09-19T04:32:51.808Z",
    "logoutAt": "2026-09-19T04:48:42.343Z",
    "durationMinutes": 16
  },
  {
    "id": "ses-1789792365023-oliv1n",
    "userId": "person-1789544851698",
    "date": "2026-09-19",
    "loginAt": "2026-09-19T04:32:45.023Z",
    "logoutAt": "2026-09-19T04:48:22.336Z",
    "durationMinutes": 16
  },
  {
    "id": "ses-1789736832875-ku5p7c",
    "userId": "person-1789544813478",
    "date": "2026-09-18",
    "loginAt": "2026-09-18T13:07:12.875Z",
    "logoutAt": "2026-09-18T13:52:20.177Z",
    "durationMinutes": 45
  },
  {
    "id": "ses-1789734019689-6211hl",
    "userId": "person-1789544851698",
    "date": "2026-09-18",
    "loginAt": "2026-09-18T12:20:19.689Z",
    "logoutAt": "2026-09-18T12:21:20.212Z",
    "durationMinutes": 1
  },
  {
    "id": "ses-1789733332001-6su2t7",
    "userId": "usr_founder",
    "date": "2026-09-18",
    "loginAt": "2026-09-18T12:08:52.001Z",
    "logoutAt": "2026-09-18T12:32:40.846Z",
    "durationMinutes": 24
  },
  {
    "id": "ses-1789708030297-vn77fb",
    "userId": "person-1789555841194",
    "date": "2026-09-18",
    "loginAt": "2026-09-18T05:07:10.297Z",
    "logoutAt": "2026-09-18T05:07:10.297Z",
    "durationMinutes": 1
  },
  {
    "id": "ses-1789706225073-3qd3ye",
    "userId": "person-1789544851698",
    "date": "2026-09-18",
    "loginAt": "2026-09-18T04:37:05.073Z",
    "logoutAt": "2026-09-18T05:58:40.223Z",
    "durationMinutes": 82
  },
  {
    "id": "ses-1789706098826-lhvepm",
    "userId": "usr_founder",
    "date": "2026-09-18",
    "loginAt": "2026-09-18T04:34:58.826Z",
    "logoutAt": "2026-09-18T05:58:09.759Z",
    "durationMinutes": 83
  },
  {
    "id": "ses-1789706078614-ufggky",
    "userId": "person-1789555841194",
    "date": "2026-09-18",
    "loginAt": "2026-09-18T04:34:38.614Z",
    "logoutAt": "2026-09-18T04:35:04.202Z",
    "durationMinutes": 1
  },
  {
    "id": "ses-1789623361820-ald1dm",
    "userId": "person-1789544851698",
    "date": "2026-09-17",
    "loginAt": "2026-09-17T05:36:01.820Z",
    "logoutAt": "2026-09-17T05:36:05.003Z",
    "durationMinutes": 1
  },
  {
    "id": "ses-1789622368164-4l55nk",
    "userId": "person-1789555841194",
    "date": "2026-09-17",
    "loginAt": "2026-09-17T05:19:28.164Z",
    "logoutAt": "2026-09-17T05:19:28.164Z",
    "durationMinutes": 1
  },
  {
    "id": "ses-1789622234543-g574u9",
    "userId": "person-1789544916637",
    "date": "2026-09-17",
    "loginAt": "2026-09-17T05:17:14.543Z",
    "logoutAt": "2026-09-17T05:19:20.608Z",
    "durationMinutes": 2
  },
  {
    "id": "ses-1789619409031-tb3rhy",
    "userId": "person-1789544851698",
    "date": "2026-09-17",
    "loginAt": "2026-09-17T04:30:09.031Z",
    "logoutAt": "2026-09-17T05:36:01.820Z",
    "durationMinutes": 66
  },
  {
    "id": "ses-1789619401643-qn01sj",
    "userId": "usr_founder",
    "date": "2026-09-17",
    "loginAt": "2026-09-17T04:30:01.643Z",
    "logoutAt": "2026-09-17T07:04:47.248Z",
    "durationMinutes": 155
  },
  {
    "id": "ses-1789574833756-8ek75v",
    "userId": "usr_founder",
    "date": "2026-09-16",
    "loginAt": "2026-09-16T16:07:13.756Z",
    "logoutAt": "2026-09-16T16:07:47.601Z",
    "durationMinutes": 1
  },
  {
    "id": "ses-1789565221553-nma27b",
    "userId": "usr_founder",
    "date": "2026-09-16",
    "loginAt": "2026-09-16T13:27:01.553Z",
    "logoutAt": "2026-09-16T13:27:07.148Z",
    "durationMinutes": 1
  },
  {
    "id": "ses-1789562493560-6nbbg8",
    "userId": "person-1789544851698",
    "date": "2026-09-16",
    "loginAt": "2026-09-16T12:41:33.560Z",
    "logoutAt": "2026-09-16T13:28:04.812Z",
    "durationMinutes": 47
  },
  {
    "id": "ses-1789559125858-nd0ixd",
    "userId": "person-1789544851698",
    "date": "2026-09-16",
    "loginAt": "2026-09-16T11:45:25.858Z",
    "logoutAt": "2026-09-16T11:46:24.329Z",
    "durationMinutes": 1
  },
  {
    "id": "ses-1789552454586-adri",
    "userId": "person-1789544851698",
    "date": "2026-09-16",
    "loginAt": "2026-09-16T09:54:14.583Z",
    "logoutAt": "2026-09-16T11:45:24.248Z",
    "durationMinutes": 111
  },
  {
    "id": "ses-1789552411141-cre1",
    "userId": "usr_founder",
    "date": "2026-09-16",
    "loginAt": "2026-09-16T09:53:31.137Z",
    "logoutAt": "2026-09-16T12:34:05.359Z",
    "durationMinutes": 161
  },
  {
    "id": "ses-1789549364259-58ld",
    "userId": "person-1789544813478",
    "date": "2026-09-16",
    "loginAt": "2026-09-16T09:02:44.256Z",
    "logoutAt": "2026-09-16T13:27:28.015Z",
    "durationMinutes": 265
  },
  {
    "id": "ses-1789549349581-cxt8",
    "userId": "person-1789544916637",
    "date": "2026-09-16",
    "loginAt": "2026-09-16T09:02:29.578Z",
    "logoutAt": "2026-09-16T09:21:30.150Z",
    "durationMinutes": 19
  },
  {
    "id": "ses-1789549272271-qyrs",
    "userId": "person-1789544813478",
    "date": "2026-09-16",
    "loginAt": "2026-09-16T09:01:12.268Z",
    "logoutAt": "2026-09-16T09:01:30.066Z",
    "durationMinutes": 1
  },
  {
    "id": "ses-1789549238677-2m5q",
    "userId": "person-1789549176116",
    "date": "2026-09-16",
    "loginAt": "2026-09-16T09:00:38.673Z",
    "logoutAt": "2026-09-16T13:24:06.722Z",
    "durationMinutes": 263
  },
  {
    "id": "ses-1789549083023-fgin",
    "userId": "person-1789544813478",
    "date": "2026-09-16",
    "loginAt": "2026-09-16T08:58:03.021Z",
    "logoutAt": "2026-09-16T13:27:28.015Z",
    "durationMinutes": 269
  },
  {
    "id": "ses-1789549077549-ku0x",
    "userId": "usr_founder",
    "date": "2026-09-16",
    "loginAt": "2026-09-16T08:57:57.461Z",
    "logoutAt": "2026-09-16T09:35:10.337Z",
    "durationMinutes": 37
  },
  {
    "id": "ses-1789545077688-xhqe",
    "userId": "person-1789544851698",
    "date": "2026-09-16",
    "loginAt": "2026-09-16T07:51:17.684Z",
    "logoutAt": "2026-09-16T09:54:12.410Z",
    "durationMinutes": 123
  },
  {
    "id": "ses-1789534201020-6q1r",
    "userId": "usr_founder",
    "date": "2026-09-16",
    "loginAt": "2026-09-16T04:50:01.016Z",
    "logoutAt": "2026-09-16T12:34:05.359Z",
    "durationMinutes": 464
  },
  {
    "id": "ses-1789533931765-853w",
    "userId": "usr_founder",
    "date": "2026-09-16",
    "loginAt": "2026-09-16T04:45:31.761Z",
    "logoutAt": "2026-09-16T04:49:06.039Z",
    "durationMinutes": 4
  },
  {
    "id": "ses-1789533520010-qeie",
    "userId": "usr_founder",
    "date": "2026-09-16",
    "loginAt": "2026-09-16T04:38:40.007Z",
    "logoutAt": "2026-09-16T04:45:29.940Z",
    "durationMinutes": 7
  },
  {
    "id": "ses-1789473217426-b9s2",
    "userId": "usr_founder",
    "date": "2026-09-15",
    "loginAt": "2026-09-15T11:53:37.424Z",
    "logoutAt": "2026-09-16T04:38:37.845Z",
    "durationMinutes": 1005
  },
  {
    "id": "ses-1789471448220-zgoh",
    "userId": "usr_founder",
    "date": "2026-09-15",
    "loginAt": "2026-09-15T11:24:08.218Z",
    "logoutAt": "2026-09-15T11:28:27.464Z",
    "durationMinutes": 4
  },
  {
    "id": "ses-1789471348072-122o",
    "userId": "usr_founder",
    "date": "2026-09-15",
    "loginAt": "2026-09-15T11:22:28.069Z",
    "logoutAt": "2026-09-15T11:24:05.098Z",
    "durationMinutes": 2
  },
  {
    "id": "ses-1789470239265-lb55",
    "userId": "usr_founder",
    "date": "2026-09-15",
    "loginAt": "2026-09-15T11:03:59.261Z",
    "logoutAt": "2026-09-15T11:05:41.889Z",
    "durationMinutes": 2
  },
  {
    "id": "ses-1789469803361-y8ko",
    "userId": "usr_founder",
    "date": "2026-09-15",
    "loginAt": "2026-09-15T10:56:43.359Z",
    "logoutAt": "2026-09-15T10:56:49.353Z",
    "durationMinutes": 1
  },
  {
    "id": "ses-1789469712802-2si6",
    "userId": "usr_founder",
    "date": "2026-09-15",
    "loginAt": "2026-09-15T10:55:12.800Z",
    "logoutAt": "2026-09-15T10:55:34.557Z",
    "durationMinutes": 1
  },
  {
    "id": "ses-1789469269558-brfl",
    "userId": "usr_founder",
    "date": "2026-09-15",
    "loginAt": "2026-09-15T10:47:49.554Z",
    "logoutAt": "2026-09-15T10:51:38.494Z",
    "durationMinutes": 4
  },
  {
    "id": "ses-1789468809830-wv99",
    "userId": "usr_founder",
    "date": "2026-09-15",
    "loginAt": "2026-09-15T10:40:09.824Z",
    "logoutAt": "2026-09-16T12:34:05.359Z",
    "durationMinutes": 1554
  },
  {
    "id": "ses-1789465326954-1eeg",
    "userId": "usr_founder",
    "date": "2026-09-15",
    "loginAt": "2026-09-15T09:42:06.951Z",
    "logoutAt": "2026-09-16T12:34:05.359Z",
    "durationMinutes": 1612
  },
  {
    "id": "ses-1789465235112-0pr2",
    "userId": "usr_founder",
    "date": "2026-09-15",
    "loginAt": "2026-09-15T09:40:35.109Z",
    "logoutAt": "2026-09-16T12:34:05.359Z",
    "durationMinutes": 1614
  },
  {
    "id": "ses-1789465026742-q3fe",
    "userId": "usr_founder",
    "date": "2026-09-15",
    "loginAt": "2026-09-15T09:37:06.735Z",
    "logoutAt": "2026-09-15T09:37:56.921Z",
    "durationMinutes": 1
  },
  {
    "id": "ses-1789457512706-d3mk",
    "userId": "usr_founder",
    "date": "2026-09-15",
    "loginAt": "2026-09-15T07:31:52.457Z",
    "logoutAt": "2026-09-16T12:34:05.359Z",
    "durationMinutes": 1742
  },
  {
    "id": "ses-1789456845000-rrzg",
    "userId": "usr_founder",
    "date": "2026-09-15",
    "loginAt": "2026-09-15T07:20:44.747Z",
    "logoutAt": "2026-09-15T07:31:45.865Z",
    "durationMinutes": 11
  },
  {
    "id": "ses-1789456474692-kl5l",
    "userId": "usr_founder",
    "date": "2026-09-15",
    "loginAt": "2026-09-15T07:14:34.436Z",
    "logoutAt": "2026-09-15T07:14:44.943Z",
    "durationMinutes": 1
  },
  {
    "id": "ses-1789453537632-2244",
    "userId": "usr_founder",
    "date": "2026-09-15",
    "loginAt": "2026-09-15T06:25:37.403Z",
    "logoutAt": "2026-09-15T06:54:04.158Z",
    "durationMinutes": 28
  },
  {
    "id": "ses-1789453499331-5d9y",
    "userId": "usr_founder",
    "date": "2026-09-15",
    "loginAt": "2026-09-15T06:24:59.107Z",
    "logoutAt": "2026-09-15T06:25:35.117Z",
    "durationMinutes": 1
  },
  {
    "id": "ses-1789451619361-cwbp",
    "userId": "usr_founder",
    "date": "2026-09-15",
    "loginAt": "2026-09-15T05:53:39.114Z",
    "logoutAt": "2026-09-15T06:23:24.995Z",
    "durationMinutes": 30
  },
  {
    "id": "ses-1789451325524-0w6a",
    "userId": "usr_founder",
    "date": "2026-09-15",
    "loginAt": "2026-09-15T05:48:45.482Z",
    "logoutAt": "2026-09-16T12:34:05.359Z",
    "durationMinutes": 1845
  },
  {
    "id": "ses-1789450899942-higu",
    "userId": "usr_founder",
    "date": "2026-09-15",
    "loginAt": "2026-09-15T05:41:39.899Z",
    "logoutAt": "2026-09-15T05:42:04.127Z",
    "durationMinutes": 1
  },
  {
    "id": "ses-1789450571233-xy1t",
    "userId": "usr_founder",
    "date": "2026-09-15",
    "loginAt": "2026-09-15T05:36:11.191Z",
    "logoutAt": "2026-09-15T05:39:42.359Z",
    "durationMinutes": 4
  },
  {
    "id": "ses-1789450537590-b8ra",
    "userId": "usr_founder",
    "date": "2026-09-15",
    "loginAt": "2026-09-15T05:35:37.548Z",
    "logoutAt": "2026-09-16T12:34:05.359Z",
    "durationMinutes": 1858
  },
  {
    "id": "ses-1789450302253-r8di",
    "userId": "usr_founder",
    "date": "2026-09-15",
    "loginAt": "2026-09-15T05:31:42.184Z",
    "logoutAt": "2026-09-16T12:34:05.359Z",
    "durationMinutes": 1862
  }
];

export const MIGRATED_LEAVES: LeaveRequest[] = [
  {
    "id": "leave-1792647703959",
    "userId": "person-1789738156900",
    "leaveType": "Other",
    "startDate": "2026-10-22",
    "endDate": "2026-10-22",
    "reason": "Approved by Management",
    "note": "half day",
    "status": "Approved",
    "approvedBy": "person-1789737883615",
    "createdAt": "2026-10-22T05:41:43.959Z"
  },
  {
    "id": "leave-1792643776244",
    "userId": "person-1789738443448",
    "leaveType": "Casual",
    "startDate": "2026-10-22",
    "endDate": "2026-10-22",
    "reason": "test",
    "note": "Planned Logout Time: 10:06",
    "status": "Rejected",
    "approvedBy": "person-1789737883615",
    "createdAt": "2026-10-22T04:36:16.244Z"
  },
  {
    "id": "leave-1792576715239",
    "userId": "person-1789555841194",
    "leaveType": "Sick",
    "startDate": "2026-10-21",
    "endDate": "2026-10-21",
    "reason": "Approved by Management",
    "note": null,
    "status": "Approved",
    "approvedBy": "person-1789737883615",
    "createdAt": "2026-10-21T09:58:35.240Z"
  },
  {
    "id": "leave-1792576699738",
    "userId": "person-1789737923403",
    "leaveType": "Work From Home",
    "startDate": "2026-10-21",
    "endDate": "2026-10-21",
    "reason": "Approved by Management",
    "note": null,
    "status": "Approved",
    "approvedBy": "person-1789737883615",
    "createdAt": "2026-10-21T09:58:19.738Z"
  },
  {
    "id": "leave-1792216006950",
    "userId": "person-1789738443448",
    "leaveType": "Work From Home",
    "startDate": "2026-10-19",
    "endDate": "2026-10-19",
    "reason": "Approved by Management",
    "note": null,
    "status": "Approved",
    "approvedBy": "person-1789737883615",
    "createdAt": "2026-10-17T05:46:46.950Z"
  },
  {
    "id": "leave-1792215981951",
    "userId": "person-1789544916637",
    "leaveType": "Personal",
    "startDate": "2026-10-17",
    "endDate": "2026-10-17",
    "reason": "Approved by Management",
    "note": null,
    "status": "Approved",
    "approvedBy": "person-1789737883615",
    "createdAt": "2026-10-17T05:46:21.951Z"
  },
  {
    "id": "leave-1791884996134",
    "userId": "person-1789544916637",
    "leaveType": "Personal",
    "startDate": "2026-10-13",
    "endDate": "2026-10-13",
    "reason": "Approved by Management",
    "note": "half day leave",
    "status": "Approved",
    "approvedBy": "person-1789737883615",
    "createdAt": "2026-10-13T09:49:56.135Z"
  },
  {
    "id": "leave-1791865885717",
    "userId": "person-1789544813478",
    "leaveType": "Sick",
    "startDate": "2026-10-13",
    "endDate": "2026-10-13",
    "reason": "Approved by Management",
    "note": null,
    "status": "Approved",
    "approvedBy": "person-1789737883615",
    "createdAt": "2026-10-13T04:31:25.717Z"
  },
  {
    "id": "leave-1791626279060",
    "userId": "person-1791175695081",
    "leaveType": "Work From Home",
    "startDate": "2026-10-12",
    "endDate": "2026-10-19",
    "reason": "Requesting to work from home as I will be travelling to my hometown and staying with my family during this period.",
    "note": "I will be available during regular working hours, attend meetings, and ensure that all my assigned tasks and responsibilities are completed on time.",
    "status": "Approved",
    "approvedBy": "person-1789737883615",
    "createdAt": "2026-10-10T09:57:59.060Z"
  },
  {
    "id": "leave-1791607205845",
    "userId": "person-1789544916637",
    "leaveType": "Casual",
    "startDate": "2026-10-17",
    "endDate": "2026-10-17",
    "reason": "Personal",
    "note": "",
    "status": "Approved",
    "approvedBy": "person-1789737883615",
    "createdAt": "2026-10-10T04:40:05.845Z"
  },
  {
    "id": "leave-1791607144447",
    "userId": "person-1789544916637",
    "leaveType": "Work From Home",
    "startDate": "2026-10-12",
    "endDate": "2026-10-12",
    "reason": "Personal",
    "note": "",
    "status": "Approved",
    "approvedBy": "person-1789737883615",
    "createdAt": "2026-10-10T04:39:04.447Z"
  },
  {
    "id": "leave-1791544862893",
    "userId": "person-1789737883615",
    "leaveType": "Casual",
    "startDate": "2026-10-09",
    "endDate": "2026-10-09",
    "reason": "Approved by Management",
    "note": "Planned Time: 17:30",
    "status": "Approved",
    "approvedBy": "person-1789737883615",
    "createdAt": "2026-10-09T11:21:02.893Z"
  },
  {
    "id": "leave-1791380587143",
    "userId": "person-1789737883615",
    "leaveType": "Casual",
    "startDate": "2026-10-07",
    "endDate": "2026-10-07",
    "reason": "Today's scheduled work has been completed",
    "note": "Planned Logout Time: 19:12",
    "status": "Approved",
    "approvedBy": "person-1789737883615",
    "createdAt": "2026-10-07T13:43:07.143Z"
  },
  {
    "id": "leave-1791380314373",
    "userId": "person-1789737883615",
    "leaveType": "Casual",
    "startDate": "2026-10-07",
    "endDate": "2026-10-07",
    "reason": "Today's scheduled work has been completed",
    "note": "Planned Logout Time: 19:08",
    "status": "Approved",
    "approvedBy": "person-1789737883615",
    "createdAt": "2026-10-07T13:38:34.373Z"
  },
  {
    "id": "leave-1791283942245",
    "userId": "person-1789549176116",
    "leaveType": "Casual",
    "startDate": "2026-10-10",
    "endDate": "2026-10-10",
    "reason": "Going Out",
    "note": "",
    "status": "Approved",
    "approvedBy": "person-1789737883615",
    "createdAt": "2026-10-06T10:52:22.245Z"
  },
  {
    "id": "leave-1791202510941",
    "userId": "person-1789737923403",
    "leaveType": "Sick",
    "startDate": "2026-10-06",
    "endDate": "2026-10-07",
    "reason": "I am experiencing severe back pain that is making it difficult for me to sit, move comfortably, and carry out my work. I need to consult a doctor at the earliest to evaluate the condition and receive appropriate medical advice.  Considering the situation, I kindly request you to treat this as a **medical emergency** and grant me leave for **Tuesday and Wednesday, 6th and 7th October**.  I request you to kindly consider and approve my leave for these two days. Thank you for your understanding.",
    "note": "",
    "status": "Approved",
    "approvedBy": "person-1789737883615",
    "createdAt": "2026-10-05T12:15:10.941Z"
  },
  {
    "id": "leave-1791176651694",
    "userId": "person-1789555841194",
    "leaveType": "Sick",
    "startDate": "2026-10-05",
    "endDate": "2026-10-05",
    "reason": "Approved by Management",
    "note": null,
    "status": "Approved",
    "approvedBy": "person-1789737883615",
    "createdAt": "2026-10-05T05:04:11.694Z"
  },
  {
    "id": "leave-1791004253720",
    "userId": "person-1789738156900",
    "leaveType": "Work From Home",
    "startDate": "2026-10-03",
    "endDate": "2026-10-03",
    "reason": "Approved by Management",
    "note": null,
    "status": "Approved",
    "approvedBy": "person-1789737883615",
    "createdAt": "2026-10-03T05:10:53.720Z"
  },
  {
    "id": "leave-1790832039355",
    "userId": "person-1789544851698",
    "leaveType": "Casual",
    "startDate": "2026-10-01",
    "endDate": "2026-10-01",
    "reason": "dental appoiment",
    "note": "Planned Time: 16:30",
    "status": "Approved",
    "approvedBy": "person-1789737883615",
    "createdAt": "2026-10-01T05:20:39.356Z"
  },
  {
    "id": "leave-1790345113575",
    "userId": "person-1789544916637",
    "leaveType": "Work From Home",
    "startDate": "2026-09-26",
    "endDate": "2026-09-26",
    "reason": "Personal",
    "note": null,
    "status": "Approved",
    "approvedBy": "person-1789737883615",
    "createdAt": "2026-09-25T14:05:13.575Z"
  },
  {
    "id": "leave-1790326275610",
    "userId": "person-1789737923403",
    "leaveType": "Other",
    "startDate": "2026-10-03",
    "endDate": "2026-10-03",
    "reason": "Attending a family religious ceremony for Pithru Paksha rituals and ancestral prayers.",
    "note": "I would like to request leave on 3rd October due to a family religious ceremony being conducted as part of the Pithru Paksha observances. My presence is required to participate in the traditional rituals and ceremonies performed in remembrance of our ancestors.",
    "status": "Approved",
    "approvedBy": "person-1789737883615",
    "createdAt": "2026-09-25T08:51:15.610Z"
  },
  {
    "id": "leave-1790318601523",
    "userId": "person-1789737883615",
    "leaveType": "Sick",
    "startDate": "2026-09-25",
    "endDate": "2026-09-25",
    "reason": "Approved by Management",
    "note": "HALF DAY",
    "status": "Approved",
    "approvedBy": "person-1789737883615",
    "createdAt": "2026-09-25T06:43:21.523Z"
  },
  {
    "id": "leave-1790312333074",
    "userId": "person-1789555841194",
    "leaveType": "Sick",
    "startDate": "2026-09-25",
    "endDate": "2026-09-25",
    "reason": "Approved by Management",
    "note": null,
    "status": "Approved",
    "approvedBy": "person-1789737883615",
    "createdAt": "2026-09-25T04:58:53.074Z"
  },
  {
    "id": "leave-1790225170843",
    "userId": "person-1789555841194",
    "leaveType": "Sick",
    "startDate": "2026-09-24",
    "endDate": "2026-09-24",
    "reason": "Approved by Management",
    "note": null,
    "status": "Approved",
    "approvedBy": "person-1789737883615",
    "createdAt": "2026-09-24T04:46:10.843Z"
  },
  {
    "id": "leave-1790157674033",
    "userId": "person-1789555841194",
    "leaveType": "Other",
    "startDate": "2026-09-23",
    "endDate": "2026-09-23",
    "reason": "Absent / half day",
    "note": null,
    "status": "Approved",
    "approvedBy": "usr_founder",
    "createdAt": "2026-09-23T10:01:14.033Z"
  },
  {
    "id": "leave-1790157655929",
    "userId": "person-1789544916637",
    "leaveType": "Other",
    "startDate": "2026-09-23",
    "endDate": "2026-09-23",
    "reason": "Absent / half day",
    "note": null,
    "status": "Approved",
    "approvedBy": "usr_founder",
    "createdAt": "2026-09-23T10:00:55.929Z"
  },
  {
    "id": "leave-1790151305805",
    "userId": "person-1789544916637",
    "leaveType": "Work From Home",
    "startDate": "2026-09-25",
    "endDate": "2026-09-25",
    "reason": "Personal",
    "note": null,
    "status": "Approved",
    "approvedBy": "person-1789737883615",
    "createdAt": "2026-09-23T08:15:05.805Z"
  },
  {
    "id": "leave-1790151290111",
    "userId": "person-1789544916637",
    "leaveType": "Personal",
    "startDate": "2026-09-24",
    "endDate": "2026-09-24",
    "reason": "Personal",
    "note": null,
    "status": "Approved",
    "approvedBy": "person-1789737883615",
    "createdAt": "2026-09-23T08:14:50.111Z"
  },
  {
    "id": "leave-1790062574895",
    "userId": "person-1789544813478",
    "leaveType": "Sick",
    "startDate": "2026-09-26",
    "endDate": "2026-09-26",
    "reason": "a doctors follow up appointment ",
    "note": "work from home on saturday 26th september",
    "status": "Approved",
    "approvedBy": "person-1789737883615",
    "createdAt": "2026-09-22T07:36:14.895Z"
  },
  {
    "id": "leave-1789814933173",
    "userId": "person-1789544813478",
    "leaveType": "Sick",
    "startDate": "2026-09-19",
    "endDate": "2026-09-19",
    "reason": "Approved by Founder",
    "note": "TEST",
    "status": "Approved",
    "approvedBy": "person-1789737883615",
    "createdAt": "2026-09-19T10:48:53.174Z"
  },
  {
    "id": "leave-1789799484163",
    "userId": "person-1789544916637",
    "leaveType": "Casual",
    "startDate": "2026-09-19",
    "endDate": "2026-09-19",
    "reason": "test",
    "note": null,
    "status": "Rejected",
    "approvedBy": "usr_founder",
    "createdAt": "2026-09-19T06:31:24.163Z"
  },
  {
    "id": "leave-1789798629290",
    "userId": "person-1789544916637",
    "leaveType": "Other",
    "startDate": "2026-09-19",
    "endDate": "2026-09-19",
    "reason": "test",
    "note": null,
    "status": "Rejected",
    "approvedBy": "usr_founder",
    "createdAt": "2026-09-19T06:17:09.290Z"
  },
  {
    "id": "leave-1789559348407",
    "userId": "person-1789555841194",
    "leaveType": "Casual",
    "startDate": "2026-09-16",
    "endDate": "2026-09-16",
    "reason": "Absent / No login on 16 Sept",
    "note": null,
    "status": "Approved",
    "approvedBy": "usr_founder",
    "createdAt": "2026-09-16T11:49:08.407Z"
  }
];

export const MIGRATED_BREAK_LOGS: BreakLog[] = [
  {
    "id": "brk_1793187353858_b9ku",
    "userId": "person-1789549176116",
    "date": "2026-10-28",
    "type": "Break",
    "startAt": "2026-10-28T11:36:06.321Z",
    "endAt": "2026-10-28T11:51:44.304Z",
    "durationMinutes": 1
  },
  {
    "id": "brk_1793177903530_4qou",
    "userId": "person-1789544813478",
    "date": "2026-10-28",
    "type": "Lunch",
    "startAt": "2026-10-28T08:57:39.364Z",
    "endAt": "2026-10-28T09:49:51.697Z",
    "durationMinutes": 52
  },
  {
    "id": "brk_1793177548966_ad2x",
    "userId": "person-1789549176116",
    "date": "2026-10-28",
    "type": "Lunch",
    "startAt": "2026-10-28T08:52:41.467Z",
    "endAt": "2026-10-28T09:34:19.064Z",
    "durationMinutes": 42
  },
  {
    "id": "brk_1793175378492_smm9",
    "userId": "person-1789738156900",
    "date": "2026-10-28",
    "type": "Lunch",
    "startAt": "2026-10-28T08:16:17.928Z",
    "endAt": "2026-10-28T08:44:45.857Z",
    "durationMinutes": 28
  },
  {
    "id": "brk_1793092824337_pewn",
    "userId": "person-1789544813478",
    "date": "2026-10-27",
    "type": "Lunch",
    "startAt": "2026-10-27T09:19:40.568Z",
    "endAt": "2026-10-27T10:13:27.803Z",
    "durationMinutes": 54
  },
  {
    "id": "brk_1793091802402_8umk",
    "userId": "person-1789737883615",
    "date": "2026-10-27",
    "type": "Lunch",
    "startAt": "2026-10-27T09:03:22.165Z",
    "endAt": "2026-10-27T10:00:28.725Z",
    "durationMinutes": 57
  },
  {
    "id": "brk_1793090537420_e0s1",
    "userId": "person-1789549176116",
    "date": "2026-10-27",
    "type": "Lunch",
    "startAt": "2026-10-27T08:42:30.981Z",
    "endAt": "2026-10-27T09:12:40.662Z",
    "durationMinutes": 30
  },
  {
    "id": "brk_1793014566905_89wf",
    "userId": "person-1789737923403",
    "date": "2026-10-26",
    "type": "Lunch",
    "startAt": "2026-10-26T11:36:09.623Z",
    "endAt": "2026-10-26T12:34:03.631Z",
    "durationMinutes": 58
  },
  {
    "id": "brk_1793004499462_elda",
    "userId": "person-1789738156900",
    "date": "2026-10-26",
    "type": "Lunch",
    "startAt": "2026-10-26T08:48:18.657Z",
    "endAt": "2026-10-26T09:48:36.998Z",
    "durationMinutes": 1
  },
  {
    "id": "brk_1793004438739_x90r",
    "userId": "person-1789549176116",
    "date": "2026-10-26",
    "type": "Lunch",
    "startAt": "2026-10-26T08:47:32.870Z",
    "endAt": "2026-10-26T09:13:20.336Z",
    "durationMinutes": 26
  },
  {
    "id": "brk_1793004153380_koml",
    "userId": "person-1789544813478",
    "date": "2026-10-26",
    "type": "Lunch",
    "startAt": "2026-10-26T08:41:49.525Z",
    "endAt": "2026-10-26T09:28:03.118Z",
    "durationMinutes": 46
  },
  {
    "id": "brk_1792746491892_sjp4",
    "userId": "person-1789544813478",
    "date": "2026-10-23",
    "type": "Lunch",
    "startAt": "2026-10-23T09:07:28.713Z",
    "endAt": "2026-10-23T10:08:15.377Z",
    "durationMinutes": 1
  },
  {
    "id": "brk_1792744483835_t971",
    "userId": "person-1789737883615",
    "date": "2026-10-23",
    "type": "Lunch",
    "startAt": "2026-10-23T08:34:44.367Z",
    "endAt": "2026-10-23T09:22:50.128Z",
    "durationMinutes": 48
  },
  {
    "id": "brk_1792743688131_zbd5",
    "userId": "person-1789549176116",
    "date": "2026-10-23",
    "type": "Lunch",
    "startAt": "2026-10-23T08:21:42.844Z",
    "endAt": "2026-10-23T08:46:31.920Z",
    "durationMinutes": 25
  },
  {
    "id": "brk_1792735906039_7cgl",
    "userId": "person-1789737883615",
    "date": "2026-10-23",
    "type": "Break",
    "startAt": "2026-10-23T06:11:46.337Z",
    "endAt": "2026-10-23T06:27:13.908Z",
    "durationMinutes": 1
  },
  {
    "id": "brk_1792728347089_8x5t",
    "userId": "person-1789738443448",
    "date": "2026-10-23",
    "type": "Break",
    "startAt": "2026-10-23T04:05:46.861Z",
    "endAt": "2026-10-23T04:05:49.265Z",
    "durationMinutes": 1
  },
  {
    "id": "brk_1792662317496_olk2",
    "userId": "person-1789549176116",
    "date": "2026-10-22",
    "type": "Lunch",
    "startAt": "2026-10-22T09:45:32.386Z",
    "endAt": "2026-10-22T10:27:36.432Z",
    "durationMinutes": 42
  },
  {
    "id": "brk_1792660354153_jdqr",
    "userId": "person-1789544813478",
    "date": "2026-10-22",
    "type": "Lunch",
    "startAt": "2026-10-22T09:11:51.149Z",
    "endAt": "2026-10-22T10:12:17.878Z",
    "durationMinutes": 1
  },
  {
    "id": "brk_1792656863381_m9im",
    "userId": "person-1789737883615",
    "date": "2026-10-22",
    "type": "Lunch",
    "startAt": "2026-10-22T08:14:23.271Z",
    "endAt": "2026-10-22T08:55:02.026Z",
    "durationMinutes": 41
  },
  {
    "id": "brk_1792649668354_0jx8",
    "userId": "person-1789544813478",
    "date": "2026-10-22",
    "type": "Break",
    "startAt": "2026-10-22T06:13:45.188Z",
    "endAt": "2026-10-22T06:29:17.884Z",
    "durationMinutes": 1
  },
  {
    "id": "brk_1792649578662_4ke6",
    "userId": "person-1789544851698",
    "date": "2026-10-22",
    "type": "Break",
    "startAt": "2026-10-22T06:12:57.651Z",
    "endAt": "2026-10-22T06:13:01.060Z",
    "durationMinutes": 1
  },
  {
    "id": "brk_1792644363201_ognm",
    "userId": "person-1789544851698",
    "date": "2026-10-22",
    "type": "Break",
    "startAt": "2026-10-22T04:46:02.306Z",
    "endAt": "2026-10-22T05:01:22.946Z",
    "durationMinutes": 1
  },
  {
    "id": "brk_1792644353913_1yo5",
    "userId": "usr_founder_eshwar",
    "date": "2026-10-22",
    "type": "Break",
    "startAt": "2026-10-22T04:45:53.017Z",
    "endAt": "2026-10-22T04:45:57.521Z",
    "durationMinutes": 1
  },
  {
    "id": "brk_1792586852787_rdrt",
    "userId": "person-1789737883615",
    "date": "2026-10-21",
    "type": "Break",
    "startAt": "2026-10-21T12:47:33.625Z",
    "endAt": "2026-10-21T13:06:58.325Z",
    "durationMinutes": 1
  },
  {
    "id": "brk_1792576823048_tu9r",
    "userId": "person-1789737883615",
    "date": "2026-10-21",
    "type": "Break",
    "startAt": "2026-10-21T10:00:23.648Z",
    "endAt": "2026-10-21T10:15:28.327Z",
    "durationMinutes": 15
  },
  {
    "id": "brk_1792399153035_4zxw",
    "userId": "person-1789737883615",
    "date": "2026-10-19",
    "type": "Lunch",
    "startAt": "2026-10-19T08:39:12.970Z",
    "endAt": "2026-10-19T14:54:12.9700000+05:30",
    "durationMinutes": 45
  },
  {
    "id": "brk_1792238832878_sqda",
    "userId": "person-1789544851698",
    "date": "2026-10-17",
    "type": "Break",
    "startAt": "2026-10-17T12:07:10.935Z",
    "endAt": "2026-10-17T17:52:10.9350000+05:30",
    "durationMinutes": 15
  },
  {
    "id": "brk_1792217802152_b4zg",
    "userId": "person-1789737883615",
    "date": "2026-10-17",
    "type": "Break",
    "startAt": "2026-10-17T06:16:43.003Z",
    "endAt": "2026-10-17T12:01:43.0030000+05:30",
    "durationMinutes": 15
  },
  {
    "id": "brk_1792146198920_1sk1",
    "userId": "person-1789738443448",
    "date": "2026-10-16",
    "type": "Lunch",
    "startAt": "2026-10-16T10:23:17.640Z",
    "endAt": "2026-10-16T16:38:17.6400000+05:30",
    "durationMinutes": 45
  },
  {
    "id": "brk_1792146016794_k824",
    "userId": "person-1789544851698",
    "date": "2026-10-16",
    "type": "Break",
    "startAt": "2026-10-16T10:20:15.798Z",
    "endAt": "2026-10-16T16:05:15.7980000+05:30",
    "durationMinutes": 15
  },
  {
    "id": "brk_1792129019798_6x7n",
    "userId": "person-1789737883615",
    "date": "2026-10-16",
    "type": "Break",
    "startAt": "2026-10-16T05:36:59.663Z",
    "endAt": "2026-10-16T11:21:59.6630000+05:30",
    "durationMinutes": 15
  },
  {
    "id": "brk_1792044224540_f9x0",
    "userId": "person-1789737883615",
    "date": "2026-10-15",
    "type": "Break",
    "startAt": "2026-10-15T06:03:45.065Z",
    "endAt": "2026-10-15T11:48:45.0650000+05:30",
    "durationMinutes": 15
  },
  {
    "id": "brk_1791964572921_o4hq",
    "userId": "person-1789737883615",
    "date": "2026-10-14",
    "type": "Lunch",
    "startAt": "2026-10-14T07:56:12.855Z",
    "endAt": "2026-10-14T14:11:12.8550000+05:30",
    "durationMinutes": 45
  },
  {
    "id": "brk_1791792133849_5rxn",
    "userId": "person-1789737883615",
    "date": "2026-10-12",
    "type": "Lunch",
    "startAt": "2026-10-12T08:02:13.780Z",
    "endAt": "2026-10-12T14:17:13.7800000+05:30",
    "durationMinutes": 45
  },
  {
    "id": "brk_1791792059128_bw3p",
    "userId": "person-1789544851698",
    "date": "2026-10-12",
    "type": "Lunch",
    "startAt": "2026-10-12T08:00:57.131Z",
    "endAt": "2026-10-12T14:15:57.1310000+05:30",
    "durationMinutes": 45
  },
  {
    "id": "brk_1791547111881_ezb2",
    "userId": "person-1789738156900",
    "date": "2026-10-09",
    "type": "Break",
    "startAt": "2026-10-09T11:58:32.835Z",
    "endAt": "2026-10-09T17:43:32.8350000+05:30",
    "durationMinutes": 15
  },
  {
    "id": "brk_1791544882592_sq3n",
    "userId": "person-1789544851698",
    "date": "2026-10-09",
    "type": "Break",
    "startAt": "2026-10-09T11:21:22.108Z",
    "endAt": "2026-10-09T17:06:22.1080000+05:30",
    "durationMinutes": 15
  },
  {
    "id": "brk_1791539983344_svdh",
    "userId": "person-1789544851698",
    "date": "2026-10-09",
    "type": "Break",
    "startAt": "2026-10-09T09:59:41.763Z",
    "endAt": "2026-10-09T15:44:41.7630000+05:30",
    "durationMinutes": 15
  },
  {
    "id": "brk_1791539923265_qgu7",
    "userId": "person-1789544851698",
    "date": "2026-10-09",
    "type": "Lunch",
    "startAt": "2026-10-09T09:58:41.708Z",
    "endAt": "2026-10-09T16:13:41.7080000+05:30",
    "durationMinutes": 45
  },
  {
    "id": "brk_1791539914540_2k4j",
    "userId": "person-1789544851698",
    "date": "2026-10-09",
    "type": "Lunch",
    "startAt": "2026-10-09T09:58:32.915Z",
    "endAt": "2026-10-09T16:13:32.9150000+05:30",
    "durationMinutes": 45
  },
  {
    "id": "brk_1791539851695_e7yg",
    "userId": "person-1789544851698",
    "date": "2026-10-09",
    "type": "Break",
    "startAt": "2026-10-09T09:57:30.124Z",
    "endAt": "2026-10-09T15:42:30.1240000+05:30",
    "durationMinutes": 15
  },
  {
    "id": "brk_1791539811323_x18j",
    "userId": "usr_founder_eshwar",
    "date": "2026-10-09",
    "type": "Lunch",
    "startAt": "2026-10-09T09:56:49.772Z",
    "endAt": "2026-10-09T16:11:49.7720000+05:30",
    "durationMinutes": 45
  },
  {
    "id": "brk_1791536673756_nnr4",
    "userId": "person-1789738156900",
    "date": "2026-10-09",
    "type": "Lunch",
    "startAt": "2026-10-09T09:04:34.739Z",
    "endAt": "2026-10-09T15:19:34.7390000+05:30",
    "durationMinutes": 45
  },
  {
    "id": "brk_1791536366543_v6jg",
    "userId": "person-1789737883615",
    "date": "2026-10-09",
    "type": "Lunch",
    "startAt": "2026-10-09T08:59:27.758Z",
    "endAt": "2026-10-09T15:14:27.7580000+05:30",
    "durationMinutes": 45
  },
  {
    "id": "brk_1791536393181_wblm",
    "userId": "person-1789544813478",
    "date": "2026-10-09",
    "type": "Lunch",
    "startAt": "2026-10-09T08:59:15.178Z",
    "endAt": "2026-10-09T15:14:15.1780000+05:30",
    "durationMinutes": 45
  },
  {
    "id": "brk_1791536328327_zis1",
    "userId": "person-1789549176116",
    "date": "2026-10-09",
    "type": "Lunch",
    "startAt": "2026-10-09T08:59:08.372Z",
    "endAt": "2026-10-09T15:14:08.3720000+05:30",
    "durationMinutes": 45
  },
  {
    "id": "brk_1791531707438_8shn",
    "userId": "person-1791175695081",
    "date": "2026-10-09",
    "type": "Lunch",
    "startAt": "2026-10-09T07:41:50.615Z",
    "endAt": "2026-10-09T13:56:50.6150000+05:30",
    "durationMinutes": 45
  },
  {
    "id": "brk_1791531700927_gsxx",
    "userId": "person-1789737923403",
    "date": "2026-10-09",
    "type": "Lunch",
    "startAt": "2026-10-09T07:41:40.669Z",
    "endAt": "2026-10-09T13:56:40.6690000+05:30",
    "durationMinutes": 45
  },
  {
    "id": "brk_1791526295888_xxbk",
    "userId": "person-1789738156900",
    "date": "2026-10-09",
    "type": "Break",
    "startAt": "2026-10-09T06:11:36.872Z",
    "endAt": "2026-10-09T11:56:36.8720000+05:30",
    "durationMinutes": 15
  },
  {
    "id": "brk_1791458760019_u6v2",
    "userId": "person-1789738156900",
    "date": "2026-10-08",
    "type": "Break",
    "startAt": "2026-10-08T11:26:00.079Z",
    "endAt": "2026-10-08T17:11:00.0790000+05:30",
    "durationMinutes": 15
  },
  {
    "id": "brk_1791452241396_56ii",
    "userId": "person-1789737923403",
    "date": "2026-10-08",
    "type": "Lunch",
    "startAt": "2026-10-08T09:37:21.037Z",
    "endAt": "2026-10-08T15:52:21.0370000+05:30",
    "durationMinutes": 45
  },
  {
    "id": "brk_1791452235310_o377",
    "userId": "person-1791175695081",
    "date": "2026-10-08",
    "type": "Lunch",
    "startAt": "2026-10-08T09:37:17.622Z",
    "endAt": "2026-10-08T15:52:17.6220000+05:30",
    "durationMinutes": 45
  },
  {
    "id": "brk_1791447956025_d3tm",
    "userId": "person-1789544813478",
    "date": "2026-10-08",
    "type": "Lunch",
    "startAt": "2026-10-08T08:25:18.593Z",
    "endAt": "2026-10-08T14:40:18.5930000+05:30",
    "durationMinutes": 45
  },
  {
    "id": "brk_1791447657300_dokz",
    "userId": "person-1789549176116",
    "date": "2026-10-08",
    "type": "Lunch",
    "startAt": "2026-10-08T08:21:17.570Z",
    "endAt": "2026-10-08T14:36:17.5700000+05:30",
    "durationMinutes": 45
  },
  {
    "id": "brk_1791447632494_mggz",
    "userId": "person-1789738156900",
    "date": "2026-10-08",
    "type": "Lunch",
    "startAt": "2026-10-08T08:20:33.004Z",
    "endAt": "2026-10-08T14:35:33.0040000+05:30",
    "durationMinutes": 45
  },
  {
    "id": "brk_1791447558366_zuzy",
    "userId": "person-1789737883615",
    "date": "2026-10-08",
    "type": "Lunch",
    "startAt": "2026-10-08T08:19:19.756Z",
    "endAt": "2026-10-08T14:34:19.7560000+05:30",
    "durationMinutes": 45
  },
  {
    "id": "brk_1791446533062_vaz8",
    "userId": "person-1789737883615",
    "date": "2026-10-08",
    "type": "Lunch",
    "startAt": "2026-10-08T08:02:14.411Z",
    "endAt": "2026-10-08T14:17:14.4110000+05:30",
    "durationMinutes": 45
  },
  {
    "id": "brk_1791438764531_hjm9",
    "userId": "person-1789737883615",
    "date": "2026-10-08",
    "type": "Break",
    "startAt": "2026-10-08T05:52:45.675Z",
    "endAt": "2026-10-08T11:37:45.6750000+05:30",
    "durationMinutes": 15
  },
  {
    "id": "brk_1791438496562_dmpz",
    "userId": "person-1789738156900",
    "date": "2026-10-08",
    "type": "Break",
    "startAt": "2026-10-08T05:48:17.110Z",
    "endAt": "2026-10-08T11:33:17.1100000+05:30",
    "durationMinutes": 15
  },
  {
    "id": "brk_1791438393836_dwbc",
    "userId": "person-1789544813478",
    "date": "2026-10-08",
    "type": "Break",
    "startAt": "2026-10-08T05:45:56.342Z",
    "endAt": "2026-10-08T11:30:56.3420000+05:30",
    "durationMinutes": 15
  },
  {
    "id": "brk_1791438351484_ec6i",
    "userId": "person-1789544916637",
    "date": "2026-10-08",
    "type": "Break",
    "startAt": "2026-10-08T05:45:50.302Z",
    "endAt": "2026-10-08T11:30:50.3020000+05:30",
    "durationMinutes": 15
  },
  {
    "id": "brk_1791438335020_pxpx",
    "userId": "person-1789738443448",
    "date": "2026-10-08",
    "type": "Break",
    "startAt": "2026-10-08T05:45:31.607Z",
    "endAt": "2026-10-08T11:30:31.6070000+05:30",
    "durationMinutes": 15
  },
  {
    "id": "brk_1791363890101_w9q7",
    "userId": "person-1789549176116",
    "date": "2026-10-07",
    "type": "Lunch",
    "startAt": "2026-10-07T09:05:11.509Z",
    "endAt": "2026-10-07T15:20:11.5090000+05:30",
    "durationMinutes": 45
  },
  {
    "id": "brk_1791363898750_uh3e",
    "userId": "person-1789738443448",
    "date": "2026-10-07",
    "type": "Break",
    "startAt": "2026-10-07T09:04:57.762Z",
    "endAt": "2026-10-07T14:49:57.7620000+05:30",
    "durationMinutes": 15
  },
  {
    "id": "brk_1791363888920_7enz",
    "userId": "person-1789738156900",
    "date": "2026-10-07",
    "type": "Lunch",
    "startAt": "2026-10-07T09:04:50.154Z",
    "endAt": "2026-10-07T15:19:50.1540000+05:30",
    "durationMinutes": 45
  },
  {
    "id": "brk_1791363886897_epzb",
    "userId": "person-1789544916637",
    "date": "2026-10-07",
    "type": "Lunch",
    "startAt": "2026-10-07T09:04:46.454Z",
    "endAt": "2026-10-07T15:19:46.4540000+05:30",
    "durationMinutes": 45
  },
  {
    "id": "brk_1791363863452_abzm",
    "userId": "person-1789737883615",
    "date": "2026-10-07",
    "type": "Lunch",
    "startAt": "2026-10-07T09:04:23.386Z",
    "endAt": "2026-10-07T15:19:23.3860000+05:30",
    "durationMinutes": 45
  },
  {
    "id": "brk_1791358806464_olru",
    "userId": "person-1791175695081",
    "date": "2026-10-07",
    "type": "Break",
    "startAt": "2026-10-07T07:40:06.781Z",
    "endAt": "2026-10-07T13:25:06.7810000+05:30",
    "durationMinutes": 15
  },
  {
    "id": "brk_1791358797881_l580",
    "userId": "person-1791175695081",
    "date": "2026-10-07",
    "type": "Break",
    "startAt": "2026-10-07T07:39:58.206Z",
    "endAt": "2026-10-07T13:24:58.2060000+05:30",
    "durationMinutes": 15
  },
  {
    "id": "brk_1791355202162_k7xi",
    "userId": "person-1791175695081",
    "date": "2026-10-07",
    "type": "Break",
    "startAt": "2026-10-07T06:40:02.517Z",
    "endAt": "2026-10-07T12:25:02.5170000+05:30",
    "durationMinutes": 15
  },
  {
    "id": "brk_1791355193889_q309",
    "userId": "person-1791175695081",
    "date": "2026-10-07",
    "type": "Break",
    "startAt": "2026-10-07T06:39:54.260Z",
    "endAt": "2026-10-07T12:24:54.2600000+05:30",
    "durationMinutes": 15
  },
  {
    "id": "brk_1791355182698_x2ml",
    "userId": "person-1791175695081",
    "date": "2026-10-07",
    "type": "Break",
    "startAt": "2026-10-07T06:39:43.044Z",
    "endAt": "2026-10-07T12:24:43.0440000+05:30",
    "durationMinutes": 15
  },
  {
    "id": "brk_1791352225586_d9eo",
    "userId": "person-1789738443448",
    "date": "2026-10-07",
    "type": "Break",
    "startAt": "2026-10-07T05:50:24.951Z",
    "endAt": "2026-10-07T11:35:24.9510000+05:30",
    "durationMinutes": 15
  },
  {
    "id": "brk_1791352220844_fw8u",
    "userId": "person-1789544916637",
    "date": "2026-10-07",
    "type": "Break",
    "startAt": "2026-10-07T05:50:20.172Z",
    "endAt": "2026-10-07T11:35:20.1720000+05:30",
    "durationMinutes": 15
  },
  {
    "id": "brk_1791286035380_n27t",
    "userId": "person-1789738443448",
    "date": "2026-10-06",
    "type": "Lunch",
    "startAt": "2026-10-06T11:27:14.068Z",
    "endAt": "2026-10-06T17:42:14.0680000+05:30",
    "durationMinutes": 45
  },
  {
    "id": "brk_1791286025859_oyqg",
    "userId": "person-1789738443448",
    "date": "2026-10-06",
    "type": "Lunch",
    "startAt": "2026-10-06T11:27:04.524Z",
    "endAt": "2026-10-06T17:42:04.5240000+05:30",
    "durationMinutes": 45
  },
  {
    "id": "brk_1791285877592_6aeu",
    "userId": "person-1789738443448",
    "date": "2026-10-06",
    "type": "Break",
    "startAt": "2026-10-06T11:24:36.260Z",
    "endAt": "2026-10-06T17:09:36.2600000+05:30",
    "durationMinutes": 15
  },
  {
    "id": "brk_1791278517077_58ab",
    "userId": "person-1789549176116",
    "date": "2026-10-06",
    "type": "Lunch",
    "startAt": "2026-10-06T09:22:18.640Z",
    "endAt": "2026-10-06T15:37:18.6400000+05:30",
    "durationMinutes": 45
  },
  {
    "id": "brk_1791278536286_qojn",
    "userId": "person-1789737883615",
    "date": "2026-10-06",
    "type": "Lunch",
    "startAt": "2026-10-06T09:22:18.402Z",
    "endAt": "2026-10-06T15:37:18.4020000+05:30",
    "durationMinutes": 45
  },
  {
    "id": "brk_1791278526815_7vie",
    "userId": "person-1789738156900",
    "date": "2026-10-06",
    "type": "Lunch",
    "startAt": "2026-10-06T09:22:06.959Z",
    "endAt": "2026-10-06T15:37:06.9590000+05:30",
    "durationMinutes": 45
  },
  {
    "id": "brk_1791278524972_3dn8",
    "userId": "person-1789544813478",
    "date": "2026-10-06",
    "type": "Lunch",
    "startAt": "2026-10-06T09:21:24.133Z",
    "endAt": "2026-10-06T15:36:24.1330000+05:30",
    "durationMinutes": 45
  },
  {
    "id": "brk_1791276507489_7nst",
    "userId": "person-1791175695081",
    "date": "2026-10-06",
    "type": "Lunch",
    "startAt": "2026-10-06T08:49:04.909Z",
    "endAt": "2026-10-06T15:04:04.9090000+05:30",
    "durationMinutes": 45
  },
  {
    "id": "brk_1791266980266_pc4z",
    "userId": "person-1791175695081",
    "date": "2026-10-06",
    "type": "Break",
    "startAt": "2026-10-06T06:10:17.555Z",
    "endAt": "2026-10-06T11:55:17.5550000+05:30",
    "durationMinutes": 15
  },
  {
    "id": "brk_1791266933034_7xjx",
    "userId": "person-1791175695081",
    "date": "2026-10-06",
    "type": "Break",
    "startAt": "2026-10-06T06:09:30.533Z",
    "endAt": "2026-10-06T11:54:30.5330000+05:30",
    "durationMinutes": 15
  },
  {
    "id": "brk_1791264176454_3vkk",
    "userId": "person-1789738443448",
    "date": "2026-10-06",
    "type": "Break",
    "startAt": "2026-10-06T05:22:55.860Z",
    "endAt": "2026-10-06T11:07:55.8600000+05:30",
    "durationMinutes": 15
  },
  {
    "id": "brk_1791264169413_ah83",
    "userId": "person-1789544916637",
    "date": "2026-10-06",
    "type": "Break",
    "startAt": "2026-10-06T05:22:47.814Z",
    "endAt": "2026-10-06T11:07:47.8140000+05:30",
    "durationMinutes": 15
  },
  {
    "id": "brk_1791264088403_8zu2",
    "userId": "person-1789738156900",
    "date": "2026-10-06",
    "type": "Break",
    "startAt": "2026-10-06T05:21:28.616Z",
    "endAt": "2026-10-06T11:06:28.6160000+05:30",
    "durationMinutes": 15
  },
  {
    "id": "brk_1791264035131_ewd4",
    "userId": "person-1789738156900",
    "date": "2026-10-06",
    "type": "Break",
    "startAt": "2026-10-06T05:20:35.310Z",
    "endAt": "2026-10-06T11:05:35.3100000+05:30",
    "durationMinutes": 15
  },
  {
    "id": "brk_1791264050887_orgg",
    "userId": "person-1789544813478",
    "date": "2026-10-06",
    "type": "Break",
    "startAt": "2026-10-06T05:20:13.348Z",
    "endAt": "2026-10-06T11:05:13.3480000+05:30",
    "durationMinutes": 15
  },
  {
    "id": "brk_1791206313362_ad1a",
    "userId": "person-1789737883615",
    "date": "2026-10-05",
    "type": "Break",
    "startAt": "2026-10-05T13:18:34.264Z",
    "endAt": "2026-10-05T19:03:34.2640000+05:30",
    "durationMinutes": 15
  }
];

export const MIGRATED_ACTIVITIES: Activity[] = [
  {
    "id": "activity-1793188293557",
    "workId": "system",
    "actorId": "person-1789549176116",
    "message": "Auto-logged out: Break completed (1m used)",
    "createdAt": "2026-10-28T11:51:33.557Z",
    "tone": "warning"
  },
  {
    "id": "activity-1793187354422",
    "workId": "system",
    "actorId": "person-1789549176116",
    "message": "started Break (15m session, 33m total pool left)",
    "createdAt": "2026-10-28T11:35:54.422Z",
    "tone": "warning"
  },
  {
    "id": "activity-1793181036362",
    "workId": "system",
    "actorId": "person-1789544813478",
    "message": "returned early from Lunch (52m used, 0m pool carried over)",
    "createdAt": "2026-10-28T09:50:36.362Z",
    "tone": "success"
  },
  {
    "id": "activity-1793180047285",
    "workId": "system",
    "actorId": "person-1789549176116",
    "message": "returned early from Lunch (42m used, 0m pool carried over)",
    "createdAt": "2026-10-28T09:34:07.285Z",
    "tone": "success"
  },
  {
    "id": "activity-1793179638928",
    "workId": "work-1792648233049",
    "actorId": "person-1789737923403",
    "message": "started execution on on Balagere Posters ",
    "createdAt": "2026-10-28T09:27:18.928Z",
    "tone": "normal"
  },
  {
    "id": "activity-1793177904100",
    "workId": "system",
    "actorId": "person-1789544813478",
    "message": "started Lunch (60m session, 75m total pool left)",
    "createdAt": "2026-10-28T08:58:24.100Z",
    "tone": "warning"
  },
  {
    "id": "activity-1793177549618",
    "workId": "system",
    "actorId": "person-1789549176116",
    "message": "started Lunch (60m session, 75m total pool left)",
    "createdAt": "2026-10-28T08:52:29.618Z",
    "tone": "warning"
  },
  {
    "id": "activity-1793177087010",
    "workId": "system",
    "actorId": "person-1789738156900",
    "message": "returned early from Lunch (28m used, 19m pool carried over)",
    "createdAt": "2026-10-28T08:44:47.010Z",
    "tone": "success"
  },
  {
    "id": "activity-1793175379059",
    "workId": "system",
    "actorId": "person-1789738156900",
    "message": "started Lunch (60m session, 75m total pool left)",
    "createdAt": "2026-10-28T08:16:19.059Z",
    "tone": "warning"
  },
  {
    "id": "activity-1793167597457",
    "workId": "work-1789817812002",
    "actorId": "person-1789738156900",
    "message": "approved task and forwarded to Founder for final sign-off on Change Mackerel to Coastal Food",
    "createdAt": "2026-10-28T06:06:37.457Z",
    "tone": "normal"
  },
  {
    "id": "activity-1793167537417",
    "workId": "work-1789817890821",
    "actorId": "person-1789738156900",
    "message": "assigned Video - 2  to Tejas Govi",
    "createdAt": "2026-10-28T06:05:37.417Z",
    "tone": "normal"
  },
  {
    "id": "activity-1793167158724",
    "workId": "work-1792648233049",
    "actorId": "person-1789738156900",
    "message": "assigned Nail stories  to Meena M",
    "createdAt": "2026-10-28T05:59:18.724Z",
    "tone": "normal"
  },
  {
    "id": "activity-1793167072117",
    "workId": "work-1792648233049",
    "actorId": "person-1789738156900",
    "message": "assigned Balagere Posters  to Supreeth BK",
    "createdAt": "2026-10-28T05:57:52.117Z",
    "tone": "normal"
  },
  {
    "id": "activity-1793167017495",
    "workId": "work-1789796033110",
    "actorId": "person-1789737883615",
    "message": "completed task on linkedin carousel ",
    "createdAt": "2026-10-28T05:56:57.495Z",
    "tone": "normal"
  },
  {
    "id": "activity-1793165814486",
    "workId": "work-1789817765948",
    "actorId": "person-1789737923403",
    "message": "completed task on Poster - Transformation Package ",
    "createdAt": "2026-10-28T05:36:54.486Z",
    "tone": "normal"
  },
  {
    "id": "activity-1793165807918",
    "workId": "work-1789817738758",
    "actorId": "person-1789737923403",
    "message": "completed task on Beginners Transform ",
    "createdAt": "2026-10-28T05:36:47.918Z",
    "tone": "normal"
  },
  {
    "id": "activity-1793165806738",
    "workId": "work-1789817738758",
    "actorId": "person-1789737923403",
    "message": "completed task on Beginners Transform ",
    "createdAt": "2026-10-28T05:36:46.738Z",
    "tone": "normal"
  },
  {
    "id": "activity-1793165805003",
    "workId": "work-1789817738758",
    "actorId": "person-1789737923403",
    "message": "completed task on Beginners Transform ",
    "createdAt": "2026-10-28T05:36:45.003Z",
    "tone": "normal"
  },
  {
    "id": "activity-1793165798376",
    "workId": "work-1789817738758",
    "actorId": "person-1789737923403",
    "message": "completed task on Poster - Transformation  Package ",
    "createdAt": "2026-10-28T05:36:38.376Z",
    "tone": "normal"
  },
  {
    "id": "activity-1793165797713",
    "workId": "work-1789817738758",
    "actorId": "person-1789737923403",
    "message": "completed task on Poster - Transformation  Package ",
    "createdAt": "2026-10-28T05:36:37.713Z",
    "tone": "normal"
  },
  {
    "id": "activity-1793165791607",
    "workId": "work-1789817765948",
    "actorId": "person-1789737923403",
    "message": "completed task on Poster - Transformation Package ",
    "createdAt": "2026-10-28T05:36:31.607Z",
    "tone": "normal"
  },
  {
    "id": "activity-1793165783287",
    "workId": "work-1789817812002",
    "actorId": "person-1789737923403",
    "message": "completed task on Change Mackerel to Coastal Food",
    "createdAt": "2026-10-28T05:36:23.287Z",
    "tone": "normal"
  },
  {
    "id": "activity-1793165780923",
    "workId": "work-1789817812002",
    "actorId": "person-1789737923403",
    "message": "completed task on Change Mackerel to Coastal Food",
    "createdAt": "2026-10-28T05:36:20.923Z",
    "tone": "normal"
  },
  {
    "id": "activity-1793162232721",
    "workId": "work-1789796051170",
    "actorId": "person-1789544813478",
    "message": "approved task and forwarded to Founder on aura video editing ",
    "createdAt": "2026-10-28T04:37:12.721Z",
    "tone": "normal"
  },
  {
    "id": "activity-1793162230652",
    "workId": "work-1789796051170",
    "actorId": "person-1789544813478",
    "message": "approved task and forwarded to Founder on aura video editing ",
    "createdAt": "2026-10-28T04:37:10.652Z",
    "tone": "normal"
  },
  {
    "id": "activity-1793162229577",
    "workId": "work-1789795957113",
    "actorId": "person-1789544813478",
    "message": "approved task and forwarded to Founder on client review edit",
    "createdAt": "2026-10-28T04:37:09.577Z",
    "tone": "normal"
  },
  {
    "id": "activity-1793162226940",
    "workId": "work-1789795821322",
    "actorId": "person-1789544813478",
    "message": "approved task and forwarded to Founder on edit 3 videos from the drive. 1. script talking 2. one trainer explaining a yoga 3. a yoga edit with trainer and model with song",
    "createdAt": "2026-10-28T04:37:06.940Z",
    "tone": "normal"
  },
  {
    "id": "activity-1793162224396",
    "workId": "work-1789796075803",
    "actorId": "person-1789544813478",
    "message": "approved task and forwarded to Founder on video editing ",
    "createdAt": "2026-10-28T04:37:04.396Z",
    "tone": "normal"
  },
  {
    "id": "activity-1793162222618",
    "workId": "work-1789981516632",
    "actorId": "person-1789544813478",
    "message": "approved task and forwarded to Founder on 1 video edit ",
    "createdAt": "2026-10-28T04:37:02.618Z",
    "tone": "normal"
  },
  {
    "id": "activity-1793162220254",
    "workId": "work-1789981428986",
    "actorId": "person-1789544813478",
    "message": "approved task and forwarded to Founder on video from the previous folder ",
    "createdAt": "2026-10-28T04:37:00.254Z",
    "tone": "normal"
  },
  {
    "id": "activity-1793162217923",
    "workId": "work-1789796075803",
    "actorId": "person-1789544813478",
    "message": "approved task and forwarded to Founder on men offer changes ",
    "createdAt": "2026-10-28T04:36:57.923Z",
    "tone": "normal"
  },
  {
    "id": "activity-1793162216305",
    "workId": "work-1789796075803",
    "actorId": "person-1789544813478",
    "message": "approved task and forwarded to Founder on men offer changes ",
    "createdAt": "2026-10-28T04:36:56.305Z",
    "tone": "normal"
  },
  {
    "id": "activity-1793162215289",
    "workId": "work-1789796051170",
    "actorId": "person-1789544813478",
    "message": "approved task and forwarded to Founder on one video edit ",
    "createdAt": "2026-10-28T04:36:55.289Z",
    "tone": "normal"
  },
  {
    "id": "activity-1793162213237",
    "workId": "work-1789795912456",
    "actorId": "person-1789544813478",
    "message": "approved task and forwarded to Founder on raagi video editing ",
    "createdAt": "2026-10-28T04:36:53.237Z",
    "tone": "normal"
  },
  {
    "id": "activity-1793162205179",
    "workId": "work-1789796033110",
    "actorId": "person-1789544813478",
    "message": "approved task and forwarded to Founder on drive: https://drive.google.com/drive/u/0/folders/1689Zducvv3T0Ol26RggyJ3IFRdIg2gyL",
    "createdAt": "2026-10-28T04:36:45.180Z",
    "tone": "normal"
  },
  {
    "id": "activity-1793162202749",
    "workId": "work-1789795935505",
    "actorId": "person-1789544813478",
    "message": "approved task and forwarded to Founder on nishit talking video music changes",
    "createdAt": "2026-10-28T04:36:42.749Z",
    "tone": "normal"
  },
  {
    "id": "activity-1793162201234",
    "workId": "work-1789795935505",
    "actorId": "person-1789544813478",
    "message": "approved task and forwarded to Founder on nishit talking video music changes",
    "createdAt": "2026-10-28T04:36:41.234Z",
    "tone": "normal"
  },
  {
    "id": "activity-1793162197808",
    "workId": "work-1789796075803",
    "actorId": "person-1789544813478",
    "message": "approved task and forwarded to Founder on offer posters x4 ",
    "createdAt": "2026-10-28T04:36:37.808Z",
    "tone": "normal"
  },
  {
    "id": "activity-1793162188297",
    "workId": "work-1789796033110",
    "actorId": "person-1789544813478",
    "message": "assigned linkedin carousel  to Meena M",
    "createdAt": "2026-10-28T04:36:28.297Z",
    "tone": "normal"
  },
  {
    "id": "activity-1793161645481",
    "workId": "work-1792648248405",
    "actorId": "person-1789544813478",
    "message": "assigned 5 pending videos  to Tejas Govi",
    "createdAt": "2026-10-28T04:27:25.481Z",
    "tone": "normal"
  },
  {
    "id": "activity-1793161627302",
    "workId": "work-1789796033110",
    "actorId": "person-1789544813478",
    "message": "assigned complete 3 videos from the references shared to Midhlaj M T P",
    "createdAt": "2026-10-28T04:27:07.302Z",
    "tone": "normal"
  },
  {
    "id": "activity-1793109351593",
    "workId": "system",
    "actorId": "person-1789544813478",
    "message": "Completed full 9-hour shift. Automatically logged out for the day.",
    "createdAt": "2026-10-27T13:55:51.593Z",
    "tone": "success"
  },
  {
    "id": "activity-1793108141699",
    "workId": "system",
    "actorId": "person-1789737883615",
    "message": "EMERGENCY EARLY LOGOUT (UNAPPROVED by Founder/HR) (8h 51m worked). No reason provided",
    "createdAt": "2026-10-27T13:35:41.699Z",
    "tone": "danger"
  },
  {
    "id": "activity-1793096052564",
    "workId": "system",
    "actorId": "person-1789544813478",
    "message": "returned early from Lunch (54m used, 0m pool carried over)",
    "createdAt": "2026-10-27T10:14:12.564Z",
    "tone": "success"
  },
  {
    "id": "activity-1793095229476",
    "workId": "system",
    "actorId": "person-1789737883615",
    "message": "returned early from Lunch (57m used, 0m pool carried over)",
    "createdAt": "2026-10-27T10:00:29.476Z",
    "tone": "success"
  },
  {
    "id": "activity-1793092824901",
    "workId": "system",
    "actorId": "person-1789544813478",
    "message": "started Lunch (60m session, 75m total pool left)",
    "createdAt": "2026-10-27T09:20:24.901Z",
    "tone": "warning"
  },
  {
    "id": "activity-1793092507810",
    "workId": "work-1789796016154",
    "actorId": "person-1789549176116",
    "message": "submitted work for manager review on Carousel ",
    "createdAt": "2026-10-27T09:15:07.810Z",
    "tone": "normal"
  },
  {
    "id": "activity-1793092507707",
    "workId": "work-1789796016154",
    "actorId": "person-1789549176116",
    "message": "started work on Carousel ",
    "createdAt": "2026-10-27T09:15:07.707Z",
    "tone": "normal"
  },
  {
    "id": "activity-1793092348369",
    "workId": "system",
    "actorId": "person-1789549176116",
    "message": "returned early from Lunch (30m used, 15m pool carried over)",
    "createdAt": "2026-10-27T09:12:28.369Z",
    "tone": "success"
  },
  {
    "id": "activity-1793091803094",
    "workId": "system",
    "actorId": "person-1789737883615",
    "message": "started Lunch (60m session, 75m total pool left)",
    "createdAt": "2026-10-27T09:03:23.094Z",
    "tone": "warning"
  },
  {
    "id": "activity-1793090537957",
    "workId": "system",
    "actorId": "person-1789549176116",
    "message": "started Lunch (60m session, 75m total pool left)",
    "createdAt": "2026-10-27T08:42:17.957Z",
    "tone": "warning"
  },
  {
    "id": "activity-1793082469929",
    "workId": "work-1789817695400",
    "actorId": "person-1789738156900",
    "message": "assigned Poster  to Supreeth BK",
    "createdAt": "2026-10-27T06:27:49.929Z",
    "tone": "normal"
  },
  {
    "id": "activity-1793079188106",
    "workId": "work-1789796016154",
    "actorId": "person-1789738156900",
    "message": "assigned Carousel  to Meena M",
    "createdAt": "2026-10-27T05:33:08.106Z",
    "tone": "normal"
  },
  {
    "id": "activity-1793021747476",
    "workId": "system",
    "actorId": "person-1789737883615",
    "message": "EMERGENCY EARLY LOGOUT (UNAPPROVED by Founder/HR) (8h 49m worked). No reason provided",
    "createdAt": "2026-10-26T13:35:47.476Z",
    "tone": "danger"
  },
  {
    "id": "activity-1793020693226",
    "workId": "system",
    "actorId": "person-1789737923403",
    "message": "Completed full 9-hour shift. Automatically logged out for the day.",
    "createdAt": "2026-10-26T13:18:13.226Z",
    "tone": "success"
  },
  {
    "id": "activity-1793018042246",
    "workId": "system",
    "actorId": "person-1789737923403",
    "message": "returned early from Lunch (58m used, 0m pool carried over)",
    "createdAt": "2026-10-26T12:34:02.246Z",
    "tone": "success"
  },
  {
    "id": "activity-1793014567524",
    "workId": "system",
    "actorId": "person-1789737923403",
    "message": "started Lunch (60m session, 75m total pool left)",
    "createdAt": "2026-10-26T11:36:07.524Z",
    "tone": "warning"
  },
  {
    "id": "activity-1793008118367",
    "workId": "system",
    "actorId": "person-1789738156900",
    "message": "Auto-logged out: Lunch completed (1m used)",
    "createdAt": "2026-10-26T09:48:38.367Z",
    "tone": "warning"
  },
  {
    "id": "activity-1793006927431",
    "workId": "system",
    "actorId": "person-1789544813478",
    "message": "returned early from Lunch (46m used, 0m pool carried over)",
    "createdAt": "2026-10-26T09:28:47.431Z",
    "tone": "success"
  },
  {
    "id": "activity-1793005989493",
    "workId": "system",
    "actorId": "person-1789549176116",
    "message": "returned early from Lunch (26m used, 23m pool carried over)",
    "createdAt": "2026-10-26T09:13:09.493Z",
    "tone": "success"
  },
  {
    "id": "activity-1793004500006",
    "workId": "system",
    "actorId": "person-1789738156900",
    "message": "started Lunch (60m session, 75m total pool left)",
    "createdAt": "2026-10-26T08:48:20.006Z",
    "tone": "warning"
  },
  {
    "id": "activity-1793004439303",
    "workId": "system",
    "actorId": "person-1789549176116",
    "message": "started Lunch (60m session, 75m total pool left)",
    "createdAt": "2026-10-26T08:47:19.303Z",
    "tone": "warning"
  },
  {
    "id": "activity-1793004153986",
    "workId": "system",
    "actorId": "person-1789544813478",
    "message": "started Lunch (60m session, 75m total pool left)",
    "createdAt": "2026-10-26T08:42:33.986Z",
    "tone": "warning"
  },
  {
    "id": "activity-1792848371513",
    "workId": "system",
    "actorId": "person-1789737883615",
    "message": "EMERGENCY EARLY LOGOUT (UNAPPROVED by Founder/HR) (4h 54m worked). No reason provided",
    "createdAt": "2026-10-24T13:26:11.513Z",
    "tone": "danger"
  },
  {
    "id": "activity-1792847077221",
    "workId": "system",
    "actorId": "person-1789544851698",
    "message": "EMERGENCY EARLY LOGOUT (UNAPPROVED by Founder/HR) (0h 0m worked). No reason provided",
    "createdAt": "2026-10-24T13:04:37.221Z",
    "tone": "danger"
  },
  {
    "id": "activity-1792762641907",
    "workId": "system",
    "actorId": "person-1789737883615",
    "message": "EMERGENCY EARLY LOGOUT (UNAPPROVED by Founder/HR) (8h 42m worked). No reason provided",
    "createdAt": "2026-10-23T13:37:21.907Z",
    "tone": "danger"
  },
  {
    "id": "activity-1792762240360",
    "workId": "system",
    "actorId": "person-1789549176116",
    "message": "Completed full 9-hour shift. Automatically logged out for the day.",
    "createdAt": "2026-10-23T13:30:40.360Z",
    "tone": "success"
  },
  {
    "id": "activity-1792761974632",
    "workId": "system",
    "actorId": "person-1789738156900",
    "message": "EMERGENCY EARLY LOGOUT (UNAPPROVED by Founder/HR) (0h 0m worked). No reason provided",
    "createdAt": "2026-10-23T13:26:14.632Z",
    "tone": "danger"
  },
  {
    "id": "activity-1792761858411",
    "workId": "system",
    "actorId": "person-1789737923403",
    "message": "Completed full 9-hour shift. Automatically logged out for the day.",
    "createdAt": "2026-10-23T13:24:18.411Z",
    "tone": "success"
  },
  {
    "id": "activity-1792750139056",
    "workId": "system",
    "actorId": "person-1789544813478",
    "message": "Auto-logged out: Lunch completed (1m used)",
    "createdAt": "2026-10-23T10:08:59.056Z",
    "tone": "warning"
  },
  {
    "id": "activity-1792747370605",
    "workId": "system",
    "actorId": "person-1789737883615",
    "message": "returned early from Lunch (48m used, 0m pool carried over)",
    "createdAt": "2026-10-23T09:22:50.605Z",
    "tone": "success"
  },
  {
    "id": "activity-1792746492465",
    "workId": "system",
    "actorId": "person-1789544813478",
    "message": "started Lunch (60m session, 75m total pool left)",
    "createdAt": "2026-10-23T09:08:12.465Z",
    "tone": "warning"
  },
  {
    "id": "activity-1792745178414",
    "workId": "system",
    "actorId": "person-1789549176116",
    "message": "returned early from Lunch (25m used, 25m pool carried over)",
    "createdAt": "2026-10-23T08:46:18.414Z",
    "tone": "success"
  },
  {
    "id": "activity-1792744484425",
    "workId": "system",
    "actorId": "person-1789737883615",
    "message": "started Lunch (60m session, 74m total pool left)",
    "createdAt": "2026-10-23T08:34:44.425Z",
    "tone": "warning"
  },
  {
    "id": "activity-1792743688751",
    "workId": "system",
    "actorId": "person-1789549176116",
    "message": "started Lunch (60m session, 75m total pool left)",
    "createdAt": "2026-10-23T08:21:28.751Z",
    "tone": "warning"
  },
  {
    "id": "activity-1792736834325",
    "workId": "system",
    "actorId": "person-1789737883615",
    "message": "Auto-logged out: Break completed (1m used)",
    "createdAt": "2026-10-23T06:27:14.325Z",
    "tone": "warning"
  },
  {
    "id": "activity-1792735906637",
    "workId": "system",
    "actorId": "person-1789737883615",
    "message": "started Break (15m session, 75m total pool left)",
    "createdAt": "2026-10-23T06:11:46.638Z",
    "tone": "warning"
  },
  {
    "id": "activity-1792732132067",
    "workId": "system",
    "actorId": "person-1789555841194",
    "message": "EMERGENCY EARLY LOGOUT (UNAPPROVED by Founder/HR) (0h 0m worked). No reason provided",
    "createdAt": "2026-10-23T05:08:52.067Z",
    "tone": "danger"
  },
  {
    "id": "activity-1792728349726",
    "workId": "system",
    "actorId": "person-1789738443448",
    "message": "returned early from Break (1m used, 74m pool carried over)",
    "createdAt": "2026-10-23T04:05:49.726Z",
    "tone": "success"
  },
  {
    "id": "activity-1792728347412",
    "workId": "system",
    "actorId": "person-1789738443448",
    "message": "started Break (15m session, 75m total pool left)",
    "createdAt": "2026-10-23T04:05:47.412Z",
    "tone": "warning"
  },
  {
    "id": "activity-1792676063457",
    "workId": "system",
    "actorId": "person-1789737883615",
    "message": "Completed full 9-hour shift. Automatically logged out for the day.",
    "createdAt": "2026-10-22T13:34:23.457Z",
    "tone": "success"
  },
  {
    "id": "activity-1792675902511",
    "workId": "system",
    "actorId": "person-1789549176116",
    "message": "Completed full 9-hour shift. Automatically logged out for the day.",
    "createdAt": "2026-10-22T13:31:42.511Z",
    "tone": "success"
  },
  {
    "id": "activity-1792673867717",
    "workId": "work-1789796075803",
    "actorId": "person-1789737923403",
    "message": "submitted work for manager review on offer posters x4 ",
    "createdAt": "2026-10-22T12:57:47.717Z",
    "tone": "normal"
  },
  {
    "id": "activity-1792673867596",
    "workId": "work-1789796075803",
    "actorId": "person-1789737923403",
    "message": "started work on offer posters x4 ",
    "createdAt": "2026-10-22T12:57:47.596Z",
    "tone": "normal"
  },
  {
    "id": "activity-1792664843056",
    "workId": "system",
    "actorId": "person-1789549176116",
    "message": "returned early from Lunch (42m used, 0m pool carried over)",
    "createdAt": "2026-10-22T10:27:23.056Z",
    "tone": "success"
  },
  {
    "id": "activity-1792663981506",
    "workId": "system",
    "actorId": "person-1789544813478",
    "message": "Auto-logged out: Lunch completed (1m used)",
    "createdAt": "2026-10-22T10:13:01.506Z",
    "tone": "warning"
  },
  {
    "id": "activity-1792662318118",
    "workId": "system",
    "actorId": "person-1789549176116",
    "message": "started Lunch (60m session, 75m total pool left)",
    "createdAt": "2026-10-22T09:45:18.118Z",
    "tone": "warning"
  },
  {
    "id": "activity-1792660354676",
    "workId": "system",
    "actorId": "person-1789544813478",
    "message": "started Lunch (60m session, 74m total pool left)",
    "createdAt": "2026-10-22T09:12:34.676Z",
    "tone": "warning"
  },
  {
    "id": "activity-1792659302753",
    "workId": "system",
    "actorId": "person-1789737883615",
    "message": "returned early from Lunch (41m used, 0m pool carried over)",
    "createdAt": "2026-10-22T08:55:02.753Z",
    "tone": "success"
  },
  {
    "id": "activity-1792656863944",
    "workId": "system",
    "actorId": "person-1789737883615",
    "message": "started Lunch (60m session, 75m total pool left)",
    "createdAt": "2026-10-22T08:14:23.944Z",
    "tone": "warning"
  },
  {
    "id": "activity-1792653502215",
    "workId": "work-1789795935505",
    "actorId": "person-1789544916637",
    "message": "completed task on nishit talking video music changes",
    "createdAt": "2026-10-22T07:18:22.216Z",
    "tone": "normal"
  },
  {
    "id": "activity-1792650601619",
    "workId": "system",
    "actorId": "person-1789544813478",
    "message": "Auto-logged out: Break completed (1m used)",
    "createdAt": "2026-10-22T06:30:01.620Z",
    "tone": "warning"
  },
  {
    "id": "activity-1792649668938",
    "workId": "system",
    "actorId": "person-1789544813478",
    "message": "started Break (15m session, 75m total pool left)",
    "createdAt": "2026-10-22T06:14:28.938Z",
    "tone": "warning"
  },
  {
    "id": "activity-1792649612487",
    "workId": "work-1789796147144",
    "actorId": "person-1789544813478",
    "message": "assigned carousel pilates hsr to Meena M",
    "createdAt": "2026-10-22T06:13:32.487Z",
    "tone": "normal"
  },
  {
    "id": "activity-1792649582325",
    "workId": "system",
    "actorId": "person-1789544851698",
    "message": "returned early from Break (1m used, 73m pool carried over)",
    "createdAt": "2026-10-22T06:13:02.325Z",
    "tone": "success"
  },
  {
    "id": "activity-1792649579261",
    "workId": "system",
    "actorId": "person-1789544851698",
    "message": "started Break (15m session, 74m total pool left)",
    "createdAt": "2026-10-22T06:12:59.261Z",
    "tone": "warning"
  },
  {
    "id": "activity-1792649223051",
    "workId": "work-1789796147144",
    "actorId": "person-1789544813478",
    "message": "assigned pilates hsr carousel  to Meena M",
    "createdAt": "2026-10-22T06:07:03.051Z",
    "tone": "normal"
  },
  {
    "id": "activity-1792648995068",
    "workId": "work-1789796147144",
    "actorId": "person-1789544813478",
    "message": "assigned 1 carousel for hsr  to Meena M",
    "createdAt": "2026-10-22T06:03:15.068Z",
    "tone": "normal"
  },
  {
    "id": "activity-1792648312957",
    "workId": "work-1792648312319",
    "actorId": "usr_founder_eshwar",
    "message": "assigned 3M car care to Swathi C",
    "createdAt": "2026-10-22T05:51:52.957Z",
    "tone": "success"
  },
  {
    "id": "activity-1792648287322",
    "workId": "work-1792648286754",
    "actorId": "usr_founder_eshwar",
    "message": "assigned Yaletis Infra to Batul",
    "createdAt": "2026-10-22T05:51:27.322Z",
    "tone": "success"
  },
  {
    "id": "activity-1792648277328",
    "workId": "work-1792648276749",
    "actorId": "usr_founder_eshwar",
    "message": "assigned Motoflix Automobiles to Batul",
    "createdAt": "2026-10-22T05:51:17.328Z",
    "tone": "success"
  },
  {
    "id": "activity-1792648262283",
    "workId": "work-1792648261747",
    "actorId": "usr_founder_eshwar",
    "message": "assigned Ratavat Creations to Batul",
    "createdAt": "2026-10-22T05:51:02.283Z",
    "tone": "success"
  },
  {
    "id": "activity-1792648248984",
    "workId": "work-1792648248405",
    "actorId": "usr_founder_eshwar",
    "message": "assigned dhurthi to Batul",
    "createdAt": "2026-10-22T05:50:48.984Z",
    "tone": "success"
  },
  {
    "id": "activity-1792648233607",
    "workId": "work-1792648233049",
    "actorId": "usr_founder_eshwar",
    "message": "assigned Sutra hybrid club to Batul",
    "createdAt": "2026-10-22T05:50:33.607Z",
    "tone": "success"
  },
  {
    "id": "activity-1792648191574",
    "workId": "work-1789981533617",
    "actorId": "person-1789544813478",
    "message": "assigned sutra logo reveal carousel to Meena M",
    "createdAt": "2026-10-22T05:49:51.574Z",
    "tone": "normal"
  },
  {
    "id": "activity-1792647551141",
    "workId": "work-1789981533617",
    "actorId": "person-1789544813478",
    "message": "assigned ratavat creation 2 videos  to Midhlaj M T P ",
    "createdAt": "2026-10-22T05:39:11.141Z",
    "tone": "normal"
  },
  {
    "id": "activity-1792647492719",
    "workId": "work-1789981533617",
    "actorId": "person-1789544813478",
    "message": "assigned ratavat creations 2 posters to Meena M",
    "createdAt": "2026-10-22T05:38:12.719Z",
    "tone": "normal"
  },
  {
    "id": "activity-1792647453765",
    "workId": "work-1789981516632",
    "actorId": "person-1789544813478",
    "message": "approved task and forwarded to Founder on try doing something from the drive (give reference what you can do we can discuss)",
    "createdAt": "2026-10-22T05:37:33.765Z",
    "tone": "normal"
  },
  {
    "id": "activity-1792647450214",
    "workId": "work-1789981428986",
    "actorId": "person-1789544813478",
    "message": "approved task and forwarded to Founder on 2 new videos reference sent on whatsapp ",
    "createdAt": "2026-10-22T05:37:30.214Z",
    "tone": "normal"
  },
  {
    "id": "activity-1792647447556",
    "workId": "work-1789796033110",
    "actorId": "person-1789544813478",
    "message": "approved task and forwarded to Founder on 2 new videos ",
    "createdAt": "2026-10-22T05:37:27.556Z",
    "tone": "normal"
  },
  {
    "id": "activity-1792647446504",
    "workId": "work-1789795935505",
    "actorId": "person-1789544813478",
    "message": "approved task and forwarded to Founder on 2 videos from drive (parents review)",
    "createdAt": "2026-10-22T05:37:26.504Z",
    "tone": "normal"
  },
  {
    "id": "activity-1792647444890",
    "workId": "work-1789796093199",
    "actorId": "person-1789544813478",
    "message": "approved task and forwarded to Founder on how is my child doing ",
    "createdAt": "2026-10-22T05:37:24.890Z",
    "tone": "normal"
  },
  {
    "id": "activity-1792647443492",
    "workId": "work-1789796247298",
    "actorId": "person-1789544813478",
    "message": "approved task and forwarded to Founder on for your professional space ",
    "createdAt": "2026-10-22T05:37:23.492Z",
    "tone": "normal"
  },
  {
    "id": "activity-1792647439691",
    "workId": "work-1789795870518",
    "actorId": "person-1789544813478",
    "message": "approved task and forwarded to Founder on client review carousel",
    "createdAt": "2026-10-22T05:37:19.691Z",
    "tone": "normal"
  },
  {
    "id": "activity-1792647438443",
    "workId": "work-1789795957113",
    "actorId": "person-1789544813478",
    "message": "approved task and forwarded to Founder on nailco reel ",
    "createdAt": "2026-10-22T05:37:18.443Z",
    "tone": "normal"
  },
  {
    "id": "activity-1792647437540",
    "workId": "work-1789795990634",
    "actorId": "person-1789544813478",
    "message": "approved task and forwarded to Founder on nail stories rate card ",
    "createdAt": "2026-10-22T05:37:17.540Z",
    "tone": "normal"
  },
  {
    "id": "activity-1792647436655",
    "workId": "work-1789795935505",
    "actorId": "person-1789544813478",
    "message": "approved task and forwarded to Founder on 1 reel edit ",
    "createdAt": "2026-10-22T05:37:16.655Z",
    "tone": "normal"
  },
  {
    "id": "activity-1792647435696",
    "workId": "work-1789796093199",
    "actorId": "person-1789544813478",
    "message": "approved task and forwarded to Founder on post design",
    "createdAt": "2026-10-22T05:37:15.696Z",
    "tone": "normal"
  },
  {
    "id": "activity-1792647435094",
    "workId": "work-1789796093199",
    "actorId": "person-1789544813478",
    "message": "approved task and forwarded to Founder on sri ram post design",
    "createdAt": "2026-10-22T05:37:15.094Z",
    "tone": "normal"
  },
  {
    "id": "activity-1792645476072",
    "workId": "work-1789795990634",
    "actorId": "person-1789544813478",
    "message": "approved task and forwarded to Founder on 1 reel edit ",
    "createdAt": "2026-10-22T05:04:36.072Z",
    "tone": "normal"
  },
  {
    "id": "activity-1792645473729",
    "workId": "work-1789795957113",
    "actorId": "person-1789544813478",
    "message": "approved task and forwarded to Founder on font changes of all videos",
    "createdAt": "2026-10-22T05:04:33.729Z",
    "tone": "normal"
  },
  {
    "id": "activity-1792645464345",
    "workId": "work-1789795935505",
    "actorId": "person-1789544813478",
    "message": "approved task and forwarded to Founder on nishit talking video music changes",
    "createdAt": "2026-10-22T05:04:24.345Z",
    "tone": "normal"
  },
  {
    "id": "activity-1792645463045",
    "workId": "work-1789796225969",
    "actorId": "person-1789544813478",
    "message": "approved task and forwarded to Founder on ads video ",
    "createdAt": "2026-10-22T05:04:23.045Z",
    "tone": "normal"
  },
  {
    "id": "activity-1792645284897",
    "workId": "system",
    "actorId": "person-1789544851698",
    "message": "Auto-logged out: Break completed (1m used)",
    "createdAt": "2026-10-22T05:01:24.897Z",
    "tone": "warning"
  },
  {
    "id": "activity-1792645093438",
    "workId": "work-1789795935505",
    "actorId": "person-1789544916637",
    "message": "completed task on 2 videos from drive (parents review)",
    "createdAt": "2026-10-22T04:58:13.438Z",
    "tone": "normal"
  },
  {
    "id": "activity-1792645090871",
    "workId": "work-1789796225969",
    "actorId": "person-1789544916637",
    "message": "completed task on ads video ",
    "createdAt": "2026-10-22T04:58:10.871Z",
    "tone": "normal"
  },
  {
    "id": "activity-1792645083535",
    "workId": "work-1789795935505",
    "actorId": "person-1789544916637",
    "message": "completed task on nishit talking video music changes",
    "createdAt": "2026-10-22T04:58:03.535Z",
    "tone": "normal"
  },
  {
    "id": "activity-1792645082874",
    "workId": "work-1789795957113",
    "actorId": "person-1789544916637",
    "message": "completed task on font changes of all videos",
    "createdAt": "2026-10-22T04:58:02.874Z",
    "tone": "normal"
  },
  {
    "id": "activity-1792645080196",
    "workId": "work-1789795935505",
    "actorId": "person-1789544916637",
    "message": "completed task on nishit talking video music changes",
    "createdAt": "2026-10-22T04:58:00.196Z",
    "tone": "normal"
  },
  {
    "id": "activity-1792645079800",
    "workId": "work-1789795935505",
    "actorId": "person-1789544916637",
    "message": "completed task on nishit talking video music changes",
    "createdAt": "2026-10-22T04:57:59.800Z",
    "tone": "normal"
  },
  {
    "id": "activity-1792645077635",
    "workId": "work-1789795990634",
    "actorId": "person-1789544916637",
    "message": "completed task on 1 reel edit ",
    "createdAt": "2026-10-22T04:57:57.635Z",
    "tone": "normal"
  },
  {
    "id": "activity-1792645076987",
    "workId": "work-1789796033110",
    "actorId": "person-1789544916637",
    "message": "completed task on drive: https://drive.google.com/drive/u/0/folders/1689Zducvv3T0Ol26RggyJ3IFRdIg2gyL",
    "createdAt": "2026-10-22T04:57:56.987Z",
    "tone": "normal"
  },
  {
    "id": "activity-1792645075305",
    "workId": "work-1789795957113",
    "actorId": "person-1789544916637",
    "message": "completed task on font changes of all videos",
    "createdAt": "2026-10-22T04:57:55.305Z",
    "tone": "normal"
  },
  {
    "id": "activity-1792645073169",
    "workId": "work-1789795935505",
    "actorId": "person-1789544916637",
    "message": "completed task on nishit talking video music changes",
    "createdAt": "2026-10-22T04:57:53.169Z",
    "tone": "normal"
  },
  {
    "id": "activity-1792645072205",
    "workId": "work-1789795990634",
    "actorId": "person-1789544916637",
    "message": "completed task on 1 reel edit ",
    "createdAt": "2026-10-22T04:57:52.205Z",
    "tone": "normal"
  },
  {
    "id": "activity-1792645070897",
    "workId": "work-1789796033110",
    "actorId": "person-1789544916637",
    "message": "completed task on drive: https://drive.google.com/drive/u/0/folders/1689Zducvv3T0Ol26RggyJ3IFRdIg2gyL",
    "createdAt": "2026-10-22T04:57:50.897Z",
    "tone": "normal"
  },
  {
    "id": "activity-1792645069729",
    "workId": "work-1789796033110",
    "actorId": "person-1789544916637",
    "message": "completed task on drive: https://drive.google.com/drive/u/0/folders/1689Zducvv3T0Ol26RggyJ3IFRdIg2gyL",
    "createdAt": "2026-10-22T04:57:49.729Z",
    "tone": "normal"
  },
  {
    "id": "activity-1792645068425",
    "workId": "work-1789795957113",
    "actorId": "person-1789544916637",
    "message": "completed task on font changes of all videos",
    "createdAt": "2026-10-22T04:57:48.425Z",
    "tone": "normal"
  },
  {
    "id": "activity-1792645066783",
    "workId": "work-1789795935505",
    "actorId": "person-1789544916637",
    "message": "completed task on nishit talking video music changes",
    "createdAt": "2026-10-22T04:57:46.783Z",
    "tone": "normal"
  },
  {
    "id": "activity-1792645065195",
    "workId": "work-1789795957113",
    "actorId": "person-1789544916637",
    "message": "completed task on nailco reel ",
    "createdAt": "2026-10-22T04:57:45.195Z",
    "tone": "normal"
  },
  {
    "id": "activity-1792645063558",
    "workId": "work-1789795935505",
    "actorId": "person-1789544916637",
    "message": "completed task on 1 reel edit ",
    "createdAt": "2026-10-22T04:57:43.558Z",
    "tone": "normal"
  },
  {
    "id": "activity-1792645061656",
    "workId": "work-1789795990634",
    "actorId": "person-1789544916637",
    "message": "completed task on 1 reel edit ",
    "createdAt": "2026-10-22T04:57:41.656Z",
    "tone": "normal"
  },
  {
    "id": "activity-1792645056894",
    "workId": "work-1789795957113",
    "actorId": "person-1789544916637",
    "message": "completed task on nailco reel ",
    "createdAt": "2026-10-22T04:57:36.894Z",
    "tone": "normal"
  },
  {
    "id": "activity-1792645054035",
    "workId": "work-1789795935505",
    "actorId": "person-1789544916637",
    "message": "completed task on 1 reel edit ",
    "createdAt": "2026-10-22T04:57:34.035Z",
    "tone": "normal"
  },
  {
    "id": "activity-1792645053139",
    "workId": "work-1789795990634",
    "actorId": "person-1789544916637",
    "message": "completed task on 1 reel edit ",
    "createdAt": "2026-10-22T04:57:33.139Z",
    "tone": "normal"
  },
  {
    "id": "activity-1792645051834",
    "workId": "work-1789796033110",
    "actorId": "person-1789544916637",
    "message": "completed task on 2 new videos ",
    "createdAt": "2026-10-22T04:57:31.834Z",
    "tone": "normal"
  },
  {
    "id": "activity-1792645050770",
    "workId": "work-1789981428986",
    "actorId": "person-1789544916637",
    "message": "completed task on 2 new videos reference sent on whatsapp ",
    "createdAt": "2026-10-22T04:57:30.770Z",
    "tone": "normal"
  },
  {
    "id": "activity-1792645048188",
    "workId": "work-1789796033110",
    "actorId": "person-1789544916637",
    "message": "completed task on drive: https://drive.google.com/drive/u/0/folders/1689Zducvv3T0Ol26RggyJ3IFRdIg2gyL",
    "createdAt": "2026-10-22T04:57:28.188Z",
    "tone": "normal"
  },
  {
    "id": "activity-1792645047131",
    "workId": "work-1789981516632",
    "actorId": "person-1789544916637",
    "message": "completed task on try doing something from the drive (give reference what you can do we can discuss)",
    "createdAt": "2026-10-22T04:57:27.131Z",
    "tone": "normal"
  },
  {
    "id": "activity-1792645045839",
    "workId": "work-1789796033110",
    "actorId": "person-1789544916637",
    "message": "completed task on 2 new videos ",
    "createdAt": "2026-10-22T04:57:25.839Z",
    "tone": "normal"
  },
  {
    "id": "activity-1792645045261",
    "workId": "work-1789981428986",
    "actorId": "person-1789544916637",
    "message": "completed task on 2 new videos reference sent on whatsapp ",
    "createdAt": "2026-10-22T04:57:25.261Z",
    "tone": "normal"
  },
  {
    "id": "activity-1792645043649",
    "workId": "work-1789796033110",
    "actorId": "person-1789544916637",
    "message": "completed task on drive: https://drive.google.com/drive/u/0/folders/1689Zducvv3T0Ol26RggyJ3IFRdIg2gyL",
    "createdAt": "2026-10-22T04:57:23.649Z",
    "tone": "normal"
  },
  {
    "id": "activity-1792645039511",
    "workId": "work-1789981516632",
    "actorId": "person-1789544916637",
    "message": "completed task on try doing something from the drive (give reference what you can do we can discuss)",
    "createdAt": "2026-10-22T04:57:19.511Z",
    "tone": "normal"
  },
  {
    "id": "activity-1792645037685",
    "workId": "work-1789796033110",
    "actorId": "person-1789544916637",
    "message": "completed task on 2 new videos ",
    "createdAt": "2026-10-22T04:57:17.685Z",
    "tone": "normal"
  },
  {
    "id": "activity-1792645036086",
    "workId": "work-1789795990634",
    "actorId": "person-1789544916637",
    "message": "completed task on add new clips ",
    "createdAt": "2026-10-22T04:57:16.086Z",
    "tone": "normal"
  },
  {
    "id": "activity-1792645031171",
    "workId": "work-1789796051170",
    "actorId": "person-1789544916637",
    "message": "completed task on aura video editing ",
    "createdAt": "2026-10-22T04:57:11.171Z",
    "tone": "normal"
  },
  {
    "id": "activity-1792645030075",
    "workId": "work-1789795957113",
    "actorId": "person-1789544916637",
    "message": "completed task on client review edit",
    "createdAt": "2026-10-22T04:57:10.075Z",
    "tone": "normal"
  },
  {
    "id": "activity-1792645029031",
    "workId": "work-1789795821322",
    "actorId": "person-1789544916637",
    "message": "completed task on edit 3 videos from the drive. 1. script talking 2. one trainer explaining a yoga 3. a yoga edit with trainer and model with song",
    "createdAt": "2026-10-22T04:57:09.031Z",
    "tone": "normal"
  },
  {
    "id": "activity-1792645027421",
    "workId": "work-1789796075803",
    "actorId": "person-1789544916637",
    "message": "completed task on video editing ",
    "createdAt": "2026-10-22T04:57:07.421Z",
    "tone": "normal"
  },
  {
    "id": "activity-1792645025122",
    "workId": "work-1789981516632",
    "actorId": "person-1789544916637",
    "message": "completed task on 1 video edit ",
    "createdAt": "2026-10-22T04:57:05.122Z",
    "tone": "normal"
  },
  {
    "id": "activity-1792645024017",
    "workId": "work-1789795990634",
    "actorId": "person-1789544916637",
    "message": "completed task on video editing of nail stories malleshwaram branch ",
    "createdAt": "2026-10-22T04:57:04.017Z",
    "tone": "normal"
  },
  {
    "id": "activity-1792645023057",
    "workId": "work-1789981428986",
    "actorId": "person-1789544916637",
    "message": "completed task on video from the previous folder ",
    "createdAt": "2026-10-22T04:57:03.057Z",
    "tone": "normal"
  },
  {
    "id": "activity-1792645021646",
    "workId": "work-1789796051170",
    "actorId": "person-1789544916637",
    "message": "completed task on one video edit ",
    "createdAt": "2026-10-22T04:57:01.647Z",
    "tone": "normal"
  },
  {
    "id": "activity-1792645020482",
    "workId": "work-1789795912456",
    "actorId": "person-1789544916637",
    "message": "completed task on raagi video editing ",
    "createdAt": "2026-10-22T04:57:00.482Z",
    "tone": "normal"
  },
  {
    "id": "activity-1792645019023",
    "workId": "work-1789796051170",
    "actorId": "person-1789544916637",
    "message": "completed task on aura video editing ",
    "createdAt": "2026-10-22T04:56:59.023Z",
    "tone": "normal"
  },
  {
    "id": "activity-1792645017623",
    "workId": "work-1789795957113",
    "actorId": "person-1789544916637",
    "message": "completed task on client review edit",
    "createdAt": "2026-10-22T04:56:57.623Z",
    "tone": "normal"
  },
  {
    "id": "activity-1792645012253",
    "workId": "work-1789795821322",
    "actorId": "person-1789544916637",
    "message": "completed task on edit 3 videos from the drive. 1. script talking 2. one trainer explaining a yoga 3. a yoga edit with trainer and model with song",
    "createdAt": "2026-10-22T04:56:52.253Z",
    "tone": "normal"
  },
  {
    "id": "activity-1792645011054",
    "workId": "work-1789796075803",
    "actorId": "person-1789544916637",
    "message": "completed task on video editing ",
    "createdAt": "2026-10-22T04:56:51.054Z",
    "tone": "normal"
  },
  {
    "id": "activity-1792645007160",
    "workId": "work-1789981516632",
    "actorId": "person-1789544916637",
    "message": "completed task on 1 video edit ",
    "createdAt": "2026-10-22T04:56:47.160Z",
    "tone": "normal"
  },
  {
    "id": "activity-1792645005622",
    "workId": "work-1789795990634",
    "actorId": "person-1789544916637",
    "message": "completed task on video editing of nail stories malleshwaram branch ",
    "createdAt": "2026-10-22T04:56:45.622Z",
    "tone": "normal"
  },
  {
    "id": "activity-1792645002275",
    "workId": "work-1789796075803",
    "actorId": "person-1789544813478",
    "message": "assigned offer posters x4  to Supreeth BK ",
    "createdAt": "2026-10-22T04:56:42.275Z",
    "tone": "normal"
  },
  {
    "id": "activity-1792645001244",
    "workId": "work-1789981428986",
    "actorId": "person-1789544916637",
    "message": "completed task on video from the previous folder ",
    "createdAt": "2026-10-22T04:56:41.244Z",
    "tone": "normal"
  },
  {
    "id": "activity-1792644997352",
    "workId": "work-1789796051170",
    "actorId": "person-1789544916637",
    "message": "completed task on one video edit ",
    "createdAt": "2026-10-22T04:56:37.352Z",
    "tone": "normal"
  },
  {
    "id": "activity-1792644991723",
    "workId": "work-1789795912456",
    "actorId": "person-1789544916637",
    "message": "completed task on raagi video editing ",
    "createdAt": "2026-10-22T04:56:31.724Z",
    "tone": "normal"
  },
  {
    "id": "activity-1792644910162",
    "workId": "work-1789796051170",
    "actorId": "person-1789544916637",
    "message": "completed task on aura video editing ",
    "createdAt": "2026-10-22T04:55:10.162Z",
    "tone": "normal"
  },
  {
    "id": "activity-1792644609338",
    "workId": "work-1789796247298",
    "actorId": "person-1789544813478",
    "message": "approved task and forwarded to Founder on story designing ",
    "createdAt": "2026-10-22T04:50:09.338Z",
    "tone": "normal"
  },
  {
    "id": "activity-1792644603430",
    "workId": "work-1789981533617",
    "actorId": "person-1789544813478",
    "message": "assigned sutra 1 carousel to Meena M",
    "createdAt": "2026-10-22T04:50:03.430Z",
    "tone": "normal"
  },
  {
    "id": "activity-1792644363729",
    "workId": "system",
    "actorId": "person-1789544851698",
    "message": "started Break (15m session, 75m total pool left)",
    "createdAt": "2026-10-22T04:46:03.729Z",
    "tone": "warning"
  },
  {
    "id": "activity-1792644358769",
    "workId": "system",
    "actorId": "usr_founder_eshwar",
    "message": "returned early from Break (1m used, 74m pool carried over)",
    "createdAt": "2026-10-22T04:45:58.769Z",
    "tone": "success"
  },
  {
    "id": "activity-1792644354452",
    "workId": "system",
    "actorId": "usr_founder_eshwar",
    "message": "started Break (15m session, 75m total pool left)",
    "createdAt": "2026-10-22T04:45:54.452Z",
    "tone": "warning"
  },
  {
    "id": "activity-1792643788781",
    "workId": "system",
    "actorId": "person-1789738443448",
    "message": "EMERGENCY EARLY LOGOUT (UNAPPROVED by Founder/HR) (0h 0m worked). Reason: test",
    "createdAt": "2026-10-22T04:36:28.781Z",
    "tone": "danger"
  },
  {
    "id": "activity-1792643776809",
    "workId": "system",
    "actorId": "person-1789738443448",
    "message": "Submitted Early Logout request for today (10:06). Awaiting Founder / HR approval. Reason: test",
    "createdAt": "2026-10-22T04:36:16.809Z",
    "tone": "warning"
  },
  {
    "id": "activity-1792589658223",
    "workId": "system",
    "actorId": "person-1789737883615",
    "message": "EMERGENCY EARLY LOGOUT (UNAPPROVED by Founder/HR) (7h 19m worked). No reason provided",
    "createdAt": "2026-10-21T13:34:18.223Z",
    "tone": "danger"
  },
  {
    "id": "activity-1792588018656",
    "workId": "system",
    "actorId": "person-1789737883615",
    "message": "Auto-logged out: Break completed (1m used)",
    "createdAt": "2026-10-21T13:06:58.656Z",
    "tone": "warning"
  },
  {
    "id": "activity-1792588018636",
    "workId": "system",
    "actorId": "person-1789737883615",
    "message": "Auto-logged out: Break completed (1m used)",
    "createdAt": "2026-10-21T13:06:58.636Z",
    "tone": "warning"
  },
  {
    "id": "activity-1792588018627",
    "workId": "system",
    "actorId": "person-1789737883615",
    "message": "Auto-logged out: Break completed (1m used)",
    "createdAt": "2026-10-21T13:06:58.627Z",
    "tone": "warning"
  },
  {
    "id": "activity-1792588018393",
    "workId": "system",
    "actorId": "person-1789737883615",
    "message": "Auto-logged out: Break completed (1m used)",
    "createdAt": "2026-10-21T13:06:58.393Z",
    "tone": "warning"
  },
  {
    "id": "activity-1792586853378",
    "workId": "system",
    "actorId": "person-1789737883615",
    "message": "started Break (15m session, 60m total pool left)",
    "createdAt": "2026-10-21T12:47:33.378Z",
    "tone": "warning"
  },
  {
    "id": "activity-1792586467558",
    "workId": "work-1789981533617",
    "actorId": "person-1789544851698",
    "message": "completed task on automation tool",
    "createdAt": "2026-10-21T12:41:07.558Z",
    "tone": "normal"
  },
  {
    "id": "activity-1792586467220",
    "workId": "work-1789981533617",
    "actorId": "person-1789544851698",
    "message": "completed task on automation tool",
    "createdAt": "2026-10-21T12:41:07.220Z",
    "tone": "normal"
  },
  {
    "id": "activity-1792586455343",
    "workId": "work-1789981533617",
    "actorId": "person-1789544851698",
    "message": "completed task on automation tool",
    "createdAt": "2026-10-21T12:40:55.343Z",
    "tone": "normal"
  },
  {
    "id": "activity-1792586454550",
    "workId": "work-1789981533617",
    "actorId": "person-1789544851698",
    "message": "started execution on on automation tool",
    "createdAt": "2026-10-21T12:40:54.550Z",
    "tone": "normal"
  },
  {
    "id": "activity-1792586454337",
    "workId": "work-1789981533617",
    "actorId": "person-1789544851698",
    "message": "completed task on automation tool",
    "createdAt": "2026-10-21T12:40:54.337Z",
    "tone": "normal"
  },
  {
    "id": "activity-1792586453319",
    "workId": "work-1789981533617",
    "actorId": "person-1789544851698",
    "message": "started execution on on automation tool",
    "createdAt": "2026-10-21T12:40:53.319Z",
    "tone": "normal"
  },
  {
    "id": "activity-1792586451238",
    "workId": "work-1789981533617",
    "actorId": "person-1789544851698",
    "message": "completed task on automation tool",
    "createdAt": "2026-10-21T12:40:51.238Z",
    "tone": "normal"
  },
  {
    "id": "activity-1792586449144",
    "workId": "work-1789981533617",
    "actorId": "person-1789544851698",
    "message": "pulled to today work on automation tool",
    "createdAt": "2026-10-21T12:40:49.144Z",
    "tone": "normal"
  },
  {
    "id": "activity-1792584889264",
    "workId": "work-1789975198149",
    "actorId": "usr_founder_eshwar",
    "message": "completed task on accounts ans sales crm build",
    "createdAt": "2026-10-21T12:14:49.264Z",
    "tone": "normal"
  },
  {
    "id": "activity-1792584784838",
    "workId": "system",
    "actorId": "person-1789555841194",
    "message": "EMERGENCY EARLY LOGOUT (UNAPPROVED by Founder/HR) (0h 1m worked). No reason provided",
    "createdAt": "2026-10-21T12:13:04.838Z",
    "tone": "danger"
  },
  {
    "id": "activity-1792577727743",
    "workId": "system",
    "actorId": "person-1789737883615",
    "message": "Auto-logged out: Break completed (15m used)",
    "createdAt": "2026-10-21T10:15:27.743Z",
    "tone": "warning"
  },
  {
    "id": "activity-1792577726729",
    "workId": "system",
    "actorId": "person-1789737883615",
    "message": "Auto-logged out: Break completed (15m used)",
    "createdAt": "2026-10-21T10:15:26.729Z",
    "tone": "warning"
  },
  {
    "id": "activity-1792577726293",
    "workId": "system",
    "actorId": "person-1789737883615",
    "message": "Auto-logged out: Break completed (1m used)",
    "createdAt": "2026-10-21T10:15:26.294Z",
    "tone": "warning"
  },
  {
    "id": "activity-1792576823615",
    "workId": "system",
    "actorId": "person-1789737883615",
    "message": "started Break (15m session, 75m total pool left)",
    "createdAt": "2026-10-21T10:00:23.615Z",
    "tone": "warning"
  },
  {
    "id": "activity-1792576087344",
    "workId": "system",
    "actorId": "person-1789555841194",
    "message": "EMERGENCY EARLY LOGOUT (UNAPPROVED by Founder/HR) (0h 0m worked). No reason provided",
    "createdAt": "2026-10-21T09:48:07.344Z",
    "tone": "danger"
  },
  {
    "id": "activity-1792575971982",
    "workId": "system",
    "actorId": "person-1789737923403",
    "message": "returned early from Lunch",
    "createdAt": "2026-10-21T09:46:11.982Z",
    "tone": "success"
  },
  {
    "id": "activity-1792572509525",
    "workId": "system",
    "actorId": "person-1789737923403",
    "message": "started a 1-hour Lunch",
    "createdAt": "2026-10-21T08:48:29.526Z",
    "tone": "warning"
  },
  {
    "id": "activity-1792571844055",
    "workId": "system",
    "actorId": "person-1789738156900",
    "message": "returned early from Lunch",
    "createdAt": "2026-10-21T08:37:24.055Z",
    "tone": "success"
  },
  {
    "id": "activity-1792571838892",
    "workId": "system",
    "actorId": "person-1789549176116",
    "message": "returned early from Lunch",
    "createdAt": "2026-10-21T08:37:18.892Z",
    "tone": "success"
  },
  {
    "id": "activity-1792571540714",
    "workId": "system",
    "actorId": "person-1789737883615",
    "message": "EMERGENCY EARLY LOGOUT (UNAPPROVED by Founder/HR) (4h 8m worked). No reason provided",
    "createdAt": "2026-10-21T08:32:20.714Z",
    "tone": "danger"
  },
  {
    "id": "activity-1792570112622",
    "workId": "system",
    "actorId": "person-1789544851698",
    "message": "EMERGENCY EARLY LOGOUT (UNAPPROVED by Founder/HR) (3h 32m worked). No reason provided",
    "createdAt": "2026-10-21T08:08:32.622Z",
    "tone": "danger"
  },
  {
    "id": "activity-1792570018582",
    "workId": "system",
    "actorId": "person-1789549176116",
    "message": "started a 1-hour Lunch",
    "createdAt": "2026-10-21T08:06:58.582Z",
    "tone": "warning"
  },
  {
    "id": "activity-1792570009983",
    "workId": "system",
    "actorId": "person-1789738156900",
    "message": "started a 1-hour Lunch",
    "createdAt": "2026-10-21T08:06:49.983Z",
    "tone": "warning"
  },
  {
    "id": "activity-1792416746689",
    "workId": "system",
    "actorId": "person-1789737883615",
    "message": "Completed full 9-hour shift. Automatically logged out for the day.",
    "createdAt": "2026-10-19T13:32:26.689Z",
    "tone": "success"
  },
  {
    "id": "activity-1792411664958",
    "workId": "system",
    "actorId": "person-1789549176116",
    "message": "Auto-logged out: Exceeded Break duration",
    "createdAt": "2026-10-19T12:07:44.958Z",
    "tone": "warning"
  },
  {
    "id": "activity-1792410688175",
    "workId": "system",
    "actorId": "person-1789549176116",
    "message": "started a 15-minute Break",
    "createdAt": "2026-10-19T11:51:28.175Z",
    "tone": "warning"
  },
  {
    "id": "activity-1792407681476",
    "workId": "system",
    "actorId": "person-1789544916637",
    "message": "returned early from Break",
    "createdAt": "2026-10-19T11:01:21.476Z",
    "tone": "success"
  },
  {
    "id": "activity-1792407678266",
    "workId": "system",
    "actorId": "person-1789544916637",
    "message": "started a 15-minute Break",
    "createdAt": "2026-10-19T11:01:18.266Z",
    "tone": "warning"
  },
  {
    "id": "activity-1792403034607",
    "workId": "system",
    "actorId": "person-1789737883615",
    "message": "Auto-logged out: Lunch pool completed",
    "createdAt": "2026-10-19T09:43:54.608Z",
    "tone": "warning"
  },
  {
    "id": "activity-1792402867618",
    "workId": "system",
    "actorId": "person-1789544813478",
    "message": "Auto-logged out: Exceeded Lunch duration",
    "createdAt": "2026-10-19T09:41:07.618Z",
    "tone": "warning"
  },
  {
    "id": "activity-1792401877369",
    "workId": "system",
    "actorId": "person-1789738156900",
    "message": "Auto-logged out: Exceeded Lunch duration",
    "createdAt": "2026-10-19T09:24:37.369Z",
    "tone": "warning"
  },
  {
    "id": "activity-1792399905923",
    "workId": "system",
    "actorId": "person-1789549176116",
    "message": "returned early from Lunch",
    "createdAt": "2026-10-19T08:51:45.923Z",
    "tone": "success"
  },
  {
    "id": "activity-1792399207502",
    "workId": "system",
    "actorId": "person-1789544813478",
    "message": "started a 1-hour Lunch",
    "createdAt": "2026-10-19T08:40:07.502Z",
    "tone": "warning"
  },
  {
    "id": "activity-1792399153600",
    "workId": "system",
    "actorId": "person-1789737883615",
    "message": "started Lunch (60m session, 75m total pool left)",
    "createdAt": "2026-10-19T08:39:13.600Z",
    "tone": "warning"
  },
  {
    "id": "activity-1792398180528",
    "workId": "system",
    "actorId": "person-1789738156900",
    "message": "started a 1-hour Lunch",
    "createdAt": "2026-10-19T08:23:00.528Z",
    "tone": "warning"
  },
  {
    "id": "activity-1792398165612",
    "workId": "system",
    "actorId": "person-1789549176116",
    "message": "started a 1-hour Lunch",
    "createdAt": "2026-10-19T08:22:45.612Z",
    "tone": "warning"
  },
  {
    "id": "activity-1792389330941",
    "workId": "system",
    "actorId": "person-1789544813478",
    "message": "Auto-logged out: Exceeded Break duration",
    "createdAt": "2026-10-19T05:55:30.941Z",
    "tone": "warning"
  },
  {
    "id": "activity-1792388370786",
    "workId": "system",
    "actorId": "person-1789544813478",
    "message": "started a 15-minute Break",
    "createdAt": "2026-10-19T05:39:30.786Z",
    "tone": "warning"
  },
  {
    "id": "activity-1792243983401",
    "workId": "system",
    "actorId": "person-1789737883615",
    "message": "Completed full 9-hour shift. Automatically logged out for the day.",
    "createdAt": "2026-10-17T13:33:03.402Z",
    "tone": "success"
  },
  {
    "id": "activity-1792241436518",
    "workId": "system",
    "actorId": "person-1789544851698",
    "message": "EMERGENCY EARLY LOGOUT (UNAPPROVED by Founder/HR) (7h 39m worked). No reason provided",
    "createdAt": "2026-10-17T12:50:36.519Z",
    "tone": "danger"
  },
  {
    "id": "activity-1792238845473",
    "workId": "system",
    "actorId": "person-1789544851698",
    "message": "EMERGENCY EARLY LOGOUT (UNAPPROVED by Founder/HR) (7h 33m worked). No reason provided",
    "createdAt": "2026-10-17T12:07:25.473Z",
    "tone": "danger"
  },
  {
    "id": "activity-1792238833500",
    "workId": "system",
    "actorId": "person-1789544851698",
    "message": "started Break (15m session, 75m total pool left)",
    "createdAt": "2026-10-17T12:07:13.500Z",
    "tone": "warning"
  },
  {
    "id": "activity-1792234631244",
    "workId": "system",
    "actorId": "person-1789544813478",
    "message": "Auto-logged out: Exceeded Lunch duration",
    "createdAt": "2026-10-17T10:57:11.244Z",
    "tone": "warning"
  },
  {
    "id": "activity-1792233610747",
    "workId": "system",
    "actorId": "person-1789737923403",
    "message": "Auto-logged out: Exceeded Lunch duration",
    "createdAt": "2026-10-17T10:40:10.747Z",
    "tone": "warning"
  },
  {
    "id": "activity-1792230966533",
    "workId": "system",
    "actorId": "person-1789544813478",
    "message": "started a 1-hour Lunch",
    "createdAt": "2026-10-17T09:56:06.533Z",
    "tone": "warning"
  },
  {
    "id": "activity-1792229896519",
    "workId": "system",
    "actorId": "person-1789737923403",
    "message": "started a 1-hour Lunch",
    "createdAt": "2026-10-17T09:38:16.519Z",
    "tone": "warning"
  },
  {
    "id": "activity-1792217802730",
    "workId": "system",
    "actorId": "person-1789737883615",
    "message": "started Break (15m session, 75m total pool left)",
    "createdAt": "2026-10-17T06:16:42.730Z",
    "tone": "warning"
  },
  {
    "id": "activity-1792216631221",
    "workId": "system",
    "actorId": "person-1789544813478",
    "message": "Auto-logged out: Exceeded Break duration",
    "createdAt": "2026-10-17T05:57:11.221Z",
    "tone": "warning"
  },
  {
    "id": "activity-1792216603421",
    "workId": "system",
    "actorId": "person-1789549176116",
    "message": "Auto-logged out: Exceeded Break duration",
    "createdAt": "2026-10-17T05:56:43.421Z",
    "tone": "warning"
  },
  {
    "id": "activity-1792215635529",
    "workId": "system",
    "actorId": "person-1789544813478",
    "message": "started a 15-minute Break",
    "createdAt": "2026-10-17T05:40:35.529Z",
    "tone": "warning"
  },
  {
    "id": "activity-1792215613509",
    "workId": "system",
    "actorId": "person-1789549176116",
    "message": "started a 15-minute Break",
    "createdAt": "2026-10-17T05:40:13.509Z",
    "tone": "warning"
  },
  {
    "id": "activity-1792160849746",
    "workId": "system",
    "actorId": "person-1789737883615",
    "message": "EMERGENCY EARLY LOGOUT (UNAPPROVED by Founder/HR) (8h 51m worked). No reason provided",
    "createdAt": "2026-10-16T14:27:29.746Z",
    "tone": "danger"
  },
  {
    "id": "activity-1792152449007",
    "workId": "system",
    "actorId": "person-1789738156900",
    "message": "Auto-logged out: Exceeded Break duration",
    "createdAt": "2026-10-16T12:07:29.007Z",
    "tone": "warning"
  },
  {
    "id": "activity-1792152427558",
    "workId": "system",
    "actorId": "person-1789544813478",
    "message": "Auto-logged out: Exceeded Break duration",
    "createdAt": "2026-10-16T12:07:07.558Z",
    "tone": "warning"
  },
  {
    "id": "activity-1792152290091",
    "workId": "system",
    "actorId": "person-1789549176116",
    "message": "Auto-logged out: Exceeded Break duration",
    "createdAt": "2026-10-16T12:04:50.092Z",
    "tone": "warning"
  },
  {
    "id": "activity-1792151467281",
    "workId": "system",
    "actorId": "person-1789544813478",
    "message": "started a 15-minute Break",
    "createdAt": "2026-10-16T11:51:07.281Z",
    "tone": "warning"
  },
  {
    "id": "activity-1792151466854",
    "workId": "system",
    "actorId": "person-1789738156900",
    "message": "started a 15-minute Break",
    "createdAt": "2026-10-16T11:51:06.854Z",
    "tone": "warning"
  },
  {
    "id": "activity-1792151288660",
    "workId": "system",
    "actorId": "person-1789549176116",
    "message": "started a 15-minute Break",
    "createdAt": "2026-10-16T11:48:08.660Z",
    "tone": "warning"
  },
  {
    "id": "activity-1792147431558",
    "workId": "system",
    "actorId": "person-1791175695081",
    "message": "Auto-logged out: Exceeded Lunch duration",
    "createdAt": "2026-10-16T10:43:51.558Z",
    "tone": "warning"
  },
  {
    "id": "activity-1792146935929",
    "workId": "system",
    "actorId": "person-1789544851698",
    "message": "Auto-logged out: Break pool completed",
    "createdAt": "2026-10-16T10:35:35.929Z",
    "tone": "warning"
  },
  {
    "id": "activity-1792146371901",
    "workId": "system",
    "actorId": "person-1789544813478",
    "message": "Auto-logged out: Exceeded Lunch duration",
    "createdAt": "2026-10-16T10:26:11.901Z",
    "tone": "warning"
  },
  {
    "id": "activity-1792146199499",
    "workId": "system",
    "actorId": "person-1789738443448",
    "message": "started Lunch (60m session, 75m total pool left)",
    "createdAt": "2026-10-16T10:23:19.499Z",
    "tone": "warning"
  },
  {
    "id": "activity-1792146017352",
    "workId": "system",
    "actorId": "person-1789544851698",
    "message": "started Break (15m session, 75m total pool left)",
    "createdAt": "2026-10-16T10:20:17.352Z",
    "tone": "warning"
  },
  {
    "id": "activity-1792145652428",
    "workId": "system",
    "actorId": "person-1789737923403",
    "message": "Auto-logged out: Exceeded Lunch duration",
    "createdAt": "2026-10-16T10:14:12.428Z",
    "tone": "warning"
  },
  {
    "id": "activity-1792142746860",
    "workId": "system",
    "actorId": "person-1791175695081",
    "message": "started a 1-hour Lunch",
    "createdAt": "2026-10-16T09:25:46.860Z",
    "tone": "warning"
  },
  {
    "id": "activity-1792142698905",
    "workId": "system",
    "actorId": "person-1789544813478",
    "message": "started a 1-hour Lunch",
    "createdAt": "2026-10-16T09:24:58.905Z",
    "tone": "warning"
  },
  {
    "id": "activity-1792141988122",
    "workId": "system",
    "actorId": "person-1789737923403",
    "message": "started a 1-hour Lunch",
    "createdAt": "2026-10-16T09:13:08.122Z",
    "tone": "warning"
  },
  {
    "id": "activity-1792140477495",
    "workId": "system",
    "actorId": "person-1789738156900",
    "message": "returned early from Lunch",
    "createdAt": "2026-10-16T08:47:57.495Z",
    "tone": "success"
  },
  {
    "id": "activity-1792139987565",
    "workId": "system",
    "actorId": "person-1789549176116",
    "message": "returned early from Lunch",
    "createdAt": "2026-10-16T08:39:47.565Z",
    "tone": "success"
  },
  {
    "id": "activity-1792137888175",
    "workId": "system",
    "actorId": "person-1789738156900",
    "message": "started a 1-hour Lunch",
    "createdAt": "2026-10-16T08:04:48.175Z",
    "tone": "warning"
  },
  {
    "id": "activity-1792137806743",
    "workId": "system",
    "actorId": "person-1789549176116",
    "message": "started a 1-hour Lunch",
    "createdAt": "2026-10-16T08:03:26.743Z",
    "tone": "warning"
  },
  {
    "id": "activity-1792134428495",
    "workId": "system",
    "actorId": "person-1789737923403",
    "message": "Auto-logged out: Exceeded Break duration",
    "createdAt": "2026-10-16T07:07:08.495Z",
    "tone": "warning"
  },
  {
    "id": "activity-1792133468085",
    "workId": "system",
    "actorId": "person-1789737923403",
    "message": "started a 15-minute Break",
    "createdAt": "2026-10-16T06:51:08.085Z",
    "tone": "warning"
  },
  {
    "id": "activity-1792130016525",
    "workId": "system",
    "actorId": "person-1789738443448",
    "message": "Auto-logged out: Exceeded Break duration",
    "createdAt": "2026-10-16T05:53:36.525Z",
    "tone": "warning"
  },
  {
    "id": "activity-1792130009015",
    "workId": "system",
    "actorId": "person-1789738156900",
    "message": "Auto-logged out: Exceeded Break duration",
    "createdAt": "2026-10-16T05:53:29.015Z",
    "tone": "warning"
  },
  {
    "id": "activity-1792129992032",
    "workId": "system",
    "actorId": "person-1789544813478",
    "message": "Auto-logged out: Exceeded Break duration",
    "createdAt": "2026-10-16T05:53:12.032Z",
    "tone": "warning"
  },
  {
    "id": "activity-1792129990091",
    "workId": "system",
    "actorId": "person-1789544916637",
    "message": "Auto-logged out: Exceeded Break duration",
    "createdAt": "2026-10-16T05:53:10.091Z",
    "tone": "warning"
  },
  {
    "id": "activity-1792129951044",
    "workId": "system",
    "actorId": "person-1789737883615",
    "message": "Auto-logged out: Break pool completed",
    "createdAt": "2026-10-16T05:52:31.044Z",
    "tone": "warning"
  },
  {
    "id": "activity-1792129020620",
    "workId": "system",
    "actorId": "person-1789738156900",
    "message": "started a 15-minute Break",
    "createdAt": "2026-10-16T05:37:00.620Z",
    "tone": "warning"
  },
  {
    "id": "activity-1792129020353",
    "workId": "system",
    "actorId": "person-1789737883615",
    "message": "started Break (15m session, 75m total pool left)",
    "createdAt": "2026-10-16T05:37:00.353Z",
    "tone": "warning"
  },
  {
    "id": "activity-1792129017292",
    "workId": "system",
    "actorId": "person-1789544813478",
    "message": "started a 15-minute Break",
    "createdAt": "2026-10-16T05:36:57.292Z",
    "tone": "warning"
  },
  {
    "id": "activity-1792129015373",
    "workId": "system",
    "actorId": "person-1789738443448",
    "message": "started a 15-minute Break",
    "createdAt": "2026-10-16T05:36:55.373Z",
    "tone": "warning"
  },
  {
    "id": "activity-1792129013082",
    "workId": "system",
    "actorId": "person-1789544916637",
    "message": "started a 15-minute Break",
    "createdAt": "2026-10-16T05:36:53.083Z",
    "tone": "warning"
  },
  {
    "id": "activity-1792071032674",
    "workId": "system",
    "actorId": "person-1789737883615",
    "message": "EMERGENCY EARLY LOGOUT (UNAPPROVED by Founder/HR) (8h 34m worked). No reason provided",
    "createdAt": "2026-10-15T13:30:32.674Z",
    "tone": "danger"
  },
  {
    "id": "activity-1792059674312",
    "workId": "system",
    "actorId": "person-1789737923403",
    "message": "returned early from Lunch",
    "createdAt": "2026-10-15T10:21:14.313Z",
    "tone": "success"
  },
  {
    "id": "activity-1792057080582",
    "workId": "system",
    "actorId": "person-1789738443448",
    "message": "returned early from Lunch",
    "createdAt": "2026-10-15T09:38:00.582Z",
    "tone": "success"
  },
  {
    "id": "activity-1792056711440",
    "workId": "system",
    "actorId": "person-1789737923403",
    "message": "started a 1-hour Lunch",
    "createdAt": "2026-10-15T09:31:51.440Z",
    "tone": "warning"
  },
  {
    "id": "activity-1792056391573",
    "workId": "system",
    "actorId": "person-1789549176116",
    "message": "returned early from Lunch",
    "createdAt": "2026-10-15T09:26:31.573Z",
    "tone": "success"
  },
  {
    "id": "activity-1792054658429",
    "workId": "system",
    "actorId": "person-1789549176116",
    "message": "started a 1-hour Lunch",
    "createdAt": "2026-10-15T08:57:38.429Z",
    "tone": "warning"
  },
  {
    "id": "activity-1792054629021",
    "workId": "system",
    "actorId": "person-1789738443448",
    "message": "started a 1-hour Lunch",
    "createdAt": "2026-10-15T08:57:09.021Z",
    "tone": "warning"
  },
  {
    "id": "activity-1792045169664",
    "workId": "system",
    "actorId": "person-1789737883615",
    "message": "Auto-logged out: Break pool completed",
    "createdAt": "2026-10-15T06:19:29.664Z",
    "tone": "warning"
  },
  {
    "id": "activity-1792044225124",
    "workId": "system",
    "actorId": "person-1789737883615",
    "message": "started Break (15m session, 75m total pool left)",
    "createdAt": "2026-10-15T06:03:45.124Z",
    "tone": "warning"
  },
  {
    "id": "activity-1791984673883",
    "workId": "system",
    "actorId": "person-1789737883615",
    "message": "Completed full 9-hour shift. Automatically logged out for the day.",
    "createdAt": "2026-10-14T13:31:13.883Z",
    "tone": "success"
  },
  {
    "id": "activity-1791968346415",
    "workId": "system",
    "actorId": "person-1789738156900",
    "message": "Auto-logged out: Exceeded Lunch duration",
    "createdAt": "2026-10-14T08:59:06.415Z",
    "tone": "warning"
  },
  {
    "id": "activity-1791966762157",
    "workId": "system",
    "actorId": "person-1789549176116",
    "message": "returned early from Lunch",
    "createdAt": "2026-10-14T08:32:42.157Z",
    "tone": "success"
  },
  {
    "id": "activity-1791966751038",
    "workId": "work-1789795990634",
    "actorId": "person-1789549176116",
    "message": "submitted work for manager review on nail stories rate card ",
    "createdAt": "2026-10-14T08:32:31.038Z",
    "tone": "normal"
  },
  {
    "id": "activity-1791966750890",
    "workId": "work-1789795990634",
    "actorId": "person-1789549176116",
    "message": "started work on nail stories rate card ",
    "createdAt": "2026-10-14T08:32:30.890Z",
    "tone": "normal"
  },
  {
    "id": "activity-1791964679684",
    "workId": "system",
    "actorId": "person-1789738156900",
    "message": "started a 1-hour Lunch",
    "createdAt": "2026-10-14T07:57:59.684Z",
    "tone": "warning"
  },
  {
    "id": "activity-1791964677650",
    "workId": "system",
    "actorId": "person-1789738156900",
    "message": "started a 15-minute Break",
    "createdAt": "2026-10-14T07:57:57.650Z",
    "tone": "warning"
  },
  {
    "id": "activity-1791964638509",
    "workId": "system",
    "actorId": "person-1789549176116",
    "message": "started a 1-hour Lunch",
    "createdAt": "2026-10-14T07:57:18.509Z",
    "tone": "warning"
  },
  {
    "id": "activity-1791964573506",
    "workId": "system",
    "actorId": "person-1789737883615",
    "message": "started Lunch (60m session, 75m total pool left)",
    "createdAt": "2026-10-14T07:56:13.506Z",
    "tone": "warning"
  },
  {
    "id": "activity-1791961913470",
    "workId": "system",
    "actorId": "person-1791175695081",
    "message": "Auto-logged out: Exceeded Break duration",
    "createdAt": "2026-10-14T07:11:53.470Z",
    "tone": "warning"
  },
  {
    "id": "activity-1791960948667",
    "workId": "system",
    "actorId": "person-1791175695081",
    "message": "started a 15-minute Break",
    "createdAt": "2026-10-14T06:55:48.667Z",
    "tone": "warning"
  },
  {
    "id": "activity-1791951632448",
    "workId": "system",
    "actorId": "person-1791175695081",
    "message": "returned early from Break",
    "createdAt": "2026-10-14T04:20:32.448Z",
    "tone": "success"
  },
  {
    "id": "activity-1791951628563",
    "workId": "system",
    "actorId": "person-1791175695081",
    "message": "started a 15-minute Break",
    "createdAt": "2026-10-14T04:20:28.563Z",
    "tone": "warning"
  },
  {
    "id": "activity-1791950430226",
    "workId": "work-1789796247298",
    "actorId": "person-1789544813478",
    "message": "requested revision on post design 2 ",
    "createdAt": "2026-10-14T04:00:30.226Z",
    "tone": "warning"
  },
  {
    "id": "activity-1791950425195",
    "workId": "work-1789796247298",
    "actorId": "person-1789544813478",
    "message": "requested revision on post design",
    "createdAt": "2026-10-14T04:00:25.195Z",
    "tone": "warning"
  },
  {
    "id": "activity-1791950418951",
    "workId": "work-1789796033110",
    "actorId": "person-1789544813478",
    "message": "requested revision on pickleball carousel this and........",
    "createdAt": "2026-10-14T04:00:18.951Z",
    "tone": "warning"
  },
  {
    "id": "activity-1791950407581",
    "workId": "work-1789796033110",
    "actorId": "person-1789544813478",
    "message": "approved task and forwarded to Founder on im busy content",
    "createdAt": "2026-10-14T04:00:07.581Z",
    "tone": "normal"
  },
  {
    "id": "activity-1791950399643",
    "workId": "work-1789796247298",
    "actorId": "person-1789544813478",
    "message": "requested revision on post design 3 ",
    "createdAt": "2026-10-14T03:59:59.643Z",
    "tone": "warning"
  },
  {
    "id": "activity-1791950394350",
    "workId": "work-1789796247298",
    "actorId": "person-1789544813478",
    "message": "requested revision on know your cover ",
    "createdAt": "2026-10-14T03:59:54.350Z",
    "tone": "warning"
  },
  {
    "id": "activity-1791949788773",
    "workId": "system",
    "actorId": "person-1789544851698",
    "message": "Completed full 9-hour shift. Automatically logged out for the day.",
    "createdAt": "2026-10-14T03:49:48.773Z",
    "tone": "success"
  }
];
