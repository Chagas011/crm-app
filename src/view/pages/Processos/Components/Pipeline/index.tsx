import { Button } from "@/components/ui/button";
import type { LucideIcon } from "lucide-react";

interface Props {
  pipeline: {
    icon: LucideIcon;
    key: string;
    color: string;
    count: number;
    label: string;
  }[];
  active: string;
  onChange: (status: string) => void;
}

export function Pipeline({ pipeline, active, onChange }: Props) {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
      {pipeline.map((p) => {
        const Icon = p.icon;

        return (
          <Button
            variant={"ghost"}
            key={p.key}
            onClick={() => onChange(active === p.key ? "todos" : p.key)}
            className="rounded-xl p-4 text-left h-20"
            style={{
              border:
                active === p.key ? `1px solid ${p.color}` : "1px solid #e9ecef",
            }}
          >
            <div className="flex items-center gap-2 mb-2">
              <Icon className="w-4 h-4" style={{ color: p.color }} />
              <span className="text-lg font-bold text-accent-foreground">
                {p.count}
              </span>
            </div>
            <p className="text-xs text-muted-foreground">{p.label}</p>
          </Button>
        );
      })}
    </div>
  );
}
