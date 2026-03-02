import type { LucideIcon } from "lucide-react";

interface Document {
  name: string;
  value?: string;
}
interface Client {
  id: string;
  name: string;
  cpfCnpj: string;
  tel: string;
  address: string;
  email: string;
}

export type ProcessStatus =
  | "NOVO"
  | "EM_ANDAMENTO"
  | "AGUARDANDO_CLIENTE"
  | "PROTOCOLADO"
  | "FINALIZADO"
  | "CANCELADO";
export interface IProcess {
  id: string;
  client: Client;
  serviceType: string;
  description: string;
  openDate: Date;
  deadline: Date;
  status: ProcessStatus;
  responsibleId: string;
  responsibleName: string;
  serviceValue: number;
  internalNote?: string;
  documents: Document[];
  createdAt?: Date;
}

export interface StatusConfig {
  label: string;
  color: string;
  icon: LucideIcon;
}
