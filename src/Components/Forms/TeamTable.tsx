import { useMemo, useState } from "react";

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

    return (
        <section className="overflow-hidden rounded-[18px] border border-border bg-white shadow-sm">
            <div className="flex flex-col gap-4 p-4 sm:p-6 xl:flex-row xl:items-center xl:justify-between">
                <div>
                    <h2 className="text-[18px] font-extrabold text-text">Your team</h2>
                    <p className="mt-1 text-[13px] text-text-secondary sm:text-[14px]">
                        Review self-assessments and add your ratings before the deadline.
                    </p>
                </div>

                <label className="flex items-center gap-2 self-start rounded-[10px] border border-border px-3 text-[13px] font-medium text-[#4D486F] xl:self-auto">
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

            <div className="mx-4 overflow-x-auto rounded-[12px] bg-[#F1F0F8] p-1 sm:mx-6">
                <div className="flex min-w-max gap-1" role="tablist" aria-label="Filter team members">
                    {filters.map((filter) => (
                        <button
                            aria-selected={activeFilter === filter.id}
                            className={`rounded-[9px] px-3 py-2 text-[12px] font-bold transition sm:px-4 sm:text-[13px] ${
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

            <div className="hidden px-6 pt-4 xl:block">
                <div className="grid grid-cols-[1.35fr_1fr_1fr_.65fr_1fr] gap-4 border-b border-border px-2 pb-3 text-[11px] font-bold uppercase tracking-[0.04em] text-text-secondary">
                    <span>Employee</span>
                    <span>Self-assessment</span>
                    <span>Manager review</span>
                    <span>Status</span>
                    <span className="sr-only">Action</span>
                </div>
            </div>

            <div className="grid gap-3 p-4 sm:grid-cols-2 sm:p-6 xl:block xl:pt-0">
                {visibleMembers.map((member) => {
                    const canReview = member.selfAssessment === "Complete";
                    const reviewIsComplete = member.managerReview === "Complete";

                    return (
                        <article
                            className="rounded-[14px] border border-border p-4 xl:grid xl:grid-cols-[1.35fr_1fr_1fr_.65fr_1fr] xl:items-center xl:gap-4 xl:rounded-none xl:border-x-0 xl:border-t-0 xl:px-2 xl:py-4"
                            key={member.id}
                        >
                            <div className="flex min-w-0 items-center gap-3">
                                <span className={`flex size-10 shrink-0 items-center justify-center rounded-full text-[12px] font-extrabold text-white ${member.avatarColor}`}>
                                    {getInitials(member.name)}
                                </span>
                                <div className="min-w-0">
                                    <h3 className="font-bold leading-tight text-text">{member.name}</h3>
                                    <p className="mt-1 text-[12px] leading-tight text-text-secondary">{member.role}</p>
                                </div>
                            </div>

                            <div className="mt-4 xl:mt-0">
                                <p className="mb-1 text-[10px] font-bold uppercase tracking-wide text-text-secondary xl:hidden">
                                    Self-assessment
                                </p>
                                <span
                                    className={`inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-[11px] font-bold before:size-1.5 before:rounded-full ${
                                        canReview
                                            ? "bg-emerald-50 text-emerald-700 before:bg-emerald-500"
                                            : "bg-[#F1F0F8] text-[#77728D] before:bg-[#C6C2DC]"
                                    }`}
                                >
                                    {member.selfAssessment}
                                </span>
                                <p className="mt-1 text-[12px] text-text-secondary">
                                    {member.selfAssessmentResult ?? "Waiting for employee"}
                                </p>
                            </div>

                            <div className="mt-4 xl:mt-0">
                                <p className="mb-1 text-[10px] font-bold uppercase tracking-wide text-text-secondary xl:hidden">
                                    Manager review
                                </p>
                                <span className={`inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 text-[11px] font-bold before:size-1.5 before:rounded-full ${reviewStatusClasses[member.managerReview]}`}>
                                    {member.managerReview}
                                </span>
                            </div>

                            <div className="mt-4 xl:mt-0">
                                <p className="mb-1 text-[10px] font-bold uppercase tracking-wide text-text-secondary xl:hidden">
                                    Status
                                </p>
                                <p className={`text-[12px] font-bold ${reviewIsComplete ? "text-emerald-600" : "text-[#B57300]"}`}>
                                    {member.deadline}
                                </p>
                            </div>

                            <div className="mt-5 xl:mt-0 xl:text-right">
                                {canReview && !reviewIsComplete ? (
                                    <button
                                        className="w-full rounded-[10px] bg-primary px-4 py-2.5 text-[12px] font-bold text-white transition hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-primary/30 focus:ring-offset-2 xl:w-auto"
                                        type="button"
                                    >
                                        {member.managerReview === "In progress" ? "Continue Review" : "Start Review"}
                                    </button>
                                ) : (
                                    <span className="block text-[11px] font-semibold text-text-secondary xl:text-right">
                                        {reviewIsComplete ? "Review completed" : "Self-assessment pending"}
                                    </span>
                                )}
                            </div>
                        </article>
                    );
                })}
            </div>

            {visibleMembers.length === 0 && (
                <p className="px-6 py-10 text-center text-[14px] text-text-secondary">
                    No team members match this filter.
                </p>
            )}
        </section>
    );
};

export default TeamTable;
