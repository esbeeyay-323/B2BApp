import {
    ApartmentOutlined,
    CalendarOutlined,
    ClockCircleOutlined,
    CloseOutlined,
    EnvironmentOutlined,
    MoreOutlined,
    SafetyCertificateOutlined,
    TeamOutlined,
    UserOutlined,
} from "@ant-design/icons";
import { Button } from "antd";
import type { StaffMember, StaffStatus } from "./Tables/StaffTable";

interface UserInfoProps {
    member: StaffMember | null;
    onClose: () => void;
}

const statusStyles: Record<StaffStatus, string> = {
    Active: "border-emerald-200 bg-emerald-50 text-emerald-700",
    Invited: "border-amber-200 bg-amber-50 text-amber-700",
    Inactive: "border-[#DDD9E8] bg-[#F4F3F8] text-[#77728D]",
};

const activityContent: Record<StaffStatus, { title: string; description: string; iconClassName: string }> = {
    Active: {
        title: "Account access is active",
        description: "This employee can sign in and use the permissions assigned to their role.",
        iconClassName: "bg-emerald-50 text-emerald-600",
    },
    Invited: {
        title: "Invitation is pending",
        description: "This employee needs to accept their invitation before they can sign in.",
        iconClassName: "bg-amber-50 text-amber-600",
    },
    Inactive: {
        title: "Account access is inactive",
        description: "This employee cannot sign in until their account is reactivated.",
        iconClassName: "bg-[#F1F0F7] text-[#77728D]",
    },
};

const UserInfo = ({ member, onClose }: UserInfoProps) => {
    if (!member) {
        return (
            <section className="flex min-h-105 items-center justify-center rounded-panel border border-dashed border-[#DCD9EA] bg-white px-8 py-12 shadow-panel">
                <div className="max-w-70 text-center">
                    <span className="mx-auto flex size-14 items-center justify-center rounded-full bg-primary-tint text-[22px] text-primary">
                        <TeamOutlined />
                    </span>
                    <h2 className="mb-0 mt-5 text-[17px] font-extrabold text-text">Select an employee</h2>
                    <p className="mb-0 mt-2 text-[13px] leading-5 text-text-secondary">
                        Choose a row from the staff table to view profile, access, and account details here.
                    </p>
                    <p className="mb-0 mt-5 text-[11px] font-semibold uppercase tracking-[0.08em] text-text-muted">
                        No employee selected
                    </p>
                </div>
            </section>
        );
    }

    const activity = activityContent[member.status];

    return (
        <section className="overflow-hidden rounded-panel border border-border bg-white shadow-panel">
            <header className="flex items-center justify-between border-b border-border px-5 py-4">
                <p className="m-0 text-[11px] font-extrabold uppercase tracking-[0.08em] text-[#77728D]">
                    Employee profile
                </p>
                <Button
                    aria-label="Close employee profile"
                    icon={<CloseOutlined />}
                    onClick={onClose}
                    shape="circle"
                    type="text"
                />
            </header>

            <div className="p-5 sm:p-6">
                <div className="flex items-start gap-4">
                    <span
                        className={`flex size-16 shrink-0 items-center justify-center rounded-full text-[22px] font-extrabold text-white shadow-sm ${member.avatarClassName}`}
                    >
                        {member.initials}
                    </span>
                    <div className="min-w-0 pt-1">
                        <h2 className="m-0 truncate text-[19px] font-extrabold text-text">{member.name}</h2>
                        <p className="m-0 mt-1 truncate text-[12px] text-text-secondary">{member.email}</p>
                        <span
                            className={`mt-2 inline-flex rounded-md border px-2.5 py-1 text-[11px] font-bold ${statusStyles[member.status]}`}
                        >
                            {member.status}
                        </span>
                    </div>
                </div>

                <dl className="mt-6 grid grid-cols-2 border-y border-border py-5">
                    <div className="border-b border-r border-border pb-4 pr-3">
                        <dt className="flex items-center gap-2 text-[11px] text-text-secondary">
                            <ApartmentOutlined className="text-[15px]" /> Department
                        </dt>
                        <dd className="m-0 mt-1 pl-6 text-[12px] font-bold text-text">{member.department}</dd>
                    </div>
                    <div className="border-b border-border pb-4 pl-4">
                        <dt className="flex items-center gap-2 text-[11px] text-text-secondary">
                            <SafetyCertificateOutlined className="text-[15px]" /> Access role
                        </dt>
                        <dd className="m-0 mt-1 pl-6 text-[12px] font-bold text-text">{member.accessRole}</dd>
                    </div>
                    <div className="border-r border-border pr-3 pt-4">
                        <dt className="flex items-center gap-2 text-[11px] text-text-secondary">
                            <EnvironmentOutlined className="text-[15px]" /> Location
                        </dt>
                        <dd className="m-0 mt-1 pl-6 text-[12px] font-bold text-text">{member.location}</dd>
                    </div>
                    <div className="pl-4 pt-4">
                        <dt className="flex items-center gap-2 text-[11px] text-text-secondary">
                            <CalendarOutlined className="text-[15px]" /> Joined
                        </dt>
                        <dd className="m-0 mt-1 pl-6 text-[12px] font-bold text-text">{member.joinedDate}</dd>
                    </div>
                </dl>

                <div className="mt-5">
                    <p className="m-0 text-[10px] font-extrabold uppercase tracking-[0.08em] text-text-secondary">
                        Reporting
                    </p>
                    <div className="mt-2 flex items-center gap-3 rounded-card border border-border bg-[#FAFAFD] p-3.5">
                        <span className="flex size-9 shrink-0 items-center justify-center rounded-control bg-white text-primary shadow-sm">
                            <UserOutlined />
                        </span>
                        <div>
                            <p className="m-0 text-[11px] text-text-secondary">Manager</p>
                            <p className="m-0 mt-0.5 text-[13px] font-bold text-text">
                                {member.manager === "—" || member.manager === "â€”" ? "No manager assigned" : member.manager}
                            </p>
                        </div>
                    </div>
                </div>

                <div className="mt-5">
                    <p className="m-0 text-[10px] font-extrabold uppercase tracking-[0.08em] text-text-secondary">
                        Account activity
                    </p>
                    <div className="mt-2 rounded-card border border-border p-4">
                        <div className="flex items-start gap-3">
                            <span
                                className={`flex size-9 shrink-0 items-center justify-center rounded-control ${activity.iconClassName}`}
                            >
                                <ClockCircleOutlined />
                            </span>
                            <div className="min-w-0">
                                <p className="m-0 text-[13px] font-bold text-text">{activity.title}</p>
                                <p className="m-0 mt-1 text-[11px] leading-4 text-text-secondary">
                                    {activity.description}
                                </p>
                                <p className="m-0 mt-2 text-[11px] font-semibold text-[#625D7C]">
                                    Last active: {member.lastActive}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="mt-6 flex gap-3">
                    <Button className="min-w-0 flex-1 font-bold" type="primary">
                        View full profile
                    </Button>
                    <Button aria-label={`More actions for ${member.name}`} icon={<MoreOutlined />} />
                </div>
            </div>
        </section>
    );
};

export default UserInfo;
