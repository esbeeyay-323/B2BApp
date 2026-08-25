import { Fragment } from 'react';
import {
  Label,
  Legend,
  Pie,
  PieChart,
  type PieSectorShapeProps,
  ResponsiveContainer,
  Sector,
  Tooltip,
} from 'recharts';

const ratingDistribution = [
  { name: 'Exceeds Expectations', value: 35 },
  { name: 'Meets Expectations', value: 50 },
  { name: 'Needs Improvement', value: 15 },
];

const COLORS = ['#10B981', '#3B82F6', '#EF4444'];

const total = ratingDistribution.reduce((sum, item) => sum + item.value, 0);

const chartData = ratingDistribution.map((item, index) => ({
  ...item,
  color: COLORS[index],
  percentage: total === 0 ? 0 : (item.value / total) * 100,
}));

const percentageFormatter = new Intl.NumberFormat('en', {
  maximumFractionDigits: 1,
});

const formatPercentage = (percentage: number) =>
  `${percentageFormatter.format(percentage)}%`;

const DonutSlice = (props: PieSectorShapeProps) => (
  <Sector
    {...props}
    fill={COLORS[props.index % COLORS.length]}
  />
);

const CustomLegend = () => (
  <div className="mx-auto grid w-full max-w-sm grid-cols-[12px_minmax(0,1fr)_auto] items-center gap-x-3 gap-y-2 px-4">
    {chartData.map((item) => (
      <Fragment key={item.name}>
        <span
          className="h-3 w-3 rounded-full"
          style={{ backgroundColor: item.color }}
        />
        <span className="truncate text-sm text-gray-600">{item.name}</span>
        <span className="text-sm font-semibold tabular-nums text-gray-900">
          {formatPercentage(item.percentage)}
        </span>
      </Fragment>
    ))}
  </div>
);

export function DonutChart() {
  const centrePercentage = 1864;

  return (
    <div className="h-80 w-full">
      <ResponsiveContainer width="100%" height="100%">
        <PieChart>
          <Pie
            data={chartData}
            cx="50%"
            cy="45%"
            innerRadius={60}
            outerRadius={90}
            paddingAngle={4}
            dataKey="value"
            nameKey="name"
            shape={DonutSlice}
          >
            <Label
              content={({ viewBox }) => {
                if (
                  !viewBox ||
                  !('cx' in viewBox) ||
                  !('cy' in viewBox) ||
                  typeof viewBox.cx !== 'number' ||
                  typeof viewBox.cy !== 'number'
                ) {
                  return null;
                }

                return (
                  <text
                    x={viewBox.cx}
                    y={viewBox.cy}
                    textAnchor="middle"
                  >
                    <tspan
                      x={viewBox.cx}
                      y={viewBox.cy - 4}
                      fill="#111827"
                      fontSize="24"
                      fontWeight="600"
                    >
                      {centrePercentage}
                    </tspan>
                    <tspan
                      x={viewBox.cx}
                      dy="20"
                      fill="#6B7280"
                      fontSize="12"
                    >
                      Reviews
                    </tspan>
                  </text>
                );
              }}
            />
          </Pie>
          <Tooltip
            formatter={(value, name) => [
              formatPercentage(
                total === 0 ? 0 : (Number(value) / total) * 100,
              ),
              name,
            ]}
          />
          <Legend position="bottom" height={76} content={<CustomLegend />} />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
}

export default DonutChart;
