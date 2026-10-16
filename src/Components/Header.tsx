import {
  BellOutlined,
  DownOutlined,
  LogoutOutlined,
  MenuOutlined,
  MoonOutlined,
  SearchOutlined,
  SettingOutlined,
  UserOutlined,
} from "@ant-design/icons"
import { Avatar, Button, Dropdown, Input } from "antd"
import type { MenuProps } from "antd"
import { useNavigate } from "react-router-dom"
import { currentUserProfile, getInitials } from "../Mock/Workspace"

type HeaderProps = {
  isNavigationOpen: boolean;
  onOpenNavigation: () => void;
};

const Header = ({ isNavigationOpen, onOpenNavigation }: HeaderProps) => {
    const navigate = useNavigate();

    const accountItems: MenuProps["items"] = [
      {
        key: "profile",
        icon: <UserOutlined />,
        label: "Profile",
      },
      {
        key: "settings",
        icon: <SettingOutlined />,
        label: "Settings",
      },
      { type: "divider" },
      {
        key: "logout",
        danger: true,
        disabled: true,
        icon: <LogoutOutlined />,
        label: "Logout",
        title: "Logout is coming soon",
      },
    ];

    const handleAccountMenu: MenuProps["onClick"] = ({ key }) => {
      if (key === "profile") navigate("/dashboard/profile");
      if (key === "settings") navigate("/dashboard/settings");
    };
    
    return (
        <>
        <header className="sticky inset-x-0 top-0 z-40 box-border flex w-full min-w-0 shrink-0 self-stretch items-center justify-between gap-3 border-b border-border bg-surface px-4 py-4 sm:gap-5 sm:px-6">
        <Button
          aria-controls="mobile-navigation"
          aria-expanded={isNavigationOpen}
          aria-label="Open navigation menu"
          className="flex h-10 w-10 shrink-0 items-center justify-center rounded-control p-2 lg:hidden"
          icon={<MenuOutlined />}
          onClick={onOpenNavigation}
        />

        <div className="dashboard-search hidden min-w-0 sm:block sm:w-[48%] sm:max-w-xl sm:flex-none">
          <Input
            aria-label="Search dashboard"
            placeholder="Search people, goals, cycles…"
            suffix={<SearchOutlined className="p-2 text-text-secondary" />}
            onPressEnter={(event) => console.log(event)}
          />
        </div>

        <div className="flex shrink-0 items-center justify-center gap-2 sm:gap-3">
          <Button
            aria-label="Switch theme"
            className="hidden h-10 w-10 items-center justify-center rounded-control p-2 sm:flex"
          >
            <MoonOutlined />
          </Button>
          <Button
            aria-label="View notifications"
            className="flex h-10 w-10 items-center justify-center rounded-control p-2"
          >
            <BellOutlined />
          </Button>

          <Button
            type="primary"
            className="hidden h-10 rounded-control px-4 lg:inline-flex"
          >
            + Start New Cycle
          </Button>

          <Dropdown
            menu={{ items: accountItems, onClick: handleAccountMenu }}
            placement="bottomRight"
            trigger={["click"]}
          >
            <Button
              aria-label="Open account menu"
              className="account-menu-trigger ml-1 flex h-11 items-center gap-2 rounded-control px-1.5 sm:ml-3 sm:px-2 lg:ml-6"
              type="text"
            >
              <Avatar className="bg-accent-purple text-xs font-semibold">
                {getInitials(currentUserProfile.name)}
              </Avatar>
              <span className="hidden min-w-0 flex-col items-start justify-center md:flex">
                <span className="max-w-32 truncate text-[12px] font-semibold leading-4 text-text">
                  {currentUserProfile.name}
                </span>
                <span className="text-[11px] font-normal leading-4 text-text-secondary">
                  {currentUserProfile.role}
                </span>
              </span>
              <DownOutlined className="hidden text-[10px] text-text-muted md:inline-flex" />
            </Button>
          </Dropdown>
        </div>
      </header>
        </>
    )
}

export default Header;
