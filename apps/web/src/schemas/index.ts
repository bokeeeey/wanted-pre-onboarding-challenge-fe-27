import { z } from "zod"

export const AuthSchema = z.object({
  email: z.string().email("이메일 양식으로 입력해 주세요."),
  password: z.string().min(8, "비밀번호는 최소 8자 이상이어야 합니다."),
})
export type RequestAuthType = z.infer<typeof AuthSchema>

export const SignUpSchema = AuthSchema.extend({
  passwordConfirm: z.string().min(8, "비밀번호 확인은 최소 8자 이상이어야 합니다."),
}).superRefine((data, ctx) => {
  if (data.password !== data.passwordConfirm) {
    ctx.addIssue({
      code: "custom",
      message: "비밀번호가 일치하지 않습니다.",
      path: ["passwordConfirm"],
    })
  }
})
export type SignUpType = z.infer<typeof SignUpSchema>
