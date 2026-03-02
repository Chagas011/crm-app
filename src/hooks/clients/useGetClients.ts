import { getClients } from "@/app/services/clients/getClients";
import { useQuery } from "@tanstack/react-query";
import { toast } from "sonner";

export const useGetClients = () => {
  return useQuery({
    queryKey: ["clients"],
    queryFn: async () => {
      try {
        const data = await getClients();
        return data;
      } catch (error) {
        toast.error("Erro ao buscar clientes");
        throw error;
      }
    },
    retry: false,
    refetchOnWindowFocus: false,
  });
};
