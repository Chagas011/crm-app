import { httpClient } from "../httpClient";

export type PriorityStatus = "ALTA" | "MEDIA" | "BAIXA";
export type ColumStatus = "TODO" | "PROGRESS" | "DONE";
interface Task {
  id: string;
  priority: PriorityStatus;
  title: string;
  description: string;
  responsabilityName: string;
  colum: ColumStatus;
  createdAt: string;
}

export interface GetTaskResponse {
  task: Task[];
}

export const getTask = async () => {
  const { data } = await httpClient.get<GetTaskResponse>("/task");
  console.log(data);
  return data;
};
