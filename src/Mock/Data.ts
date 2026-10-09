import { 
  CheckCircleOutlined, 
  BarChartOutlined, 
  CheckSquareOutlined, 
  ClockCircleOutlined,
  TeamOutlined,
  StarOutlined,
  CoffeeOutlined,
  MessageOutlined,
  CheckOutlined,
  ApartmentOutlined,
  AimOutlined,
  RiseOutlined,
  WarningOutlined,
  PlayCircleOutlined,
  EditOutlined,
  LineChartOutlined,
  CalendarOutlined,
 

} from "@ant-design/icons";

export interface Metric {
  title: string;
  value: string | number;
  change: string;
  status: string;
  icon: typeof CheckCircleOutlined;
  iconClassName: string;
}

export interface superMetric {
  title : string;
  value:string;
  description : string;
}

export const Metrics: Metric[] = [
  {
    title: "Total employees",
    value: 1248,
    change: "+3.4%",
    status: "this quarter",
    icon: TeamOutlined,
    iconClassName: "bg-violet-50 text-violet-600",
  },
  {
    title: "Average appraisal score",
    value: "3.8 / 5",
    change: "+0.2",
    status: "vs last cycle",
    icon: StarOutlined,
    iconClassName: "bg-amber-50 text-amber-600",
  },
  {
    title: "Pending reviews completed",
    value: "72%",
    change: "28%",
    status: "due this week",
    icon: CheckCircleOutlined,
    iconClassName: "bg-emerald-50 text-emerald-600",
  }
];


export const employeeStats:superMetric[] = [
  {
    title: "Employees Managed",
    value: "1,248",
    description: "Across 6 departments",
  },
  {
    title: "Cycles Completed",
    value: "14",
    description: "+2 this year",
  },
  {
    title: "Approvals Processed",
    value: "328",
    description: "94% within SLA",
  },
  {
    title: "Tenure",
    value: "3 yr 7 mo",
    description: "Joined Jan 2023",
  },
];



export const evaluationMetrics = [

  {
    id: "overall-progress",
    title: "Overall Progress",
    value: "65%",
    description: "4 of 6 sections done",
    icon: CheckCircleOutlined,
    iconClassName: "bg-violet-50 text-violet-600",
  },
  {
    id: "goals-rated",
    title: "Goals Rated",
    value: "4 / 6",
    description: "2 pending self-rating",
    icon: BarChartOutlined,
    iconClassName: "bg-blue-50 text-blue-600",
  },
  {
    id: "competencies-rated",
    title: "Competencies Rated",
    value: "2 / 4",
    description: "On track",
    icon: CheckSquareOutlined,
    iconClassName: "bg-teal-50 text-teal-600",
  },
  {
    id: "days-remaining",
    title: "Days Remaining",
    value: "5 days",
    description: "Due Aug 25, 2026",
    icon: ClockCircleOutlined,
    iconClassName: "bg-amber-50 text-amber-600",
  },
];




export const teamEvaluationMetrics = [
  {
    id: "direct-reports",
    title: "Direct Reports",
    value: "7",
    description: "IT Administration",
    icon: TeamOutlined,
    iconClassName: "bg-violet-50 text-violet-600",
  },
  {
    id: "self-assessments-submitted",
    title: "Self-Assessments Submitted",
    value: "5 / 7",
    description: "2 not started",
    icon: CheckCircleOutlined,
    iconClassName: "bg-blue-50 text-blue-600",
  },
  {
    id: "reviews-completed",
    title: "Reviews Completed",
    value: "1 / 7",
    description: "6 awaiting your input",
    icon: StarOutlined,
    iconClassName: "bg-amber-50 text-amber-600",
  },
  {
    id: "manager-review-due",
    title: "Manager Review Due",
    value: "11 days",
    description: "Sep 5, 2026",
    icon: ClockCircleOutlined,
    iconClassName: "bg-red-50 text-red-500",
  },
];


export const employeeMetrics = [
  {
    id: "total-employees",
    title: "Total Employees",
    value: 142,
    description: "Across 6 departments",
    icon: TeamOutlined,
    iconClassName: "bg-violet-50 text-violet-600",
  },
  {
    id: "active-accounts",
    title: "Active Accounts",
    value: 128,
    description: "90% of workforce",
    icon: CheckOutlined,
    iconClassName: "bg-emerald-50 text-emerald-600",
  },
  {
    id: "pending-invites",
    title: "Pending Invites",
    value: 9,
    description: "3 sent over a week ago",
    icon: MessageOutlined,
    iconClassName: "bg-amber-50 text-amber-600",
  },
  {
    id: "departments",
    title: "Departments",
    value: 6,
    description: "Sales & Marketing largest",
    icon: ApartmentOutlined,
    iconClassName: "bg-teal-50 text-teal-600",
  },
  {
    id: "on-leave",
    title: "On Leave",
    value: 5,
    description: "3 returning this week",
    icon: CoffeeOutlined,
    iconClassName: "bg-rose-50 text-rose-600",
  },
];

export const goalMetrics = [
  {
    id: "total-goals",
    title: "Total Goals",
    value: 48,
    description: "Across H1 2026",
    icon: AimOutlined,
    iconClassName: "bg-violet-50 text-violet-600",
  },
  {
    id: "on-track",
    title: "On Track",
    value: 31,
    description: "65% of all goals",
    icon: RiseOutlined,
    iconClassName: "bg-emerald-50 text-emerald-600",
  },
  {
    id: "at-risk",
    title: "At Risk",
    value: 9,
    description: "Require attention",
    icon: WarningOutlined,
    iconClassName: "bg-amber-50 text-amber-600",
  },
  {
    id: "completed",
    title: "Completed",
    value: 8,
    description: "This review cycle",
    icon: CheckCircleOutlined,
    iconClassName: "bg-teal-50 text-teal-600",
  },
];


export const cycleMetrics = [
  {
    id: "active-cycles",
    title: "Active Cycles",
    value: 2,
    description: "Q3 review in progress",
    icon: PlayCircleOutlined,
    iconClassName: "bg-violet-50 text-violet-600",
  },
  {
    id: "draft-cycles",
    title: "Draft Cycles",
    value: 2,
    description: "Awaiting configuration",
    icon: EditOutlined,
    iconClassName: "bg-amber-50 text-amber-600",
  },
  {
    id: "completed-cycles",
    title: "Completed Cycles",
    value: 14,
    description: "Since Jan 2024",
    icon: CheckCircleOutlined,
    iconClassName: "bg-emerald-50 text-emerald-600",
  },
  {
    id: "average-completion",
    title: "Avg. Completion",
    value: "87%",
    description: "Across last 3 cycles",
    icon: LineChartOutlined,
    iconClassName: "bg-teal-50 text-teal-600",
  },
  {
    id: "next-deadline",
    title: "Next Deadline",
    value: "5 days",
    description: "Manager reviews due",
    icon: CalendarOutlined,
    iconClassName: "bg-pink-50 text-pink-600",
  },
];