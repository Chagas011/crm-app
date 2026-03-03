import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Calendar, Edit } from "lucide-react";
import { priorityConfig } from "../../constants";

import { useUpdateTask } from "@/hooks/task/useUpdateTask";
import { useState } from "react";
import type { ColumStatus, Task } from "../../types";
import { getAvatarColor } from "../../utils";
import { getNextColumn, getPreviousColumn } from "../../utils/moveTask";
import { DeleteTaskModal } from "../DeleteTaskModal";
import { ModalUpdateTask } from "../ModalUpdateTask";

interface Props {
  task: Task;
  column: ColumStatus;
}

export const TaskCard = ({ task, column }: Props) => {
  const { mutate } = useUpdateTask();
  const [selectedTask, setSelectedTask] = useState<Task | null>();
  function handleMove(task: Task, direction: "next" | "prev") {
    const newColumn =
      direction === "next"
        ? getNextColumn(task.colum)
        : getPreviousColumn(task.colum);

    if (!newColumn) return;

    mutate({
      data: {
        ...task,
        colum: newColumn,
      },
      taskId: task.id,
    });
  }
  return (
    <Card className="rounded-lg p-4">
      <div className="flex items-center justify-between mb-2">
        <span
          className="text-xs font-medium"
          style={{ color: priorityConfig[task.priority].color }}
        >
          {priorityConfig[task.priority].label}
        </span>

        <div>
          {selectedTask && (
            <ModalUpdateTask
              open={selectedTask.id === task.id}
              task={task}
              onClose={() => setSelectedTask(null)}
            />
          )}

          <Button
            onClick={() => setSelectedTask(task)}
            variant="ghost"
            size="icon"
            className="text-muted-foreground hover:text-primary hover:bg-gray-3"
          >
            <Edit />
          </Button>

          <DeleteTaskModal id={task.id} />
        </div>
      </div>

      <p className="text-sm font-medium text-accent-foreground mb-1">
        {task.title}
      </p>

      {task.description && (
        <p className="text-xs mb-3 text-muted-foreground line-clamp-2">
          {task.description}
        </p>
      )}

      <div className="flex items-center justify-between mt-3 pt-3 border-t">
        <div
          className="w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold text-white"
          style={{ background: getAvatarColor(task.responsabilityName) }}
        >
          {task.responsabilityName[0]}
        </div>

        {task.createdAt !== "—" && (
          <div className="flex items-center gap-1 text-xs text-muted-foreground">
            <Calendar className="w-3 h-3" />
            {new Date(task.createdAt).toLocaleDateString("pt-BR")}
          </div>
        )}
      </div>

      <div className="flex gap-1 mt-2">
        {column !== "TODO" && (
          <Button
            className="flex-1 text-xs py-1 rounded-2xl"
            onClick={() => handleMove(task, "prev")}
          >
            ← Voltar
          </Button>
        )}

        {column !== "DONE" && (
          <Button
            className="flex-1 text-xs py-1 rounded-2xl "
            onClick={() => handleMove(task, "next")}
          >
            Avançar →
          </Button>
        )}
      </div>
    </Card>
  );
};
