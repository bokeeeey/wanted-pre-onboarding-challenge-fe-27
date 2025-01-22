import { useMutation, UseMutationOptions } from "@tanstack/react-query"

export const useAuthMutation = <TData, TError, TVariables>(options: UseMutationOptions<TData, TError, TVariables>) => {
  return useMutation({
    onSuccess: (response) => console.log(response),
    onError: (response) => console.log(response),
    ...options,
  })
}
