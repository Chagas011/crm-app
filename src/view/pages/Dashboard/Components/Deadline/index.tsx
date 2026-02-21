interface IDeadLineProps {
  processos: {
    id: string;
    cliente: string;
    servico: string;
    prazo: string;
    dias: number;
    status: string;
  };
}

export function Deadline({ processos }: IDeadLineProps) {
  return (
    <div className="flex items-center justify-between py-1.5">
      <div className="flex items-center gap-2">
        <span
          className="text-xs font-mono"
          style={{ color: "hsl(263 70% 68%)" }}
        >
          {processos.id}
        </span>
        <span className="text-sm text-white">{processos.cliente}</span>
        <span className="text-xs" style={{ color: "hsl(215 20% 50%)" }}>
          — {processos.servico}
        </span>
      </div>
      <span
        className="text-xs font-medium px-2 py-0.5 rounded-full"
        style={{
          background:
            processos.dias <= 0
              ? "hsl(347 77% 50% / 0.2)"
              : "hsl(38 92% 50% / 0.2)",
          color: processos.dias <= 0 ? "hsl(347 77% 60%)" : "hsl(38 92% 55%)",
        }}
      >
        {processos.dias <= 0
          ? `${Math.abs(processos.dias)}d atrasado`
          : `${processos.dias}d restantes`}
      </span>
    </div>
  );
}
