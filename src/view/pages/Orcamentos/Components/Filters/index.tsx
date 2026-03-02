import { Button } from "@/components/ui/button";
import { statusConfigBudget } from "../../statusConfig";

interface IFiltersProps {
  active: string;
  onChange: (status: string) => void;
}

export function Filters({ active, onChange }: IFiltersProps) {
  return (
    <div className="flex gap-2 flex-wrap">
      {["todos", "APROVADO", "EM_ANALISE", "REJEITADO"].map((s) => (
        <Button
          variant={"ghost"}
          key={s}
          onClick={() => onChange((active = s))}
          className="px-3 py-2 rounded-lg text-xs font-medium capitalize transition-all h-11"
          style={
            active === s
              ? {
                  color: "black",
                  border: "1px solid #10161d",
                }
              : {
                  background: "",
                  color: "hsl(215 20% 60%)",
                  border: "1px solid #e9ecef",
                }
          }
        >
          {s === "todos" ? "Todos" : statusConfigBudget[s]?.label}
        </Button>
      ))}
    </div>
  );
}
