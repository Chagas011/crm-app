import { Card } from "@/components/ui/card";

interface IFormProps {
  onToggle: () => void;
}

export function Form({ onToggle }: IFormProps) {
  return (
    <Card className="rounded-xl p-5 space-y-4">
      <h4 className="text-white font-medium">Cadastrar Cliente</h4>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {[
          "Empresa",
          "Contato",
          "Email",
          "Telefone",
          "Cidade/UF",
          "Segmento",
        ].map((f) => (
          <div key={f}>
            <label
              className="text-xs font-medium block mb-1.5"
              style={{ color: "hsl(215 20% 60%)" }}
            >
              {f}
            </label>
            <input
              placeholder={f}
              className="w-full rounded-lg px-3 py-2 text-sm text-white outline-none"
              style={{
                background: "hsl(222 47% 11%)",
                border: "1px solid hsl(215 20% 20%)",
              }}
            />
          </div>
        ))}
      </div>
      <div className="flex gap-3">
        <button
          className="px-4 py-2 rounded-lg text-sm font-medium text-white"
          style={{ background: "hsl(263 70% 58%)" }}
        >
          Salvar Cliente
        </button>
        <button
          onClick={() => onToggle()}
          className="px-4 py-2 rounded-lg text-sm font-medium"
          style={{
            background: "hsl(215 20% 20%)",
            color: "hsl(215 20% 60%)",
          }}
        >
          Cancelar
        </button>
      </div>
    </Card>
  );
}
