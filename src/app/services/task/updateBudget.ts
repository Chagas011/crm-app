import { httpClient } from "../httpClient";

export type PriorityStatus = "ALTA" | "MEDIA" | "BAIXA";
export type ColumStatus = "TODO" | "PROGRESS" | "DONE";
interface TaskData {
  priority: PriorityStatus;
  title: string;
  description: string;
  responsabilityName: string;
  colum: ColumStatus;
}
interface TaskUpdateParams {
  taskId: string;
  data: TaskData;
}

export const updateTask = async (dataParams: TaskUpdateParams) => {
  const { data } = await httpClient.put(
    `/task/${dataParams.taskId}`,
    dataParams.data,
  );

  return { data };
};
