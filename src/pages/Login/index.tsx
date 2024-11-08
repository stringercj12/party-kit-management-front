import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export function Login() {
  return (
    <div className="h-screen w-full flex items-center justify-center">
      <Card className="w-[350px]">
        <CardHeader>
          <CardTitle>Login in project</CardTitle>
          <CardDescription>Configure your kits with one click.</CardDescription>
        </CardHeader>
        <CardContent>
          <form>
            <div className="grid w-full items-center gap-4">
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" placeholder="Seu email" />
              </div>
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="passowrd">Email</Label>
                <Input id="passowrd" type="password" placeholder="Sua senha" />
              </div>
            </div>
          </form>
        </CardContent>
        <CardFooter className="flex justify-between">
          <Button variant="link">Esqueci a senha</Button>
          <Button>Entrar</Button>
        </CardFooter>
      </Card>
    </div>
  )
}
