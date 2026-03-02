import { Loader } from "@/components/Loader";
import { DeadlineAlert } from "./Components/DeadLineAlert";
import { FormProcess } from "./Components/Form";
import { Header } from "./Components/Header";
import { Pipeline } from "./Components/Pipeline";
import { ProcessList } from "./Components/ProcessList";
import { SearchBar } from "./Components/SearchBar";
import { useProcessos } from "./hooks/useProcessos";

export function Processos() {
  const state = useProcessos();
  if (state.isLoading) {
    return <Loader text="Carregando processos" />;
  }
  return (
    <div className="space-y-5">
      <Header total={state.filtered.length} onToggle={state.toggleShowForm} />
      {state.showForm && (
        <FormProcess onToggle={() => state.setShowForm(false)} />
      )}
      <Pipeline
        pipeline={state.pipeline}
        active={state.filterStatus}
        onChange={state.setFilterStatus}
      />

      <SearchBar value={state.search} onChange={state.setSearch} />

      <DeadlineAlert alertas={state.alerts} />
      <ProcessList
        processos={state.filtered}
        expandedId={state.expandedId}
        onToggle={state.setExpandedId}
      />
    </div>
  );
}
