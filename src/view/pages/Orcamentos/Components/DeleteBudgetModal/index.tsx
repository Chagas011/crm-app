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
import { useDeleteBudget } from "@/hooks/budget/useDeleteBudget";

import { Trash2 } from "lucide-react";

interface DeleteBudgetModalProps {
  id: string;
}

export function DeleteBudgetModal({ id }: DeleteBudgetModalProps) {
  const { mutate } = useDeleteBudget();
  const handleDeleteClient = (budgetId: string) => {
    mutate({ budgetId });
  };
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant={"ghost"} className="hover:bg-gray-2">
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
          <p className="text-accent-foreground">Excluir este orcamento ?</p>
        </div>

        <DialogFooter className="flex flex-col">
          <div className="flex flex-col w-full gap-2">
            <DialogClose asChild>
              <Button
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
