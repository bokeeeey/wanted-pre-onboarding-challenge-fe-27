import { ACCESS_TOKEN, API_ROUTES } from "@/constants"
import { apiFetcher } from "@/utils/api-fetcher"

const TOKEN = localStorage.getItem(ACCESS_TOKEN) || ""

export const getTodos = () => {
  return apiFetcher(API_ROUTES.TODOS.GET_ALL, {
    method: "GET",
    headers: {
      Authorization: TOKEN,
    },
  })
}
