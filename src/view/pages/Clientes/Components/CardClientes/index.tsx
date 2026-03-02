import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { formatCpfCnpj } from "@/utils/formatCpfCnpj";
import { formatPhone } from "@/utils/formatPhone";
import { Edit, File, Mail, MapPin, Phone } from "lucide-react";
import { useState } from "react";
import { DeleteClientModal } from "../DeleteClientModal";
import { ModalUpdateClient } from "../UpdateClientModal";

interface ICardClientesProps {
  clientes: {
    id: string;
    name: string;
    cpfCnpj: string;
    rgIE: string;
    email: string;
    tel: string;
    address: string;
  };
}

type ClientUpdate = {
  id: string;
  name: string;
  cpfCnpj: string;
  rgIE: string;
  email: string;
  tel: string;
  address: string;
};

export function CardClientes({ clientes }: ICardClientesProps) {
  const [selectedClient, setSelectedClient] = useState<ClientUpdate | null>(
    null,
  );

  return (
    <Card className="rounded-xl p-5 bg-card border border-gray-2 hover:shadow-sm hover:border-primary/20 transition-all">
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center gap-3">
          {/* Avatar */}
          <div className="w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold bg-primary text-secondary">
            {clientes.name[0]}
          </div>

          <div>
            <p className="text-sm font-semibold text-foreground">
              {clientes.name}
            </p>
          </div>
        </div>

        {/* Actions */}
        <div className="flex items-center gap-1">
          {selectedClient && (
            <ModalUpdateClient
              client={selectedClient}
              onClose={() => setSelectedClient(null)}
            />
          )}

          <Button
            onClick={() => setSelectedClient(clientes)}
            variant="ghost"
            size="icon"
            className="text-muted-foreground hover:text-primary hover:bg-gray-3"
          >
            <Edit className="w-4 h-4" />
          </Button>

          <DeleteClientModal id={clientes.id} />
        </div>
      </div>

      {/* Informações */}
      <div className="space-y-4 mb-2">
        <div className="flex items-center gap-2 text-xs text-muted-foreground">
          <Mail className="w-3.5 h-3.5 flex-shrink-0" />
          <span className="truncate">{clientes.email}</span>
        </div>

        <div className="flex items-center gap-2 text-xs text-muted-foreground">
          <Phone className="w-3.5 h-3.5 flex-shrink-0" />
          <span>{formatPhone(clientes.tel)}</span>
        </div>

        <div className="flex items-center gap-2 text-xs text-muted-foreground">
          <File className="w-3.5 h-3.5 flex-shrink-0" />
          <span>{formatCpfCnpj(clientes.cpfCnpj)}</span>
        </div>

        <div className="flex items-center gap-2 text-xs text-muted-foreground">
          <MapPin className="w-3.5 h-3.5 flex-shrink-0" />
          <span>{clientes.address}</span>
        </div>
      </div>
    </Card>
  );
}
