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
        <h3 className="text-white font-semibold">Orçamentos de Serviços</h3>
        <p className="text-xs mt-0.5" style={{ color: "hsl(215 20% 50%)" }}>
          {totalOrcamentos} orçamentos · Total: R${" "}
          {total.toLocaleString("pt-BR")}
        </p>
      </div>
      <button
        onClick={() => onToggle()}
        className="flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium text-white transition-opacity hover:opacity-90"
        style={{ background: "hsl(263 70% 58%)" }}
      >
        <Plus className="w-4 h-4" /> Novo Orçamento
      </button>
    </div>
  );
}
