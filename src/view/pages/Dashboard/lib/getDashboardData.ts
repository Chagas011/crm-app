import type { Client } from "../../Clientes/types";
import type { IBudget } from "../../Orcamentos/types";
import type { IProcess } from "../../Processos/types";
import type { Task } from "../../Tarefas/types";

export function getDashboardData(
  tasks: Task[],
  processes: IProcess[],
  budgets: IBudget[],
  clients: Client[],
) {
  const highPriorityTasks = tasks.filter((t) => t.priority === "ALTA");

  const approvedBudgets = budgets.filter((b) => b.status === "APROVADO");

  const totalBudgetValue = approvedBudgets.reduce(
    (acc, b) => acc + b.serviceValue,
    0,
  );

  const totalProcessValue = processes.reduce(
    (acc, p) => acc + p.serviceValue,
    0,
  );
  const taskStats = {
    total: tasks.length,
    todo: tasks.filter((t) => t.colum === "TODO").length,
    progress: tasks.filter((t) => t.colum === "PROGRESS").length,
    done: tasks.filter((t) => t.colum === "DONE").length,
  };

  const chartData = [
    { name: "A Fazer", value: taskStats.todo },
    { name: "Em Progresso", value: taskStats.progress },
    { name: "Concluido", value: taskStats.done },
  ];
  const budgetStats = {
    total: budgets.length,
    aprovado: budgets.filter((b) => b.status === "APROVADO").length,
    analise: budgets.filter((b) => b.status === "EM_ANALISE").length,
    rejeitado: budgets.filter((b) => b.status === "REJEITADO").length,
  };

  const budgetChartData = [
    { name: "Aprovado", value: budgetStats.aprovado },
    { name: "Em análise", value: budgetStats.analise },
    { name: "Rejeitado", value: budgetStats.rejeitado },
  ];
  return {
    tasks: {
      total: tasks.length,
      chartData,
      highPriority: highPriorityTasks,
    },

    processes: {
      total: processes.length,
      totalValue: totalProcessValue,
    },

    budgets: {
      total: budgets.length,
      approved: approvedBudgets.length,
      budgetChartData,
      totalValue: totalBudgetValue,
    },

    clients: {
      total: clients.length,
    },
  };
}
