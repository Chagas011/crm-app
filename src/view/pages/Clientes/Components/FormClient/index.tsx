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
import { useCreateClient } from "@/hooks/clients/useCreateClient";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { clientSchema, type ClientFormData } from "./schema";

interface IFormProps {
  onToggle: () => void;
}

export function FormClient({ onToggle }: IFormProps) {
  const { mutate, isPending } = useCreateClient();
  const form = useForm<ClientFormData>({
    resolver: zodResolver(clientSchema),
    defaultValues: {
      name: "",
      address: "",
      cpfCnpj: "",
      rgIE: "",
      tel: "",
      email: "",
    },
    mode: "onChange",
  });

  const handleSubmit = form.handleSubmit((data) => {
    mutate(data);
    form.reset();
  });

  return (
    <Card className="rounded-xl p-6 space-y-6">
      <h4 className="text-primary font-medium text-lg">Cadastrar Cliente</h4>

      <Form {...form}>
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* GRID */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {/* NOME */}
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <Label className="text-sm font-medium text-white/70">
                    Nome
                  </Label>
                  <FormControl>
                    <Input
                      {...field}
                      placeholder="Nome do cliente"
                      className="h-11 text-primary placeholder:text-primary/35 bg-gray-2"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* EMAIL */}
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <Label className="text-sm font-medium text-white/70">
                    E-mail
                  </Label>
                  <FormControl>
                    <Input
                      {...field}
                      placeholder="cliente@email.com"
                      className="h-11 text-primary placeholder:text-primary/35 bg-gray-2"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* CPF / CNPJ */}
            <FormField
              control={form.control}
              name="cpfCnpj"
              render={({ field }) => (
                <FormItem>
                  <Label className="text-sm font-medium text-white/70">
                    CPF / CNPJ
                  </Label>
                  <FormControl>
                    <Input
                      {...field}
                      placeholder="000.000.000-00"
                      maxLength={14}
                      className="h-11 text-primary placeholder:text-primary/35 bg-gray-2"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* RG / IE */}
            <FormField
              control={form.control}
              name="rgIE"
              render={({ field }) => (
                <FormItem>
                  <Label className="text-sm font-medium text-white/70">
                    RG / IE
                  </Label>
                  <FormControl>
                    <Input
                      {...field}
                      placeholder="Documento"
                      className="h-11 text-primary placeholder:text-primary/35 bg-gray-2"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* TELEFONE */}
            <FormField
              control={form.control}
              name="tel"
              render={({ field }) => (
                <FormItem>
                  <Label className="text-sm font-medium text-white/70">
                    Telefone
                  </Label>
                  <FormControl>
                    <Input
                      {...field}
                      placeholder="(11) 91234-5678"
                      maxLength={11}
                      className="h-11 text-primary placeholder:text-primary/35 bg-gray-2"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="address"
              render={({ field }) => (
                <FormItem className="">
                  <Label className="text-sm font-medium text-white/70">
                    Endereço
                  </Label>
                  <FormControl>
                    <Input
                      {...field}
                      placeholder="Endereço completo"
                      className="h-11 text-primary placeholder:text-primary/35 bg-gray-2"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <div className="flex justify-start gap-3 pt-2">
            <Button
              type="submit"
              className="font-semibold text-white"
              variant={"default"}
              disabled={isPending}
            >
              {isPending ? "Cadastrando cliente..." : "Cadastrar cliente"}
            </Button>
            <Button
              type="button"
              onClick={onToggle}
              className="text-primary bg-gray-2"
              variant={"ghost"}
            >
              Cancelar
            </Button>
          </div>
        </form>
      </Form>
    </Card>
  );
}
