import {
  Bell,
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

import { cn } from "@/lib/utils";

const navItems = [
  { label: "Dashboard", icon: LayoutDashboard, to: "/" },
  { label: "Processos", icon: Zap, to: "/processos", badge: 6 },
  { label: "Orçamentos", icon: FileText, to: "/orcamentos", badge: 3 },
  { label: "Clientes", icon: Users, to: "/clientes" },
  { label: "Tarefas", icon: KanbanSquare, to: "/tarefas", badge: 7 },
];

export const BaseLayout = () => {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const location = useLocation();

  return (
    <div
      className="flex h-screen overflow-hidden"
      style={{ background: "hsl(222 47% 9%)" }}
    >
      <aside
        className={cn(
          "flex flex-col transition-all duration-300 border-r border-white/5 z-20",
          sidebarOpen ? "w-64" : "w-16",
        )}
        style={{ background: "hsl(222 47% 11%)" }}
      >
        <div className="flex items-center gap-3 px-4 py-5 border-b border-white/5">
          <div
            className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0"
            style={{ background: "hsl(263 70% 58%)" }}
          >
            <Zap className="w-4 h-4 text-white" />
          </div>
          {sidebarOpen && (
            <div>
              <span className="text-white font-bold text-sm tracking-wide">
                CRM Pro
              </span>
              <p className="text-xs" style={{ color: "hsl(215 20% 50%)" }}>
                Gestão de Serviços
              </p>
            </div>
          )}
          <button
            onClick={() => setSidebarOpen(!sidebarOpen)}
            className={cn(
              "ml-auto p-1 rounded-md text-white/40 hover:text-white hover:bg-white/5 transition-colors",
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
                    ? "text-white"
                    : "text-white/50 hover:text-white hover:bg-white/5",
                )}
                style={
                  isActive
                    ? {
                        background: "hsl(263 70% 58% / 0.2)",
                        color: "hsl(263 70% 75%)",
                      }
                    : {}
                }
              >
                {isActive && (
                  <span
                    className="absolute left-0 top-1/2 -translate-y-1/2 w-0.5 h-5 rounded-full"
                    style={{ background: "hsl(263 70% 58%)" }}
                  />
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

        <div className="px-2 py-4 border-t border-white/5 space-y-1">
          <button
            className={cn(
              "flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm text-white/40 hover:text-white hover:bg-white/5 transition-colors w-full",
              !sidebarOpen && "justify-center",
            )}
          >
            <LogOut className="w-4 h-4 flex-shrink-0" />
            {sidebarOpen && <span>Sair</span>}
          </button>
        </div>
      </aside>

      <div className="flex-1 flex flex-col overflow-hidden">
        <header
          className="flex items-center justify-between px-6 py-4 border-b border-white/5"
          style={{ background: "hsl(222 47% 11%)" }}
        >
          <div>
            <h2 className="text-white font-semibold">
              {navItems.find((i) =>
                i.to === "/"
                  ? location.pathname === "/"
                  : location.pathname.startsWith(i.to),
              )?.label ?? "CRM"}
            </h2>
            <p className="text-xs" style={{ color: "hsl(215 20% 50%)" }}>
              {new Date().toLocaleDateString("pt-BR", {
                weekday: "long",
                day: "numeric",
                month: "long",
              })}
            </p>
          </div>
          <div className="flex items-center gap-3">
            <button className="relative p-2 rounded-lg text-white/40 hover:text-white hover:bg-white/5 transition-colors">
              <Bell className="w-4 h-4" />
              <span
                className="absolute top-1.5 right-1.5 w-1.5 h-1.5 rounded-full"
                style={{ background: "hsl(263 70% 58%)" }}
              />
            </button>
            <div className="flex items-center gap-2 pl-3 border-l border-white/10">
              <div
                className="w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold text-white"
                style={{ background: "hsl(263 70% 58%)" }}
              >
                JS
              </div>
              <span className="text-sm text-white/70">João Silva</span>
            </div>
          </div>
        </header>

        {/* Page content */}
        <main className="flex-1 overflow-y-auto p-6">
          <Outlet />
        </main>
      </div>
    </div>
  );
};
