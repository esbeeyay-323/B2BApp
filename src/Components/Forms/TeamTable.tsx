import { useMemo, useState } from "react";
import { Button, Grid, Table } from "antd";
import type { TableProps } from "antd";

type SelfAssessmentStatus = "Complete" | "Not started";
type ManagerReviewStatus = "Not started" | "In progress" | "Complete";
type TeamFilter = "all" | "awaiting-review" | "not-started" | "complete";

interface TeamMember {
    id: number;
    name: string;
    role: string;
    avatarColor: string;
    selfAssessment: SelfAssessmentStatus;
    selfAssessmentResult?: string;
    managerReview: ManagerReviewStatus;
    deadline: string;
}

const teamMembers: TeamMember[] = [
    {
        id: 1,
        name: "Kwame Owusu",
        role: "Systems Administrator",
        avatarColor: "bg-[#6C5DF4]",
        selfAssessment: "Complete",
        selfAssessmentResult: "Avg 4.2 · Exceeds",
        managerReview: "Not started",
        deadline: "5 days left",
    },
    {
        id: 2,
        name: "Ama Boateng",
        role: "Network Engineer",
        avatarColor: "bg-[#3E75E9]",
        selfAssessment: "Complete",
        selfAssessmentResult: "Avg 3.8 · Meets",
        managerReview: "In progress",
        deadline: "5 days left",
    },
    {
        id: 3,
        name: "Abena Osei",
        role: "Junior Systems Admin",
        avatarColor: "bg-[#625DF5]",
        selfAssessment: "Complete",
        selfAssessmentResult: "Avg 3.4 · Meets",
        managerReview: "In progress",
        deadline: "5 days left",
    },
    {
        id: 4,
        name: "Nana Adjei",
        role: "Security Analyst",
        avatarColor: "bg-[#10AEC4]",
        selfAssessment: "Complete",
        selfAssessmentResult: "Avg 4.0 · Exceeds",
        managerReview: "Not started",
        deadline: "5 days left",
    },
    {
        id: 5,
        name: "Kofi Mensah",
        role: "IT Support Specialist",
        avatarColor: "bg-[#F48B52]",
        selfAssessment: "Not started",
        managerReview: "Not started",
        deadline: "8 days left",
    },
    {
        id: 6,
        name: "Esi Arthur",
        role: "Cloud Engineer",
        avatarColor: "bg-[#22A06B]",
        selfAssessment: "Complete",
        selfAssessmentResult: "Avg 4.4 · Exceeds",
        managerReview: "Complete",
        deadline: "Completed",
    },
    {
        id: 7,
        name: "Yaw Asante",
        role: "Database Administrator",
        avatarColor: "bg-[#9A5DE9]",
        selfAssessment: "Complete",
        selfAssessmentResult: "Avg 3.7 · Meets",
        managerReview: "Not started",
        deadline: "8 days left",
    },
];

const getInitials = (name: string) =>
    name
        .split(" ")
        .map((part) => part[0])
        .join("")
        .slice(0, 2)
        .toUpperCase();

const reviewStatusClasses: Record<ManagerReviewStatus, string> = {
    "Not started": "bg-[#F1F0F8] text-[#77728D] before:bg-[#C6C2DC]",
    "In progress": "bg-[#FFF1D9] text-[#B36B00] before:bg-[#F5A623]",
    Complete: "bg-emerald-50 text-emerald-700 before:bg-emerald-500",
};

const TeamTable = () => {
    const [activeFilter, setActiveFilter] = useState<TeamFilter>("all");
    const [sortOrder, setSortOrder] = useState<"asc" | "desc">("asc");

    const smallScreen = Grid.useBreakpoint();
    const smallScreenWidth = smallScreen.md? 220:120


    const counts = useMemo(
        () => ({
            all: teamMembers.length,
            awaitingReview: teamMembers.filter((member) => member.managerReview !== "Complete").length,
            notStarted: teamMembers.filter((member) => member.selfAssessment === "Not started").length,
            complete: teamMembers.filter((member) => member.managerReview === "Complete").length,
        }),
        [],
    );

    const visibleMembers = useMemo(() => {
        const filteredMembers = teamMembers.filter((member) => {
            if (activeFilter === "awaiting-review") return member.managerReview !== "Complete";
            if (activeFilter === "not-started") return member.selfAssessment === "Not started";
            if (activeFilter === "complete") return member.managerReview === "Complete";
            return true;
        });

        return [...filteredMembers].sort((first, second) => {
            const comparison = first.name.localeCompare(second.name);
            return sortOrder === "asc" ? comparison : -comparison;
        });
    }, [activeFilter, sortOrder]);

    const filters: { id: TeamFilter; label: string; count: number }[] = [
        { id: "all", label: "All", count: counts.all },
        { id: "awaiting-review", label: "Awaiting your review", count: counts.awaitingReview },
        { id: "not-started", label: "Not started", count: counts.notStarted },
        { id: "complete", label: "Complete", count: counts.complete },
    ];

    const columns: TableProps<TeamMember>["columns"] = [
        {
            title: "Employee",
            dataIndex: "name",
            key: "employee",
            fixed: "left",
            width: smallScreenWidth,
            rowScope: "row",
            render: (_, member) => (
                <div className="flex min-w-0 items-center gap-3">
                    <span
                        className={`flex size-10 shrink-0 items-center justify-center rounded-full text-[12px] font-extrabold text-white ${member.avatarColor}`}
                    >
                        {getInitials(member.name)}
                    </span>
                    <div className="min-w-0">
                        <p className="m-0 font-bold leading-tight text-text">{member.name}</p>
                        <p className="m-0 mt-1 text-[12px] leading-tight text-text-secondary">{member.role}</p>
                    </div>
                </div>
            ),
        },
        {
            title: "Self-assessment",
            dataIndex: "selfAssessment",
            key: "selfAssessment",
            width: 165,
            render: (_, member) => {
                const isComplete = member.selfAssessment === "Complete";

                return (
                    <div>
                        <span
                            className={`inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-[11px] font-bold before:size-1.5 before:rounded-full ${
                                isComplete
                                    ? "bg-emerald-50 text-emerald-700 before:bg-emerald-500"
                                    : "bg-[#F1F0F8] text-[#77728D] before:bg-[#C6C2DC]"
                            }`}
                        >
                            {member.selfAssessment}
                        </span>
                        <p className="m-0 mt-1 text-[12px] text-text-secondary">
                            {member.selfAssessmentResult ?? "Waiting for employee"}
                        </p>
                    </div>
                );
            },
        },
        {
            title: "Manager review",
            dataIndex: "managerReview",
            key: "managerReview",
            width: 145,
            render: (status: ManagerReviewStatus) => (
                <span
                    className={`inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 text-[11px] font-bold before:size-1.5 before:rounded-full ${reviewStatusClasses[status]}`}
                >
                    {status}
                </span>
            ),
        },
        {
            title: "Status",
            dataIndex: "deadline",
            key: "deadline",
            width: 95,
            render: (deadline: string, member) => (
                <span
                    className={`text-[12px] font-bold ${
                        member.managerReview === "Complete" ? "text-emerald-600" : "text-[#B57300]"
                    }`}
                >
                    {deadline}
                </span>
            ),
        },
        {
            title: "Action",
            key: "action",
            align: "right",
            width: 145,
            render: (_, member) => {
                const canReview = member.selfAssessment === "Complete";
                const reviewIsComplete = member.managerReview === "Complete";

                if (canReview && !reviewIsComplete) {
                    return (
                        <Button className="font-bold" type="primary">
                            {member.managerReview === "In progress" ? "Continue Review" : "Start Review"}
                        </Button>
                    );
                }

                return (
                    <span className="text-[11px] font-semibold text-text-secondary">
                        {reviewIsComplete ? "Review completed" : "Self-assessment pending"}
                    </span>
                );
            },
        },
    ];

    return (
        <section className="overflow-hidden rounded-panel w-full h-full border border-border bg-white shadow-panel">
            <div className="flex flex-col gap-4 p-4 sm:p-6 xl:flex-row xl:items-center xl:justify-between">
                <div>
                    <h2 className="text-[18px] font-extrabold text-text">Your team</h2>
                    <p className="mt-1 text-[13px] text-text-secondary sm:text-[14px]">
                        Review self-assessments and add your ratings before the deadline.
                    </p>
                </div>

                <label className="flex items-center gap-2 self-start rounded-control border border-border px-3 text-[13px] font-medium text-[#4D486F] xl:self-auto">
                    <span className="sr-only">Sort team members</span>
                    Sort:
                    <select
                        aria-label="Sort team members"
                        className="min-h-10 cursor-pointer bg-transparent pr-1 outline-none"
                        onChange={(event) => setSortOrder(event.target.value as "asc" | "desc")}
                        value={sortOrder}
                    >
                        <option value="asc">Name (A–Z)</option>
                        <option value="desc">Name (Z–A)</option>
                    </select>
                </label>
            </div>

            <div className="mx-4 overflow-x-auto rounded-card bg-[#F1F0F8] p-1 sm:mx-6">
                <div className="flex min-w-max gap-1" role="tablist" aria-label="Filter team members">
                    {filters.map((filter) => (
                        <button
                            aria-selected={activeFilter === filter.id}
                            className={`rounded-control px-3 py-2 text-[12px] font-bold transition sm:px-4 sm:text-[13px] ${
                                activeFilter === filter.id
                                    ? "bg-white text-primary shadow-sm"
                                    : "text-[#625D7C] hover:bg-white/60"
                            }`}
                            key={filter.id}
                            onClick={() => setActiveFilter(filter.id)}
                            role="tab"
                            type="button"
                        >
                            {filter.label} · {filter.count}
                        </button>
                    ))}
                </div>
            </div>

            <div className="px-4 pb-4 pt-5 sm:px-6 sm:pb-6">
                <Table<TeamMember>
                    className="team-appraisals-table"
                    columns={columns}
                    dataSource={visibleMembers}
                    locale={{ emptyText: "No team members match this filter." }}
                    pagination={false}
                    rowKey="id"
                    scroll={{ x: 770 }}
                    size="middle"
                   // loading={true}
                />
            </div>
        </section>
    );
};

export default TeamTable;
