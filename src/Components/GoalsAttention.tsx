import { Button, Card, Flex, List, Typography } from "antd";
import { CalendarOutlined, RightOutlined, WarningOutlined } from "@ant-design/icons";

const attentionItems = [
    {
        id: "missing-updates",
        label: "3 goals without updates",
        icon: <WarningOutlined />,
        iconClassName: "bg-amber-50 text-amber-600",
    },
    {
        id: "due-this-week",
        label: "2 goals due this week",
        icon: <CalendarOutlined />,
        iconClassName: "bg-blue-50 text-blue-600",
    },
];

const GoalsAttention = () => (
    <Card
        className="goals-attention-card overflow-hidden rounded-panel border-border shadow-panel"
        styles={{ body: { padding: 0 } }}
        title={
            <Typography.Title className="m-0! text-[16px]! font-extrabold! text-text!" level={2}>
                Needs attention
            </Typography.Title>
        }
    >
        <List
            className="goals-attention-list"
            dataSource={attentionItems}
            renderItem={(item) => (
                <List.Item
                    actions={[
                        <Button
                            aria-label={`Open ${item.label}`}
                            icon={<RightOutlined />}
                            key={`${item.id}-action`}
                            size="small"
                            type="text"
                        />,
                    ]}
                    key={item.id}
                >
                    <Flex align="center" gap={14}>
                        <Flex
                            align="center"
                            className={`size-10 shrink-0 rounded-control text-[17px] ${item.iconClassName}`}
                            justify="center"
                        >
                            {item.icon}
                        </Flex>
                        <Typography.Text className="text-[13px] font-semibold text-text">
                            {item.label}
                        </Typography.Text>
                    </Flex>
                </List.Item>
            )}
        />

        <Flex className="border-t border-border px-2 py-2">
            <Button block className="h-10! px-3! font-bold" type="link">
                <Flex align="center" className="w-full" justify="space-between">
                    <Typography.Text className="font-bold text-primary">Review goals</Typography.Text>
                    <RightOutlined />
                </Flex>
            </Button>
        </Flex>
    </Card>
);

export default GoalsAttention;
