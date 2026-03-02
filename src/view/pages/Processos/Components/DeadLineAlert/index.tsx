import { AlertTriangle } from "lucide-react";

import { diffInDays } from "@/utils/diffInDays";
import type { IProcess } from "../../types";
import { DeadLineAlertButton } from "../DeadLineAlertButton";

interface Props {
  alertas: IProcess[];
}

export function DeadlineAlert({ alertas }: Props) {
  if (!alertas.length) return null;

  return (
    <div className="rounded-xl p-4 flex items-start gap-3 bg-red-500/5 border border-red-500/20">
      <AlertTriangle className="w-5 h-5 text-red-500 mt-0.5 " />

      <div>
        <p className="text-sm font-medium text-red-400">
          {alertas.length} processo(s) com prazo próximo do vencimento
        </p>

        <div className="flex flex-wrap mt-2 gap-5">
          {alertas.map((a) => (
            <DeadLineAlertButton
              key={a.id}
              id={a.id}
              cliente={a.client.name}
              diasRestantes={diffInDays(
                new Date(a.openDate),
                new Date(a.deadline),
              )}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
