import { z } from "zod";
export const processDocumentSchema = z.object({
  name: z.string().min(1, "Nome do documento é obrigatório"),
  value: z.string().min(1, "Informe o valor deste campo"),
});

export const processSchema = z
  .object({
    clientId: z.string().min(1, "Cliente é obrigatório"),
    serviceType: z.string().min(1, "Informe o tipo de serviço"),
    openDate: z.date(),
    deadline: z.date(),
    responsibleName: z.string().min(1, "Informe o responsavel pelo processo"),
    serviceValue: z.string().min(1, "Informe o valor do serviço"),
    status: z.enum([
      "NOVO",
      "EM_ANDAMENTO",
      "AGUARDANDO_CLIENTE",
      "PROTOCOLADO",
      "FINALIZADO",
      "CANCELADO",
    ]),
    internalNote: z.string().optional(),
    documents: z
      .array(processDocumentSchema)
      .min(1, "Informe pelo menos 1 Documento"),
  })
  .refine((data) => new Date(data.deadline) >= new Date(data.openDate), {
    message: "A data limite não pode ser anterior à data de abertura",
    path: ["deadline"],
  });

export type ProcessFormData = z.infer<typeof processSchema>;
