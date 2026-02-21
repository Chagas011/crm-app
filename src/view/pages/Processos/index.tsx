import { DeadlineAlert } from "./Components/DeadLineAlert";
import { FormProcesso } from "./Components/Form";
import { Header } from "./Components/Header";
import { Pipeline } from "./Components/Pipeline";
import { ProcessList } from "./Components/ProcessList";
import { SearchBar } from "./Components/SearchBar";
import { useProcessos } from "./hooks/useProcessos";

export function Processos() {
  const state = useProcessos();

  return (
    <div className="space-y-5">
      <Header
        total={state.filtered.length}
        alertas={state.alertas.length}
        onToggle={state.toggleShowForm}
      />
      {state.showForm && (
        <FormProcesso onToggle={() => state.setShowForm(false)} />
      )}
      <Pipeline
        pipeline={state.pipeline}
        active={state.filterStatus}
        onChange={state.setFilterStatus}
      />

      <DeadlineAlert alertas={state.alertas} onSelect={state.setExpandedId} />

      <SearchBar value={state.search} onChange={state.setSearch} />

      <ProcessList
        processos={state.filtered}
        expandedId={state.expandedId}
        onToggle={state.setExpandedId}
      />
    </div>
  );
}
