import { Button, Card } from "antd";
import { PageTitle } from "../../Components/DesignUtils";
import { goalMetrics } from "../../Mock/Data";
import GoalsTable from "../../Components/Tables/GoalsTable";
import GoalsAttention from "../../Components/GoalsAttention";


const Goals = () => {

    return (<>
    
      <main className="flex min-w-0 flex-col gap-8 px-4 py-6 sm:px-6">
    <div className="w-full flex flex-col lg:justify-between lg:flex-row">
        <PageTitle mainText="Goals" subText="Align individual performance with company priorities"/>
        <Button className="mt-2.5 ">+ New Goal</Button>
    </div>
            <div className="grid w-full grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
                        {goalMetrics.map((metric)=> (
                            <Card className="rounded-panel bg-white p-6 shadow-panel" key={metric.id}>
                              <div className="w-full flex flex-col gap-4">
                                <div className={`${metric.iconClassName} text-[20px] items-center flex justify-center rounded-control p-2 size-12.5`}>
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

                     <div className="flex w-full flex-col  gap-6 lg:flex-row">
                            
                        <div className="w-full min-w-0 lg:w-66/100">
                            <GoalsTable />
                        </div>
                        <div className="w-full min-w-0 lg:flex-1">
                            {/* all Designed Components go here */}
                            <GoalsAttention />
                             
                        </div>

                        </div> 

      </main> 
    </>)
}

export default Goals;
