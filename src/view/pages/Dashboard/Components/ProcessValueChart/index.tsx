import { Card } from "@/components/ui/card";

export function ProcessValueCard({
  processValue,
  budgetValue,
}: {
  processValue: number;
  budgetValue: number;
}) {
  return (
    <Card className="p-5 rounded-xl">
      <p className="text-sm font-semibold mb-4">Financeiro</p>

      <div className="space-y-2">
        <div className="flex justify-between text-sm">
          <span>Processos</span>
          <span>R$ {processValue.toFixed(2)}</span>
        </div>

        <div className="flex justify-between text-sm">
          <span>Orçamentos aprovados</span>
          <span>R$ {budgetValue.toFixed(2)}</span>
        </div>
      </div>
    </Card>
  );
}
