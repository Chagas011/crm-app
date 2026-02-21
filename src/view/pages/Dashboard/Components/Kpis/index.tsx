import { Card } from "@/components/ui/card";
import { type LucideIcon } from "lucide-react";

interface IKpisProps {
  kpi: {
    label: string;
    value: string;
    Icon: LucideIcon;
    color: string;
  };
}

export function Kpis({ kpi }: IKpisProps) {
  return (
    <Card className="rounded-xl p-5">
      <div className="flex items-start justify-between mb-4">
        <div className="w-10 h-10 rounded-lg flex items-center justify-center">
          <kpi.Icon className="w-5 h-5" style={{ color: kpi.color }} />
        </div>
      </div>
      <p className="text-2xl font-bold text-white mb-1">{kpi.value}</p>
      <p className="text-xs" style={{ color: "hsl(215 20% 50%)" }}>
        {kpi.label}
      </p>
    </Card>
  );
}
