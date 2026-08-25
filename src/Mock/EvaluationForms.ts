export const goalEvaluationForms = [
  {
    id: "reduce-production-system-downtime",
    title: "Reduce Production System Downtime",
    weight: 30,
    description:
      "Maintain 99.9% uptime across core platforms and reduce unplanned outages by 20% compared to the previous cycle.",
    status: "complete",
    selfRating: 4,
    ratingLabel: "Exceeds Expectations",
    comments:
      "Reduced average incident count from 12 to 7 per quarter by introducing automated health checks and a revised on-call rotation. One major outage in March fell outside target, largely due to a third-party API failure outside our infrastructure.",
  },
  {
    id: "cloud-infrastructure-migration",
    title: "Cloud Infrastructure Migration",
    weight: 25,
    description:
      "Migrate remaining legacy on-prem servers to the cloud platform by end of Q2, with zero data loss.",
    status: "complete",
    selfRating: 3,
    ratingLabel: "Meets Expectations",
    comments:
      "Completed migration for 18 of 22 legacy servers. The remaining 4 are tied to a vendor contract renewal expected in July, which pushed the final phase past the original deadline.",
  },
  {
    id: "helpdesk-response-time-improvement",
    title: "Helpdesk Response Time Improvement",
    weight: 15,
    description:
      "Bring average ticket resolution time under 4 hours for priority 1 and 2 tickets.",
    status: "comment-pending",
    selfRating: 5,
    ratingLabel: "Outstanding",
    comments: "",
  },
  {
    id: "mentor-junior-it-staff",
    title: "Mentor Junior IT Staff",
    weight: 15,
    description:
      "Provide structured mentorship to two junior engineers, including monthly 1:1s and a shared learning plan.",
    status: "not-started",
    selfRating: null,
    ratingLabel: null,
    comments: "",
  },
];

export const ratingOptions = [
  { value: 1, label: "Needs Significant Improvement" },
  { value: 2, label: "Needs Improvement" },
  { value: 3, label: "Meets Expectations" },
  { value: 4, label: "Exceeds Expectations" },
  { value: 5, label: "Outstanding" },
];

export const evaluationCommentPlaceholder =
  "Add context for your manager — what changed, and what evidence backs this rating?";
