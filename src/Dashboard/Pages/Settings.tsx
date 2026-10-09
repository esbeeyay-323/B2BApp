import {
  BellOutlined,
  BuildOutlined,
  CheckOutlined,
  ClockCircleOutlined,
  GlobalOutlined,
  InfoCircleOutlined,
  LockOutlined,
  MailOutlined,
  SafetyCertificateOutlined,
} from "@ant-design/icons";
import { Button, Card, Form, Input, Select, Switch, message } from "antd";
import { useState } from "react";

type SettingsValues = {
  companyName: string;
  supportEmail: string;
  workspaceUrl: string;
  timezone: string;
  language: string;
  defaultCycle: string;
  ratingScale: string;
  reminderWindow: string;
  notifications: {
    cycleUpdates: boolean;
    deadlineReminders: boolean;
    weeklyDigest: boolean;
  };
  security: {
    requireMfa: boolean;
    managerEdits: boolean;
    sessionTimeout: string;
  };
};

const initialValues: SettingsValues = {
  companyName: "Apex Forum",
  supportEmail: "people@apexforum.com",
  workspaceUrl: "apex-forum",
  timezone: "gmt",
  language: "en-gb",
  defaultCycle: "biannual",
  ratingScale: "five-point",
  reminderWindow: "seven-days",
  notifications: {
    cycleUpdates: true,
    deadlineReminders: true,
    weeklyDigest: false,
  },
  security: {
    requireMfa: true,
    managerEdits: true,
    sessionTimeout: "eight-hours",
  },
};

const notificationOptions = [
  {
    description: "Notify participants when a review cycle opens, pauses, or closes.",
    label: "Cycle updates",
    name: "cycleUpdates",
  },
  {
    description: "Send automatic reminders as self-assessment and review deadlines approach.",
    label: "Deadline reminders",
    name: "deadlineReminders",
  },
  {
    description: "Email administrators a Monday summary of participation and overdue reviews.",
    label: "Weekly admin digest",
    name: "weeklyDigest",
  },
] as const;

const Settings = () => {
  const [form] = Form.useForm<SettingsValues>();
  const [messageApi, contextHolder] = message.useMessage();
  const [lastSaved, setLastSaved] = useState("Saved just now");

  const handleSave = () => {
    const savedTime = new Intl.DateTimeFormat("en", {
      hour: "numeric",
      minute: "2-digit",
    }).format(new Date());

    setLastSaved(`Saved at ${savedTime}`);
    messageApi.success("Workspace settings saved");
  };

  const handleReset = () => {
    form.resetFields();
    setLastSaved("Changes reset");
    messageApi.info("Settings restored to their saved values");
  };

  return (
    <main className="min-w-0 px-4 py-6 sm:px-6 lg:py-8">
      {contextHolder}

      <Form<SettingsValues>
        form={form}
        initialValues={initialValues}
        layout="vertical"
        onFinish={handleSave}
        requiredMark={false}
      >
        <header className="mb-8 flex flex-col gap-5 border-b border-border pb-7 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="mb-2 text-[11px] font-extrabold uppercase tracking-[0.16em] text-primary">
              Workspace controls
            </p>
            <h1 className="font-display text-[30px] font-bold tracking-[-0.035em] text-text sm:text-[34px]">
              Settings
            </h1>
            <p className="mt-1 max-w-2xl text-[14px] leading-6 text-text-secondary">
              Set the defaults that keep your organization, review cycles, and account access consistent.
            </p>
          </div>

          <div className="flex flex-col-reverse gap-3 sm:flex-row sm:items-center">
            <span className="inline-flex items-center gap-1.5 text-[12px] font-semibold text-text-secondary">
              <CheckOutlined className="text-success" />
              {lastSaved}
            </span>
            <Button htmlType="submit" type="primary">
              Save changes
            </Button>
          </div>
        </header>

        <div className="grid min-w-0 grid-cols-1 gap-6 xl:grid-cols-[minmax(0,1.55fr)_minmax(300px,0.85fr)]">
          <div className="flex min-w-0 flex-col gap-6">
            <Card className="settings-card" styles={{ body: { padding: 0 } }}>
              <div className="settings-card__header">
                <span className="settings-section-icon bg-violet-50 text-primary">
                  <BuildOutlined />
                </span>
                <div>
                  <h2 className="settings-card__title">Organization profile</h2>
                  <p className="settings-card__description">
                    The details employees see across their appraisal workspace.
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 gap-x-5 px-5 pb-1 pt-5 sm:grid-cols-2 sm:px-6">
                <Form.Item
                  label="Organization name"
                  name="companyName"
                  rules={[{ message: "Enter an organization name", required: true }]}
                >
                  <Input prefix={<BuildOutlined />} />
                </Form.Item>

                <Form.Item
                  label="People team email"
                  name="supportEmail"
                  rules={[{ message: "Enter a valid email", type: "email" }]}
                >
                  <Input prefix={<MailOutlined />} type="email" />
                </Form.Item>

                <Form.Item
                  extra="Used in your workspace address."
                  label="Workspace URL"
                  name="workspaceUrl"
                >
                  <Input
                    className="workspace-url-input"
                    prefix={<span className="workspace-url-prefix">app.apexforum.com/</span>}
                  />
                </Form.Item>

                <Form.Item label="Time zone" name="timezone">
                  <Select
                    options={[
                      { label: "GMT · Accra", value: "gmt" },
                      { label: "WAT · Lagos", value: "wat" },
                      { label: "EAT · Nairobi", value: "eat" },
                      { label: "SAST · Johannesburg", value: "sast" },
                    ]}
                    suffixIcon={<GlobalOutlined />}
                  />
                </Form.Item>

                <Form.Item className="sm:col-span-2" label="Display language" name="language">
                  <Select
                    options={[
                      { label: "English (United Kingdom)", value: "en-gb" },
                      { label: "English (United States)", value: "en-us" },
                      { label: "French", value: "fr" },
                    ]}
                  />
                </Form.Item>
              </div>
            </Card>

            <Card className="settings-card" styles={{ body: { padding: 0 } }}>
              <div className="settings-card__header">
                <span className="settings-section-icon bg-cyan-50 text-cyan-700">
                  <ClockCircleOutlined />
                </span>
                <div>
                  <h2 className="settings-card__title">Appraisal defaults</h2>
                  <p className="settings-card__description">
                    Pre-fill new review cycles with your organization’s standard setup.
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 gap-x-5 px-5 pb-1 pt-5 sm:grid-cols-2 sm:px-6">
                <Form.Item label="Default cycle cadence" name="defaultCycle">
                  <Select
                    options={[
                      { label: "Twice a year", value: "biannual" },
                      { label: "Quarterly", value: "quarterly" },
                      { label: "Annually", value: "annual" },
                    ]}
                  />
                </Form.Item>

                <Form.Item label="Rating scale" name="ratingScale">
                  <Select
                    options={[
                      { label: "5-point scale", value: "five-point" },
                      { label: "4-point scale", value: "four-point" },
                      { label: "Meets / does not meet", value: "binary" },
                    ]}
                  />
                </Form.Item>

                <Form.Item className="sm:col-span-2" label="First deadline reminder" name="reminderWindow">
                  <Select
                    options={[
                      { label: "3 days before", value: "three-days" },
                      { label: "7 days before", value: "seven-days" },
                      { label: "14 days before", value: "fourteen-days" },
                    ]}
                  />
                </Form.Item>

                <div className="mb-5 flex gap-3 rounded-card border border-violet-100 bg-violet-50/70 p-4 sm:col-span-2">
                  <InfoCircleOutlined className="mt-0.5 shrink-0 text-primary" />
                  <p className="text-[12px] leading-5 text-[#625D7C]">
                    These defaults only affect newly created cycles. Existing cycles keep their current configuration.
                  </p>
                </div>
              </div>
            </Card>
          </div>

          <div className="flex min-w-0 flex-col gap-6">
            <Card className="settings-card" styles={{ body: { padding: 0 } }}>
              <div className="settings-card__header">
                <span className="settings-section-icon bg-amber-50 text-amber-700">
                  <BellOutlined />
                </span>
                <div>
                  <h2 className="settings-card__title">Notifications</h2>
                  <p className="settings-card__description">Choose which updates are sent automatically.</p>
                </div>
              </div>

              <div className="divide-y divide-border px-5 sm:px-6">
                {notificationOptions.map((option) => (
                  <label className="settings-toggle-row" key={option.name}>
                    <span className="min-w-0 pr-4">
                      <span className="block text-[13px] font-bold text-text">{option.label}</span>
                      <span className="mt-1 block text-[12px] leading-5 text-text-secondary">
                        {option.description}
                      </span>
                    </span>
                    <Form.Item name={["notifications", option.name]} noStyle valuePropName="checked">
                      <Switch aria-label={option.label} />
                    </Form.Item>
                  </label>
                ))}
              </div>
            </Card>

            <Card className="settings-card" styles={{ body: { padding: 0 } }}>
              <div className="settings-card__header">
                <span className="settings-section-icon bg-emerald-50 text-emerald-700">
                  <SafetyCertificateOutlined />
                </span>
                <div>
                  <h2 className="settings-card__title">Security &amp; access</h2>
                  <p className="settings-card__description">Organization-wide sign-in and editing rules.</p>
                </div>
              </div>

              <div className="divide-y divide-border px-5 sm:px-6">
                <label className="settings-toggle-row">
                  <span className="min-w-0 pr-4">
                    <span className="flex items-center gap-2 text-[13px] font-bold text-text">
                      <LockOutlined className="text-primary" /> Require two-step verification
                    </span>
                    <span className="mt-1 block text-[12px] leading-5 text-text-secondary">
                      Applies to administrators and managers.
                    </span>
                  </span>
                  <Form.Item name={["security", "requireMfa"]} noStyle valuePropName="checked">
                    <Switch aria-label="Require two-step verification" />
                  </Form.Item>
                </label>

                <label className="settings-toggle-row">
                  <span className="min-w-0 pr-4">
                    <span className="block text-[13px] font-bold text-text">Allow manager edits</span>
                    <span className="mt-1 block text-[12px] leading-5 text-text-secondary">
                      Managers can update reviews until a cycle is locked.
                    </span>
                  </span>
                  <Form.Item name={["security", "managerEdits"]} noStyle valuePropName="checked">
                    <Switch aria-label="Allow manager edits" />
                  </Form.Item>
                </label>
              </div>

              <div className="border-t border-border px-5 pb-1 pt-5 sm:px-6">
                <Form.Item label="Admin session timeout" name={["security", "sessionTimeout"]}>
                  <Select
                    options={[
                      { label: "4 hours", value: "four-hours" },
                      { label: "8 hours", value: "eight-hours" },
                      { label: "24 hours", value: "twenty-four-hours" },
                    ]}
                  />
                </Form.Item>
              </div>
            </Card>
          </div>
        </div>

        <footer className="mt-6 flex flex-col-reverse gap-3 rounded-panel border border-border bg-surface px-5 py-4 sm:flex-row sm:items-center sm:justify-between sm:px-6">
          <p className="text-[12px] leading-5 text-text-secondary">
            Settings apply to all 142 people in this workspace.
          </p>
          <div className="flex gap-3">
            <Button className="flex-1 sm:flex-none" onClick={handleReset}>
              Reset changes
            </Button>
            <Button className="flex-1 sm:flex-none" htmlType="submit" type="primary">
              Save changes
            </Button>
          </div>
        </footer>
      </Form>
    </main>
  );
};

export default Settings;
