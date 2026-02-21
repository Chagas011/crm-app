import {
  AlertTriangle,
  CheckCircle2,
  CircleDot,
  ClipboardCheck,
  Clock,
  FileText,
} from "lucide-react";

export const pipelineData = [
  { status: "Entrada", qtd: 3, color: "hsl(263 70% 58%)", Icon: CircleDot },
  { status: "Documentação", qtd: 4, color: "hsl(189 94% 43%)", Icon: FileText },
  {
    status: "No DETRAN",
    qtd: 5,
    color: "hsl(38 92% 50%)",
    Icon: ClipboardCheck,
  },
  { status: "Aguardando", qtd: 2, color: "hsl(215 20% 50%)", Icon: Clock },
  {
    status: "Concluído",
    qtd: 22,
    color: "hsl(160 84% 39%)",
    Icon: CheckCircle2,
  },
  {
    status: "Atrasado",
    qtd: 2,
    color: "hsl(347 77% 50%)",
    Icon: AlertTriangle,
  },
];
