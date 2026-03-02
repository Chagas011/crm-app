import { useGetClients } from "@/hooks/clients/useGetClients";
import { useState } from "react";

export function useClientes() {
  const [search, setSearch] = useState("");
  const [filterStatus, setFilterStatus] = useState("todos");
  const [showNew, setShowNew] = useState(false);
  const toggleShowNew = () => {
    setShowNew((prev) => !prev);
  };
  const { data, isLoading } = useGetClients();
  const clients = data?.clients ?? [];
  const filtered = clients.filter((clients) => {
    const matchSearch =
      clients.name.toLowerCase().includes(search.toLowerCase()) ||
      clients.tel.toLowerCase().includes(search.toLowerCase());

    return matchSearch;
  });

  return {
    search,
    setSearch,
    filterStatus,
    setFilterStatus,
    showNew,
    filtered,
    setShowNew,
    toggleShowNew,
    isLoading,
  };
}
