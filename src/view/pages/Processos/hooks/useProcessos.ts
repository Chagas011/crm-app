import { useGetProcess } from "@/hooks/process/useGetProcess";
import { useState } from "react";

import { diffInDays } from "@/utils/diffInDays";
import { statusConfig } from "../statusConfig";

export function useProcessos() {
  const [search, setSearch] = useState("");
  const [filterStatus, setFilterStatus] = useState("todos");
  const [expandedId, setExpandedId] = useState<string | null>(null);
  const [showForm, setShowForm] = useState(false);

  const toggleShowForm = () => {
    setShowForm((prev) => !prev);
  };

  const { data, isLoading } = useGetProcess();
  const process = data?.process ?? [];
  const filtered = process.filter((p) => {
    const matchSearch =
      p.client.name.toLowerCase().includes(search.toLowerCase()) ||
      p.serviceType.toLowerCase().includes(search.toLowerCase());
    const matchStatus = filterStatus === "todos" || p.status === filterStatus;
    return matchSearch && matchStatus;
  });

  const alerts = filtered.filter((alert) => {
    const daysLeft = diffInDays(
      new Date(alert.openDate),
      new Date(alert.deadline),
    );
    return daysLeft >= 0 && daysLeft <= 30;
  });

  const pipeline = Object.entries(statusConfig).map(([key, cfg]) => ({
    key,
    ...cfg,
    count: process.filter((p) => p.status === key).length,
  }));

  return {
    search,
    setSearch,
    filterStatus,
    setFilterStatus,
    expandedId,
    setExpandedId,
    filtered,
    alerts,
    pipeline,
    toggleShowForm,
    showForm,
    setShowForm,
    isLoading,
  };
}
