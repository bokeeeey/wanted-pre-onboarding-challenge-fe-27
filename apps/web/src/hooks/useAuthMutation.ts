import { useMutation, UseMutationOptions } from "@tanstack/react-query"
import { useToast } from "./use-toast"

export const useAuthMutation = <TData, TError extends Error, TVariables>(
  options: UseMutationOptions<TData, TError, TVariables>,
) => {
  const { toast } = useToast()

  return useMutation({
    onSuccess: (response) => console.log(response),
    onError: (error) => {
      toast({ variant: "destructive", description: error.message })
    },
    ...options,
  })
}
