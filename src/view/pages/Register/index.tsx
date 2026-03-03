import { Button } from "@/components/ui/button";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

import { Label } from "@/components/ui/label";

import { useRegister } from "@/hooks/useRegister";
import { zodResolver } from "@hookform/resolvers/zod";
import { Eye, EyeOff, Lock, Mail, Zap } from "lucide-react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { registerSchema, type RegisterFormData } from "./schema";

export function Register() {
  const [showPassword, setShowPassword] = useState(false);
  const form = useForm<RegisterFormData>({
    resolver: zodResolver(registerSchema),
    defaultValues: {
      email: "",
      password: "",
    },
    mode: "onChange",
  });
  const { mutate, isPending } = useRegister();
  const handleSubmit = form.handleSubmit(({ email, password }) => {
    mutate({
      account: {
        email,
        password,
      },
    });
  });
  return (
    <div className="min-h-screen flex items-center justify-center p-4 bg-gray-2">
      {/* Glow */}
      <div className="fixed top-0 left-1/2 -translate-x-1/2 w-150 h-100 rounded-full blur-[120px] opacity-20 pointer-events-none" />

      <div className="w-full max-w-md relative z-10">
        {/* Logo */}
        <div className="flex flex-col items-center mb-8">
          <div
            className="w-14 h-14 rounded-2xl flex items-center justify-center mb-4 shadow-lg"
            style={{ background: "hsl(263 70% 58%)" }}
          >
            <Zap className="w-7 h-7 text-white" />
          </div>
          <h1 className="text-2xl font-bold text-accent-foreground">CRM Pro</h1>
          <p className="text-sm mt-1 text-muted-foreground">
            Gestão de Serviços de Despachante
          </p>
        </div>

        {/* Card */}
        <div className="rounded-2xl border p-8 border-accent-foreground">
          <div className="mb-6">
            <h2 className="text-lg font-semibold text-accent-foreground">
              Cadastre-se
            </h2>
            <p className="text-sm mt-1 text-muted-foreground"></p>
          </div>

          <Form {...form}>
            <form onSubmit={handleSubmit} className="space-y-5">
              {/* EMAIL */}
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <Label className="text-sm font-medium text-accent-foreground">
                      E-mail
                    </Label>
                    <FormControl>
                      <div className="relative">
                        <Mail
                          className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4"
                          style={{ color: "hsl(215 20% 40%)" }}
                        />
                        <Input
                          {...field}
                          type="email"
                          placeholder="seu@email.com"
                          className="h-11 pl-11 text-primary placeholder:text-primary/35 bg-gray-3"
                        />
                      </div>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* SENHA */}
              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <div className="flex items-center justify-between">
                      <Label className="text-sm font-medium text-accent-foreground">
                        Senha
                      </Label>
                    </div>

                    <FormControl>
                      <div className="relative">
                        <Lock
                          className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4"
                          style={{ color: "hsl(215 20% 40%)" }}
                        />
                        <Input
                          {...field}
                          type={showPassword ? "text" : "password"}
                          placeholder="••••••••"
                          className="h-11 pl-11 text-primary placeholder:text-primary/35 bg-gray-3"
                        />
                        <Button
                          type="button"
                          onClick={() => setShowPassword((v) => !v)}
                          className="absolute right-3 top-1/2 -translate-y-1/2 text-white/30 hover:text-white/60"
                        >
                          {showPassword ? (
                            <EyeOff className="w-4 h-4" />
                          ) : (
                            <Eye className="w-4 h-4" />
                          )}
                        </Button>
                      </div>
                    </FormControl>
                    <div className="mt-5">
                      <ul className="list-disc pl-5 text-sm text-muted-foreground space-y-1">
                        <li>Mínimo de 8 caracteres</li>
                        <li>Pelo menos uma letra maiúscula (A-Z)</li>
                        <li>Pelo menos uma letra minúscula (a-z)</li>
                        <li>Pelo menos um número (0-9)</li>
                        <li>Pelo menos um caractere especial (!@#$%...)</li>
                      </ul>
                    </div>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* BOTÃO */}
              <Button
                variant={"default"}
                type="submit"
                className="w-full h-11 text-sm font-semibold text-white rounded-xl"
                disabled={isPending}
              >
                {isPending ? "Cadastrando..." : "Cadastrar"}
              </Button>
            </form>
          </Form>

          <div className="mt-5">
            <p className="text-center font-normal text-accent-foreground">
              Ja tem uma conta?{" "}
              <span>
                {" "}
                <Link to="/login" className="text-grape-8">
                  entrar
                </Link>{" "}
              </span>
            </p>
          </div>
        </div>

        <p className="text-center text-xs mt-6 text-muted-foreground">
          © 2026 CRM Pro — Gestão de Despachante
        </p>
      </div>
    </div>
  );
}
