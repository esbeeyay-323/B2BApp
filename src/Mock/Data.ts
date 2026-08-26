import { 
  CheckCircleOutlined, 
  BarChartOutlined, 
  CheckSquareOutlined, 
  ClockCircleOutlined,
  TeamOutlined,
  StarOutlined, 
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
