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
  NOVO: {
    label: "Novo",
    color: "hsl(263 70% 58%)",
    icon: CircleDot,
  },

  EM_ANDAMENTO: {
    label: "Em andamento",
    color: "hsl(189 94% 43%)",
    icon: FileText,
  },

  AGUARDANDO_CLIENTE: {
    label: "Aguardando cliente",
    color: "hsl(215 20% 50%)",
    icon: Clock,
  },

  PROTOCOLADO: {
    label: "Protocolado",
    color: "hsl(38 92% 50%)",
    icon: ClipboardCheck,
  },

  FINALIZADO: {
    label: "Finalizado",
    color: "hsl(160 84% 39%)",
    icon: CheckCircle2,
  },

  CANCELADO: {
    label: "Cancelado",
    color: "hsl(347 77% 50%)",
    icon: AlertTriangle,
  },
};
