import {
  ChevronRight,
  FileText,
  KanbanSquare,
  LayoutDashboard,
  LogOut,
  Menu,
  Users,
  X,
  Zap,
} from "lucide-react";
import { useState } from "react";
import { NavLink, Outlet, useLocation } from "react-router-dom";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useAuthStore } from "@/store/auth";

const navItems = [
  { label: "Dashboard", icon: LayoutDashboard, to: "/" },
  { label: "Processos", icon: Zap, to: "/processos" },
  { label: "Orçamentos", icon: FileText, to: "/orcamentos" },
  { label: "Clientes", icon: Users, to: "/clientes" },
  { label: "Tarefas", icon: KanbanSquare, to: "/tarefas" },
];

export const BaseLayout = () => {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const location = useLocation();
  const { logout } = useAuthStore();

  return (
    <div className="flex h-screen overflow-hidden bg-gray-1/20">
      {/* SIDEBAR */}
      <aside
        className={cn(
          "flex flex-col transition-all duration-300 border-r border-border z-20 bg-sidebar",
          sidebarOpen ? "w-64" : "w-16",
        )}
      >
        {/* Logo */}
        <div className="flex items-center gap-3 px-4 py-5 border-b border-border">
          <div className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 bg-primary">
            <Zap className="w-4 h-4 text-primary-foreground" />
          </div>

          {sidebarOpen && (
            <div>
              <span className="text-foreground font-bold text-sm tracking-wide">
                CRM Pro
              </span>
              <p className="text-xs text-muted-foreground">
                Gestão de Serviços
              </p>
            </div>
          )}

          <button
            onClick={() => setSidebarOpen(!sidebarOpen)}
            className={cn(
              "ml-auto p-1 rounded-md text-muted-foreground hover:text-foreground hover:bg-muted transition-colors",
              !sidebarOpen && "mx-auto",
            )}
          >
            {sidebarOpen ? (
              <X className="w-4 h-4" />
            ) : (
              <Menu className="w-4 h-4" />
            )}
          </button>
        </div>

        {/* NAV */}
        <nav className="flex-1 px-2 py-4 space-y-1">
          {navItems.map((item) => {
            const isActive =
              item.to === "/"
                ? location.pathname === "/"
                : location.pathname.startsWith(item.to);

            return (
              <NavLink
                key={item.to}
                to={item.to}
                end={item.to === "/"}
                className={cn(
                  "flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-all duration-150 relative group",
                  isActive
                    ? "text-accent-foreground bg-accent"
                    : "text-muted-foreground hover:text-foreground hover:bg-muted",
                )}
              >
                {isActive && (
                  <span className="absolute left-0 top-1/2 -translate-y-1/2 w-0.5 h-5 rounded-full bg-primary" />
                )}

                <item.icon className="w-4 h-4 flex-shrink-0" />

                {sidebarOpen && (
                  <>
                    <span className="flex-1">{item.label}</span>
                    {isActive && (
                      <ChevronRight className="w-3 h-3 opacity-50" />
                    )}
                  </>
                )}
              </NavLink>
            );
          })}
        </nav>

        {/* LOGOUT */}
        <div className="px-2 py-4 border-t border-border">
          <Button
            onClick={logout}
            variant="ghost"
            className={cn(
              "flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm text-muted-foreground hover:text-destructive hover:bg-muted transition-colors w-full",
              !sidebarOpen && "justify-center",
            )}
          >
            <LogOut className="w-4 h-4 flex-shrink-0" />
            {sidebarOpen && <span>Sair</span>}
          </Button>
        </div>
      </aside>

      {/* MAIN AREA */}
      <div className="flex-1 flex flex-col overflow-hidden">
        <header className="flex items-center justify-between px-6 py-4 border-b border-border bg-card">
          <div>
            <h2 className="text-foreground font-semibold">
              {navItems.find((i) =>
                i.to === "/"
                  ? location.pathname === "/"
                  : location.pathname.startsWith(i.to),
              )?.label ?? "CRM"}
            </h2>

            <p className="text-xs text-muted-foreground capitalize">
              {new Date().toLocaleDateString("pt-BR", {
                weekday: "long",
                day: "numeric",
                month: "long",
              })}
            </p>
          </div>
        </header>

        <main className="flex-1 overflow-y-auto p-6">
          <Outlet />
        </main>
      </div>
    </div>
  );
};
