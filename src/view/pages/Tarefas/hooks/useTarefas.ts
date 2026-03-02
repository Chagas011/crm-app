import { useGetTask } from "@/hooks/task/useGetTask";
import { useState } from "react";

export function useTarefas() {
  const [search, setSearch] = useState("");
  const [showForm, setShowForm] = useState(false);

  const { data, isLoading } = useGetTask();
  const tasks = data?.task ?? [];
  const filtered = tasks.filter((t) => {
    const matchSearch = t.title.toLowerCase().includes(search.toLowerCase());
    return matchSearch;
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
  };
}
