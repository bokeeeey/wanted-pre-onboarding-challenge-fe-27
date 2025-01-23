import { API_ROUTES } from "@/constants"
import { LoginType } from "@/schemas"
import { apiFetcher } from "@/utils/apiFetcher"

export const postLogin = (payload: LoginType) => {
  return apiFetcher(API_ROUTES.AUTH.LOGIN, { method: "POST", body: JSON.stringify(payload) })
}
