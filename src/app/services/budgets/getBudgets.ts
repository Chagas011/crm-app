import { httpClient } from "../httpClient";

interface Client {
  id: string;
  name: string;
  cpfCnpj: string;
}
export type BudgetStatus = "APROVADO" | "EM_ANALISE" | "REJEITADO";

interface Budget {
  id: string;
  service: string;
  deadline: Date;
  status: BudgetStatus;
  serviceValue: number;
  client: Client;
}

interface GetBudgetResponse {
  budget: Budget[];
}

export const getBudget = async () => {
  const { data } = await httpClient.get<GetBudgetResponse>("/budget");
  console.log(data);
  return data;
};
