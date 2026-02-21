import { Car } from "lucide-react";

export function EmptyState() {
  return (
    <div className="py-16 text-center text-muted-foreground">
      <Car className="w-10 h-10 mx-auto mb-3 opacity-40" />
      <p className="text-sm">Nenhum processo encontrado</p>
    </div>
  );
}
