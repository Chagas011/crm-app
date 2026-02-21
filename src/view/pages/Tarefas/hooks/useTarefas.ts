import { useMemo, useState } from "react";
import { initialTasks } from "../mock";
import type { Column, Task } from "../types";

export function useTarefas() {
  const [tasks, setTasks] = useState<Task[]>(initialTasks);
  const [search, setSearch] = useState("");
  const [showForm, setShowForm] = useState(false);
  const filtered = useMemo(() => {
    return tasks.filter((t) => {
      const matchSearch = t.title.toLowerCase().includes(search.toLowerCase());
      return matchSearch;
    });
  }, [search, tasks]);
  const moveTask = (id: number, dir: "left" | "right") => {
    const order: Column[] = ["todo", "progress", "done"];
    setTasks((prev) =>
      prev.map((task) => {
        if (task.id !== id) return task;

        const index = order.indexOf(task.column);
        const next =
          dir === "right"
            ? Math.min(index + 1, order.length - 1)
            : Math.max(index - 1, 0);

        return { ...task, column: order[next] };
      }),
    );
  };
  const toggleShowForm = () => {
    setShowForm((prev) => !prev);
  };
  return {
    tasks,
    setTasks,
    moveTask,
    setSearch,
    search,
    filtered,
    showForm,
    toggleShowForm,
    setShowForm,
  };
}
