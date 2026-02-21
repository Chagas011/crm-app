import {
  AlertTriangle,
  CheckCircle2,
  CircleDot,
  ClipboardCheck,
  Clock,
  FileText,
  type LucideIcon,
} from "lucide-react";
import type { ProcessStatus } from "./types";

export const statusConfig: Record<
  ProcessStatus,
  { label: string; color: string; icon: LucideIcon }
> = {
  entrada: { label: "Entrada", color: "hsl(263 70% 58%)", icon: CircleDot },
  documentacao: {
    label: "Documentação",
    color: "hsl(189 94% 43%)",
    icon: FileText,
  },
  detran: {
    label: "No DETRAN",
    color: "hsl(38 92% 50%)",
    icon: ClipboardCheck,
  },
  aguardando: { label: "Aguardando", color: "hsl(215 20% 50%)", icon: Clock },
  concluido: {
    label: "Concluído",
    color: "hsl(160 84% 39%)",
    icon: CheckCircle2,
  },
  atrasado: {
    label: "Atrasado",
    color: "hsl(347 77% 50%)",
    icon: AlertTriangle,
  },
};
