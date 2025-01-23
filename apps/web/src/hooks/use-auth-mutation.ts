import { useMutation, UseMutationOptions } from "@tanstack/react-query"
import { ResponseAuthType } from "@/types"

export const useAuthMutation = <TData extends ResponseAuthType, TError extends Error, TVariables>(
  options: UseMutationOptions<TData, TError, TVariables>,
) => {
  return useMutation({
    onSuccess: (response) => {
      localStorage.setItem("token", response.token)
    },
    ...options,
  })
}
