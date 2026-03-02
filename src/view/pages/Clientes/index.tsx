import { Loader } from "@/components/Loader";
import { CardClientes } from "./Components/CardClientes";
import { FormClient } from "./Components/FormClient";

import { Header } from "./Components/Header";
import { SearchClientes } from "./Components/Search";
import { useClientes } from "./hooks/useClientes";

export const Clientes = () => {
  const state = useClientes();
  if (state.isLoading) {
    return <Loader text="Carregando clientes" />;
  }
  return (
    <div className="space-y-5">
      {/* Header */}
      <Header
        clientes={state.filtered!.length}
        onToggle={state.toggleShowNew}
      />

      {/* New client form */}
      {state.showNew && <FormClient onToggle={() => state.setShowNew(false)} />}

      {/* Filters */}
      <div className="flex gap-5">
        <SearchClientes onChange={state.setSearch} value={state.search} />
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
        {state.filtered.map((c) => (
          <CardClientes clientes={c} />
        ))}
      </div>
    </div>
  );
};
