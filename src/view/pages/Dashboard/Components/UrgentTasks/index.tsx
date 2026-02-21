import { AlertCircle } from "lucide-react";

interface IUrgentTasks {
  tasks: {
    title: string;
    priority: "alta" | "média" | "baixa";
  };
}

export function UrgentTasks({ tasks }: IUrgentTasks) {
  const priorityColor: Record<string, string> = {
    alta: "hsl(347 77% 50%)",
    média: "hsl(38 92% 50%)",
    baixa: "hsl(160 84% 39%)",
  };
  return (
    <div className="flex items-center gap-3 py-2 border-b border-white/5 last:border-0">
      <AlertCircle
        className="w-4 h-4 flex-shrink-0"
        style={{ color: priorityColor[tasks.priority] }}
      />
      <p className="flex-1 text-sm text-white">{tasks.title}</p>
      <span
        className="text-xs capitalize px-2 py-0.5 rounded-full"
        style={{
          background: priorityColor[tasks.priority] + "20",
          color: priorityColor[tasks.priority],
        }}
      >
        {tasks.priority}
      </span>
    </div>
  );
}
