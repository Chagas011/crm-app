import { createBudget } from "@/app/services/budgets/createBudget";

import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";

export const useCreateBudget = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: createBudget,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["budgets"],
      });
      toast.success("Orcamento cadastrado com sucesso");
    },

    onError: (error) => {
      toast.error("Erro ao cadastrar Orcamento");
      console.log(error);
    },
  });
};
