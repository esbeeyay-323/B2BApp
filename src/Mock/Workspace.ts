export const workspace = {
  name: "Apex Forum",
  slug: "apex-forum",
  supportEmail: "people@apexforum.com",
  totalEmployees: 142,
  activeEmployees: 128,
  pendingInvites: 9,
  departments: 6,
  employeesOnLeave: 5,
} as const;

export const currentUserProfile = {
  id: "APX-0042",
  name: "Sam Agyars",
  email: "sam.agyars@apexforum.com",
  phone: "+233 543 323 3345",
  role: "Super Admin",
  department: "IT Administration",
  jobTitle: "Head of IT Administration",
  manager: "David Mensah",
  office: "Accra HQ",
  location: "Accra, Ghana",
  joinedDate: "Jan 2023",
  gender: "Prefer not to say",
  dateOfBirth: "Not provided",
  address: "Accra, Ghana",
  emergencyContact: "Not provided",
  employmentType: "Full-time",
} as const;

export const currentReviewCycle = {
  name: "H1 2026 Performance Review",
  shortName: "H1 2026",
  period: "Jan – Jun 2026",
  selfAssessmentDue: "Aug 25, 2026",
  managerReviewDue: "Sep 5, 2026",
  selfAssessmentDaysRemaining: 5,
  goals: 6,
  competencies: 4,
  teamAppraisals: 7,
} as const;

export const getInitials = (name: string) =>
  name
    .split(" ")
    .filter(Boolean)
    .map((part) => part[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();
