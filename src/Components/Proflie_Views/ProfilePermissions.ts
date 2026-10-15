export interface ProfilePermission {
  id: string;
  title: string;
  description: string;
  accessLabel: string;
}

export const profilePermissions: ProfilePermission[] = [
  {
    id: "manage-users",
    title: "Manage all users",
    description: "Add, edit, and deactivate employee accounts.",
    accessLabel: "Full access",
  },
  {
    id: "manage-cycles",
    title: "Create & close cycles",
    description: "Configure and manage organization appraisal cycles.",
    accessLabel: "Full access",
  },
  {
    id: "final-approval",
    title: "Final appraisal approval",
    description: "Review and approve completed employee appraisals.",
    accessLabel: "Approver",
  },
  {
    id: "export-reports",
    title: "Export system reports",
    description: "Download appraisal and performance reports.",
    accessLabel: "Allowed",
  },
];
