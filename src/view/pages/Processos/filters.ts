import { type IProcesso } from "./mock";

export function filterProcess(processos: IProcesso[], input: string) {
  processos.filter((p) => {
    const matchSearch =
      p.cliente.toLowerCase().includes(input.toLowerCase()) ||
      p.servico.toLowerCase().includes(input.toLowerCase()) ||
      p.id.toLowerCase().includes(input.toLowerCase()) ||
      p.veiculo.toLowerCase().includes(input.toLowerCase());
    const matchStatus = filterStatus === "todos" || p.status === filterStatus;
    return matchSearch && matchStatus;
  });
}
