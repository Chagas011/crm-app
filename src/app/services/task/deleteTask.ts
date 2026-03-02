import { httpClient } from "../httpClient";

interface TaskDeleteParams {
  taskId: string;
}

export const deleteTask = async (dataParams: TaskDeleteParams) => {
  const { data } = await httpClient.delete(`/task/${dataParams.taskId}`);

  return { data };
};
