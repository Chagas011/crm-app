import { httpClient } from "../httpClient";

export type BudgetStatus = "APROVADO" | "EM_ANALISE" | "REJEITADO";

interface BudgetParams {
  clientId: string;
  service: string;
  deadline: Date;
  status: BudgetStatus;
  serviceValue: number;
}

export const createBudget = async (dataParams: BudgetParams) => {
  const { data } = await httpClient.post("/budget/create", dataParams);

  return { data };
};
