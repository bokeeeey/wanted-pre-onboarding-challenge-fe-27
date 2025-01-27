import { useMutation, UseMutationOptions } from "@tanstack/react-query"
import { ResponseAuthType } from "@/types"
import { ACCESS_TOKEN } from "@/constants"

export const useAuthMutation = <TData extends ResponseAuthType, TError extends Error, TVariables>(
  options: UseMutationOptions<TData, TError, TVariables>,
) => {
  return useMutation({
    onSuccess: (response) => {
      localStorage.setItem(ACCESS_TOKEN, response.token)
    },
    ...options,
  })
}
