import { DatePickerField } from "@/components/DatePicker";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useCreateBudget } from "@/hooks/budget/useCreateBudget";
import { useGetClients } from "@/hooks/clients/useGetClients";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { createBudgetSchema, type CreateBudgetFormData } from "./schema";

interface IFormOrcamentoProps {
  onToggle: () => void;
}

export function FormOrcamento({ onToggle }: IFormOrcamentoProps) {
  const { data, isLoading } = useGetClients();
  const clients = data?.clients ?? [];
  const form = useForm<CreateBudgetFormData>({
    resolver: zodResolver(createBudgetSchema),
    defaultValues: {
      clientId: "",
      deadline: undefined,
      service: "",
      serviceValue: "",
      status: "EM_ANALISE",
    },
  });
  const { mutate, isPending } = useCreateBudget();
  const handleSubmit = form.handleSubmit((data) => {
    mutate({
      ...data,
      serviceValue: Number(data.serviceValue),
    });
    form.reset();
  });

  return (
    <Card className="rounded-xl p-6 space-y-6">
      <h4 className="text-primary font-medium text-lg">Novo Orçamento</h4>

      <Form {...form}>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {/* CLIENTE */}
            <FormField
              control={form.control}
              name="clientId"
              render={({ field }) => (
                <FormItem>
                  <Label className="text-accent-foreground">Cliente</Label>

                  <Select
                    onValueChange={field.onChange}
                    value={field.value}
                    disabled={isLoading}
                  >
                    <FormControl>
                      <SelectTrigger className="h-20 text-accent-foreground w-full">
                        <SelectValue placeholder="Selecione um cliente" />
                      </SelectTrigger>
                    </FormControl>

                    <SelectContent className="mt-10">
                      {clients.map((client) => (
                        <SelectItem key={client.id} value={client.id}>
                          {client.name} — {client.cpfCnpj}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>

                  <FormMessage />
                </FormItem>
              )}
            />

            {/* SERVIÇO */}
            <FormField
              control={form.control}
              name="service"
              render={({ field }) => (
                <FormItem>
                  <Label className="text-accent-foreground">Serviço</Label>
                  <FormControl>
                    <Input
                      {...field}
                      placeholder="Descrição do serviço"
                      className="h-11 text-primary placeholder:text-primary/35 bg-gray-2"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* VALOR */}
            <FormField
              control={form.control}
              name="serviceValue"
              render={({ field }) => (
                <FormItem>
                  <Label className="text-accent-foreground">Valor (R$)</Label>
                  <FormControl>
                    <Input
                      type="text"
                      {...field}
                      placeholder="0,00"
                      className="h-11 text-primary placeholder:text-primary/35 bg-gray-2"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* VALIDADE */}

            <DatePickerField name="deadline" label="Validade do orçamento" />

            {/* STATUS */}
            <FormField
              control={form.control}
              name="status"
              render={({ field }) => (
                <FormItem>
                  <Label className="text-accent-foreground">Status</Label>
                  <Select value={field.value} onValueChange={field.onChange}>
                    <FormControl>
                      <SelectTrigger className="h-11 text-accent-foreground w-full">
                        <SelectValue placeholder="Selecione o status" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent className="mt-18">
                      <SelectItem value="REJEITADO">Rejeitado</SelectItem>
                      <SelectItem value="EM_ANALISE">Em Análise</SelectItem>
                      <SelectItem value="APROVADO">Aprovado</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          {/* BOTÕES */}
          <div className="flex gap-3">
            <Button type="submit" disabled={isPending}>
              {isPending ? "Salvando orçamento" : "Salvar orçamento"}
            </Button>

            <Button
              type="button"
              onClick={onToggle}
              variant={"ghost"}
              className="bg-gray-2 text-primary"
            >
              Cancelar
            </Button>
          </div>
        </form>
      </Form>
    </Card>
  );
}
