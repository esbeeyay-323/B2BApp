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


const MyProfile = () => {

    return (<>
    
    <main className="m-6 sm:m-6">
        <PageTitle  
        mainText = "Profile"
        subText="Manage your personal details, permissions, and account security."
        />
        <Card className="w-full mb-6">
            <div className="flex w-full flex-col items-start gap-5 sm:flex-row sm:items-center sm:justify-between">
                <div className="flex flex-col items-start gap-4 sm:flex-row sm:gap-8">
                    <ProfileAvatar/>
                    <div className="flex flex-col">
                        <h1 className="text-[21px] font-extrabold text-text">Sam Agyars 
                            <span className="mt-2 block w-fit rounded-[999px] bg-violet-200 px-2 py-1 text-[11px] font-bold text-violet-700 sm:ml-3 sm:mt-0 sm:inline">Super Admin</span></h1>
                            <h2 className="mt-1 text-[13px] font-normal text-text-secondary">IT Administration · Accra HQ</h2>
                            <div className="mt-3 flex w-full flex-col gap-2 sm:flex-row sm:flex-wrap sm:gap-8">
                                <h2 className="mt-1 flex items-center gap-1  text-[12.5px] font-normal text-text-muted"> <MailOutlined/> sam.agyars@apexforum.com</h2>
                                <h2 className="mt-1 flex items-center gap-1 text-[12.5px] font-normal text-text-muted"> <PhoneOutlined/> +233 543 323 3345</h2>
                                <h2 className="mt-1 flex items-center gap-1 text-[12.5px] font-normal text-text-muted"> <EnvironmentOutlined/> Accra, Ghana</h2>
                            </div>     
                    </div>
                </div>
                <Button className="w-full sm:w-auto"><EditOutlined/> Edit profile</Button>
            </div>
        </Card>

        <div className="grid mb-6 w-full grid-cols-1 gap-4 xl:grid-cols-4">
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
          
          <nav className="w-full flex mb-6 text-text-muted font-bold gap-6 border-b border-[#ECEBF3] p-3">
            <a>Overview</a>
            <a>Personal Details</a>
            <a>Activity Logs</a>
            <a>Security</a>
         </nav>
            
        <div>
            {<Overview/>}
        </div>
   

    </main>
    
    </>)
}


export default MyProfile
