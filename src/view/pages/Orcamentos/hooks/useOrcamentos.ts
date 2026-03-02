import { useState } from "react";

import { useGetBudgets } from "@/hooks/budget/useGetBudget";

export function useOrcamentos() {
  const [search, setSearch] = useState("");
  const [filterStatus, setFilterStatus] = useState("todos");
  const [showNew, setShowNew] = useState(false);

  const { data, isLoading } = useGetBudgets();
  const budgets = data?.budget ?? [];
  const filtered = budgets.filter((b) => {
    const matchSearch =
      b.client.name.toLowerCase().includes(search.toLowerCase()) ||
      b.service.toLowerCase().includes(search.toLowerCase());
    const matchStatus = filterStatus === "todos" || b.status === filterStatus;
    return matchSearch && matchStatus;
  });

  const total = filtered.reduce((acc, o) => acc + o.serviceValue, 0);

  const toggleShowNew = () => {
    setShowNew((prev) => !prev);
  };
  return {
    search,
    setSearch,
    filterStatus,
    setFilterStatus,
    showNew,
    toggleShowNew,
    total,
    filtered,
    isLoading,
  };
}
