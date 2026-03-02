import { deleteClient } from "@/app/services/clients/deleteClient";

import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";

export const useDeleteClient = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: deleteClient,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["clients"],
      });
      toast.success("Cliente deletado com sucesso");
    },

    onError: () => {
      toast.error("Erro ao deletar cliente");
    },
  });
};
