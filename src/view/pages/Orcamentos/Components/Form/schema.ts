import { z } from "zod";
export const createBudgetSchema = z.object({
  clientId: z.string().min(1, "Cliente é obrigatório"),
  service: z.string().min(1, "Informe o tipo de serviço"),
  deadline: z.date(),
  serviceValue: z.string().min(1, "Informe o valor do serviço"),
  status: z.enum(["APROVADO", "EM_ANALISE", "REJEITADO"]),
});

export type CreateBudgetFormData = z.infer<typeof createBudgetSchema>;
