import { zodResolver } from "@hookform/resolvers/zod";
import { PlusCircle, Trash2 } from "lucide-react";
import { useFieldArray, useForm } from "react-hook-form";

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
import { useGetClients } from "@/hooks/clients/useGetClients";
import { useUpdateProcess } from "@/hooks/process/useUpdateProcess";
import { processSchema } from "../Form/schema";

interface Document {
  name: string;
  value?: string;
}
export type ProcessStatus =
  | "NOVO"
  | "EM_ANDAMENTO"
  | "AGUARDANDO_CLIENTE"
  | "PROTOCOLADO"
  | "FINALIZADO"
  | "CANCELADO";

type IUpdateProcess = {
  id: string;
  client: {
    id: string;
    name: string;
    cpfCnpj: string;
    tel: string;
    address: string;
    email: string;
  };
  serviceType: string;
  openDate: Date;
  deadline: Date;
  status: ProcessStatus;
  responsibleName: string;
  serviceValue: number;
  internalNote?: string;
  documents: Document[];
};
interface ModalUpdateProcessProps {
  process: IUpdateProcess;
  onClose: () => void;
  open: boolean;
}

export function ModalUpdateProcess({
  process,
  onClose,
  open,
}: ModalUpdateProcessProps) {
  const { data, isLoading } = useGetClients();
  const clients = data?.clients ?? [];

  const form = useForm({
    resolver: zodResolver(processSchema),
    defaultValues: {
      clientId: process.client.id,
      deadline: new Date(process.deadline),
      documents: process.documents,
      internalNote: process.internalNote,
      openDate: new Date(process.openDate),
      responsibleName: process.responsibleName,
      serviceType: process.serviceType,
      serviceValue: String(process.serviceValue),
      status: process.status,
    },
  });
  const { fields, append, remove } = useFieldArray({
    control: form.control,
    name: "documents",
  });
  const { mutateAsync, isPending } = useUpdateProcess();
  const handleSubmit = form.handleSubmit(async (data) => {
    await mutateAsync({
      data: {
        ...data,
        serviceValue: Number(data.serviceValue),
      },
      processId: process.id,
    });
    form.reset();
    onClose();
  });

  return (
    <Dialog open={open} onOpenChange={(value) => !value && onClose()}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-primary">Editar Processo</DialogTitle>
        </DialogHeader>

        <Form {...form}>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
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

              <FormField
                control={form.control}
                name="responsibleName"
                render={({ field }) => (
                  <FormItem>
                    <Label className="text-sm font-medium text-accent-foreground">
                      Responsavel
                    </Label>
                    <FormControl>
                      <Input
                        {...field}
                        placeholder="Ex: Responsavel pelo processo"
                        className="h-11 text-primary placeholder:text-primary/35 bg-gray-2"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="serviceType"
                render={({ field }) => (
                  <FormItem>
                    <Label className="text-sm font-medium text-accent-foreground">
                      Serviço
                    </Label>
                    <FormControl>
                      <Input
                        {...field}
                        placeholder="Ex: Abertura de empresa"
                        className="h-11 text-primary placeholder:text-primary/35 bg-gray-2"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="serviceValue"
                render={({ field }) => (
                  <FormItem>
                    <Label className="text-sm font-medium text-accent-foreground">
                      Valor do serviço
                    </Label>
                    <FormControl>
                      <Input
                        {...field}
                        placeholder="Ex: 500,00"
                        className="h-11 text-primary placeholder:text-primary/35 bg-gray-2"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              {/* STATUS */}

              {/* DATA DE ABERTURA */}
              <DatePickerField name="openDate" label="Data de abertura" />
              <DatePickerField name="deadline" label="Data de vencimento" />
              {/* DEADLINE */}

              <FormField
                control={form.control}
                name="status"
                render={({ field }) => (
                  <FormItem>
                    <Label className="text-accent-foreground">Status</Label>

                    <Select value={field.value} onValueChange={field.onChange}>
                      <FormControl>
                        <SelectTrigger className="h-11 w-full text-primary placeholder:text-primary/35 bg-gray-2">
                          <SelectValue placeholder="Selecione o status" />
                        </SelectTrigger>
                      </FormControl>

                      <SelectContent className="mt-10">
                        <SelectItem value="NOVO">Novo</SelectItem>
                        <SelectItem value="EM_ANDAMENTO">
                          Em andamento
                        </SelectItem>
                        <SelectItem value="AGUARDANDO_CLIENTE">
                          Aguardando cliente
                        </SelectItem>
                        <SelectItem value="PROTOCOLADO">Protocolado</SelectItem>
                        <SelectItem value="FINALIZADO">Finalizado</SelectItem>
                        <SelectItem value="CANCELADO">Cancelado</SelectItem>
                      </SelectContent>
                    </Select>

                    <FormMessage />
                  </FormItem>
                )}
              />

              <div className="space-y-4 col-span-2 w-full">
                <h5 className="text-accent-foreground font-medium">
                  Documentos
                </h5>

                {fields.map((field, index) => (
                  <div
                    key={field.id}
                    className="flex w-full gap-5 items-center justify-center"
                  >
                    {/* NOME DO DOCUMENTO */}
                    <FormField
                      control={form.control}
                      name={`documents.${index}.name`}
                      render={({ field }) => (
                        <FormItem className="flex-1">
                          <Label className="text-accent-foreground">
                            Documento
                          </Label>
                          <FormControl>
                            <Input
                              {...field}
                              placeholder="Ex: RG, CPF, Contrato"
                              className="h-11 text-primary placeholder:text-primary/35 bg-gray-2"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    {/* OBSERVAÇÃO */}
                    <FormField
                      control={form.control}
                      name={`documents.${index}.value`}
                      render={({ field }) => (
                        <FormItem className="flex-1">
                          <Label className="text-accent-foreground">
                            Numero do documento
                          </Label>
                          <FormControl>
                            <Input
                              {...field}
                              placeholder="567.524.685-65"
                              className="h-11 text-primary placeholder:text-primary/35 bg-gray-2"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    {/* BOTÃO REMOVER */}
                    <div className="mt-auto">
                      <Button
                        type="button"
                        variant="destructive"
                        className=" items-center"
                        onClick={() => remove(index)}
                      >
                        <Trash2 />
                      </Button>
                    </div>
                  </div>
                ))}

                {/* ADICIONAR */}
                <Button
                  type="button"
                  className=" flex items-center gap-2"
                  onClick={() => append({ name: "", value: "" })}
                >
                  <PlusCircle size={18} />
                  Adicionar documento
                </Button>
              </div>
            </div>

            {/* OBSERVAÇÕES */}
            <FormField
              control={form.control}
              name="internalNote"
              render={({ field }) => (
                <FormItem className="md:col-span-2">
                  <Label className="text-sm font-medium text-accent-foreground">
                    Observações internas
                  </Label>
                  <FormControl>
                    <Input
                      {...field}
                      placeholder="Observações do processo"
                      className="h-11 text-primary placeholder:text-primary/35 bg-gray-2"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <div className="flex gap-3 pt-2">
              <Button
                type="submit"
                className="font-semibold text-white"
                disabled={isPending}
              >
                {isPending ? "Atualizando processo..." : "Atualizar processo"}
              </Button>

              <Button
                type="button"
                onClick={onClose}
                className="text-primary bg-gray-2"
                variant={"ghost"}
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
