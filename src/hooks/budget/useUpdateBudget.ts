import { updateBudget } from "@/app/services/budgets/updateBudget";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";

export const useUpdateBudget = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: updateBudget,

    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["budgets"],
      });

      toast.success("Orcamento atualizado com sucesso");
    },

    onError: () => {
      toast.error("Erro ao atualizar orcamento");
    },
  });
};
