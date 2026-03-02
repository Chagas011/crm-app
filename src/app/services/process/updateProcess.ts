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

interface ProcessUpdateData {
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

interface ProcessUpdateParams {
  processId: string;
  data: ProcessUpdateData;
}

export const updateProcess = async (dataParams: ProcessUpdateParams) => {
  const { data } = await httpClient.put(
    `/process/${dataParams.processId}`,
    dataParams.data,
  );

  return { data };
};
