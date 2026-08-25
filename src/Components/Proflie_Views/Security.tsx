
import {
  EnvironmentOutlined,
  LaptopOutlined,
  LockOutlined,
  MobileOutlined,
  SafetyCertificateOutlined,
} from "@ant-design/icons";
import { Button, Switch } from "antd";

type IconComponent = typeof LockOutlined;

interface BaseSecuritySetting {
  id: string;
  title: string;
  description: string;
  icon: IconComponent;
}

interface PasswordSecuritySetting extends BaseSecuritySetting {
  type: "action";
  maskedValue: string;
  actionLabel: string;
}

interface ToggleSecuritySetting extends BaseSecuritySetting {
  type: "toggle";
  enabled: boolean;
}

type SecuritySetting =
  | PasswordSecuritySetting
  | ToggleSecuritySetting;

interface ActiveSession {
  id: string;
  deviceName: string;
  deviceType: "desktop" | "mobile";
  icon: IconComponent;
  location: string;
  activity: string;
  isCurrentDevice: boolean;
  actionLabel: string | null;
}

const securitySettings: SecuritySetting[] = [
  {
    id: "password",
    title: "Password",
    description: "Last changed 45 days ago",
    icon: LockOutlined,
    type: "action",
    maskedValue: "••••••••••••",
    actionLabel: "Change Password",
  },
  {
    id: "two-factor-authentication",
    title: "Two-Factor Authentication",
    description: "Authenticator app connected — required at every login",
    icon: SafetyCertificateOutlined,
    type: "toggle",
    enabled: true,
  },
  {
    id: "login-alerts",
    title: "Login Alerts",
    description: "Get notified by email on new device sign-ins",
    icon: EnvironmentOutlined,
    type: "toggle",
    enabled: true,
  },
];

const activeSessions: ActiveSession[] = [
  {
    id: "session-1",
    deviceName: "MacBook Pro",
    deviceType: "desktop",
    icon: LaptopOutlined,
    location: "Accra, Ghana",
    activity: "Active now",
    isCurrentDevice: true,
    actionLabel: null,
  },
  {
    id: "session-2",
    deviceName: "iPhone 15",
    deviceType: "mobile",
    icon: MobileOutlined,
    location: "Accra, Ghana",
    activity: "Active 2 days ago",
    isCurrentDevice: false,
    actionLabel: "Sign out",
  },
];


const Security = () => {


 
    return (
        <>
        <main className="flex w-full flex-col gap-6 lg:flex-row"> 

            <div className="flex w-full flex-col items-center rounded-[18px] bg-white p-4 shadow sm:p-6 lg:w-66/100">
                
                <div className="flex w-full mb-4 flex-col justify-start">
                <h2 className="text-[17px] font-bold text-text">
                Login & Password
                </h2>

                <p className="text-[14px] text-text-secondary">
                   Manage how you sign in to ApexPerform
                </p>
                </div>


                {securitySettings.map((setting:SecuritySetting)=> {

                   const Icon = setting.icon;
                   return (
                    <div className="flex w-full flex-col items-stretch gap-4 border-b border-[#ECEBF3] p-4 last:border-b-0 sm:flex-row sm:items-center sm:justify-between" key={setting.id}>
                       <div className="flex min-w-0 gap-2">
                            <div className=" w-9.5 h-9.5 flex 
                            items-center text-[#3B5BFE] bg-[#EEF1FF] justify-center shrink-0
                            rounded-[10px]">
                               {<Icon/>}
                            </div>

                            <div className="flex min-w-0 flex-col">
                                <p className="text-[13.5px] text-text font-bold">{setting.title}</p>
                                {setting.type === "action" && (
                                    <p className="text-[16px] mt-0.75 font-extrabold text-text-secondary tracking-[3px]">{setting.maskedValue}</p>
                                )}
                                <p className="text-[12px] text-text-secondary font-medium mt-0.75">{setting.description}</p>
                            </div>
                        </div>
                        <div className="flex shrink-0 justify-end pl-11 sm:pl-0">
                            {
                                setting.type === "toggle" ? (
                                    <>
                                    <Switch className="bg-green-400" checked={setting.enabled}/>
                                    </>
                                ) : (
                                    <>
                                    <Button className="w-full sm:w-auto">{setting.actionLabel}</Button>
                                    </>
                                )
                            }
                        </div>         
                    </div>
                    )
                })}
            </div>
        <section className="w-full self-start rounded-[18px] bg-white p-4 shadow sm:p-6 lg:w-33/100">
      <div className="mb-3">
        <h2 className="text-[17px] font-bold text-text">
          Active Sessions
        </h2>

        <p className="text-[13px] text-text-secondary">
          Devices currently signed in
        </p>
      </div>

      <div>
        {activeSessions.map((session: ActiveSession) => {
          const Icon = session.icon;

          return (
            <div
              key={session.id}
              className="flex flex-col items-stretch gap-3 border-b border-[#ECEBF3] py-4 last:border-b-0 sm:flex-row sm:items-center sm:justify-between sm:gap-4"
            >
              <div className="flex min-w-0 items-center gap-3">
                <div
                  className="
                    flex h-9.5 w-9.5 shrink-0 items-center justify-center
                    rounded-[10px] border border-[#ECEBF3]
                    bg-[#F6F7FB] text-text-secondary
                  "
                >
                  <Icon />
                </div>

                <div className="min-w-0">
                  <p className="break-words text-[13.5px] font-bold text-text">
                    {session.deviceName}
                  </p>

                  <p className="mt-0.5 text-[12px] text-text-secondary">
                    {session.location} · {session.activity}
                  </p>
                </div>
              </div>

              <div className="ml-12 flex shrink-0 items-center sm:ml-0">
                {session.isCurrentDevice ? (
                  <span
                    className="
                      max-w-full whitespace-nowrap rounded-full bg-emerald-50
                      px-3 py-1 text-[11px] font-semibold text-emerald-600
                    "
                  >
                    This device
                  </span>
                ) : (
                  <Button
                    type="text"
                    danger
                    className="h-auto max-w-full whitespace-normal px-0 text-left text-[12px] font-semibold"
                  >
                    {session.actionLabel}
                  </Button>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </section>
        </main>
        </>
    )

}

export default Security;
