export type PriorityStatus = "ALTA" | "MEDIA" | "BAIXA";
export type ColumStatus = "TODO" | "PROGRESS" | "DONE";
export interface Task {
  id: string;
  priority: PriorityStatus;
  title: string;
  description: string;
  responsabilityName: string;
  colum: ColumStatus;
  createdAt: string;
}
