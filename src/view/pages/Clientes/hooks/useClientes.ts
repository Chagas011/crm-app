import { useMemo, useState } from "react";
import { clientes } from "../mock";

export function useClientes() {
  const [search, setSearch] = useState("");
  const [filterStatus, setFilterStatus] = useState("todos");
  const [showNew, setShowNew] = useState(false);

  const filtered = useMemo(() => {
    return clientes.filter((c) => {
      const matchSearch =
        c.name.toLowerCase().includes(search.toLowerCase()) ||
        c.contact.toLowerCase().includes(search.toLowerCase());
      const matchStatus = filterStatus === "todos" || c.status === filterStatus;
      return matchSearch && matchStatus;
    });
  }, [search, filterStatus]);
  const toggleShowNew = () => {
    setShowNew((prev) => !prev);
  };
  return {
    search,
    setSearch,
    filterStatus,
    setFilterStatus,
    showNew,
    setShowNew,
    filtered,
    toggleShowNew,
  };
}
