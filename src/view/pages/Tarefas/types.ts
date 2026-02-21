export type Priority = "alta" | "média" | "baixa";
export type Column = "todo" | "progress" | "done";
export interface Task {
  id: number;
  title: string;
  description: string;
  priority: Priority;
  assignee: string;
  due: string;
  tag: string;
  column: Column;
}
