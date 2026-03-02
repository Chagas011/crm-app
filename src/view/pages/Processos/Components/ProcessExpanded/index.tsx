import { Button } from "@/components/ui/button";
import { formatPhone } from "@/utils/formatPhone";
import { CheckCircle2, Edit, Mail, Phone, Pin, User } from "lucide-react";
import { useState } from "react";
import { statusConfig } from "../../statusConfig";
import type { IProcess } from "../../types";
import { DeleteProcessModal } from "../DeleteProcessModal";
import { ModalUpdateProcess } from "../UpdateProcessModal";

interface Props {
  proc: IProcess;
}
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

export function ProcessExpanded({ proc }: Props) {
  const [selectedProcess, setSelectedProcess] =
    useState<IUpdateProcess | null>();
  const isUrgent =
    proc.status === "AGUARDANDO_CLIENTE" ||
    (proc.deadline <= new Date() && proc.status !== "FINALIZADO");
  const cfg = statusConfig[proc.status];
  return (
    <div
      className="px-2 space-y-4 border-l rounded-b-md border-b border-r"
      style={{ borderColor: cfg.color }}
    >
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-4  p-0 w-full ">
        {/* Cliente */}
        <div className="space-y-2">
          <h4 className="text-xs font-medium uppercase tracking-wide text-accent-foreground">
            Cliente
          </h4>

          <div className="space-y-1.5">
            <div className="flex items-center gap-2 text-sm text-accent-foreground">
              <User className="w-3.5 h-3.5 text-muted-foreground" />
              {proc.client.name}
            </div>

            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Phone className="w-3.5 h-3.5" />
              {formatPhone(proc.client.tel)}
            </div>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Mail className="w-3.5 h-3.5" />
              {proc.client.email}
            </div>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Pin className="w-3.5 h-3.5" />
              {proc.client.address}
            </div>
          </div>
        </div>

        {/* Documentos */}
        <div className="space-y-2">
          <h4 className="text-xs font-medium uppercase tracking-wide text-accent-foreground">
            Documentos
          </h4>

          <div className="space-y-1.5">
            {proc.documents.map((doc, i) => (
              <div key={i} className="flex items-center gap-2 text-sm">
                <CheckCircle2
                  className="w-3.5 h-3.5 flex-shrink-0"
                  style={{
                    color: "hsl(160 84% 39%)",
                  }}
                />
                <span
                  className={
                    doc.name
                      ? "text-muted-foreground"
                      : "text-muted-foreground/70"
                  }
                >
                  {doc.name}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Detalhes */}
        <div className="space-y-2">
          <div className="flex justify-between items-center">
            <h4 className="text-xs font-medium uppercase tracking-wide text-accent-foreground">
              Detalhes
            </h4>

            <div className="flex gap-3">
              {selectedProcess && (
                <ModalUpdateProcess
                  open={selectedProcess.id === proc.id}
                  process={proc}
                  onClose={() => setSelectedProcess(null)}
                />
              )}

              <Button
                onClick={() => setSelectedProcess(proc)}
                variant="ghost"
                size="icon"
                className="text-muted-foreground hover:text-primary hover:bg-gray-3"
              >
                <Edit />
              </Button>

              <DeleteProcessModal id={proc.id} />
            </div>
          </div>

          <div className="space-y-2 text-sm text-muted-foreground">
            <div className="flex justify-between">
              <span>Entrada:</span>
              <span className="text-accent-foreground">
                {new Date(proc.openDate).toLocaleDateString("pt-BR")}
              </span>
            </div>

            <div className="flex justify-between">
              <span>Prazo:</span>
              <span
                className={
                  isUrgent
                    ? "text-red-400 font-medium"
                    : "text-accent-foreground"
                }
              >
                {new Date(proc.deadline).toLocaleDateString("pt-BR")}
              </span>
            </div>

            <div className="flex justify-between">
              <span>Responsável:</span>
              <span className="text-accent-foreground">
                {proc.responsibleName}
              </span>
            </div>
          </div>

          {proc.internalNote && (
            <div className="mt-3 p-3 rounded-lg text-xs bg-background text-muted-foreground">
              💬 {proc.internalNote}
            </div>
          )}
        </div>
      </div>

      {/* Progresso */}
    </div>
  );
}
