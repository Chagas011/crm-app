import { statusConfig } from "../../statusConfig";

interface IFiltersProps {
  active: string;
  onChange: (status: string) => void;
}

export function Filters({ active, onChange }: IFiltersProps) {
  return (
    <div className="flex flex-col sm:flex-row gap-3">
      <div className="flex gap-2">
        {["todos", "ativo", "potencial", "inativo"].map((s) => (
          <button
            key={s}
            onClick={() => onChange((active = s))}
            className="px-3 py-2 rounded-lg text-xs font-medium capitalize transition-all"
            style={
              active === s
                ? { background: "hsl(263 70% 58%)", color: "white" }
                : {
                    background: "hsl(222 47% 11%)",
                    color: "hsl(215 20% 60%)",
                    border: "1px solid hsl(215 20% 20%)",
                  }
            }
          >
            {s === "todos" ? "Todos" : statusConfig[s]?.label}
          </button>
        ))}
      </div>
    </div>
  );
}
