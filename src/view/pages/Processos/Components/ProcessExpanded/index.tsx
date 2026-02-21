import { Car, CheckCircle2, Phone, User } from "lucide-react";
import { statusConfig } from "../../statusConfig";
import type { IProcesso } from "../../types";

interface Props {
  proc: IProcesso;
}

export function ProcessExpanded({ proc }: Props) {
  const cfg = statusConfig[proc.status];

  const docsRecebidos = proc.documentos.filter((d) => d.recebido).length;

  const isUrgent =
    proc.status === "atrasado" ||
    (proc.diasRestantes <= 3 && proc.status !== "concluido");

  return (
    <div
      className="px-4 pb-4 space-y-4"
      style={{ borderTop: "1px solid hsl(215 20% 15%)" }}
    >
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-4">
        {/* Cliente */}
        <div className="space-y-2">
          <h4 className="text-xs font-medium uppercase tracking-wide text-muted-foreground">
            Cliente
          </h4>

          <div className="space-y-1.5">
            <div className="flex items-center gap-2 text-sm text-white">
              <User className="w-3.5 h-3.5 text-muted-foreground" />
              {proc.cliente}
            </div>

            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Phone className="w-3.5 h-3.5" />
              {proc.telefone}
            </div>

            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Car className="w-3.5 h-3.5" />
              {proc.veiculo}
              {proc.placa !== "Pendente" &&
                proc.placa !== "Pendentes" &&
                proc.placa !== "Diversos" && <span>· {proc.placa}</span>}
            </div>
          </div>
        </div>

        {/* Documentos */}
        <div className="space-y-2">
          <h4 className="text-xs font-medium uppercase tracking-wide text-muted-foreground">
            Documentos ({docsRecebidos}/{proc.documentos.length})
          </h4>

          <div className="space-y-1.5">
            {proc.documentos.map((doc, i) => (
              <div key={i} className="flex items-center gap-2 text-sm">
                <CheckCircle2
                  className="w-3.5 h-3.5 flex-shrink-0"
                  style={{
                    color: doc.recebido
                      ? "hsl(160 84% 39%)"
                      : "hsl(215 20% 30%)",
                  }}
                />
                <span
                  className={
                    doc.recebido
                      ? "text-muted-foreground"
                      : "text-muted-foreground/70"
                  }
                >
                  {doc.nome}
                </span>

                {!doc.recebido && (
                  <span className="text-xs px-1.5 py-0.5 rounded bg-yellow-500/10 text-yellow-500">
                    Pendente
                  </span>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Detalhes */}
        <div className="space-y-2">
          <h4 className="text-xs font-medium uppercase tracking-wide text-muted-foreground">
            Detalhes
          </h4>

          <div className="space-y-2 text-sm text-muted-foreground">
            <div className="flex justify-between">
              <span>Entrada:</span>
              <span className="text-white">{proc.dataEntrada}</span>
            </div>

            <div className="flex justify-between">
              <span>Prazo:</span>
              <span
                className={isUrgent ? "text-red-400 font-medium" : "text-white"}
              >
                {proc.prazoFinal}
              </span>
            </div>

            <div className="flex justify-between">
              <span>Responsável:</span>
              <span className="text-white">{proc.responsavel}</span>
            </div>
          </div>

          {proc.observacoes && (
            <div className="mt-3 p-3 rounded-lg text-xs bg-background text-muted-foreground">
              💬 {proc.observacoes}
            </div>
          )}
        </div>
      </div>

      {/* Progresso */}
      <div>
        <div className="flex items-center justify-between mb-2">
          <span className="text-xs text-muted-foreground">
            Progresso do processo
          </span>
          <span className="text-xs font-medium text-white">
            {Math.round((proc.etapaAtual / proc.totalEtapas) * 100)}%
          </span>
        </div>

        <div className="w-full h-2 rounded-full bg-muted">
          <div
            className="h-full rounded-full transition-all"
            style={{
              width: `${(proc.etapaAtual / proc.totalEtapas) * 100}%`,
              background: cfg.color,
            }}
          />
        </div>
      </div>
    </div>
  );
}
