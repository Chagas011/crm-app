import { httpClient } from "../httpClient";

interface ProcessDeleteParams {
  processId: string;
}

export const deleteProcess = async (dataParams: ProcessDeleteParams) => {
  const { data } = await httpClient.delete(`/process/${dataParams.processId}`);

  return { data };
};
