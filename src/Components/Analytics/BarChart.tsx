import {
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";


function Barcharts () {

    const departmentData = [
  { dept: 'Engineering', completed: 85, pending: 15 },
  { dept: 'Sales', completed: 92, pending: 8 },
  { dept: 'Marketing', completed: 70, pending: 30 },
  { dept: 'HR', completed: 98, pending: 2 },
];

        return (
            <>
            <div className="h-80 w-full">
                <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={departmentData} margin={{top : 10, right:10, left:-20, bottom:0}}>
                        <CartesianGrid strokeDasharray="3 3" vertical ={false} stroke="#F3F4F6"/>
                            <XAxis dataKey="dept" tickLine={false} axisLine={false} tick={{ fill: '#8D8AA3', fontSize: 12 }}/>
                            <YAxis unit="%" tickLine={false} axisLine={false} tick={{ fill: '#8D8AA3', fontSize: 12 }}/>
                                <Tooltip/>
                                <Legend
                                  verticalAlign="bottom"
                                  align="center"
                                  iconType="circle"
                                  iconSize={9}
                                  height={36}
                                  formatter={(value) => (
                                    <span className="text-xs text-text-secondary">
                                      {value}
                                    </span>
                                  )}
                                />
                                    <Bar name="Completed" dataKey="completed" fill="#10B981" radius={[4, 4, 0, 0]}/>
                                    <Bar name="Pending" dataKey="pending" fill="#F59E0B" radius={[4, 4, 0, 0]}/>

                    </BarChart>

                </ResponsiveContainer>
                
            </div>
            
            </>
        )
}


export default Barcharts;
