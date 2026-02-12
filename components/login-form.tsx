"use client";
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
  FieldSeparator,
} from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { useState } from "react"


export function LoginForm({
  className,
  ...props
}: React.ComponentProps<"div">) {
  const [user,setUser] = useState("");
  const [password,setPwd] = useState("");
  const [error, setError] = useState("");
  const router=useRouter();
  const handleUserChange = (event: React.ChangeEvent<HTMLInputElement>) => {
  setUser(event.target.value);
};

const handlePwdChange = (event: React.ChangeEvent<HTMLInputElement>) => {
  setPwd(event.target.value);
};
  const handleLogin = async (event: React.FormEvent<HTMLFormElement>) => {
  event.preventDefault(); // Prevents page reload
  
  try {
      const res = await fetch("/api/py/login", { 
        method: "POST",
        headers: { 
            "Content-Type": "application/json" 
        },
        body: JSON.stringify({ email: user }),
       });
      const data = await res.json();

      if(res.ok){
        localStorage.setItem("user", data.email);
        router.push("/dashboard"); 
      }

      if (!res.ok) {
        const data = await res.json();
        alert("Invalid email Id, please check")
        throw new Error(data.detail || "User not found");
      }

   
    } catch (err: any) {
      setError(err.message);
    }
}
  return (
    <div className={cn("flex flex-col gap-6", className)} {...props}>
      <Card className="bg-[#111827] overflow-hidden p-0">
        <CardContent className="grid p-0 md:grid-cols-2">
          <form className="p-6 md:p-8" onSubmit={handleLogin}>
            <FieldGroup>
              <div className="flex flex-col items-center gap-2 text-center">
                <h1 className="text-2xl font-bold text-[#e5e7eb]">Welcome back</h1>
                <p className="text-muted-foreground text-balance">
                  Login to Campus to Corporate
                </p>
              </div>
              <Field>
                <FieldLabel htmlFor="email">Email</FieldLabel>
                <Input
                  id="email"
                  type="email"
                  value={user}
                  placeholder="m@example.com"
                  onChange={handleUserChange}
                  required
                />
              </Field>
              <Field>
                <div className="flex items-center">
                  <FieldLabel htmlFor="password">Password</FieldLabel>
                  <a
                    href="#"
                    className="ml-auto text-sm underline-offset-2 hover:underline"
                  >
                    Forgot your password?
                  </a>
                </div>
                <Input id="password" type="password" value={password} onChange={handlePwdChange} required />
              </Field>
              <Field>
                <Button className="bg-[#2563eb] hover:bg-[#0ea5e9]" type="submit" >Login</Button>
              </Field>
              
              <FieldDescription className="text-center">
                Don&apos;t have an account? <Link href="/">Sign up</Link>
              </FieldDescription>
            </FieldGroup>
          </form>
          <div className="bg-muted relative hidden md:block">
            <img
              src="/placeholder.svg"
              alt="Image"
              className="absolute inset-0 h-full w-full object-cover dark:brightness-[0.2] dark:grayscale"
            />
          </div>
        </CardContent>
      </Card>
      <FieldDescription className="px-6 text-center">
        By clicking continue, you agree to our <a href="#">Terms of Service</a>{" "}
        and <a href="#">Privacy Policy</a>.
      </FieldDescription>
    </div>
  )
}
