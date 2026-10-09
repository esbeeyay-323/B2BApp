import {
    AppstoreOutlined,
    CalendarOutlined,
    CheckCircleFilled,
    ClockCircleFilled,
    CloseOutlined,
    CopyOutlined,
    EditOutlined,
    InboxOutlined,
    MailOutlined,
    MessageOutlined,
    StarOutlined,
    TeamOutlined,
    UserOutlined,
    WarningOutlined,
} from "@ant-design/icons";
import { Button, Card, Descriptions, Divider, Flex, Switch, Tag, Timeline, Typography } from "antd";
import type { CycleRecord, CycleStatus } from "./CyclesTable";

interface CycleInfoProps {
    cycle: CycleRecord | null;
    onClose: () => void;
}

type PhaseState = "Completed" | "In progress" | "Upcoming";

const statusClassNames: Record<CycleStatus, string> = {
    Active: "bg-primary-tint text-primary",
    Draft: "bg-[#F1F0F7] text-[#77728D]",
    Completed: "bg-emerald-50 text-emerald-700",
};

const phaseClassNames: Record<PhaseState, string> = {
    Completed: "bg-emerald-50 text-emerald-700",
    "In progress": "bg-primary-tint text-primary",
    Upcoming: "bg-[#F1F0F7] text-[#77728D]",
};

const detailsByCycle: Record<number, { departments: string; ratingScale: string; createdBy: string }> = {
    1: { departments: "All departments · 6", ratingScale: "5-point scale", createdBy: "Sam Agyars" },
    2: { departments: "All departments · 6", ratingScale: "5-point scale", createdBy: "Sam Agyars" },
    3: { departments: "Human Resources · 1", ratingScale: "5-point scale", createdBy: "Akosua Boateng" },
    4: { departments: "Engineering · 1", ratingScale: "5-point scale", createdBy: "Sam Agyars" },
    5: { departments: "All departments · 6", ratingScale: "5-point scale", createdBy: "Sam Agyars" },
    6: { departments: "Sales & Marketing · 1", ratingScale: "5-point scale", createdBy: "Ama Serwaa" },
};

const phaseDatesByCycle: Record<number, string[]> = {
    1: ["Jul 1 – Jul 15", "Jul 16 – Aug 15", "Aug 16 – Sep 15", "Sep 16 – Sep 30"],
    2: ["Jan 1 – Mar 31", "Apr 1 – Jun 30", "Jul 1 – Sep 30", "Oct 1 – Dec 31"],
    3: ["Aug 1 – Aug 14", "Aug 15 – Sep 15", "Sep 16 – Oct 15", "Oct 16 – Oct 31"],
    4: ["Jun 1 – Jun 7", "Jun 8 – Jun 16", "Jun 17 – Jun 24", "Jun 25 – Jun 30"],
    5: ["Apr 1 – Apr 15", "Apr 16 – May 15", "May 16 – Jun 15", "Jun 16 – Jun 30"],
    6: ["Sep 15 – Sep 18", "Sep 19 – Sep 23", "Sep 24 – Sep 27", "Sep 28 – Sep 30"],
};

const phaseNames = ["Self Evaluation", "Manager Review", "Calibration", "Final Sign-off"];

const getPhaseStates = (cycle: CycleRecord): PhaseState[] => {
    if (cycle.status === "Completed") return phaseNames.map(() => "Completed");
    if (cycle.status === "Draft") return phaseNames.map(() => "Upcoming");

    const activePhase = cycle.progress < 25 ? 0 : cycle.progress < 75 ? 1 : cycle.progress < 95 ? 2 : 3;

    return phaseNames.map((_, index) => {
        if (index < activePhase) return "Completed";
        if (index === activePhase) return "In progress";
        return "Upcoming";
    });
};

const CycleInfo = ({ cycle, onClose }: CycleInfoProps) => {
    if (!cycle) {
        return (
            <Card className="rounded-panel border-dashed border-[#DCD9EA] shadow-panel">
                <Flex align="center" className="min-h-105 px-6 py-12 text-center" justify="center" vertical>
                    <Flex
                        align="center"
                        className="size-14 rounded-full bg-primary-tint text-[22px] text-primary"
                        justify="center"
                    >
                        <CalendarOutlined />
                    </Flex>
                    <Typography.Title className="mb-0! mt-5! text-[17px]! font-extrabold! text-text!" level={2}>
                        Select a cycle
                    </Typography.Title>
                    <Typography.Paragraph className="mb-0! mt-2! max-w-70 text-[13px]! leading-5! text-text-secondary!">
                        Choose a row from the cycles table to view its schedule, phases, and notification settings.
                    </Typography.Paragraph>
                    <Typography.Text className="mt-5 text-[11px] font-semibold uppercase tracking-[0.08em] text-text-muted">
                        No cycle selected
                    </Typography.Text>
                </Flex>
            </Card>
        );
    }

    const details = detailsByCycle[cycle.id];
    const phaseDates = phaseDatesByCycle[cycle.id];
    const phaseStates = getPhaseStates(cycle);

    const descriptionItems = [
        {
            key: "departments",
            label: (
                <Flex align="center" gap={7}>
                    <AppstoreOutlined /> Departments
                </Flex>
            ),
            children: details.departments,
        },
        {
            key: "participants",
            label: (
                <Flex align="center" gap={7}>
                    <TeamOutlined /> Participants
                </Flex>
            ),
            children: `${cycle.participants} employees`,
        },
        {
            key: "rating-scale",
            label: (
                <Flex align="center" gap={7}>
                    <StarOutlined /> Rating scale
                </Flex>
            ),
            children: details.ratingScale,
        },
        {
            key: "created-by",
            label: (
                <Flex align="center" gap={7}>
                    <UserOutlined /> Created by
                </Flex>
            ),
            children: details.createdBy,
        },
    ];

    const notificationItems = [
        {
            id: "email",
            icon: <MailOutlined />,
            title: "Email reminders",
            description: "Nudge participants before deadlines",
            enabled: true,
        },
        {
            id: "slack",
            icon: <MessageOutlined />,
            title: "Slack notifications",
            description: "Post phase updates to #performance",
            enabled: false,
        },
        {
            id: "escalation",
            icon: <WarningOutlined />,
            title: "Auto-escalate overdue reviews",
            description: "Notify managers after 3 days overdue",
            enabled: true,
        },
    ];

    return (
        <Card
            className="cycle-info-card overflow-hidden rounded-panel border-border shadow-panel"
            extra={
                <Button
                    aria-label="Close cycle settings"
                    icon={<CloseOutlined />}
                    onClick={onClose}
                    shape="circle"
                    type="text"
                />
            }
            styles={{ body: { padding: 0 } }}
            title={
                <Typography.Text className="text-[11px] font-extrabold uppercase tracking-[0.08em] text-text-secondary">
                    Cycle settings
                </Typography.Text>
            }
        >
            <Flex className="p-5 sm:p-6" gap={18} vertical>
                <Flex gap={7} wrap="wrap">
                    <Tag bordered={false} className="m-0 bg-primary-tint px-2.5 py-1 text-[10px] font-bold text-primary">
                        {cycle.type}
                    </Tag>
                    <Tag bordered={false} className={`m-0 px-2.5 py-1 text-[10px] font-bold ${statusClassNames[cycle.status]}`}>
                        {cycle.status}
                    </Tag>
                </Flex>

                <Flex gap={5} vertical>
                    <Typography.Title className="m-0! text-[19px]! font-extrabold! text-text!" level={2}>
                        {cycle.name}
                    </Typography.Title>
                    <Typography.Text className="text-[12px] text-text-secondary">
                        <CalendarOutlined className="mr-2" />
                        {cycle.timeline}
                    </Typography.Text>
                </Flex>

                <Descriptions
                    className="cycle-info-descriptions"
                    colon={false}
                    column={2}
                    items={descriptionItems}
                    layout="vertical"
                    size="small"
                />

                <Divider className="m-0" />

                <Flex gap={4} vertical>
                    <Typography.Text className="text-[10px] font-extrabold uppercase tracking-[0.08em] text-text-secondary">
                        Phase timeline
                    </Typography.Text>
                    <Timeline
                        className="cycle-phase-timeline mt-4"
                        items={phaseNames.map((phase, index) => {
                            const state = phaseStates[index];

                            return {
                                color: state === "Completed" ? "green" : state === "In progress" ? "blue" : "gray",
                                dot:
                                    state === "Completed" ? (
                                        <CheckCircleFilled className="text-[17px] text-emerald-500" />
                                    ) : state === "In progress" ? (
                                        <ClockCircleFilled className="text-[17px] text-primary" />
                                    ) : undefined,
                                children: (
                                    <Flex gap={2} vertical>
                                        <Typography.Text className="text-[12px] font-bold text-text">{phase}</Typography.Text>
                                        <Typography.Text className="text-[11px] text-text-secondary">
                                            {phaseDates[index]}
                                        </Typography.Text>
                                        <Tag
                                            bordered={false}
                                            className={`m-0 mt-1 w-fit px-2 py-0.5 text-[9px] font-bold ${phaseClassNames[state]}`}
                                        >
                                            {state}
                                        </Tag>
                                    </Flex>
                                ),
                            };
                        })}
                    />
                </Flex>

                <Flex gap={3} vertical>
                    <Typography.Text className="mb-2 text-[10px] font-extrabold uppercase tracking-[0.08em] text-text-secondary">
                        Notifications
                    </Typography.Text>
                    {notificationItems.map((notification, index) => (
                        <Flex
                            align="center"
                            className={index < notificationItems.length - 1 ? "border-b border-border py-3" : "pt-3"}
                            gap={10}
                            justify="space-between"
                            key={`${cycle.id}-${notification.id}`}
                        >
                            <Flex align="flex-start" gap={10}>
                                <Typography.Text className="mt-0.5 text-[14px] text-text-secondary">
                                    {notification.icon}
                                </Typography.Text>
                                <Flex gap={1} vertical>
                                    <Typography.Text className="text-[12px] font-bold text-text">
                                        {notification.title}
                                    </Typography.Text>
                                    <Typography.Text className="text-[10px] leading-4 text-text-secondary">
                                        {notification.description}
                                    </Typography.Text>
                                </Flex>
                            </Flex>
                            <Switch aria-label={notification.title} defaultChecked={notification.enabled} size="small" />
                        </Flex>
                    ))}
                </Flex>

                <Flex gap={9}>
                    <Button block className="min-w-0 flex-1 font-bold" icon={<EditOutlined />} type="primary">
                        Edit cycle
                    </Button>
                    <Button aria-label="Duplicate cycle" icon={<CopyOutlined />} />
                    <Button aria-label="Archive cycle" icon={<InboxOutlined />} />
                </Flex>
            </Flex>
        </Card>
    );
};

export default CycleInfo;
