import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";

interface IHeaderProps {
  clientes: number;
  onToggle: () => void;
}

export function Header({ clientes, onToggle }: IHeaderProps) {
  return (
    <div className="flex items-center justify-between">
      <div>
        <h3 className="text-primary font-semibold">Clientes</h3>
        <p className="text-xs mt-0.5" style={{ color: "hsl(215 20% 50%)" }}>
          {clientes} clientes cadastrados
        </p>
      </div>
      <Button
        onClick={() => onToggle()}
        className="flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium text-secondary hover:opacity-90 transition-opacity"
      >
        <Plus className="w-4 h-4" /> Novo Cliente
      </Button>
    </div>
  );
}
