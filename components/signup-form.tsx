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
    <div className={cn("flex flex-col gap-6 ", className)} {...props}>
      <Card className="bg-[#111827] overflow-hidden p-0">
        <CardContent className="grid p-0 md:grid-cols-2">
          <form className="p-6 md:p-8">
            <FieldGroup>
              <div className="flex flex-col items-center gap-2 text-center">
                <h1 className="text-2xl text-[#e5e7eb] font-bold">Create your account</h1>
                <p className="text-muted-foreground text-sm text-[#e5e7eb] text-balance">
                  Enter your details below to create your account
                </p>
              </div>
              <Field >
                <FieldLabel className="color-[#e5e7eb]">Enter name</FieldLabel>
                <Field className="grid grid-cols-2 gap-4">
                  <Input id='fname' type='text' placeholder='First name' required/>
                  <Input id='lname' type='text' placeholder='Last name' required/>
                </Field>
                
              </Field>
              <Field>
                <FieldLabel>Select college</FieldLabel>
                <Select>
                  <SelectTrigger>
        <SelectValue placeholder="Select your college" />
      </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                     <SelectLabel>Pune</SelectLabel>
          <SelectItem value="PVG">PVG</SelectItem>
          <SelectItem value="PICT">PICT</SelectItem>
          <SelectItem value="COEP">COEP</SelectItem>
          <SelectItem value="MIT">MIT</SelectItem>
          <SelectItem value="DYP">DY Patil</SelectItem>
        </SelectGroup>
      </SelectContent>
                </Select>
              </Field>
              <Field>
                <FieldLabel htmlFor="email">Email</FieldLabel>
                <Input
                  id="email"
                  type="email"
                  placeholder="m@example.com"
                  required
                />
                <FieldDescription>
                  Please enter the email id given to you by college or registered with college
                </FieldDescription>
              </Field>
              <Field>
                <Field className="grid grid-cols-2 gap-4">
                  <Field>
                    <FieldLabel htmlFor="password">Password</FieldLabel>
                    <Input id="password" type="password" required />
                  </Field>
                  <Field>
                    <FieldLabel htmlFor="confirm-password">
                      Confirm Password
                    </FieldLabel>
                    <Input id="confirm-password" type="password" required />
                  </Field>
                </Field>
                <FieldDescription>
                  Must be at least 8 characters long.
                </FieldDescription>
              </Field>
              <Field>
                <Button className="bg-[#2563eb] hover:bg-[#0ea5e9]" type="submit">Create Account</Button>
              </Field>
              
              <FieldDescription className="text-center">
                Already have an account? <Link href="/login">Sign in</Link>
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
