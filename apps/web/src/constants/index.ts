export const BASE_URL = "http://localhost:8080"

export const API_ROUTES = {
  AUTH: {
    LOGIN: `${BASE_URL}/users/login`,
    SIGN_UP: `${BASE_URL}/users/create`,
  },
  TODOS: {
    GET_ALL: `${BASE_URL}/todos`,
    GET_TODO: (id: string) => `${BASE_URL}/todos/${id}`,
    CREATE: `${BASE_URL}/todos`,
    UPDATE: (id: string) => `${BASE_URL}/todos/${id}`,
    DELETE: (id: string) => `${BASE_URL}/todos/${id}`,
  },
}

export const ROUTES = {
  ROOT: "/",
  SING_IN: "/sign-in",
  SIGN_UP: "/sign-up",
}
