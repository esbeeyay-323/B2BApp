//import { useState } from 'react'
import SideBar from './Components/SideBarMenu';
import DashboardLayout from './Dashboard/DashboardLayout';
import Login from './Pages/Login';
import { ConfigProvider } from 'antd';


function App() {
  
  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: '#6C5DF4',
          colorText: '#1E1B2E',
          colorTextSecondary: '#8D8AA3',
          colorBorder: '#ECEBF4',
          colorBgLayout: '#F6F6FB',
          borderRadius: 10,
          borderRadiusLG: 16,
          boxShadow: '0 1px 2px rgba(30, 27, 46, 0.03), 0 8px 24px rgba(30, 27, 46, 0.06)',
          boxShadowSecondary: '0 2px 4px rgba(30, 27, 46, 0.04), 0 14px 32px rgba(30, 27, 46, 0.10)',
        },
      }}
    >
    {/* <Login/>  */}
    {/* <SideBar/> */}
    <DashboardLayout/>
    </ConfigProvider>
  )
}

export default App
