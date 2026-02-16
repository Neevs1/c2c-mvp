"use client";
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import {
  Field,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import Link from "next/link"

export function SignupForm({
  className,
  ...props
}: React.ComponentProps<"div">) {
  return (
    <div className={cn("flex flex-col gap-6 relative group", className)} {...props}>
      {/* Glowing Effect Background */}
      <div className="absolute -inset-1 bg-gradient-to-r from-primary to-secondary rounded-2xl blur-xl opacity-40 group-hover:opacity-60 transition duration-500"></div>

      <Card className="glass-card overflow-hidden border-white/10 shadow-2xl relative z-10 w-full max-w-md mx-auto">
        <CardContent className="p-8">
          <form className="space-y-6">
            <div className="flex flex-col items-center gap-2 text-center mb-4">
              <h1 className="text-3xl font-bold text-white">Create Account</h1>
              <p className="text-gray-400 text-sm">
                Join the platform designed for your success
              </p>
            </div>

            <FieldGroup className="space-y-4">
              <Field>
                <FieldLabel className="text-gray-300">Full Name</FieldLabel>
                <div className="grid grid-cols-2 gap-4">
                  <Input id='fname' type='text' placeholder='First name' required className="bg-white/5 border-white/10 text-white placeholder:text-gray-500 focus:ring-primary" />
                  <Input id='lname' type='text' placeholder='Last name' required className="bg-white/5 border-white/10 text-white placeholder:text-gray-500 focus:ring-primary" />
                </div>
              </Field>

              <Field>
                <FieldLabel className="text-gray-300">College</FieldLabel>
                <Select>
                  <SelectTrigger className="bg-white/5 border-white/10 text-white focus:ring-primary">
                    <SelectValue placeholder="Select your college" />
                  </SelectTrigger>
                  <SelectContent className="bg-[#111827] border-white/10 text-white">
                    <SelectGroup>
                      <SelectLabel className="text-gray-400">Pune</SelectLabel>
                      <SelectItem value="PVG" className="focus:bg-white/10 focus:text-white cursor-pointer">PVG</SelectItem>
                      <SelectItem value="PICT" className="focus:bg-white/10 focus:text-white cursor-pointer">PICT</SelectItem>
                      <SelectItem value="COEP" className="focus:bg-white/10 focus:text-white cursor-pointer">COEP</SelectItem>
                      <SelectItem value="MIT" className="focus:bg-white/10 focus:text-white cursor-pointer">MIT</SelectItem>
                      <SelectItem value="DYP" className="focus:bg-white/10 focus:text-white cursor-pointer">DY Patil</SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </Field>

              <Field>
                <FieldLabel htmlFor="email" className="text-gray-300">Email Address</FieldLabel>
                <Input
                  id="email"
                  type="email"
                  placeholder="m@example.com"
                  required
                  className="bg-white/5 border-white/10 text-white placeholder:text-gray-500 focus:ring-primary"
                />
                <p className="text-[10px] text-gray-500 mt-1">
                  Use your college registered email ID
                </p>
              </Field>

              <Field>
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <FieldLabel htmlFor="password" className="text-gray-300">Password</FieldLabel>
                    <Input id="password" type="password" required className="bg-white/5 border-white/10 text-white focus:ring-primary" />
                  </div>
                  <div className="space-y-2">
                    <FieldLabel htmlFor="confirm-password" className="text-gray-300">Confirm</FieldLabel>
                    <Input id="confirm-password" type="password" required className="bg-white/5 border-white/10 text-white focus:ring-primary" />
                  </div>
                </div>
              </Field>

              <Field className="pt-2">
                <Button className="w-full bg-primary hover:bg-primary/90 text-white h-11 font-medium shadow-lg shadow-primary/25 transition-all active:scale-[0.98]" type="submit">
                  Create Account
                </Button>
              </Field>

              <div className="text-center text-sm pt-2">
                <span className="text-gray-400">Already have an account? </span>
                <Link href="/login" className="text-primary hover:text-primary/80 font-medium transition-colors">
                  Sign in
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
