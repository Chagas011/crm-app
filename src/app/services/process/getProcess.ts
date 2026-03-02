import { httpClient } from "../httpClient";

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
interface Process {
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

interface GetProcessResponse {
  process: Process[];
}

export const getProcess = async () => {
  const { data } = await httpClient.get<GetProcessResponse>("/process");

  return data;
};
