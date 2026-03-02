import { zodResolver } from "@hookform/resolvers/zod";
import { X } from "lucide-react";
import { useForm } from "react-hook-form";

import { useUpdateClient } from "@/hooks/clients/useUpdateClient";

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
import { clientSchema } from "../FormClient/schema";

interface ModalUpdateClientProps {
  client: {
    id: string;
    name: string;
    email: string;
    tel: string;
    cpfCnpj: string;
    rgIE: string;
    address: string;
  };
  onClose: () => void;
}

export function ModalUpdateClient({ client, onClose }: ModalUpdateClientProps) {
  const { mutateAsync, isPending } = useUpdateClient();

  const form = useForm({
    resolver: zodResolver(clientSchema),
    defaultValues: {
      name: client.name,
      email: client.email,
      tel: client.tel,
      cpfCnpj: client.cpfCnpj,
      rgIE: client.rgIE,
      address: client.address,
    },
  });

  const handleSubmit = form.handleSubmit(async (data) => {
    await mutateAsync({
      clientId: client.id,
      data,
    });
    form.reset();
    onClose();
  });

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70">
      <Card className="w-full max-w-xl rounded-xl  p-6 space-y-5">
        {/* HEADER */}
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-semibold text-primary">Editar cliente</h3>

          <Button onClick={onClose}>
            <X className="w-5 h-5 text-white/70 hover:text-white" />
          </Button>
        </div>

        <Form {...form}>
          <form onSubmit={handleSubmit} className="grid grid-cols-2 gap-4">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input
                      placeholder="Nome"
                      {...field}
                      className="h-11 text-primary placeholder:text-primary/35 bg-gray-2"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input
                      placeholder="E-mail"
                      {...field}
                      className="h-11 text-primary placeholder:text-primary/35 bg-gray-2"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="tel"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input
                      placeholder="Telefone"
                      {...field}
                      className="h-11 text-primary placeholder:text-primary/35 bg-gray-2"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="cpfCnpj"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input
                      placeholder="CPF / CNPJ"
                      {...field}
                      className="h-11 text-primary placeholder:text-primary/35 bg-gray-2"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="rgIE"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input
                      placeholder="RG / IE"
                      {...field}
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
                <FormItem>
                  <FormControl>
                    <Input
                      placeholder="Endereço"
                      {...field}
                      className="h-11 text-primary placeholder:text-primary/35 bg-gray-2"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* FOOTER */}
            <div className="col-span-2 flex justify-start gap-3 pt-3">
              <Button type="submit" disabled={isPending} variant={"default"}>
                {isPending ? "Salvando alterações..." : "Salvar alterações"}
              </Button>
              <Button
                type="button"
                onClick={onClose}
                variant={"ghost"}
                className="text-primary bg-gray-2"
              >
                Cancelar
              </Button>
            </div>
          </form>
        </Form>
      </Card>
    </div>
  );
}
