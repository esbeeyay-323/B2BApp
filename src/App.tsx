//import { useState } from 'react'
import { Navigate, Route, Routes } from 'react-router-dom';
import DashboardLayout from './Dashboard/DashboardLayout';
import { ConfigProvider } from 'antd';
import DashboardHome from './Dashboard/Pages/DashboardHome';
import Goals from './Dashboard/Pages/Goals';
import MyProfile from './Dashboard/Pages/MyProfile';
import SelfEvaluation from './Dashboard/Pages/SelfEvaluation';
import TeamAppraisals from './Dashboard/Pages/TeamAppraisals';
import UserDirectory from './Dashboard/Pages/UserDirectory';
import CycleSettings from './Dashboard/Pages/CycleSettings';
import Settings from './Dashboard/Pages/Settings';


function App() {
  
  return (
    <ConfigProvider
      theme={{
        components: {
          Menu: {
            itemBorderRadius: 10,
            itemHeight: 44,
            itemHoverColor: '#564BD1',
            itemHoverBg: '#EEECFE',
            itemMarginInline: 12,
            itemSelectedBg: '#6C5DF4',
            itemSelectedColor: '#FFFFFF',
          },
          Select: {
            optionActiveBg: '#F1F0F8',
            optionSelectedBg: '#EFEAFF',
            optionSelectedColor: '#6C5DF4',
            optionSelectedFontWeight: 700,
            optionFontSize: 13,
            optionHeight: 40,
            optionPadding: '8px 12px',
          },
        },
        token: {
          colorPrimary: '#6C5DF4',
          colorPrimaryHover: '#7A6DF6',
          colorPrimaryActive: '#564BD1',
          colorText: '#1E1B2E',
          colorTextSecondary: '#8D8AA3',
          colorBorder: '#ECEBF4',
          colorBgLayout: '#F6F6FB',
          borderRadius: 10,
          borderRadiusLG: 16,
          boxShadow: '0 1px 2px rgba(30, 27, 46, 0.03), 0 8px 24px rgba(30, 27, 46, 0.06)',
          boxShadowSecondary: '0 2px 4px rgba(30, 27, 46, 0.04), 0 14px 32px rgba(30, 27, 46, 0.10)',
          fontFamily: '"Manrope", sans-serif',
        },
      }}
    >

      <Routes>
        <Route path='/' element={<Navigate replace to='/dashboard' />}/>
        <Route path='/dashboard' element={<DashboardLayout/>}>
          <Route index element={<DashboardHome/>}/>
          <Route path='profile' element={<MyProfile/>}/>
          <Route path='goals' element={<Goals/>}/>
          <Route path='self-evaluation' element={<SelfEvaluation/>}/>
          <Route path='team-appraisals' element={<TeamAppraisals/>}/>
          <Route path='user-directory' element={<UserDirectory/>}/>
          <Route path='cycle-settings' element={<CycleSettings/>}/>
          <Route path='settings' element={<Settings/>}/>

        </Route>
        <Route path='*' element={<Navigate replace to='/dashboard' />}/>
      </Routes>


    </ConfigProvider>
  )
}

export default App
