import { API_ROUTES } from "@/constants"
import { LoginSchemaType } from "@/schemas"
import { apiFetcher } from "@/utils/apiFetcher"

export const postLogin = (payload: LoginSchemaType) => {
  return apiFetcher(API_ROUTES.AUTH.LOGIN, { method: "POST", body: JSON.stringify(payload) })
}
