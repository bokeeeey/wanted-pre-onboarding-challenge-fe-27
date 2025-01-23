import { API_ROUTES } from "@/constants"
import { RequestAuthType } from "@/schemas"
import { apiFetcher } from "@/utils/apiFetcher"

export const postAuth = (payload: RequestAuthType, variant: "login" | "sign-up") => {
  const fetchUrl = variant === "login" ? API_ROUTES.AUTH.LOGIN : API_ROUTES.AUTH.SIGN_UP
  return apiFetcher(fetchUrl, { method: "POST", body: JSON.stringify(payload) })
}
