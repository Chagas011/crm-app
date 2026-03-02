export function diffInDays(from: Date, to: Date): number {
  const MS_PER_DAY = 1000 * 60 * 60 * 24;

  const utcFrom = Date.UTC(from.getFullYear(), from.getMonth(), from.getDate());

  const utcTo = Date.UTC(to.getFullYear(), to.getMonth(), to.getDate());

  return Math.ceil((utcTo - utcFrom) / MS_PER_DAY);
}
