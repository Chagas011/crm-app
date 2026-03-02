import { httpClient } from "../httpClient";

export type BudgetStatus = "APROVADO" | "EM_ANALISE" | "REJEITADO";
interface BudgetUpdateData {
  service: string;
  deadline: Date;
  status: BudgetStatus;
  serviceValue: number;
}

interface BudgetUpdateParams {
  budgetId: string;
  data: BudgetUpdateData;
}

export const updateBudget = async (dataParams: BudgetUpdateParams) => {
  const { data } = await httpClient.put(
    `/budget/${dataParams.budgetId}`,
    dataParams.data,
  );

  return { data };
};
