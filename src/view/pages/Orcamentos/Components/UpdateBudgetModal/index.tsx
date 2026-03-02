import { zodResolver } from "@hookform/resolvers/zod";

import { useForm } from "react-hook-form";

import { DatePickerField } from "@/components/DatePicker";
import { Button } from "@/components/ui/button";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
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
import { useUpdateBudget } from "@/hooks/budget/useUpdateBudget";
import { createBudgetSchema } from "../Form/schema";

export type BudgetStatus = "APROVADO" | "EM_ANALISE" | "REJEITADO";
type IUpdateBudget = {
  client: {
    name: string;
    cpfCnpj: string;
    id: string;
  };
  id: string;
  service: string;
  deadline: Date;
  status: BudgetStatus;
  serviceValue: number;
};
interface ModalUpdateBudgetProps {
  budget: IUpdateBudget;
  onClose: () => void;
  open: boolean;
}

export function ModalUpdateBudget({
  budget,
  onClose,
  open,
}: ModalUpdateBudgetProps) {
  const form = useForm({
    resolver: zodResolver(createBudgetSchema),
    defaultValues: {
      clientId: budget.client.id,
      deadline: new Date(budget.deadline),
      service: budget.service,
      serviceValue: String(budget.serviceValue),
      status: budget.status,
    },
  });

  const { mutateAsync, isPending } = useUpdateBudget();
  const handleSubmit = form.handleSubmit(async (data) => {
    await mutateAsync({
      data: {
        ...data,
        serviceValue: Number(data.serviceValue),
      },
      budgetId: budget.id,
    });
    form.reset();
    onClose();
  });

  return (
    <Dialog open={open} onOpenChange={(value) => !value && onClose()}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-accent-foreground">
            Editar Orcamento
          </DialogTitle>
        </DialogHeader>

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

                    <Select onValueChange={field.onChange} value={field.value}>
                      <FormControl>
                        <SelectTrigger className="h-20 text-accent-foreground w-full">
                          <SelectValue placeholder="Selecione um cliente" />
                        </SelectTrigger>
                      </FormControl>

                      <SelectContent className="mt-10">
                        <SelectItem value={budget.client.id}>
                          {budget.client.name} — {budget.client.cpfCnpj}
                        </SelectItem>
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

              {/* CONTATO */}

              {/* VALIDADE */}

              <DatePickerField name="deadline" label="Validade" />

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
                      <SelectContent className="mt-11">
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

            {/* OBSERVAÇÕES */}

            {/* BOTÕES */}
            <div className="flex gap-3">
              <Button type="submit" disabled={isPending}>
                {isPending ? "Atualizando orçamento" : "Atualizar orçamento"}
              </Button>

              <Button
                type="button"
                onClick={onClose}
                variant={"ghost"}
                className="bg-gray-2"
              >
                Cancelar
              </Button>
            </div>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
}
