import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface ISelectResponsibleprops {
  responsibles: string[];
  responsible: string;
  setResponsible: (value: string) => void;
}

export function SelectResponsible({
  responsible,
  responsibles,
  setResponsible,
}: ISelectResponsibleprops) {
  return (
    <Select value={responsible} onValueChange={setResponsible}>
      <SelectTrigger className="w-[220px]">
        <SelectValue placeholder="Filtrar responsável" />
      </SelectTrigger>

      <SelectContent>
        <SelectItem value="all">Todos</SelectItem>

        {responsibles.map((name) => (
          <SelectItem key={name} value={name}>
            {name}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
}
