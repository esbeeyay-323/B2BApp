import { Avatar, Card } from "antd";
import {
  AuditOutlined,
  BarChartOutlined,
  PieChartOutlined,
} from "@ant-design/icons";
import Barcharts from "../../Components/Analytics/BarChart";
import DonutChart from "../../Components/Analytics/DonutChart";
import { Metrics, type Metric } from "../../Mock/Data";
import { MockUsers } from "../../Mock/Users";
import { cardClassName } from "../../Components/DesignUtils";


const approvalDetails = [
  {
    type: "Self appraisal",
    status: "Due today",
    statusClassName: "bg-red-50 text-red-600",
    avatarClassName: "bg-violet-100 text-violet-700",
  },
  {
    type: "Manager review",
    status: "Awaiting review",
    statusClassName: "bg-amber-50 text-amber-700",
    avatarClassName: "bg-emerald-100 text-emerald-700",
  },
  {
    type: "Final approval",
    status: "In progress",
    statusClassName: "bg-blue-50 text-blue-700",
    avatarClassName: "bg-blue-100 text-blue-700",
  },
  {
    type: "Final approval",
    status: "In progress",
    statusClassName: "bg-blue-50 text-blue-700",
    avatarClassName: "bg-blue-100 text-blue-700",
  },
];

const getInitials = (name: string) =>
  name
    .split(" ")
    .map((part) => part[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();

const DashboardHome = () => {
  return (
    <main className="flex  w-full flex-col bg-bg">
      

      <section className="m-6 mt-7 flex flex-col">
        <div className="mb-6 w-full">
          <h1 className="text-2xl font-semibold text-text">
            Welcome back, Sam Agyars
          </h1>
          <p className="text-sm font-normal text-text-secondary">
            Q2 2026 appraisal cycle · 12 days remaining
          </p>
        </div>

        <div className="mb-6 grid grid-cols-1 gap-4 md:grid-cols-3">
          {Metrics.map((metric: Metric) => {
            const MetricIcon = metric.icon;

            return (
              <Card
                key={metric.title}
                className={`w-full ${cardClassName}`}
                styles={{ body: { padding: 20 } }}
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="min-w-0">
                    <p className="mb-1.5 text-[13px] text-text-secondary">
                      {metric.title}
                    </p>
                    <p className="text-2xl font-medium text-text">{metric.value}</p>
                    <p className="mt-1.5 text-[13px] text-success">
                      {metric.change}{" "}
                      <span className="text-text-secondary">{metric.status}</span>
                    </p>
                  </div>

                  <span
                    aria-hidden="true"
                    className={`flex size-11 shrink-0 items-center justify-center rounded-card text-[19px] ${metric.iconClassName}`}
                  >
                    <MetricIcon />
                  </span>
                </div>
              </Card>
            );
          })}
        </div>

        <div className="grid w-full grid-cols-1 gap-4 xl:grid-cols-3">
          <Card
            title={<span className="flex items-center gap-2"><BarChartOutlined className="text-primary" />Appraisal by Department</span>}
            className={`h-105 ${cardClassName}`}
            styles={{ body: { padding: "16px 20px 20px" } }}
          >
            <Barcharts />
          </Card>

          <Card
            title={<span className="flex items-center gap-2"><PieChartOutlined className="text-primary" />Employee Reviews</span>}
            className={`h-105 ${cardClassName}`}
            styles={{ body: { padding: "16px 20px 20px" } }}
          >
            <DonutChart />
          </Card>

          <Card
            title={<span className="flex items-center gap-2"><AuditOutlined className="text-primary" />Pending Approvals</span>}
            className={`h-105 ${cardClassName}`}
            styles={{ body: { padding: "8px 20px 20px" } }}
          >
            <ul>
              {MockUsers.slice(0, 4).map((approval, index) => {
                const details = approvalDetails[index];

                return (
                  <li
                    key={approval.id}
                    className="grid grid-cols-[40px_minmax(0,1fr)_auto] items-center gap-3 border-b border-border py-5 last:border-b-0 transition-colors hover:bg-bg"
                  >
                    <Avatar
                      size={40}
                      className={`font-semibold ${details.avatarClassName}`}
                    >
                      {getInitials(approval.name)}
                    </Avatar>

                    <div className="min-w-0">
                      <p className="truncate font-medium leading-tight text-text">
                        {approval.name}
                      </p>
                      <p className="mt-1 truncate text-xs text-text-secondary">
                        {approval.department} · {details.type}
                      </p>
                    </div>

                    <span
                      className={`whitespace-nowrap rounded-full px-2.5 py-1 text-[11px] font-medium ${details.statusClassName}`}
                    >
                      {details.status}
                    </span>
                  </li>
                );
              })}
            </ul>
          </Card>
        </div>
      </section>
    </main>
  );
};

export default DashboardHome;
