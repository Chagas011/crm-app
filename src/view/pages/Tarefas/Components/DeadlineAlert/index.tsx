import { AlertTriangle } from "lucide-react";
import type { Task } from "../../types";

interface Props {
  tasks: Task[];
}

export const DeadlineAlert = ({ tasks }: Props) => {
  const overdue = tasks.filter(
    (t) => t.createdAt !== "—" && t.colum !== "DONE",
  );

  if (overdue.length === 0) return null;

  return (
    <div className="flex items-center gap-2 text-xs text-yellow-400">
      <AlertTriangle className="w-4 h-4" />
      {overdue.length} tarefas com prazo definido
    </div>
  );
};
