import { Card } from "@/components/ui/card";
import type { Client } from "@/view/pages/Clientes/types";
import type { IBudget } from "@/view/pages/Orcamentos/types";
import type { IProcess } from "@/view/pages/Processos/types";
import type { Task } from "@/view/pages/Tarefas/types";
import { getDashboardData } from "../../lib/getDashboardData";
import { BudgetChart } from "../BudgetChart";
import { HighPriorityTasks } from "../HighPriorityTasks";
import { ProcessValueCard } from "../ProcessValueChart";
import { StatsCard } from "../StatsCards";
import { TasksChart } from "../TasksChart";

export function DashboardComponent({
  tasks,
  processes,
  budgets,
  clients,
}: {
  tasks: Task[];
  processes: IProcess[];
  budgets: IBudget[];
  clients: Client[];
}) {
  const data = getDashboardData(tasks, processes, budgets, clients);

  return (
    <div className="space-y-6">
      {/* cards */}
      <div className="grid grid-cols-4 gap-4">
        <StatsCard title="Clientes" value={data.clients.total} />
        <StatsCard title="Processos" value={data.processes.total} />
        <StatsCard title="Tarefas" value={data.tasks.total} />
        <StatsCard title="Orçamentos" value={data.budgets.total} />
      </div>

      {/* charts */}
      <div className="grid grid-cols-2 gap-6">
        <Card className="p-5 rounded-xl">
          <TasksChart data={data.tasks.chartData} />
        </Card>

        <Card className="p-5 rounded-xl">
          <BudgetChart data={data.budgets.budgetChartData} />
        </Card>
      </div>

      {/* bottom widgets */}
      <div className="grid grid-cols-2 gap-6">
        <ProcessValueCard
          processValue={data.processes.totalValue}
          budgetValue={data.budgets.totalValue}
        />

        <HighPriorityTasks tasks={data.tasks.highPriority} />
      </div>
    </div>
  );
}
