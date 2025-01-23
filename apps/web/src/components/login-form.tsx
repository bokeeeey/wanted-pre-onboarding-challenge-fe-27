import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { ComponentPropsWithoutRef } from "react"
import { SubmitHandler } from "react-hook-form"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "./ui/form"
import { postLogin } from "@/apis/auth"
import { LoginType } from "@/schemas"
import { useAuthForm } from "@/hooks/useAuthForm"
import { useAuthMutation } from "@/hooks/useAuthMutation"
import { AuthType } from "@/types"

interface LoginFormProps extends ComponentPropsWithoutRef<"div"> {
  variant: "login" | "sign-up"
}

export default function LoginForm({ className, variant, ...props }: LoginFormProps) {
  const { form } = useAuthForm(variant)
  const {
    control,
    handleSubmit,
    formState: { isValid },
  } = form

  const { mutate: postAuthMutate } = useAuthMutation<AuthType, Error, LoginType>({
    mutationFn: (payload: LoginType) => postLogin(payload),
  })

  const onSubmit: SubmitHandler<LoginType> = (payload) => {
    postAuthMutate(payload)
  }

  const formTexts = {
    cardTitle: variant === "login" ? "Login" : "Sign Up",
    cardDescription:
      variant === "login"
        ? "Enter your email below to login to your account"
        : "Enter your email below to create a new account",
  }

  return (
    <div className={cn("flex flex-col gap-6", className)} {...props}>
      <Card>
        <CardHeader>
          <CardTitle className="text-2xl">{formTexts.cardTitle}</CardTitle>
          <CardDescription>{formTexts.cardDescription}</CardDescription>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="flex flex-col gap-6">
                <div className="grid gap-2">
                  <FormField
                    control={control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Email</FormLabel>
                        <FormControl>
                          <Input id="email" type="email" placeholder="이메일을 입력해 주세요." {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                <div className="grid gap-2">
                  <FormField
                    control={control}
                    name="password"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Password</FormLabel>
                        <FormControl>
                          <Input
                            id="password"
                            type="password"
                            placeholder="비밀번호는 8자 이상 입력해 주세요."
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                {variant === "sign-up" && (
                  <div className="grid gap-2">
                    <FormField
                      control={control}
                      name="passwordConfirm"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>passwordConfirm</FormLabel>
                          <FormControl>
                            <Input
                              id="passwordConfirm"
                              type="password"
                              placeholder="비밀번호를 다시 입력해 주세요."
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                )}
                <Button type="submit" className="w-full" disabled={!isValid}>
                  Login
                </Button>
              </div>
            </form>
          </Form>
        </CardContent>
      </Card>
    </div>
  )
}
