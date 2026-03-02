import { getTask } from "@/app/services/task/getTask";

import { useQuery } from "@tanstack/react-query";
import { toast } from "sonner";

export const useGetTask = () => {
  return useQuery({
    queryKey: ["tasks"],
    queryFn: async () => {
      try {
        const data = await getTask();
        return data;
      } catch (error) {
        toast.error("Erro ao buscar tarefas");
        throw error;
      }
    },
    retry: false,
    refetchOnWindowFocus: false,
  });
};
