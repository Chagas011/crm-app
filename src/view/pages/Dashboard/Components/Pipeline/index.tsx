import type { LucideIcon } from "lucide-react";

interface IPipelineProps {
  pipeline: {
    status: string;
    qtd: number;
    color: string;
    Icon: LucideIcon;
  };
}

export function Pipeline({ pipeline }: IPipelineProps) {
  return (
    <div className="space-y-3.5">
      <div>
        <div className="flex items-center justify-between text-sm mb-1.5">
          <div className="flex items-center gap-2">
            <pipeline.Icon
              className="w-3.5 h-3.5"
              style={{ color: pipeline.color }}
            />
            <span style={{ color: "hsl(215 20% 65%)" }}>{pipeline.status}</span>
          </div>
          <span className="font-medium text-white">{pipeline.qtd}</span>
        </div>
        <div
          className="h-1.5 rounded-full"
          style={{ background: "hsl(215 20% 20%)" }}
        >
          <div
            className="h-full rounded-full"
            style={{
              width: `${(pipeline.qtd / 22) * 100}%`,
              background: pipeline.color,
            }}
          />
        </div>
      </div>
    </div>
  );
}
