import TwoSideInput from "../Forms/TwoSideInput";
import {
  CheckOutlined,
  EditOutlined,
  PlusOutlined,
  TeamOutlined,
} from "@ant-design/icons";
import type { ReactNode } from "react";
import AccountSecurity from "./RecentActivity";

interface Activity {
  id: number;
  title: string;
  time: string;
  icon: ReactNode;
  iconClassName: string;
}

const permissions = [
  "Manage all users",
  "Create & close cycles",
  "Final appraisal approval",
  "Export system reports",
];


const activities: Activity[] = [
  {
    id: 1,
    title: "Approved final appraisal for Abena Owusu · Operations",
    time: "2 hours ago",
    icon: <CheckOutlined />,
    iconClassName: "bg-emerald-50 text-emerald-600",
  },
  {
    id: 2,
    title: "Started Q2 2026 Appraisal Cycle for all departments",
    time: "3 days ago",
    icon: <PlusOutlined />,
    iconClassName: "bg-indigo-50 text-indigo-500",
  },
  {
    id: 3,
    title: "Updated rating scale from 4-point to 5-point in Cycle Settings",
    time: "1 week ago",
    icon: <EditOutlined />,
    iconClassName: "bg-amber-50 text-amber-600",
  },
  {
    id: 4,
    title: "Added Kofi Mensah as reviewer for Finance department",
    time: "1 week ago",
    icon: <TeamOutlined />,
    iconClassName: "bg-violet-50 text-violet-600",
  },
];


const Overview =() => {

    return (<>
         <div className="flex w-full min-w-0 flex-col gap-6 xl:flex-row xl:justify-center">
        <div className="flex w-full min-w-0 flex-col gap-6 xl:w-66/100">
            <div className="flex w-full flex-col gap-2.5 rounded-panel border border-border bg-white p-4 shadow-panel sm:p-6">
             <div className="mb-3">
          <h2 className="text-[15px] font-bold text-text">
           Personal Information
          </h2>

          <p className="text-[13px] text-text-secondary">
            Your basic profile details
          </p>
        </div>
            {<TwoSideInput 
            sectionOne = "FULLNAME"
            sectionTwo = "EMPLOYEE ID"
            />}
            {<TwoSideInput 
            sectionOne = "DEPARTMENT"
            sectionTwo = "JOB TITLE"
            />}
            {<TwoSideInput 
            sectionOne = "DATE JOINED"
            sectionTwo = "REPORTING TO"
            />}
        </div>
            <div className="w-full rounded-panel border border-border bg-white shadow-panel">
               <div className="p-4 sm:p-6">
        <div className="mb-3">
          <h2 className="text-[15px] font-bold text-text">
            Recent Activity
          </h2>

          <p className="text-[13px] text-text-secondary">
            Latest actions on your account
          </p>
        </div>

        <ul className="divide-y divide-border">
          {activities.map((activity) => (
            <li
              key={activity.id}
              className="grid grid-cols-[36px_minmax(0,1fr)] items-center gap-3 py-3"
            >
              <div
                className={`flex h-9 w-9 items-center justify-center rounded-control text-sm ${activity.iconClassName}`}
              >
                {activity.icon}
              </div>

              <div className="min-w-0">
                <p className="break-words text-[13px] font-semibold text-text sm:text-[14px]">
                  {activity.title}
                </p>

                <p className="mt-0.5 text-[12px] text-text-secondary">
                  {activity.time}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </div>
      </div>
        </div>



        <div className="flex w-full min-w-0 flex-col gap-6 md:flex-row xl:w-31/100 xl:flex-col">
          <div className="w-full rounded-panel border border-border bg-white p-4 shadow-panel sm:p-6 md:flex-1">
            {<AccountSecurity/>}
          </div>
          <div className="w-full rounded-panel border border-border bg-white p-4 shadow-panel sm:p-6 md:flex-1">
            <div className="mb-4">
          <h2 className="text-[16px] font-bold text-text">
            Permissions
          </h2>

          <p className="text-[12px] text-text-secondary">
            Granted by your Super Admin role
          </p>
        </div>

        <ul className="space-y-3">
          {permissions.map((permission) => (
            <li
              key={permission}
              className="flex items-center gap-3"
            >
              <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-md bg-emerald-50 text-[11px] text-emerald-600">
                <CheckOutlined />
              </span>

              <span className="text-[13px] font-semibold text-text">
                {permission}
              </span>
            </li>
          ))}
        </ul>
          </div>
        </div>
    </div>

    </>)
}

export default Overview;
