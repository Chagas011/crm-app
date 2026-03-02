import { createTask } from "@/app/services/task/createTask";

import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";

export const useCreateTask = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: createTask,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["tasks"],
      });
      toast.success("Tarefa criada com sucesso");
    },

    onError: (error) => {
      toast.error("Erro ao criar Tarefa");
      console.log(error);
    },
  });
};
