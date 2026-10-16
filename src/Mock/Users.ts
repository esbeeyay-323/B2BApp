import type { User } from "../Types/auth";
import { currentUserProfile } from "./Workspace";

export const MockUsers: User[] = [
  {
    id: currentUserProfile.id,
    name: currentUserProfile.name,
    email: currentUserProfile.email,
    password: "JohnD0e@2026!",
    role: "SuperAdmin",
    department: currentUserProfile.department,
  },
  {
    id: "a7e4c9d1-2f6b-4e3a-8c5d-9b1f4a7e2c6d",
    name: "Ama Serwaa",
    email: "ama.serwaa@apexforum.com",
    password: "AmaS3rwaa#1",
    role: "Manager",
    department: "Human Resources"
  },
  {
    id: "5b8f2e7a-1c4d-4b6e-9a3f-7d2c8e5b1a4f",
    name: "Kofi Mensah",
    email: "kofi.mensah@apexforum.com",
    password: "K0fiMensah$5",
    role: "Employee",
    department: "Finance"
  },
  {
    id: "9c2d6a4e-3f8b-4c1a-b7e5-2a9d4c6f8b3e",
    name: "Abena Owusu",
    email: "abena.owusu@apexforum.com",
    password: "Ab3naOwusu!7",
    role: "Employee",
    department: "Operations"
  },
  {
    id: "2e6b9d3a-7c1f-4e8b-a5d2-6f3c9b1e7a4d",
    name: "Yaw Darko",
    email: "yaw.darko@apexforum.com",
    password: "YawD@rko2024",
    role: "Manager",
    department: "Sales"
  },
  {
    id: "7a4e1c8d-9b3f-4d6a-8e2c-1f7b4d9a3e6c",
    name: "Akosua Asante",
    email: "akosua.asante@apexforum.com",
    password: "Ak0suaA$ante",
    role: "Employee",
    department: "Marketing"
  },
  {
    id: "4d8f3b6e-2a9c-4f1d-b6e4-8c2a5f9d3b7e",
    name: "Kwabena Osei",
    email: "kwabena.osei@apexforum.com",
    password: "Kwab3naO#ei",
    role: "Employee",
    department: "IT"
  },
  {
    id: "1f6c9e4b-8d2a-4b7f-9c5e-3a6d8f1b4e9c",
    name: "Efua Ampofo",
    email: "efua.ampofo@apexforum.com",
    password: "Efu@Ampofo9",
    role: "Manager",
    department: "Quality Assurance"
  },
  {
    id: "8e3a7d1c-4f9b-4e2a-8d6c-9b3e7a2f4d1c",
    name: "Kojo Appiah",
    email: "kojo.appiah@apexforum.com",
    password: "K0joApp!ah4",
    role: "Employee",
    department: "Customer Support"
  },
  {
    id: "6c1d4a8e-3b7f-4a9c-b2e6-4d8a1c7f9b3e",
    name: "Adwoa Frimpong",
    email: "adwoa.frimpong@apexforum.com",
    password: "Adw0@Frimp2024",
    role: "SuperAdmin",
    department: "Executive"
  }
];
