import { httpClient } from "../httpClient";

interface ClientUpdateParams {
  clientId: string;
  data: ClientUpdateData;
}

interface ClientUpdateData {
  name: string;
  cpfCnpj: string;
  rgIE: string;
  tel: string;
  address: string;
  email: string;
}
export const updateClient = async (dataParams: ClientUpdateParams) => {
  const { data } = await httpClient.put(
    `/client/${dataParams.clientId}`,
    dataParams.data,
  );

  return { data };
};
