import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Calendar } from "lucide-react";
import { priorityConfig, tagColors } from "../../constants";
import type { Column, Task } from "../../types";
import { getAvatarColor } from "../../utils";

interface Props {
  task: Task;
  column: Column;
  onMove: (id: number, dir: "left" | "right") => void;
}

export const TaskCard = ({ task, column, onMove }: Props) => {
  return (
    <Card className="rounded-lg p-4">
      <div className="flex items-center justify-between mb-2">
        <span
          className="text-xs px-2 py-0.5 rounded-full font-medium"
          style={{
            background: (tagColors[task.tag] ?? "#999") + "20",
            color: tagColors[task.tag] ?? "#999",
          }}
        >
          {task.tag}
        </span>

        <span
          className="text-xs font-medium"
          style={{ color: priorityConfig[task.priority].color }}
        >
          {priorityConfig[task.priority].label}
        </span>
      </div>

      <p className="text-sm font-medium text-white mb-1">{task.title}</p>

      {task.description && (
        <p className="text-xs mb-3 text-muted-foreground line-clamp-2">
          {task.description}
        </p>
      )}

      <div className="flex items-center justify-between mt-3 pt-3 border-t">
        <div
          className="w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold text-white"
          style={{ background: getAvatarColor(task.assignee) }}
        >
          {task.assignee}
        </div>

        {task.due !== "—" && (
          <div className="flex items-center gap-1 text-xs text-muted-foreground">
            <Calendar className="w-3 h-3" />
            {task.due}
          </div>
        )}
      </div>

      <div className="flex gap-1 mt-2">
        {column !== "todo" && (
          <Button
            onClick={() => onMove(task.id, "left")}
            className="flex-1 text-xs py-1 rounded hover:bg-white/5"
          >
            ← Voltar
          </Button>
        )}

        {column !== "done" && (
          <Button
            onClick={() => onMove(task.id, "right")}
            className="flex-1 text-xs py-1 rounded hover:bg-white/5"
          >
            Avançar →
          </Button>
        )}
      </div>
    </Card>
  );
};
