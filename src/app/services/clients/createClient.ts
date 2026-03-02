import { httpClient } from "../httpClient";

interface ClientParams {
  name: string;
  cpfCnpj: string;
  rgIE: string;
  tel: string;
  address: string;
  email: string;
}

export const createClient = async (dataParams: ClientParams) => {
  const { data } = await httpClient.post("/client/create", dataParams);

  return { data };
};
