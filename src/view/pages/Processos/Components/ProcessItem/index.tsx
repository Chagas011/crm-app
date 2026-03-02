import { ChevronRight } from "lucide-react";

import { Button } from "@/components/ui/button";
import { statusConfig } from "../../statusConfig";

import type { IProcess } from "../../types";
import { getAvatarColor } from "../../utils/avatar";
import { ProcessExpanded } from "../ProcessExpanded";

interface IProcessItemProps {
  processo: IProcess;
  expanded: boolean;
  onToggle: (id: string | null) => void;
}

export function ProcessItem({
  processo,
  expanded,
  onToggle,
}: IProcessItemProps) {
  const cfg = statusConfig[processo.status];
  const Icon = cfg.icon;

  return (
    <div className="overflow-hidden">
      <Button
        onClick={() => onToggle(processo.id)}
        className={`w-full flex items-center gap-4 p-4 text-left h-20 bg-background border-t border-l ${expanded ? "" : "border border-b"} border-r hover:bg-gray-1`}
        style={{
          borderColor: cfg.color,
          borderRadius: 0,
          borderTopLeftRadius: 8,
          borderTopRightRadius: 8,
        }}
      >
        <div
          className="w-10 h-10 rounded-lg flex items-center justify-center"
          style={{ background: cfg.color + "15" }}
        >
          <Icon className="w-5 h-5" style={{ color: cfg.color }} />
        </div>

        <div className="flex-1">
          <p className="text-sm font-medium text-accent-foreground">
            {processo.serviceType}
          </p>
          <p className="text-xs text-muted-foreground">
            {processo.client.name}
          </p>
        </div>

        <div
          className="w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold text-white"
          style={{ background: getAvatarColor(processo.responsibleName) }}
        >
          {processo.responsibleName[0]}
        </div>

        <ChevronRight
          className={`w-4 h-4 transition-transform text-accent-foreground ${
            expanded ? "rotate-90" : ""
          }`}
        />
      </Button>

      {expanded && <ProcessExpanded proc={processo} />}
    </div>
  );
}
