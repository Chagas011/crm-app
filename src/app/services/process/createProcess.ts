import { httpClient } from "../httpClient";

interface Document {
  name: string;
  value?: string;
}
export type ProcessStatus =
  | "NOVO"
  | "EM_ANDAMENTO"
  | "AGUARDANDO_CLIENTE"
  | "PROTOCOLADO"
  | "FINALIZADO"
  | "CANCELADO";

interface ProcessParams {
  clientId: string;
  serviceType: string;
  openDate: Date;
  deadline: Date;
  status: ProcessStatus;
  responsibleName: string;
  serviceValue: number;
  internalNote?: string;
  documents: Document[];
}

export const createProcess = async (dataParams: ProcessParams) => {
  const { data } = await httpClient.post("/process/create", dataParams);

  return { data };
};
