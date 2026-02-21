import { Card } from "@/components/ui/card";
import {
  Area,
  AreaChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

interface IRevenueProps {
  data: {
    mes: string;
    valor: number;
  }[];
}

export function Revenue({ data }: IRevenueProps) {
  return (
    <Card className="lg:col-span-2 rounded-xl p-5">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h3 className="text-white font-semibold">Receita Mensal</h3>
          <p className="text-xs mt-0.5" style={{ color: "hsl(215 20% 50%)" }}>
            Últimos 6 meses
          </p>
        </div>
      </div>
      <ResponsiveContainer width="100%" height={180}>
        <AreaChart data={data}>
          <defs>
            <linearGradient id="revGrad" x1="0" y1="0" x2="0" y2="1">
              <stop
                offset="5%"
                stopColor="hsl(263 70% 58%)"
                stopOpacity={0.3}
              />
              <stop offset="95%" stopColor="hsl(263 70% 58%)" stopOpacity={0} />
            </linearGradient>
          </defs>
          <XAxis
            dataKey="mes"
            tick={{ fill: "hsl(215 20% 50%)", fontSize: 12 }}
            axisLine={false}
            tickLine={false}
          />
          <YAxis hide />
          <Tooltip
            contentStyle={{
              background: "hsl(222 40% 14%)",
              border: "1px solid hsl(215 20% 20%)",
              borderRadius: 8,
              color: "white",
            }}
            formatter={(v) => [
              `R$ ${v ? v.toLocaleString("pt-BR") : "0"}`,
              "Receita",
            ]}
          />
          <Area
            type="monotone"
            dataKey="valor"
            stroke="hsl(263 70% 58%)"
            strokeWidth={2}
            fill="url(#revGrad)"
          />
        </AreaChart>
      </ResponsiveContainer>
    </Card>
  );
}
