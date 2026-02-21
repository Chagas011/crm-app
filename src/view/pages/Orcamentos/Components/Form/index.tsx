import { Card } from "@/components/ui/card";

interface IFormOrcamentoProps {
  onToggle: () => void;
}

export function FormOrcamento({ onToggle }: IFormOrcamentoProps) {
  return (
    <Card className="rounded-xl p-5 space-y-4">
      <h4 className="text-white font-medium">Novo Orçamento</h4>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {[
          { label: "Cliente", placeholder: "Nome do cliente" },
          { label: "Serviço", placeholder: "Descrição do serviço" },
          { label: "Valor (R$)", placeholder: "0,00" },
          { label: "Contato", placeholder: "Nome do responsável" },
          { label: "Validade", placeholder: "DD/MM/AAAA", type: "date" },
        ].map((f) => (
          <div key={f.label}>
            <label
              className="text-xs font-medium block mb-1.5"
              style={{ color: "hsl(215 20% 60%)" }}
            >
              {f.label}
            </label>
            <input
              type={f.type ?? "text"}
              placeholder={f.placeholder}
              className="w-full rounded-lg px-3 py-2 text-sm text-white outline-none focus:ring-1 focus:ring-purple-500 transition-all"
              style={{
                background: "hsl(222 47% 11%)",
                border: "1px solid hsl(215 20% 20%)",
              }}
            />
          </div>
        ))}
        <div>
          <label
            className="text-xs font-medium block mb-1.5"
            style={{ color: "hsl(215 20% 60%)" }}
          >
            Status
          </label>
          <select
            className="w-full rounded-lg px-3 py-2 text-sm text-white outline-none"
            style={{
              background: "hsl(222 47% 11%)",
              border: "1px solid hsl(215 20% 20%)",
            }}
          >
            <option value="rascunho">Rascunho</option>
            <option value="analise">Em Análise</option>
            <option value="aprovado">Aprovado</option>
          </select>
        </div>
      </div>
      <div>
        <label
          className="text-xs font-medium block mb-1.5"
          style={{ color: "hsl(215 20% 60%)" }}
        >
          Observações
        </label>
        <textarea
          rows={3}
          placeholder="Detalhes do serviço, condições especiais..."
          className="w-full rounded-lg px-3 py-2 text-sm text-white outline-none resize-none"
          style={{
            background: "hsl(222 47% 11%)",
            border: "1px solid hsl(215 20% 20%)",
          }}
        />
      </div>
      <div className="flex gap-3">
        <button
          className="px-4 py-2 rounded-lg text-sm font-medium text-white"
          style={{ background: "hsl(263 70% 58%)" }}
        >
          Salvar Orçamento
        </button>
        <button
          onClick={() => onToggle()}
          className="px-4 py-2 rounded-lg text-sm font-medium text-white/50 hover:text-white transition-colors"
          style={{ background: "hsl(215 20% 20%)" }}
        >
          Cancelar
        </button>
      </div>
    </Card>
  );
}
