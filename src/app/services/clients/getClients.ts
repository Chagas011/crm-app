import { httpClient } from "../httpClient";
export interface Client {
  id: string;
  name: string;
  cpfCnpj: string;
  rgIE: string;
  email: string;
  tel: string;
  address: string;
  createdAt: string;
}
interface GetClientsResponse {
  clients: Client[];
}

export const getClients = async () => {
  const { data } = await httpClient.get<GetClientsResponse>("/client");

  return data;
};
