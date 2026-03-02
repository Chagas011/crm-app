import {
  Cell,
  Legend,
  Pie,
  PieChart,
  ResponsiveContainer,
  Tooltip,
} from "recharts";

interface TaskChartProps {
  data: { name: string; value: number }[];
}

const COLORS = ["#3B82F6", "#F59E0B", "#10B981", "#EF4444"];

export function TasksChart({ data }: TaskChartProps) {
  return (
    <>
      <div>
        <h1>Tarefas</h1>
      </div>
      <ResponsiveContainer width="100%" height={300}>
        <PieChart>
          <Tooltip />

          <Legend verticalAlign="bottom" height={36} />

          <Pie
            data={data}
            dataKey="value"
            nameKey="name"
            outerRadius={100}
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
    </>
  );
}
