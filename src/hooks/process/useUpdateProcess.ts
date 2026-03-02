import { updateProcess } from "@/app/services/process/updateProcess";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";

export const useUpdateProcess = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: updateProcess,

    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["process"],
      });

      toast.success("Processo atualizado com sucesso");
    },

    onError: () => {
      toast.error("Erro ao atualizar processo");
    },
  });
};
