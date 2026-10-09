import { useMemo, useState } from "react";
import {
    Avatar,
    Button,
    Card,
    Dropdown,
    Flex,
    Grid,
    Modal,
    Progress,
    Table,
    Tag,
    Typography,
} from "antd";
import type { MenuProps, TableProps } from "antd";
import {
    CheckCircleOutlined,
    DeleteOutlined,
    EllipsisOutlined,
    ExclamationCircleOutlined,
    MinusCircleOutlined,
    PlayCircleOutlined,
    RiseOutlined,
    WarningOutlined,
} from "@ant-design/icons";

type GoalFilter = "all" | "my-goals" | "team-goals" | "at-risk";
type GoalStatus = "On track" | "In progress" | "At risk" | "Incomplete" | "Completed";

interface GoalRecord {
    id: number;
    goal: string;
    owner: string;
    ownerInitials: string;
    ownerColor: string;
    alignment: string;
    progress: number;
    status: GoalStatus;
    dueDate: string;
    scope: "my-goal" | "team-goal";
}

const goals: GoalRecord[] = [
    {
        id: 1,
        goal: "Improve platform reliability",
        owner: "Sam Agyars",
        ownerInitials: "SA",
        ownerColor: "#6C5DF4",
        alignment: "Operational excellence",
        progress: 72,
        status: "On track",
        dueDate: "Jun 30, 2026",
        scope: "my-goal",
    },
    {
        id: 2,
        goal: "Reduce customer response time",
        owner: "James Johnson",
        ownerInitials: "JJ",
        ownerColor: "#F59E0B",
        alignment: "Operational excellence",
        progress: 45,
        status: "At risk",
        dueDate: "May 31, 2026",
        scope: "team-goal",
    },
    {
        id: 3,
        goal: "Launch manager analytics",
        owner: "Priya Raman",
        ownerInitials: "PR",
        ownerColor: "#14B86E",
        alignment: "Reliable IT services",
        progress: 60,
        status: "On track",
        dueDate: "Jun 15, 2026",
        scope: "team-goal",
    },
    {
        id: 4,
        goal: "Strengthen security readiness",
        owner: "Michael Kim",
        ownerInitials: "MK",
        ownerColor: "#3978F6",
        alignment: "Reliable IT services",
        progress: 85,
        status: "Completed",
        dueDate: "Apr 30, 2026",
        scope: "team-goal",
    },
    {
        id: 5,
        goal: "Develop junior IT capability",
        owner: "Laura White",
        ownerInitials: "LW",
        ownerColor: "#EC6FC1",
        alignment: "Reliable IT services",
        progress: 30,
        status: "At risk",
        dueDate: "Jun 30, 2026",
        scope: "team-goal",
    },
];

const filters: { id: GoalFilter; label: string; count: number }[] = [
    { id: "all", label: "All", count: 48 },
    { id: "my-goals", label: "My goals", count: 6 },
    { id: "team-goals", label: "Team goals", count: 21 },
    { id: "at-risk", label: "At risk", count: 9 },
];

const statusClassNames: Record<GoalStatus, string> = {
    "On track": "bg-emerald-50 text-emerald-700",
    "In progress": "bg-blue-50 text-blue-700",
    "At risk": "bg-amber-50 text-amber-700",
    Incomplete: "bg-[#F1F0F7] text-[#69657D]",
    Completed: "bg-cyan-50 text-cyan-700",
};

const GoalsTable = () => {
    const [activeFilter, setActiveFilter] = useState<GoalFilter>("all");
    const [goalRecords, setGoalRecords] = useState<GoalRecord[]>(goals);
    const [goalToDelete, setGoalToDelete] = useState<GoalRecord | null>(null);
    const screens = Grid.useBreakpoint();
    const goalColumnWidth = screens.md ? 235 : 120;

    const visibleGoals = useMemo(() => {
        if (activeFilter === "my-goals") return goalRecords.filter((goal) => goal.scope === "my-goal");
        if (activeFilter === "team-goals") return goalRecords.filter((goal) => goal.scope === "team-goal");
        if (activeFilter === "at-risk") return goalRecords.filter((goal) => goal.status === "At risk");
        return goalRecords;
    }, [activeFilter, goalRecords]);

    const handleStatusChange = (selectedGoal: GoalRecord, status: GoalStatus) => {
        setGoalRecords((currentGoals) =>
            currentGoals.map((goal) =>
                goal.id === selectedGoal.id
                    ? {
                          ...goal,
                          progress: status === "Completed" ? 100 : Math.min(goal.progress, 99),
                          status,
                      }
                    : goal,
            ),
        );
    };

    const handleDeleteGoal = () => {
        if (!goalToDelete) return;

        setGoalRecords((currentGoals) => currentGoals.filter((goal) => goal.id !== goalToDelete.id));
        setGoalToDelete(null);
    };

    const columns: NonNullable<TableProps<GoalRecord>["columns"]> = [
        {
            title: "Goal",
            dataIndex: "goal",
            key: "goal",
            fixed: "left",
            width: goalColumnWidth,
            rowScope: "row",
            render: (goal: string) => (
                <Typography.Text className="text-[12px] font-bold text-text">{goal}</Typography.Text>
            ),
        },
        {
            title: "Owner",
            dataIndex: "owner",
            key: "owner",
            width: 165,
            render: (_: string, goal) => (
                <Flex align="center" gap={9}>
                    <Avatar size={28} style={{ backgroundColor: goal.ownerColor, fontSize: 10, fontWeight: 700 }}>
                        {goal.ownerInitials}
                    </Avatar>
                    <Typography.Text className="whitespace-nowrap text-[12px] text-text">
                        {goal.owner}
                    </Typography.Text>
                </Flex>
            ),
        },
       
        {
            title: "Progress",
            dataIndex: "progress",
            key: "progress",
            width: 155,
            render: (progress: number) => (
                <Flex align="center" gap={9}>
                    <Typography.Text className="w-8 shrink-0 text-[11px] text-text">{progress}%</Typography.Text>
                    <Progress
                        className="m-0 min-w-18 flex-1"
                        percent={progress}
                        showInfo={false}
                        size="small"
                        strokeColor="#6C5DF4"
                        trailColor="#DEDBE8"
                    />
                </Flex>
            ),
        },
        {
            title: "Status",
            dataIndex: "status",
            key: "status",
            width: 105,
            render: (status: GoalStatus) => (
                <Tag bordered={false} className={`m-0 px-2.5 py-1 text-[10px] font-bold ${statusClassNames[status]}`}>
                    {status}
                </Tag>
            ),
        },
        {
            title: "Due date",
            dataIndex: "dueDate",
            key: "dueDate",
            width: 120,
            render: (dueDate: string) => (
                <Typography.Text className="whitespace-nowrap text-[11px] text-text">{dueDate}</Typography.Text>
            ),
        },
    ];

    if (activeFilter === "my-goals") {
        columns.push({
            title: "Action",
            key: "action",
            align: "right",
            width: 56,
            render: (_, goal) => {
                const actionItems: MenuProps["items"] = [
                    {
                        key: "on-track",
                        disabled: goal.status === "On track",
                        icon: <RiseOutlined />,
                        label: "Mark as on track",
                    },
                    {
                        key: "in-progress",
                        disabled: goal.status === "In progress",
                        icon: <PlayCircleOutlined />,
                        label: "Mark as in progress",
                    },
                    {
                        key: "at-risk",
                        disabled: goal.status === "At risk",
                        icon: <WarningOutlined />,
                        label: "Mark as at risk",
                    },
                    {
                        key: "incomplete",
                        disabled: goal.status === "Incomplete",
                        icon: <MinusCircleOutlined />,
                        label: "Mark as incomplete",
                    },
                    {
                        key: "complete",
                        disabled: goal.status === "Completed",
                        icon: <CheckCircleOutlined />,
                        label: "Mark as complete",
                    },
                    { type: "divider" },
                    {
                        key: "delete",
                        danger: true,
                        icon: <DeleteOutlined />,
                        label: "Delete goal",
                    },
                ];

                return (
                    <Dropdown
                        menu={{
                            items: actionItems,
                            onClick: ({ key, domEvent }) => {
                                domEvent.stopPropagation();

                                if (key === "on-track") handleStatusChange(goal, "On track");
                                if (key === "in-progress") handleStatusChange(goal, "In progress");
                                if (key === "at-risk") handleStatusChange(goal, "At risk");
                                if (key === "incomplete") handleStatusChange(goal, "Incomplete");
                                if (key === "complete") handleStatusChange(goal, "Completed");
                                if (key === "delete") setGoalToDelete(goal);
                            },
                        }}
                        placement="bottomRight"
                        trigger={["click"]}
                    >
                        <Button
                            aria-label={`More actions for ${goal.goal}`}
                            icon={<EllipsisOutlined />}
                            onClick={(event) => event.stopPropagation()}
                            size="small"
                            type="text"
                        />
                    </Dropdown>
                );
            },
        });
    }

//className="pb-4 pt-5 "

    return (
        <Card
            className="goals-table-card h-[580px] overflow-hidden rounded-panel border-border p-6 shadow-panel sm:h-[550px] sm:px-6 sm:pt-6 xl:h-[520px]"
            styles={{ body: { display: "flex", flexDirection: "column", height: "100%", padding: 0 } }}
        >
            <Flex className="shrink-0" gap={2} vertical>
                <Typography.Title className="m-0! text-[18px]! font-extrabold! text-text!" level={2}>
                    H1 2026 Goals
                </Typography.Title>
                <Typography.Text className="text-[13px] text-text-secondary">
                    Track alignment and progress
                </Typography.Text>
            </Flex>

            <Flex className="mt-6 shrink-0 px-4 pb-4 sm:px-6" gap={8} role="tablist" wrap="wrap">
                {filters.map((filter) => {
                    const isActive = activeFilter === filter.id;

                    return (
                        <Button
                            aria-selected={isActive}
                            className="goals-filter-button font-semibold"
                            key={filter.id}
                            onClick={() => setActiveFilter(filter.id)}
                            role="tab"
                            size="small"
                            type={isActive ? "primary" : "default"}
                        >
                            <Flex align="center" gap={6}>
                                {filter.label}
                                <Tag
                                    bordered={false}
                                    className={`m-0 min-w-5 px-1 text-center text-[9px] leading-4 ${
                                        isActive ? "bg-white/20 text-white" : "bg-[#F1F0F7] text-[#77728D]"
                                    }`}
                                >
                                    {filter.count}
                                </Tag>
                            </Flex>
                        </Button>
                    );
                })}
            </Flex>

            <div className="goals-table-reserved min-h-0 flex-1 overflow-hidden">
                <Table<GoalRecord>
                    className="goals-table h-full"
                    columns={columns}
                    dataSource={visibleGoals}
                    locale={{ emptyText: "No goals match this filter." }}
                    pagination={false}
                    rowKey="id"
                    scroll={{ x: goalColumnWidth + (activeFilter === "my-goals" ? 601 : 545) }}
                    size={screens.md ? "middle" : "small"}
                />
            </div>

            <Modal
                cancelText="Keep goal"
                centered
                okButtonProps={{ danger: true }}
                okText="Delete goal"
                onCancel={() => setGoalToDelete(null)}
                onOk={handleDeleteGoal}
                open={goalToDelete !== null}
                title="Delete goal?"
                width={420}
            >
                {goalToDelete && (
                    <Flex align="flex-start" gap={12}>
                        <Flex
                            align="center"
                            className="size-10 shrink-0 rounded-full bg-red-50 text-[17px] text-red-600"
                            justify="center"
                        >
                            <ExclamationCircleOutlined />
                        </Flex>
                        <Flex gap={4} vertical>
                            <Typography.Text className="font-bold text-text">
                                Delete “{goalToDelete.goal}”?
                            </Typography.Text>
                            <Typography.Text className="text-[13px] leading-5 text-text-secondary">
                                This goal and its progress history will be removed. This action cannot be undone.
                            </Typography.Text>
                        </Flex>
                    </Flex>
                )}
            </Modal>
        </Card>
    );
};

export default GoalsTable;
