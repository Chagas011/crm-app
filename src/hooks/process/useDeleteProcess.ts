import { deleteProcess } from "@/app/services/process/deleteProcess";

import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";

export const useDeleteProcess = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: deleteProcess,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["process"],
      });
      toast.success("Processo deletado com sucesso");
    },

    onError: () => {
      toast.error("Erro ao deletar processo");
    },
  });
};
