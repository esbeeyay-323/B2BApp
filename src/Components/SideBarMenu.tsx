import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import {
  AimOutlined,
  CalendarOutlined,
  ContactsOutlined,
  DashboardOutlined,
  FormOutlined,
  LogoutOutlined,
  SettingOutlined,
  TeamOutlined,
  UserOutlined,
} from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Button, ConfigProvider } from "antd"
import { Menu } from 'antd';

type MenuItem = Required<MenuProps>['items'][number];

const items: MenuItem[] = [
  {
    key: '/dashboard',
    label: 'Dashboard',
    icon: <DashboardOutlined />,
  },
  {
    key: '/dashboard/profile',
    label: 'Profile',
    icon: <UserOutlined />,

  },

  {
    key: '/dashboard/goals',
    label: 'Goals',
    icon: < AimOutlined/>,

  },
 
  {
    key: '/dashboard/self-evaluation',
    label: 'Self Evaluation',
    icon: <FormOutlined />,
  }, 
  {
    key: '/dashboard/team-appraisals',
    label: 'Team Appraisals',
    icon: <TeamOutlined />,
  }, 
  {
    key: '/dashboard/user-directory',
    label: 'User Directory',
    icon: <ContactsOutlined />,
  }, 
  {
    key: '/dashboard/cycle-settings',
    label: "Cycle Settings",
    icon: <CalendarOutlined />,
  }, 
  {
    key: '/dashboard/settings',
    label: 'Settings',
    icon: <SettingOutlined />,
  }
];

const SideBarMenu: React.FC = () => {
  

  const navigate = useNavigate();
  const location = useLocation();

  return (
  <ConfigProvider theme={{
      components : {

        Menu  : {
          itemBorderRadius: 10,
          itemHeight: 44,
          itemHoverColor : "#564BD1",
          itemHoverBg: "#EEECFE",
          itemMarginInline: 12,
          itemSelectedBg : "#6C5DF4",
          itemSelectedColor: "#FFFFFF",
          
        }
    
      }
  }}>
    <div className="flex h-full min-h-0 flex-col pb-4">
      <Menu
        className="dashboard-sidebar-nav flex-1"
        onClick={(info)=>navigate(info.key)}
        selectedKeys={[location.pathname]}
        style={{ width: "100%" }}
        mode="inline"
        items={items}
      />
      <div className="mx-3 border-t border-border pt-3">
        <Button
          aria-label="Log out"
          className="h-11 w-full justify-start px-4 text-left"
          danger
          disabled
          icon={<LogoutOutlined />}
          title="Logout is coming soon"
          type="text"
        >
          Logout
        </Button>
      </div>
    </div>
  </ConfigProvider>
  );
};

export default SideBarMenu;
