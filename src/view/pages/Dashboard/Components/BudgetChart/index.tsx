import {
  Cell,
  Legend,
  Pie,
  PieChart,
  ResponsiveContainer,
  Tooltip,
} from "recharts";

interface BudgetChartProps {
  data: { name: string; value: number }[];
}

const COLORS = ["#10B981", "#F59E0B", "#EF4444"];

export function BudgetChart({ data }: BudgetChartProps) {
  return (
    <div className="w-full h-75">
      <div>
        <h1>Orcamentos</h1>
      </div>
      <ResponsiveContainer width="100%" height="100%">
        <PieChart>
          <Tooltip />

          <Legend verticalAlign="bottom" height={36} />

          <Pie
            data={data}
            dataKey="value"
            nameKey="name"
            outerRadius={90}
            label
          >
            {data.map((_, index) => (
              <Cell
                key={`cell-${index}`}
                fill={COLORS[index % COLORS.length]}
              />
            ))}
          </Pie>
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
}
