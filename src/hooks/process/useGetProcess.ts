import { getProcess } from "@/app/services/process/getProcess";
import { useQuery } from "@tanstack/react-query";
import { toast } from "sonner";

export const useGetProcess = () => {
  return useQuery({
    queryKey: ["process"],
    queryFn: async () => {
      try {
        const data = await getProcess();
        return data;
      } catch (error) {
        toast.error("Erro ao buscar process");
        throw error;
      }
    },
    retry: false,
    refetchOnWindowFocus: false,
  });
};
