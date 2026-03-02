import { Search } from "lucide-react";

interface Props {
  value: string;
  onChange: (value: string) => void;
}

export const SearchBar = ({ value, onChange }: Props) => (
  <div className="relative w-full md:w-94">
    <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-white/40" />
    <input
      value={value}
      onChange={(e) => onChange(e.target.value)}
      placeholder="Buscar tarefa..."
      className="w-full pl-9 pr-3 py-2 text-sm rounded-lg text-white outline-none"
      style={{
        background: "hsl(222 47% 11%)",
        border: "1px solid hsl(215 20% 20%)",
      }}
    />
  </div>
);
