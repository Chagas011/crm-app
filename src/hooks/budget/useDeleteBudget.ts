import { deleteBudget } from "@/app/services/budgets/deleteBudget";

import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";

export const useDeleteBudget = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: deleteBudget,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["budgets"],
      });
      toast.success("Orcamento deletado com sucesso");
    },

    onError: () => {
      toast.error("Erro ao deletar orcamento");
    },
  });
};
