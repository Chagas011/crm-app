import z from "zod";

export const clientSchema = z.object({
  name: z.string().min(1, "informe o Nome/Empresa do cliente"),
  cpfCnpj: z.string().min(11, "Informe o CPF/CNPJ do cliente"),
  email: z.email("Email inválido"),
  rgIE: z.string().min(1, "Informe o RG/IE do cliente"),
  tel: z.string().min(1, "Informe o Telefone/WhatsApp do cliente"),
  address: z.string().min(1, "Informe o endereco do cliente"),
});

export type ClientFormData = z.infer<typeof clientSchema>;
