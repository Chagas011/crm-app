import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
interface IFormProps {
  onToggle: () => void;
}

export function Form({ onToggle }: IFormProps) {
  return (
    <Card className="rounded-lg p-3 w-125">
      <input
        autoFocus
        placeholder="Nome da tarefa..."
        className="w-full text-sm text-white bg-transparent outline-none placeholder-white/30"
      />
      <div className="flex gap-2 mt-2">
        <Button
          className="text-xs px-2 py-1 rounded text-white"
          style={{ background: "hsl(263 70% 58%)" }}
        >
          Adicionar
        </Button>
        <Button
          onClick={() => onToggle()}
          className="text-xs px-2 py-1 rounded text-white/40"
        >
          Cancelar
        </Button>
      </div>
    </Card>
  );
}
