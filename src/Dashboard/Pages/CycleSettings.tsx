import { Card } from "antd";
import { PageTitle } from "../../Components/DesignUtils";
import { cycleMetrics } from "../../Mock/Data";
import CyclesTable from "../../Components/CyclesTable";
import type { CycleRecord } from "../../Components/CyclesTable";
import CycleInfo from "../../Components/CycleInfo";
import { useState } from "react";

const CycleSettings = () => {
    const [selectedCycle, setSelectedCycle] = useState<CycleRecord | null>(null);

    return(
        <>
        <main className="flex min-w-0 flex-col gap-8 px-4 py-6 sm:px-6">
            <PageTitle mainText="Cycle Settings" 
            subText="Configure, launch, and track your performance review cycles" />

             <div className="grid w-full grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
                        {cycleMetrics.map((metric)=> (
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
                         
                          <div className="flex w-full flex-col gap-6 lg:flex-row">
                        <div className="w-full min-w-0 lg:w-66/100">
                              {/* CYclesTable Here */}
                              <CyclesTable
                                onCycleSelect={setSelectedCycle}
                                selectedCycleId={selectedCycle?.id ?? null}
                              />
                        </div>
                        <div className="w-full min-w-0 lg:flex-1">
                            {/* all Designed Components go here */}
                            <CycleInfo
                                cycle={selectedCycle}
                                key={selectedCycle?.id ?? "empty"}
                                onClose={() => setSelectedCycle(null)}
                            />
                        </div>
                    </div>

        </main>

         
        </>
    )
}

export default CycleSettings;
