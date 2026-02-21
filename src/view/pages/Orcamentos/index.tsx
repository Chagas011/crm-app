import { Card } from "@/components/ui/card";
import { FileText } from "lucide-react";
import { Filters } from "./Components/Filters";
import { FormOrcamento } from "./Components/Form";
import { Header } from "./Components/Header";
import { SearchOrcamento } from "./Components/Search";
import { Table } from "./Components/Table";
import { useOrcamentos } from "./hooks/useOrcamentos";

export const Orcamentos = () => {
  const state = useOrcamentos();

  return (
    <div className="space-y-5">
      {/* Header */}
      <Header
        total={state.total}
        totalOrcamentos={state.filtered.length}
        onToggle={state.toggleShowNew}
      />

      {/* New budget form */}
      {state.showNew && <FormOrcamento onToggle={state.toggleShowNew} />}

      {/* Filters */}

      <div className="flex gap-5">
        <SearchOrcamento onChange={state.setSearch} value={state.search} />
        <Filters active={state.filterStatus} onChange={state.setFilterStatus} />
      </div>

      {/* Table */}
      <Card className="rounded-xl overflow-hidden">
        <Table filtered={state.filtered} />
        {state.filtered.length === 0 && (
          <div
            className="py-12 text-center"
            style={{ color: "hsl(215 20% 40%)" }}
          >
            <FileText className="w-8 h-8 mx-auto mb-2 opacity-50" />
            <p className="text-sm">Nenhum orçamento encontrado</p>
          </div>
        )}
      </Card>
    </div>
  );
};
