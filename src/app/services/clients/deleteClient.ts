import { httpClient } from "../httpClient";

interface ClientDeleteParams {
  clientId: string;
}

export const deleteClient = async (dataParams: ClientDeleteParams) => {
  const { data } = await httpClient.delete(`/client/${dataParams.clientId}`);

  return { data };
};
