import { Card } from "@/components/ui/card";
import type { Task } from "@/view/pages/Tarefas/types";

export function HighPriorityTasks({ tasks }: { tasks: Task[] }) {
  return (
    <Card className="p-5 rounded-xl">
      <h3 className="font-semibold mb-4">Tarefas Prioridade Alta</h3>

      <div className="space-y-3">
        {tasks.map((task) => (
          <div
            key={task.id}
            className="flex justify-between text-sm border-b pb-2"
          >
            <span>{task.title}</span>
            <span className="text-muted-foreground">
              {task.responsabilityName}
            </span>
          </div>
        ))}
      </div>
    </Card>
  );
}
