import { AuthSchema, SignUpSchema } from "@/schemas"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"

export const useAuthForm = (variant: "login" | "sign-up") => {
  const schema = variant === "login" ? AuthSchema : SignUpSchema

  const form = useForm({
    resolver: zodResolver(schema),
    defaultValues: {
      email: "",
      password: "",
      ...(variant === "sign-up" && { passwordConfirm: "" }),
    },
    mode: "onChange",
  })

  return { form }
}
