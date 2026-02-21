import { AlertTriangle } from "lucide-react";
import type { IProcesso } from "../../types";
import { DeadLineAlertButton } from "../DeadLineAlertButton";

interface Props {
  alertas: IProcesso[];
  onSelect: (id: string) => void;
}

export function DeadlineAlert({ alertas, onSelect }: Props) {
  if (!alertas.length) return null;

  return (
    <div className="rounded-xl p-4 flex items-start gap-3 bg-red-500/5 border border-red-500/20">
      <AlertTriangle className="w-5 h-5 text-red-500 mt-0.5 flex-shrink-0" />

      <div>
        <p className="text-sm font-medium text-red-400">
          {alertas.length} processo(s) com prazo crítico
        </p>

        <div className="flex flex-wrap gap-2 mt-2">
          {alertas.map((a) => (
            <DeadLineAlertButton
              key={a.id}
              id={a.id}
              cliente={a.cliente}
              diasRestantes={a.diasRestantes}
              handleSetId={() => onSelect(a.id)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
