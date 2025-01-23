import { ComponentPropsWithoutRef } from "react"
import { SubmitHandler } from "react-hook-form"
import { useAuthForm } from "@/hooks/use-auth-form"
import { useAuthMutation } from "@/hooks/use-auth-mutation"
import { useNavigate } from "react-router-dom"

import { postAuth } from "@/apis/auth"
import { cn } from "@/lib/utils"
import type { RequestAuthType } from "@/schemas"
import type { ResponseAuthType } from "@/types"
import { delay } from "@/utils/delay"
import { ROUTES } from "@/constants"

import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "./ui/form"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Loader2 } from "lucide-react"
import { toast } from "@/hooks/use-toast"

interface LoginFormProps extends ComponentPropsWithoutRef<"div"> {
  variant: "login" | "sign-up"
}

export default function LoginForm({ className, variant, ...props }: LoginFormProps) {
  const navigate = useNavigate()
  const { form: authForm } = useAuthForm(variant)
  const { isValid } = authForm.formState

  const { mutate: postAuthMutate, isPending } = useAuthMutation<ResponseAuthType, Error, RequestAuthType>({
    mutationFn: async (payload: RequestAuthType) => {
      await delay(800)
      return postAuth(payload, variant)
    },
  })

  const onSubmit: SubmitHandler<RequestAuthType> = async (payload) =>
    postAuthMutate(payload, {
      onSuccess: (response) => {
        toast({ description: response.message })
        navigate(ROUTES.ROOT)
      },
      onError: (error) => {
        toast({ variant: "destructive", description: error.message })
      },
    })

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
          <Form {...authForm}>
            <form onSubmit={authForm.handleSubmit(onSubmit)}>
              <div className="flex flex-col gap-6">
                <div className="grid gap-2">
                  <FormField
                    control={authForm.control}
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
                    control={authForm.control}
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
                      control={authForm.control}
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
                  {isPending ? (
                    <>
                      <Loader2 className="animate-spin" />
                      Please wait
                    </>
                  ) : (
                    "Login"
                  )}
                </Button>
              </div>
            </form>
          </Form>
        </CardContent>
      </Card>
    </div>
  )
}
