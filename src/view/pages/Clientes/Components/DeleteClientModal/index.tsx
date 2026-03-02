import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { useDeleteClient } from "@/hooks/clients/useDeleteClient";
import { Trash2 } from "lucide-react";

interface DeleteClientModalProps {
  id: string;
}

export function DeleteClientModal({ id }: DeleteClientModalProps) {
  const { mutate } = useDeleteClient();

  const handleDeleteClient = (clientId: string) => {
    mutate({ clientId });
  };
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          className="p-1.5 rounded-md hover:bg-gray-3 transition-colors"
          variant={"ghost"}
        >
          <Trash2 className="text-red-8" />
        </Button>
      </DialogTrigger>

      <DialogContent className="max-w-sm h-70">
        <DialogHeader>
          <DialogTitle className="text-lg font-semibold text-center text-primary">
            Excluir
          </DialogTitle>
        </DialogHeader>
        <div className="flex flex-col items-center justify-center">
          <Trash2 className="h-6 w-6 text-red-700 mb-5" />
          <p className="text-accent-foreground">Tem certeza que deseja</p>
          <p className="text-accent-foreground">Excluir este cliente ?</p>
        </div>

        <DialogFooter className="flex flex-col">
          <div className="flex flex-col w-full gap-2">
            <DialogClose asChild>
              <Button
                className="w-full  text-white h-8"
                onClick={() => handleDeleteClient(id)}
                variant={"destructive"}
              >
                Sim, desejo excluir
              </Button>
            </DialogClose>

            <DialogClose asChild>
              <Button
                type="button"
                variant={"ghost"}
                className="text-primary bg-gray-2"
              >
                Cancelar
              </Button>
            </DialogClose>
          </div>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
