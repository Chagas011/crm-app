import { Form } from "./Components/Form";
import { Header } from "./Components/Header";
import { KanbanColumn } from "./Components/KanbanColumn";
import { SearchBar } from "./Components/SearchBar";
import { columns } from "./constants";
import { useTarefas } from "./hooks/useTarefas";

export const Tarefas = () => {
  const state = useTarefas();

  return (
    <div className="space-y-5 ">
      <Header tarefas={state.filtered.length} onToggle={state.toggleShowForm} />

      <SearchBar onChange={state.setSearch} value={state.search} />

      {state.showForm && <Form onToggle={() => state.setShowForm(false)} />}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 ">
        {columns.map((col) => (
          <KanbanColumn
            key={col.id}
            column={col}
            tasks={state.filtered.filter((t) => t.column === col.id)}
            onMoveTask={state.moveTask}
          />
        ))}
      </div>
    </div>
  );
};
