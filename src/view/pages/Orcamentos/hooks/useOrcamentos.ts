import { useMemo, useState } from "react";
import { orcamentos } from "../mock";

export function useOrcamentos() {
  const [search, setSearch] = useState("");
  const [filterStatus, setFilterStatus] = useState("todos");
  const [showNew, setShowNew] = useState(false);

  const filtered = useMemo(() => {
    return orcamentos.filter((o) => {
      const matchSearch =
        o.client.toLowerCase().includes(search.toLowerCase()) ||
        o.service.toLowerCase().includes(search.toLowerCase()) ||
        o.id.toLowerCase().includes(search.toLowerCase());
      const matchStatus = filterStatus === "todos" || o.status === filterStatus;
      return matchSearch && matchStatus;
    });
  }, [filterStatus, search]);

  const total = filtered.reduce((acc, o) => acc + o.value, 0);

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
  };
}
