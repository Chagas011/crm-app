import type { LucideIcon } from "lucide-react";

export type ProcessStatus =
  | "entrada"
  | "documentacao"
  | "detran"
  | "aguardando"
  | "concluido"
  | "atrasado";

export interface IProcesso {
  id: string;
  cliente: string;
  telefone: string;
  servico: string;
  tipoServico: string;
  veiculo: string;
  placa: string;
  status: ProcessStatus;
  dataEntrada: string;
  prazoFinal: string;
  diasRestantes: number;
  responsavel: string;
  documentos: Documento[];
  observacoes: string;
  etapaAtual: number;
  totalEtapas: number;
}
interface Documento {
  nome: string;
  recebido: boolean;
}

export interface StatusConfig {
  label: string;
  color: string;
  icon: LucideIcon;
}
