import { createProcess } from "@/app/services/process/createProcess";

import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";

export const useCreateProcess = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: createProcess,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["process"],
      });
      toast.success("Processo cadastrado com sucesso");
    },

    onError: () => {
      toast.error("Erro ao cadastrar Processo");
    },
  });
};
