import { Loader } from "@/components/Loader";
import { useGetBudgets } from "@/hooks/budget/useGetBudget";
import { useGetClients } from "@/hooks/clients/useGetClients";
import { useGetProcess } from "@/hooks/process/useGetProcess";
import { useGetTask } from "@/hooks/task/useGetTask";
import { DashboardComponent } from "./Components/DashboardComponent";

export function Dashboard() {
  const { data: tasksData, isLoading: tasksLoading } = useGetTask();
  const { data: processData, isLoading: processLoading } = useGetProcess();
  const { data: budgetData, isLoading: budgetLoading } = useGetBudgets();
  const { data: clientsData, isLoading: clientsLoading } = useGetClients();

  const loading =
    tasksLoading || processLoading || budgetLoading || clientsLoading;

  if (loading) {
    return <Loader text="Carregando Dashboard" />;
  }

  return (
    <DashboardComponent
      tasks={tasksData?.task ?? []}
      processes={processData?.process ?? []}
      budgets={budgetData?.budget ?? []}
      clients={clientsData?.clients ?? []}
    />
  );
}
