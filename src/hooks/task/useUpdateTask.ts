import type { GetTaskResponse } from "@/app/services/task/getTask";
import { updateTask } from "@/app/services/task/updateBudget";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export function useUpdateTask() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: updateTask,

    onMutate: async ({ taskId, data }) => {
      await queryClient.cancelQueries({ queryKey: ["tasks"] });

      const previousTasks = queryClient.getQueryData<GetTaskResponse>([
        "tasks",
      ]);

      queryClient.setQueryData<GetTaskResponse>(["tasks"], (old) => {
        if (!old) return old;

        return {
          ...old,
          task: old.task.map((task) =>
            task.id === taskId ? { ...task, ...data } : task,
          ),
        };
      });

      return { previousTasks };
    },

    onError: (_err, _variables, context) => {
      if (context?.previousTasks) {
        queryClient.setQueryData(["tasks"], context.previousTasks);
      }
    },

    // 🔄 sincroniza com backend
    onSettled: () => {
      queryClient.invalidateQueries({ queryKey: ["tasks"] });
    },
  });
}
