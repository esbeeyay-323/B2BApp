import { useMemo, useState } from "react";
import { Badge, Button, Card, Flex, Grid, Progress, Select, Table, Tag, Typography } from "antd";
import type { TableProps } from "antd";
import { EllipsisOutlined } from "@ant-design/icons";

export type CycleStatus = "Active" | "Draft" | "Completed";
export type CycleType = "Quarterly" | "Annual" | "Probation" | "Custom";
type CycleFilter = "all" | "active" | "draft" | "completed";
type CycleSort = "recent" | "oldest" | "progress";

export interface CycleRecord {
    id: number;
    name: string;
    type: CycleType;
    timeline: string;
    participants: number;
    progress: number;
    status: CycleStatus;
    createdOrder: number;
}

interface CyclesTableProps {
    onCycleSelect: (cycle: CycleRecord) => void;
    selectedCycleId: number | null;
}

const cycles: CycleRecord[] = [
    {
        id: 1,
        name: "Q3 2026 Performance Review",
        type: "Quarterly",
        timeline: "Jul 1 – Sep 30, 2026",
        participants: 142,
        progress: 68,
        status: "Active",
        createdOrder: 6,
    },
    {
        id: 2,
        name: "Annual Review 2026",
        type: "Annual",
        timeline: "Jan 1 – Dec 31, 2026",
        participants: 142,
        progress: 22,
        status: "Active",
        createdOrder: 5,
    },
    {
        id: 3,
        name: "New Hire Probation – August Intake",
        type: "Probation",
        timeline: "Aug 1 – Oct 31, 2026",
        participants: 8,
        progress: 0,
        status: "Draft",
        createdOrder: 4,
    },
    {
        id: 4,
        name: "Engineering Mid-Year Check-in",
        type: "Custom",
        timeline: "Jun 1 – Jun 30, 2026",
        participants: 34,
        progress: 100,
        status: "Completed",
        createdOrder: 3,
    },
    {
        id: 5,
        name: "Q2 2026 Performance Review",
        type: "Quarterly",
        timeline: "Apr 1 – Jun 30, 2026",
        participants: 138,
        progress: 100,
        status: "Completed",
        createdOrder: 2,
    },
    {
        id: 6,
        name: "Sales Team Spot Review",
        type: "Custom",
        timeline: "Sep 15 – Sep 30, 2026",
        participants: 22,
        progress: 0,
        status: "Draft",
        createdOrder: 1,
    },
];

const statusColors: Record<CycleStatus, string> = {
    Active: "#22B573",
    Draft: "#B7B4C9",
    Completed: "#6C5DF4",
};

const filterOptions: { id: CycleFilter; label: string; count: number }[] = [
    { id: "all", label: "All", count: 6 },
    { id: "active", label: "Active", count: 2 },
    { id: "draft", label: "Draft", count: 2 },
    { id: "completed", label: "Completed", count: 2 },
];

const CyclesTable = ({ onCycleSelect, selectedCycleId }: CyclesTableProps) => {
    const [activeFilter, setActiveFilter] = useState<CycleFilter>("all");
    const [cycleType, setCycleType] = useState<CycleType | "all">("all");
    const [sortOrder, setSortOrder] = useState<CycleSort>("recent");
    const screens = Grid.useBreakpoint();
    const cycleColumnWidth = screens.md ? 280 : 190;

    const visibleCycles = useMemo(() => {
        const filteredCycles = cycles.filter((cycle) => {
            const matchesStatus = activeFilter === "all" || cycle.status.toLowerCase() === activeFilter;
            const matchesType = cycleType === "all" || cycle.type === cycleType;

            return matchesStatus && matchesType;
        });

        return [...filteredCycles].sort((first, second) => {
            if (sortOrder === "oldest") return first.createdOrder - second.createdOrder;
            if (sortOrder === "progress") return second.progress - first.progress;
            return second.createdOrder - first.createdOrder;
        });
    }, [activeFilter, cycleType, sortOrder]);

    const columns: TableProps<CycleRecord>["columns"] = [
        {
            title: "Cycle",
            dataIndex: "name",
            key: "cycle",
            fixed: "left",
            width: cycleColumnWidth,
            rowScope: "row",
            render: (_: string, cycle) => (
                <Flex gap={1} vertical>
                    <Typography.Text className="text-[12px] font-bold text-text">{cycle.name}</Typography.Text>
                    <Typography.Text className="text-[10px] text-text-secondary">{cycle.type}</Typography.Text>
                </Flex>
            ),
        },
        {
            title: "Timeline",
            dataIndex: "timeline",
            key: "timeline",
            width: 180,
            render: (timeline: string) => (
                <Typography.Text className="whitespace-nowrap text-[11px] text-text-secondary">
                    {timeline}
                </Typography.Text>
            ),
        },
        {
            title: "Participants",
            dataIndex: "participants",
            key: "participants",
            width: 135,
            render: (participants: number) => (
                <Typography.Text className="whitespace-nowrap text-[11px] text-text-secondary">
                    {participants} employees
                </Typography.Text>
            ),
        },
        {
            title: "Progress",
            dataIndex: "progress",
            key: "progress",
            width: 150,
            render: (progress: number) => (
                <Flex align="center" gap={9}>
                    <Progress
                        className="m-0 min-w-16 flex-1"
                        percent={progress}
                        showInfo={false}
                        size="small"
                        strokeColor="#6C5DF4"
                        trailColor="#ECEBF4"
                    />
                    <Typography.Text className="w-8 shrink-0 text-[11px] font-semibold text-[#625D7C]">
                        {progress}%
                    </Typography.Text>
                </Flex>
            ),
        },
        {
            title: "Status",
            dataIndex: "status",
            key: "status",
            width: 115,
            render: (status: CycleStatus) => (
                <Badge
                    color={statusColors[status]}
                    text={
                        <Typography.Text className="text-[11px] font-bold" style={{ color: statusColors[status] }}>
                            {status}
                        </Typography.Text>
                    }
                />
            ),
        },
        {
            title: "Action",
            key: "action",
            align: "right",
            width: 56,
            render: (_, cycle) => (
                <Button
                    aria-label={`More actions for ${cycle.name}`}
                    icon={<EllipsisOutlined />}
                    onClick={(event) => event.stopPropagation()}
                    size="small"
                    type="text"
                />
            ),
        },
    ];

    return (
        <Card
            className="cycles-table-card h-[760px] overflow-hidden rounded-panel border-border p-6 shadow-panel sm:h-[700px] sm:px-6 sm:pt-6 xl:h-[660px]"
            styles={{ body: { display: "flex", flexDirection: "column", height: "100%", padding: 0 } }}
        >
            <Flex className="shrink-0" gap={2} vertical>
                <Typography.Title className="m-0! text-[18px]! font-extrabold! text-text!" level={2}>
                    All Cycles
                </Typography.Title>
                <Typography.Text className="text-[13px] text-text-secondary">
                    Review timelines, participation, and progress at a glance.
                </Typography.Text>
            </Flex>

            <Flex className="mt-6 shrink-0 px-4 pb-4 sm:px-6" gap={8} role="tablist" wrap="wrap">
                {filterOptions.map((filter) => {
                    const isActive = activeFilter === filter.id;

                    return (
                        <Button
                            aria-selected={isActive}
                            className="cycles-filter-button font-semibold"
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

            <Flex className="shrink-0 px-4 pb-4 sm:px-6" gap={10} wrap="wrap">
                <Select<CycleSort>
                    aria-label="Sort cycles"
                    className="w-full sm:w-38"
                    onChange={setSortOrder}
                    options={[
                        { label: "Most recent", value: "recent" },
                        { label: "Oldest first", value: "oldest" },
                        { label: "Highest progress", value: "progress" },
                    ]}
                    value={sortOrder}
                />
                <Select<CycleType | "all">
                    aria-label="Filter by cycle type"
                    className="w-full sm:w-38"
                    onChange={setCycleType}
                    options={[
                        { label: "All types", value: "all" },
                        { label: "Quarterly", value: "Quarterly" },
                        { label: "Annual", value: "Annual" },
                        { label: "Probation", value: "Probation" },
                        { label: "Custom", value: "Custom" },
                    ]}
                    value={cycleType}
                />
            </Flex>

            <div className="cycles-table-reserved min-h-0 flex-1 overflow-hidden">
                <Table<CycleRecord>
                    className="cycles-table h-full"
                    columns={columns}
                    dataSource={visibleCycles}
                    locale={{ emptyText: "No cycles match these filters." }}
                    onRow={(cycle) => ({
                        "aria-selected": selectedCycleId === cycle.id,
                        onClick: () => onCycleSelect(cycle),
                    })}
                    pagination={false}
                    rowClassName={(cycle) =>
                        selectedCycleId === cycle.id ? "cycles-table-row--selected cursor-pointer" : "cursor-pointer"
                    }
                    rowKey="id"
                    scroll={{ x: cycleColumnWidth + 636 }}
                    size={screens.md ? "middle" : "small"}
                />
            </div>

            <Flex className="shrink-0 border-t border-border px-4 py-4 sm:px-6">
                <Typography.Text className="text-[11px] text-text-secondary">
                    Showing {visibleCycles.length} of {cycles.length} cycles
                </Typography.Text>
            </Flex>
        </Card>
    );
};

export default CyclesTable;
