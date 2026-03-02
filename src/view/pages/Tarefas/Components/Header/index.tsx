import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";

interface IHeaderProps {
  tarefas: number;
  onToggle: () => void;
}

export function Header({ tarefas, onToggle }: IHeaderProps) {
  return (
    <div className="flex items-center justify-between">
      <div>
        <h3 className="text-accent-foreground font-semibold">
          Kanban de Tarefas
        </h3>
        <p className="text-xs mt-0.5" style={{ color: "hsl(215 20% 50%)" }}>
          {tarefas} tarefas no total
        </p>
      </div>

      <Button
        onClick={() => onToggle()}
        className="flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium text-white transition-opacity hover:opacity-90"
      >
        <Plus className="w-4 h-4" /> Nova Tarefa
      </Button>
    </div>
  );
}
