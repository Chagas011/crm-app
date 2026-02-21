import type { Column, Task } from "../../types";
import { TaskCard } from "../TaskCard";

interface IKanbanColumnProps {
  column: {
    id: Column;
    label: string;
    color: string;
  };
  tasks: Task[];
  onMoveTask: (id: number, dir: "left" | "right") => void;
}

export const KanbanColumn = ({
  column,
  tasks,
  onMoveTask,
}: IKanbanColumnProps) => {
  return (
    <div className="rounded-xl p-4 flex flex-col gap-3">
      <header className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span
            className="w-2 h-2 rounded-full"
            style={{ background: column.color }}
          />
          <span className="text-sm font-medium text-white">{column.label}</span>
          <span
            className={`text-xs px-2 py-0.5 rounded-full bg-black/2 text-white`}
          >
            {tasks.length}
          </span>
        </div>
      </header>

      {tasks.map((task) => (
        <TaskCard
          key={task.id}
          task={task}
          column={column.id}
          onMove={onMoveTask}
        />
      ))}

      {tasks.length === 0 && (
        <p className="text-xs text-center text-muted-foreground">
          Nenhuma tarefa
        </p>
      )}
    </div>
  );
};
