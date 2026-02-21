import { useState } from "react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Eye, EyeOff, Lock, Mail, Zap } from "lucide-react";

export const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div
      className="min-h-screen flex items-center justify-center p-4"
      style={{ background: "hsl(222 47% 9%)" }}
    >
      {/* Glow decorativo */}
      <div
        className="fixed top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] rounded-full blur-[120px] opacity-20 pointer-events-none"
        style={{ background: "hsl(263 70% 58%)" }}
      />

      <div className="w-full max-w-md relative z-10">
        {/* Logo */}
        <div className="flex flex-col items-center mb-8">
          <div
            className="w-14 h-14 rounded-2xl flex items-center justify-center mb-4 shadow-lg"
            style={{ background: "hsl(263 70% 58%)" }}
          >
            <Zap className="w-7 h-7 text-white" />
          </div>
          <h1 className="text-2xl font-bold text-white tracking-tight">
            CRM Pro
          </h1>
          <p className="text-sm mt-1" style={{ color: "hsl(215 20% 50%)" }}>
            Gestão de Serviços de Despachante
          </p>
        </div>

        {/* Card */}
        <div
          className="rounded-2xl border p-8"
          style={{
            background: "hsl(222 40% 14%)",
            borderColor: "hsl(0 0% 100% / 0.06)",
          }}
        >
          <div className="mb-6">
            <h2 className="text-lg font-semibold text-white">Entrar</h2>
            <p className="text-sm mt-1" style={{ color: "hsl(215 20% 50%)" }}>
              Acesse sua conta para gerenciar processos
            </p>
          </div>

          <form className="space-y-5">
            {/* Email */}
            <div className="space-y-2">
              <Label className="text-sm font-medium text-white/70">
                E-mail
              </Label>
              <div className="relative">
                <Mail
                  className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4"
                  style={{ color: "hsl(215 20% 40%)" }}
                />
                <Input
                  type="email"
                  placeholder="seu@email.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="pl-10 h-11 border-white/10 text-white placeholder:text-white/25 focus-visible:ring-1"
                  style={{
                    background: "hsl(222 47% 11%)",
                    borderColor: "hsl(0 0% 100% / 0.1)",
                  }}
                />
              </div>
            </div>

            {/* Senha */}
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <Label className="text-sm font-medium text-white/70">
                  Senha
                </Label>
                <button
                  type="button"
                  className="text-xs font-medium hover:underline"
                  style={{ color: "hsl(263 70% 68%)" }}
                >
                  Esqueceu a senha?
                </button>
              </div>
              <div className="relative">
                <Lock
                  className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4"
                  style={{ color: "hsl(215 20% 40%)" }}
                />
                <Input
                  type={showPassword ? "text" : "password"}
                  placeholder="••••••••"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="pl-10 pr-10 h-11 border-white/10 text-white placeholder:text-white/25 focus-visible:ring-1"
                  style={{
                    background: "hsl(222 47% 11%)",
                    borderColor: "hsl(0 0% 100% / 0.1)",
                  }}
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-white/30 hover:text-white/60 transition-colors"
                >
                  {showPassword ? (
                    <EyeOff className="w-4 h-4" />
                  ) : (
                    <Eye className="w-4 h-4" />
                  )}
                </button>
              </div>
            </div>

            {/* Botão */}
            <Button
              variant={"secondary"}
              type="submit"
              className="w-full h-11 text-sm font-semibold text-white rounded-xl transition-all duration-200"
            >
              Entrar
            </Button>
          </form>
        </div>

        {/* Footer */}
        <p
          className="text-center text-xs mt-6"
          style={{ color: "hsl(215 20% 35%)" }}
        >
          © 2026 CRM Pro — Gestão de Despachante
        </p>
      </div>
    </div>
  );
};
