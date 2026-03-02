import type { ColumStatus, PriorityStatus } from "./types";

export const cardStyle = {
  background: "hsl(222 40% 14%)",
  border: "1px solid hsl(215 20% 20%)",
};

export const priorityConfig: Record<
  PriorityStatus,
  { label: string; color: string }
> = {
  ALTA: { label: "Alta", color: "hsl(347 77% 50%)" },
  MEDIA: { label: "Média", color: "hsl(38 92% 50%)" },
  BAIXA: { label: "Baixa", color: "hsl(160 84% 39%)" },
};

export const columns: { id: ColumStatus; label: string; color: string }[] = [
  { id: "TODO", label: "A Fazer", color: "hsl(215 20% 50%)" },
  { id: "PROGRESS", label: "Em Progresso", color: "hsl(38 92% 50%)" },
  { id: "DONE", label: "Concluído", color: "hsl(160 84% 39%)" },
];

export const tagColors: Record<string, string> = {
  Transferência: "hsl(263 70% 58%)",
  Licenciamento: "hsl(189 94% 43%)",
  Emplacamento: "hsl(160 84% 39%)",
  Vistoria: "hsl(38 92% 50%)",
  Documento: "hsl(347 77% 50%)",
  Gestão: "hsl(215 20% 60%)",
};
