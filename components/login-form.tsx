"use client";
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import Link from "next/link"
import { redirect } from "next/navigation"
import { useState } from "react"

export function LoginForm({
  className,
  ...props
}: React.ComponentProps<"div">) {
  const [user, setUser] = useState("");
  const [password, setPwd] = useState("");

  const handleUserChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUser(event.target.value);
  };

  const handlePwdChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPwd(event.target.value);
  };

  const handleLogin = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (user && password) {
      localStorage.setItem("user", user);
      redirect("/dashboard/prep"); // Redirect to the new Prep Dashboard
    }
  };

  return (
    <div className={cn("flex flex-col gap-6 relative group", className)} {...props}>
      {/* Glowing Effect Background */}
      <div className="absolute -inset-1 bg-gradient-to-r from-primary to-secondary rounded-2xl blur-xl opacity-40 group-hover:opacity-60 transition duration-500"></div>

      <Card className="glass-card overflow-hidden border-white/10 shadow-2xl relative z-10 w-full max-w-md mx-auto">
        <CardContent className="p-8">
          <form onSubmit={handleLogin} className="space-y-6">
            <div className="flex flex-col items-center gap-2 text-center mb-6">
              <div className="h-12 w-12 bg-primary/20 rounded-xl flex items-center justify-center mb-2 text-primary font-bold text-2xl">
                C
              </div>
              <h1 className="text-3xl font-bold tracking-tight text-white">Welcome back</h1>
              <p className="text-gray-400 text-sm">
                Enter your credentials to access the console
              </p>
            </div>

            <FieldGroup className="space-y-4">
              <Field>
                <FieldLabel htmlFor="email" className="text-gray-300">Email Address</FieldLabel>
                <Input
                  id="email"
                  type="email"
                  value={user}
                  placeholder="name@example.com"
                  onChange={handleUserChange}
                  required
                  className="bg-white/5 border-white/10 text-white placeholder:text-gray-500 focus:ring-primary focus:border-primary/50"
                />
              </Field>

              <Field>
                <div className="flex items-center justify-between">
                  <FieldLabel htmlFor="password" className="text-gray-300">Password</FieldLabel>
                  <a href="#" className="text-sm text-primary hover:text-primary/80 transition-colors">
                    Forgot password?
                  </a>
                </div>
                <Input
                  id="password"
                  type="password"
                  value={password}
                  onChange={handlePwdChange}
                  required
                  className="bg-white/5 border-white/10 text-white focus:ring-primary focus:border-primary/50"
                />
              </Field>

              <Field className="pt-2">
                <Button className="w-full bg-primary hover:bg-primary/90 text-white h-11 font-medium shadow-lg shadow-primary/25 transition-all active:scale-[0.98]" type="submit">
                  Sign In
                </Button>
              </Field>

              <div className="relative my-6">
                <div className="absolute inset-0 flex items-center">
                  <span className="w-full border-t border-white/10" />
                </div>
                <div className="relative flex justify-center text-xs uppercase">
                  <span className="bg-[#111827]/90 px-2 text-gray-500">
                    Or continue with
                  </span>
                </div>
              </div>

              <div className="text-center text-sm">
                <span className="text-gray-400">Don&apos;t have an account? </span>
                <Link href="/signup" className="text-primary hover:text-primary/80 font-medium transition-colors">
                  Sign up
                </Link>
              </div>
            </FieldGroup>
          </form>
        </CardContent>
      </Card>

      <div className="text-center text-xs text-gray-600 mt-4 relative z-10">
        By clicking continue, you agree to our <a href="#" className="hover:text-gray-400">Terms</a> and <a href="#" className="hover:text-gray-400">Privacy</a>.
      </div>
    </div>
  )
}
