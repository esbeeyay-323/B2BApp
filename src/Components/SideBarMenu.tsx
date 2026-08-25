import React from 'react';
import { AppstoreOutlined, MailOutlined, SettingOutlined } from '@ant-design/icons';
import type { MenuProps } from 'antd';
import {ConfigProvider} from "antd"
import { Menu } from 'antd';
import { useLocation, useNavigate } from 'react-router-dom';

type MenuItem = Required<MenuProps>['items'][number];

const items: MenuItem[] = [
  {
    key: '/dashboard',
    label: 'Dashboard',
    icon: <MailOutlined />,
  },
  {
    key: '/profile',
    label: 'Profile',
    icon: <AppstoreOutlined />,

  },
 
  {
    key: '/self-evealuation',
    label: 'Self Evaluation',
    icon: <SettingOutlined />,
  }, 
  {
    key: '/team-appraisals',
    label: 'Team Appraisals',
    icon: <SettingOutlined />,
  }, 
  {
    key: 'user-directory',
    label: 'User Directory',
    icon: <SettingOutlined />,
  }, 
  {
    key: '/cycle-settings',
    label: "Cycle Settings",
    icon: <SettingOutlined />,
  }, 
  {
    key: 'sub7',
    label: '/settings',
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