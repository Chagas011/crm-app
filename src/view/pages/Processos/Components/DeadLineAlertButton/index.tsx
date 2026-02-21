import { Button } from "@/components/ui/button";

interface IDeadLineAlertButtonProps {
  id: string;
  cliente: string;
  diasRestantes: number;
  handleSetId: (id: string) => void;
}

export function DeadLineAlertButton({
  cliente,
  diasRestantes,
  handleSetId,
  id,
}: IDeadLineAlertButtonProps) {
  return (
    <Button
      onClick={() => handleSetId(id)}
      className="text-xs px-2 py-1 rounded-lg transition-colors hover:bg-white/5"
      style={{
        background: "hsl(347 77% 50% / 0.15)",
        color: "hsl(347 77% 65%)",
      }}
    >
      {id} — {cliente} (
      {diasRestantes <= 0
        ? `${Math.abs(diasRestantes)}d atrasado`
        : `${diasRestantes}d restantes`}
      )
    </Button>
  );
}
