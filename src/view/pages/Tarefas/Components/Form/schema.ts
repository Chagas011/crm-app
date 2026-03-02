import z from "zod";

export const createTaskSchema = z.object({
  title: z.string().min(1, "informe o titulo da tarefa"),
  description: z.string().min(1, "Informe a descrição da tarefa"),
  responsabilityName: z.string().min(1, "Informe o nome do responsavel"),
  priority: z.enum(["ALTA", "MEDIA", "BAIXA"]),
  colum: z.enum(["TODO", "PROGRESS", "DONE"]),
});

export type CreateTaskFormData = z.infer<typeof createTaskSchema>;
