import type { IProcesso } from "../../types";
import { EmptyState } from "../EmptyState";
import { ProcessItem } from "../ProcessItem";

interface Props {
  processos: IProcesso[];
  expandedId: string | null;
  onToggle: (id: string | null) => void;
}

export function ProcessList({ processos, expandedId, onToggle }: Props) {
  if (!processos.length) return <EmptyState />;

  return (
    <div className="space-y-3">
      {processos.map((proc) => (
        <ProcessItem
          key={proc.id}
          processo={proc}
          expanded={expandedId === proc.id}
          onToggle={() => onToggle(expandedId === proc.id ? null : proc.id)}
        />
      ))}
    </div>
  );
}
