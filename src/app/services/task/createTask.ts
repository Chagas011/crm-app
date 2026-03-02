import { httpClient } from "../httpClient";

export type PriorityStatus = "ALTA" | "MEDIA" | "BAIXA";
export type ColumStatus = "TODO" | "PROGRESS" | "DONE";
interface TaskParams {
  priority: PriorityStatus;
  title: string;
  description: string;
  responsabilityName: string;
  colum: ColumStatus;
}

export const createTask = async (dataParams: TaskParams) => {
  const { data } = await httpClient.post("/task/create", dataParams);

  return { data };
};
