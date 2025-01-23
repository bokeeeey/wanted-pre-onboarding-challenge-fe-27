import LoginForm from "@/components/login-form"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function Auth() {
  return (
    <div className="flex min-h-svh w-full items-center justify-center p-6 md:p-10">
      <div className="w-full max-w-sm">
        <Tabs defaultValue="login">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="login">로그인</TabsTrigger>
            <TabsTrigger value="sign-up">회원가입</TabsTrigger>
          </TabsList>
          <TabsContent value="login">
            <LoginForm variant="login" />
          </TabsContent>
          <TabsContent value="sign-up">
            <LoginForm variant="sign-up" />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
