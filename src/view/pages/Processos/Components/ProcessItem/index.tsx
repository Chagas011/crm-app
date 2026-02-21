import { ChevronRight } from "lucide-react";

import { Button } from "@/components/ui/button";
import { statusConfig } from "../../statusConfig";
import type { IProcesso } from "../../types";
import { getAvatarColor } from "../../utils/avatar";
import { ProcessExpanded } from "../ProcessExpanded";

interface IProcessItemProps {
  processo: IProcesso;
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
    <div className="rounded-xl overflow-hidden">
      <Button
        onClick={() => onToggle(processo.id)}
        className="w-full flex items-center gap-4 p-4 text-left h-20"
      >
        <div
          className="w-10 h-10 rounded-lg flex items-center justify-center"
          style={{ background: cfg.color + "15" }}
        >
          <Icon className="w-5 h-5" style={{ color: cfg.color }} />
        </div>

        <div className="flex-1">
          <p className="text-sm font-medium text-white">{processo.servico}</p>
          <p className="text-xs text-muted-foreground">
            {processo.cliente} · {processo.veiculo}
          </p>
        </div>

        <div
          className="w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold text-white"
          style={{ background: getAvatarColor(processo.responsavel) }}
        >
          {processo.responsavel}
        </div>

        <ChevronRight
          className={`w-4 h-4 transition-transform ${
            expanded ? "rotate-90" : ""
          }`}
        />
      </Button>

      {expanded && <ProcessExpanded proc={processo} />}
    </div>
  );
}
