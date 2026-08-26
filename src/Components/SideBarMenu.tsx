import React from 'react';
import {
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
    key: '/profile',
    label: 'Profile',
    icon: <UserOutlined />,

  },
 
  {
    key: '/self-evealuation',
    label: 'Self Evaluation',
    icon: <FormOutlined />,
  }, 
  {
    key: '/team-appraisals',
    label: 'Team Appraisals',
    icon: <TeamOutlined />,
  }, 
  {
    key: 'user-directory',
    label: 'User Directory',
    icon: <ContactsOutlined />,
  }, 
  {
    key: '/cycle-settings',
    label: "Cycle Settings",
    icon: <CalendarOutlined />,
  }, 
  {
    key: '/settings',
    label: 'Settings',
    icon: <SettingOutlined />,
  }
];

const SideBarMenu: React.FC = () => {
  

  //const navigate = useNavigate();
  //const location = useLocation();

  return (
  <ConfigProvider theme={{
      components : {

        Menu  : {
          itemHoverColor : "#FFFFFF",
          itemHoverBg:       "#6C5DF4",
          itemSelectedBg : "#6C5DF480",
          itemSelectedColor: "#FFFFFF",
          
        }
    
      }
  }}>
    <Menu
      //onClick={(info)=>navigate(info.key)}
      style={{ width: "100%", height : "100%"}}
      defaultSelectedKeys={['/dashboard']}
      defaultOpenKeys={['/dashboard']}
     // selectedKeys={[location.pathname]}
      mode="inline"
      items={items}
      
    />
  </ConfigProvider>
  );
};

export default SideBarMenu;
