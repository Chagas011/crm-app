import { Card } from "@/components/ui/card";
import { FileText, Mail, MapPin, Phone } from "lucide-react";
import { statusConfig } from "../../statusConfig";

interface ICardClientesProps {
  clientes: {
    id: number;
    name: string;
    contact: string;
    email: string;
    phone: string;
    city: string;
    segment: string;
    orcamentos: number;
    totalGasto: number;
    status: string;
    score: number;
  };
}

export function CardClientes({ clientes }: ICardClientesProps) {
  return (
    <Card className="rounded-xl p-5 hover:border-white/20 transition-all">
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center gap-3">
          <div
            className="w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold text-white flex-shrink-0"
            style={{ background: "hsl(263 70% 58% / 0.3)" }}
          >
            {clientes.name[0]}
          </div>
          <div>
            <p className="text-sm font-semibold text-white">{clientes.name}</p>
            <p className="text-xs" style={{ color: "hsl(215 20% 50%)" }}>
              {clientes.segment}
            </p>
          </div>
        </div>
        <span
          className="text-xs px-2 py-0.5 rounded-full font-medium"
          style={{
            background: statusConfig[clientes.status].color + "20",
            color: statusConfig[clientes.status].color,
          }}
        >
          {statusConfig[clientes.status].label}
        </span>
      </div>

      {/* Score */}

      <div className="space-y-1.5 mb-4">
        <div
          className="flex items-center gap-2 text-xs"
          style={{ color: "hsl(215 20% 55%)" }}
        >
          <Mail className="w-3.5 h-3.5 flex-shrink-0" />
          <span className="truncate">{clientes.email}</span>
        </div>
        <div
          className="flex items-center gap-2 text-xs"
          style={{ color: "hsl(215 20% 55%)" }}
        >
          <Phone className="w-3.5 h-3.5 flex-shrink-0" />
          <span>{clientes.phone}</span>
        </div>
        <div
          className="flex items-center gap-2 text-xs"
          style={{ color: "hsl(215 20% 55%)" }}
        >
          <MapPin className="w-3.5 h-3.5 flex-shrink-0" />
          <span>{clientes.city}</span>
        </div>
      </div>

      <div
        className="flex items-center justify-between pt-3 border-t"
        style={{ borderColor: "hsl(215 20% 20%)" }}
      >
        <div
          className="flex items-center gap-1 text-xs"
          style={{ color: "hsl(215 20% 50%)" }}
        >
          <FileText className="w-3.5 h-3.5" />
          <span>{clientes.orcamentos} orç.</span>
        </div>
        <span className="text-xs font-semibold text-white">
          {clientes.totalGasto > 0
            ? `R$ ${clientes.totalGasto.toLocaleString("pt-BR")}`
            : "—"}
        </span>
      </div>
    </Card>
  );
}
