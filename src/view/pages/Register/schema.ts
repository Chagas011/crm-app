import z from "zod";

export const registerSchema = z.object({
  email: z.email("Email inválido"),
  password: z.string().min(8, "A senha precisa ter no minimo 8 Caracteres"),
});

export type RegisterFormData = z.infer<typeof registerSchema>;
