import { createClient } from "@/app/services/clients/createClient";

import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";

export const useCreateClient = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: createClient,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["clients"],
      });
      toast.success("Cliente cadastrado com sucesso");
    },

    onError: () => {
      toast.error("Erro ao realizar cadastro");
    },
  });
};
