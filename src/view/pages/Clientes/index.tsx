import { CardClientes } from "./Components/CardClientes";
import { Filters } from "./Components/Filters";
import { Form } from "./Components/Form";
import { Header } from "./Components/Header";
import { SearchClientes } from "./Components/Search";
import { useClientes } from "./hooks/useClientes";

export const Clientes = () => {
  const state = useClientes();

  return (
    <div className="space-y-5">
      {/* Header */}
      <Header clientes={state.filtered.length} onToggle={state.toggleShowNew} />

      {/* New client form */}
      {state.showNew && <Form onToggle={() => state.setShowNew(false)} />}

      {/* Filters */}
      <div className="flex gap-5">
        <SearchClientes onChange={state.setSearch} value={state.search} />
        <Filters active={state.filterStatus} onChange={state.setFilterStatus} />
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
