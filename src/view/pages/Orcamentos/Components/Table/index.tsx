import { Button } from "@/components/ui/button";
import { Edit } from "lucide-react";
import { useState } from "react";
import { statusConfigBudget } from "../../statusConfig";
import { DeleteBudgetModal } from "../DeleteBudgetModal";
import { ModalUpdateBudget } from "../UpdateBudgetModal";

interface Client {
  id: string;
  name: string;
  cpfCnpj: string;
}
export type BudgetStatus = "APROVADO" | "EM_ANALISE" | "REJEITADO";
interface ITable {
  filtered: {
    id: string;
    service: string;
    deadline: Date;
    status: BudgetStatus;
    serviceValue: number;
    client: Client;
  }[];
}

interface IUpdateBudget {
  id: string;
  service: string;
  deadline: Date;
  status: BudgetStatus;
  serviceValue: number;
  client: Client;
}

export function Table({ filtered }: ITable) {
  const [selectedBudget, setSelectedBudget] = useState<IUpdateBudget | null>();
  return (
    <table className="w-full">
      <thead>
        <tr className="border-b-2 border-b-accent-foreground">
          {["Cliente", "Serviço", "Valor", "Status", "Validade", "Ações"].map(
            (h) => (
              <th
                key={h}
                className="text-left px-4 py-3 text-xs font-medium"
                style={{ color: "hsl(215 20% 50%)" }}
              >
                {h}
              </th>
            ),
          )}
        </tr>
      </thead>
      <tbody>
        {filtered.map((o, i) => (
          <tr
            key={o.id}
            className={`${i < filtered.length - 1 ? "border-b " : "border-none"} hover:bg-gray-1`}
          >
            <td className="px-4 py-3">
              <p className="text-sm font-medium text-accent-foreground">
                {o.client.name}
              </p>
              <p
                className="text-xs mt-0.5"
                style={{ color: "hsl(215 20% 50%)" }}
              >
                {o.client.name}
              </p>
            </td>
            <td className="px-4 py-3 text-sm text-accent-foreground">
              {o.service}
            </td>
            <td className="px-4 py-3 text-sm font-semibold text-accent-foreground">
              R$ {o.serviceValue.toLocaleString("pt-BR")}
            </td>
            <td className="px-4 py-3">
              <span
                className="text-xs px-2 py-1 rounded-full font-medium"
                style={{
                  background: statusConfigBudget[o.status].color + "20",
                  color: statusConfigBudget[o.status].color,
                }}
              >
                {statusConfigBudget[o.status].label}
              </span>
            </td>
            <td className="px-4 py-3 text-sm text-accent-foreground">
              {new Date(o.deadline).toLocaleDateString("pt-BR")}
            </td>
            <td className="px-4 py-3">
              <div className="flex gap-2">
                {selectedBudget && (
                  <ModalUpdateBudget
                    open={selectedBudget.id === o.id}
                    budget={o}
                    onClose={() => setSelectedBudget(null)}
                  />
                )}

                <Button
                  variant={"ghost"}
                  onClick={() => setSelectedBudget(o)}
                  className="hover:bg-gray-2"
                >
                  <Edit className="w-3.5 h-3.5" />
                </Button>
                <DeleteBudgetModal id={o.id} />
              </div>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
