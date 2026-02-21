import { Card } from "@/components/ui/card";
import { AlertTriangle, ArrowUpRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Deadline } from "./Components/Deadline";
import { deadlineAlerts } from "./Components/Deadline/mocks";
import { Kpis } from "./Components/Kpis";
import { kpis } from "./Components/Kpis/mock";
import { Pipeline } from "./Components/Pipeline";
import { pipelineData } from "./Components/Pipeline/mock";
import { RecentProcess } from "./Components/RecentProcess";
import { recentProcesses } from "./Components/RecentProcess/mock";
import { Revenue } from "./Components/Revenue";
import { revenueData } from "./Components/Revenue/mock";
import { UrgentTasks } from "./Components/UrgentTasks";
import { urgentTasks } from "./Components/UrgentTasks/mock";

const cardStyle = {
  background: "hsl(222 40% 14%)",
  border: "1px solid hsl(215 20% 20%)",
};

export const Dashboard = () => {
  const navigate = useNavigate();

  return (
    <div className="space-y-6">
      {/* KPIs */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {kpis.map((kpi) => (
          <Kpis kpi={kpi} />
        ))}
      </div>

      {/* Deadline alerts banner */}
      {deadlineAlerts.length > 0 && (
        <div
          className="rounded-xl p-4"
          style={{
            background: "hsl(347 77% 50% / 0.08)",
            border: "1px solid hsl(347 77% 50% / 0.2)",
          }}
        >
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center gap-2">
              <AlertTriangle
                className="w-4 h-4"
                style={{ color: "hsl(347 77% 50%)" }}
              />
              <span
                className="text-sm font-medium"
                style={{ color: "hsl(347 77% 65%)" }}
              >
                Alertas de Prazo
              </span>
            </div>
            <button
              onClick={() => navigate("/processos")}
              className="text-xs flex items-center gap-1 hover:opacity-80"
              style={{ color: "hsl(347 77% 65%)" }}
            >
              Ver processos <ArrowUpRight className="w-3 h-3" />
            </button>
          </div>
          <div className="space-y-2">
            {deadlineAlerts.map((processo) => (
              <Deadline processos={processo} />
            ))}
          </div>
        </div>
      )}

      {/* Charts + Pipeline */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        {/* Revenue */}
        <Revenue data={revenueData} />
        {/* Pipeline */}
        <Card className="rounded-xl px-5 py-4">
          <div className="flex items-center justify-between mb-1">
            <h3 className="text-white font-semibold">Pipeline de Processos</h3>
          </div>
          <p className="text-xs mb-5" style={{ color: "hsl(215 20% 50%)" }}>
            Distribuição atual
          </p>
          {pipelineData.map((pipeline) => (
            <Pipeline pipeline={pipeline} />
          ))}
        </Card>
      </div>

      {/* Recent processes + Urgent tasks */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        <div className="rounded-xl p-5" style={cardStyle}>
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-white font-semibold">Processos Recentes</h3>
            <button
              onClick={() => navigate("/processos")}
              className="text-xs flex items-center gap-1 hover:opacity-80 transition-opacity"
              style={{ color: "hsl(263 70% 68%)" }}
            >
              Ver todos <ArrowUpRight className="w-3 h-3" />
            </button>
          </div>
          <div className="space-y-3">
            {recentProcesses.map((recentProcess) => (
              <RecentProcess recentProcess={recentProcess} />
            ))}
          </div>
        </div>

        <div className="rounded-xl p-5" style={cardStyle}>
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-white font-semibold">Pendências Urgentes</h3>
            <button
              onClick={() => navigate("/tarefas")}
              className="text-xs flex items-center gap-1 hover:opacity-80 transition-opacity"
              style={{ color: "hsl(263 70% 68%)" }}
            >
              Ver kanban <ArrowUpRight className="w-3 h-3" />
            </button>
          </div>
          <div className="space-y-3">
            {urgentTasks.map((t) => (
              <UrgentTasks tasks={t} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
