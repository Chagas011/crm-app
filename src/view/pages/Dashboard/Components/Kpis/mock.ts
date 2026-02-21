import { AlertTriangle, Car, DollarSign, Users } from "lucide-react";

export const kpis = [
  {
    label: "Receita do Mês",
    value: "R$ 32.850",
    Icon: DollarSign,
    color: "hsl(160 84% 39%)",
  },
  {
    label: "Processos Ativos",
    value: "18",
    Icon: Car,
    color: "hsl(263 70% 58%)",
  },
  {
    label: "Clientes Ativos",
    value: "142",
    Icon: Users,
    color: "hsl(189 94% 43%)",
  },
  {
    label: "Prazos Vencendo",
    value: "5",
    Icon: AlertTriangle,
    color: "hsl(347 77% 50%)",
  },
];
