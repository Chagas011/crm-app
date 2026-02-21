import type { Column, Priority } from "./types";

export const cardStyle = {
  background: "hsl(222 40% 14%)",
  border: "1px solid hsl(215 20% 20%)",
};

export const priorityConfig: Record<
  Priority,
  { label: string; color: string }
> = {
  alta: { label: "Alta", color: "hsl(347 77% 50%)" },
  média: { label: "Média", color: "hsl(38 92% 50%)" },
  baixa: { label: "Baixa", color: "hsl(160 84% 39%)" },
};

export const columns: { id: Column; label: string; color: string }[] = [
  { id: "todo", label: "A Fazer", color: "hsl(215 20% 50%)" },
  { id: "progress", label: "Em Progresso", color: "hsl(38 92% 50%)" },
  { id: "done", label: "Concluído", color: "hsl(160 84% 39%)" },
];

export const tagColors: Record<string, string> = {
  Transferência: "hsl(263 70% 58%)",
  Licenciamento: "hsl(189 94% 43%)",
  Emplacamento: "hsl(160 84% 39%)",
  Vistoria: "hsl(38 92% 50%)",
  Documento: "hsl(347 77% 50%)",
  Gestão: "hsl(215 20% 60%)",
};
