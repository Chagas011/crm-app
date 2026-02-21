import { useMemo, useState } from "react";
import { processos } from "../mock";
import { statusConfig } from "../statusConfig";

export function useProcessos() {
  const [search, setSearch] = useState("");
  const [filterStatus, setFilterStatus] = useState("todos");
  const [expandedId, setExpandedId] = useState<string | null>(null);
  const [showForm, setShowForm] = useState(false);

  const toggleShowForm = () => {
    setShowForm((prev) => !prev);
  };
  const filtered = useMemo(() => {
    return processos.filter((p) => {
      const matchSearch =
        p.cliente.toLowerCase().includes(search.toLowerCase()) ||
        p.servico.toLowerCase().includes(search.toLowerCase()) ||
        p.id.toLowerCase().includes(search.toLowerCase()) ||
        p.veiculo.toLowerCase().includes(search.toLowerCase());

      const matchStatus = filterStatus === "todos" || p.status === filterStatus;

      return matchSearch && matchStatus;
    });
  }, [search, filterStatus]);

  const alertas = useMemo(
    () =>
      processos.filter(
        (p) =>
          p.status === "atrasado" ||
          (p.diasRestantes <= 3 && p.status !== "concluido"),
      ),
    [],
  );

  const pipeline = useMemo(
    () =>
      Object.entries(statusConfig).map(([key, cfg]) => ({
        key,
        ...cfg,
        count: processos.filter((p) => p.status === key).length,
      })),
    [],
  );

  return {
    search,
    setSearch,
    filterStatus,
    setFilterStatus,
    expandedId,
    setExpandedId,
    filtered,
    alertas,
    pipeline,
    toggleShowForm,
    showForm,
    setShowForm,
  };
}
