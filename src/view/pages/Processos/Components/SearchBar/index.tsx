import { Search } from "lucide-react";

interface Props {
  value: string;
  onChange: (value: string) => void;
}

export function SearchBar({ value, onChange }: Props) {
  return (
    <div className="flex flex-col sm:flex-row gap-3">
      <div className="relative flex-1">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
        <input
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder="Buscar por cliente, serviço, veículo ou código..."
          className="w-full pl-9 pr-3 py-2.5 rounded-lg text-sm text-white outline-none bg-background border border-border"
        />
      </div>
    </div>
  );
}
