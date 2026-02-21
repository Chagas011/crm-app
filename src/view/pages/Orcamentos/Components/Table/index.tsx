import { Button } from "@/components/ui/button";
import { Edit, Eye, Trash2 } from "lucide-react";
import { statusConfig } from "../../statusConfig";

interface ITable {
  filtered: {
    id: string;
    client: string;
    service: string;
    value: number;
    status: string;
    date: string;
    contact: string;
    valid: string;
  }[];
}

export function Table({ filtered }: ITable) {
  return (
    <table className="w-full">
      <thead>
        <tr style={{ borderBottom: "1px solid hsl(215 20% 20%)" }}>
          {[
            "Código",
            "Cliente",
            "Serviço",
            "Valor",
            "Status",
            "Validade",
            "Ações",
          ].map((h) => (
            <th
              key={h}
              className="text-left px-4 py-3 text-xs font-medium"
              style={{ color: "hsl(215 20% 50%)" }}
            >
              {h}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {filtered.map((o, i) => (
          <tr
            key={o.id}
            style={{
              borderBottom:
                i < filtered.length - 1 ? "1px solid hsl(215 20% 15%)" : "none",
            }}
            className="hover:bg-white/5 transition-colors"
          >
            <td
              className="px-4 py-3 text-xs font-mono"
              style={{ color: "hsl(263 70% 68%)" }}
            >
              {o.id}
            </td>
            <td className="px-4 py-3">
              <p className="text-sm font-medium text-white">{o.client}</p>
              <p
                className="text-xs mt-0.5"
                style={{ color: "hsl(215 20% 50%)" }}
              >
                {o.contact}
              </p>
            </td>
            <td className="px-4 py-3 text-sm text-white/70">{o.service}</td>
            <td className="px-4 py-3 text-sm font-semibold text-white">
              R$ {o.value.toLocaleString("pt-BR")}
            </td>
            <td className="px-4 py-3">
              <span
                className="text-xs px-2 py-1 rounded-full font-medium"
                style={{
                  background: statusConfig[o.status].color + "20",
                  color: statusConfig[o.status].color,
                }}
              >
                {statusConfig[o.status].label}
              </span>
            </td>
            <td className="px-4 py-3 text-sm text-white/50">{o.valid}</td>
            <td className="px-4 py-3">
              <div className="flex gap-2">
                <Button className="p-1.5 rounded-md text-white/30 hover:text-white hover:bg-white/10 transition-colors">
                  <Eye className="w-3.5 h-3.5" />
                </Button>
                <Button className="p-1.5 rounded-md text-white/30 hover:text-white hover:bg-white/10 transition-colors">
                  <Edit className="w-3.5 h-3.5" />
                </Button>
                <Button className="p-1.5 rounded-md text-white/30 hover:text-red-400 hover:bg-red-500/10 transition-colors">
                  <Trash2 className="w-3.5 h-3.5" />
                </Button>
              </div>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
