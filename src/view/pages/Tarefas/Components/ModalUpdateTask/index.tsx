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
import { useUpdateTask } from "@/hooks/task/useUpdateTask";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { createTaskSchema, type CreateTaskFormData } from "../Form/schema";

export type PriorityStatus = "ALTA" | "MEDIA" | "BAIXA";
export type ColumStatus = "TODO" | "PROGRESS" | "DONE";
interface TaskUpdate {
  id: string;
  priority: PriorityStatus;
  title: string;
  description: string;
  responsabilityName: string;
  colum: ColumStatus;
}

interface IModalUpdateTaskProps {
  onClose: () => void;
  open: boolean;
  task: TaskUpdate;
}

export function ModalUpdateTask({
  onClose,
  open,
  task,
}: IModalUpdateTaskProps) {
  const form = useForm<CreateTaskFormData>({
    resolver: zodResolver(createTaskSchema),
    defaultValues: {
      colum: task.colum,
      description: task.description,
      priority: task.priority,
      responsabilityName: task.responsabilityName,
      title: task.title,
    },
    mode: "onChange",
  });
  const { mutate, isPending } = useUpdateTask();
  const handleSubmit = form.handleSubmit((data) => {
    mutate({ data, taskId: task.id });
    form.reset();
  });
  return (
    <Dialog open={open} onOpenChange={(value) => !value && onClose()}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-primary">Editar Tarefa</DialogTitle>
        </DialogHeader>

        <Form {...form}>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {/* CLIENTE */}
              <FormField
                control={form.control}
                name="colum"
                render={({ field }) => (
                  <FormItem>
                    <Label className="text-accent-foreground">Status</Label>

                    <Select onValueChange={field.onChange} value={field.value}>
                      <FormControl>
                        <SelectTrigger className="h-20 text-accent-foreground w-full">
                          <SelectValue placeholder="Selecione um status" />
                        </SelectTrigger>
                      </FormControl>

                      <SelectContent className="mt-10">
                        <SelectItem value="TODO">A Fazer</SelectItem>
                        <SelectItem value="PROGRESS">Em Progresso</SelectItem>
                        <SelectItem value="DONE">Concluido</SelectItem>
                      </SelectContent>
                    </Select>

                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* SERVIÇO */}
              <FormField
                control={form.control}
                name="title"
                render={({ field }) => (
                  <FormItem>
                    <Label className="text-accent-foreground">Titulo</Label>
                    <FormControl>
                      <Input
                        {...field}
                        placeholder="Titulo da tarefa"
                        className="h-11 text-primary placeholder:text-primary/35 bg-gray-2"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="responsabilityName"
                render={({ field }) => (
                  <FormItem>
                    <Label className="text-accent-foreground">
                      Responsavel pela Tarefa
                    </Label>
                    <FormControl>
                      <Input
                        {...field}
                        placeholder="Responsavel"
                        className="h-11 text-primary placeholder:text-primary/35 bg-gray-2"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="description"
                render={({ field }) => (
                  <FormItem>
                    <Label className="text-accent-foreground">Descrição</Label>
                    <FormControl>
                      <Input
                        type="text"
                        {...field}
                        placeholder="informe a descrição da tarefa"
                        className="h-11 text-primary placeholder:text-primary/35 bg-gray-2"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="priority"
                render={({ field }) => (
                  <FormItem>
                    <Label className="text-accent-foreground">Prioridade</Label>
                    <Select value={field.value} onValueChange={field.onChange}>
                      <FormControl>
                        <SelectTrigger className="h-11 text-accent-foreground w-full">
                          <SelectValue placeholder="Selecione a prioridade" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent className="mt-18">
                        <SelectItem value="ALTA">Alta</SelectItem>
                        <SelectItem value="MEDIA">Media</SelectItem>
                        <SelectItem value="BAIXA">Baixa</SelectItem>
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
                {isPending ? "Atualizando Tarefa..." : "Atualizar Tarefa"}
              </Button>

              <Button
                type="button"
                onClick={onClose}
                variant={"ghost"}
                className="bg-gray-2 text-primary"
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
