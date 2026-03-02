import { httpClient } from "../httpClient";

interface BudgetDeleteParams {
  budgetId: string;
}

export const deleteBudget = async (dataParams: BudgetDeleteParams) => {
  const { data } = await httpClient.delete(`/budget/${dataParams.budgetId}`);

  return { data };
};
