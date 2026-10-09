import { Button, Card } from "antd"
import ProfileAvatar from "../../Components/ProfileAvatar"
import { EditOutlined, EnvironmentOutlined, MailOutlined, PhoneOutlined } from "@ant-design/icons"
import { cardClassName, PageTitle } from "../../Components/DesignUtils"
import { employeeStats } from "../../Mock/Data"
import type { superMetric } from "../../Mock/Data"
import Overview from "../../Components/Proflie_Views/Overview"
import PersonalDetails from "../../Components/Proflie_Views/PersonalDetails"
import ActivityLog from "../../Components/Proflie_Views/ActivityLog"
import Security from "../../Components/Proflie_Views/Security"
import { useState, type ReactNode } from "react"

type ProfileTab =
  | "overview"
  | "personal-details"
  | "activity-log"
  | "security"


const MyProfile = () => {


const [activeTab, setActiveTab] = useState<ProfileTab>("overview")


const profileTabs: { id: ProfileTab; label: string }[] = [
  { id: "overview", label: "Overview" },
  { id: "personal-details", label: "Personal Details" },
  { id: "activity-log", label: "Activity Logs" },
  { id: "security", label: "Security" },
];

const profileViews: Record<ProfileTab, ReactNode> = {
  "overview": <Overview />,
  "personal-details": <PersonalDetails />,
  "activity-log": <ActivityLog />,
  "security": <Security />,
};

    return (<>
    
    <main className="min-w-0 px-4 py-6 sm:px-6">
        <div className="mb-8">
            <PageTitle
            mainText = "Profile"
            subText="Manage your personal details, permissions, and account security."
            />
        </div>
        <Card className="mb-6 w-full" styles={{ body: { padding: 0 } }}>
            <div className="flex w-full flex-col items-start gap-5 p-4 sm:flex-row sm:items-center sm:justify-between sm:p-6">
                <div className="flex min-w-0 flex-col items-start gap-4 sm:flex-row sm:items-center sm:gap-6 lg:gap-8">
                    <ProfileAvatar/>
                    <div className="flex min-w-0 flex-col">
                        <h1 className="text-[21px] font-extrabold text-text">Sam Agyars 
                            <span className="mt-2 block w-fit rounded-full bg-violet-200 px-2 py-1 text-[11px] font-bold text-violet-700 sm:ml-3 sm:mt-0 sm:inline">Super Admin</span></h1>
                            <h2 className="mt-1 text-[13px] font-normal text-text-secondary">IT Administration · Accra HQ</h2>
                            <div className="mt-3 flex w-full min-w-0 flex-col gap-2 md:flex-row md:flex-wrap md:gap-x-6 lg:gap-x-8">
                                <h2 className="mt-1 flex min-w-0 items-center gap-1 break-all text-[12.5px] font-normal text-text-muted"> <MailOutlined className="shrink-0"/> sam.agyars@apexforum.com</h2>
                                <h2 className="mt-1 flex items-center gap-1 text-[12.5px] font-normal text-text-muted"> <PhoneOutlined/> +233 543 323 3345</h2>
                                <h2 className="mt-1 flex items-center gap-1 text-[12.5px] font-normal text-text-muted"> <EnvironmentOutlined/> Accra, Ghana</h2>
                            </div>     
                    </div>
                </div>
                <Button className="w-full sm:w-auto"><EditOutlined/> Edit profile</Button>
            </div>
        </Card>

        <div className="mb-6 grid w-full grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
            {employeeStats.map((stat:superMetric)=> (
                <Card 
                key={stat.title}
                className={`w-full ${cardClassName}`}
                styles={{body : {
                    padding : 20
                }}}
                >
                  <p className="text-[12.5px] mb-2 text-text-muted font-semibold">{stat.title}</p>  
                  <p className="text-[26px] mb-2 text-text font-extrabold">{stat.value}</p>  
                  <p className="text-[12.5px] mb-2 text-text-muted font-semibold">{stat.description}</p>
                </Card>
            ))}

        </div>
          
          <nav aria-label="Profile sections" className="mb-6 w-full overflow-x-auto border-b border-[#ECEBF3]">
            <div className="flex min-w-max gap-6 px-3 py-3 text-[13px] font-bold text-text-muted sm:text-[14px]">
               {
                    profileTabs.map((tab)=>(
                        <button
                            aria-current={activeTab === tab.id ? "page" : undefined}
                            className={`cursor-pointer rounded-t-lg border-b-2 px-2 py-2.5 outline-none transition-all duration-200 hover:bg-primary-tint hover:text-primary active:scale-[0.97] active:bg-violet-100 focus-visible:ring-2 focus-visible:ring-primary/40 focus-visible:ring-offset-2 ${activeTab === tab.id ? "border-primary bg-primary-tint text-primary": "border-transparent text-text-muted"}`}
                            key={tab.id}
                            onClick={()=>setActiveTab(tab.id)}
                            type="button"
                        >
                            {tab.label}
                        </button>
                    ))

               }
            </div>
         </nav>
            
        <div className="min-w-0">
            {profileViews[activeTab]}
        </div>
   

    </main>
    
    </>)
}


export default MyProfile
