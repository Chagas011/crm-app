import { Card } from "@/components/ui/card";

interface IDeadLineAlertButtonProps {
  id: string;
  cliente: string;
  diasRestantes: number;
}

export function DeadLineAlertButton({
  cliente,
  diasRestantes,
}: IDeadLineAlertButtonProps) {
  return (
    <Card className="text-[14px] px-2 py-1 rounded-lg transition-colors bg-red-3 text-red-8">
      {cliente} (
      {diasRestantes <= 0
        ? `${Math.abs(diasRestantes)}d atrasado`
        : `${diasRestantes}d restantes`}
      )
    </Card>
  );
}
