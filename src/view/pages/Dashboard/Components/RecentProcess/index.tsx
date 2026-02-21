interface IRecentProcess {
  recentProcess: {
    id: string;
    client: string;
    service: string;
    status: string;
    etapa: string;
    date: string;
  };
}
const statusLabel: Record<string, { label: string; color: string }> = {
  entrada: { label: "Entrada", color: "hsl(263 70% 58%)" },
  documentacao: { label: "Documentação", color: "hsl(189 94% 43%)" },
  detran: { label: "No DETRAN", color: "hsl(38 92% 50%)" },
  aguardando: { label: "Aguardando", color: "hsl(215 20% 50%)" },
  concluido: { label: "Concluído", color: "hsl(160 84% 39%)" },
};
export function RecentProcess({ recentProcess }: IRecentProcess) {
  return (
    <div className="flex items-center justify-between py-2 border-b border-white/5 last:border-0">
      <div className="flex items-center gap-3">
        <span
          className="text-xs font-mono"
          style={{ color: "hsl(263 70% 68%)" }}
        >
          {recentProcess.id}
        </span>
        <div>
          <p className="text-sm font-medium text-white">
            {recentProcess.client}
          </p>
          <p className="text-xs mt-0.5" style={{ color: "hsl(215 20% 50%)" }}>
            {recentProcess.service}
          </p>
        </div>
      </div>
      <div className="text-right flex items-center gap-3">
        <span className="text-xs" style={{ color: "hsl(215 20% 50%)" }}>
          {recentProcess.etapa}
        </span>
        <span
          className="text-xs px-2 py-0.5 rounded-full font-medium"
          style={{
            background: statusLabel[recentProcess.status].color + "20",
            color: statusLabel[recentProcess.status].color,
          }}
        >
          {statusLabel[recentProcess.status].label}
        </span>
      </div>
    </div>
  );
}
