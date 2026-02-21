import { Plus } from "lucide-react";

interface IHeaderProps {
  clientes: number;
  onToggle: () => void;
}

export function Header({ clientes, onToggle }: IHeaderProps) {
  return (
    <div className="flex items-center justify-between">
      <div>
        <h3 className="text-white font-semibold">Clientes</h3>
        <p className="text-xs mt-0.5" style={{ color: "hsl(215 20% 50%)" }}>
          {clientes} clientes cadastrados
        </p>
      </div>
      <button
        onClick={() => onToggle()}
        className="flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium text-white hover:opacity-90 transition-opacity"
        style={{ background: "hsl(263 70% 58%)" }}
      >
        <Plus className="w-4 h-4" /> Novo Cliente
      </button>
    </div>
  );
}
