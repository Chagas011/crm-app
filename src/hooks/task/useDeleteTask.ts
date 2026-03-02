import { deleteTask } from "@/app/services/task/deleteTask";

import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";

export const useDeleteTask = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: deleteTask,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["tasks"],
      });
      toast.success("Tarefa deletada com sucesso");
    },

    onError: () => {
      toast.error("Erro ao deletar tarefa");
    },
  });
};
