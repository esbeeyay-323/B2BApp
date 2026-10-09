import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import {
  AimOutlined,
  CalendarOutlined,
  ContactsOutlined,
  DashboardOutlined,
  FormOutlined,
  SettingOutlined,
  TeamOutlined,
  UserOutlined,
} from '@ant-design/icons';
import type { MenuProps } from 'antd';
import {ConfigProvider} from "antd"
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
    <Menu
      className="dashboard-sidebar-nav"
      onClick={(info)=>navigate(info.key)}
      selectedKeys={[location.pathname]}
      style={{ width: "100%", height : "100%"}}
      mode="inline"
      items={items}
      
    />
  </ConfigProvider>
  );
};

export default SideBarMenu;
