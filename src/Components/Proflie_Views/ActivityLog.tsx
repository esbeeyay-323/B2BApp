import { Button, Table } from "antd";
import type { ReactNode } from "react";
import type { TableProps } from "antd";
import {
  CheckOutlined,
  PlusOutlined,
  EditOutlined,
  UserAddOutlined,
  BellOutlined,
  FileTextOutlined,
  ExportOutlined,
} from "@ant-design/icons";

interface ActivityItem {
  key: string;
  action: string;
  details: string;
  cycle: string;
  date: string;
  icon: ReactNode;
  iconClassName: string;
}


const activityData: ActivityItem[] = [
  {
    key: "1",
    action: "Approved appraisal",
    details: "Abena Owusu · Operations",
    cycle: "Q2 2026",
    date: "Aug 17, 2026",
    icon: <CheckOutlined />,
    iconClassName: "bg-emerald-50 text-emerald-600",
  },
  {
    key: "2",
    action: "Started cycle",
    details: "All departments",
    cycle: "Q2 2026",
    date: "Aug 14, 2026",
    icon: <PlusOutlined />,
    iconClassName: "bg-indigo-50 text-indigo-500",
  },
  {
    key: "3",
    action: "Updated rating scale",
    details: "4-point → 5-point",
    cycle: "Cycle Settings",
    date: "Aug 10, 2026",
    icon: <EditOutlined />,
    iconClassName: "bg-amber-50 text-amber-600",
  },
  {
    key: "4",
    action: "Added reviewer",
    details: "Kofi Mensah · Finance",
    cycle: "Q2 2026",
    date: "Aug 9, 2026",
    icon: <UserAddOutlined />,
    iconClassName: "bg-violet-50 text-violet-600",
  },
  {
    key: "5",
    action: "Sent reminders",
    details: "42 pending self-evaluations",
    cycle: "Q2 2026",
    date: "Aug 3, 2026",
    icon: <BellOutlined />,
    iconClassName: "bg-blue-50 text-blue-600",
  },
  {
    key: "6",
    action: "Exported report",
    details: "Q1 2026 appraisal summary",
    cycle: "Q1 2026",
    date: "Jul 28, 2026",
    icon: <FileTextOutlined />,
    iconClassName: "bg-gray-100 text-gray-600",
  },
];

const columns: TableProps<ActivityItem>["columns"] = [
  {
    title: "Action",
    dataIndex: "action",
    key: "action",
    width: "32%",
    render: (_, record) => (
      <div className="flex items-center gap-3">
        <span
          className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-[10px] text-sm ${record.iconClassName}`}
        >
          {record.icon}
        </span>

        <span className="font-semibold text-text">
          {record.action}
        </span>
      </div>
    ),
  },
  {
    title: "Details",
    dataIndex: "details",
    key: "details",
    width: "32%",
    render: (details: string) => (
      <span className="text-text-secondary">{details}</span>
    ),
  },
  {
    title: "Cycle",
    dataIndex: "cycle",
    key: "cycle",
    width: "18%",
    render: (cycle: string) => (
      <span className="text-text-secondary">{cycle}</span>
    ),
  },
  {
    title: "Date",
    dataIndex: "date",
    key: "date",
    width: "18%",
    render: (date: string) => (
      <span className="whitespace-nowrap text-text-secondary">
        {date}
      </span>
    ),
  },
];


const ActivityLog = () => {


    return (
        <>
        <div className="w-full flex flex-col shadow bg-white p-6 rounded-[18px]">
            <div className="mb-6 w-full flex justify-between">
            <div>
                <h2 className="text-[17px] font-bold text-text">
                Activity Log
                </h2>

                <p className="text-[14px] text-text-secondary">
                   Full history of actions taken on your account
                </p>
                </div>

                <Button icon = {<ExportOutlined/>}>Export CSV</Button>
            </div>
            <Table <ActivityItem>
                className="activity-table"
                columns={columns}
                dataSource={activityData}
                rowKey="key"
                pagination={false}
                tableLayout="fixed"
                scroll={{ x: 760 }}
            />

              
        </div>
        </>
    )

}

export default ActivityLog;