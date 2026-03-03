import { useGetTask } from "@/hooks/task/useGetTask";
import { useState } from "react";

export function useTarefas() {
  const [search, setSearch] = useState("");
  const [showForm, setShowForm] = useState(false);
  const [responsible, setResponsible] = useState<string>("all")
  const { data, isLoading } = useGetTask();
  const tasks = data?.task ?? [];
 
  const responsibles = Array.from(
  new Set(tasks.map((task) => task.responsabilityName))
);

const filtered = tasks
  .filter((t) => {
    const matchSearch = t.title
      .toLowerCase()
      .includes(search.toLowerCase());

    const matchResponsible =
      responsible === "all" || t.responsabilityName === responsible;

    return matchSearch && matchResponsible;
  })
  .sort((a, b) => {
    return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime();
  });

  const toggleShowForm = () => {
    setShowForm((prev) => !prev);
  };
  return {
    setSearch,
    search,
    filtered,
    showForm,
    toggleShowForm,
    setShowForm,
    isLoading,
    responsibles,
    setResponsible,
    responsible
  };
}
