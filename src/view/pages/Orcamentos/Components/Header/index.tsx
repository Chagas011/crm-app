import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";

interface IHeaderProps {
  total: number;
  totalOrcamentos: number;
  onToggle: () => void;
}

export function Header({ onToggle, total, totalOrcamentos }: IHeaderProps) {
  return (
    <div className="flex items-center justify-between">
      <div>
        <h3 className="text-primary font-semibold">Orçamentos de Serviços</h3>
        <p className="text-xs mt-0.5" style={{ color: "hsl(215 20% 50%)" }}>
          {totalOrcamentos} orçamentos · Total: R${" "}
          {total.toLocaleString("pt-BR")}
        </p>
      </div>
      <Button onClick={() => onToggle()}>
        <Plus className="w-4 h-4" /> Novo Orçamento
      </Button>
    </div>
  );
}
