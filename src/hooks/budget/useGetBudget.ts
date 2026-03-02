import { getBudget } from "@/app/services/budgets/getBudgets";

import { useQuery } from "@tanstack/react-query";
import { toast } from "sonner";

export const useGetBudgets = () => {
  return useQuery({
    queryKey: ["budgets"],
    queryFn: async () => {
      try {
        const data = await getBudget();
        return data;
      } catch (error) {
        toast.error("Erro ao buscar orcamentos");
        throw error;
      }
    },
    retry: false,
    refetchOnWindowFocus: false,
  });
};
