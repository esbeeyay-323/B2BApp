import { 
        CalendarOutlined, 
        ClockCircleOutlined, 
        CarryOutOutlined,
        CopyOutlined} from "@ant-design/icons"
import { Card, Progress } from "antd"
import { PageTitle } from "../../Components/DesignUtils"
import { teamEvaluationMetrics } from "../../Mock/Data"
import TeamTable from "../../Components/Forms/TeamTable"

const TeamAppraisals = () => {

    return (
        <>
        <main className="m-6 flex flex-col gap-8">
            <PageTitle mainText="Team Appraisals" 
        subText="Review your team's performance"/>

        <Card className="flex w-full flex-col gap-6 rounded-[18px] shadow bg-white p-4 sm:p-6">
          <div className="flex w-full flex-col gap-4 sm:flex-row">
            <div className="size-12.5 rounded-[18px]
            shrink-0 flex justify-center text-[#6F5CEA] items-center bg-[#EFEAFF]">
                <CarryOutOutlined/>
            </div>
            <div className="flex min-w-0 flex-col gap-2">
                <p className="flex flex-col items-start gap-2 md:flex-row md:items-center md:gap-4">
                <span className="text-lg font-bold sm:text-[22px]">H1 2026 Team Apprasial</span>
                <span className="inline-flex items-center gap-2 rounded-[18px] bg-[#FFF6E6] px-3 py-1 text-[12px] font-semibold text-[#B06A00]"> 
                <span className=" inline-block rounded-full size-1.5 bg-[#B06A00]"/> Manager Review · Open</span>
                </p>
                
                <p className="text-[14px] font-normal text-text-secondary">IT Administration · Reporting to David Mensah</p>


                <p className="flex flex-col gap-2 text-[13px] font-normal text-text-muted sm:flex-row sm:flex-wrap sm:gap-x-4">
                    <span><CalendarOutlined/> Jan – Jun 2026</span>
                    <span><ClockCircleOutlined/> Due Sept 15, 2026</span>
                    <span><CopyOutlined/> 7 appraisals</span>
                </p>
            </div>
            </div> 
            <div className="w-full">
             <p className=" text-[14px] font-normal text-text-secondary">Overall progress</p>   
                <Progress percent={63} strokeWidth={12} strokeColor="#6F5CEA"/>
        </div>
        </Card>

            <div className="grid w-full grid-cols-1 gap-4 xl:grid-cols-4">
                        {teamEvaluationMetrics.map((metric)=> (
                            <Card className="shadow rounded-[18px] p-6 bg-white" key={metric.id}>
                              <div className="w-full flex flex-col gap-4">
                                <div className={`${metric.iconClassName} text-[20px] items-center flex justify-center rounded-[9px] p-2 size-12.5`}>
                                    {<metric.icon/>}
                                </div>
                                <div className="w-full flex flex-col gap-0.5">
                                    <p className="text-[13px] text-text-muted">{metric.title}</p>
                                    <p className="text-[28px] font-bold">{metric.value}</p>
                                   <p className="text-[13px] text-text-muted">{metric.description}</p>
                                </div>
                            </div> 
                            </Card>
                        ))}
                    </div>
                         
                    <div className="flex w-full flex-col gap-6 lg:flex-row">
                        <div className={`w-full min-w-0 overflow-hidden rounded-[18px] bg-white lg:w-66/100`}>
                               <TeamTable/>
                        </div>
                    </div>

        </main>
        </>
    )
}


export default TeamAppraisals;