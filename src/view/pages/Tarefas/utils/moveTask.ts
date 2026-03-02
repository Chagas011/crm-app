import type { ColumStatus } from "../types";

export function getNextColumn(colum: ColumStatus): ColumStatus | null {
  switch (colum) {
    case "TODO":
      return "PROGRESS";
    case "PROGRESS":
      return "DONE";
    case "DONE":
      return null;
    default:
      return null;
  }
}
export function getPreviousColumn(colum: ColumStatus): ColumStatus | null {
  switch (colum) {
    case "DONE":
      return "PROGRESS";
    case "PROGRESS":
      return "TODO";
    case "TODO":
      return null;
    default:
      return null;
  }
}
