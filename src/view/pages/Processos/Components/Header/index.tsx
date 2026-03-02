import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";

interface Props {
  total: number;

  onToggle: () => void;
}

export function Header({ total, onToggle }: Props) {
  return (
    <div className="flex items-center justify-between flex-wrap gap-3">
      <div>
        <h3 className="text-primary font-semibold text-lg">Processos</h3>
        <p className="text-xs text-muted-foreground mt-0.5">
          {total} processos
        </p>
      </div>

      <Button
        variant={"default"}
        className="flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium  text-white"
        onClick={() => onToggle()}
      >
        <Plus className="w-4 h-4" />
        Novo Processo
      </Button>
    </div>
  );
}
