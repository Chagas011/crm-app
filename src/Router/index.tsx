import { BaseLayout } from "@/view/layout";
import { Clientes } from "@/view/pages/Clientes";
import { Dashboard } from "@/view/pages/Dashboard";
import { Login } from "@/view/pages/Login";
import { Orcamentos } from "@/view/pages/Orcamentos";
import { Processos } from "@/view/pages/Processos";
import { Register } from "@/view/pages/Register";
import { Tarefas } from "@/view/pages/Tarefas";
import { BrowserRouter, Route, Routes } from "react-router-dom";

export function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<BaseLayout />}>
          <Route path="/" element={<Dashboard />} />
          <Route path="/processos" element={<Processos />} />
          <Route path="/orcamentos" element={<Orcamentos />} />
          <Route path="/clientes" element={<Clientes />} />
          <Route path="/tarefas" element={<Tarefas />} />
        </Route>

        <Route>
          <Route path="/login" element={<Login />} />
          <Route path="/cadastro" element={<Register />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
