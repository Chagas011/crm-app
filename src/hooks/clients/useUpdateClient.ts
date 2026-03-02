import { updateClient } from "@/app/services/clients/updateClient";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";

export const useUpdateClient = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: updateClient,

    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["clients"],
      });

      toast.success("Cliente atualizado com sucesso");
    },

    onError: () => {
      toast.error("Erro ao atualizar cliente");
    },
  });
};
