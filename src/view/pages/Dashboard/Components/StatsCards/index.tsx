import { Card } from "@/components/ui/card";

interface Props {
  title: string;
  value: number | string;
}

export function StatsCard({ title, value }: Props) {
  return (
    <Card className="p-5 rounded-xl">
      <p className="text-xs text-muted-foreground mb-1">{title}</p>
      <p className="text-2xl font-bold">{value}</p>
    </Card>
  );
}
