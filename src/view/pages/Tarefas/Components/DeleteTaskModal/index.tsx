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
import { useDeleteTask } from "@/hooks/task/useDeleteTask";

import { Trash2 } from "lucide-react";

interface DeleteTaskModalProps {
  id: string;
}

export function DeleteTaskModal({ id }: DeleteTaskModalProps) {
  const { mutate } = useDeleteTask();
  const handleDeleteClient = (taskId: string) => {
    mutate({ taskId });
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
          <DialogTitle className="text-lg font-semibold text-center text-accent-foreground">
            Excluir
          </DialogTitle>
        </DialogHeader>
        <div className="flex flex-col items-center justify-center">
          <Trash2 className="h-6 w-6 text-red-700 mb-5" />
          <p className="text-accent-foreground">Tem certeza que deseja</p>
          <p className="text-accent-foreground">Excluir esta tarefa ?</p>
        </div>

        <DialogFooter className="flex flex-col">
          <div className="flex flex-col w-full gap-2">
            <DialogClose asChild>
              <Button
                className="w-full text-white h-8"
                variant={"destructive"}
                onClick={() => handleDeleteClient(id)}
              >
                Sim, desejo excluir
              </Button>
            </DialogClose>

            <DialogClose asChild>
              <Button
                type="button"
                variant={"ghost"}
                className="text-primary bg-gray-3"
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
