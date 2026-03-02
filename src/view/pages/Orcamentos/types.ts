export type BudgetStatus = "APROVADO" | "EM_ANALISE" | "REJEITADO";
interface Client {
  name: string;
  cpfCnpj: string;
  id: string;
}
export interface IBudget {
  id: string;
  service: string;
  deadline: Date;
  status: BudgetStatus;
  serviceValue: number;
  client: Client;
}
