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
      className="w-full pl-9 pr-3 py-2 text-sm rounded-lg bg-white/5 text-white outline-none"
    />
  </div>
);
